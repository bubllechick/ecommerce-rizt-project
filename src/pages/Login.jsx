import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Container = styled.div`
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
        ), url('../assets/img/banner_register.jpg') 
        center;  
    background-size: cover;
    display: flex;
    align-items: left;
    margin-bottom: 3%;
    justify-content: left;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background: rgb(102,205,250);
    background: linear-gradient(
        90deg, 
        rgba(102,205,250, 0.15),
        rgba(0,115,166,0.15),
        rgba(0,115,166,0.15),
        rgba(0,115,166,0.15),
        rgba(0,115,166,0.35));
    border-radius: 12px;
    margin-left: 10%;
    margin-top: 10%; 
    margin-bottom: 20%;
`;
const Title = styled.h1`
    font-size: 24px;    
    font-weight: 500;
`;
const From = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    font-size: 17px;
    min-height: 40%;
    min-width: 40%;
    border: 0.1px solid lightgray;
    margin: 20px 5px 0.1px;
    padding: 10px;
    color: black;
    font-weight: 1500;
`;

const Button = styled.button`
    min-width: 40%;
    border: none;
    margin: 20px 5px 0.1px;
    padding: 10px;
    cursor: pointer;
    background-color: teal;
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    &:hover{
        background-color: white;
        color: black;
    }
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
`;




const Login = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>LOGIN</Title>
                    <From>
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                        <Button>LOGIN</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </From>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default Login