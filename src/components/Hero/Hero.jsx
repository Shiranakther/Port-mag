import WelcomeLabel from './WelcomeLabel';
import NameHeading from './NameHeading';
import RoleLine from './RoleLine';
import Quote from './Quote';
import CTAButton from './CTAButton';
import profilePhoto from '../../assets/profile-photo.png';
import './Hero.css';

export default function Hero({
  name,
  role,
  subtitle,
  quote,
  welcomeText,
  ctaLabel,
  ctaHref,
  imageSrc = profilePhoto,
}) {
  return (
    <section className="hero">
      <WelcomeLabel text={welcomeText} />
      <div className="hero-profile-row">
        <img
          className="hero-avatar"
          src={imageSrc}
          alt={`${name.first} ${name.last} portrait`}
        />
        <div className="hero-name-block">
          <NameHeading first={name.first} last={name.last} />
          <RoleLine role={role} subtitle={subtitle} />
        </div>
      </div>
      <Quote line1={quote.line1} line2={quote.line2} />
      <CTAButton label={ctaLabel} href={ctaHref} />
    </section>
  );
}
