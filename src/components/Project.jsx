
import React from "react";
import { ArrowRight } from "lucide-react";

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.png';
import Project6 from '../assets/Project6.png';


const projects = [
  {
    title: "Enterprise AI Integration",
    category: "Artificial Intelligence",
    image: Project1,
  },
  {
    title: "Secure Cloud Migration",
    category: "Cloud Computing",
    image: Project2,
  },
  {
    title: "Threat Detection Platform",
    category: "Cybersecurity",
    image: Project3,
  },
  {
    title: "Real‑time Sales Dashboard",
    category: "Data Analytics",
    image: Project4,
  },
  {
    title: "IoT Device Management",
    category: "Managed IT",
    image: Project5,
  },
  {
    title: "E‑commerce UX Redesign",
    category: "Software Development",
    image: Project6,
  },
];

const Project = () => {
  return (
    <section className="bg-[#eef7fd] px-6 py-10 ">
      
      <div className="text-center max-w-5xl mx-auto mb-6">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
          Our Recent Projects
        </h2>
        <p className="text-gray-600">
          Explore some of our impactful projects where we've leveraged
          technology to create significant value for our clients across various
          industries.
        </p>
      </div>

   
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, category, image }) => (
          <div
            key={title}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-30 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-xs text-gray-500 mt-1">{category}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-10 flex justify-center">
        <button className="flex items-center gap-2 bg-white hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded-md text-sm font-medium shadow">
          View All Projects <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default Project;
