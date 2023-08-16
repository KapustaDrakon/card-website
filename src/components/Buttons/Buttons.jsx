import React from 'react';

import './Buttons.css';

import whatsapp from '../../assets/image/whatsapp.png';
import delta from '../../assets/image/delta.png';
import online from '../../assets/image/online.png';

const Buttons = () => {
  return (
    <section className="buttons__container" id="buttons">
      <h2 className="buttons__title">Запись на приём</h2>
      <div className="buttons__content _animation-item _no-hide">
        <a href="https://api.whatsapp.com/send?phone=79213656555" className="buttons__whatsapp">
          <img src={whatsapp} className="buttons__logo" />
          <span className="buttons__text">Whatsapp +7921 365-65-55</span>
        </a>
        <a href="tel:88126550655" className="buttons__delta">
          <img src={delta} className="buttons__logo" />
          <span className="buttons__text">Звонок в клинику 88126550655</span>
        </a>
        <a
          href="https://vmedcentre.ru/video-konsultatsiya/?MU_ID=34903&DOC_ID=15262&NOSCHEDULE=1"
          className="buttons__online"
        >
          <img src={online} className="buttons__logo" />
          <span className="buttons__text">Online консультации</span>
        </a>
      </div>
    </section>
  );
};

export default Buttons;
