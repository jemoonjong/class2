//var postCol = Alloy.createCollection('post');
//싱글톤으로 만들기
var postCol = Alloy.Collections.instance('post');

var moment = require('alloy/moment');

postCol.on('reset', function() {
	var items = [];

	postCol.each(function(model) {
		items.push({
			userNameLabel : {
				text : model.get('user').username
			},
			contentLabel : {
				text : model.get('content')
			},
			dateLabel : {
				text : moment(model.get('created_at')).fromNow()
			},
			template : 'postTemplate',
			properties : {
				itemId : model.id
			}
		});
	});

	$.postSection.setItems(items);
	//$.postSection.appendItems(items);
	//$.postSection.insertItemsAt(0, items);
});


postCol.on('add', function(model){
	var item = {
		contentLabel: {
			text : model.get('content')
		},
		properties: {
			itemId: model.id
		},
		template: 'postTemplate'
	};
	
	$.postSection.insertItemsAt(0, [ item ]);
});

postCol.on('change:content', function(model){
	//reset호출
	//postCol.trigger('reset', postCol);
	var index;
	var foundItem = _.find($.postSection.items, function(item, idx){
		if(item.properties.itemId == model.id){
			index = idx;
			return true;
		}
		else {
			return false;
		}
	});
	
	foundItem.contentLabel.text = model.get('content');
	//템플릿변경
	foundItem.template = 'postTemplate2';
	$.postSection.updateItemAt(index, foundItem);
});


$.listView.addEventListener('itemclick', function(e) {
	var id = e.itemId;
	var cModel = postCol.get(id);

	var detailC = Alloy.createController('detail', {
		model : cModel
	});

	Alloy.Globals.mainTabGroup.activeTab.open(detailC.getView());
	//Alloy.Globals.mainTabGroup.setActiveTab(1).open( detailC.getView() );
});

function onWriteOpen() {
	var writeWin = Alloy.createController('write');
	writeWin.getView().open( (OS_IOS)?{modal: true}:null );
}

// postCol.reset([
	// {
		// id : '1',
		// content : '1',
		// name : '홍길동',
		// date : '2013-07-30'
	// }, {
		// id : '2',
		// content : '2',
		// name : '김홍길',
		// date : '2013-07-30'
	// }, {
		// id : '3',
		// content : '3',
		// name : '박수영',
		// date : '2013-07-30'
	// }
// ]);

postCol.fetch();
