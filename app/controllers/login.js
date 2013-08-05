var Cloud = require('ti.cloud');
var fb = require('facebook');
fb.appid = '555267207867134';

fb.addEventListener('login', function(e){
	if(e.success) {
		var token = fb.getAccessToken();
		
		fb.logout();
		//이벤트 리스너가 계속 발생함.. 해당 이벤트를 삭제해야함.
		//fb.removeEventListener('login',null);
		
		Cloud.SocialIntegrations.externalAccountLogin({
			type: 'facebook',
			token: token
		}, function(e){
			if(e.success) {
				$.getView().close();
				Ti.App.Properties.setString('acs_id', Cloud.sessionId);
			}
		})
		// alert('logged In');
	}
	
});




$.loginWidget.init({
	loginCallback: function(){
		$.getView().close();
		Ti.App.Properties.setString('acs_id', Cloud.sessionId);
	}
})

$.fbBtn.addEventListener('click', function(e){
	fb.authorize();
})
