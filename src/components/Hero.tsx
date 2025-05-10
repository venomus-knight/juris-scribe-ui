
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Landmark, FileText } from "lucide-react";
import ThreeDGavel from './ThreeDGavel';
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-coffee-cream to-white">
      {/* Background pattern with Devanagari script */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDZoLTZ2Nmg2di02em0wLTI0aDZ2LTZoLTZ2NnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Devanagari calligraphy backgrounds */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-9xl font-serif opacity-[0.03] text-coffee-dark rotate-12">न्याय</p>
      </div>
      <div className="absolute inset-0 flex items-end justify-start pb-20 pl-20">
        <p className="text-7xl font-serif opacity-[0.02] text-coffee-dark -rotate-6">धर्म</p>
      </div>
      
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
              <Button className="text-white bg-coffee-dark hover:bg-coffee-medium text-base px-6 py-6 shadow-lg group transition-all duration-300">
                Try Free Demo 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
            <Card className="bg-coffee-paper/50 backdrop-blur-md rounded-xl shadow-xl border border-coffee-gold/20 max-w-md w-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardContent className="p-4">
                <ThreeDGavel />
                <div className="text-center mt-4 pb-2">
                  <div className="flex justify-center gap-6 items-center px-4">
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTIgMWwxMCAydjE0bC0xMCA0LTEwLTRWM3oiLz48cGF0aCBkPSJNMTIgMTN2OE0yIDE5aDIwTTEyIDVsOCAyIi8+PC9zdmc+"
                      alt="Ashoka Emblem" 
                      className="w-10 h-10 opacity-80" 
                    />
                    <p className="font-serif italic text-coffee-dark/70">
                      "सत्यमेव जयते"
                    </p>
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMTIgMWwxMCAydjE0bC0xMCA0LTEwLTRWM3oiLz48cGF0aCBkPSJNMTIgMTN2OE0yIDE5aDIwTTEyIDVsOCAyIi8+PC9zdmc+"
                      alt="Ashoka Emblem" 
                      className="w-10 h-10 opacity-80" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Indian Supreme Court dome silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDIwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMjAwaDEwMDBWMEMgOTUwIDEwMCA5MDAgMTUwIDgwMCAxNzAgNzAwIDE4NSA2MDAgMTkwIDUwMCAxOTAgNDAwIDE5MCAzMDAgMTg1IDIwMCAxNzAgMTAwIDE1MCA1MCAxMDAgMCAwIFoiIGZpbGw9IiNmOGY1ZjAiIG9wYWNpdHk9IjAuOCIvPjwvc3ZnPg==')]">
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="opacity-10">
            <path 
              fill="#d4af37" 
              fillOpacity="0.2" 
              d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
