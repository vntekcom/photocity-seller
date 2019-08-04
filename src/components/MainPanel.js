import React, { Component, Fragment } from "react";

class MainPanel extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Tổng hợp</h4>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-stats card-warning">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-check-circle" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Đơn hàng</p>
                          <h4 className="card-title">1</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-danger">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-newspaper-o" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Trả hàng</p>
                          <h4 className="card-title">1</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-success">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-archive" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Sản phẩm</p>
                          <h4 className="card-title">15</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats card-primary">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-users" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Lượt thích</p>
                          <h4 className="card-title">12</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-card-no-pd">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <p className="fw-bold mt-1">Doanh thu</p>
                    <h4>
                      <b>2.600.000 đ</b>
                    </h4>
                    {/* <a href="#" className="btn btn-primary btn-full text-left mt-3 mb-3">
                                                <i className="la la-plus" /> Rút tiền
                                            </a> */}
                  </div>
                  <div className="card-footer">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="btn btn-default btn-link" href="#">
                          <i className="la la-history" /> Lịch sử
                        </a>
                      </li>
                      <li className="nav-item ml-auto">
                        <a className="btn btn-default btn-link" href="#">
                          <i className="la la-refresh" /> Làm mới
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Giao đúng hạn</span>
                        <span className="text-muted fw-bold"> 6/12</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="50%"
                        />
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Trả lời comment</span>
                        <span className="text-muted fw-bold"> 5/10</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="50%"
                        />
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Sản phẩm được duyệt</span>
                        <span className="text-muted fw-bold"> 15/15</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="100%"
                        />
                      </div>
                    </div>
                    <div className="progress-card">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted">Sản phẩm hết hàng</span>
                        <span className="text-muted fw-bold"> 0/15</span>
                      </div>
                      <div className="progress mb-2" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "0%" }}
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          data-toggle="tooltip"
                          data-placement="top"
                          title="0%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-stats">
                  <div className="card-body">
                    <p className="fw-bold mt-1">Thống kê trong tuần</p>
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center icon-warning">
                          <i className="la la-pie-chart text-warning" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Đơn mới</p>
                          <h4 className="card-title">10</h4>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="la la-heart-o text-primary" />
                        </div>
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="numbers">
                          <p className="card-category">Lượt thích</p>
                          <h4 className="card-title">4</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainPanel;
