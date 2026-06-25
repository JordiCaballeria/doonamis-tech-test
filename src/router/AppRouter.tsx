import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import ShowDetail from '../pages/ShowDetail/ShowDetail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/show/:id" element={<ShowDetail key={location.pathname} />} />
    </Routes>
  );
}

function AppRouter() {
  return (
    <HashRouter>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default AppRouter;