import React from "react";
import { Mail, ChevronDown, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#14171f] text-white px-6 py-10">

      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold">BitorioTech</h2>
        <p className="text-gray-400 mt-1">Subscribe to our newsletter</p>

        <div className="mt-4 flex justify-center items-center gap-2">
          <div className="flex items-center border border-gray-600 rounded-full overflow-hidden px-3">
            <Mail size={16} className="text-gray-400" />
            <input
              type="email"
              placeholder="Input your email"
              className="bg-transparent text-white px-2 py-2 focus:outline-none text-sm "
            />
          </div>
          <button className="bg-[#0093E5] hover:bg-[#007fc4] text-white text-sm px-4 py-2 rounded-full font-medium">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-sm mb-6 text-gray-300">
        <a href="#">Pricing</a>
        <a href="#">About us</a>
        <a href="#">Features</a>
        <a href="#">Help Center</a>
        <a href="#">Contact us</a>
        <a href="#">FAQs</a>
        <a href="#">Careers</a>
      </div>

      <hr className="border-t border-gray-700 mb-4" />

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-gray-400 text-sm">
        <div className="flex items-center border border-gray-600 px-2 py-1 rounded-md">
          <span>English</span>
          <ChevronDown size={14} className="ml-1" />
        </div>

        <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>

        <div className="flex items-center gap-4">
          <Twitter size={18} className="text-blue-400 cursor-pointer" />
          <Facebook size={18} className="text-blue-500 cursor-pointer" />
          <Linkedin size={18} className="text-blue-600 cursor-pointer" />
          <Youtube size={18} className="text-red-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
