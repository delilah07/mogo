console.log('Hello world')
$(function(){
	var header = $("header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

		/* Fixed Header*/
		checkScroll(scrollOffset);

	$(window).on("scroll",function(){
		
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset){
		

		if(scrollOffset >= introH){
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	/*Smooth Scroll*/
	$("[data-scroll]").on("click", function(event) {
		event. preventDefault();

		var $this = $(this),
			blockID = $(this).data('scroll'),
			blockOffset = $(blockID).offset().top;

		$(".nav__link").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop:blockOffset
		}, 500);
	});


	/*Menu Nav Toggle*/
	$(".nav__toggle").on("click",function(event){
		event.preventDefault();

		$(this).toggleClass("active");
		$(".nav").toggleClass("active");
	});

	// Hiding burger menu 
    $(".nav__link").on("click", function(event){
        event.preventDefault();

        $(".nav__toggle").removeClass("active");
        $(".nav").removeClass("active");

    });

    /* Accordion Collapse*/
    $("[data-collapse]").on("click", function(event) {
		event. preventDefault();

		var $this = $(this),
			blockID = $(this).data('collapse');

		$(".accordion-item").removeClass("active");
		$(".accordion-content").hide();

		$(blockID).slideToggle();
		$this.toggleClass("active");

	});
});