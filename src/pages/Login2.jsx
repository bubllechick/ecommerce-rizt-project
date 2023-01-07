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
            if (data) {
                var token = localStorage.getItem("tokens");
                var j = JSON.parse(token);
                var x = j["token"];
                var bearer = 'Bearer ' + x;
                const instance = axios.create({
                    baseURL: 'http://localhost:3001/auth/',
                    timeout: 1000,
                    headers: { 'Authorization': `${bearer}` }
                });
                const getdata = await instance.get('/for-user-info')
                    .then(response => {
                        console.log(response.data.role)
                        localStorage.setItem("role", JSON.stringify(response.data.role));
                        return response.data.role;
                    })
                if (getdata === 'user') {
                    navigate("/");
                    document.location.replace();
                } else {
                    navigate("/adminDashboard")
                }
            } else {
                console.log('gagal')
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    }

    useEffect(() => {
        var token = localStorage.getItem("tokens");
        if (token) {
            navigate("/")
            window.location.reload();
            document.location.replace();
        }
        document.title = props.title // eslint-disable-next-line
    }, [])

    return (
        <Container className='md justify-content-center'>
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

                            <Button variant="outline-success" style={{ fontWeight: 700 }} type='submit'>
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


        </Container>
    )
}

export default Login2
