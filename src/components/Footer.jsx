import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px; 
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`;

const Right = styled.div`
    flex: 1;
    align-items: center;
    justify-content: end; 
`;

const SosialContainer = styled.div`
    display: flex;
`;

const SosialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 5px;
`;

const Logo = styled.div`
    font-weight: bold;
`;

const Desc = styled.div`
    margin: 20px 0px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 40%;
    height: 20%;
    padding-top: 10px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Logo</Logo>
                <Desc>
                    Ini tentang Deskripsi Toko
                </Desc>
                <SosialContainer>
                    <SosialIcon color="3B5999">
                        <Facebook />
                    </SosialIcon>
                    <SosialIcon color="E4405F">
                        <Instagram />
                    </SosialIcon>
                    <SosialIcon color="E60023">
                        <Pinterest />
                    </SosialIcon>
                    <SosialIcon color="55ACEE">
                        <Twitter />
                    </SosialIcon>
                </SosialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}} /> Alamat</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}} /> Alamat</ContactItem>
                <ContactItem><Email style={{marginRight: "10px"}} /> Alamat</ContactItem>
                <Payment src="https://assets.stickpng.com/images/6220ac0f912013c51947f9c4.png" />
            </Right>
        </Container>
    )
}

export default Footer
