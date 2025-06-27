
const { Schema, model } = require('mongoose');

const ChoiceSchema = new Schema(
  { text: String, nextId: Number },
  { _id: false }      
);

const StorySchema = new Schema({
  storyKey: { type: String, index: true },
  id:       Number,      
  title:    String,
  text:     String,
  choices:  [ChoiceSchema]
});

module.exports = model('Story', StorySchema);
