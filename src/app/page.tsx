"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { wrap } from "@motionone/utils";
import { plaster } from "./layout";
import Link from "next/link";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={plaster.className}>
      <div className="overflow-hidden tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
        <motion.div
          className="font-semibold uppercase text-4xl lg:text-6xl flex whitespace-nowrap flex-nowrap"
          style={{ x }}
        >
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const { data: session, status } = useSession();
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "xyz",
  });

  if (status === "authenticated") {
    console.log("User:", session.user);
    let email = session.user?.email;
    try {
      axios.get(`/api/users?email=${email}`).then((res) => {
        console.log("Response", res.status);
        if (res.status === 200) {
          setUserState({
            ...userState,
            name: session.user?.name as string,
            email: session.user?.email as string,
          });
          useEffect(() => {
            try {
              axios.post("/api/auth/signup", userState).then((res) => {
                const response = res.data;
                console.log("The response is", response);
              });
            } catch (err) {
              console.log(err);
            }
          }, [userState]);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  const text = "Welcome to the Ecommerce Store".split(" ");

  return (
    <div className="flex flex-col h-screen justify-evenly">
      <div className="font-sans text-center text-5xl font-bold tracking-[-1px] mt-20">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/products">
          <Button className="text-lg">Start Exploring!</Button>
        </Link>
      </div>
      <div className="overflow-x-hidden sticky bottom-0">
        <ParallaxText baseVelocity={-4}>Best Products</ParallaxText>
        <ParallaxText baseVelocity={4}>Lowest Prices</ParallaxText>
      </div>
    </div>
  );
}
