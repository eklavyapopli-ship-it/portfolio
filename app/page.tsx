import Image from "next/image";
import { Hero } from "./components/Hero";
import OurTechStack from "./components/techstack";
import AboutSection from "./components/about";
import { Projects } from "./components/projects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SocialSection from "./components/social";
import ContactForm from "./components/contact";
import { Sociova } from "./components/sociova";
import { Journey } from "./components/journey";

export default function Home() {
  return (
<>
<Hero/>
<AboutSection/>
<Projects/>
<Sociova/>
<OurTechStack/>
<SocialSection/>
<Journey/>
<ContactForm/>
<BackgroundBeams/>
</>
  );
}
