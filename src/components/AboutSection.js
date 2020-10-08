import React from 'react';
import { Container } from 'react-bootstrap/';
import '../styles/aboutSection.scss';

 export default function AboutSection() {
   return (
    <Container fluid className='aboutContainer'>
      <Container className='d-flex flex-column h-100 justify-content-center'>
        <h2 className="text-dark">Om Matrix Insurance AS</h2>
        <p className="text-dark lead">Matrix Insurance AS er en forsikringsformidler som er registrert i Finanstilsynet. Vi representerer QBE Europe SA/NV på formidling av lovpålagte yrkesskadeforsikringer. I tillegg representer vi Maiden Life Försäkrings AB på alle andre personalforsikringer, samt IGI (International General Insurance UK Limited) på alle former for garantier. Vi har i tillegg avtale med norske forsikringsselskaper som LY Forsikring, Storebrand og Gouda.</p>
        <p className="text-dark lead">Matrix ble etablert i 1991 og forvalter i dag personforsikrings- og garantiprogram for ca. 60 000 ansatte innen ulike yrkeskategorier, fordelt på over 6 000 bedrifter.</p>
        <p className="text-dark lead">Matrix har 16 ansatte med høy kompetanse og integritet. Vi jobber hver dag for å tilfredsstille alle våre nåværende og fremtidige kunder, og har som mål å være den beste leverandøren av forsikringer og garantier i Norge.</p>
      </Container>
    </Container>
   );
 }