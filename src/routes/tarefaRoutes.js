import express from 'express';
import TarefaController from '../controllers/tarefaController.js';
const router = express.Router();

const controller = new TarefaController();

// Endpoints da API
router
    .get('/tarefas', (req, res) => controller.listarTodos(req, res))
    .get('/tarefas/:id', (req, res) => controller.buscarPorId(req, res))
    .post('/tarefas', (req, res) => controller.criar(req, res))
    .put('/tarefas/:id', (req, res) => controller.atualizar(req, res))
    .delete('/tarefas/:id', (req, res) => controller.deletar(req, res))

export default router;