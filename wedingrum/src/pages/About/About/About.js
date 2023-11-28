import "../About/About.scss"
import React from "react"
import Header from "../../../components/Header/Header";
import Aswiper from "../../../components/Aswiper/Aswiper";
import Multi from "../../../components/Amcarousel/Amcarousel";
import ImageGal from '../../../components/imggal/imghover2'
import { Link } from 'react-router-dom';
import About1 from '../About1/About1';

const About = () => {
  return (
    <div id="Acontainer">
    <div className="Asub_inner">
      <div className="about_main">
        <div className="about_main_img">
         <img src="img/About/a1.jpg"></img>
        </div>
        <div className="about_main_txt">          
          <h3>About</h3>
          <h1>브랜드 스토리</h1>
        </div>
      </div>
      <div className="Alinks">
          <a>
            <Link to ="/About">브랜드 스토리</Link>
          </a>
          <a>
            <Link to ="/About1">회사 소개</Link>
          </a>
        </div>
      <div className="about_ex">
        <h1>The Ultimate Elegant Wedding</h1>
        <p>도심 속에서 누리는 가장 스타일리시한 웨딩<br></br>격조 높은 예식의 가치를 누려보세요.
        </p>
        <div className="Asubimg_wrap">
          <div className="Asubimg">
            <img src="img/About/a2.jpg"></img>
          </div>
          <div className="Asubtxt">
            <h2>Create Your Once<br></br>in a lifetime Moment</h2>
            <h3>클라이맥스로 기억될 행복의 순간</h3>
            <p>쏟아지는 환호, 반짝이는 행복, 두 사람의 힘찬 첫 걸음.<br></br>
            아펠가모는 버진로드 위를 함께 걷는 두 사람의 '결혼 행진'을<br></br>
            뜻합니다.<br></br>
            품격 있는 채플 웨딩 스타일을 선도해 온 아펠가모.<br></br>
            단순한 웨딩 홀의 개념을 넘어 경건하고 성스러운 예식의 가치에<br></br>
            오감을 만족시킬 미식과 품격있는 스타일을 더해 삶 속에서 가장<br></br>
            빛나는 순간을 선사하겠습니다.<br></br><br></br>
            한 분야의 전문가가 되는데 필요한 1만 시간의 노력.<br></br>
            1만 예식의 경험을 통해 얻은 아펠가모 전문 웨딩 크리에이터들의<br></br>
            노하우는 이제 가장 완벽한 예식의 조건이 되었습니다.<br></br><br></br>
            도심 속에서 누리는 가장 스타일리시한 웨딩.<br></br>
            기억하고 싶은 단 한번의 클라이맥스는 아펠가모와 함께한 바로 그<br></br>
            순간이 될 것입니다.</p>
          </div>
        </div>
      </div>
      <div className="Asub_gallery_wrap">
        <h1>Wedding Special</h1>
        <div className="Agallery_left">
          <Aswiper></Aswiper>
        </div>        
        <div className="aboutinfo">
          <div className="Ainfo_text">
            <h2>Why Apelgamo</h2>            
          </div>
          <div className="Multi">
            <Multi></Multi>
          </div>
        </div>
      </div>
      <div className="about_menu_wrap">
        <div className="about_menu">
          <div className="Amenu_ex">
            <h1>Team Apelgamo</h1>            
          </div>
          <div className="imggal">
            <ImageGal/>  
          </div>          
        </div>        
      </div>
    </div>
  </div>
  );
}
export default About;