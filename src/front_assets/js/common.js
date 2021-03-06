$(document).ready(function () {
  $('#myHeader a').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    $headerHeightSticky = $('#myHeader').outerHeight();
    // perform animated scrolling by getting top-position of target-element and set it as scroll target

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - $headerHeightSticky,
      },
      500,
      'linear'
    );

    return false;
  });

  jQuery('.next-button').click(function () {
    $('#myHeader a.active').next().trigger('click');
  });
  jQuery('.prev-button').click(function () {
    $('#myHeader a.active').prev().trigger('click');
  });
});
$(window)
  .scroll(function () {
    $headerHeightSticky = $('#myHeader').outerHeight();
    var scrollDistance = $(window).scrollTop() + ($headerHeightSticky + 15);

    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('#myHeader a.active').removeClass('active');
        $('#myHeader a').eq(i).addClass('active');
      }
    });
  })
  .scroll();

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('#navbarNav').toggleClass('menu-show');
    $(this).toggleClass('collapsed');
    $('body').toggleClass('menu-open');
  });

  //HamBurger
  // var forEach = function (t, o, r) {
  //     if ("[object Object]" === Object.prototype.toString.call(t))
  //         for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  //     else
  //         for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
  // };
  // var hamburgers = document.querySelectorAll(".hamburger");
  // if (hamburgers.length > 0) {
  //     forEach(hamburgers, function (hamburger) {
  //         hamburger.addEventListener("click", function () {
  //             this.classList.toggle("is-active");
  //         }, false);
  //     });
  // }

  //WOW
  new WOW().init();

  //padding-top
  $('.inner-page').css('padding-top', $('#main-header').height() + 'px');

  $('.owl-carousel-blogs').owlCarousel({
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoWidth: false,
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    pag: true,
    responsive: {
      320: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1024: {
        items: 2,
      },
      1366: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  });
});

$(function () {
  $('.left-sidebar').StickySidebar({
    // Settings
    additionalMarginTop: 40,
  });
});

