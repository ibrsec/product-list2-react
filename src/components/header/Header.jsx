import React from 'react'
import headerStyle from './Header.module.scss';
import { Container } from 'react-bootstrap';


const Header = () => {
  return (
    <header>
        <Container>
            <h1 className={'text-center pb-4 pt-5 ' + headerStyle.h1Header}>Product List 2</h1>
        </Container>
    </header>
  )
}

export default Header;