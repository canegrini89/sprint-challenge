import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = e => {
    setInput(input + e.target.value);
  };

  const handleOperation = e => {
    switch (e.target.value) {
      case '+':
        setInput(input + e.target.value);
        break;
      case '-':
        setInput(input + e.target.value);
        break;
      case '*':
        setInput(input + e.target.value);
        break;
      case '/':
        setInput(input + e.target.value);
        break;
      default:
        break;
    }
  };

  const handleDone = () => {
    setInput(eval(input));
  };

  const handleReset = () => {
    setInput('');
  };

  console.log(input);

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.displayCont}>
          <div className={styles.display}>{input}</div>
        </div>

        <div className={styles.buttonsCont}>
          <div className={styles.buttonsLineCont}>
            <button className={styles.upBtn} onClick={handleClick} value='('>
              {'('}
            </button>
            <button className={styles.upBtn} onClick={handleClick} value=')'>
              {')'}
            </button>
          </div>
          <div className={styles.buttonsLineCont}>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='7'
            >
              7
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='8'
            >
              8
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='9'
            >
              9
            </button>
            <button
              className={styles.anotherBtn}
              value='/'
              onClick={handleOperation}
            >
              /
            </button>
          </div>
          <div className={styles.buttonsLineCont}>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='4'
            >
              4
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='5'
            >
              5
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='6'
            >
              6
            </button>
            <button
              className={styles.anotherBtn}
              onClick={handleOperation}
              value='*'
            >
              *
            </button>
          </div>
          <div className={styles.buttonsLineCont}>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='1'
            >
              1
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='2'
            >
              2
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='3'
            >
              3
            </button>
            <button
              className={styles.anotherBtn}
              onClick={handleOperation}
              value='+'
            >
              +
            </button>
          </div>
          <div className={styles.buttonsLineCont}>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='0'
            >
              0
            </button>
            <button
              className={styles.normalBtn}
              onClick={handleClick}
              value='.'
            >
              .
            </button>
            <button className={styles.anotherBtn} onClick={handleReset}>
              C
            </button>
            <button
              className={styles.anotherBtn}
              onClick={handleOperation}
              value='-'
            >
              -
            </button>
          </div>
          <div className={styles.buttonsLineCont}>
            <button className={styles.iqualBtn} onClick={handleDone}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
