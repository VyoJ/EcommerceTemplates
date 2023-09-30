"use client"

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button"

export default function Component( props: {
    title: string;
    price: number;
    img: StaticImageData;
    category: string;
    id: number;
})
{
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Image src={props.img}/>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">Classic Sneakers</h1>
          <div className="flex space-x-1">
            
          </div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">$120</p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
            high-quality materials, they are designed to last.
          </p>
          <div className="flex space-x-2">
            <Button className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              7
            </Button>
            <Button className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              8
            </Button>
            <Button className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              9
            </Button>
            <Button className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
              10
            </Button>
          </div>
          <Button className="w-54 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart
          </Button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p>
        </div>
      </div>
    </section>
  )
}