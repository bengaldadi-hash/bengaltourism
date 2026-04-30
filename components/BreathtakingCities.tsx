import React from "react";

const BreathtakingCities: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore the World’s <br className="hidden md:block"/> Most Beautiful Cities
          </h1>

          <p className="text-gray-600 max-w-lg mb-10">
            Discover breathtaking destinations, rich cultures, and unforgettable
            experiences curated specially for passionate travelers.
          </p>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach"
              className="rounded-2xl object-cover h-64 w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada"
              alt="City"
              className="rounded-2xl object-cover h-64 w-full"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="City View"
            className="rounded-3xl object-cover w-full h-[520px]"
          />

     {/* Watch Video Button */}
<div className="hidden md:flex absolute top-10 -left-15 bg-white rounded-full shadow-lg items-center gap-4 px-6 py-4 cursor-pointer hover:shadow-xl transition">
  <span className="font-semibold text-gray-800">
    Watch Video
  </span>
  <div className="w-12 h-12 rounded-full bg-[#EA3323] flex items-center justify-center text-white text-xl">
    ▶
  </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default BreathtakingCities;
