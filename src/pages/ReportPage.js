import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// IMPORT COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ReportPanel from "../components/ReportPanel";
import Modal from "../components/Modal";

class ReportPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <Header />
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
  return {};
};

export default connect(mapStateToProps)(ReportPage);
