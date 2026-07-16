'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Header,
  HeroSection,
  AboutSection,
  TechStackSection,
  ProjectsSection,
  CertificationsSection,
  ExperienceSection,
  TestimonialsSection,
  ContactSection,
  Footer,
} from '@/components';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-neo-darker"
    >
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <AboutSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Experience Timeline Section */}
      <ExperienceSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating background elements */}
      <motion.div
        className="fixed -bottom-40 -left-40 w-80 h-80 bg-neo-accent-purple/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="fixed -top-40 -right-40 w-80 h-80 bg-neo-accent-pink/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.main>
  );
}
