const mongoose = require("mongoose");
const refreshTokenSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please tell us your username"],
      unique: true,
    },

    token:String
  },
  {
    timestamps: true,
  }
);


const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

module.exports = RefreshToken;
