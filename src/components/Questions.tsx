import React from 'react';
import { Wrapper } from './Questions.style';
import { ButtonWrapper } from './Questions.style';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}
const Question: React.FC<Props> = (
    {
        question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNumber}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        {/* {console.log(question, answers, callback, userAnswer, questionNumber, totalQuestions)} */}
        <div>
            {answers.map((answer) => (
                <ButtonWrapper key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}  >
                    <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);

export default Question;