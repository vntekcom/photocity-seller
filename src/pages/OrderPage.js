import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actFetchUserRequest } from "../actions/index";
// IMPORT COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import OrderPanel from "../components/OrderPanel";
import Modal from "../components/Modal";

class OrderPage extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  render() {
    let { orders, user } = this.props;
    if (!localStorage.getItem("userlogin")) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <div className="wrapper">
          <Header user={user} />
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
    orders: state.orders,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetUser: () => {
      dispatch(actFetchUserRequest());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);
