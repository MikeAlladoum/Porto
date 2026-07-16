'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/lib/data';
import { SectionTitle, Card, GradientText } from './UI';

export const ExperienceSection: React.FC = () => {
  const typeIcons = {
    learning: '📚',
    milestone: '🎯',
    project: '🚀',
    achievement: '🏆',
  };

  const typeColors = {
    learning: 'text-neo-accent-light',
    milestone: 'text-neo-accent',
    project: 'text-neo-accent-purple',
    achievement: 'text-neo-accent-pink',
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Experience & Timeline"
          subtitle="My journey into blockchain and Web3"
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neo-accent via-neo-accent-purple to-neo-accent-pink"
              scaleY={0}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ originY: 0 }}
            />

            {/* Timeline items */}
            <div className="space-y-8 relative z-10">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`flex gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Left/Right content */}
                  <div className="w-1/2 hidden lg:block">
                    {index % 2 === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-right"
                      >
                        <Card variant="glass">
                          <h3 className="font-bold text-neo-accent-light mb-2">{item.title}</h3>
                          <p className="text-sm text-neo-text-light mb-2">{item.description}</p>
                          <p className="text-xs text-neo-accent">{item.date}</p>
                        </Card>
                      </motion.div>
                    )}
                  </div>

                  {/* Center dot/marker */}
                  <motion.div
                    className="w-0 flex justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg border-4 border-neo-dark ${
                        index % 2 === 0
                          ? 'bg-gradient-to-r from-neo-accent-light to-neo-accent'
                          : 'bg-gradient-to-r from-neo-accent-purple to-neo-accent'
                      }`}
                    >
                      {typeIcons[item.type as keyof typeof typeIcons]}
                    </div>
                  </motion.div>

                  {/* Right/Left content */}
                  <div className="w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Mobile version */}
                      <div className="lg:hidden">
                        <Card variant="glass">
                          <h3 className="font-bold text-neo-accent-light mb-2">{item.title}</h3>
                          <p className="text-sm text-neo-text-light mb-2">{item.description}</p>
                          <p className="text-xs text-neo-accent">{item.date}</p>
                        </Card>
                      </div>

                      {/* Desktop version */}
                      <div className="hidden lg:block">
                        {index % 2 !== 0 && (
                          <Card variant="glass">
                            <h3 className="font-bold text-neo-accent-light mb-2">{item.title}</h3>
                            <p className="text-sm text-neo-text-light mb-2">{item.description}</p>
                            <p className="text-xs text-neo-accent">{item.date}</p>
                          </Card>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
