import React, { useState, useEffect } from 'react';
import styles from './Images.module.css';

const Images = () => {
  const [imagesUrl, setImagesUrl] = useState([]);
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    const timeoutID = window.setInterval(() => {
      fetch(`https://source.unsplash.com/1600x900/?animals`).then(response => {
        setImagesUrl(response.url);
        setLoadData(true);
      });
    }, 3000);

    return () => window.clearInterval(timeoutID);
  }, []);

  if (loadData) {
    return (
      <div className={styles.container}>
        <img className={styles.carousel} src={imagesUrl} />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1 className={styles.loadingText}>Loading Images...</h1>{' '}
      </div>
    );
  }
};

export default Images;
