import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import EventFilter from '../components/EventFilter';
import EventList from '../components/EventList';
import { Event } from '../types/events';
import { sampleEvents } from '../data/sampleEvents';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());
  
  return (
    <div>
      <Hero />
      
      <div id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <EventFilter 
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          totalEvents={events.length}
          upcomingCount={upcomingEvents.length}
          pastCount={pastEvents.length}
        />
        
        <EventList events={events} filter={activeFilter} />
      </div>
    </div>
  );
};

export default EventsPage;