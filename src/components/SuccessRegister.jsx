import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const SuccessRegister = () => {
    return (
        <Container fluid="md" className='g-3 m-5'>
            <Row>
                <Col md={{ span: 6, offset: 4 }}>
                    <Card
                        bg='Success'
                        style={{ width: '18rem' }}
                        className="mb-2"
                        border="success"
                    >
                        <Card.Header>Berhasil</Card.Header>
                        <Card.Body>
                            <Card.Title>Register Berhasil</Card.Title>
                            <Card.Text>
                                Silahkan login untuk memulai transaksi
                            </Card.Text>
                            <Button variant="success" href='/login'>Login</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SuccessRegister
