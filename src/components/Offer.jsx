
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Offer1 from '../assets/Offer.png';
import Offer2 from '../assets/Offer2.png';
import Offer3 from '../assets/Offer3.png';
import Offer4 from '../assets/Offer4.png';

const images = [
  Offer1,
  Offer2,
  Offer3,
  Offer4,
];


const services = [
  {
    title: "AI & Machine Learning",
    content:
      "Build, train and deploy models that turn raw data into actionable insight.",
  },
  {
    title: "Cloud Computing Solutions",
    content:
      "Migrate, modernise and run securely on AWS, Azure or Google Cloud.",
  },
  {
    title: "Cybersecurity Consulting",
    content:
      "24×7 monitoring, zero‑trust architecture and compliance readiness.",
  },
  {
    title: "Data Analytics & Visualisation",
    content:
      "Interactive BI dashboards so every team answers questions in seconds.",
  },
  {
    title: "Managed IT Services",
    content:
      "Keep lights green with proactive maintenance and SLA‑backed support.",
  },
  {
    title: "Custom Software Development",
    content:
      "From PoC to production with TypeScript, React and cloud‑native stacks.",
  },
];

/* ---------------------------- accordion item ----------------------------- */
const AccordionItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b text-gray-500">
      <button
        className="w-full flex items-center justify-between py-4 text-left font-medium"
        onClick={() => setOpen(!open)}
      >
        {title}
        <svg
          className={`h-4 w-4 transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && <p className="pb-4 pr-6 text-gray-500">{content}</p>}
    </li>
  );
};

const Offer = () => {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2">
    
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            What We Offer
          </h2>

          <p className="text-gray-500 mb-8 leading-relaxed">
            At <span className="font-semibold">BitorioTech</span>, we provide a
            comprehensive suite of technology services designed to help your
            business thrive in the digital age. Our solutions are tailored to
            your specific needs.
          </p>
        
          <ul>
            {services.map(({ title, content }) => (
              <AccordionItem key={title} title={title} content={content} />
            ))}
          </ul>
        </div>
        <div>

          <div className="block md:hidden text-gray-500">
            <Carousel
              showArrows
              infiniteLoop
              autoPlay
              interval={3500}
              showStatus={false}
              showThumbs={false}
            >
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Offer ${idx + 1}`}
                  className="aspect-video w-full object-cover rounded-lg"
                />
              ))}
            </Carousel>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Offer ${idx + 1}`}
                className="aspect-square w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
