import { useEffect, useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/tasks').then(r => r.json()).then(setTasks);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Tasks</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Subject</th><th>Due Date</th><th>Status</th><th>Owner</th><th>Related To</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.subject}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td>{task.ownerId}</td>
              <td>{task.relatedTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
