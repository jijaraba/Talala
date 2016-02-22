(function() {
  var TalalaUtils;

  TalalaUtils = {
    Global: {
      setHeight: function(elem) {
        var element, height;
        element = $(elem);
        height = element.height();
        $(".imagen-block .block").height(height);
        return false;
      },
      setHeightSlider: function(elem) {
        var element, height;
        element = $(elem);
        height = element.height();
        $(".container-baseline").height(height);
        return false;
      },
      setHeightBody: function() {
        var height, width;
        height = window.innerHeight;
        width = window.innerWidth;
        if (window.innerHeight >= 800) {
          $(".page-section").height(height);
        }
        if (window.innerHeight <= 660) {
          $(".page-section").height(height);
        }
        $(".page-info").css({
          "right": "-" + width + "px",
          "display": "none"
        });
        return false;
      },
      goTo: function(elementID) {
        $("html, body").animate({
          scrollTop: $("#" + elementID).offset().top
        }, 1000);
        return false;
      },
      sliderControl: function(direction, control, option) {
        if (option === 'normal') {
          $("#talala_slider_container").animate({
            'left': direction + (control.width * control.position) + "px"
          }, 0);
        } else {
          $("#talala_slider_container").animate({
            'left': direction + (control.width * control.position) + "px"
          }, 2000, "easeOutBounce");
        }
        return false;
      }
    }
  };

  window.TalalaUtils = TalalaUtils;

}).call(this);

//# sourceMappingURL=Utils.js.map
