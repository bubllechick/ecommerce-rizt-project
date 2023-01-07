import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavAdmin = () => {
    return (
        <>
            <Navbar bg="light" variant="light" style={{width: '100%', height: '8%'}}>
                <Container  style={{marginLeft: '12px', paddingLeft: '12px'}}>
                    <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
