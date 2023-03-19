import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './search/Search';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center  mb-md-5 mb-lg-5">
          <Col md={6} className="text-center text-md-start">
            <article>
              <h3 className={styles.heading}>
                <span className={styles.headingMemo}>Memoriable</span>
                <br />
                Hotels for moments
                <span className={styles.headingMemo}>Rich</span>
                <br /> in emotions
              </h3>
              <p className={styles.para}>Book now and get the best prices</p>
              <p className={styles.para2}>
                Find your next stay Search deals on hotels, homes, and much
                more...
              </p>
            </article>
          </Col>
          <Col md={6} className="text-center d-none d-md-block">
            <img
              className="img-fluid"
              src="/img/Rectangle.svg"
              alt="hero.png"
            />
          </Col>
        </Row>
        <hr />
        <Search />
        <hr className={styles.hr} />
      </Container>
    </>
  );
};

export default Hero;
