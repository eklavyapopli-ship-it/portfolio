"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Script from "next/script";

export default function SocialSection() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="w-full  bg-transparent z-999 relative text-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl leading-tight">
            Featured by Delhi's Education Leadership
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            Humkind Tech, Founded by Eklavya Popli was proudly featured in a post by Delhi’s Education Minister,
            Ashish Sood. This recognition reflects the growing impact of our mission
            building technology that genuinely serves humanity. Being acknowledged at a
            leadership level strengthens our commitment to innovation that solves
            real-world educational challenges.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            This post helps people build trust in Humkind because it validates our
            credibility, vision, and social impact. When respected public leadership
            recognizes our work, it reassures students, parents, and institutions that
            Humkind is not just another tech initiative, it is a meaningful movement
            toward smarter, more connected education systems.
          </p>
<p className="text-lg text-gray-300 leading-relaxed text-justify">
  In today’s digital world, trust is earned through visibility, impact, and
  accountability. When a respected public figure highlights Humkind’s work,
  it bridges the gap between innovation and public confidence. It shows that
  our technology is not built in isolation, but aligned with real educational
  progress and institutional values. This kind of recognition strengthens our
  foundation and inspires more schools, educators, and communities to believe
  in Humkind’s long-term vision for transformative education.
</p>
<p className="text-lg text-gray-300 leading-relaxed text-justify">
  This recognition is not just a milestone, it is a responsibility to continue building technology that genuinely empowers institutions and students.
</p>

<a
  href="/services"
  className="text-blue-500 hover:text-blue-400 font-semibold transition duration-300"
>
  Explore Our Services →
</a>
          <div className="h-1 w-20 bg-white mt-6"></div>
        </motion.div>

        {/* RIGHT INSTAGRAM EMBED */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DOyJDupDA63/"
            data-instgrm-version="14"
            style={{
              background: "#000",
              border: 0,
              margin: 0,
              maxWidth: "540px",
              width: "70%",
            }}
          ></blockquote>

          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={() => {
              if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
              }
            }}
          />
        </motion.div>
      </div>
      <div>

      </div>
    </section>
  );
}