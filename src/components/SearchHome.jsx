import { Search } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    // width: min(100% -1em, 69em);
    // margin-inline: auto;
    // background-color: red;
    // color: white;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // font-size: 14px;
    // font-weight: 500;
`
const Wrapper = styled.div`
    padding: 0.1px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 50px;
`

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`

const SearchContainer = styled.div`
    // border: 0.1px solid lightgray;
    display:flex;
    font-size: 14px;
    align-items: center;
    margin: 10px;
    padding: 5px;
`

const Input = styled.input`
    border: 0.1px solid lightgray;
    margin: 10px;
    width: 100%;
    height: 3vh;
`;

const Center = styled.div`
    flex: 1;
    text-algin: center;
`
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: end; 
`

const SearchHome = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                </Left>
                <Center>
                {/* <Language>En</Language> */}
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Center>
                <Right>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default SearchHome;
