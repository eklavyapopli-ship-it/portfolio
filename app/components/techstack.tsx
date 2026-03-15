import Image from "next/image";

export default function OurTechStack() {
  const techs = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },  // React logo SVG (example) :contentReference[oaicite:0]{index=0}
  { name: "Next.js", img: "/tech/next.svg" },  // Next.js logo SVG :contentReference[oaicite:1]{index=1}
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Gemini", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "OpenAI", img: "/tech/OpenAI.svg" }, // OpenAI logo SVG :contentReference[oaicite:2]{index=2}
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "LangChain", img: "/tech/langchain.png" },
  { name: "LangGraph", img: "/la2.png" },
  { name: "Tailwind CSS", img: "/tailwind.png" },
  { name: "Streamlit", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
{ name: "Cloudflare", img: "https://logo.svgcdn.com/logos/cloudflare-icon.svg" },
  ]


  return (
    <section className="py-20 bg-black max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 px-6 lg:px-24">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="
             bg-black/40  backdrop-blur-sm border-l-gray-900  border-r-gray-900 border-b-gray-900 border border-t-gray-700  shadow-xl
              rounded-2xl 
              p-6
              flex flex-col items-center
               place-content-end  hover:shadow-2xl transition hover:-translate-y-1 
            "
          >
            <Image
              src={tech.img}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain "
            />
            <p className="mt-3 text-sm  text-white/80">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
