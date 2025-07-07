import React from 'react';
import backgroundImage from '../resources/landingPageBackground.jpg';
import Menu from '../components/Menu';

const LandingPage = () => {
    const landingPageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: '3rem',
        position: 'relative',
    };

    return (
        <div style={landingPageStyle}>
            <Menu />
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="col text-center">
                        <h1>Original Photography<br/>by Emily Teves</h1>
                        <div style={{ marginBottom: '300px' }}>
                            <button onClick={() => window.location.href = '/collection'} style={{ padding: '10px 20px', fontSize: '1rem' }}>
                                Go to Collection
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;