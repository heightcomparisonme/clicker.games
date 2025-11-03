'use client';

import { CheckCircle2, Gamepad2, Users, Zap, Smartphone, Download, DollarSign, Globe } from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeatureCategory {
  id: string;
  title: string;
  description?: string;
  features: Feature[];
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'why-choose',
    title: 'Why Choose ClickerGames?',
    description: 'Experience the ultimate clicker gaming collection with these incredible benefits',
    features: [
      {
        id: 'instant-play',
        icon: Zap,
        title: 'Instant Play',
        description: 'Start your clicker game adventure immediately'
      },
      {
        id: 'no-download',
        icon: Download,
        title: 'Zero Download Required',
        description: 'Play clicker games directly in your browser'
      },
      {
        id: 'cross-platform',
        icon: Smartphone,
        title: 'Cross-Platform Support',
        description: 'Enjoy clicker games on any device'
      },
      {
        id: 'completely-free',
        icon: DollarSign,
        title: 'Completely Free',
        description: 'Get the full clicker gaming experience without any cost'
      }
    ]
  },
  {
    id: 'game-features',
    title: 'Clicker Game Features',
    description: 'Discover what makes ClickerGames the ultimate idle gaming experience',
    features: [
      {
        id: 'idle-mechanics',
        icon: Gamepad2,
        title: 'Idle & Incremental',
        description: 'Progress and earn rewards even when you\'re not actively playing'
      },
      {
        id: 'upgrade-systems',
        icon: Users,
        title: 'Deep Upgrade Systems',
        description: 'Unlock hundreds of upgrades and achievements to boost your progress'
      },
      {
        id: 'satisfying-clicks',
        icon: Zap,
        title: 'Satisfying Click Mechanics',
        description: 'Experience addictive clicking with visual feedback and sound effects'
      },
      {
        id: 'prestige-systems',
        icon: Globe,
        title: 'Prestige & Reset Systems',
        description: 'Start over with permanent bonuses for exponential growth'
      }
    ]
  }
];

interface FeaturesProps {
  className?: string;
}

export default function Features({ className = '' }: FeaturesProps) {
  return (
    <section className={`py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Clicker Game Features & Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why ClickerGames is the most exciting clicker game collection you can play right now
          </p>
        </div>

        <div className="space-y-16">
          {featureCategories.map((category) => (
            <div key={category.id} className="w-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                          <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience ClickerGames?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Join millions of players worldwide and discover why ClickerGames is the most addictive clicker game collection ever created.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <Gamepad2 className="w-5 h-5" />
              Play Now - It's Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}