import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styles from './news.module.scss';
import Button from 'react-bootstrap/Button';
import { BsPlayBtn } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const News = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col className="mb-xl-5">
            <article>
              <p className={styles.title}>Save Time, Save Money!</p>
              <p className={styles.para}>
                Sign up and we&#39;ll send the best deals to you
              </p>
            </article>

            <Row className="mt-4">
              <Col sm={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className={styles.emailForm}
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={4} className="text-center">
                <span className={styles.svgsBtn}>
                  <BsPlayBtn size={20} />
                </span>
                <button className={styles.btn}>Subscribe</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className=" container text-center my-xs-5 my-md-5 my-lg-5 ">
        <Link href="/property">
          <a className="linkProperty">
            <span className={styles.svglogin}>
              <AiOutlineUnorderedList size={20} />
            </span>

            <button className={styles.btnProperty}>List Your Property</button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default News;
