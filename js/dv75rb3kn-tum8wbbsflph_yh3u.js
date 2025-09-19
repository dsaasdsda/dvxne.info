window.CloudflareApps = window.CloudflareApps || {}, CloudflareApps.siteId = "8332b3dd152958e54da3eb48c0ada9a4", CloudflareApps.installs = CloudflareApps.installs || {},
    function() {
        "use strict";
        CloudflareApps.internal = CloudflareApps.internal || {};
        var e = [];
        CloudflareApps.internal.placementErrors = e;
        var t = {};

        function r(r) {
            var n = r.selector + "::" + r.type + "::" + (r.installId || "");
            t[n] || (t[n] = !0, e.push(r))
        }
        var n = {},
            o = !1;
        CloudflareApps.internal.markSelectors = function() {
            o || (! function() {
                var e = window.CloudflareApps.installs;
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var o = e[t].selectors;
                        if (o)
                            for (var a in o)
                                if (o.hasOwnProperty(a)) {
                                    var i = t + "::" + a;
                                    if (!n[i]) {
                                        var s = document.querySelectorAll(o[a]);
                                        s && s.length > 1 ? (r({
                                            type: "init:too-many",
                                            option: a,
                                            selector: o[a],
                                            installId: t
                                        }), n[i] = !0) : s && s.length && (n[i] = !0, s[0].setAttribute("cfapps-selector", o[a]))
                                    }
                                }
                    }
            }(), o = !0, setTimeout((function() {
                o = !1
            })))
        }, CloudflareApps.querySelector = function(e) {
            if ("body" === e || "head" === e) return document[e];
            CloudflareApps.internal.markSelectors();
            var t = document.querySelectorAll('[cfapps-selector="' + e + '"]');
            return t && t.length ? (t.length > 1 && r({
                type: "select:too-many:by-attribute",
                selector: e
            }), t[0]) : (r({
                type: "select:not-found:by-attribute",
                selector: e
            }), (t = document.querySelectorAll(e)) && t.length ? (t.length > 1 && r({
                type: "select:too-many:by-query",
                selector: e
            }), t[0]) : (r({
                type: "select:not-found:by-query",
                selector: e
            }), null))
        }
    }(),
    function() {
        "use strict";
        var e = {};
        CloudflareApps.createElement = function(t, r) {
            t = t || {}, CloudflareApps.internal.markSelectors();
            try {
                var n;
                if (r && r.parentNode) r.cfAppsElementId && (n = e[r.cfAppsElementId]), n ? (r.parentNode.replaceChild(n, r), delete e[r.cfAppsElementId]) : r.parentNode.removeChild(r);
                var o, a = document.createElement("cloudflare-app");
                if (t.pages && t.pages.URLPatterns && !CloudflareApps.matchPage(t.pages.URLPatterns)) return a;
                try {
                    o = CloudflareApps.querySelector(t.selector)
                } catch (e) {}
                if (!o) return a;
                if (!o.parentNode && ("after" === t.method || "before" === t.method || "replace" === t.method)) return a;
                switch (o === document.body && ("after" === t.method ? t.method = "append" : "before" === t.method && (t.method = "prepend")), t.method) {
                    case "prepend":
                        if (o.firstChild) {
                            o.insertBefore(a, o.firstChild);
                            break
                        }
                    case "append":
                        o.appendChild(a);
                        break;
                    case "after":
                        o.nextSibling ? o.parentNode.insertBefore(a, o.nextSibling) : o.parentNode.appendChild(a);
                        break;
                    case "before":
                        o.parentNode.insertBefore(a, o);
                        break;
                    case "replace":
                        try {
                            var i = a.cfAppsElementId = Math.random().toString(36);
                            e[i] = o
                        } catch (e) {}
                        o.parentNode.replaceChild(a, o)
                }
                return a
            } catch (e) {
                "undefined" != typeof console && void 0 !== console.error && console.error("Error creating Cloudflare Apps element", e)
            }
        }
    }(),
    function() {
        "use strict";
        CloudflareApps.matchPage = function(e) {
            if (!e || !e.length) return !0;
            var t = document.location.host + document.location.pathname;
            if (window.CloudflareApps && CloudflareApps.proxy && CloudflareApps.proxy.originalURL) {
                var r = CloudflareApps.proxy.originalURL.parsed;
                t = r.host + r.path
            }
            for (var n = 0; n < e.length; n++) {
                if (new RegExp(e[n], "i").test(t)) return !0
            }
            return !1
        }
    }(), CloudflareApps.installs.mV6Onmq6te2e = {
        appId: "Ek_0U0d0YWhZ",
        scope: {}
    }, CloudflareApps.installs.mV6Onmq6te2e.options = {}, CloudflareApps.installs.owmMju1FTNr9 = {
        appId: "pXXtKhD7IkpD",
        scope: {}
    }, CloudflareApps.installs.owmMju1FTNr9.options = {
        color: "#ED4846",
        horizontalOffset: 0,
        position: "bottom-right",
        verticalOffset: 0,
        zendeskHost: "vanitycheats.zendesk.com"
    }, CloudflareApps.matchPage(CloudflareApps.installs.mV6Onmq6te2e.URLPatterns) && function(e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
        }
        r.m = e, r.c = t, r.p = "", r(0)
    }([function(e, t, r) {
        e.exports = r(1)
    }, function(e, t, r) {
        var n = r(2),
            o = r(3),
            a = r(4),
            i = r(5),
            s = function() {
                return window.location.pathname
            },
            l = [],
            c = function(e) {
                this.backupObject = {}, this.formElement = e, this.formPath = n(e), l.push(this.formPath)
            };
        c.prototype.setElemValue = function(e, t) {
            if (!e.name) return !1;
            this.backupObject[e.name] = t, this.save()
        }, c.prototype.save = function() {
            i.setJSON(s() + this.formPath, this.backupObject)
        }, c.prototype.restore = function() {
            var e = i.getJSON(s() + this.formPath);
            for (var t in this.backupObject = e, e) {
                e[t];
                var r = document.getElementsByName(t)[0];
                r.value || (r.value = e[t])
            }
        }, c.prototype.attachSubmitListener = function() {
            var e = this;
            this.formElement.addEventListener("submit", (function(t) {
                i.clear(s() + e.formPath)
            }))
        }, c.prototype.attachInputListeners = function() {
            var e = document.querySelectorAll(this.formPath + " input,textarea"),
                t = [].slice.call(e),
                r = this;
            t.forEach((function(e) {
                (function(e) {
                    if (-1 !== o.excludedTypes.indexOf(e.type)) return !1;
                    for (var t = 0; t < o.regExps.length; t++)
                        if (o.regExps[t].test(e.name)) return !1;
                    return !0
                })(e) && e.addEventListener("input", (function(e) {
                    r.setElemValue(this, e.target.value)
                }))
            }))
        };
        var p = function() {
            if (!a("localStorage")) return !1;
            var e = 100,
                t = function() {
                    setTimeout((function() {
                        for (var r = 0; r < document.forms.length; r++) {
                            if (-1 !== l.indexOf(n(document.forms[r]))) return !1;
                            var o = new c(document.forms[r]);
                            o.restore(), o.attachSubmitListener(), o.attachInputListeners()
                        }
                        e *= 2, t()
                    }), e)
                };
            t()
        };
        document.addEventListener("DOMContentLoaded", (function(e) {
            p()
        })), "complete" === document.readyState && p()
    }, function(e, t) {
        var r = {
            cssPath: function(e, t) {
                if (e.nodeType !== Node.ELEMENT_NODE) return "";
                for (var n = [], o = e; o;) {
                    var a = r._cssPathStep(o, !!t, o === e);
                    if (!a) break;
                    if (n.push(a), a.optimized) break;
                    o = o.parentNode
                }
                return n.reverse(), n.join(" > ")
            }
        };
        r._cssPathStep = function(e, t, n) {
            if (e.nodeType !== Node.ELEMENT_NODE) return null;
            var o = e.getAttribute("id");
            if (t) {
                if (o) return new r.DOMNodePathStep(c(o), !0);
                var a = e.nodeName.toLowerCase();
                if ("body" === a || "head" === a || "html" === a) return new r.DOMNodePathStep(e.nodeName.toLowerCase(), !0)
            }
            var i = e.nodeName.toLowerCase();
            if (o) return new r.DOMNodePathStep(i.toLowerCase() + c(o), !0);
            var s = e.parentNode;
            if (!s || s.nodeType === Node.DOCUMENT_NODE) return new r.DOMNodePathStep(i.toLowerCase(), !0);

            function l(e) {
                var t = e.getAttribute("class");
                return t ? t.split(/\s+/g).filter(Boolean).map((function(e) {
                    return "$" + e
                })) : []
            }

            function c(e) {
                return "#" + p(e)
            }

            function p(e) {
                if (/^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e)) return e;
                var t = /^(?:[0-9]|-[0-9-]?)/.test(e),
                    r = e.length - 1;
                return e.replace(/./g, (function(e, n) {
                    return t && 0 === n || ! function(e) {
                        return !!/[a-zA-Z0-9_-]/.test(e) || e.charCodeAt(0) >= 160
                    }(e) ? function(e, t) {
                        return "\\" + function(e) {
                            var t = e.charCodeAt(0).toString(16);
                            1 === t.length && (t = "0" + t);
                            return t
                        }(e) + (t ? "" : " ")
                    }(e, n === r) : e
                }))
            }
            for (var u = l(e), d = !1, f = !1, m = -1, h = s.children, v = 0;
                (-1 === m || !f) && v < h.length; ++v) {
                var g = h[v];
                if (g !== e) {
                    if (!f && g.nodeName.toLowerCase() === i.toLowerCase()) {
                        d = !0;
                        var y = u,
                            b = 0;
                        for (var C in y) ++b;
                        if (0 !== b)
                            for (var A = l(g), N = 0; N < A.length; ++N) {
                                var S = A[N];
                                if (!y.indexOf(S) && (delete y[S], !--b)) {
                                    f = !0;
                                    break
                                }
                            } else f = !0
                    }
                } else m = v
            }
            var w = i.toLowerCase();
            if (n && "input" === i.toLowerCase() && e.getAttribute("type") && !e.getAttribute("id") && !e.getAttribute("class") && (w += '[type="' + e.getAttribute("type") + '"]'), f) w += ":nth-child(" + (m + 1) + ")";
            else if (d)
                for (var E in u) w += "." + p(u[E].substr(1));
            return new r.DOMNodePathStep(w, !1)
        }, r.DOMNodePathStep = function(e, t) {
            this.value = e, this.optimized = t || !1
        }, r.DOMNodePathStep.prototype = {
            toString: function() {
                return this.value
            }
        }, e.exports = r.cssPath
    }, function(e, t) {
        var r = [/^((card|cc|acct).?(number|#|no|num)|nummer|credito|numero|número|numéro|カード番号|Номер.*карты|信用卡号|信用卡号码|信用卡卡號|카드)$/, /^(verification|card identification|security code|card code|cvn|cvv|cvc|csc|cvd|cid|ccv)$/, /^(expir|exp.*mo|exp.*date|ccmonth|cardmonth|gueltig|gültig|monat|fecha|date.*exp|scadenza|有効期限|validade|Срок действия карты|月)$/, /^(exp.?year|ablaufdatum|gueltig|gültig|yahr|fecha|scadenza|有効期限|validade|Срок действия карты|年|有效期)$/];
        e.exports = {
            regExps: r,
            excludedTypes: ["hidden", "password", "file", "submit", "reset", "button", "checkbox", "radio"]
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                var t = window[e],
                    r = "__storage_test__";
                return t.setItem(r, r), t.removeItem(r), !0
            } catch (e) {
                return !1
            }
        }
    }, function(e, t) {
        var r = {
            getJSON: function(e, t) {
                var r = localStorage.getItem(e);
                if (r) try {
                    return JSON.parse(r)
                } catch (e) {}
                return t || {}
            },
            setJSON: function(e, t) {
                localStorage.setItem(e, JSON.stringify(t))
            },
            clear: function(e) {
                localStorage.removeItem(e)
            }
        };
        e.exports = r
    }]);
    // CDN 스크립트 로드는 유지
    (function() {
        try {
            var e = document.createElement("script");
            e.src = "/cdn-cgi/apps/body/csp2sSmk75ky-YUt4F2OOaggrp4.js";
            e.onerror = function() { console.log('CDN script failed to load'); };
            document.head.appendChild(e);
        } catch(err) {
            console.log('CDN script error:', err);
        }
    })();