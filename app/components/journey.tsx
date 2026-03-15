import { Timeline } from "@/components/ui/timeline";

export function Journey() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Class 10 – CBSE
          </h4>
          <p className="text-neutral-300 mb-2">
            Happy Home Public School, Rohini, Delhi
          </p>
          <p className="text-neutral-400 text-sm mb-2">
            Sometimes the first big milestone is simply proving to yourself what you're capable of. Discipline, curiosity, and consistency started shaping my mindset here. Scoring well wasn’t just an achievement, it was the beginning of believing bigger dreams were possible. This stage taught me that effort compounds, just like interest. I also started exploring hobbies like art, music, and basic programming, which sparked my creativity and analytical thinking.
          </p>
          <ul className="text-neutral-400 space-y-1 text-sm mt-2">
            <li>• Scored 95.2%</li>
            <li>• School Topper</li>
            <li>• Computer Application: 96%</li>
            <li>• Social Science: 98%</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Class 12 – CBSE (Commerce)
          </h4>
          <p className="text-neutral-300 mb-2">
            Happy Home Public School, Rohini, Delhi
          </p>
          <p className="text-neutral-400 text-sm mb-2">
            Commerce helped me understand how the real world moves through numbers and decisions. Balancing academics with extracurriculars pushed me to grow faster. I focused on developing strong analytical and critical thinking skills. I also began reading about startups, entrepreneurship, and technology, which shaped my vision for the future.
          </p>
          <ul className="text-neutral-400 space-y-1 text-sm mt-2">
            <li>• 90% Overall</li>
            <li>• 3rd Position (Commerce Stream)</li>
            <li>• Business Studies: 100%</li>
            <li>• Accountancy: 95%</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            B.Sc (Hons) Computer Science
          </h4>
          <p className="text-neutral-300 mb-2">
            Shaheed Sukhdev College of Business Studies
          </p>
          <p className="text-neutral-400 text-sm mb-2">
            Entering SSCBS opened the door to technology, innovation, and problem solving. Every concept now connects to building something real in the world. Learning computer science is not just about coding, but about thinking differently. I am exploring web development, AI, and data analytics. This journey is about turning ideas into impact while building skills that will help in my startup and professional ventures.
          </p>
          <ul className="text-neutral-400 space-y-1 text-sm mt-2">
            <li>• First Year Undergraduate</li>
            <li>• Learned React.js, Node.js basics</li>
            <li>• Participating in College Hackathons</li>
            <li>• Exploring AI & ML concepts</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Chartered Accountancy",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            CA Aspirant – Foundation
          </h4>
          <p className="text-neutral-300 mb-2">
            Institute Of Chartered Accountants Of India
          </p>
          <p className="text-neutral-400 text-sm mb-2">
            As I prepare to appear for the CA Foundation exam, I am focused on building strong fundamentals in accounting, law, and business management. This journey is a test of discipline, perseverance, and time management, and it teaches me to tackle challenges systematically. Every study session strengthens not just knowledge but also my problem-solving mindset. I see this as an opportunity to combine my academic learnings with real-world business understanding. With persistence and strategic effort, I aim to lay the foundation for becoming a successful Chartered Accountant and integrating this expertise into my entrepreneurial journey.
          </p>
          <ul className="text-neutral-400 space-y-1 text-sm mt-2">
            <li>• CA Foundation Preparation</li>
            <li>• Building Accounting & Financial Skills</li>
            <li>• Developing Discipline & Study Plans</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Startup",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            HumKind Tech
          </h4>
          <p className="text-neutral-300 mb-2">
            Pre-incubated Startup by Shaheed Sukhdev College of Business Studies
          </p>
          <p className="text-neutral-400 text-sm mb-2">
            HumKind Tech was born from the belief that technology should solve real human problems. Instead of waiting for opportunities, I chose to start building them. Every challenge in the startup journey becomes a lesson in resilience. The goal is simple: build technology that genuinely helps people. Along the way, I am learning leadership, team management, and scaling strategies that will prepare me for future ventures.
          </p>
          <ul className="text-neutral-400 space-y-1 text-sm mt-2">
            <li>• Pre-Incubated Startup</li>
            <li>• Pre-incubated by SSCBS</li>
            <li>• Building EdTech & Productivity Tools</li>
            <li>• Learning Fullstack Development & AI Integration</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}