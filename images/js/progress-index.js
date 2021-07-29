$(document).ready(function () {
    function startCircleProgress(){ 
        $('.js-result-slider__circle-one').circleProgress({
            value: 0.32,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-two').circleProgress({
            value: 0.26,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-three').circleProgress({
            value: 0.30,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-four').circleProgress({
            value: 0.35,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-five').circleProgress({
            value: 1,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-number').counterUp({
            delay: 20,
            time: 700
        });
    }
    
    var waypoint = new Waypoint({
        element: $('#js-solution, #js-evolution'),
        handler: function(direction) {
            startCircleProgress();
        }
    });
    
    $(document).on('click', '.result .slick-button, .result .slick-dots button', startCircleProgress);
});