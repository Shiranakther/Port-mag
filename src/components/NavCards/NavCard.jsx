import Icon from '../Icon';

export default function NavCard({ number, icon, title, subtitle, href }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a className="card" href={href} onClick={handleClick}>
      <div className="card-row">
        <span className="ic">
          <Icon name={icon} size={24} />
        </span>
        <span className="card-num">{number}</span>
      </div>
      <h3>{title}</h3>
      <p className="card-sub">
        {subtitle}
        <Icon name="chevronRight" size={14} />
      </p>
    </a>
  );
}
