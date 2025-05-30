import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface EventFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  totalEvents: number;
  upcomingCount: number;
  pastCount: number;
}

const EventFilter: React.FC<EventFilterProps> = ({ 
  activeFilter, 
  setActiveFilter, 
  totalEvents,
  upcomingCount,
  pastCount
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Browse Events</h2>
          <p className="text-gray-600">Discover tech conferences around the world</p>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${
              activeFilter === 'all'
                ? 'bg-[#091227] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Calendar size={16} className="mr-2" />
            <span>All Events</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
              {totalEvents}
            </span>
          </button>
          
          <button
            onClick={() => setActiveFilter('upcoming')}
            className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${
              activeFilter === 'upcoming'
                ? 'bg-[#091227] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Clock size={16} className="mr-2" />
            <span>Upcoming</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
              {upcomingCount}
            </span>
          </button>
          
          <button
            onClick={() => setActiveFilter('past')}
            className={`px-4 py-2 rounded-md flex items-center transition-colors duration-200 ${
              activeFilter === 'past'
                ? 'bg-[#091227] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Clock size={16} className="mr-2" />
            <span>Past</span>
            <span className="ml-2 bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
              {pastCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFilter;