import React from 'react';
import { Col, Panel, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

const EditItem = ({content}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <h1>Edit Item</h1>
        <form>
          <FormGroup controlId="formControlsText">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" placeholder="Enter text" />
          </FormGroup>
          <FormGroup controlId="formControlsDescription">
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Description" />
          </FormGroup>
          <FormGroup controlId="dateTimeField">
            <DateTimeField />
          </FormGroup>
          <FormGroup controlId="submitButton">
          <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
        <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
      </Panel>
    </Col>
);

export default EditItem;
