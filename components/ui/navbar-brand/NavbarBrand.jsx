import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarBrand = () => {
  return (
    <>
      <Navbar>
        <Container fluid>
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
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default NavbarBrand;
