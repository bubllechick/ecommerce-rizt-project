import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import CardCategories from '../components/CardCategories';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Footer1 from '../components/Footer1';
import Nav2 from '../components/Nav2';
import NavTop from '../components/NavTop';
import Slider1 from '../components/Slider1';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../style/useWindowSize';


const Home2 = () => {

    var role = localStorage.getItem("role");
    const navigate = useNavigate();

    var parseRole = JSON.parse(role);

    useEffect(() => {
        if (parseRole === 'admin') {
            navigate('/adminDashboard')
            window.location.reload();
        }

        // eslint-disable-next-line
    }, [])

    const size = useWindowSize();    

    return (
        <>
            <Container className='md justify-content-center'>
                <NavTop />
                <Nav2 />
                {size.width > 700 && <Slider1/>}
                {size.width > 700 && <CardCategories/>}
                {/* <Slider1 />
                <CardCategories /> */}
                <Cards />
                <hr />
                <Cards2 />
                <Footer1 />
            </Container>
        </>
    )
}

export default Home2
