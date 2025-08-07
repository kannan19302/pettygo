import useSWR, { mutate } from 'swr';
import AutomationForm from './AutomationForm';
import FormBuilder from './FormBuilder';
import EntityList from './EntityList';
import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import EditModal from './EditModal';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function StudioDashboard() {
  const { data: automations } = useSWR('/api/studio/automations', fetcher);
  const { data: forms } = useSWR('/api/studio/forms', fetcher);
  const { data: workflows, mutate: mutateWorkflows } = useSWR('/api/studio/workflows', fetcher);
  // Example: userRole could be 'admin', 'editor', 'viewer'. In real app, get from auth context or props.
  const userRole: string = 'admin';

  // Drag-and-drop reorder for workflows
  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    if (!workflows) return;
    const reordered = Array.from(workflows);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    // Optimistically update UI
    mutateWorkflows(reordered, false);
    // Persist new order to backend (assume PATCH endpoint exists)
    try {
      await fetch('/api/studio/workflows/reorder', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: reordered.map((w: any) => w.id) }),
      });
      mutateWorkflows();
    } catch (e) {
      setWorkflowError('Failed to reorder workflows.');
      mutateWorkflows();
    }
  };
  const { data: uiConfigs } = useSWR('/api/studio/ui-configs', fetcher);

  // UI Config form state
  const [uiConfig, setUIConfig] = useState({ userId: '', config: '' });
  // Workflow form state
  const [workflow, setWorkflow] = useState({ name: '', description: '', steps: '' });
  // Edit modal state
  const [editEntity, setEditEntity] = useState<any>(null);
  const [editType, setEditType] = useState<string>('');
  const [editError, setEditError] = useState<string>('');
  // Confirm dialog state
  const [confirmDelete, setConfirmDelete] = useState<{ type: string, id: number } | null>(null);

  // Inline error state for each section
  const [automationError, setAutomationError] = useState('');
  const [formError, setFormError] = useState('');
  const [workflowError, setWorkflowError] = useState('');
  const [uiConfigError, setUIConfigError] = useState('');

  // Workflows CRUD
  const handleCreateWorkflow = useCallback(async (data: any) => {
    setWorkflowError('');
    try {
      const res = await fetch('/api/studio/workflows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to create workflow');
      mutate('/api/studio/workflows');
    } catch (e) {
      setWorkflowError('Failed to create workflow.');
    }
  }, []);

  const handleDeleteWorkflow = useCallback((id: number) => {
    setConfirmDelete({ type: 'workflow', id });
  }, []);

  const confirmDeleteWorkflow = async (id: number) => {
    try {
      const res = await fetch(`/api/studio/workflows/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/workflows');
    } catch (e) {
      setWorkflowError('Failed to delete workflow.');
    }
    setConfirmDelete(null);
  };

  const handleEditWorkflow = (item: any) => {
    setEditEntity(item);
    setEditType('workflow');
    setEditError('');
  };

  const handleSaveEditWorkflow = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`/api/studio/workflows/${editEntity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editEntity),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/workflows');
      setEditEntity(null);
    } catch (e) {
      setEditError('Failed to update workflow.');
    }
  };

  // UI Configs CRUD
  const handleCreateUIConfig = useCallback(async (data: any) => {
    setUIConfigError('');
    try {
      const res = await fetch('/api/studio/ui-configs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/ui-configs');
    } catch (e) {
      setUIConfigError('Failed to create UI config.');
    }
  }, []);

  const handleDeleteUIConfig = useCallback((id: number) => {
    setConfirmDelete({ type: 'uiconfig', id });
  }, []);

  const confirmDeleteUIConfig = async (id: number) => {
    try {
      const res = await fetch(`/api/studio/ui-configs/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/ui-configs');
    } catch (e) {
      setUIConfigError('Failed to delete UI config.');
    }
    setConfirmDelete(null);
  };

  const handleEditUIConfig = (item: any) => {
    setEditEntity(item);
    setEditType('uiconfig');
    setEditError('');
  };

  const handleSaveEditUIConfig = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`/api/studio/ui-configs/${editEntity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editEntity),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/ui-configs');
      setEditEntity(null);
    } catch (e) {
      setEditError('Failed to update UI config.');
    }
  };


  const handleCreateAutomation = useCallback(async (data: any) => {
    setAutomationError('');
    try {
      const res = await fetch('/api/studio/automations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/automations');
    } catch (e) {
      setAutomationError('Failed to create automation.');
    }
  }, []);

  const handleDeleteAutomation = useCallback((id: number) => {
    setConfirmDelete({ type: 'automation', id });
  }, []);

  const confirmDeleteAutomation = async (id: number) => {
    try {
      const res = await fetch(`/api/studio/automations/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/automations');
    } catch (e) {
      setAutomationError('Failed to delete automation.');
    }
    setConfirmDelete(null);
  };

  const handleEditAutomation = (item: any) => {
    setEditEntity(item);
    setEditType('automation');
    setEditError('');
  };

  const handleSaveEditAutomation = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`/api/studio/automations/${editEntity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editEntity),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/automations');
      setEditEntity(null);
    } catch (e) {
      setEditError('Failed to update automation.');
    }
  };

  const handleCreateForm = useCallback(async (data: any) => {
    setFormError('');
    try {
      const res = await fetch('/api/studio/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/forms');
    } catch (e) {
      setFormError('Failed to create form.');
    }
  }, []);

  const handleDeleteForm = useCallback((id: number) => {
    setConfirmDelete({ type: 'form', id });
  }, []);

  const confirmDeleteForm = async (id: number) => {
    try {
      const res = await fetch(`/api/studio/forms/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/forms');
    } catch (e) {
      setFormError('Failed to delete form.');
    }
    setConfirmDelete(null);
  };

  const handleEditForm = (item: any) => {
    setEditEntity(item);
    setEditType('form');
    setEditError('');
  };

  const handleSaveEditForm = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    try {
      const res = await fetch(`/api/studio/forms/${editEntity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editEntity),
      });
      if (!res.ok) throw new Error('Failed');
      mutate('/api/studio/forms');
      setEditEntity(null);
    } catch (e) {
      setEditError('Failed to update form.');
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Studio Admin Dashboard</h1>
      <section>
        {automationError && <div style={{ color: 'red', marginBottom: 8 }}>{automationError}</div>}
        <h2>Automations</h2>
        <AutomationForm onSubmit={handleCreateAutomation} />
        <EntityList
          title=""
          items={automations || []}
          onEdit={userRole !== 'viewer' ? handleEditAutomation : undefined}
          onDelete={userRole !== 'viewer' ? handleDeleteAutomation : undefined}
          renderItem={a => <>{a.name} (Trigger: {a.trigger}, Action: {a.action})</>}
        />
        {/* Edit Modal for Automation */}
        <EditModal
          open={!!editEntity && editType === 'automation'}
          title="Edit Automation"
          onClose={() => setEditEntity(null)}
          onSave={handleSaveEditAutomation}
        >
          {editEntity && (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }} onSubmit={handleSaveEditAutomation}>
              <input
                value={editEntity.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, name: e.target.value }))}
                required
              />
              <input
                value={editEntity.trigger}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, trigger: e.target.value }))}
                required
              />
              <input
                value={editEntity.action}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, action: e.target.value }))}
                required
              />
              {editError && <div style={{ color: 'red' }}>{editError}</div>}
            </form>
          )}
        </EditModal>
        {/* Confirm Delete Dialog */}
        {confirmDelete?.type === 'automation' && (
          <EditModal open={true} title="Confirm Delete" onClose={() => setConfirmDelete(null)} onSave={() => confirmDeleteAutomation(confirmDelete.id)}>
            <>Are you sure you want to delete this automation?</>
          </EditModal>
        )}
        {/* Edit Modal for Form */}
        <EditModal
          open={!!editEntity && editType === 'form'}
          title="Edit Form"
          onClose={() => setEditEntity(null)}
          onSave={handleSaveEditForm}
        >
          {editEntity && (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }} onSubmit={handleSaveEditForm}>
              <input
                value={editEntity.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, name: e.target.value }))}
                required
              />
              {/* Optionally, add more fields here */}
              {editError && <div style={{ color: 'red' }}>{editError}</div>}
            </form>
          )}
        </EditModal>
        {/* Confirm Delete Dialog for Form */}
        {confirmDelete?.type === 'form' && (
          <EditModal open={true} title="Confirm Delete" onClose={() => setConfirmDelete(null)} onSave={() => confirmDeleteForm(confirmDelete.id)}>
            <>Are you sure you want to delete this form?</>
          </EditModal>
        )}
      </section>
      <section>
        {formError && <div style={{ color: 'red', marginBottom: 8 }}>{formError}</div>}
        <h2>Forms</h2>
        <FormBuilder onSubmit={handleCreateForm} />
        <EntityList
          title=""
          items={forms || []}
          onEdit={userRole !== 'viewer' ? handleEditForm : undefined}
          onDelete={userRole !== 'viewer' ? handleDeleteForm : undefined}
          renderItem={f => <>{f.name} ({f.fields?.length || 0} fields)</>}
        />
        {/* Edit Modal for Workflow */}
        <EditModal
          open={!!editEntity && editType === 'workflow'}
          title="Edit Workflow"
          onClose={() => setEditEntity(null)}
          onSave={handleSaveEditWorkflow}
        >
          {editEntity && (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }} onSubmit={handleSaveEditWorkflow}>
              <input
                value={editEntity.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, name: e.target.value }))}
                required
              />
              <input
                value={editEntity.description}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, description: e.target.value }))}
              />
              <textarea
                value={Array.isArray(editEntity.steps) ? JSON.stringify(editEntity.steps) : editEntity.steps}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setEditEntity((en: any) => ({ ...en, steps: e.target.value }))}
              />
              {editError && <div style={{ color: 'red' }}>{editError}</div>}
            </form>
          )}
        </EditModal>
        {/* Confirm Delete Dialog for Workflow */}
        {confirmDelete?.type === 'workflow' && (
          <EditModal open={true} title="Confirm Delete" onClose={() => setConfirmDelete(null)} onSave={() => confirmDeleteWorkflow(confirmDelete.id)}>
            <>Are you sure you want to delete this workflow?</>
          </EditModal>
        )}
      </section>
      <section>
        {workflowError && <div style={{ color: 'red', marginBottom: 8 }}>{workflowError}</div>}
        <h2>Workflows</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleCreateWorkflow({
              name: workflow.name,
              description: workflow.description,
              steps: workflow.steps ? JSON.parse(workflow.steps) : [],
            });
            setWorkflow({ name: '', description: '', steps: '' });
          }}
          style={{ marginBottom: 32 }}
        >
          <h3>Create Workflow</h3>
          <input
            placeholder="Workflow Name"
            value={workflow.name}
            onChange={e => setWorkflow(w => ({ ...w, name: e.target.value }))}
            required
          />
          <input
            placeholder="Description"
            value={workflow.description}
            onChange={e => setWorkflow(w => ({ ...w, description: e.target.value }))}
          />
          <textarea
            placeholder='Steps (JSON array, e.g. [{"name":"Step1","type":"action","config":"{}"}])'
            value={workflow.steps}
            onChange={e => setWorkflow(w => ({ ...w, steps: e.target.value }))}
            rows={3}
            style={{ width: 300 }}
          />
          <button type="submit" disabled={!workflow.name}>Create Workflow</button>
        </form>
        {/* Drag-and-drop list for workflows */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="workflows-droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {(Array.isArray(workflows) ? workflows : []).map((w: any, idx: number) => (
                  <Draggable key={w.id} draggableId={String(w.id)} index={idx}>
                    {(dragProvided) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          background: '#f9f9f9',
                          marginBottom: 8,
                          padding: 8,
                          borderRadius: 4,
                          ...dragProvided.draggableProps.style,
                        }}
                      >
                        <span style={{ flex: 1 }}>{w.name} ({w.steps?.length || 0} steps)</span>
                        {userRole !== 'viewer' && (
                          <>
                            <button style={{ marginRight: 8 }} onClick={() => handleEditWorkflow(w)}>Edit</button>
                            <button onClick={() => handleDeleteWorkflow(w.id)}>Delete</button>
                          </>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* Edit Modal for UI Config */}
        <EditModal
          open={!!editEntity && editType === 'uiconfig'}
          title="Edit UI Config"
          onClose={() => setEditEntity(null)}
          onSave={handleSaveEditUIConfig}
        >
          {editEntity && (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 8 }} onSubmit={handleSaveEditUIConfig}>
              <input
                value={editEntity.userId}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, userId: e.target.value }))}
                type="number"
              />
              <input
                value={editEntity.config}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEditEntity((en: any) => ({ ...en, config: e.target.value }))}
                required
              />
              {editError && <div style={{ color: 'red' }}>{editError}</div>}
            </form>
          )}
        </EditModal>
        {/* Confirm Delete Dialog for UI Config */}
        {confirmDelete?.type === 'uiconfig' && (
          <EditModal open={true} title="Confirm Delete" onClose={() => setConfirmDelete(null)} onSave={() => confirmDeleteUIConfig(confirmDelete.id)}>
            <>Are you sure you want to delete this UI config?</>
          </EditModal>
        )}
      </section>
      <section>
        {uiConfigError && <div style={{ color: 'red', marginBottom: 8 }}>{uiConfigError}</div>}
        <h2>UI Configs</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleCreateUIConfig({
              userId: uiConfig.userId ? Number(uiConfig.userId) : undefined,
              config: uiConfig.config,
            });
            setUIConfig({ userId: '', config: '' });
          }}
          style={{ marginBottom: 32 }}
        >
          <h3>Create UI Config</h3>
          <input
            placeholder="User ID (optional)"
            value={uiConfig.userId}
            onChange={e => setUIConfig(u => ({ ...u, userId: e.target.value }))}
            type="number"
          />
          <input
            placeholder="Config (JSON)"
            value={uiConfig.config}
            onChange={e => setUIConfig(u => ({ ...u, config: e.target.value }))}
            required
          />
          <button type="submit" disabled={!uiConfig.config}>Create UI Config</button>
        </form>
        <EntityList
          title=""
          items={uiConfigs || []}
          onEdit={userRole !== 'viewer' ? handleEditUIConfig : undefined}
          onDelete={userRole !== 'viewer' ? handleDeleteUIConfig : undefined}
          renderItem={u => <>{u.userId ? `User ${u.userId}` : 'Global'}: {u.config.slice(0, 40)}...</>}
        />
      </section>
    </div>
  );
}
