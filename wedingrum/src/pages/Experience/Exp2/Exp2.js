/*
박승균 html, css
*/

import React from "react";
import './Exp2.scss';
import { NavLink } from "react-router-dom";

const Exp2 = () => {
    const temp = {
      exp2_imagg1_h1: "트리츠 스파",
      exp_22_h3: "“아름다움을 향한 단 하나의 시도\n당신은 태어나는 순간부터 아름다웠습니다.”",
      exp_22_strong: "Boutique Spa",
      exp_22_p: "국내 최초의 브라이덜 전문 하이엔드 스파",
      exp_3_1_h2: "트리츠 스파 Story",
      exp_3_1_p: "본래 가지고 있던 태초의 아름다움을 되찾는 여정이 트리츠에서 시작됩니다.\n인위적인 가공의 흔적이 아닌 본연의 아름다움을 지향하는 프리미엄 스파 브랜드 트리츠는 가장 이상적인 방법으로 가치 있는 웰니스를 실현합니다.\n개개인의 각기 다른 체형과 생활 방식, 가치관을 고려한 혁신적인 맞춤형 케어 시스템으로 신개념 럭셔리 스파를 지향해 갑니다.\n오롯이‘ 나’ 로 다시 빛나는 시간, 트리츠에서 경험하세요.",
      exp1_3_3_1_h3: "ONLY FOR PRIVATE SAFETY",
      exp1_3_3_1_p: "도심 속 안식처로서 안전하고 편안한 휴식을 선물합니다.\n청담동에 자리한 트리츠 스파는 총 5 개층 단독 건물의 단독\n룸에서 모든 관리가 진행되며 모든 룸에는 공기 순환장치와\n개인별 용품이 준비되어 있어 프라이빗하고 안전하게 관리를\n받을 수 있습니다.",
      exp1_3_3_2_h3: "THE ULTIMATE PREMIUM",
      exp1_3_3_2_p: "프리미엄 스파 트리트먼트로 몸과 영혼을 위한 휴식을 선물합니다.\n독자적으로 개발한 스파 베드와 유기농 순면제품을 사용하며\n발몽, 레오놀그렐, 마르지아 클리닉 등 럭셔리 에스테틱 제품과\n고성능 관리 기기를 통하여 가장 편안한 상태에서 쾌적한\n프리미엄 관리를 선사합니다.",
      exp1_3_3_3_h3: "PROFESSIONAL\nBRIDAL SERVICE",
      exp1_3_3_3_p: "남녀노소 모두의 입맛을 만족시켜 줄 수 있도록\n조화로운 메뉴 구성을 완성했습니다.\n어떤 구성을 선택하셔도 아펠가모만의 고품격\n요리들을 취향대로 맛보실 수 있습니다."


  }
  
  return(
    <>
      <div class="exp-1">
        <div class="exp2-imagg">
          <div class="exp2-imagg1">
            <h3>EXPERIENCE</h3>
            <h1>{temp.exp2_imagg1_h1}</h1>
          </div>
         </div>
             <div class="exp2-2">
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
            <strong>{ temp.exp_22_strong}</strong>
            <p>{temp.exp_22_p}</p>
            </div>
        </div>
        <div class="exp-3">
          <div class="exp-3-1">
            <h2>{ temp.exp_3_1_h2}</h2>
            <p>{temp.exp_3_1_p}</p>
          </div>
          <div class="exp2-3-imagg2"></div>
          <div class="exp-3-2">
            <h2>Signature Experience</h2>
          </div>
          <div class="exp1-3-3">
            <ul>
              <li>
                <img src="/image/Exp/Exp2/cook-2364221_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_1_h3}</h3>
                  <p>{ temp.exp1_3_3_1_p}</p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp2/pasta-3547078_640.jpg"></img>
                <div>
                  <h3>{ temp.exp1_3_3_2_h3}</h3>
                  <p>{temp.exp1_3_3_2_p}</p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp2/asparagus-2178164_640.jpg"></img>
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

export default Exp2;