import React from 'react';
import './Date.scss'
// import { NavLink } from "react-router-dom";
import LeftDate from './leftDate';
import DateCalendarFormProps from './Calendar';

const Date2 = () => {
    
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
                            <h2>예식 날짜 선택</h2>
                            <h3>원하시는 날짜를 선택해주세요.</h3>
                          </div>
                          <ul>
                            <div>
                              <DateCalendarFormProps/>
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

export default Date2;