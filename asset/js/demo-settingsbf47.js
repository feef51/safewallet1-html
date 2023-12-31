"use strict";

function _createForOfIteratorHelper(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
        if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var o = 0,
                t = function () {};
            return {
                s: t,
                n: function () {
                    return o >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[o++]
                    }
                },
                e: function (e) {
                    throw e
                },
                f: t
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var a, n = !0,
        i = !1;
    return {
        s: function () {
            r = r.call(e)
        },
        n: function () {
            var e = r.next();
            return n = e.done, e
        },
        e: function (e) {
            i = !0, a = e
        },
        f: function () {
            try {
                n || null == r.return || r.return()
            } finally {
                if (i) throw a
            }
        }
    }
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
    return o
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function (e) {
    var t, r, o;
    "function" == typeof define && define.amd && (define(e), t = !0), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = e(), t = !0), t || (r = window.Cookies, (o = window.Cookies = e()).noConflict = function () {
        return window.Cookies = r, o
    })
}(function () {
    function s() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var r, o = arguments[e];
            for (r in o) t[r] = o[r]
        }
        return t
    }

    function l(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function e(d) {
        function i() {}

        function r(e, t, r) {
            if ("undefined" != typeof document) {
                "number" == typeof (r = s({
                    path: "/"
                }, i.defaults, r)).expires && (r.expires = new Date(+new Date + 864e5 * r.expires)), r.expires = r.expires ? r.expires.toUTCString() : "";
                try {
                    var o = JSON.stringify(t);
                    /^[\{\[]/.test(o) && (t = o)
                } catch (e) {}
                t = d.write ? d.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var a, n = "";
                for (a in r) r[a] && (n += "; " + a, !0 !== r[a] && (n += "=" + r[a].split(";")[0]));
                return document.cookie = e + "=" + t + n
            }
        }

        function t(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                    var n = o[a].split("="),
                        i = n.slice(1).join("=");
                    t || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                    try {
                        var s = l(n[0]),
                            i = (d.read || d)(i, s) || l(i);
                        if (t) try {
                            i = JSON.parse(i)
                        } catch (e) {}
                        if (r[s] = i, e === s) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return i.set = r, i.get = function (e) {
            return t(e, !1)
        }, i.getJSON = function (e) {
            return t(e, !0)
        }, i.remove = function (e, t) {
            r(e, "", s(t, {
                expires: -1
            }))
        }, i.defaults = {}, i.withConverter = e, i
    }(function () {})
}),
function (i, s) {
    var d = s("body"),
        l = s("head"),
        u = "#skin-theme",
        c = ".nk-sidebar",
        f = ".nk-header",
        m = ["demo5", "crypto"],
        n = ["style", "aside", "header", "skin", "mode"],
        a = "light-mode",
        p = "dark-mode",
        y = ".nk-opt-item",
        v = ".nk-opt-list",
        h = {
            demo5: {
                aside: "is-default",
                header: "is-light",
                style: "ui-default"
            },
            crypto: {
                aside: "is-default",
                header: "is-light",
                style: "ui-default"
            }
        };
    i.Demo = {
        save: function (e, t) {
            Cookies.set(i.Demo.apps(e), t)
        },
        remove: function (e) {
            Cookies.remove(i.Demo.apps(e))
        },
        current: function (e) {
            return Cookies.get(i.Demo.apps(e))
        },
        apps: function (e) {
            return 'crypto';
        },
        style: function (e, t) {
            var r = {
                mode: a + " " + p,
                style: "ui-default ui-clean ui-shady ui-softy",
                aside: "is-light is-default is-theme is-dark",
                header: "is-light is-default is-theme is-dark"
            };
            return "all" === e ? r[t] || "" : "any" === e ? r.mode + " " + r.style + " " + r.aside + " " + r.header : "body" === e ? r.mode + " " + r.style : "is-default" === e || "ui-default" === e ? "" : e
        },
        skins: function (e) {
            return !e || "default" === e ? "theme" : "theme-" + e
        },
        defs: function (e) {
            var t = i.Demo.apps();
                t = h[t][e] || "";
            return i.Demo.current(e) ? i.Demo.current(e) : t
        },
        apply: function () {
            i.Demo.apps();
            var e, t = _createForOfIteratorHelper(n);
            try {
                for (t.s(); !(e = t.n()).done;) {
                    var r, o, a = e.value;
                    "aside" !== a && "header" !== a && "style" !== a || (r = i.Demo.defs(a), s(o = "aside" === a ? c : "header" === a ? f : d).removeClass(i.Demo.style("all", a)), "ui-default" !== r && "is-default" !== r && s(o).addClass(r)), "mode" === a && i.Demo.update(a, i.Demo.current("mode")), "skin" === a && i.Demo.update(a, i.Demo.current("skin"))
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            i.Demo.update("dir", i.Demo.current("dir"))
        },
        locked: function (e) {
            !0 === e ? (s(y + "[data-key=aside]").add(y + "[data-key=header]").add(y + "[data-key=skin]").addClass("disabled"), i.Demo.update("skin", "default", !0), s(y + "[data-key=skin]").removeClass("active"), s(y + "[data-key=skin][data-update=default]").addClass("active")) : s(y + "[data-key=aside]").add(y + "[data-key=header]").add(y + "[data-key=skin]").removeClass("disabled")
        },
        update: function (e, t, r) {
            var o, a = i.Demo.style(t, e),
                n = i.Demo.style("all", e);
            i.Demo.apps();
            "aside" !== e && "header" !== e || (s(o = "header" == e ? f : c).removeClass(n), s(o).addClass(a)), "mode" === e && (d.removeClass(n).removeAttr("theme"), a === p ? (d.addClass(a).attr("theme", "dark"), i.Demo.locked(!0)) : (d.addClass(a).removeAttr("theme"), i.Demo.locked(!1))), "style" === e && (d.removeClass(n), d.addClass(a)), "skin" === e && (n = i.Demo.skins(a), a = s("#skin-default").attr("href").replace("theme", "skins/" + n), "theme" === n ? s(u).remove() : 0 < s(u).length ? s(u).attr("href", a) : l.append('<link id="skin-theme" rel="stylesheet" href="' + a + '">')), !0 === r && i.Demo.save(e, t)
        },
        reset: function () {
            var t = i.Demo.apps();
            d.removeClass(i.Demo.style("body")).removeAttr("theme"), s(y).removeClass("active"), s(u).remove(), s(c).removeClass(i.Demo.style("all", "aside")), s(f).removeClass(i.Demo.style("all", "header"));
            var e, r = _createForOfIteratorHelper(n);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var o = e.value;
                    s("[data-key='" + o + "']").each(function () {
                        var e = s(this).data("update");
                        "aside" !== o && "header" !== o && "style" !== o || e === h[t][o] && s(this).addClass("active"), "mode" !== o && "skin" !== o || e !== a && "default" !== e || s(this).addClass("active")
                    }), i.Demo.remove(o)
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            s("[data-key='dir']").each(function () {
                s(this).data("update") === i.Demo.current("dir") && s(this).addClass("active")
            }), i.Demo.apply()
        },
        load: function () {
            i.Demo.apply(), 0 < s(y).length && s(y).each(function () {
                var e = s(this).data("update"),
                    t = s(this).data("key");
                "aside" !== t && "header" !== t && "style" !== t || e === i.Demo.defs(t) && (s(this).parent(v).find(y).removeClass("active"), s(this).addClass("active")), "mode" !== t && "skin" !== t && "dir" !== t || e != i.Demo.current("skin") && e != i.Demo.current("mode") && e != i.Demo.current("dir") || (s(this).parent(v).find(y).removeClass("active"), s(this).addClass("active"))
            })
        },
        trigger: function () {
            s(y).on("click", function (e) {
                e.preventDefault();
                var t = s(this),
                    r = t.parent(v),
                    o = t.data("update"),
                    e = t.data("key");
                i.Demo.update(e, o, !0), r.find(y).removeClass("active"), t.addClass("active"), "dir" == e && setTimeout(function () {
                    window.location.reload()
                }, 100)
            }), s(".nk-opt-reset > a").on("click", function (e) {
                e.preventDefault(), i.Demo.reset()
            })
        },
        init: function (e) {
            i.Demo.load(), i.Demo.trigger()
        }
    }, i.coms.docReady.push(i.Demo.init), i.Promo = function () {
        var t = s(".pmo-st"),
            r = s(".pmo-lv"),
            e = s(".pmo-close");
        0 < e.length && e.on("click", function () {
            var e = Cookies.get("cypt-offer");
            return r.removeClass("active"), t.addClass("active"), null == e && Cookies.set("cypt-offer", "true", {
                expires: 1,
                path: ""
            }), !1
        }), s(window).on("load", function () {
            (null == Cookies.get("cypt-offer") ? r : t).addClass("active")
        })
    }, i.coms.docReady.push(i.Promo)
}(NioApp, jQuery);
