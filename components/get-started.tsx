'use client';
import { CloudIcon, DatabaseIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

function GetStarted() {
  return (
    <div className="py-12 relative">
      <div className="absolute inset-0 flex xl:items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            visible: { opacity: 0.4, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          className="w-[45rem] h-[70rem] xl:h-[40rem] bg-gradient-to-br from-primary/10 to-primary/40 rounded-full blur-3xl"
        />
      </div>

      <div className="container space-y-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
            Get started
          </h1>
          <p className="text-muted-foreground/70 mt-2 max-w-xl">
            It&apos;s easy to get started with BotMate. Follow these simple
            steps to start managing your bots.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="p-10 rounded-xl space-y-4 bg-black/20 backdrop-blur-xl">
            <DatabaseIcon size={70} />
            <div>
              <h1 className="text-2xl font-bold mt-4">Self-hosted</h1>
              <p className="text-muted-foreground mt-2">
                Click the button below to self-host BotMate on your server.
                It&apos;s just a few steps away!
              </p>
            </div>
            <div>
              <Link
                href="https://docs.botmate.dev/getting-started/installation"
                target="_blank"
              >
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
          <div className="p-10 rounded-xl space-y-4 bg-black/20 backdrop-blur-xl">
            <CloudIcon size={70} />
            <div>
              <h1 className="text-2xl font-bold mt-4">Cloud (coming soon)</h1>
              <p className="text-muted-foreground mt-2">
                Sign up for our cloud service and start managing your bots
                instantly. No setup required!
              </p>
            </div>
            <div>
              <Link href="https://botmate.cloud" target="_blank">
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
