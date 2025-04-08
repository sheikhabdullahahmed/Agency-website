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
    title: "Red Flame Properties",
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
// const filteredProperties = blogs.filter((property) => {
//   return (
//     (property.name.toLowerCase().includes(search.toLowerCase()) ||
//       property.location.toLowerCase().includes(search.toLowerCase())) &&
//     (filterType ? property.type === filterType : true)
//   );
// });


const BlogPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  

  return (
    <div className="flex flex-col min-h-screen">
            <div className="flex flex-col md:flex-row gap-6 mb-10"> {/* Increased gap between search and filter */}
        <input
          type="text"
          placeholder="Search by name or location"
          className="w-full px-4 py-3 border  border-gray-300 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Cottage">Cottage</option>
          <option value="Villa">Villa</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Farmhouse">Farmhouse</option>
        </select>
      </div>
  <div className="container mx-auto px-4 py-12 flex-grow"> {/* Increased padding-top to 12 for better space */}
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded shadow-lg overflow-hidden flex flex-col"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-950">
              {blog.title}
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {expandedBlog === blog.id ? blog.fullContent : blog.description}
            </p>

            <button
              className="mt-4 px-4 py-2 font-semibold bg-green-500 hover:text-white hover:border-0 text-white border-2 rounded w-full text-sm sm:text-base"
              onClick={() =>
                setExpandedBlog(expandedBlog === blog.id ? null : blog.id)
              }
            >
              {expandedBlog === blog.id ? "Read Less" : "Read More"}
            </button>

            {/* Rent and Price Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3">
              {blog.buttonType === "Sale" && blog.price !== "N/A" && (
                <>
                  <button className="px-4 py-2 font-semibold bg-white hover:bg-green-500 hover:text-white hover:border-0 text-green-500 border-2 rounded w-full sm:w-auto text-sm sm:text-base">
                    For Sale
                  </button>
                  <button className="px-4 py-2 font-semibold bg-white text-green-500 border-2 rounded w-full sm:w-auto text-sm sm:text-base hover:bg-green-500 hover:text-white hover:border-0">
                    {blog.price}
                  </button>
                </>
              )}

              {blog.buttonType === "Rent" && blog.rentPrice !== "N/A" && (
                <>
                  <button className="px-4 py-2 font-semibold bg-white text-green-500 border-2 rounded w-full sm:w-auto text-sm sm:text-base hover:bg-green-500 hover:text-white hover:border-0">
                    For Rent
                  </button>
                  <button className="px-4 py-2 font-semibold bg-white text-green-500 border-2 rounded w-full sm:w-auto text-sm sm:text-base hover:bg-green-500 hover:text-white hover:border-0">
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