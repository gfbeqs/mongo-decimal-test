import "bootstrap/dist/css/bootstrap.min.css";

import { History } from '/imports/api/collections';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data'
import React, { useState } from "react";
import { Button, FormGroup, Table } from 'react-bootstrap';

import { CalculateModal } from "./CalculateModal";

export const App = () => {
  const [ showModal, setShowModal ] = useState( false );

  const history = useTracker(() => {
    Meteor.subscribe( 'history' );

    return History.find({}, { sort: { timestamp: -1 }}).fetch();
  });

  return (
    <>
      <h3>Mongo-Decimal Test</h3>
      <FormGroup>
        <Button onClick={() => setShowModal( true )}>Show Calculate Modal</Button>
      </FormGroup>
      <br />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Value</th>
            <th>Decimal</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({  timestamp, value, result: { decimal, number }}) => (
            <tr key={timestamp.toISOString()}>
              <td>{timestamp.toISOString()}</td>
              <td>{value.toString()}</td>
              <td>{decimal.toString()}</td>
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showModal ? (
        <CalculateModal onHide={() => setShowModal( false )} />
      ) : null}
    </>
  );
};
