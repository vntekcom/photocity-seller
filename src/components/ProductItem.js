import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        let { index, product } = this.props;
        let statusElm = product.status ? 'Đang bán' : 'Đợi duyệt';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.SKU}</td>
                <td>{product.warehouse}</td>
                <td>{product.srp}</td>
                <td>{product.price}</td>
                <td>
                    <label className="bg bg-warning">{statusElm}</label>
                </td>
                <td>
                    <button className="btn btn-success">
                        <i className="la la-eye" />
                    </button>
                    <button className="btn btn-info">
                        <i className="la la-edit" />
                    </button>
                    <button className="btn btn-danger">
                        <i className="la la-trash" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;