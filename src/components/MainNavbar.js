import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap/';
import '../styles/mainNavbar.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function MainNavbar() {
  return (
    <Container className='navbarContainer' fluid>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll>
          <AppBar color='transparent' elevation={0}>
            <Toolbar>
              <Navbar variant='dark' expand='md' fixed="top" collapseOnSelect={true}>
                <Container>
                  <Navbar.Brand href="/">
                    <svg width="125" height="40" viewBox="0 0 125 40" fill="#f2f2f2" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M29.1758 39.0879C30.3914 39.772 33.9168 40.6842 36.5609 39.2019C37.3815 38.5177 38.7856 36.3056 36.7432 33.3866C36.4697 33.0825 35.4304 32.2919 33.461 32.0182C31.4916 31.7446 30.9385 30.6119 30.9081 30.0798C30.7561 29.2816 30.9811 27.6624 33.0963 27.5712C35.2115 27.48 36.6521 27.9133 37.108 28.1413L37.2903 28.2554V26.8871C36.9256 26.621 35.7221 26.0889 33.8257 26.0889C32.0516 26.0889 31.8415 26.1887 31.2245 26.4816C31.182 26.5018 31.1375 26.5229 31.0905 26.545C30.5434 26.811 29.4311 27.8449 29.3582 29.8517C29.2852 31.8586 30.4218 32.6644 30.9993 32.8164L34.6462 33.9567C35.3149 34.1467 36.5609 35.1426 36.1962 36.6933C35.8617 38.1157 35.2667 38.3165 35.0577 38.387C35.0388 38.3934 35.023 38.3987 35.0109 38.4037C34.9031 38.4487 33.4148 38.7215 32.0022 38.5177C31.1341 38.3925 30.7264 38.2623 30.279 38.1194C29.9984 38.0297 29.7022 37.9351 29.267 37.8336H29.1758V39.0879ZM0 38.7458V39.8861H8.20566V38.7458H5.0146V27.5712H8.20566V26.3169H0V27.5712H3.2823V38.7458H0ZM14.8614 26.3169V39.8861H16.3202V29.0535L21.2436 39.8861H22.7936V26.3169H21.2436V36.8073L16.3202 26.3169H14.8614ZM43.8549 26.3169H45.4048V37.0354C45.4048 38.2213 46.3774 38.5177 46.8636 38.5177H48.9606C49.9089 38.5177 50.1459 37.5295 50.1459 37.0354V26.3169H51.6959V37.7196C51.6959 38.9739 50.5106 40.0001 49.69 40.0001H45.8607C44.7666 40.0001 43.8549 38.6318 43.8549 37.7196V26.3169ZM58.7163 40.0001V26.3169H63.5485H64.0955C65.0681 26.3549 67.0132 27.1379 67.0132 29.9658C67.0739 30.992 66.6849 33.1813 64.6426 33.7286C65.0985 33.8046 66.2108 35.1654 67.0132 40.0001H65.0985C64.8857 38.2517 64.1685 34.618 63.0014 34.0707H60.3574V40.0001H58.7163ZM76.0394 26.3169L72.0277 40.0001H73.8512L74.763 36.8073H79.6864L80.5069 40.0001H82.3304L78.3187 26.3169H76.0394ZM87.892 40.0001V26.3169H89.3509L94.2743 36.5793V26.3169H95.733V40.0001H94.2743L89.3509 29.1676V40.0001H87.892ZM102.298 33.1585C102.298 39.2703 105.124 40.0001 107.586 40.0001C109.701 40.0001 110.716 39.544 110.959 39.3159V37.8336C110.473 38.0996 109.117 38.6318 107.586 38.6318C105.671 38.6318 103.665 37.1494 103.665 33.1585C103.665 29.1676 105.489 27.4572 107.677 27.4572C109.427 27.4572 110.594 27.9893 110.959 28.2554V26.8871C110.303 26.2485 108.437 26.0889 107.586 26.0889C105.671 26.0889 102.298 27.0467 102.298 33.1585ZM117.433 40.0001V26.0889H125V27.6852H118.891V31.6762H124.726V32.9305H118.891V38.2897H125V40.0001H117.433ZM75.0365 35.211L77.1335 27.4572L79.3217 35.211H75.0365ZM60.3574 32.4743V27.7993H63.4574C64.126 27.8373 65.4632 28.3694 65.4632 30.1938C65.4632 32.0182 64.126 32.4743 63.4574 32.4743H60.3574Z"></path> <path fillRule="evenodd" clipRule="evenodd" d="M21.6255 23.7696L28.0418 0.00463867H34.2206L40.8745 23.7696H35.884L34.9335 19.1326H27.5666L26.616 23.7696H21.6255ZM28.5171 15.6548L31.1312 3.48245L33.9829 15.6548H28.5171Z"></path> <path d="M0.950571 0.00488281L0 23.7699H4.27757L4.9905 7.54012L9.50571 15.9448L14.2586 7.54012L14.9715 23.7699H19.2491L18.0608 0.00488281H14.4962L9.50571 9.27903L4.51521 0.00488281H0.950571Z"></path> <path d="M48.2415 3.77226V23.7696H52.9943V3.77226H59.886V0.00463867H41.3499V3.77226H48.2415Z"></path> <path fillRule="evenodd" clipRule="evenodd" d="M65.114 23.7702V0.00525713H73.4315C75.8871 -0.091348 80.7984 1.10656 80.7984 6.67105C80.7984 12.2355 77.7091 13.047 76.5209 13.3368C77.313 13.7233 79.2775 16.3509 80.7984 23.7702H75.3327C74.8574 20.5823 73.5266 14.2063 72.0056 14.2063H69.8669V23.7702H65.114ZM69.8669 10.4387V3.77288H74.1444C74.7782 3.86949 76.0456 4.64234 76.0456 6.96087C76.1248 7.92693 75.8555 9.97496 74.1444 10.4387H69.8669Z"></path> <path d="M112.643 11.3075L105.989 23.7696H111.692L115.494 14.4955L119.297 23.7696H125L118.584 11.3075L125 0.00463867H119.297L115.494 8.40933L111.692 0.00463867H105.989L112.643 11.3075Z"></path><path d="M86.0266 20.5816V23.7696H101.711V20.5816H96.2452V3.33797H101.711V0.00463867H86.0266V3.19263L91.4924 3.33797V20.5816H86.0266Z"></path>  </svg>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='basic-navbar-nav' />

                  <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                      <Nav.Link href="/" className='ml-auto text-light'>Garantier</Nav.Link>
                      <Nav.Link href="/" className='ml-auto text-light'>Forsikringer</Nav.Link>
                      <Nav.Link href="/" className='ml-auto text-light'>Fordelsprogram</Nav.Link>
                      <Nav.Link href="/" className='ml-auto text-light'>Meld Skade</Nav.Link>
                      <Nav.Link href="/" className='ml-auto text-light'>Nyheter</Nav.Link>
                      <Nav.Link className='ml-auto text-light'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                          <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                      </Nav.Link>
                      <div className="soMeLinks ml-auto">
                        <Nav.Link className='ml-auto text-light'>
                          <i className="fab fa-linkedin-in"></i>
                        </Nav.Link>
                        <Nav.Link className='ml-auto text-light'>
                          <i className="fab fa-facebook-f"></i>
                        </Nav.Link>
                      </div>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
      
    </Container>
  );
}