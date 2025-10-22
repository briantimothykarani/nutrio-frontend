import React from 'react';

const Landingpagefooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          {/* Content for first column */}
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-gray-600 text-sm">
            Nutrio is an AI-powered fitness GPT wrapper to help you stay healthy and fit.
          </p>
        </div>
        <div>
          {/* Content for second column */}
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Personalized Training Plans</li>
            <li>Nutrition Advice</li>
            <li>Workout Tracking</li>
          </ul>
        </div>
        <div>
          {/* Content for third column */}
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          {/* Content for fourth column */}
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Landingpagefooter;

