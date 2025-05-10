
import React from 'react';

const ThreeDGavel: React.FC = () => {
  return (
    <div className="h-64 md:h-80 lg:h-96 w-full flex items-center justify-center bg-coffee-paper rounded-xl shadow-inner">
      <div className="text-center p-6 animate-pulse">
        <div className="flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#6f4e37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m14 14-8.1-8.1c-.82-.82-1.34-1.46-1.18-2.08.16-.61.94-.94 2.49-1.59l.31-.13c1.19-.5 1.78-.75 2.37-.55.59.2.96.8 1.71 2l7.5 17.3c.59 1.35.88 2.03.69 2.43-.2.4-.91.4-2.32.4H8.5l1 2" />
          </svg>
          <div className="mt-4 text-coffee-dark font-serif text-xl">LegalPrecedent AI</div>
          <p className="text-coffee-medium text-sm mt-2">A modern legal research platform</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeDGavel;
