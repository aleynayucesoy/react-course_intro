import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {

    state = { email: '', password: '', city: '', description: '' }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();   
        alertify.success(this.state.email + " added to db!");
    }

    render() {
        return (
            <div>
                <br />
                <h1>Form Demo 2</h1><br /><br />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type='email' name='email' id='email' placeholder='Enter Email' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Description</Label>
                        <Input type='password' name='password' id='password' placeholder='Enter Password' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Email</Label>
                        <Input type='textarea' name='description' id='description' placeholder='Enter Description' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type='select' name='city' id='city' onChange={this.handleChange}>
                            <option selected disabled>Select City</option>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                            <option>Antalya</option>
                        </Input>
                    </FormGroup>

                    <Button type='submit'>Save</Button>

                </Form>
            </div>
        )
    }
}
