import React from "react";

//styles
import "../styles/ScoreBoard.scss";

interface IProps {
  score: number;
}

const ScoreBoard: React.FC<IProps> = ({ score }) => {
  return (
    <div className="score-board">
      <span>Quiz App</span>
      <span className="score-board__score">Score : {score}</span>
    </div>
  );
};

export default ScoreBoard;
