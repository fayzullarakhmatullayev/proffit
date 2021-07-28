$(document).ready(function () {
    function startCircleProgress(){ 
        $('.js-result-slider__circle-one').circleProgress({
            value: 0.07,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-two').circleProgress({
            value: 0.08,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-three').circleProgress({
            value: 0.50,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
    }
    
    var waypoint = new Waypoint({
        element: document.getElementById('js-new'),
        handler: function(direction) {
            startCircleProgress();
        }
    });
    $('.js-direction-number').counterUp({
        delay: 10,
        time: 700
    });
});