'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './UI';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neo-darker border-t border-neo-accent/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              <GradientText type="cyan">MIKE</GradientText>
            </h3>
            <p className="text-neo-text-light text-sm">
              Web3 Developer | Building the future of decentralized systems
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-neo-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neo-text-light text-sm">
              <li>
                <a href="#about" className="hover:text-neo-accent transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-neo-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neo-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-neo-accent mb-4">Tech Stack</h4>
            <p className="text-neo-text-light text-sm">
              Next.js • React • Tailwind CSS • Framer Motion • Web3.js
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neo-accent to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-neo-text-light text-sm">
            © {currentYear} DJEKOURMAN ALLADOUM MIKE. All rights reserved. | Made with ❤️ in Lomé, Togo
          </p>
          <p className="text-neo-accent text-xs mt-4 md:mt-0">
            🔐 Privacy • Secure • Web3-First
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
