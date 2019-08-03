import React, { Component } from 'react';

class ProductForm extends Component {
    render() {
        return (
            <div className="row row-card-no-pd">
                <div className="col-md-12">
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group form-inline">
                            <label htmlFor="inlineinput" className="col-md-3 col-form-label">Inline Input</label>
                            <div className="col-md-9 p-0">
                                <input type="text" className="form-control input-full" id="inlineinput" placeholder="Enter Input" />
                            </div>
                        </div>
                        <div className="form-group has-success">
                            <label htmlFor="successInput">Success Input</label>
                            <input type="text" id="successInput" defaultValue="Success" className="form-control" />
                        </div>
                        <div className="form-group has-error has-feedback">
                            <label htmlFor="errorInput">Error Input</label>
                            <input type="text" id="errorInput" defaultValue="Error" className="form-control" />
                            <small id="emailHelp" className="form-text text-muted">Please provide a valid informations.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="disableinput">Disable Input</label>
                            <input type="text" className="form-control" id="disableinput" placeholder="Enter Input" disabled />
                        </div>
                        <div className="form-check">
                            <label>Gender</label><br />
                            <label className="form-radio-label">
                                <input className="form-radio-input" type="radio" name="optionsRadios" defaultValue defaultChecked />
                                <span className="form-radio-sign">Male</span>
                            </label>
                            <label className="form-radio-label ml-3">
                                <input className="form-radio-input" type="radio" name="optionsRadios" defaultValue />
                                <span className="form-radio-sign">Female</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="control-label">
                                Static
          </label> {/**/} <p className="form-control-static">hello@themekita.com</p> {/**/}  {/**/}</div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Example select</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple className="form-control" id="exampleFormControlSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Example file input</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comment</label>
                            <textarea className="form-control" id="comment" rows={5} defaultValue={"\t\t\t\t\t\t\t\t\t\t\t\t"} />
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue />
                                <span className="form-check-sign">Agree with terms and conditions</span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductForm;
