'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { LuCheck, LuCopy, LuTerminal, LuGithub, LuBook } from 'react-icons/lu';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '#/components/ui/tooltip';
import { FaTelegramPlane } from 'react-icons/fa';

const info = [
  {
    name: 'GitHub',
    url: 'https://github.com/botmate/botmate',
    icon: LuGithub,
  },
  {
    name: 'Documentation',
    url: 'https://docs.botmate.dev',
    icon: LuBook,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/chatbotmate',
    icon: FaTelegramPlane,
  },
];

const Gradient = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      animate={{ opacity: 0.5, y: 0 }}
      className="-z-10 absolute h-96 w-96 bg-gradient-to-br from-primary to-secondary rounded-full top-24 right-24 lg:left-24 blur-3xl"
    />
  </>
);

const heading = `the ultimate bot platform`;
const description = `BotMate lets you manage multiple bots across different platforms from one simple dashboard. Customize with plugins, add widgets, and easily control settings—all in one place.`;

function Hero() {
  const [copied, setCopied] = React.useState(false);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  return (
    <div className="h-screen flex flex-col justify-center relative py-12 lg:py-24 overflow-hidden">
      <Gradient />

      <div className="container flex flex-col gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="flex justify-center items-center"
        >
          <Image
            src="/logo.svg"
            className="rounded-[2rem] hover:scale-105 transition-transform pointer-events-none lg:scale-100 scale-90"
            width={120}
            height={120}
            alt="BotMate Logo"
            draggable={false}
          />
        </motion.div>

        <div className="space-y-8">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 10 },
              hidden: { opacity: 0, y: 0 },
            }}
            className="text-2xl lg:text-[3.8rem] font-bold text-center text-white"
            style={{
              lineHeight: '2',
            }}
          >
            the{' '}
            <span className="p-2 bg-primary rounded-xl text-3xl lg:text-[4rem]">
              ultimate
            </span>{' '}
            bot platform
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, y: 10 },
              hidden: { opacity: 0, y: 0 },
            }}
            className="text-center text-white text-md lg:text-xl font-medium max-w-[20rem] lg:max-w-3xl mx-auto"
          >
            BotMate lets you manage multiple bots across different platforms
            from one simple dashboard. Customize with plugins, add widgets, and
            easily control settings—all in one place.
          </motion.p>
        </div>
        <TooltipProvider>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            variants={{
              visible: { opacity: 1, y: -10 },
              hidden: { opacity: 0, y: 0 },
            }}
            className="flex justify-center"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-gradient-to-br from-background to-background/50 hover:border-primary transition-colors duration-200">
              <LuTerminal strokeWidth={2} />
              <span className="select-none">pnpm create botmate</span>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  {copied ? (
                    <LuCheck />
                  ) : (
                    <LuCopy
                      className="cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText('pnpm create botmate');
                        setCopied(true);
                      }}
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </motion.div>
        </TooltipProvider>
      </div>

      <div className="hidden lg:block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          variants={{
            visible: { opacity: 1, y: -10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="flex justify-center gap-4 mt-10"
        >
          {info.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="text-white" size={24} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
