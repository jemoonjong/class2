exports.definition = {
    config: {
        adapter: {
            type: "acs",
            collection_name: "post"
        },
        settings: {
            object_name: "posts",
            object_method: "Posts"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("post", exports.definition, []);

collection = Alloy.C("post", exports.definition, model);

exports.Model = model;

exports.Collection = collection;