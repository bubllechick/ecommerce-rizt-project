import React from 'react';
import { useEffect, useState } from "react";
import { Container, Stack, Card, Button, Image } from 'react-bootstrap';
import Carousel from 'react-grid-carousel';


const Slider1 = () => {
  const [getCategories, setCategories] = useState(0);

  const fetchData = () => {
    return fetch("http://localhost:3001/banner")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const dotsStyle = ({ isActive }) => (
    <span style={{
      alignSelf: 'start',
      height: isActive ? '8px' : '5px',
      width: isActive ? '18px' : '5px',
      borderRadius: '12px',
      background: isActive ? 'green' : 'gray',
    }}>
    </span>
  )

  return (
    <Container className='md pt-3'>

      <Carousel cols={2} showDots dot={dotsStyle} loop>
        {getCategories?.map && getCategories.map(item => (
          <Carousel.Item style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
            {/* <Card className="col-md-2" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', width: "35rem", height: "15rem", border: 'none' }}> */}
              <Image thumbnail src={item.foto} style={{ marginLeft: '1px',padding: '0px', width: "45rem", borderRadius: '15px', height: "15rem", border: 'none', cursor: 'pointer'  }} />
            {/* </Card> */}
          </Carousel.Item>
        ))}
      </Carousel>

    </Container>
  )
}

export default Slider1
