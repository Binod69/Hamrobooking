import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './home.module.scss';
import HomeData from './homedata';

const Homes = () => {
  return (
    <Container>
      <article>
        <h3 className={styles.title}>Home Guests Love</h3>
      </article>
      <Row xs={1} md={2} lg={4} xl={4} className="mt-2  justify-content-evenly">
        {HomeData.map((item) => (
          <Col key={item.id}>
            <Link href="#">
              <a>
                <img
                  className={styles.hotelImg}
                  src={item.image}
                  alt={item.alt}
                />
              </a>
            </Link>
            <h4 className={styles.hotelTitle}>{item.title}</h4>
            <p className={styles.hoteladdress}>{item.address}</p>
            <p className={styles.hotelPrice}>{item.price}</p>
            <span className={styles.hotelRating}>{item.rating}</span>
            <span className={styles.hotelReview}>{item.review}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Homes;
