/* Walleye CMS postprocessor stylesheet source, embedded so the page works
   over file:// (double-click) as well as http://. Compiled in-browser by
   css2.js via css.open('#style'). Edit here to change site styling. */
window.__WALLEYE_STYLE_SRC__ = `/* Walleye CMS 'CSS PostProcessor' stylesheet source.
   Loaded at runtime by css2.js (in js/main.js) via css.open('/css/style.css').
   Uses $variable syntax compiled in-browser; do not treat as plain CSS. */
/**********************
        WALLEYE
***********************/

/* VARIABLES  */
$bfont! {
    if (css.vars.w()>980) "20px";
    else "16px";
}

/****** ABSOLUTE POSITIONING *********/
$xCenter {left: 50%; transform: translateX(-50%);}
$yCenter {top: 50%; transform: translateY(-50%);}
$centerAll {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}

/****** PSEUDO ELEMENTS ********/
$psDefault {content: ''; display: block; position: absolute;}

/***** FONTS *****/
$primaryThin {font-family: "Roboto", serif; font-weight: 100; font-style: normal;}
$primaryLight {font-family: "Roboto", serif; font-weight: 300; font-style: normal;}
$primaryRegular {font-family: 'Roboto', sans-serif; font-weight: 400; font-style: normal;}
$primaryMedium {font-family: 'Roboto', sans-serif; font-weight: 500; font-style: normal;}
$primaryBold {font-family: 'Roboto', sans-serif; font-weight: 700; font-style: normal;}

$secondaryThin {font-family: "Roboto Slab", serif; font-weight: 100; font-style: normal;}
$secondaryLight {font-family: "Roboto Slab", serif; font-weight: 300; font-style: normal;}
$secondaryRegular {font-family: 'Roboto Slab', sans-serif; font-weight: 400; font-style: normal;}
$secondaryMedium {font-family: 'Roboto Slab', sans-serif; font-weight: 500; font-style: normal;}
$secondaryBold {font-family: 'Roboto Slab', sans-serif; font-weight: 700; font-style: normal;}

/**** FLEX *****/
$order(1){order:&a;-webkit-order:&a;}
$flex {display: -webkit-flexbox;display: -ms-flexbox;display: flex;}
$flexCenter {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}
$flexContentEnd {-webkit-box-pack: end;-ms-flex-pack: end;justify-content: flex-end;}
$flexContentStart {-webkit-box-pack: start;-ms-flex-pack: start;justify-content: flex-start;}
$flexContentCenter {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
$flexItemCenter {-webkit-box-align: center;-ms-flex-align: center;align-items: center;}
$flexItemStart {-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start}
$flexItemEnd {-webkit-box-align: end;-ms-flex-align: end;align-items: flex-end;}
$flexColumn {-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}
$flexColumnR {-webkit-box-orient: vertical;-webkit-box-direction: reverse;-ms-flex-direction: column-reverse;flex-direction: column-reverse;}
$flexRow {-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;}
$flexRowR{-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;}
$flexContentSpaceBetween {-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;}
$flexContentSpaceEvenly {-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-evenly;}
$flexContentSpaceAround {-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-around;}
$flexW(1) {-webkit-box-flex:&a;-ms-flex:&a;flex:&a;}
$flexWrap {-ms-flex-wrap: wrap;flex-wrap: wrap;}

/****** COLORS ******/
$lightBlue {#F2F4F7}
$darkBlue {#12284C}
$navy {#21498F}
$gray {#5E7176}
$blue {#4273C9}
$brightBlue {#1351BC}
$dark {#0B0E19}
$purple {#ADB3C7}
$silver {#768D9C}

/***** GLOBAL *****/
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body,
html {
    $primaryThin;
    font-size: $bfont!;
    color: $gray;
    overflow-x: hidden;
}
a, div {-webkit-tap-highlight-color: transparent;}
a[href^="tel"] {
    color: inherit;
    text-decoration: none;
}
a {text-decoration: none;}
p {
    $primaryThin;
    font-size: 1.05rem;
    line-height: 2rem;
    color: $gray;
}
h2.lg {
    font-size: 3.6rem;
    line-height: 4.3rem;
    margin-bottom: 2.75rem;
}
h2 {
    $secondaryThin;
    font-size: 2.85rem;
    line-height: 3.75rem;
    margin-bottom: 2.75rem;
    color: $navy;
}
h3 {
    $secondaryThin;
    font-size: 2.15rem;
    line-height: 3rem;
}
h4 {
    $primaryRegular;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
}
p.lg {
    font-size: 1.6rem;
    line-height: 2.8rem;
}
.bl {color: $blue;}
.wh {color: #fff;}

.container {
    width: calc(100% - 2rem);
    max-width: 1316px;
    margin: 0 auto;
}

.secPadding {padding: 9rem 0;}

/***** BUTTON ****/
.global-btn {
    & {
        $primaryLight;
        display: inline-block;
        font-size: 0.8rem;
        line-height: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 0.24rem;
        color: $navy;
        border-radius: 15px;
        border: solid 1px $brightBlue;
        text-align: left;
        padding: 0.7rem 1.8rem;
        transition: background-color .3s ease, border-color .3s ease, color .3s ease;
    }
    span {
        display: block;
        background: url(img/svg/circle_arrow_blue_right.svg) 100% center/48px no-repeat;
        padding: 15px 80px 15px 0;
    }
}
.global-btn.wh {
    color: #fff;
    border-color: #ffffff80;
}
.global-btn:hover, .global-btn.wh:hover {
    background-color: $brightBlue;
    border-color: $brightBlue;
    color: #fff;
}

.plx-wrap {
    &{position: absolute;width: 100%;height: 100%;clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%);top: 0px;left: 0px;z-index: 1;}
    .plx-bg {background-position: center;background-size: cover;background-repeat: no-repeat;position: fixed;left: 0px;top: 0px;height: 100vh;width: 100%;}
}
/****** ANIMATION ******/
.fade-in {
    opacity: 0;
    transition: opacity 1s ease .3s;
}
.fade-in[data-scroll="in"] {opacity: 1;}

.split {overflow: hidden;}

.img-wrap {
    & {
        overflow: hidden;
        position: relative;
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 0;
        padding-bottom: 0;
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        overflow-clip-margin: content-box;
        overflow: hidden;
        transition: clip-path 0.7s ease-in 1s;
        clip-path: polygon(0% 0%, 100% 0, 100% 0%, 0% 0%);
    }
}
.img-wrap[data-scroll="in"] .img {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/***** HERO *****/
.inner .s1 {
    & {
        height: 100vh;
        max-height: 900px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        text-align: left;
        position: relative;
    }
    .container {
        position: absolute;
        top: 11rem;
        left: 50%;
        transform: translateX(-50%);
    }
    h1 {
        $secondaryThin;
        font-size: 5.15rem;
        line-height: 6rem;
        color: #fff;
        margin-bottom: 4rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity .5s ease;
    }
    h1.active {
        opacity: 1;
        visibility: visible;
    }
    .text-wrap {
        & {
            $flex;
            justify-content: space-between;
            gap: 2rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity .5s ease;
        }
        p.lg {$secondaryThin;}
        p {color: #fff;}
        > div:nth-child(1) {max-width: 650px;}
        > div:nth-child(2) {
            & {max-width: 540px;}
            p {font-weight: 300;}
            p span {font-weight: 400;}
        } 
    }
    .text-wrap.active {
        opacity: 1;
        visibility: visible;
    }
}

/**** PODCASTS & PUBLICATIONS ****/
.podcast-publications-section {
    &{padding: 9rem 0 0;}
    * {text-align: left;}
    .header-wrapper {padding-bottom: 2.5rem; border-bottom: 1px solid #0000002e;}
    .header-container {$flex; $flexItemCenter; $flexContentSpaceBetween; gap: 1.5rem;}
    h3 {font-size: 3.6rem; color: $navy; line-height: 1.2em; font-weight: 100; $flexW;}

    .buttons-wrapper {
        &{$flex; $flexItemCenter; gap: 1rem; width: 8.5rem;}
        button {outline: 0; border: 0; background-color: $brightBlue; border-radius: 50%; width: 3.75rem; height: 3.75rem; position: relative; cursor: pointer; transition: background-color .3s ease;}
        button:hover {background-color: $navy;}
        img {display: block; $centerAll;}
    }

    .article-wrapper {
        &{padding: 5rem 1rem; border-right: 1px solid #0000002e; width: 32.5rem; height: 41.5rem;}
        .inner {max-width: 450px; margin: 0 auto; height: 100%; $flex; $flexColumn; $flexContentSpaceBetween;}
    }

    .article-wrapper:first-child {
        &{width: 27.5rem; padding-left: 0;}
        .inner {margin: 0 auto 0 0;}
    }

    .top img {display: block; width: 100%; max-width: 345px; max-height: 195px; aspect-ratio: 345/195; object-fit: contain; object-position: left center;}

    .date {font-size: 1.05rem; line-height: 1em; color: $gray; font-weight: 300;}
    .title{font-size: 1.8rem; line-height: 1.55em; font-weight: 100; color: $blue; margin: 3rem 0 2.5rem;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical; height: 8.4rem;}
    .teaser{font-size: 0.9rem; line-height: 1.65em; font-weight: 300;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical;}
    .global-btn {max-width: 330px; margin-top: 2.5rem;}
}

#about #container .s1 {background: url(img/hero/about_hero_parallax.webp) no-repeat center/cover fixed;}
#approach #container .s1 {background: url(img/hero/approach_hero_parallax.webp) no-repeat center/cover fixed;}
#platform #container .s1 {background: url(img/hero/platform_hero_parallax.webp) no-repeat center/cover fixed;}
#people #container .s1 {background: url(img/hero/people_hero_parallax.webp) no-repeat center/cover fixed;}
#careers #container .s1 {background: url(img/hero/careers_hero_parallax.webp) no-repeat center/cover fixed;}
#contact #container .s1 {background: url(img/hero/contact_hero_parallax.webp) no-repeat center/cover fixed;}

/***** HEADER *****/
header {
    & {
        width: 100%;
        position: fixed;
        background-color: transparent;
        transition: background-color .3s ease;
        z-index: 101;
        transition: top 1s, background-color .4s ease;
    }
    .container {
        $flex;
        $flexContentSpaceBetween;
        $flexItemCenter;
        padding: 1rem 0;
        position: relative;
    }
    .logo {
        display: block;
        width: 317px;
        height: 83px;
        background: url(img/logo-white.png) no-repeat left center/contain;
        position: relative;
        z-index: 10;
        transition: width .3s ease;
    }
    nav {
        .wrap {
            text-align: right;
            $flex;
            $flexItemCenter;
            gap: 3.75rem;
        }
        a, .login {
            display: inline-block;
            $primaryLight;
            font-size: 15px;
            line-height: 18px;
            margin-left: 27px;
            color: #fff;
            position: relative;
            transition: color .3s ease;
        }
        .login {
            padding-right: 20px;
            background: url(img/svg/icon_login_white.svg) 100% center/10px no-repeat;
            cursor: pointer;
        }
        a::after {
            $psDefault;
            width: 5px;
            height: 5px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity .3s ease;
        }
        a.current::after, a:hover::after {opacity: 1;}
    }
    /* Mobile */
    .menu_container {
        & {
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
        }
        #menu_btn {
            & {
                background: none; 
                border: none; 
                outline: none;
                cursor: pointer;
                position: relative;
                color: #fff;
                width: 44px;
                height: 20px;
            }
            i {
                transition-delay: .6s;
                transition: all 0.2s ease-out;
                height: 2px;
                width: 45px;
                background-color: #fff;
                position: absolute; 
                border-radius: 2px;
                left: 0;
            }
            i:nth-child(1){top: 0;}
            i:nth-child(2){top: 9px;}
            i:nth-child(3){top: 18px;}
        } 
    }
}

header.scroll:not(.active) {
    & {background: #fff;}
}

header.scroll:not(.active), .no-hero header {
    .logo {background: url(img/logo-navy.png) no-repeat left center/contain;}
    nav {
        a, .login {color: $gray;}
        a::after {background: $blue;}
        .login {background-image: url(img/svg/icon_login_color.svg);}
    }
    .menu_container #menu_btn i {background: $blue;}
}

/****** HEADER ACTIVE ******/
header.active, .no-hero header.active {
    .logo {background: url(img/logo-navy.png) no-repeat left center/contain;}
    nav {
        & {
            opacity: 1;
            visibility: visible;
            width: 100%;
            height: 100vh;
            min-height: -webkit-fill-available;
            position: fixed;
            top: 0;
            left: 0;
            background: #fff;
        }
        .wrapper {
            $centerAll;
            top: 50%;
            width: 100%;
            $flexColumn;
            $flexContentCenter;
            $flexItemCenter;
        }
        a {
            display: block;
            text-align: center;
            font-size: 1.55rem;
            line-height: 2rem;
            margin-bottom: 2.5rem;
            color: $gray;
            margin-left: 0;
            opacity: 0;
            visibility: hidden;
            transform: translate(0%,100%);
            position: relative;
            transition: opacity .3s ease, transform .3s ease;
        }
        a::after {background-color: $navy;}
        a.fade {
            opacity: 1;
            visibility: visible;
            transform: translateX(0%);
        }
        span {
            margin-left: 0;
            color: $gray;
            background-image: url(img/svg/icon_login_color.svg);
        }
    }
    #menu_btn {
        i {top: 5px; background: $navy;}
        i:nth-child(1) {transform:rotate(45deg); width: 40px; top: 5px;}
        i:nth-child(3) {transform:rotate(-45deg); width: 40px; top: 5px;}
        i:nth-child(2) {display: none;}
    }
} 

/***** HOME ******/
#home #container {
    .s1 {
        & {
            height: 100vh;
            background: url(img/hero-bg.jpg) no-repeat center/cover fixed;
            position: relative;
        }
        .container {
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translateX(-50%);
            text-align: left;
            $flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        h1 {
            $secondaryThin;
            font-size: 9rem;
            line-height: 12rem;
            color: #fff;
            margin-bottom: 1rem;
            opacity: 0;
            visibility: hidden;
            transition: opacity 1s ease;
            text-edge: cap;
            text-shadow: 0px 25px 3px rgba(0, 0, 0, 0.16);
        }
        h1.active {
            opacity: 1;
            visibility: visible;
        }
        p {
            $secondaryThin;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease;
        }
        p.active {
            opacity: 1;
            visibility: visible;
        }
        .arrow {
            width: 95px;
            height: 83px;
            background: url(img/svg/cta_scrolldown_white.svg) no-repeat center/contain;
            cursor: pointer;
        }
    }
    .s2 {
        & {text-align: left;}
        .numbers-wrapper {
            &{margin-top: 5rem;}
            * {text-align: center;}
            .numbers-container {display: flex; justify-content: space-between;}
            .number {width: 25%; padding: 0 0.5rem; border-right: 1px solid #4273c93a;}
            .number:last-child {border-right: 0;}
            .number-counter {display: flex; justify-content: center; align-items: center;}
            .number-counter * {color: $navy; font-size: 2.8rem; line-height: 1em; $secondaryThin; letter-spacing: normal; text-align: center; vertical-align: middle; margin-bottom: 1rem;}
        }
    }
    .s3 {
        & {$flex; background: #F2F4F7;}
        > div {
            width: 50%;
            height: 620px;
        }
        .img-wrap .img {background: url(img/home_img1.jpg) no-repeat top/cover;}
        .content {
            & {
                background: #F2F4F7;
                position: relative;
                text-align: left;
            }
            > div {
                max-width: 590px;
                margin-left: auto;
                padding-left: 1rem;
                margin-right: 3.8rem;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
            p {padding: 0 2rem;}
            p:first-of-type {
                $secondaryLight;
                color: $blue; 
                position: relative;
                margin-bottom: 2rem;
            }
            .start {
                position: absolute;
                top: 10px;
                left: 0;
            }
            .end {
                position: relative;
                top: -10px;
            }
        }
    }

    .s3.--beta {
        .img-wrap .img {background: url(img/home-bg-s2.jpeg) center/cover no-repeat;}
    }
    .s4 {
        & {background: url(img/home_bg_infographic_parallax.jpg) no-repeat bottom/cover fixed;}
        h3 {
            color: #fff;
            max-width: 1093px;
            margin: 0 auto 4.75rem auto;
        }
        .infographic {
            & {
                max-width: 920px;
                margin: 0 auto;
                position: relative;
            }
            svg {
                & {width: 100%;}
                .icon {cursor: pointer;}
                .icon.sel {
                    g {
                        fill: rgb(2, 11, 24);
                        stroke: rgb(255, 255, 255);
                        stroke-width: 1;
                        opacity: 0.99;
                        transition: fill .3s ease;
                    }
                    circle, line, path {stroke: #fff; transition: stroke .3s ease;}
                }
            }
            .nav {
                p {
                    font-size: 15px;
                    letter-spacing: 0.25rem;
                    position: absolute;
                    text-transform: uppercase;
                    color: #fff;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: opacity .3s ease;
                }
                p.sel {opacity: 1;}
                p:nth-child(1) {
                    text-align: left;
                    top: 6rem;
                    left: 2.3rem;
                }
                p:nth-child(2) {
                    top: 6rem;
                    right: 0;
                    text-align: right;
                }
                p:nth-child(3) {
                    bottom: 6rem;
                    right: 2rem;
                    text-align: right;
                }
                p:nth-child(4) {
                    bottom: 6rem;
                    left: 0;
                    text-align: left;
                }
            }
            .content {
                > div {
                    $centerAll;
                    width: calc(100% - 2rem);
                    max-width: 440px;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity .3s ease;
                }
                h3 {margin-bottom: 2.5rem;}
                > div.sel {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        .mobile {
            & {display: none;}
            .fx-nav {
                & {
                    $flex;
                    align-items: center;
                    gap: 1rem;
                    text-align: left;
                    padding: 1rem 0;
                    position: relative;
                    border-bottom: solid 1px #ffffff66;
                }
                img {width: 60px;}
                p {
                    font-weight: 300;
                    font-size: 15px;
                    text-transform: uppercase;
                    letter-spacing: 0.25rem;
                    color: #fff;
                }
            }
            .fx-nav::after {
                $psDefault;
                width: 15px;
                height: 15px;
                background: url(img/svg/plus_white.svg) no-repeat center/contain;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .fx-nav.fx-on::after {background-image: url(img/svg/minus_white.svg);}
            .fx-slide {
                h3 {
                    font-size: 1.3rem;
                    line-height: 2rem;
                    margin-bottom: 2rem;
                }
                > div {
                    text-align: left;
                    padding: 2rem 1.5rem;
                }
            }
        }
    }
    .s5 {
        & {
            padding-top: 7.25rem;
            text-align: left;
        }
        .container {
            $flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        h2 {
            font-size: 3.6rem;
            line-height: 4.2rem;
            margin-bottom: 0
        }
        .slick-nav {
            & {
                $flex;
                align-items: center;
                gap: 2.4rem;
            }
            > div {
                width: 75px;
                height: 75px;
                cursor: pointer;
            }
            .arrow-prev {background: url(img/svg/circle_arrow_blue_left.svg) no-repeat center/contain;}
            .arrow-next {background: url(img/svg/circle_arrow_blue_right.svg) no-repeat center/contain;}
        }
        .slick-slider 
        {
            & {border-top: solid 1px #768d9cb3; margin-top: 3rem;}
            .slick-slide 
            {
                & {padding: 5rem 1rem 10rem;position: relative;}
                .inner 
                {
                    & {$flex; $flexContentSpaceBetween; gap: 1.5rem;max-width: 1313px;margin: auto;}
                    .article-tb {width: 50%; aspect-ratio: 524/294; object-fit: cover; min-width: 350px; max-width: 550px;}
                    .right {$flexW; max-width: 650px;}
                    h3 {font-size: 1.8rem;line-height: 2.4rem;color: #4273C9;margin: 2rem 0 2.8rem 0;}
                    p {font-weight: 300;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 3; line-clamp: 3; -webkit-box-orient: vertical;}
                }
            }
        }
    }
}

footer {
    & {
        background: #0B0E19;
        text-align: left;
        position: relative;
        z-index: 1;
    }
    p, .terms {
        font-size: 0.9rem;
        line-height: 1.35rem;
        color: #ADB3C7;
    }
    .terms {cursor: pointer;}
    .top {
        & {padding: 6.35rem 0;}
        .container {
            & {
                $flex;
                $flexContentSpaceBetween;
                gap: 3rem;
            }
            > div {width: 50%;}
            .left {
                /* & {max-width: 648px;} */
                & {max-width: 400px;}
                .logo {
                    display: block;
                    width: 317px;
                    height: 83px;
                    background: url(img/logo-white.png) no-repeat left center/contain;
                    margin-bottom: 4rem;
                }
                p:first-of-type {color: #fff;}
            }
            .right {
                & {max-width: 800px; $flexW;}
                nav {
                    a {
                        display: block;
                        font-size: 0.8rem;
                        line-height: 1.3rem;
                        text-transform: uppercase;
                        letter-spacing: 0.24rem;
                        color: #fff;
                        padding: 1rem 0;
                        border-bottom: solid 1px #AFAFAF;
                        transition: color .3s ease;
                        width: 49%;
                    }
                    a:nth-of-type(n + 5) {border-bottom: none;}
                    a:hover {color: $purple;}
                    .login {
                        $primaryLight;
                        width: 49%;
                        display: block;
                        font-size: 0.8rem;
                        line-height: 1.3rem;
                        text-transform: uppercase;
                        letter-spacing: 0.24rem;
                        color: #fff;
                        border-radius: 15px;
                        border: solid 1px #fff;
                        padding: 1.4rem 4rem 1.4rem 2rem;
                        background: url(img/svg/circle_arrow_blue_right.svg) 90% center/48px no-repeat;
                        transition: all .3s ease;
                        margin-top: 2.5rem;
                        cursor: pointer;
                    }
                    .login:hover {
                        background-color: $brightBlue;
                        border-color: $brightBlue;
                        color: #fff;
                    }
                    .wrapper {$flex; $flexWrap; $flexContentEnd; gap: 2%;}
                }
            }
        }
    }
    .bottom {
        & {
            padding: 2rem 0;
            border-top: solid 1px #707070;
        }
        .container {
            & {
                $flex;
                $flexContentSpaceBetween;
                align-items: center;
                gap: 2rem;
            }
            p {
                display: inline-block;
                color: #fff; 
                margin-right: 4rem;
            }
            p br {display: none;}
            span {
                color: #fff;
                transition: color .3s ease;
                cursor: pointer;
                margin-right: 2rem;
            }
            span a{color:inherit;transition: color .3s ease;}
            span a:hover{color:$purple;}
            span:last-child {margin-right:0}
            span:hover {color: $purple;}
            .linkedin {
                display: block;
                width: 60px;
                height: 60px;
                background: url(img/svg/icon_linkedin_white.svg) no-repeat center/contain;
            }
        }
    }
}

/****** ABOUT ******/
#about #container {
    .s1 {
        &{$flex; $flexContentCenter; $flexItemEnd; padding: 8rem 0 40px; max-height: 450px;}
        .container {position: relative; top: auto; transform: none; left: auto; height: 100%; $flex; $flexItemEnd;}
        h1 {margin-bottom: 2rem;}
        p.footnote {font-size: 10px; margin-top: 2.5rem; color: #fff;}
        .wrap {
            & {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 1rem; 
               opacity: 0;
               visibility: hidden;
               transition: opacity .5s ease;
            }
            .box {
                & {
                    height: 346px;
                    background: #13294a80;
                    border-radius: 15px;
                    position: relative;
                }
                .inner {
                    $centerAll;
                    width: calc(100% - 2rem);
                }
                .bw {
                    font-weight: 400;
                    width: 80px;
                    padding: .9rem 0;
                    text-align: center;
                    font-size: 11px;
                    line-height: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.13rem;
                    color: #fff;
                    border-radius: 100px;
                    border: solid 1px #ffffff80;
                    position: absolute;
                    top: 50%;
                    right: -50px;
                    transform: translateY(-50%);
                    z-index: 1;
                    background: #ffffff26;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity .5s ease;
                }
                .bw.active {
                    opacity: 1;
                    visibility: visible;
                }
                .js-num {
                    & {
                        $secondaryThin;
                        font-size: 2.85rem;
                        line-height: 3.4rem;
                        color: #fff;
                        display: inline-block;
                        position: relative;
                        overflow: hidden;
                        height: 85px;
                        $flex;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity .3s ease;
                    }
                    > span {
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        transition: transform 2s ease;
                        transform: translateY(0);
                        line-height: 1;
                    }
                    > span span {
                        flex: 0 0 100%;
                        height: 100%;
                    }
                    > span > span:first-child {opacity: 0;}
                }
                p {
                    font-weight: 300;
                    text-align: center;
                    font-size: 1.05rem;
                    line-height: 1.25rem;
                    color: #fff;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity .5s ease;
                }
                p.active {
                    opacity: 1;
                    visibility: visible;
                }
            }
            .box:nth-child(2) .js-num > span:nth-child(2) {opacity: 0; transition: opacity .5s ease;}
            .box:nth-child(2) .js-num > span:last-of-type {opacity: 0; transition: opacity .5s ease;}
            /* .box:nth-child(4) .js-num > span:last-of-type {opacity: 0; transition: opacity .5s ease;} */
            .box:nth-child(2).sel .js-num > span:nth-child(2) {opacity: 1;}
            .box:nth-child(2).active .js-num > span:last-of-type {opacity: 1;}
            /* .box:nth-child(4).active .js-num > span:last-of-type {opacity: 1;} */
        }
        .wrap.active {
            opacity: 1;
            visibility: visible;
        }
    }
    .s2 {
        & {text-align: left; padding-top: 5rem;}
        p:last-of-type {margin-top: 1rem;}
        p span {font-weight: 400;}
    }
    .s3 {
        & {
            background: url(img/about_bg_pillars_parallax.jpg) no-repeat center/cover fixed;
            text-align: left;
        }
        h3 {
            color: #fff;
            margin-bottom: 2rem;
        }
        .container {
            & {max-width: 1110px;}
            > div {
                & {
                    padding: 2rem 0;
                    $flex;
                    align-items: center;
                    gap: 5rem;
                    position: relative;
                }
                .numb {
                    font-weight: 300;
                    font-size: 11px;
                    line-height: 18px;
                    color: #768D9C;
                    letter-spacing: 0.13rem;
                    border-radius: 100px;
                    padding: 7px 0;
                    width: 65px;
                    border: solid 1px #768D9C;
                    text-align: center;
                }
                h3 {margin-bottom: 0;}
                a {color: #fff; transition: opacity .3s ease;}
                a:hover {opacity: 0.7;}
            }
            .line-anim::after {
                $psDefault;
                width: 0;
                height: 1px;
                background: #768D9C;
                bottom: 0;
                left: 0;
                transition: width .5s ease;
            }
            .line-anim:nth-child(2)::after {transition-delay: 1s;}
            .line-anim:nth-child(3)::after {transition-delay: 1.3s;}
            .line-anim:nth-child(4)::after {transition-delay: 1.6s;}
            .line-anim[data-scroll="out"]::after {width: 0;}
            .line-anim[data-scroll="in"]::after {width: 100%;}
        }
    }
    .s4 {
        & {background: #F2F4F7;}
        h3 {
            color: $navy;
            max-width: 1200px;
            margin: 0 auto;
        }
    }
    .s5 {
        & {
            background: url(img/about_bg_3col.jpg) no-repeat center/cover fixed;
            $flex;
        }
        > div {
            & {
                width: 33.33%;
                height: 925px;
                position: relative;
                border-right: solid 1px #ffffff80;
            }
            > div {
                $centerAll;
                width: calc(100% - 2rem);
                max-width: 440px;
            }
            h4, p {color: #fff;}
            h4 {
                position: relative;
                padding-bottom: 100px;
            }
            h4::after {
                $psDefault;
                width: 70px;
                height: 70px;
                background: url(img/svg/circle_border_plus_white.svg) no-repeat center/contain;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }
            h4::before {
                $psDefault;
                width: 1px;
                height: 0;
                background: #1351BC;
                top: 50%;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                transition: height .5s ease;
            }
            p {
                font-size: 0.9rem;
                line-height: 1.5rem;
                margin: 2rem 0 7.5rem 0;
            }
            .global-btn {
                display: block;
                width: 100%;
                max-width: 384px;
            }
            .open {
                opacity: 0;
                visibility: hidden;
                height: 0;
                transition: opacity .5s ease;
            }
        }
        > div:last-of-type {border-right: none;}
        > div.sel {
            .open {
                opacity: 1;
                visibility: visible;
                height: auto;
            }
            h4::after {opacity: 0;}
            h4::before {
                opacity: 1;
                height: 65px;
            }
        }
    }
    .s6 {
        & {height: 940px;}
        .img {background: url(img/about_bg_team_parallax.jpg) no-repeat top/cover;}
    }
    .s7 {
        & {
            padding-top: 7.25rem;
            text-align: left;
        }
        .container {
            $flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        h2 {
            font-size: 5.15rem;
            line-height: 6rem;
            margin-bottom: 0
        }
        .slick-nav {
            & {
                $flex;
                align-items: center;
                gap: 2.4rem;
            }
            > div {
                width: 75px;
                height: 75px;
                cursor: pointer;
                transition: all .5s ease;
            }
            .arrow-prev {background: url(img/svg/circle_arrow_blue_left.svg) no-repeat center/contain;}
            .arrow-next {background: url(img/svg/circle_arrow_blue_right.svg) no-repeat center/contain;}
            .arrow-prev.slick-disabled {background-image: url(img/svg/circle_arrow_blue_left_no.svg);}
            .arrow-next.slick-disabled {background-image: url(img/svg/circle_arrow_blue_right_no.svg);}
        }
        .slick-slider {
            & {
                border-top: solid 1px #768d9cb3;
                margin-top: 1.5rem;
            }
            .slick-slide {
                & {
                    width: 470px;
                    height: 600px;
                    border-right: solid 1px #768d9cb3;
                    position: relative;
                }
                .plus-wrap {
                    & {
                        position: absolute;
                        top: 3.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        width: calc(100% - 2rem);
                        max-width: 370px;
                        transition: opacity .5s ease;
                    }
                    .plus {
                        width: 80px;
                        height: 80px;
                        background: url(img/svg/circle_border_plus_gray.svg) no-repeat center/contain;
                    }
                }
                .inner {
                    & {
                        position: absolute;
                        bottom: 3.5rem;
                        left: 50%;
                        transform: translateX(-50%); 
                        width: calc(100% - 2rem);
                        max-width: 370px; 
                        transition: bottom 0.4s ease;
                    }
                    h2 {margin-bottom: 1.3rem;}
                    p {
                        font-weight: 300;
                        margin-bottom: 1rem;
                    }
                    a {color: $gray; transition: color .3s ease;}
                    a:hover {color: $blue;}
                    p:last-of-type {margin-bottom: 0;}
                    .open {
                        opacity: 0;
                        visibility: hidden;
                        height: 0;
                        transition: opacity .5s ease .5s;
                    }
                }
            }
            .slick-slide:hover {
                .plus-wrap {opacity: 0; visibility: hidden;}
                .inner { 
                    & {bottom: 5rem;}
                    .open {
                        opacity: 1;
                        visibility: visible;
                        height: auto;
                    }
                }
            }
        }
    }
}

/****** APPROACH ******/
#approach #container {
    .s1.--beta {
        /* strong {font-weight: 300;} */
        .text-wrap > div:nth-child(1) {max-width: 100%;}
    }
    .s2 {
        h2 {
            text-align: left;
            color: #21498F;
            margin-bottom: 0;
        }
        h2 span {font-weight: 300;}
        p {
            font-size: 1.6rem;
            text-align: left;
            font-weight: 100;
            line-height: 1.5em;
            margin-top: 3.5rem;
        }
    }
    .s3 {
        & {
            padding: 3rem 0;
            background: url(img/approach_bg_strategy_parallax.jpg) no-repeat center/cover fixed;
            text-align: left;
        }
        .wrap {
            & {
                $flex;
                justify-content: space-between;
                align-items: center;
                gap: 2rem;
            }
            h2 {
                color: #fff;
                max-width: 540px;
                text-align: left;
                margin-bottom: 0;
            }
            .graph {
                & {
                    width: 50%;
                    height: 550px;
                    position: relative;
                }
                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity .3s ease, transform .7s ease;
                }
                img.sel {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        }
        .nav {
            & {
                $flex;
                align-items: center;
                gap: 2rem;
            }
            > div {
                display: inline-block;
                border-radius: 100px;
                padding: 18px 25px;
                border: solid 1px transparent;
                transition: all .5s ease;
                cursor: pointer;
            }
            > div.sel {
                border-color: #FFFFFF40;
                background: #10396E;
            }
            > div.sel span::after {height: 120px;}
            span {
                display: block;
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                letter-spacing: 2.75px;
                text-transform: uppercase;
                color: #fff;
                position: relative;
                padding-left: 2rem;
            }
            span::before {
                $psDefault;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            span::after {
                $psDefault;
                width: 1px;
                height: 0;
                left: 10px;
                top: 0;
                transition: height .5s ease;
            }
            > div[data-id="1"] span::before, > div[data-id="1"] span::after {background: #1351BC;}
            > div[data-id="2"] span::before, > div[data-id="2"] span::after {background: #2A7DCB;}
            > div[data-id="3"] span::before, > div[data-id="3"] span::after {background: #1A5CA6;}
            > div[data-id="4"] span::before, > div[data-id="4"] span::after {background: #399FEF;}
        }
    }
    .s4 {
        & {
            text-align: left;
            position: relative;
            padding: 6.4rem 0 10rem 0;
            overflow: hidden;
        }
        .container {
            height: 0;
            opacity: 0;
            visibility: hidden;
            transition: opacity .3s ease;
        }
        .container.sel {
            height: auto;
            opacity: 1;
            visibility: visible;
        }
        h2 {
            font-size: 5.25rem;
            line-height: 6rem;
            color: $navy;
        }
        .wrap {
            & {
                margin-top: 6rem;
                $flex;
                justify-content: space-between;
                gap: 2rem;
            }
            > div:nth-child(1) {
                & {max-width: 435px;}
                h4 {
                    color: #4273C9;
                    margin-bottom: 2.5rem;
                }
                ul {
                    & {
                        list-style: none;
                        position: relative;
                        padding-bottom: 1.5rem;
                    }
                    li {
                        font-weight: 300;
                        margin-bottom: 1rem;
                    }
                }
                ul::after {
                    $psDefault;
                    width: 65px;
                    height: 1px;
                    background: #4273C9;
                    bottom: 0;
                    left: 0;
                }
            }
            > div:nth-child(2) {
                & {max-width: 760px;}
                p.lg {
                    $secondaryLight;
                    color: #4273C9;
                }
                p {
                    font-weight: 300;
                    margin-bottom: 2rem;
                }
                p:last-of-type {margin-bottom: 0;}
            }
        }
    }
}

/****** PLATFORM ******/
#platform #container {
    .s1 {
        .text-wrap {
            > div:nth-child(1) {max-width: 430px;}
            > div:nth-child(2) {max-width: 760px;}
        }
    }
    .s2 {text-align: left;}
    .s3 {
        & {
            background: url(img/platform_bg_techonology_parallax.jpg) no-repeat center/cover fixed;
            text-align: left;
        }
        h2 {
            color: #fff; 
            font-size: 5.15rem;
            line-height: 6rem;
            margin-bottom: 5.3rem;
        }
        .wrap {
            
            p {
                color: #fff;
                margin-bottom: 2rem;
            }
            p.lg {$secondaryThin;}
        }
        .numbers {
            & {
                $flex;
                border-top: solid 1px #ffffffb3;
                border-bottom: solid 1px #ffffffb3;
                margin-top: 6rem;
            }
            .box {
                & {
                    width: 20%;
                    height: 302px;
                    position: relative;
                    border-right: solid 1px #ffffffb3;
                }
                .inner {
                    $centerAll;
                    text-align: center;
                    width: calc(100% - 2rem);
                }
                h3 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #fff;
                }
                p {
                    font-weight: 300;
                    text-align: center;
                    font-size: 1.05rem;
                    line-height: 1.25rem;
                    color: #fff;
                }
            }
            .box:last-of-type {border-right: none;}
        }
    }
    .s4 {
        & {$flex; background: #F2F4F7;}
        > div {
            width: 50%;
            height: 620px;
        }
        .img-wrap .img {background: url(img/platform_img_team.jpg) no-repeat center/cover;}
        .content {
            & {
                background: #F2F4F7;
                position: relative;
                text-align: left;
            }
            > div {
                max-width: 590px;
                margin-left: auto;
                padding-left: 1rem;
                margin-right: 3.8rem;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
            h3 {
                color: #21498F;
            }
            p {padding: 0 2rem;}
            p:first-of-type {
                $secondaryLight;
                color: $blue; 
                position: relative;
                margin-bottom: 2rem;
            }
        }
    }
    .s6 {
        & {
            background: url(img/platform_bg_risk_parallax.jpg) no-repeat center/cover fixed;
            text-align: left;
            padding-top: 9rem;
        }
        h2 {
            color: #fff;
            font-size: 5.15rem;
            line-height: 6rem;
            margin-bottom: 5.3rem;
        }
        .wrap {
            & {
                $flex;
                justify-content: space-between;
                gap: 2rem;
            }
            > div:nth-child(1) {
                & {max-width: 430px;}
                h4 {
                   font-size: 1.19rem;
                   color: #fff; 
                   margin-bottom: 2.3rem;
                }
                > div {
                    & {
                        padding: 1.4rem 0;
                        position: relative;
                    }
                    p {
                        font-weight: 300;
                        color: #fff;
                    }
                }
                .line-anim:first-of-type::before {
                    $psDefault;
                    width: 0;
                    height: 1px;
                    background: #768D9C;
                    top: 0;
                    left: 0;
                    transition: width .5s ease 0.7s;
                }
                .line-anim::after {
                    $psDefault;
                    width: 0;
                    height: 1px;
                    background: #768D9C;
                    bottom: 0;
                    left: 0;
                    transition: width .5s ease;
                }
                .line-anim:nth-child(2)::after {transition-delay: 1s;}
                .line-anim:nth-child(3)::after {transition-delay: 1.3s;}
                .line-anim:nth-child(4)::after {transition-delay: 1.6s;}
                .line-anim[data-scroll="out"]::after, .line-anim[data-scroll="out"]::before {width: 0;}
                .line-anim[data-scroll="in"]::after, .line-anim[data-scroll="in"]::before {width: 100%;}
            }
            > div:nth-child(2) {
                & {max-width: 760px;}
                p {
                    font-weight: 300;
                    color: #fff;
                    margin-bottom: 1rem;
                }
                p.lg {
                    $secondaryLight;
                    margin-bottom: 2.6rem;
                }
                p:last-of-type {margin-bottom: 0;}
            }
        }
        .bottom {
            & {
                padding: 6rem 0;
                margin-top: 6rem;
                border-top: solid 1px #768D9C;
                text-align: center;
            }
            p.lg {
                $secondaryThin;
                font-size: 1.85rem;
                line-height: 3.4rem;
                color: #fff;
                max-width: 1316px;
                margin: 0 auto;
                width: calc(100% - 2rem);
            }
            span {$secondaryLight;}
        }
        .container.vb
        {
        	&{padding:0 0 6rem 0;text-align:center;}
        	h3{margin-bottom:1em;color:#fff}
        	p.lg {
            $secondaryLight;
            color: #4273C9;
            margin-bottom: 3.2rem;
        	}
        	p {font-weight: 300;color:#fff}
        }
    }
    .s7 {
        & {height: 675px;}
        .img {background: url(img/Walleye-Candid1920x810.jpg) no-repeat top/cover;}
    }
    .s5,.s8 {
        & {text-align: left;}
        h2 {
            font-size: 5.15rem;
            line-height: 6rem;
            margin-bottom: 3.8rem;
        }
        p.lg {
            $secondaryLight;
            color: #4273C9;
            margin-bottom: 3.2rem;
        }
        p {font-weight: 300;}
    }
}

/****** PEOPLE ******/
#people #container {
    .s1 {
        .text-wrap {
            > div:nth-child(1) {max-width: 100%;}
            > div:nth-child(2) {
                & {max-width: 560px;}
                .start {
                    position: absolute;
                    top: 10px;
                    left: 0;
                }
                p {
                    padding: 0 1.5rem;
                    position: relative;
                    margin-bottom: 1rem;
                }
            }
        }
    }
    .s2 {
        & {text-align: left;}
        .container {max-width: 1095px;}
        h2 span {$secondaryLight;}
    }
    .s3 {
        & {background: url(img/people_bg_parallax.jpg) no-repeat center/cover fixed; padding-bottom:100px; align:left; }
            a {
                display: inline-block;
                color: #fff;
                        $primaryThin;
            }
                    h3 {
                        font-size: 1.9rem;
                        line-height: 2.4rem;
                        color: #fff;
                        margin: 1.5rem 0 0.5rem 0;
                    }
            h2 {
                width: calc(100% - 2rem);
                max-width: 1316px;
                margin: 0 auto;
                text-align: left;
                font-size: 5.25rem;
                line-height: 6rem;
                color: #fff;
                margin: 6.67rem 0 2.5rem 0;
		padding-top:50px;
            }
	    table {
                width: calc(100% - 2rem);
                max-width: 1316px;
                margin: 0 auto;
                text-align: left;
	    }
	    td {
	    vertical-align:bottom;
	    border-bottom: 1px solid #768D9C;
	    padding: 2rem 0;
    		}
	   td.bTitle {
		   font-size:24px;
		 vertical-align:bottom;
		 padding:2rem 0 2.75rem 2rem;
	 }
    }
    .s3.secPadding {
    }
    .s3b {
        & {background: url(img/people_bg_parallax.jpg) no-repeat center/cover fixed;}
        .page-nav {
            & {
                padding: 4.7rem 0;
                width: calc(100% - 2rem) !important;
                max-width: 1316px;
                margin: 0 auto;
                text-align: left;
                $flex;
                gap: 1rem;
            }
            .fx-nav {
                width: auto !important;
                display: inline-block;
                padding: 0.5rem 1.76rem 0.7rem 1.76rem;
                border-radius: 100px;
                border: solid 1px transparent;
                transition: all .3s ease;
            }
            .fx-nav.fx-on {
                background: #10396E;
                border-color: #FFFFFF80;
            }
            p {
                display: inline-block;
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                text-transform: uppercase;
                letter-spacing: 0.13rem;
                color: #fff;
            }
        }
        .fx-slides {
            & {
                background: rgb(33 73 143 / 33%);
                padding-bottom: 7rem;
            }
            h2 {
                width: calc(100% - 2rem);
                max-width: 1316px;
                margin: 0 auto;
                text-align: left;
                font-size: 5.25rem;
                line-height: 6rem;
                color: #fff;
                margin: 6.67rem 0 2.5rem 0;
            }
            .wrap {
                & {
                    $flex;
                    $flexWrap;
                    border-bottom: solid 1px #ffffffb3;
		    justify-content: center;
                }
                a {
                    & {
                        display: block;
                        width: 25%;
                        padding: 2.7rem 0 5.7rem 0;
                        border-right: solid 1px #ffffffb3;
                        border-left: solid 1px #ffffffb3;
                    }
                    > div {
                        width: calc(100% - 2rem);
                        max-width: 276px;
                        text-align: left;
                    }
                    img {width: 100%;}
                    h3 {
                        $primaryThin;
                        font-size: 1.7rem;
                        line-height: 2.4rem;
                        color: #fff;
                        margin: 1.5rem 0 0.5rem 0;
                    }
                    p {color: #fff;}
                }
                a:nth-child(4) {border-right: none;}
            }
            .wrap:first-of-type {border-top: solid 1px  #ffffffb3;}
        }
    }
}

/****** BIO ******/
#bio header nav .people::after {opacity: 1;}
#bio #container {
    .s2 {
        & {
            background: url(img/people_bg_parallax.jpg) no-repeat center/cover fixed;
            padding: 13rem 0 9rem 0;
            text-align: left;
        }
        .container {
            $flex;
            justify-content: space-between;
            gap: 2rem;
        }
        .left {
            & {width: 100%; max-width: 325px;}
            .global-btn {
               & {margin-bottom: 3rem; width: 100%;}
               span {background-image: url(img/svg/circle_arrow_left_white.svg);}
            }
            img {display: block; width: 100%; height: auto;}
        }
        .right {
            & {max-width: 872px; flex: 1;}
            h2, p {color: #fff;}
            h2 {
                font-size: 5.15rem;
                line-height: 6rem;
                margin-bottom: 1.5rem;
            }
            p.lg {
                $secondaryThin;
                margin-bottom: 3rem;
            }
        }
    }
}

/****** FORM ******/
.form {
    & {text-align: left;}
    form {
        & {
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
        }
        > div {
            $flex;
            gap: 2rem;
        }
        input {
            display: block;
            width: 50%;
            $primaryLight;
            font-size: 1rem;
            line-height: 1.6rem;
            color: #5E7176;
            background: transparent;
            border: none;
            padding: 13px 0;
            border-bottom: solid 1px #768D9C;
            -webkit-appearance: none;
            margin-bottom: 1rem;
        }
        ::placeholder {
            $primaryLight;
            font-size: 1rem;
            line-height: 1.6rem;
            color: #5E7176;
        }
        textarea {
            display: block;
            width: 100%;
            height: 180px;
            $primaryLight;
            font-size: 1rem;
            line-height: 1.6rem;
            color: #5E7176;
            background: transparent;
            border: none;
            padding: 13px 0;
            border-bottom: solid 1px #768D9C;
            -webkit-appearance: none;
            margin-bottom: 2rem;
            resize: none;
        }
        input:focus, textarea:focus, button:focus, select:focus {outline: none;}
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
        -webkit-text-fill-color: #5E7176;
        transition: background-color 5000s ease-in-out 0s;
        }
        input:focus::placeholder, textarea:focus::placeholder, button:focus::placeholder, select:focus::placeholder {opacity: 0;}
        .global-btn {
            min-width: 360px;
            background: #fff;
            margin-top: 2rem;
            cursor: pointer;
        }
        .global-btn:hover {
            background-color: #1351BC;
            border-color: #1351BC;
            color: #fff;
        }
    }
    .response {
        $primaryLight;
        position: relative;
        top: 2rem;
        text-align: center;
    }
}

/***** CAREERS ******/
#careers #container {
    .s1 {
        .text-wrap {
            > div:nth-child(1) {
                & {max-width: 760px;}
                h1 {margin-bottom: 3.3rem;}
            }
            > div:nth-child(2) {max-width: 430px;}
            .global-btn {
                & {
                    display: block; 
                    margin-bottom: 5rem;
                }
                span {background-image: url(img/svg/circle_arrow_right_white.svg);}
            }
        }
    }

    .s1.--beta {
        .text-wrap > div:nth-child(1) {max-width: 100%;}
        .quote-wrapper {
            padding: 0 0 0 2rem;
            $secondaryLight;
            position: relative;
            margin-bottom: 2rem;
        }
        .start {
            position: absolute;
            top: 10px;
            left: 0;
        }
        .end {
            position: relative;
            top: -10px;
        }
        .quote-attribute {
            padding-left: 2rem;
            font-size: 1.05rem;
        }
    }

    .s2n {
        .wrapper {
            & {display: flex;}
            > div {width: 50%;}
            .left {background: url(img/approach-s2-bg.jpeg) 65% center/cover no-repeat;}
            .right {
                * {text-align: left;}
                .top {padding: 5rem 1rem;}
                .bot {padding: 8rem 1rem; background: url(img/hero/careers_hero_parallax.webp) no-repeat center/cover fixed;}
                .bot * {color: #fff;}
                .inner {max-width: 600px; margin: 0 auto 0 2rem;}
                .inner > p {margin-bottom: 2rem;}
                p a {color: $brightBlue; font-weight: 400;}
                p a:hover {text-decoration: underline;}
                h3 {margin-bottom: 1.5rem;}
            }
        }
    }
		.s2nb {
        .wrapper {
            & {display: flex;}
            > div {width: 50%;}
            .left {background: url(img/careers_img1.jpg) left center/cover no-repeat;}
            .right {
                * {text-align: left;}
                .top {padding: 5rem 1rem;}
                .bot {padding: 8rem 1rem; background: url(img/hero/careers_hero_parallax.webp) no-repeat center/cover fixed;}
                .bot * {color: #fff;}
                .inner {max-width: 600px; margin: 0 auto 0 2rem;}
                .inner > p {margin-bottom: 2rem;}
                p a {color: $brightBlue; font-weight: 400;}
                p a:hover {text-decoration: underline;}
                h3 {margin-bottom: 1.5rem;}
            }
        }
    }
    .s3n {
        & {padding: 7.5rem 0 10rem; background-color: $lightBlue;}
        h3 {color: $navy; margin-bottom: 3rem; padding: 0 1rem; width: 100%; font-size: 3.6rem; line-height: 1.2em; font-weight: 100;}
        .slide {width: 65vw; margin: 0 1.5rem; min-width: 810px;}
        .slide-inner {display: flex; justify-content: start; aspect-ratio: 1356/741; max-height: 741px; overflow: hidden;}
        .image-wrapper img {display: block; aspect-ratio: 543/594; width: 100%; height: auto; transform: scale(0.92); transition: transform 1s ease; will-change: transorm, transform-origin;}
        .image-wrapper {width: 50%;}
        .text-wrapper {width: 0; overflow: hidden; transition: width .4s ease}
        .text-inner {height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: .5rem; padding: 1rem 1rem 1rem 2rem; opacity: 0;}
        .text-inner p {font-size: 1rem; color: $blue; line-height: 1.65em; font-weight: 300;}

        .slider-parent {
            &{position: relative;}
            button {outline: 0; border: 0; background-color: $brightBlue; border-radius: 50%; width: 3.75rem; height: 3.75rem; position: relative; cursor: pointer; transition: background-color .3s ease; position: absolute; top: 50%; transform: translateY(-50%); z-index: 1;}
            button.--prev-btn {left: 1.5rem;}
            button.--next-btn {right: 1.5rem;}
            button:hover {background-color: $navy;}
            button img {display: block; $centerAll;}
        }

        .flickity-page-dots {
            &{bottom: -75px;}
            .dot {margin: 0 .75rem; opacity: 0.5; transition: opacity .3s ease; background-color: $brightBlue;}
            .dot.is-selected {opacity: 1;}
        }

        .prev-slide {
            .slide-inner {justify-content: end;}
        }
        
        .next-slide {
            .slide-inner {justify-content: start;}
        }

        .current-slide {
            .text-wrapper {width: 50%;transition: width .5s ease;}
            .text-inner {opacity: 1; transition: opacity .3s ease .5s;}
            .image-wrapper img {transform: scale(1);}
        }
    }
    
    .s3 {
        & {height: 772px;}
        .img {background: url(img/careers_bg_team_parallax.jpg) no-repeat top/cover;}
    }

    #careers-popup {
        & {overflow: auto;max-width: 400px;}
        p {max-width: 16rem; margin: 0 auto; text-align: left;}
    }
}

@media screen and (max-width: 980px) {
    #careers #container {
        .s3n {
            .slide {width: 80vw; min-width: 0; margin: 0 1.25vw;}
            .text-inner p {line-height: 1.5em; font-size: 0.9rem;}
        }   
    }
    #contact #container {
        .s4nb {
            .slide {width: 80vw; min-width: 0; margin: 0 1.25vw;}
            .text-inner p {line-height: 1.5em; font-size: 0.9rem;}
        }   
    }
}

@media screen and (max-width: 767px) {
    #careers #container {
        .s2n {
            .wrapper {
                & {flex-direction: column-reverse;}
                > div {width: 100%;}
                .right .inner {margin: 0 auto 0 0;}
                .right .bot {background-attachment: scroll; padding: 5rem 1rem;}
                .left {height: 400px;}
            }
        }
				.s2nb {
            .wrapper {
                & {flex-direction: column-reverse;}
                > div {width: 100%;}
                .right .inner {margin: 0 auto 0 0;}
                .right .bot {background-attachment: scroll; padding: 5rem 1rem;}
                .left {height: 400px;}
            }
        }
        .s3n {
            &{padding: 5rem 0 7.5rem;}
            .slide {max-width: 500px;}
            .slide-inner {flex-direction: column; aspect-ratio: auto; justify-content: center !important;}
            .slide-inner > div {width: 100% !important;}
            .text-inner {padding: 2.5rem 1rem 1rem; transition: opacity .6s ease !important;}
            .flickity-page-dots {
                &{bottom: -50px;}
                .dot {margin: 0 .4rem; opacity: 0.5; transition: opacity .3s ease; background-color: $brightBlue; width: 0.5rem; height: 0.5rem;}
                .dot.is-selected {opacity: 1;}
            }
        }
    }
    #contact #container
    {
    	.s4nb {
            &{padding: 5rem 0 7.5rem;}
            .slide {max-width: 500px;}
            .slide-inner {flex-direction: column; aspect-ratio: auto; justify-content: center !important;}
            .slide-inner > div {width: 100% !important;}
            .text-inner {padding: 2.5rem 1rem 1rem; transition: opacity .6s ease !important;}
            .flickity-page-dots {
                &{bottom: -50px;}
                .dot {margin: 0 .4rem; opacity: 0.5; transition: opacity .3s ease; background-color: $brightBlue; width: 0.5rem; height: 0.5rem;}
                .dot.is-selected {opacity: 1;}
            }
        }
    }
}

@keyframes slideShowScroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(-100%); }
}

/***** CONTACT ******/
#contact #container {
    .s1 {
        & {
            position: relative;
            z-index: 1;
        }
        .text-wrap {
            > div:nth-child(1) {max-width: 760px;}
            > div:nth-child(2) {
                & {
                    max-width: 430px;
                    padding-top: 1.5rem;
                    border-top:solid 1px #ffffffb3;
                }
                a {
                    color: #fff;
                    border-bottom: solid 1px #ffffffb3;
                    padding-bottom: 3px;
                    transition: opacity .3s ease;
                }
                a:hover {opacity: 0.7;}
            }
        }
    }
    .s1.--beta {
        &{max-height: auto; height: auto; min-height: 0; padding: 0;}
        .container {position: static; height: 100%; display: flex; flex-direction: column; justify-content: end; padding: 15rem 0 7.5rem; transform: translate(0);}
        .text-wrap > div:nth-child(1) {max-width: 1215px; margin: 0 auto 0 0;}
    }

    .s2 {
        background: #fff;
        position: relative;
        z-index: 1;
    }

    .s2n {
        * {text-align: left;}
        .fx-nav {width: auto !important; padding: 1.5rem 2.25rem; font-size: 0.8rem; letter-spacing: 0.2em; font-weight: 400; line-height: 1em; color: $navy; background-color: rgba(66, 115, 201, 0.15); margin-right: 0.5rem; text-transform: uppercase; transition: color .3s ease, background-color .3s ease;}
        .fx-nav.fx-on, .fx-nav:hover {background-color: $brightBlue; color: #fff;}
        h3 {color: $navy; margin: 4rem 0;font-size: 3.6rem; line-height: 1.2em; font-weight: 100;}
        .global-btn {background-color: #fff; cursor: pointer; margin-top: 0;}
        .global-btn:hover {background-color: $brightBlue;}
        .form {max-width: 100%;}
        .btns-wrapper {display: flex; align-items: center; gap: 2rem;}
        p.extra {margin-top: 2rem; line-height: 1.8em;}
        p.extra a {color: $brightBlue; font-weight: 300;}
        p.response {top: 0; margin-top: 2rem; line-height: 1.8em;}
    }


    .s4n {
        &{overflow: hidden; padding: 10rem 0 2.5rem; background-color: #0B0E19;}
        #contact-images-slider {display: flex; gap: 0 2rem; position: relative; will-change: transform; animation: slideShowScroll 50s linear infinite alternate 2s;}
        .slide-wrap {max-width: 600px; width: 80vw; flex-shrink: 0;}
        .img-wrap img {display: block; width: 100%; height: auto; aspect-ratio: 600/420; object-fit: cover; object-position: left center;}
    }
    .s4nb {
        & {padding: 7.5rem 0 10rem; background-color: $lightBlue;}
        h3 {color: $navy; margin-bottom: 3rem; padding: 0 1rem; width: 100%; font-size: 3.6rem; line-height: 1.2em; font-weight: 100;}
        .slide {width: 50vw; margin: 0 1.5rem; min-width: 810px;}
        .slide-inner {display: flex; justify-content: center; overflow: hidden;}
        .image-wrapper{display:flex;}
        .image-wrapper img {display: block; width: 100%; height: auto; transform: scale(0.92); transition: transform 1s ease; will-change: transorm, transform-origin;}
        .text-wrapper {width: 0; overflow: hidden; transition: width .4s ease}
        .text-inner {height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: .5rem; padding: 1rem 1rem 1rem 2rem; opacity: 0;}
        .text-inner p {font-size: 1rem; color: $blue; line-height: 1.65em; font-weight: 300;}

        .slider-parent {
            &{position: relative;}
            button {outline: 0; border: 0; background-color: $brightBlue; border-radius: 50%; width: 3.75rem; height: 3.75rem; position: relative; cursor: pointer; transition: background-color .3s ease; position: absolute; top: 50%; transform: translateY(-50%); z-index: 1;}
            button.--prev-btn {left: 1.5rem;}
            button.--next-btn {right: 1.5rem;}
            button:hover {background-color: $navy;}
            button img {display: block; $centerAll;}
        }

        .flickity-page-dots {
            &{bottom: -75px;}
            .dot {margin: 0 .75rem; opacity: 0.5; transition: opacity .3s ease; background-color: $brightBlue;}
            .dot.is-selected {opacity: 1;}
        }

        .prev-slide {
            .slide-inner {justify-content: end;}
        }
        
        .next-slide {
            .slide-inner {justify-content: start;}
        }

        .current-slide {
        		.slide-inner {justify-content: center;}
            .text-wrapper {width: 50%;transition: width .5s ease;}
            .text-inner {opacity: 1; transition: opacity .3s ease .5s;}
            .image-wrapper img {transform: scale(1);}
        }
    }
    .s3 {
        & {
            background: #0B295C;
            text-align: left;
            position: relative;
        }
        .container {
            position: relative;
            max-width: 1100px;
            z-index: 1;
        }
        .intro {
            & {
                padding: 9rem 0 2rem 0;
            }
            h2 {
                font-size: 5.25rem;
                line-height: 6rem;
                color: #fff;
            }
        }
        #locations::before {
            $psDefault;
            width: 100%;
            height: 1px;
            background: #ffffffbf;
            top: 0;
            left: 0;
            z-index: 5;
        }
        #locations {
            & {
                height: auto;
                position: relative;
                width: 100%;
                padding: 2rem 0 0;
                overflow: hidden;
                transition: background-image .5s ease;
                background-attachment: fixed;
                background: none !important;

            }
            .gradient {
                width: 100%;
                height: 100%;
                background: url(img/svg/map_overlay.svg) no-repeat center/cover;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 3;
            }
            .container {
                & {max-width: none; z-index: 4;}
                > div {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding-top: 7rem;
                    opacity: 0.3;
                    transition: opacity .5s ease;
                }
                > div:last-of-type {
                    visibility: visible;
                    padding-bottom: 20rem;
                }
                h3 {
                    font-size: 3.4rem;
                    line-height: 4rem;
                    color: #fff; 
                    margin-bottom: 2rem;
                }
                p {
                    display: inline-block;
                    $secondaryThin;
                    font-size: 1.5rem;
                    line-height: 2rem; 
                    color: #fff; 
                }
                a {pointer-events: none;}
                > div.active {
                    & {opacity: 1;}
                    a {pointer-events: auto;}
                }
            }
        }
        #locations.active {
            position: sticky !important;
            top: 0;
            overflow-y: auto;
        }
        #locations .plx-bg {opacity: 0; will-change: opacity; display: block; transition: opacity .35s ease; object-fit: cover; object-position: center;}
        #locations.ny .plx-bg.ny {opacity: 1;}
        #locations.mn .plx-bg.mn {opacity: 1;}
        #locations.uk .plx-bg.uk {opacity: 1;}
        #locations.il .plx-bg.il {opacity: 1;}
        #locations.ma .plx-bg.ma {opacity: 1;}
        #locations.ct .plx-bg.ct {opacity: 1;}
        #locations.ca .plx-bg.ca {opacity: 1;}
        #locations.miami .plx-bg.miami {opacity: 1;}
        #locations.ca-lj .plx-bg.ca-lj {opacity: 1;}
        #locations.tx .plx-bg.tx {opacity: 1;}
        #locations.du .plx-bg.du {opacity: 1;}
        /* Mobile */
        .mobile {
            & {
                display: none;
                padding: 0 1rem 5rem 1rem;
            }
            .fx-nav {
                & {
                    padding: 1rem 0;
                    position: relative;
                    border-bottom: solid 1px #ffffff66;
                }
                h3 {color: #fff; margin-bottom: 0;}
            }
            .fx-nav::after {
                content: '';
                display: block;
                position: absolute;
                width: 15px;
                height: 15px;
                background: url(img/svg/plus_white.svg) no-repeat center/contain;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .fx-nav.fx-on::after {background-image: url(img/svg/minus_white.svg);}
            .fx-slide {
                .inner {padding: 2rem 0;}
                .map {
                    width: 100%;
                    height: 400px;
                    margin-top: 2rem;
                }
                .map.ny {background: url(img/contact_map_newyork.jpg) no-repeat center/cover;}
                .map.mn {background: url(img/contact_map_minneapolis.jpg) no-repeat center/cover;}
                .map.uk {background: url(img/contact_map_london.jpg) no-repeat center/cover;}
                .map.il {background: url(img/contact_map_chicago.jpg) no-repeat center/cover;}
                .map.ma {background: url(img/contact_map_boston.jpg) no-repeat center/cover;}
                .map.ct {background: url(img/contact_map_stamford.jpg) no-repeat center/cover;}
                .map.ca {background: url(img/contact_map_sanfrancisco.jpg) no-repeat center/cover;}
                .map.miami {background: url(img/contact_map_miami_768.jpg) no-repeat center/cover;}
                .map.calj {background: url(img/contact_map_lajolla.jpg) no-repeat center/cover;}
                .map.tx {background: url(img/contact_map_houston.jpg) no-repeat center/cover;}
                .map.du {background: url(img/contact_map_dubai.jpg) no-repeat center/cover;}
                p {
                    $secondaryThin;
                    color: #fff;
                }
            }
        }
    }
    /* .s3 {
        & {
            background: #0B295C;
            text-align: left;
            position: relative;
        }
        .container {
            position: relative;
            max-width: 1100px;
            z-index: 1;
        }
        .intro {
            & {
                padding: 9rem 0 2rem 0;
            }
            h2 {
                font-size: 5.25rem;
                line-height: 6rem;
                color: #fff;
            }
        }
        #locations::before {
            $psDefault;
            width: 100%;
            height: 1px;
            background: #ffffffbf;
            top: 0;
            left: 0;
            z-index: 1;
        }
        #locations {
            & {
                height: 100vh;
                position: relative;
                width: 100%;
                padding: 9rem 0;
                overflow: hidden;
                transition: background-image .5s ease;
            }
            .gradient {
                width: 100%;
                height: 100vh;
                background: url(img/svg/map_overlay.svg) no-repeat center/cover;
                position: fixed;
                left: 0;
                top: 0;
            }
            .container {
                & {max-width: none;}
                > div {
                    max-width: 1100px;
                    margin: 0 auto;
                    margin-bottom: 7rem;
                    opacity: 0.3;
                    transition: opacity .5s ease;
                }
                > div:last-of-type {opacity: 0; visibility: hidden;}
                h3 {
                    font-size: 3.4rem;
                    line-height: 4rem;
                    color: #fff; 
                    margin-bottom: 2rem;
                }
                p {
                    display: inline-block;
                    $secondaryThin;
                    font-size: 1.5rem;
                    line-height: 2rem; 
                    color: #fff; 
                }
                a {pointer-events: none;}
                > div.active {
                    & {opacity: 1;}
                    a {pointer-events: auto;}
                }
            }
        }
        #locations.active {
            position: sticky !important;
            overflow-y: scroll;
        }
        #locations.ny {background: url(img/contact_map_newyork.jpg) no-repeat center/cover;}
        #locations.mn {background: url(img/contact_map_minneapolis.jpg) no-repeat center/cover;}
        #locations.uk {background: url(img/contact_map_london.jpg) no-repeat center/cover;}
        #locations.il {background: url(img/contact_map_chicago.jpg) no-repeat center/cover;}
        #locations.ma {background: url(img/contact_map_boston.jpg) no-repeat center/cover;}
        #locations.ct {background: url(img/contact_map_stamford.jpg) no-repeat center/cover;}
        #locations.ca {background: url(img/contact_map_sanfrancisco.jpg) no-repeat center/cover;}
        #locations.miami {background: url(img/contact_map_miami.jpg) no-repeat center/cover;}
        #locations.ca-lj {background: url(img/contact_map_lajolla.jpg) no-repeat center/cover;}
        #locations.tx {background: url(img/contact_map_houston.jpg) no-repeat center/cover;}
        #locations.du {background: url(img/contact_map_dubai.jpg) no-repeat center/cover;}
        /* Mobile */
        .mobile {
            & {
                display: none;
                padding: 0 1rem 5rem 1rem;
            }
            .fx-nav {
                & {
                    padding: 1rem 0;
                    position: relative;
                    border-bottom: solid 1px #ffffff66;
                }
                h3 {color: #fff; margin-bottom: 0;}
            }
            .fx-nav::after {
                content: '';
                display: block;
                position: absolute;
                width: 15px;
                height: 15px;
                background: url(img/svg/plus_white.svg) no-repeat center/contain;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .fx-nav.fx-on::after {background-image: url(img/svg/minus_white.svg);}
            .fx-slide {
                .inner {padding: 2rem 0;}
                .map {
                    width: 100%;
                    height: 400px;
                    margin-top: 2rem;
                }
                .map.ny {background: url(img/contact_map_newyork.jpg) no-repeat center/cover;}
                .map.mn {background: url(img/contact_map_minneapolis.jpg) no-repeat center/cover;}
                .map.uk {background: url(img/contact_map_london.jpg) no-repeat center/cover;}
                .map.il {background: url(img/contact_map_chicago.jpg) no-repeat center/cover;}
                .map.ma {background: url(img/contact_map_boston.jpg) no-repeat center/cover;}
                .map.ct {background: url(img/contact_map_stamford.jpg) no-repeat center/cover;}
                .map.ca {background: url(img/contact_map_sanfrancisco.jpg) no-repeat center/cover;}
                .map.miami {background: url(img/contact_map_miami_768.jpg) no-repeat center/cover;}
                .map.calj {background: url(img/contact_map_lajolla.jpg) no-repeat center/cover;}
                .map.tx {background: url(img/contact_map_houston.jpg) no-repeat center/cover;}
                .map.du {background: url(img/contact_map_dubai.jpg) no-repeat center/cover;}
                p {
                    $secondaryThin;
                    color: #fff;
                }
            }
        }
    } */
}


/***** CONTACT ******/
#contact.beta #container {
    .s1 {
        & {
            position: relative;
            z-index: 1;
        }
        .text-wrap {
            > div:nth-child(1) {max-width: 760px;}
            > div:nth-child(2) {
                & {
                    max-width: 430px;
                    padding-top: 1.5rem;
                    border-top:solid 1px #ffffffb3;
                }
                a {
                    color: #fff;
                    border-bottom: solid 1px #ffffffb3;
                    padding-bottom: 3px;
                    transition: opacity .3s ease;
                }
                a:hover {opacity: 0.7;}
            }
        }
    }
    .s2 {
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .s3 {
        & {
            background: #0B295C;
            text-align: left;
            position: relative;
        }
        .container {
            position: relative;
            max-width: 1100px;
            z-index: 1;
        }
        .intro {
            & {
                padding: 9rem 0 2rem 0;
            }
            h2 {
                font-size: 5.25rem;
                line-height: 6rem;
                color: #fff;
            }
        }
        #locations::before {
            $psDefault;
            width: 100%;
            height: 1px;
            background: #ffffffbf;
            top: 0;
            left: 0;
            z-index: 5;
        }
        #locations {
            & {
                height: auto;
                position: relative;
                width: 100%;
                padding: 2rem 0 0;
                overflow: hidden;
                transition: background-image .5s ease;
                background-attachment: fixed;
                background: none !important;

            }
            .gradient {
                width: 100%;
                height: 100%;
                background: url(img/svg/map_overlay.svg) no-repeat center/cover;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 3;
            }
            .container {
                & {max-width: none; z-index: 4;}
                > div {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding-top: 7rem;
                    opacity: 0.3;
                    transition: opacity .5s ease;
                }
                > div:last-of-type {
                    visibility: visible;
                    padding-bottom: 20rem;
                }
                h3 {
                    font-size: 3.4rem;
                    line-height: 4rem;
                    color: #fff; 
                    margin-bottom: 2rem;
                }
                p {
                    display: inline-block;
                    $secondaryThin;
                    font-size: 1.5rem;
                    line-height: 2rem; 
                    color: #fff; 
                }
                a {pointer-events: none;}
                > div.active {
                    & {opacity: 1;}
                    a {pointer-events: auto;}
                }
            }
        }
        #locations.active {
            position: sticky !important;
            top: 0;
            overflow-y: auto;
        }
        #locations .plx-bg {opacity: 0; will-change: opacity; display: block; transition: opacity .35s ease; object-fit: cover; object-position: center;}
        #locations.ny .plx-bg.ny {opacity: 1;}
        #locations.mn .plx-bg.mn {opacity: 1;}
        #locations.uk .plx-bg.uk {opacity: 1;}
        #locations.il .plx-bg.il {opacity: 1;}
        #locations.ma .plx-bg.ma {opacity: 1;}
        #locations.ct .plx-bg.ct {opacity: 1;}
        #locations.ca .plx-bg.ca {opacity: 1;}
        #locations.miami .plx-bg.miami {opacity: 1;}
        #locations.ca-lj .plx-bg.ca-lj {opacity: 1;}
        #locations.tx .plx-bg.tx {opacity: 1;}
        #locations.du .plx-bg.du {opacity: 1;}
        /* Mobile */
        .mobile {
            & {
                display: none;
                padding: 0 1rem 5rem 1rem;
            }
            .fx-nav {
                & {
                    padding: 1rem 0;
                    position: relative;
                    border-bottom: solid 1px #ffffff66;
                }
                h3 {color: #fff; margin-bottom: 0;}
            }
            .fx-nav::after {
                content: '';
                display: block;
                position: absolute;
                width: 15px;
                height: 15px;
                background: url(img/svg/plus_white.svg) no-repeat center/contain;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .fx-nav.fx-on::after {background-image: url(img/svg/minus_white.svg);}
            .fx-slide {
                .inner {padding: 2rem 0;}
                .map {
                    width: 100%;
                    height: 400px;
                    margin-top: 2rem;
                }
                .map.ny {background: url(img/contact_map_newyork.jpg) no-repeat center/cover;}
                .map.mn {background: url(img/contact_map_minneapolis.jpg) no-repeat center/cover;}
                .map.uk {background: url(img/contact_map_london.jpg) no-repeat center/cover;}
                .map.il {background: url(img/contact_map_chicago.jpg) no-repeat center/cover;}
                .map.ma {background: url(img/contact_map_boston.jpg) no-repeat center/cover;}
                .map.ct {background: url(img/contact_map_stamford.jpg) no-repeat center/cover;}
                .map.ca {background: url(img/contact_map_sanfrancisco.jpg) no-repeat center/cover;}
                .map.miami {background: url(img/contact_map_miami_768.jpg) no-repeat center/cover;}
                .map.calj {background: url(img/contact_map_lajolla.jpg) no-repeat center/cover;}
                .map.tx {background: url(img/contact_map_houston.jpg) no-repeat center/cover;}
                .map.du {background: url(img/contact_map_dubai.jpg) no-repeat center/cover;}
                p {
                    $secondaryThin;
                    color: #fff;
                }
            }
        }
    }
}
/****** ARTICLE ******/
#article #container {
    .s2 {
        & {
            padding: 13rem 0 9rem 0;
            background: #fff;
            position: relative;
        }
        .container {
            & {
                position: relative;
                max-width: 1100px;
                text-align: left;
            }
            .global-btn {
                & {min-width: 320px;}
                span {background-image: url(img/svg/circle_arrow_blue_left.svg);}
            }
            .wrap {
                & {
                    $flex;
                    gap: 3rem;
                    margin-top: 5rem;
                }
                .social {
                    & {list-style-type: none;}
                    li {
                        cursor: pointer; 
                        margin-bottom: 1rem;
                    }
                    a {
                        display: block;
                        width: 35px;
                        height: 35px;
                        transition: all .3s ease;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                    }
                    #linkedin-btn {
                        & {
                            width: 35px;
                            height: 35px;
                            transition: all .3s ease;
                        }
                        .IN-widget {opacity: 0;}
                        button {
                            padding: 0 !important;
                            height: 35px !important;
                            background-color: transparent !important;
                        }
                    }
                }
                .main {
                    .date {font-weight: 300;}
                    h2 {
                        font-size: 2.5rem;
                        line-height: 3.2rem;
                        color: $navy;
                        margin: 2rem 0;
                    }
                    h3 {
                        color: $navy;
                        margin: 2rem 0;
                    }
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                        margin: 2.23rem auto 0 auto;
                    }
                    > ce {
                        $primaryLight;
                        font-size: 1rem;
                        line-height: 1.6rem;
                        color: #5E7176;
                    }
                    p {$primaryLight;}
                    a {
                        color: $navy;
                        transition: color .3s ease;
                    }
                    strong {font-weight: 400;}
                    iframe {
                        display: block;
                        width: 100%;
                        margin-bottom: 2rem;
                    }
                    ul {
                        & {list-style-type: none;}
                        li {
                            $primaryLight;
                            font-size: 1rem;
                            line-height: 1.6rem;
                            position: relative;
                            color: #5E7176;
                            padding-left: 15px;
                            margin-bottom: 10px;
                        }
                        li::before {
                            $psDefault;
                            width: 4px;
                            height: 4px;
                            border-radius: 50%;
                            background: #5E7176;
                            position: absolute;
                            top: 15px;
                            transform: translateY(-50%);
                            left: 0;
                        }
                    }
                    ol {
                        li {
                            $primaryLight;
                            font-size: 1rem;
                            line-height: 1.6rem;
                            position: relative;
                            color: #5E7176;
                            padding-left: 15px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
}

#campus-faq #container {
    .s1 {
        &{padding: 14rem 0 9.5rem; background-color: $lightBlue;}
        * {text-align: left;}
        .header-wrapper {$flex; $flexContentSpaceBetween; $flexItemCenter; gap: 2rem; margin: 0 0 4.5rem;}
        .h1-wrapper {$flexW;}
        h1 {font-size: 5rem; line-height: 1.32em  ;color: $darkBlue; $secondaryThin;}
        
        .global-btn {
            &{width: 18.3rem;}
            span {background-image: url(img/svg/circle_arrow_blue_left.svg);padding-right: 4rem;}
        }

        .faq-wrapper {
            .question {padding: 3rem 0; $flex; $flexItemCenter; $flexContentSpaceBetween; gap: 1.5rem; border-top: 1px solid $silver;}
            .question:first-child {border-top: 0;}
            .acc-wrapper {border-bottom: 1px solid $gray;}
            h4 {color: $navy; $primaryThin; letter-spacing: normal; text-transform: none; font-size: 1.8rem; line-height: 1.55em; $flexW;}
            .plus-icon {
                & {width: 2.5rem; height: 2.5rem; border-radius: 50%; border: 1px solid $gray; position: relative;}
                span {width: 1.25rem; height: 1px; background-color: $gray; $centerAll;}
                .v-line {transform: translate(-50%, -50%) rotate(90deg); transition: opacity .3s ease; will-change: opacity;}
            }

            .answer {
                & {transform: translateY(0); transition: transform .5s ease, opacity .5s ease; will-change: transform opacity; opacity: 0;}
                > ce {display: block; padding-bottom: 1.5rem;}
                * {font-size: 1.05rem; color: $gray; $primaryLight; line-height: 1.9em;}
                strong {font-weight: 500;}
                ol, ul {list-style-position: inside; padding: .5rem 0 .5rem .75rem;}
                ol ol, ul ul {padding-left: 1.5rem;}
                a {color: $brightBlue; font-weight: 400; font-style: italic;}
                a:hover {text-decoration: underline;}
            }

            .fx-on .plus-icon .v-line {opacity: 0;}
            .fx-on + .answer {transform: translateY(-1.5rem); opacity: 1;}
        }
    }
}

@media screen and (max-width: 1080px) {
    #campus-faq #container {
        .s1 {
            h1 {font-size: 4.1rem;}
        }
    }
}

@media screen and (max-width: 767px) {
    
}

/************** Pop-up ************/
.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 101; 
}
.popup {
    & {
        display: none;
        overflow-y: scroll;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        max-width: 800px;
        width: calc(100% - 3rem);
        z-index: 110;
		padding: 3.6rem 0;
    }
	button {
		outline: none;
		background: none;
		border: none;
	}
    .btn-close {
		display: block;
		position: absolute;
		width: 21px;
		height: 21px;
		right: 10px;
		top: 10px;
		cursor: pointer;
    }
    .btn-close:focus {
        outline: none;
    }
    .wrap {
        & {$flex;}
        > div {width: 50%;padding: 0.7rem 2.7rem;}
        > div:nth-child(1) {border-right: solid 1px #21498f4d;}
        img {
            max-width: 240px; 
            height: 60px;
            display: block;
            margin: 0 auto;
        }
        .global-btn {
            & {padding: 0.5rem 1.8rem;}
            span {background-size: 30px; padding: 10px 80px 10px 0;}
        }
    }
	p {
        $primaryLight;
        font-size: 1rem;
        line-height: 1.7rem;
        margin: 1.9rem 0;
    }
}

.def-popup {
    & {
        max-width: 1200px;
        height: 70%;
        padding: 3rem;
        text-align: left;
    }
    h4 {
        $secondaryLight;
        text-transform: none;
        font-size: 1.3rem;
        line-height: 2.4rem;
        letter-spacing: 0;
        color: $navy;
    }
    p {margin: 1rem 0;}
    p span {font-weight: 400;}
    .two-col span {font-weight: 300;}
    a {color: $navy;}
    ul {
        & {
            list-style: none;
            margin-bottom: 1rem;
        }
        li {
            $primaryLight;
            font-size: 1.05rem;
            line-height: 2rem;
            color: $gray;
            position: relative;
            padding-left: 14px;
        }
        li:last-of-type {margin-bottom: 0;}
        li::before {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: $navy;
            position: absolute;
            top: 18px;
            left: 0;
        }
    }
}

/******* UPDATE PSW *******/
#update_pw #logo,#reset_pw #logo {display: block; max-width: 300px;}
#update_pw #logo img,#reset_pw #logo img {width: 100%;}
#update_pw header,#reset_pw header {background:#fff; margin-top: 0; padding: 20px 0;}
#update_pw header::after, #reset_pw header::after {display: none;}
#update_pw section h1,#reset_pw section h1 {$primaryLight; margin-bottom: 0.6em; font-size: 2rem;line-height: 1em; text-align: left; display: inline-block; color: $navy;}
#update_pw section p,#reset_pw section p {$primaryLight; font-size: 1rem; line-height: 1.5rem;}
#update_pw section .content,#reset_pw section .content {max-width:1100px; margin: 8rem 1rem 0 1rem;}
#update_pw section .form-buttons a,#reset_pw section .form-buttons a {cursor: pointer; transition: all 0.25s ease; display: inline-block; padding: 1em 2em; color: $navy; border: 1px solid $navy; margin-right: 2em; font-weight: 400; text-transform: uppercase; font-size: 1em; letter-spacing: 0.075em}
#update_pw section .form-buttons a:last-of-type,#reset_pw section .form-buttons a:last-of-type {margin-right: 0;}
#update_pw section .form-buttons a:hover,#reset_pw section .form-buttons a:hover {color:#fff; background: $navy; border: solid 1px $navy;}
#update_pw section .form-buttons,#reset_pw section .form-buttons {margin-top: 2rem;}
#update_pw section .fx-field input,#reset_pw section .fx-field input,#update_pw section .fx-field textarea,#reset_pw section .fx-field textarea {border: 1px solid #abb7c4; font-size: 1rem; padding: 0.5em; width:100%; color: #000;}
#update_pw section .fx-field,#reset_pw section .fx-field {margin-right: 5%; margin-bottom: 1.5rem;}
#update_pw section label,#reset_pw section label {font-size: 1rem; color:#abb7c4; background:#fff; left: 0.5em; padding: 0 0.25em;}
#update_pw section textarea,#reset_pw section textarea {resize:none; height: 10em;}
#update_pw section .fx-msg,#reset_pw section .fx-msg {left: 0 !important; top: 100% !important; color:#ff0000; font-size: 0.875em;}
#update_pw section .fx-input:focus ~ label,#reset_pw section .fx-input:focus ~ label,#update_pw section .fx-input.hasData ~ label,#reset_pw section .fx-input.hasData ~ label {left: 0.75em;}
#update_pw section,#reset_pw section {padding: 3em 0;}
#update_pw,#reset_pw {background:#fff;}
.fx-field label {top: 11px;}

/***** MEDIA *****/
@media screen and (max-width: 1100px) {
    * {background-attachment: scroll !important;}

    .inner .s1 {
        & {max-height: 1100px;}
        h1 {margin-bottom: 3rem;}
        .text-wrap {
            & {$flexColumn;}
            > div:nth-child(1), > div:nth-child(2) {max-width: none;}
        }
    }

    header {
        .menu_container {display: block;}
        nav {
            width: 0;
            height: 0;
            opacity: 0;
            visibility: hidden;
        }
    }

    #home #container {
        .s3 {
            .content > div {margin-right: 1rem;}
            .img-wrap .img {background-position: right;}
        }
    }

    #about #container {
        .s1 {
            h1 {margin-bottom: 2rem;}
            .wrap {
                & {grid-template-columns: repeat(2, 1fr);}
                .box {
                    & {height: 250px;}
                    .bw {display: none;}
                    .js-num {height: 65px;}
                }
            }
        }
        .s3 {
            .container > div {gap: 3rem;}
        }
        .s5 {
            & {
                flex-direction: column;
            }
            > div {
                & {
                    width: 100%;
                    height: 500px;
                    border-right: none;
                    border-bottom: solid 1px #ffffff80;
                }
                p {margin: 2rem 0 3.5rem 0;}
                .global-btn {max-width: 300px;}
            }
            > div.sel {
                h4 {padding-bottom: 2rem;}
                h4::before {top: 59%; height: 40px;}
            } 
        }
        .s6 {height: 700px;}
    }

    #approach #container {
        .s2 {
            h2 {
                font-size: 2.2rem;
                line-height: 3.5rem;
            }
        }
        .s3 {
            .wrap {
                & {$flexColumn; align-items: flex-start;}
                h2 {max-width: none;}
                .graph {
                    width: 100%;
                    height: 450px;
                }
            }
            .nav {
                & {gap: 1rem;}
                span::after {top: 10px;}
            }
        }
        .s4 {
            h2 {
                font-size: 3.5rem;
                line-height: 4rem;
                margin-bottom: 4rem;
            }
            .wrap {
                & {
                    $flexColumn;
                    margin-top: 0;
                }
                > div:nth-child(1), > div:nth-child(2) {max-width: none;}
            }
        }
    }

    #platform #container {
        .s1 {
            .text-wrap {
                > div:nth-child(1),  > div:nth-child(2) {max-width: none;}
            }
        }
        .s3 {
            h2 {
                font-size: 3.5rem;
                line-height: 4rem;
                margin-bottom: 4rem;
            }
            .wrap {
                & {$flexColumn;}
                > div:nth-child(1), > div:nth-child(2) {max-width: none;}
                p {margin-bottom: 1rem;}
            }
            .numbers {
                & {
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .box {width: 33.33%;}
                .box:nth-child(4), .box:nth-child(5) {
                    width: 50%;
                    border-top: solid 1px #ffffffb3;
                }
                .box:nth-child(3) {border-right: none;}
            }
        }
        .s4 {
            .content > div {margin-right: 1rem;}
            .img-wrap .img {background-position: left;}
        }
        .s6 {
            h2 {
                font-size: 3.5rem;
                line-height: 4rem;
                margin-bottom: 4rem;
            }
            .wrap {
                & {
                    $flexColumn;
                    gap: 4rem;
                }
                > div:nth-child(1),  > div:nth-child(2) {max-width: none;}
            }
        }
        .s5,.s8 {
            h2 {
                font-size: 3.5rem;
                line-height: 4rem;
            }
        }
    }

    #people #container {
        .s1 {
            .text-wrap > div:nth-child(1), .text-wrap > div:nth-child(2) {max-width: none;}
        }
        .s3 {
            .fx-slides {
                h2 {
                    font-size: 3.5rem;
                    line-height: 4.2rem;
                    margin-top: 4rem;
                }
                .wrap {
                    a {
                        width: 50%;
                        border-bottom: solid 1px #ffffffb3;
                    }
                    a:nth-child(2) {border-right: none;}
                }
                .t1 .wrap a:nth-last-of-type(-n+2), .t2 .wrap a:nth-last-of-type(-n+2) {border-bottom: none;}
                .t3 .wrap a:nth-last-of-type(-n+1) {border-bottom: none;}
            }
        }
    }

    #bio #container {
        .s2 {
            .container {$flexColumn; gap: 5rem;}
        }
    }

    #careers #container {
        .s1 {
            .text-wrap {
                & {gap: 3rem;}
                > div:nth-child(1), > div:nth-child(2) {max-width: none;}
                > div:nth-child(1) h1 {margin-bottom: 3rem;}
                .global-btn {display: inline-block; margin-bottom: 3rem;}
            }
        }
        .s3 {
            & {height: 700px}
            .img {background-position: right;}
        }
    }

    #contact #container {
        .s1 {
            .text-wrap {
                > div:nth-child(1) {max-width: none;}
            }
        }

        .s2n {
            .fx-nav {width: 100% !important; max-width: 307px !important; margin: 0 0 0.5rem 0; float: none !important;}
            h3 {font-size: 3rem;}
            .btns-wrapper {align-items: start; gap: 1rem;}
        }
        .s3 {
            #locations {display: none;}
            .mobile {display: block;}
        }

        .s4n {
            &{padding: 5rem 0;}
        }
    }
}

@media screen and (max-width: 980px) {
    .inner .s1 {
        max-height: 900px;
    }

    #article #container {
        .s2 {
            .container {
                .wrap {
                    & {$flexColumn;}
                    .main ul li::before {top: 12px;}
                    .social {
                        $flex;
                        align-items: center;
                        gap: 10px;
                    }
                }
            }
        }
    }

    footer {
        .top {
            .container {
                & {$flexColumn;}
                > div {width: 100%;}
                .left {max-width: none;}
                .right {display: none;}
            }
        }
    }

    .def-popup ul li::before {top: 14px;}
}

@media screen and (min-width: 768px) and (max-height: 899px) {
    * {background-attachment: scroll !important;}
    .inner .s1 {
        & {
            height: auto;
            max-height: none;
            padding: 11rem 0 5rem 0;
        }
        .container {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
        }
    }
}

@media screen and (max-width: 767px) {
    .inner .s1 {
        & {
            height: auto;
            max-height: none;
            padding: 11rem 0 5rem 0;
        }
        .container {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
        }
        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
            margin-bottom: 2rem;
        }
        .text-wrap {
            & {gap: 1rem;}
            p.lg {
                font-size: 1.2rem;
                line-height: 2rem;
            }
            p {font-size: 1rem;}
        }
    }

    .secPadding {padding: 5rem 0;}

    h2 {
        font-size: 2rem;
        line-height: 2.75rem;
        margin-bottom: 2rem;
    }
    h3 {
        font-size: 1.6rem;
        line-height: 2.4rem;
    }
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
    }
    p.lg {
        font-size: 1.3rem;
        line-height: 2.5rem;
    }
    .global-btn {
        & {padding: 0.5rem 1.5rem;}
        span {
            padding: 10px 75px 10px 0;
            background-size: 35px;
        }
    }

    .podcast-publications-section {
        &{padding: 5rem 0;}
        .buttons-wrapper {display: none;}
        .article-wrapper {width: 100% !important; max-width: 100% !important; min-width: 100% !important; padding: 3rem 0 !important; border-right: 0 !important; border-bottom: 1px solid #0000002e; height: auto;}
        .article-wrapper .inner {max-width: 100% !important; width: 100% !important;}
    }

    header {
        .logo {
            width: 220px;
            height: 60px;
        }
        .menu_container {
            #menu_btn {
                & {width: 35px;}
                i {width: 35px;}
            }
        }
    }
    
    header.active {
        nav a {
            font-size: 1.3rem;
            line-height: 1.9rem;
            margin-bottom: 1.5rem;
        }
        #menu_btn i:nth-child(1) {width: 35px;}
        #menu_btn i:nth-child(3) {width: 35px;}
    }

    #home #container {
        .s1 {
            .container {
                top: 50%;
                $flexColumn;
                align-items: flex-start;
                gap: 4rem;
            }
            h1 {
                font-size: 5rem; 
                line-height: 6rem;
            }
            .arrow {
                width: 65px;
                height: 65px;
            }
        }
        .s2 {
            .numbers-wrapper {
                .numbers-container {flex-wrap: wrap;}
                .number {width: 50%;}
                .number:nth-child(even) {border-right: 0;}
                .number:nth-child(-n + 2){padding-bottom: 2rem; border-bottom: 1px solid #4273c93a;}
                .number:nth-child(n + 3) {padding-top: 2rem;}
            }
        }

        .s3 {
            & {$flexColumn;}
            > div {
                width: 100%;
                height: auto;
            }
            .content {
                & {padding: 5rem 0;}
                > div {
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    margin-right: 0;
                }
                p:first-of-type {padding: 0 1.5rem;}
                img {width: 18px;}
            }
            .img-wrap {height: 400px;}
        }
        .s4 {
            h3 {margin-bottom: 3rem;}
            .infographic {display: none;}
            .mobile {display: block;}
        }
        .s5 {
            & {padding-top: 5rem;}
            .container {
                $flexColumn;
                align-items: flex-start;
                gap: 2rem;
            }
            h2 {font-size: 2.5rem; line-height: 3.2rem;}
            .slick-nav {
                & {gap: 1rem;}
                > div {width: 40px; height: 40px;}
            }
            .slick-slider {
                .slick-slide {
                    &{padding-bottom: 5rem;}
                    .inner {
                        & {height: auto;$flexColumn;}
                        .article-tb, .right {width: 100%; max-width: 100%; min-width: 100%;}
                        h3 {margin-bottom: 2rem;}
                    }
                    
                }
            }
        }
    }

    #about #container {
        .s1 {
            &{min-height: 500px;}
            .wrap {
                .box {
                    & {height: 180px;}
                    .js-num {font-size: 2.3rem;}
                }
            }
        }
        .s3 {
            .container > div {
                & {
                    $flexColumn;
                    align-items: flex-start;
                    gap: 1rem;
                }
            }
        }
        .s5 {
            > div {
                h4 {padding-bottom: 4rem;}
                h4::after {width: 50px; height: 50px;}
                p {margin: 2rem 0;}
                .global-btn {max-width: 230px;}
            }
        }
        .s6 {height: 400px;}
        .s7 {
            & {padding-top: 5rem;}
            .container {
                $flexColumn;
                align-items: flex-start;
                gap: 2rem;
            }
            h2 {font-size: 3rem; line-height: 3.7rem;}
            .slick-nav {
                & {gap: 1rem;}
                > div {width: 40px; height: 40px;}
            }
            .slick-slider {
                .slick-slide {
                    & {
                        border-right: none;
                        height: 400px;
                    }
                    .plus-wrap {display: none;}
                    .inner {
                        top: 50%;
                        transform: translate(-50%, -50%);
                        bottom: auto;
                    }
                    .inner .open {
                        opacity: 1;
                        visibility: visible;
                        height: auto;
                    }
                }
            }
        }
    }

    #approach #container {
        .s2 {
            h2 {
                font-size: 1.9rem;
                line-height: 2.75rem;
            }
        }
        .s3 {
            & {
                background: #fff;
                padding: 0;
            }
            .container {width: 100%;}
            .wrap {
                & {
                    background: url(img/approach_bg_strategy_parallax.jpg) no-repeat center/cover fixed;
                    padding: 5rem 1rem;
                }
                .graph {display: none;}
                h2 {position: relative;}
                h2::after {
                    $psDefault;
                    width: 1px;
                    height: 100px;
                    background: #1451bc;
                    left: 35px;
                    top: 110%;
                }
            }
            .nav {
                & {
                    $flexColumn; 
                    align-items: flex-start;
                    padding: 3rem 1rem 0 1rem;
                }
                span::after {display: none;}
                span {color: #132444;}
                > div.sel {
                    background: #e4f2fd;
                    border-color: #8bc7f6;
                }
            }
        }
        .s4 {
            & {padding: 3rem 0 5rem 0;}
            h2 {margin-bottom: 3rem;}
        }
    }

    #campus-faq #container {
        .s1 {
            &{padding: 11rem 0 5rem;}
            .header-wrapper {$flexColumnR; $flexItemStart; gap: 5rem; margin-bottom: 1.5rem;}
            .faq-wrapper {
                h4 {font-size: 1.65rem;}
            }
        }
    }

    #platform #container {
        .s3 {
            h2 {margin-bottom: 3rem;}
            .numbers {
                & {
                    margin-top: 4rem;
                }
                .box {
                    height: 200px;
                    width: 100% !important;
                    border-right: none;
                    border-top: solid 1px #ffffffb3;
                }
                .box:nth-child(1) {border-top: none;}
            }
        }
        .s4 {
            & {$flexColumn;}
            > div {
                width: 100%;
                height: auto;
            }
            .content {
                & {padding: 5rem 0;}
                > div {
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    margin-right: 0;
                }
                p:first-of-type {padding: 0 1.5rem;}
                img {width: 18px;}
            }
            .img-wrap {height: 400px;}
        }
        .s6 {
            & {padding-top: 5rem;}
            h2 {font-size: 3rem; margin-bottom: 3rem;}
            .wrap > div:nth-child(2) p.lg {margin-bottom: 2rem;}
            .bottom {
                & {
                    padding: 5rem 0;
                    margin-top: 5rem;
                }
                p.lg {
                    font-size: 1.2rem;
                    line-height: 2rem;
                }
            }
        }
        .s7 {height: 400px;}
        .s5,.s8 {
            h2 {margin-bottom: 2rem;}
            p.lg {margin-bottom: 2rem;}
        }
    }

    #people #container {
        .s1 {
            .text-wrap {
                > div:nth-child(2) p {padding: 0 1rem 0 1.5rem;}
                img {width: 18px;}
            }
        }
        .s3 {
            .page-nav {
                & {gap: 10px;}
                .fx-nav {
                    & {
                        padding: 10px;
                        text-align: center;
                    }
                    p {font-size: 10px;}
                }
            }
            .fx-slides {
                h2 {font-size: 2.8rem;}
                .wrap {
                    & {$flexColumn; border-bottom: none;}
                    a {
                        width: 100%;
                        border-right: none !important;
                        border-bottom: solid 1px #ffffffb3 !important;
                    }
                }
            }
        }
    }

    #bio #container {
        .s2 {
            & {padding: 11rem 0 5rem 0;}
            .right {
                h2 {
                    font-size: 3rem;
                    line-height: 3.7rem;
                }
            }
        }
    }

    .form {
        form {
            > div {$flexColumn; gap: 0;}
            input {width: 100%;}
            textarea {margin-top: 0; height: 150px;}
            .global-btn {min-width: auto;}
        }
    }

    #careers #container {
        .s1 {
            .text-wrap {
                & {gap: 2rem;}
                > div:nth-child(1) h1 {margin-bottom: 2rem;}
                .global-btn {margin-bottom: 2rem;}
            }
        }
        .s3 {height: 400px;}
    }

    #article #container {
        .s2 {
            & {padding: 11rem 0 5rem 0;}
            .container {
                .global-btn {min-width: 250px;}
                .wrap {
                    & {margin-top: 4rem; gap: 2rem;}
                    .main h2 {
                        font-size: 2rem;
                        line-height: 2.75rem;
                    }
                }
            }
        }
    }

    #contact #container {
        .s3 {
            .intro {
                & {padding: 5rem 0 2rem 0;}
                h2 {
                    font-size: 3rem;
                    line-height: 3.7rem;
                    margin-bottom: 0;
                }
            }
            .mobile {
                .fx-slide {
                    .map.ny {background: url(img/contact_map_newyork_768.jpg) no-repeat center/cover;}
                    .map.mn {background: url(img/contact_map_minneapolis_768.jpg) no-repeat center/cover;}
                    .map.uk {background: url(img/contact_map_london_768.jpg) no-repeat center/cover;}
                    .map.il {background: url(img/contact_map_chicago_768.jpg) no-repeat center/cover;}
                    .map.ma {background: url(img/contact_map_boston_768.jpg) no-repeat center/cover;}
                    .map.ct {background: url(img/contact_map_stamford_768.jpg) no-repeat center/cover;}
                    .map.ca {background: url(img/contact_map_sanfrancisco_768.jpg) no-repeat center/cover;}
                    .map.calj {background: url(img/contact_map_lajolla_768.jpg) no-repeat center/cover;}
                    .map.tx {background: url(img/contact_map_houston_768.jpg) no-repeat center/cover;}
                    .map.du {background: url(img/contact_map_dubai_768.jpg) no-repeat center/cover;}
                }
            }
        }
    }

    .popup {
        .wrap {
            & {flex-direction: column; padding: 0 1rem;}
            > div {
                width: auto !important; 
                padding: 0;
            }
            > div:nth-child(1) {
                border-right: none;
                border-bottom: solid 1px #21498f4d;
                padding-bottom: 2rem !important;
                margin-bottom: 2rem;
            }
        }
    }
    .def-popup {padding: 3rem 1.5rem !important;}

    footer {
        .top {
            & {padding: 5rem 0;}
            .container {
                & {text-align: center;}
                .left .logo {
                    max-width: 220px;
                    height: 60px;
                    margin: 0 auto 2rem auto;
                }
            }
        }
        .bottom {
            .container {
                & {
                    $flexColumn;
                    text-align: center;
                    gap: 1rem;
                }
                p {
                    display: block;
                    margin-right: 0;
                    margin-bottom: 1rem;
                }
                p br {display: block;}
                .linkedin {width: 35px; height: 35px;}
            }
        }
    }
}
`;

