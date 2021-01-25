import React, { useState } from 'react';
import { DIFFICULTY, fetchQuizData, QuestionState } from './API';
import { GlobalStyle } from './App.style';
import Question from './components/Questions';

const TOTAL_QUESTIONS = 10;

export type AnswerObj = {
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


  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizData(TOTAL_QUESTIONS, DIFFICULTY.MEDIUM);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    // console.log(newQuestions);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, answerObj])
    }
  };

  const nextQuestion = () => {

    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(number + 1)
    }

  };

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            start
          </button>
        ) : null}
        {/* start of quiz */}
        {!gameOver ? <p className="score">Score :- {score}</p> : null}
        {loading ? <p>Loading ...</p> : null}
        {!loading && !gameOver && (< Question
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />)}
        {!gameOver && !loading && userAnswers.length === number + 1
          && number !== TOTAL_QUESTIONS - 1 ? (
            < button className='next' onClick={nextQuestion}>Next</button>
          ) : null}
      </div >
    </>
  );
}
export default App;
