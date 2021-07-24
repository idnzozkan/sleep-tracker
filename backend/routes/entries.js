const router = require("express").Router()
const Entry = require("../models/entry")
const User = require("../models/user")

router.get("/", async (req, res) => {
  const entries = await Entry.find()

  res.send(entries)
})

router.post("/", async (req, res) => {
  const user = User.findById(req.body.userId)

  const entryRequest = {
    user,
    date: req.body.date,
    sleepTime: req.body.sleepTime,
    wakeupTime: req.body.wakeupTime,
    duration: this.wakeupTime - this.sleepTime
  }

  Entry.create(entryRequest)

  res.send("OK")
})

module.exports = router
