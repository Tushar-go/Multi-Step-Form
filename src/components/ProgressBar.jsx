import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export function ProgressBar({ currentStep,setCurrentStep }) {
  const progress = (currentStep / 5) * 100; // Assuming 5 steps

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 ">
      <div className="mt-4 flex justify-center items-center">
        {currentStep > 1 ? (
          <FontAwesomeIcon
            onClick={() => setCurrentStep(currentStep - 1)}
            icon={faChevronLeft}
            className="cursor-pointer mr-3"
          />
        ) : null}
        <div
          style={{
            width: '800px',
            height: '7px',
            backgroundColor: '#ccc',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: 'teal',
              borderRadius: '5px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
