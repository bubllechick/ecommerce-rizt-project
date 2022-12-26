import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const Cards2 = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    var token = localStorage.getItem("tokens");


    const fetchDataCard = () => {
        return fetch("http://localhost:3001/product")
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
        <Row xs={1} md={6} className="g-4 m-4">
            {product?.map && product.map(item => (
                <Col>
                    <Card style={{ height: "100%", padding: 7, border: "none" }}>
                        <Card.Img variant="top" style={{ height: "100%", padding: 7 }} src={item.foto} />
                        <Card.Body>
                            <Card.Text className='m-0' style={{ padding: 2 }}>{item.nama}</Card.Text>
                            <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}>Rp {item.harga}</Card.Text>
                            <Card.Text style={{ padding: 0, fontSize: 12 }}>Stock {item.stock}</Card.Text>
                        </Card.Body>
                        <Button onClick={event => handleClick(event, `${item.id}`)}>Beli</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Cards2
