import Router from 'express';
import { deleteTodo, getTodo, saveTodo, updateTodo } from '../controllers/ToDocontrollers.js';

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/delete', deleteTodo);
router.post('/update', updateTodo);

export default router;