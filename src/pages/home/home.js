import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from 'components/product'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from '../../actions/productAction'


function Home() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.productList);

    useEffect(() => {
        console.log(products)
        dispatch(productListAction());
    }, [dispatch])

    return (
        <div className='text-center'>
            <h1>محصولات</h1>

            {loading ? <h2>درحال دریافت اطلاعات</h2>
                : <Row>
                    {products.map((item) => {
                        return (
                            <Col sm={12} md={6} lg={4} key={item._id} >
                                <Product product={item} />
                            </Col>
                        )
                    })}
                </Row>}
        </div>
    )
}

export default Home
