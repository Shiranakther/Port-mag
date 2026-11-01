export const pagesData = [
  {
    id: 'cover',
    hash: 'cover',
    title: 'Front Cover',
    isCover: true,
    render: ({ profile }) => (
      <div className="book-page-body cover-page cover-front">
        <div className="cover-border">
          <div className="cover-inner">
            <span className="cover-kicker">DIGITAL PORTFOLIO</span>
            <h1 className="cover-name">
              {profile.name.first}
              <span>{profile.name.last}</span>
            </h1>
            <div className="cover-role-line">
              <span className="cover-role">{profile.role}</span>
              <span className="cover-divider" aria-hidden="true" />
              <span className="cover-subtitle">{profile.subtitle}</span>
            </div>
            <p className="cover-quote">
              {profile.quote.line1}
              <br />
              {profile.quote.line2}
            </p>
            <div className="cover-badge">
              <span>EXPLORE MY CV</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'contents',
    hash: 'contents',
    title: 'Contents',
    pageNum: 1,
    render: ({ goToPage }) => {
      const toc = [
        { page: 2, num: '01', title: 'About Me', hash: 'about' },
        { page: 3, num: '02', title: 'Education', hash: 'education' },
        { page: 4, num: '03', title: 'Experience', hash: 'experience' },
        { page: 5, num: '04', title: 'Skills', hash: 'skills' },
        { page: 6, num: '05', title: 'Certificates', hash: 'certificates' },
        { page: 7, num: '06', title: 'Career Goals', hash: 'goals' },
        { page: 8, num: '07', title: 'Contact Me', hash: 'contact' },
      ];

      return (
        <article className="book-page-body" id="page-contents">
          <header className="page-header">
            <span className="page-section-num">OVERVIEW</span>
            <h2 className="page-heading">Contents</h2>
            <div className="page-header-rule" />
          </header>
          <div className="page-content">
            <nav className="toc-nav" aria-label="Table of contents">
              <ul className="toc-list">
                {toc.map((item) => (
                  <li key={item.page} className="toc-item">
                    <button
                      type="button"
                      className="toc-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPage(item.page);
                      }}
                      aria-label={`Jump to ${item.title}, page ${item.page}`}
                    >
                      <span className="toc-item-num">{item.num}</span>
                      <span className="toc-item-title">{item.title}</span>
                      <span className="toc-dots" aria-hidden="true" />
                      <span className="toc-page-num">{item.page}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <footer className="page-footer">
            <span className="page-num">1</span>
          </footer>
        </article>
      );
    },
  },
  {
    id: 'about',
    hash: 'about',
    title: 'About Me',
    pageNum: 2,
    render: () => (
      <article className="book-page-body" id="about">
        <header className="page-header">
          <span className="page-section-num">SECTION 01</span>
          <h2 className="page-heading">About Me</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">2</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'education',
    hash: 'education',
    title: 'Education',
    pageNum: 3,
    render: () => (
      <article className="book-page-body" id="education">
        <header className="page-header">
          <span className="page-section-num">SECTION 02</span>
          <h2 className="page-heading">Education</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">3</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'experience',
    hash: 'experience',
    title: 'Experience',
    pageNum: 4,
    render: () => (
      <article className="book-page-body" id="experience">
        <header className="page-header">
          <span className="page-section-num">SECTION 03</span>
          <h2 className="page-heading">Experience</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">4</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'skills',
    hash: 'skills',
    title: 'Skills',
    pageNum: 5,
    render: () => (
      <article className="book-page-body" id="skills">
        <header className="page-header">
          <span className="page-section-num">SECTION 04</span>
          <h2 className="page-heading">Skills</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">5</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'certificates',
    hash: 'certificates',
    title: 'Certificates',
    pageNum: 6,
    render: () => (
      <article className="book-page-body" id="certificates">
        <header className="page-header">
          <span className="page-section-num">SECTION 05</span>
          <h2 className="page-heading">Certificates</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">6</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'goals',
    hash: 'goals',
    title: 'Career Goals',
    pageNum: 7,
    render: () => (
      <article className="book-page-body" id="goals">
        <header className="page-header">
          <span className="page-section-num">SECTION 06</span>
          <h2 className="page-heading">Career Goals</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">7</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'contact',
    hash: 'contact',
    title: 'Contact Me',
    pageNum: 8,
    render: () => (
      <article className="book-page-body" id="contact">
        <header className="page-header">
          <span className="page-section-num">SECTION 07</span>
          <h2 className="page-heading">Contact Me</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="page-placeholder">Content coming soon…</p>
        </div>
        <footer className="page-footer">
          <span className="page-num">8</span>
        </footer>
      </article>
    ),
  },
  {
    id: 'back',
    hash: 'back',
    title: 'Back Cover',
    isCover: true,
    render: ({ profile }) => (
      <div className="book-page-body cover-page cover-back">
        <div className="cover-border">
          <div className="cover-inner">
            <p className="back-script-note">{profile.scriptNote}</p>
            <div className="back-divider" aria-hidden="true" />
            <p className="back-footer-text">{profile.footerText}</p>
            <p className="back-signature">{profile.signature}</p>
          </div>
        </div>
      </div>
    ),
  },
];
