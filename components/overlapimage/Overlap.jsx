import styles from './about.module.scss';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import AboutData from './aboutdata';

const Overlap = () => {
  return (
    <Container>
      <article className="mt-5">
        <h2 className={styles.heading}>Explore Nepal</h2>
        <p className={styles.subHeading}>
          These popular destination have a lot to offer!
        </p>
      </article>
      <Row className=" align-content-sm-center ">
        <Col className={styles.composition}>
          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
                src="https://images.unsplash.com/photo-1592285896110-8d88b5b3a5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt="hotel.png"
              />
            </a>
          </Link>
          <p className={`${styles.title1} ${styles.title1hover}`}>Pokhara</p>

          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
                src="https://images.unsplash.com/photo-1522376382758-57cc8c505cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1845&q=80"
              />
            </a>
          </Link>
          <p className={`${styles.title2} ${styles.title2hover}`}>Kathmandu</p>
        </Col>

        <Col className={styles.composition}>
          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
                src="https://images.unsplash.com/photo-1616351532319-61eaad071007?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="kathmandu.png"
              />
            </a>
          </Link>
          <p className={`${styles.title1} ${styles.title1hover}`}>Chitwan</p>

          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
                src="https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
              />
            </a>
          </Link>
          <p className={`${styles.title2} ${styles.title2hover}`}>Sauraha</p>
        </Col>

        <Col className={styles.composition}>
          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
                src="https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="kathmandu.png"
              />
            </a>
          </Link>
          <p className={styles.title1}>Kanyam</p>

          <Link href="#">
            <a>
              <Card.Img
                className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
                src="https://images.unsplash.com/photo-1623492701902-47dc207df5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </a>
          </Link>
          <p className={styles.title2}>Dhulikhel</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Overlap;
