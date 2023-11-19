"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import AddToCart from "./addToCart";
import Link from "next/link";
import { useCallback } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useToast } from "./ui/use-toast";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  prodid: string;
  name: string;
  img: string;
  desc: string;
  price: number;
  rating: number;
  specs: string;
}

function ProductCard({
  id,
  prodid,
  name,
  img,
  desc,
  price,
  rating,
  specs,
}: ProductProps) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");

  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = useCallback(() => {
    console.log("Delete button clicked");
    const product: ProductProps = {
      id,
      prodid,
      name,
      img,
      desc,
      price,
      rating,
      specs,
    };
    console.log("Product details:", product);
    axios
      .delete(`/api/products/${product.id}`)
      .then((res) => {
        const response = res.data;
        console.log("The response is ", response);
        if (res.status == 200) {
          console.log("Product deleted successfully", response);
          toast({
            title: "Product deleted successfully!",
          });
          router.refresh();
        }
        else {
          console.log("Could not delete");
          toast({
            title: "Product deletion failed!",
            description: "Please try again later",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
        toast({
          title: "Product deletion failed!",
          description: err,
        });
      });
  }, []);

  return (
    <>
      <Card className="border m-auto mb-6 border-gray-300 rounded-md shadow-md lg:p-4 lg:mx-4">
        <CardHeader className="items-start gap-4 space-y-0">
          <div className="space-y-1 mx-auto">
            <Link href={`/products/${id}`}>
              <CardTitle>{name}</CardTitle>
            </Link>
          </div>
          <div className="w-[250px] h-[250px] mx-auto">
            <Image
              src={img}
              width={250}
              height={250}
              alt={name}
              className="object-contain h-full w-full"
            />
          </div>
        </CardHeader>
        <CardContent>₹ {price}</CardContent>
        <CardContent>{desc}</CardContent>
        <CardContent></CardContent>
        {/* <CardContent>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            Stars
          </Button>
        </div>
      </CardContent> */}
        <CardDescription>{specs}</CardDescription>
        <CardFooter className="flex justify-center">
          {isAdminPage ? (
            <Button variant="secondary" onClick={handleDelete} size="icon">
              <Trash2 color="red" />
            </Button>
          ) : (
            <AddToCart prodid={prodid} name={name} img={img} price={price} />
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
