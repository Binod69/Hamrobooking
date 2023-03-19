import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsKey } from 'react-icons/bs';
import styles from './discount.module.scss';

const Discount = () => {
  return (
    <Container className="mt-5">
      <hr className={styles.hr} />
      <Row className="ms-lg-5" xs={1} md={2} lg={4}>
        <Col sm>
          <Image src="/img/mic.png" alt="mic.png" width={150} height={150} />
        </Col>
        <Col sm>
          <p className={styles.offerTitle}>Get instant discounts</p>
          <p className={styles.offerPara}>
            Just signup into HamroBooking.com and get heavy discounts on deals .
          </p>
        </Col>
        <Col sm>
          <Image
            src="/img/offer.png"
            alt="offer.png"
            width={250}
            height={100}
          />
        </Col>
        <Col sm>
          <Link href="/signin">
            <a>
              <span className={styles.svglogin}>
                <BsKey size={20} />
              </span>
              <button className={styles.btn}>Sign In</button>
            </a>
          </Link>
        </Col>
      </Row>
      <hr className={styles.hr} />
    </Container>
  );
};

export default Discount;
