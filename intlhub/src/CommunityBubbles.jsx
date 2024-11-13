import { useState, useEffect, useRef } from 'react';

const CommunityBubbles = () => {
  const baseCommunities = [
    { name: 'r/programming', type: 'reddit', url: 'https://reddit.com/r/programming', color: 'bg-orange-400' },
    { name: 'r/learnprogramming', type: 'reddit', url: 'https://reddit.com/r/learnprogramming', color: 'bg-orange-500' },
    { name: 'Programming Hub', type: 'discord', url: 'https://discord.gg/programming', color: 'bg-indigo-400' },
    { name: 'Coders', type: 'discord', url: 'https://discord.gg/coders', color: 'bg-indigo-500' },
    { name: 'Stack Overflow', type: 'stack', url: 'https://stackoverflow.com', color: 'bg-yellow-500' },
    { name: 'Dev.to', type: 'blog', url: 'https://dev.to', color: 'bg-black' },
  ];

  const [communities] = useState([...baseCommunities, ...baseCommunities]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
      }
    };

    const animation = setInterval(animate, 50);
    scrollContainer?.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(animation);
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-gray-100 p-4">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-hidden whitespace-nowrap"
      >
        <div className="inline-flex gap-4 px-4">
          {communities.map((community, index) => (
            <a
              key={`${community.name}-${index}`}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${community.color}
                w-24 h-24
                rounded-full
                flex items-center justify-center
                group
                hover:scale-110
                transition-all duration-300
                flex-shrink-0
              `}
            >
              <div className="text-white text-center p-2">
                <span className="text-xs font-medium block">{community.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityBubbles;
