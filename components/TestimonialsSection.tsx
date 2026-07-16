'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import { Card, SectionTitle, GradientText } from './UI';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimonials"
          subtitle="What people say about working with me"
        />

        {/* Carousel */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            className="relative"
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="bordered" className="border-neo-accent/50">
              <div className="mb-6">
                <p className="text-2xl text-neo-accent-light mb-4">
                  "{testimonials[activeIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonials[activeIndex].avatar}</div>
                  <div>
                    <p className="font-bold text-neo-accent">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-neo-text-light">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation dots */}
          <motion.div
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-neo-accent w-8'
                    : 'bg-neo-accent/30 hover:bg-neo-accent/60'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </div>

        {/* All testimonials grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card
                variant="glass"
                className={`h-full cursor-pointer transition-all ${
                  index === activeIndex ? 'ring-2 ring-neo-accent' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <p className="font-bold text-neo-accent-light">{testimonial.name}</p>
                    <p className="text-xs text-neo-text-light">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neo-text-light text-sm italic">
                  "{testimonial.content.substring(0, 100)}..."
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
