import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideDrawer from '../SideDrawer/SideDrawer';

class MainLayout extends React.Component {
  state = {
    showSideDrawer: false,
    purchasing: null
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const { showSideDrawer } = this.state;

    const { children } = this.props;

    return (
      <>
        <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {children}
        <Footer />
      </>
    );
  }
}

MainLayout.propTypes = {};
export default MainLayout;
