import React from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap/';
import '../styles/newsSection.scss';
import image003 from '../images/image003.jpg'
import image004 from '../images/image004.jpg'
import image005 from '../images/image005.jpg'
import image006 from '../images/image006.jpg'

export default function NewsSection() {
  return (
    <Container className='newsContainer'>
      <h2 className='text-dark text-center display-4'>Siste nytt fra Matrix Insurance</h2>
      <p className="text-center text-dark lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit.</p>

      <CardDeck>
        <Card className='shadow'>
          <Card.Img variant="top" src={image003} />
          <Card.Body>
            <Card.Title>Ny risikogiver for Matrix vedrørende personforsikring</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button variant="link">Les mer...</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={image004} />
          <Card.Body>
            <Card.Title>Nyoppdatering</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button variant="link">Les mer...</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={image005} />
          <Card.Body>
            <Card.Title>Yrkeskadeforsikring</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button variant="link">Les mer...</Button>
          </Card.Body>
        </Card>
        <Card className='shadow'>
          <Card.Img variant="top" src={image006} />
          <Card.Body>
            <Card.Title>Covid-19 oppdatering</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
            </Card.Text>
            <Button variant="link">Les mer...</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}