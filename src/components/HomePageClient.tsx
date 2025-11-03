'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import GameFilter from '@/components/GameFilter';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';
import ClickerGames from '@/components/ClickerGame';
import type { Game } from '@/lib/games';

interface HomePageClientProps {
  games: Game[];
}

export default function HomePageClient({ games }: HomePageClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const availableTags = useMemo(() => {
    const allTags = games.flatMap((game) => game.tags);
    return Array.from(new Set(allTags)).sort();
  }, [games]);

  const filteredGames = useMemo(() => {
    let filtered = games;

    if (searchQuery) {
      filtered = filtered.filter(
        (game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          game.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((game) =>
        selectedTags.every((tag) => game.tags.includes(tag)),
      );
    }

    return filtered;
  }, [games, searchQuery, selectedCategory, selectedTags]);

  const mostPlayedGames = filteredGames.filter((game) => game.popular).slice(0, 8);
  const recommendedGames = filteredGames.filter((game) => game.featured).slice(0, 8);
  const trendingGames = filteredGames.filter((game) => game.trending).slice(0, 8);
  const ioGames = filteredGames.filter((game) => game.category === 'io').slice(0, 8);
  const casualGames = filteredGames.filter((game) => game.category === 'casual').slice(0, 8);
  const actionGames = filteredGames.filter((game) => game.category === 'action').slice(0, 8);
  const carGames = filteredGames
    .filter((game) => game.category === 'car' || game.tags.includes('car'))
    .slice(0, 8);
  const puzzleGames = filteredGames.filter((game) => game.category === 'puzzle').slice(0, 8);
  const sportsGames = filteredGames.filter((game) => game.category === 'sports').slice(0, 8);
  const kidsGames = filteredGames.filter((game) => game.category === 'kids').slice(0, 8);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const hasActiveFilters =
    Boolean(searchQuery) || selectedCategory !== 'all' || selectedTags.length > 0;

  const structuredData = useMemo(() => {
    const topGames = filteredGames.slice(0, 6).map((game) => ({
      '@type': 'ListItem',
      position: filteredGames.indexOf(game) + 1,
      url: `https://cliker.games${game.href}`,
      name: game.title,
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Play Free Cookie Clicker & Idle Games | ClickerGames',
      description:
        'Instantly play free clicker games including Cookie Clicker, idle games, and incremental games on ClickerGames.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: topGames,
      },
    };
  }, [filteredGames]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="hero-gradient py-16 px-4 sm:px-6">
          <div className="container-custom text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cookie Clicker
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Experience the ultimate Cookie Clicker and incremental games collection! Click your way to cookie empire domination with satisfying idle mechanics. Build bakeries, unlock upgrades, and watch your cookie production skyrocket. Play the most addictive clicker games instantly - no downloads required!
            </p>

            <div className="max-w-2xl mx-auto mb-6">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search clicker games, Cookie Clicker, idle games..."
                className="mb-4"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`btn-secondary flex items-center space-x-2 ${showFilters ? 'bg-secondary/20' : ''}`}
                aria-expanded={showFilters}
              >
                <span>🔍</span>
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full text-xs">
                    !
                  </span>
                )}
              </button>
              <a href="#most-played" className="btn-primary">
                🎮 Play Cookie Clicker
              </a>
            </div>
          </div>
        </section>

        {/* Featured Game Section */}
        <ClickerGames />

        {showFilters && (
          <section className="py-8 bg-muted/20 border-b border-border px-4 sm:px-6">
            <div className="container-custom">
              <div className="space-y-6">
                <GameFilter
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                  availableTags={availableTags}
                />

                {hasActiveFilters && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <span className="text-accent mr-2">🔍</span>
                      Active Filters
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategory !== 'all' && (
                        <div className="flex items-center bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-md text-sm">
                          <span className="mr-2 capitalize">{selectedCategory}</span>
                          <button
                            onClick={() => setSelectedCategory('all')}
                            className="hover:text-primary-foreground transition-colors duration-200"
                            aria-label="Remove category filter"
                          >
                            ×
                          </button>
                        </div>
                      )}
                      {selectedTags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center bg-secondary/20 border border-secondary/30 text-secondary px-3 py-1 rounded-md text-sm"
                        >
                          <span className="mr-2">{tag}</span>
                          <button
                            onClick={() => handleTagToggle(tag)}
                            className="hover:text-secondary-foreground transition-colors duration-200"
                            aria-label={`Remove ${tag} tag`}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('all');
                          setSelectedTags([]);
                        }}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-200"
                      >
                        Clear all
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 sm:py-16 bg-background px-4 sm:px-6">
          <div className="container-custom space-y-12">
            <div id="most-played">
              <GameSection
                title="🔥 Most Played"
                games={mostPlayedGames}
                showViewMore
                viewMoreHref="/most-played"
                className="bg-background"
              />
            </div>

            <GameSection
              title="⭐ Recommended"
              games={recommendedGames}
              showViewMore
              viewMoreHref="/recommended"
              className="bg-muted/20"
            />

            <GameSection
              title="📈 Trending"
              games={trendingGames}
              showViewMore
              viewMoreHref="/trending"
              className="bg-background"
            />

            <GameSection
              title="🌐 IO Games"
              games={ioGames}
              showViewMore
              viewMoreHref="/category/io"
              className="bg-muted/20"
            />

            <GameSection
              title="🎲 Casual Games"
              games={casualGames}
              showViewMore
              viewMoreHref="/category/casual"
              className="bg-background"
            />

            <GameSection
              title="⚔️ Action Games"
              games={actionGames}
              showViewMore
              viewMoreHref="/category/action"
              className="bg-muted/20"
            />

            <GameSection
              title="🚗 Car Games"
              games={carGames}
              showViewMore
              viewMoreHref="/category/car"
              className="bg-background"
            />

            <GameSection
              title="🧩 Puzzle Games"
              games={puzzleGames}
              showViewMore
              viewMoreHref="/category/puzzle"
              className="bg-muted/20"
            />

            <GameSection
              title="🏅 Sports Games"
              games={sportsGames}
              showViewMore
              viewMoreHref="/category/sports"
              className="bg-background"
            />

            <GameSection
              title="👶 Kids Games"
              games={kidsGames}
              showViewMore
              viewMoreHref="/category/kids"
              className="bg-muted/20"
            />

            <section className="py-16 bg-card rounded-2xl px-6 sm:px-10">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Clicker Game Picks</h2>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      New clicker and idle games from top developers are added every day. Play
                      classics like{' '}
                      <Link href="/play/cookie-clicker" className="text-primary hover:underline mx-1">
                        Cookie Clicker
                      </Link>
                      ,{' '}
                      <Link href="/play/clicker-heroes" className="text-primary hover:underline mx-1">
                        Clicker Heroes
                      </Link>{' '}
                      and{' '}
                      <Link href="/play/adventure-capitalist" className="text-primary hover:underline mx-1">
                        Adventure Capitalist
                      </Link>
                      , or explore hits like{' '}
                      <Link href="/play/idle-breakout" className="text-primary hover:underline mx-1">
                        Idle Breakout
                      </Link>
                      ,{' '}
                      <Link href="/play/paper-clips" className="text-primary hover:underline mx-1">
                        Universal Paperclips
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/play/realm-grinder"
                        className="text-primary hover:underline mx-1"
                      >
                        Realm Grinder
                      </Link>
                      .
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      Our collection spans from{' '}
                      <Link href="/category/idle" className="text-primary hover:underline mx-1">
                        Idle Games
                      </Link>{' '}
                      to{' '}
                      <Link href="/category/incremental" className="text-primary hover:underline mx-1">
                        Incremental Games
                      </Link>
                      , ensuring every clicker game fan finds their perfect clicking experience.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
