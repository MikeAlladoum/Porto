'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import { Card, SectionTitle, GradientText, NeonButton } from './UI';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'featured'>('featured');

  const displayedProjects = selectedCategory === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Projects"
          subtitle="Innovative Web3 solutions showcasing blockchain expertise"
        />

        {/* Filter buttons */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => setSelectedCategory('featured')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'featured'
                ? 'bg-neo-accent text-neo-dark shadow-neon'
                : 'border-2 border-neo-accent text-neo-accent hover:bg-neo-accent/10'
            }`}
          >
            Featured Projects
          </button>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-neo-accent text-neo-dark shadow-neon'
                : 'border-2 border-neo-accent text-neo-accent hover:bg-neo-accent/10'
            }`}
          >
            All Projects
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card variant="bordered" className="h-full flex flex-col overflow-hidden group">
                {/* Project header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{project.image}</div>
                    {project.featured && (
                      <motion.span
                        className="px-3 py-1 rounded-full bg-neo-accent/20 text-neo-accent text-xs font-semibold"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Featured
                      </motion.span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-neo-accent-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neo-text-light text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs mr-2 ${
                        project.status === 'Completed'
                          ? 'bg-neo-accent/20 text-neo-accent'
                          : 'bg-neo-accent-purple/20 text-neo-accent-purple'
                      }`}
                    >
                      {project.status}
                    </span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-neo-text-light mb-6 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="mb-6">
                  <p className="text-xs text-neo-text-light mb-2 font-semibold">TECH STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-neo-accent/10 border border-neo-accent/30 text-neo-accent text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-6 border-t border-neo-accent/20">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg border border-neo-accent text-neo-accent text-center text-sm font-semibold hover:bg-neo-accent/10 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      🐙 GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg bg-neo-accent/20 border border-neo-accent text-neo-accent text-center text-sm font-semibold hover:bg-neo-accent/40 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      🚀 Live Demo
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-neo-text-light mb-6">Want to see more?</p>
          <a
            href="https://github.com/MikeAlladoum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg border-2 border-neo-accent-purple text-neo-accent-purple hover:bg-neo-accent-purple/10 font-semibold transition-all"
          >
            Visit GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
