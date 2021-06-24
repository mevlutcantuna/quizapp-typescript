import React from "react";
import "../styles/StartPage.scss";

interface IProps {
  startPageProps: {
    difficulty: string;
    setDifficulty: React.Dispatch<React.SetStateAction<string>>;
    numberOfQuestions: string;
    setNumberOfQuestions: React.Dispatch<React.SetStateAction<string>>;
    setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const StartPage: React.FC<IProps> = ({ startPageProps }) => {
  const {
    difficulty,
    setDifficulty,
    numberOfQuestions,
    setNumberOfQuestions,
    setIsStart,
  } = startPageProps;

  const startExam = () => {
    if (Number(numberOfQuestions) < 51 && 0 < Number(numberOfQuestions)) {
      setIsStart(true);
    } else {
      alert("Number of Questions must be less 50 and not be less 1");
    }
  };

  const handleChangeNumberOfQuestions = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfQuestions(e.target.value);
  };

  const handleChangeDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="start-page">
      <div className="start-page__title">Quiz App</div>
      <div className={"start-page__settings"}>
        <input
          className={"start-page__settings__number-input"}
          value={numberOfQuestions}
          type={"number"}
          onChange={handleChangeNumberOfQuestions}
        />
        <select
          className="start-page__settings__select"
          value={difficulty}
          onChange={handleChangeDifficulty}
        >
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
        </select>
      </div>
      <div className={"start-page__button"}>
        <button onClick={startExam}>Start Exam</button>
      </div>
    </div>
  );
};

export default StartPage;
