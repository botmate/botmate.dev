'use client';

import React from 'react';

function Footer() {
  return (
    <div className="py-20">
      <div className="text-center opacity-80">
        <h1 className="text-4xl font-semibold">botmate</h1>
        <p className="text-muted-foreground mt-2">
          © {new Date().getFullYear()} BotMate. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
