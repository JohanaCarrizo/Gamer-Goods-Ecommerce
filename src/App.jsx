import Categories from "./components/Category/Categories"
import Category from "./components/Category/Category"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import CardsProducts from "./components/Product/CardsProducts"
import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categories/>
        <CardsProducts/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
