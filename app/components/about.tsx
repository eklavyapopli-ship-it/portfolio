export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6 text-white">

      {/* MAIN CARD */}
      <div className="border-t rounded-lg border-neutral-600 p-10 mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          About Me
        </h2>

        <p className="text-neutral-300 leading-relaxed mb-4">
          I’m <span className="font-medium text-white">Eklavya</span>, a developer,
          builder, and problem-solver focused on creating AI-driven systems,
          automation tools, and scalable technology products.
        </p>

        <p className="text-neutral-400 mb-6">
          I believe technology should solve real-world problems while pushing
          boundaries, both technically and creatively.
        </p>

        <div className="flex gap-10 text-sm text-neutral-400">
          <span>Age: 18</span>
          <span>Course: B.Sc (Hons) Computer Science</span>
        </div>
      </div>

      {/* 3 CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* WHAT I DO */}
        <div className="border border-neutral-800 p-6">
          <h3 className="text-lg font-medium mb-4">What I Do</h3>

          <ul className="space-y-2 text-neutral-400 text-sm">
            <li>Build AI-powered applications</li>
            <li>Develop full-stack web systems</li>
            <li>Create automation and business tools</li>
            <li>Experiment with agentic AI and algorithms</li>
          </ul>
        </div>

        {/* VISION */}
        <div className="border border-neutral-800 p-6">
          <h3 className="text-lg font-medium mb-4">Vision</h3>

          <p className="text-neutral-400 text-sm leading-relaxed">
            My long-term vision is to build technology companies that impact
            millions of people while maintaining innovation, ethics,
            and scalability.
          </p>
        </div>

        {/* MINDSET */}
        <div className="border border-neutral-800 p-6">
          <h3 className="text-lg font-medium mb-4">Mindset</h3>

          <p className="text-neutral-400 text-sm leading-relaxed">
            I value deep focus, continuous learning, and building systems that
            last. I prioritize execution over noise and long-term thinking over
            shortcuts.
          </p>
        </div>

      </div>

    </section>
  );
}