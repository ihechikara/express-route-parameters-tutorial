const express = require("express")
const app = express()
const port = 5000
const {users} = require("./users.json")

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get('/api/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)
    const user = users.find((user) => user.id === userID)
    res.json(user)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})