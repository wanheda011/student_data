
import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

BlazeLayout.setRoot('body');

// import layout index
import "../layout/layout-index";

FlowRouter.route('/', {
    name: "home",
    action: function () {
        BlazeLayout.render('layout', {
            main: "home"
        });
    }
});

//import rest of routes (can be js files too)
