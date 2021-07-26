import $ from "jquery";

$(document).ready(function() {
    $(window).scroll(function(event) {
        var visible_postion         = $(this).scrollTop();              // return the vertical scrollbar position. When the scrollbar is on the top, the position is 0.
        var three_devices           = $('#three-devices').position();   // return position of the three-devices
        var iphone_layers           = $('#iphone_layers').position();
        
        if (visible_postion >= three_devices.top){
            $('#three-devices img').removeClass('unanimnate');
            $('#three-devices img').addClass('animate');
        }else{
            $('#three-devices img').removeClass('animate');
            $('#three-devices img').addClass('unanimnate');
        }

        if (visible_postion >= iphone_layers.top) {
            $('#iphone_layers img').removeClass('unanimnate');
            $('#iphone_layers img').addClass('animate');
        } else {
            $('#iphone_layers img').removeClass('animate');
            $('#iphone_layers img').addClass('unanimnate');
        }
    });
});