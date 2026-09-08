import { model, Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    coach: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    motto: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

export const Team = model('Team', teamSchema);
