import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/fuzeto">
        <img src="https://static.thenounproject.com/png/670410-200.png" alt="Logo Alura" width="40" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://github.com/fuzeto/react-gardenflix">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
