import React, { useState } from 'react';
import styles from './Choice.module.css';

const Choice = ({ id, options, correctAns }) => {
  const [result, setResult] = useState(false);

  const handleChangeHere = e => {
    if (e.target.value === correctAns) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  console.log(result);

  return (
    <div>
      <div>
        {options.map((option, index) => {
          return (
            <label key={option} className={styles.labelOption}>
              <input
                type='radio'
                id={index}
                name={options}
                value={option}
                onChange={handleChangeHere}
              />
              {option}
            </label>
          );
        })}
      </div>
      {result && <div className={styles.success}>CORRECT!!</div>}
    </div>
  );
};

export default Choice;
