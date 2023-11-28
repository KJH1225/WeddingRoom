import "../About1/About1.scss"
import React from "react"
import Header from "../../../components/Header/Header";
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from '../About/About.js';

const About1 = () => {
  return (
    <div id="A1container">
    <div className="A1sub_inner">
      <div className="about1_main">
        <div className="about1_main_img">
         <img src="img/About/ab1.jpg"></img>
        </div>
        <div className="about1_main_txt">          
          <h3>About</h3>
          <h1>회사소개</h1>
        </div>
      </div>
      <div className="bigcont">
        <div className="A1links">
          <a>
            <Link to ="/About">브랜드 스토리</Link>
          </a>
          <a>
            <Link to ="/About1">회사 소개</Link>
          </a>
        </div>
        <div className="A1bigimg">
          <img src="img/About/ab2.jpg"/>
        </div>
        <div className="A1maintxt">
          <div className="left">
            <p>
              유모멘트는 웨딩 서비스를<br></br>  
              비롯하여 인생 중요한<br></br>
              모멘트에서의 라이프 스타일을 제안하는<br></br>
              서비스 전문 기업입니다.
            </p>  
          </div>
          <div className="right">
            <p>
              (주)유모멘트는 2011년 설립되어 더채플 브랜드로 웨딩홀을 운영하는 유모멘트 유한회사와 2016년 7월 CJ 푸드빌로 물적 분할되어<br></br>
              설립되었습니다. 또한 아펠가모 주식회사를 통합하여, 현재 '더채플(The Chapel)', '아펠가모(apelgamo)', '루벨(LUVEL)'이라는 3개의<br></br>
              웨딩홀 브랜드를 운영 중입니다. 3개의 브랜드는 모두 서울지역에서 운영 중이며, 총 8개 점포 11개의 웨딩홀을 소유하고 있습니다.<br></br><br></br>
              (주)유모멘트는 2022년 말까지 총 3만 건 이상의 웨딩을 진행하고, 매년 150만 명이 넘는 하객을 맞이함으로써 명실공히 국내 최대,<br></br>
              최고의 서비스를 자랑하는 프리미엄 웨딩홀 가치를 인정받고 있습니다.<br></br><br></br>
              또한 웨딩 서비스뿐만 아니라 다양한 인생의 중요한 순간에서 고객에게 행복한 '모멘트'를 만들어 드리고자 외식, 뷰티,<br></br>
              플랫폼 서비스 등 다양한 라이프 스타일을 제공하고 있습니다.<br></br><br></br>
              (주)유모멘트는 고객님들의 최고의 순간을 위해 지속 변화하고, 혁신하고 있는 웨딩 선도 기업입니다.
            </p>
            <div className="number">
              <span>2011. 03. 19</span>
              <li>설립일</li>
            </div>
            <div className="number">
              <span>11</span>
              <li>웨딩홀 수</li>
            </div>
          </div>  
        </div>
        <div className="A1bigtxt">
          <h1>Corporate Identity</h1>
        </div>
        <div className="A1iden">
          <div className="imgleft">
            <img src="img/About/ab3.png"></img>
          </div>
          <div className="imgright">
            <img src="img/About/ab4.png"></img>
          </div>          
        </div> 
        <div className="A1bottom">          
          
          <div className="btminner">
            <div className="innertxt">
              <h1>Our Brand</h1>  
            </div>
            <div className="innerimg">
              <img src="./img/About/ab6.png"></img>
              <img src="./img/About/ab7.png"></img>
              <img src="./img/About/ab8.png"></img>
              <img src="./img/About/ab9.png"></img>
              <img src="./img/About/ab10.png"></img>
              <img src="./img/About/ab11.png"></img>
              <img src="./img/About/ab12.png"></img>
            </div>  
          </div>          
        </div>       
      </div>     
    </div>
  </div>
  );
}
export default About1;