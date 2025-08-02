import { useEffect, useState } from 'react';

export default function EmailsPage() {
  const [emails, setEmails] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/emails').then(r => r.json()).then(setEmails);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Email Logs</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Lead</th><th>Contact</th><th>Subject</th><th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(email => (
            <tr key={email.id}>
              <td>{email.id}</td>
              <td>{email.leadId}</td>
              <td>{email.contactId}</td>
              <td>{email.subject}</td>
              <td>{email.sentAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
