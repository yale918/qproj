
/*
var Base = {
	getId: function(id){
		return document.getElementById(id);
	},
	getName: function(name){
		return document.getElementsByName(name);
	},
	getTagName: function(tag){
		return document.getElementsByTagName(tag)
	}
};
*/


function Base(){
	this.elements = [];

	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		console.log(this.elements[0].innerHTML)
		return this;
	}

	this.getName = function(name){
		var names = document.getElementsByName(name);
		for(var i =0;i<names.length;i++){
			this.elements.push(names[i]);
		}
		return this;
	};

	this.getTagName = function(tag){
		var tags = document.getElementsByTagName(tag);
		for(var i=0;i<tags.length;i++){
			this.elements.push(tags)
		}
		return this;
	}
}

var $ = function(){
	return new Base();
}




window.onload = function(){
	alert($().getId('box').elements[0].innerHTML)
/*
	alert(Base.getId('box').innerHTML);
	alert(Base.getName('sex')[0].value);
	alert(Base.getTagName('div')[2].innerHTML);
*/

}