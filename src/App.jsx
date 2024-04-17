import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentPage";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
