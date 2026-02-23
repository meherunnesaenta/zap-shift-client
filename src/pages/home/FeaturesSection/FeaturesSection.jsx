import React from 'react';

import trackingImg from '../../../assets/live-tracking.png';            
import safeDeliveryImg from '../../../assets/safe-delivery.png';    
import supportImg from '../../../assets/safe-delivery.png';           

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: trackingImg,
    alt: "Live tracking illustration",
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeDeliveryImg,
    alt: "Safe delivery person with parcel",
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
    image: supportImg,
    alt: "Support agent on call",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 text-center 
                         shadow-lg hover:shadow-xl transition-all duration-300 
                         border border-gray-100 hover:-translate-y-2 group hover:bg-primary"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-50 
                              flex items-center justify-center group-hover:bg-blue-100 
                              transition-colors duration-300">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}