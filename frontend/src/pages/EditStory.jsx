import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './EditStory.css';

export default function EditStory() {
  const [storyNames, setStoryNames] = useState([]);
  const [selected, setSelected] = useState('');
  const [nodes, setNodes] = useState([]);
  const [originalIds, setOriginalIds] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/storylines')
      .then(res => res.json())
      .then(setStoryNames)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!selected) {
      setNodes([]);
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/story/${encodeURIComponent(selected)}`)
      .then(res => res.json())
      .then(data => {
        setNodes(data);
        setOriginalIds(new Set(data.map(n => n.id)));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [selected]);

  const handleNodeChange = (idx, field, val) => {
    setNodes(nodes.map((n, i) => (i === idx ? { ...n, [field]: val } : n)));
  };

  const handleChoiceChange = (ni, ci, field, val) => {
    setNodes(
      nodes.map((n, i) => {
        if (i !== ni) return n;
        const updated = n.choices.map((c, j) => (j === ci ? { ...c, [field]: val } : c));
        return { ...n, choices: updated };
      })
    );
  };

  const addChoiceToNode = (ni) => {
    setNodes(
      nodes.map((n, i) =>
        i === ni
          ? { ...n, choices: [...n.choices, { text: '', nextId: '' }] }
          : n
      )
    );
  };

  const removeChoiceFromNode = (ni, ci) => {
    setNodes(
      nodes.map((n, i) => {
        if (i !== ni) return n;
        return { ...n, choices: n.choices.filter((_, j) => j !== ci) };
      })
    );
  };

  const addEmptyNode = () => {
    const nextId = nodes.length ? Math.max(...nodes.map(n => n.id)) + 1 : 1;
    setNodes([
      ...nodes,
      { id: nextId, title: '', text: '', choices: [{ text: '', nextId: '' }] }
    ]);
  };

  const saveNode = async node => {
    const isNew = !originalIds.has(node.id);
    const url = isNew
      ? `http://localhost:5000/story/${selected}`
      : `http://localhost:5000/story/${selected}/${node.id}`;
    const method = isNew ? 'POST' : 'PUT';

    if (!node.title.trim() || !node.text.trim() || !node.choices.length) {
      alert('Title, text, and at least one choice are required.');
      return;
    }
    if (!window.confirm(`${isNew ? 'Create' : 'Save'} node ${node.id}?`)) return;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: node.title, text: node.text, choices: node.choices })
      });
      if (!res.ok) throw new Error(await res.text());
      alert(`${isNew ? 'Created' : 'Updated'} node ${node.id}`);

      if (isNew) {
        const updated = await fetch(`http://localhost:5000/story/${selected}`);
        const data = await updated.json();
        setNodes(data);
        setOriginalIds(new Set(data.map(n => n.id)));
      }
    } catch (err) {
      console.error(err);
      alert(`Error saving node ${node.id}`);
    }
  };

  const deleteNode = async node => {
    if (!window.confirm(`Delete node ${node.id}?`)) return;
    try {
      const res = await fetch(`http://localhost:5000/story/${selected}/${node.id}`, { method: 'DELETE' });
      if (!(res.ok || res.status === 204)) throw new Error(await res.text());
      alert(`Deleted node ${node.id}`);
      setNodes(nodes.filter(n => n.id !== node.id));
    } catch (err) {
      console.error(err);
      alert(`Failed to delete node ${node.id}`);
    }
  };

  const deleteStory = async () => {
    if (!window.confirm(`Delete entire story "${selected}"?`)) return;
    try {
      const res = await fetch(`http://localhost:5000/story/${selected}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(await res.text());
      alert(`Deleted story "${selected}"`);
      setSelected('');
      setNodes([]);
      const keys = await fetch('http://localhost:5000/storylines').then(r => r.json());
      setStoryNames(keys);
    } catch (err) {
      console.error(err);
      alert(`Failed to delete story "${selected}"`);
    }
  };

  const goToSelection = () => {
    navigate('/select-story');
  };

  return (
    <>
      <Header title="Edit or Add Story Nodes" />
      <div className="editstory-container">
        <div className="top-bar">
          <label>
            Choose story:
            <select value={selected} onChange={e => setSelected(e.target.value)}>
              <option value="">-- pick one --</option>
              {storyNames.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </label>
          {selected && (
            <Button variant="outline" onClick={deleteStory}>
              Delete Story
            </Button>
          )}
        </div>

        {loading && <p>Loading nodes…</p>}
        {!selected && !loading && <p>Select a story to edit.</p>}

        {nodes.map((node, ni) => (
          <div key={node.id} className="node-card">
            <div className="node-header">
              <h2>Node {node.id}</h2>
              <Button variant="outline" onClick={() => deleteNode(node)}>
                Delete Node
              </Button>
            </div>

            <label htmlFor={`title-${node.id}`}>Title</label>
            <input
              id={`title-${node.id}`}
              type="text"
              value={node.title}
              placeholder="Title"
              onChange={e => handleNodeChange(ni, 'title', e.target.value)}
            />

            <label htmlFor={`text-${node.id}`}>Text</label>
            <textarea
              id={`text-${node.id}`}
              value={node.text}
              placeholder="Text"
              onChange={e => handleNodeChange(ni, 'text', e.target.value)}
            />

            <div className="choices-edit">
              <div className="choices-header">
                <h3>Choices</h3>
                <Button variant="primary" onClick={() => addChoiceToNode(ni)}>
                  + Add Choice
                </Button>
              </div>
              {node.choices.map((c, ci) => (
                <div key={ci} className="choice-edit-row">
                  <label htmlFor={`choice-text-${node.id}-${ci}`}>
                    Choice {ci + 1} Text
                    <input
                      id={`choice-text-${node.id}-${ci}`}
                      type="text"
                      value={c.text}
                      placeholder='choice text'
                      onChange={e => handleChoiceChange(ni, ci, 'text', e.target.value)}
                    />
                  </label>

                  <label htmlFor={`choice-next-${node.id}-${ci}`}>
                    Choice {ci + 1} Next ID
                    <input
                      id={`choice-next-${node.id}-${ci}`}
                      type="text"
                      value={c.nextId}
                      placeholder='Id'
                      onChange={e => handleChoiceChange(ni, ci, 'nextId', e.target.value)}
                    />
                  </label>

                  <Button
                    variant="outline"
                    onClick={() => removeChoiceFromNode(ni, ci)}
                  >
                    Delete Choice
                  </Button>
                </div>
              ))}
            </div>

            <div className="node-actions">
              <Button onClick={() => saveNode(node)}>Save Node</Button>
            </div>
          </div>
        ))}

        {selected && !loading && (
          <div className="node-actions add-node-action">
            <Button onClick={addEmptyNode}>+ Add New Node</Button>
          </div>
        )}
        <div className="navigation-row">
          <Button variant="outline" onClick={goToSelection}>
            ← Back to Story Selection
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}