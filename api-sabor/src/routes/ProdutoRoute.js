const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');

router.get('/produtos', ProdutoController.listarProdutos);
router.get('/:id', ProdutoController.buscarProdutoPorId);
router.post('/produtos', ProdutoController.cadastrarProduto);
router.put('/:id', ProdutoController.atualizarProduto);
router.delete('/:id', ProdutoController.excluirProduto);
