import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  telephone: {
    type: String,
    required: true,
    minLength: 1,
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: { type: Date, default: () => Date.now() },
});

const User = models.User || model("User", userSchema);

export default User;
