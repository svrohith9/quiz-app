import Question from "./components/Questions";
import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string,
    incorrect_answers: string[];
    difficulty: string;
    question: string;
    type: string;
}

//Adding common variable property for all answers
export type QuestionState = Question & { answers: string[] };

export enum DIFFICULTY {

    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizData = async (amount: number, difficulty: DIFFICULTY) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answer: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    )
    );
}