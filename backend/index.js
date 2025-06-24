const express = require('express');
const cors = require('cors');
const { stories, addStoryNode, saveStories } = require('./storylines');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Welcome to the adventure game API'));

app.get('/storylines', (_req, res) =>
  res.status(200).json(Object.keys(stories))
);

app.get('/story/:name', (req, res) => {
  const s = stories[req.params.name];
  if (!s) return res.status(404).json({ message: 'Story not found' });
  res.json(s);
});

app.get('/story/:name/:id', (req, res) => {
  const s = stories[req.params.name];
  if (!s) return res.status(404).json({ message: 'Story not found' });
  const node = s.find(n => n.id === +req.params.id);
  if (!node) return res.status(404).json({ message: 'Node not found' });
  res.json(node);
});

app.post('/story/:name', (req, res) => {
  const name = req.params.name.trim();
  const { title, text, choices } = req.body;

  if (!title || !text || !Array.isArray(choices) || !choices.length) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const nextId = stories[name] ? stories[name].length + 1 : 1;
  const newNode = { id: nextId, title, text, choices };

  addStoryNode(name, newNode);
  res
    .status(201)
    .json({ message: `Added node ${nextId} to "${name}"`, node: newNode });
});

app.put('/story/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const s = stories[name];
  if (!s) return res.status(404).json({ message: 'Story not found' });

  const idx = s.findIndex(n => n.id === +id);
  if (idx === -1) return res.status(404).json({ message: 'Node not found' });

  stories[name][idx] = { ...stories[name][idx], ...req.body };
  saveStories();

  res.json({ message: `Node ${id} updated`, node: stories[name][idx] });
});

app.delete('/story/:name', (req, res) => {
  const { name } = req.params;
  if (!stories[name]) {
    return res.status(404).json({ message: 'Story not found' });
  }
  delete stories[name];
  saveStories();     
  return res.status(204).send();
});

app.delete('/story/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const s = stories[name];
  if (!s) return res.status(404).json({ message: 'Story not found' });

  const idx = s.findIndex(n => n.id === +id);
  if (idx === -1) return res.status(404).json({ message: 'Node not found' });

  s.splice(idx, 1);
  saveStories();
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
