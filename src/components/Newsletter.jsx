import { Send } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    height : 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 50px;
`;
const Button = styled.div`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 300;
    border-radius: 50px;
`;
const Input = styled.input`
    border: none;
    font-size: 20px;
    flex: 8;    
    padding-left: 20px;
    border-radius: 50px;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favorite products.</Description>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
