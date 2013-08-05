function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setting";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.setting = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        id: "setting"
    });
    $.__views.setting && $.addTopLevelView($.__views.setting);
    $.__views.logoutBtn = Ti.UI.createButton({
        title: "Logout",
        id: "logoutBtn"
    });
    $.__views.setting.add($.__views.logoutBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    $.logoutBtn.addEventListener("click", function() {
        Cloud.Users.logout(function(e) {
            if (e.success) {
                var loginC = Alloy.createController("login");
                loginC.getView().open();
                Ti.App.Properties.setString("acs_id", null);
                Alloy.Globals.mainTabGroup.setActiveTab(0);
            }
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;