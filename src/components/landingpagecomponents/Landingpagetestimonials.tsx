function LandingPageTestimonials() {
  const testimonials = [
    {
      name: "Paul",
      message: "Very good website.",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Mary",
      message: "Hi, I'm Paula Wairimu from Maryland your website helped me track my calories and reach my fitness goal.",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Mitchelle",
      message: "I like your website can you add a feature where you can track your water intake",
      avatar: "https://via.placeholder.com/150"
    },
    {
      name: "Juan Pedro",
      message: "Please make an app fo this.",
      avatar: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="flex flex-wrap justify-around p-8 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-full sm:w-80 md:w-1/3 mb-6 shadow-lg rounded-lg p-6 text-center"
        >
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name} avatar`}
            className="mx-auto rounded-full w-24 h-24 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
          <p className="mt-2 text-gray-600">{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
}

export default LandingPageTestimonials;

