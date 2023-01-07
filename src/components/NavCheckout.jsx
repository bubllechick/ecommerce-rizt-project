import React from 'react'
import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const NavCheckout = () => {
    return (

        <Navbar style={{
            background: "green",
            borderBottom: '2px solid gray',
            borderColor: 'gray',
            borderBottomStyle: 'solid',
            borderTop: '2px solid gray',
            borderTopStyle: 'solid',
            padding: '2px'
        }}
            bg=""
            expand="lg"
            sticky="bottom"
            fixed='bottom'>
            <Container fluid>

                <Navbar.Brand id="navbarScroll" style={{ color: "green", marginLeft: "0px", marginRight: "5px" }} href="/">
                    {/* <StoreMallDirectoryOutlined /> toko */}
                </Navbar.Brand>

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
                        {/* <InputGroup size="sm" >
                            <Form.Control
                                className="mb-0 col-xs-2"
                                placeholder="Cari produk"
                                aria-label="Cari produk"
                                aria-describedby="basic-addon2"
                                value={cari}
                                onChange={(e) => setCari(e.target.value)}
                            />
                            <Button variant="outline-success" id="button-addon2" onClick={event => handleClick(event, `${cari}`)}>
                                <SearchOutlined />
                            </Button>
                        </InputGroup> */}
                    </Nav>

                    <Nav.Link style={{ color: "gray", marginLeft: "12px", marginRight: "12px", fontWeight: 700 }} className='p-1' href="/promo">Promo</Nav.Link>

                    <Nav.Link style={{ color: "gray", marginLeft: "12px", marginRight: "25px", fontWeight: 700 }} className='p-1' href="/troli">
                        <Badge color='primary'>
                            {/* <ShoppingBasketOutlined /> */}
                        </Badge>
                    </Nav.Link>
                    {/* {Object.keys(token || 0).length > 0 ?
                        <Nav.Link style={{ color: "gray", marginLeft: "10px", marginRight: "0px", fontWeight: 700 }} className='p-1' href="">
                            <Image src={user.foto} roundedCircle style={{ alignSelf: 'center', height: '30px', width: '30px' }} />
                        </Nav.Link> : ''} */}


                    <NavDropdown style={{ fontWeight: 700, color: "gray", marginLeft: "10px", marginRight: "25px" }} className='p-1' id="navbarScrollingDropdown">
                        <NavDropdown.Item>
                            Checkout
                        </NavDropdown.Item>
                        {/* <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? true : false
                        } href="/login" to="/login">
                            Masuk
                        </NavDropdown.Item>
                        <NavDropdown.Item hidden={
                            Object.keys(token || 0).length > 0 ? false : true
                        } onClick={event => settingUser(event)} href="/register" to="/register">
                            <SettingsIcon /> Pengaturan
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
                        </NavDropdown.Item> */}
                    </NavDropdown>

                </Navbar.Collapse>

            </Container>
        </Navbar >

    )
}

export default NavCheckout