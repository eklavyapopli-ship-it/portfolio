import Image from "next/image";
import { Hero } from "./components/Hero";
import OurTechStack from "./components/techstack";
import AboutSection from "./components/about";
import { Projects } from "./components/projects";

export default function Home() {
  return (
<>
<Hero/>
<AboutSection/>
<Projects/>
<OurTechStack/>
</>
  );
}
