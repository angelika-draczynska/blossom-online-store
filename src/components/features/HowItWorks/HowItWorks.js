import React from 'react';
import styles from './HowItWorks.module.scss';
import flowerBox1 from '../../../assets/images/flowerBox1.jpg';
import flowerBox2 from '../../../assets/images/flowerBox2.jpg';
import flowerBox3 from '../../../assets/images/flowerBox3.jpg';

const HowItWorks = () => (
  <div className={styles.container}>
    <h2>How It Works?</h2>
    <div className={styles.featureBoxes}>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={flowerBox1} alt="Choose-flowers" />
        </div>
        <div className={styles.text}>
          <h4>1. Choose desired flowers</h4>
          <p>
            They’re picked in bud and wrapped in petal protectors so they travel
            safe.
          </p>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={flowerBox2} alt="Check-post" />
        </div>
        <div className={styles.text}>
          <h4>2. We pop them in the post</h4>
          <p>
            They cleverly fit through the letterbox so they can be delivered if
            no one’s in.
          </p>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.image}>
          <img src={flowerBox3} alt="Get-fun" />
        </div>
        <div className={styles.text}>
          <h4>3. They get 5 minutes of fun</h4>
          <p>
            Every bouquet comes with fun arranging tips so they can style theirs
            like a pro!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
