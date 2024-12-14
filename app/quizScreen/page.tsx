"use client"; // For Next.js client-side rendering
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Import Shadcn Button
import { Progress } from "@/components/ui/progress"; // Import Shadcn Progress
import { quizData } from "../quizData"; // Import the questions and answers

export default function foodQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  

  // Calculate progress percentage
  const totalQuestions = quizData.questions.length;
  const progressValue = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Explicitly type the 'answer' parameter as a string
  const handleAnswerClick = (answer: string) => {
    // Add the selected answer to the array
    setSelectedAnswers((prev) => [...prev, answer]);

    // Progress to the next question
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResults(true); // Show results after the last question
    }
  };

  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl">Quiz Complete!</h1>
        <p className="text-lg">Thank you for completing the quiz!</p>

        <ul className="list-disc text-left mt-4">
          {selectedAnswers.map((answer, index) => (
            <li key={index}>
              <strong>{quizData.questions[index]}</strong>: {answer}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const currentAnswers = quizData.answers[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-xs mb-4">
        {/* Progress bar showing progress */}
        <Progress value={progressValue} />
      </div>

      <div className="flex flex-col items-center w-full max-w-xs">
        {/* Fixed height for the question to avoid content jumping */}
        <h1 className="text-xl mb-4 text-center h-20 flex items-center justify-center">
          {currentQuestion}
        </h1>

        {/* Answer container with fixed position, expanding downward */}
        <div className="flex flex-col gap-4 w-full max-w-xs min-h-[200px]"> 
          {currentAnswers.map((answer, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleAnswerClick(answer)}
              className="w-full"
            >
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
