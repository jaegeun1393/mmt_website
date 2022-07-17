import React, { useState, useEffect } from 'react';

import './App.css';
import BlogContent from './BlogContent';

function Home() {
  return (
  <div>

<section className="w-full py-20 bg-white">
    <div className="flex flex-col items-center px-12 mx-auto max-w-7xl lg:flex-row">
        <div className="relative z-20 flex flex-col items-start justify-center w-full h-full lg:w-5/12">
            <p className="pb-5 text-sm font-medium tracking-wide text-pink-500 uppercase">crafted with Love 🥰</p>
            <h1 className="text-5xl font-bold xl:text-6xl pb-7 ">The Ultimate <br />Design Collection</h1>
            <p className="text-lg text-gray-500 pb-7">We've handcrafted the ultimate design collection that we think you are going to love. Each template and design has been built with clean and functional TailwindCSS Awesomeness.</p>
            <div className="flex flex-col items-center w-full sm:w-auto sm:flex-row sm:space-x-10">
                <a href="#_" className="px-7 sm:w-auto justify-center w-full flex items-center overflow-hidden group relative py-3.5 text-xl font-medium text-white bg-gray-900 rounded-full">
                    <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-pink-500 group-hover:h-full"></span>
                    <span className="relative">Get Started</span>
                </a>
                <a href="#_" className="flex items-center mt-10 text-xl font-medium underline transition duration-150 ease-out hover:text-pink-500 sm:mt-0">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    <span>Learn More</span>
                </a>
            </div>
        </div>

        <div className="relative z-10 w-full h-full my-16 lg:my-0 lg:w-7/12">
            <img className="relative z-40 w-full h-full" src="https://cdn.devdojo.com/images/june2021/home-hero.png" />
            <div className="box-content absolute inset-0 z-30 hidden scale-150 translate-x-40 translate-y-10 rounded-full w-80 lg:block h-80 xl:w-96 xl:h-96 bg-pink-50"></div>
            <div className="absolute bottom-0 left-0 z-20 hidden -translate-x-3 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-yellow-50"></div>
            <div className="absolute top-0 left-0 z-20 hidden -translate-x-12 -translate-y-12 rounded-full opacity-50 w-72 lg:block h-72 bg-blue-50"></div>
        </div>
    </div>
</section>


<section className="bg-white py-16 tails-selected-element tails-hover">
    <div className="mx-auto w-full px-10 sm:text-center text-black box-border">
        <h3 className="mb-1 font-sans text-xl font-black uppercase text-gray-500">
            award winning projects
        </h3>
        <h2 className="font-sans text-5xl sm:text-6xl font-black text-black uppercase">
            Recent work
        </h2>
    </div>
</section>

<section className="relative w-full py-12 overflow-hidden bg-white md:py-20 xl:pt-32 xl:pb-40">
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Features</h2>
        <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome features we provide.</p>

        <div className="flex w-full h-full">

            <div className="w-full lg:w-2/3">

                <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-indigo-500 fill-current" viewBox="0 0 20 20"><polygon points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon><path d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path><path d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path><path d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Awesome Dashboard</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">PREMIUM FEATURE</p>
                                <p className="mb-2 text-gray-600">You can get a quick snapshot of all your analytics on your beautiful dashboard.</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-purple-500 fill-current" viewBox="0 0 20 20"><path d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path><path d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Rad Tools</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">NEW FEATURE</p>
                                <p className="mb-2 text-gray-600">We've got some pretty rad tools to help you take on the world.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full mb-5 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-blue-400 fill-current" viewBox="0 0 20 20"><path d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path><path d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path><path d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path><path d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Easy Collaboration</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">FREE FEATURE</p>
                                <p className="mb-2 text-gray-600">Collaborating with members of your team couldn't be easier.</p>
                            </div>

                        </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                            <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                                <div className="flex items-center -mt-1">
                                    <svg className="w-8 h-8 text-green-500 fill-current" viewBox="0 0 20 20"><path d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"></path></svg>
                                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Automated Workflow</h3>
                                </div>
                                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">PREMIUM FEATURE</p>
                                <p className="mb-2 text-gray-600">Our automation tools will help you build and grow your marketing empire.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="hidden w-1/3 lg:block">
                <div className="absolute w-full max-w-4xl pl-12 -mt-20 xl:-mt-32">
                    <div className="absolute top-0 left-0 w-full h-full mt-2 ml-10 bg-gray-900 rounded-2xl"></div>
                    <div className="relative overflow-hidden border-2 border-black rounded-2xl">
                        <img src="https://cdn.devdojo.com/images/february2021/task-dashboard.png" className="object-cover w-full h-full transform" />
                    </div>
                </div>
            </div>

        </div>
    </div>

</section>

<section className="w-full bg-white">
    <div className="flex flex-col px-12 py-20 mx-auto max-w-7xl lg:flex-row">

        <div className="relative w-full mb-10 lg:text-left sm:text-center lg:w-1/2 xl:w-7/12 lg:mb-0">
            <p className="text-sm font-semibold tracking-wide uppercase">What Is tails?</p>
            <h2 className="text-5xl font-bold sm:text-6xl mt-7">Design blocks <br className="hidden lg:block" /> done right.</h2>
            <p className="text-gray-600 lg:max-w-sm mt-9">Tails is a drag'n drop tailwindcss page creator that will help you design the page of your dreams</p>
            <ul className="relative max-w-md mx-auto lg:mx-0">
                <li className="flex pl-6 mt-5">
                    <svg className="absolute left-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-sm text-gray-600"><span className="font-bold text-gray-900">Hand-crafted</span> designs that are easy to modify and change to fit into any new or existing project. 100% satisfaction is guaranteed!</span>
                </li>
                <li className="flex pl-6 mt-5">
                    <svg className="absolute left-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    <span className="text-sm text-gray-600"><span className="font-bold text-gray-900">Clean HTML</span> with perfect indentation, comments, and structure. Easily modify any element to fit your needs.</span>
                </li>
            </ul>
            <a href="#_" className="inline-block px-5 py-3 mt-8 text-sm text-white bg-gray-900 rounded-md hover:bg-gray-800">
                <span className="font-medium">Get Started</span> - <span className="font-light">it's free</span>
            </a>
        </div>

        <div className="relative flex flex-col items-center justify-center flex-shrink-0 w-full max-w-2xl py-16 mx-auto bg-gray-200 rounded-lg lg:w-1/2 lg:mx-0 xl:w-5/12">
            <h3 className="text-2xl font-bold text-gray-500 ">Intuitive User Flow</h3>
            <div className="w-1 h-6 my-3 bg-gray-300 rounded-full"></div>
            <div className="w-64 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between w-full p-6 space-x-6">
                    <img className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full" src="https://cdn.devdojo.com/images/july2021/john-doe.jpg" alt="" />
                    <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                            <h3 className="flex-shrink-0 text-sm font-medium text-gray-400">John Smith</h3>
                            <span className="inline-block w-full h-2 bg-gray-100 rounded-full"></span>
                        </div>
                        <div className="h-3 mt-3 text-gray-500 bg-gray-100 rounded-lg"></div>
                    </div>

                </div>
            </div>
            <div className="w-1 h-6 mt-3 bg-gray-300 rounded-full"></div>
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
            <div className="relative flex justify-between w-32 mb-3">
                <div className="w-1 h-6 -mt-1 bg-gray-300 rounded-full"></div>
                <div className="w-1 h-6 -mt-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex justify-between w-full max-w-md px-20">
                <div className="right-0 flex flex-col items-center justify-center w-32 p-4 text-gray-500 bg-white rounded-lg shadow">
                    <svg className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                    <h4 className="text-xs font-medium tracking-wider uppercase">Action 1</h4>
                    <p className="text-xs text-center text-gray-400">Clicks Start</p>
                </div>
                <div className="right-0 flex flex-col items-center justify-center w-32 p-4 text-gray-500 bg-white rounded-lg shadow">
                    <svg className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    <h4 className="text-xs font-medium tracking-wider uppercase">Action 2</h4>
                    <p className="text-xs text-center text-gray-400">Begins Chat</p>
                </div>
            </div>
        </div>

    </div>
</section>

<BlogContent />

  </div>
  )
}

export default Home;
