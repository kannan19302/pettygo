import React, { useState } from 'react';

export default function AutomationForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [name, setName] = useState('');
  const [trigger, setTrigger] = useState('');
  const [action, setAction] = useState('');

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({ name, trigger, action }); }}>
      <h3>Create Automation</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Trigger" value={trigger} onChange={e => setTrigger(e.target.value)} required />
      <input placeholder="Action" value={action} onChange={e => setAction(e.target.value)} required />
      <button type="submit">Create</button>
    </form>
  );
}
