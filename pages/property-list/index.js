import Container from 'react-bootstrap/Container';
import Search from '../../components/search/Search';
import Result from '../../components/result/Result';

const Property = () => {
  return (
    <Container>
      <hr className="mt-4" />
      <Search />
      <hr />
      <Result />
    </Container>
  );
};

export default Property;
