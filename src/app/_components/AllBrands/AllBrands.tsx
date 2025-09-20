import React from "react";
import getAllBrands from "@/api/AllBrands/AllBrands";

export default async function AllBrands() {
  const brands  = await getAllBrands(); // e.g. returns array of brands

  return (
    <div className="container w-[80%] mx-auto my-12">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {brands.map((brand: any) => (
          <div
            key={brand._id} // or brand.id depending on API
            className="w-[40%] p-4 border rounded-lg shadow hover:shadow-md text-center"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-52 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{brand.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
