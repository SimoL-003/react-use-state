export default function Button({ title, onClickFunction, isActive }) {
  return (
    <button
      onClick={onClickFunction}
      className={`button ${isActive ? "active" : ""}`}
    >
      {title}
    </button>
  );
}
