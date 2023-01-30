import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Form, 
  Input,
  NavItem
} from 'reactstrap';
import logo from '../app/assets/img/logos/click-promote-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faTiktok, faInstagram, faFacebook, faLinkedin, faDiscord  } from '@fortawesome/free-brands-svg-icons';
import styles from './css/Header.module.css';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar id={styles.navbarHeader} expand='md' color='black' dark className='align-items-center'>
        <NavbarBrand href='/'  className='ms-5'>
          <img src={logo} height='75px'/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto fs-4' navbar>
            <NavItem className='px-2 mx-5 fs-4'>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sort By
                </DropdownToggle>
                <DropdownMenu className='fs-5' end>
                  <DropdownItem>Newly Added</DropdownItem>
                  <DropdownItem>Popular</DropdownItem>
                  <DropdownItem>Trending</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            {/* <NavItem className='px-2 mx-5'>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social Network
                </DropdownToggle>
                <DropdownMenu className='fs-5' end>
                  <DropdownItem><FontAwesomeIcon icon={faYoutube} /> YouTube</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faTwitter} /> Twitter</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faTiktok} /> TikTok</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faInstagram} /> Instagram</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faFacebook} /> Facebook</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</DropdownItem>
                  <DropdownItem><FontAwesomeIcon icon={faDiscord} /> Discord</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem> */}
            {/* <NavItem className='px-2 mx-5'>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu  className='fs-5' id={styles.dropMenu} color="black" end>
                <DropdownItem>animals</DropdownItem>
                <DropdownItem>art</DropdownItem>
                <DropdownItem>ASMR</DropdownItem>
                <DropdownItem>beauty</DropdownItem>
                <DropdownItem>books</DropdownItem>
                <DropdownItem>business</DropdownItem>
                <DropdownItem>cooking</DropdownItem>
                <DropdownItem>comedy</DropdownItem>
                <DropdownItem>conspiracy</DropdownItem>
                <DropdownItem>cryptocurrency</DropdownItem>
                <DropdownItem>dancing</DropdownItem>
                <DropdownItem>DIY</DropdownItem>
                <DropdownItem>education</DropdownItem>
                <DropdownItem>faceless</DropdownItem>
                <DropdownItem>family</DropdownItem>
                <DropdownItem>fashion</DropdownItem>
                <DropdownItem>gaming</DropdownItem>
                <DropdownItem>lifestyle</DropdownItem>
                <DropdownItem>livestream</DropdownItem>
                <DropdownItem>new age</DropdownItem>
                <DropdownItem>magic</DropdownItem>
                <DropdownItem>maker</DropdownItem>
                <DropdownItem>movies</DropdownItem>
                <DropdownItem>music</DropdownItem>
                <DropdownItem>pranks</DropdownItem>
                <DropdownItem>reaction</DropdownItem>
                <DropdownItem>religion</DropdownItem>
                <DropdownItem>shopping</DropdownItem>
                <DropdownItem>science</DropdownItem>
                <DropdownItem>sports</DropdownItem>
                <DropdownItem>tech</DropdownItem>
                <DropdownItem>toys</DropdownItem>
                <DropdownItem>travel</DropdownItem>
                <DropdownItem>unboxing</DropdownItem>
                <DropdownItem>vlog</DropdownItem>
                <DropdownItem>whiteboard</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem> */}
          </Nav>
          <Form className='me-5'>
            <div className="input-group mb-3">
              <Input type="text" className="form-control" placeholder="Search"  id={styles.searchBar}/>
              <div className="input-group-append">
                <Button className="btn fs-5" type="search" id={styles.searchButton}>Submit</Button>
              </div>
            </div>
          </Form>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;