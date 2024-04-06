import React from "react";
import avatar1 from "../../assets/avatars/first.jpg";
import avatar2 from "../../assets/avatars/second.jpg";
import avatar3 from "../../assets/avatars/third.jpg";
import avatar4 from "../../assets/avatars/four.jpg";
import avatar5 from "../../assets/avatars/five.jpg";
import avatar6 from "../../assets/avatars/six.jpg";
import Card from "../Card";




export default function Step1() {


  return (
    <div>
      <h1 className=" text-center font-semibold text-4xl my-2 ">
        Which describes you best ?
      </h1>
      <p className=" text-center text-gray-500 my-3 mb-5  mr-7">
        This will help us personalize your experience.
      </p>

      
     <Card avatar={avatar1} text={"Student"} spantext={"or soon to be enrolled"} />
     <Card avatar={avatar2} text={"Professional"} spantext={"pursuing a career"} />
     <Card avatar={avatar3} text={"Parent"} spantext={"of a school-age child"} />
     <Card avatar={avatar4} text={"Lifelong learner"}  />
     <Card avatar={avatar5} text={"Teacher"}  />
     <Card avatar={avatar6} text={"Other"}  />
     
    </div>
  );
}
