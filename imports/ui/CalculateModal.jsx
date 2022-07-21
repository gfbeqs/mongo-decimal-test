import "bootstrap/dist/css/bootstrap.min.css";

import { Meteor } from 'meteor/meteor';
import { Decimal } from 'meteor/mongo-decimal';
import React, { useState } from "react";
import { Alert, Button, Form, Modal } from 'react-bootstrap';

export const CalculateModal = ({ onHide }) => {
  const [ value, setValue ] = useState( '1.01' );
  const [ error, setError ] = useState();

  const submit = () => {
    setError();
    Meteor.call( 'calculate', new Decimal( value ), ( error, result ) => {
      if ( error ) {
        setError( error.message );
      }
      if ( result ) {
        const { decimal, number } = result;
        console.log( 'Calculate result', { decimal: decimal.toString(), number });
        onHide();
      }
    })
  };

  return (
      <Modal show onHide={onHide}>
        <Modal.Header closeButton>Invoke Calcuation Method</Modal.Header>
        <Modal.Body>
        {error ? (
        <Alert variant="danger" onClose={() => setError()} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      ) : null}
          <Form.Group>
            <Form.Label>Input Value</Form.Label>
            <Form.Control onChange={e => setValue( e.target.value)} value={value} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submit}>Submit</Button>
        </Modal.Footer>
      </Modal>
  );
};

