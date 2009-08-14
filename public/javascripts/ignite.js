/* Ignite javascript code */

var currentSlide = 0;
var timePerSlide = 15;
var currentTime = timePerSlide;
var numSlides = 20;
var timerRunning = false;
var started = false;

function timerStep(arg) {
  var curtime = (arg / 100.0) * timePerSlide;
  $('#countdown center').html(Math.floor(curtime));
}

function slideUrl(index) {
  return "slides/Slide" + index + ".PNG";
}

function nextSlide() {
  timerRunning = false;
  started = false;

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

  preload.css('z-index',0);
  current.css('z-index',1);

  current.css('right','');
  current.css('bottom','');
  current.css('left','0px');
  current.css('top','0px');
  current.css('width','100%');
  current.css('height','100%');

  preload.css('z-index',2);
  preload.width('20%');
  preload.height('15%');
}

function startTimer() {
  $('#slidenum').html(currentSlide);
  started = true;

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
  if(started == false) {
    start();
  } else if(timerRunning) {
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
  $(window).keypress(toggleStop);
  currentSlide = 1;
  loadSlide(currentSlide);
}

jQuery(initialize);
