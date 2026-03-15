import Link from "next/link";
import ExploreButton from "@/components/hover-border-gradient-demo";
export function Hero() {
  return (
    <div className={` h-screen w-full bg-black relative flex flex-col items-center justify-center antialiased`}>
      <div className=" mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-8xl  text-white text-center font-extrabold">
          EKLAVYA POPLI
        </h1>
        <p></p>
        <p className="text-neutral-300 mx-auto my-2 md:text-lg text-sm text-center relative z-10">
        AGENTIC AI | FULL STACK DEVELOPER | NEXT JS | REACT NATIVE 
        </p>
     <div className="flex flex-col md:flex-row justify-center items-center">
          <Link href="#projects">
          <ExploreButton name="Explore My Work"/></Link>
          <Link href="#contact" className="hidden md:block">
          <ExploreButton name="Let's Connect"/></Link>
     </div>
      </div>
      
    </div>
  );
}
