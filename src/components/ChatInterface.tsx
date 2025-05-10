
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageSquare, Book, FileText, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface Citation {
  case: string;
  court: string;
  year: string;
  citation: string;
  relevance: number;
  snippet: string;
}

const sampleCitations: Citation[] = [
  {
    case: "Smith v. Johnson",
    court: "Supreme Court",
    year: "2018",
    citation: "583 U.S. 163",
    relevance: 92,
    snippet: "The Court held that in cases of contractual dispute where the language is ambiguous, the interpretation most favorable to the non-drafting party shall prevail."
  },
  {
    case: "United States v. Reynolds",
    court: "9th Circuit Court of Appeals",
    year: "2020",
    citation: "986 F.3d 1245",
    relevance: 87,
    snippet: "The court ruled that the standard for determining 'reasonable doubt' must be articulated clearly to the jury, and failure to do so constitutes reversible error."
  },
  {
    case: "Jackson Properties Ltd. v. Western Financial Corp.",
    court: "Delaware Court of Chancery",
    year: "2019",
    citation: "215 A.3d 792",
    relevance: 76, 
    snippet: "Chancellor Moore established that in commercial real estate disputes, the specific terms of the contract supersede general industry practices unless otherwise specified."
  }
];

const ChatInterface = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    setQuery('');
    
    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "Based on your query regarding contractual disputes with ambiguous language, I've found several relevant precedents. The most applicable case is Smith v. Johnson (2018), where the Supreme Court established that ambiguous contract language should be interpreted in favor of the non-drafting party. I've also included additional cases with similar rulings for your reference.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setCitations(sampleCitations);
      setIsProcessing(false);
      
      toast({
        title: "Results Found",
        description: "3 relevant precedents found for your query.",
      });
    }, 2000);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16" id="chat-interface">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-law-navy mb-4">
          Find Case Precedents Instantly
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ask a question about your case and our AI will find relevant legal precedents to strengthen your arguments.
        </p>
      </div>
      
      <div className="grid md:grid-cols-7 gap-6">
        <div className="md:col-span-4 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-4 border-b border-gray-100 flex items-center">
            <MessageSquare className="h-5 w-5 text-law-burgundy mr-2" />
            <h3 className="font-medium">Chat with LegalPrecedent AI</h3>
          </div>
          
          <div className="h-[400px] overflow-y-auto p-4 flex flex-col space-y-4 bg-law-paper">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-3">
                <MessageSquare className="h-10 w-10 text-gray-400" />
                <p>No messages yet. Ask a question about your case.</p>
                <div className="text-xs max-w-sm">
                  Example: "What precedents exist for contract disputes with ambiguous language?"
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div 
                  key={message.id}
                  className={`max-w-[80%] ${message.type === 'user' ? 'ml-auto bg-law-navy text-white' : 'mr-auto bg-white border border-gray-200'} rounded-lg p-3 shadow-sm animate-fade-in`}
                >
                  <p className="text-sm">{message.content}</p>
                  <div className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
              ))
            )}
            
            {isProcessing && (
              <div className="max-w-[80%] mr-auto bg-white border border-gray-200 rounded-lg p-3 shadow-sm animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-sm text-gray-500 ml-1">Searching precedents...</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                placeholder="Describe your legal question or case details..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" disabled={isProcessing}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="md:col-span-3 bg-white rounded-xl shadow-lg border border-gray-100 h-[500px] overflow-y-auto">
          <div className="p-4 border-b border-gray-100 flex items-center">
            <Book className="h-5 w-5 text-law-burgundy mr-2" />
            <h3 className="font-medium">Relevant Precedents</h3>
          </div>
          
          <div className="p-4">
            {citations.length > 0 ? (
              <div className="space-y-4">
                {citations.map((citation, index) => (
                  <div key={index} className="p-3 border border-gray-100 rounded-lg hover:bg-law-cream/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-law-navy font-serif">{citation.case}</h4>
                      <span className="bg-law-lightGold text-law-burgundy text-xs px-2 py-1 rounded-full font-medium">
                        {citation.relevance}% Match
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500 mt-1 mb-2 space-x-2">
                      <span className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {citation.citation}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {citation.year}
                      </span>
                      <span>{citation.court}</span>
                    </div>
                    <p className="text-sm text-gray-600">{citation.snippet}</p>
                    <button className="mt-2 text-xs text-law-burgundy hover:underline font-medium">View Full Case</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[400px] text-center text-gray-500 space-y-3">
                <Book className="h-10 w-10 text-gray-400" />
                <p>No precedents found yet</p>
                <p className="text-xs max-w-xs">
                  Ask a question in the chat to get relevant legal precedents for your case.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
