$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var widthActive;

    // ----------------------------

    getMainNavLinksParams();

    getMainSliderHeigth();

    getFooterPosition();

    $(window).resize(function() {

        // ------------------------------

        $(".main-nav li").css({
            "width" : "auto"
        });

        getMainNavLinksParams();

        // ------------------------------

        getMainSliderHeigth();

        // ------------------------------

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

    });


    $(function() {



    });


    function getMainNavLinksParams() {

        $(".main-nav li").each(function() {

            widthActive = $(this).width() * 1.1;

            $(this).css({
                "width" : widthActive + "px"
            });

        });

    }

    function getMainSliderHeigth() {

        var mainSlider = $(".main-slider");

        var slideHeight = $(window).height() - $(".header-site").height();

        if( slideHeight < 450 ) {
            slideHeight = 450;
        }

        mainSlider.find(".slide").each(function() {

            $(this).css({

                "height" : slideHeight + "px"

            });

        });

    }


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            setFooterPositionInterval = setInterval(function() {

                contentCoor = $(".content").offset().top + $(".content").height();
                footerCoor = $(".footer").offset().top;

                if( contentCoor != footerCoor ) {

                    $(".wrapper").css({"min-height" : $(window).height() + "px"});

                    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                    clearInterval(setFooterPositionInterval);

                }

            }, 35);

        }

    }



});
