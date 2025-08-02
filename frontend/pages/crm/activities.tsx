import { useEffect, useState } from 'react';

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/activities').then(r => r.json()).then(setActivities);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Activities</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Type</th><th>Subject</th><th>Due Date</th><th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.type}</td>
              <td>{activity.subject}</td>
              <td>{activity.dueDate}</td>
              <td>{activity.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
