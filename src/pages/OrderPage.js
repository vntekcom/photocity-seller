import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// IMPORT COMPONENTS
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OrderPanel from '../components/OrderPanel';
import Modal from '../components/Modal';

class OrderPage extends Component {
  render() {
    let { orders } = this.props;
    return (
      <Fragment>
        <div className="wrapper">
          <Header />
          <Sidebar />
          <div className="main-panel">
            <OrderPanel orders={orders} />
          </div>
        </div>
        <Modal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps)(OrderPage);
