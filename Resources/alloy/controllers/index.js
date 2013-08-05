function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Alloy.createController("list", {
        id: "__alloyId2"
    });
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2.getViewEx({
            recurse: true
        }),
        title: "list",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId5 = Alloy.createController("setting", {
        id: "__alloyId5"
    });
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5.getViewEx({
            recurse: true
        }),
        title: "setting",
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    Cloud.debug = true;
    $.index.open();
    Alloy.Globals.mainTabGroup = $.index;
    var acs_id = Ti.App.Properties.getString("acs_id");
    if (acs_id) {
        Cloud.sessionId = acs_id;
        Cloud.Users.showMe(function() {});
    } else {
        var loginC = Alloy.createController("login");
        loginC.getView().open();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;