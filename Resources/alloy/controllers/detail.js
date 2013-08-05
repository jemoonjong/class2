function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        layout: "vertical",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.name = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        left: 10,
        text: "name",
        font: {
            fontSize: 20
        },
        id: "name"
    });
    $.__views.detail.add($.__views.name);
    $.__views.date = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        left: 100,
        text: "date",
        id: "date"
    });
    $.__views.detail.add($.__views.date);
    $.__views.content = Ti.UI.createTextArea({
        borderColor: "red",
        borderWidth: 1,
        left: 10,
        right: 10,
        height: 150,
        id: "content"
    });
    $.__views.detail.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var model = args.model;
    if (model) {
        $.content.value = model.get("content");
        $.name.text = model.get("name");
        $.date.text = model.get("date");
    }
    $.content.addEventListener("change", function() {
        model.set("content", this.value);
    });
    $.getView().setTitle(model.get("name"));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;