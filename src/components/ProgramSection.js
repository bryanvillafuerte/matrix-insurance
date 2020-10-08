import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap/';
import '../styles/programSection.scss';

export default function ProgramSection() {
  return (
    <Container fluid className='programSectionContainer shadow'>
      <Row>
        <Col className='programSectionItem' md={6}>
          <div>
            <h2 className='text-center text-dark display-4'>Fordelsprogram</h2>
            <p className="text-center text-dark lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>
            <p className="text-center text-dark lead">Consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>
            <Button block>Søk på Garanti i dag</Button>
          </div>
        </Col>
        <Col className='programSectionItem rightItem' md={6}>
          <div>
            <h2 className='text-center text-light display-4'>ASP</h2>
            <p className="text-center text-light lead">Consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>
            <p className="text-center text-light lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>
            <Button block>Søk på Garanti i dag</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}