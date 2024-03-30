import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import React from 'react'
import Layout from '../layout';
import Loader from 'components/loader/loader';
const Home = lazy(() => import('pages/home/home'))
const Product = lazy(() => import('pages/product'))
const Account = lazy(() => import('pages/account'))
const Card = lazy(() => import('pages/card'))

function MainRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/product/:id' component={Product} exact />
                        <Route path='/account' component={Account} exact />
                        <Route path='/card' component={Card} exact />
                    </Switch>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter
