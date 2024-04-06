import math from "../../assets/math.png"

export default function Step6() {
  return (
    <div className="text-center">
    <h1 className="font-bold text-4xl my-2 mb-4">
      Learning paths based on your answers
    </h1>
    <p className="text-base text-gray-500 my-3 mb-5">
      Choose one to get started. You can switch anytime.
    </p>
  
    <div className="flex flex-col justify-center items-center sm:justify-center sm:flex-row sm:gap-3 my-9"> {/* Changed to flex-col for mobile devices */}
      <div className="relative max-w-[400px] mx-auto border rounded-lg p-5 mb-6">
        <span className="absolute text-xs font-bold -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black rounded-full px-3 py-1">
          MOST POPULAR
        </span>
        <div className="flex items-start">
          <div className="pl-5 pr-2">
            <p className="font-bold">Foundational Math</p>
            <p>Build your foundational skills in algebra, geometry, and probability</p>
          </div>
          <img className="w-36 ml-auto" src={math} alt="math" />
        </div>
      </div>
      <div className="relative max-w-[400px] mx-auto border rounded-lg p-5 mb-6"> {/* Adjusted style for consistency */}
        <div className="flex items-start">
          <div className="pl-5 pr-2">
            <p className="font-bold">Mathematical Thinking</p>
            <p>Build your foundational skills in algebra, geometry, and probability</p>
          </div>
          <img className="w-36 ml-auto" src={math} alt="math" />
        </div>
      </div>
    </div>
  </div>
  )
}
