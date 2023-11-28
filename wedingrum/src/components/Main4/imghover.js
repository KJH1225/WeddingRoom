import React from 'react';
import '../Main4/imghover.scss';
import { NavLink } from "react-router-dom";

const ImageGallery = () => {
  return (
    <div className="image-container">
      <NavLink to='' className='image-item  item2'>
        <div className='item-txt2'>
          <p className='tit'>골든아펠</p>
          <p>더 채플에서의 웨딩을<br></br>더욱 완벽하게 만들어주는<br></br><strong>원스톰 웨딩 컨시어지 서비스</strong></p>
        </div>
      </NavLink>
      <NavLink to='' className='image-item  item3'>
        <div className='item-txt2'>
          <p className='tit'>아펠가모 앳홈</p>
          <p>사랑하는 사람고 함께 어디서나,<br></br>쉐프의 고품격 요리를 즐길 수 있는<br></br><strong>홈파티 케이터링</strong></p>
        </div>
      </NavLink>
      <NavLink to='' className='image-item  item4'>
        <div className='item-txt2'>
          <p className='tit'>트리츠 스파</p>
          <p>완벽한 웨딩 데이를 위한<br></br>완벽한 신부 관리의 모든 것<br></br><strong>프리미엄 부티크 스파</strong></p>
        </div>
      </NavLink>
      <NavLink to='' className='image-item  item5'>
        <div className='item-txt2'>
          <p className='tit'>웨딩의 여신</p>
          <p>다양한 웨딩 컨텐츠로 웨딩 준비의 A to Z를<br></br>스마트하게 완성시켜 줄<br></br><strong>웨딩 준비 필수앱</strong></p>
        </div>
      </NavLink>
    </div>
  );
};

export default ImageGallery;