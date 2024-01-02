import mongoose from "mongoose";
import { orderCollection } from "../../utils/model_utils.js";

const orderSchema = new mongoose.Schema(
  {
    customer_detail: {
      type: Object,
    },
    ordered_products: {
      type: Array,
    }
  },
  { timestamps: true }
);

export const Orders = mongoose.model(orderCollection, orderSchema);
