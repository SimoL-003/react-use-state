export default function Button({ title, onClickFunction, isActive, color }) {
  return (
    <button
      onClick={onClickFunction}
      className={`button ${isActive ? "active" : ""}`}
      style={isActive ? { borderColor: color } : {}}
    >
      {title}
    </button>
  );
}
