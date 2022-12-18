import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from "styled-components"
import SlideCategories from '../components/SlideCategories'
// import SearchHome from '../components/SearchHome'

const Title = styled.h3`
    font-size: 27px;
    text-align: center;
`;

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <SlideCategories />
            <Title>
                Product
            </Title>
            <Products />
            <Title>
                Categories
            </Title>
            <Categories />
            <Footer />
        </div>
    )
}

export default Home
