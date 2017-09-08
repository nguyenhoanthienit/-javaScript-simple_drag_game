var dragndrop = (function(){
	var myX = "";
	var myY = "";
	var whichArt = "";

	function resetZIndex(){
		var imgArr = document.querySelectorAll("img");
		for (var i = 0; i < imgArr.length; i++){
			imgArr[i].style.zIndex = "5";
		}
	}

	function moveStart(e) {
		whichArt = e.target;
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		console.log("myX : " + myX);
		resetZIndex();
		whichArt.style.zIndex = 10;
	}

	function moveDragOver(e){
		e.preventDefault();
	}

	function moveDrop(e){
		e.preventDefault();
		whichArt.style.left = e.pageX - myX + "px";
		whichArt.style.top = e.pageY - myY + "px";
		console.log("pageX : " + e.pageX);
		console.log("myX : " + myX);
		console.log(whichArt);
	}

	document.querySelector("body").addEventListener("dragstart", moveStart);
	document.querySelector("body").addEventListener("dragover", moveDragOver);
	document.querySelector("body").addEventListener("drop", moveDrop);
})();