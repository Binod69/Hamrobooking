import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { BsFillTreeFill, BsFillCloudSunFill } from 'react-icons/bs';
import { GiSpeedBoat, GiHiking } from 'react-icons/gi';

import styles from './cards.module.scss';

import CardData from './carddata';

const Cards = () => {
  return (
    <Container>
      <h3 className={styles.title}>Popular Destination</h3>
      <Row xs={1} md={2} lg={4} xxl={4} className="g-lg-4  ">
        {CardData.map((item) => (
          <Col key={item.id} className="mb-3">
            <Card>
              <Link href="/property-list">
                <a>
                  <Card.Img
                    className={styles.img}
                    variant="top"
                    src={item.image}
                    alt={item.alt}
                  />
                </a>
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {item.title}
                </Card.Title>
                <Card.Text className={styles.cardPara}>{item.desc}</Card.Text>
              </Card.Body>
              <span className={styles.hr}></span>
              <Card.Body>
                <p className="text-muted m-0">{item.subtitle}</p>
                <Badge className="text-muted me-2 " pill bg="light" text="dark">
                  <BsFillCloudSunFill /> Sunny Weather
                </Badge>
                <Badge className="text-muted " bg="light" text="dark">
                  <BsFillTreeFill /> Nature
                </Badge>
                <Badge className="text-muted me-2 " bg="light" text="dark">
                  <GiSpeedBoat /> Water Sports
                </Badge>
                <Badge className="text-muted " bg="light" text="dark">
                  <GiHiking /> Hiking
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
