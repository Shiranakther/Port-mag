import Layout from './components/Layout';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ProfileImage from './components/ProfileImage';
import StatsBar from './components/StatsBar';
import ScriptNote from './components/ScriptNote';
import NavCards from './components/NavCards';
import Footer from './components/Footer';
import Signature from './components/Signature';
import Sections from './components/Sections';
import profile from './data/profile';

export default function App() {
  return (
    <>
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
      <Sections />
    </>
  );
}
