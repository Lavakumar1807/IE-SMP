const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'storylines.json');

let stories;
try {
  stories = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
} catch (err) {
  console.error('Could not load storylines.json, starting empty.', err);
  stories = {};
}

function saveStories() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(stories, null, 2), 'utf-8');
}

function addStoryNode(storyName, node) {
  if (!stories[storyName]) stories[storyName] = [];
  stories[storyName].push(node);
  saveStories();
}

module.exports = {
  stories,
  addStoryNode,
  saveStories
};
