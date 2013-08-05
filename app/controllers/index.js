var Cloud = require('ti.cloud');
Cloud.debug = true;


$.index.open();

Alloy.Globals.mainTabGroup = $.index;

//var loginW = Alloy.createWidget('com.appcelerator.acslogin');

var acs_id = Ti.App.Properties.getString('acs_id');
if(!acs_id) {
	var loginC = Alloy.createController('login');
	loginC.getView().open();
}
else {
	Cloud.sessionId = acs_id;
	Cloud.Users.showMe(function(e){
		// alert(e);
	})
}
