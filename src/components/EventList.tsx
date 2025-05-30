import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { Event } from '../types/events';

interface EventListProps {
  events: Event[];
  filter: string;
}

const EventList: React.FC<EventListProps> = ({ events, filter }) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [animating, setAnimating] = useState(false);
  
  useEffect(() => {
    setAnimating(true);
    
    const timer = setTimeout(() => {
      let filtered: Event[];
      
      if (filter === 'upcoming') {
        filtered = events.filter(event => new Date(event.date) >= new Date());
      } else if (filter === 'past') {
        filtered = events.filter(event => new Date(event.date) < new Date());
      } else {
        filtered = [...events];
      }
      
      setFilteredEvents(filtered);
      setAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [events, filter]);
  
  if (filteredEvents.length === 0 && !animating) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
        <p className="text-gray-600">There are no events matching your current filter.</p>
      </div>
    );
  }
  
  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
        animating ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {filteredEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;