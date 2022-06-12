import React from 'react'

const Footer = ({bg_color}) => {
  return (
    <footer className={`text-gray-500 ${bg_color} w-full flex justify-center pt-32 pb-5 lg:pb-20`}>
      <div className="md:w-1/2">

        <span>¿Preguntas? Llama al 0800 345 1593</span>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-3 mt-7 text-sm">
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Términos de uso</a>
          <a href="#">Privacidad</a>
          <a href="#">Preferencias de cookies</a>
          <a href="#">Información corporativa</a>

        </div>
      </div>


    </footer>
  )
}

export default Footer