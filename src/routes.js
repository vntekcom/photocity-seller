import React from 'react';
import HomePage from './pages/HomePage';

// let userlogin = localStorage.getItem('userlogin');
// console.log(JSON.parser(userlogin).message);

const routes = [
    {
        path: '/',
        exact: true,
        main: ({ match }) => <HomePage match={match} />
    }
]

export default routes;