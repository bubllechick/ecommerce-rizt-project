import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from "react";
import styled from "styled-components"

import { categoriesProduct } from '../data';


const Desc = styled.p`
    margin: 3px 0px;
    font-size: 20px;
    font-weight: 20px;
    letter-spacing: 3px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px;

    
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 12px;
`;
const Slide = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
const SlideCategories = () => {
    const [getCategories, setCategories] = useState(0);

    const fetchData = () => {
        return fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    console.log(getCategories)
    return (
        <Carousel initialActiveIndex={2} itemsToShow={5} itemsToScroll={2} enableAutoPlay autoPlaySpeed={1700}>
            {categoriesProduct.map((item) => (
                <Slide>
                    <InfoContainer key={item.id}>
                        <Desc>{item.nama_product}</Desc>
                    </InfoContainer>
                </Slide>
            ))}
        </Carousel>
    )
}

export default SlideCategories
