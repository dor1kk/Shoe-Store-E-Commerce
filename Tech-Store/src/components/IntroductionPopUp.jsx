import React, { useState } from 'react';

const IntroductionPopup = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-center shadow-lg max-w-sm w-full">
        {currentStep === 0 && (
          <div>
            <h3 className="text-xl mb-4">Welcome to the Tech Store!</h3>
            <p>🎉 We are excited to have you! 🎉</p>
            <p>Let's get you started with a quick tour.</p>
            <button onClick={handleNextStep} className="bg-coral-red text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600">
              Continue
            </button>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <h3 className="text-xl mb-4">Explore Our Categories</h3>
            <p>📚 We have a wide range of tech products for you. Browse through our categories to find what you need.</p>
            <button onClick={handleNextStep} className="bg-coral-red text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600">
              Continue
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h3 className="text-xl mb-4">Get Exclusive Deals</h3>
            <p>💰 Don't miss out on our exclusive deals and discounts! Keep an eye on our promotions section.</p>
            <button onClick={handleNextStep} className="bg-coral-red text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroductionPopup;
