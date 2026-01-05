import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="flex justify-center mb-6">
        <h1 className="text-3xl font-bold text-center">
          Map
        </h1>
      </div>

    
      <div className="max-w-[1400px] mx-auto px-6">
        <iframe
          className="w-full h-[500px] border-0"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=My%20Computer%20Shop%20(Naksha%20Printing%20&%20Photocopy%20Shop)%20Color%20&%20B/W+(My%20Computer%20Shop)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="My Computer Shop Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
