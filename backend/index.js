const express = require('express');
const stories = require('./storylines'); // Import story data
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the adventure game API");
});

// Get all storyline names
app.get('/storylines', (req, res) => {
  res.status(200).json(Object.keys(stories));
});

// Get full story by name
app.get('/story/:name', (req, res) => {
  const { name } = req.params;
  const story = stories[name];
  if (story) {
    res.status(200).json(story);
  } else {
    res.status(404).json({ message: "Story not found" });
  }
});

// Get specific node in a specific story
app.get('/story/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const story = stories[name];
  if (story) {
    const node = story.find(n => n.id === parseInt(id));
    if (node) res.status(200).json(node);
    else res.status(404).json({ message: "Node not found" });
  } else {
    res.status(404).json({ message: "Story not found" });
  }
});

// POST - Add new node to a story
app.post('/story/:name', (req, res) => {
  const { name } = req.params;
  const story = stories[name];
  const newNode = req.body;

  if (!story) {
    return res.status(404).json({ message: "Storyline not found" });
  }

  newNode.id = story.length + 1;
  story.push(newNode);
  res.status(201).json(newNode);
});

// PUT - Update a node in a story
app.put('/story/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const updatedData = req.body;
  const story = stories[name];

  if (!story) return res.status(404).json({ message: "Storyline not found" });

  const index = story.findIndex(node => node.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Node not found" });

  stories[name][index] = { ...stories[name][index], ...updatedData };
  res.status(200).json(stories[name][index]);
});

// DELETE - Remove a node from a story
app.delete('/story/:name/:id', (req, res) => {
  const { name, id } = req.params;
  const story = stories[name];

  if (!story) return res.status(404).json({ message: "Storyline not found" });

  const index = story.findIndex(node => node.id === parseInt(id));
  if (index === -1) return res.status(404).json({ message: "Node not found" });

  story.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
