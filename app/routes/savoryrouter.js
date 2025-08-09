const express = require('express');
const router = express.Router();
const savoryController = require('../controller/savoryController');
const savoryControllerProducto = require('../controller/savoryControllerProducto');
const savoryControllerUsers = require('../controller/savoryControllerUsers');

const authRoutes = require('./auth');
const clientesRoutes = require('./clientes');

router.use('/auth', authRoutes);         
router.use('/clientes', clientesRoutes);
router.get('/clientes',savoryControllerUsers.buscarTodo)
.get('/clientes',savoryControllerUsers.buscarcliente,savoryControllerUsers.mostrarClientes)
.delete('/clientes',savoryControllerUsers.buscarcliente,savoryControllerUsers.eliminarClientes)
.put('/clientes',savoryControllerUsers.buscarcliente,savoryControllerUsers.actualizarClientes)

router.get('/Pedidos', savoryController.buscarTodo)
.post('/Pedidos', savoryController.agregar)
.get ('/Pedidos/:key/:value', savoryController.buscarpedido,savoryController.mostrarPedido)
.delete('/Pedidos/:key/:value',savoryController.buscarpedido,savoryController.eliminarPedido)
.put('/Pedidos/:key/:value', savoryController.buscarpedido, savoryController.actualizarPedido)

router.get('/Productos', savoryControllerProducto.buscarTodo)
.post('/Productos', savoryControllerProducto.agregar)
.get ('/Productos/:key/:value', savoryControllerProducto.buscarProducto,savoryControllerProducto.mostrarProducto)
.delete('/Productos/:key/:value',savoryControllerProducto.buscarProducto,savoryControllerProducto.eliminarProducto)
.put('/Productos/:key/:value', savoryControllerProducto.buscarProducto, savoryControllerProducto.actualizarProducto)

module.exports=router;
