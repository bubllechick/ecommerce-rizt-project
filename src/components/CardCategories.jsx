import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const CardCategories = () => {

    const [kategori, setKategori] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        return await fetch("http://localhost:3001/product/categories")
            .then((response) => response.json())
            .then((data) => setKategori(data));
    }

    useEffect(() => {
        const data = setInterval(() => {
            fetchData()
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    const handleClick = (e ,param) => {
        e.preventDefault();
        navigate(`/kategori/${param}`)
        window.location.reload();
    };

    return (
        <div className='p-4'>
            <Row xs={1} md={6}>
                {kategori?.map && kategori.map(item => (
                    <Col>
                        <Card style={{ height: "100%", padding: 0, borderRadius: 10 }}>
                            <Card.Body style={
                                {
                                    background: '#1e81b0',
                                    borderColor: '',
                                    border: 5,
                                    borderRadius: 10,
                                    textAlign: 'center',
                                    fontSize: 13,
                                    fontWeight: 700,
                                    cursor: 'pointer'
                                }
                            }>
                                <Card.Text style={
                                    {
                                        color: 'white',
                                        cursor: 'pointer'
                                    }
                                } onClick={(event => handleClick(event ,`${item.kategori}`))}  >{item.kategori}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardCategories
