import React from 'react'
import "../Css/curso.css";
import { FaComment } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

const Curso = () => {

  return (
    <>
      <div className="contenedor-curso-principal">
        <img src="https://i0.wp.com/certidemy.com/wp-content/uploads/2020/04/CPPF2.jpg?resize=400%2C300&ssl=1" alt="curso" className='contenedor-curso-imagen'/>
        <div className='contenedor-curso-medio'>
            <p>Certidemy</p> 
            <strong>C++ Foundation - CPPF</strong>
        </div>
        <div className='contenedor-curso-bajo'>
          <span><FaComment /> 3076</span> <span><MdGroups /> 8</span>
        </div>
      </div>
    </>
  )
}




export default Curso

