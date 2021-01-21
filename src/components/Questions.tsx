import React from 'react';

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: any;
    questonNumber: number;
    totalQuestions: number;
}
const Question: React.FC<Props> = (
    {
        question, answer, callback, userAnswer, questonNumber, totalQuestions }) => (
    <div>
        <p className='number'>
            Question: {questonNumber}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answer.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default Question;