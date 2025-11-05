export default function Button({ title, onClickFunction, isActive, color }) {
  return (
    <button
      onClick={onClickFunction}
      className={`button ${
        isActive ? "active" : ""
      } hover:opacity-90 hover:-translate-y-0.5`}
      style={isActive ? { borderColor: color } : {}}
    >
      {title}
    </button>
  );
}
