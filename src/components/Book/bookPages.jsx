import {
  FaUserTie,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaTrophy,
  FaMedal,
  FaCircleCheck,
  FaUsers,
  FaBrain,
  FaScaleBalanced,
  FaSitemap,
  FaFileLines,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaBuilding,
  FaCalendarDays,
  FaIdCard,
  FaHandshake,
  FaBullseye,
  FaArrowUpRightFromSquare,
  FaUserCheck,
  FaSchool,
  FaFileSignature,
} from 'react-icons/fa6';

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
            <span className="cover-kicker">DIGITAL CV PORTFOLIO</span>
            <h1 className="cover-name">
              A.G.C. <span>SAKVITHI</span>
            </h1>
            <div className="cover-role-line">
              <span className="cover-role">HR Professional</span>
              <span className="cover-divider" aria-hidden="true" />
              <span className="cover-subtitle">Human Resources Specialist</span>
            </div>
            <p className="cover-specialties">
              Recruitment • Onboarding • HR Documentation • Employee Relations
            </p>
            <p className="cover-quote">
              {profile.quote.line1}
              <br />
              {profile.quote.line2}
            </p>
            <div className="cover-badge">
              <span>EXPLORE RESUME</span>
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
        { page: 6, num: '05', title: 'Certificates & Honors', hash: 'certificates' },
        { page: 7, num: '06', title: 'Career Goals & Referees', hash: 'goals' },
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
          <div className="about-bio-card">
            <p className="about-lead">
              A motivated and detail-oriented HR professional with hands-on
              experience in recruitment, employee onboarding, and HR
              documentation. With a positive attitude and strong interpersonal
              skills, I am committed to supporting efficient HR operations and
              compliance with workplace practices.
            </p>
          </div>

          <h3 className="section-subheading">Core Areas of Expertise</h3>
          <div className="about-specialties-grid">
            <div className="specialty-item">
              <span className="specialty-icon">
                <FaUserCheck />
              </span>
              <div>
                <strong>Recruitment & Sourcing</strong>
                <p>Talent screening, interview scheduling & pipeline management.</p>
              </div>
            </div>
            <div className="specialty-item">
              <span className="specialty-icon">
                <FaIdCard />
              </span>
              <div>
                <strong>Employee Onboarding</strong>
                <p>Formalities, orientation, appointment letters & paperwork.</p>
              </div>
            </div>
            <div className="specialty-item">
              <span className="specialty-icon">
                <FaFileSignature />
              </span>
              <div>
                <strong>HR Documentation & Compliance</strong>
                <p>Confidential records, personnel files & labour law practices.</p>
              </div>
            </div>
            <div className="specialty-item">
              <span className="specialty-icon">
                <FaHandshake />
              </span>
              <div>
                <strong>Employee Relations</strong>
                <p>Grievance resolution, staff welfare & team collaboration.</p>
              </div>
            </div>
          </div>
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
          <div className="edu-block">
            <div className="edu-block-title">
              <FaGraduationCap className="edu-main-icon" />
              <h3>Professional Qualifications</h3>
            </div>
            
            <div className="edu-card highlighted">
              <div className="edu-badge">CIPM</div>
              <div className="edu-details">
                <h4>Diploma in Professional Human Resource Management</h4>
                <p className="edu-institution">
                  Chartered Institute of Personnel Management (CIPM) – Sri Lanka
                </p>
                <span className="edu-meta">Galle Branch</span>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-badge">CIPM</div>
              <div className="edu-details">
                <h4>Advanced Certificate in Human Resource Management</h4>
                <p className="edu-institution">
                  Chartered Institute of Personnel Management (CIPM) – Sri Lanka
                </p>
                <span className="edu-meta">Galle Branch</span>
              </div>
            </div>
          </div>

          <div className="edu-block" style={{ marginTop: '16px' }}>
            <div className="edu-block-title">
              <FaSchool className="edu-main-icon" />
              <h3>Secondary Education</h3>
            </div>

            <div className="edu-card">
              <div className="edu-badge small">A/L</div>
              <div className="edu-details">
                <h4>G.C.E. Advanced Level</h4>
                <p className="edu-institution">Completed in 2023</p>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-badge small">O/L</div>
              <div className="edu-details">
                <h4>G.C.E. Ordinary Level</h4>
                <p className="edu-institution">Completed in 2020</p>
              </div>
            </div>
          </div>
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
          <h2 className="page-heading">Work Experience</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content experience-scroll-container">
          {/* Role 1 */}
          <div className="timeline-card current">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <span className="timeline-tag current">CURRENT ROLE</span>
                <h3 className="timeline-role">HR Executive</h3>
                <h4 className="timeline-company">
                  <FaBuilding className="timeline-inline-ic" /> Koombiyo Delivery (Pvt) Ltd
                </h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">
                  <FaCalendarDays /> July 2026 – Present
                </span>
                <span className="timeline-location">Pitakotte</span>
              </div>
            </div>
            <ul className="timeline-bullets">
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Manage employee onboarding, ensuring completion of documentation and joining formalities.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Prepare and issue appointment letters and maintain complete employment documentation.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Verify manpower attendance records and confirm attendance data for payroll processing.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Support Training & Development (T&D) coordination and employee learning needs.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Handle employee grievances with active listening, coordinating resolutions with relevant teams.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Maintain accurate, confidential employee databases and personnel records.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Coordinate across departments to ensure smooth day-to-day HR administrative operations.</span>
              </li>
            </ul>
          </div>

          {/* Role 2 */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <h3 className="timeline-role">HR Assistant</h3>
                <h4 className="timeline-company">
                  <FaBuilding className="timeline-inline-ic" /> Sirilak Seafood (Pvt) Ltd
                </h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">
                  <FaCalendarDays /> July 2025 – July 2026
                </span>
                <span className="timeline-location">Papiliyana, Colombo</span>
              </div>
            </div>
            <ul className="timeline-bullets">
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Attendance & Payroll:</strong> Monitored biometric attendance records and provided payroll support.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Documentation:</strong> Coordinated HR documentation and maintained comprehensive staff records.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Employee Relations:</strong> Handled employee inquiries, grievances, and supported welfare management.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Performance & Recruitment:</strong> Facilitated performance evaluations and assisted recruitment sourcing.</span>
              </li>
            </ul>
          </div>

          {/* Role 3 */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <h3 className="timeline-role">HR Intern</h3>
                <h4 className="timeline-company">
                  <FaBuilding className="timeline-inline-ic" /> DSI – D. Samson Industries (Pvt) Ltd
                </h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">
                  <FaCalendarDays /> Feb 2024 – Jan 2025
                </span>
              </div>
            </div>
            <ul className="timeline-bullets">
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Assisted in candidate resume screening and coordinated interview schedules.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Maintained employee records in the HR database with high confidentiality.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Supported new hire onboarding, orientations, and employee engagement events.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Gained practical exposure to HR functions and actively practiced workplace 5S standards.</span>
              </li>
            </ul>
          </div>

          {/* Role 4 */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <h3 className="timeline-role">Office Assistant</h3>
                <h4 className="timeline-company">
                  <FaBuilding className="timeline-inline-ic" /> Ayesh Tea Factory (Pvt) Ltd
                </h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">
                  <FaCalendarDays /> May 2024 – Oct 2024
                </span>
                <span className="timeline-location">Elpitiya</span>
              </div>
            </div>
            <ul className="timeline-bullets">
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Assisted daily operations including filing, data entry, reports, and administrative tasks.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Managed inter-department communications, visitor reception, and inventory logs.</span>
              </li>
            </ul>
          </div>
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
          <h2 className="page-heading">Key Skills</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <div className="skills-block">
            <div className="skills-category-header">
              <FaBriefcase className="skill-cat-icon" />
              <h3>Technical Competencies</h3>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <span className="skill-icon-wrap"><FaUserCheck /></span>
                <div>
                  <h4>Recruitment Processes</h4>
                  <p>Screening, shortlisting & candidate coordination</p>
                </div>
              </div>
              <div className="skill-card">
                <span className="skill-icon-wrap"><FaScaleBalanced /></span>
                <div>
                  <h4>Labour Law & Compliance</h4>
                  <p>Working knowledge of workplace regulations</p>
                </div>
              </div>
              <div className="skill-card">
                <span className="skill-icon-wrap"><FaSitemap /></span>
                <div>
                  <h4>5S & Workplace Organization</h4>
                  <p>Standardized workplace organization methodology</p>
                </div>
              </div>
              <div className="skill-card">
                <span className="skill-icon-wrap"><FaFileLines /></span>
                <div>
                  <h4>Professional Correspondence</h4>
                  <p>Appointment letters, HR notices & official reports</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-block" style={{ marginTop: '18px' }}>
            <div className="skills-category-header">
              <FaBrain className="skill-cat-icon" />
              <h3>Soft Skills & Leadership</h3>
            </div>
            <div className="skills-chips-wrap">
              <span className="skill-chip">
                <FaUsers /> Teamwork & Collaboration
              </span>
              <span className="skill-chip">
                <FaHandshake /> Problem Solving & Grievances
              </span>
              <span className="skill-chip">
                <FaBrain /> Critical Thinking
              </span>
              <span className="skill-chip">
                <FaCircleCheck /> High Attention to Detail
              </span>
              <span className="skill-chip">
                <FaIdCard /> Confidentiality & Ethics
              </span>
            </div>
          </div>
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
    title: 'Certificates & Honors',
    pageNum: 6,
    render: () => (
      <article className="book-page-body" id="certificates">
        <header className="page-header">
          <span className="page-section-num">SECTION 05</span>
          <h2 className="page-heading">Certificates & Honors</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <div className="honor-block">
            <h3 className="section-subheading">Professional Certifications</h3>
            <div className="honor-card cert">
              <FaAward className="honor-icon gold" />
              <div>
                <h4>Diploma in Professional Human Resource Management</h4>
                <p>Chartered Institute of Personnel Management (CIPM) – Sri Lanka</p>
              </div>
            </div>
            <div className="honor-card cert">
              <FaAward className="honor-icon gold" />
              <div>
                <h4>Advanced Certificate in Human Resource Management</h4>
                <p>Chartered Institute of Personnel Management (CIPM) – Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="honor-block" style={{ marginTop: '16px' }}>
            <h3 className="section-subheading">Awards & Leadership Activities</h3>
            
            <div className="honor-card award">
              <FaTrophy className="honor-icon trophy" />
              <div>
                <h4>Best Entrepreneur of Galle District</h4>
                <p>Awarded at Step Up Leadership Camp for project excellence and venture leadership.</p>
              </div>
            </div>

            <div className="honor-card leadership">
              <FaMedal className="honor-icon medal" />
              <div>
                <h4>Former School Prefect</h4>
                <p>Elected leadership role driving student discipline, event coordination & peer mentoring.</p>
              </div>
            </div>

            <div className="honor-card sports">
              <FaUsers className="honor-icon sports" />
              <div>
                <h4>Active Member – School Sports Club</h4>
                <p>Active participation in sports meets and athletic team collaboration.</p>
              </div>
            </div>
          </div>
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
    title: 'Career Goals & Referees',
    pageNum: 7,
    render: () => (
      <article className="book-page-body" id="goals">
        <header className="page-header">
          <span className="page-section-num">SECTION 06</span>
          <h2 className="page-heading">Career Goals & Referees</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <div className="goals-card">
            <div className="goals-header">
              <FaBullseye className="goals-icon" />
              <h3>Career Aspiration</h3>
            </div>
            <p>
              To leverage my hands-on HR experience in recruitment, employee
              relations, and operational compliance to contribute to a
              progressive, people-centric organization. Committed to continuous
              professional development through CIPM, aiming to advance into
              strategic human resource leadership.
            </p>
          </div>

          <div className="referees-block" style={{ marginTop: '16px' }}>
            <h3 className="section-subheading">Professional Referees</h3>
            
            <div className="referees-grid">
              <div className="referee-card">
                <div className="referee-avatar">
                  <FaUserTie />
                </div>
                <div className="referee-info">
                  <h4>Mr. Agith D Costa</h4>
                  <p className="referee-title">HR Consultant</p>
                  <a href="tel:+94774815679" className="referee-contact">
                    <FaPhone className="referee-contact-ic" /> +94 77 481 5679
                  </a>
                </div>
              </div>

              <div className="referee-card">
                <div className="referee-avatar">
                  <FaUserTie />
                </div>
                <div className="referee-info">
                  <h4>Mrs. Theja Gunasekara</h4>
                  <p className="referee-title">HRM, Bataduwa Plant</p>
                  <a href="tel:+94773959524" className="referee-contact">
                    <FaPhone className="referee-contact-ic" /> +94 77 395 9524
                  </a>
                </div>
              </div>
            </div>
          </div>
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
          <p className="contact-invite">
            I am always open to discussing new HR career opportunities,
            professional collaborations, or team-building initiatives.
          </p>

          <div className="contact-cards-grid">
            <a href="mailto:chamodsakvithi2@gmail.com" className="contact-card">
              <span className="contact-icon email">
                <FaEnvelope />
              </span>
              <div className="contact-card-info">
                <span className="contact-label">EMAIL ADDRESS</span>
                <span className="contact-val">chamodsakvithi2@gmail.com</span>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <a href="tel:0713689634" className="contact-card">
              <span className="contact-icon phone">
                <FaPhone />
              </span>
              <div className="contact-card-info">
                <span className="contact-label">PHONE NUMBER</span>
                <span className="contact-val">071 368 9634</span>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <a
              href="https://linkedin.com/in/chamod-sakvithi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon linkedin">
                <FaLinkedin />
              </span>
              <div className="contact-card-info">
                <span className="contact-label">LINKEDIN PROFILE</span>
                <span className="contact-val">linkedin.com/in/chamod-sakvithi</span>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            <div className="contact-card location">
              <span className="contact-icon loc">
                <FaLocationDot />
              </span>
              <div className="contact-card-info">
                <span className="contact-label">RESIDENTIAL ADDRESS</span>
                <span className="contact-val">No. 153 E/1, Magurugalvila, Kahaduwa</span>
              </div>
            </div>
          </div>
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
