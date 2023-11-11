

import React, { useState } from 'react';
import { LiaHomeSolid } from "react-icons/lia";
import { FiPlus,FiSettings,FiMail } from "react-icons/fi";
 import { FaRegUser } from "react-icons/fa";
 import { HiOutlineVideoCamera,HiOutlineKey,HiOutlineCamera } from "react-icons/hi";
 import { IoGameControllerOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const MenuBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  console.log(activeLink)

  return (
    <ul className={`menu ${menuActive ? 'active' : ''}`}>
      <div className={`toggle ${menuActive ? 'active' : ''}`} onClick={handleMenuToggle}><FiPlus /></div>
     <li style={{ '--i': 0 }} className={` ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}><Link to="#"><LiaHomeSolid /></Link></li>
     <li style={{ '--i': 1 }} className={` ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}><Link to="#"><FaRegUser /></Link></li>
     <li style={{ '--i': 2 }} className={` ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}><Link to="#"><FiSettings /></Link></li>
     <li style={{ '--i': 3 }} className={` ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}><Link to="#"><FiMail /></Link></li>
     <li style={{ '--i': 4 }} className={` ${activeLink === 4 ? 'active' : ''}`} onClick={() => handleLinkClick(4)}><Link to="#"><HiOutlineVideoCamera /></Link></li>
     <li style={{ '--i': 5 }} className={` ${activeLink === 5 ? 'active' : ''}`} onClick={() => handleLinkClick(5)}><Link to="#"><HiOutlineKey /></Link></li>
     <li style={{ '--i': 6 }} className={` ${activeLink === 6 ? 'active' : ''}`} onClick={() => handleLinkClick(6)}><Link to="#"><IoGameControllerOutline /></Link></li>
     <li style={{ '--i': 7 }} className={` ${activeLink === 7 ? 'active' : ''}`} onClick={() => handleLinkClick(7)}><Link to="#"><HiOutlineCamera /></Link></li>
     <div className="indicator"></div>
    </ul>
  );
};
export default MenuBar;
