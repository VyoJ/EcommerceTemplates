"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function AddProduct() {
  const initialState = {
    prodid: "5",
    name: "",
    img: "",
    desc: "",
    price: 0,
    rating: 0,
    specs: "",
  };

  const [product, setProduct] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { toast } = useToast();

  const submitForm = async () => {
    setLoading(true);
    axios.post("/api/products", product).then((res) => {
      setLoading(false);
      const response = res.data;
      console.log("The response is ", response);
      if (res.status == 201) {
        console.log("The product was created", response);
        toast({
          title: "Product created successfully!",
          description: "Redirecting to products page",
        });
      } else {
        console.log("Does not work");
        toast({
          title: "Product could not be created!",
          description: "Redirecting to products page",
          variant: "destructive",
        });
      }
      router.push("/admin/products");
    });
  };

  return (
    <div className="max-w-7xl mx-[5%] px-4 lg:px-8 py-6 mt-[5%] dark:bg-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Create New Product
      </h1>
      <form className="mt-5 space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="product_name"
            >
              Product Name
            </Label>
            <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="product_name"
              type="text"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-6">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="description"
            >
              Description
            </Label>
            <textarea
              className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="description"
              rows={3}
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  desc: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="price"
            >
              Price
            </Label>
            <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="price"
              step="0.01"
              type="number"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  price: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="stock"
            >
              Rating
            </Label>
            <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              id="rating"
              type="number"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  rating: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="product_image"
            >
              Product Image URL
            </Label>
            {/* <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              id="product_image"
              type="file"
              onChange={e => setProduct(prevState => ({...prevState, productImage: e.target.files[0]}))}
            /> */}
            <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              id="product_image"
              type="text"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  img: e.target.value,
                }))
              }
            />
          </div>
          <div className="sm:col-span-3">
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              htmlFor="specs"
            >
              Specs
            </Label>
            <Input
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              id="specs"
              type="text"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  specs: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <Button type="submit" disabled={loading} onClick={submitForm}>
          Create Product
          {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
        </Button>
      </form>
    </div>
  );
}
