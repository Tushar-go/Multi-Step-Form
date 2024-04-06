import { useState } from "react";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Loading,
  ProgressBar,
  Button,
} from "./components/index";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    if (currentStep === 5) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(currentStep + 1);
      }, 3000);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
 

  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {currentStep <= 5 && (
            <ProgressBar
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}
          {currentStep === 6 && <Step6 />}

          {currentStep <= 5 && <Button handleClick={handleContinue} />}
        </>
      )}
    </div>
  );
}

export default App;
