var args = arguments[0] || {}
var model = args.model;

if(model){
	$.content.value = model.get('content');
	$.name.text = model.get('name');
	$.date.text = model.get('date');
}



$.content.addEventListener('change', function(){
	model.set('content', this.value);
});

$.getView().setTitle(model.get('name'));
