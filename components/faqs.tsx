'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is BotMate?',
    answer:
      'BotMate is a platform that allows you to manage multiple bots from different platforms (like Telegram and Discord) all in one place. You can also extend bot functionality by installing plugins.',
  },
  {
    question: 'How do I install plugins?',
    answer:
      'You can easily install plugins from the BotMate marketplace with just one click. Plugins extend the functionality of your bots and can be customized on the dashboard.',
  },
  {
    question: 'Can I create my own plugins?',
    answer:
      'Yes, BotMate is developer-friendly! You can create and upload your own plugins using modern technologies like React, Node.js, and TailwindCSS.',
  },
  {
    question: 'Is BotMate open source?',
    answer:
      'Yes, BotMate is an open-source project, which means you can contribute to its development or create new plugins for the community.',
  },
  {
    question: 'What platforms are supported?',
    answer:
      'Currently, BotMate supports platforms like Telegram and Discord. More platforms can be added through plugins, depending on community contributions.',
  },
];

function FAQs() {
  const [clicked, setClicked] = React.useState<number | null>(null);
  return (
    <div className="py-12 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={{
            visible: { opacity: 0.5, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="w-[40rem] h-96 bg-gradient-to-br from-primary/50 to-primary-500/50 rounded-full blur-3xl"
        />
      </div>
      <div className="container">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
            FAQs
          </h1>
          <p className="text-muted-foreground/70 mt-2 max-w-xl">
            Here are some frequently asked questions about BotMate.
          </p>
        </div>
        <div className="mt-4">
          {faqs.map((faq, index) => (
            <AnimatePresence key={index}>
              <div className="relative group rounded-xl py-4 flex flex-col gap-8">
                <div>
                  <h2
                    className={
                      'text-xl font-semibold group-hover:text-primary cursor-pointer' +
                      (clicked === index ? ' text-primary' : '')
                    }
                    onClick={() => {
                      setClicked(clicked === index ? null : index);
                    }}
                  >
                    {faq.question}
                  </h2>
                  <motion.div
                    initial="hidden"
                    animate={clicked === index ? 'visible' : 'hidden'}
                    variants={{
                      visible: { opacity: 1, height: 'auto' },
                      hidden: { opacity: 0, height: 0 },
                    }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
