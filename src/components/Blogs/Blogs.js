import React from "react";
import BlogCard from "./BlogCard";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const blogPost1 = {
    image: "/images/1.jpg",
    title: "Mukteshewar: Best Place to Invest in Real Estate",
    date: "Sep 25, 2024",
    href: "/blog-real-estate",
  };

  const blogPost2 = {
    image: "/images/blog2.jpg",
    title: "Real Estate Investment Options and ROI in the Hill Stations",
    date: "Oct 21, 2024",
    href: "/blog-real-estate1",
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12 px-6 md:px-24 bg-[#d2d2b4] min-h-screen">
      <Helmet>
        <title>Our Blogs</title>
        <meta
          name="description"
          content="Read our blogs to know more about the real estate industry, the future of smart real estate investment, and the journey of The Shubham Group."
        />
      </Helmet>

      <h1 className="w-fit mx-auto text-3xl md:text-5xl py-8 text-center">
        OUR BLOGS
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        <BlogCard
          image={blogPost1.image}
          title={blogPost1.title}
          date={blogPost1.date}
          href={blogPost1.href}
        />
        <BlogCard
          image={blogPost2.image}
          title={blogPost2.title}
          date={blogPost2.date}
          href={blogPost2.href}
        />
      </div>
    </div>
  );
};

export default Blogs;
