import styled from "styled-components";
import { useEffect, useState } from "react";
import { categories } from "../data";
import CategoryItem from "./CategoriesItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;


const Categories = () => {

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

    return <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>;
};

export default Categories
