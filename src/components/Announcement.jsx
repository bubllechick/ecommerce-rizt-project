import { Email, Map, Phone } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    width: min(100% -1em, 69em);
    margin-inline: auto;
    background: rgb(21,125,138);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      <Phone style={{marginRight: 15}} />+62 878-1243-2900  
      <Email style={{marginRight: 15, marginLeft: 50}}/> ritz@gmail.com
      <Map style={{marginRight: 15, marginLeft: 50}}/> Tangerang 
    </Container>
  )
}

export default Announcement
