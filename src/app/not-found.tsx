import React from 'react'
import Image from 'next/image';
import errorImage from "../../public/images/404.png";
export default function Notfound() {
  return (
      
          <Image src={errorImage} alt=''/>
      
  )
}
