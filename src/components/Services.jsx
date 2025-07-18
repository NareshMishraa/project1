import React from "react";


const services = [
  {
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.",
    icon: "../assets/service1.png",
  },
  {
    title: "App Development",
    description:
      "Custom web and mobile application development tailored to your unique business requirements and user experience.",
    icon: "../assets/service2.png",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure design, migration, and management for optimal performance and flexibility.",
    icon: "../assets/service3.png",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security strategies and implementation to protect your data and infrastructure from evolving threats.",
    icon: "../assets/service4.png",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our advanced data analytics and business intelligence services.",
    icon: "../assets/service5.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive, engaging, and visually stunning user interfaces for exceptional digital experiences.",
    icon: "../assets/service6.png",
  },
];

const Services = () => {
  return (
    <section className="bg-[#f9fcfe] pt-10 pb-15 px-6">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Core Services</h2>
        <p className="text-gray-600 text-sm md:text-base">
          From intelligent automation to secure digital experiences, we cover all your technological needs.
        </p>
      </div>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border-gray-500 hover:shadow-md transition"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-12 h-10 bg-blue-100 p-2 rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
