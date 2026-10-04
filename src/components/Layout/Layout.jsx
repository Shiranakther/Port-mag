import bgImage from '../../assets/building-bg.png';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <main className="page">
      <div className="page-bg" style={{ backgroundImage: `url(${bgImage})` }}></div>
      {children}
    </main>
  );
}
