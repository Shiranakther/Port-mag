import WelcomeLabel from './WelcomeLabel';
import NameHeading from './NameHeading';
import RoleLine from './RoleLine';
import Quote from './Quote';
import CTAButton from './CTAButton';
import './Hero.css';

export default function Hero({ name, role, subtitle, quote, welcomeText, ctaLabel, ctaHref }) {
  return (
    <section className="hero">
      <WelcomeLabel text={welcomeText} />
      <NameHeading first={name.first} last={name.last} />
      <RoleLine role={role} subtitle={subtitle} />
      <Quote line1={quote.line1} line2={quote.line2} />
      <CTAButton label={ctaLabel} href={ctaHref} />
    </section>
  );
}
