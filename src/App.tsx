import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { DIFFICULTY, fetchQuizData, QuestionState } from './API';
import Question from './components/Questions';

const TOTAL_QUESTIONS = 10;

type AnswerObj = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizData(TOTAL_QUESTIONS, DIFFICULTY.MEDIUM));
  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    //    const newQuestions = await fetchQuizData(TOTAL_QUESTIONS, DIFFICULTY.MEDIUM);
    //    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };

  return (
    <div className='App'>
      <h1>Quiz</h1>
      <button className="start" onClick={startQuiz}>start</button>
      <p className="score">Score :-</p>
      <p>Loading ...</p>
      {/* <Question
        questonNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>Next</button>
    </div>
  );
}
export default App;
