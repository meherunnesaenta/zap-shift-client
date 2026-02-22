import React from 'react'
const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Rangpur and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    icon: "🚀", 
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district ensuring customers within 48-72 hours reach.",
    icon: "🇧🇩", 
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and other sales support.",
    icon: "📦",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: "💵",
  },
  {
    title: "Corporate Service / Contract in Logistics",
    description:
      "Customized corporate logistics which includes warehouse and inventory management support.",
    icon: "🏢",
  },
  {
    title: "Parcel Return & Exchange",
    description:
      "Through our reverse logistics facility we allow customers to return or exchange their products with online business merchants.",
    icon: "↩️",
  },
];

export const OurServices = () => {
  return (
    <section className="bg-secondary py-16 md:py-24 border rounded-2xl"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto text-white">
            Enjoy fast reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary bg-white backdrop-blur-sm border hover:bg-primary`}
            >
              {/* Icon */}
              <div className="text-6xl md:text-7xl mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
