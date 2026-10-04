import StatItem from './StatItem';
import './StatsBar.css';

export default function StatsBar({ stats }) {
  return (
    <div className="stats">
      {stats.map((stat, i) => (
        <StatItem key={i} icon={stat.icon} title={stat.title} subtitle={stat.subtitle} />
      ))}
    </div>
  );
}
