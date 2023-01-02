
import Home2 from "./pages/Home2";
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login2 from "./pages/Login2";
import Register2 from "./pages/Register2";
import SuccessRegister from "./components/SuccessRegister";
import ProductDetail from "./pages/ProductDetail";
import Troli from "./pages/Troli";
import Search from "./pages/Search";
import Kategori from "./pages/Kategori";
import SettingUser from "./pages/SettingUser";
import AddProduct from "./pages/AddProduct";

const App = () => {
  
  return (
    <Container className='md justify-content-center'>
      <Router>
        <Routes path="/" element={<Home2 title="Home" />}>
          <Route index element={<Home2 title="Home" />} />
          <Route path="/login" element={<Login2 title="Login" />} />
          <Route path="/troli" element={<Troli title="Troli" />} />
          <Route path="/productDetail/:id" element={<ProductDetail title="Produk detail" />} />
          <Route path="/search/:param" element={<Search title="Penelusuran" />} />
          <Route path="/successRegister" element={<SuccessRegister title="Success Register" />} />
          <Route path="/register" element={<Register2 title="Register" />} />
          <Route path="/setting" element={<SettingUser title="Setting" />} />
          <Route path="/addProduct" element={<AddProduct title="Tambah produk" />} />
          <Route path="/kategori/:param" element={<Kategori title="Kategori" />} />
        </Routes>
      </Router>
    </Container>
  )

}

export default App;