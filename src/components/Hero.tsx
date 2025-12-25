import { useEffect, useRef } from 'react';
import title from '../../public/title.png';
import video from '../../public/videos/hero.mp4';
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
        <img src={title} alt="MacBook Pro" />
        <video src={video} autoPlay muted playsInline ref={videoRef} />
        <button>Buy</button>
        <p>From $199/mo. or $999 for 12 months</p>
      </div>
    </section>
  );
};

export default Hero;
