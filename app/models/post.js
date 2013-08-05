exports.definition = {
	config: {

		adapter: {
			//type: "properties",
			type: "acs",
			collection_name: "post"
		},
		"settings": {
	        "object_name": "posts", 
	        "object_method": "Posts"
	    }
		// ,
		// idAttribute: 'id'
		
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};