(function() {
  var Talala;

  Talala = {
    Main: function() {
      var options;
      options = {
        menu_extended: false
      };
      this.init = function(options) {
        $(window).on('scroll', this.onScroll);
        $(window).on('resize', this.onResize);
        this.eventHandler(options);
      };
      this.onScroll = function() {};
      this.onResize = function() {
        TalalaUtils.Global.setHeightSlider("#viejooeste_container_slider");
        console.log(window.innerHeight);
      };
      this.gallery_global = function() {};
      this.eventHandler = function(options) {
        console.log(options);
        return TalalaUtils.Global.setHeightBody();
      };
      return this.init(options);
    }
  };

  $(function() {
    return window.main = new Talala.Main();
  });

}).call(this);

//# sourceMappingURL=talala.js.map
