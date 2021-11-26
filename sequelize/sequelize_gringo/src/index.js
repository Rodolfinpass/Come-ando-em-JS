const express = require('express')
const sequelize = require('./database')
const User = require('./User')

sequelize.sync().then(() => console.log('CARALHO, THE DB IS RUNNING'))

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => { // rota post pra cadastrar um novo usuario dentro do bd

    await User.create(req.body)
    res.send('Usuário tá insertido') // se der certo, essa mensagem será exibida na resposta (terminal de resposta do postman)
})

app.get('/users', async (req, res) => {

    const users = await User.findAll()
    res.send(users)
})

app.get('/users/:id', async (req, res) => {

    const requestId = req.params.id
    const user = await User.findOne({ where: { id: requestId } })
    res.send(user)
})

app.put('/users/:id', async (req, res) => {

    const requestId = req.params.id
    const user = await User.findOne({ where: { id: requestId } })
    user.username = req.body.username
    await user.save()
    res.send('Updated')
})

app.delete('/users/:id', async (req, res) => {

    const requestId = req.params.id
    await User.destroy({ where: { id: requestId } })
    res.send('Removed')
})

app.listen(9090, () => {
    console.log('Server is running!')
})


