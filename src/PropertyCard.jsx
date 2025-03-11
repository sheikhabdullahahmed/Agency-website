import { useState } from 'react';

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Open the modal
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);

    // You can send the form data to an API or an email service here

    // Close the modal after submission
    handleCloseModal();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-3xl font-semibold text-gray-800">{property.name}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-gray-800 font-semibold mt-2">{property.price}</p>
        <p className="text-gray-500 mt-1">{property.type}</p>
        <p className="mt-4">{property.description}</p>
        <button
          onClick={handleOpenModal}  // Open the modal when clicked
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Contact Agent
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={handleCloseModal}  // Close the modal when clicked
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
