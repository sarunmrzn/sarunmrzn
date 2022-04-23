import React from "react";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import { FiGrid } from "@react-icons/all-files/fi/FiGrid";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Header = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <FaHome size={36} />
        </li>
        <li>
          <IoIosContact size={36} />
        </li>
        <li>
          <FiGrid size={36} />
        </li>
        <li>
          <AiOutlineMail size={36} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
