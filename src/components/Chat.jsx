import React, { useState, useRef, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { io } from 'socket.io-client';

const Chat = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [isAdminTyping, setIsAdminTyping] = useState(false);
    const [conversationId, setConversationId] = useState(() => {
        // Try to restore conversationId from localStorage
        const stored = localStorage.getItem('conversationId');
        if (stored) {
            return stored;
        }
        return null;
    });
    const [guestId] = useState(() => {
        const stored = localStorage.getItem('guestId');
        if (stored) return stored;
        const newGuestId = `guest_${Date.now()}`;
        localStorage.setItem('guestId', newGuestId);
        return newGuestId;
    });
    const messagesEndRef = useRef(null);
    const socket = useRef(null);
    const typingTimeoutRef = useRef(null);
    const guestTypingTimeoutRef = useRef(null);
    const adminJoinedShownRef = useRef(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize Socket.IO connection (only once)
    useEffect(() => {
        try {
            // Get backend URL from environment or default
            const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
            console.log('🔗 Connecting Socket.IO to:', backendUrl);

            socket.current = io(backendUrl, {
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: 5,
                withCredentials: true
            });

            // Restore conversation from localStorage on connection
            socket.current.on('connect', async () => {
                console.log('✅ Socket.IO connected:', socket.current.id);
                await restoreConversationFromStorage();
            });

            // Listen for incoming messages from admin
            socket.current.on('message:receive', (data) => {
                console.log('✅ Message received:', data);
                const newMessage = {
                    id: data._id,
                    text: data.message,
                    sender: data.senderType === 'admin' ? 'bot' : 'user',
                    senderName: data.senderName,
                    timestamp: new Date(data.createdAt)
                };
                setMessages(prev => {
                    // Prevent duplicates
                    if (prev.some(m => m.id === newMessage.id)) return prev;
                    return [...prev, newMessage];
                });
            });

            // Listen for admin joining the conversation
            socket.current.on('admin:joined', (data) => {
                console.log('✅ Admin joined conversation:', data);

                // Only show "Admin is online" once per conversation session
                if (adminJoinedShownRef.current) {
                    console.log('Admin joined message already shown this session, skipping');
                    return;
                }

                setMessages(prev => {
                    // Check if admin joined message already exists in message history
                    const hasAdminJoinedMsg = prev.some(m => m.text === 'Admin is now online' && m.isSystem);
                    if (hasAdminJoinedMsg) {
                        console.log('Admin joined message already exists in history, skipping');
                        return prev;
                    }

                    // Mark that we've shown the admin joined message
                    adminJoinedShownRef.current = true;

                    return [...prev, {
                        id: `system_admin_joined_${data.conversationId}`,
                        text: 'Admin is now online',
                        sender: 'bot',
                        senderName: 'System',
                        timestamp: new Date(),
                        isSystem: true
                    }];
                });
            });

            // Listen for chat ended notification
            socket.current.on('chat:ended', (data) => {
                console.log('🔴 Chat ended:', data);

                // Build a friendly message using role instead of raw ids
                const endedByRole = data.closedBy === 'admin' ? 'Admin' : 'Guest';
                const endedMessage = data.message || `Chat ended by ${endedByRole}`;

                // Add the chat ended message
                setMessages(prev => {
                    // Check if chat ended message already exists
                    const hasChatEndedMsg = prev.some(m => m.text === endedMessage && m.isSystem);
                    if (hasChatEndedMsg) {
                        console.log('Chat ended message already exists, skipping');
                        return prev;
                    }
                    return [...prev, {
                        id: `system_chat_ended_${data.conversationId}_${Date.now()}`,
                        text: endedMessage,
                        sender: 'bot',
                        senderName: 'System',
                        timestamp: new Date(),
                        isSystem: true
                    }];
                });

                // When chat ends (admin or guest), reset the conversation and show form after a brief delay
                setTimeout(() => {
                    // Reset admin joined flag
                    adminJoinedShownRef.current = false;

                    setMessages([]);
                    setConversationId(null);
                    setShowForm(true);
                    setUserName('');
                    setUserEmail('');
                    setUserPhone('');

                    // Clear localStorage
                    localStorage.removeItem('conversationId');
                    localStorage.removeItem('userName');
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem('userPhone');
                }, 2000); // Give user a moment to read the ended notice
            });

            // Listen for typing indicators
            socket.current.on('typing:display', (data) => {
                console.log('🔔 Typing indicator received:', data);
                if (data.isTyping) {
                    console.log(`✍️ ${data.userName} is typing...`);
                    setIsAdminTyping(true);

                    // Clear any existing timeout
                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }

                    // Auto-clear typing after 3 seconds of inactivity
                    typingTimeoutRef.current = setTimeout(() => {
                        console.log('⏱️ Typing timeout - clearing indicator');
                        setIsAdminTyping(false);
                    }, 3000);
                } else {
                    console.log(`✍️ Typing stopped`);
                    setIsAdminTyping(false);
                    if (typingTimeoutRef.current) {
                        clearTimeout(typingTimeoutRef.current);
                    }
                }
            });

            // Listen for guest disconnection
            socket.current.on('guest:disconnected', (data) => {
                console.log('⚠️ ' + data.message);
                setMessages(prev => {
                    // Check if disconnection message already exists
                    const hasDisconnectMsg = prev.some(m => m.text === data.message && m.isSystem);
                    if (hasDisconnectMsg) {
                        console.log('Disconnect message already exists, skipping');
                        return prev;
                    }
                    return [...prev, {
                        id: `system_disconnect_${data.conversationId}_${Date.now()}`,
                        text: data.message,
                        sender: 'bot',
                        senderName: 'System',
                        timestamp: new Date(),
                        isSystem: true
                    }];
                });
            });

            socket.current.on('error', (error) => {
                console.error('❌ Socket.IO error:', error);
            });

            socket.current.on('disconnect', (reason) => {
                console.log('🔌 Socket.IO disconnected:', reason);
            });

            return () => {
                if (socket.current) {
                    socket.current.disconnect();
                }
            };
        } catch (error) {
            console.error('Error creating Socket.IO connection:', error);
        }
    }, []);

    // Join conversation room when conversationId is available
    useEffect(() => {
        if (conversationId && isOpen && socket.current) {
            console.log('📤 Joining conversation:', conversationId);
            socket.current.emit('guest:join', {
                conversationId,
                guestId,
                guestName: userName
            });
        }
    }, [conversationId, isOpen, guestId, userName]);

    // Restore chat session on page load
    useEffect(() => {
        const storedConversationId = localStorage.getItem('conversationId');
        if (storedConversationId && isOpen) {
            console.log('📥 Restoring chat session:', storedConversationId);
            setConversationId(storedConversationId);
            setShowForm(false);
            loadMessages();
        }
    }, [isOpen]);

    const loadMessages = async () => {
        if (!conversationId) return;
        try {
            const messagesResponse = await axiosInstance.get(`/api/chat/${conversationId}/messages`);
            if (messagesResponse?.data?.messages) {
                const formattedMessages = messagesResponse.data.messages.map(msg => ({
                    id: msg._id,
                    text: msg.message,
                    sender: msg.senderType === 'admin' ? 'bot' : 'user',
                    senderName: msg.senderName,
                    timestamp: new Date(msg.createdAt)
                }));
                setMessages(formattedMessages);
                console.log('📥 Loaded messages:', formattedMessages.length);
            }
        } catch (msgError) {
            console.warn('Failed to load message history:', msgError?.message);
        }
    };

    const restoreConversationFromStorage = async () => {
        const storedConversationId = localStorage.getItem('conversationId');
        const storedUserName = localStorage.getItem('userName');
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedUserPhone = localStorage.getItem('userPhone');

        if (storedConversationId) {
            setConversationId(storedConversationId);
            setUserName(storedUserName || '');
            setUserEmail(storedUserEmail || '');
            setUserPhone(storedUserPhone || '');
            setShowForm(false);

            // Load messages
            try {
                const messagesResponse = await axiosInstance.get(`/api/chat/${storedConversationId}/messages`);
                if (messagesResponse?.data?.messages) {
                    const formattedMessages = messagesResponse.data.messages.map(msg => ({
                        id: msg._id,
                        text: msg.message,
                        sender: msg.senderType === 'admin' ? 'bot' : 'user',
                        senderName: msg.senderName,
                        timestamp: new Date(msg.createdAt)
                    }));
                    setMessages(formattedMessages);
                    console.log('📥 Restored messages:', formattedMessages.length);
                }
            } catch (msgError) {
                console.warn('Failed to load message history:', msgError?.message);
            }
        }
    };

    const handleStartChat = async (e) => {
        e.preventDefault();
        if (userName.trim() && userEmail.trim() && userPhone.trim()) {
            setIsLoading(true);
            try {
                // Start session with backend controller shape
                const response = await axiosInstance.post('/api/chat/start', {
                    name: userName,
                    email: userEmail,
                    phone: userPhone
                });

                const conv = response?.data?.conversation;
                if (conv?.conversationId) {
                    setConversationId(conv.conversationId);
                    // Persist conversation ID and user details to localStorage
                    localStorage.setItem('conversationId', conv.conversationId);
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('userEmail', userEmail);
                    localStorage.setItem('userPhone', userPhone);
                    if (conv.guestId) {
                        localStorage.setItem('guestId', conv.guestId);
                    }
                    setShowForm(false);

                    // Emit guest:join event immediately after starting chat
                    if (socket.current && socket.current.connected) {
                        console.log('📤 Joining new conversation:', conv.conversationId);
                        socket.current.emit('guest:join', {
                            conversationId: conv.conversationId,
                            guestId: conv.guestId || guestId,
                            guestName: userName
                        });
                    }

                    // Fetch existing messages for this conversation
                    try {
                        const messagesResponse = await axiosInstance.get(`/api/chat/${conv.conversationId}/messages`);
                        if (messagesResponse?.data?.messages) {
                            const formattedMessages = messagesResponse.data.messages.map(msg => ({
                                id: msg._id,
                                text: msg.message,
                                sender: msg.senderType === 'admin' ? 'bot' : 'user',
                                senderName: msg.senderName,
                                timestamp: new Date(msg.createdAt)
                            }));
                            setMessages(formattedMessages);
                            console.log('📥 Loaded existing messages:', formattedMessages.length);
                        }
                    } catch (msgError) {
                        console.warn('Failed to load message history:', msgError?.message);
                    }
                } else {
                    alert('Invalid response from server');
                }
            } catch (error) {
                console.error('Error starting chat:', error);
                alert('Failed to start chat: ' + (error?.response?.data?.message || error?.message || 'Please try again'));
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!inputMessage.trim() || !conversationId) return;

        // Stop typing indicator when sending
        if (socket.current && socket.current.connected) {
            socket.current.emit('typing:stop', { conversationId });
        }
        if (guestTypingTimeoutRef.current) {
            clearTimeout(guestTypingTimeoutRef.current);
        }

        const messageText = inputMessage;
        setInputMessage('');
        setIsLoading(true);

        try {
            // Try Socket.IO first (realtime)
            if (socket.current && socket.current.connected) {
                console.log('Sending message via Socket.IO');
                socket.current.emit('message:send', {
                    conversationId,
                    message: messageText,
                    senderType: 'guest',
                    senderId: guestId,
                    senderName: userName
                });
            } else {
                // Fallback to REST API if Socket.IO not connected
                console.log('Socket not connected, using REST API');
                await axiosInstance.post(`/api/chat/${conversationId}/message`, {
                    conversationId,
                    message: messageText,
                    senderType: 'guest',
                    senderId: guestId,
                    senderName: userName
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message: ' + (error?.response?.data?.message || error?.message || 'Unknown error'));
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);

        // Only emit typing events if socket is connected
        if (!socket.current || !socket.current.connected || !conversationId) return;

        // Clear existing timeout
        if (guestTypingTimeoutRef.current) {
            clearTimeout(guestTypingTimeoutRef.current);
        }

        // If user is typing, emit typing:start
        if (e.target.value.trim()) {
            console.log('✍️ Guest is typing...');
            socket.current.emit('typing:start', {
                conversationId,
                userName: userName
            });

            // Set timeout to emit typing:stop after 1 second of no activity
            guestTypingTimeoutRef.current = setTimeout(() => {
                console.log('⏱️ Guest stopped typing');
                socket.current.emit('typing:stop', { conversationId });
            }, 1000);
        }
    };

    const handleCloseChat = async () => {
        if (socket.current && socket.current.connected) {
            socket.current.emit('chat:end', { conversationId, closedBy: 'guest' });
        }

        // Inform REST controller to close session
        if (conversationId) {
            try {
                await axiosInstance.post(`/api/chat/${conversationId}/end`, { closedBy: 'guest' });
            } catch (e) {
                console.warn('Failed to end chat via REST:', e?.message || e);
            }
        }

        // Don't disconnect socket - keep it connected for new sessions
        // if (socket.current) {
        //     socket.current.disconnect();
        // }

        // Reset admin joined flag
        adminJoinedShownRef.current = false;

        setMessages([]);
        setConversationId(null);
        setShowForm(true);
        setUserName('');
        setUserEmail('');
        setUserPhone('');

        // Clear localStorage when chat is closed
        localStorage.removeItem('conversationId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPhone');

        onClose();
    };

    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-[90px] right-5 w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col z-[1000] animate-slideUp max-md:w-[calc(100%-40px)] max-md:h-[calc(100vh-120px)] max-md:max-h-[600px] max-sm:w-full max-sm:h-screen max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none">
            {/* Header */}
            <div className="bg-linear-to-br from-indigo-600 to-purple-600 text-white p-5 rounded-t-2xl flex justify-between items-center max-sm:rounded-none">
                <div>
                    <h3 className="text-lg font-semibold m-0">Customer Support</h3>
                    <span className="text-xs opacity-90 block mt-1">● Online</span>
                </div>
                <button
                    className="bg-white/20 border-0 text-white w-8 h-8 rounded-full cursor-pointer text-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                    onClick={handleCloseChat}
                >
                    ✕
                </button>
            </div>

            {showForm ? (
                <div className="p-8 flex-1 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Start a Conversation</h4>
                    <p className="text-sm text-gray-600 mb-6">Please provide your details to begin</p>
                    <form onSubmit={handleStartChat} className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600 transition-colors"
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone"
                            value={userPhone}
                            onChange={(e) => setUserPhone(e.target.value)}
                            required
                            className="px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-600 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-linear-to-br from-indigo-600 to-purple-600 text-white border-0 py-3.5 rounded-lg text-base font-semibold cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/40 transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Starting...' : 'Start Chat'}
                        </button>
                    </form>
                </div>
            ) : (
                <>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-5 bg-gray-50 flex flex-col gap-3">
                        {messages.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <p className="text-gray-500 text-sm">No messages yet. Start the conversation!</p>
                            </div>
                        ) : (
                            messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex animate-fadeIn ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.sender === 'user'
                                        ? 'bg-linear-to-br from-indigo-600 to-purple-600 text-white rounded-br-sm'
                                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                                        }`}>
                                        <p className="text-sm leading-relaxed m-0">{message.text}</p>
                                        <span className="block text-[11px] mt-1 opacity-70">
                                            {formatTime(message.timestamp)}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                        {isAdminTyping && (
                            <div className="flex justify-start animate-fadeIn">
                                <div className="bg-white rounded-2xl shadow-sm px-4 py-4 flex gap-1">
                                    <span className="text-sm text-gray-600 mr-2">Admin is typing</span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        {isLoading && (
                            <div className="flex justify-start animate-fadeIn">
                                <div className="bg-white rounded-2xl shadow-sm px-4 py-4 flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <div className="bg-white border-t border-gray-200 rounded-b-2xl max-sm:rounded-none">
                        <form className="p-4 flex gap-2" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={inputMessage}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-3xl text-sm focus:outline-none focus:border-indigo-600 transition-colors disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !inputMessage.trim()}
                                className="bg-linear-to-br from-indigo-600 to-purple-600 text-white border-0 w-11 h-11 rounded-full cursor-pointer flex items-center justify-center hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 10l18-8-8 18-2-8-8-2z" />
                                </svg>
                            </button>
                        </form>
                        <div className="px-4 pb-4 pt-0">
                            <button
                                onClick={handleCloseChat}
                                className="w-full px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM5.354 4.646a.5.5 0 1 1 .707.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                End Conversation
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Chat;
