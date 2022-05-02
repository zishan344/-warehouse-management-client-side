import React from "react";
import {
  AiFillLinkedin,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const today = new Date();
  return (
    <footer class="bg-gray-100">
      <div class="container mx-auto grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Company
          </h2>
          <ul class="text-gray-800">
            <li class="mb-4">
              <a href="#" class=" hover:underline">
                About
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Careers
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Brand Center
              </a>
            </li>
            <li class="mb-4">
              <Link to="/blog" class="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Help center
          </h2>
          <ul class="text-gray-800">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Discord Server
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Twitter
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Facebook
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">
            Legal
          </h2>
          <ul class="text-gray-800">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Licensing
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">
            PRODUCT
          </h2>
          <ul class="text-gray-800">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Our Products
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Great Deals
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Analytics
              </a>
            </li>
            <li class="mb-4">
              <Link to="/blog" class="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-6 px-4 bg-gray-100 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-800 sm:text-center">
          © {today.getFullYear()}{" "}
          <a href="https://flowbite.com">Furniture warehouse</a>. All Rights
          Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="#" class="text-gray-800 hover:text-orange-500">
            <AiFillLinkedin />
          </a>
          <a href="#" class="text-gray-800 hover:text-orange-500">
            <AiOutlineDribbble />
          </a>
          <a href="#" class="text-gray-800 hover:text-orange-500">
            <AiOutlineTwitter />
          </a>
          <a href="#" class="text-gray-800 hover:text-orange-500">
            <BsFacebook />
          </a>
          <a href="#" class="text-gray-800 hover:text-orange-500">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
