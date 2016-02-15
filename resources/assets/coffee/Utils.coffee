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

      if window.innerHeight >= 800
        $(".wrapper").height(height)

      if window.innerHeight <= 660
        $(".wrapper").height(height)

      false

window.TalalaUtils = TalalaUtils
