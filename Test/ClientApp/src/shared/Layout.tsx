import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './Navmenu/NavMenu';

interface IProps {
  children: JSX.Element | JSX.Element[]
}

export function Layout(props: IProps) {

  return (
    <div>
      <NavMenu />
      <Container tag="main">
        {props.children}
      </Container>
    </div>
  );
}
