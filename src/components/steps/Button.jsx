import React from 'react'

export default function Button({handleClick}) {
  return (
    <div className=" text-center">
        <button
        onClick={handleClick}
          type="button"
          className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Continue
        </button>
      </div>
  )
}
