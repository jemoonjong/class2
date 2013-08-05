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
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId2"
    });
    var __alloyId3 = {};
    var __alloyId5 = [];
    var __alloyId7 = {
        type: "Ti.UI.ImageView",
        properties: {}
    };
    __alloyId5.push(__alloyId7);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "userNameLabel",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            text: "User Name",
            bindId: "userNameLabel"
        }
    };
    __alloyId5.push(__alloyId9);
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "contentLabel",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            text: "Post Content",
            bindId: "contentLabel"
        }
    };
    __alloyId5.push(__alloyId11);
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "dateLabel",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "#000",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center",
            text: "0000.00.00",
            bindId: "dateLabel"
        }
    };
    __alloyId5.push(__alloyId13);
    var __alloyId4 = {
        properties: {
            name: "postTemplate"
        },
        childTemplates: __alloyId5
    };
    __alloyId3["postTemplate"] = __alloyId4;
    var __alloyId14 = [];
    var __alloyId16 = [];
    $.__views.__alloyId17 = {
        template: "postTemplate",
        properties: {
            id: "__alloyId17"
        }
    };
    __alloyId16.push($.__views.__alloyId17);
    $.__views.postSection = Ti.UI.createListSection({
        id: "postSection"
    });
    __alloyId14.push($.__views.postSection);
    $.__views.postSection.items = __alloyId16;
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId14,
        templates: __alloyId3,
        id: "listView"
    });
    $.__views.__alloyId2.add($.__views.listView);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId19 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId19"
    });
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId18 = Ti.UI.createTab({
        window: $.__views.__alloyId19,
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId18"
    });
    $.__views.index.addTab($.__views.__alloyId18);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;