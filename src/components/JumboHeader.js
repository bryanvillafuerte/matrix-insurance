import React from 'react';
import { Jumbotron, Container, Dropdown } from 'react-bootstrap/';
import '../styles/jumboHeader.scss';
import {useSpring, animated} from 'react-spring'

export default function JumboHeader() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <Jumbotron fluid>
      <Container className='d-flex flex-column h-100 justify-content-center'>
        <animated.div style={props}>
          <h1 className='display-1 text-dark ml-auto'>Møt Usikkerhet med sikkerhet</h1>
        </animated.div>
        
        <p className='text-dark ml-auto'>Matrix Insurance sin hovedprioritet er å beskytte mennesker og bedrifter ved gode forsikringsdekninger og oppfølging. Med den siste utviklingen av koronaviruset (Covid-19), er vi opptatt av å opprettholde helse og sikkerhet for våre kunder og våre medarbeider.</p>

        <div className="dropdownContainer ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='shadow'>
              Hvor vil du begynne?
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Hvordan kan jeg finne det jeg trenger?</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Få mitt personlige tilbud.</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Hvilken forsikring som er riktig for meg?</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Jumbotron>
  );
}