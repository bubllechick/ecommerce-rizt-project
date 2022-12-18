import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background: rgb(21,125,138);
    background: linear-gradient(
        -180deg, 
        rgba(21,125,138,1) 0%,
        rgba(18,82,82, 0.8) 100%);
`
const Wrapper = styled.div`
    padding: 0.1px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 0px;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    color: white;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.0px solid lightgray;
    display:flex;
    align-items: center;
    border-radius: 0%;
    width: 100%;
    margin: 10px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    width: 100%;
    font-size: 20px;
    border-radius: 12px;
`
const Logo = styled.h1`
    text-align: center;
    font-weight: bold;
`

const Center = styled.div`
    flex: 1;
    text-algin: center;
    color: white;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: end;
    color: white; 
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: white;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 23, marginLeft:7 }} />
                    </SearchContainer>
                </Left>
                <Center>
              
                    <Logo>TokoRitz.</Logo>
                </Center>
                <Right>
                   
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar