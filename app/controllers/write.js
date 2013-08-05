var postCol = Alloy.Collections.instance('post');

function onClose() {
	$.getView().close();
}

function onSave() {
	postCol.create({
		content: $.content.value
	}, { wait: true});
	
	$.getView().close();
}
