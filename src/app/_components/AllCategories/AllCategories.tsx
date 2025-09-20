import React from "react";
import getAllCategories from "@/api/AllCategories/AllCategories";

export default async function AllCategories() {
  // If getAllCategories() returns {data: [...]}, destructure accordingly
  const categories = await getAllCategories(); // e.g. returns array of categories

  return (
    <div className="container w-[80%] mx-auto my-12">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {categories.map((cat: any) => (
          <div
            key={cat._id} // or cat.id depending on API
            className="w-[40%] p-4 border rounded-lg shadow hover:shadow-md text-center"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-52 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold">{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
