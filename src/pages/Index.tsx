
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ChatInterface />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
