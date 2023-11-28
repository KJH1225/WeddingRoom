import React from "react";
import { NavLink } from "react-router-dom";
import './Products.scss';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        <li><NavLink to="/product/prodpho">웨딩 본식 상품</NavLink></li>
        <li><NavLink to="/product/prodmov">사진 촬영</NavLink></li>
        <li><NavLink to="/product/prodhair">헤어&메이크업</NavLink></li>
        <li><NavLink to="/product/prodbooth">포토부스</NavLink></li>
        <li><NavLink to="/product/prodetc">축가/사회</NavLink></li>
        <li><NavLink to="/product/prodcar">웨딩카</NavLink></li>
        <li><NavLink to="/product/prodbow">폐백</NavLink></li>
        <li><NavLink to="/product/prodwdmg">웨딩관리</NavLink></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
