import React from 'react';
import './SangDam2.scss'
import { NavLink } from "react-router-dom";
const SangDam2 = () => {
    
    return (
        <div>
            <div className='REbody-container2'>
                <div className='resv-container2'>
                    <div className='contatent-warp2'>
                        <div className='ris-tit3'>
                            <h2>상담 유형 선택</h2>
                            <h3>모든 예약 상담은 예약제로 진행됩니다.</h3>
                        </div>
                        <div className='ris-tit4'>
                            <ul>
                                <li><NavLink to="/SangDam"><p>유선 상담 예약</p><span className='icon4'></span></NavLink></li>
                                <li><NavLink to="/SangDam"><p>방문 상담<br></br>(1시간,보증금 5만원)</p><span className='icon5'></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SangDam2;