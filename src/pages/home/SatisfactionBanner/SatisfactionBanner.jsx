// sections/SatisfactionBanner.jsx
import React from 'react';

import heroBg from '../../../assets/location-merchant.png';      
import parcelIllustration from '../../../assets/be-a-merchant-bg.png'; 

export default function SatisfactionBanner() {
    return (
        <section className="relative bg-gradient-to-br from-[#0d3b4c] to-[#0a2f3e] text-white overflow-hidden rounded-3xl mx-4 md:mx-8 lg:mx-12 my-8 shadow-2xl">
            {/* Subtle background overlay for depth */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img
                    src={heroBg}
                    alt="background overlay"
                    className="w-full h-full object-cover bg-cover bg-right"
                />
            </div>
            <div className="relative w-full max-w-md lg:max-w-xl z-10 transform lg:scale-110 lg:-mr-8">
                <img
                    src={parcelIllustration}
                    alt="Stacked parcels with location pin - ZapShift Delivery"
                    className="w-full h-full bg-top drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">


                {/* Text Content - Left Side */}
                <div className="max-w-2xl text-center lg:text-left z-10">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl  font-extrabold leading-tight mb-6 tracking-tight">
                        Merchant & Customer Satisfaction
                        <span className="block text-primary mt-2">Our #1 Priority</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed max-w-prose mx-auto lg:mx-0">
                        Lowest delivery charges with maximum value +{" "}
                        <span className="font-semibold text-white">100% product safety</span>.
                        ZapShift delivers your parcels to every corner of Bangladesh — always on time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                        <button
                            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary
                         text-white font-bold py-4 px-10 rounded-full shadow-lg 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
                        >
                            Become a Merchant
                        </button>

                        <button
                            className="border-2 border-primary text-primary hover:bg-secondary hover:border-secondary
                         font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg backdrop-blur-sm"
                        >
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>

               

            </div>


        </section>
    );
}