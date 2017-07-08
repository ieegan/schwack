var app = new Vue({
	el: '#app',
	data: {
		json: null,
		nav: false,
		active: '',
		location: ''
	},
	methods: {
		checkPage: function(route){
			if(route == this.active)
				return true
			return false
		}
	},
	mounted: function(){
		self = this
		axios.get('data.json')
		.then(function (response) {
			self.json = response.data
			self.active = self.json.default.route
		})
		.catch(function (error) {
			console.log(error)
		});
	}
});

$(document).ready(function () {
    //initialize swiper when document ready  
    var swiper = new Swiper('.swiper-container', {
    	pagination: '.swiper-pagination',
    	slidesPerView: 5,
    	spaceBetween: 30,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	breakpoints: {
    		320: {
    			slidesPerView: 1,
    			spaceBetween: 10
    		},
    		480: {
    			slidesPerView: 2,
    			spaceBetween: 20
    		},
    		640: {
    			slidesPerView: 3,
    			spaceBetween: 30
    		}
    	}
    });       

    $('.swiper-wrapper>.swiper-slide').hover(
    	function () {
    		var parent = $(this).parent();
    		var contain = $('.contain', this);
    		var captionwidth = $('.contain>.caption').width();
    		var spaceremaining = parent.width() - $(this).position().left - $(this).width() - parent.position().left;
    		if (spaceremaining < captionwidth)
    			contain.addClass('left');
    		else
    			contain.removeClass('left');
    		parent.addClass('active');
    		contain.addClass('active');
    	}, 
    	function () {
    		var parent = $(this).parent();
    		var contain = $('.contain', this);
    		parent.removeClass('active');
    		contain.removeClass('active');
    	}
    	);


});