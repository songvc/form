import { useState, useEffect } from 'react';
import { Segment, List, Icon, Input, Header, Grid, Form, Button } from 'semantic-ui-react'
import Benefit from '../components/Benefit';
import {
  validateField
} from '../utils/utils';

function App() {

  const [legal, setLegal] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    legalEntity: '',
    legalEntityAddress: '',
    legalEntityCity: '',
    legalEntityState: '',
    legalEntityZip: ''
  })
  const [error, setError] = useState({
    firstName: true,
    lastName: true,
    middleName: true,
    legalEntity: true,
    legalEntityAddress: true,
    legalEntityCity: true,
    legalEntityState: true,
    legalEntityZip: true
  })
  const [curr, setCurr] = useState(1);
  const [form, setForm] = useState([
    {
      index: 0,
      firstName: '',
      lastName: '',
      middleName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      ssn: '',
      ownership: '',
      role: '',
    }
  ]);
  const [formError, setFormError] = useState([
    {
      index: 0,
      firstName: true,
      lastName: true,
      middleName: true,
      address: true,
      city: true,
      state: true,
      zip: true,
      country: true,
      ssn: true,
      ownership: true,
      role: true,
    }
  ]);

  const [isValidated, setIsValidated] = useState(false);

  const handleChange = (e, { name, type, value }) => {
    if (!validateField(type, value)) {
      setError((prev) => ({ ...prev, [type]: 'Please enter a valid field' }));
    } else {
      setError((prev) => ({ ...prev, [type]: false }))
    }
    setLegal((prev) => ({ ...prev, [type]: value }))
  }

  const validateLegal = () => {
    const checksum = Object.values(error).map(item => !!item).reduce((acc, item) => { return acc + item }, 0);
    console.log('checksum legal', checksum);
    return checksum;
  }

  const validateBeneficial = () => {
    console.log('validating beneficla')
    const checksum = formError.reduce((acc, item) => {
      const sum = Object.values(item).map((item, i) => i !== 0 && !!item).reduce((acc, item) => acc + item, 0);
      console.log('checksum sum', sum);
      return acc + sum 
    }, 0);
    console.log('checksum beneficial', checksum);
    return checksum;
  }

  const validateController = () => {
    const regex = /controller/i;
    const anyTrue = form.map((f) => regex.test(f.role)).reduce((acc, item) => acc + item ,0);
    console.log('validating controoler', anyTrue);
    if (anyTrue) {
      return true;
    } else {
      return false;
    }
  }

  const validateOwnership = () => {
    const ownershipTotal = form.map((f) => f.ownership).reduce((acc, item) => acc + parseFloat(item), 0);
    console.log('validating ownership', ownershipTotal);
    if (ownershipTotal === 1) {
      return true;
    } else {
      return false;
    }
  }

  // run validations on every error, form error state changes
  useEffect(() => {
    console.log('USE EFFECT formerror', formError);
    if (validateLegal() === 0 && validateBeneficial() === 0 && validateController() && validateOwnership()) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [error, formError])

  const addForm = () => {
    setCurr(curr + 1)
    console.log('adding form', curr);
    setForm((prev) => [...prev, {
      index: curr, 
      firstName: '',
      lastName: '',
      middleName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      ssn: '',
      ownership: '',
      role: '',
    }])
    setFormError((prev) => [...prev, {
      index: curr,
      firstName: true,
      lastName: true,
      middleName: true,
      address: true,
      city: true,
      state: true,
      zip: true,
      country: true,
      ssn: true,
      ownership: true,
      role: true,
    }])
  };

  const deleteForm = (id) => {
    console.log('deleting id', id);
    setForm((prev) => prev.filter((f) => f.index !== id))
    setFormError((prev) => prev.filter((f) => f.index !== id))
  };

  const handleFormChange = (e, { name, type, id, value }) => {
    console.log('type', type);
    console.log('id', id);
    console.log('value', value);

    if (!validateField(type, value)) {
      setFormError([...formError].map((f) => {
        if (f.index === id) {
          return {
            ...f,
            [type]: 'Please enter a valid field'
          }
        } else {
          return f;
        }
      }))
    } else {
      setFormError([...formError].map((f) => {
        if (f.index === id) {
          return {
            ...f,
            [type]: false
          }
        } else {
          return f;
        }
      }))
    }

    setForm([...form].map((f) => {
      if (f.index === id) {
        return {
          ...f,
          [type]: value
        }
      } else {
        return f;
      }
    }))
  }

  const submitForm = () => {
    console.log('submitting legal', legal);
    console.log('submitting form', form);
  }

  const BenefitProps = {
    deleteForm: deleteForm,
    handleFormChange: handleFormChange,
    curr: curr,
    setCurr: setCurr,
    form: form,
    setForm: setForm,
    formError: formError,
    setFormError: setFormError
  }

  return (
    <div className="App">
      <Grid container>

        <Grid.Row columns={1}>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h1'>CERTIFICATE OF BENEFICIAL OWNER</Header>
            <Segment>
              The Information contained in this Certification is sought pursuant to <b>Section 1020.230 of Title 31</b> of the United States Code of Federal Regulations. (31 CFR 1020.230 - Beneficial Ownership Requirements for legal entity customers).
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>LEGAL ENTITY</Header>
            <Segment>Please enter the legal entity’s basic information, including the account holder's name, address, date of birth and address information.
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  required={true}
                  control={Input}
                  type={'firstName'}
                  onChange={handleChange}
                  value={legal.firstName}
                  label='First Name'
                  placeholder='First name'
                  error={error.firstName}
                />
                <Form.Field
                  required={true}
                  control={Input}
                  type={'lastName'}
                  onChange={handleChange}
                  value={legal.lastName}
                  label='Last Name'
                  placeholder='Last name'
                  error={error.lastName}
                />
                <Form.Field
                  required={true}
                  control={Input}
                  type={'middleName'}
                  onChange={handleChange}
                  value={legal.middleName}
                  label='M.I.'
                  placeholder='Middle Name'
                  error={error.middleName}
                />
              </Form.Group>
              <Form.Field
                required={true}
                control={Input}
                type={'legalEntity'}
                onChange={handleChange}
                value={legal.legalEntity}
                label='Legal Entity Name'
                placeholder='Legal Entity Name'
                error={error.legalEntity}
              />
              <Form.Group widths='equal'>
                <Form.Field
                  required={true}
                  control={Input}
                  type={'legalEntityAddress'}
                  onChange={handleChange}
                  value={legal.legalEntityAddress}
                  label='Legal Entity Address'
                  placeholder='Legal Entity Address'
                  error={error.legalEntityAddress}
                />
                <Form.Field
                  required={true}
                  control={Input}
                  type={'legalEntityCity'}
                  onChange={handleChange}
                  value={legal.legalEntityCity}
                  label='Legal Entity City'
                  placeholder='Legal Entity City'
                  error={error.legalEntityCity}
                />
                <Form.Field
                  required={true}
                  control={Input}
                  type={'legalEntityState'}
                  onChange={handleChange}
                  value={legal.legalEntityState}
                  label='Legal Entity State'
                  placeholder='Legal Entity State'
                  error={error.legalEntityState}
                />
                <Form.Field
                  required={true}
                  control={Input}
                  type={'legalEntityZip'}
                  onChange={handleChange}
                  value={legal.legalEntityZip}
                  label='ZIP/Postal Code'
                  placeholder='Legal Entity ZIP'
                  error={error.legalEntityZip}
                />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>BENEFICIAL OWNER</Header>
            <Segment>Please enter the legal
              entity’s <b>beneficial owner(s)</b>, including their name, address, date of birth and social security number (or passport number or
              other similar information, in the case of Non-U.S. persons).
            </Segment>
            <Segment>
              <div><b>Beneficial owners</b> are:</div>
              <List ordered>
                <List.Item>Each individual, if any, who owns, directly or indirectly, <b>25 percent or more of the equity interests</b> of the legal entity customer (e.g., each natural person that owns 25 percent or more of the shares of a corporation; and</List.Item>
                <List.Item>An individual with significant responsibility for managing the legal entity customer <b>(e.g., a Chief Executive Officer, Chief Financial Officer, Chief Operating Officer, Managing Member, General Partner, President, Vice President, or Treasurer).</b></List.Item>
              </List>
            </Segment>
            <Segment>
                Make sure at least one of the beneficial owner is a controller and the ownership percentage pertains to 1.
            </Segment>
          </Grid.Column>
        </Grid.Row>

        {/* Under section (1), depending on the
factual circumstances, up to four individuals (but as few as zero) may need to be identified. Regardless of the number of
individuals identified under section (1), you must provide the identifying information of one individual under section (2). It is
possible that in some circumstances the same individual might be identified under both sections (e.g., the President of Acme,
Inc. who also holds a 30% equity interest). Thus, a completed form will contain the identifying information of at least one
individual (under section (2)), and up to five individuals (i.e., one individual under section (2) and four 25 percent equity
holders under section (1)) */}

        {form.map((f,i) => {
          return <Benefit key={i} index={f.index} {...f} {...BenefitProps} />
        })}

        <Grid.Row columns={1}>
          <Grid.Column>
            <Button icon labelPosition='right' onClick={addForm} disabled={(form.length > 5 ? true : false)}>
              Add additional beneficial owner
              <Icon name='plus' />
            </Button>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <Button fluid type='submit' disabled={!isValidated} onClick={submitForm}>Submit</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
