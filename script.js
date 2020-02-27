$("document").ready(function(){
	$(".box4-simple-btn").click(function(){
		let x = this.id;
	if (x == "box4-simple-btn1") {
		document.getElementById("box4-simple-main1").style.display = "block";
		document.getElementById("box4-simple-main2").style.display = "none";
		document.getElementById("box4-simple-main3").style.display = "none";

document.getElementById("box4-more1").style.display = "block";
document.getElementById("box4-more2").style.display = "none";
document.getElementById("box4-more3").style.display = "none";

document.getElementById("box4-simple-btn1").style.background = "#ddd";
document.getElementById("box4-simple-btn2").style.background = "#bbb";
document.getElementById("box4-simple-btn3").style.background = "#bbb";
	}
else if (x == "box4-simple-btn2"){
		document.getElementById("box4-simple-main1").style.dorderBottom = "none";
		document.getElementById("box4-simple-main2").style.dorderBottom = "solid #000 2px";
		document.getElementById("box4-simple-main3").style.dorderBottom = "solid #000 2px";

document.getElementById("box4-more1").style.display = "none";
document.getElementById("box4-more2").style.display = "block";
document.getElementById("box4-more3").style.display = "none";

document.getElementById("box4-simple-btn1").style.background = "#bbb";
document.getElementById("box4-simple-btn2").style.background = "#ddd";
document.getElementById("box4-simple-btn3").style.background = "#bbb";
}

else if (x == "box4-simple-btn3") {
		document.getElementById("box4-simple-main1").style.display = "none";
		document.getElementById("box4-simple-main2").style.display = "none";
		document.getElementById("box4-simple-main3").style.display = "block";

document.getElementById("box4-more1").style.display = "none";
document.getElementById("box4-more2").style.display = "none";
document.getElementById("box4-more3").style.display = "block";

document.getElementById("box4-simple-btn1").style.background = "#bbb";
document.getElementById("box4-simple-btn2").style.background = "#bbb";
document.getElementById("box4-simple-btn3").style.background = "#ddd";
}









	})
})