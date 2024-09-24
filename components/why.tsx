'use client';

import { useMouseEffect } from '#/lib/use-mouse-effect';
import { cn } from '#/lib/utils';
import { motion } from 'framer-motion';
import {
  BlocksIcon,
  CodeIcon,
  DatabaseIcon,
  HandshakeIcon,
  LucideIcon,
  MessageCircleIcon,
  Plug2Icon,
} from 'lucide-react';

const why = [
  {
    title: 'Manage Multiple Bots',
    description:
      'Easily control bots from various platforms like Telegram and Discord all in one place.',
    icon: MessageCircleIcon,
  },
  {
    title: 'One-Click Plugin Install',
    description:
      'Add or remove features instantly with our plugin marketplace. No complicated setups.',
    icon: Plug2Icon,
  },
  {
    title: 'Open-Source',
    description:
      'Collaborate with developers around the world by contributing to the ever-growing plugin ecosystem.',
    icon: CodeIcon,
  },
  {
    title: 'Customizable Dashboard',
    description:
      'Place widgets and settings where you need them, just like you would on your mobile device.',
    icon: DatabaseIcon,
  },
  {
    title: 'Extend Bot Functionality',
    description:
      "Enhance your bot's capabilities with plugins tailored for specific platforms and tasks.",
    icon: BlocksIcon,
  },
  {
    title: 'Developer-Friendly',
    description:
      'Build plugins easily using modern technologies like React, Node.js, and TailwindCSS.',
    icon: HandshakeIcon,
  },
];

type CardProps = {
  title: string;
  description: string;
  className?: string;
  icon: LucideIcon;
};
function Card({ title, description, className, icon: Icon }: CardProps) {
  const { cardRef, Render } = useMouseEffect('rgba(131, 255, 143, 0.1)');

  return (
    <div
      className={cn(
        'relative z-20 h-60 group rounded-2xl p-8 flex flex-col justify-center backdrop-blur-xl bg-black/10 border border-neutral-800/40',
        className,
      )}
      ref={cardRef}
    >
      <div className="text-green-400">
        <Icon size={50} />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-muted-foreground/70">{description}</p>
      </div>

      <Render />
    </div>
  );
}

function Why() {
  return (
    <div className="py-20 relative">
      <div className="absolute inset-0 flex xl:items-center justify-end">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            visible: { opacity: 0.4, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="w-[45rem] h-[70rem] xl:h-[40rem] bg-gradient-to-br from-green-500/30 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container py-8">
        <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
          What makes <br />
          <span className="text-green-500">BotMate</span> different?
        </h1>
        <p className="text-muted-foreground/70 mt-2 max-w-xl">
          BotMate is designed to be a powerful yet simple platform for managing
          bots. Here are some reasons why you should choose BotMate.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-col gap-2 px-4 lg:px-0">
        <div className="grid xl:grid-cols-6 gap-2">
          <Card {...why[0]} className="col-span-3" />
          <Card {...why[1]} className="col-span-3" />
        </div>
        <div className="grid xl:grid-cols-6 gap-2">
          <div className="xl:col-span-2">
            <Card {...why[2]} className="h-full" />
          </div>
          <div className="xl:col-span-4">
            <div className="grid xl:grid-cols-2 gap-2">
              <Card {...why[3]} />
              <Card {...why[4]} />
              <div className="xl:col-span-2">
                <Card {...why[5]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
