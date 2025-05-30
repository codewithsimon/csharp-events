import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#091227] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTIxLTEwYzAtMi4yMS0xLjc5LTQtNC00LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRjMi4yMSAwIDQtMS43OSA0LTR6bTQyIDBjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGMyLjIxIDAgNC0xLjc5IDQtNHptLTI1LTE1YzAtMi4yMS0xLjc5LTQtNC00LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRjMi4yMSAwIDQtMS43OSA0LTR6bS0xNyAxNWMwLTEuMTA1LS44OTUtMi0yLTItMS4xMDUgMC0yIC44OTUtMiAycy44OTUgMiAyIDJjMS4xMDUgMCAyLS44OTUgMi0yek0yMCA0NmMwLTEuMTA1LS44OTUtMi0yLTItMS4xMDUgMC0yIC44OTUtMiAycy44OTUgMiAyIDJjMS4xMDUgMCAyLS44OTUgMi0yek00MSA0NmMwLTEuMTA1LS44OTUtMi0yLTItMS4xMDUgMC0yIC44OTUtMiAycy44OTUgMiAyIDJjMS4xMDUgMCAyLS44OTUgMi0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Explore Developer Conferences & Events by C# Corner
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Connect with the community, learn from experts, and stay updated with the latest in tech.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a 
              href="#events" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#091227] bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              Browse Events
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <h3 className="font-medium text-lg">20+ Events</h3>
                <p className="text-gray-400">Annually Worldwide</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <h3 className="font-medium text-lg">Global Presence</h3>
                <p className="text-gray-400">Events in 12+ Countries</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <h3 className="font-medium text-lg">10,000+ Attendees</h3>
                <p className="text-gray-400">Join Our Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimalist divider with dots */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute bottom-0 left-4 right-4 h-px bg-slate-50/20"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-slate-50/40"></div>
              <div className="w-2 h-2 rounded-full bg-slate-50/60"></div>
              <div className="w-2 h-2 rounded-full bg-slate-50/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;