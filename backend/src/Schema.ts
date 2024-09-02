import mongoose, { Document, Schema } from "mongoose";

export interface Products extends Document {
  id: number;
  name: string;
  image: string;
  category: string;
  new_price: number;
  old_price: number;
  data: number;
  available: boolean;
}
const ProductSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});
const Product =
  mongoose.models.Product || mongoose.model<Products>("Product", ProductSchema);
export default Product;
