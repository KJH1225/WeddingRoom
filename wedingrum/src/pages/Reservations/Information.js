import React from "react";
import "./Information.scss";
const Ceremony = () => {
  return (
    <div className="ceremony">
      <h1>임헌성님의 예식예약 정보</h1>
      <h4>기본 계약사항</h4>
      <table>
        <colgroup>
          <col width="20%"></col>
          <col></col>
          <col width="20%"></col>
        </colgroup>
        <tr>
          <th>예식일자</th>
          <td>2024년</td>
        </tr>
        <tr>
          <th>예식장소</th>
          <td>아펠가모</td>
          <th>지불보증인원</th>
          <td>최소 150명</td>
        </tr>
      </table>
      <table>
        <colgroup>
          <col width="20%"></col>
          <col width="20%"></col>
          <col width="20%"></col>
          <col width="20%"></col>
        </colgroup>
        <tr>
          <th rowspan="3">
            신랑.
            <br />
            임헌성
          </th>
        </tr>
        <th>주소</th>
        <td colspan="3"></td>
        <tr>
          <th>번호</th>
          <td>010-1111-1111</td>
          <th>메일</th>
          <td>xx</td>
        </tr>
      </table>
			<table>
        <colgroup>
          <col width="20%"></col>
          <col width="20%"></col>
          <col width="20%"></col>
          <col width="20%"></col>
        </colgroup>
        <tr>
          <th rowspan="3">
            신부.
            <br />
            김민정
          </th>
        </tr>
        <th>주소</th>
        <td colspan="3"></td>
        <tr>
          <th>번호</th>
          <td>010-1111-1111</td>
          <th>메일</th>
          <td>xx</td>
        </tr>
      </table>
      <h4>식대 및 음료</h4>
      <table>
				<colgroup>
				<col width="10%"></col>
				<col width="10%"></col>
				<col width="20%"></col>
				<col width="20%"></col>
				</colgroup>
				<tr>
					<th colsapn="2">구분</th>
					<th>세부</th>
					<th>정가</th>
					<th>계약가</th>
					<th>비고</th>
				</tr>
				<tr>
					<th rowspan="2">식대</th>
					<th>대인</th>
					<td>75,000</td>
					<td>40,700</td>
					<td>8세 이상</td>
				</tr>
				<tr>
					<th>소인</th>
					<td>36,300</td>
					<td>36,000</td>
					<td>5-7세</td>
				</tr>
				<tr>
					<th colspan="2">음.주류</th>
					<td>6,600</td>
					<td>0</td>
					<td>-</td>
				</tr>
				<tr>
					<th colspan="2">답례품</th>
					<td>75,000</td>
					<td>40,700</td>
					<td>예상인원 초과 시 식권과 교환 지급</td>
				</tr>
			</table>
      <h4>부대상품</h4>
      <table>
			<colgroup>
				<col width="30%"></col>
				<col></col>
				<col></col>
				</colgroup>
				<tr>
					<th>구분</th>
					<th>정가</th>
					<th>계약가</th>
					<th>비고</th>
				</tr>
				<tr>
					<td>홀 사용료</td>
					<td rowspan="7">7,500,000</td>
					<td rowspan="7">1,100,000</td>
					<td rowspan="7">-</td>
				</tr>
				<tr>
					<td>빔 프로젝터 사용</td>
				</tr>
				<tr>
					<td>혼구용품</td>
				</tr>
				<tr>
				<td>웨딩홀 및 신부대기실 꽃장식</td>
				</tr>
				<tr>
				<td>재즈 3중주</td>
				</tr>
				<tr>
				<td>포토테이블</td>
				</tr>
				<tr>
				<td>신랑, 신부 스테이크 제공</td>
				</tr>
			</table>
			<div>
				<button>예약.</button>
			</div>
    </div>
  );
};

export default Ceremony;
