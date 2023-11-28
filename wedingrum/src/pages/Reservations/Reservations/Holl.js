import React from 'react';
import './Date.scss'
// import { NavLink } from "react-router-dom";
import LeftDate from './leftDate';

const Date4 = () => {
    
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
                            <h2>홀 예약</h2>
                            <h3>원하시는 홀 타입을 선택해주세요.</h3>
                          </div>
                          <ul>
                            <div className='Hollimg'>
                              <div className='Hollimg2'>
                                <a className='Hollimgtop'><span></span></a>
                                <div className='Hollimg3'><div className='Hollimg4'><img src='img/Reservations/52.png'></img></div></div>
                                <a className='Hollimgbottom'>예약하기</a>
                              </div>
                              <div className='Holltext'>
                                <h1>WeddingRoom 반포점 웨딩홀(A홀)</h1>
                                <h2>2024년 6월 27일 <span>목요일 14:00</span></h2>
                                <div className='Holltextbt'>
                                  <dl className='dty'><dt>대관료</dt><dd><span>1,870,000원</span></dd></dl>
                                  <dl className='dty'><dt>식대</dt><dd><span>7,770,000원</span></dd></dl>
                                  <dl className='dty'><dt>보증인원</dt><dd><span>180명</span></dd></dl>
                                </div>
                                <p className='Heart'>1명</p>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Date4;