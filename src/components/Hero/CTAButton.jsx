import Icon from '../Icon';

export default function CTAButton({ label, href }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a className="cta" href={href} onClick={handleClick}>
      <Icon name="user" size={22} />
      {label}
      <Icon name="chevronRight" size={16} />
    </a>
  );
}
