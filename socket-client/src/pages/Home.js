import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <div class="flex items-center justify-center">
          <main class="max-w-screen-xl px-4 lg:px-16">
            <div class="text-left">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Real-time Messaging with
                <br />
                <span class="text-indigo-600">Socket.io</span>
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Build fast, scalable real-time applications with instant updates and seamless communication using Socket.io.
                Stay connected with real-time messaging, notifications, and much more.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex justify-start">
                <div class="rounded-md shadow">
                  <Link to="/signup" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Get started
                  </Link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/messaging" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div class="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center ct_bg"></div>
      </div>
    </>
  )
}

export default Home