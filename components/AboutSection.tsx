'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText, Card, SectionTitle } from './UI';

export const AboutSection: React.FC = () => {
  const interests = [
    { title: 'Blockchain Security', description: 'Deeply passionate about secure smart contract development' },
    { title: 'DeFi Protocols', description: 'Exploring innovative financial systems on the blockchain' },
    { title: 'Trading Systems', description: 'Analyzing and building algorithmic trading solutions' },
    { title: 'Decentralized Infrastructure', description: 'Building the Web3 stack of tomorrow' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer, rapid learner, problem solver"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-neo-text-light leading-relaxed">
              I'm a passionate junior blockchain developer with a keen interest in building secure
              and scalable Web3 solutions. My journey into blockchain began with curiosity and has
              evolved into serious technical expertise.
            </p>

            <p className="text-lg text-neo-text-light leading-relaxed">
              What sets me apart is my adaptability and problem-solving mindset. I thrive in
              dynamic environments, quickly learning new technologies and paradigms. Whether it's
              mastering a new blockchain, smart contract language, or DeFi protocol, I approach
              each challenge systematically and creatively.
            </p>

            {/* Quote */}
            <Card variant="bordered" className="border-neo-accent-light/50 mt-8">
              <p className="text-xl text-neo-accent-light italic">
                "Like Python, I adapt quickly to every environment and challenge."
              </p>
              <p className="text-sm text-neo-text-light mt-3">— A reflection on my philosophy</p>
            </Card>

            <div className="space-y-3">
              <p className="text-neo-text-light">
                <span className="text-neo-accent-purple font-semibold">Core Strengths:</span>
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-neo-accent mt-1">✓</span>
                  <span className="text-neo-text-light">Fast learner with strong problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neo-accent mt-1">✓</span>
                  <span className="text-neo-text-light">Deep understanding of blockchain concepts and security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neo-accent mt-1">✓</span>
                  <span className="text-neo-text-light">Full-stack Web3 development capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neo-accent mt-1">✓</span>
                  <span className="text-neo-text-light">Collaborative and adaptable team member</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side - Interests grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Card variant="glass">
                  <h3 className="text-lg font-semibold text-neo-accent mb-2">{interest.title}</h3>
                  <p className="text-neo-text-light">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
