import React from "react";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI: Beyond Automation",
    description:
      "Explore how artificial intelligence is evolving from simple automation to complex decision-making and creative problem-solving across industries.",
    date: "October 26, 2023",
    readTime: "8 min read",
    image: "/Blog1.png",
  },
  {
    title: "Securing Your Cloud: Best Practices for Data Protection",
    description:
      "Discover essential strategies and best practices for fortifying your cloud infrastructure against modern cyber threats and ensuring data integrity.",
    date: "October 19, 2023",
    readTime: "6 min read",
    image: "/Blog2.png",
  },
  {
    title: "DevOps: Bridging the Gap Between Development and Operations",
    description:
      "Understand the principles of DevOps and how it can revolutionize your software development lifecycle for faster, more reliable deployments.",
    date: "October 12, 2023",
    readTime: "7 min read",
    image: "/Blog3.png",
  },
];

const Blog = () => {
  return (
    <section className="bg-white pt-16 pb-12 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Latest Insights from Our Blog
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Stay informed with our expert analysis on technology trends,
          innovations, and industry news.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-col flex-1 p-5">
              <div>
                <h3 className="text-md font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>

              <div className="mt-4 gap-3 border-t border-gray-500 pt-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-3 inline-block text-blue-600 text-sm hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
