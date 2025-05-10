
import React from 'react';
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-law-gold/30 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Gavel className="h-6 w-6 text-law-burgundy mr-2" />
          <span className="text-xl font-serif font-semibold text-law-navy">LegalPrecedent<span className="text-law-burgundy">AI</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-gray-600 hover:text-law-burgundy transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-law-burgundy transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-law-burgundy transition-colors">Pricing</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-law-navy hover:text-law-navy hover:bg-law-lightGold">Sign In</Button>
          <Button className="bg-law-burgundy hover:bg-law-burgundy/90 text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
