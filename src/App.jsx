
import Home2 from "./pages/Home2";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Login2 from "./pages/Login2";
import Register2 from "./pages/Register2";
import SuccessRegister from "./components/SuccessRegister";
import ProductDetail from "./pages/ProductDetail";
import Troli from "./pages/Troli";
import Search from "./pages/Search";
import Kategori from "./pages/Kategori";
import SettingUser from "./pages/SettingUser";
import AddProduct from "./pages/AddProduct";
import AdminDashboard from "./pages/AdminDashboard";
import React, { useEffect, useState } from 'react'
import { Product } from "./pages/Product";
import ProductAdmin from "./pages/admin/ProductAdmin";
import BannerAdmin from "./pages/admin/BannerAdmin";
import ProductContent from "./pages/admin/contentProduct/ProductContent";
import OrderAdmin from "./pages/admin/OrderAdmin";
import Promo from "./pages/Promo";

const App = () => {
  // var token = localStorage.getItem("tokens");
  // var role = localStorage.getItem("role");
  // const navigate = useNavigate();

  return (
    // <Container className='md justify-content-center'>
    <Container fluid style={{ marginLeft: '0px', paddingLeft: '0px' }}>
      <Router>
        <Routes>
          <Route index path="/" element={<Home2 title="Home" />} />
          <Route path="/login" element={<Login2 title="Login" />} />
          <Route path="/troli" element={<Troli title="Troli" />} />
          <Route path="/productDetail/:id" element={<ProductDetail title="Produk detail" />} />
          <Route path="/search/:param" element={<Search title="Penelusuran" />} />
          <Route path="/successRegister" element={<SuccessRegister title="Success Register" />} />
          <Route path="/register" element={<Register2 title="Register" />} />
          <Route path="/setting" element={<SettingUser title="Setting" />} />
          <Route path="/addProduct" element={<AddProduct title="Tambah produk" />} />
          <Route path="/kategori/:param" element={<Kategori title="Kategori" />} />
          <Route path="/adminDashboard" element={<AdminDashboard title="Admin" />} />
          <Route path="/product" element={<Product title="Product" />} />
          <Route path="/productAdmin" element={<ProductAdmin title="Product" />} />
          <Route path="/bannerAdmin" element={<BannerAdmin title="Banner" />} />
          <Route path="/orderAdmin" element={<OrderAdmin title="Order Admin" />} />
          <Route path="/productContent" element={<ProductContent />} />
          <Route path="/promo" element={<Promo title="Promo" />} />
        </Routes>
      </Router>
    </Container>
  )

}

export default App;