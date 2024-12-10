import React, { useState } from "react";

function ImageDisplay({ location }) {
  const images = location.state?.images || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Pagination logic
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full p-6 text-white bg-gray-800">
      <h1 className="text-center font-bold text-3xl mb-6">Uploaded Images</h1>
      <div className="grid grid-cols-5 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="p-2 border">
            <img src={image.url} alt={image.name} className="w-full h-auto" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 text-white ${
              currentPage === index + 1 ? "bg-blue-600" : "bg-gray-600"
            } rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageDisplay;
