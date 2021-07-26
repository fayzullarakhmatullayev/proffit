$(document).ready(function () {
    function startCircleProgress(){ 
        $('.js-result-slider__circle-one').circleProgress({
            value: 0.38,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-two').circleProgress({
            value: 0.94,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-three').circleProgress({
            value: 0.99,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
        $('.js-result-slider__circle-four').circleProgress({
            value: 0.14,
            size: 200,
            thickness: 3,
            startAngle: 11,
            fill: {color: "#eb0358"},
            animation: { duration: 1300 }
        });
    }
    
    var waypoint = new Waypoint({
        element: document.getElementById('js-prognos'),
        handler: function(direction) {
            startCircleProgress();
        }
    });
    $('.js-fuel-number').counterUp({
        delay: 20,
        time: 700
    });
});