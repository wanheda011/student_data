import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import $ from 'jquery';
import "./home.html";
import { SubjectData } from '../../../startup/lib/collection';
import { ReactiveVar } from 'meteor/reactive-var'


Template.home.onCreated(function () {
    
    this.subjectCode = new ReactiveVar(5);
    Meteor.subscribe('Subjects');         
    
});

Template.home.helpers({
    subjectData(){
        let data = SubjectData.find({
        }).fetch()
        return data;
        
    }
});

Template.home.events({
    'click #subject_form_sub_btn'(event,template){
        event.preventDefault();
        const subject_Code = $("#subject_code").val();
        if(subject_Code == ""){
            alert("Please Enter Subject Code...");
         }else {
            template.subejctCode.set(subject_Code);
        } 
    }

})

