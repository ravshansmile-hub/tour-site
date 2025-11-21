import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const heroImage = "https://images.unsplash.com/photo-1544986581-efac024faf62";

  const tours = [
    {
      id: 1,
      name: "Samarkand Guided Tour",
      price: "$180",
      location: "Samarkand",
      image: "https://images.unsplash.com/photo-1580130744666-c3c8b3c59a37",
      perks: ["Premium Hotel", "Transport", "Historical Sites"],
    },
    {
      id: 2,
      name: "Bukhara Cultural Tour",
      price: "$150",
      location: "Bukhara",
      image: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea",
      perks: ["Cultural Excursions", "Local Guide", "Traditional Cuisine"],
    },
    {
      id: 3,
      name: "Khiva Old City Tour",
      price: "$170",
      location: "Khiva",
      image: "https://images.unsplash.com/photo-1609163439650-3b0eab1a7146",
      perks: ["Ichan Qala Tour", "Local Guide", "Traditional Food"],
    },
    {
      id: 4,
      name: "Tashkent Modern Tour",
      price: "$130",
      location: "Tashkent",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
      perks: ["City Center Tour", "Metro Tour", "Modern Architecture"],
    },
    {
      id: 5,
      name: "Fergana Valley Tour",
      price: "$160",
      location: "Fergana",
      image: "https://images.unsplash.com/photo-1520156974238-df1f8f6d0f54",
      perks: ["Handcraft Workshop", "Local Food", "Historical Sites"],
    },
    {
      id: 6,
      name: "Shahrisabz Historical Tour",
      price: "$140",
      location: "Shahrisabz",
      image: "https://images.unsplash.com/photo-1580130744666-c3c8b3c59a37",
      perks: ["Ak-Saray Palace", "Historical Monuments", "Local Guide"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] rounded-b-[40px] overflow-hidden shadow-xl mb-16"
      >
        <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            Discover Uzbekistan in Luxury
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-xl md:text-2xl opacity-90"
          >
            Premium guided tours with comfort, culture and adventure.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl shadow-lg text-lg font-semibold"
            onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          >
            Explore Tours
          </motion.button>
        </div>
      </motion.header>

      {/* TOURS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
          >
            <img
              src={tour.image}
              className="w-full h-64 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{tour.name}</h2>
            <p className="text-gray-600 mb-1">Location: {tour.location}</p>
            <p className="text-gray-900 font-bold mb-3 text-xl">Price: {tour.price}</p>

            <ul className="text-sm mb-4 list-disc ml-5 text-gray-700">
              {tour.perks.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <button
  onClick={() =>
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdzU_lh4j5engiQmNIuzB40qAsj_8vAQsCXQVDvmYr3Ye9ofw/viewform?usp=header", "_blank")
  }
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg shadow"
>
  Book Now
</button>

          </motion.div>
        ))}
      </div>

      <footer className="text-center py-10 text-gray-600 mt-20">
        © 2025 Premium Uzbekistan Tours. All Rights Reserved.
      </footer>
    </div>
  );
}
