/**
 * 160x600 - An HTML banner
 * @version v0.0.0
 * @date 1-25-2016 at 9:7:11
 */
var container;
var content;
var bgExit;
var backgroundImage;
var colorOverlay;
var mainHeadline;
var subHeadline;
var pulse;
var flame;
var colorOverlayDelay = 2;
var colorOverlayDuration = .4;
var backgroundImageDuration = 15;
var backgroundImageScale = 1.15;
var mainHeadlineFadeDuration = .5;
var mainHeadlineTopTo = 310;
var mainHeadlineTopDuration = 4;

var subHeadlineFadeDuration = 1.5;
var pulseDuration = .5;
var pulseStart = -30;
var pulseEnd = 190;

bannerInit = function () {
    container = document.getElementById("container_ad"),
    content = document.getElementById("content_ad"),
    bgExit = document.getElementById("background_exit_ad"),
    backgroundImage = document.getElementById("backgroundImage"),
    colorOverlay = document.getElementById("colorOverlay"),
    mainHeadline = document.getElementById("mainHeadline"),
    subHeadline = document.getElementById("subHeadline"),
    pulse = document.getElementById("pulse"),
    flame = document.getElementById("flame"),
    container.style.visibility = "visible", anim()
};

anim = function () {
    function e() {
        a.stop(), o.stop(), n.stop(), t.stop(), flame.style.opacity = 1
    }

    var a = new TimelineMax({
        onComplete: e
    });
    a.to(backgroundImage, backgroundImageDuration, {
        css: {
            scale: backgroundImageScale + "px",
            rotation: .01,
            force3D: !0
        }
    });
    var n = new TimelineMax({
        repeat: 15
    });
    n.to(pulse, pulseDuration, {
        css: {
            x: pulseStart + "px"
        },
        delay: 1.5
    })
        .to(pulse, pulseDuration, {
            css: {
                x: pulseEnd + "px"
            }});
    var o = new TimelineMax;
    o.to(flame, 2, {
        opacity: .2,
        rotation: .01,
        scale: 1.2,
        ease: RoughEase.ease.config({
            strength: 1, points: 8, randomize: !1
        }),
        repeat: -1,
        yoyo: !0
    });
    var t = new TimelineLite;
    t.to(colorOverlay, colorOverlayDuration, {
        css: {
            top: 0, force3D: !0
        },
        delay: colorOverlayDelay
    }).to(mainHeadline, mainHeadlineFadeDuration, {
        css: {
            opacity: 1
        }},
        "-=" + colorOverlayDuration / 2).to(mainHeadline, mainHeadlineTopDuration, {
        css: {
            y: mainHeadlineTopTo,
            rotation: .01
        }
    },
        "-=" + mainHeadlineFadeDuration).to(subHeadline, subHeadlineFadeDuration, {
        css: {
            opacity: 1
        }},
        "-=" + .65 * mainHeadlineTopDuration),
        a.play(),
        o.play(),
        n.play(),
        t.play()
};