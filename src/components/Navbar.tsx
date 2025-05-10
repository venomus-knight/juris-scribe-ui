
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Gavel, Scale, Menu, X, Search, FileText } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 py-4 px-4 md:px-8 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md border-b border-coffee-gold/20"
        : "bg-white/90 backdrop-blur-md border-b border-coffee-gold/30"
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <Gavel className="h-6 w-6 text-coffee-medium absolute animate-pulse" />
            <Scale className="h-6 w-6 text-coffee-gold opacity-70 ml-1" />
          </div>
          <span className="text-xl font-serif font-semibold text-coffee-dark ml-3">LegalPrecedent<span className="text-coffee-medium">AI</span></span>
          <span className="hidden md:inline-block text-xs font-serif ml-1 text-coffee-gold">भारत</span>
          
          <div className="hidden lg:flex ml-8 bg-coffee-cream/50 rounded-full px-2 py-1 items-center border border-coffee-gold/20">
            <span className="text-xs font-serif text-coffee-dark/70 px-2">सत्यमेव जयते</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#features" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-coffee-paper/95 backdrop-blur-md border-coffee-gold/30">
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Search className="h-4 w-4 mt-0.5 text-coffee-gold" />
                  <div>
                    <h4 className="font-serif text-sm font-medium text-coffee-dark">Advanced Legal Search</h4>
                    <p className="text-xs text-coffee-dark/70">Find precedents using natural language queries</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 mt-0.5 text-coffee-gold" />
                  <div>
                    <h4 className="font-serif text-sm font-medium text-coffee-dark">Comprehensive Database</h4>
                    <p className="text-xs text-coffee-dark/70">Supreme Court and High Court judgments</p>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <a href="#how-it-works" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <a href="#pricing" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-coffee-dark hover:text-coffee-dark hover:bg-coffee-gold/20 transition-all duration-300">Sign In</Button>
          <Button className="bg-coffee-dark hover:bg-coffee-medium text-white transition-all duration-300 shadow-md hover:shadow-lg">Get Started</Button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-coffee-dark" />
            ) : (
              <Menu className="h-6 w-6 text-coffee-dark" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-coffee-gold/20 shadow-md animate-fade-in">
          <div className="container mx-auto p-4 flex flex-col space-y-4">
            <a href="#features" className="text-coffee-dark hover:text-coffee-medium py-2 px-4 hover:bg-coffee-cream/50 rounded-md transition-colors">Features</a>
            <a href="#how-it-works" className="text-coffee-dark hover:text-coffee-medium py-2 px-4 hover:bg-coffee-cream/50 rounded-md transition-colors">How It Works</a>
            <a href="#pricing" className="text-coffee-dark hover:text-coffee-medium py-2 px-4 hover:bg-coffee-cream/50 rounded-md transition-colors">Pricing</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
