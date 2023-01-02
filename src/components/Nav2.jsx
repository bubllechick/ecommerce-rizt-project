import { Badge } from '@material-ui/core'
import { AccountCircleOutlined, SearchOutlined, ShoppingBasketOutlined, CloseOutlined, StoreMallDirectoryOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Image, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Nav2 = () => {

    const [user, setUser] = useState([]);
    const [cari, setCari] = useState([]);
    const navigate = useNavigate();
    var token = localStorage.getItem("tokens");
    const fetchDataNav = async () => {
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

    useEffect(() => {
        const data = setInterval(() => {
            fetchDataNav();
        }, 3000);
        return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
        // setTimeout(() => this.fetchDataNav(), 5000);
    }, [])

    // console.log(user)
    const logOut = async (e) => {
        e.preventDefault();
        try {
            localStorage.clear();

            navigate('/login')
            window.location.reload();
        } catch (error) {

        };
    }

    const settingUser = async (e) => {
        e.preventDefault();
        navigate('/setting')
    }
    const handleClick = async (e, cari) => {
        e.preventDefault();
        window.location.reload();
        navigate(`/search/${cari}`)
        window.location.reload();
    };

    return (
        <Navbar style={{
            background: "white",
            borderBottom: '2px solid gray',
            borderColor: 'gray',
            borderBottomStyle: 'solid',
            borderTop: '2px solid gray',
            borderTopStyle: 'solid',
            padding: '2px'
        }} bg="" expand="lg" sticky="top">
            <Container fluid>

                <Navbar.Brand id="navbarScroll" style={{ color: "purple", marginLeft: "0px", marginRight: "5px" }} href="/"><StoreMallDirectoryOutlined /> toko</Navbar.Brand>

                <Nav
                    className="me-auto my-3 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-1 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <InputGroup size="sm" >
                            <Form.Control
                                className="mb-0 col-xs-2"
                                placeholder="Cari produk"
                                aria-label="Cari produk"
                                aria-describedby="basic-addon2"
                                value={cari}
                                onChange={(e) => setCari(e.target.value)}
                            />
                            <Button variant="outline-primary" id="button-addon2" onClick={event => handleClick(event, `${cari}`)}>
                                <SearchOutlined />
                            </Button>
                        </InputGroup>
                    </Nav>

                    <Nav.Link style={{ color: "gray", marginLeft: "12px", marginRight: "12px", fontWeight: 700 }} className='p-1' href="/promo">Promo</Nav.Link>

                    <Nav.Link style={{ color: "gray", marginLeft: "12px", marginRight: "25px", fontWeight: 700 }} className='p-1' href="/troli">
                        <Badge badgeContent={Object.keys(user.cart || {}).length} color='primary'>
                            <ShoppingBasketOutlined />
                        </Badge>
                    </Nav.Link>
                    {Object.keys(token || 0).length > 0 ?
                        <Nav.Link style={{ color: "gray", marginLeft: "12px", marginRight: "0px", fontWeight: 700 }} className='p-1' href="">
                            <Image src={user.foto} roundedCircle style={{ alignSelf: 'center', height: '30px', width: '30px' }} />
                        </Nav.Link> :
                        <Nav.Link style={{ color: "gray", marginLeft: "0px", marginRight: "0px", fontWeight: 700 }} className='p-0' href="">
                        </Nav.Link>}


                    <NavDropdown style={{ fontWeight: 700, color: "gray", marginLeft: "10px", marginRight: "25px" }} className='p-1' id="navbarScrollingDropdown">
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? true : false
                        } href="/login" to="/login">
                            Masuk
                        </NavDropdown.Item>
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } onClick={event => settingUser(event)} href="/register" to="/register">
                            <SettingsIcon /> Pengaturan
                        </NavDropdown.Item>
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } href="/addProduct" to="/addProduct">
                            <PostAddIcon /> Tambah product
                        </NavDropdown.Item>
                        <NavDropdown.Divider hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } />
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? true : false
                        } href="/register" to="/register">Daftar</NavDropdown.Item>
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } onClick={event => logOut(event)} href="/login" to="/login">
                            <LogoutIcon /> logout
                        </NavDropdown.Item>
                    </NavDropdown>

                </Navbar.Collapse>

            </Container>
        </Navbar >
    )
}

export default Nav2
