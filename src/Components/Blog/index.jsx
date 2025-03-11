import React, { useState } from "react";
import Footer from "../Footer/Footer";

const blogs = [
  {
    id: 1,
    title: "Red Carpet Real Estate",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-1.jpg",
    description: "Kupondol, Lalitpur",
    fullContent:
      "The real estate market in 2025 is expected to see major shifts due to economic trends...",
    buttonType: "Sale", // Added to decide which button to show
    price: "Rs: 2,500,000", // Sale price
    rentPrice: "Rs: 15,000/month", // Rent price
  },
  {
    id: 2,
    title: "Red Flame Properties,Real Estate",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-2.jpg",
    description: "New Road, Kathmandu",
    fullContent:
      "Investing in real estate requires understanding different property types, market trends...",
    buttonType: "Rent", // Added to decide which button to show
    price: "Rs: 25,000", // Sale price (N/A because it's for rent)
    rentPrice: "Rs: 25,000", // Rent price
  },
  {
    id: 3,
    title: "The Real Estate Corner",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-7.jpg",
    description: "Thamel, Kathmandu",
    fullContent:
      "Cities like New York, Los Angeles, and Dubai are among the top choices for property buyers...",
    buttonType: "Sale", // Added to decide which button to show
    price: "Rs: 250,000", // Sale price
    rentPrice: "N/A", // Rent price (N/A because it's for sale)
  },
  {
    id: 4,
    title: "Red Carpet Real Estate",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-4.jpg",
    description: "Blue Realty",
    fullContent:
      "The real estate market in 2025 is expected to see major shifts due to economic trends...",
    buttonType: "Rent", // Added to decide which button to show
    price: "Rs: 250,000", // Sale price
    rentPrice: "Rs:30,000", // Rent price
  },
  {
    id: 5,
    title: "Birtamod Jhapa, Real Estate",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-5.jpg",
    description: "Birtamod, Jhapa",
    fullContent:
      "Investing in real estate requires understanding different property types, market trends...",
    buttonType: "Sale",
    price: "Rs: 250,000",
    rentPrice: "Rs: 25,000",
  },
  {
    id: 6,
    title: "Banyon Tree Realty",
    image: "https://real-estate-website-sepia.vercel.app/images/list/p-6.jpg",
    description: "Gairidhara, Kathmandu",
    fullContent:
      "Cities like New York, Los Angeles, and Dubai are among the top choices for property buyers...",
    buttonType: "Rent",
    price: "Rs : 30,000",
    rentPrice: "Rs : 30,000",
  },
];

const BlogPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl text-blue-950 mt-4  font-bold text-center relative mb-8 group">
          Latest Real Estate Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded shadow-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-950">{blog.title}</h2>
                <p className="text-gray-600 mt-2">
                  {expandedBlog === blog.id ? blog.fullContent : blog.description}
                </p>

                <button
                  className="px-6 py-2 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded mt-4"
                  onClick={() => setExpandedBlog(expandedBlog === blog.id ? null : blog.id)}
                >
                  {expandedBlog === blog.id ? "Read Less" : "Read More"}
                </button>

                {/* Rent and Price Buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {blog.buttonType === "Sale" && blog.price !== "N/A" && (
                    <>
                      <button className="px-4 py-2 font-semibold bg-white hover:bg-green-500 hover:text-white hover:border-0 text-green-500 border-2 rounded w-full sm:w-auto text-base">
                        For Sale
                      </button>
                      <button className="px-4 py-2 font-semibold bg-white w-full text-green-500 border-2 rounded sm:w-auto text-base hover:bg-green-500 hover:text-white hover:border-0">
                        {blog.price}
                      </button>
                    </>
                  )}

                  {blog.buttonType === "Rent" && blog.rentPrice !== "N/A" && (
                    <>
                      <button className="px-4 py-2 font-semibold bg-white text-green-500 border-2 rounded w-full sm:w-auto text-base hover:bg-green-500 hover:text-white hover:border-0">
                        For Rent
                      </button>
                      <button className="px-4 py-2 font-semibold bg-white text-green-500 border-2 rounded w-full sm:w-auto text-base hover:bg-green-500 hover:text-white hover:border-0">
                        {blog.rentPrice}
                      </button>
                    </>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Footer */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default BlogPage;
