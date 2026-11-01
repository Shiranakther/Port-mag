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
  FaWhatsapp,
  FaStar,
} from 'react-icons/fa6';

export const pagesData = [
  /* ==========================================================================
     Page 0: Front Cover (Sheet 0 Front)
     ========================================================================== */
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

  /* ==========================================================================
     Page 1: Contents / Table of Contents (Sheet 0 Back)
     ========================================================================== */
  {
    id: 'contents',
    hash: 'contents',
    title: 'Contents',
    pageNum: 1,
    render: ({ goToPage }) => {
      const toc = [
        { page: 2, num: '01', title: 'About Me', hash: 'about' },
        { page: 3, num: '02', title: 'Education & Qualifications', hash: 'education' },
        { page: 4, num: '03', title: 'Work Experience – Corporate', hash: 'experience' },
        { page: 5, num: '04', title: 'Work Experience – Foundations', hash: 'experience-2' },
        { page: 6, num: '05', title: 'Key Skills & Competencies', hash: 'skills' },
        { page: 7, num: '06', title: 'Certificates & Honors', hash: 'certificates' },
        { page: 8, num: '07', title: 'Career Goals & Vision', hash: 'goals' },
        { page: 9, num: '08', title: 'Professional Referees', hash: 'referees' },
        { page: 10, num: '09', title: 'Contact Me & Connect', hash: 'contact' },
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

  /* ==========================================================================
     Page 2: About Me (Sheet 1 Front)
     ========================================================================== */
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

  /* ==========================================================================
     Page 3: Education & Qualifications (Sheet 1 Back)
     ========================================================================== */
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

          <div className="edu-block">
            <div className="edu-block-title">
              <FaSchool className="edu-main-icon" />
              <h3>Secondary Education</h3>
            </div>

            <div className="edu-card">
              <div className="edu-badge small">A/L</div>
              <div className="edu-details">
                <h4>G.C.E. Advanced Level</h4>
                <p className="edu-institution">Successfully Completed in 2023</p>
              </div>
            </div>

            <div className="edu-card">
              <div className="edu-badge small">O/L</div>
              <div className="edu-details">
                <h4>G.C.E. Ordinary Level</h4>
                <p className="edu-institution">Successfully Completed in 2020</p>
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

  /* ==========================================================================
     Page 4: Work Experience I – Corporate Roles (Sheet 2 Front)
     ========================================================================== */
  {
    id: 'experience',
    hash: 'experience',
    title: 'Work Experience I',
    pageNum: 4,
    render: ({ goToPage }) => (
      <article className="book-page-body" id="experience">
        <header className="page-header">
          <span className="page-section-num">SECTION 03 · PART 1</span>
          <h2 className="page-heading">Work Experience</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          {/* Role 1: Current Executive Position */}
          <div className="timeline-card current">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <span className="timeline-tag current">CURRENT POSITION</span>
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
                <span>Prepare and issue appointment letters and maintain employment documentation.</span>
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
                <span>Handle employee grievances and coordinate smooth day-to-day HR operations.</span>
              </li>
            </ul>
          </div>

          {/* Role 2: HR Assistant */}
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
                <span><strong>Attendance & Payroll:</strong> Monitored biometric records and provided payroll support.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Documentation & Welfare:</strong> Coordinated staff records, grievances, and welfare management.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span><strong>Performance:</strong> Facilitated performance evaluations and assisted recruitment selection.</span>
              </li>
            </ul>
          </div>

          <div className="page-continuation-hint">
            <span>Continued on next page (Internship & Early Career)</span>
            <button
              type="button"
              className="continue-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToPage(5);
              }}
            >
              Page 5 →
            </button>
          </div>
        </div>
        <footer className="page-footer">
          <span className="page-num">4</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 5: Work Experience II – Foundations & Internship (Sheet 2 Back)
     ========================================================================== */
  {
    id: 'experience-2',
    hash: 'experience-2',
    title: 'Work Experience II',
    pageNum: 5,
    render: () => (
      <article className="book-page-body" id="experience-2">
        <header className="page-header">
          <span className="page-section-num">SECTION 03 · PART 2</span>
          <h2 className="page-heading">Work Experience</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          {/* Role 3: HR Intern */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <span className="timeline-tag internship">INTERNSHIP</span>
                <h3 className="timeline-role">HR Intern</h3>
                <h4 className="timeline-company">
                  <FaBuilding className="timeline-inline-ic" /> DSI – D. Samson Industries (Pvt) Ltd
                </h4>
              </div>
              <div className="timeline-meta">
                <span className="timeline-date">
                  <FaCalendarDays /> Feb 2024 – Jan 2025
                </span>
                <span className="timeline-location">Galle / Colombo</span>
              </div>
            </div>
            <ul className="timeline-bullets">
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Assisted candidate resume screening and coordinated interview schedules with department heads.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Maintained accurate employee records in the HR database with absolute confidentiality.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Supported new hire onboarding, conducted orientation sessions, and organized engagement events.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Collaborated with the HR team to update policies and actively implemented workplace 5S standards.</span>
              </li>
            </ul>
          </div>

          {/* Role 4: Office Assistant */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-role-group">
                <span className="timeline-tag foundation">ADMINISTRATIVE</span>
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
                <span>Managed daily administrative operations, official correspondence, filing, and data entry.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Coordinated communication between departments, greeted visitors, and handled appointments.</span>
              </li>
              <li>
                <FaCircleCheck className="bullet-ic" />
                <span>Maintained inventory records, supported supply management, and assisted basic reporting tasks.</span>
              </li>
            </ul>
          </div>
        </div>
        <footer className="page-footer">
          <span className="page-num">5</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 6: Key Skills & Competencies (Sheet 3 Front)
     ========================================================================== */
  {
    id: 'skills',
    hash: 'skills',
    title: 'Skills',
    pageNum: 6,
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
                  <p>Standardized methodology for productive workspaces</p>
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

          <div className="skills-block">
            <div className="skills-category-header">
              <FaBrain className="skill-cat-icon" />
              <h3>Soft Skills & Leadership</h3>
            </div>
            <div className="skills-chips-wrap">
              <span className="skill-chip">
                <FaUsers /> Teamwork & Collaboration
              </span>
              <span className="skill-chip">
                <FaHandshake /> Problem-Solving & Grievances
              </span>
              <span className="skill-chip">
                <FaBrain /> Critical Thinking
              </span>
              <span className="skill-chip">
                <FaCircleCheck /> Strong Attention to Detail
              </span>
              <span className="skill-chip">
                <FaIdCard /> Confidentiality & Workplace Ethics
              </span>
            </div>
          </div>
        </div>
        <footer className="page-footer">
          <span className="page-num">6</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 7: Certificates & Honors (Sheet 3 Back)
     ========================================================================== */
  {
    id: 'certificates',
    hash: 'certificates',
    title: 'Certificates & Honors',
    pageNum: 7,
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

          <div className="honor-block">
            <h3 className="section-subheading">Awards & Leadership Activities</h3>
            
            <div className="honor-card award">
              <FaTrophy className="honor-icon trophy" />
              <div>
                <h4>Best Entrepreneur of Galle District</h4>
                <p>Awarded at Step Up Leadership Camp for project excellence and venture initiative.</p>
              </div>
            </div>

            <div className="honor-card leadership">
              <FaMedal className="honor-icon medal" />
              <div>
                <h4>Former School Prefect</h4>
                <p>Elected leadership driving student discipline, event coordination & peer mentoring.</p>
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
          <span className="page-num">7</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 8: Career Goals & Vision (Sheet 4 Front)
     ========================================================================== */
  {
    id: 'goals',
    hash: 'goals',
    title: 'Career Goals',
    pageNum: 8,
    render: () => (
      <article className="book-page-body" id="goals">
        <header className="page-header">
          <span className="page-section-num">SECTION 06</span>
          <h2 className="page-heading">Career Goals</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <div className="goals-card">
            <div className="goals-header">
              <FaBullseye className="goals-icon" />
              <h3>Professional Career Vision</h3>
            </div>
            <p>
              To leverage my hands-on HR experience in recruitment, employee
              relations, and operational compliance to contribute to a
              progressive, people-centric organization. Committed to continuous
              professional development through CIPM, aiming to advance into
              strategic human resource leadership.
            </p>
          </div>

          <div className="goals-pillars-grid">
            <div className="goal-pillar">
              <div className="pillar-icon-wrap">
                <FaStar className="pillar-ic" />
              </div>
              <div className="pillar-body">
                <h4>People-Centric Leadership</h4>
                <p>Foster inclusive workplace culture, transparent communication, and high employee engagement.</p>
              </div>
            </div>

            <div className="goal-pillar">
              <div className="pillar-icon-wrap">
                <FaScaleBalanced className="pillar-ic" />
              </div>
              <div className="pillar-body">
                <h4>Compliance & Operational Excellence</h4>
                <p>Ensure robust adherence to labour laws, employment contracts, and modern 5S organization.</p>
              </div>
            </div>

            <div className="goal-pillar">
              <div className="pillar-icon-wrap">
                <FaGraduationCap className="pillar-ic" />
              </div>
              <div className="pillar-body">
                <h4>Continuous Professional Growth</h4>
                <p>Advance chartered HRM credentials, adopting modern digital HR tools and strategic analytics.</p>
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

  /* ==========================================================================
     Page 9: Professional Referees (Sheet 4 Back)
     ========================================================================== */
  {
    id: 'referees',
    hash: 'referees',
    title: 'Professional Referees',
    pageNum: 9,
    render: () => (
      <article className="book-page-body" id="referees">
        <header className="page-header">
          <span className="page-section-num">SECTION 07</span>
          <h2 className="page-heading">Referees</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="referees-lead">
            Professional references available upon request. Direct contact
            details for previous management and consultancy supervisors:
          </p>

          <div className="referees-list">
            <div className="referee-card">
              <div className="referee-avatar">
                <FaUserTie />
              </div>
              <div className="referee-info">
                <h4>Mr. Agith D Costa</h4>
                <p className="referee-title">HR Consultant</p>
                <div className="referee-actions">
                  <a href="tel:+94774815679" className="referee-contact">
                    <FaPhone className="referee-contact-ic" /> +94 77 481 5679
                  </a>
                </div>
              </div>
            </div>

            <div className="referee-card">
              <div className="referee-avatar">
                <FaUserTie />
              </div>
              <div className="referee-info">
                <h4>Mrs. Theja Gunasekara</h4>
                <p className="referee-title">HRM, Bataduwa Plant</p>
                <div className="referee-actions">
                  <a href="tel:+94773959524" className="referee-contact">
                    <FaPhone className="referee-contact-ic" /> +94 77 395 9524
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="referee-verif-note">
            <FaCircleCheck className="verif-ic" />
            <span>References verified for employment background inquiries.</span>
          </div>
        </div>
        <footer className="page-footer">
          <span className="page-num">9</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 10: Contact Me & Connect (Sheet 5 Front)
     ========================================================================== */
  {
    id: 'contact',
    hash: 'contact',
    title: 'Contact Me',
    pageNum: 10,
    render: () => (
      <article className="book-page-body" id="contact">
        <header className="page-header">
          <span className="page-section-num">SECTION 08</span>
          <h2 className="page-heading">Contact Me</h2>
          <div className="page-header-rule" />
        </header>
        <div className="page-content">
          <p className="contact-invite">
            I am always open to discussing new HR career opportunities,
            professional collaborations, or team-building initiatives.
          </p>

          <div className="contact-cards-grid">
            {/* WhatsApp - Connected directly to mobile */}
            <a
              href="https://wa.me/94713689634"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card highlight-whatsapp"
            >
              <span className="contact-icon whatsapp">
                <FaWhatsapp />
              </span>
              <div className="contact-card-info">
                <span className="contact-label">WHATSAPP (DIRECT CHAT)</span>
                <span className="contact-val">+94 71 368 9634</span>
              </div>
              <FaArrowUpRightFromSquare className="contact-arrow" />
            </a>

            {/* Direct Phone Call */}
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

            {/* Email Address */}
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

            {/* LinkedIn Profile */}
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

            {/* Residential Address */}
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
          <span className="page-num">10</span>
        </footer>
      </article>
    ),
  },

  /* ==========================================================================
     Page 11: Back Cover (Sheet 5 Back)
     ========================================================================== */
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
