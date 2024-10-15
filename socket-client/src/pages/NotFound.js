import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div class="my-8 mx-auto max-w-screen-lg px-4 md:px-8">
        <div class="grid gap-8 sm:grid-cols-2">
          <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <h1 class="text-4xl font-bold text-gray-900 mb-5">404 - Page Not Found</h1>
            <p class="text-gray-txt mb-5">The page you are looking for might have been removed, had its
              name changed, or is temporarily unavailable.</p>
            <Link to="/" class=" flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10">
              Go Back Home
            </Link>
          </div>
          <div class="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="thumb" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound