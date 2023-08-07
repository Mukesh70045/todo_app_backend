import ToDoModel from "../models/ToDoModel.js";

export const getTodo = async (req, res) => {
    try {
        const todos = await ToDoModel.find();
        res.json(todos);

    } catch (error) {
        res.status(500).json({ error: 'Error fetching todos' });
    }
};

export const saveTodo = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required for a todo item' });
    }

    try {
        const newTodo = new ToDoModel(
            {
                text,
            });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
        console.log(savedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Error creating todo' });
    }
};


export const updateTodo = async (req, res) => {
    const { _id, text } = req.body;

    try {

        await ToDoModel.findByIdAndUpdate(_id, { text });

        res.send('Todo updated successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error updating todo' });
    }
};


export const deleteTodo = async (req, res) => {
    const { _id } = req.body;
    try {
        const deletedTodo = await ToDoModel.findByIdAndDelete(_id);

        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.send('Todo deleted successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error deleting todo' });
    }
};

