import React, { useEffect, useState } from "react";

//styles
import "../styles/QuestionCard.scss";

//types
import { QuestionTypes } from "../types";
import NextButton from "./NextButton";

interface IProps {
  questions: QuestionTypes[];
  isLoading: boolean;
}

const QuestionCard: React.FC<IProps> = ({ questions, isLoading }) => {
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionTypes>(
    questions[numberQuestion]
  );

  console.log(questions);

  useEffect(() => {
    if (questions !== undefined) {
      setQuestion(questions[numberQuestion]);
    }
  }, [questions]);

  console.log(question);

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
            <button>{question?.correct_answer}</button>
            {question?.incorrect_answers.map((item: string) => (
              <button key={Math.random()}>{item}</button>
            ))}
          </div>
          <div className="question-card__button">
            <NextButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
