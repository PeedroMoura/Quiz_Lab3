"use client";

import { PerguntaItem } from "@/components/PerguntaItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/question";
import { useEffect, useState } from "react";
import Lottie, * as lottie from 'lottie-web';
import confettiAnimation from './../assets/Animation - 1696450388299.json';
import fundo from './../assets/giphy-downsized-large.gif'

import quiz from "./../assets/quiz.jpg";

const Page: React.FC = () => {
  const title = "O quanto você sabe sobre HTML?";

  const [answers, setAnswers] = useState<number[]>([]);
  const [currentquestions, setCurrentquestions] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const loadNextQuestion = () => {
    if (questions[currentquestions + 1]) {
      setCurrentquestions(currentquestions + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReiniciar = () => {
    setAnswers([]);
    setCurrentquestions(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  useEffect(() => {
    if (showResult) {

      setConfettiVisible(true);

      const confettiTimeout = setTimeout(() => {
        setConfettiVisible(false);
      }, 1000); 

      return () => {
        clearTimeout(confettiTimeout); 
      };
    }
  }, [showResult]);

  return (

    <div className="w-full min-h-screen flex justify-center items-center bg-blue-400">
      <div className="w-full max-w-xl m-10 rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border border-gray-300 flex justify-center">
          {title}
        </div>
        <div className="p-5">
          {!quizStarted && (
            <div className="text-center">
              <button
                onClick={handleStartQuiz}
                className="px-3 py-2 rounded-md bg-blue-500 text-white hover:opacity-80"
              >
                Iniciar o Quiz
              </button>
            </div>
          )}
          {quizStarted && !showResult && (
            <PerguntaItem
              question={questions[currentquestions]}
              count={currentquestions + 1}
              onAnswer={handleAnswered}
            />
          )}
          {showResult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {quizStarted &&
            !showResult &&
            `${currentquestions + 1} de ${questions.length} pergunta${
              questions.length === 1 ? "" : "s"
            }`}
          {showResult && (

              // <Lottie
              //   style={{ position: "absolute", zIndex: 999, width: "80%" }}
              //   animationData={confettiAnimation}
              //   loop={false}
              //   onAnimationEnd={() => alert("final")}
              // />            

            <button
              onClick={handleReiniciar}
              className="px-3 py-2 rounded-md bg-blue-500 text-white"
            >
              Reiniciar Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
