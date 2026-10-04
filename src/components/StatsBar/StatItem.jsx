import Icon from '../Icon';

export default function StatItem({ icon, title, subtitle }) {
  return (
    <div className="stat">
      <Icon name={icon} size={32} />
      <b>{title}</b>
      <small>{subtitle}</small>
    </div>
  );
}
