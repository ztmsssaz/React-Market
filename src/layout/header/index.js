import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar className="bg-dark" variant={'dark'}>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Market</Navbar.Brand>
                    </LinkContainer>
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
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
