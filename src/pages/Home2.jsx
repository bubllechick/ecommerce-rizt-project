import React from 'react'
import CardCategories from '../components/CardCategories';
import Cards from '../components/Cards';
import Cards2 from '../components/Cards2';
import Footer1 from '../components/Footer1';
import Nav2 from '../components/Nav2';
import NavTop from '../components/NavTop';
import Slider1 from '../components/Slider1';

const Home2 = () => {
    return (
        <>
            <NavTop />
            <Nav2 />
            {/* <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk kategori</div> */}
            <Slider1 />
            <CardCategories />
            {/* <hr /> */}
            <Cards />
            <hr />
            {/* <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk rekomendasi</div> */}
           <Cards2 />
            {/* <hr />
            <div className='p-2' style={{ color: "black", fontWeight: 700, fontSize: 27 }}>Produk kategori</div>
            <CardCategories /> */}
            <Footer1 />
        </>
    )
}

export default Home2
