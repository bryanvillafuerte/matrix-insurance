import React from 'react';
import { Card, Button } from 'react-bootstrap/';

export default function OrgItems(props) {
  return (
    <Card className='shadow'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper est sed lobortis hendrerit. Nam ut laoreet massa. Donec iaculis, tortor quis aliquet condimentum.
        </Card.Text>
        <Button className='shadow' block>Les Mer</Button>
      </Card.Body>
    </Card>
  );
}