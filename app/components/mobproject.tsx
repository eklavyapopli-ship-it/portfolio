"use client";
import React from "react";

const mobileContent = [
  {
    title: "RAG Based Context Aware AI Email Agent",
    description:
      "Built an intelligent email assistant using Retrieval-Augmented Generation (RAG) that automatically reads incoming emails, retrieves relevant information from a knowledge base, and generates accurate, context-aware responses. Designed to improve productivity by enabling automated, reliable, and scalable email communication workflows.",
    image: "/emailagent.jpeg",
  },
  {
    title: "NovelAI – Memory Driven AI Chat Platform",
    description:
      "NovelAI is an AI powered assistant designed to discuss, analyze, and remember information about novels. It uses a memory-enabled agent architecture to retain context across conversations and provide deeper discussions about characters, plots, themes, and story developments.",
    image: "/novelai.jpeg",
  },
  {
    title: "SSCBS Innovation and Incubation Foundation Website",
    description:
      "Developed the official website for SSCBS Innovation & Incubation Foundation to showcase its startup incubation programs, mentorship network, and entrepreneurial ecosystem. Designed with a modern, responsive interface to present SIIF’s mission clearly.",
    image: "/siif.jpeg",
  },
];

export function ProjectsMobile() {
  return (
    <div className="lg:hidden w-full py-4 px-4" id="projects-mobile">
      <h1 className="text-3xl font-bold text-white text-center mb-10">My Projects</h1>
      {mobileContent.map((item, index) => (
        <div
          key={item.title + index}
          className="mb-12 rounded-md overflow-hidden shadow-lg"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}