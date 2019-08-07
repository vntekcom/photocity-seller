import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actFetchUserRequest } from "../actions/index";
// IMPORT COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductPanel from "../components/ProductPanel";
import Modal from "../components/Modal";

class ProductPage extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  render() {
    let { products, user } = this.props;
    if (!localStorage.getItem("userlogin")) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <div className="wrapper">
          <Header user={user} />
          <Sidebar />
          <div className="main-panel">
            <ProductPanel products={products} />
          </div>
        </div>
        <Modal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
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
)(ProductPage);
