function Controller() {
    function onClose() {
        $.getView().close();
    }
    function onSave() {
        postCol.create({
            content: $.content.value
        }, {
            wait: true
        });
        $.getView().close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "write";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.write = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        id: "write"
    });
    $.__views.write && $.addTopLevelView($.__views.write);
    $.__views.__alloyId32 = Ti.UI.createButton({
        title: "닫기",
        id: "__alloyId32"
    });
    onClose ? $.__views.__alloyId32.addEventListener("click", onClose) : __defers["$.__views.__alloyId32!click!onClose"] = true;
    $.__views.write.leftNavButton = $.__views.__alloyId32;
    $.__views.__alloyId34 = Ti.UI.createButton({
        title: "저장",
        id: "__alloyId34"
    });
    onSave ? $.__views.__alloyId34.addEventListener("click", onSave) : __defers["$.__views.__alloyId34!click!onSave"] = true;
    $.__views.write.rightNavButton = $.__views.__alloyId34;
    $.__views.content = Ti.UI.createTextArea({
        borderColor: "red",
        borderWidth: 1,
        left: 10,
        right: 10,
        height: 150,
        id: "content"
    });
    $.__views.write.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var postCol = Alloy.Collections.instance("post");
    __defers["$.__views.__alloyId32!click!onClose"] && $.__views.__alloyId32.addEventListener("click", onClose);
    __defers["$.__views.__alloyId34!click!onSave"] && $.__views.__alloyId34.addEventListener("click", onSave);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;