import { useState } from "react";
import { languages } from "./data/languages"; /* ID, title, description */

function App() {
  const [activeCard, setActiveCard] = useState();
  console.log(activeCard);

  return (
    <main className="min-h-screen">
      <div className="container py-20">
        <h1 className="mb-10">Impara lo sviluppo web</h1>

        <div className="flex flex-wrap gap-5">
          {languages.map((curLanguage) => (
            <button
              onClick={() => {
                setActiveCard(curLanguage);
              }}
              key={curLanguage.id}
              className="button"
            >
              {curLanguage.title}
            </button>
          ))}
        </div>

        <div className="card">
          <h3>{activeCard.title}</h3>
          <p>{activeCard.description}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
