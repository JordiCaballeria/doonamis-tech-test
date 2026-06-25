import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import ShowDetail from "../pages/ShowDetail/ShowDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
