import React, { useState, useEffect } from "react";
import styles from "../styles/Questionnaire.module.css";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "What type of traveler are you?",
    options: ["Adventure seeker", "Relaxation enthusiast", "Culture explorer"],
  },
  {
    question: "Which destination do you prefer?",
    options: ["Beach", "Mountains", "City"],
  },
  {
    question: "What is your preferred mode of transportation?",
    options: ["Plane", "Car", "Train"],
  },
];

const Questionnaire: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasAnsweredInitialQuestions, setHasAnsweredInitialQuestions] =
      useState(false);
  useEffect(() => {
    const hasAnswered =
      localStorage.getItem("hasAnsweredInitialQuestions") === "true";
    setHasAnsweredInitialQuestions(hasAnswered);
  }, []);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isOptionSelected = selectedOption !== null;
    
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    setAnswers(
      new Map(answers.set(questions[currentQuestionIndex].question, option))
    );
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", Array.from(answers.entries()));
    setIsSubmitted(true);
    localStorage.setItem("hasAnsweredInitialQuestions", "true");
    setHasAnsweredInitialQuestions(true);
  };

  const handleAnswerAgain = () => {
    localStorage.setItem("hasAnsweredInitialQuestions", "false");
    setHasAnsweredInitialQuestions(false);
    setQuizStarted(false);
    setAnswers(new Map());
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  if (hasAnsweredInitialQuestions) {
    return (
      <div className={styles.questionnaireContainer}>
        <p className={styles.message}>Thank you for completing the questionnaire!</p>
        <button className={styles.button} onClick={handleAnswerAgain}>
          Answer Again
        </button>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className={styles.questionnaireContainer}>
        <p className={styles.message}>Welcome to our questionnaire! Click start to begin.</p>
        <button className={styles.button} onClick={handleStartQuiz}>
          Start
        </button>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className={styles.questionnaireContainer}>
        Thank you for completing the questionnaire!
      </div>
    );
  }

  return (
    <div className={styles.questionnaireContainer}>
      <p className={styles.question}>
        Question {currentQuestionIndex + 1}/{questions.length}:{" "}
        {questions[currentQuestionIndex].question}
      </p>
      <div className={styles.options}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label className={styles.option} key={index}>
            <input 
              type="radio"
              name="answer"
              value={option}
              checked={option === selectedOption}
              onChange={() => handleAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>
      {!isLastQuestion && (
        <button className={styles.button} onClick={handleNextQuestion} disabled={!isOptionSelected}>
          Next
        </button>
      )}
      {isLastQuestion && (
        <button className={styles.button} onClick={handleSubmit} disabled={!isOptionSelected}>
          Submit Answers
        </button>
      )}
    </div>
  );
};

export default Questionnaire;
