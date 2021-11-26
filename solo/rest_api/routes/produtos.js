const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => { // RETORNA TODOS OS PRODUTOS

    res.status(200).send({
        mensagem: 'Retorna todos os pedidos'
    })
})

router.post('/', (req, res, next) => { // INSERE UM PRODUTO

    res.status(201).send({
        mensagem: 'Insere um produto'
    })
})

router.get('/:id_produto', (req, res, next) => { // RETORNA OS DADOS DE UM PRODUTO

    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você descobriu um ID'
        })
    }
})

router.patch('/', (req, res, next) => { // ALTERE UM PRODUTO

    res.status(201).send({
        mensagem: 'Produto alterado'
    })
})

router.delete('/', (req, res, next) => { // EXLCUI UM PRODUTO

    res.status(201).send({
        mensagem: 'Produto excluído'
    })
})

module.exports = router