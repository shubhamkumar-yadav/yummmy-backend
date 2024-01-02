import mongoose from "mongoose";
import { productCollection } from "../../utils/model_utils.js";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
    },
    product_description: {
      type: String,
    },
    product_price: {
      type: String,
    },
    product_category:{
      type:String
    }
  },
  { timestamps: true }
);

export const Products = mongoose.model(productCollection, productSchema);
