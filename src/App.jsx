import { act, useState } from "react";
import { languages } from "./data/languages"; /* ID, title, description */
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [activeLanguage, setActiveLanguage] = useState("");
  console.log(activeLanguage);

  return (
    <main className="min-h-screen">
      <div className="container py-20">
        <h1 className="mb-10">Impara lo sviluppo web</h1>

        <div className="flex flex-wrap gap-5">
          {languages.map((curLanguage) => (
            <Button
              key={curLanguage.id}
              onClickFunction={() => {
                setActiveLanguage(curLanguage);
              }}
              title={curLanguage.title}
              isActive={curLanguage === activeLanguage}
              color={curLanguage.color}
            />
          ))}
        </div>

        <Card
          color={activeLanguage.color}
          title={activeLanguage.title}
          description={activeLanguage.description}
        />
      </div>
    </main>
  );
}

export default App;
