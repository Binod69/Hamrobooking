import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

import {
  AiOutlineDashboard,
  AiOutlineBank,
  AiOutlineMail,
  AiOutlineHome,
} from 'react-icons/ai';
import { BiListPlus, BiBuildingHouse } from 'react-icons/bi';
import { GiDrippingStar } from 'react-icons/gi';
import { IoIosNotifications } from 'react-icons/io';
import { BsBuilding } from 'react-icons/bs';

import NavbarBrand from '../ui/navbar-brand/NavbarBrand';
import BackButton from '../ui/BackButton';
import SimpleFooter from '../ui/brandfooter/SimpleFooter';
import styles from './dashboard.module.scss';
const DashBoard = () => {
  const now = 10;

  return (
    <>
      <NavbarBrand />
      <Container>
        <Row>
          <Col md={4}>
            <BackButton />
          </Col>
          <Col md={4}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
          <Col md={4}>
            <Link href="/">
              <a>
                <span className="ms-5 shadow-sm">
                  <AiOutlineMail size={30} className="border  text-success" />
                </span>
              </a>
            </Link>
            <Link href="/">
              <a>
                <span className="ms-5 shadow-sm">
                  <IoIosNotifications
                    size={30}
                    className=" border text-success"
                  />
                </span>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} md={9} lg={3}>
              <Card className="shadow-sm">
                <img
                  className={styles.img}
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="profile.png"
                />
                <p className="text-center text-muted">welcome</p>
                <Card.Body>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <AiOutlineDashboard size={20} className="me-2" />
                        Dashboard
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <BiListPlus size={20} className="me-2" /> Add new
                        properties
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <BiBuildingHouse size={20} className="me-2" />
                        Properties
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        <GiDrippingStar size={20} className="me-2" /> Reviews
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">
                        <AiOutlineBank size={20} className="me-2" /> Finance
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={9} lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col sm={6} className={styles.container}>
                      <article>
                        <h4 className={styles.title}>Hello Welcome Back!</h4>
                        <h6 className={styles.subTitle}>
                          There’s a better way to grow.
                        </h6>
                        <p className={styles.para}>
                          Marketing, sales, and service software that helps your
                          business grow without compromise, because “good for
                          business” should also mean “good for customer.”
                        </p>
                      </article>
                    </Col>
                    <Col sm={6}>
                      <div className={styles.imgContainer}>
                        <img
                          className={styles.img2}
                          src="/img/welcome.webp"
                          alt="ellipse.png"
                        />
                      </div>
                    </Col>
                    <div className="mt-5">
                      <h5>Properties in progress (1)</h5>
                    </div>
                    <Row Row className="mt-2">
                      <Card className="shadow-sm">
                        <Card.Body>
                          <Col className=" d-flex justify-content-lg-around">
                            <span>Name</span>
                            <span>Location</span>
                            <span>Registration progress</span>
                            <span>Action</span>
                          </Col>
                          <hr />
                          <Col className=" d-flex  justify-content-lg-around">
                            <span>Unnamed Property</span>
                            <span>Nepal</span>
                            <span>Registration progress</span>

                            <span>Action</span>
                          </Col>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col md={6} lg={6} className="mb-1 mt-1">
                      <Card
                        style={{ maxWidth: '25rem' }}
                        className="shadow-sm  h-100 "
                      >
                        <Card.Body>
                          <span className="d-flex justify-content-center">
                            <AiOutlineHome size={40} className="text-muted" />
                          </span>
                          <article>
                            <h4 className="text-center mt-2">Homes</h4>
                            <p className="text-center mt-3 text-muted">
                              Properties like apartments, vacation homes,
                              villas, etc.
                            </p>
                          </article>
                          <Link href="#">
                            <a>
                              <Button className="d-flex justify-content-center m-auto mt-4">
                                List your property
                              </Button>
                            </a>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6} lg={6} className="mb-1 mt-1">
                      <Card
                        style={{ maxWidth: '25rem' }}
                        className="shadow-sm h-100"
                      >
                        <Card.Body>
                          <span className="d-flex justify-content-center ">
                            <BiBuildingHouse size={40} className="text-muted" />
                          </span>
                          <article>
                            <h4 className="text-center mt-2 ">
                              Hotel, B&Bs & More
                            </h4>
                            <p className="text-center mt-2 text-muted ">
                              Properties like hotels, B&Bs, guest houses,
                              hostels, condo hotels, etc.
                            </p>
                          </article>
                          <Link href="#">
                            <a>
                              <Button className="d-flex justify-content-center m-auto mt-3">
                                List your property
                              </Button>
                            </a>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem repellat impedit eveniet pariatur minima,
                    soluta dolorem, voluptatem voluptates, facere sint
                    similique. Cumque, aspernatur. Enim asperiores quis, vero
                    molestias magnam quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem repellat impedit eveniet pariatur minima,
                    soluta dolorem, voluptatem voluptates, facere sint
                    similique. Cumque, aspernatur. Enim asperiores quis, vero
                    molestias magnam quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem repellat impedit eveniet pariatur minima,
                    soluta dolorem, voluptatem voluptates, facere sint
                    similique. Cumque, aspernatur. Enim asperiores quis, vero
                    molestias magnam quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      <SimpleFooter />
    </>
  );
};

export default DashBoard;
