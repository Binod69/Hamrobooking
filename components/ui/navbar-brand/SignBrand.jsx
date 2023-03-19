import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './brand.module.scss';

const SignBrand = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link href="/">
            <a>
              <Navbar.Brand>
                <Image
                  src="/img/logo1.png"
                  width={100}
                  height={40}
                  alt="logo.png"
                />
              </Navbar.Brand>
            </a>
          </Link>
        </Container>
      </Navbar>
      <hr className="m-lg-auto" />
    </>
  );
};

export default SignBrand;
