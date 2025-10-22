import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPagePrice: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: 'Starter',
      price: '$7.99 / month',
      features: [
        'Basic AI workout plans',
        'Access to GPT-powered nutrition advice',
        'Weekly progress tracking',
        'Community support',
      ],
      backgroundColor: 'bg-green-600',
      buttonColor: 'bg-green-700',
    },
    {
      name: 'Pro',
      price: '$19.99 / month',
      features: [
        'Personalized AI workout & meal plans',
        '24/7 GPT fitness assistant',
        'Advanced analytics and insights',
        'Priority support',
      ],
      backgroundColor: 'bg-blue-600',
      buttonColor: 'bg-blue-700',
    },
    {
      name: 'Elite',
      price: '$39.99 / month',
      features: [
        'Custom AI coaching with GPT integration',
        'One-on-one virtual trainer sessions',
        'Exclusive content and challenges',
        'Early access to new features',
      ],
      backgroundColor: 'bg-purple-600',
      buttonColor: 'bg-purple-700',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`border rounded-lg p-8 w-full sm:w-80 md:w-1/3 shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
            selectedPlan === plan.name ? 'ring-4 ring-purple-500 shadow-xl' : 'shadow-md hover:shadow-xl'
          }`}
          onClick={() => handlePlanSelect(plan.name)}
        >
          <div className={`${plan.backgroundColor} text-white p-4 rounded-t-lg text-center`}>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
          </div>
          <div className="p-6 text-center border-b text-gray-700">
            <h4 className="text-lg">{plan.price}</h4>
          </div>
          <div className="py-2 text-gray-600">
            <ul className="list-disc list-inside space-y-1">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Link
              to="/signup"
              className={`${plan.buttonColor} block w-full text-center text-white py-3 px-6 rounded-full hover:opacity-90`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPagePrice;

