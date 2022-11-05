import React from "react";
import "../Css/header.css";
import Logo from "../Imagenes/logo-certidemy3.png";
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-left">
          <div className="elemento-header-up-left">
            <span>¿Tiene alguna consulta?</span>
          </div>
          <div className="elemento-header-up-left">
            <AiFillPhone className="icon1" />
            <a href="#">+504 3349-1250</a>
          </div>
          <div className="elemento-header-up-left">
            <IoIosMail className="icon1" />
            <a href="#">info@certidemy.com</a>
          </div>
        </div>

        <div className="header-up-right">
          <div className="elemento-header-up-right">
            <a href="">Soy nuevo, quiero certificarme</a>
          </div>
          <div className="elemento-header-up-right">
            <a href="">Iniciar sesión</a>
          </div>
        </div>
      </div>

      <div className="header-down">
        <div className="header-down-left">
          <img src={Logo} alt="" />
        </div>

        <div className="header-down-right">
          <nav>
            <a href="">INICIO</a>
            <a href="">
              <span>CERTIFICACIONES</span>
            </a>
            <a href="">VERIFICAR CREDENCIAL</a>
            <a>
              <AiOutlineSearch className="icon2" id="icon2" />
            </a>
            <a>
              <BsCartCheck className="icon2" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
