$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    getPaddingTopPromo();

    getFooterPosition();

    getCenterBlockHeight();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -------------------

        getPaddingTopPromo();

        getCenterBlockHeight();

    });


    $(function() {

        var indexAccordeon = $(this).index();
        var accordeonItemCount;

        if( $(".accordeon").length > 0 ) {

            $(".accordeon").each(function() {

                indexAccordeon = $(this).index();

                // var accordeonItem = $(this).children(".accordeon-item");

                // var accordeonItemContent = accordeonItem.children(".accordeon-item-content");

                console.log(indexAccordeon);


                for( var indexItem = 0; accordeonItemCount <= $(".accordeon:eq("+ indexAccordeon +") .accordeon-item").length - 1; indexItem ++ ) {


                    console.log(accordeonItemCount);

                    if( $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +")").hasClass("active") ) {

                        console.log("active");

                        // accordeonItemContent.slideDown(300);

                        // return true;

                        $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +") .accordeon-item-content").slideDown(300);

                    } else {

                        // accordeonItemContent.slideUp(300);

                        $(".accordeon:eq("+ indexAccordeon +") .accordeon-item:eq("+ indexItem +") .accordeon-item-content").slideUp(300);

                    }

                }

                

            });

        }


    });


    // -------------------

    $(function() {

        $(".scroll-down").click(function () {

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


    // -------------------


    function getCenterBlockHeight() {

        var prevElemCoor = $(".center-block").prev("div").offset().top + $(".center-block").prev("div").height();

        var nextElemCoor = $(".center-block").next("div").offset().top;

        var centerBlockHeight = nextElemCoor - prevElemCoor;

        $(".center-block").css({
            "height" : centerBlockHeight + "px"
        });

    }


    function getPaddingTopPromo() {

        $("section .row").css({
            "padding-top" : $(".header-site").outerHeight() + "px"
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



});
