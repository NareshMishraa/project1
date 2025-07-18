import React from "react";

const testimonials = [
  {
    quote:
      "BitorioTech transformed our outdated systems into a streamlined, AI-powered platform. Their team's expertise and dedication were exceptional.",
    name: "Jane Doe",
    title: "CEO, Innovate Corp.",
    avatar: "../Images/Avatar1.png",
  },
  {
    quote:
      "The mobile application developed by BitorioTech exceeded all our expectations. It's intuitive, robust, and has significantly boosted our user engagement.",
    name: "John Smith",
    title: "Product Manager, Global Ventures",
    avatar: "../Images/Avatar2.png",
  },
  {
    quote:
      "Their cloud migration service was seamless. We experienced zero downtime, and our infrastructure is now more secure and efficient than ever before.",
    name: "Emily White",
    title: "CTO, Tech Solutions Inc.",
    avatar: "../Images/Avatar3.png",
  },
  {
    quote:
      "BitorioTech's cybersecurity audit identified critical vulnerabilities, and their swift implementation of solutions saved us from potential threats. Highly recommend!",
    name: "Michael Brown",
    title: "Security Lead, SecureNet Corp.",
    avatar: "../Images/Avatar4.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#BFE2F633] py-15 px-6">

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Hear directly from the businesses we've helped transform.
        </p>
      </div>

    
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {testimonials.map(({ quote, name, title, avatar }, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="italic text-gray-700 mb-6">"{quote}"</p>
            <div className="flex items-center gap-3 border-t border-gray-500 pt-4">
              <img
                src={avatar}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{name}</p>
                <p className="text-xs text-gray-500">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

