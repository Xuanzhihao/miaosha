//$(function() {
//	var w;
$(document).ready(function() {

    $(window).focus(function() {
        document.location.reload();
    });

    if (remainingSeconds !== 0) {

        $(".remaining-time").text(parseInt(remainingSeconds / 60) + "分" + (remainingSeconds - 60 * parseInt(remainingSeconds / 60)) + "秒");

        var timer = setInterval(function(){
            remainingSeconds -= 1;
            $(".remaining-time").text(parseInt(remainingSeconds / 60) + "分" + (remainingSeconds - 60 * parseInt(remainingSeconds / 60)) + "秒");
            if (remainingSeconds === 0) {
                clearInterval(timer);
                $(".remaining-container").hide();
                $(".content-div").removeClass("content-animate");
            }
        }, 1000);

        /*
                    if (typeof(Worker) !== "undefined") {
                        if (typeof(w) == "undefined") {
                            w = new Worker("/assets/js/web_worker.js");
                            w.postMessage(remainingSeconds);
                        }
                        w.onmessage = function(event) {
                            var remains = parseInt(event.data);
                            if (remains === 0) {
                                $(".remaining-container").hide();
                                $(".content-div").removeClass("content-animate");
                            } else {
                                $(".remaining-time").text(parseInt(remains / 60) + "分" + (remains - 60 * parseInt(remains / 60)) + "秒");
                            }
                        };
                    } else {
                        alert("浏览器不支持Web Worker.");
                        // document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
                    }
        */

        // window.addEventListener("focus", function(){
        // 	document.location.reload();
        // }, false);
    }

    $(".text-hz-qrcode").css("color", color);
    QrCodeWithLogo.toCanvas({
        canvas: document.getElementById('canvas'),
        content: url + statusUrl,
        width: 200,
        // logo: {
        //   src: '/assets/img/new_qr_logo.png',
        //   logoSize: 0.3,
        //   borderSize: 0,
        //   borderRadius: 24
        // },
        nodeQrCodeOptions: {
            margin: 2,
            errorCorrectionLevel: 'H',
            color: {
                dark: color,  // Blue dots
                light: '#fff' // Transparent background
            }
        }
    });

    $("#canvas").click(function() {
        $.post('/refreshqrcode/' + staffId, function(result) {
            if (result.success) {
                QrCodeWithLogo.toCanvas({
                    canvas: document.getElementById('canvas'),
                    content:  result.url + statusUrl,
                    width: 200,
                    // logo: {
                    //   src: '/assets/img/new_qr_logo.png',
                    //   logoSize: 0.3,
                    //   borderSize: 0,
                    //   borderRadius: 24
                    // },
                    nodeQrCodeOptions: {
                        margin: 2,
                        errorCorrectionLevel: 'H',
                        color: {
                            dark: color,  // Blue dots
                            light: '#fff' // Transparent background
                        }
                    }
                });
            } else{
                alert(result.msg);
            }
        });

    });
});
//});