import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav-container">
        <a href="#about" className="header__nav-link">
          Обо мне
        </a>
        <a href="#buttons" className="header__nav-link">
          Запись
        </a>
        <a href="#education" className="header__nav-link">
          Образование
        </a>
        <a href="#certificates" className="header__nav-link">
          Сертификаты
        </a>
      </div>
      <div className="header__title _animation-item _no-hide">
        Добро пожаловать в пространство женского здоровья и красоты
      </div>
    </header>
  );
};

export default Header;
