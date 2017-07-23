$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var indexAccordeon;
    var accordeonItemCount;
    var indexItem;

    // ----------------------------

    var videoBoxParent;
    var videoBox;
    var videoId;

    // ----------------------------

    var indexAccordeon;
    var accordeonItemIndex;
    var accordeonItemCount;
    var parentAccordeonH;

    // ----------------------------

    var prevElemCoor;
    var nextElemCoor;
    var centerBlockHeight;

    // ----------------------------

    var shapeCoor;
    var mainNavHeightж

    // ----------------------------

    var promoSectionCoor;

    // ----------------------------

    getFooterPosition();

    getPaddingTopSections();

    getCenterBlockHeight();

    getPaddingBottomPromoSection();

    getMobileShapePosition();

    getTrianglesSize();

    getMainNavHeight();

    getHeaderSiteFixedPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------

        getPaddingTopSections();

        getCenterBlockHeight();

        getPaddingBottomPromoSection();

        getHeaderSiteStyle();

        getMobileShapePosition();

        getTrianglesSize();

        getMainNavHeight();

        getHeaderSiteFixedPosition();

    });


    $(document).scroll(function () {

        getHeaderSiteStyle();

    });


    $(function() {

        indexAccordeon = $(this).index();
        accordeonItemCount;

        if( $(".accordeon").length > 0 ) {

            $(".accordeon").each(function() {

                indexAccordeon = $(this).index();

                for( indexItem = 0; accordeonItemCount <= $(".accordeon:eq("+ indexAccordeon +") .accordeon-item").length - 1; indexItem ++ ) {

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

            videoBoxParent = $(this).closest(".video-block");

            videoBox = videoBoxParent.children(".video-box");

            videoId =  window[videoBox.children("video").attr("id")];

            videoId.play();

        });

    });


    $(function() {

        indexAccordeon;
        accordeonItemIndex;
        accordeonItemCount;
        parentAccordeonH;

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

        if( bodyWidth > 600 ) { 

            $("section").css({
                "padding-top" : $(".header-site").outerHeight() + "px"
            });

        } else {

            $("section").css({
                "padding-top" : 0 + "px"
            });

        }

    }


    function getPaddingBottomPromoSection() {

        $(".promo-section").css({
            "padding-bottom" : $(".bottom-block").height() + "px"
        });

    }

    function getCenterBlockHeight() {

        if( bodyWidth > 600 ) {

            prevElemCoor = $(".center-block").prev("div").offset().top + $(".center-block").prev("div").height();

        } else {

            prevElemCoor = $(".header-site").height() + $("#promoWhiteBtn").height();

        }

        nextElemCoor = $(window).height() - $(".bottom-block").height();

        centerBlockHeight = nextElemCoor - prevElemCoor;

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


    function getTrianglesSize() {

        $(".price").each(function() {

            boderWidth = $(this).outerHeight() / 2;

            $(this).children(".tr").css({
                "border-top" : boderWidth + "px solid transparent",
                "border-bottom" : boderWidth + "px solid transparent"
            });

        });

    }

    function getMainNavHeight() {        

        mainNavHeight = $(".main-nav").offset().top + $(".main-nav").height();

        if( mainNavHeight  > $(window).height() ) {

            $(".main-nav").css({
                "max-height" : $(window).height() - $("#header_site").height() + "px"
            });

        }

    }

    function getHeaderSiteFixedPosition() {
        
        promoSectionCoor = $("#promo_section").height();

        if( $(".header-site").scrollTop() >= promoSectionCoor ) {

            $(".header-site").addClass("fixed-position");

        } else {

            $(".header-site").removeClass("fixed-position");

        }

    }


});
