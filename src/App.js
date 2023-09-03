import { useState, useEffect } from "react";
import minecraft_cherryblossoms1 from "./videos/minecraft_cherryblossoms1.mp4";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, updateCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    updateCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="backgroundvideo">
      <video src={minecraft_cherryblossoms1} autoPlay loop muted />

      <div className="content">
        <h1 style={{ fontSize: "48px" }}>{advice}</h1>

        <button onClick={getAdvice}>Get Advice</button>
      </div>
      <div className="message">
        <Message count={count} />
      </div>
    </div>
  );

  function Message(props) {
    return (
      <p>
        You have read <strong className="counterStyle">{props.count}</strong>{" "}
        pieces of advice
      </p>
    );
  }
}
