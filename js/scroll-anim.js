! function() {
    "use strict";
    var e;
    class t {
        constructor(n, a) {
            return void 0 === this || Object.getPrototypeOf(this) !== t.prototype ? new t(n, a) : ((e = this).version = "1.0", e.container = function(t) {
                if (t) {
                    if ("string" == typeof t) return window.document.documentElement.querySelector(t);
                    if (n = t, "object" == typeof window.Node ? n instanceof window.Node : n && "object" == typeof n && "number" == typeof n.nodeType && "string" == typeof n.nodeName) return t;
                    console.log('ScrollAnim: invalid container "' + t + '" provided.'), console.log("ScrollAnim: falling back to default container.")
                }
                var n;
                return e.config.container
            }(n), e.initialized = !1, a && (e.config.containerClass = a.containerClass || e.config.containerClass), e)
        }
        init() {
            return e && e.container ? function() {
                if (window.IntersectionObserver) {
                    let t;
                    t = new IntersectionObserver(n, {
                        root: null,
                        rootMargin: "0px",
                        threshold: [.15, .5, 1]
                    }), e.container.querySelectorAll("[data-anim-visible]").forEach((e => {
                        e.classList.add("anim-ready"), t.observe(e)
                    })), e.container.querySelectorAll('[data-anim-visible="fade"]').forEach((e => {})), e.container.querySelectorAll('[data-anim-visible="by-letter"]').forEach((e => {
                        let t = 0;
                        e.getAttribute("data-anim-start") && (t = parseFloat(e.getAttribute("data-anim-start")));
                        let n = .02;
                        e.getAttribute("data-anim-letter-delay") && (n = parseFloat(e.getAttribute("data-anim-letter-delay")));
                        let a = 0;
                        e.getAttribute("data-anim-line-delay") && (a = parseFloat(e.getAttribute("data-anim-line-delay")));
                        let i = e.childNodes,
                            o = 0,
                            r = 0;
                        i.forEach((e => {
                            if ("BR" === e.tagName);
                            else {
                                let i = "span",
                                    l = "line";
                                "#text" !== e.nodeName && (i = e.nodeName, l = `${l} ${e.className}`);
                                let s = document.createElement(i);
                                s.className += l, e.textContent.replace(/(\r\n|\n|\r|\t)/g, " ").replace(/  +/g, " ").trim().split(" ").forEach((e => {
                                    let i = document.createElement("span");
                                    i.classList.add("word"), (e += " ").split("").forEach((e => {
                                        let l = document.createElement("span");
                                        l.classList.add("letter"), l.innerText = e;
                                        let s = t + o * n + r * a;
                                        l.style.transitionDelay = `${s}s`, i.appendChild(l), o++
                                    })), s.appendChild(i)
                                })), r++, e.replaceWith(s)
                            }
                        }))
                    }))
                } else console.log("Scroll anim disabled : Intersection observer not available on this browser")
            }() : console.log("ScrollAnim: initiation failed."), e
        }
    }

    function n(e, t) {
        e.forEach((e => {
            if (e.isIntersecting) {
                e.target.classList.add("anim-visible");
                let n = 0;
                e.target.getAttribute("data-anim-start") && (n = parseFloat(e.target.getAttribute("data-anim-start")), e.target.style.transitionDelay = `${n}s`), t.unobserve(e.target)
            }
        }))
    }
    t.prototype.config = {
        container: document.querySelector(".scroll-anim"),
        containerClass: "scroll-anim"
    }, "undefined" != typeof module && module.exports ? module.exports = t : window.ScrollAnim = t
}();