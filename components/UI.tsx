'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  type?: 'cyan' | 'purple' | 'pink' | 'rainbow';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  type = 'cyan',
}) => {
  const gradients = {
    cyan: 'from-neo-accent via-neo-accent-light to-neo-accent',
    purple: 'from-neo-accent-purple via-neo-accent to-neo-accent-purple',
    pink: 'from-neo-accent-pink via-neo-accent to-neo-accent-pink',
    rainbow: 'from-neo-accent via-neo-accent-purple to-neo-accent-pink',
  };

  return (
    <span
      className={`bg-gradient-to-r ${gradients[type]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary:
      'bg-neo-accent text-neo-dark hover:shadow-neon shadow-neon transition-all duration-300',
    secondary:
      'border-2 border-neo-accent text-neo-accent hover:bg-neo-accent/10 hover:shadow-neon transition-all duration-300',
    tertiary:
      'border-2 border-neo-accent-purple text-neo-accent-purple hover:bg-neo-accent-purple/10 hover:shadow-neon-purple transition-all duration-300',
  };

  const baseClasses = `px-6 py-3 rounded-lg font-semibold text-center inline-block ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-neo-card/30 backdrop-blur-md',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10',
    bordered: 'bg-neo-card/20 backdrop-blur-md border border-neo-accent/30',
  };

  return (
    <div
      className={`rounded-xl p-6 border border-neo-accent/20 ${variants[variant]} hover:border-neo-accent/50 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  animated?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  animated = true,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={animated ? variants : undefined}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && <p className="text-neo-text-light text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};
