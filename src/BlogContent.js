import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role: "",
    };
  }

  render() {
    return (
      <div>
        <section className="bg-white">
          <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
            <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <Link to={`/post/1`}>
                  <a
                    href="#_"
                    className="block overflow-hidden group rounded-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80"
                      className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Seeking Adventure
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    Seek out adventure and live a life that others envy. You
                    only get one chance to reach for the sky. Explore, discover,
                    and seek out adventure.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="relative">
                <Link to={`/post/2`}>
                  <a
                    href="#_"
                    className="block overflow-hidden group rounded-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1577095972574-2fbdcf60c8ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80"
                      className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                      alt=""
                    />
                  </a>
                </Link>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Explore the deep
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    The massive deep blue is worth exploring at least one time
                    in your life. It is full of excitement and mystery. Go out
                    and explore the deep.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1462651567147-aa679fd1cfaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;h=1700&amp;q=80"
                    className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110"
                    alt=""
                  />
                </a>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Find Your Roots
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    Make sure to stay-grounded to your roots, but it's also
                    important to understand that you are worth the success you
                    have achieved.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110"
                    alt=""
                  />
                </a>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Inspire Greatness
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    Find others who seek out greatness and surround yourself
                    with positive and successful people. This is key to
                    inspiring greatness for others.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1530262929451-caf6b99b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    className="object-cover w-full h-64 transition-all duration-300 ease-out group-hover:scale-110"
                    alt=""
                  />
                </a>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Royalty in the Sky
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    Reach for the stars and find greatness in yourself. Royalty
                    is not in the eyes of others, rather it is in the eye of the
                    be-holder.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
              <div className="relative">
                <a href="#_" className="block overflow-hidden group rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559080463-5c7eb3a52de1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2550&amp;q=80"
                    className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                    alt=""
                  />
                </a>
                <div className="relative mt-5">
                  <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                    July 20th 2021
                  </p>
                  <a href="#" className="block mb-3 hover:underline">
                    <h2 className="text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                      Enjoy Your Life
                    </h2>
                  </a>
                  <p className="mb-4 text-gray-700">
                    Be sure to enjoy the life that you have worked so hard to
                    create. There's no point in reaching greatness if you do not
                    celebrate.
                  </p>
                  <a href="#_" className="font-medium underline">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogContent;
