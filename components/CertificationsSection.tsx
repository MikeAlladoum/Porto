'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/lib/data';
import { Card, SectionTitle, GradientText, NeonButton } from './UI';

export const CertificationsSection: React.FC = () => {
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: '',
    date: new Date().getFullYear().toString(),
    badge: '🎖️',
  });
  const [certs, setCerts] = useState(certifications);
  const [showForm, setShowForm] = useState(false);

  const handleAddCertification = () => {
    if (newCert.title && newCert.issuer) {
      setCerts([...certs, { id: certs.length + 1, ...newCert }]);
      setNewCert({
        title: '',
        issuer: '',
        date: new Date().getFullYear().toString(),
        badge: '🎖️',
      });
      setShowForm(false);
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Certifications & Achievements"
          subtitle="Continuous learning and recognition in blockchain"
        />

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="glass" className="text-center h-full hover:shadow-neon transition-all">
                <div className="text-5xl mb-4">{cert.badge}</div>
                <h3 className="text-xl font-bold text-neo-accent-light mb-2">{cert.title}</h3>
                <p className="text-neo-text-light text-sm mb-3">{cert.issuer}</p>
                <p className="text-neo-accent text-xs font-semibold">{cert.date}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add Certification Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {!showForm ? (
            <motion.button
              onClick={() => setShowForm(true)}
              className="w-full px-6 py-4 rounded-lg border-2 border-dashed border-neo-accent text-neo-accent hover:bg-neo-accent/5 transition-all font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              + Add New Certification
            </motion.button>
          ) : (
            <Card variant="bordered" className="border-neo-accent-light/50">
              <h3 className="text-xl font-bold text-neo-accent-light mb-6">Add Certification</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Certification Title
                  </label>
                  <input
                    type="text"
                    value={newCert.title}
                    onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                    placeholder="e.g., AWS Certified Developer"
                    className="w-full px-4 py-2 rounded-lg bg-neo-dark border border-neo-accent/30 text-neo-text focus:outline-none focus:border-neo-accent"
                  />
                </div>
                <div>
                  <label className="block text-neo-text-light text-sm font-semibold mb-2">
                    Issuer
                  </label>
                  <input
                    type="text"
                    value={newCert.issuer}
                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                    placeholder="e.g., Amazon Web Services"
                    className="w-full px-4 py-2 rounded-lg bg-neo-dark border border-neo-accent/30 text-neo-text focus:outline-none focus:border-neo-accent"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neo-text-light text-sm font-semibold mb-2">
                      Date
                    </label>
                    <input
                      type="text"
                      value={newCert.date}
                      onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                      placeholder="2024"
                      className="w-full px-4 py-2 rounded-lg bg-neo-dark border border-neo-accent/30 text-neo-text focus:outline-none focus:border-neo-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-neo-text-light text-sm font-semibold mb-2">
                      Badge Emoji
                    </label>
                    <input
                      type="text"
                      value={newCert.badge}
                      onChange={(e) => setNewCert({ ...newCert, badge: e.target.value })}
                      maxLength={2}
                      className="w-full px-4 py-2 rounded-lg bg-neo-dark border border-neo-accent/30 text-neo-text focus:outline-none focus:border-neo-accent"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleAddCertification}
                    className="flex-1 px-4 py-2 rounded-lg bg-neo-accent text-neo-dark font-semibold hover:shadow-neon transition-all"
                  >
                    Save Certification
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 rounded-lg border border-neo-accent text-neo-accent hover:bg-neo-accent/10 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
};
