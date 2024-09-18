'use client';

import {
  BlocksIcon,
  ExternalLinkIcon,
  GlobeIcon,
  ShieldIcon,
} from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Learn more',
    description: 'Learn more about plugins and how to install them.',
    icon: ShieldIcon,
    link: 'https://docs.botmate.dev/plugins/introduction',
  },
  {
    title: 'Explore',
    description: 'Explore the plugins built by the community.',
    icon: GlobeIcon,
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
    <div className="">
      <div className="container py-12 space-y-20 relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
              Plugins. <br /> Extend your bot.
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
            <div
              className="relative bg-card group lg:bg-gradient-to-t from-card to-transparent hover:to-neutral-900 rounded-xl px-8 py-8 flex flex-col gap-8"
              key={index}
            >
              <div>
                <plugin.icon size={100} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{plugin.title}</h3>
                <p className="mt-1 text-muted-foreground/70">
                  {plugin.description}
                </p>
              </div>

              <motion.div className="lg:absolute lg:hidden group-hover:block backdrop-blur-lg bottom-0 left-0 right-0 lg:p-4">
                <a
                  href={plugin.link}
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground/100"
                  target="_blank"
                >
                  Learn more <ExternalLinkIcon size={16} />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plugins;
