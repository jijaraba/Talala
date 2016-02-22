(function() {
  var Talala;

  Talala = {
    Main: function() {
      var options, slider_container;
      options = {
        menuExtended: false,
        widthPageInfo: 0,
        slider: {
          position: 0,
          width: 0,
          count: 0
        },
        animationTime: 1500,
        factorTime: 1
      };
      this.init = function(options) {
        $(window).on('scroll', this.onScroll);
        $(window).on('resize', this.onResize);
        this.eventHandler(options);
      };
      this.onScroll = function() {};
      this.onResize = function() {
        slider_container();
        TalalaUtils.Global.sliderControl('-', options.slider, 'normal');
        TalalaUtils.Global.setHeightBody();
      };
      this.gallery_global = function() {};
      this.eventHandler = function(options) {
        TalalaUtils.Global.setHeightBody();
        $('#loading').animate({
          opacity: '1'
        }, options.animationTime * options.factorTime, function() {
          $('#loading').fadeOut(1000);
          options.slider.position++;
          return TalalaUtils.Global.sliderControl('-', options.slider);
        });
        slider_container();
        $('.close-info').bind("click", function(e) {
          var $this;
          e.preventDefault();
          $this = $(this);
          $("#" + $this.data("close")).animate({
            'right': "-" + options.widthPageInfo + "px"
          }, options.animationTime, "easeOutBounce", function() {
            $("#" + $this.data("close")).css({
              'display': 'none'
            });
            return false;
          });
        });
        $('#specification').bind("click", function(e) {
          e.preventDefault();
          options.widthPageInfo = $('#specification_show').width();
          $('#specification_show').css({
            'display': 'block'
          }).animate({
            'right': '0px'
          }, options.animationTime, "easeOutBounce");
          return false;
        });
        $('#hire').bind("click", function(e) {
          e.preventDefault();
          options.widthPageInfo = $('#hire_show').width();
          $('#hire_show').css({
            'display': 'block'
          }).animate({
            'right': '0px'
          }, options.animationTime, "easeOutBounce");
          return false;
        });
        $("#menu > li > a").bind("click", function(e) {
          var $this;
          e.preventDefault();
          $this = $(this);
          TalalaUtils.Global.goTo($this.data("menu"));
          return false;
        });
        $("#arrow_right").bind("click", function(e) {
          e.preventDefault();
          if (options.slider.position < (options.slider.count - 1)) {
            options.slider.position++;
            TalalaUtils.Global.sliderControl('-', options.slider);
          }
        });
        return $("#arrow_left").bind("click", function(e) {
          e.preventDefault();
          if (options.slider.position >= 1) {
            options.slider.position--;
            TalalaUtils.Global.sliderControl('-', options.slider);
          }
        });
      };
      slider_container = function() {
        options.slider.width = window.innerWidth;
        $("#talala_slider_container > li").css({
          'width': options.slider.width + "px"
        });
        options.slider.count = $("#talala_slider_container > li").length;
        $("#talala_slider_container").css({
          'width': (options.slider.width * options.slider.count) + "px"
        });
        return false;
      };
      return this.init(options);
    }
  };

  $(function() {
    return window.main = new Talala.Main();
  });

}).call(this);

//# sourceMappingURL=talala.js.map
