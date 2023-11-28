import React from 'react';
import './SangDam.scss'
import { NavLink } from "react-router-dom";
const SangDam = () => {
    
    return (
        <div>
          <div className='Sangbody-container'>
              <div className='Sasv-container'>
                  <div className='Sacontatent-warp'>
                      <div className='saris-tit'>
                          <h2>상담 지점 선택</h2>
                          <h3>웨딩룸의 지점을 선택해주세요.</h3>
                      </div>
                      <div className='saris-tit2'>
                          <ul>
                              <li><NavLink to="/"><p>WDR 잠실점</p><span className='icon21'></span></NavLink></li>
                              <li><NavLink to="/"><p>WDR 반포점</p><span className='icon22'></span></NavLink></li>
                              <li><NavLink to="/"><p>WDR 광화문점</p><span className='icon23'></span></NavLink></li>
                              <li><NavLink to="/"><p>WDR 선릉점</p><span className='icon23'></span></NavLink></li>
                              <li><NavLink to="/"><p>WDR 공덕점</p><span className='icon23'></span></NavLink></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}

export default SangDam;