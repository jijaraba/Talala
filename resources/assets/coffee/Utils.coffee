TalalaUtils =
  Global:

    setHeight: (elem) ->
      element = $ elem
      height = element.height()
      $(elem).height(height)
      false

    setHeightSlider: () ->
      height = window.innerHeight

      if window.innerHeight >= 800
        $("#main-page").height(height)

      if window.innerHeight <= 660
        $("#main-page").height(height)

      false

    setWidthBody: () ->
      width = window.innerWidth
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
