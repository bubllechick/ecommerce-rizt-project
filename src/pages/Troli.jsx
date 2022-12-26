import { ListItem, ListItemText } from '@material-ui/core'
import { Add, Delete, Remove, ShoppingCartOutlined } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Modal, Row } from 'react-bootstrap'
import CardCategories from '../components/CardCategories'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Footer1 from '../components/Footer1'
import Nav2 from '../components/Nav2'
import NavTop from '../components/NavTop'

const Troli = (props) => {

    const [troli, setTroli] = useState([]);
    const [show, setShow] = useState(false);

    const [total, setTotal] = useState('');
    const [produk, setProduk] = useState('');
    const [harga, setHarga] = useState('');
    const [jumlah, setJumlah] = useState('');

    // const [cartCount, setCartCount] = useState([]);
    var token = localStorage.getItem("tokens");
    var j = JSON.parse(token);
    var x = j["token"]
    var bearer = 'Bearer ' + x;

    const getDataTroli = async () => {
        return await fetch("http://localhost:3001/auth/for-user-info", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`, // notice the Bearer before your token
            }
        })
            .then((response) => response.json())
            .then((data) => setTroli(data));
    }

    const handleClickDelete = async (e, param) => {
        e.preventDefault();
        try {
            const config = {
                headers: { Authorization: `Bearer ${x}` }
            };
            await axios.delete(
                `http://localhost:3001/cart/${param}`,
                config
            ).then(console.log).catch(console.log);
            window.location.reload();
        } catch (error) {
            if (error.response) {
            }
        }
    };

    var cartLength = troli.cart;

    const handleClick = (e) => {
        var a = []
        var y = 0
        for (var i = 0; i < cartLength.length; i++) {
            y += (a[i] = cartLength[i].jumlah * cartLength[i].product.harga)
            setTotal(y)
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = (e, param) => {
        setShow(true);
    }

    useEffect(() => {
        const dataTroli = setInterval(() => {
            getDataTroli()
        }, 3000);

        document.title = props.title // eslint-disable-next-line
        return () => clearInterval(dataTroli) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    const bucket = troli.cart;

    const handleClickOrder = () => {
        const DataObj = []
        for (var i = 0; i < cartLength.length; i++) {
            var object = [
                {
                    nama: cartLength[i].product.nama,
                    harga: cartLength[i].product.harga,
                    jumlah: cartLength[i].jumlah,
                    totalHargaBarang: cartLength[i].jumlah * cartLength[i].product.harga
                }
            ];
            DataObj.push(object)
        }
        console.log(DataObj)
    }

    const incrementCounter = async (productId) => {
        const data = await axios.get(`http://localhost:3001/cart/${productId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`, // notice the Bearer before your token
            }
        })
        var jumlah = JSON.stringify(data.data.jumlah);
        console.log(parseInt(jumlah) + 1)
        await axios({
            method: 'PATCH',
            url: `http://localhost:3001/cart/${productId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`
            },
            data: {
                id: productId,
                jumlah: parseInt(jumlah) + 1,
                product: data.data.product.id
            }
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
        window.location.reload();
    };

    const decrementCounter = async (productId) => {
        const data = await axios.get(`http://localhost:3001/cart/${productId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${bearer}`, // notice the Bearer before your token
            }
        })
        var jumlah = JSON.stringify(data.data.jumlah);
        if (jumlah === '0') {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${x}` }
                };
                await axios.delete(
                    `http://localhost:3001/cart/${productId}`,
                    config
                ).then(console.log).catch(console.log);
                window.location.reload();
            } catch (error) {
                if (error.response) {
                }
            }
        } else {
            console.log('kurang', jumlah)
            return await axios({
                method: 'PATCH',
                url: `http://localhost:3001/cart/${productId}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${bearer}`
                },
                data: {
                    id: productId,
                    jumlah: parseInt(jumlah) - 1,
                    product: data.data.product.id
                }
            }).then((res) => {
                console.log(res.data);
                window.location.reload();
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    return (
        <>
            <NavTop />
            <Nav2 />
            <Container fluid className='pt-2' style={{ justifyContent: 'center' }}>

                <Row>
                    <Col sm={6} className='pt-4' style={{ border: "none" }}>
                        <Card style={{ border: "none" }}>
                            <Card.Header style={{ fontWeight: 700, fontSize: "21px" }}>Troli anda</Card.Header>
                            <>
                                {bucket?.map && bucket.map(item => (
                                    <Card.Body>

                                        <Row key={item.id}>

                                            <Col sm={3}>
                                                <Card.Img className='pb-3 pt-3' rounded style={{ width: '10rem', background: 'cover', paddingRight: 7 }} src={item.product.foto} />
                                            </Col>
                                            <Col sm={5}>
                                                <Card.Title style={{ fontWeight: 700, fontSize: "16px", paddingBottom: "0px" }}>{item.product.nama}</Card.Title>
                                                <Card.Text style={{ fontWeight: 700, fontSize: "16px", paddingBottom: "0px", }}>
                                                    Rp {item.product.harga}
                                                </Card.Text>
                                                <Card.Text style={{ fontWeight: 700, fontSize: "12px", paddingBottom: "0px", }}>
                                                    Stok {item.product.stock}
                                                </Card.Text>

                                                <Row xs={6} md={4} lg={6} className='pb-2'>
                                                    <Col className='m-1 p-1' onClick={() => incrementCounter(item.id)}><Add style={{ cursor: 'pointer' }} /></Col>
                                                    <Col className='m-1 p-1'>
                                                        <Card.Text style={{ fontWeight: 700, fontSize: "17px" }}>
                                                            {item.jumlah}
                                                        </Card.Text>
                                                    </Col>
                                                    <Col className='m-1 p-1' onClick={() => decrementCounter(item.id)}><Remove style={{ cursor: 'pointer' }} /></Col>
                                                    <Col className='m-1 p-1' >
                                                        <Button className='m-1 p-1' onClick={handleShow} style={{ color: "white", background: 'red', border: "none" }}>
                                                            <Delete />
                                                        </Button>
                                                    </Col>
                                                </Row>

                                            </Col>
                                            <hr />

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Hapus</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>Anda yakin ingin menghapus belanjaan anda ?</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant="danger" onClick={event => handleClickDelete(event, `${item.id}`)}>
                                                        <Delete />
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>

                                        </Row>

                                    </Card.Body>
                                ))}
                            </>
                            {/* <Button
                                hidden={Object.keys(troli.cart || 0).length > 0 ? false : true}
                                variant="primary" onClick={(event => handleClickOrder(event))}>Checkout</Button> */}
                            <Container hidden={Object.keys(troli.cart || 0).length > 0 ? true : false}>
                                silahkan order
                            </Container>
                        </Card>
                    </Col>
                    <Col sm={6} className='pt-4'>
                        <Card style={{ border: "none" }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 700, fontSize: 24 }}>Order sekarang</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Jumlah produk</ListGroup.Item>

                                {cartLength?.map && cartLength.map(cartGet => (
                                    <ListGroup.Item>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Header style={{ fontWeight: 700, color: 'black' }}>{cartGet.product.nama} : {cartGet.jumlah}</Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{cartGet.product.harga} x {cartGet.jumlah} = {cartGet.jumlah * cartGet.product.harga}</ListGroup.Item>
                                                {/* <Form.Control value={{cartGet.jumlah * cartGet.product.harga}} disabled /> */}
                                            </ListGroup>
                                        </Card>
                                    </ListGroup.Item>
                                ))}
                                <Card.Body>
                                    <Button variant="primary" className='m-1 p-2' onClick={(e => handleClick(e))} style={{ color: "black", background: 'white' }}>
                                        <ListItemText style={{ color: "orange", background: 'white', border: "none" }} />
                                        Cek Total Pembayaran
                                    </Button>
                                </Card.Body>
                                <ListGroup.Item style={{ fontWeight: 700, fontSize: 17 }}>
                                    Total pembayaran
                                    <Form.Control value={`Rp., ${total}`} style={{ fontWeight: 700, color: 'black' }} disabled />
                                    <Button variant="primary" className='p-2' onClick={(e => handleClickOrder(e))} style={{ fontWeight: 700, color: "white", marginTop: "12px", background: 'green', width: '100%' }}>
                                        Order
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>

                        </Card>
                    </Col>
                </Row>

            </Container>

            <hr />
            <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk terbaru</div>
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

export default Troli;

