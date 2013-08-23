Array.prototype.contains = function(str) {
	var i = this.length;
	while (i--) {
		if (this[i] === str) {return true; }
	}
	return false;
};
Array.prototype.remove = function(str){
	var l = this.length, i;
	for(i=0; i<l; i++){
		if(this[i] === str){
			this.splice(i,1);
			break;
		}
	}
	return this;
};
Array.prototype.containsProp = function(key,str) {
	var i = this.length,
		holder = [];
	while (i--) {
		if (this[i][key] === str) {
			holder.push(this[i]);
		}
	}
	return holder;
};