import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import LogoutButton from "./Logout/Logout";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container w-full flex flex-col lg:flex-row gap-4 lg:w-[80%] justify-between mx-auto p-4 text-gray-600 items-center">
        <div className="left">
          <ul className="flex gap-4 lg:gap-8">
            <li>
              <Link href="/">
                <i className="fa-solid fa-cart-shopping text-green-800"></i>
                Fresh Cart
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul className="flex gap-2">
            <li>
              <Link href="https://www.facebook.com/">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/">
                <i className="fab fa-tiktok"></i>
              </Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              {/* if LogoutButton returns only <button> */}
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
