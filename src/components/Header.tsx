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
          <nav>
            <span>¿Tiene alguna consulta?</span>
            <a href="#">
              <AiFillPhone className="icon1" />
              +504 3349-1250
            </a>
            <a href="#">
              <IoIosMail className="icon1" />
              info@certidemy.com
            </a>
          </nav>
        </div>

        <div className="header-up-right">
          <nav>
            <a href="">Soy nuevo, quiero certificarme</a>
            <a href="">Iniciar sesión</a>
          </nav>
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
              <div className="dropdown">
                <span>CERTIFICACIONES</span>
                <div className="dropdown-content">
                  <p>
                    <div className="dropdown">
                      <span>Agilidad</span>
                      
                    </div>
                  </p>
                  <p>Hola</p>
                  <p>Hola</p>
                  <p>Hola</p>
                </div>
              </div>
            </a>
            <a href="">VERIFICAR CREDENCIAL</a>
            <a href="">
              <div className="dropdown">
                <span>NOSOTROS</span>
                <div className="dropdown-content">
                  <p>Hola</p>
                  <p>Hola</p>
                  <p>Hola</p>
                  <p>Hola</p>
                </div>
              </div>
            </a>
            <a href="">
              <AiOutlineSearch className="icon2" id="icon2" />
            </a>
            <a href="">
              <BsCartCheck className="icon2" />
            </a>
          </nav>
        </div>

      </div>
    </div>
  );
};

export default Header;
