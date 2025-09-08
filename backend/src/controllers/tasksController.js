const db = require('../db/mysql');

// Get all tasks
const getAllTasks = (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Add new task
const addTask = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    db.query('INSERT INTO tasks(title) VALUES(?)', [title], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, title, completed: false });
    });
};

// Update task
const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    db.query(
        'UPDATE tasks SET title=?, completed=? WHERE id=?',
        [title, completed, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ updated: result.affectedRows });
        }
    );
};

// Delete task
const deleteTask = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id=?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: result.affectedRows });
    });
};

module.exports = { getAllTasks, addTask, updateTask, deleteTask };