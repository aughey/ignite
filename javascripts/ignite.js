/* Ignite javascript code */

var currentSlide = 0;
var timePerSlide = 15;
var currentTime = timePerSlide;
var numSlides = 20;
var timerRunning = false;

$.fn.delay = function(time, callback){
    // Empty function:
    jQuery.fx.step.delay = function(){};
    // Return meaningless animation, (will be added to queue)
    return this.animate({delay:1}, time, callback);
}

function timerStep(arg) {
  var curtime = timePerSlide - (arg / 100.0) * timePerSlide;
  $('#countdown').html(Math.ceil(curtime));
}

function slideUrl(index) {
  return "slides/Slide" + index + ".PNG";
}

function nextSlide() {
  timerRunning = false;

  if(currentSlide >= numSlides) {
    initialize();
    return;
  }

  currentSlide = currentSlide + 1;

  loadSlide(currentSlide);
  startTimer();
}

function loadSlide(num) {
  var preload;
  var current;
  if(num % 2) {
    preload = $('#slideimg0');
    current = $('#slideimg1');
  } else {
    preload = $('#slideimg1');
    current = $('#slideimg0');
  }
  current.attr('src',slideUrl(num));
  preload.attr('src',slideUrl(num+1));

  if(false) {
    preload.width('1px');
    preload.height('1px');

    current.width('100%');
    current.height('100%');
  } else {
    preload.css('z-index',0).hide();
    current.css('z-index',1).show();
  }

  $('#slidecount').html(String(num) + "/" + String(numSlides));
}

function startTimer() {
  $('#slidenum').html(currentSlide);

  var bar = $('#complete');
  bar.width('0%');
  bar.animate( { width:"100%" }, 
      { 
duration: timePerSlide * 1000, 
easing: 'linear',
step: timerStep,
complete: nextSlide
});
  timerRunning = true;
}

function toggleStop() {
  if(timerRunning) {
    $('#complete').stop();
    timerRunning = false;
  } else {
    startTimer();
  }
}

function start()
{
  $('#clicktostart').hide();
  startTimer();
}

function initialize() {
  $('#clicktostart').show();
  $('#clicktostart').click(start);
  $('.slide').click(toggleStop);
  currentSlide = 1;
  loadSlide(currentSlide);
}

jQuery(initialize);
