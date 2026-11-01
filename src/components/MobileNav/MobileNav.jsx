import { useState, useEffect } from 'react';
import Icon from '../Icon';
import './MobileNav.css';

export default function MobileNav({ cards, onNavigateHome }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('/') || href.startsWith('#')) {
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <>
      {/* Hamburger button on top-left of mobile */}
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        <Icon name={isOpen ? 'close' : 'menu'} size={20} />
      </button>

      {/* Backdrop overlay */}
      <div
        className={`mobile-nav-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Left Navigation Drawer */}
      <aside
        className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Mobile section navigation"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-header">
          <div className="mobile-nav-title-group">
            <span className="mobile-nav-kicker">Navigation</span>
            <h2 className="mobile-nav-title">Sections</h2>
          </div>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <nav className="mobile-nav-body">
          <ul className="mobile-nav-list">
            {cards.map((card) => (
              <li key={card.number} className="mobile-nav-item">
                <a
                  href={card.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleLinkClick(e, card.href)}
                >
                  <span className="mobile-nav-icon">
                    <Icon name={card.icon} size={20} />
                  </span>
                  <div className="mobile-nav-info">
                    <div className="mobile-nav-item-top">
                      <span className="mobile-nav-num">{card.number}</span>
                      <span className="mobile-nav-heading">{card.title}</span>
                    </div>
                    <span className="mobile-nav-sub">{card.subtitle}</span>
                  </div>
                  <Icon name="chevronRight" size={15} className="mobile-nav-chevron" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="mobile-nav-home-btn"
            onClick={handleHomeClick}
          >
            <Icon name="user" size={18} />
            <span>Home Overview</span>
          </button>
        </div>
      </aside>
    </>
  );
}
