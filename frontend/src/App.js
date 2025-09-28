import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SmartphonesPage from "./pages/SmartphonesPage";
import HowToChoosePage from "./pages/HowToChoosePage";
import StoresPage from "./pages/StoresPage";
import FactsPage from "./pages/FactsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/smartphones" element={<SmartphonesPage />} />
            <Route path="/how-to-choose" element={<HowToChoosePage />} />
            <Route path="/stores" element={<StoresPage />} />
            <Route path="/facts" element={<FactsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;