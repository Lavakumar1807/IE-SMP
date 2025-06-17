const express = require('express');
const story = require('./storylines');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
   res.send("Welcome to web adventure game");
})

app.get('/storylines',(req,res)=>{
    try{
        res.status(200).json(story);
    }catch(error){
        res.status(500).json( { message : "Server error" });
    }
})

app.get('/story/:id',(req,res)=>{
    try{
        const storyID = req.params.id;
        const storyline = story.find(story => story.id == storyID);
        if(storyline) res.status(200).json(storyline)
        else res.status(404).json({message : "Story not found"});
    }catch(error){
        res.status(500).json({ message : "Server error" });
    }
})

app.post("/story",(req,res)=>{
    try{
        const {title,text} = req.body;
        if(!title || !text) {
            res.status(400).send("title and text are required");
            return ;
        }
        const newStory = {
            id: story.length + 1,
            title,
            text
        };
        story.push(newStory);
        res.status(201).send(newStory);
    }catch(error){
        res.status(500).json({ message : "Server error" });
    }
})

app.put('/story/:id', (req,res)=>{
    try{
        const storyID = Number(req.params.id);
        const {title,text} = req.body;
        if(!title || !text) {
            res.status(400).send("title and text are required");
            return ;
        }

        const index = story.findIndex(s => s.id === storyID);
        if (index !== -1) {
            story[index] = { id: storyID, title, text };
            res.status(201).json(story[index]);
        } else {
            res.status(404).json({ message: "Story not found" });
        }
    }catch(error){
        res.status(500).json({ message : "Server error" });
    }
})

app.delete('/story/:id',(req,res)=>{
    try{
        const storyID = Number(req.params.id);
        const index = story.findIndex(s => s.id === storyID);
        if (index !== -1) {
            const removed = story.splice(index, 1);
            res.json({ message: "Story deleted", story: removed[0] });
        } else {
            res.status(404).json({ message: "Story not found" });
        }
    }catch(error){
        res.status(500).json({ message : "Server error" });
    }
})


app.listen(PORT,()=>{
    console.log("Server running on PORT : ",PORT);
})