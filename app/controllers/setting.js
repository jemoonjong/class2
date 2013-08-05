var Cloud = require('ti.cloud');

$.logoutBtn.addEventListener('click', function(e){
	Cloud.Users.logout(function(e){
		if(e.success) {
			var loginC = Alloy.createController('login');
			loginC.getView().open();
			
			Ti.App.Properties.setString('acs_id', null);
			Alloy.Globals.mainTabGroup.setActiveTab(0);
		}
	})
})
