import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NotFoundPage';

// let userlogin = localStorage.getItem('userlogin');
// console.log(JSON.parser(userlogin).message);

const routes = [
    {
        path: '/',
        exact: true,
        main: ({ match }) => <HomePage match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: ({ match }) => <LoginPage match={match} />
    },
    {
        path: '/products',
        exact: true,
        main: ({ match }) => <ProductPage match={match} />
    },
    {
        path: '/orders',
        exact: true,
        main: ({ match }) => <OrderPage match={match} />
    },
    {
        path: '/reports',
        exact: true,
        main: ({ match }) => <ReportPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: ({ match }) => <NotFoundPage match={match} />
    }
]

export default routes;