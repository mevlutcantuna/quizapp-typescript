import React, { useEffect, useState } from "react";

//styles
import "../styles/ExamPage.scss";

//components
import ScoreBoard from "./ScoreBoard";
import QuestionCard from "./QuestionCard";
import NextButton from "./NextButton";

//axios
import axios from "axios";
//types
import { QuestionTypes } from "../types";

//props types
interface IProps {
  examPageProps: {
    difficulty: string;
    numberOfQuestions: string;
  };
}

const ExamPage: React.FC<IProps> = ({ examPageProps }) => {
  const { difficulty, numberOfQuestions } = examPageProps;

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
        <QuestionCard isLoading={isLoading} questions={questions} />
      </div>
    </div>
  );
};

export default ExamPage;
