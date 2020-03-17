import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import Logo from '../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavbarItem from './NavbarItem/NavbarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import CartDropdown from '../../features/Cart/CartDropdown/CartDropdown';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }
  toggleHidden = () => {
    this.setState(prevState => {
      return { hidden: !prevState.hidden };
    });
  };

  render() {
    const icons = (
      <>
      <li className={styles.cart} onClick={this.toggleHidden}>
        {this.state.hidden ? (
          <FontAwesomeIcon icon={faShoppingCart} />
        ) : (
          <FontAwesomeIcon className={styles.active} icon={faShoppingCart} />
        )}
      </li>
    {
      this.state.hidden ? null : <CartDropdown />
    }
    <NavbarItem link="/login">
      <FontAwesomeIcon icon={faUser} />
    </NavbarItem>
    </>);

    return (
      <nav className={styles.container}>
        <DrawerToggle clicked={this.props.drawerToggleClicked} />
        <div className={styles.icons}>{icons}</div>

        <ul className={styles.navbar}>
          <div className={styles.test2}>
            <NavbarItem link="/" exact active>
              Home
            </NavbarItem>
            <NavbarItem link="/orders">How It Works</NavbarItem>
            <NavbarItem link="/blog">Blog</NavbarItem>

            <li>
              <Logo />
            </li>
            <NavbarItem link="/about">About Us</NavbarItem>
            <NavbarItem link="/contact">Contact</NavbarItem>
          </div>
          <div className={styles.test}>
            {icons}
          </div>
        </ul>
      </nav>
    );
  }
}

// const Navbar = ({ drawerToggleClicked }) => (
//   <nav className={styles.container}>
//     <DrawerToggle clicked={drawerToggleClicked} />
//     <ul className={styles.navbar}>
//       <div className={styles.test2}>
//       <NavbarItem link="/" exact active>
//         Home
//       </NavbarItem>
//       <NavbarItem link="/orders">How It Works</NavbarItem>
//       <NavbarItem link="/orders">Blog</NavbarItem>

//       <li>
//         <Logo />
//       </li>
//       <NavbarItem link="/about">About Us</NavbarItem>
//       <NavbarItem link="/contact">Contact</NavbarItem>

//       </div>
//       <div className={styles.test}>
//       <NavbarItem link="/cart"><FontAwesomeIcon icon={faShoppingCart} /> {hidden ? null : (
//           <CartDropdown
//             toggle={this.toggleHidden}
//           ></CartDropdown>
//         )}</NavbarItem>
//       <NavbarItem link="/login"><FontAwesomeIcon icon={faUser} /></NavbarItem>
//       </div>
//     </ul>
//   </nav>
// );

Navbar.propTypes = {};
export default Navbar;