/* ============================================================
   js/main.js  —  Walleye Capital core bundle (load order preserved)
   Consolidated from the site's common scripts. Analytics/telemetry
   (ErrorDetector.js) and the disabled GSAP refs have been removed.
   Page-specific scripts (home.js, about.js, ...) load after this file.
   ============================================================ */

;

/* ---------- jmodule.js ---------- */
if (typeof jmodule == 'undefined') var jmodule={};

;

/* ---------- jquery-3.6.0.min.js ---------- */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
if (!window.jQuery)
{
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=0;var f=b;if(0==a)return c;if(1==(a/=d))return c+b;e||(e=.3*d);f<Math.abs(b)?(f=b,b=e/4):b=e/(2*Math.PI)*Math.asin(b/f);return-(f*Math.pow(2,10*--a)*Math.sin(2*(a*d-b)*Math.PI/e))+c},easeOutElastic:function(e,a,c,b,d){var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||
(f=.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-e)*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=.3*d*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)*.5+b+c},easeInBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*
a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*
(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+.5*b+c}});
}

;

/* ---------- css2.js (CSS PostProcessor) ---------- */
/*
CSS POSTPROCESSOR
Copyright 2015-2020 Alex Bobrov
Version 2.2

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

(function(){function D(a,b,d){if(a){b||(b=0);var f=a.match(/.*('.*').*/);f&&(a=f[1]);var c=document.body?document.body.querySelectorAll(t(a)):[];return c.length?(b=c[b]["client"+d],f&&(b=f[0].replace(new RegExp(a,"g"),b)),t(b)):0}return"Height"==d?window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight:document.documentElement["client"+d]||document.body["client"+d]}function P(){p.reset.push.apply(p.reset,arguments)}function E(a,b,d){for(var f=l[a][b],c=0;c<f[1].length;c++)if(!d||
f[1][c]==d){var e=1,g=[],k=[];var h=z(a,f[1][c],l[a][b],b,c);e=h instanceof Array&&e<=h.length?h.length:e;if(/\$/.test(f[4][c])){var n=F(a,f[4][c],e,f[1][c]);g=n[0];e=n[1]}/\$/.test(f[3][c])&&"$"!=f[3][c]&&(n=F(a,f[3][c],e,f[1][c]),k=n[0],e=n[1]);for(var m=0;m<e;m++){var q=f[3][c],w=f[4][c];for(n=0;n<k.length;n++)q=q.replace(k[n][0],k[n][1]instanceof Array?k[n][1][m]:k[n][1]);for(n=0;n<g.length;n++)w=w.replace(g[n][0],g[n][1]instanceof Array?g[n][1][m]:g[n][1]);n=(q||"")+(h instanceof Array?h[m]:
h)+(w||"");if(/\$/.test(f[1][c]))p.set(a,f[1][c].substring(1),n);else{q=void 0;var y=a;w=f[1][c]+(1<e?":nth-child("+(m+1)+")":"");for(var A=[],u=0;u<document.styleSheets.length;u++)if(q=document.styleSheets[u],q.ownerNode.id==y){y=0;do(u=q.cssRules?q.cssRules[y]:q.rules[y])&&u.selectorText==w&&A.push(u),y++;while(u);break}A.length?G(A[A.length-1],n):q&&G(q,n,w)}}}}function F(a,b,d,f){var c=[];b=H(b);for(var e=0;e<b.length;e++){var g=B(b[e].replace(/\$\[*([\w!]*(\(.*\))*)( *!important)*\]*.*/g,"$1"));
if(l[a][g[0]][1].length)for(var k=0;k<l[a][g[0]][1].length;k++){if(!f||l[a][g[0]][1][k]==f){var h=z(a,l[a][g[0]][1][k],l[a][g[0]],g[0],k);d=h instanceof Array&&d<=h.length?h.length:d;c.push([l[a][g[0]][5][k],h])}}else h=l[a][g[0]][0],d=h instanceof Array&&d<=h.length?h.length:d,c.push(["$"+g[0],h])}return[c,d]}function z(a,b,d,f,c){d[2][c]=d[0];if(d[6]){f=d[7][c];for(var e=0;e<f.length;e++){/&self/.test(f[e])&&(f[e]=f[e].replace(/&self/g,"'"+b.match(/^[^{]*/)+"'"));var g=new RegExp("&"+String.fromCharCode(97+
e),"g");d[2][c]=d[2][c].replace(g,f[e])}}if(/\$/.test(d[2][c])){e=I(a,d[2][c],b);g=1;var k=[];for(f=0;f<e.length;f++){var h=z(a,b,l[a][e[f][1]],e[f][1],e[f][0]);g=h instanceof Array&&g<=h.length?h.length:g;k.push([l[a][e[f][1]][5][e[f][0]],h])}a=[k,g];for(e=0;e<a[1];e++)for(f=0;f<a[0].length;f++)d[2][c]=d[2][c].replace(a[0][f][0],a[0][f][1]instanceof Array?a[0][f][1][e]:a[0][f][1])}d[2][c]=t(d[2][c]);return d[2][c]}function I(a,b,d){for(var f=[],c=H(b),e=0,g,k=0;k<c.length;k++){var h=B(c[k].replace(/\$\[*([\w!]*(\(.*\))*)( *!important)*\]*.*/g,
"$1"));p.defaults.debug&&!l[a][h[0]]&&x("Variable "+h[0]+" is not defined");l[a][h[0]][1].push(d);l[a][h[0]][5].push(c[k]);l[a][h[0]][6]&&l[a][h[0]][7].push(h[1]?h[1].split(","):l[a][h[0]][6].slice());h[1]=h[1]?"\\("+h[1].replace(/(\+|\*|\(|\))/g,"\\$1")+"\\)":"";for(var n=new RegExp("\\$\\[?"+h[0]+"("+h[1]+")*\\]?","g"),m;null!==(m=n.exec(b));)if(g&&g==h[0]?m.index>e:m.index>=e){e=b.substring(0,m.index).lastIndexOf(";");g=b.substring(0,m.index).lastIndexOf("{");e>g?l[a][h[0]][3].push(b.substring(e+
1,m.index)):-1<g?l[a][h[0]][3].push(b.substring(g+1,m.index)):l[a][h[0]][3].push("");e=b.substring(m.index).indexOf(";");g=b.substring(m.index).indexOf("}");-1<e&&e<g?l[a][h[0]][4].push(b.substring(m.index+m[0].length,m.index+e)):-1<g?l[a][h[0]][4].push(b.substring(m.index+m[0].length,m.index+g)):l[a][h[0]][4].push("");e=m.index;break}f.push([l[a][h[0]][1].length-1,h[0]]);g=h[0]}return f}function H(a){a=a.replace(/^.*(\{)/,"$1").match(/\$\[?[\w!]+(\([^;^}^\$]*\))?\]?/g);for(var b=0;b<a.length;b++)a[b].split(")").length>
a[b].split("(").length&&(a[b]=a[b].replace(/(.*\)).*\)/,"$1"));return a}function v(a,b,d,f,c){p.defaults.debug&&l[a][b]&&x("Variable '"+b+"' in '"+a+"' already exists.");l[a][b]=[];var e=l[a][b];e[0]=f;e[1]=[];e[2]=[];e[3]=[];e[4]=[];e[5]=[];d&&(e[6]=d,e[7]=[]);c&&P({n:a,v:b})}function J(a){(window.addEventListener||window.attachEvent)(a,function(){window.fireTimer("cpp",p.update_vars,p.defaults.resizing)},!1)}function B(a){var b=a.indexOf("(");return 0<b?[a.substring(0,b),a.substring(b).slice(0,
-1).slice(1)]:[a]}function C(a,b){l[b]||(l[b]={});v(b,"selfwidth",["&self",0],'css.vars.w("&a","&b")',1);v(b,"selfheight",["&self",0],'css.vars.h("&a","&b")',1);v(b,"alignment",["&self","bottom","0"],'css.vars.a("&a","&b","&c")',1);v(b,"index",["&self",0],'css.vars.i("&a","&b")');v(b,"mp",["&self","min","left",0,"margin"],'css.vars.mp("&a","&b","&c","&d","&e")',1);v(b,"attr",["&self",""],'css.vars.at("&a","&b")',1);Q(b,p.convert_to_raw_css(a,b))}function Q(a,b){try{document.getElementById(a).innerHTML=
b}catch(d){document.getElementById(a).styleSheet.cssText=b}setTimeout(function(){"loading"!=document.readyState?K(a):document.addEventListener("DOMContentLoaded",function(d){K(a)})},0)}function L(){"complete"==document.readyState?p.update_vars():setTimeout(function(){L()},20)}function K(a){L();p.opened--;p.defaults.invisible&&!p.opened&&(document.getElementsByTagName("html")[0].style.visibility="visible");try{var b=document.createEvent("HTMLEvents");b.initEvent("css_ready",!0,!0);b.id=a;document.dispatchEvent(b)}catch(d){x("Your browser does not support 'createEvent' method.")}}
function t(a){try{return eval(a)}catch(b){return a}}function M(a,b){var d="";b&&(b=b.split(","));for(var f in a){for(var c=f.split(","),e="",g=0;g<c.length;g++)if(b)for(var k=0;k<b.length;k++)e+=b[k]+" "+c[g]+",";else e+=c[g]+",";a[f].ele&&(d+=M(a[f].ele,e.slice(0,-1)));a[f].val&&(d+=e.slice(0,-1)+"{"+a[f].val+"}\n")}return d}function N(a,b,d){var f=a[b].match(/^([^{]*){([^{]*){([^}]*)/);d[f[1]]||(d[f[1]]={});d[f[1]].ele={};var c=f[1].match(/(.*):*/)[1];/&(:.*)/.test(f[2])&&(c+=f[2].match(/&(:.*)/)[1]);
d[c]||(d[c]={});d[c].ele={};/&/.test(f[2])?f[3].length&&(d[c].val=d[c].val?d[c].val+(";"+f[3]):f[3]):d[c].ele[f[2]]={val:f[3]};for(b+=1;b<a.length;b++)if(/{.*{/.test(a[b])&&!/@/.test(a[b])){var e=N(a,b,d[f[1]].ele);b=e.index;d[c].ele=e.nest}else if(/{.*}/.test(a[b]))e=a[b].match(/^([^{]*){([^}]*)/),/&/.test(e[1])?d[c]&&d[c].val?d[c].val+=";"+e[2]:d[c]={val:e[2]}:d[c].ele[e[1]]?d[c].ele[e[1]].val+=";"+e[2]:d[c].ele[e[1]]={val:e[2]};else break;return{index:b,nest:d}}function G(a,b,d){b=b.toString().split(";");
for(var f=0;f<b.length;f++){var c=b[f].split(":"),e=c[0];/-/.test(c[0])&&(c[0]=c[0].replace(/-(.)/,function(k){return k.toUpperCase()}).replace(/-/,""));var g=c[1];/ *!important/.test(c[1])&&(g=c[1].slice(0,-11));d?a.insertRule(d+"{"+e+":"+c[1]+"}",a.cssRules.length):g!=c[1]?a.style.setProperty(e,g,"important"):a.style[c[0]]=c[1]}}function R(){if(window.XMLHttpRequest){var a=new XMLHttpRequest;a.overrideMimeType&&a.overrideMimeType("text/html")}else if(window.ActiveXObject)try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=
new ActiveXObject("Microsoft.XMLHTTP")}catch(d){}}return a}function x(a){throw Error(a);}var r={};window.fireTimer=window.fireTimer||function(a,b,d,f){r[a]?(r[a].timer=+new Date,r[a].param=f):(b(f),r[a]={},r[a].timer=+new Date,r[a].id=setInterval(function(){b(r[a].param);r[a].timer+d+1<+new Date&&(clearInterval(r[a].id),r[a]=0)},d))};window.sizeObserver=window.sizeObserver||function(a){var b=[],d;window.ResizeObserver&&(d=new window.ResizeObserver(a));this.observe=function(f){for(var c=0;c<f.length;c++)d?
d.observe(f[c]):b.push(f[c].clientHeight);d||function(e,g){setInterval(function(){for(var k=0;k<e.length;k++)b[k]!=e[k].clientHeight&&g(),b[k]=e[k].clientHeight},p.defaults.resizing)}(f,a)}};var O={},l=l||{},p=window.css||{defaults:{resizing:100,debug:1,localCache:0,invisible:1},opened:0,reset:[],vars:{w:function(a,b){return D(a,b,"Width")},h:function(a,b){return D(a,b,"Height")},o:function(){return window.orientation||0},a:function(a,b,d){var f=[];d="!"==d&&!O[a];var c=document.body?document.body.querySelectorAll(t(a)):
[];if(c.length){O[a]=1;for(var e=0;e<c.length;e++)if("table-cell"!=window.getComputedStyle(c[e]).getPropertyValue("display")){var g=c[e].clientHeight;d&&f.push(c[e]);for(var k=0;k<c[e].children.length;k++){var h=c[e].children[k].getBoundingClientRect().height;"fixed"!=c[e].children[k].style.position&&"absolute"!=c[e].children[k].style.position&&(c[e].children[k].style.position="relative");c[e].children[k].style.top="middle"==b?(g-h)/2+"px":g-h+"px";d&&f.push(c[e].children[k])}}d&&(new sizeObserver(function(){p.vars.a(a,
b)})).observe(f)}return b},i:function(a,b){var d=[],f=document.body?document.body.querySelectorAll(t(a)):[];if(f.length)for(var c=0;c<f.length;c++)d.push(c+(b?parseInt(b):0));return d},mp:function(a,b,d,f,c){a=document.body?document.body.querySelectorAll(t(a)):[];var e=d.charAt(0).toUpperCase()+d.slice(1);if(a.length)for(var g=0;g<a.length;g++){var k=a[g].style[c+e];a[g].style[c+e]="";var h=parseInt(window.getComputedStyle(a[g]).getPropertyValue(c+"-"+d).slice(0,-2));"min"==b&&f>=h?a[g].style[c+e]=
f+"px":"max"==b&&f<=h?a[g].style[c+e]=f+"px":k&&parseInt(k.slice(0,-2))!=f&&(a[g].style[c+e]=k)}return b+"-"+c+"-"+d+":"+f+"px"},at:function(a,b){var d=document.body?document.body.querySelectorAll(t(a)):[];if(d.length)for(var f=0;f<d.length;f++){var c=d[f].getAttribute("style");c=c?c+";"+d[f].getAttribute(b):d[f].getAttribute(b);d[f].setAttribute("style",c)}return null}},open:function(a,b){p.opened++;p.defaults.invisible&&(document.getElementsByTagName("html")[0].style.visibility="hidden");this.init||
(p.init=1,J("orientationchange"),J("resize"),p.defaults.debug&&(window.css_vars=l));if("#"==a.substring(0,1))C(document.getElementById(a.substring(1)).innerHTML,a.substring(1));else{b=b?"?R="+ +new Date:"";var d=document.createElement("style");d.id=/\/(\w+)\.\w+$/.exec(a)[1];document.getElementsByTagName("head")[0].appendChild(d);if(!b&&p.defaults.localCache){try{var f=window.localStorage.getItem("css~"+d.id)}catch(e){p.defaults.debug&&console.log("Could not access localStorage",e)}f&&C(f,d.id)}var c=
R();c.onreadystatechange=function(){if(4==c.readyState&&f!=c.responseText){C(c.responseText,d.id);try{window.localStorage.setItem("css~"+d.id,c.responseText)}catch(e){p.defaults.debug&&console.log("Could not save to localStorage",e)}}};c.open("GET",a+b,!0);c.send("")}},get:function(a,b){return l[a][b][0]},get_computed:function(a,b,d){return d?l[a][b][2][d]:l[a][b][2]},set:function(a,b,d,f,c){p.defaults.debug&&(a||x("Missing stylesheet name in set"),b||x("Missing variable name in set, style:"+a),l[a][b]||
x("Variable '"+b+"' is not defined"));d&&(l[a][b][0]=d);if(l[a][b][1].length&&(E(a,b,f),c))for(d=1;d<c;d++)setTimeout(function(){E(a,b,f)},50*d)},convert_to_raw_css:function(a,b){a=a.replace(/(\/\*[\s\S]*?\*\/)/g,"").replace(/(\s+)?\/\/(.*)/g,"").replace(/\s\s*/g," ").replace(/\s*([{;,:])\s*/g,"$1").replace(/[\s;]*}\s*/g,"}\n").replace(/(@[^{]*{)/g,"$1\n").replace(/^\s*/,"");do a=a.replace(/({)([^{^\n]*{[^{^\n]*{)/g,"$1&{}\n$2");while(a.match(/({)([^{^\n]*{[^{^\n]*{)/));a=a.replace(/\n$/,"");a=a.replace(/\n\s/,
"\n");a=a.replace(/(vertical-align):(middle|bottom)(!?)/g,"$1:$alignment(&self,$2,$3)");a=a.replace(/:(height|width)\(([^;^}]*)\)/g,":$self$1($2,0)");a=a.replace(/(min|max)-(margin|padding)-(\w+):(\w+)/g,"$mp(&self,$1,$3,$4,$2)");a=a.replace(/attr\(([^\)]+)\)/g,"$attr(&self,$1)");for(var d=a.split("\n"),f="",c=0;c<d.length;c++){if(/^\$/.test(d[c])){var e=d[c].match(/^\$([^{^\(]*).*{(.*)}/);e[1]=e[1].split(",");for(var g=0;g<e[1].length;g++){var k=B(e[0].substring(0,e[0].indexOf("{")));v(b,e[1][g],
k[1]?k[1].split(","):"",e[2],/!/.test(e[1][g])?1:0)}d.splice(c,1)}else if(/{.*[^$]+{/.test(d[c])&&!/@/.test(d[c]))g=N(d,c,{}),d.splice.apply(d,[c,g.index-c+1].concat(M(g.nest,"").replace(/\n$/,"").split("\n")));else{if(/\$[^=]/.test(d[c])){e=d[c].match(/([^{]*)(\{.*)/);e[1]=e[1].replace(/,\s*/,", ");var h=I(b,d[c],e[1]);k=1;var n=[];for(g=0;g<h.length;g++){var m=z(b,e[1],l[b][h[g][1]],h[g][1],h[g][0]);k=m instanceof Array&&k<=m.length?m.length:k;n.push([l[b][h[g][1]][5][h[g][0]],m])}h=[];for(g=0;g<
n.length;g++)for(m=0;m<k;m++)h[m]=n[g][1]instanceof Array?(h[m]||e[2]).replace(n[g][0],n[g][1][m]):(h[m]||e[2]).replace(n[g][0],n[g][1]);if(1<k)for(g=0;g<k;g++)f+="\n"+e[1]+":nth-child("+(g+1)+")"+h[g];else f+="\n"+e[1]+h[0]}else f+="\n"+d[c];d.splice(c,1)}c--}return f},update_vars:function(){for(var a=0;a<p.reset.length;a++)(function(b){setTimeout(function(){p.set(p.reset[b].n,p.reset[b].v)},0)})(a)}};window.css=p})();

;

/* ---------- fx31.js (fx framework) ---------- */
/*
FX JavaScript library
Copyright 2016-2025 Alex Bobrov
Version 3.12

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
'use strict';(function(){function g(b,a){var e=a.params.checkViewport?$(window).width():parseInt(b.parent()[0].getBoundingClientRect().width),m=a.params.duration-1;if(a.destination_slide>=0){if(!a.params.accordion||e>a.params.responsive){var d=a.slides_children.eq(a.destination_slide+a.slideOffset).css({"margin-top":"",height:""}).outerHeight();(a.params.nav.position=="left"||a.params.nav.position=="right")&&d<a.lp.outerHeight()&&(d=a.lp.outerHeight());a.sp.animate({height:d},{duration:m,complete:function(){a.slideOffset||
(a.sp.css("height",""),a.slides_children.not(":eq("+a.destination_slide+")").css({"margin-top":"1px",height:"0"}))},step:function(c){a.params.resizeDetect&&e!=b.parent().width().toFixed(1)&&!a.params.checkViewport&&(da(b,a,1),e=b.parent().width().toFixed(1));a.params.fixedHeight||a.params.nav.position!="left"&&a.params.nav.position!="right"||b.css("min-height",c+"px")}});if(m&&(a.destination_slide+=a.slideOffset,k.slideAnimation[a.params.effect](a.slides,a,a.width>a.params.slideWidth&&a.params.slideWidth?
a.params.slideWidth:a.width),a.destination_slide-=a.slideOffset,e<=a.params.responsive&&!(a.params.nav.scrollLinks instanceof Array)&&a.list.is(":visible")))k.slideAnimation[a.params.effect](a.list,a,a.width-a.params.leftArrowWidth-a.params.rightArrowWidth)}else a.slides_children.eq(a.destination_slide+a.slideOffset).slideToggle(a.params.duration,a.params.easing),a.params.accordion==2&&a.params.accordionOneSlide&&a.slides_children.eq(a.destination_slide+a.slideOffset).siblings(".fx-slide:visible").slideToggle(a.params.duration,
a.params.easing),a.params.accordionFocus&&setTimeout(function(){b.find(".fx-accordion").find(".fx-nav.fx-on").length&&$("body,html").animate({scrollTop:b.find(".fx-accordion").find(".fx-nav.fx-on").offset().top-($("header").height()||100)},1)},a.params.duration+1);if(a.params.leftArrow||a.params.rightArrow)if(!a.params.accordion&&e<=a.params.responsive||e>a.params.responsive&&!a.params.nav.noArrows)d=e>a.params.responsive||a.params.nav.scrollLinks instanceof Array?a.params.nav.position=="bottom"||
a.params.nav.position=="left"||a.params.nav.position=="right"?d/2-b.children(".fx-left-arrow").outerHeight()/2:d/2+a.lp.height()-b.children(".fx-left-arrow").outerHeight()/2:(a.params.nav.position=="bottom"?a.sp.height():0)+a.lp.outerHeight()/2-b.children(".fx-left-arrow").outerHeight()/2,d=d<0?0:d,b.children(".fx-left-arrow,.fx-right-arrow").show().animate({top:d},m),a.params.ajax||(a.destination_slide==0?b.children(".fx-left-arrow").animate({opacity:.3},m):b.children(".fx-left-arrow").animate({opacity:1},
m),a.destination_slide==a.slides_children.length-1?b.children(".fx-right-arrow").animate({opacity:.3},m):b.children(".fx-right-arrow").animate({opacity:1},m))}else(a.params.leftArrowWidth||a.params.rightArrowWidth)&&b.children(".fx-left-arrow,.fx-right-arrow").hide();typeof a.destination_slide!="undefined"?e>a.params.responsive&&a.list.children(":eq("+a.destination_slide+")").siblings().trigger("fx-off").removeClass("fx-on"):a.params.slide==-1&&e>a.params.responsive&&a.list.children().trigger("fx-off").removeClass("fx-on");
m||(a.slideOffset&&a.width>a.params.slideWidth?a.slides.css("left",-(a.destination_slide+a.slideOffset)*a.params.slideWidth+a.params.pixelOffset+"px"):a.slides.css("left",-(a.destination_slide+(a.slideOffset||0))*a.width+a.params.pixelOffset+"px"),e<=a.params.responsive&&!(a.params.nav.scrollLinks instanceof Array)&&a.list.css("left",-a.destination_slide*(a.width-a.params.leftArrowWidth-a.params.rightArrowWidth)+"px"));a.slides.children().removeClass("fx-to-be-active").eq(a.destination_slide).addClass("fx-to-be-active");
setTimeout(function(){$("html").css("cursor","");b.css("cursor","").removeClass("fx-busy");a.hasOwnProperty("current_slide")&&S(a.params.onend,b,k.sliders(b));a.current_slide=a.destination_slide;a.slides.children().removeClass("fx-active").eq(a.current_slide).addClass("fx-active");a.params.autorotate&&h(a,b)},m)}function h(b,a){clearTimeout(b.tid);b.tid=setTimeout(function(){b.hover||k.sliders(a).next()},b.params.autorotate)}function p(b,a){b.addClass("fx-accordion fx-hidden");var e=b.children(":even").addClass("fx-nav"),
m=b.children(":odd").addClass("fx-slide");a.slideNames={};m.each(function(c,t){$(t).data("name")&&(a.slideNames[$(t).data("name")]=c)});a.params.nav.off&&(a.params.nav.off={trigger:"fx-off",params:a.params.nav.off,applyTo:">.fx-nav"},q(b,a.params.nav.off));a.params.nav.on&&(a.params.nav.on={trigger:"fx-on",params:a.params.nav.on,applyTo:">.fx-nav"},q(b,a.params.nav.on));b.on("click",">.fx-nav",function(c){if(!b.hasClass("fx-busy")){b.addClass("fx-busy");var t=$(c.target);t.hasClass("fx-nav")||(t=
t.closest(".fx-nav"));a.last_clicked=t.index()/2;S(a.params.onstart,b);a.params.cursor&&($("html").css("cursor",a.params.cursor),b.css("cursor",a.params.cursor));a.params.exclusive&&t.siblings(".fx-on").trigger("fx-off").removeClass("fx-on").next().stop().animate({height:0,"padding-top":0,"padding-bottom":0},a.params.duration,a.params.easing);t.hasClass("fx-on")&&(a.params.collapsible||t.siblings(".fx-on").length)?t.trigger("fx-off").removeClass("fx-on").next().stop().animate({height:0,"padding-top":0,
"padding-bottom":0},a.params.duration,a.params.easing):t.hasClass("fx-on")||(!a.params.ajax||t.next().html().length&&!a.params.ajax[2]?r(t,a):$.ajax({url:a.params.ajax[1]||location.href,data:"SLIDE="+a.last_clicked+"&"+a.params.ajax[0],type:"post",success:function(v){t.next().html(v);r(t,a)}}));setTimeout(function(){t.parent().removeClass("fx-busy");a.params.cursor&&($("html").css("cursor",""),b.css("cursor",""));S(a.params.onend,b)},a.params.duration)}});a.params.slides=[];e.each(function(){var c=
$(this).next();a.params.slides[$(this).index()/2]={pTop:c.css("padding-top"),pBottom:c.css("padding-bottom")};$(this).hasClass("fx-on")?($(this).trigger("fx-on"),c.css({overflow:"hidden"})):($(this).trigger("fx-off"),c.css({height:0,overflow:"hidden","padding-top":0,"padding-bottom":0}))});if(location.hash){var d=-1;$.each(location.hash.substring(1).split(","),function(c,t){a.params.name?(c=t.match(new RegExp("/"+a.params.name+"/(.+)")))&&(d=/^\d+$/.test(c[1])?c[1]:a.slideNames[c[1]]):(c=t.match(/accordion(\d+)_(\d+)/))&&
b.prop("fx-id")==c[1]&&(d=c[2]);if(d>=0)return a.params.slide=d,!0})}(!a.params.collapsible||a.params.slide>=0)&&e.eq(a.params.slide||0).click();b.removeClass("fx-hidden")}function r(b,a){var e=b.next().css("height","").height();b.next().css("height",0);b.trigger("fx-on").addClass("fx-on").next().stop().animate({height:e,"padding-top":a.params.slides[b.index()/2].pTop,"padding-bottom":a.params.slides[b.index()/2].pBottom},a.params.duration,a.params.easing,function(){b.next().css("height","");a.params.slides[b.index()/
2].height=b.next().height()})}function f(b,a){b.addClass("fx-hidden fx-slider");a.slides=b.children(":last").find("script").remove().end();a.slideOffset=0;if(b.children().length<2){var e=a.slides.children().length,m="";if(a.params.ajax){for(var d=0;d<e;d++)m+='<div style="min-height:1px"></div>';b.append("<div>"+m+"</div>");a.slides=b.children(":last")}else{for(d=1;d<=e;d++)m+="<a>"+d+"</a>";b.prepend("<div>"+m+"</div>")}}a.params.slideWidth&&(a.slides.children(":last").clone().insertBefore(a.slides.children(":first")),
a.slides.children(":eq(1)").clone().insertAfter(a.slides.children(":last")),a.slideOffset=1);a.list=b.children(":first");a.list_children=a.list.children().addClass("fx-nav");a.slides_children=a.slides.children();a.lp=a.list.wrap("<div class='fx-list'></div>").parent();a.sp=a.slides.wrap("<div class='fx-slides'></div>").parent();a.slideNames={};a.slides_children.each(function(v,z){$(z).data("name")&&(a.slideNames[$(z).data("name")]=v)});a.params.mask&&a.sp.append('<div class="fx-mask-left" style="background:url('+
a.params.mask+') repeat"></div><div class="fx-mask-right" style="background:url('+a.params.mask+') repeat"></div>');a.params.nav.position=="bottom"&&a.lp.insertAfter(a.sp);b.css("position")=="static"&&b.addClass("fx-relative");a.params.leftArrow&&$("<div class='fx-left-arrow' style='position:absolute;width:"+a.params.leftArrowWidth+"px;left:"+(a.params.nav.position=="left"?a.lp.width():0)+"px'><img src='"+a.params.leftArrow+"'></div>").appendTo(b).click(function(){(a.params.ajax||a.params.infiniteScroll||
a.current_slide>0)&&!$(this).hasClass("fx-ignore")&&k.sliders(b).prev()});a.params.rightArrow&&$("<div class='fx-right-arrow' style='position:absolute;width:"+a.params.rightArrowWidth+"px;right:"+(a.params.nav.position=="right"?a.lp.width():0)+"px'><img src='"+a.params.rightArrow+"'></div>").appendTo(b).click(function(){(a.params.ajax||a.params.infiniteScroll||a.current_slide<a.list_children.length-1)&&!$(this).hasClass("fx-ignore")&&k.sliders(b).next()});a.params.nav.off&&(a.params.nav.off={trigger:"fx-off",
params:a.params.nav.off,duration:a.params.duration,applyTo:a.list_children},q(a.list,a.params.nav.off));a.params.nav.on&&(a.params.nav.on={trigger:"fx-on",params:a.params.nav.on,duration:a.params.duration,applyTo:a.list_children},q(a.list,a.params.nav.on));a.params.nav.mouseenter&&(a.params.nav.mouseenter={trigger:"mouseenter",params:a.params.nav.mouseenter,applyTo:".fx-nav:not(.fx-on)"},q(a.list,a.params.nav.mouseenter));a.params.nav.mouseleave&&(a.params.nav.mouseleave={trigger:"mouseleave",params:a.params.nav.mouseleave,
applyTo:".fx-nav:not(.fx-on)"},q(a.list,a.params.nav.mouseleave));if(a.params.nav.scrollLinks instanceof Array){a.params.nav.position=="left"||a.params.nav.position=="right"?a.lp.prepend('<a class="fx-list-left" style="display:block;width:100%;text-align:center;height:'+a.params.nav.scrollLinks[2]+'px"><img src="'+a.params.nav.scrollLinks[0]+'" border="0"/></a>').append('<a class="fx-list-right" style="display:block;width:100%;text-align:center;height:'+a.params.nav.scrollLinks[2]+'px"><img src="'+
a.params.nav.scrollLinks[1]+'" border="0"/></a>').children(".fx-list-right").click(function(){if(!$(this).hasClass("fx-ignore")){var v=$(this);v.addClass("fx-ignore");c.animate({top:"-="+a.params.nav.scrollLinks[2]},a.params.duration,a.params.easing,function(){-c.position().top/a.params.nav.scrollLinks[2]+a.params.nav.scrollLinks[3]<a.list_children.length&&v.removeClass("fx-ignore");a.lp.children(".fx-list-left").removeClass("fx-ignore")})}}).end().children(".fx-list-left").click(function(){if(!$(this).hasClass("fx-ignore")){var v=
$(this);v.addClass("fx-ignore");c.animate({top:"+="+a.params.nav.scrollLinks[2]},a.params.duration,a.params.easing,function(){c.position().top!=0&&v.removeClass("fx-ignore");a.lp.children(".fx-list-right").removeClass("fx-ignore")})}}).addClass("fx-ignore"):a.lp.prepend('<a class="fx-list-left" style="position:absolute;top:0;left:0;width:'+a.params.nav.scrollLinks[2]+'px"><img src="'+a.params.nav.scrollLinks[0]+'" border="0"/></a>').append('<a class="fx-list-right" style="position:absolute;top:0;right:0;width:'+
a.params.nav.scrollLinks[2]+'px"><img src="'+a.params.nav.scrollLinks[1]+'" border="0"/></a>').children(".fx-list-right").click(function(){if(!$(this).hasClass("fx-ignore")){var v=$(this);c.animate({left:"-="+c.parent().outerWidth()/2},a.params.duration,a.params.easing,function(){c.parent().outerWidth()-c.position().left-a.list.children(".fx-nav:last").outerWidth()-1>a.list.children(".fx-nav:last").position().left&&v.addClass("fx-ignore");a.lp.children(".fx-list-left").removeClass("fx-ignore")});
k.sliders(b).next()}}).end().children(".fx-list-left").click(function(){if(!$(this).hasClass("fx-ignore")){var v=$(this);c.animate({left:"+="+c.parent().outerWidth()/2},a.params.duration,a.params.easing,function(){c.position().left==0&&v.addClass("fx-ignore");a.lp.children(".fx-list-right").removeClass("fx-ignore")});k.sliders(b).prev()}}).addClass("fx-ignore");var c=a.list.wrap("<div></div>").addClass("fx-relative")}a.params.stop_on_hover&&(e=a.params.stop_on_hover=="fx-slider"?b:b.find("."+a.params.stop_on_hover),
e.mouseenter(function(){a.hover=1}),e.mouseleave(function(){a.hover=0;h(a,b)}));a.list_children.click(function(v,z){a.params.ajax&&v.preventDefault();v=$(this);!(a.params.ajax&&a.params.ajax[2]||!a.hasOwnProperty("current_slide")||a.current_slide!=a.list_children.index(this)||a.params.allowClose||a.params.accordion==2)||b.hasClass("fx-busy")||v.hasClass("fx-ignore")||(b.addClass("fx-busy"),a.destination_slide=a.list_children.index(this),S(a.params.onstart,b,k.sliders(b)),a.params.cursor&&($("html").css("cursor",
a.params.cursor),b.css("cursor",a.params.cursor)),a.params.accordion==2||!a.params.allowClose||a.current_slide!=a.destination_slide||a.params.nav.scrollLinks instanceof Array?(a.params.accordion==2&&v.hasClass("fx-on")?v.trigger("fx-off").removeClass("fx-on"):(v.trigger("fx-on").addClass("fx-on"),a.params.accordion==2&&a.params.accordionOneSlide&&v.siblings(".fx-on").trigger("fx-off").removeClass("fx-on")),!a.params.ajax||a.slides.children().eq(a.destination_slide).html().length&&!a.params.ajax[2]?
g(b,a):$.ajax({url:a.params.ajax[1]||location.href,data:"SLIDE="+a.destination_slide+"&"+a.params.ajax[0]+"&BUTTON="+z,type:"post",success:function(N){a.slides.children().eq(a.destination_slide).html(N);a.hasOwnProperty("current_slide")||da(b,a);g(b,a)}})):(v.trigger("fx-off").removeClass("fx-on").addClass("fx-off"),a.sp.animate({height:0},a.params.duration,a.params.easing,function(){a.current_slide=-1;$("html").css("cursor","");b.css("cursor","").removeClass("fx-busy")})))});da(b,a);if(location.hash){var t=
-1;$.each(location.hash.substring(1).split(","),function(v,z){a.params.name?(v=z.match(new RegExp("/"+a.params.name+"/(.+)")))&&(t=/^\d+$/.test(v[1])?v[1]:a.slideNames[v[1]]):(v=z.match(/slider(\d+)_(\d+)/))&&a.index==v[1]&&(t=v[2]);if(t>=0)return a.params.slide=t,!0})}e=a.params.checkViewport?$(window).width():parseInt(b.parent()[0].getBoundingClientRect().width);a.params.slide||(a.params.slide=0);a.params.slide>=0?k.sliders(b).to(a.params.slide,1):e<=a.params.responsive&&!a.params.ajax?k.sliders(b).to(0,
1):(g(b,a),a.sp.height(0));a.params.swipe&&b.swipe({swipeLeft:function(){k.sliders(b).next()},swipeRight:function(){k.sliders(b).prev()}});b.removeClass("fx-hidden")}function l(b,a,e,m){if(e){var d=k.fxa[b.fxa_id].fx[b.fx_id].params.duration;k.fxa[b.fxa_id].fx[b.fx_id].params.duration=e}(b.ele.children(".fx-list").children("div").children(".fx-nav").length?b.ele.children(".fx-list").children("div").children(".fx-nav"):b.ele.children(".fx-list").children("div").children().children(".fx-nav")).eq(/^\d+$/.test(a)?
a:k.fxa[b.fxa_id].fx[b.fx_id].slideNames[a]).trigger("click",m);e&&(k.fxa[b.fxa_id].fx[b.fx_id].params.duration=d)}function q(b,a){var e=a.trigger;if(a.chain){var m=0;u(b,{trigger:e,applyTo:a.applyTo,onstart:a.onchain},0,[function(){k.start(b,e)}]);$.each(a.params,function(c,t){t=y(b,t,a);a.trigger=e;a.trigger+="chain-"+(c+1);u(b,a,t[1],t[0]);m++});a.trigger=e;a.max_chain=m}else{var d=y(b,a.params,a);u(b,a,d[1],d[0])}}function y(b,a,e){var m=0,d=[];$.each(a,function(c,t){var v=t[2]||e.duration||k.duration,
z=t[3]||e.easing||k.easing;m=v>m?v:m;if(t[0]=="bgimage")if(e.applyTo||e.target)(e.applyTo&&typeof e.applyTo=="object"?e.applyTo:e.applyTo?b.find(e.applyTo):$(e.target)).each(function(){d.push(H($(this),t,v,z))});else{b.css("position")=="static"&&b.addClass("fx-relative");b.children(":not(.fx-bgimage)").addClass("fx-index fx-relative");c=t[1]instanceof Array?t[1][id.index()]:t[1];var N=I(c,b);d.push(function(){b.children(".fx-bgimage").not(N).stop("bgimage",!0,!0).animate({opacity:0},{always:function(){$(this).hide()},
start:function(){$(this).show()},duration:v/2,easing:z,queue:"bgimage"}).dequeue("bgimage");N.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:v,easing:z,queue:"bgimage"}).dequeue("bgimage")})}else e.target?$(e.target).each(function(){d.push(A($(this),t,v,z))}):d.push(C(b,t,v,z))});return[d,m||e.duration||k.duration]}function C(b,a,e,m){return function(d){var c={};c[a[0]]=w(a[1],d);x(d,c,a[0],e,m)}}function A(b,a,e,m){return function(){var d={};d[a[0]]=w(a[1],b);
x(b,d,a[0],e,m)}}function H(b,a,e,m){var d="";b.hasClass("fx-nav")&&(d=".fx-nav");b.css("position")=="static"&&b.addClass("fx-relative");b.children(":not(.fx-bgimage)").addClass("fx-index fx-relative");a=a[1]instanceof Array?a[1][b.index(d)]:a[1];var c=I(a,b);return function(t){t.each(function(){for(var v=0;v<=$(this).children(".fx-bgimage").length;v++)c[0]===$(this).children(".fx-bgimage")[v]&&(c.siblings(".fx-bgimage").stop("bgimage",!0,!1).animate({opacity:0},{always:function(){$(this).hide()},
start:function(){$(this).show()},duration:e/2,easing:m,queue:"bgimage"}).dequeue("bgimage"),c.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:e,easing:m,queue:"bgimage"}).dequeue("bgimage"))})}}function T(b,a){if(!k.ignore_idevice_hover||!k.idevice||a.trigger!="hover"){a.trigger=="toggleclick"?a.trigger="click":a.trigger=="toggledblclick"?a.trigger="dblclick":a.trigger=="togglefocus"?a.trigger="focus":a.trigger=="toggleblur"&&(a.trigger="blur");var e=a.trigger;
if(a.chain){var m=0;u(b,{trigger:e,applyTo:a.applyTo},0,[function(c){a.next_chain=1;c.hasClass("fx-clear")?c.toggleClass("fx-"+e):k.start(b,e,1)}]);$.each(a.params,function(c,t){t=O(b,t,a);a.trigger=e;a.trigger+="chain-"+(c+1);u(b,a,t[1],t[0]);m++});a.trigger=e;a.max_chain=m}else{var d=O(b,a.params,a);u(b,a,d[1],d[0]);a.params.to_exe=d[0]}}}function O(b,a,e){var m=0,d=[];$.each(a,function(c,t){var v=t[3]||e.duration||k.duration,z=t[4]||e.easing||k.easing;m=v>m?v:m;if(t[0]=="bgimage")if(e.applyTo||
e.target)(e.applyTo?b.find(e.applyTo):$(e.target)).each(function(){d.push(U($(this),t,v,z,e))});else{c=e.target?$(e.target):b;c.css("position")=="static"&&c.addClass("fx-relative");c.children(":not(.fx-bgimage)").addClass("fx-index fx-relative");var N=t[1]instanceof Array?t[1][c.index()]:t[1],P=t[2]instanceof Array?t[2][c.index()]:t[2],Y=I(N,c),Z=I(P,c);d.push(function(){Y.hasClass("fx-on")?(Y.stop("bgimage",!0,!1).animate({opacity:0},{always:function(){$(this).hide()},start:function(){$(this).show()},
duration:v/2,easing:z,queue:"bgimage"}).dequeue("bgimage").removeClass("fx-on"),Z.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:v,easing:z,queue:"bgimage"}).dequeue("bgimage")):(Z.stop("bgimage",!0,!1).animate({opacity:0},{always:function(){$(this).hide()},start:function(){$(this).show()},duration:v/2,easing:z,queue:"bgimage"}).dequeue("bgimage"),Y.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:v,easing:z,queue:"bgimage"}).dequeue("bgimage").addClass("fx-on"))})}else e.target?
$(e.target).each(function(){d.push(n($(this),t,v,z,e))}):d.push(L(b,t,v,z,e))});d.push(function(c,t){/chain/.test(t)||c.toggleClass("fx-"+e.trigger)});return[d,m||e.duration||k.duration]}function U(b,a,e,m,d){b.css("position")=="static"&&b.addClass("fx-relative");b.children(":not(.fx-bgimage)").addClass("fx-index fx-relative");d=a[1]instanceof Array?a[1][b.index()]:a[1];a=a[2]instanceof Array?a[2][b.index()]:a[2];var c=I(d,b),t=I(a,b);return function(v){for(var z=0;z<=v.children(".fx-bgimage").length;z++)c[0]===
v.children(".fx-bgimage")[z]&&(c.hasClass("fx-on")?(c.stop("bgimage",!0,!1).animate({opacity:0},{always:function(){$(this).hide()},start:function(){$(this).show()},duration:e/2,easing:m,queue:"bgimage"}).dequeue("bgimage").removeClass("fx-on"),t.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:e,easing:m,queue:"bgimage"}).dequeue("bgimage")):(t.stop("bgimage",!0,!1).animate({opacity:0},{always:function(){$(this).hide()},start:function(){$(this).show()},duration:e/
2,easing:m,queue:"bgimage"}).dequeue("bgimage"),c.stop("bgimage",!0,!1).animate({opacity:1},{start:function(){$(this).show()},duration:e,easing:m,queue:"bgimage"}).dequeue("bgimage").addClass("fx-on")))}}function I(b,a){return $("<div class='fx-bgimage' style='background-image:"+(b!=""&&b!="transparent"&&b!="none"?"url("+b+")":"none")+"'></div>").css({opacity:0}).appendTo(a)}function L(b,a,e,m,d){return function(c){var t={};c.hasClass("fx-"+d.trigger)?t[a[0]]=w(a[2],c):t[a[0]]=w(a[1],c);x(c,t,a[0],
e,m)}}function n(b,a,e,m,d){return function(){var c={};b.hasClass("fx-"+d.trigger)?c[a[0]]=w(a[2],b):c[a[0]]=w(a[1],b);x(b,c,a[0],e,m)}}function w(b,a){b=b instanceof Array?b[a.index()]:b;if(b=="auto"){var e=a.css("height");b=a.css("height","auto").height();a.css("height",e)}return b}function x(b,a,e,m,d){b.stop(e,!0,!1).animate(a,{duration:m,easing:d,queue:e}).dequeue(e)}function u(b,a,e,m,d){d=a.mainevent?null:a.applyTo;var c=a.trigger;b.off(a.trigger,d).on(c,d,function(t){var v=a.mainevent?$(a.applyTo,
b):a.target?$(a.target):a.applyTo&&$(t.currentTarget)[0]==b[0]?$(t.target):$(t.currentTarget);if(!v.hasClass("fx-ignore")){a.chain&&a.current_chain!=1||S(a.onstart,b,v);for(var z=0;z<m.length;z++)m[z](v,t.type);a.cursor&&($("html").css("cursor",a.cursor),v.css("cursor",a.cursor));a.chain&&(a.current_chain==a.max_chain&&a.iterations++,a.next_chain=a.stop==a.iterations&&a.current_chain==a.max_chain?0:a.current_chain==a.max_chain?1:a.current_chain+1);setTimeout(function(){a.cursor&&($("html").css("cursor",
""),v.css("cursor",""));a.chain&&(a.stop!=a.iterations||a.current_chain!=a.max_chain?v.not(".fx-clear").addClass("fx-clear"):v.removeClass("fx-clear"),a.next_chain>0?setTimeout(function(){a.next_chain>0&&(a.applyTo?k.start(b,a.trigger,a.next_chain,v):k.start(b,a.trigger,a.next_chain))},a.pause||0):(a.iterations=0,S(a.onstop,b,v)));a.chain&&a.current_chain!=a.max_chain||S(a.onend,b,v)},e)}})}function B(b){for(var a=k.fxa.length-1;a>=b;a--)for(var e=0;e<k.fxa[a].fx.length;e++)D(a,e)}function D(b,a){var e=
k.fxa[b].fx[a].trigger;if(e=="slider")k.fxa[b].element.hasClass("fx-ignore")||f(k.fxa[b].element,k.fxa[b].fx[a]);else if(e=="accordion")if(k.fxa[b].fx[a].params.when)if(eval(k.fxa[b].fx[a].params.when)){if(!k.fxa[b].element.children().eq(2).length){k.fxa[b].element.append("<div></div>");k.fxa[b].element.children().eq(0);var m=[],d=[];k.fxa[b].element.children().eq(0).children().each(function(){m.push(this)});k.fxa[b].element.children().eq(1).children().each(function(){d.push(this)});k.fxa[b].element.children().slice(0,
2).hide();for(e=0;e<m.length;e++)k.fxa[b].element.children().eq(2).append(m[e]),k.fxa[b].element.children().eq(2).append(d[e]);p(k.fxa[b].element.children().eq(2),k.fxa[b].fx[a])}}else k.fxa[b].element.children().eq(2).length&&(k.fxa[b].element.children().slice(0,2).show(),k.fxa[b].element.children().eq(2).children().each(function(c){$(this).attr("style","").removeClass("fx-nav fx-slide fx-on");c%2==0?k.fxa[b].element.children().eq(0).append(this):k.fxa[b].element.children().eq(1).append(this)}),
k.fxa[b].element.children().eq(2).remove());else k.fxa[b].element.hasClass("fx-ignore")||p(k.fxa[b].element,k.fxa[b].fx[a]);else e=="select"?K(k.fxa[b].element,k.fxa[b].fx[a]):e=="checkbox"?G(k.fxa[b].element,k.fxa[b].fx[a]):e=="radio"?J(k.fxa[b].element,k.fxa[b].fx[a]):e=="field"?E(k.fxa[b].element,k.fxa[b].fx[a]):e=="switch"?F(k.fxa[b].element,k.fxa[b].fx[a]):e=="ichain"?M(k.fxa[b].element,k.fxa[b].fx[a]):e=="swipe"?V(k.fxa[b].element,k.fxa[b].fx[a]):e=="togglefocus"||e=="toggleblur"||e=="hover"||
e=="toggleclick"||e=="toggledblclick"||/^me\d+/i.test(e)?T(k.fxa[b].element,k.fxa[b].fx[a]):q(k.fxa[b].element,k.fxa[b].fx[a])}function G(b,a){if(!b.next(".fx-checkbox").length){var e=a.params.width||15,m=a.params.height||15;b.click(function(d){d.preventDefault()});$('<span class="fx-checkbox" style="width:'+e+"px;height:"+m+'px"></span>').insertAfter(b);k.add(b.next(),"{'toggleclick':[['bgimage','"+a.params.unchecked+"','"+a.params.checked+"',20]]}");b.next().click().on("click",function(){$(this).toggleClass("fx-on");
$(this).hasClass("fx-on")?b.attr("checked","checked").trigger("click"):b.removeAttr("checked")});b.addClass("fx-hidden").is(":checked")&&b.next().click()}}function J(b,a){if(!b.next(".fx-radio").length){var e=a.params.width||15,m=a.params.height||15;b.click(function(d){d.preventDefault()});$('<span class="fx-radio" style="width:'+e+"px;height:"+m+'px"></span>').insertAfter(b);k.add(b.next(),"{'me1':[['bgimage','"+a.params.unchecked+"','"+a.params.checked+"',20]]}");b.next().trigger("me1").on("click",
function(){$(this).hasClass("fx-on")||(($(this).closest("form").length?$(this).closest("form"):$("body")).find("input[type=radio][name='"+$(this).prev().attr("name")+"']").removeAttr("checked").next(".fx-on").trigger("me1").removeClass("fx-on"),$(this).addClass("fx-on").trigger("me1").prev().attr("checked","checked").trigger("click"))});b.addClass("fx-hidden").is(":checked")&&b.next().click()}}function E(b,a){var e="";a.params.width&&(e=' style="width:'+a.params.width+'"');b.addClass("fx-input");
b.wrap('<span class="fx-field"'+e+"></span>");a.params.label&&(b.parent().append("<label>"+a.params.label+"</label>"),b.siblings("label").click(function(){$(this).siblings(".fx-input").focus()}));a.params.description&&b.parent().append('<span class="description">'+a.params.description+"</span>");b.change(function(){$(this).val().length?$(this).addClass("hasData"):$(this).removeClass("hasData")});b.trigger("change");a.params.required?b.blur(function(){$(this).val().length?k.hide_message($(this)):k.pop_message($(this),
a.params.required,"bad")}):a.params.validate&&b.blur(function(){window[a.params.validate]($(this))})}function F(b,a){var e;a.params.width&&(e=' style="width:'+a.params.width+'"');b.wrap('<span class="fx-switch"'+e+"></span>");b.val(a.params.data[0]);b.prop("index",0);b.on("keydown",function(m){m.preventDefault();m.keyCode!=9&&(a.params.data.length>b.prop("index")+1?b.prop("index",b.prop("index")+1):b.prop("index",0),b.val(a.params.data[b.prop("index")]))})}function M(b,a){b.addClass("fx-ichain");
b.on("keyup","input",function(){if($(this).val().length==$(this).attr("maxlength")&&$(this).index("input")<$(this).closest(".fx-ichain").find("input:last").index("input")){var e=$(this).index("input");$(this).closest(".fx-ichain").find("input").each(function(){if($(this).index("input")>e)return $(this).focus(),!1})}else if(a.params.validate&&($(this).val().length==$(this).attr("maxlength")||$(this).parent(".fx-switch").length)&&$(this).index("input")==$(this).closest(".fx-ichain").find("input:last").index("input"))window[a.params.validate](b)})}
function K(b,a){var e=a.params.width=="auto"?$(b).width():a.params.width=="fill"?$(b).parent().width():parseInt(a.params.width);$(b).width(e+20).wrap('<div class="fx-select"></div>').parent().outerWidth(e);a.params.required&&b.blur(function(){$(this).val().length&&$(this).val()!="0"?k.hide_message($(this)):k.pop_message($(this),a.params.required,"bad")})}function V(b,a){b.off("touchstart");b.swipe({swipeLeft:a.params.swipeLeft,swipeRight:a.params.swipeRight,swipeTop:a.params.swipeTop,swipeBottom:a.params.swipeBottom})}
function S(b,a,e){if(typeof window[b]==="function")window[b](a,e);else b&&/\./.test(b)&&typeof eval(b)==="function"&&eval(b)(a,e)}function da(b,a,e,m){if(b.parent().length){var d=a.list,c=a.slides,t={},v={},z={},N={},P={},Y={},Z={},ca=a.params.nav.scrollLinks instanceof Array;a.hasOwnProperty("current_slide")||(b.parents("table").addClass("fx-table-fix"),t.position="relative",z.overflow="hidden",z.position="relative",N.position="relative",P.overflow="hidden",P.position="relative",Y["float"]="left",
ca&&(t.overflow="hidden"));ca&&(d=a.list.parent());var Q=parseInt(b.parent()[0].getBoundingClientRect().width),aa=a.params.checkViewport?$(window).width():Q,W=(a.params.nav.noArrows||a.params.nav.arrowsInside)&&aa>a.params.responsive?Q:Q-(a.params.leftArrowWidth+a.params.rightArrowWidth);if(!m&&a.width>0&&!ca&&(a.width==W-(a.params.nav.position=="left"||a.params.nav.position=="right"?d.width():0)&&aa>=a.params.responsive||a.width==aa&&aa<a.params.responsive))return!0;b.addClass("fx-busy");m=d.parent();
var R=c.parent();if(aa<=a.params.responsive)if(b.addClass("fx-mobile"),a.params.accordion==1){R=d.children().length;var ba=$('<div class="fx-accordion"></div>').appendTo(b);d.children().removeClass("fx-on").css({width:"","float":"",display:"block"});c.children().addClass("fx-slide").css({"float":"",display:"none","margin-top":"",height:"",overflow:"hidden","padding-top":0,"padding-bottom":0,width:""});for(e=0;e<R;e++)ba.append(d.children().get(0)).append(c.children().get(0));a.params.allowCloseAccordion=
1;a.params.accordion=2;a.width=Q}else{if(!a.params.accordion){d.find(".fx-nav").trigger("fx-on").addClass("fx-on");ca?(a.list_children.eq(0).click(),z.display="none"):(e=a.list_children.eq(0).css("padding-left"),e=e.match(/\d*/),ba=a.list_children.eq(0).css("padding-right"),ba=ba.match(/\d*/),t.left=-(a.current_slide*W)+"px",v.width=W-e-ba+"px",v["float"]="left");P.width=Q+"px";P["margin-left"]="";P["margin-right"]="";R=((a.params.nav.position=="bottom"?R.height():0)+(m.is(":visible")?m.height():
0))/2-b.children(".fx-left-arrow").height()/2;R=R<0?0:R;N.width=Q*c.children().length+"px";N["margin-left"]="";Y.width=Q+"px";Z.top=R+"px";Z.display="block";a.params.mask&&a.sp.children(".fx-mask-left,.fx-mask-right").width(0);z["margin-right"]=a.params.leftArrowWidth+"px";z["margin-left"]=a.params.rightArrowWidth+"px";if(a.params.nav.position=="left"||a.params.nav.position=="right")z["float"]="",P["float"]="",z.width=W+"px",b.children(".fx-left-arrow").css("left",0);W=a.width=Q;N.left=a.slideOffset&&
a.params.slideWidth&&a.params.effect=="customEffect"?-W+a.params.pixelOffset+"px":a.slideOffset&&a.params.slideWidth?-((a.current_slide||0)+a.slideOffset)*W+a.params.pixelOffset+"px":-((a.current_slide||0)*W)+"px"}}else{b.removeClass("fx-mobile");a.params.accordion==2&&(R=d.children().length,b.children(".fx-accordion").children().each(function(){$(this).hasClass("fx-nav")?$(this).appendTo(d):$(this).removeClass("fx-slide").css({"float":"left",display:"",overflow:"","padding-top":"","padding-bottom":""}).appendTo(c)}),
b.children(".fx-accordion").remove(),v.display="",a.params.allowCloseAccordion=0,a.params.accordion=1);t.left=0;a.params.nav.manual?ca?(a.params.nav.position=="left"||a.params.nav.position=="right"?t.height=a.params.nav.scrollLinks[2]*a.params.nav.scrollLinks[3]+"px":(t.margin="0 "+a.params.nav.scrollLinks[2]+"px",Q=0,a.list_children.each(function(){Q+=$(this).outerWidth(!0)+1}),v.width=Q+"px",v.left=0,d.siblings(".fx-list-right").removeClass("fx-ignore"),Q<=d.width()-a.params.nav.scrollLinks[2]?
$(".fx-list-left,.fx-list-right",b).css("display","none"):$(".fx-list-left,.fx-list-right",b).css("display","block")),z.display="",d.outerWidth()>a.list_children.last().position().left&&d.parent().siblings(".fx-list-right").addClass("fx-ignore")):(v.width="",v["float"]="",t.width=""):(ba=d.children(":eq(0)").outerWidth()-d.children(":eq(0)").innerWidth(),v["float"]="left",v.width=m.width()/a.list_children.length-ba+"px");if(a.params.nav.position=="left"||a.params.nav.position=="right")m.css("width",
""),m.width(m.width());a.width=parseInt(W-(a.params.nav.position=="left"||a.params.nav.position=="right"?m.outerWidth():0));P.width=a.width+"px";a.params.nav.noArrows||a.params.nav.arrowsInside?(P["margin-left"]="",P["margin-right"]=""):(P["margin-left"]=a.params.leftArrowWidth+"px",P["margin-right"]=a.params.rightArrowWidth+"px");z["margin-right"]="";z["margin-left"]="";N.width=a.width*c.children().length+"px";a.params.slideWidth&&a.width>a.params.responsive-(a.params.nav.noArrows||a.params.nav.arrowsInside?
0:a.params.leftArrowWidth+a.params.rightArrowWidth)&&a.width>a.params.slideWidth?(Y.width=a.params.slideWidth-(a.params.slideBorderWidth||0)+"px",N["margin-left"]=(a.width-a.params.slideWidth)/2+"px",a.params.mask&&(a.params.pixelOffset?(a.sp.children(".fx-mask-left").width((a.width-a.params.slideWidth)/2+a.params.pixelOffset),a.sp.children(".fx-mask-right").width((a.width-a.params.slideWidth)/2-a.params.pixelOffset)):a.sp.children(".fx-mask-left,.fx-mask-right").width((a.width-a.params.slideWidth)/
2))):(Y.width=a.width+"px",N["margin-left"]="");R=c.children().eq(a.current_slide).height()/2+m.height()-b.children(".fx-left-arrow").height()/2;Z.top=(R<0?0:R)+"px";!e&&a.width&&a.current_slide>=0&&(d.find(".fx-nav").not(":eq("+a.current_slide+")").trigger("fx-off").removeClass("fx-on"),d.find(".fx-nav").eq(a.current_slide).trigger("fx-on").addClass("fx-on"));a.params.nav.position=="left"?(z["float"]="left",P["float"]="right",b.children(".fx-left-arrow").css("left",m.width())):a.params.nav.position==
"right"&&(z["float"]="right",P["float"]="left",b.children(".fx-left-arrow").css("left",m.width()));N.left=a.slideOffset&&a.width>a.params.slideWidth&&a.params.effect=="customEffect"?-a.params.slideWidth+a.params.pixelOffset+"px":a.slideOffset&&a.width>a.params.slideWidth?-((a.current_slide||0)+a.slideOffset)*a.params.slideWidth+a.params.pixelOffset+"px":-((a.current_slide||0)*a.width)+"px"}(!a.params.nav.manual&&a.params.nav.position!="right"&&a.params.nav.position!="left"||aa<=a.params.responsive)&&
!ca&&(t.width=W*a.list_children.length+"px");Z.display=(a.params.nav.noArrows||a.params.nav.noArrows)&&aa>a.params.responsive?"none":"block";d.css(t);d.children().css(v);m.css(z);c.css(N);c.children().css(Y);a.params.fixedHeight>1?b.css("min-height",a.params.fixedHeight+"px"):a.params.fixedHeight&&(a=c.children().map(function(){var fa=$(this).css("height"),ha=$(this).css("height","").outerHeight();fa=="0px"&&$(this).css("height",fa);return ha}).get(),b.css("min-height",Math.max.apply(null,a)+"px"));
c.parent().css(P);b.children(".fx-left-arrow,.fx-right-arrow").css(Z);b.removeClass("fx-busy")}}function ea(b,a,e){if(a){if(typeof a=="string"){a.substring(0,1)!="["&&(a="["+a+"]");a=a.replace(/'/g,'"');try{a=$.parseJSON(a)}catch(m){console.error("Not a valid JSON string:",a);return}}e||(k.fxa.push({fx:[],element:b}),e=k.fxa.length-1,b.prop("fx-id",e),b.removeAttr("fx"));b=k.fxa[e].fx.length-1;$.each(a,function(m,d){for(var c in d)c!="mainevent"&&c!="applyTo"&&c!="cursor"&&c!="on"&&c!="off"&&c!="onstart"&&
c!="onend"&&c!="chain"&&c!="duration"&&c!="target"&&c!="stop"&&c!="pause"&&c!="onstop"&&c!="easing"&&(c=="slider"||c=="accordion"||c=="select"||c=="swipe"||c=="checkbox"||c=="radio"||c=="field"||c=="switch"||c=="ichain"?(c=="slider"?(d[c].nav||(d[c].nav={}),d[c].effect=d[c].effect||k.slider_effect,d[c].leftArrowWidth=d[c].nav.leftArrowWidth||d[c].leftArrowWidth||0,d[c].rightArrowWidth=d[c].nav.rightArrowWidth||d[c].rightArrowWidth||0,d[c].leftArrow=d[c].nav.leftArrow||d[c].leftArrow,d[c].rightArrow=
d[c].nav.rightArrow||d[c].rightArrow,d[c].duration=d[c].duration||d.duration||k.duration,d[c].responsive=d[c].mobile||d[c].responsive||0,d[c].accordion=d[c].accordion||0,d[c].nav.position=d[c].nav.position||"top",d[c].nav.arrowsInside=d[c].nav.arrowsInside||0,d[c].easing=d[c].easing||d.easing||k.easing,d[c].onstart=d[c].onstart||d.onstart,d[c].onend=d[c].onend||d.onend,d[c].cursor=d[c].cursor||d.cursor||"",d[c].resizeDetect=d[c].resizeDetect||0,d[c].swipe=d[c].swipe||0,d[c].pixelOffset=d[c].pixelOffset||
0,d[c].infiniteScroll=d[c].nav.infiniteScroll||0,/vw/.test(d[c].slideWidth)&&(d[c].responsive>=$(window).width()?d[c].slideWidth=d[c].responsive:(d[c].slideWidth=d[c].slideWidth.slice(0,-2),d[c].slideWidth=window.innerWidth*parseInt(d[c].slideWidth)/100))):c=="accordion"?(d[c].duration=d[c].duration||d.duration||k.duration,d[c].easing=d[c].easing||d.easing||k.easing,d[c].cursor=d[c].cursor||d.cursor||"",d[c].onstart=d[c].onstart||d.onstart,d[c].onend=d[c].onend||d.onend,d[c].collapsible=d[c].collapsible||
0,d[c].exclusive=d[c].exclusive||0,d[c].when=d[c].when||"",d[c].nav||(d[c].nav={})):c=="select"&&(d[c].width=d[c].width||"auto"),d.applyTo?k.fxa[e].element.find(d.applyTo).each(function(){$(this).attr("fx","{'"+c+"':"+JSON.stringify(d[c])+"}")}):k.fxa[e].fx.push({trigger:c,params:d[c],index:e})):(m=0,d[c]&&d[c][0]&&d[c][0][0]instanceof Array&&(m=1),m?k.fxa[e].fx.push({trigger:c,params:d[c],mainevent:d.mainevent,applyTo:d.applyTo,cursor:d.cursor,onstart:d.onstart,onend:d.onend,duration:d.duration,
target:d.target,chain:m,stop:d.stop,pause:d.pause,onstop:d.onstop,onchain:d.onchain,iterations:0,easing:d.easing}):k.fxa[e].fx.push({trigger:c,params:d[c],mainevent:d.mainevent,applyTo:d.applyTo,cursor:d.cursor,onstart:d.onstart,onend:d.onend,duration:d.duration,target:d.target,easing:d.easing})))});return{fxa:e,er:k.fxa[e]?k.fxa[e].fx.length-1:b}}}var X={};window.fireTimer=window.fireTimer||function(b,a,e,m){X[b]?(X[b].timer=+new Date,X[b].param=m):(a(m),X[b]={},X[b].timer=+new Date,X[b].id=setInterval(function(){a(X[b].param);
X[b].timer+e+1<+new Date&&(clearInterval(X[b].id),X[b]=0)},e))};var k=window.fx||{duration:500,easing:"linear",slider_effect:"default",auto_init:1,auto_resize:1,ignore_pre:0,init_iteration:0,fxa:[],swipes:[],idevice:/iphone|ipad|ipod/i.test(navigator.userAgent),ignore_idevice_hover:0,init:function(b){b||=$("body");typeof b=="string"&&(b=$(b));var a=k.fxa.length;ea(b,b.attr("fx"));b.find("*").each(function(){if(k.ignore_pre&&$(this).closest("pre").length)return!0;ea($(this),$(this).attr("fx"))});B(a);
setTimeout(function(){$(document).trigger("fx_ready",k.init_iteration++)},0)},resize:function(b){for(var a=k.fxa.length,e=0;e<a;e++)for(var m=0;m<k.fxa[e].fx.length;m++)if(k.fxa[e].fx[m].trigger=="slider"){da(k.fxa[e].element,k.fxa[e].fx[m],0,b);break}else if(k.fxa[e].fx[m].trigger=="accordion"&&k.fxa[e].fx[m].params.when){D(e,m);break}else if(k.fxa[e].fx[m].trigger=="select"&&k.fxa[e].fx[m].params.width=="fill"){m=k.fxa[e].element;$(m).parent().outerWidth(0);var d=$(m).parent().parent().width();
$(m).width(d+20).parent().outerWidth(d);break}},stop:function(b,a){a=k.find(b,a);b=k.fxa[k.find(b).a];if(a.b>-1)b.fx[a.b].next_chain=0;else for(var e=0;e<k.fxa[a.a].fx.length;e++)b.fx[e].params[0]&&b.fx[e].params[0][0]instanceof Array&&(b.fx[e].next_chain=0)},start:function(b,a,e,m){var d=k.find(b,a),c=k.fxa[d.a];b=c.element;if(d.b>-1)c.fx[d.b].chain?(c.fx[d.b].current_chain=e?e:1,m?b.find(m).trigger(a+"chain-"+c.fx[d.b].current_chain):b.trigger(a+"chain-"+c.fx[d.b].current_chain)):b.trigger(a);else if(e)for(a=
0;a<c.fx.length;a++)c.fx[a].params[0]&&c.fx[a].params[0][0]instanceof Array&&(c.fx[a].current_chain=e,b.trigger(c.fx[a].trigger+"chain-"+c.fx[a].current_chain));else for(a=0;a<c.fx.length;a++)c.fx[a].params[0]&&c.fx[a].params[0][0]instanceof Array?(c.fx[a].current_chain=1,b.trigger(c.fx[a].trigger+"chain-"+c.fx[a].current_chain)):b.trigger(c.fx[a].trigger)},resume:function(b,a){b=k.find(b,a);a=k.fxa[b.a];b.b||(b.b=k.arrayFind(a.fx,"chain",1));b.b>-1&&k.start(b.a,a.fx[b.b].trigger,a.fx[b.b].current_chain==
a.fx[b.b].max_chain?1:a.fx[b.b].current_chain+1)},add:function(b,a){typeof b=="string"&&(b=$(b));b=ea(b,a,k.find(b).a);D(b.fxa,b.er)},reinit:function(b,a,e){b=k.find(b);a||=0;for(e||=k.fxa[b.a].fx.length-1;a<=e;a++)k.fxa[b.a].fx[a].trigger!="accordion"&&k.fxa[b.a].fx[a].trigger!="slider"&&D(b.a,a)},slideAnimation:{"default":function(b,a,e){b.stop().animate({left:-a.destination_slide*e+a.params.pixelOffset+"px"},a.params.duration,a.params.easing)}},modify:function(b,a,e,m){b=k.find(b,a);b.p&&(eval("fx.fxa["+
b.a+"].fx["+b.b+"]."+e+"='"+m+"'"),D(b.a,b.b))},find:function(b,a){typeof b=="string"&&(b=$(b));typeof b=="object"&&(b=parseInt(b.prop("fx-id")));if(!b&&b!=0)return{p:0,a:0,b:0};typeof a=="string"&&(a=k.arrayFind(k.fxa[b].fx,"trigger",a));return{p:k.fxa[b].fx[a],a:b,b:a}},destroy:function(b,a){b=k.find(b,a);b.p&&(k.fxa[b.a].element.off(b.p.trigger,b.p.applyTo),k.fxa[b.a].fx.splice(b.b,1),k.fxa[b.a].fx.length||k.fxa.splice(b.a,1))},arrayFind:function(b,a,e){if(a instanceof Array)for(var m=0;m<b.length;m++){for(var d=
0,c=0;c<a.length;c++)b[m][a[c]]==e[c]&&d++;if(d==a.length)return m}else for(m=0;m<b.length;m++)if(b[m][a]==e)return m;return-1},pop_message:function(b,a,e){var m=b.position();b.next(".fx-msg").length&&k.hide_message(b);a=$('<div class="fx-msg mt-'+e+'" style="opacity:0"><span>'+a+"</span></div>").insertAfter(b);a.css({width:a.children().outerWidth()+"px",left:m.left+b.outerWidth(!0)+35+"px",top:m.top+"px"}).animate({opacity:1,left:"-=30"},200)},hide_message:function(b){var a=b.next(".fx-msg");a.addClass("fx-removing").animate({opacity:0},
200,function(){a.remove()})}};try{Object.defineProperty(k,"version",{enumerable:!0,value:"3.0.0"})}catch(b){k.version="3.0.0"}k.accordions=function(b,a){if(!(this instanceof k.accordions))return new k.accordions(b,a);typeof b=="string"&&(b=$(b));this.fxa_id=b;typeof b!="object"?b=k.fxa[b].element:this.fxa_id=b.prop("fx-id");this.fx_id=typeof a=="undefined"?k.arrayFind(k.fxa[this.fxa_id].fx,"trigger","accordion"):a;this.ele=b};k.accordions.prototype={toggle:function(b){if(b||b==0)b=/^\d+$/.test(b)?
b:k.fxa[this.fxa_id].fx[this.fx_id].slideNames[b];if(b||b==0)this.ele.children(".fx-nav:eq("+b+")").trigger("click");else{var a=k.fxa[this.fxa_id].fx[this.fx_id].params.duration;this.ele.children(".fx-nav").each(function(e){(function(m){setTimeout(function(){m.trigger("click")},a*e+e*200)})($(this))})}},count:function(){return this.ele.children(".fx-nav").length},last:function(){return k.fxa[this.fxa_id].fx[this.fx_id].last_clicked},me:function(){return this.ele},disable:function(){this.ele.children(".fx-nav").addClass("fg-ignore");
return this},enable:function(){this.ele.children(".fx-nav").removeClass("fg-ignore");return this},place:function(){return this.fxa_id}};k.sliders=function(b,a){if(!(this instanceof k.sliders))return new k.sliders(b,a);typeof b=="string"&&(b=$(b));this.fxa_id=b;typeof b!="object"?b=k.fxa[b].element:this.fxa_id=b.prop("fx-id");this.fx_id=typeof a=="undefined"?k.arrayFind(k.fxa[this.fxa_id].fx,"trigger","slider"):a;this.ele=b};k.sliders.prototype={next:function(b,a){a=this.current();a<this.count()-1?
a++:a=0;l(this,a,b,"next");return this},prev:function(b,a){a=this.current();a>0?a--:a=this.count()-1;l(this,a,b,"prev");return this},to:function(b,a){l(this,b,a);return this},count:function(){return k.fxa[this.fxa_id].fx[this.fx_id].list_children.length},current:function(){return k.fxa[this.fxa_id].fx[this.fx_id].current_slide},destination:function(){return k.fxa[this.fxa_id].fx[this.fx_id].destination_slide},me:function(){return this.ele},disable:function(){this.ele.children(".fx-list").find(".fx-nav").addClass("fx-ignore");
this.ele.children(".fx-left-arrow,.fx-right-arrow").addClass("fx-ignore");return this},enable:function(){this.ele.children(".fx-list").find(".fx-nav:not(.fx-on)").removeClass("fx-ignore");this.ele.children(".fx-left-arrow,.fx-right-arrow").removeClass("fx-ignore");return this},place:function(){return this.fxa_id}};$(document).ready(function(){k.auto_init&&k.init();$(window).resize(function(){k.auto_resize&&fireTimer("fxResize",k.resize,40)})});window.fx=k;$.fn.swipe=function(b){function a(m){if(k.swipes.length==
1)return 1;for(var d=0;d<k.swipes.length;d++)if(k.sliders($(m)).place()>=k.swipes[d].fxa_id)return 1;return 0}var e={min_move_x:100,max_move_y:25,swipeLeft:function(){},swipeRight:function(){},swipeTop:function(){},swipeBottom:function(){}};b&&$.extend(e,b);this.each(function(){var m,d,c=!1;$(this).on("touchstart mousedown",function(t){t=t.originalEvent.touches||t.originalEvent;t.length==1&&(t=t[0]);!t||$(t.target).hasClass("fx-nav")||$(t.target).closest(".fx-nav").length||(m=t.pageX,d=t.pageY,c=
!0,$(this).hasClass("fx-slider")&&k.swipes.push(k.sliders($(this))),$(this).on("touchmove mousemove",function(v){if(c){var z=v.originalEvent.touches||v.originalEvent;z.length==1&&(z=z[0]);v=m-z.pageX;z=d-z.pageY;if(Math.abs(v)>=e.min_move_x&&Math.abs(z)<=e.max_move_y){if($(this).off("touchmove mousemove"),m=null,c=!1,!$(this).hasClass("fx-slider")||a(this))v>0?typeof e.swipeLeft=="string"?S(e.swipeLeft,$(this)):e.swipeLeft(this):typeof e.swipeRight=="string"?S(e.swipeRight,$(this)):e.swipeRight(this),
k.swipes=[]}else Math.abs(v)<=e.max_move_y&&Math.abs(z)>=e.min_move_x&&($(this).off("touchmove mousemove"),m=null,c=!1,!$(this).hasClass("fx-slider")||a(this))&&(v>0?typeof e.swipeBottom=="string"?S(e.swipeBottom,$(this)):e.swipeBottom(this):typeof e.swipeTop=="string"?S(e.swipeTop,$(this)):e.swipeTop(this),k.swipes=[])}}))})});return this}})();(function(g,h){g.fn.html=function(){var p=h.apply(this,arguments);fx.auto_init&&arguments.length&&fx.init(g(this));return p}})(jQuery,jQuery.fn.html);
jQuery.expr[":"].parent=function(g,h,p){return jQuery(g).parent(p[3]).length>0};
$.extend(fx.slideAnimation,{vScroll:function(g,h,p){g.children().css({"float":"",height:""}).end().css({top:-g.children().eq(h.current_slide).position().top+"px",left:0});g.stop().animate({top:-g.children().eq(h.destination_slide).position().top},h.params.duration,h.params.easing,function(){g.children().css({"float":"left",height:0});g.children().eq(h.destination_slide).css("height","").end().end().css({top:"",left:-h.destination_slide*p+"px"})})},slideFade:function(g,h,p,r){g.css({opacity:0,left:-h.destination_slide*
p+(r?-100:100)+"px"}).stop().animate({opacity:1,left:-h.destination_slide*p+"px"},h.params.duration,h.params.easing,function(){g.children(":lt("+h.destination_slide+")").css("opacity","")}).children(":lt("+h.destination_slide+")").css("opacity",0)},slideFadeReverse:function(g,h,p){this.slideFade(g,h,p,1)},fade:function(g,h,p){g.stop().animate({opacity:0},h.params.duration/2,h.params.easing,function(){g.css("left",-h.destination_slide*p+"px");g.stop().animate({opacity:1},h.params.duration/2,h.params.easing)})},
sFade:function(g,h,p){g.css("left",0).children().css({left:p+"px",position:"absolute",top:0});h.hasOwnProperty("current_slide")&&g.children().eq(h.current_slide).css("left",0).animate({opacity:0},h.params.duration,h.params.easing);g.height(g.children().eq(h.destination_slide).outerHeight()).children().eq(h.destination_slide).css({opacity:0,left:0}).animate({opacity:1},h.params.duration,h.params.easing,function(){g.css({height:"",left:-h.destination_slide*p+"px"}).children().css({position:"",top:"",
left:"",opacity:""})})},FadeInRL:function(g,h,p,r){for(var f=h.params.duration/50,l=0;l<50;l++)(function(q,y){setTimeout(function(){q.animate({opacity:0},h.params.duration,h.params.easing)},y)})(g.parent().append('<div style="width:2%;overflow:hidden;top:0;position:absolute;height:'+g.children().eq(h.current_slide).height()+"px;left:"+l*2+'%;top:0"><div style="margin-left:'+p/50*-l+"px;width:"+p+'px;">'+g.children().eq(h.current_slide).html()+"</div></div>").children(":last").css("opacity",1),r?f*
l:f*(50-l));g.css({left:-h.destination_slide*p+"px"});setTimeout(function(){g.siblings().remove()},h.params.duration+1)},FadeInLR:function(g,h,p){this.FadeInRL(g,h,p,1)},revealRL:function(g,h,p,r){r=r?-p:p;var f=h.current_slide;g.css({left:0}).children().eq(f).css({left:0,position:"absolute",top:0,"z-index":98});g.children().eq(h.destination_slide).css({left:r+"px",height:"",position:"absolute",top:0,"z-index":99}).animate({left:0},h.params.duration,h.params.easing,function(){g.children().eq(h.destination_slide).css({position:"",
top:"",left:"","z-index":""});g.children().eq(f).css({left:"",position:"",top:"","z-index":""});g.css({left:-h.destination_slide*p+"px"})})},revealLR:function(g,h,p){this.revealRL(g,h,p,1)},openLR:function(g,h,p,r){var f=h.current_slide;g.css({left:0}).children().eq(f).css({left:0,position:"absolute",top:0,"z-index":98});g.children().eq(h.destination_slide).css({width:0,w2:0,height:"",position:"absolute",top:0,"z-index":99}).animate({width:p},h.params.duration,h.params.easing,function(){g.children().eq(h.destination_slide).css({position:"",
top:"",left:"","z-index":""});g.children().eq(f).css({left:"",position:"",top:"","z-index":""});g.css({left:-h.destination_slide*p+"px"})})},openRL:function(g,h,p){this.revealRL(g,h,p,1)},revealBT:function(g,h,p,r){var f=h.current_slide;g.css({left:0}).children().eq(f).css({left:0,position:"absolute",top:0,"z-index":98});g.children().eq(h.destination_slide).css({left:0,height:"",position:"absolute","z-index":99});r=r?-g.children().eq(h.destination_slide).height():g.children().eq(f).height();g.children().eq(h.destination_slide).css({top:r+
"px"}).animate({top:0},h.params.duration,function(){g.children().eq(h.destination_slide).css({position:"",top:"",left:"","z-index":""});g.children().eq(f).css({left:"",position:"",top:"","z-index":""});g.css({left:-h.destination_slide*p+"px"})})},revealTB:function(g,h,p){this.revealBT(g,h,p,1)},verticalHalf:function(g,h,p,r){r=g.children().eq(h.destination_slide);var f=g.parent().append('<div class="fx-holder" style="z-index:2;width:100%;height:100%;position:absolute;"></div>').children(".fx-holder");
f.append('<div style="z-index:1;width:50%;height:100%;position:absolute;top:-100%;left:0;overflow:hidden;"><div style="background-image:'+r.css("background-image").replace(/"/g,"'")+';background-position:inherit;background-size:inherit;background-attachment:inherit;width:200%;height:100%;position:absolute;"></div></div>');f.append('<div style="z-index:1;width:50%;height:100%;position:absolute;top:100%;right:0;overflow:hidden;"><div style="background-image:'+r.css("background-image").replace(/"/g,
"'")+';background-position:inherit;background-size:inherit;background-attachment:inherit;width:200%;height:100%;position:absolute;left:-100%"></div></div>');f.children().animate({top:0},h.params.duration,function(){f.remove();g.css({left:-h.destination_slide*p+"px"})})},horizontalHalf:function(g,h,p,r){r=g.children().eq(h.destination_slide);var f=g.parent().append('<div class="fx-holder" style="z-index:2;width:100%;height:100%;position:absolute;"></div>').children(".fx-holder");f.append('<div style="z-index:1;width:100%;height:50%;position:absolute;top:0;left:-100%;overflow:hidden;"><div style="background-image:'+
r.css("background-image").replace(/"/g,"'")+';background-position:inherit;background-size:inherit;background-attachment:inherit;width:100%;height:200%;position:absolute;"></div></div>');f.append('<div style="z-index:1;width:100%;height:50%;position:absolute;top:50%;left:100%;overflow:hidden;"><div style="background-image:'+r.css("background-image").replace(/"/g,"'")+';background-position:inherit;background-size:inherit;background-attachment:inherit;width:100%;height:200%;position:absolute;"></div></div>');
f.children().animate({left:0},h.params.duration,function(){f.remove();g.css({left:-h.destination_slide*p+"px"})})},FadeInBT:function(g,h,p,r){for(var f=g.children().eq(h.current_slide).height()/10,l=h.params.duration/f,q=0;q<f;q++)(function(y,C){setTimeout(function(){y.animate({opacity:1},h.params.duration/2,h.params.easing)},C)})(g.parent().append('<div style="height:10px;width:100%;overflow:hidden;position:absolute;left:0;top:'+q*10+'px;"><div style="left:0;position:relative;width:100%;top:-'+q*
10+'px">'+g.children().eq(h.destination_slide).html()+"</div></div>").children(":last").css("opacity",0),r?l*q:l*(f-q));setTimeout(function(){g.stop().css({left:-h.destination_slide*p+"px"}).siblings().remove()},h.params.duration+20)},FadeInTB:function(g,h,p){this.FadeInBT(g,h,p,1)},diagonalTL:function(g,h,p){for(var r=g.children().eq(h.current_slide).height()/14,f=g.children().eq(h.current_slide).width()/14,l=h.params.duration/28,q=0;q<14;q++)for(var y=0;y<14;y++)(function(C,A){setTimeout(function(){C.animate({opacity:1},
h.params.duration/2,h.params.easing)},A)})(g.parent().append('<div style="height:'+r+"px;width:"+f+"px;overflow:hidden;position:absolute;left:"+y*f+"px;top:"+q*r+'px;"><div style="left:'+-y*f+"px;position:relative;height:"+r*14+"px;width:"+f*14+"px;top:"+-q*r+'px">'+g.children().eq(h.destination_slide).html()+"</div></div>").children(":last").css("opacity",0),(y+q)*l);setTimeout(function(){g.stop().css({left:-h.destination_slide*p+"px"}).siblings().remove()},h.params.duration+20)},zoomInOut:function(g,
h,p,r){var f=1.1;r&&(f=.9);var l=h.params.duration;h.params.duration/=2;g.children().eq(h.destination_slide).css({transform:"scale("+f+","+f+")"});this.sFade(g,h,p);setTimeout(function(){g.children().eq(h.destination_slide).css({transition:"all "+h.params.duration/1E3+"s ease-in-out"});g.children().eq(h.destination_slide).css({transform:"scale(1,1)"});setTimeout(function(){g.children().eq(h.destination_slide).css({transform:"",transition:""});h.params.duration=l},h.params.duration)},h.params.duration)},
zoomOutIn:function(g,h,p,r){this.zoomInOut(g,h,p,1)},zoomInOutSim:function(g,h,p,r){var f=1.1;r&&(f=.9);g.children().eq(h.destination_slide).css({transform:"scale("+f+","+f+")"});this.sFade(g,h,p);setTimeout(function(){g.children().eq(h.destination_slide).css({transition:"transform "+h.params.duration/1E3+"s linear"});g.children().eq(h.destination_slide).css({transform:"scale(1,1)"});setTimeout(function(){g.children().eq(h.destination_slide).css({transform:"",transition:""})},h.params.duration)},
0)},zoomOutInSim:function(g,h,p,r){this.zoomInOut(g,h,p,1)},cool:function(g,h,p){var r=[],f=g.parent().append('<div class="fx-holder" style="width:100%;height:100%;position:absolute;background:#000;"><div style="background:#000;opacity:0;z-index:5;position:absolute;width:100%;height:100%"></div></div>').children(".fx-holder");g.children().each(function(l){r.push($(this).css("background-image"));r[l]=r[l].replace(/"/g,"'");l==0?h.current_slide==l?(f.append('<div style="z-index:1;width:50%;height:50%;position:absolute;top:0;left:0;"><div style="background-image:'+
r[l]+';background-position:0 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="z-index:1;width:50%;height:50%;position:absolute;top:50%;left:0;"><div style="background-image:'+r[l]+';background-position:0 -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="z-index:1;width:50%;height:100%;position:absolute;top:0;left:50%;"><div style="background-image:'+r[l]+';background-position:-100% 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>')):
(f.append('<div style="width:25%;height:25%;position:absolute;top:0;left:0;"><div style="background-image:'+r[l]+';background-position:0 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:25%;height:25%;position:absolute;top:50%;left:25%"><div style="background-image:'+r[l]+';background-position:0 -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:25%;height:50%;position:absolute;top:0;left:75%"><div style="background-image:'+
r[l]+';background-position:-100% 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>')):l==1?h.current_slide==l?(f.append('<div style="z-index:1;width:100%;height:50%;position:absolute;top:0;left:0;"><div style="background-image:'+r[l]+';background-position:0 0;background-size:100%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="z-index:1;width:50%;height:50%;position:absolute;top:50%;left:0;"><div style="background-image:'+r[l]+';background-position:0 -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),
f.append('<div style="z-index:1;width:50%;height:50%;position:absolute;top:50%;left:50%;"><div style="background-image:'+r[l]+';background-position:-100% -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>')):(f.append('<div style="width:45%;height:20%;position:absolute;top:0;left:20%"><div style="background-image:'+r[l]+';background-position:0 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:20%;height:20%;position:absolute;top:20%;left:0"><div style="background-image:'+
r[l]+';background-position:0 -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:20%;height:20%;position:absolute;top:45%;left:45%"><div style="background-image:'+r[l]+';background-position:-100% -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>')):l==2?h.current_slide!=l&&(f.append('<div style="width:20%;height:20%;position:absolute;top:30%;left:30%;"><div style="background-image:'+r[l]+';background-position:0 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),
f.append('<div style="width:20%;height:20%;position:absolute;top:55%;left:80%;"><div style="background-image:'+r[l]+';background-position:-100% 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:45%;height:20%;position:absolute;top:80%;left:30%;"><div style="background-image:'+r[l]+';background-position:0 -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>')):l==3&&h.current_slide!=l&&(f.append('<div style="width:20%;height:45%;position:absolute;top:45%;left:-5%;"><div style="background-image:'+
r[l]+';background-position:0 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:20;height:20%;position:absolute;top:20%;left:45%;"><div style="background-image:'+r[l]+';background-position:-100% 0;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'),f.append('<div style="width:20%;height:20%;position:absolute;top:70%;left:70%;"><div style="background-image:'+r[l]+';background-position:-100% -100%;background-size:200%;width:100%;height:100%;position:absolute;"></div></div>'))});
f.children("div:first").animate({opacity:.7},h.params.duration/3);f.children().eq(1).animate({width:"25%",height:"25%",top:"0%",left:"0%"},h.params.duration/3);f.children().eq(2).animate({width:"25%",height:"25%",top:"50%",left:"25%"},h.params.duration/3);f.children().eq(3).animate({width:"25%",height:"50%",top:"0%",left:"75%"},h.params.duration/3);f.children().eq(4).animate({width:"50%",height:"25%",top:"0%",left:"25%"},h.params.duration/3);f.children().eq(5).animate({width:"25%",height:"25%",top:"25%",
left:"0%"},h.params.duration/3);f.children().eq(6).animate({width:"25%",height:"25%",top:"50%",left:"50%"},h.params.duration/3);f.children().eq(7).animate({width:"25%",height:"25%",top:"25%",left:"25%"},h.params.duration/3);f.children().eq(8).animate({width:"25%",height:"25%",top:"50%",left:"75%"},h.params.duration/3);f.children().eq(9).animate({width:"50%",height:"50%",top:"75%",left:"25%"},h.params.duration/3);f.children().eq(10).animate({width:"25%",height:"50%",top:"50%",left:"0%"},h.params.duration/
3);f.children().eq(11).animate({width:"25%",height:"25%",top:"25%",left:"50%"},h.params.duration/3);f.children().eq(12).animate({width:"25%",height:"25%",top:"75%",left:"75%"},h.params.duration/3);setTimeout(function(){f.children(":gt(0)").css("z-index","")},h.params.duration/3);setTimeout(function(){f.children("div:first").animate({opacity:0},h.params.duration/3);h.destination_slide==0?(f.children().eq(1).animate({width:"50%",height:"50%",top:"0%",left:"0%"},h.params.duration/3).css("z-index",1),
f.children().eq(2).animate({width:"50%",height:"50%",top:"50%",left:"0%"},h.params.duration/3).css("z-index",1),f.children().eq(3).animate({width:"50%",height:"100%",top:"0%",left:"50%"},h.params.duration/3).css("z-index",1)):h.destination_slide==1?(f.children().eq(4).animate({width:"100%",height:"50%",top:"0%",left:"0%"},h.params.duration/3).css("z-index",1).children().animate({backgroundSize:"100%"},h.params.duration/3),f.children().eq(5).animate({width:"50%",height:"50%",top:"50%",left:"0%"},h.params.duration/
3).css("z-index",1),f.children().eq(6).animate({width:"50%",height:"50%",top:"50%",left:"50%"},h.params.duration/3).css("z-index",1)):h.destination_slide==2?(f.children().eq(7).animate({width:"50%",height:"50%",top:"0%",left:"0%"},h.params.duration/3).css("z-index",1).children().animate({backgroundSize:"100%"},h.params.duration/3),f.children().eq(8).animate({width:"50%",height:"50%",top:"0%",left:"50%"},h.params.duration/3).css("z-index",1),f.children().eq(9).animate({width:"100%",height:"50%",top:"50%",
left:"0%"},h.params.duration/3).css("z-index",1)):h.destination_slide==3&&(f.children().eq(10).animate({width:"50%",height:"100%",top:"0%",left:"0%"},h.params.duration/3).css("z-index",1).children().animate({backgroundSize:"100%"},h.params.duration/3),f.children().eq(11).animate({width:"50%",height:"50%",top:"0%",left:"50%"},h.params.duration/3).css("z-index",1),f.children().eq(12).animate({width:"50%",height:"50%",top:"50%",left:"50%"},h.params.duration/3).css("z-index",1))},h.params.duration/3);
setTimeout(function(){g.stop().siblings().remove()},h.params.duration+20)}});
(function(g){function h(p){p=p.split(/\s/);return{X:p[0],Y:p[1]}}g.each(["X","Y"],function(p,r){g.cssHooks["backgroundPosition"+r]={get:function(f,l,q){return h(g.css(f,"backgroundPosition"))[r]},set:function(f,l){var q=h(g.css(f,"backgroundPosition")),y=r==="X";f.style.backgroundPosition=(y?l:q.X)+" "+(y?q.Y:l)}};g.fx.step["backgroundPosition"+r]=function(f){g.cssHooks["backgroundPosition"+r].set(f.elem,f.now+f.unit)}});g.cssHooks.rotate={get:function(p){return(p=g(p).css("transform"))&&p!="none"?
(p=p.split("(")[1].split(")")[0].split(","),Math.round(180/Math.PI*Math.atan2(p[1],p[0]))):0},set:function(p,r){g(p).css("transform","rotate("+parseInt(r)+"deg)")}}})(jQuery);
(function(g,h){g.effects={effect:{}};(function(p,r){function f(n,w,x){var u=T[w.type]||{};if(n==null)return x||!w.def?null:w.def;n=u.floor?~~n:parseFloat(n);return isNaN(n)?w.def:u.mod?(n+u.mod)%u.mod:0>n?0:u.max<n?u.max:n}function l(n){var w=A(),x=w._rgba=[];n=n.toLowerCase();I(C,function(u,B){u=(u=B.re.exec(n))&&B.parse(u);B=B.space||"rgba";if(u)return u=w[B](u),w[H[B].cache]=u[H[B].cache],x=w._rgba=u._rgba,!1});return x.length?(x.join()==="0,0,0,0"&&p.extend(x,L.transparent),w):L[n]}function q(n,
w,x){x=(x+1)%1;return x*6<1?n+(w-n)*x*6:x*2<1?w:x*3<2?n+(w-n)*(2/3-x)*6:n}var y=/^([\-+])=\s*(\d+\.?\d*)/,C=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1],n[2],n[3],n[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(n){return[n[1]*2.55,n[2]*2.55,n[3]*2.55,n[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(n){return[parseInt(n[1],
16),parseInt(n[2],16),parseInt(n[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(n){return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(n){return[n[1],n[2]/100,n[3]/100,n[4]]}}],A=p.Color=function(n,w,x,u){return new p.Color.fn.parse(n,w,x,u)},H={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,
type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},T={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},O=A.support={},U=p("<p>")[0],I=p.each;U.style.cssText="background-color:rgba(1,1,1,.5)";O.rgba=U.style.backgroundColor.indexOf("rgba")>-1;I(H,function(n,w){w.cache="_"+n;w.props.alpha={idx:3,type:"percent",def:1}});A.fn=p.extend(A.prototype,{parse:function(n,w,x,u){if(n===r)return this._rgba=[null,null,
null,null],this;if(n.jquery||n.nodeType)n=p(n).css(w),w=r;var B=this,D=p.type(n),G=this._rgba=[];w!==r&&(n=[n,w,x,u],D="array");if(D==="string")return this.parse(l(n)||L._default);if(D==="array")return I(H.rgba.props,function(J,E){G[E.idx]=f(n[E.idx],E)}),this;if(D==="object")return n instanceof A?I(H,function(J,E){n[E.cache]&&(B[E.cache]=n[E.cache].slice())}):I(H,function(J,E){var F=E.cache;I(E.props,function(M,K){if(!B[F]&&E.to){if(M==="alpha"||n[M]==null)return;B[F]=E.to(B._rgba)}B[F][K.idx]=f(n[M],
K,!0)});B[F]&&p.inArray(null,B[F].slice(0,3))<0&&(B[F][3]=1,E.from&&(B._rgba=E.from(B[F])))}),this},is:function(n){var w=A(n),x=!0,u=this;I(H,function(B,D){var G=w[D.cache];if(G){var J=u[D.cache]||D.to&&D.to(u._rgba)||[];I(D.props,function(E,F){if(G[F.idx]!=null)return x=G[F.idx]===J[F.idx]})}return x});return x},_space:function(){var n=[],w=this;I(H,function(x,u){w[u.cache]&&n.push(x)});return n.pop()},transition:function(n,w){var x=A(n);n=x._space();var u=H[n],B=this.alpha()===0?A("transparent"):
this,D=B[u.cache]||u.to(B._rgba),G=D.slice();x=x[u.cache];I(u.props,function(J,E){J=E.idx;var F=D[J],M=x[J],K=T[E.type]||{};M!==null&&(F===null?G[J]=M:(K.mod&&(M-F>K.mod/2?F+=K.mod:F-M>K.mod/2&&(F-=K.mod)),G[J]=f((M-F)*w+F,E)))});return this[n](G)},blend:function(n){if(this._rgba[3]===1)return this;var w=this._rgba.slice(),x=w.pop(),u=A(n)._rgba;return A(p.map(w,function(B,D){return(1-x)*u[D]+x*B}))},toRgbaString:function(){var n="rgba(",w=p.map(this._rgba,function(x,u){return x==null?u>2?1:0:x});
w[3]===1&&(w.pop(),n="rgb(");return n+w.join()+")"},toHslaString:function(){var n="hsla(",w=p.map(this.hsla(),function(x,u){x==null&&(x=u>2?1:0);u&&u<3&&(x=Math.round(x*100)+"%");return x});w[3]===1&&(w.pop(),n="hsl(");return n+w.join()+")"},toHexString:function(n){var w=this._rgba.slice(),x=w.pop();n&&w.push(~~(x*255));return"#"+p.map(w,function(u){u=(u||0).toString(16);return u.length===1?"0"+u:u}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});A.fn.parse.prototype=
A.fn;H.hsla.to=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var w=n[0]/255,x=n[1]/255,u=n[2]/255;n=n[3];var B=Math.max(w,x,u),D=Math.min(w,x,u),G=B-D,J=B+D,E=J*.5;return[Math.round(D===B?0:w===B?60*(x-u)/G+360:x===B?60*(u-w)/G+120:60*(w-x)/G+240)%360,G===0?0:E<=.5?G/J:G/(2-J),E,n==null?1:n]};H.hsla.from=function(n){if(n[0]==null||n[1]==null||n[2]==null)return[null,null,null,n[3]];var w=n[0]/360,x=n[1],u=n[2];n=n[3];x=u<=.5?u*(1+x):u+x-u*x;u=2*u-x;return[Math.round(q(u,
x,w+1/3)*255),Math.round(q(u,x,w)*255),Math.round(q(u,x,w-1/3)*255),n]};I(H,function(n,w){var x=w.props,u=w.cache,B=w.to,D=w.from;A.fn[n]=function(G){B&&!this[u]&&(this[u]=B(this._rgba));if(G===r)return this[u].slice();var J=p.type(G),E=J==="array"||J==="object"?G:arguments,F=this[u].slice();I(x,function(K,V){K=E[J==="object"?K:V.idx];K==null&&(K=F[V.idx]);F[V.idx]=f(K,V)});if(D){var M=A(D(F));M[u]=F;return M}return A(F)};I(x,function(G,J){A.fn[G]||(A.fn[G]=function(E){var F=p.type(E),M=G==="alpha"?
this._hsla?"hsla":"rgba":n,K=this[M](),V=K[J.idx];if(F==="undefined")return V;F==="function"&&(E=E.call(this,V),F=p.type(E));if(E==null&&J.empty)return this;F==="string"&&(F=y.exec(E))&&(E=V+parseFloat(F[2])*(F[1]==="+"?1:-1));K[J.idx]=E;return this[M](K)})})});A.hook=function(n){n=n.split(" ");I(n,function(w,x){p.cssHooks[x]={set:function(u,B){var D,G="";if(B!=="transparent"&&(p.type(B)!=="string"||(D=l(B)))){B=A(D||B);if(!O.rgba&&B._rgba[3]!==1){for(D=x==="backgroundColor"?u.parentNode:u;(G===""||
G==="transparent")&&D&&D.style;)try{G=p.css(D,"backgroundColor"),D=D.parentNode}catch(J){}B=B.blend(G&&G!=="transparent"?G:"_default")}B=B.toRgbaString()}try{u.style[x]=B}catch(J){}}};p.fx.step[x]=function(u){u.colorInit||(u.start=A(u.elem,x),u.end=A(u.end),u.colorInit=!0);p.cssHooks[x].set(u.elem,u.start.transition(u.end,u.pos))}})};A.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
p.cssHooks.borderColor={expand:function(n){var w={};I(["Top","Right","Bottom","Left"],function(x,u){w["border"+u+"Color"]=n});return w}};var L=p.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){function p(l){var q=
l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,y={};if(q&&q.length&&q[0]&&q[q[0]])for(l=q.length;l--;){var C=q[l];typeof q[C]==="string"&&(y[g.camelCase(C)]=q[C])}else for(C in q)typeof q[C]==="string"&&(y[C]=q[C]);return y}var r=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};g.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],
function(l,q){g.fx.step[q]=function(y){if(y.end!=="none"&&!y.setAttr||y.pos===1&&!y.setAttr)jQuery.style(y.elem,q,y.end),y.setAttr=!0}});g.fn.addBack||(g.fn.addBack=function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))});g.effects.animateClass=function(l,q,y,C){var A=g.speed(q,y,C);return this.queue(function(){var H=g(this),T=H.attr("class")||"",O=A.children?H.find("*").addBack():H;O=O.map(function(){return{el:g(this),start:p(this)}});var U=function(){g.each(r,function(I,
L){if(l[L])H[L+"Class"](l[L])})};U();O=O.map(function(){this.end=p(this.el[0]);var I=this.start,L=this.end,n={},w;for(w in L){var x=L[w];I[w]===x||f[w]||!g.fx.step[w]&&isNaN(parseFloat(x))||(n[w]=x)}this.diff=n;return this});H.attr("class",T);O=O.map(function(){var I=this,L=g.Deferred(),n=g.extend({},A,{queue:!1,complete:function(){L.resolve(I)}});this.el.animate(this.diff,n);return L.promise()});g.when.apply(g,O.get()).done(function(){U();g.each(arguments,function(){var I=this.el;g.each(this.diff,
function(L){I.css(L,"")})});A.complete.call(H[0])})})};g.fn.extend({addClass:function(l){return function(q,y,C,A){return y?g.effects.animateClass.call(this,{add:q},y,C,A):l.apply(this,arguments)}}(g.fn.addClass),removeClass:function(l){return function(q,y,C,A){return arguments.length>1?g.effects.animateClass.call(this,{remove:q},y,C,A):l.apply(this,arguments)}}(g.fn.removeClass),toggleClass:function(l){return function(q,y,C,A,H){return typeof y==="boolean"||y===h?C?g.effects.animateClass.call(this,
y?{add:q}:{remove:q},C,A,H):l.apply(this,arguments):g.effects.animateClass.call(this,{toggle:q},y,C,A)}}(g.fn.toggleClass),switchClass:function(l,q,y,C,A){return g.effects.animateClass.call(this,{add:q,remove:l},y,C,A)}})})();(function(){function p(f,l,q,y){g.isPlainObject(f)&&(l=f,f=f.effect);f={effect:f};l==null&&(l={});g.isFunction(l)&&(y=l,q=null,l={});if(typeof l==="number"||g.fx.speeds[l])y=q,q=l,l={};g.isFunction(q)&&(y=q,q=null);l&&g.extend(f,l);q=q||l.duration;f.duration=g.fx.off?0:typeof q===
"number"?q:q in g.fx.speeds?g.fx.speeds[q]:g.fx.speeds._default;f.complete=y||l.complete;return f}function r(f){return!f||typeof f==="number"||g.fx.speeds[f]||typeof f==="string"&&!g.effects.effect[f]||g.isFunction(f)||typeof f==="object"&&!f.effect?!0:!1}g.extend(g.effects,{version:"1.10.4",save:function(f,l){for(var q=0;q<l.length;q++)l[q]!==null&&f.data("ui-effects-"+l[q],f[0].style[l[q]])},restore:function(f,l){var q;for(q=0;q<l.length;q++)if(l[q]!==null){var y=f.data("ui-effects-"+l[q]);y===
h&&(y="");f.css(l[q],y)}},setMode:function(f,l){l==="toggle"&&(l=f.is(":hidden")?"show":"hide");return l},getBaseline:function(f,l){switch(f[0]){case "top":var q=0;break;case "middle":q=.5;break;case "bottom":q=1;break;default:q=f[0]/l.height}switch(f[1]){case "left":f=0;break;case "center":f=.5;break;case "right":f=1;break;default:f=f[1]/l.width}return{x:f,y:q}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper"))return f.parent();var l={width:f.outerWidth(!0),height:f.outerHeight(!0),
"float":f.css("float")},q=g("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),y={width:f.width(),height:f.height()},C=document.activeElement;try{C.id}catch(A){C=document.body}f.wrap(q);(f[0]===C||g.contains(f[0],C))&&g(C).focus();q=f.parent();f.css("position")==="static"?(q.css({position:"relative"}),f.css({position:"relative"})):(g.extend(l,{position:f.css("position"),zIndex:f.css("z-index")}),g.each(["top","left","bottom",
"right"],function(A,H){l[H]=f.css(H);isNaN(parseInt(l[H],10))&&(l[H]="auto")}),f.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"}));f.css(y);return q.css(l).show()},removeWrapper:function(f){var l=document.activeElement;f.parent().is(".ui-effects-wrapper")&&(f.parent().replaceWith(f),(f[0]===l||g.contains(f[0],l))&&g(l).focus());return f},setTransition:function(f,l,q,y){y=y||{};g.each(l,function(C,A){C=f.cssUnit(A);C[0]>0&&(y[A]=C[0]*q+C[1])});return y}});g.fn.extend({effect:function(){function f(A){function H(){g.isFunction(O)&&
O.call(T[0]);g.isFunction(A)&&A()}var T=g(this),O=l.complete,U=l.mode;(T.is(":hidden")?U==="hide":U==="show")?(T[U](),H()):C.call(T[0],l,H)}var l=p.apply(this,arguments),q=l.mode,y=l.queue,C=g.effects.effect[l.effect];return g.fx.off||!C?q?this[q](l.duration,l.complete):this.each(function(){l.complete&&l.complete.call(this)}):y===!1?this.each(f):this.queue(y||"fx",f)},show:function(f){return function(l){if(r(l))return f.apply(this,arguments);var q=p.apply(this,arguments);q.mode="show";return this.effect.call(this,
q)}}(g.fn.show),hide:function(f){return function(l){if(r(l))return f.apply(this,arguments);var q=p.apply(this,arguments);q.mode="hide";return this.effect.call(this,q)}}(g.fn.hide),toggle:function(f){return function(l){if(r(l)||typeof l==="boolean")return f.apply(this,arguments);var q=p.apply(this,arguments);q.mode="toggle";return this.effect.call(this,q)}}(g.fn.toggle),cssUnit:function(f){var l=this.css(f),q=[];g.each(["em","px","%","pt"],function(y,C){l.indexOf(C)>0&&(q=[parseFloat(l),C])});return q}})})();
(function(){var p={};g.each(["Quad","Cubic","Quart","Quint","Expo"],function(r,f){p[f]=function(l){return Math.pow(l,r+2)}});g.extend(p,{Sine:function(r){return 1-Math.cos(r*Math.PI/2)},Circ:function(r){return 1-Math.sqrt(1-r*r)},Elastic:function(r){return r===0||r===1?r:-Math.pow(2,8*(r-1))*Math.sin(((r-1)*80-7.5)*Math.PI/15)},Back:function(r){return r*r*(3*r-2)},Bounce:function(r){for(var f,l=4;r<((f=Math.pow(2,--l))-1)/11;);return 1/Math.pow(4,3-l)-7.5625*Math.pow((f*3-2)/22-r,2)}});g.each(p,function(r,
f){g.easing["easeIn"+r]=f;g.easing["easeOut"+r]=function(l){return 1-f(1-l)};g.easing["easeInOut"+r]=function(l){return l<.5?f(l*2)/2:1-f(l*-2+2)/2}})})()})(jQuery);
(function(g,h){g.effects.effect.highlight=function(p,r){var f=g(this),l=["backgroundImage","backgroundColor","opacity"],q=g.effects.setMode(f,p.mode||"show"),y={backgroundColor:f.css("backgroundColor")};q==="hide"&&(y.opacity=0);g.effects.save(f,l);f.show().css({backgroundImage:"none",backgroundColor:p.color||"#ffff99"}).animate(y,{queue:!1,duration:p.duration,easing:p.easing,complete:function(){q==="hide"&&f.hide();g.effects.restore(f,l);r()}})}})(jQuery);


;

/* ---------- script.js (site init) ---------- */
var CaptchaCallback = function() {
    grecaptcha.render('g-recaptcha', { 'sitekey': '6Lczt2cpAAAAACR6OMSFpk2lqCsnueiCxbv0vGY7' });
    grecaptcha.render('g-recaptcha2', { 'sitekey': '6Lczt2cpAAAAACR6OMSFpk2lqCsnueiCxbv0vGY7' });
}

fx.auto_init=0;
css.defaults.debug = 0;
(function(){var e=document.getElementById('style');if(!e){e=document.createElement('style');e.id='style';(document.head||document.getElementsByTagName('head')[0]).appendChild(e);}e.textContent=window.__WALLEYE_STYLE_SRC__||'';css.open('#style');})();

$(document).on("css_ready",function(a) {
    if(a.originalEvent.id != "style") return;

    //Mobile Menu Toggle
    $(document).ready(function () {
        fx.init();
        fx.auto_init=1;
        setTimeout(function() { fx.resize(1); },100);

		$("#menu_btn").click(function () {
		    if ($("header").hasClass("active")) {
                setTimeout(function () {
                $("nav").css("visibility", "hidden");
			}, 400);
		} else {
			$("nav").css("visibility", "visible");
		}
		$("header").toggleClass("active");
		if ($("header nav a").hasClass("fade")) {
			setTimeout(function () {
			$("header nav a").each(function (index) {
				var link = $(this);
				setTimeout(function () {
				link.removeClass("fade");
				}, index * 50);
			});
			}, 100);
		} else {
			setTimeout(function () {
			$("header nav a").each(function (index) {
				var link = $(this);
				setTimeout(function () {
				link.addClass("fade");
				}, index * 100);
			});
			}, 100);
		}
		});
    });

    $('#article header').addClass('scroll');
    setTimeout(function(){
        $(".s1 h1, #about .s1 .wrap").addClass("active");
    }, 1000); 

	setTimeout(function(){
        $(".s1 .text-wrap, #home .s1 p").addClass("active");
    }, 2000); 

    $('a[data-scroll]').click(function(e) {
        console.log('test')
		e.preventDefault();
		var target = ( '#' + $(this).data('scroll') );
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top - 120
		}, 500);
	});

	let prevScrollPos = $(window).scrollTop();

    $(window).scroll(function() {
        if ($(window).width() > 1100) {
            let currentScrollPos = $(window).scrollTop();

            if (currentScrollPos < 100 || prevScrollPos > currentScrollPos) {
                $("header").css("top", "0");
            } else {
                $("header").css("top", "-300px"); 
            }

            prevScrollPos = currentScrollPos;
        }
    });

	if (100 < $(window).scrollTop()) {
        $('header').addClass('scroll');
    } else { 
        $('header').removeClass('scroll');
    }

	// Header Scroll
	$(window).scroll(function() {
        if ($('body').attr('id') !== 'article') {
            if (100 < $(window).scrollTop()) {
                $('header').addClass('scroll');
            } else { 
                $('header').removeClass('scroll');
            } 
        }
    });
});

// $(window).scroll(function() {
//     if ($('body').attr('id') !== 'article') {
//         if (10 < $(window).scrollTop()) {
//             $('header').addClass('scroll');
//         } else { 
//             $('header').removeClass('scroll');
//         }
//     }
// }).scroll();

$(document).on("css_ready",function(a) {
    $(document).ready(function () {
        ScrollOut({
            targets: '.fade-in',
            once: true
        });
        ScrollOut({
            targets: '.img-wrap',
            once: true
        });
		ScrollOut({
            targets: '.line-anim',
            once: true
        });
    });

});

// Text animation
$(document).on("css_ready",function(a) {
	document.fonts.ready.then(function () {
		// console.log("fonts loaded");
		function setupSplits() {
			const lines = document.querySelectorAll(".split");
		
			$(".split-line").wrap('<span class="split-parent"></span>');

			lines.forEach(line => {
				line.split = new SplitText(line, { 
				type: "lines",
				linesClass: "split-line"
			});
	
			// Set up the anim
			line.anim = gsap.from(line.split.lines, {
				scrollTrigger: {
					trigger: line,
					// toggleActions: "restart pause resume reverse",
					start: "top 80%",
					// markers: true
				},
				opacity: 0,
				duration: 1, 
				ease: "Power4.easeOut",
				yPercent: 80, 
				stagger: 0.1,
			});
		});
	}

	setupSplits();
	});
});


// Sub Nav (on load)
$(document).on("css_ready",function(a) {
	$(document).ready(function () {
		var sectionId = window.location.hash; 

		if (sectionId) {
			var targetSection = $(sectionId);

			if (targetSection.length) {
				$('html, body').animate({
					scrollTop: targetSection.offset().top - 150
				}, 0);
			}
		}
	});
});

//Pop-up
$(document).ready(function() {
    $(".close-login, .overlay").on("click", function() {
        $("#login-popup, .overlay, #careers-popup").hide();
    });

	$(".terms").on("click", function() {
        $("#terms-popup, .overlay").fadeIn("slow");
    });
	$(".disc").on("click", function() {
        $("#disc-popup, .overlay").fadeIn("slow");
    });
    $(".close-terms, .close-disc, .overlay").on("click", function() {
        $("#terms-popup, #disc-popup, .overlay").hide();
    });
});

;

/* ---------- jquery-ui-for-ce.min.js ---------- */
/*! jQuery UI - v1.13.2 - 2023-10-25
* http://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/draggable.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(b){"use strict";b.ui=b.ui||{};b.ui.version="1.13.2";var o,s=0,r=Array.prototype.hasOwnProperty,a=Array.prototype.slice;b.cleanData=(o=b.cleanData,function(t){for(var e,s,i=0;null!=(s=t[i]);i++)(e=b._data(s,"events"))&&e.remove&&b(s).triggerHandler("remove");o(t)}),b.widget=function(t,s,e){var i,o,n,r={},a=t.split(".")[0],l=a+"-"+(t=t.split(".")[1]);return e||(e=s,s=b.Widget),Array.isArray(e)&&(e=b.extend.apply(null,[{}].concat(e))),b.expr.pseudos[l.toLowerCase()]=function(t){return!!b.data(t,l)},b[a]=b[a]||{},i=b[a][t],o=b[a][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},b.extend(o,i,{version:e.version,_proto:b.extend({},e),_childConstructors:[]}),(n=new s).options=b.widget.extend({},n.options),b.each(e,function(e,i){function o(){return s.prototype[e].apply(this,arguments)}function n(t){return s.prototype[e].apply(this,t)}r[e]="function"==typeof i?function(){var t,e=this._super,s=this._superApply;return this._super=o,this._superApply=n,t=i.apply(this,arguments),this._super=e,this._superApply=s,t}:i}),o.prototype=b.widget.extend(n,{widgetEventPrefix:i&&n.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetFullName:l}),i?(b.each(i._childConstructors,function(t,e){var s=e.prototype;b.widget(s.namespace+"."+s.widgetName,o,e._proto)}),delete i._childConstructors):s._childConstructors.push(o),b.widget.bridge(t,o),o},b.widget.extend=function(t){for(var e,s,i=a.call(arguments,1),o=0,n=i.length;o<n;o++)for(e in i[o])s=i[o][e],r.call(i[o],e)&&void 0!==s&&(b.isPlainObject(s)?t[e]=b.isPlainObject(t[e])?b.widget.extend({},t[e],s):b.widget.extend({},s):t[e]=s);return t},b.widget.bridge=function(n,e){var r=e.prototype.widgetFullName||n;b.fn[n]=function(s){var t="string"==typeof s,i=a.call(arguments,1),o=this;return t?this.length||"instance"!==s?this.each(function(){var t,e=b.data(this,r);return"instance"===s?(o=e,!1):e?"function"!=typeof e[s]||"_"===s.charAt(0)?b.error("no such method '"+s+"' for "+n+" widget instance"):(t=e[s].apply(e,i))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:b.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+s+"'")}):o=void 0:(i.length&&(s=b.widget.extend.apply(null,[s].concat(i))),this.each(function(){var t=b.data(this,r);t?(t.option(s||{}),t._init&&t._init()):b.data(this,r,new e(s,this))})),o}},b.Widget=function(){},b.Widget._childConstructors=[],b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=b(e||this.defaultElement||this)[0],this.element=b(e),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=b(),this.hoverable=b(),this.focusable=b(),this.classesElementLookup={},e!==this&&(b.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=b(e.style?e.ownerDocument:e.document||e),this.window=b(this.document[0].defaultView||this.document[0].parentWindow)),this.options=b.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){var s=this;this._destroy(),b.each(this.classesElementLookup,function(t,e){s._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:b.noop,widget:function(){return this.element},option:function(t,e){var s,i,o,n=t;if(0===arguments.length)return b.widget.extend({},this.options);if("string"==typeof t)if(n={},t=(s=t.split(".")).shift(),s.length){for(i=n[t]=b.widget.extend({},this.options[t]),o=0;o<s.length-1;o++)i[s[o]]=i[s[o]]||{},i=i[s[o]];if(t=s.pop(),1===arguments.length)return void 0===i[t]?null:i[t];i[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];n[t]=e}return this._setOptions(n),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,s,i;for(e in t)i=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&i&&i.length&&(s=b(i.get()),this._removeClass(i,e),s.addClass(this._classes({element:s,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var n=[],r=this;function t(t,e){for(var s,i=0;i<t.length;i++)s=r.classesElementLookup[t[i]]||b(),s=o.add?(function(){var s=[];o.element.each(function(t,e){b.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||s.push(e)}),r._on(b(s),{remove:"_untrackClassesElement"})}(),b(b.uniqueSort(s.get().concat(o.element.get())))):b(s.not(o.element).get()),r.classesElementLookup[t[i]]=s,n.push(t[i]),e&&o.classes[t[i]]&&n.push(o.classes[t[i]])}return(o=b.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(s){var i=this;b.each(i.classesElementLookup,function(t,e){-1!==b.inArray(s.target,e)&&(i.classesElementLookup[t]=b(e.not(s.target).get()))}),this._off(b(s.target))},_removeClass:function(t,e,s){return this._toggleClass(t,e,s,!1)},_addClass:function(t,e,s){return this._toggleClass(t,e,s,!0)},_toggleClass:function(t,e,s,i){var o="string"==typeof t||null===t,s={extra:o?e:s,keys:o?t:e,element:o?this.element:t,add:i="boolean"==typeof i?i:s};return s.element.toggleClass(this._classes(s),i),this},_on:function(o,n,t){var r,a=this;"boolean"!=typeof o&&(t=n,n=o,o=!1),t?(n=r=b(n),this.bindings=this.bindings.add(n)):(t=n,n=this.element,r=this.widget()),b.each(t,function(t,e){function s(){if(o||!0!==a.options.disabled&&!b(this).hasClass("ui-state-disabled"))return("string"==typeof e?a[e]:e).apply(a,arguments)}"string"!=typeof e&&(s.guid=e.guid=e.guid||s.guid||b.guid++);var i=t.match(/^([\w:-]*)\s*(.*)$/),t=i[1]+a.eventNamespace,i=i[2];i?r.on(t,i,s):n.on(t,s)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=b(this.bindings.not(t).get()),this.focusable=b(this.focusable.not(t).get()),this.hoverable=b(this.hoverable.not(t).get())},_delay:function(t,e){var s=this;return setTimeout(function(){return("string"==typeof t?s[t]:t).apply(s,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(b(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(b(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(b(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(b(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,s){var i,o,n=this.options[t];if(s=s||{},(e=b.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(i in o)i in e||(e[i]=o[i]);return this.element.trigger(e,s),!("function"==typeof n&&!1===n.apply(this.element[0],[e].concat(s))||e.isDefaultPrevented())}},b.each({show:"fadeIn",hide:"fadeOut"},function(n,r){b.Widget.prototype["_"+n]=function(e,t,s){var i,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:n;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),i=!b.isEmptyObject(t),t.complete=s,t.delay&&e.delay(t.delay),i&&b.effects&&b.effects.effect[o]?e[n](t):o!==n&&e[o]?e[o](t.duration,t.easing,s):e.queue(function(t){b(this)[n](),s&&s.call(e[0]),t()})}});b.widget,b.extend(b.expr.pseudos,{data:b.expr.createPseudo?b.expr.createPseudo(function(e){return function(t){return!!b.data(t,e)}}):function(t,e,s){return!!b.data(t,s[3])}}),b.fn.scrollParent=function(t){var e=this.css("position"),s="absolute"===e,i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=b(this);return(!s||"static"!==t.css("position"))&&i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:b(this[0].ownerDocument||document)},b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var n=!1;b(document).on("mouseup",function(){n=!1});b.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(t){if(!0===b.data(t.target,e.widgetName+".preventClickEvent"))return b.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!n){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,s=1===t.which,i=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&b(t.target).closest(this.options.cancel).length;return s&&!i&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===b.data(t.target,this.widgetName+".preventClickEvent")&&b.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&b.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,t.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),b.ui.plugin={add:function(t,e,s){var i,o=b.ui[t].prototype;for(i in s)o.plugins[i]=o.plugins[i]||[],o.plugins[i].push([e,s[i]])},call:function(t,e,s,i){var o,n=t.plugins[e];if(n&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,s)}},b.ui.safeActiveElement=function(e){var s;try{s=e.activeElement}catch(t){s=e.body}return s=!(s=s||e.body).nodeName?e.body:s},b.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&b(t).trigger("blur")};b.widget("ui.draggable",b.ui.mouse,{version:"1.13.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<b(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(this._blurActiveElement(t),this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),!0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=b(this);return b("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=b.ui.safeActiveElement(this.document[0]);b(t.target).closest(e).length||b.ui.safeBlur(e)},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),b.ui.ddmanager&&(b.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===b(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),b.ui.ddmanager&&b.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){e=this._uiHash();if(!1===this._trigger("drag",t,e))return this._mouseUp(new b.Event("mouseup",t)),!1;this.position=e.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",b.ui.ddmanager&&b.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,s=!1;return b.ui.ddmanager&&!this.options.dropBehaviour&&(s=b.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||!0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,s)?b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),b.ui.ddmanager&&b.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.trigger("focus"),b.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new b.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!b(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(t){var e=this.options,s="function"==typeof e.helper,t=s?b(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return t.parents("body").length||t.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),s&&t[0]===this.element[0]&&this._setPositionRelative(),t[0]===this.element[0]||/(fixed|absolute)/.test(t.css("position"))||t.css("position","absolute"),t},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),"left"in(t=Array.isArray(t)?{left:+t[0],top:+t[1]||0}:t)&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&b.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),{top:(t=this._isRootNode(this.offsetParent[0])?{top:0,left:0}:t).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,s,i=this.options,o=this.document[0];this.relativeContainer=null,i.containment?"window"!==i.containment?"document"!==i.containment?i.containment.constructor!==Array?("parent"===i.containment&&(i.containment=this.helper[0].parentNode),(s=(e=b(i.containment))[0])&&(t=/(scroll|auto)/.test(e.css("overflow")),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e)):this.containment=i.containment:this.containment=[0,0,b(o).width()-this.helperProportions.width-this.margins.left,(b(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[b(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,b(window).scrollLeft()+b(window).width()-this.helperProportions.width-this.margins.left,b(window).scrollTop()+(b(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e=e||this.position;var s="absolute"===t?1:-1,t=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:t?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:t?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i=this.options,o=this._isRootNode(this.scrollParent[0]),n=t.pageX,r=t.pageY;return o&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(s=this.relativeContainer?(s=this.relativeContainer.offset(),[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):this.containment,t.pageX-this.offset.click.left<s[0]&&(n=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(r=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(n=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(r=s[3]+this.offset.click.top)),i.grid&&(t=i.grid[1]?this.originalPageY+Math.round((r-this.originalPageY)/i.grid[1])*i.grid[1]:this.originalPageY,r=!s||t-this.offset.click.top>=s[1]||t-this.offset.click.top>s[3]?t:t-this.offset.click.top>=s[1]?t-i.grid[1]:t+i.grid[1],t=i.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/i.grid[0])*i.grid[0]:this.originalPageX,n=!s||t-this.offset.click.left>=s[0]||t-this.offset.click.left>s[2]?t:t-this.offset.click.left>=s[0]?t-i.grid[0]:t+i.grid[0]),"y"===i.axis&&(n=this.originalPageX),"x"===i.axis&&(r=this.originalPageY)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:o?0:this.offset.scroll.top),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:o?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,s){return s=s||this._uiHash(),b.ui.plugin.call(this,t,[e,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),b.Widget.prototype._trigger.call(this,t,e,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),b.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,s){var i=b.extend({},t,{item:s.element});s.sortables=[],b(s.options.connectToSortable).each(function(){var t=b(this).sortable("instance");t&&!t.options.disabled&&(s.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,i))})},stop:function(e,t,s){var i=b.extend({},t,{item:s.element});s.cancelHelperRemoval=!1,b.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,i))})},drag:function(s,i,o){b.each(o.sortables,function(){var t=!1,e=this;e.positionAbs=o.positionAbs,e.helperProportions=o.helperProportions,e.offset.click=o.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,b.each(o.sortables,function(){return this.positionAbs=o.positionAbs,this.helperProportions=o.helperProportions,this.offset.click=o.offset.click,t=this!==e&&this._intersectsWith(this.containerCache)&&b.contains(e.element[0],this.element[0])?!1:t})),t?(e.isOver||(e.isOver=1,o._parent=i.helper.parent(),e.currentItem=i.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return i.helper[0]},s.target=e.currentItem[0],e._mouseCapture(s,!0),e._mouseStart(s,!0,!0),e.offset.click.top=o.offset.click.top,e.offset.click.left=o.offset.click.left,e.offset.parent.left-=o.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=o.offset.parent.top-e.offset.parent.top,o._trigger("toSortable",s),o.dropped=e.element,b.each(o.sortables,function(){this.refreshPositions()}),o.currentItem=o.element,e.fromOutside=o),e.currentItem&&(e._mouseDrag(s),i.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",s,e._uiHash(e)),e._mouseStop(s,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),i.helper.appendTo(o._parent),o._refreshOffsets(s),i.position=o._generatePosition(s,!0),o._trigger("fromSortable",s),o.dropped=!1,b.each(o.sortables,function(){this.refreshPositions()}))})}}),b.ui.plugin.add("draggable","cursor",{start:function(t,e,s){var i=b("body"),s=s.options;i.css("cursor")&&(s._cursor=i.css("cursor")),i.css("cursor",s.cursor)},stop:function(t,e,s){s=s.options;s._cursor&&b("body").css("cursor",s._cursor)}}),b.ui.plugin.add("draggable","opacity",{start:function(t,e,s){e=b(e.helper),s=s.options;e.css("opacity")&&(s._opacity=e.css("opacity")),e.css("opacity",s.opacity)},stop:function(t,e,s){s=s.options;s._opacity&&b(e.helper).css("opacity",s._opacity)}}),b.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(t,e,s){var i=s.options,o=!1,n=s.scrollParentNotHidden[0],r=s.document[0];n!==r&&"HTML"!==n.tagName?(i.axis&&"x"===i.axis||(s.overflowOffset.top+n.offsetHeight-t.pageY<i.scrollSensitivity?n.scrollTop=o=n.scrollTop+i.scrollSpeed:t.pageY-s.overflowOffset.top<i.scrollSensitivity&&(n.scrollTop=o=n.scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(s.overflowOffset.left+n.offsetWidth-t.pageX<i.scrollSensitivity?n.scrollLeft=o=n.scrollLeft+i.scrollSpeed:t.pageX-s.overflowOffset.left<i.scrollSensitivity&&(n.scrollLeft=o=n.scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(t.pageY-b(r).scrollTop()<i.scrollSensitivity?o=b(r).scrollTop(b(r).scrollTop()-i.scrollSpeed):b(window).height()-(t.pageY-b(r).scrollTop())<i.scrollSensitivity&&(o=b(r).scrollTop(b(r).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(t.pageX-b(r).scrollLeft()<i.scrollSensitivity?o=b(r).scrollLeft(b(r).scrollLeft()-i.scrollSpeed):b(window).width()-(t.pageX-b(r).scrollLeft())<i.scrollSensitivity&&(o=b(r).scrollLeft(b(r).scrollLeft()+i.scrollSpeed)))),!1!==o&&b.ui.ddmanager&&!i.dropBehaviour&&b.ui.ddmanager.prepareOffsets(s,t)}}),b.ui.plugin.add("draggable","snap",{start:function(t,e,s){var i=s.options;s.snapElements=[],b(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=b(this),e=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,s){for(var i,o,n,r,a,l,h,p,c,f=s.options,u=f.snapTolerance,d=e.offset.left,g=d+s.helperProportions.width,m=e.offset.top,v=m+s.helperProportions.height,_=s.snapElements.length-1;0<=_;_--)l=(a=s.snapElements[_].left-s.margins.left)+s.snapElements[_].width,p=(h=s.snapElements[_].top-s.margins.top)+s.snapElements[_].height,g<a-u||l+u<d||v<h-u||p+u<m||!b.contains(s.snapElements[_].item.ownerDocument,s.snapElements[_].item)?(s.snapElements[_].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,b.extend(s._uiHash(),{snapItem:s.snapElements[_].item})),s.snapElements[_].snapping=!1):("inner"!==f.snapMode&&(i=Math.abs(h-v)<=u,o=Math.abs(p-m)<=u,n=Math.abs(a-g)<=u,r=Math.abs(l-d)<=u,i&&(e.position.top=s._convertPositionTo("relative",{top:h-s.helperProportions.height,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a-s.helperProportions.width}).left),r&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),c=i||o||n||r,"outer"!==f.snapMode&&(i=Math.abs(h-m)<=u,o=Math.abs(p-v)<=u,n=Math.abs(a-d)<=u,r=Math.abs(l-g)<=u,i&&(e.position.top=s._convertPositionTo("relative",{top:h,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p-s.helperProportions.height,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a}).left),r&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[_].snapping&&(i||o||n||r||c)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,b.extend(s._uiHash(),{snapItem:s.snapElements[_].item})),s.snapElements[_].snapping=i||o||n||r||c)}}),b.ui.plugin.add("draggable","stack",{start:function(t,e,s){var i,s=s.options,s=b.makeArray(b(s.stack)).sort(function(t,e){return(parseInt(b(t).css("zIndex"),10)||0)-(parseInt(b(e).css("zIndex"),10)||0)});s.length&&(i=parseInt(b(s[0]).css("zIndex"),10)||0,b(s).each(function(t){b(this).css("zIndex",i+t)}),this.css("zIndex",i+s.length))}}),b.ui.plugin.add("draggable","zIndex",{start:function(t,e,s){e=b(e.helper),s=s.options;e.css("zIndex")&&(s._zIndex=e.css("zIndex")),e.css("zIndex",s.zIndex)},stop:function(t,e,s){s=s.options;s._zIndex&&b(e.helper).css("zIndex",s._zIndex)}});b.ui.draggable});

;

/* ---------- ce.js (onscreen editor - dormant for visitors) ---------- */
/* 
Onscreen Editing Tool version 6.3
created by Aleksey Bobrov
*/
var site_id,epage,ce;
(function(){function g(a){/admin\.aisreporting\.com/.test(a.origin)&&(a.data.type=="css"?($("body > style:last-child").remove(),$("body").append("<style>"+a.data.msg+"</style>")):a.data.type=="style"&&$("head").children("link").each(function(){if($(this).attr("href").indexOf("style.css")>=0)return $(this).attr("href","/c/style.css?R="+Math.random()*100),!1}))}function f(){tinymce.init({extended_valid_elements:"b,span[style],ce[oet],strike",selector:"#content_1",plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen",
"insertdatetime media nonbreaking save table contextmenu directionality","template paste textcolor addimage"],toolbar:"undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor link image addimage print preview code",content_css:"https://admin.aisreporting.com/cgi-bin/util/getcss.pl?SITE_ID="+(site_id?site_id:0),browser_spellcheck:!0,forced_root_block:!1,image_list:"/cgi-bin/util/get-image.pl?ACTION=LISTIMAGE&SITE_ID="+(site_id?site_id:0),
site_id,convert_urls:!1,paste_as_text:!0,init_instance_callback:function(a){tinymce.execCommand("mceFocus",!1,"#content_1")}})}window.top!==window.self&&window.addEventListener("message",g,!1);ce=ce||{kp:!1,path:"/cgi-bin/util/ce/ce.pl",sload:0,content_editor:function(a){var b=$(a.target);b.closest("ce").length&&(b=b.closest("ce"));$("#editor_edit1").length&&$("#editor_edit1").removeAttr("id");b.attr("id","editor_edit1");ce.dtree=b.parents().map(function(){var c="",e="";$(this).attr("class")&&(c=
$(this).attr("class"));$(this).attr("id")&&(e=$(this).attr("id"));var d=this.tagName;c&&(d=d+"(class="+c+")");e&&(d=d+"(id="+e+")");return d}).get().join(",<br>");$("body").append("<div id='editor'><img src='https://admin.aisreporting.com/i/oclose.png' id='oclose'/></div>");$("#editor").draggable({revert:!1,cancel:"textarea, input, .nicEdit-main, img, a, #editor div"});$.ajax({url:ce.path,type:"post",data:"ACTION=VERIFY&SITE_ID="+(site_id?site_id:0),success:function(c){$("#editor").html($("#editor").html()+
c.substring(1));$("#editor textarea[name=etext1]").length&&($("textarea[name=etext1]").text(b.text().replace(/&amp;/g,"&")),$("#content_1").text(b.html()),ce.thtml=b.html().replace(/&amp;/g,"&"),ce.phtml=b.prev().html(),ce.mhtml=b.html().replace(/<b>/g,"").replace(/<\/b>/g,"").replace(/<\/u>/g,"").replace(/<u>/g,"").replace(/<\/i>/g,"").replace(/<i>/g,"").replace(/<\/strike>/g,"").replace(/<strike>/g,"").replace(/&amp;/g,"&").replace(/<br>/g,"").replace(/<br\/>/g,""),ce.phtml||(ce.phtml=b.next().html()),
ce.phtml||(ce.phtml=b.parent().html()),(c=b.attr("oet"))&&$("#editor").attr("oet",c),typeof tinymce=="undefined"?$.ajax({url:"/js/tinymce/tinymce.min.js",dataType:"script",cache:!0,success:function(){tinymce.baseURL=location.protocol+"//"+location.hostname+"/js/tinymce";tinymce.suffix=".min";f()}}):f(),typeof test_change=="function"&&test_change());$("#editor").css({top:$(window).height()/2-250+"px",left:$(window).width()/2-250+"px"})}})}};$(document).ready(function(){(function(a){a=`; ${document.cookie}`.split(`; ${a}=`);
return a.length===2?a.pop().split(";").shift():null})("aiscookie")&&$.ajax({url:ce.path,type:"post",data:"ACTION=CHECKSTATE&SITE_ID="+(site_id?site_id:0),success:function(a){ce.checkres=a;a!=1&&a!=2||!$("ce").length||$("body").append("<div id='ce-highlight'>CE</div>");a==2&&typeof window.establish_connection=="function"&&establish_connection()}});$(document).bind("click",function(a){a.altKey&&ce.kp&&(a.preventDefault(),$(a.target).text().length&&!$("#editor").length&&ce.content_editor(a))});$("body").on("click",
"input[name=editor_update]",function(){$.ajax({url:ce.path,type:"post",cache:!1,data:"SITE_ID="+(site_id?site_id:0)+"&PAGE="+(site_id&&epage?epage:location.pathname)+"&OTEXT="+encodeURIComponent($("textarea[name=etext1]").val())+"&NTEXT="+encodeURIComponent(tinymce.get("content_1").getContent())+"&TREE="+encodeURIComponent(ce.dtree)+"&THTML="+encodeURIComponent(ce.thtml)+"&PHTML="+encodeURIComponent(ce.phtml)+"&MHTML="+encodeURIComponent(ce.mhtml)+"&OET="+$("#editor").attr("oet"),success:function(a){tinymce.EditorManager.execCommand("mceRemoveEditor",
!0,"content_1");$("#editor").remove();confirm(a)&&location.reload()}})});$("body").on("click","input[name=editor_preview]",function(){$(this).val()=="Preview"?($("#editor_edit1").html(tinymce.get("content_1").getContent()),$(this).val("Back to Original")):($("#editor_edit1").html(ce.thtml),$(this).val("Preview"))});$("body").on("click","input[name=editor_close]",function(){typeof tinymce!=="undefined"&&tinymce.EditorManager.execCommand("mceRemoveEditor",!0,"content_1");$("#editor").remove()});$("body").on("click",
"#oclose",function(){typeof tinymce!=="undefined"&&tinymce.EditorManager.execCommand("mceRemoveEditor",!0,"content_1");$(this).parent().remove()});$("body").on("click","input[name=elogout]",function(){cookiePath=";Path=/";document.cookie="aiscookie=0"+cookiePath;location.reload(!1)});$(document).keydown(function(a){a.which==81&&(ce.kp=!0)}).keyup(function(a){a.which==81&&(ce.kp=!1)});$("body").on("click","#ce-highlight",function(){$(this).toggleClass("sel");$("ce").toggleClass("sel")});$("body").on("mouseenter",
"#ce-highlight",function(){$("body").append("<div id='ce-msg'><div id='arrow'></div><div class='body'><span>For Administrators Only</span><br>As an administrator of this website, this widget will assist you with using the Onscreen Editor Tool. By clicking this button, containers of the content will highlight with a green dotted border allowing for you to edit larger chunks of the page. To grab the larger chunks, while pressing &ldquo;ALT Q&rdquo;, click on the top green border. Note that not all pages have this feature enabled. If you have any question please email support@wallevegroup.co.<br>***Normal users do not see this button***</div><div class='mbottom'></div></div>");
$(this).mouseleave(function(){$("#ce-msg").remove()})})})})();


;

/* ---------- orphanKiller.js ---------- */
(function(){var d=function(a){return a=a.replace(/(\s*|(&nbsp;)+)$/,"").replace(/\s+(((?!&nbsp;)[^\s])+)$/,"&nbsp;$1")},e=function(a){if(a.children&&a.children.length)for(var b=0;b<a.children.length;b++)e(a.children[b]);else/noOrphanI/.test(a.className)||(a.innerHTML=d(a.innerHTML))},f=function(){for(var a=document.querySelectorAll(".noOrphan"),b=0;b<a.length;b++)a[b].innerHTML=d(a[b].innerHTML);a=document.querySelectorAll(".noOrphanP");for(b=0;b<a.length;b++)for(var c=0;c<a[b].children.length;c++)/noOrphanI/.test(a[b].children[c].className)||
(a[b].children[c].innerHTML=d(a[b].children[c].innerHTML));a=document.querySelectorAll(".noOrphanC");for(b=0;b<a.length;b++)e(a[b])};"loading"!=document.readyState?f():document.addEventListener("DOMContentLoaded",function(a){f()})})();

;

/* ---------- browserDetect.js ---------- */
/*
browserDetect
Copyright 2019 Alex Bobrov
Version 1.0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
(function(){function f(b){document.body.removeChild(document.getElementsByClassName(b)[0])}var g={c:"https://www.google.com/chrome/",f:"https://www.mozilla.org/en-US/firefox/new/",i:"https://www.microsoft.com/en-us/windows/microsoft-edge",e:"https://www.microsoft.com/en-us/windows/microsoft-edge",o:"https://www.opera.com/download",o_a:"https://www.opera.com/download",s:"https://support.apple.com/downloads/safari",v:"https://vivaldi.com/download/"},h={e:12,i:13,f:45,o:36,o_a:46,s:9,c:49,y:18.11,v:2,
uc:12.12,samsung:5,ios:9},k={i:"Internet Explorer",e:"Edge",f:"Firefox",o:"Opera",o_a:"Opera",s:"Safari",c:"Chrome",a:"Android Browser",y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",samsung:"Samsung Internet",x:"Other",ios:"iOS",silk:"Silk"};window.Browser={get:function(b){function e(a,b){return(new RegExp(b,"i")).test(c)?a:!1}var c=navigator.userAgent.replace("_","."),a={n:"x",v:0,t:"other browser"},d;for(d in b)h[d]=b[d];a.other=e("bot","Chrome-Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor")||
e("TV","SMART-TV|SmartTV")||e("niche browser","Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser")||e("mobile without upgrade path or landing page","cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10");
a.mobile=/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(c);b=[["CriOS.VV","c","ios"],["FxiOS.VV","f","ios"],["Trident.*rv:VV","i","i"],["Trident.VV","io","i"],["UCBrowser.VV","uc","c"],["MSIE.VV","i","i"],["Edge.VV","e","e"],["Vivaldi.VV","v","c"],["Android.*OPR.VV","o_a","c"],["OPR.VV","o","c"],["YaBrowser.VV","y","c"],["SamsungBrowser.VV","samsung","c"],["Silk.VV","silk","c"],["Chrome.VV","c","c"],["Firefox.VV","f","f"],[" OS.VV.*Safari","ios","ios"],["Version.VV.*Safari","s","s"],["Safari.VV",
"so","s"],["Opera.*Version.VV","o"],["Opera.VV","o"]];for(d=0;d<b.length;d++)if(c.match(new RegExp(b[d][0].replace("VV","(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)"),"i"))){a.n=b[d][1];break}a.fullv=RegExp.$1;a.v=parseFloat(a.fullv);/iphone|ipod|ipad|ios/i.test(c)&&(c.match(/OS.(\d+\.?\d+\.?\d*\.?\d*)/i),a.n="ios");-1<c.indexOf("Android")&&"s"===a.n&&(b=parseInt((/WebKit\/([0-9]+)/i.exec(c)||0)[1],10)||2E3,534>=b&&(a.n="a",a.fullv=a.v=b,a.is_insecure=!0));"so"===a.n&&(a.v=a.fullv=4,a.n="s");"io"===a.n&&(a.n=
"i",a.v=6<a.v?11:5<a.v?10:4<a.v?9:3.1<a.v?8:3<a.v?7:9,a.fullv=a.v);a.t=k[a.n];a.update=a.other?!1:a.v<h[a.n]?!0:!1;return this.info=a},info:null,warn:function(b,e){this.info||this.get();if(this.info.update&&(-1==document.cookie.indexOf("browserupdate=true")||0>b)){var c={background:"#0078d7",color:"#fff",font:"Verdana,Arial",autoclose:0};for(a in e)c[a]=e[a];b||(b=60);0<b&&(document.cookie="browserupdate=true; expires="+(new Date((new Date).getTime()+36E3*b)).toGMTString()+"; path=/");var a=document.createElement("div");
a.className="browser-warning";a.innerHTML="<p>Your "+this.info.t+" web browser is out of date. "+(g[this.info.n]?'<a href="'+g[this.info.n]+'" target="_blank">Click here</a> to update':"Update")+' your browser for the best possible security, speed and user experience on this site.</p><a class="wclose" onclick="javascript:Browser.close_warning()">X</a>';document.body.appendChild(a);a=document.createElement("style");a.innerHTML=".browser-warning{z-index:10000;font-family:"+c.font+";max-height:0;overflow:hidden;position:fixed;top:0;left:0;width:100%;padding:0 60px;background-color:"+
c.background+";box-shadow:3px 3px 3px #ccc;color:"+c.color+";z-index:1010;box-sizing:border-box;text-align:center;transition:max-height 0.5s ease-out}.browser-warning p{padding:30px 0;margin:0;}.browser-warning a{color:"+c.color+";}.browser-warning .wclose{position:absolute;right:10px;font-size:40px;top:20px;line-height:40px;text-decoration:none;cursor:pointer;}";a.className="browser-warning-c1";document.body.appendChild(a);setTimeout(function(){var a=document.createElement("style");a.innerHTML=".browser-warning{max-height:200px}";
a.className="browser-warning-c2";document.body.appendChild(a)},1E3);if(c.autoclose){var d=this;setTimeout(function(){d.close_warning()},c.autoclose)}}},close_warning:function(){f("browser-warning");f("browser-warning-c1");f("browser-warning-c2")}}})();

;

/* ---------- scroll-out.js ---------- */
var ScrollOut = (function () {
  'use strict';

  function clamp(v, min, max) {
      return min > v ? min : max < v ? max : v;
  }
  function sign(x) {
      return (+(x > 0) - +(x < 0));
  }
  function round(n) {
      return Math.round(n * 10000) / 10000;
  }

  var cache = {};
  function replacer(match) {
      return '-' + match[0].toLowerCase();
  }
  function hyphenate(value) {
      return cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer));
  }

  /** find elements */
  function $(e, parent) {
      return !e || e.length === 0
          ? // null or empty string returns empty array
              []
          : e.nodeName
              ? // a single element is wrapped in an array
                  [e]
              : // selector and NodeList are converted to Element[]
                  [].slice.call(e[0].nodeName ? e : (parent || document.documentElement).querySelectorAll(e));
  }
  function setAttrs(el, attrs) {
      // tslint:disable-next-line:forin
      for (var key in attrs) {
          if (key.indexOf('_')) {
              el.setAttribute('data-' + hyphenate(key), attrs[key]);
          }
      }
  }
  function setProps(cssProps) {
      return function (el, props) {
          for (var key in props) {
              if (key.indexOf('_') && (cssProps === true || cssProps[key])) {
                  el.style.setProperty('--' + hyphenate(key), round(props[key]));
              }
          }
      };
  }

  var clearTask;
  var subscribers = [];
  function loop() {
      clearTask = 0;
      subscribers.slice().forEach(function (s2) { return s2(); });
      enqueue();
  }
  function enqueue() {
      if (!clearTask && subscribers.length) {
          clearTask = requestAnimationFrame(loop);
      }
  }
  function subscribe(fn) {
      subscribers.push(fn);
      enqueue();
      return function () {
          subscribers = subscribers.filter(function (s) { return s !== fn; });
          if (!subscribers.length && clearTask) {
              cancelAnimationFrame(clearTask);
              clearTask = 0;
          }
      };
  }

  function unwrap(value, el, ctx, doc) {
      return typeof value === 'function' ? value(el, ctx, doc) : value;
  }
  function noop() { }

  /**
   * Creates a new instance of ScrollOut that marks elements in the viewport with
   * an "in" class and marks elements outside of the viewport with an "out"
   */
  // tslint:disable-next-line:no-default-export
  function main (opts) {
      // Apply default options.
      opts = opts || {};
      // Debounce onChange/onHidden/onShown.
      var onChange = opts.onChange || noop;
      var onHidden = opts.onHidden || noop;
      var onShown = opts.onShown || noop;
      var onScroll = opts.onScroll || noop;
      var props = opts.cssProps ? setProps(opts.cssProps) : noop;
      var se = opts.scrollingElement;
      var container = se ? $(se)[0] : window;
      var doc = se ? $(se)[0] : document.documentElement;
      var rootChanged = false;
      var scrollingElementContext = {};
      var elementContextList = [];
      var clientOffsetX, clientOffsety;
      var sub;
      function index() {
          elementContextList = $(opts.targets || '[data-scroll]', $(opts.scope || doc)[0]).map(function (el) { return ({ element: el }); });
      }
      function update() {
          // Calculate position, direction and ratio.
          var clientWidth = doc.clientWidth;
          var clientHeight = doc.clientHeight;
          var scrollDirX = sign(-clientOffsetX + (clientOffsetX = doc.scrollLeft || window.pageXOffset));
          var scrollDirY = sign(-clientOffsety + (clientOffsety = doc.scrollTop || window.pageYOffset));
          var scrollPercentX = doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
          var scrollPercentY = doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
          // Detect if the root context has changed.
          rootChanged =
              rootChanged ||
                  scrollingElementContext.scrollDirX !== scrollDirX ||
                  scrollingElementContext.scrollDirY !== scrollDirY ||
                  scrollingElementContext.scrollPercentX !== scrollPercentX ||
                  scrollingElementContext.scrollPercentY !== scrollPercentY;
          scrollingElementContext.scrollDirX = scrollDirX;
          scrollingElementContext.scrollDirY = scrollDirY;
          scrollingElementContext.scrollPercentX = scrollPercentX;
          scrollingElementContext.scrollPercentY = scrollPercentY;
          var childChanged = false;
          for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
              var ctx = elementContextList[index_1];
              var element = ctx.element;
              // find the distance from the element to the scrolling container
              var target = element;
              var offsetX = 0;
              var offsetY = 0;
              do {
                  offsetX += target.offsetLeft;
                  offsetY += target.offsetTop;
                  target = target.offsetParent;
              } while (target && target !== container);
              // Get element dimensions.
              var elementHeight = element.clientHeight || element.offsetHeight || 0;
              var elementWidth = element.clientWidth || element.offsetWidth || 0;
              // Find visible ratios for each element.
              var visibleX = (clamp(offsetX + elementWidth, clientOffsetX, clientOffsetX + clientWidth) -
                  clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
                  elementWidth;
              var visibleY = (clamp(offsetY + elementHeight, clientOffsety, clientOffsety + clientHeight) -
                  clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
                  elementHeight;
              var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
              var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
              var viewportX = clamp((clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) / (clientWidth / 2), -1, 1);
              var viewportY = clamp((clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) / (clientHeight / 2), -1, 1);
              var visible = void 0;
              if (opts.offset) {
                  visible = unwrap(opts.offset, element, ctx, doc) <= clientOffsety ? 1 : 0;
              }
              else if ((unwrap(opts.threshold, element, ctx, doc) || 0) < visibleX * visibleY) {
                  visible = 1;
              }
              else {
                  visible = 0;
              }
              var changedVisible = ctx.visible !== visible;
              var changed = ctx._changed ||
                  changedVisible ||
                  ctx.visibleX !== visibleX ||
                  ctx.visibleY !== visibleY ||
                  ctx.index !== index_1 ||
                  ctx.elementHeight !== elementHeight ||
                  ctx.elementWidth !== elementWidth ||
                  ctx.offsetX !== offsetX ||
                  ctx.offsetY !== offsetY ||
                  ctx.intersectX !== ctx.intersectX ||
                  ctx.intersectY !== ctx.intersectY ||
                  ctx.viewportX !== viewportX ||
                  ctx.viewportY !== viewportY;
              if (changed) {
                  childChanged = true;
                  ctx._changed = true;
                  ctx._visibleChanged = changedVisible;
                  ctx.visible = visible;
                  ctx.elementHeight = elementHeight;
                  ctx.elementWidth = elementWidth;
                  ctx.index = index_1;
                  ctx.offsetX = offsetX;
                  ctx.offsetY = offsetY;
                  ctx.visibleX = visibleX;
                  ctx.visibleY = visibleY;
                  ctx.intersectX = intersectX;
                  ctx.intersectY = intersectY;
                  ctx.viewportX = viewportX;
                  ctx.viewportY = viewportY;
                  ctx.visible = visible;
              }
          }
          if (!sub && (rootChanged || childChanged)) {
              sub = subscribe(render);
          }
      }
      function render() {
          maybeUnsubscribe();
          // Update root attributes if they have changed.
          if (rootChanged) {
              rootChanged = false;
              setAttrs(doc, {
                  scrollDirX: scrollingElementContext.scrollDirX,
                  scrollDirY: scrollingElementContext.scrollDirY
              });
              props(doc, scrollingElementContext);
              onScroll(doc, scrollingElementContext, elementContextList);
          }
          var len = elementContextList.length;
          for (var x = len - 1; x > -1; x--) {
              var ctx = elementContextList[x];
              var el = ctx.element;
              var visible = ctx.visible;
              var justOnce = el.hasAttribute('scrollout-once') || false; // Once
              if (ctx._changed) {
                  ctx._changed = false;
                  props(el, ctx);
              }
              if (ctx._visibleChanged) {
                  setAttrs(el, { scroll: visible ? 'in' : 'out' });
                  onChange(el, ctx, doc);
                  (visible ? onShown : onHidden)(el, ctx, doc);
              }
              // if this is shown multiple times, keep it in the list
              if (visible && (opts.once || justOnce)) { // or if this element just display it once
                  elementContextList.splice(x, 1);
              }
          }
      }
      function maybeUnsubscribe() {
          if (sub) {
              sub();
              sub = undefined;
          }
      }
      // Run initialize index.
      index();
      update();
      render();
      // Collapses sequential updates into a single update.
      var updateTaskId = 0;
      var onUpdate = function () {
          updateTaskId = updateTaskId || setTimeout(function () {
              updateTaskId = 0;
              update();
          }, 0);
      };
      // Hook up document listeners to automatically detect changes.
      window.addEventListener('resize', onUpdate);
      container.addEventListener('scroll', onUpdate);
      return {
          index: index,
          update: update,
          teardown: function () {
              maybeUnsubscribe();
              window.removeEventListener('resize', onUpdate);
              container.removeEventListener('scroll', onUpdate);
          }
      };
  }

  return main;

}());

