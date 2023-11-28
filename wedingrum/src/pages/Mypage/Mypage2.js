import React, { useEffect, useState } from 'react';
import '../Mypage/Mypage2.scss';
import MyPageTop from '../../components/MyPage/MyPageTop';
import MapWithRealtimeLocation from '../../components/Map/Map'
import axios from 'axios';
import { API_URL } from '../../config/contansts';

function MyPage2() {
  const [reservation, setReservation] = useState({});
  const [reservationPlannerName, setReservationPlannerName] = useState("");

  useEffect(()=>{
    axios.get(`${API_URL}/reservation`)
    .then(res => {
      console.log("MyPage2/res: ",res.data.Planner.name);
      setReservation(res.data);
      setReservationPlannerName(res.data.Planner.name);
      // console.log(reservation);A
    }).catch(e => {
      console.log("MyPage2/e: ",e);
    })
  }, []);
  
  return (
    <div className="Mypage-container">
      <div className='my-backgrund'>
        <MyPageTop/>
      </div>
      <div className='sub2-menu'>
        <div className='my2-both'>
          <div className='my2-content'>
            <h1>예약 정보</h1>
            <div className='my3-content'>
              <div className='my2-content-main'>
                {console.log("reservation: ",reservation)}
                <h2>상담사: {reservationPlannerName}</h2>
                <h2>장소 : {reservation.where1}</h2>
                <h2>예약 날짜 : {reservation.when}</h2>
                <h2>예약 시간 : {reservation.time}</h2>
                {/* <h2>식장 전화번호 :</h2> */}
                {/* <h2>주차장 안내:</h2> */}
              </div>
              <div className='my2-map'>
                  <MapWithRealtimeLocation />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage2;
