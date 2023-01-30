import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InfluencerCardList from './features/influencers/InfluencerCardList';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfluencerDetailPage from './pages/InfluencerDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
