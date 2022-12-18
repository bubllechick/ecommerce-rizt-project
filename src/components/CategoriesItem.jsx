import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: black;
    // background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 12px;
    background-color: white;
    color: gray;
    font-weight: 600;
`;

const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.foto1} />
            <Info>
                <Title>{item.nama_product}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoriesItem
