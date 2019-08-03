import React, { Component, Fragment } from 'react';
import ProductItem from '../components/ProductItem';
import ProductForm from '../components/ProductForm';

class ProductPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowForm: false
        }
    }

    showForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }

    render() {
        let { products } = this.props;
        let { isShowForm } = this.state;
        let FormElm = isShowForm ? <ProductForm /> : '';
        let btnLabel = isShowForm ? 'Đóng Form' : 'Thêm sản phẩm';
        return (
            <Fragment>
                <div className="content">
                    <div className="container-fluid">
                        {/* <h4 className="page-title">Sản phẩm</h4> */}
                        <div className="row">
                            <div className="col-md-12">
                                <button class="btn btn-primary mb-10" onClick={this.showForm}>
                                    {btnLabel}
                                </button>
                                {FormElm}
                            </div>

                            <table class="table table-head-bg-success">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">Kho</th>
                                        <th scope="col">Giá gốc (SRP)</th>
                                        <th scope="col">Giá bán</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.showProducts(products)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

    showProducts = (products) => {
        var result = null;
        result = products
            .map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                />
            })
        return result;
    }
}

export default ProductPanel;