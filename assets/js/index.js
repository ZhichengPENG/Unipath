$(function () {
    $(".navbar-item-anchor>a").on('click', function (e) {
        e.preventDefault();
        $(".navbar-box").removeClass("show");
        $("body").removeClass("disabled_scroll");
        removeMask();
        var href = $(this).attr('href');
        var hrefArr = href.split("#");
        var hrefAnchor = hrefArr[1];
        console.log('href', hrefAnchor)
        $("html,body").animate({
            scrollTop: $("#" + hrefAnchor).offset().top
        }, 0);
    })
    var activeIndex = 0;
    $(".banner-tab-item").on("click", function () {
        var index = $(this).index(".banner-tab-item");
        activeIndex = index;
        changeTabContent(index);
    })
    $(".banner-tab-prev").on("click", function () {
        activeIndex--;
        if (activeIndex >= 0) {
            changeTabContent(activeIndex);
        } else {
            activeIndex = 0;
        }
    })
    $(".banner-tab-next").on("click", function () {
        var tabLen = $(".banner-tab-item").length;
        activeIndex++;
        if (activeIndex < tabLen) {
            changeTabContent(activeIndex);
        } else {
            activeIndex = tabLen - 1;
        }
    })

    function changeTabContent(activeIndex) {
        $(".banner-tab-item").eq(activeIndex).addClass('active').siblings(".banner-tab-item").removeClass('active');
        $(".offer-tab-content").eq(activeIndex).show().siblings().hide();
    }
    $(".dt").on("click", function () {
        var kcgjone = $("#kcgjone").val();
        var kcmcone = $("#kcmcone").val();
        var place_country= $("#place-country").val();
        var place_class = $("#place-class").val();
        var place_profes = $("#place-profes").val();
        if (place_country == '') {
            $("#place-country").addClass('order-requier');
            return false;
        } else {
            $("#place-country").removeClass('order-requier');
        }

        if (place_class == '') {
            $("#place-class").addClass('order-requier');
            return false;
        } else {
            $("#place-class").removeClass('order-requier');
        }

        if (place_profes == '') {
            $("#place-profes").addClass('order-requier');
            return false;
        } else {
            $("#place-profes").removeClass('order-requier');
        }
        if (kcgjone == '') {
            $("#kcgjone").addClass('order-requier');
            return false;
        } else {
            $("#kcgjone").removeClass('order-requier');
        }

        if (kcmcone == '') {
            $("#kcmcone").addClass('order-requier');
            return false;
        } else {
            $("#kcmcone").removeClass('order-requier');
        }

        if ($("#kclength").val() == "") {
            alert('请选择网课时长');
            return false;
        }
        if ($("#kcresults").val() == "") {
            alert('请选择成绩要求');
            return false;
        }
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").hide();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").show();
    })
    $(".dj").on("click", function () {
        var kcgjtwo = $("#kcgjtwo").val();
        var kcmctwo = $("#kcmctwo").val();

        var place_country= $("#place-country2").val();
        var place_class = $("#place-class2").val();
        var place_profes = $("#place-profes2").val();
        if (place_country == '') {
            $("#place-country2").addClass('order-requier');
            return false;
        } else {
            $("#place-country2").removeClass('order-requier');
        }

        if (place_class == '') {
            $("#place-class2").addClass('order-requier');
            return false;
        } else {
            $("#place-class2").removeClass('order-requier');
        }

        if (place_profes == '') {
            $("#place-profes2").addClass('order-requier');
            return false;
        } else {
            $("#place-profes2").removeClass('order-requier');
        }


        if (kcmctwo == '') {
            $("#kcmctwo").addClass('order-requier');
            return false;
        } else {
            $("#kcmctwo").removeClass('order-requier');
        }
        if (kcgjtwo == '') {
            $("#kcgjtwo").addClass('order-requier');
            return false;
        } else {
            $("#kcgjtwo").removeClass('order-requier');
        }
        if ($("#ye").val() == "") {
            alert('请选择页数');
            return false;
        }
        if ($("#time").val() == "") {
            alert('请选择需稿时限');
            return false;
        }
        if ($("#level").val() == "") {
            alert('请选择成绩要求');
            return false;
        }
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").hide();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").show();
    })
    $(".ptts").on("click", function () {
        var kcgjfive = $("#kcgjfive").val();
        var zymcfive = $("#zymcfive").val();

        var place_country5= $("#place-country5").val();
        var place_class5 = $("#place-class5").val();
        var place_profes5 = $("#place-profes5").val();
        if (place_country5 == '') {
            $("#place-country5").addClass('order-requier');
            return false;
        } else {
            $("#place-country5").removeClass('order-requier');
        }

        if (place_class5 == '') {
            $("#place-class5").addClass('order-requier');
            return false;
        } else {
            $("#place-class5").removeClass('order-requier');
        }

        if (place_profes5 == '') {
            $("#place-profes5").addClass('order-requier');
            return false;
        } else {
            $("#place-profes5").removeClass('order-requier');
        }

        if (zymcfive == '') {
            $("#zymcfive").addClass('order-requier');
            return false;
        } else {
            $("#zymcfive").removeClass('order-requier');
        }
        if (kcgjfive == '') {
            $("#kcgjfive").addClass('order-requier');
            return false;
        } else {
            $("#kcgjfive").removeClass('order-requier');
        }
        if ($("#ye").val() == "") {
            alert('请选择页数');
            return false;
        }
        if ($("#time").val() == "") {
            alert('请选择需稿时限');
            return false;
        }
        if ($("#level").val() == "") {
            alert('请选择成绩要求');
            return false;
        }
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").hide();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").show();
    })
    $(".zydx").on("click", function () {
        var zymc3 = $("#zymc3").val();
        var kcmc3 = $("#kcmc3").val();
        var qtsq = $("#qtsq").val();
        var zymcs1 = $("#zymcs1").val();
        var kcgj3 = $("#kcgj3").val();
        var sq = $('input:radio[name=sq]:checked').val();

        var place_country= $("#place-country3").val();
        var place_class = $("#place-class3").val();
        var place_profes = $("#place-profes3").val();
        if (place_country == '') {
            $("#place-country3").addClass('order-requier');
            return false;
        } else {
            $("#place-country3").removeClass('order-requier');
        }

        if (place_class == '') {
            $("#place-class3").addClass('order-requier');
            return false;
        } else {
            $("#place-class3").removeClass('order-requier');
        }

        if (place_profes == '') {
            $("#place-profes3").addClass('order-requier');
            return false;
        } else {
            $("#place-profes3").removeClass('order-requier');
        }


        if (zymc3 == '') {
            $("#zymc3").addClass('order-requier');
            return false;
        } else {
            $("#zymc3").removeClass('order-requier');
        }
        if (kcmc3 == '') {
            $("#kcmc3").addClass('order-requier');
            return false;
        } else {
            $("#kcmc3").removeClass('order-requier');
        }
        if (zymcs1== '') {
            $("#zymcs1").addClass('order-requier');
            return false;
        } else {
            $("#zymcs1").removeClass('order-requier');
        }
        if (kcgj3== '') {
            $("#kcgj3").addClass('order-requier');
            return false;
        } else {
            $("#kcgj3").removeClass('order-requier');
        }
        if (sq == '其他') {
            if (qtsq == '') {
                $("#qtsq").addClass('order-requier');
                return false;
            } else {
                $("#qtsq").removeClass('order-requier');
            }
        }
        $("#sqa2").text(sq + qtsq);
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").hide();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").show();
        $("#zymca2").text(zymc3);
        $("#kcmca2").text(kcmc3);
        $("#demo_date2").text($("#demo_date1").val());
        $("#demo_time2").text($("#demo_time1").val());
    })
    $(".kstg").on("click", function () {
        var zymc4 = $("#zymc4").val();
        var kcmc4 = $("#kcmc4").val();
        var qtsq2 = $("#qtsq2").val();
        var sq2 = $('input:radio[name=sq2]:checked').val();
        var kcgjfour = $("#kcgjfour").val();
        var zymcfour = $("#zymcfour").val();

        var place_country= $("#place-country4").val();
        var place_class = $("#place-class4").val();
        var place_profes = $("#place-profes4").val();
        if (place_country == '') {
            $("#place-country4").addClass('order-requier');
            return false;
        } else {
            $("#place-country4").removeClass('order-requier');
        }

        if (place_class == '') {
            $("#place-class4").addClass('order-requier');
            return false;
        } else {
            $("#place-class4").removeClass('order-requier');
        }

        if (place_profes == '') {
            $("#place-profes4").addClass('order-requier');
            return false;
        } else {
            $("#place-profes4").removeClass('order-requier');
        }



        if (zymcfour== '') {
            $("#zymcfour").addClass('order-requier');
            return false;
        } else {
            $("#zymcfour").removeClass('order-requier');
        }
        if (kcgjfour == '') {
            $("#kcgjfour").addClass('order-requier');
            return false;
        } else {
            $("#kcgjfour").removeClass('order-requier');
        }
        if (zymc4 == '') {
            $("#zymc4").addClass('order-requier');
            return false;
        } else {
            $("#zymc4").removeClass('order-requier');
        }
        if (kcmc4 == '') {
            $("#kcmc4").addClass('order-requier');
            return false;
        } else {
            $("#kcmc4").removeClass('order-requier');
        }
        if (sq2 == '其他') {
            if (qtsq2 == '') {
                $("#qtsq2").addClass('order-requier');
                return false;
            } else {
                $("#qtsq2").removeClass('order-requier');
            }
        }
        $("#sqb2").text(sq2 + qtsq2);
        $("#ksrqb2").text($("#demo_date_start1").val() + ' ' + $("#demo_date_time1").val());
        $("#sjrqb2").text($("#demo_date_start2").val() + ' ' + $("#demo_date_time2").val());
        var beginDate = $("#demo_date_start1").val() + ' ' + $("#demo_date_time1").val();
        var endDate = $("#demo_date_start2").val() + ' ' + $("#demo_date_time2").val();
        var d1 = new Date(beginDate.replace(/\-/g, "\/"));
        var d2 = new Date(endDate.replace(/\-/g, "\/"));
        if (beginDate != "" && endDate != "" && d1 >= d2) {
            alert("结束时间必须晚于开始时间！");
            return false;
        }
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").hide();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").show();
        $("#zymcb2").text(zymc4);
        $("#kcmcb2").text(kcmc4);
        $("#ksxsb2").text($("#ksxsb1").val());
    })
    $(".offer-order-btn-back").on("click", function () {
        $(this).parents(".offer-tab-content").find(".offer-form-box-first").show();
        $(this).parents(".offer-tab-content").find(".offer-form-box-second").hide();
    })
    $(".advantage-item").mouseenter(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".advantage-content").siblings().hide().eq(index).show();
    })
    $(".advantage-step-btn").on("click", function () {
        if ($(this).parents(".advantage-step-item").hasClass("expande")) {
            $(".advantage-step-item").removeClass("expande");
        } else {
            $(".advantage-step-item").removeClass("expande");
            $(this).parents(".advantage-step-item").addClass("expande");
        }
    })
    initDiscountSwiper();

    function initDiscountSwiper() {
        var personsSwiper = new Swiper('.discount-swiper', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: {
                delay: 399000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        if (IsPC()) {
                            translate = slideProgress * modify * 98 + 'px';
                            scale = 1 - Math.abs(slideProgress) / 5;
                        } else {
                            var winWidth = $(window).outerWidth();
                            var winHeight = $(window).outerHeight();
                            if (os.isTablet) {
                                if (winWidth == 1024) {
                                    console.log('pingban ')
                                    translate = slideProgress * modify * 80 + 'px';
                                } else {
                                    translate = slideProgress * modify * 98 + 'px';
                                }
                            } else {
                                translate = slideProgress * modify * 30 + 'px';
                            }
                            scale = 1 - Math.abs(slideProgress) / 5;
                        }
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        if (Math.abs(slideProgress) > 1) {
                            slide.css('opacity', 0);
                        }
                    }
                }, setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }
            }
        })
    }

    function setBannerHeight() {
        var winHeight = $(window).outerHeight();
        $(".banner-box-main").height(winHeight);
    }
    var theme = "ios";
    var mode = "scroller";
    var display = "bubble";
    var lang = "zh";
    $('.end-date-comp').mobiscroll().date({
        theme: theme,
        mode: mode,
        display: display,
        lang: lang,
        dateFormat: "yyyy-mm-dd",
        minDate: new Date(),
        maxDate: new Date(2030, 12, 31, 24),
    });
    $('.end-time-comp').mobiscroll().time({
        theme: theme,
        mode: mode,
        display: display,
        lang: lang,
        stepMinute: 1
    });
    $("#demo_date_start1").val(getNowFormatDate());
    $("#demo_date_start2").val(getNowFormatDate());
        $("#demo_date_start3").val(getNowFormatDate());
    $("#demo_date1").val(getNowFormatDate());
    $("#demo_date_time1").val(getNowFormatTime());
    $("#demo_date_time2").val(getNowFormatTime());
    $("#demo_time1").val(getNowFormatTime());

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }

    function getNowFormatTime() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currenttime = date.getHours() + seperator2 + date.getMinutes();
        return currenttime;
    }
})

function previewImg(obj) {
    console.log(obj);
    var file = obj.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        $(obj).parents(".order-remark-form").find(".order-remark-file").css("background-image", "url(" + e.target.result + ")");
        $(obj).parents(".order-remark-form").find(".order-remark-file").css({
            "background-image": "url(" + e.target.result + ")",
            "width": "50px",
            "height": "50px",
            "margin-left": "0"
        })
        $('.order-remark-form .yclose').show();
    }
}
$('.order-remark-form .yclose').click(function () {
    $('.order-remark-form').find('.order-remark-file').css({
        'background-image': "url(../images/icon_add.png)",
        "width": "35px",
        "height": "35px"
    })
    $('.offer-form-box .order-remark-item .order-remark-file input').val('');
    $(this).hide();
})
$('.offer-form-box .order-remark-item .order-remark-input').focus(function () {
    $(this).removeClass('order-requier')
})
$(".banner-box-mouse").on("click", function () {
    var winHeight = $(window).outerHeight();
    $('html,body').animate({
        'scrollTop': winHeight
    }, 50);
})
