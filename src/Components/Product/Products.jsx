import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBath, FaBed } from 'react-icons/fa'; // Importing icons from react-icons

const properties = [
  {
    id: 1,
    name: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    price: '$1,200,000',
    image: 'https://th.bing.com/th/id/R.bcdabae82fc39270e516f7c2d044aea6?rik=dW31hUrRUzbB9Q&pid=ImgRaw&r=0',
    type: 'Villa',
    rooms: 5, 
    bathrooms: 4, 
  },
  {
    id: 2,
    name: 'Modern Apartment',
    location: 'New York, NY',
    price: '$800,000',
    image: 'https://static1.bigstockphoto.com/2/0/8/large1500/80202353.jpg',
    type: 'Apartment',
    rooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    name: 'Beachfront House',
    location: 'Miami, FL',
    price: '$2,500,000',
    image: 'https://caribbeanlifestyle.com/property/wp-content/uploads/2021/07/2bd-beachhouse-naia-belize2-scaled.jpg',
    type: 'House',
    rooms: 6,
    bathrooms: 5,
  },
  {
    id: 4,
    name: 'Cozy Cottage',
    location: 'Aspen, CO',
    price: '$650,000',
    image: 'https://th.bing.com/th/id/R.74cabbb42d6f7c22e05d77c0f64c8fec?rik=zFRertszThl98w&pid=ImgRaw&r=0',
    type: 'Cottage',
    rooms: 4,
    bathrooms: 3,
  },
  {
    id: 5,
    name: 'Penthouse Suite',
    location: 'Los Angeles, CA',
    price: '$3,000,000',
    image: 'https://th.bing.com/th/id/OIP.WfqSOiPfOUkerxrFxk83SAAAAA?rs=1&pid=ImgDetMain',
    type: 'Penthouse',
    rooms: 8,
    bathrooms: 7,
  },
  {
    id: 6,
    name: 'Farmhouse Retreat',
    location: 'Nashville, TN',
    price: '$900,000',
    image: 'https://media.zameen.com/thumbnails/52562131-800x600.jpeg',
    type: 'Farmhouse',
    rooms: 5,
    bathrooms: 4,
  },
];

const PropertyListingPage = () => {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/property/${id}`);
  };

  // **Filter Logic**
  const filteredProperties = properties.filter((property) => {
    return (
      (property.name.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())) &&
      (filterType ? property.type === filterType : true)
    );
  });

  return (
    <div className="container mx-auto px-4 pt-24 md:py-28 "> {/* Increased the padding-top */}
      {/* <div className="text-center mb-10"> 
      </div> */}

      {/* Search and Filter Section */}
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

      {/* Property Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded shadow-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
                <p className="text-gray-600 text-base">{property.location}</p>
                <p className="text-gray-800 text-base font-semibold mt-2">{property.price}</p>
                <p className="text-gray-500 mt-1 mb-2">{property.type}</p>
                {/* Icons for rooms and bathrooms */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaBed className="mr-2" /> {property.rooms} Rooms
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaBath className="mr-2" /> {property.bathrooms} Bathrooms
                  </div>
                </div>
                <button className="px-6 py-2 font-semibold sm:px-7 sm:py-3 bg-green-500 text-white rounded" onClick={() => handleNavigate(property.id)}>
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyListingPage;
