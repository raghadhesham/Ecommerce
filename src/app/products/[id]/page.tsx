import React from "react";
import Details from "@/app/_components/Details/Details";
import selectedProduct from "@/api/selectedProduct";

export default async function ProductDetails({params}:any) {
  let { id } =  params;
  const data = await selectedProduct(id);
  console.log(data);

  return (
    <>
      <Details data={data}/>
    </>
  );
}
