// components/Header.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";;

function Header({ setActiveItem, activeItem }) {
  // Trạng thái để kiểm soát việc mở/đóng menu trên mobile
  const [isMobile, setIsMobile] = useState(false);

  // Xử lý toggle menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
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
            onClick={() => handleItemClick("home")}
          >
            Trang chủ
          </li>
          <li
            className={activeItem === "income" ? "active" : ""}
            onClick={() => handleItemClick("income")}
          >
            Thu Nhập
          </li>
          <li
            className={activeItem === "expenses" ? "active" : ""}
            onClick={() => handleItemClick("expenses")}
          >
            Chi tiêu
          </li>
          <li
            className={activeItem === "group" ? "active" : ""}
            onClick={() => handleItemClick("group")}
          >
            Nhóm
          </li>
          <li
            // className={activeItem === "profile" ? "active" : ""}
            // onClick={() => handleItemClick("profile")}
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
