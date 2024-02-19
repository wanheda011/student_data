import { Meteor } from 'meteor/meteor'
import { SubjectData } from '../../../startup/lib/collection';


Meteor.publish('Subjects', function() {
    try {
        return SubjectData.find({});
    } catch (error) {
        throw new Meteor.Error(err.error);
    }
});