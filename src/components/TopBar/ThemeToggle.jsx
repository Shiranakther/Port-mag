import Icon from '../Icon';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={26} />
    </button>
  );
}
