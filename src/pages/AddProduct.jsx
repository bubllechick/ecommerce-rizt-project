import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = (props) => {

    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [harga, setHarga] = useState('');
    const [stock, setStock] = useState('');
    const [foto, setfoto] = useState('');
    
    const [preview, setPreview] = useState('');

    const [msg, setMsg] = useState('');

    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const fetchData = async () => {
        let token = localStorage.getItem("tokens");
        const j = JSON.parse(token);
        const x = j["token"]
        var bearer = 'Bearer ' + x;
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
        fetchData(); // eslint-disable-next-line
        document.title = props.title // eslint-disable-next-line
    }, [])

    const AddProduct = async (e) => {
        e.preventDefault();
        // console.log(nama, password, no_hp, foto);
        try {
            const data = await axios.post('http://localhost:3001/product', {
                nama: nama,
                kategori: kategori,
                harga: harga,
                stock: stock,
                foto: foto
            });
            if (data) {
                // setNama('')
                // setPassword('')
                // setNo_hp('')
                // setfoto('')
                // navigate("/successRegister");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    }

    return (
        <>
            <Nav2 />

            <Container className='g-1 m-5'>
            
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                    <p className="has-text-centered" style={{ color: "Black", fontSize: 20, fontWeight: 700 }}>Tambah Produk</p>
                        <Form className="box">
                            <p className="has-text-centered" style={{ color: "red" }}>{msg}</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nama Produk</Form.Label>
                                <Form.Control type="text" placeholder="Nama Produk" value={nama} onChange={(e) => setNama(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Kategori</Form.Label>
                                <Form.Control type="text" placeholder="Kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Harga</Form.Label>
                                <Form.Control type="number" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Stok</Form.Label>
                                <Form.Control type="number" placeholder="Stok" value={stock} onChange={(e) => setStock(e.target.value)} required />
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
                            </Form.Group>

                            <Button variant="info" style={{ color: 'white', fontWeight: 700 }} type='submit'>
                                Daftar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Footer1 />
        </>
    )
}

export default AddProduct
