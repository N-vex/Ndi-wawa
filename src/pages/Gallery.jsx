import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Define images with categories
  const images = [
    { src: "/assets/gallery1.jpg", category: "celebration" },
    { src: "/assets/gallery2.jpg", category: "visitations" },
    { src: "/assets/gallery3.jpg", category: "celebration" },
    { src: "/assets/gallery4.jpg", category: "include" },
    { src: "/assets/gallery5.jpg", category: "fun" },
    { src: "/assets/gallery6.jpg", category: "celebration" },
    { src: "/assets/gallery7.jpg", category: "visitations" },
    { src: "/assets/gallery8.jpg", category: "fun" },
    { src: "/assets/gallery9.jpg", category: "include" },
    { src: "/assets/gallery10.jpg", category: "celebration" },
    { src: "/assets/gallery11.jpg", category: "fun" },
  ];

  // Filter logic
  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);
  return (
    <>
    {/* Hello and welcome to Our Gallery*/}
    <div className='flex justify-center items-center h-24 bg-black -800 text-white font-bold '>
      <h1 className='text-4xl font-bold'>HELLO! WELCOME TO WAWA COOPERATE CLUB PHOTO GALLERY</h1>
    </div>  <br /><br />

    <section className="p-6">
      {/* Category Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {[
          { label: "All categories", value: "all" },
          { label: "Celebration", value: "celebration" },
          { label: "Visitations", value: "visitations" },
          { label: "Include", value: "include" },
          { label: "Fun activities", value: "fun" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setActiveCategory(btn.value)}
            className={`px-5 py-2.5 me-3 mb-3 rounded-full text-base font-medium border transition ${
              activeCategory === btn.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={img.src}
              alt={img.category}
            />
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Gallery