import React, { useState, useEffect } from 'react';
import styles from './Choices.module.css';
import { getChoices } from './../../mock';
import Choice from '../Choice';

const Choices = () => {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setChoices(getChoices());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {choices.map(choice => {
          console.log(choice);
          return (
            <div className={styles.card} key={choice.id}>
              <h2 className={styles.cardTitle}>{choice.question}</h2>
              <Choice
                className={styles.cardOptions}
                correctAns={choice.correctAns}
                options={choice.options}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Choices;
