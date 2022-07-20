import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import BlogContent from "./BlogContent";

function BlogContents() {
  return (
    <div>
      <section className="w-full bg-white">
        <div className="max-w-5xl px-10 py-10 mx-auto xl:px-0">
          <ul className="flex flex-wrap -mx-2 overflow-hidden">
            <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <Link to={`/post/11`}>
                <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                  <img
                    src="https://cdn.devdojo.com/images/may2021/tails-blog-1.jpg"
                    className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="relative z-20 p-5 text-left">
                    <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                      <span className="absolute inset-0 transform -skew-x-6 bg-indigo-500"></span>
                      <span className="relative">Lifestyle</span>
                    </span>
                    <h2 className="my-2 font-serif text-xl font-semibold text-white">
                      The Most Popular Places to Visit in the World
                    </h2>
                    <span className="inline-block font-sans text-xs text-white">
                      Top Places
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <Link to={`/post/12`}>
                <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                  <img
                    src="https://cdn.devdojo.com/images/may2021/tails-blog-2.jpg"
                    className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                  />

                  <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="relative z-20 p-5 text-left">
                    <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                      <span className="absolute inset-0 transform -skew-x-6 bg-red-500"></span>
                      <span className="relative">Health</span>
                    </span>
                    <h2 className="my-2 font-serif text-xl font-semibold text-white">
                      Does Exercise Help with your Productivity
                    </h2>
                    <span className="inline-block font-sans text-xs text-white">
                      Health Chat
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <Link to={`/post/13`}>
                <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                  <img
                    src="https://cdn.devdojo.com/images/may2021/tails-blog-3.jpg"
                    className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="relative z-20 p-5 text-left">
                    <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                      <span className="absolute inset-0 transform -skew-x-6 bg-yellow-500"></span>
                      <span className="relative">Gaming</span>
                    </span>
                    <h2 className="my-2 font-serif text-xl font-semibold text-white">
                      Can Playing Video Games Help Reduce Stress?
                    </h2>
                    <span className="inline-block font-sans text-xs text-white">
                      Game Play
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <BlogContent />
    </div>
  );
}

export default BlogContents;
