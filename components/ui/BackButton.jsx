import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = () => {
  return (
    <Container>
      <Link href="/">
        <a className="text-muted">
          <span>
            <BsArrowLeft size={20} className="me-2" />
            Go Back
          </span>
        </a>
      </Link>
    </Container>
  );
};

export default BackButton;
