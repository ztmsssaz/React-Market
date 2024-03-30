import GlobalStyle from 'layout/theme/globalStyle'
import Header from './header'
import Footer from './footer';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.div`
main{
    min-height: 80vh;
}
`

function Layout({ children }) {
    return (
        <>
            <Header />
            <Style>
                <main className='py-3'>
                    <Container>
                        <GlobalStyle />
                        {children}
                    </Container>
                </main>
            </Style>
            <Footer />
        </>
    )
}

export default Layout
