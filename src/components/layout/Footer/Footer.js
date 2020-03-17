import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import creditCardsImage from '../../../assets/images/cards.png';
import NavbarItem from '../../layout/Navbar/NavbarItem/NavbarItem';
import Logo from '../Logo/Logo';

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    <div className={styles.footerMenu}>
      <div className={styles.footerLeft}>
      <ul>
        <NavbarItem link="/orders">Home</NavbarItem>
        <NavbarItem link="/orders">Privacy Policy</NavbarItem>
        <NavbarItem link="/orders">Refund Policy</NavbarItem>
        <NavbarItem link="/orders">Terms&Conditions</NavbarItem>
      </ul>
      <ul>
        <NavbarItem link="/orders">Home</NavbarItem>
        <NavbarItem link="/orders">Privacy Policy</NavbarItem>
        <NavbarItem link="/orders">Refund Policy</NavbarItem>
        <NavbarItem link="/orders">Terms&Conditions</NavbarItem>

      </ul>
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.contactInfo}>
          <div className={styles.localization}>
            <div className={styles.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
            <p>39687 Clark St.Solon, <span>OH 44139</span></p>
          </div>
          <div className={styles.phoneNumber}>
          <div className={styles.icon}>
          <FontAwesomeIcon icon={faPhone} />
          </div>
            <p>+1.555.555.5555</p>
          </div>
          <div className={styles.email}>
          <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
            <p>support@blossom.com</p>
          </div>
        </div>
    </div>
    <div className={styles.footerRight}>
    <p className={styles.aboutCompany}>
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlusG}>
                Google Plus
              </FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>©Copyright 2020 Blossom | All Rights Reserved</p>
      </div>
    </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
