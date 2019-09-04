var myBoxes = $('.news-item'); // Populate an array with our three boxes, identified by class

$(window).scroll(function(){ 

var scrollTop = $(window).scrollTop();

myBoxes.each(function(){

var $this = $(this); // Grab current box object

var scrollspeed = parseInt($this.data('scroll-speed')), // Grab the data-scroll-speed value and parse into Integer 

offset = - scrollTop / scrollspeed;

// The offset gives minus value of scrollTop divided by scrollspeed

$this.css('transform', 'translateY(' + offset + 'px)');

// Attaches a CSS transform to translate/move the element up the Y axis by our offset value as we scroll

});

});