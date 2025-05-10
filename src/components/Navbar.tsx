
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gavel, Scale } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-coffee-gold/30 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <Gavel className="h-6 w-6 text-coffee-medium absolute" />
            <Scale className="h-6 w-6 text-coffee-gold opacity-70 ml-1" />
          </div>
          <span className="text-xl font-serif font-semibold text-coffee-dark ml-3">LegalPrecedent<span className="text-coffee-medium">AI</span></span>
          <span className="hidden md:inline-block text-xs font-serif ml-1 text-coffee-gold">भारत</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-coffee-dark/80 hover:text-coffee-medium transition-colors">Pricing</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-coffee-dark hover:text-coffee-dark hover:bg-coffee-gold/20">Sign In</Button>
          <Button className="bg-coffee-dark hover:bg-coffee-medium text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
