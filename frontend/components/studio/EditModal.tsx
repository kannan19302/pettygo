import React from 'react';

interface EditModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onSave: () => void;
}

export default function EditModal({ open, title, children, onClose, onSave }: EditModalProps) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0008', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 320 }}>
        <h3>{title}</h3>
        {children}
        <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onSave} style={{ background: '#0070f3', color: '#fff' }}>Save</button>
        </div>
      </div>
    </div>
  );
}
