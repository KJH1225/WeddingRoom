import React from 'react';
import './Reservations.scss'
import { NavLink } from "react-router-dom";
const Reservations = () => {
    
    return (
        <div>
            <div className='REbody-container'>
                <div className='resv-container'>
                    <div className='contatent-warp'>
                        <div className='ris-tit'>
                            <h2>예약 방법 선택</h2>
                            <h3>원하시는 검색 조건으로 희망하시는 웨딩홀과 예약 가능한 시간대를<br></br>직접 찾고 예약해보세요.</h3>
                        </div>
                        <div className='ris-tit2'>
                            <ul>
                                <li><NavLink to="/SangDam"><p>지점-지역-웨딩홀로 찾기</p><span className='icon1'></span></NavLink></li>
                                <li><NavLink to="/Date"><p>날짜 시간으로 찾기</p><span className='icon2'></span></NavLink></li>
                                <li><NavLink to="/"><p>다른 방식으로 찾기<br></br>(준비중)</p><span className='icon3'></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservations;
