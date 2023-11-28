import React from 'react';
import './Date.scss'
import { NavLink } from "react-router-dom";
import LeftDate from './leftDate';



const Date = () => {
    
    return (
        <div>
            <div className='Date-container'>
                <div className='Date-content'>
                    <div className='Date-warp'>
                      <div className='Date-warp2'>
                        <div className='Date-tit'>
                          <LeftDate/>
                        </div>
                        <div className='Date-tit2'>
                          <div className='Date-tit3'>
                            <h2>예식 시간 선택</h2>
                            <h3>원하시는 예식일정을 찾기 위해 우선 검색 조건을 선택해주세요.</h3>
                          </div>
                          <ul>
                            <li><NavLink to="/DateCal"><p>날짜 먼저 선택</p><span className='icon7'></span></NavLink></li>
                            <li><NavLink to="/Month"><p>요일 먼저 선택</p><span className='icon8'></span></NavLink></li>
                            <li><NavLink to="/Time"><p>시간 먼저 선택</p><span className='icon9'></span></NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Date;