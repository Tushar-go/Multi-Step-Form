import SquareCard from "./SquareCard";
import intro from "../../assets/expressions/intro.png";
import basic from "../../assets/expressions/basic.png";
import algebra from "../../assets/expressions/In Algebra.png";
import calculus from "../../assets/expressions/calculus.png";

export default function Step4() {
  return (
    <div className="my-10">
    <h1 className="text-center font-semibold text-xl my-2 sm:text-4xl"> {/* Adjusted text size */}
      What is your math comfort level ?
    </h1>
    <p className="text-center text-gray-500 text-base my-2 mb-10 mr-7 sm:text-lg"> {/* Adjusted text size */}
      Choose the highest level you feel confident - you can always adjust later.
    </p>

    <div className="flex flex-wrap justify-center gap-2"> {/* Adjusted flex layout */}
      <SquareCard
        image={intro}
        difficulty={"Introductory"}
        topic={"Arithmetic"}
      />
      <SquareCard
        image={basic}
        difficulty={"Foundational"}
        topic={"Basic Algebra"}
      />
      <SquareCard
        image={algebra}
        difficulty={"Intermediate"}
        topic={"Intermediate Algebra"}
      />
      <SquareCard
        image={calculus}
        difficulty={"Advanced"}
        topic={"Calculus"}
      />
    </div>
  </div>
  );
}
