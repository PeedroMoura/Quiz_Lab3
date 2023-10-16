"use client"

import { PerguntaItem } from "@/components/PerguntaItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/question";
import { Result } from "postcss";
import { useState } from "react";

const Page: React.FC = () => {
  
  const title = 'O quanto você sabe sobre HTML?';

  const [answers, setAnswers] = useState<number[]>([]);
  const [currentquestions, setCurrentquestions] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const loadNextQuestion = () => {
    if (questions[currentquestions + 1]) {
      setCurrentquestions(currentquestions + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleReiniciar = () => {
    setAnswers([]);
    setCurrentquestions(0);
    setShowResult(false);
    setQuizStarted(false);
  }

  const handleStartQuiz = () => {
    setQuizStarted(true);
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-400">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border border-gray-300 flex justify-center">{title}</div>
        <div className="p-5">
          {!quizStarted && (
            <div className="text-center">
              <button onClick={handleStartQuiz} className="px-3 py-2 rounded-md bg-blue-500 text-white">Iniciar o Quiz</button>
            </div>
          )}
          {quizStarted && !showResult && (
            <PerguntaItem
              question={questions[currentquestions]}
              count={currentquestions + 1}
              onAnswer={handleAnswered}
            />
          )}
          {showResult && (
            <Results questions={questions} answers={answers} />
          )}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && (
            `${currentquestions + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          )}
          {showResult && (
            <button onClick={handleReiniciar} className="px-3 py-2 rounded-md bg-blue-500 text-white">Reiniciar Quiz</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page;