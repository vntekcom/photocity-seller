import React, { Component, Fragment } from "react";
import OrderItem from "../components/OrderItem";

class OrderPanel extends Component {

  render() {
    let { orders } = this.props;
    return (
      <Fragment>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <table class="table table-head-bg-success">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Hình</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>{this.showOrders(orders)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  showOrders = orders => {
    var result = null;
    result = orders.map((order, index) => {
      return <OrderItem key={index} order={order} index={index} />;
    });
    return result;
  };
}

export default OrderPanel;
