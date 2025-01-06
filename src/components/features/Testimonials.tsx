import React from 'react';

const testimonials = [
  {
    quote: "AI Motion has completely transformed how we create content. It's like having a full production team at our fingertips!",
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Tech Innovators Inc.'
  },
  {
    quote: "The quality of videos we can produce now is incredible. Our engagement rates have doubled since we started using AI Motion.",
    name: 'Michael Chen',
    role: 'Content Creator',
    company: 'Digital Media Co.'
  },
  {
    quote: "I was skeptical at first, but AI Motion has exceeded all my expectations. It's now an essential part of our workflow.",
    name: 'Emily Rodriguez',
    role: 'Social Media Manager',
    company: 'Creative Solutions'
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="font-space font-bold text-4xl md:text-5xl text-white mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Hear from professionals who are transforming their content creation with AI Motion
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-deep-purple-800 p-8 rounded-lg">
            <p className="text-gray-300 italic mb-6">
              "{testimonial.quote}"
            </p>
            <div className="text-white">
              <div className="font-space font-bold">{testimonial.name}</div>
              <div className="text-gray-300 text-sm">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
