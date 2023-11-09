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
import { useRouter } from "next/navigation";
import Link from "next/link";

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
          <AddToCart prodid={prodid} name={name} img={img} price={price} />
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
