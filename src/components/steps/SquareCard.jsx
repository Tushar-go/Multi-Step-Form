import React from 'react'

export default function SquareCard({image,topic,difficulty}) {
  return (
    <div className="flex flex-col items-center border rounded-lg p-6 w-64 h-42 hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:border-yellow-200 ">
          <img className="mb-4 pt-4 " src={image} alt="image" />
          <p className=" text-lg font-semibold">{topic}</p>
          <p className="text-xl font-semibold text-gray-500">{difficulty}</p>
        </div>
  )
}
