window.id = 0;
document.addEventListener("DOMContentLoaded",function(){
	//code thực hiện
	var nut=document.getElementsByTagName("li");
	var slide=document.getElementsByClassName("motslide");
	var tamgiac1=document.getElementsByClassName("tamgiac1");
	var tamgiac2=document.getElementsByClassName("tamgiac2");
	var tamgiac3=document.getElementsByClassName("tamgiac3");
	var noidung=document.getElementsByClassName("noidung");

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
			window.id = this.getAttribute('data-slider');
			//slide[ID].classList.add('truotphai');
			tamgiac1[window.id].classList.add('phai');
			tamgiac2[window.id].classList.add('phai1');
			tamgiac3[window.id].classList.add('trai');
			noidung[window.id].classList.add('phai2');
			var nutcanthaotac=document.getElementById(window.id);
			nutcanthaotac.classList.toggle('xuathien');
			console.log( "an nut = " + window.id);
		}
	}//click chuyển slide

	auto();
    function auto() {
		var thoigian = setInterval(function() {
			window.id++;
			for (var k = 0; k <nut.length; k++) {
				nut[k].classList.remove('active');
				slide[k].classList.remove('xuathien');
				tamgiac1[k].classList.remove('phai');
				tamgiac2[k].classList.remove('phai1');
				tamgiac3[k].classList.remove('trai');
				noidung[k].classList.remove('phai2');
				nut[k].classList.remove('active');
			}
			if (window.id === nut.length) {
				window.id = 0;
				slide[window.id].classList.add('xuathien');
				tamgiac1[window.id].classList.add('phai');
				tamgiac2[window.id].classList.add('phai1');
				tamgiac3[window.id].classList.add('trai');
				noidung[window.id].classList.add('phai2');
				nut[window.id].classList.add('active');
			}
			else {
				nut[window.id].classList.add('active');
				slide[window.id].classList.add('xuathien');
				tamgiac1[window.id].classList.add('phai');
				tamgiac2[window.id].classList.add('phai1');
				tamgiac3[window.id].classList.add('trai');
				noidung[window.id].classList.add('phai2');
			}
			console.log( "auto = " + window.id);
    }
    ,5000)
}
},false);
 //    // for(var i = 0; i < 3; i++){
 //    //     nut[i].addEventListener('click',function () {
 //    //         clearInterval(thoigian);
 //    //             //Click vào một nút bất kì dừng auto chuyển slide
 //    //     })
 //    // }
    
 //    };
     

    