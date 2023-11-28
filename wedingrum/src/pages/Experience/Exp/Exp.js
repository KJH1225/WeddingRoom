/*
박승균 html, css
*/

import React from "react";
import './Exp.scss';
import { NavLink } from "react-router-dom";

const Experience = () => {
  const temp = {
    exp_imagg1_h1: "골든아펠",
    exp_22_h3: "“당신이 가장 밝게 빛나는 순간,\n골든아펠이 당신의 아름다움에 감동을 더합니다.”",
    exp_22_strong: "The Brightest Moment\nof Your Life",
    exp_22_p: "아펠가모가 제안하는 원스톱 웨딩 컨시어지 서비스",
    exp_3_1_h2: "Golden Apfel Story",
    exp_3_1_p: "골든아펠이 당신의 아름다움에 감동을 더합니다\n생애 단 한 번뿐인 웨딩, 어떻게 준비해야 할지 막막하기만 한 신랑 신부의 근심· 걱정을 해결해 드리기 위해\n원스톱 웨딩 플래닝 서비스‘ 골든아펠’ 이 웨딩의 A to Z를 체계적이고 세심하게 설계해 드립니다.",
    exp_3_3_1_h3: "골든아펠만의 스페셜 웨딩 프로젝트",
    exp_3_3_1_p: "국내 웨딩 트렌드를 리드해온 아펠가모와 더채플이 보유한 데이터베이스는\n웨딩에 대한 신랑신부의 정확한 니즈를 이해하는 밑거름이 되었습니다.\n이를 기반으로 웨딩 플래닝을 시작하는 골든아펠은 신랑신부들이 직접\n경험하고 평가한 최상의 웨딩 협력 업체들과의 컬래버레이션을 통해 만족도는\n물론 남다른 품격을 전해드릴 웨딩 컨설팅을 제안합니다.",
    exp_3_3_2_h3: "원스톱 웨딩 플래닝 서비스",
    exp_3_3_2_p: "웨딩을 준비하는 신랑신부의 고단함을 골든아펠이 완벽하게 해결해 드립니다.\n웨딩홀에서부터 웨딩드레스, 헤어 & 메이크업, 웨딩 촬영은 물론\n예물, 혼주 메이크업, 축가, 폐백에 이르기까지 웨딩을 결정하는 순간부터\n챙겨야 할 모든 것을 골든아펠이 선별해 최적의 패키지로 제안합니다.<br></br>웨딩의 기쁨이 가장 아름다운 모습으로 기억되도록\n골든아펠 플래닝 서비스가 최상의 웨딩을 완성해 드립니다.",
  }
  return(
    <>
      <div class="exp-1">
        <div class="exp-imagg">
          <div class="exp-imagg1">
            <h3>EXPERIENCE</h3>
            <h1>{temp.exp_imagg1_h1}</h1>
          </div>
         </div>
             <div class="exp-2">
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
            <strong>{temp.exp_22_strong }</strong>
            <p>{temp.exp_22_p}</p>
            </div>
        </div>
        <div class="exp-3">
          <div class="exp-3-1">
          <h2>{temp.exp_3_1_h2}</h2>
          <p>{temp.exp_3_1_p}
            </p>
          </div>
          <div class="exp-3-imagg2"></div>
          <div class="exp-3-2">
            <h2>Signature Experience</h2>
          </div>
          <div class="exp-3-3">
            <ul>
              <li>
                <img src="/image/Exp/Exp/rose-petals-3194062_640.jpg"></img>
                <div>
                  <h3>{temp.exp_3_3_1_h3}</h3>
                  <p>{temp.exp_3_3_1_p}</p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp/pink-wine-1964457_640.jpg"></img>
                <div>
                  <h3>{temp.exp_3_3_2_h3}</h3>
                  <p>{temp.exp_3_3_2_p}</p>
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

export default Experience;