import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DiseaseDetection from './pages/DiseaseDetection'
import SoilAnalysis from './pages/SoilAnalysis'
import CropRecommendations from './pages/CropRecommendations'
import MarketInsights from './pages/MarketInsights'
import Profile from './pages/Profile'
import ChatBot from './pages/ChatBot'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease-detection" element={<DiseaseDetection />} />
        <Route path="/soil-analysis" element={<SoilAnalysis />} />
        <Route path="/crop-recommendations" element={<CropRecommendations />} />
        <Route path="/market-insights" element={<MarketInsights />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </>
  )
}

export default App