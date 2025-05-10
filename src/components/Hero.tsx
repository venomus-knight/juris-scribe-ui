
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-coffee-cream to-white">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDZoLTZ2Nmg2di02em0wLTI0aDZ2LTZoLTZ2NnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-dark mb-6 leading-tight">
            The <span className="text-coffee-medium">Precedent Research</span> Platform For Modern Lawyers
          </h1>
          <p className="text-lg md:text-xl text-coffee-dark/80 mb-8 max-w-2xl mx-auto">
            Get instant access to relevant case precedents powered by advanced AI. Search case law, find similar rulings, and build stronger arguments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="text-white bg-coffee-dark hover:bg-coffee-medium text-base px-6 py-6 shadow-lg">
              Try Free Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-coffee-medium text-coffee-medium hover:bg-coffee-medium/10 px-6 py-6 text-base">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-12 pt-6 border-t border-coffee-medium/20">
            <p className="text-sm text-coffee-dark/60 mb-3">Trusted by leading law firms</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 text-coffee-dark/70 font-serif text-lg font-semibold">PEARSON SPECTER</div>
              <div className="h-8 text-coffee-dark/70 font-serif text-lg font-semibold">CRANE POOLE & SCHMIDT</div>
              <div className="h-8 text-coffee-dark/70 font-serif text-lg font-semibold">RAND KALDOR ZANE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
