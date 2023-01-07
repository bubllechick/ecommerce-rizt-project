import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer1 = () => {
    return (
        <div>
            <Container>
                <Row style={{ background: 'green' }}>
                    <Col style={
                        {
                            color: 'white', textAlign: 'center'
                        }
                    }>Market Shop</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer1
