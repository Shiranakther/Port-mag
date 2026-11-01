import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '../Icon';
import { pagesData } from './bookPages';
import './Book.css';

const HASH_TO_PAGE = {
  cover: 0,
  '': 0,
  contents: 1,
  toc: 1,
  about: 2,
  education: 3,
  experience: 4,
  skills: 5,
  certificates: 6,
  goals: 7,
  'career-goals': 7,
  contact: 8,
  back: 9,
  'back-cover': 9,
};

const PAGE_TO_HASH = [
  'cover',
  'contents',
  'about',
  'education',
  'experience',
  'skills',
  'certificates',
  'goals',
  'contact',
  'back',
];

export default function Book({ profile, onBackHome }) {
  // Mobile check (< 760px)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 760
  );

  // Read initial page from hash without animation
  const getInitialPage = () => {
    if (typeof window === 'undefined') return 0;
    const raw = window.location.hash.replace('#', '').toLowerCase();
    return Object.prototype.hasOwnProperty.call(HASH_TO_PAGE, raw) ? HASH_TO_PAGE[raw] : 0;
  };

  const initialPage = getInitialPage();
  const [currentPage, setCurrentPage] = useState(initialPage);
  // Desktop spread: Spread 0 is cover (0 sheets turned). Spread S has S sheets turned.
  const [spread, setSpread] = useState(() => (initialPage === 0 ? 0 : Math.ceil(initialPage / 2)));
  const [noTransition, setNoTransition] = useState(true);
  const [announcement, setAnnouncement] = useState('');

  // Dragging state
  const [dragState, setDragState] = useState(null); // { activeSheet, angle, direction }
  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    intent: null, // 'turn' | 'scroll' | null
    isDragging: false,
    activeSheet: null,
    initialAngle: 0,
  });

  const stageRef = useRef(null);
  const wheelLockRef = useRef(false);

  // Clear initial noTransition flag after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoTransition(false);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // Listen to resize for mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update hash when page changes
  const updateHash = useCallback((pageIdx) => {
    const hash = PAGE_TO_HASH[pageIdx] || 'cover';
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, '', `#${hash}`);
    }
  }, []);

  // Set aria announcement
  useEffect(() => {
    const page = pagesData[currentPage];
    if (page) {
      if (page.isCover) {
        setAnnouncement(`${page.title}`);
      } else {
        setAnnouncement(`Page ${page.pageNum} of 8: ${page.title}`);
      }
    }
  }, [currentPage]);

  // Navigate to specific page
  const goToPage = useCallback(
    (targetPage, instant = false) => {
      const page = Math.max(0, Math.min(9, targetPage));
      if (instant) {
        setNoTransition(true);
      }
      setCurrentPage(page);
      setSpread(page === 0 ? 0 : Math.ceil(page / 2));
      updateHash(page);

      if (instant) {
        setTimeout(() => setNoTransition(false), 50);
      }
    },
    [updateHash]
  );

  // Turn to next page / spread
  const nextPage = useCallback(() => {
    if (isMobile) {
      if (currentPage < 9) {
        goToPage(currentPage + 1);
      }
    } else {
      if (spread < 5) {
        const nextSpread = spread + 1;
        setSpread(nextSpread);
        // Target page for this spread
        const targetPage = nextSpread === 5 ? 9 : nextSpread * 2;
        setCurrentPage(targetPage);
        updateHash(targetPage);
      }
    }
  }, [isMobile, currentPage, spread, goToPage, updateHash]);

  // Turn to prev page / spread
  const prevPage = useCallback(() => {
    if (isMobile) {
      if (currentPage > 0) {
        goToPage(currentPage - 1);
      }
    } else {
      if (spread > 0) {
        const prevSpread = spread - 1;
        setSpread(prevSpread);
        const targetPage = prevSpread === 0 ? 0 : prevSpread * 2 - 1;
        setCurrentPage(targetPage);
        updateHash(targetPage);
      }
    }
  }, [isMobile, currentPage, spread, goToPage, updateHash]);

  // Listen to browser hash changes (e.g. back/forward button or external navigation)
  useEffect(() => {
    const handleHash = () => {
      const raw = window.location.hash.replace('#', '').toLowerCase();
      if (Object.prototype.hasOwnProperty.call(HASH_TO_PAGE, raw)) {
        const target = HASH_TO_PAGE[raw];
        if (target !== currentPage) {
          goToPage(target);
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage, goToPage]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevPage();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToPage(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToPage(9);
    }
  };

  // Mouse wheel & trackpad handler
  const handleWheel = (e) => {
    // Check if pointer is over scrollable page content that has room to scroll
    const scrollable = e.target.closest('.page-content');
    if (scrollable) {
      const isAtTop = scrollable.scrollTop <= 0;
      const isAtBottom =
        scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 2;

      // If vertical scroll and within content boundary, let it scroll naturally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
          return;
        }
      }
    }

    if (wheelLockRef.current) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 25) {
      wheelLockRef.current = true;
      if (delta > 0) {
        nextPage();
      } else {
        prevPage();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    }
  };

  // Pointer Drag Handlers (separating vertical scroll from horizontal page turn)
  const handlePointerDown = (e) => {
    // Ignore clicks on buttons/links
    if (e.target.closest('button, a, input, select')) return;

    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      intent: null,
      isDragging: false,
      activeSheet: null,
      initialAngle: 0,
    };
  };

  const handlePointerMove = (e) => {
    const d = dragRef.current;
    if (d.pointerId === null || d.pointerId !== e.pointerId) return;

    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    // Detect gesture intent
    if (d.intent === null) {
      if (Math.abs(dy) > 7 && Math.abs(dy) >= Math.abs(dx)) {
        d.intent = 'scroll';
        return; // Allow native vertical scrolling with zero interference
      }
      if (Math.abs(dx) > 9 && Math.abs(dx) > Math.abs(dy)) {
        d.intent = 'turn';
        d.isDragging = true;
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      }
    }

    if (d.intent !== 'turn' || !d.isDragging) return;

    if (e.cancelable) {
      e.preventDefault();
    }

    const stageWidth = stageRef.current ? stageRef.current.clientWidth : 800;
    const halfWidth = isMobile ? stageWidth : stageWidth / 2;

    if (isMobile) {
      // Mobile drag: dragging left turns current page away
      if (dx < 0 && currentPage < 9) {
        const progress = Math.max(-180, Math.min(0, (dx / halfWidth) * 180));
        setDragState({
          type: 'mobile',
          activePage: currentPage,
          angle: progress,
          direction: 'forward',
        });
      } else if (dx > 0 && currentPage > 0) {
        // dragging right pulls previous page back
        const progress = Math.min(0, Math.max(-180, -180 + (dx / halfWidth) * 180));
        setDragState({
          type: 'mobile',
          activePage: currentPage - 1,
          angle: progress,
          direction: 'backward',
        });
      }
    } else {
      // Desktop spread drag
      if (dx < 0 && spread < 5) {
        // Turning forward: sheet `spread` rotates from 0 to -180
        const angle = Math.max(-180, Math.min(0, (dx / halfWidth) * 180));
        setDragState({
          type: 'desktop',
          activeSheet: spread,
          angle,
          direction: 'forward',
        });
      } else if (dx > 0 && spread > 0) {
        // Turning backward: sheet `spread - 1` rotates from -180 to 0
        const angle = Math.min(0, Math.max(-180, -180 + (dx / halfWidth) * 180));
        setDragState({
          type: 'desktop',
          activeSheet: spread - 1,
          angle,
          direction: 'backward',
        });
      }
    }
  };

  const handlePointerUp = (e) => {
    const d = dragRef.current;
    if (d.pointerId === null || d.pointerId !== e.pointerId) return;

    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;

    if (d.intent === 'turn' && dragState) {
      if (isMobile) {
        if (dragState.direction === 'forward') {
          if (dragState.angle < -25 || dx < -35) {
            goToPage(currentPage + 1);
          }
        } else if (dragState.direction === 'backward') {
          if (dragState.angle > -155 || dx > 35) {
            goToPage(currentPage - 1);
          }
        }
      } else {
        if (dragState.direction === 'forward') {
          if (dragState.angle < -90 || dx < -50) {
            nextPage();
          }
        } else if (dragState.direction === 'backward') {
          if (dragState.angle > -90 || dx > 50) {
            prevPage();
          }
        }
      }
    } else if (d.intent === null && !d.isDragging && Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      // Tap on mobile
      if (isMobile) {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX >= rect.width / 2) {
          nextPage();
        } else {
          prevPage();
        }
      }
    }

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    dragRef.current = {
      pointerId: null,
      startX: 0,
      startY: 0,
      intent: null,
      isDragging: false,
      activeSheet: null,
      initialAngle: 0,
    };
    setDragState(null);
  };

  // Click side handler for desktop
  const handleSpreadClick = (e) => {
    if (dragState || dragRef.current.isDragging) return;
    if (e.target.closest('button, a, input, select')) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const mid = rect.width / 2;

    if (spread === 0) {
      // Click cover -> open book
      nextPage();
    } else if (spread === 5) {
      // Click back cover -> turn back
      prevPage();
    } else {
      if (clickX >= mid) {
        nextPage();
      } else {
        prevPage();
      }
    }
  };

  // Top toolbar counter label
  const getCounterText = () => {
    if (isMobile) {
      if (currentPage === 0) return 'Front Cover';
      if (currentPage === 9) return 'Back Cover';
      return `Page ${currentPage} of 8`;
    }
    if (spread === 0) return 'Front Cover';
    if (spread === 5) return 'Back Cover';
    const leftPage = spread * 2 - 1;
    const rightPage = spread * 2;
    return `Pages ${leftPage}–${rightPage} of 8`;
  };

  const isCoverCentered = spread === 0;
  const isBackCentered = spread === 5;
  const containerCenterClass = isCoverCentered
    ? 'centered-cover'
    : isBackCentered
    ? 'centered-back'
    : 'centered-open';

  return (
    <section
      className="book-section"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Interactive CV Book"
    >
      {/* Live announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Top Toolbar */}
      <div className="book-toolbar">
        <a
          href="/"
          className="book-toolbar-btn"
          onClick={(e) => {
            e.preventDefault();
            if (onBackHome) {
              onBackHome();
            } else {
              window.history.pushState(null, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }
          }}
          aria-label="Back to Overview Home Page"
        >
          <Icon name="chevronRight" size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Home</span>
        </a>

        <div className="book-counter-pill" aria-hidden="true">
          <span>{getCounterText()}</span>
        </div>

        <button
          type="button"
          className="book-toolbar-btn"
          onClick={() => goToPage(1)}
          aria-label="Jump to Table of Contents"
        >
          <Icon name="document" size={15} />
          <span>Contents</span>
        </button>
      </div>

      {/* Book Stage */}
      <div className="book-wrapper">
        {/* Prev Arrow */}
        <button
          type="button"
          className="book-nav-arrow prev"
          onClick={prevPage}
          disabled={isMobile ? currentPage === 0 : spread === 0}
          aria-label="Previous page"
        >
          <Icon name="chevronRight" size={20} style={{ transform: 'rotate(180deg)' }} />
        </button>

        <div
          className="book-stage"
          ref={stageRef}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {isMobile ? (
            /* ================= Mobile: 1 Page at a Time ================= */
            <div className="mobile-page-deck">
              {pagesData.map((page, idx) => {
                const isDraggingThis =
                  dragState &&
                  dragState.type === 'mobile' &&
                  dragState.activePage === idx;

                let cardClass = 'mobile-page-card';
                let style = {};

                if (isDraggingThis) {
                  cardClass += ' is-dragging active-page';
                  style.transform = `rotateY(${dragState.angle}deg)`;
                  style.zIndex = 30;
                } else if (idx < currentPage) {
                  cardClass += ' turned-away';
                } else if (idx === currentPage) {
                  cardClass += ' active-page';
                  style.zIndex = 10;
                } else if (idx === currentPage + 1) {
                  cardClass += ' underneath-page';
                  style.zIndex = 5;
                } else {
                  cardClass += ' hidden-page';
                }

                return (
                  <div key={page.id} className={cardClass} style={style}>
                    {page.render({
                      profile,
                      goToPage,
                      currentPage,
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            /* ================= Desktop: Two-Page Spread ================= */
            <div
              className={`book-container ${containerCenterClass} ${
                noTransition ? 'no-transition' : ''
              }`}
              onClick={handleSpreadClick}
            >
              {/* Spine Line */}
              <div className="book-spine-line" aria-hidden="true" />

              {/* 5 Physical Sheets (leaves) */}
              {[0, 1, 2, 3, 4].map((sheetIdx) => {
                const frontPage = pagesData[sheetIdx * 2];
                const backPage = pagesData[sheetIdx * 2 + 1];

                const isFlipped = sheetIdx < spread;
                const isDragging =
                  dragState &&
                  dragState.type === 'desktop' &&
                  dragState.activeSheet === sheetIdx;

                let angle = isFlipped ? -180 : 0;
                if (isDragging) {
                  angle = dragState.angle;
                }

                // Proper z-index for physical sheet stacking order
                let zIndex;
                if (isDragging) {
                  zIndex = 50;
                } else if (isFlipped) {
                  zIndex = sheetIdx * 2 + 1; // Left pile: 0 at bottom, 4 on top
                } else {
                  zIndex = (5 - sheetIdx) * 2; // Right pile: 0 on top, 4 at bottom
                }

                // Dynamic paper shade based on current angle
                const shadeOpacity =
                  Math.abs(Math.sin((angle * Math.PI) / 180)) * 0.45;

                return (
                  <div
                    key={sheetIdx}
                    className={`sheet ${isDragging ? 'is-dragging' : ''} ${
                      noTransition ? 'no-transition' : ''
                    }`}
                    style={{
                      transform: `rotateY(${angle}deg)`,
                      zIndex,
                    }}
                  >
                    {/* Front Face: Even Page (0, 2, 4, 6, 8) */}
                    <div className="sheet-face front">
                      <div
                        className="sheet-shade"
                        style={{ opacity: shadeOpacity }}
                        aria-hidden="true"
                      />
                      {frontPage.render({
                        profile,
                        goToPage,
                        currentPage,
                      })}
                    </div>

                    {/* Back Face: Odd Page (1, 3, 5, 7, 9) */}
                    <div className="sheet-face back">
                      <div
                        className="sheet-shade"
                        style={{ opacity: shadeOpacity }}
                        aria-hidden="true"
                      />
                      {backPage.render({
                        profile,
                        goToPage,
                        currentPage,
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          className="book-nav-arrow next"
          onClick={nextPage}
          disabled={isMobile ? currentPage === 9 : spread === 5}
          aria-label="Next page"
        >
          <Icon name="chevronRight" size={20} />
        </button>
      </div>

      {/* Tactile hint */}
      <p className="book-bottom-hint" aria-hidden="true">
        Click page edges · Drag to turn · Wheel or Arrow keys
      </p>
    </section>
  );
}
