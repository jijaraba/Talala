Talala =

  Main: ()->
    options =
      menuExtended: false,
      widthPageInfo: 0,
      slider: {
        position: 0,
        width: 0,
        count: 0,
      }
      animationTime: 2000,
      factorTime: 1,


    @init = (options)->
      $(window).on('scroll', @.onScroll);
      $(window).on('resize', @.onResize);
      @eventHandler(options)
      return

    @onScroll = () ->

    @onResize = () ->
      #Slider Width
      slider_container()
      TalalaUtils.Global.sliderControl('-', options.slider, 'normal')
      #Initials Height and Width
      TalalaUtils.Global.setHeightSlider()
      TalalaUtils.Global.setWidthBody()
      return

    @gallery_global = () ->
      return

    @eventHandler = (options)->
      TalalaUtils.Global.setHeightSlider()
      TalalaUtils.Global.setWidthBody()

      #Loading
      $('#loading').animate({opacity: '1'}, options.animationTime * options.factorTime, () ->
        $('#loading').fadeOut(1000);
        options.slider.position++
        TalalaUtils.Global.sliderControl('-', options.slider)
      );

      #Slider Width
      slider_container()

      #Close Info
      $('.close-info').bind "click", (e)->
        e.preventDefault()
        $this = $(this)
        $("#" + $this.data("close")).animate({'right': "-" + options.widthPageInfo + "px"}, options.animationTime, "easeOutBounce", ()->
          $("#" + $this.data("close")).css({'display': 'none'});
          false
        );
        return


      #Specifications
      $('#specification').bind "click", (e)->
        e.preventDefault()
        options.widthPageInfo = $('#specification_show').width()
        $('#specification_show').css({'display': 'block'}).animate({'right': '0px'}, options.animationTime,
          "easeOutBounce");
        false


      #Hire
      $('#hire').bind "click", (e)->
        e.preventDefault()
        options.widthPageInfo = $('#hire_show').width()
        $('#hire_show').css({'display': 'block'}).animate({'right': '0px'}, options.animationTime, "easeOutBounce");
        false

      $("#menu > li > a").bind "click", (e) ->
        e.preventDefault()
        $this = $(this)
        TalalaUtils.Global.goTo($this.data("menu"))
        false

      $("#arrow_right").bind "click", (e) ->
        e.preventDefault()
        if options.slider.position < (options.slider.count - 1)
          options.slider.position++
          TalalaUtils.Global.sliderControl('-', options.slider)
        return

      $("#arrow_left").bind "click", (e) ->
        e.preventDefault()
        if options.slider.position >= 1
          options.slider.position--
          TalalaUtils.Global.sliderControl('-', options.slider)
        return

    #Slider Container
    slider_container = () ->
      options.slider.width = window.innerWidth
      $("#talala_slider_container > li").css({'width': options.slider.width + "px"})
      options.slider.count = $("#talala_slider_container > li").length
      $("#talala_slider_container").css({'width': (options.slider.width * options.slider.count) + "px"})
      false

    @init(options)

$ ()->
  window.main = new Talala.Main();

