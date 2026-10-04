import './ScriptNote.css';

export default function ScriptNote({ text }) {
  const lines = text.split('\n');
  return (
    <div className="script">
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {i === 1 ? `\u00A0${line}` : line}
        </span>
      ))}
    </div>
  );
}
