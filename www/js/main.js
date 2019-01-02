(function ($) {
	"use strict";

	jQuery(document).ready(function($){
        var mobileToggler = $('#mobile-toggle'),
        menuBox = $('#menu-main'),
        scrollMeTop = $('#scroll-to-top');

        function mobileMenuInAction() {
			$('body').toggleClass('menu-open');
			menuBox.slideToggle(500, 'swing');
        }
        
        // Resize cleanup
        $(window).on('resize', function () {
			menuBox.removeAttr('style');
			$('.dropdown').removeAttr('style');
			$('body').removeClass('menu-open');
			mobileToggler.data('clicked', false);		
			
		});

        // Header mobile menu switcher
        mobileToggler.on('click', function () {
            mobileToggler.data('clicked', true);
            mobileMenuInAction();
        });

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {

        if ($(window).scrollTop() > 500) {
            scrollMeTop.fadeIn();
        } else {
            scrollMeTop.fadeOut();
        }
        });

        // Move to top by clicking sticky footer button
        scrollMeTop.on('click', function () {
        $('html, body').animate({
             'scrollTop': 0 
            }, 1000, 'swing');
        });

        // Semantic UI Range
        $('#double').range({
            min: 1,
            max: 50,
            start: 50,
            step: 0.1,
            verbose: true,
            debug: true,
            onChange: function(value) {
              var
                $self = $(this),
                firstVal = $self.range('get thumb value'),
                secVal = $self.range('get thumb value', 'second');                 
                $('#range-min').val(secVal);
                $('#range-max').val(firstVal);
            }
          });
          $('.ui.dropdown').dropdown({
           
          });
    });
}(jQuery));