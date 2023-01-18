import React, { Component } from 'react'
import { Form, Input } from 'reactstrap';

export default class FormDemo1 extends Component {
    state = {userName: '', city: ''}

    onChangeHandler = (event) =>{
        // this.setState({userName:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }   
    onSubmitHandler = (event) => {
        event.preventDefault(); //Submit işlemi çalıştığında refresh etmemesi, default işlemini yapmaması için yazdığımız bir koddur.
        alert(this.state.userName);
    }

  render() {   
    return (
      <div>
        <br />
        <h1>Form Demo 1</h1><br /><br />
        <Form onSubmit={this.onSubmitHandler}>
            <h3>User Name: {this.state.userName}</h3>
            <Input name='userName' onChange={this.onChangeHandler} type="text"></Input>

            <h3>City: {this.state.city}</h3>
            <Input name='city' onChange={this.onChangeHandler} type="text"></Input>

            <br /><br />
            <Input type="submit" value="Save"></Input>
        </Form>
      </div>
    )
  }
}
