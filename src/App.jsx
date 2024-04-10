import React from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import './assets/main.css';

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;
