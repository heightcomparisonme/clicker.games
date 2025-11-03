'use client';

import { Star, Play, Calendar, Code, Tag, Users, Trophy, Zap, Target, Gift, HelpCircle } from 'lucide-react';

interface GameInfo {
  rating: number;
  votes: number;
  timesPlayed: number;
  developer: string;
  releaseDate: string;
  technology: string;
  classifications: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

const gameInfo: GameInfo = {
  rating: 4.3,
  votes: 436,
  timesPlayed: 193477,
  developer: "Orteil",
  releaseDate: "August 8, 2013",
  technology: "HTML5",
  classifications: ["Idle Games", "Incremental Games", "Clicker Games", "Browser Games"]
};

const faqs: FAQItem[] = [
  {
    question: "What is the best building in Cookie Clicker?",
    answer: "The best buildings are typically Antimatter Condensers and Prisms in the late game, as they generate the highest cookies per second. However, early game focus should be on Cursors, Grandmas, and Farms for efficient progression."
  },
  {
    question: "How do I get golden cookies in Cookie Clicker?",
    answer: "Golden cookies appear randomly on screen every few minutes. Click them quickly to get powerful temporary bonuses like increased production, cookie bonuses, or building cost reductions. Some upgrades increase their frequency."
  },
  {
    question: "What are heavenly chips and how do I use them?",
    answer: "Heavenly chips are earned when you ascend (reset your game). They provide permanent bonuses to cookie production and unlock powerful heavenly upgrades. You can spend them in the Legacy menu for permanent improvements."
  },
  {
    question: "When should I ascend in Cookie Clicker?",
    answer: "You should ascend when your progress slows significantly and you've earned enough heavenly chips to make meaningful upgrades. Generally, your first ascension should be around 200-300 heavenly chips for optimal efficiency."
  },
  {
    question: "Where can I play Cookie Clicker online?",
    answer: "You can play Cookie Clicker directly in your browser on our platform. No downloads required - just click the giant cookie and start your incremental journey to cookie domination!"
  }
];

const proTips = [
  "Click golden cookies immediately for powerful bonuses",
  "Focus on buying buildings that give the best cookies per second",
  "Don't neglect upgrades - they multiply your production significantly",
  "Consider ascending when you have 200-300 heavenly chips for your first prestige",
  "Check for seasonal events and limited-time upgrades"
];

interface SectionProps {
  className?: string;
}

export default function Section({ className = '' }: SectionProps) {
  const renderStarRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-5 h-5 text-gray-300" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 absolute top-0 left-0 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }} />
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <article className={`max-w-6xl mx-auto px-4 py-8 ${className}`}>
      {/* Game Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Cookie Clicker
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          The original incremental game that started it all! Click the giant cookie to earn cookies, buy buildings for passive income, and unlock hundreds of upgrades in this addictive idle game.
        </p>
        
        {/* Play Button */}
        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          <Play className="w-6 h-6" />
          Play Cookie Clicker Now - Free!
        </button>
      </header>

      {/* Game Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <div className="flex items-center justify-center mb-2">
            {renderStarRating(gameInfo.rating)}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{gameInfo.rating}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">({gameInfo.votes.toLocaleString()} votes)</div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{gameInfo.timesPlayed.toLocaleString()}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Times Played</div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{gameInfo.releaseDate}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Released</div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <Code className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{gameInfo.technology}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Technology</div>
        </div>
      </section>

      {/* Game Details */}
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-600" />
                Game Information
              </h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Developer</dt>
                  <dd className="text-lg text-gray-900 dark:text-white">{gameInfo.developer}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Release Date</dt>
                  <dd className="text-lg text-gray-900 dark:text-white">{gameInfo.releaseDate}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">Technology</dt>
                  <dd className="text-lg text-gray-900 dark:text-white">{gameInfo.technology}</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Tag className="w-6 h-6 text-blue-600" />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {gameInfo.classifications.map((classification, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {classification}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          What is Cookie Clicker?
        </h2>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Cookie Clicker is the original and most addictive incremental game that started the entire idle gaming genre. Players click a giant cookie to earn cookies, which can be spent on buildings and upgrades that automatically generate more cookies. What starts as simple clicking evolves into complex optimization strategies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The game features hundreds of upgrades, achievements, and prestige mechanics that allow you to reset your progress for permanent bonuses. With seasonal events, hidden features, and endless progression, Cookie Clicker provides countless hours of satisfying incremental gameplay.
          </p>
        </div>
      </section>

      {/* How to Play */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          How to Play Cookie Clicker
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Click the Giant Cookie</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Start by clicking the large cookie to earn your first cookies. Each click generates cookies that you can spend on upgrades.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Buy Buildings</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Purchase cursors, grandmas, farms, and factories that automatically generate cookies per second, even when you're not clicking.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Unlock Upgrades</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Purchase powerful upgrades that multiply your cookie production and unlock new buildings and features.</p>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-500" />
          5 Pro Tips and Tricks to Progress Faster
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {proTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-blue-500" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="cursor-pointer p-6 font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                {faq.question}
              </summary>
              <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            It's Time to Start Cookie Clicking!
          </h2>
          <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
            Join millions of players in this addictive incremental game. Click cookies, buy buildings, unlock upgrades, and become the ultimate cookie empire builder!
          </p>
          <button className="inline-flex items-center gap-3 bg-white text-purple-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Play className="w-6 h-6" />
            Start Cookie Clicking Now - Completely Free!
          </button>
        </div>
      </section>
    </article>
  );
}
