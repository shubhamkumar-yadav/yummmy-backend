import mongoose from 'mongoose';
import { userCollection } from '../../utils/model_utils.js';

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String
    },
    password: {
      type: String
    },
    createdAt: { type: Date, default: Date.now }
  }
);


const Users = mongoose.model(userCollection, userSchema);
export { Users };