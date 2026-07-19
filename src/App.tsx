import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/template/navbar'
import Hero from './components/view/hero'
import About from './components/view/about'
import VisiMisi from './components/view/visiMisi'
import Poliklinik from './components/view/poliklinik'
import Motto from './components/view/motto'
import Footer from './components/template/footer'
import DetailPoli from './components/pages/DetailPoli'
import ListDokter from './components/pages/listDokter'
import Videos from './components/view/videos'
import Location from './components/view/location'
// import Cta from './components/view/cta'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <VisiMisi />
      <Poliklinik />
      <Motto />
      <Videos />
      <Location />
      {/* <Cta /> */}
    </>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poli/:slug" element={<DetailPoli />} />
          <Route path="/listDokter" element={<ListDokter />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App