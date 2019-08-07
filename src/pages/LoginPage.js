import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestLoginUser } from "../actions/index";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      redirect: false
    };
  }

  handelOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state.phone, this.state.password, () => {
      this.setState({
        redirect: true
      });
    });
  };

  render() {
    let { redirect } = this.state;
    if (redirect || localStorage.getItem("userlogin")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Welcome Seller!
                        </h1>
                      </div>
                      <form className="user" onSubmit={this.handleOnSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            placeholder="Số điện thoại"
                            name="phone"
                            onChange={this.handelOnChange}
                            value={this.state.phone}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Mật khẩu đăng nhập"
                            name="password"
                            onChange={this.handelOnChange}
                            value={this.state.password}
                            maxLength="12"
                            minLength="6"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Đăng nhập
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/" className="small">
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <div className="text-center">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="small">
                          Đăng ký ngay.
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (phone, password, callback) => {
      dispatch(requestLoginUser(phone, password, callback));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
