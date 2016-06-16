import React from 'react';
import { Col, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class NewCategory extends React.Component {
	render() {
		const {error} = this.props;
		return (
			<Col xs={12} sm={6} smOffset={3}>
				<Panel>
					<h1>Add Category</h1>
					{error ? <p style={{color: 'red'}}>{error}</p> : null}
					<form>
            <FormGroup controlId="nameControls">
              <ControlLabel>Name</ControlLabel>
              <FormControl ref="name" type="text" placeholder="Enter Name" />
            </FormGroup>
            <FormGroup controlId="submitButton">
              <Button type="submit"  onClick={this.createCategory.bind(this)}>Submit</Button>
            </FormGroup>
					</form>
				</Panel>
			</Col>
		)
	}

	createCategory(e) {
		e.preventDefault();
		const {create} = this.props;
    const name = ReactDOM.findDOMNode(this.refs.name).value;
		create(name);
		//name.getInputDOMNode().value = '';
	}
}

export default NewCategory;
