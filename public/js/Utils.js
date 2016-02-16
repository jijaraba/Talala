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
        var height;
        height = window.innerHeight;
        if (window.innerHeight >= 800) {
          $(".wrapper").height(height);
        }
        if (window.innerHeight <= 660) {
          $(".wrapper").height(height);
        }
        return false;
      }
    }
  };

  window.TalalaUtils = TalalaUtils;

}).call(this);

//# sourceMappingURL=Utils.js.map
