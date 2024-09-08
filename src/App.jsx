import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Shop />
            <Footer />
        </>
    )
}

export default App
