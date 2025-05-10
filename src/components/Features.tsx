
import React from 'react';
import { Search, BookOpen, MessageCircle, Info } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Intelligent Case Search",
      description: "Search through millions of case documents to find relevant precedents using natural language queries."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Comprehensive Database",
      description: "Access federal and state court decisions, statutes, regulations, and more in a single search."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Conversational Interface",
      description: "Ask follow-up questions and refine your search using natural language conversation."
    },
    {
      icon: <Info className="h-6 w-6 text-white" />,
      title: "Citation Analysis",
      description: "Automatically extract and analyze citations to identify the most relevant and authoritative cases."
    }
  ];

  return (
    <div className="w-full bg-law-navy py-16 px-4 md:px-8" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Features Built for Legal Professionals
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            LegalPrecedent AI combines cutting-edge technology with deep legal knowledge to provide you with powerful research tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800/80 transform hover:-translate-y-1 transition-all duration-300">
              <div className="bg-law-burgundy h-12 w-12 rounded-full flex items-center justify-center mb-4 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2 font-serif">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900/30 rounded-xl p-8 border border-blue-800/50">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-serif text-law-gold mb-4">Enhance Your Legal Research</h3>
              <p className="text-blue-100">Our platform integrates with your existing tools and workflows to provide seamless access to relevant precedents and legal insights.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:flex-1">
              <div className="bg-blue-900/70 p-4 rounded-lg border border-blue-800">
                <p className="text-sm text-blue-100 mb-2">Average time saved per case</p>
                <p className="text-3xl font-bold text-white">6.4<span className="text-lg">hrs</span></p>
              </div>
              <div className="bg-blue-900/70 p-4 rounded-lg border border-blue-800">
                <p className="text-sm text-blue-100 mb-2">Relevant citations found</p>
                <p className="text-3xl font-bold text-white">98<span className="text-lg">%</span></p>
              </div>
              <div className="bg-blue-900/70 p-4 rounded-lg border border-blue-800">
                <p className="text-sm text-blue-100 mb-2">Case database</p>
                <p className="text-3xl font-bold text-white">15M<span className="text-lg">+</span></p>
              </div>
              <div className="bg-blue-900/70 p-4 rounded-lg border border-blue-800">
                <p className="text-sm text-blue-100 mb-2">Subscription value</p>
                <p className="text-3xl font-bold text-white">3.2<span className="text-lg">x</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
