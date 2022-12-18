import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";


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
    width: 40%;
    min-height: 40%;
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
    font-weight: 1500;
`;

const From = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    font-size: 17px;
    min-height: 40%;
    min-width: 40%;
    border: 0.1px solid lightgray;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    color: black;
    font-weight: 1500;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    font-weight: 800;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
    font-weight: 800;
    &:hover{
        background-color: #00BFFF;
        color: black;
    }
`;


const Register = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>REGISTER</Title>
                    <From>
                        <Input placeholder="name" />
                        <Input placeholder="last name" />
                        <Input placeholder="email" />
                        <Input placeholder="username" />
                        <Input placeholder="password" />
                        <Input placeholder="confirm password" />
                        <Agreement>
                            By creating an acount, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>.
                        </Agreement>
                        <Button>CREATE</Button>
                    </From>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

export default Register
