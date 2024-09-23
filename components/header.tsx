import React from 'react';
import { Button } from './ui/button';

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Docs',
    href: 'https://docs.botmate.dev',
  },
];

function Header() {
  return (
    <div className="sticky top-0 w-full min-h-20 h-20 z-20 bg-black/80 backdrop-blur items-center flex">
      <div className="flex items-center container">
        <h1 className="font-semibold text-2xl">botmate</h1>
        <div className="flex-1" />
        {links.map(link => (
          <Button key={link.href} variant="ghost" className="ml-4">
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Header;
