import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../actions/cartActions"
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { colors } from "layout/theme/colors";

function Cart({ match }) {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)
    const productId = match.params.id;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId))
        }
    }, [dispatch, productId])

    const removeProductFromCart = (id) => {
        console.log('remove:')
        dispatch(removeFromCart(id))
    }

    const totalCartPrice = () => {
        const sum = cartItems.reduce((item, a) => item + a.price, 0)
        return sum;
    }

    return (
        <div>
            <Row >
                <Col md={8}>
                    <h2>سبد خرید</h2>
                    {cartItems.length == 0 ? <p>سبد خرید خالی است</p>
                        : <ListGroup variant="flush">
                            {
                                cartItems.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.productId}>
                                            <Row className="align-items-center">
                                                <Col xs={6} md={3}>
                                                    <Image src={`/assets/${item.image}`} alt={item.name} fluid rounded />
                                                </Col>
                                                <Col md={3}>
                                                    {item.name}
                                                </Col>
                                                <Col md={2}>
                                                    {item.price}
                                                </Col>
                                                <Col md={2}>
                                                    <Button type="button" variant="light" onClick={() => removeProductFromCart(item.productId)}>
                                                        <FontAwesomeIcon icon={faTrash} color={colors.trash} />
                                                    </Button>
                                                </Col>
                                            </Row>

                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    }
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <span>قیمت کل: {totalCartPrice()} ریال</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Cart
