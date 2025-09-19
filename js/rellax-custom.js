! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t()
}("undefined" != typeof window ? window : global, (function() {
    var e = function(t, o) {
        "use strict";
        var n = Object.create(e.prototype),
            r = 0,
            i = 0,
            a = 0,
            l = 0,
            s = [],
            p = !0,
            d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            },
            c = null,
            u = !1;
        try {
            var m = Object.defineProperty({}, "passive", {
                get: function() {
                    u = !0
                }
            });
            window.addEventListener("testPassive", null, m), window.removeEventListener("testPassive", null, m)
        } catch (e) {}
        var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
            w = window.transformProp || function() {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t = ["Webkit", "Moz", "ms"];
                    for (var o in t)
                        if (void 0 !== e.style[t[o] + "Transform"]) return t[o] + "Transform"
                }
                return "transform"
            }();
        n.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        }, o && Object.keys(o).forEach((function(e) {
            n.options[e] = o[e]
        })), o && o.breakpoints && function() {
            if (3 === n.options.breakpoints.length && Array.isArray(n.options.breakpoints)) {
                var e, t = !0,
                    o = !0;
                if (n.options.breakpoints.forEach((function(n) {
                        "number" != typeof n && (o = !1), null !== e && n < e && (t = !1), e = n
                    })), t && o) return
            }
            n.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
        }(), t || (t = ".rellax");
        var x = "string" == typeof t ? document.querySelectorAll(t) : [t];
        if (x.length > 0) {
            if (n.elems = x, n.options.wrapper && !n.options.wrapper.nodeType) {
                var v = document.querySelector(n.options.wrapper);
                if (!v) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                n.options.wrapper = v
            }
            var h, b = function() {
                    for (var e = 0; e < s.length; e++) n.elems[e].style.cssText = s[e].style;
                    var t, o;
                    s = [], i = window.innerHeight, l = window.innerWidth, t = l, o = n.options.breakpoints, h = t < o[0] ? "xs" : t >= o[0] && t < o[1] ? "sm" : t >= o[1] && t < o[2] ? "md" : "lg", y(),
                        function() {
                            for (var e = 0; e < n.elems.length; e++) {
                                var t = g(n.elems[e]);
                                s.push(t)
                            }
                        }(), E(), p && (window.addEventListener("resize", b), p = !1, T())
                },
                g = function(e) {
                    var t, o = e.getAttribute("data-rellax-percentage"),
                        r = e.getAttribute("data-rellax-speed"),
                        a = e.getAttribute("data-rellax-xs-speed"),
                        s = e.getAttribute("data-rellax-mobile-speed"),
                        p = e.getAttribute("data-rellax-tablet-speed"),
                        d = e.getAttribute("data-rellax-desktop-speed"),
                        c = e.getAttribute("data-rellax-vertical-speed"),
                        u = e.getAttribute("data-rellax-horizontal-speed"),
                        m = e.getAttribute("data-rellax-vertical-scroll-axis"),
                        f = e.getAttribute("data-rellax-horizontal-scroll-axis"),
                        w = e.getAttribute("data-rellax-zindex") || 0,
                        x = e.getAttribute("data-rellax-min"),
                        v = e.getAttribute("data-rellax-max"),
                        b = e.getAttribute("data-rellax-min-x"),
                        g = e.getAttribute("data-rellax-max-x"),
                        y = e.getAttribute("data-rellax-min-y"),
                        z = e.getAttribute("data-rellax-max-y"),
                        T = !0,
                        E = e.getAttribute("data-rellax-horizontal");
                    a || s || p || d ? t = {
                        xs: a,
                        sm: s,
                        md: p,
                        lg: d
                    } : T = !1;
                    var L = n.options.wrapper ? n.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    n.options.relativeToWrapper && (L = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - n.options.wrapper.offsetTop);
                    var S = n.options.vertical && (o || n.options.center) ? L : 0,
                        Y = n.options.horizontal && (o || n.options.center) ? n.options.wrapper ? n.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                        k = S + e.getBoundingClientRect().top,
                        O = e.clientHeight || e.offsetHeight || e.scrollHeight,
                        X = Y + e.getBoundingClientRect().left,
                        R = e.clientWidth || e.offsetWidth || e.scrollWidth,
                        W = o || (S - k + i) / (O + i),
                        q = o || (Y - X + l) / (R + l);
                    n.options.center && (q = .5, W = .5);
                    var F = T && null !== t[h] ? Number(t[h]) : r || n.options.speed,
                        H = c || n.options.verticalSpeed,
                        C = u || n.options.horizontalSpeed,
                        M = m || n.options.verticalScrollAxis,
                        j = f || n.options.horizontalScrollAxis,
                        N = A(q, W, F, H, C),
                        P = e.style.cssText,
                        B = "",
                        D = /transform\s*:/i.exec(P);
                    if (D) {
                        var G = D.index,
                            I = P.slice(G),
                            J = I.indexOf(";");
                        B = J ? " " + I.slice(11, J).replace(/\s/g, "") : " " + I.slice(11).replace(/\s/g, "")
                    }
                    return {
                        baseX: N.x,
                        baseY: N.y,
                        top: k,
                        left: X,
                        height: O,
                        width: R,
                        speed: F,
                        verticalSpeed: H,
                        horizontalSpeed: C,
                        verticalScrollAxis: M,
                        horizontalScrollAxis: j,
                        style: P,
                        transform: B,
                        zindex: w,
                        min: x,
                        max: v,
                        minX: b,
                        maxX: g,
                        minY: y,
                        maxY: z,
                        dataHorizontal: E
                    }
                },
                y = function() {
                    var e = r,
                        t = a;
                    if (r = n.options.wrapper ? n.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, a = n.options.wrapper ? n.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, n.options.relativeToWrapper) {
                        var o = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                        r = o - n.options.wrapper.offsetTop
                    }
                    return !(e == r || !n.options.vertical) || !(t == a || !n.options.horizontal)
                },
                A = function(e, t, o, r, i) {
                    var a = {},
                        l = (i || o) * (100 * (1 - e)),
                        s = (r || o) * (100 * (1 - t));
                    return a.x = n.options.round ? Math.round(l) : Math.round(100 * l) / 100, a.y = n.options.round ? Math.round(s) : Math.round(100 * s) / 100, a
                },
                z = function() {
                    window.removeEventListener("resize", z), window.removeEventListener("orientationchange", z), (n.options.wrapper ? n.options.wrapper : window).removeEventListener("scroll", z), (n.options.wrapper ? n.options.wrapper : document).removeEventListener("touchmove", z), c = d(T)
                },
                T = function() {
                    y() && !1 === p ? (E(), c = d(T)) : (c = null, window.addEventListener("resize", z), window.addEventListener("orientationchange", z), (n.options.wrapper ? n.options.wrapper : window).addEventListener("scroll", z, !!u && {
                        passive: !0
                    }), (n.options.wrapper ? n.options.wrapper : document).addEventListener("touchmove", z, !!u && {
                        passive: !0
                    }))
                },
                E = function() {
                    for (var e, t = 0; t < n.elems.length; t++) {
                        var o = s[t].verticalScrollAxis.toLowerCase(),
                            p = s[t].horizontalScrollAxis.toLowerCase(),
                            d = -1 != o.indexOf("x") ? r : 0,
                            c = -1 != o.indexOf("y") ? r : 0,
                            u = -1 != p.indexOf("x") ? a : 0,
                            m = (c + (-1 != p.indexOf("y") ? a : 0) - s[t].top + i) / (s[t].height + i),
                            f = (d + u - s[t].left + l) / (s[t].width + l),
                            x = (e = A(f, m, s[t].speed, s[t].verticalSpeed, s[t].horizontalSpeed)).y - s[t].baseY,
                            v = e.x - s[t].baseX;
                        null !== s[t].min && (n.options.vertical && !n.options.horizontal && (x = x <= s[t].min ? s[t].min : x), n.options.horizontal && !n.options.vertical && (v = v <= s[t].min ? s[t].min : v)), null != s[t].minY && (x = x <= s[t].minY ? s[t].minY : x), null != s[t].minX && (v = v <= s[t].minX ? s[t].minX : v), null !== s[t].max && (n.options.vertical && !n.options.horizontal && (x = x >= s[t].max ? s[t].max : x), n.options.horizontal && !n.options.vertical && (v = v >= s[t].max ? s[t].max : v)), null != s[t].maxY && (x = x >= s[t].maxY ? s[t].maxY : x), null != s[t].maxX && (v = v >= s[t].maxX ? s[t].maxX : v);
                        var h = s[t].zindex,
                            b = "";
                        if (null != s[t].dataHorizontal) b = "translate3d(" + (n.options.vertical ? x : "0") + "px," + (n.options.horizontal ? v : "0") + "px," + h + "px) " + s[t].transform;
                        else b = "translate3d(" + (n.options.horizontal ? v : "0") + "px," + (n.options.vertical ? x : "0") + "px," + h + "px) " + s[t].transform;
                        n.elems[t].style[w] = b
                    }
                    n.options.callback(e)
                };
            return n.destroy = function() {
                for (var e = 0; e < n.elems.length; e++) n.elems[e].style.cssText = s[e].style;
                p || (window.removeEventListener("resize", b), p = !0), f(c), c = null
            }, b(), n.refresh = b, n
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    };
    return e
}));