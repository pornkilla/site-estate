(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        var
            mobileToggler = $('#mobile-toggle'),
            menuBox = $('#menu-main'),
            realtyMenuItem = $('.head-search .selector .items li'),
            realtyMenuItemHint = $('.head-search .selector .icon'),
            sorterButton = $('.filter-panel .toggler'),
            logoHint = $('.logo'),
            popupHint = $('.hint'),
            partnersLogo = $('.partner'),
            socialIcons = $('.social-link'),
            scrollMeTop = $('#scroll-to-top'),
            circle1 = document.getElementById('circle1'),
            circle2 = document.getElementById('circle2');

        new TimelineMax({
            repeat: -1
        }).
        fromTo(circle2, 1.0, {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            ease: Power0.easeOut
        }, 0).
        fromTo(circle2, 1.0, {
            attr: {
                r: 30
            }
        }, {
            attr: {
                r: 45
            },
            ease: Power1.easeOut
        }, 0).
        fromTo(circle1, 1.0, {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            ease: Power0.easeOut
        }, 1).
        fromTo(circle1, 1.0, {
            attr: {
                r: 30
            }
        }, {
            attr: {
                r: 45
            },
            ease: Power1.easeOut
        }, 1);

        function mobileMenuInAction() {
            $('body').toggleClass('menu-open');
            menuBox.slideToggle('slow', 'swing');
        }

        // Search selectors change
        function redrawForms() {
        
            var realtyMenuItemActive = $('.head-search .items li.active'),
                formTarget = realtyMenuItemActive.data('target'),
                boxSelector = $('.head-search form'),
                setFormVisible = $('#form-' + formTarget);

            boxSelector.addClass('hidden');
            setFormVisible.toggleClass('hidden');

        };

        redrawForms();

        $('.head-main .logo').on('click', function () {
            window.location = 'index.html';
        });

        sorterButton.on('click', function () {
            $(this).find('.fa').toggleClass('fa-arrow-down fa-arrow-up');
        });
        realtyMenuItem.on('click', function () {
            if ($(this).hasClass('active') == true) {
                return;
            } else {
                realtyMenuItem.removeClass('active');
                $(this).addClass('active');
                redrawForms();
            }
            if ($(this).hasClass('visible') == true) {
                realtyMenuItem.removeClass('visible');
            }
        });

        // Toggle realty types menu: mobile
        var realtyMenuToggler = $('.head-search .selector .toggle');
        realtyMenuToggler.on('click', function () {
            realtyMenuItem.toggleClass('visible');
        });

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
        $('#ranger-flats').range({
            min: 1.5,
            max: 50,
            start: 50,
            step: 0.1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-flats').val(secVal);
                $('#range-max-flats').val(firstVal);
            }
        });
        $('#ranger-flats-meters').range({
            min: 10,
            max: 300,
            start: 300,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-flats-meters').val(secVal);
                $('#range-max-flats-meters').val(firstVal);
            }
        });
        $('#ranger-resale').range({
            min: 0.5,
            max: 30,
            start: 30,
            step: 0.1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-resale').val(secVal);
                $('#range-max-resale').val(firstVal);
            }
        });
        $('#ranger-resale-meters').range({
            min: 10,
            max: 300,
            start: 300,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-resale-meters').val(secVal);
                $('#range-max-resale-meters').val(firstVal);
            }
        });
        $('#ranger-country').range({
            min: 0.2,
            max: 20,
            start: 20,
            step: 0.1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-country').val(secVal);
                $('#range-max-country').val(firstVal);
            }
        });
        $('#ranger-exclusive').range({
            min: 1,
            max: 50,
            start: 50,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-exclusive').val(secVal);
                $('#range-max-exclusive').val(firstVal);
            }
        });
        $('#ranger-exclusive-meters').range({
            min: 10,
            max: 300,
            start: 300,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-exclusive-meters').val(secVal);
                $('#range-max-exclusive-meters').val(firstVal);
            }
        });
        $('#ranger-commerce').range({
            min: 1,
            max: 150,
            start: 150,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-commerce').val(secVal);
                $('#range-max-commerce').val(firstVal);
            }
        });
        $('#ranger-commerce-meters').range({
            min: 10,
            max: 1000,
            start: 500,
            step: 10,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-commerce-meters').val(secVal);
                $('#range-max-commerce-meters').val(firstVal);
            }
        });
        $('#ranger-rent').range({
            min: 1,
            max: 150,
            start: 150,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-rent').val(secVal);
                $('#range-max-rent').val(firstVal);
            }
        });
        $('#ranger-land').range({
            min: 0.5,
            max: 30,
            start: 30,
            step: 0.1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-land').val(secVal);
                $('#range-max-land').val(firstVal);
            }
        });
        $('#ranger-land-meters').range({
            min: 10,
            max: 300,
            start: 300,
            step: 1,
            verbose: true,
            debug: true,
            onChange: function (value) {
                var
                    $self = $(this),
                    firstVal = $self.range('get thumb value'),
                    secVal = $self.range('get thumb value', 'second');
                $('#range-min-land-meters').val(secVal);
                $('#range-max-land-meters').val(firstVal);
            }
        });

        // Dropdowns
        $('.ui.dropdown').dropdown();

        // Tooltips
        realtyMenuItemHint.popup({
            on: 'hover',
            inline: false,
            hoverable: true,
            position: 'top center',
            delay: {
                show: 500,
                hide: 400
            }
        });
        socialIcons.popup({
            position: 'bottom center'
        });
        partnersLogo.popup({
            position: 'top center'
        });
        logoHint.popup({
            position: 'bottom center'
        });
        popupHint.popup();

        // Modal window
        $('.call-the-call').on('click', function () {
            $('.call-back').modal('show');
        });

        // Dimmer        
        $('#dimmed-message').on('click', function () {
            $('.success-callback').dimmer('show');
        });
        $('.back-to-page').on('click', function () {
            $('.success-callback').dimmer('hide');
        });

        // Glider slider
        $('.slider').glide({
            autoplay: false,
            arrowsWrapperClass: 'slider-arrows',
            arrowRightText: '',
            arrowLeftText: ''
        });
    });
}(jQuery));