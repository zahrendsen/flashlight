//Preloader fade into page
$(window).on('load', function() { 
		$(".se-pre-con").fadeOut("slow");
	});
        
        
//radius around mouse 
function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x - 50 + 'px')
    document.documentElement.style.setProperty('--cursorY', y - 90 + 'px')
    document.getElementById('mouse').style.setProperty('left', x - 60  + 'px')
    document.getElementById('mouse').style.setProperty('top', y - 70 +  'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)

$(document).ready(function(){
  $("#mouse").click(function(){
    var src = ($("#mouse").attr("src") === "https://mynameiszach.com/devdevdev/images/flashlightON100.png")
                ? "https://mynameiszach.com/devdevdev/images/flashlight100.png" 
                : "https://mynameiszach.com/devdevdev/images/flashlightON100.png";
    $("#mouse").attr("src", src);
    $("#mouse").toggleClass("mouseOff")
    $(".overlay").toggleClass("overlay2");
    $(".on").toggleClass("off");
  });
});

  
