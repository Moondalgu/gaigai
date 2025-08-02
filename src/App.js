import React, { useState } from "react";
import "./App.css";

const choices = ["가위", "바위", "보"];

const isWin = (me, other) => {
  if (me === "가위" && other === "보") return true;
  if (me === "바위" && other === "가위") return true;
  if (me === "보" && other === "바위") return true;
  return false;
};

function App() {
  const [myChoice, setMyChoice] = useState(null);
  const [winCount, setWinCount] = useState(0);

  const handleChoice = (choice) => {
    setMyChoice(choice);

    // 10명 랜덤 시뮬레이션
    const others = Array.from({ length: 10 }, () =>
      choices[Math.floor(Math.random() * 3)]
    );

    const wins = others.filter((o) => isWin(choice, o)).length;
    setWinCount(wins);
  };

  return (
    <div className="app">
      <h1 className="title">✊✌️🖐 가위바위보 게임</h1>

      <div className="buttons">
        {choices.map((c) => (
          <button key={c} onClick={() => handleChoice(c)} className="choice-btn">
            {c}
          </button>
        ))}
      </div>

      {myChoice && (
        <div className="result-card">
          <p className="my-choice">✨ 내 선택: {myChoice}</p>
          <p className="win-count">내가 이긴 횟수: {winCount}</p>
        </div>
      )}
    </div>
  );
}

export default App;

