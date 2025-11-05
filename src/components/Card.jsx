export default function Card({ activeLanguage }) {
  return (
    <div className="card" style={{ borderColor: activeLanguage?.color }}>
      <h3>{activeLanguage?.title || "Nessun linguaggio selezionato"}</h3>
      <p>
        {activeLanguage?.description ||
          "Seleziona un linguaggio per avere ulteriori dettagli."}
      </p>
    </div>
  );
}
