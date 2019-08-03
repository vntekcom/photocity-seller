import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="modalUpdate" tabIndex={-1} role="dialog" aria-labelledby="modalUpdatePro" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h6 className="modal-title">
                                <i className="la la-frown-o" /> Rút tiền về Bank
                            </h6>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <p>Chức năng đang xây dựng...</p>
                            <p>
                                <b>Vui lòng liên hệ hỗ trợ trực tiếp!</b></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;