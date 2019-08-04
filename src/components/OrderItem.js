import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderItem extends Component {
  render() {
    let { index, order } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img src={order.image} alt={order.name} width={50} />
        </td>
        <td>{order.name}</td>
        <td>{order.SKU}</td>
        <td>
          <strike>{order.srp}</strike> {order.price}
        </td>
        <td>{order.customer}</td>
        <td>{order.phone}</td>
        <td>
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              
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
                <i className="la la-eye" /> Xem chi tiết
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="la la-edit" /> Sẵn sàng giao
              </Link>
              <Link to="#" className="dropdown-item">
                <i className="la la-trash" /> Huỷ đơn hàng
              </Link>
            </ul>
          </div>
         
        </td>
      </tr>
    );
  }
}

export default OrderItem;
