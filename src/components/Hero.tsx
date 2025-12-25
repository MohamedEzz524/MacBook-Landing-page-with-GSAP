import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src={`${import.meta.env.BASE_URL}title.png`} alt="MacBook Pro" />
        <video
          src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
          autoPlay
          muted
          playsInline
          ref={videoRef}
        />
        <button>Buy</button>
        <p>From $199/mo. or $999 for 12 months</p>
      </div>
    </section>
  );
};

export default Hero;
