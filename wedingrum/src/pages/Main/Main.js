import "../Main/Main.scss";
import { useEffect, useRef, useState } from 'react';
import MapWithRealtimeLocation from '../../components/Map/Map'
import AutoImageSlider from '../../components/Slider/Slider';
import ImageGallery from '../../components/Main4/imghover';
import ScrollToTopButton from '../../components/TopButton/TopButton'
import { NavLink } from "react-router-dom";

const Main = () => {
  const sliderRef = useRef(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const handleScroll = () => {
    if (!scrollTriggered && window.scrollY > window.innerHeight) {
      setScrollTriggered(true);
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);



  return (
    <>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="../MAIN.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="main-page2">
        <div className="main-content2">
          <h1>웨딩홀 예약하기</h1>
          <NavLink to="/Reservations"><li>Search</li></NavLink>
        </div>
      </div>
      <div className="main-page3">
        <ScrollToTopButton/>
        <section className="main-content3">
          <AutoImageSlider onNextSlide={(nextSlide) => { sliderRef.current = nextSlide; }} />
        </section>
        <section className="main-side-bar">
          <div className="main-side-txt">
            <h1>Wedding Gallery</h1>
            <h2>A Perfect Wedding<br></br>Day for You</h2>
            <h4>완벽한 예식의 주인공, 바로 당신입니다.</h4>
            <ul>
              <li><NavLink to=''>잠실점</NavLink></li>
              <li><NavLink to=''>반포점</NavLink></li>
              <li><NavLink to=''>평택점</NavLink></li>
              <li><NavLink to=''>선릉점</NavLink></li>
              <li><NavLink to=''>공덕점</NavLink></li>
            </ul>
            <MapWithRealtimeLocation/>
          </div>
        </section>
      </div>
      <div className="main-page4">
        <section className="main-content4">
          <ImageGallery/>
        </section>
      </div>
    </>
  );
};

export default Main;