import './Date.scss'
import LeftDate from './leftDate';
import React, { useState } from 'react';
import './Month.scss'



const Date4 = () => {

    const [selectedDay, setSelectedDay] = useState('');
  
    const handleDayClick = (day) => {
      setSelectedDay(day);
    };
    
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
                            <h3>원하시는 요일을 선택해주세요.</h3>
                          </div>
                          <ul>
                            <div className="day-of-week-selector-container">
                              <div className="days-of-week">
                                {['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'].map((day) => (
                                  <div
                                    key={day}
                                    className={`day ${selectedDay === day ? 'selected' : ''}`}
                                    onClick={() => handleDayClick(day)}
                                  >
                                    {day}
                                  </div>
                                ))}
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