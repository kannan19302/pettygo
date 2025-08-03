import { useEffect, useState } from 'react';

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/events').then(r => r.json()).then(setEvents);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Events</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Start</th><th>End</th><th>Location</th><th>Related To</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.subject}</td>
              <td>{event.startDate}</td>
              <td>{event.endDate}</td>
              <td>{event.location}</td>
              <td>{event.relatedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
