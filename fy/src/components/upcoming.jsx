import React, { useEffect, useState } from 'react';
import { Patients } from './patientsData';


const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = Patients.filter(event => {
      const endDateTime = new Date(event.end).getTime();
      const currentDateTime = new Date().getTime();
      const remainingTime = endDateTime - currentDateTime
      const remainingHours = remainingTime / (1000 * 60 * 60);
      return remainingHours < 24 && remainingHours > 0;
    });

    setEvents(filteredEvents);
  }, []);

  const getTimeDifference = (startDate, endDate) => {
    const now = new Date();
    const eventStartDate = new Date(startDate);
    const eventEndDate = new Date(endDate);
    
    if (now < eventStartDate) {
      const diff = eventStartDate - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    } else if (now >= eventStartDate && now <= eventEndDate) {
      return "Now";
    } else {
      return null; // Event has ended
    }
  };

  return (
    <div className="p-4 border border-cyan-400 border-l-2 border-r-2  shadow-md">
      <h1 className="text-2xl font-bold blinking-title">Upcoming Events</h1>
      <ul className="mt-4">
        {events.map((event) => {
          const isHappeningNow = new Date(event.start) <= new Date() && new Date() <= new Date(event.end);
          return (
            <li
              key={event.id}
              className={`p-4 mb-2 ${isHappeningNow ? 'bg-blue-500 text-white' : 'bg-gray-100'} flex justify-between items-center`}
            >
              <div>
                <p className="font-semibold">{event.username}</p>
                <p>{new Date(event.start).toLocaleString()}</p>
                <p>{event.diagnosis}</p>
              </div>
              <div>
                {isHappeningNow ? 'Happening Now' : getTimeDifference(event.start, event.end)}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
