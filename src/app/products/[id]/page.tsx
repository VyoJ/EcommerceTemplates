"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component(props: {
  id: number;
  name: string;
  img: string;
  desc: string;
  price: number;
  rating: number;
  specs: string;
}) {
  return (
    <section className="w-full py-12 flex justify-center md:py-24 lg:py-32">
      <div className="container flex justify-around items-center gap-8 px-4 md:px-6">
        <Image src={props.img} alt="Product Pic"/>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">
            Test
          </h1>
          <div className="flex space-x-1"></div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ₹ 399
          </p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            Lorem Ipsum
          </p>
          <Button className="w-54 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </Button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Specs here
          </p>
        </div>
      </div>
    </section>
  );
}