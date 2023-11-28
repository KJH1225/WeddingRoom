import "../Party/Party.scss"
import React from "react"
import Swiper from "../../components/Swiper/Swiper";
import Multi from "../../components/Mcarousel/Mcarousel";
import Vswiper from "../../components/Vswiper/Vswiper";
import { NavLink } from "react-router-dom";

const Party = () => {
  return (
    <div id="Pcontainer">
    <div className="Psub_inner">
      <div className="party_main">
        <div className="party_main_img">
          <img src="img//Party/ex2.jpg"></img>
        </div>
        <div className="party_main_txt">          
          <h3>PARTY</h3>
          <h1>연회</h1>
        </div>
      </div>
      <div className="party_ex">
        <h1>연회/대관</h1>
        <p>엄선한 제철 재료로 한식, 중식, 양식, 일식을 넘나드는 조화로운 메뉴 구성을 완성했습니다.<br></br>더채플이 전하는 미식의 감동은 모든 이의 기대와 취향을 충족시키기에 충분합니다.
        </p>
        <h3>"Savor the Culinary Delights"<br></br>최상급 미식은 이제 완벽한 연회의 기본입니다.</h3>
        <div className="partybtn_wrap">
          <button class="party_button">연회&대관 문의</button>
        </div>
      </div>
      <div className="party_gallery_wrap">
        <div className="pgallery_left">
          <Swiper></Swiper>
        </div>
        <div className="pgallery_right">
          <h2>Gallery of<br></br>Banquet</h2>
          <p>성공과 행복을 기원하는 맛있는 연회도<br></br>더채플에서 즐겨보세요</p>
          <div className="pright_tab">
            <a className="ht">잠실점</a>
            <a className="ht">반포점</a>
            <a className="ht">광화문점</a>
            <a className="ht">선릉점</a>
            <a className="ht">공덕점</a>
            <a className="lt">6F 연회홀</a>
            <a className="lt">7F 연회홀</a>
          </div>
        </div>
        <div className="partyinfo">
          <div className="pinfo_text">
            <h2>Information</h2>
            <p>코코넛 원목으로 조성한 연회홀은 고급 리조트를 연상시키는 공간입니다<br></br>
              원목 파티션은 편안하고 아늑한 분위기를 선사하며, 곳곳의 석재 장식물은 이국적이면서<br></br>
              고급스러운 느낌을 더해 줍니다.
            </p>
          </div>
          <div className="Multi">
            <Multi></Multi>
          </div>
        </div>
      </div>
      <div className="party_menu_wrap">
        <div className="party_menu">
          <div className="pmenu_ex">
            <h1>Banquet Food</h1>
            <p>파인다이닝 스타 셰프들로 구성되어 더채플만의 고유한<br></br>
              메뉴들과 조찬, 뷔페식, 파티 등 행사에 따른 다양한 음식들을<br></br>
              고품격으로 만나보실 수 있습니다.
            </p>
            <div className="pmenu_tab">
              <a>Buffet<br></br></a>
              <a>Course<br></br></a>
              <a>Finger Food<br></br></a>
              <a>Coffee & Tea Reception<br></br></a>
            </div>
          </div>          
        </div>
        <div className="Vswiper">
          <Vswiper></Vswiper>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Party;