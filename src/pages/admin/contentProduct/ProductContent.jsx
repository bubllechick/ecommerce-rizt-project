import React, { useEffect, useState } from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import { Button, Form, Modal } from 'react-bootstrap';
import { Delete, Settings } from '@material-ui/icons';
import axios from 'axios';


const ProductContent = () => {

    var token = localStorage.getItem("tokens");
    var j = JSON.parse(token);
    var x = j["token"]
    var bearer = 'Bearer ' + x;

    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [update, setUpdate] = useState([]);

    const [nama, setNama] = useState('');

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

    const handleClose = () => setShow(false);
    const handleShow = (e, param) => {
        setShow(true);
        // console.log(param)
    }

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = async (e, param) => {
        setShowUpdate(true);
        const data = await axios.get(`http://localhost:3001/product/${param}`, {
            'Content-Type': 'application/json',
            'Authorization': `${bearer}`, // notice the Bearer before your token
        });
        console.log(data);
        setUpdate(data.data);
    }

    const handleClickDelete = async (e, param) => {
        e.preventDefault();
        // try {
        //     const config = {
        //         headers: { Authorization: `Bearer ${x}` }
        //     };
        //     await axios.delete(
        //         `http://localhost:3001/cart/${param}`,
        //         config
        //     ).then(console.log).catch(console.log);
        //     window.location.reload();
        // } catch (error) {
        //     if (error.response) {
        //     }
        // }
    };




    return (
        <>
            <CDBContainer>
                <CDBTable responsive>
                    <CDBTableHeader>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Diskon</th>
                            <th>kategori</th>
                            <th>stok</th>
                            <th>foto</th>
                            <th>create_at</th>
                            <th>update_at</th>
                            <th>action</th>
                        </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                        {product?.map && product.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.harga}</td>
                                    <td>{item.diskon}</td>
                                    <td>{item.kategori}</td>
                                    <td>{item.stock}</td>
                                    <td><img src={item.foto} style={{ height: '50px', width: '50px' }} /></td>
                                    <td>{item.create_at}</td>
                                    <td>{item.update_at}</td>
                                    <td>
                                        <Button style={{ margin: '2px' }} variant="outline-success" onClick={e => handleShowUpdate(e, `${item.id}`)}><Settings /></Button>
                                        <Button style={{ margin: '2px' }} variant="outline-danger" onClick={e => handleShow(e, `${item.id}`)}><Delete /></Button>
                                    </td>
                                </tr>
                            )
                        })}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Hapus</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Anda yakin ingin menghapus belanjaan anda ?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={event => handleClickDelete(event)}>
                                    <Delete />
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showUpdate} onHide={handleCloseUpdate}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Produk</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nama produk</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nama"
                                            value={nama}
                                            onChange={(e) => setNama(e.target.value)}
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Produk Harga</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nama"
                                            value={update.harga}
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Diskom</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Diskon"
                                            value={update.diskon}
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Kategori Produk</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nama"
                                            value={update.kategori}
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Stok Produk</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Stok"
                                            value={update.stock}
                                            autoFocus
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseUpdate}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleCloseUpdate}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </CDBTableBody>
                </CDBTable>
            </CDBContainer>



        </>
    )
}

export default ProductContent
