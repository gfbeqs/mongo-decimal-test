import { Match, check } from 'meteor/check';
import { Decimal } from 'meteor/mongo-decimal';

import { History } from './collections';

Meteor.methods({
  calculate( value ) {
    check( value, Match.Where( v => v instanceof Decimal ));

    const n = value.toNumber();

    const result = {
      decimal: value.mul( 3 ),
      number: n * 3,
    };

    History.insert({ value, result, timestamp: new Date()});
    return result;
  }
})
