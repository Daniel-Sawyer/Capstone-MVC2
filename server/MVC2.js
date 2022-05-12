const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const ctrl = require('./characterCtrl')

app.get("/api/character", ctrl.getRoaster)
app.post(`/api/team`, ctrl.addTeam)
app.delete('/api/team/:id', ctrl.deletechar)


app.listen(4545, () => console.log("WE BE TRUCKIN"))