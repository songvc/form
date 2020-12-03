import { useState } from 'react';
import { Input, Grid, Form, Button } from 'semantic-ui-react'

const Benefit = (props) => {
    const { index, deleteForm, handleFormChange, formError } = props;
    const currentErrorForm = formError.filter((form) => form.index === index)[0]

    return <Grid.Row columns={1}>
        <Grid.Column>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='First Name'
                        type={'firstName'}
                        onChange={handleFormChange}
                        placeholder='Last name'
                        error={currentErrorForm.firstName}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='Last Name'
                        type={'lastName'}
                        onChange={handleFormChange}
                        placeholder='First name'
                        error={currentErrorForm.lastName}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='M.I.'
                        type={'middleName'}
                        onChange={handleFormChange}
                        placeholder='M.I.'
                        error={currentErrorForm.middleName}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='Address'
                        type={'address'}
                        onChange={handleFormChange}
                        placeholder='Address'
                        error={currentErrorForm.address}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='City'
                        type={'city'}
                        onChange={handleFormChange}
                        placeholder='City'
                        error={currentErrorForm.city}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='State'
                        type={'state'}
                        onChange={handleFormChange}
                        placeholder='Last name'
                        error={currentErrorForm.state}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='ZIP/Postal Code'
                        type={'zip'}
                        onChange={handleFormChange}
                        placeholder='ZIP/Postal Code'
                        error={currentErrorForm.zip}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='Country'
                        type={'country'}
                        onChange={handleFormChange}
                        placeholder='First name'
                        error={currentErrorForm.country}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='SSN'
                        type={'ssn'}
                        onChange={handleFormChange}
                        placeholder='SSN'
                        error={currentErrorForm.ssn}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='Ownership Percentage (0.01 - 1.00)'
                        type={'ownership'}
                        onChange={handleFormChange}
                        placeholder='Ownership Percentage'
                        error={currentErrorForm.ownership}
                    />
                    <Form.Field
                        id={index}
                        required={true}
                        control={Input}
                        label='Role'
                        type={'role'}
                        onChange={handleFormChange}
                        placeholder='Role'
                        error={currentErrorForm.role}
                    />
                </Form.Group>
                <Button id={index} negative onClick={(e) => {
                    deleteForm(index)
                }}>Delete</Button>
            </Form>
        </Grid.Column>
    </Grid.Row>
}

export default Benefit;