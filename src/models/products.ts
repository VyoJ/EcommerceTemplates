import mongoose from "mongoose"
import { Product } from '../data/products';



const {Schema}=mongoose
export interface prod {
  prodid: string;
  name: string;
  img: string;
  desc: string;
  price: number;
  rating: number;
  specs: string;
}

const productSchema = new Schema<prod>({
  prodid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  specs: {
    type: String,
    required: true,
  },
});


const ProductModel=mongoose.models.Product||mongoose.model<prod>('Product', productSchema);
export default ProductModel
