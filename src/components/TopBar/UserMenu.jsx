import Icon from '../Icon';

export default function UserMenu({ greeting }) {
  return (
    <div className="user-menu">
      <Icon name="user" size={22} />
      {greeting}
      <Icon name="chevronDown" size={16} />
    </div>
  );
}
