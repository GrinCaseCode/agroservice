$(document).ready(function() {

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	
	//кнопка sandwich
	$has_child = $(".menu li").has("ul");
	//кнопка sandwich
	$(".btn-menu_menu").click(function() {
		$(".sidebar-nav").slideUp(200);
		$(".btn-menu_catalog .sandwich").removeClass("active");

		$(this).find(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
		} else {
			$(".menu").slideUp(200);
		}

		$has_child.addClass("has_child");



		$(".menu li:not(.has_child) a").click(function(e) {
				e.preventDefault();
				$(".menu").slideUp(200);
				$(".btn-menu_menu .sandwich").removeClass("active");
		});
		
	});

	$(".menu li.has_child a").click(function(e) {
				e.preventDefault();
			if ($(this).siblings("ul").is(":hidden")) {
					$(this).siblings("ul").slideDown(200);
				} else {
					$(this).siblings("ul").slideUp(200);
				}
		});

	$(".btn-menu_catalog").click(function() {
		$(".menu").slideUp(200);
		$(".btn-menu_menu .sandwich").removeClass("active");

		$(this).find(".sandwich").toggleClass("active");
		if ($(".sidebar-nav").is(":hidden")) {
			$(".sidebar-nav").slideDown(200);
		} else {
			$(".sidebar-nav").slideUp(200);
		}


		$(".sidebar-nav li:not(.has_child) a").click(function(e) {
				e.preventDefault();
				$(".sidebar-nav").slideUp(200);
				$(".btn-menu_catalog .sandwich").removeClass("active");
		});

		
	});

	$(".sidebar-nav li.has_child a").click(function(e) {
				e.preventDefault();
			if ($(this).siblings("ul").is(":hidden")) {
					$(this).siblings("ul").slideDown(200);
				} else {
					$(this).siblings("ul").slideUp(200);
				}
		});

	$(".btn-sidebar").click(function(e) {
		e.preventDefault();
		$(this).find(".sandwich").toggleClass("active");
		$(".sidebar-content").slideToggle(200);
	});
	

	{
		if ($(window).width() < 768) { 

			$(".title-footer").click(function(e) {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});


		}
	}
	/*высота блока по экрану*/
	function heightDetect() {
		$('.menu').css("height", $(window).height() -$(".header").height() + 60);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


	function heightDetect2() {
		$('.sidebar-nav').css("height", $(window).height() -$(".header").height() + 60);
	};
	heightDetect2();
	$(window).resize(function() {
		heightDetect2();
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1
	});

	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-dealer').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-up"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-down"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				vertical: false,
				verticalSwiping: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				dots: true,
				vertical: false,
				verticalSwiping: false,
			}
		}
		]
	});

	$('.slider-reviews').slick({
		arrows: true,
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1
	});

	$('.slider-team').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-news').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-for').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.slider-nav',
		slidesToScroll: 1,
	});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
	});

	$('.slider-products').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				
			}
		}
		]
	});


	$(".input-phone").mask("+7 (999) 999-99-99");

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(100);
	});

	$('.tabs-about li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container-about").find(".tab-pane-about").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(100);
	});

	{
		if ($(window).width() < 480) { 

			/*scroll to tabs*/

			$('.tabs-about a').on( 'click', function(){ 
				var el = $(this);
				var dest = el.attr('href'); 
				if(dest !== undefined && dest !== '') { 
					$('html').animate({ 
						scrollTop: $(dest).offset().top - 90
        }, 500 // скорость прокрутки
        );
				}
				return false;
			});


		}
	}

	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

