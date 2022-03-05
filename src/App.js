import { useEffect, useState } from "react";
import { Style } from "./Style";

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState(true);
  const [dice, setDice] = useState(true);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch((err) => console.log(err));
  }, [dice]);

  return (
    <Style>
      <div className="card">
        <h1>ADVICE #{id}</h1>
        <q>&nbsp;{advice}&nbsp;</q>
        <img src="/pattern-divider-desktop.svg" alt="divider" />
        <button onClick={() => setDice(!dice)}>
          <img src="/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </Style>
  );
}

export default App;
