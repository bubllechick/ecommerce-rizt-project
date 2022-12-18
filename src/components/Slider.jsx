import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useEffect, useState } from "react";
import styled from "styled-components"
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
`;

const WrapperSlider = styled.div`
    padding: 5px;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContiner = styled.div`
    height: 70%;
    padding: 0px;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 5px;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 20px;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [slideProduct, setSlideProduct] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };
    const fetchData = () => {
        return fetch("http://localhost:3001/product")
            .then((response) => response.json())
            .then((data) => setSlideProduct(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    // console.log(slideProduct)
    return (
        <Container>
            <WrapperSlider >
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <ImgContiner>
                            <Image src={item.foto1} />
                        </ImgContiner>
                        <InfoContainer>
                            <Title>{item.nama_product}</Title>
                            <Desc>{item.deskripsi}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            </WrapperSlider>
        </Container>
    )
}

export default Slider
