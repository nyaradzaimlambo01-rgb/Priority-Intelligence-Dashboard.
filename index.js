const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/todos', (req, res) => {
    const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };
    const sorted = [...todos].sort((a, b) => {
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) 
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        if (a.dueDate !== b.dueDate) return new Date(a.dueDate) - new Date(b.dueDate);
        return a.dueTime.localeCompare(b.dueTime);
    });
    res.json(sorted);
});

app.post('/todos', (req, res) => {
    const { text, priority, dueDate, dueTime } = req.body;
    const newTodo = { id: Date.now(), text, priority, dueDate, dueTime, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const task = todos.find(t => t.id === parseInt(req.params.id));
    if (task) {
        Object.assign(task, req.body);
        res.json(task);
    } else {
        res.status(404).send("Not found");
    }
});

app.delete('/todos/:id', (req, res) => {
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    res.status(200).send("Deleted");
});

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));