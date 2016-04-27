$(document).ready(function(){
	"use strict";
	

   	if($("#select-menu").length){
		$("#select-menu").selectbox();
	}
	if($("select").length){
		$('select').selectric();
	}

    if($('.countdown').length){
        $('.countdown').downCount({ date: '08/08/2016 12:00:00', offset: +1 });
      }

      if($('.counter').length){
        $('.counter').counterUp({
          delay: 10,
          time: 1000
        });
      }


  if($('#owl-demo-main, #owl-demo-6').length){
    var owl = $("#owl-demo-main, #owl-demo-6");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 1],
      [1000, 1],
      [1200, 1]
      ],
      navigation : true

    });
  } 

  if($('#owl-demo-2').length){
    var owl = $("#owl-demo-2");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 2],
      [700, 3],
      [1000, 4],
      [1200, 4]
      ],
      navigation : true

    });
  } 

  if($('#owl-demo-3').length){
    var owl = $("#owl-demo-3");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 1],
      [1000, 1],
      [1200, 1]
      ],
      navigation : true

    });
  } 
  if($('#owl-demo-4').length){
    var owl = $("#owl-demo-4");
    owl.owlCarousel({ 
     autoPlay: 5000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 2],
      [600, 6],
      [700, 6],
      [1000, 6],
      [1200, 6]
      ],
      navigation : false

    });
  } 

     var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');
   

    $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager'
    });


   
	  
      jQuery(window).load(function($) {
    var filter_container = jQuery('#filterable-item-holder-1');

    filter_container.children().css('position','relative'); 
    filter_container.masonry({
      singleMode: true,
      itemSelector: '.filterable-item:not(.hide)',
      animate: true,
      animationOptions:{ duration: 800, queue: false }
    }); 
    jQuery(window).resize(function(){
      var temp_width =  filter_container.children().filter(':first')();
      filter_container.masonry({
        columnWidth: temp_width,
        singleMode: true,
        itemSelector: '.filterable-item:not(.hide)',
        animate: true,
        animationOptions:{ duration: 800, queue: false }
      });   
    }); 
    jQuery('ul#filterable-item-filter-1 a').click(function(e){  

      jQuery(this).addClass("active");
      jQuery(this).parents("li").siblings().children("a").removeClass("active");
      e.preventDefault();
      
      var select_filter = jQuery(this).attr('data-value');
      
      if( select_filter == "All" || jQuery(this).parent().index() == 0 ){   
        filter_container.children().each(function(){
          if( jQuery(this).hasClass('hide') ){
            jQuery(this).removeClass('hide');
            jQuery(this).fadeIn();
          }
        });
      }else{
        filter_container.children().not('.' + select_filter).each(function(){
          if( !jQuery(this).hasClass('hide') ){
            jQuery(this).addClass('hide');
            jQuery(this).fadeOut();
          }
        });
        filter_container.children('.' + select_filter).each(function(){
          if( jQuery(this).hasClass('hide') ){
            jQuery(this).removeClass('hide');
            jQuery(this).fadeIn();
          }
        });
      }
      
      filter_container.masonry(); 
      
    });
  });
  
  
  
  $( function() {

  // filter functions
  var filterFns = {
    greaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    even: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) % 2 === 0;
    }
  };

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.color-shape',
    filter: function() {
      var isMatched = true;
      var $this = $(this);
      
      for ( var prop in filters ) {
        var filter = filters[ prop ];
        // use function if it matches
        filter = filterFns[ filter ] || filter;
        // test each filter
        if ( filter ) {
          isMatched = isMatched && $(this).is( filter );
        }
        // break if not matched
        if ( !isMatched ) {
          break;
        }
      }
      return isMatched;
    }
  });

  // store filter for each group
  var filters = {};

  $('#filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // arrange, and use filter fn
    $container.isotope('arrange');
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});
  




	$(document).ready(function(){
		$("area[rel^='prettyPhoto']").prettyPhoto();
		
		$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
		$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({});
	});


	$(document).ready(function(){
		$(".show").click(function(){
			$(".searchform").toggle();
		});
	});

  /* ---------------------------------------------------------------------- */
  /*  Google Map Function for Custom Style
  
  /* ---------------------------------------------------------------------- */
  
if($('#map-canvas').length){
	google.maps.event.addDomListener(window, 'load', initialize);
}
function initialize() {
  var MY_MAPTYPE_ID = 'custom_style';
  var map;
  var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
  var featureOpts = [
    {
      stylers: [
      { hue: '#f9f9f9' },     
      { visibility: 'simplified' },
      { gamma: 0.7 },
      { saturation: -200 },
      { lightness: 15 },
      { weight: 0.6 }
      ]
    },
    {
    featureType: "road",
      elementType: "geometry",
      stylers: [
      { lightness: 30 },
      { visibility: "simplified" }
      ]
    },
    {
      elementType: 'labels',
      stylers: [      
      { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
      { color: '#000' }
      ]
    }
  ];  

  var mapOptions = {
    zoom: 13,
    scrollwheel: false,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}





    $(document).ready(function() {
     
      var owl = $("#owl-demo-1");
     
      owl.owlCarousel({
         
          itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
          ],
          navigation : false
     
      });
     
    });


   $('#cal2').click(function(){
       $(document).ready(function(){
           $("#my-datepicker").datepicker().focus();
       });
   });

   $('#cal3').click(function(){
       $(document).ready(function(){
           $("#my-datepicker2").datepicker().focus();
       });
   });

  $(document).ready(function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var events_array = [
        {
        title: 'Test1',
        start: new Date(2012, 8, 20),
        tip: 'Personal tip 1'},
    {
        title: 'Test2',
        start: new Date(2012, 8, 21),
        tip: 'Personal tip 2'}
    ];

    $('#calendar-sidebar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        selectable: true,
        events: events_array,
        eventRender: function(event, element) {
            element.attr('title', event.tip);
        }
    });
    

$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});



    
});
});
