const { getUsers, getUser, addUser } = require('./database');

const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/u', async (req, res)  => {
    const users = await getUsers()
    res.json(users)
})

// app.get('/api/users', (req, res) => {
//     const users = [{
//         id: '1',
//         name: 'juani',
//     }, {
//         id: '2',
//         name: 'paco'
//     }]

//     res.json(users)
// })

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

