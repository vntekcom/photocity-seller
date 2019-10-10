import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actFetchIMEIRequest } from '../actions';
// IMPORT COMPONENTS

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imei: ''
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.actFetchIMEIRequest(this.state.imei)
    }

    myChangeHandler = (event) => {
        this.setState({
            imei: event.target.value
        });
    }

    render() {

        let { imei } = this.props;
        console.log(imei)

        return (
            <Fragment>
                <div>
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">

                                <div className="card-header">
                                    <h3>IMEI</h3>
                                    <div className="d-flex justify-content-end social_icon">
                                        <span><i className="fas fa-barcode" /></span>
                                    </div>
                                </div>

                                <div className="card-body">

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-keyboard" /></span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nhập IMEI..."
                                                onChange={this.myChangeHandler}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="GỬI" className="btn float-right login_btn" />
                                        </div>
                                    </form>

                                    <div className="row">
                                        <div className="col-sm-12" style={{ textAlign: 'justify' }}>
                                            <p>1. Trang web chính thức tra cứu sản phẩm chính hãng phân phối tại Photocity.</p>
                                            <p>3. Không tra được IMEI có nghĩa là hàng nhập lậu hoặc hàng giả, Photocity không hỗ trợ bảo hành.</p>
                                            <p>4. Trước khi mua hàng, bạn nên dùng trang web này để kiểm tra sản phẩm có phải là hàng nhập khẩu chính ngạch hay không.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <div className="text-center">
                                        <p>Copyright © 2019</p>
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

const mapStateToProps = state => {
    return {
        imei: state.imei
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actFetchIMEIRequest: (imei) => {
            dispatch(actFetchIMEIRequest(imei))
        }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePage);
