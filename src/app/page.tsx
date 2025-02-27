'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from "../sections/Header";
import { FirstSection } from "../sections/First";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperienceEducation } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,  
      offset: 120,  
      duration: 1500, 
      easing: 'ease-in-out',  
      delay: 100, 
    });

    AOS.refresh(); 
  }, []);

  return (
    <div>
      <Header />
      <FirstSection data-aos="fade-up" />
      <ProjectsSection data-aos="fade-left" />
      <AboutSection data-aos="fade-right" />
      <ExperienceEducation data-aos="zoom-in" />
      <ContactSection data-aos="fade-up" />
      <Footer />
    </div>
  );
}
