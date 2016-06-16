import React from 'react';
import { Col, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class NewUser extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<Col xs={12} sm={6} smOffset={3}>
				<Panel>
					<h1>Register</h1>
					{error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <FormGroup controlId="emailControls">
              <ControlLabel>Email</ControlLabel>
              <FormControl ref="email" type="text" placeholder="Enter Email" />
            </FormGroup>
            <FormGroup controlId="passwordControls">
              <ControlLabel>Password</ControlLabel>
              <FormControl ref="password" type="password" placeholder="Enter Password" />
            </FormGroup>
            <FormGroup controlId="submitButton">
              <Button type="submit"  onClick={this.createUser.bind(this)}>Submit</Button>
            </FormGroup>
          </form>
				</Panel>
			</Col>
		)
	}

	createUser(e) {
		e.preventDefault();
		const {create} = this.props;
		//const {email, password} = this.refs;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
		create(email, password);
		//email.getInputDOMNode().value = '';
		//password.getInputDOMNode().value = '';
	}
}

export default NewUser;
