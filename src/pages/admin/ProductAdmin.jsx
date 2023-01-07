import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import SideBar from '../../components/SideBar'
import ProductContent from './contentProduct/ProductContent'

const ProductAdmin = () => {
    return (
        <>
            <Container fluid style={{ marginLeft: '0px', paddingLeft: '0px' }}>
                <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                    <SideBar/>

                    <Container style={{ width: '100%'}}>
                        <Navbar style={{ width: '100%', height: '8%' }}>
                            <Container style={{ marginLeft: '1px', paddingLeft: '1px' }}>
                                <Navbar.Brand>Product Dashboard</Navbar.Brand>
                                <Nav className="me-auto">
                                </Nav>
                            </Container>
                        </Navbar>
                        <ProductContent />
                    </Container>
                </div>

            </Container>
        </>
    )
}

export default ProductAdmin