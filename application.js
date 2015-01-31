$(document).ready(function(){
  //AwesomeBox Hover
  $('.one').mouseenter(function(){
    $('.first-row-overlay').fadeIn(100).css('display', 'block');
  });

  $('.first-row-overlay').mouseout(function(){
    $('.first-row-overlay').fadeOut(100);
  });

  //AwesomeBox Slideshow
  var aboxCurrIndex = 0,
    aboxSlides = $('.awesomebox-slideshow .slide'),
    aboxSlideshowLength = aboxSlides.length;

  function cycleAboxSlides() {
    var aboxSlide = $('.awesomebox-slideshow .slide').eq(aboxCurrIndex);
    aboxSlides.hide();
    aboxSlide.css('display','inline-block');
  }

  $('.abox-next').click(function() {
    aboxCurrIndex += 1;
    if (aboxCurrIndex > aboxSlideshowLength - 1) {
      aboxCurrIndex = 0;
    }
    cycleAboxSlides();
  });

  $('.abox-previous').click(function() {
    aboxCurrIndex -= 1;
    if (aboxCurrIndex < 0) {
      aboxCurrIndex = aboxSlideshowLength - 1;
    }
    cycleAboxSlides();
  });



  //Rutgers Hover
  $('.left-four-five').mouseenter(function(){
    $('.second-large-overlay').fadeIn(100).css('display', 'block');
  });

  $('.second-large-overlay').mouseout(function(){
    $('.second-large-overlay').fadeOut(100);
  });

  //Rutgers Slideshow
  var RutCurrIndex = 0,
    RutSlides = $('.rutgers-slideshow .slide'),
    RutSlideshowLength = RutSlides.length;

  function cycleRutSlides() {
    var RutSlide = $('.rutgers-slideshow .slide').eq(RutCurrIndex);
    RutSlides.hide();
    RutSlide.css('display','inline-block');
  }

  $('.rutgers-next').click(function() {
    RutCurrIndex += 1;
    if (RutCurrIndex > RutSlideshowLength - 1) {
      RutCurrIndex = 0;
    }
    cycleRutSlides();
  });

  $('.rutgers-previous').click(function() {
    RutCurrIndex -= 1;
    if (RutCurrIndex < 0) {
      RutCurrIndex = RutSlideshowLength - 1;
    }
    cycleRutSlides();
  });




  //Edgar Hover
  $('.four').mouseenter(function(){
    $('.third-overlay').fadeIn(100).css('display', 'block');
  });

  $('.third-overlay').mouseout(function(){
    $('.third-overlay').fadeOut(100);
  });



  //Boogie Hover
  $('.five').mouseenter(function(){
    $('.fourth-overlay').fadeIn(100).css('display', 'block');
  });

  $('.fourth-overlay').mouseout(function(){
    $('.fourth-overlay').fadeOut(100);
  });




  //Skoodle Hover
  $('.nine').mouseenter(function(){
    $('.fifth-overlay').fadeIn(100).css('display', 'block');
  });

  $('.fifth-overlay').mouseout(function(){
    $('.fifth-overlay').fadeOut(100);
  });



  //Macys Hover
  $('.ten').mouseenter(function(){
    $('.sixth-overlay').fadeIn(100).css('display', 'block');
  });

  $('.sixth-overlay').mouseout(function(){
    $('.sixth-overlay').fadeOut(100);
  });




  //Photography Hover
  $('.center-nine-ten').mouseenter(function(){
    $('.seventh-overlay').fadeIn(100).css('display', 'block');
  });

  $('.seventh-overlay').mouseout(function(){
    $('.seventh-overlay').fadeOut(100);
  });

  //Photography Slideshow
  var photoCurrIndex = 0,
    photoSlides = $('.photography-slideshow .slide'),
    photoSlideshowLength = photoSlides.length;

  function cyclephotoSlides() {
    var photoSlide = $('.photography-slideshow .slide').eq(photoCurrIndex);
    photoSlides.hide();
    photoSlide.css('display','inline-block');
  }

  $('.photography-next').click(function() {
    photoCurrIndex += 1;
    if (photoCurrIndex > photoSlideshowLength - 1) {
      photoCurrIndex = 0;
    }
    cyclephotoSlides();
  });

  $('.photography-previous').click(function() {
    photoCurrIndex -= 1;
    if (photoCurrIndex < 0) {
      photoCurrIndex = photoSlideshowLength - 1;
    }
    cyclephotoSlides();
  });



  //Design Hover
  $('.right-eleven-twelve').mouseenter(function(){
    $('.eigth-overlay').fadeIn(100).css('display', 'block');
  });

  $('.eigth-overlay').mouseout(function(){
    $('.eigth-overlay').fadeOut(100);
  });

  //Design Slideshow
  var designCurrIndex = 0,
    designSlides = $('.design-slideshow .slide'),
    designSlideshowLength = designSlides.length;

  function cycledesignSlides() {
    var designSlide = $('.design-slideshow .slide').eq(designCurrIndex);
    designSlides.hide();
    designSlide.css('display','inline-block');
  }

  $('.design-next').click(function() {
    designCurrIndex += 1;
    if (designCurrIndex > designSlideshowLength - 1) {
      designCurrIndex = 0;
    }
    cycledesignSlides();
  });

  $('.design-previous').click(function() {
    designCurrIndex -= 1;
    if (designCurrIndex < 0) {
      designCurrIndex = designSlideshowLength - 1;
    }
    cycledesignSlides();
  });




});





