import React from 'react'
import getAllCategories from '@/api/AllCategories/AllCategories'
import CategorySwiper from '../CategorySwiper/CategorySwiper';
export default async function CategorySlider() {
  const categories = await getAllCategories();
  console.log(categories);
  
  return (
    <>
      <CategorySwiper categories={categories} />
    </>
  )
}
