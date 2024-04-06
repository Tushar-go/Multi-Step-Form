import alienImage from "../../assets/alien2.png" 
import stars from "../../assets/stars.png"
export default function Step5() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center my-7">
      <img className="ml-12 mb-4 md:mb-0 md:mr-8" src={alienImage} alt="image" />
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="font-bold text-3xl mb-4">You're on the way !</h1>
        <img className="w-40 my-3 mx-auto md:mx-0" src={stars} alt="stars" />
        <p className="text-black">"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</p>
        <p className="mt-3">- Jacob S.</p>
      </div>
    </div>
  )
}
