
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "LegalPrecedent AI has revolutionized how our firm conducts legal research. What used to take days now takes minutes.",
      name: "Sarah Johnson",
      title: "Partner, Kline & Associates",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23777'%3E%3Cpath fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd' /%3E%3C/svg%3E"
    },
    {
      quote: "The ability to quickly find relevant precedents has significantly strengthened our arguments in court. An essential tool for any litigator.",
      name: "Michael Chen",
      title: "Litigation Counsel, TriState Legal",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23777'%3E%3Cpath fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd' /%3E%3C/svg%3E"
    },
    {
      quote: "As a solo practitioner, this platform gives me the research capabilities of a large firm. The ROI has been immediate and substantial.",
      name: "Amanda Rodriguez",
      title: "Principal Attorney, Rodriguez Law",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23777'%3E%3Cpath fill-rule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clip-rule='evenodd' /%3E%3C/svg%3E"
    }
  ];

  return (
    <div className="bg-law-paper py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-law-navy mb-4">
            Trusted by Legal Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from attorneys who have transformed their legal research with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-100">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-law-navy">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              
              <blockquote className="relative">
                <span className="absolute top-0 left-0 text-4xl text-law-burgundy/20 font-serif">"</span>
                <p className="text-gray-600 pl-6 pt-2 text-sm">{testimonial.quote}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
