import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actFetchUserRequest } from "../actions/index";
// IMPORT COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ReportPanel from "../components/ReportPanel";
import Modal from "../components/Modal";

class ReportPage extends Component {
  componentDidMount() {
    this.props.onGetUser();
  }

  render() {
    let { user } = this.props;
    if (!localStorage.getItem("userlogin")) {
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <div className="wrapper">
          <Header user={user} />
          <Sidebar />
          <div className="main-panel">
            <ReportPanel />
          </div>
        </div>
        <Modal />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(ReportPage);
