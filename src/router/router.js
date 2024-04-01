import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { PrivateRoute, PublicRoute } from './config'
import React from 'react'
import Layout from 'layout';
import Loader from 'components/loader/loader';

const Home = lazy(() => import('pages/home/home'))
const Product = lazy(() => import('pages/product'))
const Account = lazy(() => import('pages/account'))
const Cart = lazy(() => import('pages/cart'))
const Login = lazy(() => import('pages/auth/login/login'))

function MainRouter() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route element={<PublicRoute />}>
                            <Route path='/product/:id' element={<Product />} />
                        </Route>
                        <Route element={<PrivateRoute />} >
                            <Route path='/account' element={<Account />} />
                        </Route>
                        <Route element={<PublicRoute />}>
                            <Route path='/cart/:id?' element={<Cart />} />
                        </Route>
                        <Route element={<PublicRoute restricted />}  >
                            <Route path='/login' element={<Login />} />
                        </Route>
                    </Routes>
                </Layout>
            </Suspense>
        </Router>
    )
}

export default MainRouter
