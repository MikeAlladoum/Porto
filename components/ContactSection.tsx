'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/lib/data';
import { Card, SectionTitle, NeonButton, GradientText } from './UI';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Let's Connect"
          subtitle="Ready to collaborate on your next Web3 project?"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-neo-accent-light mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-neo-dark/50 border border-neo-accent/30 text-neo-text placeholder-neo-text-light/50 focus:outline-none focus:border-neo-accent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-neo-dark/50 border border-neo-accent/30 text-neo-text placeholder-neo-text-light/50 focus:outline-none focus:border-neo-accent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's collaborate..."
                    className="w-full px-4 py-3 rounded-lg bg-neo-dark/50 border border-neo-accent/30 text-neo-text placeholder-neo-text-light/50 focus:outline-none focus:border-neo-accent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-neo-dark/50 border border-neo-accent/30 text-neo-text placeholder-neo-text-light/50 focus:outline-none focus:border-neo-accent transition-all resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-neo-accent text-neo-dark font-semibold hover:shadow-neon transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? '✓ Sent!' : 'Send Message'}
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-neo-accent-light mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-neo-accent/20 hover:border-neo-accent hover:bg-neo-accent/10 transition-all"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <p className="font-semibold text-neo-accent">{link.name}</p>
                      <p className="text-xs text-neo-text-light">{link.url.replace(/^https?:\/\//, '').split('/')[0]}</p>
                    </div>
                    <span className="ml-auto text-neo-accent-light">→</span>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Quick Info */}
            <Card variant="glass">
              <h3 className="text-lg font-bold text-neo-accent-light mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-neo-text-light">📍 Location</p>
                  <p className="font-semibold text-neo-accent">Lomé, Togo</p>
                </div>
                <div>
                  <p className="text-sm text-neo-text-light">💼 Availability</p>
                  <p className="font-semibold text-neo-accent">Open for Remote Roles</p>
                </div>
                <div>
                  <p className="text-sm text-neo-text-light">⚡ Response Time</p>
                  <p className="font-semibold text-neo-accent">24-48 hours</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
