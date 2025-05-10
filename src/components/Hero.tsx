
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Landmark } from "lucide-react";
import ThreeDGavel from './ThreeDGavel';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-coffee-cream to-white">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDZoLTZ2Nmg2di02em0wLTI0aDZ2LTZoLTZ2NnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6 leading-tight">
              The <span className="text-coffee-medium">Precedent Research</span> Platform For Indian Legal Professionals
            </h1>
            <p className="text-lg md:text-xl text-coffee-dark/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Access landmark judgments from the Supreme Court of India and High Courts. Find relevant case precedents with advanced AI powered by Indian legal knowledge.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="text-white bg-coffee-dark hover:bg-coffee-medium text-base px-6 py-6 shadow-lg">
                Try Free Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-coffee-medium text-coffee-medium hover:bg-coffee-medium/10 px-6 py-6 text-base">
                Schedule a Demo
              </Button>
            </div>
            
            <div className="mt-12 pt-6 border-t border-coffee-medium/20">
              <p className="text-sm text-coffee-dark/60 mb-3">Trusted by leading law chambers in India</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
                <div className="flex items-center text-coffee-dark/70 font-serif text-lg font-semibold">
                  <Scale className="h-5 w-5 mr-2 text-coffee-gold" />
                  SUPREME COURT BAR
                </div>
                <div className="flex items-center text-coffee-dark/70 font-serif text-lg font-semibold">
                  <Landmark className="h-5 w-5 mr-2 text-coffee-gold" />
                  DELHI HIGH COURT
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="bg-coffee-paper rounded-xl shadow-xl p-4 border border-coffee-gold/20 max-w-md w-full">
              <ThreeDGavel />
              <div className="text-center mt-4">
                <div className="flex justify-center gap-6 items-center px-4">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTIgMWwxMCAydjE0bC0xMCA0LTEwLTRWM3oiLz48cGF0aCBkPSJNMTIgMTN2OE0yIDE5aDIwTTEyIDVsOCAyIi8+PC9zdmc+"
                    alt="Ashoka Emblem" 
                    className="w-10 h-10 opacity-80" 
                  />
                  <p className="font-serif italic text-coffee-dark/70">
                    "Satyameva Jayate"
                  </p>
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTIgMWwxMCAydjE0bC0xMCA0LTEwLTRWM3oiLz48cGF0aCBkPSJNMTIgMTN2OE0yIDE5aDIwTTEyIDVsOCAyIi8+PC9zdmc+"
                    alt="Ashoka Emblem" 
                    className="w-10 h-10 opacity-80" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
