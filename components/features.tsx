'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Activity,
  BarChart,
  LucideIcon,
  Palette,
  Plug,
  Settings2,
} from 'lucide-react';
import { motion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: 'Multiple Platforms',
    description: 'Manage bots across different platforms from one dashboard.',
    icon: Activity,
  },
  {
    title: 'Plugins',
    description: 'Customize your bots with plugins to to extend functionality.',
    icon: Plug,
  },
  {
    title: 'Analytics',
    description: 'View detailed analytics and insights of bot performance.',
    icon: BarChart,
  },
  {
    title: 'Settings',
    description: 'Easily control bots and plugins settings from one place.',
    icon: Settings2,
  },
  {
    title: 'Visual Editor (soon)',
    description: 'Design your bots visually with a drag-and-drop interface.',
    icon: Palette,
  },
  {
    title: 'Activity Logs',
    description: 'View detailed logs of bot activity and interactions.',
    icon: Activity,
  },
];

const GlowingFeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      const isNear =
        x >= -50 && x <= rect.width + 50 && y >= -50 && y <= rect.height + 50;
      setIsHovered(isNear);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-visible rounded-xl bg-card p-6 group border-2 border-transparent hover:border-primary`}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
    >
      <div className="flex flex-col gap-4">
        <feature.icon className="w-12 h-12 text-primary" />
        <div>
          <h3 className="text-2xl font-bold">{feature.title}</h3>
          <p className="text-muted-foreground mt-2">{feature.description}</p>
        </div>
      </div>
      {/* <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(219, 219, 219, 0.1), transparent 100%)`,
        }}
      /> */}
    </motion.div>
  );
};

const Gradient = () => (
  <>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 10 },
        hidden: { opacity: 0, y: 0 },
      }}
      className="-z-10 absolute h-72 w-72 bg-gradient-to-br from-primary/50 to-red-500/50 rounded-full top-44 right-24 lg:right-60 blur-3xl"
    />
  </>
);

function Features() {
  return (
    <div className="container mx-auto py-12 space-y-20 relative px-4 lg:px-0">
      <div>
        <h2 className="text-center text-lg font-bold text-neutral-500 uppercase">
          Features
        </h2>
        <h1 className="text-center text-3xl lg:text-4xl font-bold mt-4">
          Packed with features
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlowingFeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
