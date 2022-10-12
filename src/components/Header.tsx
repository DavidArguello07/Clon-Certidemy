import React from "react";
import "../Css/header.css";
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-left">
          <nav>
            <span>¿Tiene alguna consulta?</span>
            <a href="#"> <AiFillPhone className="icon"/>  +504 3349-1250 </a>
            <a href="#"><IoIosMail  className="icon"/>  info@certidemy.com</a>
          </nav>
        </div>

        <div className="header-up-right">
          <nav>
            <a href="">Soy nuevo, quiero certificarme</a>
            <a href="">Iniciar sesión</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;