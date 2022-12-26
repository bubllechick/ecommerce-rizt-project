import React from 'react';
import { useEffect, useState } from "react";
import { Container, Carousel } from 'react-bootstrap';

// import Carousel from 'react-elastic-carousel';

const Slider1 = () => {
  const [getCategories, setCategories] = useState(0);

  const fetchData = () => {
    return fetch("http://localhost:3001/product")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Container className='md'>
      <Carousel>
        {getCategories?.map && getCategories.map(item => (
          <Carousel.Item>
            <img
              className="rounded mx-auto d-block"
              style={{
                // height: "auto",
                // width: "100%",
                // objectFit: "cover",
                maxHeight: "30vh"
              }}
              src={item.foto}
            // alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>{item.harga}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Slider1
