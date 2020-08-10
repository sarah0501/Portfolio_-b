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


    if(x >= 300){
      nav.classList.add('active');
      console.log("test2");
    }

     });