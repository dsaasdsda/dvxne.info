! function() {
    "use strict";
    var e;
    class t {
        constructor(o, i) {
            return void 0 === this || Object.getPrototypeOf(this) !== t.prototype ? new t(o, i) : ((e = this).version = "1.0", e.container = function(t) {
                if (t) {
                    if ("string" == typeof t) return window.document.documentElement.querySelector(t);
                    if (o = t, "object" == typeof window.Node ? o instanceof window.Node : o && "object" == typeof o && "number" == typeof o.nodeType && "string" == typeof o.nodeName) return t;
                    console.log('ScrollSlider: invalid container "' + t + '" provided.'), console.log("ScrollSlider: falling back to default container.")
                }
                var o;
                return e.config.container
            }(o), e.initialized = !1, i && (e.config.speed1 = i.speed1 || e.config.speed1, e.config.speed2 = i.speed1 || e.config.speed2, e.config.speed3 = i.speed3 || e.config.speed3, e.config.scale1 = i.scale1 || e.config.scale1, e.config.scale2 = i.scale2 || e.config.scale2), e)
        }
        init() {
            return e && e.container ? function() {
                e.horizScrolWrap = e.container.querySelector(".scroll-slides"), e.slides = e.horizScrolWrap.querySelectorAll(".scroll-slide"), e.sticky = e.container.querySelector(".scroll-wrapper"), e.animElements = [], e.slides.forEach((function(t) {
                    let o = {};
                    o.slide = t;
                    let i = t.querySelector(".speed-1");
                    i && (o.speed1 = i);
                    let n = t.querySelector(".speed-2");
                    n && (o.speed2 = n);
                    let l = t.querySelector(".speed-3");
                    l && (o.speed3 = l);
                    let s = t.querySelector(".scale-1");
                    s && (o.scale1 = s);
                    let r = t.querySelector(".scale-2");
                    r && (o.scale2 = r), e.animElements.push(o)
                })), n(e.sticky), l(e.animElements, e.sticky.offsetTop), e.initialized || (window.addEventListener("scroll", o), window.addEventListener("resize", i), e.initialized = !0)
            }() : console.log("ScrollSlider: initiation failed."), e
        }
    }

    function o() {
        let t = e.sticky.offsetTop,
            o = window.innerWidth,
            i = e.slides[e.slides.length - 1].offsetWidth,
            n = i + (o - i) / 2;
        t = e.sticky.offsetTop / (e.scrollWidth - 512) * (e.scrollWidth - n), e.container.getBoundingClientRect().top < window.innerHeight && e.container.getBoundingClientRect().bottom > 0 && (e.horizScrolWrap.style.transform = `translateX(${-t}px)`, l(e.animElements, t))
    }

    function i() {
        n()
    }

    function n() {
        e.horizScrolWrap.style.paddingLeft = window.innerWidth / 2 - e.slides[0].offsetWidth / 2 + "px", e.scrollWidth = e.horizScrolWrap.scrollWidth;
        let t = e.scrollWidth;
        e.container.style.height = `${t}px`;
        let o = e.container.querySelector(".scroll-wrapper"),
            i = (window.innerHeight - o.offsetHeight) / 2;
        i = i > 0 ? i : 0, e.sticky.style.top = `${i}px`
    }

    function l(t, o) {
        t.forEach((function(t) {
            let i = t.slide,
                n = o - i.offsetLeft - i.offsetWidth / 2 + window.innerWidth / 2;
            if (t.speed1) {
                let o = -n * e.config.speed1;
                t.speed1.style.transform = `translateX(${o}px)`
            }
            if (t.speed2) {
                let o = n * e.config.speed2;
                t.speed2.style.transform = `translateX(${o}px)`
            }
            if (t.speed3) {
                let o = n * e.config.speed3;
                t.speed3.style.transform = `translateX(${o}px)`
            }
            let l = (o - i.offsetLeft - i.offsetWidth / 2 + window.innerWidth / 2) / (window.innerWidth / 2);
            if (l = Math.pow(l, 2), t.scale1) {
                let o = l * e.config.scale1;
                o = o > 1 ? 1 : o, t.scale1.style.transform = `scale(${1-o})`
            }
            if (t.scale2) {
                let o = l * e.config.scale2;
                o = o > 1 ? 1 : o, t.scale2.style.transform = `scale(${1-o})`
            }
        }))
    }
    t.prototype.config = {
        scale: .9,
        container: document.querySelector(".scroll-slider"),
        speed1: .05,
        speed2: -.1,
        speed3: .1,
        scale1: .15,
        scale2: .2
    }, "undefined" != typeof module && module.exports ? module.exports = t : window.ScrollSlider = t
}();