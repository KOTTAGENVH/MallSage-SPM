import mongoose from "mongoose";

const Schema = mongoose.Schema;

//const {roles}= require("./roles")

const userSchema = new Schema({


  name: {
    type: String,
    required: true
  },

  mobile: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  }

})

const User = mongoose.model("User", userSchema);

export default User;
