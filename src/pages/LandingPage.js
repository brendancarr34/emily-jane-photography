import React from 'react';
import backgroundImage from '../components/goldenGoldenGate.jpg'; // Adjust the path as necessary
import Menu from '../components/Menu'; // Import the Menu component

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
            <Menu /> {/* Add the Menu component */}
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="col text-center">
                        <h1>Emily Jane Photography</h1>
                        <div style={{ marginTop: '20px' }}>
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