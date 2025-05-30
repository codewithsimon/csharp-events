import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types/events';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const isPast = new Date(event.date) < new Date();
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
        isPast ? 'opacity-80' : ''
      }`}
    >
      {/* Event image container with 16:9 aspect ratio */}
      <div className="relative w-full pt-[56.25%]">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {isPast && (
          <div className="absolute top-0 right-0 bg-gray-800 text-white px-3 py-1 text-sm font-medium">
            Past Event
          </div>
        )}
        {!isPast && (
          <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
            Upcoming
          </div>
        )}
      </div>
      
      {/* Event content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-[#091227] mb-4 font-medium">
          <Calendar size={16} className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span>{event.location}</span>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="flex -space-x-2">
            {event.speakerImages?.slice(0, 3).map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt="Speaker" 
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
            {event.speakerImages && event.speakerImages.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white">
                +{event.speakerImages.length - 3}
              </div>
            )}
          </div>
          
          <a 
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-[#091227] hover:bg-[#1a2b4a] transition-colors duration-300"
          >
            {isPast ? 'View Details' : 'Register'}
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;