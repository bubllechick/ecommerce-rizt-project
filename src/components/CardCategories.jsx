
import { NavigateBeforeOutlined, NavigateNextOutlined, SkipNext } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CountertopsIcon from '@mui/icons-material/Countertops';
// import '../style/style.css';


const CardCategories = () => {

    const [kategori, setKategori] = useState([]);
    const navigate = useNavigate();

    // const fetchData = async () => {
    //     return await fetch("http://localhost:3001/product/categories")
    //         .then((response) => response.json())
    //         .then((data) => setKategori(data));
    // }

    useEffect(() => {
        // const data = setInterval(() => {
        //     fetchData()
        // }, 3000);
        // return () => clearInterval(data) // eslint-disable-next-line
        // eslint-disable-next-line
    }, [])

    const handleClick = (e, param) => {
        e.preventDefault();
        navigate(`/kategori/${param}`)
        window.location.reload();
    };


    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <NavigateNextOutlined
             className={className}
              onClick={onClick} 
              style={{ ...style, color: 'gray',marginLeft: '20px' }} />
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <NavigateBeforeOutlined 
            className={className} 
            onClick={onClick} 
            style={{ ...style, color: 'gray', marginRight: '20px' }} />
        );
    }

    const kategoriForCard = [
        {
            key: 'Kebutuhan dapur',
            icon: <KitchenIcon />
        },
        {
            key: 'Kebutuhan rumah',
            icon: <CountertopsIcon />
        },
        {
            key: 'Kebutuhan Ibu, Bayi dan Anak',
            icon: <BabyChangingStationIcon />
        },
        {
            key: 'Makanan',
            icon: <FastfoodIcon />
        },
        {
            key: 'Minuman',
            icon: <CoffeeIcon />
        }, {
            key: 'Kebutuhan Kesehatan',
            icon: <HealthAndSafetyIcon />
        }
    ]

    var settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='m-5'>

            <Slider {...settings}>

                {kategoriForCard?.map && kategoriForCard.map(item => (

                    <div className="d-inline-flex p-1 bd-highlight align-items-center">
                        <Button
                            variant="white"
                            style={
                                {
                                    textAlign: 'center',
                                    background: 'white',
                                    color: 'gray',
                                    borderRadius: '25px',
                                    border: '2px solid whitesmoke',
                                    boxShadow: '1px 2px 1px #9E9E9E'
                                }
                            }>
                            {item.icon} {item.key}
                        </Button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CardCategories
