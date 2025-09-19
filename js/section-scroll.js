! function() {
    "use strict";
    var t;
    class n {
        constructor(e, o) {
            return void 0 === this || Object.getPrototypeOf(this) !== n.prototype ? new n(e, o) : ((t = this).version = "1.0", t.container = function(n) {
                if (n) {
                    if ("string" == typeof n) return window.document.documentElement.querySelector(n);
                    if (e = n, "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName) return n;
                    console.log('sectionScroll: invalid container "' + n + '" provided.'), console.log("sectionScroll: falling back to default container.")
                }
                var e;
                return t.config.container
            }(e), t.initialized = !1, o && (t.config.sectionClass = o.sectionClass || t.config.sectionClass, t.config.containerClass = o.containerClass || t.config.containerClass, t.config.navDotContainer = o.navDotContainer || t.config.navDotContainer, t.config.changeOnSectionColor = o.changeOnSectionColor || t.config.changeOnSectionColor), t)
        }
        init() {
            return t && t.container ? function() {
                t.sections = t.container.querySelectorAll(`.${t.config.sectionClass}`), t.activeSectionIndex = 0;
                let n = null;
                t.config.navDotContainer && (n = document.querySelector(t.config.navDotContainer));
                n ? (t.dotNavWrapper = document.createElement("ul"), t.dotNavWrapper.classList.add("nav-dots"), t.sections.forEach((function(n, e) {
                    let o = document.createElement("li");
                    o.classList.add("nav-item");
                    let i = document.createElement("a");
                    i.classList.add("nav-link"), n.getAttribute("id") ? i.setAttribute("href", `#${n.getAttribute("id")}`) : i.addEventListener("click", (function() {
                        window.scrollTo(0, n.offsetTop)
                    })), o.appendChild(i), t.dotNavWrapper.appendChild(o)
                })), t.config.navDotContainer && (n = document.querySelector(t.config.navDotContainer)), null == n && (n = document.createElement("nav")), n.classList.add("nav-dot-container"), n.appendChild(t.dotNavWrapper), document.body.appendChild(n)) : t.config.navDotContainer && console.log(`${t.config.navDotContainer} navDotContainer not found`);
                t.dotNavItems = [], t.dotNavWrapper && (t.dotNavItems = t.dotNavWrapper.querySelectorAll(".nav-item"));
                t.sectionAnchorItems = [], t.sectionAnchorItems = document.querySelectorAll("[data-section-anchor]"), t.activeSection = document.querySelector(".page-main > .section"), t.changeColorItems = document.querySelectorAll(t.config.changeOnSectionColor), t.initialized || (e(), window.addEventListener("scroll", e), t.initialized = !0)
            }() : console.log("sectionScroll: initiation failed."), t
        }
    }

    function e() {
        t.sections.forEach((function(n, e) {
            ! function(t, n = 1 / 3) {
                let e = t.getBoundingClientRect(),
                    o = e.top,
                    i = e.bottom,
                    c = window.innerHeight * n,
                    a = !1;
                return a = o < c && i >= c, a
            }(n) ? n.classList.remove("active"): (t.activeSectionIndex = e, t.activeSection = n, n.classList.contains("active") || n.classList.add("active")), t.changeColorItems.forEach((function(t) {
                (function(t, n) {
                    let e = t.getBoundingClientRect(),
                        o = n.getBoundingClientRect();
                    if (e.top <= o.bottom && o.top <= e.bottom) return !0;
                    return !1
                })(n, t) && (n.classList.contains("content-white") ? t.classList.contains("content-white") || t.classList.add("content-white") : t.classList.remove("content-white"), n.classList.contains("content-dark") ? t.classList.contains("content-dark") || t.classList.add("content-dark") : t.classList.remove("content-dark"))
            })), t.dotNavItems.forEach((function(n, e) {
                e === t.activeSectionIndex ? n.classList.contains("active") || n.classList.add("active") : n.classList.remove("active")
            }))
        })), t.sectionAnchorItems.forEach((function(n, e) {
            t.activeSection.getAttribute("id") === n.getAttribute("data-section-anchor") ? n.classList.contains("active") || n.classList.add("active") : n.classList.remove("active")
        }))
    }
    n.prototype.config = {
        container: document.querySelector(".sections-scroll"),
        sectionClass: "section",
        containerClass: "sections-scroll",
        navDotContainer: ".nav-dot-container",
        changeOnSectionColor: "[data-on-section-color]"
    }, "undefined" != typeof module && module.exports ? module.exports = n : window.SectionScroll = n
}();