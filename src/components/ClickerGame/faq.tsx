'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 'how-to-make-clicker-game-scratch',
    question: "How to make a clicker game on scratch?",
    answer: "To make a clicker game on Scratch, start by creating a sprite (like a cookie or button), add a variable to track points, and use the 'when this sprite clicked' block to increase the points by 1. Add more sprites for upgrades that cost points but increase your clicking power. You can also add background music and sound effects to make it more engaging.",
  },
  {
    id: 'how-to-make-clicker-game',
    question: "How to make a clicker game?",
    answer: "Making a clicker game involves several key elements: a clickable object that generates currency, upgrades that increase earning rates, achievements to unlock, and progression systems. You can use HTML5/JavaScript for web games, Unity for more complex games, or even simple tools like Scratch for beginners. Focus on creating an addictive loop of clicking, earning, and upgrading.",
  },
  {
    id: 'how-to-make-point-and-click-game',
    question: "How to make a point and click game?",
    answer: "Point and click games require creating interactive objects, inventory systems, puzzles, and narrative elements. Start with a game engine like Unity, Godot, or even Scratch. Design scenes with clickable hotspots, create an inventory system for items, implement puzzle logic, and add engaging storylines. Focus on intuitive UI design and clear visual feedback for player interactions.",
  },
  {
    id: 'how-to-make-cookie-clicker-scratch',
    question: "How to make a cookie clicker game on scratch?",
    answer: "Create a cookie clicker in Scratch by making a large cookie sprite, adding a 'cookies' variable, and programming the cookie to add 1 cookie when clicked. Add upgrade sprites like 'Grandma' or 'Factory' that cost cookies but generate automatic income. Use timer blocks to create passive income and display the cookie count on screen. Add visual effects and sounds to make clicking satisfying.",
  },
  {
    id: 'what-is-idle-clicker-game',
    question: "What is an idle clicker game?",
    answer: "An idle clicker game is a genre where players click to generate resources initially, but gradually unlock automated systems that continue generating resources even when not actively playing. These games focus on progression, upgrades, and optimization rather than skill-based gameplay. Popular examples include Cookie Clicker, Adventure Capitalist, and Clicker Heroes.",
  },
  {
    id: 'what-is-cookie-clicker-game',
    question: "What is cookie clicker game?",
    answer: "Cookie Clicker is the iconic incremental game that popularized the clicker genre. Players click a giant cookie to earn cookies, which can be spent on buildings and upgrades that automatically generate more cookies. The game features hundreds of achievements, prestige mechanics, and a surprisingly deep metagame with seasonal events and hidden features.",
  },
];

interface FAQProps {
  className?: string;
}

export default function FAQ({ className = '' }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === faqs.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(faqs.map(faq => faq.id)));
    }
  };

  return (
    <section className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Everything you need to know about clicker games
        </p>
        <button
          onClick={toggleAll}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          aria-label={openItems.size === faqs.length ? "Collapse all questions" : "Expand all questions"}
        >
          {openItems.size === faqs.length ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Collapse All
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Expand All
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);
          
          return (
            <div
              key={faq.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </button>
              
              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}