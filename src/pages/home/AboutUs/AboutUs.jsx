// sections/AboutUs.jsx
import React, { useState } from 'react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('Story');

  const tabs = ['Story', 'Mission', 'Success', 'Team & Others'];

  const content = {
    Story: (
      <p className="text-gray-700 leading-relaxed text-lg">
        We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its destination on time, every time.
      </p>
    ),
    Mission: (
      <p className="text-gray-700 leading-relaxed text-lg">
        Our mission is to revolutionize parcel delivery in Bangladesh by providing the fastest, most reliable, and hassle-free service possible. We prioritize real-time tracking, zero delays, and 100% customer satisfaction — turning every shipment into a seamless experience from sender to receiver.
      </p>
    ),
    Success: (
      <p className="text-gray-700 leading-relaxed text-lg">
        From humble beginnings to serving thousands across 64 districts, our success is measured by on-time deliveries, happy customers, and zero-hassle experiences. We’ve built a network that delivers not just parcels, but peace of mind — every single time.
      </p>
    ),
    'Team & Others': (
      <p className="text-gray-700 leading-relaxed text-lg">
        Behind ZapShift is a dedicated team of logistics experts, tech innovators, and customer support heroes who work around the clock. We’re more than a courier service — we’re your reliable partner in every delivery journey. Join us as we continue to grow and serve Bangladesh better.
      </p>
    ),
  };

  return (
    <section className="py-16 mt-7 mb-16 md:py-24 bg-white rounded-3xl">
      <div className="max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap  gap-4 md:gap-8 mb-10 border-b border-gray-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-4 md:px-6 text-lg font-medium transition-all duration-300
                ${
                  activeTab === tab
                    ? 'text-secondary border-b-4 border-secondary'
                    : 'text-gray-500 hover:text-secondary'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center md:text-left">
          {content[activeTab]}
        </div>
      </div>
    </section>
  );
}