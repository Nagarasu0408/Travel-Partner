import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const WelcomScreen = () => {
    const [background, setBackground] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        changeBackground();
    }, []);

    const changeBackground = () => {
        // Logic to generate or select a new background image URL
        const backgrounds = [
            'url(https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg)',
            'url(https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg)',
            'url(https://s3.us-west-1.wasabisys.com/ft-backgrounds/-mreflowMatt_Wolfe__futuristic_landscape_beauty_b2566644-4f28-453d-9cdf-86668a6bdfa5.jpeg)',
            'url(https://s3.us-west-1.wasabisys.com/ft-backgrounds/mreflow-Matt_Wolfe_vibrant_colors___9877786f-5223-4293-9621-1657e9415857.jpeg)',
            'url(https://s3.us-west-1.wasabisys.com/ft-backgrounds/-mrefloweFlow_a_vibrant_abstract_landscape_using_geometric_shapes_and_b_3f9b8be3-f550-4f6a-b899-3bcb153e123e-up.jpeg)',
            'url(https://s3.us-west-1.wasabisys.com/ft-backgrounds/-mreflowMatt_Wolfe_a_colorful_digital_background_477e314c-c8c2-4491-88d5-1194cd417006.jpeg)',
        ];

        const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        setBackground(randomBackground);
    };

    const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';

    return (
        <div style={{ backgroundImage: `${linearGradient}, ${background}`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="Web_Name">
                <p className='span'>Welcome</p>
                <p className='span'>To</p>
                <p className='span'>Travel <span className="Partner"> Partner</span></p>
                <p><button className='btn' onClick={() => navigate('/login')}>Let's Begin</button></p>
            </div>
        </div>
    );
};

export default WelcomScreen;
