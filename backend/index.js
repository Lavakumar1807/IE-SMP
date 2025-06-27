const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Story = require('./models/Story');
require('dotenv').config();

connectDB(); 
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Welcome to the adventure game API'));

app.get('/storylines', async (_req, res) => {
  const keys = await Story.distinct('storyKey');
  res.json(keys);
});

app.get('/story/:name', async (req, res) => {
  const docs = await Story.find({ storyKey: req.params.name }).sort({ id: 1 });
  if (!docs.length) return res.status(404).json({ message: 'Story not found' });
  res.json(docs);
});

app.get('/story/:name/:id', async (req, res) => {
  const doc = await Story.findOne({ storyKey: req.params.name, id: +req.params.id });
  if (!doc) return res.status(404).json({ message: 'Node not found' });
  res.json(doc);
});

app.post('/story/:name', async (req, res) => {
  const { title, text, choices } = req.body;
  if (!title || !text || !Array.isArray(choices) || !choices.length)
    return res.status(400).json({ message: 'Missing required fields' });

  const last = await Story.find({ storyKey: req.params.name })
                          .sort({ id: -1 })
                          .limit(1);
  const nextId = last.length ? last[0].id + 1 : 1;

  const doc = await Story.create({
    storyKey: req.params.name,
    id: nextId,
    title,
    text,
    choices
  });
  res.status(201).json({ message: `Added node ${nextId}`, node: doc });
});

app.put('/story/:name/:id', async (req, res) => {
  const doc = await Story.findOneAndUpdate(
    { storyKey: req.params.name, id: +req.params.id },
    req.body,
    { new: true }
  );
  if (!doc) return res.status(404).json({ message: 'Node not found' });
  res.json({ message: 'Node updated', node: doc });
});

app.delete('/story/:name', async (req, res) => {
  await Story.deleteMany({ storyKey: req.params.name });
  res.status(204).send();
});

app.delete('/story/:name/:id', async (req, res) => {
  const { deletedCount } = await Story.deleteOne({ storyKey: req.params.name, id: +req.params.id });
  if (!deletedCount) return res.status(404).json({ message: 'Node not found' });
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));