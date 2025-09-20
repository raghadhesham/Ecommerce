import React from 'react'

export default async function selectedProduct(id:any) {
    console.log(id)
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
      const data = await response.json();

  return data.data;
}
