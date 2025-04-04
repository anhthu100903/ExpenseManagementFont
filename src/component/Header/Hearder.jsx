// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";;

function Header({ setActiveItem, activeItem }) {
  // Trạng thái để kiểm soát việc mở/đóng menu trên mobile
  const [isMobile, setIsMobile] = useState(false);

  // Xử lý toggle menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header">
      {/* Thay h1 bằng thẻ img */}
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="header-logo" /> */}
        <h4>Anh Thư</h4>
      </div>
      <nav>
        <ul className={isMobile ? "nav-links nav-active" : "nav-links"}>
          <li
            className={activeItem === "home" ? "active" : ""}
          >
            <Link to="/home" >Trang Chủ</Link>
          </li>
          <li
            className={activeItem === "income" ? "active" : ""}
          >
            <Link to="/income">Thu Nhập</Link>
          </li>
          <li
            className={activeItem === "expenses" ? "active" : ""}
          >
            <Link to="/expenses">Chi Tiêu</Link>
          </li>
          <li
            className={activeItem === "group" ? "active" : ""}
          >
            <Link to="/group">Nhóm</Link>
          </li>
          <li
            // className={activeItem === "profile" ? "active" : ""}
          >
            Hồ sơ
          </li>
        </ul>
      </nav>

      {/* Icon Hamburger/Close cho mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
    
  );
}

export default Header;
