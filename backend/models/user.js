var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("remove", function (next) {
  this.model("Board").deleteMany({ user: this._id }, next);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
