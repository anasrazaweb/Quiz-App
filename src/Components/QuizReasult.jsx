import React from 'react';

const QuizResult = ({ score, totalScore, onRestart }) => {
    return (
        <div style={{fontSize:"26px", textAlign:"center"}}>
            <h3  style={{fontWeight:"700px"}}>Your Score: {score} / {totalScore}</h3>
            <button onClick={onRestart}
           className='next-btn'
            >Restart Quiz</button>
        </div>
    );
};

export default QuizResult;
