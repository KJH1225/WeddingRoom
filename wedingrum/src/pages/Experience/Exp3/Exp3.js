/*
박승균 html, css
*/

import React from "react";
import './Exp3.scss';
import { NavLink } from "react-router-dom";

const Exp3 = () => {
   const temp = {
      exp3_imagg1_h1: "웨딩의 여신",
      exp_22_h3: "“국내 최대 웨딩 포털에서 수많은 정보와 리얼 웨딩후기로\n나의 결혼준비를 더욱 스마트하게”",
      exp_22_strong: "Smart application\nfor all about wedding",
      exp_22_p: "예비 신부들의 스마트한 놀이터",
      exp_3_1_h2: "Wedding Goddess",
      exp_3_1_p: "결혼 준비 할 때 가장 궁금한 견적에 대한 정보는 어디에서 구할 수 있는지, 다양한 상품을 비교하며 예산을 짜야 할 때 어떤 것을 참고해야 하는지,\n머리 아프게 고민할 필요가 없습니다.\n웨딩의 여신에 마련되어 있는 수많은 데이터와 결혼 준비에 관한 고급 컨텐츠, 꿀팁을 만나시면 결혼준비는 한층 더 즐겁고 수월해 집니다.\n웨딩의여신을 사용할 수록 쌓이는 포인트로 다양한 이벤트 와 제휴 할인에도 참여하시면 더욱 알뜰하게 웨딩준비를 하고자 하는 진정한‘ 스마트 웨딩의 여신’ 이 되실 수 있습니다.",
      exp1_3_3_1_h3: "누적 2만개의 웨딩 콘텐츠 보유",
      exp1_3_3_1_p: "수 많은 웨딩 인플루언서들이 웨딩의 여신에서 하우스웨딩,\n야외결혼식, 뮤지컬웨딩 등 다양한 스타일의 테마별 웨딩\n콘텐츠들을 공유하고 있으며 그 어디에서도 볼 수 없는 결혼\n준비에 관한 다양한 꿀팁들을 담고 있습니다.",
      exp1_3_3_2_h3: "알뜰한 결혼 준비 포인트 샵",
      exp1_3_3_2_p: "계약 포인트, 방문 포인트 등을 통해 포인트를 모아 알뜰하게\n결혼준비를 할 수 있습니다.",
      exp1_3_3_3_h3: "엑셀이 필요 없는 결혼 준비 예산 툴",
      exp1_3_3_3_p: "결혼 준비를 할 때 가장 필수 적인 예산 짜기!\n웨딩의 여신에서는 엑셀이 필요 없는 예산 짜기 기능을\n제공합니다. 반쪽 초대기능으로 예비부부가 함께 어디서든 같이\n예산을 수정하고 작성할 수 있습니다."


  }
  return(
    <>
      <div class="exp-1">
        <div class="exp3-imagg">
          <div class="exp3-imagg1">
            <h3>EXPERIENCE</h3>
            <h1>{temp.exp3_imagg1_h1}</h1>
          </div>
         </div>
             <div class="exp3-2">
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
          <p>{temp.exp_3_1_p}</p>
          </div>
          <div class="exp3-3-imagg2"></div>
          <div class="exp-3-2">
            <h2>Signature Experience</h2>
          </div>
          <div class="exp1-3-3">
            <ul>
              <li>
                <img src="/image/Exp/Exp3/wedding-1846114_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_1_h3}</h3>
                  <p>
                    {temp.exp1_3_3_1_p}
                  </p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp3/bride-6230420_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_2_h3}</h3>
                  <p>{temp.exp1_3_3_2_p}
                  </p>
                </div>
              </li>
              <li>
                <img src="/image/Exp/Exp3/flowers-260894_640.jpg"></img>
                <div>
                  <h3>{temp.exp1_3_3_3_h3}</h3>
                  <p>{temp.exp1_3_3_3_p}
                  </p>
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

export default Exp3;