"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
type ChildProps = {
  name: string;
};
export default function ExploreButton({name}:ChildProps) {
  return (
    <div className="m-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="text-white bg-transparent flex items-center space-x-2"
      >
        <span>{name}</span>
      </HoverBorderGradient>
    </div>
  );
}


