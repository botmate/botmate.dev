import { FaTelegram, FaGithub, FaBook } from 'react-icons/fa';

const info = [
  {
    name: 'GitHub',
    url: 'https://github.com/botmate/botmate',
    icon: FaGithub,
  },
  {
    name: 'Documentation',
    url: 'https://botmate.dev/docs',
    icon: FaBook,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/chatbotmate',
    icon: FaTelegram,
  },
];

function Home() {
  return (
    <div className="flex flex-col h-screen justify-center max-w-[30rem] mx-auto px-4 lg:px-0">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">botmate.dev</h1>
        <p className="text-gray-500 dark:text-gray-300">
          Plugin based bot management platform, extend bot functionality with
          plugins and manage them with ease.
        </p>
      </div>

      <div className="flex gap-4 mt-8 flex-wrap">
        {info.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.url}
              className="flex items-center gap-1 text-gray-500 dark:text-gray-300 hover:-translate-y-1 transform transition"
            >
              <Icon size={18} className="mr-1" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>

      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-white dark:from-gray-900 to-transparent filter blur-3xl" />
    </div>
  );
}

export default Home;
