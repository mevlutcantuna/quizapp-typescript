import React, { useEffect, useState } from "react";

//styles
import "../styles/QuestionCard.scss";

//types
import { QuestionTypes } from "../types";
import NextButton from "./NextButton";

interface IProps {
  questions: QuestionTypes[];
  isLoading: boolean;
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionCard: React.FC<IProps> = ({
  questions,
  isLoading,
  setIsStart,
  setScore,
}) => {
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionTypes>(
    questions[numberQuestion]
  );
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  console.log(isAnswered);

  useEffect(() => {
    if (questions !== undefined) {
      setQuestion(questions[numberQuestion]);
    }
  }, [questions, numberQuestion]);

  //console.log(question);

  const answerQuestion = (answer: string) => {
    setIsAnswered(true);

    if (answer === question.correct_answer) {
      setScore((prevState) => prevState + 1);
    }
  };

  const nextButtonProps = {
    questions,
    numberQuestion,
    setNumberQuestion,
    setIsStart,
    setScore,
    setIsAnswered,
  };

  return (
    <div className="question-card">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="question-card">
          <div className="question-card__category">{question?.category}</div>
          <div className="question-card__question">
            Question: {question?.question}
          </div>
          <div className="question-card__answers">
            <button
              onClick={() => answerQuestion(question?.correct_answer)}
              disabled={isAnswered && true}
              style={
                isAnswered ? { backgroundColor: "green", color: "white" } : {}
              }
            >
              {question?.correct_answer}
            </button>
            {question?.incorrect_answers.map((item: string) => (
              <button
                onClick={() => answerQuestion(item)}
                disabled={isAnswered && true}
                key={Math.random()}
                style={
                  isAnswered ? { backgroundColor: "red", color: "white" } : {}
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div className="question-card__button">
            <NextButton nextButtonProps={nextButtonProps} />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
