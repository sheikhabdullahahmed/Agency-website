import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const properties = [
  {
    id: 1,
    name: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    price: '$1,200,000',
    image: 'https://th.bing.com/th/id/R.bcdabae82fc39270e516f7c2d044aea6?rik=dW31hUrRUzbB9Q&pid=ImgRaw&r=0',
    type: 'House',
    description: 'A stunning luxury villa with a private pool, breathtaking views, and top-notch amenities.'
  },
  {
    id: 2,
    name: 'Modern Apartment',
    location: 'New York, NY',
    price: '$800,000',
    image: 'https://static1.bigstockphoto.com/2/0/8/large1500/80202353.jpg',
    type: 'Apartment',
    description: 'A sleek and stylish apartment in the heart of NYC, featuring modern interiors and city views.'
  },
  {
    id: 3,
    name: 'Beachfront Property',
    location: 'Miami, FL',
    price: '$2,500,000',
    image: 'https://caribbeanlifestyle.com/property/wp-content/uploads/2021/07/2bd-beachhouse-naia-belize2-scaled.jpg',
    type: 'House',
    description: 'An exclusive beachfront home with direct access to the ocean, perfect for a luxurious lifestyle.'
  },
  {
    id: 4,
    name: 'Cozy Cottage',
    location: 'Aspen, CO',
    price: '$650,000',
    image: 'https://th.bing.com/th/id/R.74cabbb42d6f7c22e05d77c0f64c8fec?rik=zFRertszThl98w&pid=ImgRaw&r=0',
    type: 'Cottage',
    description: 'A charming cottage in the mountains, featuring a warm fireplace and beautiful natural surroundings.'
  },
  {
    id: 5,
    name: 'Penthouse Suite',
    location: 'Los Angeles, CA',
    price: '$3,000,000',
    image: 'https://th.bing.com/th/id/OIP.WfqSOiPfOUkerxrFxk83SAAAAA?rs=1&pid=ImgDetMain',
    type: 'Penthouse',
    description: 'A luxurious penthouse with panoramic city views, top-class facilities, and premium living space.'
  },
  {
    id: 6,
    name: 'Farmhouse Retreat',
    location: 'Nashville, TN',
    price: '$900,000',
    image: 'https://media.zameen.com/thumbnails/52562131-800x600.jpeg',
    type: 'Farmhouse',
    description: 'A peaceful farmhouse retreat with vast green fields, ideal for nature lovers and relaxation.'
  }
];
const PropertyDetailsPage = () => {
  const { id } = useParams();
  const property = properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found!</div>;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    handleCloseModal();
  };

  return (
    <div>
      <Navbar />
      <div className=" flex items-center justify-center min-h-screen container mx-auto px-4 py-8">
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="bg-white rounded shadow-lg flex flex-col lg:flex-row">
            {/* Image Left Side */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full lg:w-1/2 h-72 object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
            />

            {/* Content Right Side */}
            <div className="w-full lg:w-2/3 p-4">
              <h2 className="text-3xl font-semibold text-blue-950">{property.name}</h2>
              <p className="text-gray-600 mt-2 md:mt-2">{property.location}</p>
              <p className="text-gray-800 mt-1 font-semibold md:mt-4">{property.price}</p>
              <p className="text-gray-500 md:mt-3">{property.type}</p>
              <p className="mt-4 mb-3 md:mb-4">{property.description}</p>
              <button
                className="px-6 py-2 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded md:mt-4"
                onClick={handleOpenModal}
              >
                Contact Agent
              </button>
            </div>
          </div>

        </div>
        {isModalOpen && (
          <div className="fixed inset-0 mx-2 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-auto relative">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-between items-center">

                  <button type="submit" className="px-6 py-2            transition-all duration-300 transform hover:-translate-y-1 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded" >
                    More About us
                  </button>
                  {/* Close button */}
                  <button
                    onClick={handleCloseModal}  // Close the modal when clicked
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>

        )}
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default PropertyDetailsPage;
