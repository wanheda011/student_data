import { Meteor } from "meteor/meteor";
import { SubjectData } from "../../../startup/lib/collection";

Meteor.methods({ 
    'findSubjectDetails': function(subjectCode) {
        try {
            if(subjectCode){
                return SubjectData.insert({subjectCode})
            } else {
                return "Something went Wrong";
            }
        } catch (error) {
           throw Meteor.Error("Something went Wrong")
            
        }

         
    } 
});