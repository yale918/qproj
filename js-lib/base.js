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

window.onload = function(){
	alert(Base.getId('box').innerHTML);
	alert(Base.getName('sex')[0].value);
	alert(Base.getTagName('div')[2].innerHTML);
}



function Base(){
	this.elements = [];

	this.getId = function(id){
		this.elements.push(document.getElementById(id));
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


Base.prototype.click = function(fn){
	for(var i =0;i<this.elements.length;i++){
		this.elements[i].onclick = fn;
	}
	return this;
};

Base.prototype.css = function(attr, value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length == 1){
			if(typeof window.getComputedStyle != 'undefined'){
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle !='undefined'){
				return this.elements[i].currentStyle[attr];
			}
		}else{
			this.elements[i].style[attr] = value;
		}
	}
	return this;
}

Base.prototype.getClass = function(className){
	var all = document.getElementsByTagName('*');
	for(var i =0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i])
		}
	}
	return this;
}

Base.prototype.getElement = function(num){
	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
}

Base.prototype.html = function(str){
	for(var i=0; i<this.elements.length;i++){
		if(arguments.length == 0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}


