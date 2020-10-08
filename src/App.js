import React from 'react';
import { Container } from 'react-bootstrap/';
import { Divider } from '@material-ui/core';
import MainNavbar from './components/MainNavbar';
import JumboHeader from './components/JumboHeader';
import CardsSection from './components/CardsSection';
import OrgSection from './components/OrgSection';
import ProgramSection from './components/ProgramSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Container fluid className='mainContainer'>

      <MainNavbar />

      <JumboHeader />

      <CardsSection />

      <Container>
        <Divider />
      </Container>

      <OrgSection />

      <Divider />
      <ProgramSection />
      <Divider />

      <NewsSection />

      <AboutSection />

      <Footer />

    </Container>
  );
}

export default App;
