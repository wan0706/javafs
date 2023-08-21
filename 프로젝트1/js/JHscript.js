$(function () {
    // 내비게이션바
    let jh = 0, st = 0;

    $('nav').mouseenter(function (e) {
        e.preventDefault // a태그 기본 이벤트 제거
        $('.sub').stop().slideDown();
        $('.navBg1').stop().animate({ height: 210 }, 400);
        $('header').css("background-color", "#fff");
        $('.navBg2').css("height", "100vh");
        jh = 1;
    });

    $('.navBg2').mouseenter(function () {
        $('.sub').stop().slideUp();
        $('.navBg1').stop().animate({ height: 0 }, 400, function () {
            $('.navBg2').css("height", "0");
            if (st > 0) {
                $('header').css({
                    background: '#fff',
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)"
                })
            } else {
                $('header').css({
                    background: 'transparent',
                    boxShadow: "none"
                })
            }
        });
        jh = 0;
    });

    $(window).scroll(function () {
        st = $(this).scrollTop();
        if (jh == 0) {
            if (st > 0) {
                $('header').css({
                    background: '#fff',
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)"
                })
            } else {
                $('header').css({
                    background: 'transparent',
                    boxShadow: "none"
                })
            }
        }
    });

    // slider
    const slider = $('.slider>li'),
        prev = $('.pageBtnPrev'),
        next = $('.pageBtnNext'),
        btnAutoPlay = $('.btnAutoPlay'),
        btnAutoStop = $('.btnAutoStop'),
        counter = $('.pagination span'),
        progressBar = $('.progressBar div');

    bgColor = ["#C0E4FF", "#FFF6E0", "#FCEAEC"],
        text1 = $('.text1'),
        text2 = $('.text2');

    let idx = 0,
        progressBarWith = 0,
        autoBtn;

    // btnAutoPlay 이벤트 강제 실행
    $(document).ready(function () {
        btnAutoPlay.trigger('click');
    });

    // slider - 공통부분
    function allBtn() {
        slider.eq(idx).fadeIn(300).siblings().fadeOut(300);
        $('.bgColor').css("background-color", bgColor[idx]);

        counter.text(idx + 1);

        text1.eq(idx - 2).css("opacity", "0");
        text1.eq(idx - 1).css("opacity", "0");
        text1.eq(idx).css("opacity", "1");

        text2.eq(idx - 2).css("opacity", "0");
        text2.eq(idx - 1).css("opacity", "0");
        text2.eq(idx).css("opacity", "1");
    }

    // slider - prev
    prev.click(function () {
        fadeprev('prev');
    });

    function fadeprev(btn) {
        if (btn === 'prev') {
            idx--;
            if (idx < 0) {
                idx = 2;
            }
            allBtn();
            progressBarWith = 0;
            progressBar.css({ width: 0 });
        }
    }

    // slider - next
    next.click(function () {
        fadenext('next');
    });

    function fadenext() {
        idx++;
        if (idx > 2) {
            idx = 0;
        }
        allBtn();
        progressBarWith = 0;
        progressBar.css({ width: 0 });
    }

    // slider - autoPlay
    btnAutoPlay.click(function () {
        progress = setInterval(bar, 30);
        btnAutoPlay.css("display", "none");
        btnAutoStop.css("display", "block");
    });

    function bar() {
        if (progressBarWith == 150) {
            progressBarWith = 0;
            fadenext();
        } else {
            progressBarWith++;
            progressBar.css({ width: progressBarWith });
        }
    }

    // slider - autoPlay
    btnAutoStop.click(function () {
        clearInterval(progress);
        btnAutoPlay.css("display", "block");
        btnAutoStop.css("display", "none");
    });
});
