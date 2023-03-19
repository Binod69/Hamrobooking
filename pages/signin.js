import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import SimpleFooter from '../components/ui/brandfooter/SimpleFooter';

import SignBrand from '../components/ui/navbar-brand/SignBrand';
import BackButton from '../components/ui/BackButton';

const signin = () => {
  return (
    <>
      <Head>
        <title>Hamro Booking || Sign In</title>
      </Head>
      <SignBrand />
      <BackButton />
      <Container>
        <h3 className="text-center mt-lg-2 text-secondary font-weight-normal">
          Login to your account
        </h3>

        <Row className="justify-content-center align-items-center pt-sm-3  mb-md-5 mb-lg-2 mt-lg-3 ">
          <Col md={6} className=" text-md-start">
            <Card className=" shadow-md  ">
              <Card.Header className="text-center">Sign In</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Link href="#">
                        <a className="text-primary btn-link">
                          <span>Forget Password?</span>
                        </a>
                      </Link>
                    </Col>
                  </Row>

                  <Button
                    variant="primary"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Log In
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center">
                Dont have an account?
                <Link href="/signup">
                  <a className="p-2 text-primary btn-link">Register</a>
                </Link>
              </Card.Footer>
            </Card>
            <hr />
            <p className="text-center text-muted  ">or</p>
            <p className="text-center text-muted  ">Signin With:</p>
            <span className="d-flex justify-content-center gap-3 ">
              <Link href="#">
                <a>
                  <GrFacebookOption size={25} />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <AiOutlineGoogle size={25} />
                </a>
              </Link>
            </span>
            <hr />
            <p className="text-center">
              By signing in or creating an account, you agree with our
              <Link href="#">
                <a className="p-1 text-primary">Terms & Conditions</a>
              </Link>
              and
              <Link href="#">
                <a className="p-1 text-primary">Privacy Statement</a>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      <SimpleFooter />
    </>
  );
};
signin.layout = 'signin';
export default signin;
