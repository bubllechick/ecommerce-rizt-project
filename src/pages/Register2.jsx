import React, { useState, useEffect } from 'react';
import CardCategories from '../components/CardCategories'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register2 = (props) => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [no_hp, setNo_hp] = useState('');
    const [foto, setfoto] = useState('');
    const [tgl_lahir, settgl_lahir] = useState('');
    const [preview, setPreview] = useState('');
    const [msg, setMsg] = useState('');

    const [user, setUser] = useState([]);

    const navigate = useNavigate();
    var token = localStorage.getItem("tokens");
    // const fetchData = async () => {
    //     // let token = localStorage.getItem("tokens");
    //     const j = JSON.parse(token);
    //     const x = j["token"]
    //     var bearer = 'Bearer ' + x;
    //     return await fetch("http://localhost:3001/auth/for-user-info", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `${bearer}`, // notice the Bearer before your token
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => setUser(data));
    // }
    // console.log(user)

    const convertToBase64 = (e) => {
        const reader = new FileReader()
        const image = e.target.files[0];
        setPreview(URL.createObjectURL(image))
        reader.readAsDataURL(image)

        reader.onload = () => {
            console.log('called: ', reader)
            setfoto(reader.result)
        }
    }

    useEffect(() => {
        if (token) {
            navigate("/");
            window.location.reload();
            document.location.replace();
        }
        // fetchData(); // eslint-disable-next-line
        document.title = props.title // eslint-disable-next-line
    }, [])

    const Register = async (e) => {
        e.preventDefault();
        console.log(nama, password, no_hp, foto);
        try {
            const data = await axios.post('http://localhost:3001/user', {
                nama: nama,
                password: password,
                no_telp: no_hp,
                foto: foto,
                role: 'user',
                tgl_lahir: tgl_lahir
            });
            if (data) {
                setNama('')
                setPassword('')
                setNo_hp('')
                setfoto('')
                navigate("/successRegister");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    }


    return (
        <>
            <Container className='md justify-content-center'>
                <NavTop />
                <Nav2 />
                <Container className='g-1 m-5'>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>

                            <Form onSubmit={Register} className="box">
                                <p className="has-text-centered" style={{ color: "red" }}>{msg}</p>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nama lengkap</Form.Label>
                                    <Form.Control type="text" placeholder="Nama lengkap" value={nama} onChange={(e) => setNama(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tanggal lahir</Form.Label>
                                    <Form.Control type="date" placeholder="Tanggal lahir" value={tgl_lahir} onChange={(e) => settgl_lahir(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>NO. Hp</Form.Label>
                                    <Form.Control type="number" placeholder="No Handphone" value={no_hp} onChange={(e) => setNo_hp(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Card>
                                        <Card.Img rounded variant="top" src={preview ? (preview) : ("")} />
                                        <Card.Body>
                                            <Card.Text>
                                                <Form.Control type="file" placeholder="Foto" onChange={convertToBase64} required />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* <Form.Label>Foto</Form.Label> */}
                                    {/* <Col> */}
                                    {/* <Image roundedCircle src={preview ? (preview) : ("")} style={{ border: '1px solid gray' }} className="justify-content-center g-1 mt-0" /> */}
                                    {/* </Col> */}
                                    {/* <Form.Control type="file" placeholder="Foto" onChange={convertToBase64} required /> */}
                                </Form.Group>

                                <Button variant="outline-success" style={{ fontWeight: 700 }} type='submit'>
                                    Daftar
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
                <hr />
                <div className='p-4' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk kategori</div>
                <hr />
                <CardCategories />
                <hr />
                <Footer1 />
            </Container>
        </>
    )
}

export default Register2
