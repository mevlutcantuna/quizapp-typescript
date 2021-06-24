import React, { useEffect, useState } from "react";

//styles
import "../styles/ExamPage.scss";

//components
import ScoreBoard from "./ScoreBoard";
import QuestionCard from "./QuestionCard";

//axios
import axios from "axios";
//types
import { QuestionTypes } from "../types";

//props types
interface IProps {
  examPageProps: {
    difficulty: string;
    numberOfQuestions: string;
    setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ExamPage: React.FC<IProps> = ({ examPageProps }) => {
  const { difficulty, numberOfQuestions, setIsStart } = examPageProps;

  const [questions, setQuestions] = useState<QuestionTypes[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //console.log(questions);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => {
        setIsLoading(false);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [difficulty, numberOfQuestions]);

  return (
    <div className="exam-page">
      <ScoreBoard score={score} />
      <div className="exam-page__questions">
        <QuestionCard
          setIsStart={setIsStart}
          isLoading={isLoading}
          questions={questions}
          setScore={setScore}
        />
      </div>
    </div>
  );
};

export default ExamPage;
