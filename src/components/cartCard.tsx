"use client"

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { CartContext } from "@/context";
import { useToast } from "./ui/use-toast";
import { useContext } from "react";

interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  prodid: string,
  name: string;
  img: string;
  price: number;
}

function CartCard({ prodid, name, img, price }: ProductProps) {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  const { toast } = useToast();

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center gap-4 lg:gap-8">
            <Image
              alt={name}
              className="rounded-lg object-cover aspect-square"
              height={100}
              src={img}
              width={100}
            />
            <Link href="/products">
              <h3 className="font-semibold">{name}</h3>
            </Link>
          </div>
          <div className="flex items-center">
            <h4 className="font-semibold md:mx-4">₹ {price}</h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                dispatch({
                  type: "REMOVE",
                  payload: { prodid, name, img, price },
                });
                toast({
                  title: "Product removed from cart",
                });
              }}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CartCard;
