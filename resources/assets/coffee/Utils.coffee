TalalaUtils =
  Global:

    setHeight: (elem) ->
      element = $ elem
      height = element.height()
      $(".imagen-block .block").height(height)
      false

    setHeightSlider: (elem) ->
      element = $ elem
      height = element.height()
      $(".container-baseline").height(height)
      false

    setHeightBody: () ->
      height = window.innerHeight
      width = window.innerWidth

      if window.innerHeight >= 800
        $(".page-section").height(height)

      if window.innerHeight <= 660
        $(".page-section").height(height)

      $(".page-info").css({
        "right": "-" + width + "px",
        "display": "none"
      })
      false

    goTo: (elementID) ->
      $("html, body").animate({scrollTop: $("#" + elementID).offset().top}, 1000)
      false

    sliderControl: (direction,control,option) ->
      if option == 'normal'
        $("#talala_slider_container").animate({'left': direction + (control.width * control.position ) + "px"}, 0);
      else
        $("#talala_slider_container").animate({'left': direction + (control.width * control.position ) + "px"}, 2000, "easeOutBounce");
      false

window.TalalaUtils = TalalaUtils
