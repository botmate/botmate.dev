const why = [
  {
    title: 'Manage Multiple Bots',
    description:
      'Easily control bots from various platforms like Telegram and Discord all in one place.',
  },
  {
    title: 'One-Click Plugin Install',
    description:
      'Add or remove features instantly with our plugin marketplace. No complicated setups.',
  },
  {
    title: 'Customizable Dashboard',
    description:
      'Place widgets and settings where you need them, just like you would on your mobile device.',
  },
  {
    title: 'Developer-Friendly',
    description:
      'Build plugins easily using modern technologies like React, Node.js, and TailwindCSS.',
  },
  {
    title: 'Extend Bot Functionality',
    description:
      "Enhance your bot's capabilities with plugins tailored for specific platforms and tasks.",
  },
  {
    title: 'Open-Source',
    description:
      'Collaborate with developers around the world by contributing to the ever-growing plugin ecosystem.',
  },
];

function Why() {
  return (
    <div className="py-12 bg-neutral-900/50">
      <div className="container py-8">
        <h1 className="text-4xl lg:text-5xl font-semibold mt-4 lg:leading-snug">
          What makes <br />
          <span className="text-primary">BotMate</span> different?
        </h1>
        <p className="text-muted-foreground/70 mt-2 max-w-xl">
          BotMate is designed to be a powerful yet simple platform for managing
          bots. Here are some reasons why you should choose BotMate.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 py-6 max-w-[1300px] mx-auto gap-4 px-4 2xl:px-0">
        {why.map((item, index) => (
          <div key={index}>
            <div className="relative group rounded-xl py-8 flex flex-col">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-muted-foreground/70">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
