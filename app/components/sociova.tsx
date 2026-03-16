"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function Sociova() {
  return (
    <div className="flex flex-col overflow-y-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Automate Instagram Through <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Sociova SDK
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/sociova.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
