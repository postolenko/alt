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

    var companyInfoBoxTopCoord;
    var companyName;
    var companyBlokParent;
    var flag;

    // ----------------------------

    var bottomSidebarCoor;
    var windowBottomCoor;

    // ----------------------------

    var topCoorTooltip;
    var leftCoorTooltip;

    // ----------------------------

    getFooterPosition();

    getPaddingTopSections();

    getCenterBlockHeight();

    getPaddingBottomPromoSection();

    getMobileShapePosition();

    getTrianglesSize();

    getMainNavHeight();

    getHeaderSiteFixedPosition();

    getFixedSidebarPositionFirst();

    gettopPositionCompanyInfoBox();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -------------------

        getPaddingTopSections();

        getCenterBlockHeight();

        getPaddingBottomPromoSection();

        getMobileShapePosition();

        getTrianglesSize();

        getMainNavHeight();

        getHeaderSiteFixedPosition();

        getFixedSidebarPosition();

        gettopPositionCompanyInfoBox();

        // -------------------

        if( bodyWidth > 1240 && $(".sidebar").length > 0 ) {

            $(".sidebar.fixed_position").css({
                "left" : $(".left_sidebar_coor").offset().left + "px",
                "width" : $(".two_width").width() * .31 + "px"
            });

            $(".sidebar.fixed_position_small").css({
                "top" : $(".header-site").height() + "px",
                "left" : $(".left_sidebar_coor").offset().left + "px",
                "width" : $(".two_width").width() * .31 + "px"
            });

        }

    });


    $(document).scroll(function () {

        getHeaderSiteFixedPosition();

        getPaddingTopSections();

        getFixedSidebarPosition();

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

        // indexAccordeon;
        // accordeonItemIndex;
        // accordeonItemCount;
        // parentAccordeonH;

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

                $(".main-nav").slideDown(300);

                $(".main-nav").css({"max-height" : $(window).height() + "px"});

                $(this).addClass("active");

                $(".header-site").addClass("main-nav_active");

            } else {

                $(".main-nav").slideUp(300);

                $(".main-nav").css({"max-height" : "auto"});

                $(this).removeClass("active");

                $(".header-site").removeClass("main-nav_active");

            }

        });

    });

    // -------------------

    $(function() {

        // var companyInfoBoxTopCoord;
        // var companyName;
        // var companyBlokParent;
        // var flag;
        
        $(".company_rate").click(function(e) {

            e.preventDefault();

            $("[data-company-info-box]").each(function() {

                if($(this).hasClass("active")) {

                    flag = false;

                    return false;

                } else {

                    flag = true;
                    
                }

            });

            if( flag == true ) {

                companyName = $(this).attr("data-company");

                $("[data-company-info-box = '"+ companyName +"']").addClass("active");

                $("[data-company-info-box = '"+ companyName +"']").animate({"top" : 0 + "px"}, 700);

            }

        });

        $(".company-info-box .yellow-block").click(function() {

            companyBlokParent = $(this).closest(".company-info-box ");

            companyBlokParent.removeClass("active");

            companyBlokParent.animate({"top" : ( -1 * ( companyBlokParent.outerHeight(true) + $(".main-content-inner").offset().top ) ) + "px"}, 700);

        });

    });

    // -------------------

    $(function() {
       
        if( $(".two-cols-content-template .sidebar").length == 0 ) {

            $(".main-content").addClass("single");

        }

    });

    // -------------------

    $(function() {

        var popupShowAttr;
        var parentPopup;

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupShowAttr = $(this).attr("data-show-popup");

            $(".popups-section[data-popup = '"+ popupShowAttr+"']").fadeIn(300);

        });

        $(".close-popup-btn").click(function() {

            parentPopup = $(this).closest(".popups-section");

            parentPopup.fadeOut(300);

        });

        $(document).mouseup(function (e){

            hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".popups-section").fadeOut(300);
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".popups-section").fadeOut(300);
 
            }

        });

    });

    // -------------------

    $(function() {

        $(".show_menu").click(function() {

            $(this).toggleClass("active");

            if( $(this).hasClass("active") ) {

                $(".sidebar").animate({"right" : "0" + "%"}, 500);

            } else {

                $(".sidebar").animate({"right" : "-120" + "%"}, 500);

            }

        });

    });

    // -------------------

    $(function() {

        $(".question").mouseover( function(){

            topCoorTooltip = $(this).offset().top - $(this).children(".tooltip").height() - $(this).height() - 20;
            leftCoorTooltip = $(this).offset().left - 30;

            $(this).children(".tooltip").offset({top : topCoorTooltip , left : leftCoorTooltip});

        });

    });

    // -------------------


    function getPaddingTopSections() {

        if( !$(".respmenubtn").hasClass("active") ) {

            setTimeout(function () {       

                if( bodyWidth > 768 ) {

                    $("section").css({
                        "padding-top" : $(".header-site").outerHeight() + "px"
                    });

                } else {

                    $("section").css({
                        "padding-top" : 0 + "px"
                    });

                }

            }, 400);

        }

    }


    function getPaddingBottomPromoSection() {

        $(".promo-section").css({
            "padding-bottom" : $(".bottom-block").height() + "px"
        });

    }

    function getCenterBlockHeight() {

        if( $(".promo-section").length > 0 ) {

            if( bodyWidth > 600 ) {

                prevElemCoor = $(".center-block").prev("div").offset().top + $(".center-block").prev("div").height();

            } else {

                prevElemCoor = $("#header_site").height() + $("#promoWhiteBtn").height();

            }

            nextElemCoor = $(window).height() - $(".bottom-block").height();

            centerBlockHeight = nextElemCoor - prevElemCoor;

            $(".center-block").css({
                "height" : centerBlockHeight + "px"
            });

        }

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

    function getMobileShapePosition() {

        shapeCoor = $(".footer").height() + $(".footer").offset().top - $(".mobiles").offset().top;

        $(".mobiles-img").css({
            "bottom" : -1 * shapeCoor + "px"
        });
    }


    function getTrianglesSize() {

        setTimeout(function() {

            $(".price").each(function() {

               var boderWidth = $(this).outerHeight() / 2;

                $(this).children(".tr").css({
                    "border-top" : boderWidth + "px solid transparent",
                    "border-bottom" : boderWidth + "px solid transparent"
                });

            });

        }, 400)

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

        if( $(".promo-section").length > 0 ) {
        
            promoSectionCoor = $(".promo-section").height();

            if( $(window).scrollTop() <= $(".promo-section").height() ) {

                $(".header-site").removeClass("fixed-position");
                $(".header-site").removeClass("inner_page");

            } else {

                $(".header-site").addClass("fixed-position");
                $(".header-site").addClass("inner_page");

            }

        } else {

            $(".header-site").addClass("fixed-position");
            $(".header-site").addClass("inner_page");

        }

    }

    function getFixedSidebarPosition() {

        if( $(".sidebar").height() < $(".main-content").height() ) {

            if( ( $(window).scrollTop() + $(window).height() ) >= $(".footer").offset().top ) {

                $(".sidebar").css({
                    "bottom" : ( ( $(window).scrollTop() + $(window).height() ) - $(".footer").offset().top ) + "px"
                });

            } else {

                $(".sidebar").css({
                    "bottom" : 0 + "px"
                });

            }

            bottomSidebarCoor = $(".sidebar").offset().top + $(".sidebar").outerHeight(true);

            if( bodyWidth > 1240 && $(".sidebar").length > 0 ) {

                $(".sidebar").css({
                    "height" : "auto",
                    "top" : "initial"
                });

                $(".sidebar").mCustomScrollbar("destroy");

                if( $(".left_sidebar_coor").length == 0 ) {

                    $(".main-content").append("<span class='left_sidebar_coor'></span>");

                }            

                windowBottomCoor = $(window).scrollTop() + $(window).height();

                if( $(".sidebar").outerHeight() > $(window).height() ) {

                    bottomSidebarCoor = $(".sidebar").offset().top + $(".sidebar").outerHeight(true);                

                    if( $(".bottom_sidebar_coor").length == 0 ) {

                        $(".wrapper").append("<span class='bottom_sidebar_coor'></span>");

                        $(".bottom_sidebar_coor").css({
                            "top" : bottomSidebarCoor + "px"
                        });

                    }

                    if( ( windowBottomCoor > bottomSidebarCoor ) && ( $(".bottom_sidebar_coor").length > 0 )) {

                        if( $(".sidebar").hasClass("fixed_position") ) {

                            return true;

                        } else {

                            $(".sidebar").addClass("fixed_position");

                        }                        

                        $(".sidebar.fixed_position").css({
                            "left" : $(".left_sidebar_coor").offset().left + "px",
                            "width" : $(".two_width").width() * .31 + "px"
                        });

                    } else if( windowBottomCoor <= $(".bottom_sidebar_coor").offset().top ) {

                        if( $(".sidebar").hasClass("fixed_position") ) {

                            $(".sidebar").removeClass("fixed_position");                          

                            $(".sidebar").css({
                                "left" : 0,
                                "width" : "31%"
                            });

                        }

                    }

                } else {

                    $(".sidebar").addClass("fixed_position_small");
                    
                    $(".sidebar.fixed_position_small").css({
                        "top" : $(".header-site").height() + "px"
                    });

                }

            } else {

                $(".sidebar").removeClass("fixed_position");
                $(".sidebar").removeClass("fixed_position_small");

                $(".sidebar").css({
                    "height" : $(window).height() + "px",
                    "top" : 0,
                    "left" : "initial"
                });

                $(".scroll").mCustomScrollbar();

            }

        }

    }

     function getFixedSidebarPositionFirst() {

        setTimeout(function() {

            getFixedSidebarPosition();

        }, 500);

     }


    function gettopPositionCompanyInfoBox() {

        setTimeout(function() {

            if( $(".company-info-box").length > 0 ) {

                companyInfoBoxTopCoord = $(".main-content-inner").offset().top;

                $(".company-info-box").each(function() {

                    if( $(this).offset().top < 0 && !$(this).hasClass("active") ) {

                        $(this).css({
                            "top" : -1 * ( $(this).outerHeight(true) + companyInfoBoxTopCoord ) + "px"
                        });

                    }

                });

            }

        }, 500);

    }


});
