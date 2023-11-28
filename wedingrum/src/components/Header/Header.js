import React, { useState } from "react";
import "../Header/Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from "axios";
import { API_URL } from "../../config/contansts";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState); //useState와 거의 비슷한 사용법
  // const login = getCookie('accessToken');
  console.log("login: ", isLogin);

  // const refresh = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${API_URL}/refresh`,
  //       { withCredentials: true },
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.log("Header.js/error.res: ", error.response);
  //     navigate('/login')
  //   }
  // }

  const logout = async () => {
    axios.get(`${API_URL}/logout`, { withCredentials: true })
      .then(()=>{
        setIsLogin(false);
      })
      .catch((err) => {
        console.log("logout/err: ", err);
      })
  } 

  
  const productData = [
    { id: 'prodpho', name: '웨딩 본식 상품', category: '웨딩 본식 상품' },
    { id: 'prodpho', name: '사진 촬영', category: '사진 촬영' },
    { id: 'prodmov', name: '영상 촬영', category: '영상 촬영' },
    { id: 'prodhair', name: '헤어&메이크업', category: '헤어&메이크업' },
    { id: 'prodbooth', name: '포토부스', category: '포토부스' },
    { id: 'prodetc', name: '축가/사회', category: '축가/사회' },
    { id: 'prodcar', name: '웨딩카', category: '웨딩카' },
    { id: 'prodbow', name: '폐백', category: '폐백' },
    { id: 'prodwdmg', name: '웨딩관리', category: '웨딩관리' },
  ];

    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <div id="header-container"
      className={isHeaderHovered ? 'hovered' : ''}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}>
      <div className='header-warp'>
        <NavLink to='/'><img src='./img/header/logo.png' alt=''></img></NavLink>
        <div className='header-item'>
          <ul>
            <li>
              <NavLink to='/reservations'>RESERVATIONS</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/reservations'>예식예약</NavLink></li>
                <li><NavLink to='/sangdam2'>상담예약</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to='/wedding/1'>WEDDING</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/wedding/1'>잠실점</NavLink></li>
                <li><NavLink to='/wedding/2'>반포점</NavLink></li>
                <li><NavLink to='/wedding/3'>평택점</NavLink></li>
                <li><NavLink to='/wedding/4'>선릉점</NavLink></li>
                <li><NavLink to='/wedding/5'>공덕점</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to='product/prodpho'>PRODUCTS</NavLink>
              <ul id='sub-menu'>
                {productData.map((item) => (
                  <li key={item.id}>
                    <NavLink to={`product/${item.id}`}>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <NavLink to='/party'>PARTY</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/party'>연회</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to='/exp'>EXPERIENCE</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/exp'>골든웨딩</NavLink></li>
                <li><NavLink to='/exp1'>웨딩가모 앳홈</NavLink></li>
                <li><NavLink to='/exp2'>트리츠 스파</NavLink></li>
                <li><NavLink to='/exp3'>웨딩의 여신</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to='/about'>ABOUT</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/about'>브랜드 스토리</NavLink></li>
                <li><NavLink to='/about1'>회사소개</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to='/faq'>CUSTOMER</NavLink>
              <ul id='sub-menu'>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
              </ul>
            </li>
            {isLogin ? 
              <li>
                <NavLink to='/mypage'><PersonOutlineIcon fontSize='medium'/></NavLink>
                <ul id='sub-menu'>
                  <li><NavLink to="/mypage">마이페이지</NavLink></li>
                  <li><NavLink to="/" onClick={logout}>로그아웃</NavLink></li>
                </ul>
              </li>
              :
              <li>
                <NavLink to='/'><PersonOutlineIcon fontSize='medium'/></NavLink>
                <ul id='sub-menu'>
                  <li><NavLink to="/login">로그인</NavLink></li>
                  <li><NavLink to="/join">회원 가입</NavLink></li>
                </ul>
              </li>
            }
            
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
