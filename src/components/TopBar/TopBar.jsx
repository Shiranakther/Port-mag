import UserMenu from './UserMenu';
import './TopBar.css';

export default function TopBar({ greeting }) {
  return (
    <header className="top-bar">
      <UserMenu greeting={greeting} />
    </header>
  );
}
