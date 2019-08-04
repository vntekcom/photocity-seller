import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    let { index, product } = this.props;
    let statusElm = product.status ? "Đang bán" : "Đợi duyệt";
    let statusClass = product.status ? "btn-success" : "btn-warning";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={product.image} alt={product.name} width={50} />
        </td>
        <td>{product.name}</td>
        <td>{product.SKU}</td>
        <td>{product.warehouse}</td>
        <td>
          <strike>{product.srp}</strike> {product.price}
        </td>
        <td>
          <div className="dropdown">
            <button
              className={`btn ${statusClass} dropdown-toggle`}
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {statusElm}
            </button>
            <ul
              className="dropdown-menu"
              role="menu"
              aria-labelledby="dropdownMenu"
              x-placement="bottom-start"
              style={{
                position: "absolute",
                transform: "translate3d(0px, 39px, 0px)",
                top: "0px",
                left: "0px",
                willChange: "transform"
              }}
            >
              <Link to="#" className="dropdown-item">
                <i className="la la-eye" /> Xem
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="la la-edit" /> Sửa
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="la la-trash" /> Xoá
              </Link>
            </ul>
          </div>
          {/* <button className="btn btn-success">
            <i className="la la-eye" />
          </button>
          <button className="btn btn-info">
            <i className="la la-edit" />
          </button>
          <button className="btn btn-danger">
            <i className="la la-trash" />
          </button> */}
        </td>
      </tr>
    );
  }
}

export default ProductItem;
