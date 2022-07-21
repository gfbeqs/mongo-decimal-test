import { EJSON } from 'meteor/ejson';
import { Meteor } from 'meteor/meteor';
import { Decimal } from 'meteor/mongo-decimal';

import { History } from './collections';

Meteor.startup(() => {
  if ( History.find().count() === 0 ) {
    const value = new Decimal( '1.01' );

    const result = {
      decimal: value.mul( 3 ),
      number: value.toNumber() * 3,
    };

    History.insert({ value, result, timestamp: new Date()});
  }
});
