import alienImage from "../../assets/alien.png" 



export default function Step3() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row my-7">
  <img className="mr-8 mb-4 md:mb-0 md:mr-8" src={alienImage} alt="image" />
  <div className="w-full md:w-1/3 text-center md:text-left">
    <h1 className="font-bold text-3xl mb-4">You're in the right place</h1>
    <p className="text-black">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
  </div>
</div>
  )
}
