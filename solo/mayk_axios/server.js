const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/getpadrao', async(req, res) => {

    try {
        // response é a resposta do axios MAS eu tiro o data de dentro do response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)
    } catch (error) {
        
        console.error(error)
    }
})

app.listen('4002')

app.get('/postagem'), async(req, res) => {

    try {
        const { data } = await axios()
    } catch (error) {
        
    }
}



/* app.listen('7777') 

const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req,res) => {
    return res.json([
        { name: 'robs'},
        { name: 'cleiton'},
        { name: 'euclides'}
    ])
})

app.listen('7777') */