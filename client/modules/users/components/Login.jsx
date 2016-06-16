import React from 'react';
import { Col, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Login extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<Col xs={12} sm={6} smOffset={3}>
				<Panel>
					<h1>Login</h1>
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
              <Button type="submit" onClick={this.login.bind(this)}>Login</Button>
            </FormGroup>
					</form>
				</Panel>
			</Col>
		)
	}

	login(e) {
		e.preventDefault();
		const {loginUser} = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
		loginUser(email, password);
		//email.getInputDOMNode().value = '';
		//password.getInputDOMNode().value = '';
	}
}

export default Login;
