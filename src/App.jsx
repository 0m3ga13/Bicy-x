import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import {  Home, Navbar, Products, ProductDetail,About,Contact,Feedbacks,ScrollToTop } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div> 
      <div className="relative z-0 bg-primary">

      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
      </Routes></div>  </div>
    </BrowserRouter>
  )
}

export default App
