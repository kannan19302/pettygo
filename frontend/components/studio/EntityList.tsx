import React from 'react';

interface EntityListProps {
  title: string;
  items: any[];
  onEdit?: (item: any) => void;
  onDelete?: (id: number) => void;
  renderItem: (item: any) => React.ReactNode;
}
export default function EntityList({ title, items, onEdit, onDelete, renderItem }: EntityListProps) {
  const safeItems = Array.isArray(items) ? items : [];
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {safeItems.map(item => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {renderItem(item)}
            {onEdit && <button onClick={() => onEdit(item)}>Edit</button>}
            {onDelete && <button onClick={() => onDelete(item.id)} style={{ color: 'red' }}>Delete</button>}
          </li>
        ))}
      </ul>
    </section>
  );
}
