export default function Quote({ line1, line2 }) {
  return (
    <p className="quote">
      {line1}
      <b>{line2}</b>
    </p>
  );
}
