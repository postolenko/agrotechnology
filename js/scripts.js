$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------


    var tabsParent;
    var tabLink;
    var attrForTabLink;
    var activeTabRadio;
    var activeTabs = [];
    var activeFlag = true;

    // ----------------------------

    var mainSlider;
    var slideHeightMin;
    var slideHeightArr;
    var slideHeight;
    var slideHeight;

    // ----------------------------

    var widthActive;

    // ----------------------------

    getMainNavLinksParams();

    getMainSliderHeigth();

    getWrapperoffset();

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

        getWrapperoffset();

        // ------------------------------

        $(".main-slider .slide").css({
            "height" : "auto"
        });

        getMainSliderHeigth();

        // ------------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ------------------------------

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        if($(".footer").length > 0) {

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

    });


    $(function() {

        // var tabsParent;
        // var tabLink;
        // var attrForTabLink;
        // var activeTabRadio;
        // var activeTabs = [];
        // var activeFlag = true;

        $(".tabs").each(function() {

            $(this).find(".radio-tab").each(function() {                

                if( $(this).attr("checked") ) {

                    tabsParent = $(this).closest(".tabs");
                    attrForTabLink = $(this).attr("id");
                    tabsParent.find(".tab-link[for = '"+ attrForTabLink +"']").addClass("active");
                    activeFlag = true;

                } else {

                    activeFlag = false;

                }                

            });

            if(activeFlag == true) {

                activeTabs.push( $(this).index(".tabs") );

            } else {

                activeTabs.push( false );

            }

        });


        $(".tabs").each(function() {

            if( activeTabs[$(this).index(".tabs")] !== $(this).index(".tabs") ) {

                $(this).find(".tab-link:eq(0)").addClass("active");

                activeTabRadio = $(this).find(".radio-tab").eq(0);

                activeTabRadio.prop("checked", true);

            }

        });


        $(".tab-link").click(function (e) {

            if( $(this).hasClass("active") ) {

                e.preventDefault();

            } else {

                tabsParent = $(this).closest(".tabs");
                attrForTabLink = $(this).attr("for");
                activeTabRadio = tabsParent.find(".radio-tab[id = '"+ attrForTabLink +"']");
                activeTabRadio.prop("checked", true);

                tabsParent.find(".tab-link").each(function () {
                    
                    if( $(this).hasClass("active") ) {

                        $(this).removeClass("active")

                    }

                });

                $(this).addClass("active");

            }

        });

    });


     $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-block").is(":hidden") ) {

                $(".main-nav-block").fadeIn(400);
                $(this).addClass("active");

            } else {

                $(".main-nav-block").fadeOut(400);
                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( $(".main-nav-block").is(":visible") ) {

                    $(".main-nav-block").fadeOut(300);
                    $(".respmenubtn").removeClass("active");

                }

            }

        });

    });


    function getMainNavLinksParams() {

        if( bodyWidth > 768 ) {

            $(".main-nav li").each(function() {

                widthActive = $(this).width() * 1.1;

                $(this).css({
                    "width" : widthActive + "px"
                });

            });

        }

    }

    function getMainSliderHeigth() {

        mainSlider = $(".main-slider");

        slideHeightMin = 450;

        slideHeightArr = [];

        if( bodyWidth > 768 ) {

            slideHeight = $(window).height() - $(".header-site").height();

            if( slideHeight < slideHeightMin ) {
                slideHeight = slideHeightMin;
            }

        } else if ( bodyWidth <= 768) {

             mainSlider.find(".slide").each(function() {

                slideHeightArr.push($(this).height());

            });

            slideHeight = Math.max.apply(null, slideHeightArr);

        }

        mainSlider.find(".slide").each(function() {

            $(this).css({

                "height" : slideHeight + "px"

            });

        });

    }

    function getWrapperoffset() {

        if( bodyWidth <= 768 ) {

            $(".wrapper").css({
                "padding-top" : $(".header-site").height() + "px"
            });

        } else {

            $(".wrapper").css({
                "padding-top" : 0 + "px"
            });

        }

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
