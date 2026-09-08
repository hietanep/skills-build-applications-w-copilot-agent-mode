import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    goal: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
