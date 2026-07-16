'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';
import { Card, SectionTitle, GradientText } from './UI';

export const TechStackSection: React.FC = () => {
  const categories = {
    blockchain: 'Blockchain',
    language: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    web3: 'Web3 & Wallets',
    database: 'Databases',
    tools: 'Tools & DevOps',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies I work with to build the future"
        />

        {Object.entries(categories).map((category) => (
          <motion.div key={category[0]} className="mb-12">
            <motion.h3
              className="text-2xl font-bold text-neo-accent mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-neo-accent-light">→</span>
              {category[1]}
            </motion.h3>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techStack
                .filter((tech) => tech.category === category[0])
                .map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <Card variant="glass" className="h-full">
                      <motion.div
                        className="flex flex-col items-center justify-center text-center h-full"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                        }}
                      >
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <p className="font-semibold text-neo-accent-light">{tech.name}</p>
                      </motion.div>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
