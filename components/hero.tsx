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
import { StarIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

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

const heading = `The ultimate bot platform for everyone.`;
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
    <div className="h-screen flex items-center py-20 relative">
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        animate={{ opacity: 0.3, y: 0 }}
        className="absolute -top-[65rem] left-0 right-0 w-[80rem] mx-auto aspect-square bg-gradient-to-br from-primary to-primary rounded-full blur-3xl transform"
      /> */}

      <div className="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(#1f1f1ff1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="container z-10">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl items-center gap-2 p-2 backdrop-blur-md bg-black/30"
          >
            <a href="https://github.com/botmate/botmate" target="_blank">
              <div className="text-xs bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Give us star on GitHub
              </div>
            </a>
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <h1 className="mx-auto text-4xl md:text-7xl font-semibold text-white max-w-4xl">
            {heading.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  hidden: { opacity: 0, y: 10, filter: 'blur(10px)' },
                }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {word === 'ultimate' ? (
                  <span className="font-bold text-transparent bg-gradient-to-r from-primary to-blue-400 bg-clip-text">
                    {word}
                  </span>
                ) : (
                  word
                )}{' '}
              </motion.span>
            ))}
          </h1>

          <p className="mt-10 mx-auto text-sm md:text-xl text-white max-w-2xl">
            {description.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' },
                  hidden: { opacity: 0, y: 20, x: -10, filter: 'blur(10px)' },
                }}
                transition={{ duration: 0.2, delay: index * 0.08 }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="mt-14">
          <TooltipProvider>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -10 },
              }}
              className="flex justify-center"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-gradient-to-br from-background to-background/50 hover:border-primary transition-colors duration-200">
                <LuTerminal strokeWidth={2} />
                <span className="select-none text-sm lg:text-md">
                  pnpm create botmate
                </span>
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
      </div>
    </div>
  );
  return (
    <div className="h-screen flex flex-col justify-center relative py-12 lg:py-24 overflow-hidden">
      <Gradient />

      <div className="container flex flex-col gap-12">
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
        <div className="flex justify-center">
          <motion.a
            href="https://www.producthunt.com/posts/botmate-simplify-your-bot-management?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-botmate&#0045;simplify&#0045;your&#0045;bot&#0045;management"
            target="_blank"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=491045&theme=dark"
              alt="BotMate&#0032;&#0045;&#0032;Simplify&#0032;Your&#0032;Bot&#0032;Management - Manage&#0032;all&#0032;your&#0032;bots&#0032;from&#0032;one&#0032;place&#0032;with&#0032;powerful&#0032;plugins&#0046; | Product Hunt"
              style={{ width: '250px', height: '54px' }}
              width="250"
              height="54"
            />
          </motion.a>
        </div>
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
