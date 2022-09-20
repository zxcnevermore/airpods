import React from 'react'

const NavLinks = () => {



  return (

    <ul>
      <li onClick={() => window.scrollTo(0, 0)}>
        <img src="img/airpods.png" alt="logo"></img>
      </li>
      <li onClick={() => window.scrollTo(0, 500)}>
        ОСОБЕННОСТИ
      </li>
      <li onClick={() => window.scrollTo(0, 1500)}>
        ФОТО
      </li>
      <li onClick={() => window.scrollTo(0, 1500)}>
        ХАРАКТЕРИСТИКИ
      </li>
      <li onClick={() => window.scrollTo(0, 6800)}>
        ДОСТАВКА И ОПЛАТА
      </li>
      <li>
        <img src="img/tel.svg" alt="tel"></img>
        +7 (926) 738 33 08
      </li>
    </ul>

  )
}

export default NavLinks
