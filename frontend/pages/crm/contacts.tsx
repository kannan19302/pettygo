import { useEffect, useState } from 'react';

export default function ContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  useEffect(() => {
    fetch('/crm/contacts').then(r => r.json()).then(setContacts);
  }, []);
  return (
    <div style={{ padding: 32 }}>
      <h2>Contacts</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
