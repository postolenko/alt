$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var shapeCoor;

    // ----------------------------

    getFooterPosition();

    getPaddingTopSections();

    getCenterBlockHeight();

    getPaddingBottomPromoSection();

    getMobileShapePosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------

        getPaddingTopSections();

        getCenterBlockHeight();

        getPaddingBottomPromoSection();

        getHeaderSiteStyle();

        getMobileShapePosition();

    });


    $(document).scroll(function () {

        getHeaderSiteStyle();

    });


    $(function() {

        var indexAccordeon = $(this).index();
        var accordeonItemCount;

        if( $(".accordeon").length > 0 ) {

            $(".accordeon").each(function() {

                indexAccordeon = $(this).index();

                for( var indexItem = 0; accordeonItemCount <= $(".accordeon:eq("+ indexAccordeon +") .accordeon-item").length - 1; indexItem ++ ) {

                    if( $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +")").hasClass("active") ) {

                        $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +") .accordeon-item-content").slideDown(300);

                    } else {

                        $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +") .accordeon-item-content").slideUp(300);

                    }

                }

                

            });

        }


    });


    // -------------------

    $(function() {

        $(".scroll-down").click(function (e) {

            e.preventDefault();

            $("body,html").animate({

                scrollTop: $("#scroll_down_anchor").offset().top

            }, 1000);

            return false;

        });

    });

    // -------------------


    $(function() {

        $(".hover-img").click(function() {

            $(this).fadeOut(300);

            var videoBoxParent = $(this).closest(".video-block");

            var videoBox = videoBoxParent.children(".video-box");

            var videoId =  window[videoBox.children("video").attr("id")];

            videoId.play();

        });

    });


    $(function() {

        var indexAccordeon;

        var accordeonItemIndex;

        var accordeonItemCount;

        var parentAccordeonH;

        $(".accordeon").each(function() {

            indexAccordeon = $(this).index();

            $(this).children(".accordeon-item").each(function() {

                if( !$(this).hasClass("active") ) {

                    $(this).children(".accordeon-item-content").slideUp(300);

                }

            });

        });


        $(".accordeon-title").click(function(e) {

            e.preventDefault();

            parentAccordeon = $(this).closest(".accordeon");

            indexAccordeon = parentAccordeon.index();

            parentAccordeonH = $(this).parent(".accordeon-item");

            if( parentAccordeonH.hasClass("active") ) {

                return false;

            } else {

                accordeonItemCount = $(".accordeon:eq("+indexAccordeon+") .accordeon-item").length - 1;

                for( accordeonItemIndex = 0; accordeonItemIndex <= accordeonItemCount; accordeonItemIndex++) {

                    if( $(".accordeon:eq("+indexAccordeon+") .accordeon-item:eq("+ accordeonItemIndex +")").hasClass("active") ) {

                        $(".accordeon:eq("+indexAccordeon+") .accordeon-item:eq("+ accordeonItemIndex +") .accordeon-item-content").slideUp(300);

                        $(".accordeon:eq("+indexAccordeon+") .accordeon-item:eq("+ accordeonItemIndex +")").removeClass("active");

                    }

                }

                 $(this).next(".accordeon-item-content").slideDown(300);

                parentAccordeonH.addClass("active");

            }

        });

    });

    $(function() {

        $(".respmenubtn").click(function() {
            
            if( $(".main-nav").is(":hidden") ) {

                $(".main-nav").fadeIn(300);

                $(this).addClass("active");

                $(".header-site").addClass("main-nav_active");

            } else {

                $(".main-nav").fadeOut(300);

                $(this).removeClass("active");

                $(".header-site").removeClass("main-nav_active");

            }

        });

    });


    // -------------------


    function getPaddingTopSections() {

        $("section").css({
            "padding-top" : $(".header-site").outerHeight() + "px"
        });

    }


    function getPaddingBottomPromoSection() {

        $(".promo-section").css({
            "padding-bottom" : $(".bottom-block").height() + "px"
        });

    }

    function getCenterBlockHeight() {

        var prevElemCoor = $(".center-block").prev("div").offset().top + $(".center-block").prev("div").height();

        var nextElemCoor = $(window).height() - $(".bottom-block").height();

        var centerBlockHeight = nextElemCoor - prevElemCoor;

        $(".center-block").css({
            "height" : centerBlockHeight + "px"
        });

    }


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

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

    function getHeaderSiteStyle() {

        if( $(window).scrollTop() >= $(".promo-section").height() ) {

            $(".header-site").addClass("inner_page");

        } else {

            $(".header-site").removeClass("inner_page");

        }

    }


    function getMobileShapePosition() {

        shapeCoor = $(".footer").height() + $(".footer").offset().top - $(".mobiles").offset().top;

        $(".mobiles-img").css({
            "bottom" : -1 * shapeCoor + "px"
        });
    }



});
