function Controller() {
    function onWriteOpen() {
        var writeWin = Alloy.createController("write");
        writeWin.getView().open({
            modal: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "list";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.list = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: false,
        title: "리스트",
        id: "list"
    });
    $.__views.list && $.addTopLevelView($.__views.list);
    $.__views.__alloyId8 = Ti.UI.createButton({
        title: "글쓰기",
        id: "__alloyId8"
    });
    onWriteOpen ? $.__views.__alloyId8.addEventListener("click", onWriteOpen) : __defers["$.__views.__alloyId8!click!onWriteOpen"] = true;
    $.__views.list.rightNavButton = $.__views.__alloyId8;
    var __alloyId10 = {};
    var __alloyId12 = [];
    var __alloyId14 = {
        type: "Ti.UI.ImageView",
        properties: {
            borderColor: "pink",
            borderWidth: 1,
            backgroundColor: "red"
        }
    };
    __alloyId12.push(__alloyId14);
    var __alloyId16 = {
        type: "Ti.UI.Label",
        bindId: "userNameLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 0,
            top: 10,
            left: 60,
            font: {
                fontSize: 13
            },
            text: "User Name",
            bindId: "userNameLabel"
        }
    };
    __alloyId12.push(__alloyId16);
    var __alloyId18 = {
        type: "Ti.UI.Label",
        bindId: "contentLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 0,
            top: 25,
            left: 60,
            right: 10,
            height: 25,
            font: {
                fontSize: 15
            },
            text: "Post Content",
            bindId: "contentLabel"
        }
    };
    __alloyId12.push(__alloyId18);
    var __alloyId20 = {
        type: "Ti.UI.Label",
        bindId: "dateLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 0,
            top: 10,
            right: 10,
            font: {
                fontSize: 12
            },
            text: "0000.00.00",
            bindId: "dateLabel"
        }
    };
    __alloyId12.push(__alloyId20);
    var __alloyId11 = {
        properties: {
            height: 60,
            name: "postTemplate"
        },
        childTemplates: __alloyId12
    };
    __alloyId10["postTemplate"] = __alloyId11;
    var __alloyId22 = [];
    var __alloyId24 = {
        type: "Ti.UI.ImageView",
        properties: {
            borderColor: "pink",
            borderWidth: 1,
            backgroundColor: "red"
        }
    };
    __alloyId22.push(__alloyId24);
    var __alloyId26 = {
        type: "Ti.UI.Label",
        bindId: "contentLabel",
        properties: {
            borderColor: "blue",
            borderWidth: 0,
            top: 25,
            left: 60,
            right: 10,
            height: 25,
            font: {
                fontSize: 15
            },
            text: "Post Content",
            bindId: "contentLabel"
        }
    };
    __alloyId22.push(__alloyId26);
    var __alloyId21 = {
        properties: {
            name: "postTemplate2"
        },
        childTemplates: __alloyId22
    };
    __alloyId10["postTemplate2"] = __alloyId21;
    var __alloyId27 = [];
    var __alloyId29 = [];
    $.__views.__alloyId30 = {
        template: "postTemplate",
        properties: {
            id: "__alloyId30"
        }
    };
    __alloyId29.push($.__views.__alloyId30);
    $.__views.postSection = Ti.UI.createListSection({
        id: "postSection"
    });
    __alloyId27.push($.__views.postSection);
    $.__views.postSection.items = __alloyId29;
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId27,
        templates: __alloyId10,
        id: "listView"
    });
    $.__views.list.add($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var postCol = Alloy.Collections.instance("post");
    var moment = require("alloy/moment");
    postCol.on("reset", function() {
        var items = [];
        postCol.each(function(model) {
            items.push({
                userNameLabel: {
                    text: model.get("user").username
                },
                contentLabel: {
                    text: model.get("content")
                },
                dateLabel: {
                    text: moment(model.get("created_at")).fromNow()
                },
                template: "postTemplate",
                properties: {
                    itemId: model.id
                }
            });
        });
        $.postSection.setItems(items);
    });
    postCol.on("add", function(model) {
        var item = {
            contentLabel: {
                text: model.get("content")
            },
            properties: {
                itemId: model.id
            },
            template: "postTemplate"
        };
        $.postSection.insertItemsAt(0, [ item ]);
    });
    postCol.on("change:content", function(model) {
        var index;
        var foundItem = _.find($.postSection.items, function(item, idx) {
            if (item.properties.itemId == model.id) {
                index = idx;
                return true;
            }
            return false;
        });
        foundItem.contentLabel.text = model.get("content");
        foundItem.template = "postTemplate2";
        $.postSection.updateItemAt(index, foundItem);
    });
    $.listView.addEventListener("itemclick", function(e) {
        var id = e.itemId;
        var cModel = postCol.get(id);
        var detailC = Alloy.createController("detail", {
            model: cModel
        });
        Alloy.Globals.mainTabGroup.activeTab.open(detailC.getView());
    });
    postCol.fetch();
    __defers["$.__views.__alloyId8!click!onWriteOpen"] && $.__views.__alloyId8.addEventListener("click", onWriteOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;