(function ($) {
  $.fn.StickySidebar = function (options) {
    var defaults = {
      containerSelector: '',
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: true,
      minWidth: 0,
      disableOnResponsiveLayouts: true,
      sidebarBehavior: 'modern',
    };
    options = $.extend(defaults, options);

    // Validate options
    options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
    options.additionalMarginBottom =
      parseInt(options.additionalMarginBottom) || 0;

    tryInitOrHookIntoEvents(options, this);

    // Try doing init, otherwise hook into window.resize and document.scroll and try again then.
    function tryInitOrHookIntoEvents(options, $that) {
      var success = tryInit(options, $that);

      if (!success) {
        $(document).scroll(
          (function (options, $that) {
            return function (evt) {
              var success = tryInit(options, $that);

              if (success) {
                $(this).unbind(evt);
              }
            };
          })(options, $that)
        );
        $(window).resize(
          (function (options, $that) {
            return function (evt) {
              var success = tryInit(options, $that);

              if (success) {
                $(this).unbind(evt);
              }
            };
          })(options, $that)
        );
      }
    }

    // Try doing init if proper conditions are met.
    function tryInit(options, $that) {
      if (options.initialized === true) {
        return true;
      }

      if ($('body').width() < options.minWidth) {
        return false;
      }

      init(options, $that);

      return true;
    }

    // Init the sticky sidebar(s).
    function init(options, $that) {
      options.initialized = true;

      // Add CSS
      $('head').append(
        $(
          '<style>.StickySidebar:after {content: ""; display: table; clear: both;}</style>'
        )
      );

      $that.each(function () {
        var o = {};

        o.sidebar = $(this);

        // Save options
        o.options = options || {};

        // Get container
        o.container = $(o.options.containerSelector);
        if (o.container.length == 0) {
          o.container = o.sidebar.parent();
        }

        // Create sticky sidebar
        o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
        o.sidebar.css({
          position: 'relative',
          overflow: 'visible',
          // The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
          '-webkit-box-sizing': 'border-box',
          '-moz-box-sizing': 'border-box',
          'box-sizing': 'border-box',
        });

        // Get the sticky sidebar element. If none has been found, then create one.
        o.stickySidebar = o.sidebar.find('.StickySidebar');
        if (o.stickySidebar.length == 0) {
          o.sidebar.find('script').remove(); // Remove <script> tags, otherwise they will be run again on the next line.
          o.stickySidebar = $('<div>')
            .addClass('StickySidebar')
            .append(o.sidebar.children());
          o.sidebar.append(o.stickySidebar);
        }

        // Get existing top and bottom margins and paddings
        o.marginTop = parseInt(o.sidebar.css('margin-top'));
        o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
        o.paddingTop = parseInt(o.sidebar.css('padding-top'));
        o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

        // Add a temporary padding rule to check for collapsable margins.
        var collapsedTopHeight = o.stickySidebar.offset().top;
        var collapsedBottomHeight = o.stickySidebar.outerHeight();
        o.stickySidebar.css('padding-top', 1);
        o.stickySidebar.css('padding-bottom', 1);
        collapsedTopHeight -= o.stickySidebar.offset().top;
        collapsedBottomHeight =
          o.stickySidebar.outerHeight() -
          collapsedBottomHeight -
          collapsedTopHeight;
        if (collapsedTopHeight == 0) {
          o.stickySidebar.css('padding-top', 0);
          o.stickySidebarPaddingTop = 0;
        } else {
          o.stickySidebarPaddingTop = 1;
        }

        if (collapsedBottomHeight == 0) {
          o.stickySidebar.css('padding-bottom', 0);
          o.stickySidebarPaddingBottom = 0;
        } else {
          o.stickySidebarPaddingBottom = 1;
        }

        // We use this to know whether the user is scrolling up or down.
        o.previousScrollTop = null;

        // Scroll top (value) when the sidebar has fixed position.
        o.fixedScrollTop = 0;

        // Set sidebar to default values.
        resetSidebar();

        o.onScroll = function (o) {
          // Stop if the sidebar isn't visible.
          if (!o.stickySidebar.is(':visible')) {
            return;
          }

          // Stop if the window is too small.
          if ($('body').width() < o.options.minWidth) {
            resetSidebar();
            return;
          }

          // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
          if (o.options.disableOnResponsiveLayouts) {
            var sidebarWidth = o.sidebar.outerWidth(
              o.sidebar.css('float') == 'none'
            );

            if (sidebarWidth + 50 > o.container.width()) {
              resetSidebar();
              return;
            }
          }

          var scrollTop = $(document).scrollTop();
          var position = 'static';

          // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
          if (
            scrollTop >=
            o.container.offset().top +
              (o.paddingTop + o.marginTop - o.options.additionalMarginTop)
          ) {
            // The top and bottom offsets, used in various calculations.
            var offsetTop =
              o.paddingTop + o.marginTop + options.additionalMarginTop;
            var offsetBottom =
              o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

            // All top and bottom positions are relative to the window, not to the parent elemnts.
            var containerTop = o.container.offset().top;
            var containerBottom =
              o.container.offset().top + getClearedHeight(o.container);

            // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
            var windowOffsetTop = 0 + options.additionalMarginTop;
            var windowOffsetBottom;

            var sidebarSmallerThanWindow =
              o.stickySidebar.outerHeight() + offsetTop + offsetBottom <
              $(window).height();
            if (sidebarSmallerThanWindow) {
              windowOffsetBottom =
                windowOffsetTop + o.stickySidebar.outerHeight();
            } else {
              windowOffsetBottom =
                $(window).height() -
                o.marginBottom -
                o.paddingBottom -
                options.additionalMarginBottom;
            }

            var staticLimitTop =
              containerTop - scrollTop + o.paddingTop + o.marginTop;
            var staticLimitBottom =
              containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

            var top = o.stickySidebar.offset().top - scrollTop;
            var scrollTopDiff = o.previousScrollTop - scrollTop;

            // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
            if (o.stickySidebar.css('position') == 'fixed') {
              if (o.options.sidebarBehavior == 'modern') {
                top += scrollTopDiff;
              }
            }

            if (o.options.sidebarBehavior == 'stick-to-top') {
              top = options.additionalMarginTop;
            }

            if (o.options.sidebarBehavior == 'stick-to-bottom') {
              top = windowOffsetBottom - o.stickySidebar.outerHeight();
            }

            if (scrollTopDiff > 0) {
              // If the user is scrolling up.
              top = Math.min(top, windowOffsetTop);
            } else {
              // If the user is scrolling down.
              top = Math.max(
                top,
                windowOffsetBottom - o.stickySidebar.outerHeight()
              );
            }

            top = Math.max(top, staticLimitTop);

            top = Math.min(
              top,
              staticLimitBottom - o.stickySidebar.outerHeight()
            );

            // If the sidebar is the same height as the container, we won't use fixed positioning.
            var sidebarSameHeightAsContainer =
              o.container.height() == o.stickySidebar.outerHeight();

            if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
              position = 'fixed';
            } else if (
              !sidebarSameHeightAsContainer &&
              top == windowOffsetBottom - o.stickySidebar.outerHeight()
            ) {
              position = 'fixed';
            } else if (
              scrollTop + top - o.sidebar.offset().top - o.paddingTop <=
              options.additionalMarginTop
            ) {
              // Stuck to the top of the page. No special behavior.
              position = 'static';
            } else {
              // Stuck to the bottom of the page.
              position = 'absolute';
            }
          }

          /*
           * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
           * It's way slower to first check if the values have changed.
           */
          if (position == 'fixed') {
            o.stickySidebar.css({
              position: 'fixed',
              width: o.sidebar.width(),
              top: top,
              left:
                o.sidebar.offset().left +
                parseInt(o.sidebar.css('padding-left')),
            });
          } else if (position == 'absolute') {
            var css = {};

            if (o.stickySidebar.css('position') != 'absolute') {
              css.position = 'absolute';
              css.top =
                scrollTop +
                top -
                o.sidebar.offset().top -
                o.stickySidebarPaddingTop -
                o.stickySidebarPaddingBottom;
            }

            css.width = o.sidebar.width();
            css.left = '';

            o.stickySidebar.css(css);
          } else if (position == 'static') {
            resetSidebar();
          }

          if (position != 'static') {
            if (o.options.updateSidebarHeight == true) {
              o.sidebar.css({
                'min-height':
                  o.stickySidebar.outerHeight() +
                  o.stickySidebar.offset().top -
                  o.sidebar.offset().top +
                  o.paddingBottom,
              });
            }
          }

          o.previousScrollTop = scrollTop;
        };

        // Initialize the sidebar's position.
        o.onScroll(o);

        // Recalculate the sidebar's position on every scroll and resize.
        $(document).scroll(
          (function (o) {
            return function () {
              o.onScroll(o);
            };
          })(o)
        );
        $(window).resize(
          (function (o) {
            return function () {
              o.stickySidebar.css({
                position: 'static',
              });
              o.onScroll(o);
            };
          })(o)
        );

        // Reset the sidebar to its default state
        function resetSidebar() {
          o.fixedScrollTop = 0;
          o.sidebar.css({
            'min-height': '1px',
          });
          o.stickySidebar.css({
            position: 'static',
            width: '',
          });
        }

        // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
        function getClearedHeight(e) {
          var height = e.height();

          e.children().each(function () {
            height = Math.max(height, $(this).height());
          });

          return height;
        }
      });
    }
  };
})(jQuery);

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName('tab');
  x[n].style.display = 'block';
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById('prevBtn').style.display = 'none';
  } else {
    document.getElementById('prevBtn').style.display = 'inline';
  }
  if (n == x.length - 1) {
    document.getElementById('nextBtn').innerHTML = 'Submit';
  } else {
    document.getElementById('nextBtn').innerHTML = 'Next';
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName('tab');
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = 'none';
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById('regForm').submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field:
      y[i].className += 'invalid ';
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish';
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName('step');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '');
  }
  //... and adds the "active" class on the current step:
  x[n].className += ' active';
}
jQuery(document).ready(function ($) {
  'use strict';
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });
});
$(document).ready(function () {
  $('.radio-img').click(function () {
    $('.next-btn').trigger('click');
  });
});

$(window).scroll(function () {
  //padding-top
  $('.page-wrapper').css('padding-top', $('.banner-sec').height() + 'px');
});

$(window).resize(function () {
  //padding-top
  $('.page-wrapper').css('padding-top', $('.banner-sec').height() + 'px');
});
