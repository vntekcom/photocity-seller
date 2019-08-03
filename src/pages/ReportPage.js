import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// IMPORT COMPONENTS
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


class ReportPage extends Component {

	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<Header />
					<Sidebar />
					<div className="main-panel">


						<Footer />
					</div>
				</div>
				<Modal />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
}

export default connect(mapStateToProps)(ReportPage);
