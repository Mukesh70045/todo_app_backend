import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema
    (
        {
            text: {
                type: String,
                required: true,
            },

        });

const ToDoModel = mongoose.model('Todosapp', todoSchema);

export default ToDoModel;