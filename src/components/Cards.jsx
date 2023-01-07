import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';

const Cards = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    var token = localStorage.getItem("tokens");

    const fetchDataCard = async () => {
        return await fetch("http://localhost:3001/product/get-produk-terbaru")
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }
    useEffect(() => {
        const data = setInterval(() => {
            fetchDataCard();
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
            <Row>
                <Col md={4}>
                    <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27, marginTop: "2%" }}>Produk terbaru</div>
                </Col>
                <Col md={{ span: 4, offset: 4 }} style={{ border: '2px', justifyContent: 'end', alignItems: 'end', display: 'flex', cursor: 'pointer' }}>
                    <Button variant="link" href="/product">
                        Selengkapnya
                    </Button>
                </Col>
            </Row>
            <Row xs={1} md={6} className="g-4 m-4">
                {product?.map && product.map(item => (
                    <Col>
                        <Card style={{ height: "100%", padding: 7, border: "none" }}>
                            <Card.Img variant="top" style={{ height: '12rem', padding: 1, marginBottom: '20px' }} src={item.foto} />
                            <Card.Body style={{ paddingBottom: '0px' }}>
                                {
                                    Object.keys(item.diskon).length > 0 ?
                                        <>
                                            <Col>
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
                            </Card.Body>
                            <Button variant="outline-success" onClick={event => handleClick(event, `${item.id}`)} >Beli</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cards
