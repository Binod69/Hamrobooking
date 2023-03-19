import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { DataCarousels } from './data';
import styles from './carousels.module.scss';

const Carousels = () => {
  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Row className="my-5 overflow-hidden align-content-sm-center ">
        <h3 className={styles.title}>Browse by property type</h3>
        <Slider {...settings}>
          {DataCarousels.map((item) => (
            <Col key={item.id}>
              <Card className="me-3">
                <Link href="/property-list">
                  <a>
                    <Card.Img
                      className={styles.img}
                      variant="top"
                      src={item.image}
                    />
                  </a>
                </Link>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {item.title}
                  </Card.Title>
                  <Card.Text className={styles.cardNumber}>
                    {item.hotelsnum}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default Carousels;
