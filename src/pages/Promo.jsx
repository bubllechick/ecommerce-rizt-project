import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CardCategories from '../components/CardCategories'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'
import Slider1 from '../components/Slider1'
import { useNavigate } from 'react-router-dom';


const Promo = () => {


    const navigate = useNavigate();
    const [banner, setBanner] = useState([]);
    const fetchDataBanner = async () => {
        return await fetch("http://localhost:3001/banner")
            .then((response) => response.json())
            .then((data) => setBanner(data));
    }
    useEffect(() => {
        const data = setInterval(() => {
            fetchDataBanner();
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    console.log(banner)

    const handleClick = (event, param) => {
        // try {
        //     if (Object.keys(token).length === 0) console.log('ada')
        //     navigate(`/productDetail/${param}`)
        // } catch (error) {
        //     console.log('ga ada')
        //     navigate(`/login`)
        // }
    };



    return (
        <>
            <Container className='md justify-content-center'>
                <NavTop />
                <Nav2 />
                {/* <Slider1 /> */}

                <Row xs={1} md={4} className="g-4 m-4">
                    {banner?.map && banner.map(item => (
                        <Col>
                            <Card style={{ height: "100%", padding: 5, border: "none" }}>
                                <Card.Img variant="top" style={{ height: "100%", padding: 2, borderRadius: '15px' }} src={item.foto} />
                                <Card.Body>
                                    <Card.Text className='m-0' style={{ padding: 0 }}>{item.deskripsi}</Card.Text>
                                    <Card.Text style={{ padding: 0, fontWeight: 700 }}>Potongan {item.diskon}</Card.Text>
                                </Card.Body>
                                <Button variant="outline-success" onClick={event => handleClick(event, `${item.id}`)} >Pakai</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
                
                {/* <CardCategories />
                <Cards />
                <hr />
                <Cards2 /> */}
                <Footer1 />
            </Container>
        </>
    )
}

export default Promo