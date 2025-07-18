import React from "react";
import feature from "/Container.png";
import { CircleCheckBig, ArrowRight } from "lucide-react";

const Features = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 pb-10 gap-12">
          <div className="w-full max-w-2xl">
        <img
          src={feature}
          alt="Features"
          className="w-full h-auto rounded-lg bg-cover pt-2"
        />
      </div>
      <div className="w-full max-w-xl">
        <h1 className="text-[28px] lg:text-[34px] font-semibold mb-4">
          Driving Innovation, Delivering Excellence
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          BitorioTech is a leading technology company dedicated to providing
          innovative solutions that solve complex business challenges. Our team
          of experts combines deep industry knowledge with cutting-edge
          technology to deliver measurable results.
        </p>

        <div className="space-y-3 mt-1">
          {[
            "Strategic partnerships for integrated solutions",
            "Customer-centric approach and tailored strategies",
            "Commitment to continuous innovation and R&D",
            "Expert team with proven track record",
            "Sustainable and scalable technology implementations",
          ].map((text, index) => (
            <p key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CircleCheckBig size={18} className="text-blue-500" />
              {text}
            </p>
          ))}
        </div>

        <button className="flex mt-6 items-center gap-2 bg-[#0093E5] hover:bg-[#007fc4] text-white px-5 py-2 rounded-md text-sm font-medium shadow">
          Learn More About Us <ArrowRight size={16} />
        </button>
      </div>

    
    </div>
  );
};

export default Features;
