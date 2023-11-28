/*
박승균 html, css
*/


import React from "react";
import './Exp1.scss';
import { NavLink } from "react-router-dom";

const Exp1 = () => {
  const temp = {
    exp1_imagg1_h1: "아펠가모 앳 홈",
    exp_22_h3: "“셰프의 요리가 집으로 온다.\n맛있는 파티! 이제 집에서도 아펠가모를 즐겨보세요.”",
    exp_22_strong: "Delicious party at home",
    exp_22_p: "집에서 즐기는 셰프의 요리",
    exp_3_1_h2: "Apelgamo at home Story",
    exp_3_1_p: "‘맛있는 웨딩’으로 명성이 높은 아펠가모 백만명의 고객들이 인정한 10년간의 노하우를 그대로 ‘아펠가모 앳 홈’에 담았습니다.\n생애 단 한 번뿐인 웨딩, 어떻게 준비해야 할지 막막하기만 한 신랑 신부의 근심· 걱정을 해결해 드리기 위해\n파인 다이닝 출신 셰프의 손끝에서 탄생되는 요리가 이제 집으로 찾아옵니다.\n엄격한 위생 기준으로 완성되는 건강한 음식과 정성스러운 서비스.\n어디에서도 경험할 수 없는 아펠가모만의 특별한 맛을 이제 집으로 제공해 드립니다.",
    exp1_3_3_1_h3: "고품격 요리 퍼레이드",
    exp1_3_3_1_p: "분야별 베테랑 셰프들이 신선도 높은 재료만을\n엄선하여 정성스러운 손길로 완성한 메뉴들은\n고품격 요리 퍼레이드의 즐거움을 제공합니다.",
    exp1_3_3_2_h3: "실시간으로 조리되는 라이브 키친",
    exp1_3_3_2_p: "라이브 키친을 통해 실시간으로 조리되는\n메뉴들은 유명 파인 다이닝 레스토랑에 온 듯한 생동감 뿐만 아니라\n신선함까지 전달해 드립니다.\n베테랑 셰프의 특별한 손길을 이제 원하는 곳에서 느껴보실 수 있습니다.",
    exp1_3_3_3_h3: "조화로운 메뉴 구성",
    exp1_3_3_3_p: "남녀노소 모두의 입맛을 만족시켜 줄 수 있도록\n조화로운 메뉴 구성을 완성했습니다.<br></br>어떤 구성을 선택하셔도 아펠가모만의 고품격\n요리들을 취향대로 맛보실 수 있습니다."


  }

  return(
    <>
      <div class="exp-1">
        <div class="exp1-imagg">
          <div class="exp1-imagg1">
            <h3>EXPERIENCE</h3>
            <h1>{temp.exp1_imagg1_h1}</h1>
          </div>
         </div>
             <div class="exp1-2">
                <ul>
                   <li><NavLink to="/exp">골든 아펠</NavLink></li>
                   <li><NavLink to="/exp1">아펠가모 앳홈</NavLink></li>
                   <li><NavLink to="/exp2">트리츠 스파</NavLink></li>
                   <li><NavLink to="/exp3">웨딩의 여신</NavLink></li>
                 </ul>
             </div>
        <div>
          <div class="exp-22">
            <h3>{temp.exp_22_h3}</h3>
            <strong>{temp.exp_22_strong}</strong>
            <p>{temp.exp_22_p}</p>
            </div>
        </div>
        <div class="exp-3">
          <div class="exp-3-1">
          <h2>{temp.exp_3_1_h2}</h2>
            <p>{ temp.exp_3_1_p}</p>
          </div>
          <div class="exp1-3-imagg2"></div>
          <div class="exp-3-2">
            <h2>Signature Experience</h2>
          </div>
          <div class="exp1-3-3">
            <ul>
              <li>
                <img src="/image/Exp/Exp1/background-3078335_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_1_h3}</h3>
                  <p>{temp.exp1_3_3_1_p}
                  </p>
                </div>
              </li>
              <li>
                
                <img src="/image/Exp/Exp1/bokeh-2330583_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_2_h3}</h3>
                  <p>{temp.exp1_3_3_2_p}</p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp1/balloons-3159417_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_3_h3}</h3>
                  <p>{temp.exp1_3_3_3_p}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="exp-bod"></div>
        </div>
          
      </div>
      
    </>
  )
}

export default Exp1;