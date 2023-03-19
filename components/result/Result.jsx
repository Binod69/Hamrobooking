import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useState } from 'react';

import { MdOutlineLocationOn } from 'react-icons/md';
import { BiRupee } from 'react-icons/bi';
import { FaParking } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';

import BackButton from '../ui/BackButton';

import styles from './result.module.scss';
import resultData from './data';

const Result = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <BackButton />
      <Row className={styles.row}>
        <Col md={4}>
          <Button
            variant="outline-secondary"
            className="d-lg-none shadow  d-flex align-items-center justify-content-center m-auto w-100"
            onClick={handleShow}
          >
            Filter
          </Button>

          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> Filter and Sort by : </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row>
                <h3 className={styles.filter}>Filter by:</h3>
                <Card className="shadow-sm" style={{ width: '22rem' }}>
                  <Card.Body>
                    <Card.Title>Your budget (per night)</Card.Title>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="mt-3 ms-1"
                        label="Set your own budget"
                      />
                    </Form>
                    <Form.Check
                      className="mt-3 ms-1"
                      label="NPR 500 - NPR 5,000"
                    />
                    <Form.Check
                      className="mt-3 ms-1"
                      label="NPR 5,000 - NPR 10,000"
                    />
                    <Form.Check
                      className="mt-3 ms-1"
                      label="NPR 10,000 - NPR 15,000"
                    />
                    <Form.Check
                      className="mt-3 ms-1"
                      label="NPR 15,000 - NPR 20,000"
                    />
                    <Form.Check className="mt-3 ms-1" label="NPR 20,000 +" />
                  </Card.Body>
                </Card>
                {resultData.map((item) => (
                  <Card className="shadow-sm mt-3" style={{ width: '22rem' }}>
                    <Col key={item.id}>
                      <Card.Body>
                        <Card.Title>{item.filterTitle}</Card.Title>
                        {item.selectBudget.map((items) => (
                          <Col md={8}>
                            <Form.Check
                              className="mt-3 ms-1"
                              label={items.budget}
                            />
                          </Col>
                        ))}
                      </Card.Body>
                    </Col>
                  </Card>
                ))}
              </Row>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>

        <Col className="mt-4">
          {resultData.map((item) => (
            <Card className="shadow-sm mt-3">
              <Row className=" g-0">
                <Col key={item.id} md={4}>
                  <Link href="#">
                    <a>
                      <Card.Img
                        src={item.image}
                        className={styles.img}
                        alt={item.alt}
                      />
                    </a>
                  </Link>
                </Col>
                <Col>
                  <Card.Body>
                    <span>{item.starRating}</span>
                    <Card.Title className={styles.title}>
                      {item.title}
                    </Card.Title>
                    <span className="text-muted">
                      <MdOutlineLocationOn />
                      {item.location}
                    </span>

                    <Row className="mt-1">
                      <Col md={4}>
                        <span className="badge bg-secondary">
                          {item.rating}
                        </span>
                        <span className="ms-2 text-muted">{item.buRating}</span>
                      </Col>
                      <Col className={styles.subTitle} md={4}>
                        <Card.Text>{item.subtitle}</Card.Text>
                      </Col>
                      <Col md={4}>
                        <span className="text-muted">
                          <BiRupee />
                          {item.price}
                        </span>
                        <p className="text-muted">{item.per}</p>
                      </Col>
                      <span className="ms-2">
                        {item.accom} <FaParking className="me-2" />
                        <AiOutlineWifi />
                      </span>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
          <Col className="mt-5">
            <Button variant="outline-success" className={styles.btnSeemore}>
              See more
            </Button>
            <article>
              <p className={styles.para}>
                For all prices: Availability is limited and rates are subject to
                change. Prices are dynamic and vary based on date of booking,
                length of stay and hotel class. Prices do not include taxes and
                fees. With Purwanepal you enter the date and location. Hotel
                revealed only after booking.
              </p>
              <p className={styles.para2}>
                *Savings based on lowest published rate we've found on leading
                retail travel sites in the last 24-48 hours for the same
                neighborhood, hotel class, and stay dates.
              </p>
            </article>
            <hr />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;
