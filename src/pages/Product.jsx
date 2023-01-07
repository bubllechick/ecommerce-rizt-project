import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'
import { useNavigate } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';

export const Product = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState([]);
    var token = localStorage.getItem("tokens");

    const fetchDataProduct = async () => {
        return await fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }

    useEffect(() => {
        const data = setInterval(() => {
            fetchDataProduct();
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    const handleClick = (event, param) => {
        try {
            if (Object.keys(token).length === 0) console.log('ada')
            navigate(`/productDetail/${param}`)
        } catch (error) {
            console.log('ga ada')
            navigate(`/login`)
        }
    };

    return (
        <>
            <Container className='md justify-content-center'>
                <NavTop />
                <Nav2 />
                <Row>
                    <Col md={4}>
                        <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk terbaru</div>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} style={{ border: '2px', justifyContent: 'end', alignItems: 'end', display: 'flex', cursor: 'pointer' }}>
                        {/* <Button variant="link" href="/product">
                        Selengkapnya
                    </Button> */}
                    </Col>
                </Row>
                <Row xs={1} md={6} className="g-4 m-4">
                    {product?.map && product.map(item => (
                        <Col>
                            <Card style={{ height: "100%", padding: 7, border: "none" }}>
                                {/* <Card.Img variant="top" style={{ height: "100%", padding: 7 }} src={item.foto} /> */}
                                <Card.Body style={{ paddingBottom: '0px' }}>
                                    {
                                        Object.keys(item.diskon).length > 0 ?
                                            <>
                                                <Col>
                                                    <Row style={{ height: '12rem' }}>
                                                        <Card.Img variant="top" style={{ height: "auto", padding: 1, marginBottom: '20px' }} src={item.foto} />
                                                    </Row>
                                                    <Row>
                                                        {item.nama}
                                                    </Row>
                                                    <Row style={{ padding: 0, fontWeight: 800, textDecoration: 'line-through' }}>
                                                        Rp {item.harga}
                                                    </Row>
                                                    <Row>
                                                        Rp {item.harga - item.diskon}
                                                    </Row><br />
                                                    <Row>
                                                        <p style={{ marginLeft: 0, paddingLeft: 0, textAlign: 'left', justifyContent: 'left', alignItems: 'left' }}>
                                                            <InventoryIcon style={{ color: 'orange' }} /> Stok {item.stock}
                                                        </p>
                                                    </Row>
                                                </Col>
                                            </>
                                            :
                                            <>
                                                <Col>
                                                    <Row style={{ height: '12rem' }}>
                                                        <Card.Img variant="top" style={{ height: "auto", padding: 1, marginBottom: '20px' }} src={item.foto} />
                                                    </Row>
                                                    <Row>
                                                        {item.nama}
                                                    </Row>
                                                    <Row style={{ padding: 0, fontWeight: 800 }}>
                                                        Rp {item.harga}
                                                    </Row>
                                                    <Row>
                                                    </Row><br /><br />
                                                    <Row>
                                                        <p style={{ marginLeft: 0, paddingLeft: 0, textAlign: 'left', justifyContent: 'left', alignItems: 'left' }}>
                                                            <InventoryIcon style={{ color: 'orange' }} /> Stok {item.stock}
                                                        </p>
                                                    </Row>
                                                </Col>
                                            </>
                                    }
                                    {/* <Card.Text className='m-0' style={{ padding: 2 }}>{item.nama}</Card.Text>
                                    <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}>Rp {item.harga}</Card.Text>
                                    <Card.Text style={{ padding: 0, fontSize: 12 }}>Stock {item.stock}</Card.Text> */}
                                </Card.Body>
                                <Button variant="outline-success" onClick={event => handleClick(event, `${item.id}`)}>Beli</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Footer1 />
            </Container>
        </>
    )
}
