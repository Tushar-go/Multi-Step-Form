import emoji1 from "../../assets/icons/chart.png"
import emoji2 from "../../assets/icons/earth.png"
import emoji3 from "../../assets/icons/algebra.png"
import emoji4 from "../../assets/icons/target.png"
import emoji5 from "../../assets/icons/eyes.png"
import Card from "../Card"



export default function Step2() {

    return (
        <div>
          <h1 className=" text-center font-semibold text-4xl my-2 ">
            Which are you most interested in ?
          </h1>
          <p className=" text-center text-gray-500 my-3 mb-10  mr-7">
            choose just one. This will help us get started but won't limit your experience
          </p>
    
          
         <Card avatar={emoji1} text={"Learning specific skills to advance my career"}  />
         <Card avatar={emoji2} text={"Exploring new topics i'm interested in "}  />
         <Card avatar={emoji3} text={"Refresh my math foundations"} />
         <Card avatar={emoji4} text={"Exercising my brain to stay sharp"}  />
         <Card avatar={emoji5} text={"Something else"}  />
        
         
        </div>
      );
}
