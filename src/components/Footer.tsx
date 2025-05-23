
import React from 'react';
import { Gavel } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-black pt-12 pb-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-coffee-medium/30">
          <div>
            <div className="flex items-center mb-4">
              <Gavel className="h-6 w-6 text-coffee-gold mr-2" />
              <span className="text-xl font-serif font-semibold text-white">LegalPrecedent<span className="text-coffee-gold">AI</span></span>
            </div>
            <p className="text-coffee-cream/80 text-sm">
              Advanced AI-powered legal precedent research for modern legal professionals.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Features</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">How It Works</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Blog</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Legal Research Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-coffee-cream/80 hover:text-coffee-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <p className="text-coffee-cream/60 text-xs">
            &copy; {new Date().getFullYear()} LegalPrecedent AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-coffee-cream/60 hover:text-coffee-gold transition-colors text-xs">Terms of Service</a>
            <a href="#" className="text-coffee-cream/60 hover:text-coffee-gold transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-coffee-cream/60 hover:text-coffee-gold transition-colors text-xs">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
