import { MessageSquare, GraduationCap } from 'lucide-react';

function LandingPageAboutUs() {
  const features = [
    {
      title: 'Peer Chat',
      description: 'Secure and anonymous chats with fellow students.',
      icon: <MessageSquare className="text-purple-600 w-12 h-12 mx-auto" />
    },
    {
      title: 'Self-Help Tools',
      description: 'Guided journaling, breathing, and resilience exercises.',
      icon: <GraduationCap className="text-blue-600 w-12 h-12 mx-auto" />
    },
    {
      title: 'Counseling Access',
      description: 'Connect with professionals via your institution.',
      icon: <MessageSquare className="text-purple-600 w-12 h-12 mx-auto" />
    }
  ];

  return (
    <div className="bg-white text-gray-800 py-20 px-6">
      <div className="flex flex-wrap justify-around gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-1/3 mb-6 shadow-lg rounded-lg p-6 text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPageAboutUs;

