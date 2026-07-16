'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText, NeonButton } from './UI';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-neo-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-neo-accent-purple/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-neo-accent/10 border border-neo-accent/30 text-neo-accent text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Welcome to My Web3 Portfolio
            </motion.span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <GradientText type="rainbow">
              DJEKOURMAN <br /> ALLADOUM <br /> MIKE
            </GradientText>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-neo-accent-light mb-6">
            Blockchain & Web3 Developer
          </motion.h2>

          {/* Specialties */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Solidity', 'Solana', 'DeFi', 'DApps', 'Wallet Integration', 'Python'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-neo-card/50 border border-neo-accent/30 text-neo-accent-light text-sm"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-neo-text-light mb-12 max-w-2xl mx-auto"
          >
            Building secure and impactful{' '}
            <span className="text-neo-accent font-semibold">decentralized systems</span> for the
            future of Web3.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            <NeonButton href="#projects" variant="primary">
              View Projects →
            </NeonButton>
            <NeonButton href="#contact" variant="secondary">
              Contact Me
            </NeonButton>
            <NeonButton href="/cv.pdf" variant="tertiary">
              Download CV
            </NeonButton>
          </motion.div>

          {/* Location */}
          <motion.p variants={itemVariants} className="mt-12 text-neo-text-light">
            📍 Based in Lomé, Togo | 🌍 Available for Remote Opportunities
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-neo-accent text-2xl">↓</div>
      </motion.div>
    </section>
  );
};
