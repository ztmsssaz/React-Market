import { useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productDetailAction } from '../../actions/productAction'


function Product() {

    const dispatch = useDispatch();
    const { product, loading } = useSelector((state) => state.productDetail);
    const { token } = useSelector((state) => state.user);
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(productDetailAction(params.id));
    }, [params.id, dispatch])

    const addProductToCartHandler = () => {
        if (token) {
            navigate(`/cart/${params.id}`)
        } else {
            alert('ابتدا باید وارد شوید')
        }
    }

    return (
        <div>
            {loading ? <Row>
                <Col className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row> :
                <Row className="flex-row-reverse">
                    <Col md={6} lg={6}>
                        <Card className="rounded p-1">
                            <Image src={`/assets/${product.image}`} fluid />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span className="fw-bold">{product.price}</span><span className="mx-1">ریال</span>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <span>{product.description}</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} >
                        <ListGroup variant="flush" className="text-center">
                            <ListGroup.Item>
                                <Button onClick={addProductToCartHandler}
                                    className="btn btn-block btn-success">افزودن به سبد خرید</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            }
            <NavLink to="/" className="btn btn-dark">بازگشت به صفحه اصلی</NavLink>
        </div>
    )
}

export default Product
