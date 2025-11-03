import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ClickerGames', icon: '📘' },
    { name: 'Instagram', href: 'https://www.instagram.com/ClickerGames/', icon: '📷' },
    { name: 'LinkedIn', href: 'https://it.linkedin.com/company/ClickerGames', icon: '💼' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@ClickerGames', icon: '🎵' },
    { name: 'YouTube', href: 'https://www.youtube.com/@ClickerGamesofficial', icon: '📺' },
    { name: 'X (Twitter)', href: 'https://x.com/ClickerGames', icon: '𝕏' }
  ];

  const footerLinks = [
    { name: 'About Us', href: 'https://partners.clickergames.com' },
    { name: 'Contact Us', href: 'https://partners.clickergames.com/contact' },
    { name: 'Privacy Policy', href: '/privacy-cookie' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo-dark.png"
                alt="Clicker Games"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Experience the ultimate <strong>Clicker Games</strong>! Click your way to cookie empire domination with addictive idle mechanics. Build bakeries, unlock upgrades, and watch your production skyrocket. Play the most satisfying clicker games instantly with no downloads required!
            </p>
            <p className="text-sm text-muted-foreground">
              Start your cookie clicking adventure today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 bg-muted hover:bg-primary/10 rounded-lg transition-colors duration-200 group"
                  title={social.name}
                >
                  <span className="text-2xl mb-1">{social.icon}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Game Categories Links */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-bold text-foreground mb-4">Clicker Game Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Cookie Clicker', 'Idle Games', 'Incremental Games', 'Upgrade Systems',
              'Prestige Mechanics', 'Achievement System', 'Auto-Clickers', 'Passive Income',
              'Browser Games', 'Instant Play', 'Satisfying Clicks', 'Progress Tracking'
            ].map((feature) => (
              <span
                key={feature}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">
                Clicker Games s.r.l. Via Marsala 29h<br />
                0185 Rome, Italy VAT: 12327731001<br />
                REA: RM-1365971
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 Clicker Games. All rights reserved.
            </div>
          </div>
        </div>

        {/* For Developers Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-2">Join the Clicker Games Community</h3>
            <p className="text-muted-foreground mb-4">
              Connect with thousands of clicker game enthusiasts worldwide! Share your best strategies, compare your progress, and discover new incremental games. Start clicking your way to the top!
            </p>
            <a
              href="https://partners.clickergames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Start Clicking Now - Build Your Cookie Empire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
