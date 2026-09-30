export default function Tabs({ cats, current, setCurrent }) {
  return (
    <div className="tabs">
      {cats.map((c) => (
        <button key={c} aria-pressed={c === current} onClick={() => setCurrent(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}
