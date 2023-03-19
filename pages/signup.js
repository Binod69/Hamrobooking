import Head from 'next/head';
import Link from 'next/link';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineGoogle } from 'react-icons/ai';
import SignBrand from '../components/ui/navbar-brand/SignBrand';
import SimpleFooter from '../components/ui/brandfooter/SimpleFooter';
import { basicFormSchema } from '../components/schemas';
import BackButton from '../components/ui/BackButton';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const signup = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      gender: '',
      number: '',
      checkbox: '',
    },
    validationSchema: basicFormSchema,
    onSubmit,
  });

  return (
    <>
      <Head>
        <title> Register</title>
      </Head>
      <SignBrand />
      <BackButton />
      <Container>
        <h3 className="text-center mt-lg-2 text-secondary font-weight-normal">
          Create account
        </h3>
        <Row className="justify-content-center align-items-center pt-sm-3  mb-md-5 mb-lg-2 mt-lg-1">
          <Col md={6} className=" text-md-start">
            <Card>
              <Card.Header className="text-center">Register</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.firstName && !errors.firstName}
                      />

                      {errors.firstName && touched.firstName && (
                        <p className="text-danger">{errors.firstName}</p>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.lastName && !errors.lastName}
                      />

                      {errors.lastName && touched.lastName && (
                        <p className="text-danger">{errors.lastName}</p>
                      )}
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.email && !errors.email}
                      />
                      {errors.email && touched.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.password && !errors.password}
                      />
                      {errors.password && touched.password && (
                        <p className="text-danger">{errors.password}</p>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                      <Form.Label>Confirm password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="confirm password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={
                          touched.confirmPassword && !errors.confirmPassword
                        }
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-danger">{errors.confirmPassword}</p>
                      )}
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter country"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.country && !errors.country}
                      />
                      {errors.country && touched.country && (
                        <p className="text-danger">{errors.country}</p>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        name="gender"
                        defaultValue="Choose..."
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isValid={touched.gender && !errors.gender}
                      >
                        <option name="gender">Choose...</option>
                        <option name="gender">Male</option>
                        <option name="gender">Female</option>
                      </Form.Select>
                      {errors.gender && touched.gender && (
                        <p className="text-danger">{errors.gender}</p>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder=" Phone number"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.number && touched.number && (
                        <p className="text-danger ">{errors.number}</p>
                      )}
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I accept all the terms and conditions"
                      name="checkbox"
                      value={values.checkbox}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.checkbox && !errors.checkbox}
                    />
                    {errors.checkbox && touched.checkbox && (
                      <p className="text-danger ">{errors.checkbox}</p>
                    )}
                  </Form.Group>

                  <Button
                    disabled={isSubmitting}
                    variant="primary"
                    type="submit"
                  >
                    Create account
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="text-muted">
                We'll text a two-factor authentication code to this number when
                you sign in.
              </Card.Footer>
            </Card>
            <hr />
            <p className="text-center text-muted  ">or</p>
            <p className="text-center text-muted  ">Create account With:</p>
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
signup.layout = 'signin';
export default signup;
