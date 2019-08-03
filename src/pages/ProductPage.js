import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// IMPORT COMPONENTS
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductPanel from '../components/ProductPanel';
import Modal from '../components/Modal';

class ProductPage extends Component {

	render() {
		let { products } = this.props;
		return (
			<Fragment>
				<div className="wrapper">
					<Header />
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
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductPage);
