import { useEffect, useState } from 'react';

export default function NotesPage() {
  const [notes, setNotes] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/notes').then(r => r.json()).then(setNotes);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Notes</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Lead</th><th>Content</th><th>Author</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.leadId}</td>
              <td>{note.content}</td>
              <td>{note.authorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
