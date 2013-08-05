function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "#9b59b6",
        fullscreen: false,
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.loginWidget = Alloy.createWidget("com.appcelerator.acslogin", "widget", {
        id: "loginWidget",
        __parentSymbol: $.__views.login
    });
    $.__views.loginWidget.setParent($.__views.login);
    $.__views.fbBtn = Ti.UI.createButton({
        bottom: 20,
        title: "Facebook",
        id: "fbBtn"
    });
    $.__views.login.add($.__views.fbBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var fb = require("facebook");
    fb.appid = "555267207867134";
    fb.addEventListener("login", function(e) {
        if (e.success) {
            var token = fb.getAccessToken();
            fb.logout();
            Cloud.SocialIntegrations.externalAccountLogin({
                type: "facebook",
                token: token
            }, function(e) {
                if (e.success) {
                    $.getView().close();
                    Ti.App.Properties.setString("acs_id", Cloud.sessionId);
                }
            });
        }
    });
    $.loginWidget.init({
        loginCallback: function() {
            $.getView().close();
            Ti.App.Properties.setString("acs_id", Cloud.sessionId);
        }
    });
    $.fbBtn.addEventListener("click", function() {
        fb.authorize();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;