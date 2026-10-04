import './Sections.css';

/* Placeholder sections for card anchor links */
const sections = [
  { id: 'about', title: 'About Me' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'goals', title: 'Career Goals' },
  { id: 'contact', title: 'Contact Me' },
];

export default function Sections() {
  return (
    <div className="sections">
      {sections.map((s) => (
        <section key={s.id} id={s.id} className="section-placeholder">
          <h2>{s.title}</h2>
          <p>Content coming soon…</p>
        </section>
      ))}
    </div>
  );
}
