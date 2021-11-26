const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => { // RETORNA TODOS OS PEDIDOS

    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    })
})

router.post('/', (req, res, next) => { // INSERE UM PEDIDO

    res.status(201).send({
        mensagem: 'O pedido foi criado'
    })
})

router.get('/:id_pedido', (req, res, next) => { // RETORNA OS DADOS DE UM PEDIDO

    const id = req.params.id_produto

    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    })
})

router.delete('/', (req, res, next) => { // EXLCUI UM PEDIDO

    res.status(201).send({
        mensagem: 'Pedido Excluído'
    })
})

module.exports = router