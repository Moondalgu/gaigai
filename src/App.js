import React, { useState } from "react";
import "./App.css";

function App() {
  const choices = ["가위", "바위", "보"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("비겼습니다!");
    } else if (
      (player === "가위" && computer === "보") ||
      (player === "바위" && computer === "가위") ||
      (player === "보" && computer === "바위")
    ) {
      setResult("이겼습니다! 🎉");
    } else {
      setResult("졌습니다 😢");
    }
  };

  // 버튼을 누르면 사람이 직접 선택
  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);

    // 컴퓨터는 여전히 랜덤으로 선택
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    determineWinner(choice, randomChoice);
  };

  return (
    <div className="App">
      <h1>가위바위보 게임 ✊✌️🖐️</h1>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <p>내 선택: {playerChoice}</p>
        <p>컴퓨터 선택: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
