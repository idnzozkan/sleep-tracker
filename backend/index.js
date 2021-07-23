const express = require("express")
require("./mongo-connection")

const usersRouter = require("./routes/users")
const entriesRouter = require("./routes/entries")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", usersRouter)
app.use("/entries", entriesRouter)

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`)
})
