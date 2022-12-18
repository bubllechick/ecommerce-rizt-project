import styled from "styled-components"
import React, { useEffect, useState } from "react";
import { popularProducts } from "../data"
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Products = () => {
    const [product, setProduct] = useState([]);
    const fetchData = () => {
        return fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    // console.log(product);
    return (
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
