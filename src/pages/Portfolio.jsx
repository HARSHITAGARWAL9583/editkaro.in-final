import React, { useState } from "react";

const videos = [
  // Short Form
  { id: 1, title: "Product Promo Short", category: "Short Form", videoId: "hWVJucr3Il8" },
  { id: 2, title: "Instagram Reel Ad", category: "Short Form", videoId: "A3ZANxbbw-E" },

  // Long Form
  { id: 3, title: "YouTube Vlog", category: "Long Form", videoId: "5UUTue9rUF4" },
  { id: 4, title: "Documentary Clip", category: "Long Form", videoId: "KThKuR4k3FU" },

  // Gaming Videos
  { id: 5, title: "Valorant Highlights", category: "Gaming Videos", videoId: "mfBoy9PyqR8" },
  { id: 6, title: "PUBG Montage", category: "Gaming Videos", videoId: "zgZD7q1k7QY" },

  // Football Edits
  { id: 7, title: "Messi Skill Edit", category: "Football Edits", videoId: "nA8wHQvHPJU" },
  { id: 8, title: "Goal Montage", category: "Football Edits", videoId: "FMoDS2Q5e8M" },

  // Anime Videos
  { id: 9, title: "Naruto AMV", category: "Anime Videos", videoId: "g0kFdsn2RUs" },
  { id: 10, title: "Demon Slayer Edit", category: "Anime Videos", videoId: "k_CxMefC7mA" },

  // eCommerce Ads
  { id: 11, title: "Fashion Product Ad", category: "eCommerce Ads", videoId: "2fOVvc4qtcU" },
  { id: 12, title: "Gadget Promo", category: "eCommerce Ads", videoId: "eGltQS9hB50" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(videos.map((v) => v.category))];

  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <p className="text-gray-600 mb-6">
        Explore our video editing categories and sample works.
      </p>

      {/* Category Buttons */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded transition ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "border hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <div
            key={v.id}
            className="bg-white shadow hover:shadow-md rounded overflow-hidden transition"
          >
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1&mute=1&loop=1&playlist=${v.videoId}`}
                title={v.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-gray-500">{v.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
