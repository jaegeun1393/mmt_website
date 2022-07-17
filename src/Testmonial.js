import React, { useState, useEffect } from 'react';

import './App.css';

function Testmonial() {
  return (
  <div>

<section className="h-auto bg-white">
    <div className="px-10 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> The <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Number One Source</span> for<br className="lg:block hidden" /> all your design needs. </h1>
            <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24"> Say hello to the number one source for all your design needs. Drag and drop designs, edit designs, and modify the components to help tell your story. </p>
        </div>
    </div>
</section>

<section className="relative bg-white">
    <div className="pt-20">
        <div className="px-10 md:px-4 mx-auto mb-16">
            <div className="mx-auto text-left md:text-center max-w-3xl">
                <p className="flex mb-5 items-center text-indigo-500 font-semibold text-sm uppercase tracking-widest md:justify-center"> Adventure &amp; Guides </p>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold">
                    <a href="#_" className="hover:underline">The Minimalist Guide</a>
                </h2>
                <p className="text-gray-500 text-xl mb-10">In this guide you will learn what it takes to be a minimalist and how it can help you gain control of your life. Learn how to become a stress-free as a minimalist. </p>
                <div className="flex items-center md:justify-center">
                    <div className="mr-6">
                        <img className="w-12 h-12 object-cover rounded-full" src="https://cdn.devdojo.com/images/february2022/frank.png" alt="" />
                    </div>
                    <div className="flex items-start flex-col">
                        <h3 className="text-xl font-bold">
                            <a href="#_" className="hover:underline">Frank Anderson</a>
                        </h3>
                        <p className="text-sm text-gray-500">February 15, 2021</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative" style={{height: "700px"}}>
            <img className="w-full h-full object-cover object-top" src="https://cdn.devdojo.com/images/february2022/small-things.jpeg" alt="" />
        </div>
    </div>
    <div className="pt-20">
        <div className="px-10 md:px-4 mx-auto mb-16">
            <div className="mx-auto md:text-center max-w-3xl">
                <p className="flex mb-5 items-center text-green-500 font-semibold text-sm uppercase tracking-widest md:justify-center"> Travel &amp; Journey </p>
                <h2 className="mb-6 text-4xl lg:text-5xl font-bold">
                    <a href="#_" className="hover:underline">Tranquility in Travel</a>
                </h2>
                <p className="text-gray-500 text-xl mb-10">Learn how traveling can help you find peace and tranquility in many areas of your life. Reduce stress and gain control of anxiety through travel and exploration.</p>
                <div className="flex items-center md:justify-center">
                    <div className="mr-6">
                        <img className="w-12 h-12 object-cover rounded-full" src="https://cdn.devdojo.com/images/february2022/tom.png" alt="" />
                    </div>
                    <div className="flex items-start flex-col">
                        <h3 className="text-xl font-bold">
                            <a href="#_" className="hover:underline">Tom Walters</a>
                        </h3>
                        <p className="text-sm text-gray-500">February 12, 2021</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative" style={{height: "700px"}}>
            <img className="w-full h-full object-cover" src="https://cdn.devdojo.com/images/february2022/travel.jpeg" alt="" />
        </div>
    </div>
</section>


  </div>
  )
}

export default Testmonial;
