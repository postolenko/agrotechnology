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

        var tabsParent;
        var tabLink;
        var attrForTabLink;
        var activeTabRadio;
        var activeTabs = [];
        var activeFlag = true;

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
