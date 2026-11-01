import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ProfileImage from './components/ProfileImage';
import StatsBar from './components/StatsBar';
import ScriptNote from './components/ScriptNote';
import NavCards from './components/NavCards';
import Footer from './components/Footer';
import Signature from './components/Signature';
import Book from './components/Book';
import profile from './data/profile';

function getIsExplorePath() {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname;
  if (path.startsWith('/explore')) return true;
  // If user lands on / with a book hash (e.g. /#education or /#about), treat as explore
  const hash = window.location.hash.replace('#', '').toLowerCase();
  const bookHashes = [
    'cover',
    'contents',
    'toc',
    'about',
    'education',
    'experience',
    'skills',
    'certificates',
    'goals',
    'career-goals',
    'contact',
    'back',
    'back-cover',
  ];
  return bookHashes.includes(hash);
}

export default function App() {
  const [isExplore, setIsExplore] = useState(getIsExplorePath);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsExplore(getIsExplorePath());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleBackHome = () => {
    window.history.pushState(null, '', '/');
    setIsExplore(false);
  };

  if (isExplore) {
    return (
      <Layout>
        <TopBar greeting={profile.userGreeting} />
        <Book profile={profile} onBackHome={handleBackHome} />
        <Footer text={profile.footerText} />
        <Signature text={profile.signature} />
      </Layout>
    );
  }

  return (
    <Layout>
      <TopBar greeting={profile.userGreeting} />
      <ProfileImage />
      <Hero
        name={profile.name}
        role={profile.role}
        subtitle={profile.subtitle}
        quote={profile.quote}
        welcomeText={profile.welcomeText}
        ctaLabel={profile.ctaLabel}
        ctaHref={profile.ctaHref}
      />
      <StatsBar stats={profile.stats} />
      <ScriptNote text={profile.scriptNote} />
      <NavCards cards={profile.cards} />
      <Footer text={profile.footerText} />
      <Signature text={profile.signature} />
    </Layout>
  );
}
