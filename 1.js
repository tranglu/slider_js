
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementsByTagName("li");
	var slide=document.getElementsByClassName("motslide");
	var tamgiac1=document.getElementsByClassName("tamgiac1");
	var tamgiac2=document.getElementsByClassName("tamgiac2");
	var tamgiac3=document.getElementsByClassName("tamgiac3");
	var noidung=document.getElementsByClassName("noidung");
	// console.log(tamgiac1);
	for (var i = 0; i < nut.length; i++) {
		
		nut[i].onclick=function(){
			for (var k = 0; k <nut.length; k++) {
				nut[k].classList.remove('active');
				slide[k].classList.remove('xuathien');
				tamgiac1[k].classList.remove('phai');
				tamgiac2[k].classList.remove('phai');
				tamgiac3[k].classList.remove('trai');
				noidung[k].classList.remove('phai');
				//slide[k].classList.remove('truotphai');
			}
			//cho icon click màu trắng
			this.classList.add('active');
			var ID=this.getAttribute('data-slider');

			console.log(tamgiac1[ID]);
			//slide[ID].classList.add('truotphai');
			tamgiac1[ID].classList.add('phai');	
			tamgiac2[ID].classList.add('phai');
			tamgiac3[ID].classList.add('trai');
			noidung[ID].classList.add('phai');
			var nutcanthaotac=document.getElementById(ID);
			nutcanthaotac.classList.toggle('xuathien');	
		}
}
},false);
// document.addEventListener("DOMContentLoaded",function(){
// 	//code thực hiện
// 	var nut=document.getElementsByClassName("tamgiac");
// 	for (var i = 0; i < nut.length; i++) {
// 		nut[i].onclick=function(){
// 			for (var k = 0; k <nut.length; k++) {
// 				nut[k].classList.remove('tamgiactrang');
// 			}
// 			this.classList.toggle('tamgiactrang');
// 			var ID=this.getAttribute('data-nut');
// 			var nutcanthaotac=document.getElementById(ID);
// 			nutcanthaotac.classList.toggle('xuathien');
// 		}
// 	}
// },false);