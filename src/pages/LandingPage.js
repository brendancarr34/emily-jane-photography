import React from 'react';
import backgroundImage from '../resources/landingPageBackground.jpg';
import Menu from '../components/Menu';

const LandingPage = () => {
    const landingPageContainerStyle = {
        color: 'white',
        // textAlign: 'center',
        fontSize: '3rem',
        position: 'relative'
    };

    const landingPageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
    };

    return (
        <div style={landingPageStyle}>
            <Menu />
            <div className="container" style={landingPageContainerStyle}>
                <div style={{ height: '100%' }}>
                    <div>
                        <br />
                        <br />
                        <h1>Original Photography<br/>by Emily Teves</h1>
                        <div>
                            <button onClick={() => window.location.href = '/collection'} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#A7C7E7', color: 'black', border: 'none', borderRadius: '5px', marginTop: '40px' }}>
                                <p style={{ margin: 0, padding: '10px 20px' }}>Shop the Full Collection</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;