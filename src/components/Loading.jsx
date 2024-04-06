import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <div className="spinner"></div>
  <h1 className=' text-2xl text-gray-800 font-bold mt-5 w-[78%] text-center '>Find learning path recommedations for you based on your responses</h1>
</div>
  )
}
