export default function RoleLine({ role, subtitle }) {
  return (
    <div className="role">
      <b>{role}</b>
      <i className="role-divider"></i>
      <span>{subtitle}</span>
    </div>
  );
}
