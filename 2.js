
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
				tamgiac2[k].classList.remove('phai1');
				tamgiac3[k].classList.remove('trai');
				noidung[k].classList.remove('phai2');
				//slide[k].classList.remove('truotphai');
			}
			//cho icon click màu trắng
			this.classList.add('active');
			var ID=this.getAttribute('data-slider');
			//slide[ID].classList.add('truotphai');
			tamgiac1[ID].classList.add('phai');	
			tamgiac2[ID].classList.add('phai1');
			tamgiac3[ID].classList.add('trai');
			noidung[ID].classList.add('phai2');
			var nutcanthaotac=document.getElementById(ID);
			nutcanthaotac.classList.toggle('xuathien');	
			var nutkichhoat=this;
			var i=0;
			for (i = 0; nutkichhoat=nutkichhoat.previousElementSibling; i++) {
						console.log(i);
						console.log(nutkichhoat);
					}		
		}
		}	
},false);
//click chuyển slide
	