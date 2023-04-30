import { BrowserRouter } from "react-router-dom"
import { About, Contact, Feedbacks, ProductsLink, StarsCanvas,Hero } from './';


const App = () => {
  return (
    <div>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero/>
      </div>

    <div className="relative z-0 bg-primary">
      <About/>
      <ProductsLink/>
      <Feedbacks/>
      
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </div>
  )
}

export default App
