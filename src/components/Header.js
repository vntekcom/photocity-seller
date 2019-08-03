import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<Fragment>
				<div className="main-header">
					<div className="logo-header">
						<Link to="#" className="logo">
							SELLER CENTER
              			</Link>
						<button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<button className="topbar-toggler more">
							<i className="la la-ellipsis-v" />
						</button>
					</div>
					<nav className="navbar navbar-header navbar-expand-lg">
						<div className="container-fluid">
							<form className="navbar-left navbar-form nav-search mr-md-3" action>
								<div className="input-group">
									<input type="text" placeholder="Tìm kiếm..." className="form-control" />
									<div className="input-group-append">
										<span className="input-group-text">
											<i className="la la-search search-icon" />
										</span>
									</div>
								</div>
							</form>

							<ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
								{/* <li className="nav-item dropdown hidden-caret">
									<Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="la la-envelope" />
									</Link>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<Link to="#" className="dropdown-item" >Action</Link>
										<Link to="#" className="dropdown-item" >Another action</Link>
										<div className="dropdown-divider" />
										<Link to="#" className="dropdown-item" >Something else here</Link>
									</div>
								</li> */}
								<li className="nav-item dropdown hidden-caret">
									<Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i className="la la-bell" />
										<span className="notification">3</span>
									</Link>
									<ul className="dropdown-menu notif-box" aria-labelledby="navbarDropdown">
										<li>
											<div className="dropdown-title">Bạn có 3 tin chưa đọc</div>
										</li>
										<li>
											<div className="notif-center">
												<Link to="#" >
													<div className="notif-icon notif-primary">
														<i className="la la-user-plus" />
													</div>
													<div className="notif-content">
														<span className="block">
															Khách thích sản phẩm
                              							</span>
														<span className="time">5 phút</span>
													</div>
												</Link>
												<Link to="#" >
													<div className="notif-icon notif-success"> <i className="la la-comment" /> </div>
													<div className="notif-content">
														<span className="block">
															Phản hồi mới
                              							</span>
														<span className="time">12 phút</span>
													</div>
												</Link>
												<Link to="#" >
													<div className="notif-icon notif-danger"> <i className="la la-heart" /> </div>
													<div className="notif-content">
														<span className="block">
															Đơn hàng mới
                              							</span>
														<span className="time">17 phút</span>
													</div>
												</Link>
											</div>
										</li>
										{/* <li>
											<Link to="#" className="see-all" href="javascript:void(0);"> <strong>See all notifications</strong> <i className="la la-angle-right" /> </Link>
										</li> */}
									</ul>
								</li>
								<li className="nav-item dropdown">
									<Link to="#" className="dropdown-toggle profile-pic" data-toggle="dropdown" aria-expanded="false">
										<img src="//sale.kingcom.com.vn/img/logo.jpg" alt="kingcom store" className="img-circle" width={36} />
										<span>KingCom Store</span>
									</Link>
									<ul className="dropdown-menu dropdown-user">
										<li>
											<div className="user-box">
												<div className="u-img"><i className="la la-phone la-3x text-danger" /></div>
												<div className="u-text">
													<h4 className="font-weight-bold">0703120226</h4>
													<p className="text-muted">kingcom@phototicy.vn</p>
													{/* <Link to="#" href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</Link>*/}
												</div>
											</div>
										</li>
										<div className="dropdown-divider" />
										<Link to="#" className="dropdown-item" >
											<i className="ti-settings" /> Cài đặt shop
										</Link>
										<div className="dropdown-divider" />
										<Link to="#" className="dropdown-item" >
											<i className="fa fa-power-off" /> Đăng xuất
										</Link>
									</ul>
								</li>
							</ul>

						</div>
					</nav>
				</div>
			</Fragment>
		);
	}
}

export default Header;
