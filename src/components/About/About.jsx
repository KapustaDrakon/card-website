import React from 'react';

import './About.css';
import photo from '../../assets/image/photo.png';

const About = () => {
  return (
    <section className="about__container" id="about">
      <h2 className="about__title">Давайте познакомимся</h2>
      <div className="about__content">
        <div className="about__photo _animation-item _no-hide">
          <img src={photo} alt="photo" className="photo" />
        </div>
        <div className="about__text _animation-item _no-hide">
          <p>
            Я, <b>Куликова Наталья Владимировна.</b>
          </p>
          <p>Врач акушер-гинеколог, репродуктолог, врач-ультразвуковой диагностики. Кандидат медицинских наук.</p>
          <p>
            Активно занимаюсь эстетической гинекологией (интимный филлинг, лабиопластика), диагностикой и лечением
            бесплодия, привычного невынашивания беременности, нарушения менструального цикла, патологии шейки матки.
            Провожу лечение внутриматочной патологии (полип, гиперплазия эндометрия, внутриматочные синехии, субмукозная
            миома матки).
          </p>
          <p>
            Веду очный прием в{' '}
            <a href="https://df.clinic/" className="about__link">
              DELTA FERTILITY CLINIC
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
