/*const nav = document.querySelector('.nav');

window.onscroll = function(){
	var top = window.scrollY;
	console.log(top);
	if (top >= 300) {
		nav.classList.add('active')
	} else {
		nav.classList.remove('active');
	}
}*/


nav = document.querySelector('.nav');
isInViewport = (element) =>{
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
  window.addEventListener("scroll", function (event) {
  	var x = scrollY;
  	if(x == 0){
    	nav.classList.remove('active');
      console.log("test");
    }

    if(isInViewport(document.querySelector('#jamoin'))){
    	nav.classList.add('active');
    	console.log("hier");
    }


    if(x >= 1000){
      nav.classList.add('active');
      console.log("test2");
    }
    /*
    if(isInViewport(document.querySelector('#jamoin2'))){
    	nav.classList.add('blue');
    	console.log("hier");
    }
	*/
    
  });