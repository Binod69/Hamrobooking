import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './offers.module.scss';
import Data from './data';

const Offers = () => {
  return (
    <Container className="mt-5">
      {/* This is cards and link */}
      <article className="mt-5">
        <p className={styles.cardTitle}>Where to go for your next trip?</p>
      </article>
      <Row xs={1} md={2} lg={4}>
        {Data.map((item) => (
          <Col key={item.id} className="mb-5">
            <Link href="#">
              <a>
                <img className={styles.img} src={item.image} alt={item.alt} />
              </a>
            </Link>
            <p className={styles.CardPara}>{item.title}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
