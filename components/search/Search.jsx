import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import styles from './search.module.scss';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

function Search() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <Container>
      <Card className="shadow ">
        <Card.Body>
          <Row>
            <Col md={3} lg={3} className={styles.formContainer}>
              <MdOutlineLocationOn size={20} className={styles.icon} />
              <Form.Control
                className={styles.formControl}
                placeholder="Where are you going ?"
              />
            </Col>

            <Col md={3} lg={3} className={styles.formContainer}>
              <BsCalendarDate size={20} className={styles.icon} />
              <Form.Control
                readOnly
                onClick={() => setOpenDate(!openDate)}
                className={styles.formControl}
                placeholder={`${format(
                  date[0].startDate,
                  'MM/dd/yyyy'
                )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
              />
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={styles.date}
                />
              )}
            </Col>

            <Col md={3} lg={3} className={styles.formContainer}>
              <FiUser size={20} className={styles.icon} />
              <Form.Control
                readOnly
                onClick={() => setOpenOptions(!openOptions)}
                className={styles.formControl}
                placeholder={`${options.adult} adult - ${options.children} children - ${options.room} room`}
              />
              {openOptions && (
                <div className={styles.options}>
                  <div className={styles.optionsItem}>
                    <span className={styles.optionsText}>Adult</span>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={options.adult <= 1}
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('adult', 'd')}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {options.adult}
                      </span>
                      <button
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('adult', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.optionsItem}>
                    <span className={styles.optionsText}>Children</span>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={options.children <= 0}
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('children', 'd')}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {options.children}
                      </span>
                      <button
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('children', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.optionsItem}>
                    <span className={styles.optionsText}>Room</span>
                    <div className={styles.optionCounter}>
                      <button
                        disabled={options.room <= 1}
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('room', 'd')}
                      >
                        -
                      </button>
                      <span className={styles.optionCounterNumber}>
                        {options.room}
                      </span>
                      <button
                        className={styles.optionCounterButton}
                        onClick={() => handleOption('room', 'i')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col md={3} lg={3}>
              <Button className="w-100 " variant="outline-secondary">
                Search
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Search;
