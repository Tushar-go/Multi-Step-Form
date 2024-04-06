import React from 'react'

export default function Card({avatar,text,spantext}) {
  return (
    <div className=" flex items-center border rounded hover:cursor-pointer p-2 my-3  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:border-yellow-200 ">
        <img
          className="rounded-full h-10 w-10 object-fill mx-1"
          src={avatar}
          alt="avatar"
        />
        <p className="ml-4 text-black font-medium">{text} <span className=" text-gray-500">{spantext}</span></p>
      </div>
  )
}
