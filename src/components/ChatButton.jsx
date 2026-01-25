import React from 'react';

const ChatButton = ({ onClick, hasUnread = false }) => {
    return (
        <button
            className="fixed bottom-5 right-5 w-15 h-15 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 text-white border-0 cursor-pointer flex items-center justify-center shadow-lg shadow-indigo-600/40 hover:scale-110 hover:shadow-xl hover:shadow-indigo-600/50 active:scale-105 transition-all z-999 max-md:w-14 max-md:h-14"
            onClick={onClick}
            aria-label="Open chat"
        >
            {hasUnread && (
                <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
            )}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        </button>
    );
};

export default ChatButton;
