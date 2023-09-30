import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface ProductProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  img: string;
  desc: string;
  price: number;
  rating: number;
  specs: string;
}

function ProductCard({
  name,
  img,
  desc,
  price,
  rating,
  specs,
  ...props
}: ProductProps) {
  return (
    <Card className="p-4 border m-auto border-gray-300 rounded-md shadow-md w-1/4 h-1/3">
      <CardHeader className="items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{name}</CardTitle>
        </div>
        <div className="w-[250px] h-[250px]">
          <Image
            src={img}
            width={250}
            height={250}
            alt={name}
            className="object-contain"
          />
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            Stars
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">{price}</div>
        <div className="">{specs}</div>
        <CardDescription className="text-sm my-4">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ProductCard;