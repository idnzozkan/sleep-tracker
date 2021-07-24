const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  profilePhoto: String,
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entry",
      autopopulate: { maxDepth: 2 }
    }
  ]
})

UserSchema.plugin(require("mongoose-autopopulate"))
module.exports = mongoose.model("User", UserSchema)
