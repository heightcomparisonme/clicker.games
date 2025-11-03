'use client';

import GamePlayer from './GamePlayer';
import Section from './Section';
import Features from './features';
import FAQ from './faq';
import { games } from '@/lib/games';

interface ClickerGamesProps {
  className?: string;
}

export default function ClickerGames({ className = '' }: ClickerGamesProps) {
  const mostPlayedGames = games.filter((game) => game.popular).slice(0, 8);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${className}`}>
      {/* Game Player Section */}
      <div className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <GamePlayer />
        </div>
      </div>
      
      {/* Most Played Games Section */}
      <div className="bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div id="most-played">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-between">
                <span>🔥 Most Played Clicker Games</span>
                <a
                  href="/most-played"
                  className="text-blue-600 hover:text-blue-500 font-medium flex items-center space-x-1 transition-colors duration-200 text-base"
                >
                  <span>View more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </h2>
            </div>
            <div 
              className="overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex space-x-4" style={{ minWidth: 'max-content' }}>
                {mostPlayedGames.map((game) => (
                  <div key={game.id} className="flex-shrink-0 w-64">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 truncate">
                          {game.title}
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {game.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={`/game/${game.id}`}
                          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                        >
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto max-w-6xl" />
      
      {/* Main Game Information Section */}
      <Section className="bg-white dark:bg-gray-900" />
      
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto max-w-6xl" />
      
      {/* Game Features Section */}
      <Features className="bg-gray-50 dark:bg-gray-800" />
      
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto max-w-6xl" />
      
      {/* FAQ Section */}
      <FAQ className="bg-white dark:bg-gray-900 py-16" />
    </div>
  );
}

// Export individual components for flexibility
export { GamePlayer, Section, Features, FAQ };
