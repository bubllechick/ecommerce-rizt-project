import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CardCategories from '../components/CardCategories'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'
import axios from 'axios';

const Login2 = (props) => {

    const [no_hp, setNo_hp] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:3001/auth', {
                no_hp: no_hp,
                password: password
            });
            localStorage.setItem("tokens", JSON.stringify(data.data));
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        document.title = props.title // eslint-disable-next-line
    }, [])

    return (
        <div>
            <NavTop />
            <Nav2 />
            <Container className='g-1 m-5'>
                <Row>
                    <Col md={{ span: 4, offset: 3 }}>

                        <Form onSubmit={Auth} className="box">
                            <p className="has-text-centered" style={{ color: "red" }}>{msg}</p>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>No Handphone</Form.Label>
                                <Form.Control type="number" placeholder="Enter No Handphone" value={no_hp} onChange={(e) => setNo_hp(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>

                            <Button variant="info" style={{color: 'white', fontWeight:700}} type='submit'>
                                Login
                            </Button>
                        </Form>

                    </Col>
                </Row>

            </Container>
            <hr />
            <CardCategories />
            <hr />
            <Footer1 />


        </div>
    )
}

export default Login2
