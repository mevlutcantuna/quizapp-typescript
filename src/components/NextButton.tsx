import React from "react";
import "../styles/NextButton.scss";
import { QuestionTypes } from "../types";

interface IProps {
  nextButtonProps: {
    setNumberQuestion: React.Dispatch<React.SetStateAction<number>>;
    numberQuestion: number;
    questions: QuestionTypes[];
    setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const NextButton: React.FC<IProps> = ({ nextButtonProps }) => {
  const {
    questions,
    numberQuestion,
    setNumberQuestion,
    setIsStart,
    setScore,
    setIsAnswered,
  } = nextButtonProps;

  console.log({ questions, numberQuestion });
  const questionIsUndefined = questions[Number(numberQuestion) + 1];
  console.log(questionIsUndefined);

  const finishExam = () => {
    setScore(0);
    setIsStart(false);
  };

  return (
    <div className="next-button">
      {questionIsUndefined !== undefined ? (
        <button
          onClick={() => {
            setNumberQuestion(numberQuestion + 1);
            setIsAnswered(false);
          }}
        >
          Next
        </button>
      ) : (
        <button onClick={finishExam}>Done</button>
      )}
    </div>
  );
};

export default NextButton;
