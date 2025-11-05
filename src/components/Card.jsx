export default function Card({ title, description, color }) {
  return (
    <div className="card" style={{ borderColor: color }}>
      <h3>{title || "Nessun linguaggio selezionato"}</h3>
      <p>
        {description || "Seleziona un linguaggio per avere ulteriori dettagli."}
      </p>
    </div>
  );
}
