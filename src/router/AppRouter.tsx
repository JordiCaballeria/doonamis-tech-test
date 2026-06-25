import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import ShowDetail from "../pages/ShowDetail/ShowDetail";

function AppRouter() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default AppRouter;
