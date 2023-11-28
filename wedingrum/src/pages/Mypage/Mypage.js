import React, { useState } from 'react';
import '../Mypage/Mypage.scss';
import LeftBar from '../../components/MyPage/LeftBar';
import MyPageTop from '../../components/MyPage/MyPageTop';
import { TextField, Button, Container, Box } from '@mui/material';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import useAsync from '../../hooks/useAsync';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";

function MyPage() {
  console.log('마이페이지 실행됨');
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState); //useState와 거의 비슷한 사용법
  const [selectedMenuItem, setSelectedMenuItem] = useState('내 정보');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const getUser = async () =>{
    console.log("Mypage.js/getUser()들어옴");
    const user = await axios.get(`${API_URL}/user/mypage`);
    console.log("Mypage.js/getUser(): ", user.status);
    return user.data;
  }
  
  const [state] = useAsync(getUser, []);
  const { loading, data:profile, error} = state; //state구조분해 
  if(loading) return <div>로딩중 ......</div>
  if(error) { 
    alert('다시 로그인 해주세요');
    setIsLogin(false);
    navigate('/login');
    return <div>에러가 발생했습니다.</div> 
  }
  if(!profile){
    return <div>로딩중입니다.</div>
  }  
  // console.log(profile);
  const name = profile.name;
  const id = profile.id;
  const pwd = profile.pwd;
  const birth = profile.birth;
  const phone = profile.phone;
  const companionName = profile.companionName;
  const companionPhone = profile.companionPhone;

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = () => {
    // 여기에 실제 회원정보 업데이트 로직을 추가하세요.
    // formData에는 입력된 정보가 들어 있습니다.
    console.log('Updated Profile:', formData);
  };

  const user = { name: '임헌성', spouse: '윈터', age: '25', phone: '000-0000-0000', bh: '1999-10-08' }
  const pay = { name: '임헌성', prodname:'A패키지', price: '1000만원', how:'카카오페이', map: '잠실점', memo: '화려하게 부탁드립니다' }
  const cons = { name: '임헌성', consname:'김준녕', day: '2023-11-16', prodname:'A패키지', memo: '웨딩카 벤츠로 부탁드립니다' }
  

  return (
    <div className="Mypage-container">
      <div className="my-backgrund">
        <MyPageTop name={name}/>
      </div>
      <div className="sub-menu">
        <div className="my-both">
          <div className="left-list">
            <LeftBar onMenuClick={handleMenuClick} />
          </div>
          <div className="my-content">
            <h1>{selectedMenuItem}</h1>
            <div className="my-content-main">
              {selectedMenuItem === '내 정보' && (
                <>
                  <h2>이름: {name}</h2>
                  <h2>생일: {birth}</h2>
                  <h2>전화번호: {phone}</h2>
                  <h2>배우자이름: {companionName}</h2>
                  <h2>배우자전화번호: {companionPhone}</h2>
                </>
              )}
              {selectedMenuItem === '내정보 수정' && (
                <form>
                  <Container maxWidth="xs">
                    <Box mt={3}>
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="아이디" variant="outlined" required name="id" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="비밀번호" variant="outlined" required type="password" name="password" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="비밀번호 확인" variant="outlined" required type="password" name="confirmPassword" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="이메일" variant="outlined" required type="email" name="email" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2} mb={2}>
                      <Button fullWidth variant="contained" color="primary"  type="button" onClick={handleUpdateProfile}>
                        수정
                      </Button>
                    </Box>
                  </Container>
                </form>
              )}
              {selectedMenuItem === '결제 내역' && (
                <>
                  <h2>이름 : {pay.name}</h2>
                  <h2>상품 이름 : {pay.prodname}</h2>
                  <h2>가격 : {pay.price}</h2>
                  <h2>결혼식 장소 : {pay.map}</h2>
                  <h2>결제 방법 (신용카드, 계좌이체, 결제 앱 등) : {pay.how} </h2>
                  <h2>요청사항 : {pay.memo}</h2>
                </>
              )}
              {selectedMenuItem === '상담 예약 내역' && (
                <>
                  <h2>이름 : {cons.name}</h2>
                  <h2>상담사 이름 : {cons.consname}</h2>
                  <h2>상담 날짜 : {cons.day}</h2>
                  <h2>상품 이름 : {cons.prodname}</h2>
                  <h2>요청사항 : {cons.memo}</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
