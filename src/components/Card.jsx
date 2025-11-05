export default function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title || "Nessun linguaggio selezionato"}</h3>
      <p>
        {description || "Seleziona un linguaggio per avere ulteriori dettagli."}
      </p>
    </div>
  );
}
