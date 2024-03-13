import React, { useState } from 'react';
import "./../../src/App.css";
import { QuizData } from './QuizData';
import QuizResult from './QuizReasult';
// import QuizResult from '@/QuizResult';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClicked(0); // Reset clicked option
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clicked === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setClicked(0);
        setShowResult(false);
    };

    return (
        <div className='Quiz-Box'>
            <h1 className='h-Quiz'>Quiz App</h1>
            {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} onRestart={restartQuiz} />
            ) : (
                <div className="content">
                    <div className="Question-box">
                        <span style={{ paddingRight: "20px", fontWeight: "700" }}>{currentQuestion + 1}.</span>
                        {QuizData[currentQuestion].question}
                    </div>
                    <div className="Answer-box">
                        <ul>
                            {QuizData[currentQuestion].options.map((item, index) =>
                                <li
                                    key={index}
                                    onClick={() => setClicked(index + 1)}
                                    className={clicked === index + 1 ? "checked" : ""}
                                >
                                    {item}
                                </li>
                            )}
                        </ul>
                        <button className="next-btn" onClick={changeQuestion}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
