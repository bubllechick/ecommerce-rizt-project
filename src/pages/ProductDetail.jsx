import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer1 from '../components/Footer1';
import Nav2 from '../components/Nav2';
import NavTop from '../components/NavTop';
import { useNavigate } from 'react-router-dom'


const ProductDetail = (props) => {
    const { id } = useParams();
    const [productId, setProductId] = useState([]);
    const navigate = useNavigate();

    const getProdutId = async (e) => {
        return await fetch(`http://localhost:3001/product/${id}`)
            .then((response) => response.json())
            .then((data) => setProductId(data));
    }
    useEffect(() => {
        const data = setInterval(() => {
            getProdutId()
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    const addCart = async (e, param) => {
        e.preventDefault();
        let token = localStorage.getItem("tokens");
        const j = JSON.parse(token);
        const x = j["token"]
        try {
            const config = {
                headers: { Authorization: `Bearer ${x}` }
            };
            const bodyParameters = {
                product: `${param}`,
                jumlah: 1
            };
            await axios.post(
                'http://localhost:3001/cart',
                bodyParameters,
                config
            ).then(console.log).catch(console.log);
            navigate('/troli')
        } catch (error) {
            if (error.response) {
            }
        }
    };

    return (
        <>
            <Container className='md justify-content-center'>
                <NavTop />
                <Nav2 />
                <Container fluid className="p-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{productId.kategori}</Card.Header>
                        <Image rounded variant="top" style={{ background: 'cover', padding: 7 }} src={productId.foto} />
                        <Card.Body>
                            <Card.Title>{productId.nama}</Card.Title>

                            {

                                productId.diskon !== '' ?
                                    <>
                                        <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700, textDecoration: 'line-through' }}>Rp {productId.harga}</Card.Text>
                                        <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}>Rp {productId.harga - productId.diskon}</Card.Text>
                                    </>
                                    :
                                    <>
                                        <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}>Rp {productId.harga}</Card.Text>
                                        <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}></Card.Text>
                                    </>
                            }

                            <Card.Text style={{ padding: 0, color: "red", fontWeight: 700 }}>
                                Stok {productId.stock}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="outline-success" style={{ fontWeight: 700 }} onClick={(event => addCart(event, `${productId.id}`))}>Tambah ke troli</Button>
                        </Card.Footer>
                    </Card>
                </Container>
                <Footer1 />
            </Container>
        </>
    )
}

export default ProductDetail
