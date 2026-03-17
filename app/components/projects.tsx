"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [

  {
    title: "RAG Based Context Aware AI Email Agent",
    description:
      "Built an intelligent email assistant using Retrieval-Augmented Generation (RAG) that automatically reads incoming emails, retrieves relevant information from a knowledge base, and generates accurate, context-aware responses. The system combines LLMs with vector search to understand queries, fetch supporting data, and draft replies, reducing manual effort in email handling. Designed to improve productivity by enabling automated, reliable, and scalable email communication workflows.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/emailagent.jpeg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:"https://github.com/eklavyapopli-ship-it/Smart-Email-Assistant"
  },
  {
    title: "NovelAI – Memory Driven AI Chat Platform",
    description:
      "NovelAI is an AI powered assistant designed to discuss, analyze, and remember information about novels. Built using LangChain with a memory-enabled agent architecture, it can retain context across conversations and provide deeper discussions about characters, plots, themes, and story developments. The system uses Redis queues for efficient background processing and Docker for scalable deployment. The FastAPI (Python) backend manages the AI agent and APIs, while a Next.js frontend delivers a smooth chat interface where users can interact with the AI to explore and understand novels more deeply.",
    content: (
     <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/novelai.jpeg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:""
  },
  {
    title: "SSCBS Innovation and Incubation Foundation Website",
    description:
      "Developed the official website for SSCBS Innovation & Incubation Foundation to showcase its startup incubation programs, mentorship network, and entrepreneurial ecosystem. The platform highlights incubated startups, funding support, and opportunities for founders to apply for incubation and connect with mentors. The website is designed with a modern, responsive interface to clearly present SIIF’s mission of supporting early-stage entrepreneurs and transforming innovative ideas into successful ventures.",
    content: (
     <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/siif.jpeg"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link:"https://siif.in"
  },

];
export function Projects() {
  return (
    <div className="w-full  py-4 z-999  relative" id="projects">
        <h1 className="text-5xl m-2 text-white text-center mb-20">My Projects</h1>

            <StickyScroll content={content} />

    
    </div>
  );
}
