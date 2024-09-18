import React from 'react';

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
  return (
    <div className="py-12">
      <div className="container">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
            FAQs
          </h1>
          <p className="text-muted-foreground/70 mt-2 max-w-xl">
            Here are some frequently asked questions about BotMate.
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div className="relative group rounded-xl py-8 flex flex-col gap-8">
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-primary">
                    {faq.question}
                  </h2>
                  <p className="mt-1 text-muted-foreground/70">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
