import React, { useState } from "react";
import "../styles/Layout.scss";

import ExamPage from "./ExamPage";
import StartPage from "./StartPage";

const Layout: React.FC = () => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [numberOfQuestions, setNumberOfQuestions] = useState<string>("1");

  const startPageProps = {
    difficulty,
    setDifficulty,
    numberOfQuestions,
    setNumberOfQuestions,
    setIsStart,
  };

  const examPageProps = {
    difficulty,
    numberOfQuestions,
    setIsStart,
  };

  return (
    <div className={"layout"}>
      {isStart ? (
        <ExamPage examPageProps={examPageProps} />
      ) : (
        <StartPage startPageProps={startPageProps} />
      )}
    </div>
  );
};

export default Layout;
