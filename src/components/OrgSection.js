import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import '../styles/orgSection.scss';
import OrgItems from './OrgItems';
import Select from 'react-select';
import asvl from '../images/asvl.png';
import boligprodusentene from '../images/boligprodusentene.png';
import eba from '../images/EBA.png';
import elektronikk from '../images/elektronikk-e1551869503912.png';
import iktNorge from '../images/ikt-norge.png';
import mlf from '../images/mlf-1.png';

export default function OrgSection() {
  const data = [
    {
      value: "AVSL - Arbeidsgiverforening for Vekst- og attføringsbedrifter",
      image: asvl,
      label: "Arbeidsgiverforening for Vekst- og attføringsbedrifter"
    },
    {
      value: "Boligprodusentene",
      image: boligprodusentene,
      label: "Boligprodusentene"
    },
    {
      value: "EBA - Entreprenørforeningen Bygg og Anlegg",
      image: eba,
      label: "Entreprenørforeningen Bygg og Anlegg"
    },
    {
      value: "Elektronikkbransjen",
      image: elektronikk,
      label: "Elektronikkbransjen"
    },
    {
      value: "IKT Norge",
      image: iktNorge,
      label: "IKT Norge"
    },
    {
      value: "MLF - Maler- og Byggtapetsermestrenes Landsforbund",
      image: mlf,
      label: "Maler- og Byggtapetsermestrenes Landsforbund"
    }
  ];
  
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState();
  const [selectedImage, setSelectedImage] = useState();
  
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
    setSelectedImage(e.image);
  }

  return (
    <Container fluid className='orgSectionContainer'>
      <Container>
        <Row className='d-flex h-100'>
          <Col md={6} className='d-flex flex-column h-100 justify-content-center'>
            <h2 className='text-dark display-4'>Medlem av forening?</h2>
            <p className="text-dark lead">Velg forening her for å se hvilke tilbud vi har.</p>

            <Select
              placeholder="Velg foreningen"
              value={data.find(obj => obj.value === selectedValue)} // set selected value
              options={data} // set list of the data
              onChange={handleChange} // assign onChange function
            />
          </Col>

          <Col md={6} className='d-flex flex-column h-100 justify-content-center'>
            {selectedValue && <div>
              <OrgItems id='orgDisplay' title={selectedValue} image={selectedImage} />
            </div>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}