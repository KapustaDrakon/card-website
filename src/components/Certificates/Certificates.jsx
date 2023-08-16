import React from 'react';

import './Certificates.css';

const Certificates = () => {
  return (
    <section className="certificates__container" id="certificates">
      <h2 className="certificates__title">Сертификаты</h2>
      <ul className="certificates__content">
        <li>
          <b>Аккредитация по акушерству и гинекологии.</b> Годна до 28.02.2027.
        </li>
        <li>
          <b>Ультразвуковая диагностика.</b> Годен до 06.12.2026
        </li>
      </ul>
    </section>
  );
};

export default Certificates;
