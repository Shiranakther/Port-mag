import Icon from '../Icon';

export default function CTAButton({ label, href }) {
  const handleClick = (e) => {
    if (href.startsWith('/') || href.startsWith('#')) {
      e.preventDefault();
      window.history.pushState(null, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
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
