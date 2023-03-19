import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaHome,
  FaMobileAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import FooterData from './footerdata';

const Footer = () => {
  const contactData = [
    {
      id: 4,
      title: 'Contact',
      location: 'Ittabhatta, jhapa, Nepal',
      email: 'hamrobooking@gmail.com',
      phone: '023-562562',
      mobile: 9898989898,
    },
  ];
  return (
    <Container fluid>
      <footer className=" mt-5 text-center  text-lg-start bg-light text-muted shadow-sm ">
        <section className="d-flex mt-sm-5 justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link href="#">
              <a className=" link-secondary m-1 me-4 text-reset ">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="#">
              <a className="me-4 text-reset">
                <FaTwitter />
              </a>
            </Link>
            <Link href="#">
              <a className="me-4 text-reset">
                <FaGoogle />
              </a>
            </Link>

            <Link href="#">
              <a className="me-4 text-reset">
                <FaInstagram />
              </a>
            </Link>

            <Link href="#">
              <a className="me-4 text-reset">
                <FaLinkedinIn />
              </a>
            </Link>

            <Link href="#">
              <a className="me-4 text-reset">
                <FaTiktok />
              </a>
            </Link>
          </div>
        </section>

        <section>
          <div className="text-center text-md-start mt-5">
            <Row
              xs={1}
              md={2}
              lg={4}
              xl={4}
              eventKey="0"
              className=" text-md-center mt-3"
            >
              {FooterData.map((item) => (
                <>
                  <Col key={item.id} className=" mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      {item.title}
                    </h6>

                    {item.link.map((data) => (
                      // eslint-disable-next-line react/jsx-key
                      <p>
                        <Link href="#">
                          <a className="text-reset">{data.subTitle}</a>
                        </Link>
                      </p>
                    ))}
                  </Col>
                </>
              ))}
              {contactData.map((item) => (
                <Col key={item.id} className=" mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">{item.title}</h6>
                  <p>
                    <FaHome className=" me-2" />
                    {item.location}
                  </p>
                  <p>
                    <MdEmail className="me-2" />
                    {item.email}
                  </p>
                  <p>
                    <BsFillTelephoneFill className="fas fa-phone me-2" />
                    {item.phone}
                  </p>
                  <p>
                    <FaMobileAlt className="fas fa-print me-2" /> {item.mobile}
                  </p>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <div className="text-center  text-light  p-4 bg-secondary">
          © 2022
          <Link href="/">
            <a className="text-reset mx-2 fw-bold">HamroBooking.com</a>
          </Link>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
