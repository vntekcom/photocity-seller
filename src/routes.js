import React from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
    {
        path:'/',
        exact: true,
        main: ({match}) => <HomePage match={match} />
    },
    {
        path:'/products',
        exact: true,
        main: ({match}) => <ProductPage match={match} />
    },
    {
        path:'/orders',
        exact: true,
        main: ({match}) => <OrderPage match={match} />
    },
    {
        path:'/reports',
        exact: true,
        main: ({match}) => <ReportPage match={match} />
    },
    {
        path:'',
        exact: true,
        main: ({match}) => <NotFoundPage match={match} />
    }
 
]

export default routes;