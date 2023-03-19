import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SimpleFooter = () => {
  return (
    <div className="overflow-hidden ">
      <Row>
        <Col className="mt-5">
          <footer className="bg-secondary">
            <div className="text-center text-light p-4 ">
              © 2022
              <Link href="/">
                <a className="text-reset mx-2 fw-bold">HamroBooking.com</a>
              </Link>
            </div>
          </footer>
        </Col>
      </Row>
    </div>
  );
};

export default SimpleFooter;
