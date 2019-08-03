import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        label: 'Tổng hợp',
        to: '/',
        activeOnlyWhenExact: true,
        icon: 'la la-dashboard',
        count: null,
    },
    {
        label: 'Sản phẩm',
        to: '/products',
        activeOnlyWhenExact: true,
        icon: 'la la-archive',
        count: 15,
    },
    {
        label: 'Đơn hàng',
        to: '/orders',
        activeOnlyWhenExact: true,
        icon: 'la la-check-circle',
        count: 57,
    },
    {
        label: 'Tài chính',
        to: '/reports',
        activeOnlyWhenExact: true,
        icon: 'la la-dollar',
        count: null,
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact, icon, count }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`nav-item ${active}`}>
                    <Link to={to}>
                        <i className={icon} />
                        <p>{label}</p>
                        <span className="badge badge-count">{count}</span>
                    </Link>
                </li>
            )
        }}
        />
    )
}

class Nav extends Component {

    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <div className="scrollbar-inner sidebar-wrapper">
                        <ul className="nav">
                            {this.showMenu(menus)}
                            {/* <li className="nav-item active">
                                <a href="index.html">
                                    <i className="la la-dashboard" />
                                    <p>Dashboard</p>
                                    <span className="badge badge-count">5</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="components.html">
                                    <i className="la la-table" />
                                    <p>Components</p>
                                    <span className="badge badge-count">14</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="forms.html">
                                    <i className="la la-keyboard-o" />
                                    <p>Forms</p>
                                    <span className="badge badge-count">50</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="tables.html">
                                    <i className="la la-th" />
                                    <p>Tables</p>
                                    <span className="badge badge-count">6</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="notifications.html">
                                    <i className="la la-bell" />
                                    <p>Notifications</p>
                                    <span className="badge badge-success">3</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="typography.html">
                                    <i className="la la-font" />
                                    <p>Typography</p>
                                    <span className="badge badge-danger">25</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="icons.html">
                                    <i className="la la-fonticons" />
                                    <p>Icons</p>
                                </a>
                            </li> */}

                            <li className="nav-item update-pro ">
                                <button data-toggle="modal" data-target="#modalUpdate">
                                    <i className="la la-hand-pointer-o" />
                                    <p className="suppercase">Đặt lệnh rút tiền</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }

    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.activeOnlyWhenExact}
                        icon={menu.icon}
                        count={menu.count}
                    />
                )
            })
        }
        return result;
    }
}

export default Nav;