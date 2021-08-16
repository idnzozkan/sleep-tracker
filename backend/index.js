const express = require("express")
const cors = require("cors")
require("./mongo-connection")

const usersRouter = require("./routes/users")
const entriesRouter = require("./routes/entries")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)
app.use("/entries", entriesRouter)

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`)
})
