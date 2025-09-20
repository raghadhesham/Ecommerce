import React from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import {getProducts} from "../../../api/products.api";

export default async function AllProducts() {
      const products = await getProducts();
    
  return (
      <>
          <div className="container w-[80%] mx-auto my-12">
                  <div className="flex flex-wrap">
                    {products.map((currentProduct: any) => (
                      <SingleProduct key={currentProduct._id} product={currentProduct}/>
                    ))}
                  </div>
                </div>
      </>
  )
}
