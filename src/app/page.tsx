"use client";
// import { useSession } from "next-auth/react"

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "@/components/preLoader";
import Image from "next/image";

export default function Home() {
  // const { data: session, status } = useSession()
  // console.log("Sessions:",session,status)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="relative h-screen">
      <Image src="/bg.jpg" alt="background image" fill className="opacity-20" />
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
    </div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedTextCharacter = () => {
//  const letters = Array.from("Hello World!");

//  const container = {
//    hidden: { opacity: 0 },
//    visible: (i = 1) => ({
//      opacity: 1,
//      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
//    }),
//  };

//  const child = {
//    visible: {
//      opacity: 1,
//      x: 0,
//      y: 0,
//      transition: {
//        type: "spring",
//        damping: 12,
//        stiffness: 100,
//      },
//    },
//    hidden: {
//      opacity: 0,
//      x: -20,
//      y: 10,
//      transition: {
//        type: "spring",
//        damping: 12,
//        stiffness: 100,
//      },
//    },
//  };

//  return (
//    <motion.div variants={container} initial="hidden" animate="visible">
//      {letters.map((char, i) => (
//        <motion.span key={i} variants={child} className="text-7xl">
//          {char}
//        </motion.span>
//      ))}
//    </motion.div>
//  );
// };

// export default AnimatedTextCharacter;

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const ctx = useRef<gsap.Context>();

//   ctx.current = gsap.context(() => {
//     const tl: GSAPTimeline = gsap.timeline();
//     tl.to({}, {});
//     gsap.to(".title", {
//       duration: 3,
//       rotation: 360,
//       ease: "none",
//       repeat: -1,
//     });
//   });

//   return (
//     <div>
//       <h1 className="title">Welcome!</h1>
//     </div>
//   ) => ctx.current?.revert();
// }

// export default function Home() {
//   useEffect(() => {
//     gsap.to(".title", {
//       x: 100,
//       y: 100,
//       rotation: 360,
//       duration: 2,
//       ease: "power1.inOut",
//       transformOrigin: "50% 50%"
//     });
//   }, []);

//   return (
//     <div className="flex items-center justify-center">
//       <h1 className="text-4xl text-blue-500 title">Welcome!</h1>
//     </div>
//   );
// }
