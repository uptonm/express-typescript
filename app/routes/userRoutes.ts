import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/users/:id', userController.getUser);
router.post('/users', userController.postUser);
router.put('/users/:id', userController.putUser);
router.delete('/users/:id', userController.deleteUser);

export default router;
