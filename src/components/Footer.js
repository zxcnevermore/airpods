import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="delivery-body">
        <h1>Доставка и оплата</h1>
        <div className="main">
          <div className="delivery">
            <img src='/img/delivery.svg' alt='delivery'></img>
            <h1>ВИДЫ ДОСТАВОК</h1>
            <ol>
              <li>Бесплатная доставка в пределах МКАД.</li>
              <li>Доставка до 20 км от  МКАД рассчитывается по стоимости исходя от расстояния.</li>
              <li>Доставка в регионы осуществляется почтой России по полной предоплате.</li>
            </ol>
          </div>
          <div className="order">
            <img src='/img/cash.svg' alt='delivery'></img>
            <h1>СПОСОБ ОПЛАТЫ</h1>
            <ol>
              <li>Курьеру при получении (по Москве и в пределах 20 км от МКАД).</li>
              <li>Оплата через мобильный телефон(перевод денежный средств путем Сбербанк Онлайн).</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
