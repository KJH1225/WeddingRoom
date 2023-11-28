import React, { useState, useEffect } from "react";
import './Customer.scss';
import AccordionItem from './Accordion';
import axios from 'axios';
import { API_URL } from '../../config/contansts';

const Customer = () => {
  const [categories, setCategories] = useState([]); // FAQ 카테고리 데이터
  const [selectedCategory, setSelectedCategory] = useState({}); // 선택된 FAQ 카테고리
  const [searchT, setSearchT] = useState(''); // 검색어

  useEffect(() => { // FAQ 데이터를 불러오기 위한 useEffect
    axios.get(`${API_URL}/faq`)
      .then(response => {
        //console.log("response:",response);
        setCategories(response.data); // FAQ 데이터 설정
        setSelectedCategory({ category: '전체' }); // 초기에 전체 카테고리를 선택
      })
      .catch(error => console.error('에러:', error));
  }, []); // 빈 배열을 두어 한 번만 실행되도록 설정

  const handleCategory = (category) => { // FAQ 카테고리 선택 시 호출되는 함수
    setSelectedCategory(category);
  };

  const handleSearch = (e) => { // 검색어 입력 시 호출되는 함수
    setSearchT(e.target.value);
  };
  // 중복되지 않는 카테고리 목록 생성
  const uniqueCategories = Array.from(new Set(categories.map(category => category.category)));

  return (
    <div className="customer-container">
      <h2 className="center">CUSTOMER</h2>
      <h1 className="center">FAQ</h1>
      <div className="search-container">
        {/* FAQ 카테고리 선택 드롭다운 */}
        <div className="dropdown">
          {/* select 사용하여 드롭다운 메뉴를 생성 */}
          <select className="dropmenu"
            // 현재 선택된 카테고리 값을 설정
            value={selectedCategory.category}
            // 새로운 카테고리를 선택할 때 호출되는 함수
            onChange={(e) => handleCategory({ category: e.target.value })}
          >
            {/* 전체와 중복되지 않는 카테고리 목록을 map하여 옵션으로 생성 */}
            {[...uniqueCategories].map(categoryName => (
              // 각 카테고리에 대한 옵션을 생성, 해당 카테고리 값을 옵션의 값으로 설정
              <option key={categoryName} value={categoryName}>{categoryName}</option>
            ))}
          </select>
        </div>

        <input
          className="custom-input"
          type="text"
          value={searchT}
          onChange={handleSearch}
          placeholder="검색"
        />
      </div>
      {/* FAQ 카테고리 선택 버튼 그룹 */}
      <div className="category-buttons">
        {/* uniqueCategories 배열을 map하여 각 카테고리에 대한 버튼을 생성 */}
        {uniqueCategories.map(categoryName => (
          <button
            // 각 버튼에 대한 고유한 키를 설정
            key={categoryName}
            // 사용자가 버튼을 클릭할 때 호출되는 함수
            onClick={() => handleCategory({ category: categoryName })}
            // 현재 선택된 카테고리와 버튼 카테고리가 일치하는지 확인, 일치하면 active
            className={selectedCategory.category === categoryName ? 'active' : ''}
          >
            {/* 버튼에 표시될 카테고리 이름 */}
            {categoryName}
          </button>
        ))}
      </div>

      {/* FAQ 카테고리에 따라 질문과 답변을 보여주는 부분 */}
      <div className="accordion-container">
        {selectedCategory.category && selectedCategory.category !== '전체' ? (
          <div>
            {/* 선택된 카테고리가 전체가 아닌 경우 */}
            {categories
              .filter(category => category.category === selectedCategory.category)
              // 검색어(searchT)에 따라 필터링
              // 이름이랑 설명 중 대소문자 포함 비교해서 보여줌
              .filter(item =>
                item.name.toLowerCase().includes(searchT.toLowerCase()) ||
                item.description.toLowerCase().includes(searchT.toLowerCase())
              )
              .map((item, index) => (
                // 각각의 질문과 답변을 보여주는 AccordionItem 컴포넌트를 렌더링
                <AccordionItem key={index} category={item} item={item} />
              ))}
          </div>
        ) : (
          <div>
            {/* 선택된 카테고리가 전체인 경우 */}
            {categories
              .filter(category => category.category !== '전체')
              .filter(item =>
                item.name.toLowerCase().includes(searchT.toLowerCase()) ||
                item.description.toLowerCase().includes(searchT.toLowerCase())
              )
              .map((item, index) => (
                // 각각의 질문과 답변을 보여주는 AccordionItem 컴포넌트를 렌더링
                <AccordionItem key={index} category={item} item={item} />
              ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Customer;

//나 너무 힘들어......... 데이터 너무 많아..