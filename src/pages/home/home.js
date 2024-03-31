import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Product from 'components/product'
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from '../../actions/productAction'


function Home() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.productList);

    useEffect(() => {
        dispatch(productListAction());
    }, [dispatch])

    return (
        <div className='text-center'>
            <h1>محصولات</h1>

            {loading ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
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
