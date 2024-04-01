import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../actions/authActions'

function Header() {
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <header>
            <Navbar className="bg-dark" variant={'dark'}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Market</Navbar.Brand>
                    </LinkContainer>
                    {userData.token ?
                        <Nav>
                            <LinkContainer to="/account">
                                <Nav.Link >
                                    <FontAwesomeIcon icon={faUser} inverse ></FontAwesomeIcon>
                                </Nav.Link >
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link >
                                    <FontAwesomeIcon icon={faShoppingCart} inverse ></FontAwesomeIcon>
                                </Nav.Link >
                            </LinkContainer>
                            <Button onClick={() => dispatch(logoutAction())} variant='dark'>
                                <span className='text-light'><FontAwesomeIcon icon={faSignOut} inverse ></FontAwesomeIcon> Logout</span>
                            </Button>
                        </Nav>
                        : <Nav>
                            <LinkContainer to="/login">
                                <Nav.Link >
                                    <FontAwesomeIcon icon={faSignIn} inverse ></FontAwesomeIcon>
                                </Nav.Link >
                            </LinkContainer>
                        </Nav>
                    }

                </Container>
            </Navbar>
        </header >
    )
}

export default Header
