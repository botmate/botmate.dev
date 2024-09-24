'use client';

import {
  BlocksIcon,
  ExternalLinkIcon,
  FlameIcon,
  InfoIcon,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouseEffect } from '#/lib/use-mouse-effect';

const items = [
  {
    title: 'Learn more',
    description: 'Learn more about plugins and how to install them.',
    icon: InfoIcon,
    link: 'https://docs.botmate.dev/plugins/introduction',
  },
  {
    title: 'Explore',
    description: 'Explore the plugins built by the community.',
    icon: FlameIcon,
    link: 'https://market.botmate.dev/explore',
  },
  {
    title: 'Develop',
    description: 'Start developing your own plugins for BotMate.',
    icon: BlocksIcon,
    link: 'https://docs.botmate.dev/plugins/create-plugin',
  },
];

function Plugins() {
  return (
    <div className="relative xl:h-screen flex items-center">
      <div className="absolute inset-0 flex items-center justify-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={{
            visible: { opacity: 0.5, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="w-[35rem] h-96 bg-gradient-to-br from-red-500/30 to-primary/5 rounded-full blur-3xl"
        />
      </div>
      <div className="container py-12 space-y-20 relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
              <span className="text-red-400">Plugins.</span> <br /> Extend your
              bot.
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-muted-foreground/70">
              BotMate is designed to be extensible. You can install multiple
              plugins to add more features to your bot. Plugins can add
              commands, dashboard pages, and more.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {items.map((plugin, index) => (
            <Card key={index} plugin={plugin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plugins;

function Card({ plugin }: { plugin: (typeof items)[0] }) {
  const { cardRef, Render } = useMouseEffect('rgba(248, 113, 113, 0.1)');

  return (
    <div
      className="relative z-20 bg-gradient-to-t from-white/5 to-primary/5 backdrop-blur-md rounded-xl px-8 py-8 flex flex-col gap-8"
      ref={cardRef}
    >
      <div className="text-red-400">
        <plugin.icon size={100} />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{plugin.title}</h3>
        <p className="mt-1 text-muted-foreground/70">{plugin.description}</p>
      </div>

      <motion.div className="bottom-0 left-0 right-0">
        <a
          href={plugin.link}
          className="flex items-center gap-2"
          target="_blank"
        >
          Learn more <ExternalLinkIcon size={16} />{' '}
        </a>
      </motion.div>

      <Render />
    </div>
  );
}
