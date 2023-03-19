import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import styles from './tarvel.module.scss';

const Travel = () => {
  return (
    <Container>
      <p className={styles.para}>Connect with other travelers & communities</p>

      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src="/img/Rectangle5.png"
          alt="traveltalk.png"
        />
      </div>
      <Card.Title className={styles.cardTitle}>
        <Link href="#">
          <a>Travel Talk</a>
        </Link>
      </Card.Title>
      <Card.Text className={styles.cardLink}>General discussion</Card.Text>
      <Card.Text>1000 Travellers</Card.Text>

      {/* <CardGroup>
        <Card>
          <img
            className={styles.img}
            variant="top"
            src="/img/Rectangle5.png"
            alt="traveltalk.png"
          />
          <Card.Body>
            <Card.Title className={styles.cardTitle}>Travel Talk</Card.Title>
            <Card.Text>
              {' '}
              <Link href="#">
                <a className={styles.cardLink}>General discussion</a>
              </Link>
            </Card.Text>
            <Card.Text>1000 Travellers</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className="w-30 p-1" variant="top" src="/img/humans.png" />
          <Card.Body>
            <Card.Title>More communities</Card.Title>
            <Card.Text>
              <Link href="#">
                <a>View all</a>
              </Link>
            </Card.Text>
            <Card.Text>1500 members</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> */}
    </Container>
  );
};

export default Travel;
