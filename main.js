$(document).ready(function(){



	$('#profile__ripple').ripples({
		resolution: 512,
		dropRadius: 10
	});

	const bars = document.querySelectorAll('.progress-bar');

	function runBars () {
		bars.forEach(function(bar){
		let percentage = bar.dataset.percent;
		let tooltip = bar.children[0];
		tooltip.innerText = percentage + '%';
		bar.style.width = percentage + '%';
		})
	}

	runBars();

	let skillsbar = document.querySelector('.progress-bar');

	let options = {
		rootMargin : '0px 0px -100px 0px'
	}

	const sectionObserver = new IntersectionObserver(function(entries){
		if(entries[0].isIntersecting){
			runBars();
		}
	}, options)

	sectionObserver.observe(skillsbar);


	var $wrapper = $('.portfolio-wrapper');

	$wrapper.isotope({
		filter : '*',
		layoutMode : 'masonry',
		animationOptions : {
			duration : 750,
			easing : 'linear'
		}
	});

	let links = document.querySelectorAll('.tabs a');

	links.forEach(link => {
		let selector = link.dataset.filter;
		link.addEventListener('click', function(e){
			e.preventDefault();

			$wrapper.isotope({
				filter : selector,
				layoutMode : 'masonry',
				animationOptions : {
					duration : 750,
					easing : 'linear'
				}
			});


			links.forEach(link =>{
				link.classList.remove('active');
			})

			e.target.classList.add('active');

		});
	})


	$('.magnify').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		},
		zoom:{
			enable: true
		}
	});


	$('.slider').slick({
		arrows: true,
		autoplay: true,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
	});

});