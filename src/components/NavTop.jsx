import { LocationOn } from '@material-ui/icons'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavTop = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ fontSize: 14, fontWeight: 700 }} align="start">
                        <LocationOn style={{ fontSize: 19, color: "gray", paddingRight: 7 }} />
                        Tanggerang
                    </Col>
                    {/* <Col style={{ fontSize: 14, fontWeight: 700}} align="end">Banyak diskonannya Buruan langganan !!!</Col> */}
                </Row>
            </Container>
        </>
    )
}

export default NavTop
