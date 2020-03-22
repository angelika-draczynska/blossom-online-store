import React from 'react';
import styles from './Newsletter.module.scss';
import newsletterFlowers from '../../../assets/images/NewsletterFlowers.jpg';
import Button from '../../common/Button/Button';

const Newsletter = () => (
  <div className={styles.container}>
    <h2 className={styles.label}>
      Join our Newsletter <br />
      and get 50% off
    </h2>
    <div className={styles.event}>
      <input placeholder="Your e-mail" />
      <Button>Join</Button>
    </div>
    <div className={styles.flowers}>
      <img src={newsletterFlowers} alt="Footer" />
    </div>
  </div>
);

export default Newsletter;
