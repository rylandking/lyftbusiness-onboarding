(function($) {
  'use strict'; // Start of use strict

  // Add classes so sidebar is default hidden on mobile
  if ($(window).width() < 768) {
    $('body').addClass('sidebar-toggled');
    $('.sidebar').addClass('toggled');
    $('#welcome').addClass('d-none');
  }

  // Toggle the side navigation
  $('#sidebarToggle, #sidebarToggleTop').on('click', function(e) {
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');
    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide');
    }
  });

  // Close sidebar when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('body').addClass('sidebar-toggled');
      $('.sidebar').addClass('toggled');
      $('#welcome').addClass('d-none');
      // $('.sidebar .collapse').collapse('hide');
    }
  });
  // Open sidebar when window is resized above 768px
  $(window).resize(function() {
    if ($(window).width() > 768) {
      $('body').removeClass('sidebar-toggled');
      $('.sidebar').removeClass('toggled');
      $('#welcome').removeClass('d-none');
      // $('.sidebar .collapse').collapse('hide');
    }
  });

  // On click of nav item, go to new page and pass through query params
  $('#index-nav').on('click', function() {
    window.location.href = `index.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#business-travel-nav').on('click', function() {
    window.location.href = `business-travel.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#concierge-nav').on('click', function() {
    window.location.href = `concierge.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#credits-nav').on('click', function() {
    window.location.href = `credits.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(
    e
  ) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top
        },
        1000,
        'easeInOutExpo'
      );
    e.preventDefault();
  });
})(jQuery); // End of use strict
