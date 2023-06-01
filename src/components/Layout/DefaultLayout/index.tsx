import { ReactNode } from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
interface DefaultLayoutProps {
    children?: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <div>
            <Header />
            <Container fluid style={{ minHeight: 600 }}>
                {children}
            </Container>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
