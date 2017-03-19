
function Faсade () {
	
	this.init();
	};

Faсade.prototype = Object.create(App.prototype);

Faсade.prototype.init = function() {

	alert(this.date('2017/03/15 10:10:10', 'ru'));
	};
	

window.addEventListener("DOMContentLoaded", function() {new Faсade});