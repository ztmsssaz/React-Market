import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import React from 'react'
import Layout from 'layout';
import Loader from 'components/loader/loader';
const Home = lazy(() => import('pages/home/home'))
const Product = lazy(() => import('pages/product'))
const Account = lazy(() => import('pages/account'))
const Cart = lazy(() => import('pages/cart'))

function MainRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/cart/:id?' element={<Cart />} />
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}

export default MainRouter
