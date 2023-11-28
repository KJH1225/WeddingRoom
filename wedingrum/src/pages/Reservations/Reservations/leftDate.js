import React from 'react';

const LeftDate = () => {

  const user = { brand: 'WeddingRoom', map: '반포점', wedding: 'A홀', start: '2023-12-05', end: '2023-12-12', time:'11시' , month:'화요일' }


  return (
      <div className="left-Date">
        <dl><dt>브랜드</dt><dd><span>{user.brand}</span></dd></dl>
        <dl><dt>지점</dt><dd><span>{user.map}</span></dd></dl>
        <dl><dt>웨딩룸</dt><dd><span>{user.wedding}</span></dd></dl>
        <dl><dt>희망기간 시작일</dt><dd><span>{user.start}</span></dd></dl>
        <dl><dt>희망시간 종료알</dt><dd><span>{user.end}</span></dd></dl>
        <dl><dt>희망 시간대</dt><dd><span>{user.time}</span></dd></dl>
        <dl><dt>희망 요일</dt><dd><span>{user.month}</span></dd></dl>
      </div>
  );
};

export default LeftDate;