import React from 'react';

export default function FormulaCard({ formula }) {
  return (
    <div className="formula-card">
      <h3>{formula.name}</h3>
      <p>{formula.description}</p>
      <div style={{marginBottom: "10px"}}>
        {formula.platforms.map(p => (
          <span key={p} className="tag">{p}</span>
        ))}
      </div>
      <div className="formula-code">
        {formula.formula}
      </div>
    </div>
  );
}