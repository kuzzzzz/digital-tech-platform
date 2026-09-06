'use client';

import { useState } from 'react';

export default function Quiz({ questions = [], moduleId, classId, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (!questions.length) {
    return (
      <div className="quiz-result">
        <p>No objective questions for this week.</p>
      </div>
    );
  }

  const handleSelect = (qIndex, optIndex) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct += 1;
    });
    setScore(correct);
    setSubmitted(true);
    const passed = correct / questions.length >= 0.6;
    if (onComplete) onComplete(correct, questions.length, passed);
  };

  const percent = Math.round((score / questions.length) * 100);

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>End-of-module Quiz</h2>
      <p className="text-muted">Select one answer for each question.</p>

      {questions.map((q, qi) => (
        <div key={qi} className="quiz-question">
          <h3>{qi + 1}. {q.q}</h3>
          <ul className="quiz-options">
            {q.options.map((opt, oi) => {
              const letter = String.fromCharCode(97 + oi);
              const isSelected = answers[qi] === oi;
              let extraStyle = {};
              if (submitted) {
                if (oi === q.answer) extraStyle = { borderColor: '#2e7d32', background: '#e8f5e9' };
                else if (isSelected && oi !== q.answer)
                  extraStyle = { borderColor: '#c62828', background: '#ffebee' };
              }
              return (
                <li key={oi}>
                  <label style={extraStyle}>
                    <input
                      type="radio"
                      name={`q-${qi}`}
                      checked={isSelected}
                      onChange={() => handleSelect(qi, oi)}
                      disabled={submitted}
                    />
                    <span>({letter}) {opt}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {!submitted ? (
        <button
          type="button"
          className="btn btn-block"
          onClick={handleSubmit}
          disabled={Object.keys(answers).length < questions.length}
        >
          Submit answers
        </button>
      ) : (
        <div className={`quiz-result ${percent >= 60 ? 'pass' : 'fail'}`}>
          <p>
            You scored <strong>{score}</strong> out of <strong>{questions.length}</strong> ({percent}%)
          </p>
          {percent >= 60 ? (
            <p>Well done! You passed this module challenge.</p>
          ) : (
            <p>Review the lesson cards and try again.</p>
          )}
        </div>
      )}
    </div>
  );
}
