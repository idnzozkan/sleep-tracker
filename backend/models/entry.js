const mongoose = require("mongoose")

const EntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: { maxDepth: 2 }
  },
  date: Date,
  sleepTime: Date,
  wakeupTime: Date,
  duration: Number
})

EntrySchema.plugin(require("mongoose-autopopulate"))
module.exports = mongoose.model("Entry", EntrySchema)
