import { Question } from "@/types/Question";
import correto from "./../assets/correto.png";
import errado from "./../assets/errado.png";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers }: Props) => {
  return (
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">{key + 1}. {item.question}</div>
            {/* {answers[key] === item.answer ? (
              <img src={correto} alt="Correto" /> 
            ) : (
              <img src={errado} alt="Errado" /> 
            )} */}
            {item.options[answers[key]]}
            {answers[key] === item.answer ? (
              <div className="text-green-600 font-bold">Resposta correta</div>
            ) : (
              <div className="text-red-600 font-bold">Resposta incorreta</div>
            )}
        </div>
      ))}
    </div>
  );
};