import React, { useState, useEffect } from "react";

const Play = () => {
  // 플레이 시간
  const playTime = 15;
  // 플레이 시간
  const [time, setTime] = useState(playTime);
  // 게임 오버 여부
  const [gameOver, setGameOver] = useState(false);
  // 게임 시작 여부
  const [gameStart, setGameStart] = useState(false);
  // 아이콘의 위치 정보
  const [targetPosition, setTargetPosition] = useState({
    top: "20%",
    left: "50%"
  });
  // 로딩 중인지 여부
  const [loading, setLoading] = useState(false);
  // 현재 점수
  const [score, setScore] = useState(0);
  // 컨트랙트에 저장된 이전 점수
  const [previousScore, setPreviousScore] = useState(0);

  // 게임이 시작되기 전에는 GAME START , 게임 오버된 후에는 TRANSACTION 버튼 보이도록
  const renderButton = () => {
    if (gameOver === false) {
      return <button className="game-btn">GAME START</button>;
    } else {
      return <button className="game-btn">TRANSACTION</button>;
    }
  };

  return (
    <div className="score-board-container">
      <div className="play-container">
        <div className="score-menu">
          <span>Previous Score: {previousScore}</span>
          <span>Current Score: {score}</span>
        </div>
        {renderButton()}
        <span>Time left: {time} s</span>
      </div>

      <div className="game-container">
        <img src="/Background.svg" alt="background" id="background"></img>
        {gameStart && (
          <img
            src="/cosmwasm-mark.svg"
            alt="Target"
            id="target"
            style={{ position: "absolute", ...targetPosition }}
          />
        )}
        {loading && <div className="loading-msg">Loading...</div>}
      </div>
    </div>
  );
};

export default Play;
