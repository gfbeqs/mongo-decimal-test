import { Meteor } from 'meteor/meteor';

import { History } from './collections';

Meteor.publish( 'history', function() {
  return History.find({}, { sort: { timestamp: -1 }});
});
