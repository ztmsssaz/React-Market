import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ product }) {


    return (
        <Card className='m-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={`/assets/${product.image}`} variant="top" />

                <Card.Body>
                    <Card.Title ad="div">{product.name}</Card.Title>
                </Card.Body>
                <Card.Text as="h4">{product.price} $</Card.Text>
            </Link>
        </Card>
    )
}

export default Product
