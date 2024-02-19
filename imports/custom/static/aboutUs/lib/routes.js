FlowRouter.route('/about-us', {
    name: "aboutUs",
    action: function () {
        BlazeLayout.render('layout', {
            main: "aboutUs"
        });
    }
});