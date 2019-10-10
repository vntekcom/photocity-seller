import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        activeOnlyWhenExact: true,
        icon: 'la la-dashboard',
        count: null,
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact, icon, count }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : '';
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