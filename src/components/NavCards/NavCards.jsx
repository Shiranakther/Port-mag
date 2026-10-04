import NavCard from './NavCard';
import './NavCards.css';

export default function NavCards({ cards }) {
  return (
    <nav className="cards">
      {cards.map((card) => (
        <NavCard
          key={card.number}
          number={card.number}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          href={card.href}
        />
      ))}
    </nav>
  );
}
