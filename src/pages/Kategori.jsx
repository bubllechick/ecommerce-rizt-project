import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CardCategories from '../components/CardCategories';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Footer1 from '../components/Footer1';
import Nav2 from '../components/Nav2';
import { useNavigate } from 'react-router-dom';
import NavTop from '../components/NavTop';


const Kategori = (props) => {
    const { param } = useParams();
    const [kategori, setKategori] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const getKategori = async (e) => {
        return await fetch(`http://localhost:3001/product/${param}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ search: `${param}` })
        })
            .then((response) => response.json())
            .then((data) => setKategori(data));
    }

    useEffect(() => {
        // const data = setInterval(() => {
            getKategori()
        //     document.title = props.title // eslint-disable-next-line
        // }, 3000);
        // return () => clearInterval(data) // eslint-disable-next-line
        // // eslint-disable-next-line
    }, [])

    const handleClick = (e, param) => {
        e.preventDefault();
        navigate(`/productDetail/${param}`)
        window.location.reload();
    };

    return (
        <>
            <NavTop />
            <Nav2 />
            <Container fluid>
                <div className='p-0 m-2' style={{ color: "black", fontWeight: 700, fontSize: 27, marginTop: "0%" }}>Kategori</div>
                <div className='p-0 m-2' style={{ color: "black", fontWeight: 500, fontSize: 21, marginTop: "2%" }}>"{param}"</div>

                <Row xs={1} md={6} className="g-4 m-4">

                    {kategori?.map && kategori.map(item => (
                        <Col>
                            <Card style={{ height: "100%", padding: 7, border: "none" }}>
                                <Card.Img variant="top" style={{ height: "100%", padding: 7 }} src={item.foto} />
                                <Card.Body>
                                    <Card.Text className='m-0' style={{ padding: 2 }}>{item.nama}</Card.Text>
                                    <Card.Text style={{ padding: 0, color: "blue", fontWeight: 700 }}>Rp {item.harga}</Card.Text>
                                    <Card.Text style={{ padding: 0, fontSize: 12 }}>Stock {item.stock}</Card.Text>
                                </Card.Body>
                                <Button onClick={(event => handleClick(event, `${item.id}`))} >Lihat</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <hr />
            <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27, marginTop: "2%" }}>Produk terbaru</div>
            <Cards />
            <hr />
            <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk rekomendasi</div>
            <Cards2 />
            <hr />
            <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk kategori</div>
            <CardCategories />
            <Footer1 />
        </>
    )
}

export default Kategori
