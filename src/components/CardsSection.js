import React from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap/';
import '../styles/cardsSection.scss';
import card001 from '../images/card001.jpg';
import card002 from '../images/card002.jpg';
import card003 from '../images/card003.jpg';
import card004 from '../images/card004.jpg';

export default function CardsSection() {
  return (
    <Container className='cardsSectionContainer'>
      <div className='cardsSectionTitle'>
        <h2 className="text-center text-dark">Finn en forsikring i dag</h2>
        <p className="text-center text-dark lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>
      </div>
      <CardDeck>
        <Card className='shadow'>
          <Card.Img variant="top" src={card001} />
          <Card.Body>
            <Card.Title>Garantier</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button block variant="outline-secondary">Søk på Garanti i dag</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={card002} />
          <Card.Body>
            <Card.Title>Yrkesakade</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button block variant="outline-secondary">Meld Skade</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={card003} />
          <Card.Body>
            <Card.Title>Byggsikkerhetsgaranti</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button block variant="outline-secondary">Søk på Garanti i dag</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={card004} />
          <Card.Body>
            <Card.Title>Bilforsikring</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button block variant="outline-secondary">Søk Bilforsikring</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}