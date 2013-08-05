function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.acslogin/" + s : s.substring(0, index) + "/com.appcelerator.acslogin/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.appcelerator.acslogin");
    this.__widgetId = "com.appcelerator.acslogin";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "textfield";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.acsLoginAccountTxt = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        id: "acsLoginAccountTxt"
    });
    $.__views.acsLoginAccountTxt && $.addTopLevelView($.__views.acsLoginAccountTxt);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;