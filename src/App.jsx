import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import SearchBar from './components/SearchBar/SearchBar';
import AssessmentList from './components/AssessmentList/AssessmentList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        
        <Header />
        <HeroBanner />
        <SearchBar />
        <AssessmentList />
        <Footer />
      </div>
    </Router>
  );
};

export default App;