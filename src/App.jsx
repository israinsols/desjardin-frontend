import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LanguageProvider } from "./context/LanguageContext";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<NotFoundPage />} />
        <Route path="/support" element={<MainLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LanguageProvider>
  );
}

