import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsKey } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import SignInButton from './ui/SignInButton';
import PropertyButton from './ui/PropertyButton';
import styles from './navbar.module.scss';

const Navbars = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link href="/">
            <a>
              <Image
                src="/img/logo1.png"
                width={100}
                height={40}
                alt="logo.png"
              />
            </a>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <hr className={styles.hr} />
            <Nav className="ms-auto ">
              <PropertyButton />
            </Nav>
            <Nav className=" ms-lg-4">
              <SignInButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
