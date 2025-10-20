import React, { useEffect, useState } from 'react'
import LandingAnimation from './LandingAnimation';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [showIntro, setshowIntro] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowIntro(false);
            navigate('/hero');
        }, 12500);

        return () => clearTimeout(timer);
    }, [navigate])

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 min-h-screen">
      {showIntro && <LandingAnimation />}
    </div>
  )
}

export default Home