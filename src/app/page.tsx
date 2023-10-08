export default function Home() {
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

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