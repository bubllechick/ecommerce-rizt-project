import React, { useState, useEffect } from 'react';
import CardCategories from '../components/CardCategories'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SettingUser = (props) => {
    const [nama, setNama] = useState('');
    const [password, setPassword] = useState('');
    const [no_telp, setNo_telp] = useState('');
    const [foto, setfoto] = useState('');
    const [preview, setPreview] = useState('');
    const [tgl_lahir, settgl_lahir] = useState('');

    const [msg, setMsg] = useState('');

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    var token = localStorage.getItem("tokens");
    var j = JSON.parse(token);
    var x = j["token"]
    var bearer = 'Bearer ' + x;

    const fetchDataUser = async () => {
        // let token = localStorage.getItem("tokens");
        // const j = JSON.parse(token);
        // const x = j["token"]
        // var bearer = 'Bearer ' + x;
        return await fetch("http://localhost:3001/auth/for-user-info", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`, // notice the Bearer before your token
            }
        })
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchDataUser();
        document.title = props.title
        // eslint-disable-next-line
        setNama, setNo_telp, setPassword
    }, [nama, no_telp, password])

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

    // console.log(user)
    const setting = async (e, userId) => {
        e.preventDefault();
        console.log(userId)
        console.log(userId, nama, password, no_telp)
        // let token = localStorage.getItem("tokens");
        // const j = JSON.parse(token);
        // const x = j["token"];
        // var bearer = 'Bearer ' + x;
        if (nama.length === 0) {
            setNama(user.nama)
        }
        if (nama.length === 0) {
            setNo_telp(user.no_telp)
        }
        if (nama.length === 0) {
            setPassword(user.password)
        }
        await axios({
            method: 'PATCH',
            url: `http://localhost:3001/user/data/${userId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`
            },
            data: {
                id: userId,
                nama: nama,
                no_telp: no_telp,
                password: password,
                tgl_lahir: tgl_lahir
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const saveImage = async (e, userId) => {
        console.log(userId)
        // let token = localStorage.getItem("tokens");
        // const j = JSON.parse(token);
        // const x = j["token"];
        // var bearer = 'Bearer ' + x;
        await axios({
            method: 'PATCH',
            url: `http://localhost:3001/user/image/${userId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`
            },
            data: {
                id: userId,
                foto: foto
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <Container className='md justify-content-center'>

                <NavTop />
                <Nav2 />
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }} className='pt-5'>
                            <p className="has-text-centered" style={{ color: "gray", fontWeight: 700, fontSize: "17px" }}>Ubah foto</p>
                            <Card className='mb-5'>
                                <Card.Img rounded variant="top" src={preview ? (preview) : (user.foto)} className='p-2' />
                                <Card.Body>
                                    <Card.Text>
                                        <Form.Control type="file" placeholder="Foto" onChange={convertToBase64} required />
                                    </Card.Text>
                                    <Button variant="outline-success" onClick={(event => saveImage(event, `${user.id}`))} style={{ fontWeight: 700 }}>Simpan</Button>
                                </Card.Body>
                            </Card>
                            <p className="has-text-centered" style={{ color: "gray", fontWeight: 700, fontSize: "17px" }}>Ubah data user</p>
                            <Form className="box">
                                <p className="has-text-centered" style={{ color: "red" }}>{msg}</p>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nama lengkap</Form.Label>
                                    <Form.Control type="text" placeholder="Nama lengkap" value={nama ? (nama) : user.nama} onChange={(e) => setNama(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Tanggal lahir</Form.Label>
                                    <Form.Control type="date" placeholder="Tanggal lahir" value={tgl_lahir ? (tgl_lahir) : user.tgl_lahir} onChange={(e) => settgl_lahir(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" placeholder="Password" value={password ? (password) : user.password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>NO. Hp</Form.Label>
                                    <Form.Control type="text" placeholder="NO. Hp" value={no_telp ? (no_telp) : user.no_telp} onChange={(e) => setNo_telp(e.target.value)} required />
                                </Form.Group>
                                <Button variant="outline-success" style={{ fontWeight: 700 }} onClick={(event => setting(event, `${user.id}`))} type='submit'>
                                    Simpan
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Footer1 />
            </Container>
        </>
    )
}

export default SettingUser
