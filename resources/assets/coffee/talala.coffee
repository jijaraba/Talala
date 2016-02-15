Talala =

  Main: ()->

    options =
      menu_extended: false


    @init= (options)->
      $(window).on('scroll', @.onScroll);
      $(window).on('resize', @.onResize);
      @eventHandler(options)
      return

    @onScroll= () ->

    @onResize= () ->
      TalalaUtils.Global.setHeightSlider("#viejooeste_container_slider")
      console.log window.innerHeight
      return

    @gallery_global= () ->

    @eventHandler= (options)->
      console.log options
      TalalaUtils.Global.setHeightBody()

    @init(options)

$ ()->
  window.main = new Talala.Main();

