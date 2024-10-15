import React from 'react'

const Register = () => {
  return (
    <div class="font-sans antialiased bg-grey-lightest">
      <div class="w-full bg-grey-lightest pt-10">
        <div class="container mx-auto py-8">
          <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div class="py-4 px-8 text-black text-xl border-b border-t border-grey-lighter">Register for a free account</div>
            <div class="py-4 px-8">
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">User Name</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="text" type="name" placeholder="Enter your name" />
              </div>
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">Email Address</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" />
              </div>
              <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
                <p class="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div class="flex items-center justify-between mt-8">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <p class="text-center my-4">
            <a href="/" class="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register