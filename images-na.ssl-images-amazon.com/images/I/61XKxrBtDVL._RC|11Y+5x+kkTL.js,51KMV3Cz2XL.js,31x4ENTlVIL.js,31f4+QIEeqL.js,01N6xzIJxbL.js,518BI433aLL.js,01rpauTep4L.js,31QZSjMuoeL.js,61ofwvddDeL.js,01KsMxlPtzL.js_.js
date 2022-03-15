/*
 jQuery JavaScript Library v1.6.4
 http://jquery.com/

 Copyright 2011, John Resig
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 Includes Sizzle.js
 http://sizzlejs.com/
 Copyright 2011, The Dojo Foundation
 Released under the MIT, BSD, and GPL Licenses.

 Amazon elects to use jQuery and Sizzle under the MIT license.

 Date: Mon Sep 12 18:54:48 2011 -0400
 Sizzle CSS Selector Engine
  Copyright 2011, The Dojo Foundation
  Released under the MIT, BSD, and GPL Licenses.
  More information: http://sizzlejs.com/
*/
(function(N) {
    var r = window.AmazonUIPageJS || window.P,
        p = r._namespace || r.attributeErrors,
        C = p ? p("AmazonUIjQuery", "AmazonUI") : r;
    C.guardFatal ? C.guardFatal(N)(C, window) : C.execute(function() {
        N(C, window)
    })
})(function(N, r, p) {
    r.navigator && r.navigator.userAgent && N.declare("jQuery", function() {
        function C(a, b, d) {
            if (d === p && 1 === a.nodeType)
                if (d = "data-" + b.replace(gb, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNaN(d) ? hb.test(d) ? c.parseJSON(d) : d :
                            parseFloat(d)
                    } catch (e) {}
                    c.data(a, b, d)
                } else d = p;
            return d
        }

        function ha(a) {
            for (var b in a)
                if ("toJSON" !== b) return !1;
            return !0
        }

        function va(a, b, d) {
            var e = b + "defer",
                f = b + "queue",
                g = b + "mark",
                h = c.data(a, e, p, !0);
            !h || "queue" !== d && c.data(a, f, p, !0) || "mark" !== d && c.data(a, g, p, !0) || setTimeout(function() {
                c.data(a, f, p, !0) || c.data(a, g, p, !0) || (c.removeData(a, e, !0), h.resolve())
            }, 0)
        }

        function H() {
            return !1
        }

        function W() {
            return !0
        }

        function wa(a, b, d) {
            var e = c.extend({}, d[0]);
            e.type = a;
            e.originalEvent = {};
            e.liveFired = p;
            c.event.handle.call(b,
                e);
            e.isDefaultPrevented() && d[0].preventDefault()
        }

        function ib(a) {
            var b, d, e, f, g = [];
            var h = [];
            var k = c._data(this, "events");
            if (a.liveFired !== this && k && k.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
                a.namespace && (f = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
                a.liveFired = this;
                var l = k.live.slice(0);
                for (d = 0; d < l.length; d++) k = l[d], k.origType.replace(ia, "") === a.type ? h.push(k.selector) : l.splice(d--, 1);
                h = c(a.target).closest(h, a.currentTarget);
                var m = 0;
                for (e = h.length; m <
                    e; m++) {
                    var n = h[m];
                    for (d = 0; d < l.length; d++)
                        if (k = l[d], n.selector === k.selector && (!f || f.test(k.namespace)) && !n.elem.disabled) {
                            var p = n.elem;
                            var q = null;
                            if ("mouseenter" === k.preType || "mouseleave" === k.preType) a.type = k.preType, (q = c(a.relatedTarget).closest(k.selector)[0]) && c.contains(p, q) && (q = p);
                            q && q === p || g.push({
                                elem: p,
                                handleObj: k,
                                level: n.level
                            })
                        }
                }
                m = 0;
                for (e = g.length; m < e; m++) {
                    h = g[m];
                    if (r && h.level > r) break;
                    a.currentTarget = h.elem;
                    a.data = h.handleObj.data;
                    a.handleObj = h.handleObj;
                    f = h.handleObj.origHandler.apply(h.elem,
                        arguments);
                    if (!1 === f || a.isPropagationStopped()) {
                        var r = h.level;
                        !1 === f && (b = !1);
                        if (a.isImmediatePropagationStopped()) break
                    }
                }
                return b
            }
        }

        function X(a, b) {
            return (a && "*" !== a ? a + "." : "") + b.replace(jb, "`").replace(kb, "\x26")
        }

        function xa(a) {
            return !a || !a.parentNode || 11 === a.parentNode.nodeType
        }

        function ya(a, b, d) {
            b = b || 0;
            if (c.isFunction(b)) return c.grep(a, function(a, c) {
                return !!b.call(a, c, a) === d
            });
            if (b.nodeType) return c.grep(a, function(a, c) {
                return a === b === d
            });
            if ("string" === typeof b) {
                var e = c.grep(a, function(a) {
                    return 1 ===
                        a.nodeType
                });
                if (lb.test(b)) return c.filter(b, e, !d);
                b = c.filter(b, e)
            }
            return c.grep(a, function(a, e) {
                return 0 <= c.inArray(a, b) === d
            })
        }

        function mb(a, b) {
            return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function za(a, b) {
            if (1 === b.nodeType && c.hasData(a)) {
                var d = c.expando,
                    e = c.data(a),
                    f = c.data(b, e);
                if (e = e[d])
                    if (a = e.events, f = f[d] = c.extend({}, e), a) {
                        delete f.handle;
                        f.events = {};
                        for (var g in a)
                            for (d = 0, e = a[g].length; d < e; d++) c.event.add(b, g + (a[g][d].namespace ?
                                "." : "") + a[g][d].namespace, a[g][d], a[g][d].data)
                    }
            }
        }

        function Aa(a, b) {
            if (1 === b.nodeType) {
                b.clearAttributes && b.clearAttributes();
                b.mergeAttributes && b.mergeAttributes(a);
                var d = b.nodeName.toLowerCase();
                if ("object" === d) b.outerHTML = a.outerHTML;
                else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
                else if ("option" === d) b.selected = a.defaultSelected;
                else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
                b.removeAttribute(c.expando)
            }
        }

        function Y(a) {
            return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
        }

        function Ba(a) {
            if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
        }

        function Ca(a) {
            c.nodeName(a, "input") ? Ba(a) : "getElementsByTagName" in a && c.grep(a.getElementsByTagName("input"), Ba)
        }

        function nb(a, b) {
            b.src ? c.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : c.globalEval((b.text || b.textContent || b.innerHTML || "").replace(ob, "/*$0*/"));
            b.parentNode && b.parentNode.removeChild(b)
        }

        function Da(a, b, d) {
            var e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = "width" === b ? pb : qb;
            if (0 < e) return "border" !== d && c.each(f, function() {
                d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
                e = "margin" === d ? e + (parseFloat(c.css(a, d + this)) || 0) : e - (parseFloat(c.css(a, "border" + this + "Width")) || 0)
            }), e + "px";
            e = U(a, b, b);
            if (0 > e || null == e) e = a.style[b] || 0;
            e = parseFloat(e) || 0;
            d && c.each(f, function() {
                e += parseFloat(c.css(a, "padding" + this)) || 0;
                "padding" !== d && (e += parseFloat(c.css(a, "border" + this + "Width")) || 0);
                "margin" === d && (e += parseFloat(c.css(a,
                    d + this)) || 0)
            });
            return e + "px"
        }

        function Ea(a) {
            return function(b, d) {
                "string" !== typeof b && (d = b, b = "*");
                if (c.isFunction(d)) {
                    b = b.toLowerCase().split(Fa);
                    for (var e = 0, f = b.length, g, h; e < f; e++) g = b[e], (h = /^\+/.test(g)) && (g = g.substr(1) || "*"), g = a[g] = a[g] || [], g[h ? "unshift" : "push"](d)
                }
            }
        }

        function Z(a, b, c, e, f, g) {
            f = f || b.dataTypes[0];
            g = g || {};
            g[f] = !0;
            f = a[f];
            for (var d = 0, k = f ? f.length : 0, l = a === ja, m; d < k && (l || !m); d++) m = f[d](b, c, e), "string" === typeof m && (!l || g[m] ? m = p : (b.dataTypes.unshift(m), m = Z(a, b, c, e, m, g)));
            !l && m || g["*"] || (m =
                Z(a, b, c, e, "*", g));
            return m
        }

        function Ga(a, b) {
            var d, e, f = c.ajaxSettings.flatOptions || {};
            for (d in b) b[d] !== p && ((f[d] ? a : e || (e = {}))[d] = b[d]);
            e && c.extend(!0, a, e)
        }

        function ka(a, b, d, e) {
            if (c.isArray(b)) c.each(b, function(b, f) {
                d || rb.test(a) ? e(a, f) : ka(a + "[" + ("object" === typeof f || c.isArray(f) ? b : "") + "]", f, d, e)
            });
            else if (d || null == b || "object" !== typeof b) e(a, b);
            else
                for (var f in b) ka(a + "[" + f + "]", b[f], d, e)
        }

        function Ha() {
            try {
                return new r.XMLHttpRequest
            } catch (a) {}
        }

        function Ia() {
            setTimeout(sb, 0);
            return aa = c.now()
        }

        function sb() {
            aa =
                p
        }

        function O(a, b) {
            var d = {};
            c.each(Ja.concat.apply([], Ja.slice(0, b)), function() {
                d[this] = a
            });
            return d
        }

        function Ka(a) {
            if (!la[a]) {
                var b = q.body,
                    d = c("\x3c" + a + "\x3e").appendTo(b),
                    e = d.css("display");
                d.remove();
                if ("none" === e || "" === e) F || (F = q.createElement("iframe"), F.frameBorder = F.width = F.height = 0), b.appendChild(F), J && F.createElement || (J = (F.contentWindow || F.contentDocument).document, J.write((c.support.boxModel ? "\x3c!doctype html\x3e" : "") + "\x3chtml\x3e\x3cbody\x3e"), J.close()), d = J.createElement(a), J.body.appendChild(d),
                    e = c.css(d, "display"), b.removeChild(F);
                la[a] = e
            }
            return la[a]
        }

        function ma(a) {
            return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var q = r.document,
            tb = r.navigator,
            ub = r.location,
            c = function() {
                function a() {
                    if (!b.isReady) {
                        try {
                            q.documentElement.doScroll("left")
                        } catch (gc) {
                            setTimeout(a, 1);
                            return
                        }
                        b.ready()
                    }
                }
                var b = function(a, c) {
                        return new b.fn.init(a, c, vb)
                    },
                    c = r.jQuery,
                    e = r.$,
                    f = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    g = /\S/,
                    h = /^\s+/,
                    k = /\s+$/,
                    l = /\d/,
                    m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    n = /^[\],:{}\s]*$/,
                    T = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    G = /(?:^|:|,)(?:\s*\[)+/g,
                    x = /(webkit)[ \/]([\w.]+)/,
                    E = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    w = /(msie) ([\w.]+)/,
                    v = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    t = /-([a-z]|[0-9])/ig,
                    y = /^-ms-/,
                    A = function(a, b) {
                        return (b + "").toUpperCase()
                    },
                    u = tb.userAgent,
                    Q, K, wb = Object.prototype.toString,
                    ba = Object.prototype.hasOwnProperty,
                    na = Array.prototype.push,
                    V = Array.prototype.slice,
                    La = String.prototype.trim,
                    Ma = Array.prototype.indexOf,
                    B = {};
                b.fn = b.prototype = {
                    constructor: b,
                    init: function(a, c, d) {
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                        if ("body" === a && !c && q.body) return this.context = q, this[0] = q.body, this.selector = a, this.length = 1, this;
                        if ("string" === typeof a) {
                            var e = "\x3c" === a.charAt(0) && "\x3e" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : f.exec(a);
                            if (!e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                            if (e[1]) return d = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : q, (a =
                                m.exec(a)) ? b.isPlainObject(c) ? (a = [q.createElement(a[1])], b.fn.attr.call(a, c, !0)) : a = [d.createElement(a[1])] : (a = b.buildFragment([e[1]], [d]), a = (a.cacheable ? b.clone(a.fragment) : a.fragment).childNodes), b.merge(this, a);
                            if ((c = q.getElementById(e[2])) && c.parentNode) {
                                if (c.id !== e[2]) return d.find(a);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = q;
                            this.selector = a;
                            return this
                        }
                        if (b.isFunction(a)) return d.ready(a);
                        a.selector !== p && (this.selector = a.selector, this.context = a.context);
                        return b.makeArray(a, this)
                    },
                    selector: "",
                    jquery: "1.6.4",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return V.call(this, 0)
                    },
                    get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                    },
                    pushStack: function(a, c, d) {
                        var e = this.constructor();
                        b.isArray(a) ? na.apply(e, a) : b.merge(e, a);
                        e.prevObject = this;
                        e.context = this.context;
                        "find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
                        return e
                    },
                    each: function(a, c) {
                        return b.each(this, a, c)
                    },
                    ready: function(a) {
                        b.bindReady();
                        Q.done(a);
                        return this
                    },
                    eq: function(a) {
                        return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(b.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: na,
                    sort: [].sort,
                    splice: [].splice
                };
                b.fn.init.prototype = b.fn;
                b.extend = b.fn.extend = function() {
                    var a,
                        c, d, e = arguments[0] || {},
                        f = 1,
                        g = arguments.length,
                        t = !1;
                    "boolean" === typeof e && (t = e, e = arguments[1] || {}, f = 2);
                    "object" === typeof e || b.isFunction(e) || (e = {});
                    g === f && (e = this, --f);
                    for (; f < g; f++)
                        if (null != (a = arguments[f]))
                            for (c in a) {
                                var h = e[c];
                                var y = a[c];
                                "__proto__" !== c && e !== y && (t && y && (b.isPlainObject(y) || (d = b.isArray(y))) ? (d ? (d = !1, h = h && b.isArray(h) ? h : []) : h = h && b.isPlainObject(h) ? h : {}, e[c] = b.extend(t, h, y)) : y !== p && (e[c] = y))
                            }
                    return e
                };
                b.extend({
                    noConflict: function(a) {
                        r.$ === b && (r.$ = e);
                        a && r.jQuery === b && (r.jQuery = c);
                        return b
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? b.readyWait++ : b.ready(!0)
                    },
                    ready: function(a) {
                        if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
                            if (!q.body) return setTimeout(b.ready, 1);
                            b.isReady = !0;
                            !0 !== a && 0 < --b.readyWait || (Q.resolveWith(q, [b]), b.fn.trigger && b(q).trigger("ready").unbind("ready"))
                        }
                    },
                    bindReady: function() {
                        if (!Q) {
                            Q = b._Deferred();
                            if ("complete" === q.readyState) return setTimeout(b.ready, 1);
                            if (q.addEventListener) q.addEventListener("DOMContentLoaded", K, !1), r.addEventListener("load", b.ready, !1);
                            else if (q.attachEvent) {
                                q.attachEvent("onreadystatechange", K);
                                r.attachEvent("onload", b.ready);
                                var c = !1;
                                try {
                                    c = null == r.frameElement
                                } catch (hc) {}
                                q.documentElement.doScroll && c && a()
                            }
                        }
                    },
                    isFunction: function(a) {
                        return "function" === b.type(a)
                    },
                    isArray: Array.isArray || function(a) {
                        return "array" === b.type(a)
                    },
                    isWindow: function(a) {
                        return a && "object" === typeof a && "setInterval" in a
                    },
                    isNaN: function(a) {
                        return null == a || !l.test(a) || isNaN(a)
                    },
                    type: function(a) {
                        return null == a ? String(a) : B[wb.call(a)] || "object"
                    },
                    isPlainObject: function(a) {
                        if (!a ||
                            "object" !== b.type(a) || a.nodeType || b.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (ic) {
                            return !1
                        }
                        for (var c in a);
                        return c === p || ba.call(a, c)
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0
                    },
                    error: function(a) {
                        throw a;
                    },
                    parseJSON: function(a) {
                        if ("string" !== typeof a || !a) return null;
                        a = b.trim(a);
                        if (r.JSON && r.JSON.parse) return r.JSON.parse(a);
                        if (n.test(a.replace(T, "@").replace(z, "]").replace(G, ""))) return (new Function("return " +
                            a))();
                        b.error("Invalid JSON: " + a)
                    },
                    parseXML: function(a) {
                        try {
                            if (r.DOMParser) {
                                var c = new DOMParser;
                                var d = c.parseFromString(a, "text/xml")
                            } else d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a)
                        } catch (D) {
                            d = p
                        }
                        d && d.documentElement && !d.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + a);
                        return d
                    },
                    noop: function() {},
                    globalEval: function(a) {
                        a && g.test(a) && (r.execScript || function(a) {
                            r.eval.call(r, a)
                        })(a)
                    },
                    camelCase: function(a) {
                        return a.replace(y, "ms-").replace(t, A)
                    },
                    nodeName: function(a,
                        b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            t = g === p || b.isFunction(a);
                        if (d)
                            if (t)
                                for (e in a) {
                                    if (!1 === c.apply(a[e], d)) break
                                } else
                                    for (; f < g && !1 !== c.apply(a[f++], d););
                            else if (t)
                            for (e in a) {
                                if (!1 === c.call(a[e], e, a[e])) break
                            } else
                                for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                        return a
                    },
                    trim: La ? function(a) {
                        return null == a ? "" : La.call(a)
                    } : function(a) {
                        return null == a ? "" : a.toString().replace(h, "").replace(k, "")
                    },
                    makeArray: function(a, c) {
                        c = c || [];
                        if (null != a) {
                            var d =
                                b.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || b.isWindow(a) ? na.call(c, a) : b.merge(c, a)
                        }
                        return c
                    },
                    inArray: function(a, b) {
                        if (!b) return -1;
                        if (Ma) return Ma.call(b, a);
                        for (var c = 0, d = b.length; c < d; c++)
                            if (b[c] === a) return c;
                        return -1
                    },
                    merge: function(a, b) {
                        var c = a.length,
                            d = 0;
                        if ("number" === typeof b.length)
                            for (var e = b.length; d < e; d++) a[c++] = b[d];
                        else
                            for (; b[d] !== p;) a[c++] = b[d++];
                        a.length = c;
                        return a
                    },
                    grep: function(a, b, c) {
                        var d = [];
                        c = !!c;
                        for (var e = 0, f = a.length; e < f; e++) {
                            var g = !!b(a[e], e);
                            c !== g &&
                                d.push(a[e])
                        }
                        return d
                    },
                    map: function(a, c, d) {
                        var e, f = [],
                            g = 0,
                            t = a.length;
                        if (a instanceof b || t !== p && "number" === typeof t && (0 < t && a[0] && a[t - 1] || 0 === t || b.isArray(a)))
                            for (; g < t; g++) {
                                var h = c(a[g], g, d);
                                null != h && (f[f.length] = h)
                            } else
                                for (e in a) h = c(a[e], e, d), null != h && (f[f.length] = h);
                        return f.concat.apply([], f)
                    },
                    guid: 1,
                    proxy: function(a, c) {
                        if ("string" === typeof c) {
                            var d = a[c];
                            c = a;
                            a = d
                        }
                        if (!b.isFunction(a)) return p;
                        var e = V.call(arguments, 2);
                        d = function() {
                            return a.apply(c, e.concat(V.call(arguments)))
                        };
                        d.guid = a.guid = a.guid ||
                            d.guid || b.guid++;
                        return d
                    },
                    access: function(a, c, d, e, f, g) {
                        var t = a.length;
                        if ("object" === typeof c) {
                            for (var h in c) b.access(a, h, c[h], e, f, d);
                            return a
                        }
                        if (d !== p) {
                            e = !g && e && b.isFunction(d);
                            for (h = 0; h < t; h++) f(a[h], c, e ? d.call(a[h], h, f(a[h], c)) : d, g);
                            return a
                        }
                        return t ? f(a[0], c) : p
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(a) {
                        a = a.toLowerCase();
                        a = x.exec(a) || E.exec(a) || w.exec(a) || 0 > a.indexOf("compatible") && v.exec(a) || [];
                        return {
                            browser: a[1] || "",
                            version: a[2] || "0"
                        }
                    },
                    sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b,
                                c)
                        }
                        b.extend(!0, a, this);
                        a.superclass = this;
                        a.fn = a.prototype = this();
                        a.fn.constructor = a;
                        a.sub = this.sub;
                        a.fn.init = function(d, e) {
                            e && e instanceof b && !(e instanceof a) && (e = a(e));
                            return b.fn.init.call(this, d, e, c)
                        };
                        a.fn.init.prototype = a.fn;
                        var c = a(q);
                        return a
                    },
                    browser: {}
                });
                b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                    B["[object " + b + "]"] = b.toLowerCase()
                });
                u = b.uaMatch(u);
                u.browser && (b.browser[u.browser] = !0, b.browser.version = u.version);
                b.browser.webkit && (b.browser.safari = !0);
                g.test(" ") && (h = /^[\s\xA0]+/, k = /[\s\xA0]+$/);
                var vb = b(q);
                q.addEventListener ? K = function() {
                    q.removeEventListener("DOMContentLoaded", K, !1);
                    b.ready()
                } : q.attachEvent && (K = function() {
                    "complete" === q.readyState && (q.detachEvent("onreadystatechange", K), b.ready())
                });
                return b
            }(),
            oa = "done fail isResolved isRejected promise then always pipe".split(" "),
            Na = [].slice;
        c.extend({
            _Deferred: function() {
                var a = [],
                    b, d, e, f = {
                        done: function() {
                            if (!e) {
                                var d = arguments,
                                    h;
                                if (b) {
                                    var k = b;
                                    b = 0
                                }
                                var l = 0;
                                for (h = d.length; l < h; l++) {
                                    var m =
                                        d[l];
                                    var n = c.type(m);
                                    "array" === n ? f.done.apply(f, m) : "function" === n && a.push(m)
                                }
                                k && f.resolveWith(k[0], k[1])
                            }
                            return this
                        },
                        resolveWith: function(c, f) {
                            if (!e && !b && !d) {
                                f = f || [];
                                d = 1;
                                try {
                                    for (; a[0];) a.shift().apply(c, f)
                                } finally {
                                    b = [c, f], d = 0
                                }
                            }
                            return this
                        },
                        resolve: function() {
                            f.resolveWith(this, arguments);
                            return this
                        },
                        isResolved: function() {
                            return !(!d && !b)
                        },
                        cancel: function() {
                            e = 1;
                            a = [];
                            return this
                        }
                    };
                return f
            },
            Deferred: function(a) {
                var b = c._Deferred(),
                    d = c._Deferred(),
                    e;
                c.extend(b, {
                    then: function(a, c) {
                        b.done(a).fail(c);
                        return this
                    },
                    always: function() {
                        return b.done.apply(b, arguments).fail.apply(this, arguments)
                    },
                    fail: d.done,
                    rejectWith: d.resolveWith,
                    reject: d.resolve,
                    isRejected: d.isResolved,
                    pipe: function(a, d) {
                        return c.Deferred(function(e) {
                            c.each({
                                done: [a, "resolve"],
                                fail: [d, "reject"]
                            }, function(a, d) {
                                var f = d[0],
                                    g = d[1],
                                    h;
                                if (c.isFunction(f)) b[a](function() {
                                    if ((h = f.apply(this, arguments)) && c.isFunction(h.promise)) h.promise().then(e.resolve, e.reject);
                                    else e[g + "With"](this === b ? e : this, [h])
                                });
                                else b[a](e[g])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null ==
                            a) {
                            if (e) return e;
                            e = a = {}
                        }
                        for (var c = oa.length; c--;) a[oa[c]] = b[oa[c]];
                        return a
                    }
                });
                b.done(d.cancel).fail(b.cancel);
                delete b.cancel;
                a && a.call(b, b);
                return b
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        d[a] = 1 < arguments.length ? Na.call(arguments, 0) : b;
                        --g || h.resolveWith(h, Na.call(d, 0))
                    }
                }
                var d = arguments,
                    e = 0,
                    f = d.length,
                    g = f,
                    h = 1 >= f && a && c.isFunction(a.promise) ? a : c.Deferred();
                if (1 < f) {
                    for (; e < f; e++) d[e] && c.isFunction(d[e].promise) ? d[e].promise().then(b(e), h.reject) : --g;
                    g || h.resolveWith(h, d)
                } else h !== a && h.resolveWith(h,
                    f ? [a] : []);
                return h.promise()
            }
        });
        c.support = function() {
            var a = q.createElement("div"),
                b = q.documentElement,
                d;
            a.setAttribute("className", "t");
            a.innerHTML = "   \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a' style\x3d'top:1px;float:left;opacity:.55;'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
            var e = a.getElementsByTagName("*");
            var f = a.getElementsByTagName("a")[0];
            if (!e || !e.length || !f) return {};
            var g = q.createElement("select");
            var h = g.appendChild(q.createElement("option"));
            e = a.getElementsByTagName("input")[0];
            var k = {
                leadingWhitespace: 3 === a.firstChild.nodeType,
                tbody: !a.getElementsByTagName("tbody").length,
                htmlSerialize: !!a.getElementsByTagName("link").length,
                style: /top/.test(f.getAttribute("style")),
                hrefNormalized: "/a" === f.getAttribute("href"),
                opacity: /^0.55$/.test(f.style.opacity),
                cssFloat: !!f.style.cssFloat,
                checkOn: "on" === e.value,
                optSelected: h.selected,
                getSetAttribute: "t" !== a.className,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            };
            e.checked = !0;
            k.noCloneChecked = e.cloneNode(!0).checked;
            g.disabled = !0;
            k.optDisabled = !h.disabled;
            try {
                delete a.test
            } catch (l) {
                k.deleteExpando = !1
            }!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), a.cloneNode(!0).fireEvent("onclick"));
            e = q.createElement("input");
            e.value = "t";
            e.setAttribute("type", "radio");
            k.radioValue = "t" === e.value;
            e.setAttribute("checked", "checked");
            a.appendChild(e);
            f = q.createDocumentFragment();
            f.appendChild(a.firstChild);
            k.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked;
            a.innerHTML = "";
            a.style.width = a.style.paddingLeft = "1px";
            g = q.getElementsByTagName("body")[0];
            f = q.createElement(g ? "div" : "body");
            h = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            g && c.extend(h, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (d in h) f.style[d] = h[d];
            f.appendChild(a);
            b = g || b;
            b.insertBefore(f, b.firstChild);
            k.appendChecked = e.checked;
            c.boxModel = k.boxModel = "CSS1Compat" === q.compatMode;
            "zoom" in a.style &&
                (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "\x3cdiv style\x3d'width:4px;'\x3e\x3c/div\x3e", k.shrinkWrapBlocks = 2 !== a.offsetWidth);
            a.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd style\x3d'padding:0;border:0;display:none'\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
            g = a.getElementsByTagName("td");
            e = 0 === g[0].offsetHeight;
            g[0].style.display = "";
            g[1].style.display = "none";
            k.reliableHiddenOffsets = e && 0 === g[0].offsetHeight;
            a.innerHTML = "";
            q.defaultView && q.defaultView.getComputedStyle && (e = q.createElement("div"), e.style.width = "0", e.style.marginRight = "0", a.appendChild(e), k.reliableMarginRight = 0 === (parseInt((q.defaultView.getComputedStyle(e, null) || {
                marginRight: 0
            }).marginRight, 10) || 0));
            f.innerHTML = "";
            b.removeChild(f);
            if (a.attachEvent)
                for (d in {
                        submit: 1,
                        change: 1,
                        focusin: 1
                    }) b = "on" + d, e = b in a, e || (a.setAttribute(b, "return;"), e = "function" === typeof a[b]), k[d + "Bubbles"] = e;
            f = f = g = h = g = e = a = e = null;
            return k
        }();
        var hb = /^(?:\{.*\}|\[.*\])$/,
            gb = /([A-Z])/g;
        c.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
                return !!a && !ha(a)
            },
            data: function(a, b, d, e) {
                if (c.acceptData(a)) {
                    var f = c.expando,
                        g = "string" === typeof b,
                        h = a.nodeType,
                        k = h ? c.cache : a,
                        l = h ? a[c.expando] : a[c.expando] && c.expando;
                    if (!(!l || e && l && k[l] && !k[l][f]) || !g || d !== p) {
                        l || (h ? a[c.expando] = l = ++c.uuid : l = c.expando);
                        k[l] || (k[l] = {}, h || (k[l].toJSON = c.noop));
                        if ("object" === typeof b || "function" === typeof b) e ? k[l][f] = c.extend(k[l][f], b) : k[l] = c.extend(k[l], b);
                        a = k[l];
                        e && (a[f] || (a[f] = {}), a = a[f]);
                        d !== p && (a[c.camelCase(b)] = d);
                        if ("events" === b && !a[b]) return a[f] && a[f].events;
                        g ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
                        return d
                    }
                }
            },
            removeData: function(a, b, d) {
                if (c.acceptData(a)) {
                    var e, f = c.expando,
                        g = a.nodeType,
                        h = g ? c.cache : a,
                        k = g ? a[c.expando] : c.expando;
                    if (h[k]) {
                        if (b && (e = d ? h[k][f] : h[k]) && (e[b] || (b = c.camelCase(b)), delete e[b], !ha(e)) ||
                            d && (delete h[k][f], !ha(h[k]))) return;
                        b = h[k][f];
                        c.support.deleteExpando || !h.setInterval ? delete h[k] : h[k] = null;
                        b ? (h[k] = {}, g || (h[k].toJSON = c.noop), h[k][f] = b) : g && (c.support.deleteExpando ? delete a[c.expando] : a.removeAttribute ? a.removeAttribute(c.expando) : a[c.expando] = null)
                    }
                }
            },
            _data: function(a, b, d) {
                return c.data(a, b, d, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = c.noData[a.nodeName.toLowerCase()];
                    if (b) return !(!0 === b || a.getAttribute("classid") !== b)
                }
                return !0
            }
        });
        c.fn.extend({
            data: function(a, b) {
                var d = null;
                if ("undefined" === typeof a) {
                    if (this.length && (d = c.data(this[0]), 1 === this[0].nodeType))
                        for (var e = this[0].attributes, f, g = 0, h = e.length; g < h; g++) f = e[g].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), C(this[0], f, d[f]));
                    return d
                }
                if ("object" === typeof a) return this.each(function() {
                    c.data(this, a)
                });
                var k = a.split(".");
                k[1] = k[1] ? "." + k[1] : "";
                return b === p ? (d = this.triggerHandler("getData" + k[1] + "!", [k[0]]), d === p && this.length && (d = c.data(this[0], a), d = C(this[0], a, d)), d === p && k[1] ? this.data(k[0]) : d) : this.each(function() {
                    var d =
                        c(this),
                        e = [k[0], b];
                    d.triggerHandler("setData" + k[1] + "!", e);
                    c.data(this, a, b);
                    d.triggerHandler("changeData" + k[1] + "!", e)
                })
            },
            removeData: function(a) {
                return this.each(function() {
                    c.removeData(this, a)
                })
            }
        });
        c.extend({
            _mark: function(a, b) {
                a && (b = (b || "fx") + "mark", c.data(a, b, (c.data(a, b, p, !0) || 0) + 1, !0))
            },
            _unmark: function(a, b, d) {
                !0 !== a && (d = b, b = a, a = !1);
                if (b) {
                    d = d || "fx";
                    var e = d + "mark";
                    (a = a ? 0 : (c.data(b, e, p, !0) || 1) - 1) ? c.data(b, e, a, !0): (c.removeData(b, e, !0), va(b, d, "mark"))
                }
            },
            queue: function(a, b, d) {
                if (a) {
                    b = (b || "fx") + "queue";
                    var e = c.data(a, b, p, !0);
                    d && (!e || c.isArray(d) ? e = c.data(a, b, c.makeArray(d), !0) : e.push(d));
                    return e || []
                }
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var d = c.queue(a, b),
                    e = d.shift();
                "inprogress" === e && (e = d.shift());
                e && ("fx" === b && d.unshift("inprogress"), e.call(a, function() {
                    c.dequeue(a, b)
                }));
                d.length || (c.removeData(a, b + "queue", !0), va(a, b, "queue"))
            }
        });
        c.fn.extend({
            queue: function(a, b) {
                "string" !== typeof a && (b = a, a = "fx");
                return b === p ? c.queue(this[0], a) : this.each(function() {
                    var d = c.queue(this, a, b);
                    "fx" === a && "inprogress" !==
                        d[0] && c.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    c.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                a = c.fx ? c.fx.speeds[a] || a : a;
                b = b || "fx";
                return this.queue(b, function() {
                    var d = this;
                    setTimeout(function() {
                        c.dequeue(d, b)
                    }, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                function d() {
                    --g || e.resolveWith(f, [f])
                }
                "string" !== typeof a && (a = p);
                a = a || "fx";
                var e = c.Deferred(),
                    f = this;
                b = f.length;
                var g = 1,
                    h = a + "defer",
                    k = a + "queue";
                a += "mark";
                for (var l; b--;)
                    if (l = c.data(f[b],
                            h, p, !0) || (c.data(f[b], k, p, !0) || c.data(f[b], a, p, !0)) && c.data(f[b], h, c._Deferred(), !0)) g++, l.done(d);
                d();
                return e.promise()
            }
        });
        var Oa = /[\n\t\r]/g,
            pa = /\s+/,
            xb = /\r/g,
            yb = /^(?:button|input)$/i,
            zb = /^(?:button|input|object|select|textarea)$/i,
            Ab = /^a(?:rea)?$/i,
            Pa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
        c.fn.extend({
            attr: function(a, b) {
                return c.access(this, a, b, !0, c.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    c.removeAttr(this,
                        a)
                })
            },
            prop: function(a, b) {
                return c.access(this, a, b, !0, c.prop)
            },
            removeProp: function(a) {
                a = c.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = p, delete this[a]
                    } catch (b) {}
                })
            },
            addClass: function(a) {
                var b, d;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a) {
                    var e = a.split(pa);
                    var f = 0;
                    for (b = this.length; f < b; f++) {
                        var g = this[f];
                        if (1 === g.nodeType)
                            if (g.className || 1 !== e.length) {
                                var h = " " + g.className + " ";
                                var k = 0;
                                for (d = e.length; k < d; k++) ~h.indexOf(" " +
                                    e[k] + " ") || (h += e[k] + " ");
                                g.className = c.trim(h)
                            } else g.className = a
                    }
                }
                return this
            },
            removeClass: function(a) {
                var b, d;
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" === typeof a || a === p) {
                    var e = (a || "").split(pa);
                    var f = 0;
                    for (b = this.length; f < b; f++) {
                        var g = this[f];
                        if (1 === g.nodeType && g.className)
                            if (a) {
                                var h = (" " + g.className + " ").replace(Oa, " ");
                                var k = 0;
                                for (d = e.length; k < d; k++) h = h.replace(" " + e[k] + " ", " ");
                                g.className = c.trim(h)
                            } else g.className =
                                ""
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var d = typeof a,
                    e = "boolean" === typeof b;
                return c.isFunction(a) ? this.each(function(d) {
                    c(this).toggleClass(a.call(this, d, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === d)
                        for (var f, g = 0, h = c(this), k = b, l = a.split(pa); f = l[g++];) k = e ? k : !h.hasClass(f), h[k ? "addClass" : "removeClass"](f);
                    else if ("undefined" === d || "boolean" === d) this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || ""
                })
            },
            hasClass: function(a) {
                a = " " + a + " ";
                for (var b = 0, c = this.length; b < c; b++)
                    if (1 === this[b].nodeType && -1 < (" " + this[b].className + " ").replace(Oa, " ").indexOf(a)) return !0;
                return !1
            },
            val: function(a) {
                var b, d, e = this[0];
                if (!arguments.length) {
                    if (e) {
                        if ((b = c.valHooks[e.nodeName.toLowerCase()] || c.valHooks[e.type]) && "get" in b && (d = b.get(e, "value")) !== p) return d;
                        d = e.value;
                        return "string" === typeof d ? d.replace(xb, "") : null == d ? "" : d
                    }
                    return p
                }
                var f = c.isFunction(a);
                return this.each(function(d) {
                    var e = c(this);
                    1 === this.nodeType && (d =
                        f ? a.call(this, d, e.val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : c.isArray(d) && (d = c.map(d, function(a) {
                            return null == a ? "" : a + ""
                        })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], b && "set" in b && b.set(this, d, "value") !== p || (this.value = d))
                })
            }
        });
        c.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b = a.selectedIndex,
                            d = [],
                            e = a.options;
                        a = "select-one" === a.type;
                        if (0 > b) return null;
                        for (var f = a ? b : 0, g = a ? b + 1 : e.length; f <
                            g; f++) {
                            var h = e[f];
                            if (!(!h.selected || (c.support.optDisabled ? h.disabled : null !== h.getAttribute("disabled")) || h.parentNode.disabled && c.nodeName(h.parentNode, "optgroup"))) {
                                h = c(h).val();
                                if (a) return h;
                                d.push(h)
                            }
                        }
                        return a && !d.length && e.length ? c(e[b]).val() : d
                    },
                    set: function(a, b) {
                        var d = c.makeArray(b);
                        c(a).find("option").each(function() {
                            this.selected = 0 <= c.inArray(c(this).val(), d)
                        });
                        d.length || (a.selectedIndex = -1);
                        return d
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function(a, b, d, e) {
                var f = a.nodeType;
                if (!a || 3 === f || 8 === f || 2 === f) return p;
                if (e && b in c.attrFn) return c(a)[b](d);
                if (!("getAttribute" in a)) return c.prop(a, b, d);
                var g, h;
                if (e = 1 !== f || !c.isXMLDoc(a)) b = c.attrFix[b] || b, (h = c.attrHooks[b]) || (Pa.test(b) ? h = Bb : L && (h = L));
                if (d !== p) {
                    if (null === d) return c.removeAttr(a, b), p;
                    if (h && "set" in h && e && (g = h.set(a, d, b)) !== p) return g;
                    a.setAttribute(b, "" + d);
                    return d
                }
                if (h && "get" in h && e && null !== (g = h.get(a, b))) return g;
                g = a.getAttribute(b);
                return null === g ? p : g
            },
            removeAttr: function(a,
                b) {
                var d;
                1 === a.nodeType && (b = c.attrFix[b] || b, c.attr(a, b, ""), a.removeAttribute(b), Pa.test(b) && (d = c.propFix[b] || b) in a && (a[d] = !1))
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (yb.test(a.nodeName) && a.parentNode) c.error("type property can't be changed");
                        else if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
                            var d = a.value;
                            a.setAttribute("type", b);
                            d && (a.value = d);
                            return b
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        return L && c.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
                    },
                    set: function(a, b, d) {
                        if (L && c.nodeName(a,
                                "button")) return L.set(a, b, d);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, b, d) {
                var e = a.nodeType;
                if (!a || 3 === e || 8 === e || 2 === e) return p;
                var f;
                if (1 !== e || !c.isXMLDoc(a)) {
                    b = c.propFix[b] || b;
                    var g = c.propHooks[b]
                }
                return d !== p ? g && "set" in g && (f = g.set(a, d, b)) !==
                    p ? f : a[b] = d : g && "get" in g && null !== (f = g.get(a, b)) ? f : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = a.getAttributeNode("tabindex");
                        return b && b.specified ? parseInt(b.value, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : p
                    }
                }
            }
        });
        c.attrHooks.tabIndex = c.propHooks.tabIndex;
        var Bb = {
            get: function(a, b) {
                var d;
                return !0 === c.prop(a, b) || (d = a.getAttributeNode(b)) && !1 !== d.nodeValue ? b.toLowerCase() : p
            },
            set: function(a, b, d) {
                !1 === b ? c.removeAttr(a, d) : (b = c.propFix[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
                return d
            }
        };
        if (!c.support.getSetAttribute) {
            var L = c.valHooks.button = {
                get: function(a, b) {
                    return (a = a.getAttributeNode(b)) && "" !== a.nodeValue ? a.nodeValue : p
                },
                set: function(a, b, c) {
                    var d = a.getAttributeNode(c);
                    d || (d = q.createAttribute(c), a.setAttributeNode(d));
                    return d.nodeValue = b + ""
                }
            };
            c.each(["width", "height"], function(a, b) {
                c.attrHooks[b] = c.extend(c.attrHooks[b], {
                    set: function(a, c) {
                        if ("" === c) return a.setAttribute(b, "auto"), c
                    }
                })
            })
        }
        c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
            c.attrHooks[b] =
                c.extend(c.attrHooks[b], {
                    get: function(a) {
                        a = a.getAttribute(b, 2);
                        return null === a ? p : a
                    }
                })
        });
        c.support.style || (c.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || p
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        });
        c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {
            get: function(a) {
                if (a = a.parentNode) a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
                return null
            }
        }));
        c.support.checkOn || c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = {
                get: function(a) {
                    return null ===
                        a.getAttribute("value") ? "on" : a.value
                }
            }
        });
        c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = c.extend(c.valHooks[this], {
                set: function(a, b) {
                    if (c.isArray(b)) return a.checked = 0 <= c.inArray(c(a).val(), b)
                }
            })
        });
        var ia = /\.(.*)$/,
            qa = /^(?:textarea|input|select)$/i,
            jb = /\./g,
            kb = / /g,
            Cb = /[^\w\s.|`]/g,
            Db = function(a) {
                return a.replace(Cb, "\\$\x26")
            };
        c.event = {
            add: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    if (!1 === d) d = H;
                    else if (!d) return;
                    var f;
                    if (d.handler) {
                        var g = d;
                        d = g.handler
                    }
                    d.guid || (d.guid = c.guid++);
                    if (f = c._data(a)) {
                        var h = f.events,
                            k = f.handle;
                        h || (f.events = h = {});
                        k || (f.handle = k = function(a) {
                            return "undefined" === typeof c || a && c.event.triggered === a.type ? p : c.event.handle.apply(k.elem, arguments)
                        });
                        k.elem = a;
                        b = b.split(" ");
                        for (var l, m = 0, n; l = b[m++];) {
                            f = g ? c.extend({}, g) : {
                                handler: d,
                                data: e
                            }; - 1 < l.indexOf(".") ? (n = l.split("."), l = n.shift(), f.namespace = n.slice(0).sort().join(".")) : (n = [], f.namespace = "");
                            f.type = l;
                            f.guid || (f.guid = d.guid);
                            var q = h[l],
                                r = c.event.special[l] || {};
                            q || (q = h[l] = [], r.setup && !1 !== r.setup.call(a,
                                e, n, k) || (a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)));
                            r.add && (r.add.call(a, f), f.handler.guid || (f.handler.guid = d.guid));
                            q.push(f);
                            c.event.global[l] = !0
                        }
                        a = null
                    }
                }
            },
            global: {},
            remove: function(a, b, d, e) {
                if (3 !== a.nodeType && 8 !== a.nodeType) {
                    !1 === d && (d = H);
                    var f, g, h = 0,
                        k, l = c.hasData(a) && c._data(a),
                        m = l && l.events;
                    if (l && m)
                        if (b && b.type && (d = b.handler, b = b.type), !b || "string" === typeof b && "." === b.charAt(0))
                            for (f in b = b || "", m) c.event.remove(a, f + b);
                        else {
                            for (b = b.split(" "); f = b[h++];) {
                                var n =
                                    f;
                                var q = 0 > f.indexOf(".");
                                var r = [];
                                if (!q) {
                                    r = f.split(".");
                                    f = r.shift();
                                    var G = new RegExp("(^|\\.)" + c.map(r.slice(0).sort(), Db).join("\\.(?:.*\\.)?") + "(\\.|$)")
                                }
                                if (k = m[f])
                                    if (d) {
                                        n = c.event.special[f] || {};
                                        for (g = e || 0; g < k.length; g++) {
                                            var x = k[g];
                                            if (d.guid === x.guid) {
                                                if (q || G.test(x.namespace)) null == e && k.splice(g--, 1), n.remove && n.remove.call(a, x);
                                                if (null != e) break
                                            }
                                        }
                                        if (0 === k.length || null != e && 1 === k.length) n.teardown && !1 !== n.teardown.call(a, r) || c.removeEvent(a, f, l.handle), delete m[f]
                                    } else
                                        for (g = 0; g < k.length; g++)
                                            if (x =
                                                k[g], q || G.test(x.namespace)) c.event.remove(a, n, x.handler, g), k.splice(g--, 1)
                            }
                            if (c.isEmptyObject(m)) {
                                if (b = l.handle) b.elem = null;
                                delete l.events;
                                delete l.handle;
                                c.isEmptyObject(l) && c.removeData(a, p, !0)
                            }
                        }
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(a, b, d, e) {
                var f = a.type || a,
                    g = [];
                if (0 <= f.indexOf("!")) {
                    f = f.slice(0, -1);
                    var h = !0
                }
                0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort());
                if (d && !c.event.customEvent[f] || c.event.global[f]) {
                    a = "object" === typeof a ? a[c.expando] ? a : new c.Event(f,
                        a) : new c.Event(f);
                    a.type = f;
                    a.exclusive = h;
                    a.namespace = g.join(".");
                    a.namespace_re = new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)");
                    if (e || !d) a.preventDefault(), a.stopPropagation();
                    if (!d) c.each(c.cache, function() {
                        var d = this[c.expando];
                        d && d.events && d.events[f] && c.event.trigger(a, b, d.handle.elem)
                    });
                    else if (3 !== d.nodeType && 8 !== d.nodeType) {
                        a.result = p;
                        a.target = d;
                        b = null != b ? c.makeArray(b) : [];
                        b.unshift(a);
                        g = d;
                        e = 0 > f.indexOf(":") ? "on" + f : "";
                        do h = c._data(g, "handle"), a.currentTarget = g, h && h.apply(g, b), e && c.acceptData(g) &&
                            g[e] && !1 === g[e].apply(g, b) && (a.result = !1, a.preventDefault()), g = g.parentNode || g.ownerDocument || g === a.target.ownerDocument && r; while (g && !a.isPropagationStopped());
                        if (!a.isDefaultPrevented()) {
                            var k;
                            g = c.event.special[f] || {};
                            if (!(g._default && !1 !== g._default.call(d.ownerDocument, a) || "click" === f && c.nodeName(d, "a")) && c.acceptData(d)) {
                                try {
                                    e && d[f] && ((k = d[e]) && (d[e] = null), c.event.triggered = f, d[f]())
                                } catch (l) {}
                                k && (d[e] = k);
                                c.event.triggered = p
                            }
                        }
                        return a.result
                    }
                }
            },
            handle: function(a) {
                a = c.event.fix(a || r.event);
                var b =
                    ((c._data(this, "events") || {})[a.type] || []).slice(0),
                    d = !a.exclusive && !a.namespace,
                    e = Array.prototype.slice.call(arguments, 0);
                e[0] = a;
                a.currentTarget = this;
                for (var f = 0, g = b.length; f < g; f++) {
                    var h = b[f];
                    if (d || a.namespace_re.test(h.namespace))
                        if (a.handler = h.handler, a.data = h.data, a.handleObj = h, h = h.handler.apply(this, e), h !== p && (a.result = h, !1 === h && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) break
                }
                return a.result
            },
            props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
            fix: function(a) {
                if (a[c.expando]) return a;
                var b = a;
                a = c.Event(b);
                for (var d = this.props.length, e; d;) e = this.props[--d], a[e] = b[e];
                a.target || (a.target = a.srcElement || q);
                3 === a.target.nodeType && (a.target = a.target.parentNode);
                !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
                null == a.pageX && null != a.clientX && (d = a.target.ownerDocument || q, b = d.documentElement, d = d.body, a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY =
                    a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0));
                null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode);
                !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
                a.which || a.button === p || (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
                return a
            },
            guid: 1E8,
            proxy: c.proxy,
            special: {
                ready: {
                    setup: c.bindReady,
                    teardown: c.noop
                },
                live: {
                    add: function(a) {
                        c.event.add(this, X(a.origType, a.selector), c.extend({}, a, {
                            handler: ib,
                            guid: a.handler.guid
                        }))
                    },
                    remove: function(a) {
                        c.event.remove(this,
                            X(a.origType, a.selector), a)
                    }
                },
                beforeunload: {
                    setup: function(a, b, d) {
                        c.isWindow(this) && (this.onbeforeunload = d)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            }
        };
        c.removeEvent = q.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        };
        c.Event = function(a, b) {
            if (!this.preventDefault) return new c.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented ||
                !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? W : H) : this.type = a;
            b && c.extend(this, b);
            this.timeStamp = c.now();
            this[c.expando] = !0
        };
        c.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = W;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = W;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped =
                    W;
                this.stopPropagation()
            },
            isDefaultPrevented: H,
            isPropagationStopped: H,
            isImmediatePropagationStopped: H
        };
        var Qa = function(a) {
                var b = a.relatedTarget,
                    d = !1,
                    e = a.type;
                a.type = a.data;
                b !== this && (b && (d = c.contains(this, b)), d || (c.event.handle.apply(this, arguments), a.type = e))
            },
            Ra = function(a) {
                a.type = a.data;
                c.event.handle.apply(this, arguments)
            };
        c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            c.event.special[a] = {
                setup: function(d) {
                    c.event.add(this, b, d && d.selector ? Ra : Qa, a)
                },
                teardown: function(a) {
                    c.event.remove(this,
                        b, a && a.selector ? Ra : Qa)
                }
            }
        });
        c.support.submitBubbles || (c.event.special.submit = {
            setup: function(a, b) {
                if (c.nodeName(this, "form")) return !1;
                c.event.add(this, "click.specialSubmit", function(a) {
                    var b = a.target,
                        d = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "submit" !== d && "image" !== d || !c(b).closest("form").length || wa("submit", this, arguments)
                });
                c.event.add(this, "keypress.specialSubmit", function(a) {
                    var b = a.target,
                        d = c.nodeName(b, "input") || c.nodeName(b, "button") ? b.type : "";
                    "text" !== d && "password" !== d || !c(b).closest("form").length ||
                        13 !== a.keyCode || wa("submit", this, arguments)
                })
            },
            teardown: function(a) {
                c.event.remove(this, ".specialSubmit")
            }
        });
        if (!c.support.changeBubbles) {
            var Sa = function(a) {
                    var b = c.nodeName(a, "input") ? a.type : "",
                        d = a.value;
                    "radio" === b || "checkbox" === b ? d = a.checked : "select-multiple" === b ? d = -1 < a.selectedIndex ? c.map(a.options, function(a) {
                        return a.selected
                    }).join("-") : "" : c.nodeName(a, "select") && (d = a.selectedIndex);
                    return d
                },
                ca = function(a, b) {
                    var d = a.target;
                    if (qa.test(d.nodeName) && !d.readOnly) {
                        var e = c._data(d, "_change_data");
                        var f = Sa(d);
                        "focusout" === a.type && "radio" === d.type || c._data(d, "_change_data", f);
                        e === p || f === e || null == e && !f || (a.type = "change", a.liveFired = p, c.event.trigger(a, b, d))
                    }
                };
            c.event.special.change = {
                filters: {
                    focusout: ca,
                    beforedeactivate: ca,
                    click: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        ("radio" === d || "checkbox" === d || c.nodeName(b, "select")) && ca.call(this, a)
                    },
                    keydown: function(a) {
                        var b = a.target,
                            d = c.nodeName(b, "input") ? b.type : "";
                        (13 === a.keyCode && !c.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" ===
                            d || "radio" === d) || "select-multiple" === d) && ca.call(this, a)
                    },
                    beforeactivate: function(a) {
                        a = a.target;
                        c._data(a, "_change_data", Sa(a))
                    }
                },
                setup: function(a, b) {
                    if ("file" === this.type) return !1;
                    for (var d in da) c.event.add(this, d + ".specialChange", da[d]);
                    return qa.test(this.nodeName)
                },
                teardown: function(a) {
                    c.event.remove(this, ".specialChange");
                    return qa.test(this.nodeName)
                }
            };
            var da = c.event.special.change.filters;
            da.focus = da.beforeactivate
        }
        c.support.focusinBubbles || c.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a,
            b) {
            function d(a) {
                var d = c.event.fix(a);
                d.type = b;
                d.originalEvent = {};
                c.event.trigger(d, null, d.target);
                d.isDefaultPrevented() && a.preventDefault()
            }
            var e = 0;
            c.event.special[b] = {
                setup: function() {
                    0 === e++ && q.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --e && q.removeEventListener(a, d, !0)
                }
            }
        });
        c.each(["bind", "one"], function(a, b) {
            c.fn[b] = function(a, e, f) {
                if ("object" === typeof a) {
                    for (var d in a) this[b](d, e, a[d], f);
                    return this
                }
                if (2 === arguments.length || !1 === e) f = e, e = p;
                if ("one" === b) {
                    var h = function(a) {
                        c(this).unbind(a,
                            h);
                        return f.apply(this, arguments)
                    };
                    h.guid = f.guid || c.guid++
                } else h = f;
                if ("unload" === a && "one" !== b) this.one(a, e, f);
                else {
                    d = 0;
                    for (var k = this.length; d < k; d++) c.event.add(this[d], a, h, e)
                }
                return this
            }
        });
        c.fn.extend({
            unbind: function(a, b) {
                if ("object" !== typeof a || a.preventDefault)
                    for (var d = 0, e = this.length; d < e; d++) c.event.remove(this[d], a, b);
                else
                    for (d in a) this.unbind(d, a[d]);
                return this
            },
            delegate: function(a, b, c, e) {
                return this.live(b, c, e, a)
            },
            undelegate: function(a, b, c) {
                return 0 === arguments.length ? this.unbind("live") :
                    this.die(b, null, c, a)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    c.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return c.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    d = a.guid || c.guid++,
                    e = 0,
                    f = function(d) {
                        var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
                        c.data(this, "lastToggle" + a.guid, f + 1);
                        d.preventDefault();
                        return b[f].apply(this, arguments) || !1
                    };
                for (f.guid = d; e < b.length;) b[e++].guid = d;
                return this.click(f)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b ||
                    a)
            }
        });
        var ra = {
            focus: "focusin",
            blur: "focusout",
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        c.each(["live", "die"], function(a, b) {
            c.fn[b] = function(a, e, f, g) {
                var d = 0,
                    k = g || this.selector,
                    l = g ? this : c(this.context);
                if ("object" === typeof a && !a.preventDefault) {
                    for (m in a) l[b](m, e, a[m], k);
                    return this
                }
                if ("die" === b && !a && g && "." === g.charAt(0)) return l.unbind(g), this;
                if (!1 === e || c.isFunction(e)) f = e || H, e = p;
                for (a = (a || "").split(" "); null != (g = a[d++]);) {
                    var m = ia.exec(g);
                    var n = "";
                    m && (n = m[0], g = g.replace(ia, ""));
                    if ("hover" ===
                        g) a.push("mouseenter" + n, "mouseleave" + n);
                    else if (m = g, ra[g] ? (a.push(ra[g] + n), g += n) : g = (ra[g] || g) + n, "live" === b) {
                        n = 0;
                        for (var q = l.length; n < q; n++) c.event.add(l[n], "live." + X(g, k), {
                            data: e,
                            selector: k,
                            handler: f,
                            origType: g,
                            origHandler: f,
                            preType: m
                        })
                    } else l.unbind("live." + X(g, k), f)
                }
                return this
            }
        });
        c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a,
            b) {
            c.fn[b] = function(a, c) {
                null == c && (c = a, a = null);
                return 0 < arguments.length ? this.bind(b, a, c) : this.trigger(b)
            };
            c.attrFn && (c.attrFn[b] = !0)
        });
        (function() {
            function a(a, b, c, d, e, f) {
                e = 0;
                for (var t = d.length; e < t; e++) {
                    var g = d[e];
                    if (g) {
                        var h = !1;
                        for (g = g[a]; g;) {
                            if (g.sizcache === c) {
                                h = d[g.sizset];
                                break
                            }
                            1 !== g.nodeType || f || (g.sizcache = c, g.sizset = e);
                            if (g.nodeName.toLowerCase() === b) {
                                h = g;
                                break
                            }
                            g = g[a]
                        }
                        d[e] = h
                    }
                }
            }

            function b(a, b, c, d, e, f) {
                e = 0;
                for (var t = d.length; e < t; e++) {
                    var g = d[e];
                    if (g) {
                        var h = !1;
                        for (g = g[a]; g;) {
                            if (g.sizcache ===
                                c) {
                                h = d[g.sizset];
                                break
                            }
                            if (1 === g.nodeType)
                                if (f || (g.sizcache = c, g.sizset = e), "string" !== typeof b) {
                                    if (g === b) {
                                        h = !0;
                                        break
                                    }
                                } else if (0 < m.filter(b, [g]).length) {
                                h = g;
                                break
                            }
                            g = g[a]
                        }
                        d[e] = h
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = 0,
                f = Object.prototype.toString,
                g = !1,
                h = !0,
                k = /\\/g,
                l = /\W/;
            [0, 0].sort(function() {
                h = !1;
                return 0
            });
            var m = function(a, b, c, e) {
                c = c || [];
                var g = b = b || q;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a ||
                    "string" !== typeof a) return c;
                var t, h, y, k = !0,
                    l = m.isXML(b),
                    u = [],
                    A = a;
                do
                    if (d.exec(""), t = d.exec(A))
                        if (A = t[3], u.push(t[1]), t[2]) {
                            var p = t[3];
                            break
                        }
                while (t);
                if (1 < u.length && r.exec(a))
                    if (2 === u.length && n.relative[u[0]]) var z = v(u[0] + u[1], b);
                    else
                        for (z = n.relative[u[0]] ? [b] : m(u.shift(), b); u.length;) a = u.shift(), n.relative[a] && (a += u.shift()), z = v(a, z);
                else if (!e && 1 < u.length && 9 === b.nodeType && !l && n.match.ID.test(u[0]) && !n.match.ID.test(u[u.length - 1]) && (t = m.find(u.shift(), b, l), b = t.expr ? m.filter(t.expr, t.set)[0] : t.set[0]),
                    b)
                    for (t = e ? {
                            expr: u.pop(),
                            set: x(e)
                        } : m.find(u.pop(), 1 !== u.length || "~" !== u[0] && "+" !== u[0] || !b.parentNode ? b : b.parentNode, l), z = t.expr ? m.filter(t.expr, t.set) : t.set, 0 < u.length ? h = x(z) : k = !1; u.length;) t = y = u.pop(), n.relative[y] ? t = u.pop() : y = "", null == t && (t = b), n.relative[y](h, t, l);
                else h = [];
                h || (h = z);
                h || m.error(y || a);
                if ("[object Array]" === f.call(h))
                    if (k)
                        if (b && 1 === b.nodeType)
                            for (a = 0; null != h[a]; a++) h[a] && (!0 === h[a] || 1 === h[a].nodeType && m.contains(b, h[a])) && c.push(z[a]);
                        else
                            for (a = 0; null != h[a]; a++) h[a] && 1 === h[a].nodeType &&
                                c.push(z[a]);
                else c.push.apply(c, h);
                else x(h, c);
                p && (m(p, g, c, e), m.uniqueSort(c));
                return c
            };
            m.uniqueSort = function(a) {
                if (E && (g = h, a.sort(E), g))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            };
            m.matches = function(a, b) {
                return m(a, null, null, b)
            };
            m.matchesSelector = function(a, b) {
                return 0 < m(b, null, null, [a]).length
            };
            m.find = function(a, b, c) {
                if (!a) return [];
                for (var d = 0, e = n.order.length; d < e; d++) {
                    var f, g = n.order[d];
                    if (f = n.leftMatch[g].exec(a)) {
                        var t = f[1];
                        f.splice(1, 1);
                        if ("\\" !== t.substr(t.length -
                                1)) {
                            f[1] = (f[1] || "").replace(k, "");
                            var h = n.find[g](f, b, c);
                            if (null != h) {
                                a = a.replace(n.match[g], "");
                                break
                            }
                        }
                    }
                }
                h || (h = "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
                return {
                    set: h,
                    expr: a
                }
            };
            m.filter = function(a, b, c, d) {
                for (var e, f, g = a, t = [], h = b, y = b && b[0] && m.isXML(b[0]); a && b.length;) {
                    for (var k in n.filter)
                        if (null != (e = n.leftMatch[k].exec(a)) && e[2]) {
                            var u, l = n.filter[k];
                            var A = e[1];
                            f = !1;
                            e.splice(1, 1);
                            if ("\\" !== A.substr(A.length - 1)) {
                                h === t && (t = []);
                                if (n.preFilter[k])
                                    if (e = n.preFilter[k](e,
                                            h, c, t, d, y), !e) f = u = !0;
                                    else if (!0 === e) continue;
                                if (e)
                                    for (var q = 0; null != (A = h[q]); q++)
                                        if (A) {
                                            u = l(A, e, q, h);
                                            var r = d ^ !!u;
                                            c && null != u ? r ? f = !0 : h[q] = !1 : r && (t.push(A), f = !0)
                                        }
                                if (u !== p) {
                                    c || (h = t);
                                    a = a.replace(n.match[k], "");
                                    if (!f) return [];
                                    break
                                }
                            }
                        }
                    if (a === g)
                        if (null == f) m.error(a);
                        else break;
                    g = a
                }
                return h
            };
            m.error = function(a) {
                throw "Syntax error, unrecognized expression: " + a;
            };
            var n = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = "string" === typeof b,
                                d = c && !l.test(b);
                            c = c && !d;
                            d && (b = b.toLowerCase());
                            d = 0;
                            for (var e = a.length, f; d < e; d++)
                                if (f = a[d]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            c && m.filter(b, a, !0)
                        },
                        "\x3e": function(a, b) {
                            var c, d = "string" === typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b))
                                for (b = b.toLowerCase(); e < f; e++) {
                                    if (c = a[e]) c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1
                                } else {
                                    for (; e < f; e++)(c =
                                        a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                    d && m.filter(b, a, !0)
                                }
                        },
                        "": function(c, d, f) {
                            var g = e++,
                                h = b;
                            if ("string" === typeof d && !l.test(d)) {
                                var t = d = d.toLowerCase();
                                h = a
                            }
                            h("parentNode", d, g, c, t, f)
                        },
                        "~": function(c, d, f) {
                            var g = e++,
                                h = b;
                            if ("string" === typeof d && !l.test(d)) {
                                var t = d = d.toLowerCase();
                                h = a
                            }
                            h("previousSibling", d, g, c, t, f)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" !== typeof b.getElementById && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
                        },
                        NAME: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByName) {
                                var c = [];
                                b = b.getElementsByName(a[1]);
                                for (var d = 0, e = b.length; d < e; d++) b[d].getAttribute("name") === a[1] && c.push(b[d]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(k, "") + " ";
                            if (f) return a;
                            f = 0;
                            for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(k,
                                "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(k, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" === a[1]) {
                                a[2] || m.error(a[0]);
                                a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0;
                                a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            b = a[1] = a[1].replace(k, "");
                            !f && n.attrMap[b] && (a[1] = n.attrMap[b]);
                            a[4] = (a[4] || a[5] || "").replace(k, "");
                            "~\x3d" === a[2] && (a[4] = " " +
                                a[4] + " ");
                            return a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1])
                                if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3])) a[3] = m(a[3], null, null, b);
                                else return a = m.filter(a[3], b, c, 1 ^ f), c || e.push.apply(e, a), !1;
                            else if (n.match.POS.test(a[0]) || n.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return !1 === a.disabled && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return !0 === a.disabled
                        },
                        checked: function(a) {
                            return !0 === a.checked
                        },
                        selected: function(a) {
                            a.parentNode &&
                                a.parentNode.selectedIndex;
                            return !0 === a.selected
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" ===
                                a.type
                        },
                        file: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function(a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return 0 === b % 2
                        },
                        odd: function(a, b) {
                            return 1 === b % 2
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a,
                            b, c, d) {
                            var e = b[1],
                                f = n.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return 0 <= (a.textContent || a.innerText || m.getText([a]) || "").indexOf(b[3]);
                            if ("not" === e) {
                                b = b[3];
                                c = 0;
                                for (d = b.length; c < d; c++)
                                    if (b[c] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    d = a;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2];
                                    var e = b[3];
                                    if (1 === c && 0 ===
                                        e) return !0;
                                    b = b[0];
                                    var f = a.parentNode;
                                    if (f && (f.sizcache !== b || !a.nodeIndex)) {
                                        var g = 0;
                                        for (d = f.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++g);
                                        f.sizcache = b
                                    }
                                    a = a.nodeIndex - e;
                                    return 0 === c ? 0 === a : 0 === a % c && 0 <= a / c
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return -1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b)
                        },
                        ATTR: function(a, b) {
                            var c = b[1];
                            a = n.attrHandle[c] ?
                                n.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c);
                            c = a + "";
                            var d = b[2];
                            b = b[4];
                            return null == a ? "!\x3d" === d : "\x3d" === d ? c === b : "*\x3d" === d ? 0 <= c.indexOf(b) : "~\x3d" === d ? 0 <= (" " + c + " ").indexOf(b) : b ? "!\x3d" === d ? c !== b : "^\x3d" === d ? 0 === c.indexOf(b) : "$\x3d" === d ? c.substr(c.length - b.length) === b : "|\x3d" === d ? c === b || c.substr(0, b.length + 1) === b + "-" : !1 : c && !1 !== a
                        },
                        POS: function(a, b, c, d) {
                            var e = n.setFilters[b[2]];
                            if (e) return e(a, c, b, d)
                        }
                    }
                },
                r = n.match.POS,
                z = function(a, b) {
                    return "\\" + (b - 0 + 1)
                },
                G;
            for (G in n.match) n.match[G] = new RegExp(n.match[G].source +
                /(?![^\[]*\])(?![^\(]*\))/.source), n.leftMatch[G] = new RegExp(/(^(?:.|\r|\n)*?)/.source + n.match[G].source.replace(/\\(\d+)/g, z));
            var x = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                return b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(q.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                x = function(a, b) {
                    var c = 0;
                    b = b || [];
                    if ("[object Array]" === f.call(a)) Array.prototype.push.apply(b, a);
                    else if ("number" === typeof a.length)
                        for (var d = a.length; c < d; c++) b.push(a[c]);
                    else
                        for (; a[c]; c++) b.push(a[c]);
                    return b
                }
            }
            if (q.documentElement.compareDocumentPosition) var E = function(a, b) {
                return a === b ? (g = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            };
            else {
                E = function(a, b) {
                    if (a === b) return g = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c = [],
                        d = [];
                    var e = a.parentNode;
                    var f = b.parentNode;
                    var h = e;
                    if (e === f) return w(a, b);
                    if (!e) return -1;
                    if (!f) return 1;
                    for (; h;) c.unshift(h), h = h.parentNode;
                    for (h = f; h;) d.unshift(h),
                        h = h.parentNode;
                    e = c.length;
                    f = d.length;
                    for (h = 0; h < e && h < f; h++)
                        if (c[h] !== d[h]) return w(c[h], d[h]);
                    return h === e ? w(a, d[h], -1) : w(c[h], b, 1)
                };
                var w = function(a, b, c) {
                    if (a === b) return c;
                    for (a = a.nextSibling; a;) {
                        if (a === b) return -1;
                        a = a.nextSibling
                    }
                    return 1
                }
            }
            m.getText = function(a) {
                for (var b = "", c, d = 0; a[d]; d++) c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += m.getText(c.childNodes));
                return b
            };
            (function() {
                var a = q.createElement("div"),
                    b = "script" + (new Date).getTime(),
                    c = q.documentElement;
                a.innerHTML =
                    "\x3ca name\x3d'" + b + "'/\x3e";
                c.insertBefore(a, c.firstChild);
                q.getElementById(b) && (n.find.ID = function(a, b, c) {
                    if ("undefined" !== typeof b.getElementById && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" !== typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : p : []
                }, n.filter.ID = function(a, b) {
                    var c = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id");
                    return 1 === a.nodeType && c && c.nodeValue === b
                });
                c.removeChild(a);
                c = a = null
            })();
            (function() {
                var a = q.createElement("div");
                a.appendChild(q.createComment(""));
                0 < a.getElementsByTagName("*").length && (n.find.TAG = function(a, b) {
                    b = b.getElementsByTagName(a[1]);
                    if ("*" === a[1]) {
                        a = [];
                        for (var c = 0; b[c]; c++) 1 === b[c].nodeType && a.push(b[c]);
                        b = a
                    }
                    return b
                });
                a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                a.firstChild && "undefined" !== typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (n.attrHandle.href = function(a) {
                    return a.getAttribute("href", 2)
                });
                a = null
            })();
            q.querySelectorAll && function() {
                var a = m,
                    b = q.createElement("div");
                b.innerHTML = "\x3cp class\x3d'TEST'\x3e\x3c/p\x3e";
                if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                    m = function(b, c, d, e) {
                        c = c || q;
                        if (!e && !m.isXML(c)) {
                            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                            if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                                if (f[1]) return x(c.getElementsByTagName(b), d);
                                if (f[2] && n.find.CLASS && c.getElementsByClassName) return x(c.getElementsByClassName(f[2]), d)
                            }
                            if (9 === c.nodeType) {
                                if ("body" === b && c.body) return x([c.body], d);
                                if (f && f[3]) {
                                    var g = c.getElementById(f[3]);
                                    if (g && g.parentNode) {
                                        if (g.id ===
                                            f[3]) return x([g], d)
                                    } else return x([], d)
                                }
                                try {
                                    return x(c.querySelectorAll(b), d)
                                } catch (B) {}
                            } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                                f = c;
                                var h = (g = c.getAttribute("id")) || "__sizzle__",
                                    k = c.parentNode,
                                    l = /^\s*[+~]/.test(b);
                                g ? h = h.replace(/'/g, "\\$\x26") : c.setAttribute("id", h);
                                l && k && (c = c.parentNode);
                                try {
                                    if (!l || k) return x(c.querySelectorAll("[id\x3d'" + h + "'] " + b), d)
                                } catch (B) {} finally {
                                    g || f.removeAttribute("id")
                                }
                            }
                        }
                        return a(b, c, d, e)
                    };
                    for (var c in a) m[c] = a[c];
                    b = null
                }
            }();
            (function() {
                var a = q.documentElement,
                    b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                if (b) {
                    var c = !b.call(q.createElement("div"), "div"),
                        d = !1;
                    try {
                        b.call(q.documentElement, "[test!\x3d'']:sizzle")
                    } catch (Q) {
                        d = !0
                    }
                    m.matchesSelector = function(a, e) {
                        e = e.replace(/=\s*([^'"\]]*)\s*\]/g, "\x3d'$1']");
                        if (!m.isXML(a)) try {
                            if (d || !n.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                var f = b.call(a, e);
                                if (f || !c || a.document && 11 !== a.document.nodeType) return f
                            }
                        } catch (ba) {}
                        return 0 < m(e, null, null, [a]).length
                    }
                }
            })();
            (function() {
                var a = q.createElement("div");
                a.innerHTML = "\x3cdiv class\x3d'test e'\x3e\x3c/div\x3e\x3cdiv class\x3d'test'\x3e\x3c/div\x3e";
                a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (n.order.splice(1, 0, "CLASS"), n.find.CLASS = function(a, b, c) {
                    if ("undefined" !== typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
                }, a = null))
            })();
            m.contains = q.documentElement.contains ? function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : q.documentElement.compareDocumentPosition ?
                function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : function() {
                    return !1
                };
            m.isXML = function(a) {
                return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
            };
            var v = function(a, b) {
                var c, d = [],
                    e = "";
                for (b = b.nodeType ? [b] : b; c = n.match.PSEUDO.exec(a);) e += c[0], a = a.replace(n.match.PSEUDO, "");
                a = n.relative[a] ? a + "*" : a;
                c = 0;
                for (var f = b.length; c < f; c++) m(a, b[c], d);
                return m.filter(e, d)
            };
            c.find = m;
            c.expr = m.selectors;
            c.expr[":"] = c.expr.filters;
            c.unique = m.uniqueSort;
            c.text = m.getText;
            c.isXMLDoc = m.isXML;
            c.contains =
                m.contains
        })();
        var Eb = /Until$/,
            Fb = /^(?:parents|prevUntil|prevAll)/,
            Gb = /,/,
            lb = /^.[^:#\[\.,]*$/,
            Hb = Array.prototype.slice,
            Ta = c.expr.match.POS,
            Ib = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        c.fn.extend({
            find: function(a) {
                var b = this,
                    d;
                if ("string" !== typeof a) return c(a).filter(function() {
                    h = 0;
                    for (d = b.length; h < d; h++)
                        if (c.contains(b[h], this)) return !0
                });
                var e = this.pushStack("", "find", a),
                    f, g;
                var h = 0;
                for (d = this.length; h < d; h++) {
                    var k = e.length;
                    c.find(a, this[h], e);
                    if (0 < h)
                        for (f = k; f < e.length; f++)
                            for (g = 0; g < k; g++)
                                if (e[g] ===
                                    e[f]) {
                                    e.splice(f--, 1);
                                    break
                                }
                }
                return e
            },
            has: function(a) {
                var b = c(a);
                return this.filter(function() {
                    for (var a = 0, e = b.length; a < e; a++)
                        if (c.contains(this, b[a])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(ya(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(ya(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !!a && ("string" === typeof a ? 0 < c.filter(a, this).length : 0 < this.filter(a).length)
            },
            closest: function(a, b) {
                var d = [],
                    e, f = this[0];
                if (c.isArray(a)) {
                    var g = {},
                        h = 1;
                    if (f && a.length) {
                        var k = 0;
                        for (e = a.length; k <
                            e; k++) {
                            var l = a[k];
                            g[l] || (g[l] = Ta.test(l) ? c(l, b || this.context) : l)
                        }
                        for (; f && f.ownerDocument && f !== b;) {
                            for (l in g) a = g[l], (a.jquery ? -1 < a.index(f) : c(f).is(a)) && d.push({
                                selector: l,
                                elem: f,
                                level: h
                            });
                            f = f.parentNode;
                            h++
                        }
                    }
                    return d
                }
                l = Ta.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0;
                k = 0;
                for (e = this.length; k < e; k++)
                    for (f = this[k]; f;)
                        if (l ? -1 < l.index(f) : c.find.matchesSelector(f, a)) {
                            d.push(f);
                            break
                        } else if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break;
                d = 1 < d.length ? c.unique(d) : d;
                return this.pushStack(d,
                    "closest", a)
            },
            index: function(a) {
                return a ? "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(a, b) {
                a = "string" === typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a);
                b = c.merge(this.get(), a);
                return this.pushStack(xa(a[0]) || xa(b[0]) ? b : c.unique(b))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        });
        c.each({
            parent: function(a) {
                return (a = a.parentNode) && 11 !== a.nodeType ? a : null
            },
            parents: function(a) {
                return c.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, d) {
                return c.dir(a, "parentNode", d)
            },
            next: function(a) {
                return c.nth(a, 2, "nextSibling")
            },
            prev: function(a) {
                return c.nth(a, 2, "previousSibling")
            },
            nextAll: function(a) {
                return c.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return c.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, d) {
                return c.dir(a, "nextSibling", d)
            },
            prevUntil: function(a, b, d) {
                return c.dir(a, "previousSibling", d)
            },
            siblings: function(a) {
                return c.sibling(a.parentNode.firstChild, a)
            },
            children: function(a) {
                return c.sibling(a.firstChild)
            },
            contents: function(a) {
                return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes)
            }
        }, function(a, b) {
            c.fn[a] = function(d, e) {
                var f = c.map(this, b, d),
                    g = Hb.call(arguments);
                Eb.test(a) || (e = d);
                e && "string" === typeof e && (f = c.filter(e, f));
                f = 1 < this.length && !Ib[a] ? c.unique(f) : f;
                (1 < this.length || Gb.test(e)) && Fb.test(a) && (f = f.reverse());
                return this.pushStack(f, a, g.join(","))
            }
        });
        c.extend({
            filter: function(a, b, d) {
                d && (a = ":not(" + a + ")");
                return 1 === b.length ? c.find.matchesSelector(b[0],
                    a) ? [b[0]] : [] : c.find.matches(a, b)
            },
            dir: function(a, b, d) {
                var e = [];
                for (a = a[b]; a && 9 !== a.nodeType && (d === p || 1 !== a.nodeType || !c(a).is(d));) 1 === a.nodeType && e.push(a), a = a[b];
                return e
            },
            nth: function(a, b, c, e) {
                b = b || 1;
                for (e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Jb = / jQuery\d+="(?:\d+|null)"/g,
            sa = /^\s+/,
            Ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
            Va = /<([\w:]+)/,
            Kb = /<tbody/i,
            Lb = /<|&#?\w+;/,
            Wa = /<(?:script|object|embed|option|style)/i,
            Xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mb = /\/(java|ecma)script/i,
            ob = /^\s*<!(?:\[CDATA\[|\-\-)/,
            w = {
                option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
                legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e",
                    "\x3c/colgroup\x3e\x3c/table\x3e"
                ],
                area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
                _default: [0, "", ""]
            };
        w.optgroup = w.option;
        w.tbody = w.tfoot = w.colgroup = w.caption = w.thead;
        w.th = w.td;
        c.support.htmlSerialize || (w._default = [1, "div\x3cdiv\x3e", "\x3c/div\x3e"]);
        c.fn.extend({
            text: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    var d = c(this);
                    d.text(a.call(this, b, d.text()))
                }) : "object" !== typeof a && a !== p ? this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(a)) : c.text(this)
            },
            wrapAll: function(a) {
                if (c.isFunction(a)) return this.each(function(b) {
                    c(this).wrapAll(a.call(this,
                        b))
                });
                if (this[0]) {
                    var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]);
                    b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return c.isFunction(a) ? this.each(function(b) {
                    c(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = c(this),
                        d = b.contents();
                    d.length ? d.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                return this.each(function() {
                    c(this).wrapAll(a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    c.nodeName(this,
                        "body") || c(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    1 === this.nodeType && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this)
                });
                if (arguments.length) {
                    var a = c(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a,
                        "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, c(arguments[0]).toArray());
                    return a
                }
            },
            remove: function(a, b) {
                for (var d = 0, e; null != (e = this[d]); d++)
                    if (!a || c.filter(a, [e]).length) b || 1 !== e.nodeType || (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
                return this
            },
            empty: function() {
                for (var a = 0, b; null != (b = this[a]); a++)
                    for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
                return this
            },
            clone: function(a, b) {
                a = null == a ? !1 : a;
                b = null == b ? a : b;
                return this.map(function() {
                    return c.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === p) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Jb, "") : null;
                if ("string" !== typeof a || Wa.test(a) || !c.support.leadingWhitespace && sa.test(a) || w[(Va.exec(a) || ["", ""])[1].toLowerCase()]) c.isFunction(a) ?
                    this.each(function(b) {
                        var d = c(this);
                        d.html(a.call(this, b, d.html()))
                    }) : this.empty().append(a);
                else {
                    a = a.replace(Ua, "\x3c$1\x3e\x3c/$2\x3e");
                    try {
                        for (var b = 0, d = this.length; b < d; b++) 1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a)
                    } catch (e) {
                        this.empty().append(a)
                    }
                }
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (c.isFunction(a)) return this.each(function(b) {
                        var d = c(this),
                            e = d.html();
                        d.replaceWith(a.call(this, b, e))
                    });
                    "string" !== typeof a && (a = c(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            d = this.parentNode;
                        c(this).remove();
                        b ? c(b).before(a) : c(d).append(a)
                    })
                }
                return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, d) {
                var e, f = a[0],
                    g = [];
                if (!c.support.checkClone && 3 === arguments.length && "string" === typeof f && Xa.test(f)) return this.each(function() {
                    c(this).domManip(a, b, d, !0)
                });
                if (c.isFunction(f)) return this.each(function(e) {
                    var g = c(this);
                    a[0] = f.call(this,
                        e, b ? g.html() : p);
                    g.domManip(a, b, d)
                });
                if (this[0]) {
                    var h = f && f.parentNode;
                    h = c.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : c.buildFragment(a, this, g);
                    var k = h.fragment;
                    if (e = 1 === k.childNodes.length ? k = k.firstChild : k.firstChild) {
                        b = b && c.nodeName(e, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(b ? mb(this[l], e) : this[l], h.cacheable || 1 < m && l < n ? c.clone(k, !0, !0) : k)
                    }
                    g.length && c.each(g, nb)
                }
                return this
            }
        });
        c.buildFragment = function(a, b, d) {
            var e, f, g;
            b && b[0] && (g = b[0].ownerDocument ||
                b[0]);
            g.createDocumentFragment || (g = q);
            if (1 === a.length && "string" === typeof a[0] && 512 > a[0].length && g === q && "\x3c" === a[0].charAt(0) && !Wa.test(a[0]) && (c.support.checkClone || !Xa.test(a[0]))) {
                var h = !0;
                (f = c.fragments[a[0]]) && 1 !== f && (e = f)
            }
            e || (e = g.createDocumentFragment(), c.clean(a, g, e, d));
            h && (c.fragments[a[0]] = f ? e : 1);
            return {
                fragment: e,
                cacheable: h
            }
        };
        c.fragments = {};
        c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            c.fn[a] = function(d) {
                var e = [];
                d = c(d);
                var f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === d.length) return d[b](this[0]), this;
                f = 0;
                for (var g = d.length; f < g; f++) {
                    var h = (0 < f ? this.clone(!0) : this).get();
                    c(d[f])[b](h);
                    e = e.concat(h)
                }
                return this.pushStack(e, a, d.selector)
            }
        });
        c.extend({
            clone: function(a, b, d) {
                var e = a.cloneNode(!0),
                    f;
                if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
                    Aa(a, e);
                    var g = Y(a);
                    var h = Y(e);
                    for (f = 0; g[f]; ++f) h[f] && Aa(g[f], h[f])
                }
                if (b &&
                    (za(a, e), d))
                    for (g = Y(a), h = Y(e), f = 0; g[f]; ++f) za(g[f], h[f]);
                return e
            },
            clean: function(a, b, d, e) {
                b = b || q;
                "undefined" === typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || q);
                for (var f = [], g, h = 0, k; null != (k = a[h]); h++)
                    if ("number" === typeof k && (k += ""), k) {
                        if ("string" === typeof k)
                            if (Lb.test(k)) {
                                k = k.replace(Ua, "\x3c$1\x3e\x3c/$2\x3e");
                                g = (Va.exec(k) || ["", ""])[1].toLowerCase();
                                var l = w[g] || w._default,
                                    m = l[0],
                                    n = b.createElement("div");
                                for (n.innerHTML = l[1] + k + l[2]; m--;) n = n.lastChild;
                                if (!c.support.tbody)
                                    for (m =
                                        Kb.test(k), l = "table" !== g || m ? "\x3ctable\x3e" !== l[1] || m ? [] : n.childNodes : n.firstChild && n.firstChild.childNodes, g = l.length - 1; 0 <= g; --g) c.nodeName(l[g], "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g]);
                                !c.support.leadingWhitespace && sa.test(k) && n.insertBefore(b.createTextNode(sa.exec(k)[0]), n.firstChild);
                                k = n.childNodes
                            } else k = b.createTextNode(k);
                        var p;
                        if (!c.support.appendChecked)
                            if (k[0] && "number" === typeof(p = k.length))
                                for (g = 0; g < p; g++) Ca(k[g]);
                            else Ca(k);
                        k.nodeType ? f.push(k) : f = c.merge(f,
                            k)
                    }
                if (d)
                    for (a = function(a) {
                            return !a.type || Mb.test(a.type)
                        }, h = 0; f[h]; h++) !e || !c.nodeName(f[h], "script") || f[h].type && "text/javascript" !== f[h].type.toLowerCase() ? (1 === f[h].nodeType && (b = c.grep(f[h].getElementsByTagName("script"), a), f.splice.apply(f, [h + 1, 0].concat(b))), d.appendChild(f[h])) : e.push(f[h].parentNode ? f[h].parentNode.removeChild(f[h]) : f[h]);
                return f
            },
            cleanData: function(a) {
                for (var b, d, e = c.cache, f = c.expando, g = c.event.special, h = c.support.deleteExpando, k = 0, l; null != (l = a[k]); k++)
                    if (!l.nodeName || !c.noData[l.nodeName.toLowerCase()])
                        if (d =
                            l[c.expando]) {
                            if ((b = e[d] && e[d][f]) && b.events) {
                                for (var m in b.events) g[m] ? c.event.remove(l, m) : c.removeEvent(l, m, b.handle);
                                b.handle && (b.handle.elem = null)
                            }
                            h ? delete l[c.expando] : l.removeAttribute && l.removeAttribute(c.expando);
                            delete e[d]
                        }
            }
        });
        var ta = /alpha\([^)]*\)/i,
            Nb = /opacity=([^)]*)/,
            Ob = /([A-Z]|^ms)/g,
            Ya = /^-?\d+(?:px)?$/i,
            Pb = /^-?\d/,
            Qb = /^([\-+])=([\-+.\de]+)/,
            Rb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            pb = ["Left", "Right"],
            qb = ["Top", "Bottom"],
            Za, $a;
        c.fn.css = function(a, b) {
            return 2 ===
                arguments.length && b === p ? this : c.access(this, a, b, !0, function(a, b, f) {
                    return f !== p ? c.style(a, b, f) : c.css(a, b)
                })
        };
        c.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        return b ? (a = U(a, "opacity", "opacity"), "" === a ? "1" : a) : a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": c.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, b, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g = c.camelCase(b),
                        h = a.style,
                        k = c.cssHooks[g];
                    b = c.cssProps[g] || g;
                    if (d !== p) {
                        if (e = typeof d, "string" === e && (f = Qb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(c.css(a, b)), e = "number"), !(null == d || "number" === e && isNaN(d) || ("number" !== e || c.cssNumber[g] || (d += "px"), k && "set" in k && (d = k.set(a, d)) === p))) try {
                            h[b] = d
                        } catch (l) {}
                    } else return k && "get" in k && (f = k.get(a, !1, e)) !== p ? f : h[b]
                }
            },
            css: function(a, b, d) {
                var e;
                b = c.camelCase(b);
                var f = c.cssHooks[b];
                b = c.cssProps[b] || b;
                "cssFloat" === b && (b = "float");
                if (f && "get" in f && (e = f.get(a, !0, d)) !== p) return e;
                if (U) return U(a, b)
            },
            swap: function(a,
                b, c) {
                var d = {},
                    f;
                for (f in b) d[f] = a.style[f], a.style[f] = b[f];
                c.call(a);
                for (f in b) a.style[f] = d[f]
            }
        });
        c.curCSS = c.css;
        c.each(["height", "width"], function(a, b) {
            c.cssHooks[b] = {
                get: function(a, e, f) {
                    var d;
                    if (e) {
                        if (0 !== a.offsetWidth) return Da(a, b, f);
                        c.swap(a, Rb, function() {
                            d = Da(a, b, f)
                        });
                        return d
                    }
                },
                set: function(a, b) {
                    if (Ya.test(b)) {
                        if (b = parseFloat(b), 0 <= b) return b + "px"
                    } else return b
                }
            }
        });
        c.support.opacity || (c.cssHooks.opacity = {
            get: function(a, b) {
                return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var d = a.style;
                a = a.currentStyle;
                var e = c.isNaN(b) ? "" : "alpha(opacity\x3d" + 100 * b + ")",
                    f = a && a.filter || d.filter || "";
                d.zoom = 1;
                if (1 <= b && "" === c.trim(f.replace(ta, "")) && (d.removeAttribute("filter"), a && !a.filter)) return;
                d.filter = ta.test(f) ? f.replace(ta, e) : f + " " + e
            }
        });
        c(function() {
            c.support.reliableMarginRight || (c.cssHooks.marginRight = {
                get: function(a, b) {
                    var d;
                    c.swap(a, {
                        display: "inline-block"
                    }, function() {
                        d = b ? U(a, "margin-right", "marginRight") : a.style.marginRight
                    });
                    return d
                }
            })
        });
        q.defaultView && q.defaultView.getComputedStyle && (Za = function(a, b) {
            var d;
            b = b.replace(Ob, "-$1").toLowerCase();
            if (!(d = a.ownerDocument.defaultView)) return p;
            if (d = d.getComputedStyle(a, null)) {
                var e = d.getPropertyValue(b);
                "" !== e || c.contains(a.ownerDocument.documentElement, a) || (e = c.style(a, b))
            }
            return e
        });
        q.documentElement.currentStyle && ($a = function(a, b) {
            var c = a.currentStyle && a.currentStyle[b],
                e = a.runtimeStyle && a.runtimeStyle[b],
                f = a.style;
            if (!Ya.test(c) && Pb.test(c)) {
                var g = f.left;
                e && (a.runtimeStyle.left =
                    a.currentStyle.left);
                f.left = "fontSize" === b ? "1em" : c || 0;
                c = f.pixelLeft + "px";
                f.left = g;
                e && (a.runtimeStyle.left = e)
            }
            return "" === c ? "auto" : c
        });
        var U = Za || $a;
        c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
            var b = a.offsetHeight;
            return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style.display || c.css(a, "display"))
        }, c.expr.filters.visible = function(a) {
            return !c.expr.filters.hidden(a)
        });
        var Sb = /%20/g,
            rb = /\[\]$/,
            ab = /\r?\n/g,
            Tb = /#.*$/,
            Ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Vb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Wb = /^(?:GET|HEAD)$/,
            Xb = /^\/\//,
            bb = /\?/,
            Yb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Zb = /^(?:select|textarea)/i,
            Fa = /\s+/,
            $b = /([?&])_=[^&]*/,
            cb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            db = c.fn.load,
            ja = {},
            eb = {};
        try {
            var I = ub.href
        } catch (a) {
            I = q.createElement("a"), I.href = "", I = I.href
        }
        var P = cb.exec(I.toLowerCase()) || [];
        c.fn.extend({
            load: function(a, b, d) {
                if ("string" !== typeof a && db) return db.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (0 <= e) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                e = "GET";
                b && (c.isFunction(b) ? (d = b, b = p) : "object" === typeof b && (b = c.param(b, c.ajaxSettings.traditional), e = "POST"));
                var g = this;
                c.ajax({
                    url: a,
                    type: e,
                    dataType: "html",
                    data: b,
                    complete: function(a, b, e) {
                        e = a.responseText;
                        a.isResolved() && (a.done(function(a) {
                            e = a
                        }), g.html(f ? c("\x3cdiv\x3e").append(e.replace(Yb, "")).find(f) : e));
                        d && g.each(d, [e, b, a])
                    }
                });
                return this
            },
            serialize: function() {
                return c.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? c.makeArray(this.elements) :
                        this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || Zb.test(this.nodeName) || Vb.test(this.type))
                }).map(function(a, b) {
                    a = c(this).val();
                    return null == a ? null : c.isArray(a) ? c.map(a, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(ab, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: a.replace(ab, "\r\n")
                    }
                }).get()
            }
        });
        c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
            c.fn[b] = function(a) {
                return this.bind(b, a)
            }
        });
        c.each(["get", "post"], function(a, b) {
            c[b] = function(a,
                e, f, g) {
                c.isFunction(e) && (g = g || f, f = e, e = p);
                return c.ajax({
                    type: b,
                    url: a,
                    data: e,
                    success: f,
                    dataType: g
                })
            }
        });
        c.extend({
            getScript: function(a, b) {
                return c.get(a, p, b, "script")
            },
            getJSON: function(a, b, d) {
                return c.get(a, b, d, "json")
            },
            ajaxSetup: function(a, b) {
                b ? Ga(a, c.ajaxSettings) : (b = a, a = c.ajaxSettings);
                Ga(a, b);
                return a
            },
            ajaxSettings: {
                url: I,
                isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(P[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": "*/*"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": r.String,
                    "text html": !0,
                    "text json": c.parseJSON,
                    "text xml": c.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: Ea(ja),
            ajaxTransport: Ea(eb),
            ajax: function(a, b) {
                function d(a, b, d, m) {
                    if (2 !== E) {
                        E = 2;
                        x && clearTimeout(x);
                        w = p;
                        q = m || "";
                        v.readyState = 0 < a ? 4 : 0;
                        m = b;
                        if (d) {
                            var n = e,
                                r = v,
                                u = n.contents,
                                z = n.dataTypes,
                                Q = n.responseFields,
                                B, C;
                            for (D in Q) D in d && (r[Q[D]] = d[D]);
                            for (;
                                "*" === z[0];) z.shift(), B === p && (B = n.mimeType || r.getResponseHeader("content-type"));
                            if (B)
                                for (D in u)
                                    if (u[D] && u[D].test(B)) {
                                        z.unshift(D);
                                        break
                                    }
                            if (z[0] in d) var A = z[0];
                            else {
                                for (D in d) {
                                    if (!z[0] || n.converters[D + " " + z[0]]) {
                                        A = D;
                                        break
                                    }
                                    C || (C = D)
                                }
                                A = A || C
                            }
                            A ? (A !== z[0] && z.unshift(A), d = d[A]) : d = void 0
                        } else d = p;
                        if (200 <= a && 300 > a || 304 === a) {
                            if (e.ifModified) {
                                if (B = v.getResponseHeader("Last-Modified")) c.lastModified[y] = B;
                                if (B = v.getResponseHeader("Etag")) c.etag[y] =
                                    B
                            }
                            if (304 === a) {
                                m = "notmodified";
                                var G = !0
                            } else try {
                                B = e;
                                B.dataFilter && (d = B.dataFilter(d, B.dataType));
                                var T = B.dataTypes;
                                var D = {};
                                var F, K, N = T.length,
                                    R = T[0];
                                for (F = 1; F < N; F++) {
                                    if (1 === F)
                                        for (K in B.converters) "string" === typeof K && (D[K.toLowerCase()] = B.converters[K]);
                                    var H = R;
                                    R = T[F];
                                    if ("*" === R) R = H;
                                    else if ("*" !== H && H !== R) {
                                        var O = H + " " + R;
                                        var S = D[O] || D["* " + R];
                                        if (!S) {
                                            var J = p;
                                            for (I in D) {
                                                var L = I.split(" ");
                                                if (L[0] === H || "*" === L[0])
                                                    if (J = D[L[1] + " " + R]) {
                                                        var I = D[I];
                                                        !0 === I ? S = J : !0 === J && (S = I);
                                                        break
                                                    }
                                            }
                                        }
                                        S || J || c.error("No conversion from " +
                                            O.replace(" ", " to "));
                                        !0 !== S && (d = S ? S(d) : J(I(d)))
                                    }
                                }
                                var P = d;
                                m = "success";
                                G = !0
                            } catch (ac) {
                                m = "parsererror";
                                var M = ac
                            }
                        } else if (M = m, !m || a) m = "error", 0 > a && (a = 0);
                        v.status = a;
                        v.statusText = "" + (b || m);
                        G ? h.resolveWith(f, [P, m, v]) : h.rejectWith(f, [v, m, M]);
                        v.statusCode(l);
                        l = p;
                        t && g.trigger("ajax" + (G ? "Success" : "Error"), [v, e, G ? P : M]);
                        k.resolveWith(f, [v, m]);
                        t && (g.trigger("ajaxComplete", [v, e]), --c.active || c.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof a && (b = a, a = p);
                b = b || {};
                var e = c.ajaxSetup({}, b),
                    f = e.context || e,
                    g = f !== e && (f.nodeType ||
                        f instanceof c) ? c(f) : c.event,
                    h = c.Deferred(),
                    k = c._Deferred(),
                    l = e.statusCode || {},
                    m = {},
                    n = {},
                    q, r, w, x, E = 0,
                    C, v = {
                        readyState: 0,
                        setRequestHeader: function(a, b) {
                            if (!E) {
                                var c = a.toLowerCase();
                                a = n[c] = n[c] || a;
                                m[a] = b
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === E ? q : null
                        },
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === E) {
                                if (!r)
                                    for (r = {}; b = Ub.exec(q);) r[b[1].toLowerCase()] = b[2];
                                b = r[a.toLowerCase()]
                            }
                            return b === p ? null : b
                        },
                        overrideMimeType: function(a) {
                            E || (e.mimeType = a);
                            return this
                        },
                        abort: function(a) {
                            a = a || "abort";
                            w && w.abort(a);
                            d(0, a);
                            return this
                        }
                    };
                h.promise(v);
                v.success = v.done;
                v.error = v.fail;
                v.complete = k.done;
                v.statusCode = function(a) {
                    if (a)
                        if (2 > E)
                            for (b in a) l[b] = [l[b], a[b]];
                        else {
                            var b = a[v.status];
                            v.then(b, b)
                        }
                    return this
                };
                e.url = ((a || e.url) + "").replace(Tb, "").replace(Xb, P[1] + "//");
                e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(Fa);
                null == e.crossDomain && (a = cb.exec(e.url.toLowerCase()), e.crossDomain = !(!a || a[1] == P[1] && a[2] == P[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (P[3] || ("http:" === P[1] ? 80 : 443))));
                e.data &&
                    e.processData && "string" !== typeof e.data && (e.data = c.param(e.data, e.traditional));
                Z(ja, e, b, v);
                if (2 === E) return !1;
                var t = e.global;
                e.type = e.type.toUpperCase();
                e.hasContent = !Wb.test(e.type);
                t && 0 === c.active++ && c.event.trigger("ajaxStart");
                if (!e.hasContent) {
                    e.data && (e.url += (bb.test(e.url) ? "\x26" : "?") + e.data, delete e.data);
                    var y = e.url;
                    if (!1 === e.cache) {
                        a = c.now();
                        var A = e.url.replace($b, "$1_\x3d" + a);
                        e.url = A + (A === e.url ? (bb.test(e.url) ? "\x26" : "?") + "_\x3d" + a : "")
                    }
                }(e.data && e.hasContent && !1 !== e.contentType || b.contentType) &&
                v.setRequestHeader("Content-Type", e.contentType);
                e.ifModified && (y = y || e.url, c.lastModified[y] && v.setRequestHeader("If-Modified-Since", c.lastModified[y]), c.etag[y] && v.setRequestHeader("If-None-Match", c.etag[y]));
                v.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q\x3d0.01" : "") : e.accepts["*"]);
                for (C in e.headers) v.setRequestHeader(C, e.headers[C]);
                if (e.beforeSend && (!1 === e.beforeSend.call(f, v, e) || 2 === E)) return v.abort(), !1;
                for (C in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[C](e[C]);
                if (w = Z(eb, e, b, v)) {
                    v.readyState = 1;
                    t && g.trigger("ajaxSend", [v, e]);
                    e.async && 0 < e.timeout && (x = setTimeout(function() {
                        v.abort("timeout")
                    }, e.timeout));
                    try {
                        E = 1, w.send(m, d)
                    } catch (u) {
                        2 > E ? d(-1, u) : c.error(u)
                    }
                } else d(-1, "No Transport");
                return v
            },
            param: function(a, b) {
                var d = [],
                    e = function(a, b) {
                        b = c.isFunction(b) ? b() : b;
                        d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
                    };
                b === p && (b = c.ajaxSettings.traditional);
                if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function() {
                    e(this.name,
                        this.value)
                });
                else
                    for (var f in a) ka(f, a[f], b, e);
                return d.join("\x26").replace(Sb, "+")
            }
        });
        c.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
        var bc = c.now(),
            ea = /(=)\?(&|$)|\?\?/i;
        c.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return c.expando + "_" + bc++
            }
        });
        c.ajaxPrefilter("json jsonp", function(a, b, d) {
            b = "application/x-www-form-urlencoded" === a.contentType && "string" === typeof a.data;
            if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ea.test(a.url) || b && ea.test(a.data))) {
                var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ?
                    a.jsonpCallback() : a.jsonpCallback,
                    g = r[f],
                    h = a.url,
                    k = a.data,
                    l = "$1" + f + "$2";
                !1 !== a.jsonp && (h = h.replace(ea, l), a.url === h && (b && (k = k.replace(ea, l)), a.data === k && (h += (/\?/.test(h) ? "\x26" : "?") + a.jsonp + "\x3d" + f)));
                a.url = h;
                a.data = k;
                r[f] = function(a) {
                    e = [a]
                };
                d.always(function() {
                    r[f] = g;
                    if (e && c.isFunction(g)) r[f](e[0])
                });
                a.converters["script json"] = function() {
                    e || c.error(f + " was not called");
                    return e[0]
                };
                a.dataTypes[0] = "json";
                return "script"
            }
        });
        c.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(a) {
                    c.globalEval(a);
                    return a
                }
            }
        });
        c.ajaxPrefilter("script", function(a) {
            a.cache === p && (a.cache = !1);
            a.crossDomain && (a.type = "GET", a.global = !1)
        });
        c.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
                return {
                    send: function(d, f) {
                        b = q.createElement("script");
                        b.async = "async";
                        a.scriptCharset && (b.charset = a.scriptCharset);
                        b.src = a.url;
                        b.onload = b.onreadystatechange = function(a,
                            d) {
                            if (d || !b.readyState || /loaded|complete/.test(b.readyState)) b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = p, d || f(200, "success")
                        };
                        c.insertBefore(b, c.firstChild)
                    },
                    abort: function() {
                        if (b) b.onload(0, 1)
                    }
                }
            }
        });
        var ua = r.ActiveXObject ? function() {
                for (var a in M) M[a](0, 1)
            } : !1,
            cc = 0,
            M;
        c.ajaxSettings.xhr = r.ActiveXObject ? function() {
            var a;
            if (!(a = !this.isLocal && Ha())) a: {
                try {
                    a = new r.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (b) {}
                a = void 0
            }
            return a
        } : Ha;
        (function(a) {
            c.extend(c.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        })(c.ajaxSettings.xhr());
        c.support.ajax && c.ajaxTransport(function(a) {
            if (!a.crossDomain || c.support.cors) {
                var b;
                return {
                    send: function(d, e) {
                        var f = a.xhr(),
                            g;
                        a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
                        if (a.xhrFields)
                            for (g in a.xhrFields) f[g] = a.xhrFields[g];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                        a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (g in d) f.setRequestHeader(g,
                                d[g])
                        } catch (k) {}
                        f.send(a.hasContent && a.data || null);
                        b = function(d, g) {
                            var k;
                            try {
                                if (b && (g || 4 === f.readyState))
                                    if (b = p, h && (f.onreadystatechange = c.noop, ua && delete M[h]), g) 4 !== f.readyState && f.abort();
                                    else {
                                        var l = f.status;
                                        var q = f.getAllResponseHeaders();
                                        var r = {};
                                        (k = f.responseXML) && k.documentElement && (r.xml = k);
                                        r.text = f.responseText;
                                        try {
                                            var w = f.statusText
                                        } catch (x) {
                                            w = ""
                                        }
                                        l || !a.isLocal || a.crossDomain ? 1223 === l && (l = 204) : l = r.text ? 200 : 404
                                    }
                            } catch (x) {
                                g || e(-1, x)
                            }
                            r && e(l, w, r, q)
                        };
                        if (a.async && 4 !== f.readyState) {
                            var h = ++cc;
                            ua &&
                                (M || (M = {}, c(r).unload(ua)), M[h] = b);
                            f.onreadystatechange = b
                        } else b()
                    },
                    abort: function() {
                        b && b(0, 1)
                    }
                }
            }
        });
        var la = {},
            F, J, dc = /^(?:toggle|show|hide)$/,
            ec = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            fa, Ja = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ],
            aa;
        c.fn.extend({
            show: function(a, b, d) {
                if (a || 0 === a) return this.animate(O("show", 3), a, b, d);
                d = 0;
                for (var e = this.length; d < e; d++) a = this[d], a.style && (b = a.style.display, c._data(a,
                    "olddisplay") || "none" !== b || (b = a.style.display = ""), "" === b && "none" === c.css(a, "display") && c._data(a, "olddisplay", Ka(a.nodeName)));
                for (d = 0; d < e; d++)
                    if (a = this[d], a.style && (b = a.style.display, "" === b || "none" === b)) a.style.display = c._data(a, "olddisplay") || "";
                return this
            },
            hide: function(a, b, d) {
                if (a || 0 === a) return this.animate(O("hide", 3), a, b, d);
                a = 0;
                for (b = this.length; a < b; a++) this[a].style && (d = c.css(this[a], "display"), "none" === d || c._data(this[a], "olddisplay") || c._data(this[a], "olddisplay", d));
                for (a = 0; a < b; a++) this[a].style &&
                    (this[a].style.display = "none");
                return this
            },
            _toggle: c.fn.toggle,
            toggle: function(a, b, d) {
                var e = "boolean" === typeof a;
                c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || e ? this.each(function() {
                    var b = e ? a : c(this).is(":hidden");
                    c(this)[b ? "show" : "hide"]()
                }) : this.animate(O("toggle", 3), a, b, d);
                return this
            },
            fadeTo: function(a, b, c, e) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, e)
            },
            animate: function(a, b, d, e) {
                var f = c.speed(b, d, e);
                if (c.isEmptyObject(a)) return this.each(f.complete, [!1]);
                a = c.extend({}, a);
                return this[!1 === f.queue ? "each" : "queue"](function() {
                    !1 === f.queue && c._mark(this);
                    var b = c.extend({}, f),
                        d = 1 === this.nodeType,
                        e = d && c(this).is(":hidden"),
                        l;
                    b.animatedProperties = {};
                    for (l in a) {
                        var m = c.camelCase(l);
                        l !== m && (a[m] = a[l], delete a[l]);
                        var n = a[m];
                        c.isArray(n) ? (b.animatedProperties[m] = n[1], n = a[m] = n[0]) : b.animatedProperties[m] = b.specialEasing && b.specialEasing[m] || b.easing || "swing";
                        if ("hide" === n && e || "show" === n && !e) return b.complete.call(this);
                        !d || "height" !== m && "width" !== m || (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout ? (n = Ka(this.nodeName), "inline" === n ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                    }
                    null != b.overflow && (this.style.overflow = "hidden");
                    for (l in a)
                        if (d = new c.fx(this, b, l), n = a[l], dc.test(n)) d["toggle" === n ? e ? "show" : "hide" : n]();
                        else {
                            m = ec.exec(n);
                            var q = d.cur();
                            if (m) {
                                n = parseFloat(m[2]);
                                var p = m[3] || (c.cssNumber[l] ? "" : "px");
                                "px" !== p && (c.style(this, l, (n || 1) + p), q *= (n || 1) / d.cur(), c.style(this, l, q + p));
                                m[1] && (n = ("-\x3d" === m[1] ? -1 : 1) * n + q);
                                d.custom(q, n, p)
                            } else d.custom(q, n, "")
                        }
                    return !0
                })
            },
            stop: function(a, b) {
                a && this.queue([]);
                this.each(function() {
                    var a = c.timers,
                        e = a.length;
                    for (b || c._unmark(!0, this); e--;)
                        if (a[e].elem === this) {
                            if (b) a[e](!0);
                            a.splice(e, 1)
                        }
                });
                b || this.dequeue();
                return this
            }
        });
        c.each({
            slideDown: O("show", 1),
            slideUp: O("hide", 1),
            slideToggle: O("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            c.fn[a] = function(a, c, f) {
                return this.animate(b, a, c, f)
            }
        });
        c.extend({
            speed: function(a, b, d) {
                var e = a && "object" === typeof a ? c.extend({}, a) : {
                    complete: d || !d && b || c.isFunction(a) && a,
                    duration: a,
                    easing: d && b || b && !c.isFunction(b) && b
                };
                e.duration = c.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
                e.old = e.complete;
                e.complete = function(a) {
                    c.isFunction(e.old) && e.old.call(this);
                    !1 !== e.queue ? c.dequeue(this) :
                        !1 !== a && c._unmark(this)
                };
                return e
            },
            easing: {
                linear: function(a, b, c, e) {
                    return c + e * a
                },
                swing: function(a, b, c, e) {
                    return (-Math.cos(a * Math.PI) / 2 + .5) * e + c
                }
            },
            timers: [],
            fx: function(a, b, c) {
                this.options = b;
                this.elem = a;
                this.prop = c;
                b.orig = b.orig || {}
            }
        });
        c.fx.prototype = {
            update: function() {
                this.options.step && this.options.step.call(this.elem, this.now, this);
                (c.fx.step[this.prop] || c.fx.step._default)(this)
            },
            cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a, b = c.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
            },
            custom: function(a, b, d) {
                function e(a) {
                    return f.step(a)
                }
                var f = this,
                    g = c.fx;
                this.startTime = aa || Ia();
                this.start = a;
                this.end = b;
                this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
                this.now = this.start;
                this.pos = this.state = 0;
                e.elem = this.elem;
                e() && c.timers.push(e) && !fa && (fa = setInterval(g.tick, g.interval))
            },
            show: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.show = !0;
                this.custom("width" ===
                    this.prop || "height" === this.prop ? 1 : 0, this.cur());
                c(this.elem).show()
            },
            hide: function() {
                this.options.orig[this.prop] = c.style(this.elem, this.prop);
                this.options.hide = !0;
                this.custom(this.cur(), 0)
            },
            step: function(a) {
                var b = aa || Ia(),
                    d = !0,
                    e = this.elem,
                    f = this.options,
                    g;
                if (a || b >= f.duration + this.startTime) {
                    this.now = this.end;
                    this.pos = this.state = 1;
                    this.update();
                    f.animatedProperties[this.prop] = !0;
                    for (g in f.animatedProperties) !0 !== f.animatedProperties[g] && (d = !1);
                    if (d) {
                        null == f.overflow || c.support.shrinkWrapBlocks ||
                            c.each(["", "X", "Y"], function(a, b) {
                                e.style["overflow" + b] = f.overflow[a]
                            });
                        f.hide && c(e).hide();
                        if (f.hide || f.show)
                            for (var h in f.animatedProperties) c.style(e, h, f.orig[h]);
                        f.complete.call(e)
                    }
                    return !1
                }
                Infinity == f.duration ? this.now = b : (a = b - this.startTime, this.state = a / f.duration, this.pos = c.easing[f.animatedProperties[this.prop]](this.state, a, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
                this.update();
                return !0
            }
        };
        c.extend(c.fx, {
            tick: function() {
                for (var a = c.timers, b = 0; b < a.length; ++b) a[b]() ||
                    a.splice(b--, 1);
                a.length || c.fx.stop()
            },
            interval: 13,
            stop: function() {
                clearInterval(fa);
                fa = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function(a) {
                    c.style(a.elem, "opacity", a.now)
                },
                _default: function(a) {
                    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
                }
            }
        });
        c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
            return c.grep(c.timers, function(b) {
                return a === b.elem
            }).length
        });
        var fc =
            /^t(?:able|d|h)$/i,
            fb = /^(?:body|html)$/i;
        c.fn.offset = "getBoundingClientRect" in q.documentElement ? function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            try {
                var d = b.getBoundingClientRect()
            } catch (g) {}
            var e = b.ownerDocument,
                f = e.documentElement;
            if (!d || !c.contains(f, b)) return d ? {
                top: d.top,
                left: d.left
            } : {
                top: 0,
                left: 0
            };
            b = e.body;
            e = ma(e);
            return {
                top: d.top + (e.pageYOffset || c.support.boxModel &&
                    f.scrollTop || b.scrollTop) - (f.clientTop || b.clientTop || 0),
                left: d.left + (e.pageXOffset || c.support.boxModel && f.scrollLeft || b.scrollLeft) - (f.clientLeft || b.clientLeft || 0)
            }
        } : function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                c.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return c.offset.bodyOffset(b);
            c.offset.initialize();
            var d = b.offsetParent,
                e = b.ownerDocument,
                f = e.documentElement,
                g = e.body;
            var h = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle;
            for (var k = b.offsetTop, l = b.offsetLeft;
                (b = b.parentNode) && b !== g && b !== f && (!c.offset.supportsFixedPosition || "fixed" !== h.position);) h = e ? e.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, !c.offset.doesNotAddBorder || c.offset.doesAddBorderForTableAndCells && fc.test(b.nodeName) || (k += parseFloat(h.borderTopWidth) || 0, l += parseFloat(h.borderLeftWidth) || 0), d = b.offsetParent), c.offset.subtractsBorderForOverflowNotVisible && "visible" !== h.overflow && (k += parseFloat(h.borderTopWidth) ||
                0, l += parseFloat(h.borderLeftWidth) || 0);
            if ("relative" === h.position || "static" === h.position) k += g.offsetTop, l += g.offsetLeft;
            c.offset.supportsFixedPosition && "fixed" === h.position && (k += Math.max(f.scrollTop, g.scrollTop), l += Math.max(f.scrollLeft, g.scrollLeft));
            return {
                top: k,
                left: l
            }
        };
        c.offset = {
            initialize: function() {
                var a = q.body,
                    b = q.createElement("div"),
                    d = parseFloat(c.css(a, "marginTop")) || 0;
                c.extend(b.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                });
                b.innerHTML =
                    "\x3cdiv style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e\x3ctable style\x3d'position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e";
                a.insertBefore(b, a.firstChild);
                var e = b.firstChild;
                var f = e.firstChild;
                var g = e.nextSibling.firstChild.firstChild;
                this.doesNotAddBorder = 5 !==
                    f.offsetTop;
                this.doesAddBorderForTableAndCells = 5 === g.offsetTop;
                f.style.position = "fixed";
                f.style.top = "20px";
                this.supportsFixedPosition = 20 === f.offsetTop || 15 === f.offsetTop;
                f.style.position = f.style.top = "";
                e.style.overflow = "hidden";
                e.style.position = "relative";
                this.subtractsBorderForOverflowNotVisible = -5 === f.offsetTop;
                this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== d;
                a.removeChild(b);
                c.offset.initialize = c.noop
            },
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    d = a.offsetLeft;
                c.offset.initialize();
                c.offset.doesNotIncludeMarginInBodyOffset &&
                    (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: d
                }
            },
            setOffset: function(a, b, d) {
                var e = c.css(a, "position");
                "static" === e && (a.style.position = "relative");
                var f = c(a),
                    g = f.offset(),
                    h = c.css(a, "top"),
                    k = c.css(a, "left"),
                    l = {};
                ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [h, k]) ? (k = f.position(), e = k.top, k = k.left) : (e = parseFloat(h) || 0, k = parseFloat(k) || 0);
                c.isFunction(b) && (b = b.call(a, d, g));
                null != b.top && (l.top = b.top - g.top + e);
                null != b.left && (l.left = b.left - g.left +
                    k);
                "using" in b ? b.using.call(a, l) : f.css(l)
            }
        };
        c.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    d = this.offset(),
                    e = fb.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                d.top -= parseFloat(c.css(a, "marginTop")) || 0;
                d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
                e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
                e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a =
                            this.offsetParent || q.body; a && !fb.test(a.nodeName) && "static" === c.css(a, "position");) a = a.offsetParent;
                    return a
                })
            }
        });
        c.each(["Left", "Top"], function(a, b) {
            var d = "scroll" + b;
            c.fn[d] = function(b) {
                var e;
                if (b === p) {
                    var g = this[0];
                    return g ? (e = ma(g)) ? "pageXOffset" in e ? e[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && e.document.documentElement[d] || e.document.body[d] : g[d] : null
                }
                return this.each(function() {
                    (e = ma(this)) ? e.scrollTo(a ? c(e).scrollLeft() : b, a ? b : c(e).scrollTop()): this[d] = b
                })
            }
        });
        c.each(["Height", "Width"],
            function(a, b) {
                var d = b.toLowerCase();
                c.fn["inner" + b] = function() {
                    var a = this[0];
                    return a && a.style ? parseFloat(c.css(a, d, "padding")) : null
                };
                c.fn["outer" + b] = function(a) {
                    var b = this[0];
                    return b && b.style ? parseFloat(c.css(b, d, a ? "margin" : "border")) : null
                };
                c.fn[d] = function(a) {
                    var e = this[0];
                    if (!e) return null == a ? null : this;
                    if (c.isFunction(a)) return this.each(function(b) {
                        var e = c(this);
                        e[d](a.call(this, b, e[d]()))
                    });
                    if (c.isWindow(e)) {
                        var g = e.document.documentElement["client" + b];
                        e = e.document.body;
                        return c.support.boxModel &&
                            g || e && e["client" + b] || g
                    }
                    return 9 === e.nodeType ? Math.max(e.documentElement["client" + b], e.body["scroll" + b], e.documentElement["scroll" + b], e.body["offset" + b], e.documentElement["offset" + b]) : a === p ? (g = c.css(e, d), e = parseFloat(g), c.isNaN(e) ? g : e) : this.css(d, "string" === typeof a ? a : a + "px")
                }
            });
        (function() {
            c.find.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a);
            };
            c.error = function(a) {
                throw "object" === typeof a ? a : Error(a);
            }
        })();
        (function() {
            var a = c._Deferred;
            c._Deferred = function() {
                var b = a(),
                    c =
                    b.done;
                b.done = function() {
                    for (var a = Array(arguments.length), b = 0; b < a.length; b++) {
                        var d = b;
                        var h = arguments[b];
                        h = "function" === typeof h && "function" === typeof N.guardCurrent ? N.guardCurrent(h) : h;
                        a[d] = h
                    }
                    return c.apply(this, a)
                };
                return b
            }
        })();
        (function() {
            var a;
            c.event.special.beforeunload = {
                setup: function(b, d, e) {
                    a = this.onbeforeunload;
                    c.isWindow(this) && (this.onbeforeunload = function() {
                        var b = !1;
                        try {
                            b = c.isFunction(a)
                        } catch (g) {}
                        b && a.apply(this, arguments);
                        e.apply(this, arguments)
                    })
                },
                teardown: function(b, c) {
                    this.onbeforeunload =
                        a
                }
            }
        })();
        return c
    }());
    N.when("jQuery").execute("rtl-jquery-plugin", function(p) {
        p.withoutRtl = function(p) {
            p.apply(this)
        }
    })
});
/* ******** */
(function(f) {
    var g = window.AmazonUIPageJS || window.P,
        l = g._namespace || g.attributeErrors,
        e = l ? l("AmazonUIPromise", "AmazonUI") : g;
    e.guardFatal ? e.guardFatal(f)(e, window) : e.execute(function() {
        f(e, window)
    })
})(function(f, g, l) {
    f.register("3p-promise", function() {
        function e() {}

        function f(a, b) {
            return function() {
                a.apply(b, arguments)
            }
        }

        function d(a) {
            if ("object" !== typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" !== typeof a) throw new TypeError("not a function");
            this._state = 0;
            this._handled = !1;
            this._value = l;
            this._deferreds = [];
            q(a, this)
        }

        function r(a, b) {
            for (; 3 === a._state;) a = a._value;
            0 === a._state ? a._deferreds.push(b) : (a._handled = !0, m(function() {
                var c = 1 === a._state ? b.onFulfilled : b.onRejected;
                if (null === c)(1 === a._state ? n : k)(b.promise, a._value);
                else {
                    try {
                        var h = c(a._value)
                    } catch (u) {
                        k(b.promise, u);
                        return
                    }
                    n(b.promise, h)
                }
            }))
        }

        function n(a, b) {
            try {
                if (b === a) throw new TypeError("A promise cannot be resolved with itself.");
                if (b && ("object" === typeof b || "function" === typeof b)) {
                    var c = b.then;
                    if (b instanceof d) {
                        a._state = 3;
                        a._value = b;
                        p(a);
                        return
                    }
                    if ("function" === typeof c) {
                        q(f(c, b), a);
                        return
                    }
                }
                a._state = 1;
                a._value = b;
                p(a)
            } catch (h) {
                k(a, h)
            }
        }

        function k(a, b) {
            a._state = 2;
            a._value = b;
            p(a)
        }

        function p(a) {
            2 === a._state && 0 === a._deferreds.length && m(function() {
                a._handled || t(a._value)
            });
            for (var b = 0, c = a._deferreds.length; b < c; b++) r(a, a._deferreds[b]);
            a._deferreds = null
        }

        function v(a, b, c) {
            this.onFulfilled = "function" === typeof a ? a : null;
            this.onRejected = "function" === typeof b ? b : null;
            this.promise = c
        }

        function q(a, b) {
            var c = !1;
            try {
                a(function(a) {
                    c ||
                        (c = !0, n(b, a))
                }, function(a) {
                    c || (c = !0, k(b, a))
                })
            } catch (h) {
                c || (c = !0, k(b, h))
            }
        }
        if ("function" === typeof g.Promise) return g.Promise;
        var w = setTimeout,
            m = "function" === typeof setImmediate && setImmediate || function(a) {
                w(a, 0)
            },
            t = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
        d.prototype["catch"] = function(a) {
            return this.then(null, a)
        };
        d.prototype.then = function(a, b) {
            var c = new this.constructor(e);
            r(this, new v(a, b, c));
            return c
        };
        d.all = function(a) {
            var b = Array.prototype.slice.call(a);
            return new d(function(a, d) {
                function c(e, f) {
                    try {
                        if (f && ("object" === typeof f || "function" === typeof f)) {
                            var g = f.then;
                            if ("function" === typeof g) {
                                g.call(f, function(a) {
                                    c(e, a)
                                }, d);
                                return
                            }
                        }
                        b[e] = f;
                        0 === --h && a(b)
                    } catch (x) {
                        d(x)
                    }
                }
                if (0 === b.length) return a([]);
                for (var h = b.length, e = 0; e < b.length; e++) c(e, b[e])
            })
        };
        d.resolve = function(a) {
            return a && "object" === typeof a && a.constructor === d ? a : new d(function(b) {
                b(a)
            })
        };
        d.reject = function(a) {
            return new d(function(b, c) {
                c(a)
            })
        };
        d.race = function(a) {
            return new d(function(b, c) {
                for (var d =
                        0, e = a.length; d < e; d++) a[d].then(b, c)
            })
        };
        d._setImmediateFn = function(a) {
            m = a
        };
        d._setUnhandledRejectionFn = function(a) {
            t = a
        };
        return d
    })
});
/* ******** */
(function(n) {
    var p = window.AmazonUIPageJS || window.P,
        u = p._namespace || p.attributeErrors,
        h = u ? u("AmazonUIBaseJS", "AmazonUI") : p;
    h.guardFatal ? h.guardFatal(n)(h, window) : h.execute(function() {
        n(h, window)
    })
})(function(n, p, u) {
    n.when("jQuery").register("a-base", function(h) {
        return {
            version: function() {
                return "3.0"
            },
            $: h
        }
    });
    "use strict";
    n.declare("prv:a-declarative-analytics", {
        notify: function() {},
        setOptions: function() {}
    });
    "use strict";
    n.register("prv:a-guard", function(h) {
        function k(e, a) {
            return e._guard && "function" ===
                typeof a ? e._guard(a) : a
        }
        return {
            fn: k,
            obj: function(e, a) {
                if (!e._guard) return a;
                var m = {},
                    c;
                for (c in a) a.hasOwnProperty(c) && (m[c] = k(e, a[c]));
                return m
            }
        }
    });
    "use strict";
    n.declare("a-timing-analytics", {
        startWidgetLogging: function() {},
        stopWidgetLogging: function() {}
    });
    "use strict";
    n.declare("a-event-analytics", {
        handle: function() {},
        notifyDeclarativeAction: function() {},
        notifyJquery: function() {}
    });
    "use strict";
    n.register("priv:a-visibility", function() {
        function h(k) {
            for (var e = ["hidden", "webkitHidden", "mozHidden",
                    "msHidden", "oHidden"
                ], a = 0; a < e.length; a += 1)
                if (e[a] in k) return e[a]
        }
        return function(k) {
            var e = h(k);
            return e ? function() {
                return k[e]
            } : function() {
                return !1
            }
        }
    });
    "use strict";
    n.when("a-base", "priv:a-visibility").register("a-util", function(h, k) {
        function e(b) {
            if ("" !== b.id) return '//*[@id\x3d"' + b.id + '"]';
            if (b === document.documentElement) return "/html";
            var f = a(b).parent().find(" \x3e " + b.tagName).index(b);
            if (-1 === f) throw "can not evaluate xpath of element `" + b.tagName + (b.id ? "#" + b.id : "") + "`";
            return e(b.parentNode) +
                "/" + b.tagName + "[" + (f + 1) + "]"
        }
        var a = h.$,
            m = Date.now,
            c = function() {
                function b(b, g, x) {
                    if (null !== b)
                        if (Array.prototype.forEach && b.forEach === Array.prototype.forEach) b.forEach(g, x);
                        else if (b.length === +b.length)
                        for (var r = 0, a = b.length; r < a && !(r in b && g.call(x, b[r], r, b) === f); r++);
                    else
                        for (r in b)
                            if (b.hasOwnProperty(r) && g.call(x, b[r], r, b) === {}) break
                }
                var f = {};
                return {
                    each: b,
                    map: function(f, g, x) {
                        var r = [];
                        if (null === f) return r;
                        if (Array.prototype.map && f.map === Array.prototype.map) return f.map(g, x);
                        b(f, function(b, f, l) {
                            r[r.length] =
                                g.call(x, b, f, l)
                        });
                        f.length === +f.length && (r.length = f.length);
                        return r
                    },
                    reduce: function(f, g, x, r) {
                        var a = 2 < arguments.length;
                        null === f && (f = []);
                        if (Array.prototype.reduce && f.reduce === Array.prototype.reduce) return a ? f.reduce(g, x) : f.reduce(g);
                        b(f, function(b, f, l) {
                            a ? x = g.call(r, x, b, f, l) : (x = b, a = !0)
                        });
                        a || n.error("Reduce of empty array with no initial value", "A.util", "reduce");
                        return x
                    },
                    filter: function(f, g, a) {
                        var r = [];
                        if (null === f) return r;
                        if (Array.prototype.filter && f.filter === Array.prototype.filter) return f.filter(g,
                            a || f);
                        b(f, function(b, c, w) {
                            g.call(a || f, b, c, w) && r.push(b)
                        });
                        return r
                    },
                    range: function(b, f, a) {
                        f === u && (f = b || 0, b = 0);
                        a = a || 1;
                        f = Math.max(Math.ceil((f - b) / a), 0);
                        for (var r = Array(f), c = 0; c < f; c++, b += a) r[c] = b;
                        return r
                    },
                    breaker: f
                }
            }();
        h = function() {
            function b(b, l) {
                var g = Array.prototype.slice.call(arguments, 2);
                return setTimeout(function() {
                    return b.apply(null, g)
                }, l)
            }
            return {
                throttle: function(b, l, g) {
                    var a, r, c, d = null,
                        w = 0;
                    g = g || {};
                    var t = function() {
                        w = !1 === g.leading ? 0 : m();
                        d = null;
                        c = b.apply(a, r);
                        a = r = null
                    };
                    return function() {
                        var e =
                            m();
                        w || !1 !== g.leading || (w = e);
                        var k = l - (e - w);
                        a = this;
                        r = arguments;
                        0 >= k ? (clearTimeout(d), d = null, w = e, c = b.apply(a, r), a = r = null) : d || !1 === g.trailing || (d = setTimeout(t, k));
                        return c
                    }
                },
                sequence: function() {
                    var b = [].slice,
                        l = b.call(arguments).reverse(),
                        g = this;
                    return c.reduce(l, function(l, a) {
                        return function() {
                            var c = b.call(arguments);
                            c.push(l);
                            a.apply(g, c)
                        }
                    }, function() {})
                },
                debounce: function(b, l, g) {
                    var a, r, c, d, w, t = function() {
                        var e = m() - d;
                        e < l ? a = setTimeout(t, l - e) : (a = null, g || (w = b.apply(c, r), c = r = null))
                    };
                    return function() {
                        c =
                            this;
                        r = arguments;
                        d = m();
                        var e = g && !a;
                        a || (a = setTimeout(t, l));
                        e && (w = b.apply(c, r), c = r = null);
                        return w
                    }
                },
                delay: b,
                animationFrameDelay: function(f) {
                    return b(f, 16)
                },
                interval: function(b, a) {
                    return setInterval(b, a)
                },
                once: function(b) {
                    var a = !1,
                        g;
                    return function() {
                        a || (a = !0, g = b.apply(this, arguments));
                        return g
                    }
                },
                rest: function(b, a) {
                    if (b) {
                        var g = Math.max(a === u ? b.length - 1 : a, 0);
                        return function() {
                            for (var a = arguments, l = -1, c = Math.max(a.length - g, 0), d = Array(c); ++l < c;) d[l] = a[l + g];
                            switch (g) {
                                case 0:
                                    return b.call(this, d);
                                case 1:
                                    return b.call(this,
                                        a[0], d);
                                case 2:
                                    return b.call(this, a[0], a[1], d)
                            }
                            c = Array(g + 1);
                            for (l = -1; ++l < g;) c[l] = a[l];
                            c[g] = d;
                            return b.apply(this, c)
                        }
                    }
                }
            }
        }();
        var d = function() {
                function b(f, g) {
                    f = f || {};
                    g = g || {};
                    var a = {},
                        l;
                    for (l in f) f.hasOwnProperty(l) && (a[l] = "object" === typeof f[l] && f[l] ? b(f[l], g[l]) : f[l] !== g[l]);
                    for (l in g) g.hasOwnProperty(l) && !a[l] && (a[l] = "object" === typeof g[l] && g[l] ? b(g[l], f[l]) : g[l] !== f[l]);
                    return a
                }

                function f(b, g) {
                    var l;
                    if (b === g) return !0;
                    if (a.isArray(b)) {
                        if (!a.isArray(g) || b.length !== g.length) return !1;
                        for (l = b.length; l--;)
                            if (!f(b[l],
                                    g[l])) return !1;
                        return !0
                    }
                    if (a.isPlainObject(b)) {
                        if (!a.isPlainObject(g) || a.isEmptyObject(b) && !a.isEmptyObject(g)) return !1;
                        for (l in b)
                            if (!f(b[l], g[l])) return !1;
                        return !0
                    }
                    return !1
                }

                function l(b) {
                    if (!("function" === typeof b || "object" === typeof b && b)) return [];
                    if (Object.keys) return Object.keys(b);
                    var f = [],
                        g;
                    for (g in b) b.hasOwnProperty(g) && f.push(g);
                    return f
                }

                function g(b, f, g) {
                    Object.defineProperty(b, f, {
                        value: g,
                        writable: !1
                    });
                    return g
                }

                function c(b, f, g) {
                    b.hasOwnProperty(f) || (b[f] = g);
                    return g
                }
                return {
                    keys: l,
                    values: function(b) {
                        for (var f =
                                l(b), g = Array(f.length), a = 0; a < f.length; a++) g[a] = b[f[a]];
                        return g
                    },
                    extend: function() {
                        Array.prototype.unshift.call(arguments, !0);
                        return a.extend.apply(a, arguments)
                    },
                    mixin: function(b, f, g) {
                        if (g)
                            for (var l = 0, a = g.length; l < a; l++) b[g[l]] = f[g[l]];
                        else
                            for (l in f) "function" === typeof f[l] && (b[l] = f[l])
                    },
                    diff: b,
                    equals: f,
                    copy: function(b) {
                        return a.isArray(b) ? a.extend(!0, [], b) : a.isPlainObject(b) ? a.extend(!0, {}, b) : b
                    },
                    indexOfArray: function(b, f, g) {
                        if (Array.prototype.indexOf && b.indexOf === Array.prototype.indexOf) return b.indexOf(f,
                            g);
                        b && b instanceof Array || n.error("Invalid arr passed to A.indexOfArray: " + b, "A.util", "indexOfArray");
                        g = parseInt(g, 10);
                        g = isNaN(g) ? 0 : g;
                        if (!isFinite(g)) return -1;
                        for (var l = b.length; g < l; g++)
                            if (b[g] === f) return g;
                        return -1
                    },
                    isArray: function(b) {
                        return Array.isArray ? Array.isArray(b) : "[object Array]" === Object.prototype.toString.call(b)
                    },
                    isFiniteNumber: function(b) {
                        return "number" === typeof b && !isNaN(b) && isFinite(b)
                    },
                    objectIsEmpty: function(b) {
                        for (var f in b)
                            if (b.hasOwnProperty(f)) return !1;
                        return !0
                    },
                    constProp: "function" ===
                        typeof Object.defineProperty ? g : c
                }
            }(),
            t = function() {
                var b = {
                        "\x26": "\x26amp;",
                        "\x3c": "\x26lt;",
                        "\x3e": "\x26gt;",
                        '"': "\x26quot;",
                        "'": "\x26#39;",
                        "/": "\x26#x2F;"
                    },
                    f = /^\s+/,
                    l = /\s+$/,
                    g = new RegExp("[" + d.keys(b).join("") + "]", "g"),
                    a = /([!"#$%&'\(\)*+,./:;<=>?@\[\\\]^`{|}~])/g;
                return {
                    trim: function(b) {
                        return String.prototype.trim ? String.prototype.trim.call(b) : b.replace(f, "").replace(l, "")
                    },
                    contains: function(b, f) {
                        return -1 !== ("" + b).indexOf(f)
                    },
                    escapeHtml: function(f) {
                        return ("" + f).replace(g, function(f) {
                            return b[f]
                        })
                    },
                    escapeJquerySelector: function(b) {
                        return ("" + b).replace(a, "\\$1")
                    }
                }
            }(),
            q = function() {
                function b() {
                    f = {};
                    for (var b = (document.cookie || "").split(";"), g = b.length - 1; 0 <= g; g--) {
                        var a = b[g].split("\x3d"),
                            c = t.trim(a[0]);
                        if (c) {
                            var d = f,
                                a = a.slice(1).join("\x3d"),
                                a = t.trim(a);
                            /^"/.test(a) && (a = a.slice(1, -1).replace(/\\(.)/g, "$1"));
                            a = p.decodeURIComponent(a);
                            d[c] = a
                        }
                    }
                }
                var f;
                return {
                    get: function(a) {
                        f || b();
                        return f[a]
                    },
                    getAll: function() {
                        f || b();
                        return d.extend({}, f)
                    },
                    refresh: function() {
                        f = null
                    }
                }
            }(),
            v = function() {
                var b = document.createElement("fakeelement"),
                    f = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    },
                    a = null;
                return {
                    getTransitionEndEvent: function() {
                        /UCBrowser/.exec(navigator.userAgent) && (a = f.WebkitTransition);
                        if (null === a)
                            for (var g in f)
                                if (b.style[g] !== u) {
                                    a = f[g];
                                    break
                                }
                        return a
                    }
                }
            }();
        k = k(document);
        return {
            now: m,
            extend: d.extend,
            mixin: d.mixin,
            copy: d.copy,
            constProp: d.constProp,
            diff: d.diff,
            equals: d.equals,
            objectIsEmpty: d.objectIsEmpty,
            indexOfArray: d.indexOfArray,
            isArray: d.isArray,
            isFiniteNumber: d.isFiniteNumber,
            keys: d.keys,
            values: d.values,
            xpath: e,
            cssSelector: function(b) {
                var f = [b.tagName || ""];
                b.className && b.className.trim && f.push("." + b.className.trim().replace(/\s+/g, "."));
                b.id && f.push("#" + b.id);
                return f.join("")
            },
            parseJSON: function(b) {
                return a.parseJSON(b)
            },
            throttle: h.throttle,
            sequence: h.sequence,
            debounce: h.debounce,
            delay: h.delay,
            animationFrameDelay: h.animationFrameDelay,
            interval: h.interval,
            once: h.once,
            rest: h.rest,
            trim: t.trim,
            contains: t.contains,
            escapeHtml: t.escapeHtml,
            escapeJquerySelector: t.escapeJquerySelector,
            map: c.map,
            reduce: c.reduce,
            filter: c.filter,
            range: c.range,
            each: c.each,
            breaker: c.breaker,
            onScreen: function(b, f) {
                f = "number" === typeof f && !isNaN(f) && isFinite(f) ? f : 100;
                var l = a(b);
                if (!l.is(":visible")) return !1;
                var g = a(p);
                b = g.scrollTop();
                var g = p.innerHeight ? p.innerHeight : g.height(),
                    c = b + g;
                b -= f;
                c += f;
                f = l.offset().top;
                var l = l.height(),
                    d = f + l;
                return f >= b && f < c || d > b && d <= c || l > g && f <= b && d >= c
            },
            isATF: function(b, f) {
                f = "number" === typeof f && !isNaN(f) && isFinite(f) ? f : 100;
                var l = a(p);
                f = (p.innerHeight ? p.innerHeight : l.height()) +
                    f;
                b = a(b).offset().top;
                return 0 <= b && b < f
            },
            setCssImportant: function(b, f, a) {
                b = b.jquery ? b[0] : b;
                "undefined" !== typeof b && (b = b.style, b.cssText = b.cssText.replace(new RegExp(f + "\\s*:\\s*[.^;]*(\\s*;)?", "gmi"), ""), b.cssText += f + ": " + a + " !important;")
            },
            getTransitionEndEvent: v.getTransitionEndEvent,
            cookies: q,
            widescreen: function() {
                return 0 < a("html.a-ws").length
            },
            isPageHidden: k
        }
    });
    "use strict";
    n.when("p-detect", "a-util").register("a-detect", function(h, k) {
        var e;
        try {
            e = navigator.userAgent
        } catch (t) {
            e = ""
        }
        var a = k.copy(h),
            m = function() {
                var a = /(?:Android\s+|Windowshop.*Android\/|Android\/)(\d+\.\d+(?:\.\d+)*)/.exec(e);
                return a && a[1]
            },
            c = /Trident/.test(e),
            d = {};
        k.each({
            isAmazonApp: function() {
                return /(Windowshop|Amazon|Amazon\.com)\//.test(k.cookies.get("amzn-app-id"))
            },
            isGen5App: function() {
                return /Windowshop.*(?:KFOT|KFTH|KFJWA|KFJWI|KFTT)/.test(e)
            },
            androidVersion: function() {
                return m()
            },
            isAndroidKitkatPlus: function() {
                var a = m();
                return a && null !== a.match(/(^4\.[4-9]|^[5-9])/)
            },
            isChrome: function() {
                return /Chrome/.test(e)
            },
            chromeVersion: function() {
                var a =
                    /Chrome\/(\d+\.\d+(?:\.\d+)*)/.exec(e);
                if (a[1]) return a[1]
            },
            isUCBrowser: function() {
                return /UCBrowser/.test(e)
            },
            isSafari: function() {
                var a = document.documentElement.style;
                return !("MozAppearance" in a) && "webkitAppearance" in a && /^Apple/.test(navigator.vendor)
            },
            isAndroidStockGuess: function() {
                var c = !1;
                a.capabilities.android && !/Chrome|Opera|Firefox|UCBrowser/.test(e) && (c = /AppleWebKit\/(\d+\.\d+)/.exec(e), c = c[1] && "535" > c[1]);
                return c
            },
            isFirefox: function() {
                return /Firefox/.test(e)
            },
            isAndroid: function() {
                return a.capabilities.android
            },
            isOldAndroid: function() {
                return /Android\s[12]/.test(e)
            },
            isIE: function() {
                return c
            },
            isIE10: function() {
                return c && "onmspointerup" in document && !("onpointerup" in document)
            },
            isIE10Plus: function() {
                return c && ("onpointerup" in document || "onmspointerup" in document)
            },
            isIE11Plus: function() {
                return c && "onpointerup" in document
            },
            isiOS8: function() {
                return a.capabilities.ios && /Version\/8\./.test(e)
            },
            isIETouchCapable: function() {
                return a.capabilities.isIE10Plus && /Touch;/.test(e)
            },
            isMetroIEGuess: function() {
                var c = !0;
                try {
                    c =
                        new ActiveXObject("htmlfile")
                } catch (d) {
                    c = !1
                }
                return a.capabilities.isIE10Plus && !a.capabilities.mobile && !c
            },
            pointerPrefix: function() {
                return "onmspointerup" in document || "onpointerup" in document ? "onpointerup" in document ? "pointer" : "MSPointer" : !1
            },
            actionMode: function() {
                var c = a.capabilities.pointerPrefix;
                return c ? c : a.capabilities.touch ? "touch" : "mouse"
            }
        }, function(c, d) {
            var e = a.capabilities,
                b;
            try {
                b = c()
            } catch (f) {
                b = !1
            }
            e[d] = b
        });
        k.each({
            start: {
                mouse: "down",
                touch: "start",
                pointer: "down",
                MSPointer: "Down"
            },
            end: {
                mouse: "up",
                touch: "end",
                pointer: "up",
                MSPointer: "Up"
            },
            move: {
                mouse: "move",
                touch: "move",
                pointer: "move",
                MSPointer: "Move"
            },
            enter: {
                mouse: "enter",
                touch: "enter",
                pointer: "enter"
            },
            leave: {
                mouse: "leave",
                touch: "leave",
                pointer: "leave"
            },
            cancel: {
                touch: "cancel",
                pointer: "cancel",
                MSPointer: "Cancel"
            },
            over: {
                mouse: "over",
                pointer: "over",
                MSPointer: "Over"
            },
            out: {
                mouse: "out",
                pointer: "out",
                MSPointer: "Out"
            }
        }, function(c, e) {
            var m = a.capabilities.actionMode,
                b = "string" === typeof c ? c : c[m];
            d[e] = b ? m + b : c.mouse === u ? "" : "mouse" + c.mouse
        });
        a.action = d;
        h = {};
        "pointer" === a.capabilities.pointerPrefix ? (h.touch = "touch", h.pen = "pen", h.mouse = "mouse", h.unknown = "") : "MSPointer" === a.capabilities.pointerPrefix && (h.touch = 2, h.pen = 3, h.mouse = 4);
        a.pointerType = h;
        return a
    });
    "use strict";
    n.when("prv:a-guard").register("a-defer", function(h) {
        function k(c) {
            var d = 0,
                e = setTimeout(function() {
                    k(c)
                }, 0);
            if (0 === c.length) clearTimeout(e), a = !1;
            else {
                var h = Date.now();
                c.shift().call();
                m += Date.now() - h;
                50 < m && (d = 50, m = 0);
                setTimeout(function() {
                    k(c)
                }, d);
                clearTimeout(e)
            }
        }
        var e = [],
            a = !1,
            m = 0;
        return {
            defer: function(c) {
                e.push(h.fn(this, c));
                a || (a = !0, setTimeout(function() {
                    k(e)
                }, 0))
            },
            pauseDeferred: function() {},
            executeDeferred: function() {}
        }
    });
    "use strict";
    n.when("jQuery", "a-util", "p-detect", "a-event-revised-handling").register("a-events", function(h, k, e, a) {
        function m(b, a) {
            !1 !== a && q.makeTopicTimeSliced(b);
            d[b] = !0;
            q.subscribe(b, function() {
                n.register(b, function() {
                    var b = p.aPageStart || k.now();
                    return {
                        time: k.now() - b
                    }
                })
            });
            q.publish(b);
            q.unsubscribe(b)
        }

        function c() {
            d.beforeLoad && d.load || (m("beforeLoad"),
                m("load"), setTimeout(function() {
                    m("beforeAfterLoad");
                    m("afterLoad")
                }, 1500))
        }
        var d = {},
            t = h(p),
            q = function() {
                function b(f) {
                    for (var g, a = [], l = 0, c = h.length; l < c; l++) g = h[l].id, f !== g && a.push(h[l]);
                    h = a
                }

                function l(b, f) {
                    f = [f, "Event execution failed for event " + b.topic, "FATAL"];
                    b.logError ? b.logError.apply(b, f) : n.logError.apply(n, f)
                }

                function g(a) {
                    for (var c = setTimeout(g, 0), d = k.now(), e;
                        (e = h.shift()) !== u;) try {
                        if (!1 === e.fn.apply(p, e.args) && (clearTimeout(c), b(e.id)), !0 === a && 50 <= k.now() - d) {
                            clearTimeout(c);
                            k.delay(g, 15);
                            return
                        }
                    } catch (m) {
                        l(e, m);
                        return
                    }
                    clearTimeout(c);
                    w = !1
                }

                function c() {
                    for (var g = k.now(), a;
                        (a = h.shift()) !== u;) try {
                        if (!1 === a.fn.apply(p, a.args) && b(a.id), h.length && 50 <= k.now() - g) {
                            k.delay(c, 15);
                            return
                        }
                    } catch (d) {
                        l(a, d)
                    }
                    w = !1
                }

                function d(b) {
                    for (var f;
                        (f = b.shift()) !== u;) try {
                        if (!1 === f.fn.apply(p, f.args)) break
                    } catch (g) {
                        l(f, g)
                    }
                }
                var e = {},
                    m = 0,
                    w = !1,
                    h = [];
                return {
                    publish: function(b) {
                        var f = e[b];
                        if (f) {
                            var l = f.isTimeSliced,
                                k = Array.prototype.slice.call(arguments, 1),
                                q = m++,
                                t = [],
                                v = function(f, g) {
                                    g.push({
                                        topic: b,
                                        id: q,
                                        fn: f.guard ?
                                            f.guard(f.fn) : f.fn,
                                        args: k,
                                        logError: f.logError
                                    })
                                };
                            if (l)
                                for (var n;
                                    (n = f.shift()) !== u;) v(n, h);
                            else {
                                n = 0;
                                for (var p = f.length; n < p; n++) v(f[n], a ? t : h)
                            }
                            a ? l ? w || (w = !0, c()) : d(t) : w || (w = !0, g(l))
                        }
                    },
                    subscribe: function(b, f, g) {
                        e[b] || (e[b] = []);
                        if ("function" === typeof f) return e[b].unshift({
                            fn: f,
                            logError: g && g.logError,
                            guard: g && g.guard
                        }), {
                            event: b,
                            callback: f
                        }
                    },
                    unsubscribe: function(b, f) {
                        var g;
                        for (b = b.split(" ");
                            (g = b.pop()) !== u;)
                            if (e[g])
                                if (f) {
                                    g = e[g];
                                    for (var a = 0, l = g.length; a < l; a++) g[a] && g[a].fn === f && g.splice(a--, 1)
                                } else e[g] = []
                    },
                    isSubscribed: function(b) {
                        return b in e && 0 < e[b].length
                    },
                    makeTopicTimeSliced: function(b) {
                        e[b] || (e[b] = []);
                        e[b].isTimeSliced = !0
                    }
                }
            }(),
            v = function() {
                var b = function(b, f, a) {
                    var c = b.split(" "),
                        e = [],
                        m = f,
                        w = this ? {
                            logError: this._logError,
                            guard: this._guard
                        } : {};
                    for (!0 === a && (m = function() {
                            f.apply(p, arguments);
                            q.unsubscribe(b, m)
                        });
                        (a = c.pop()) !== u;) d[a] ? (q.subscribe(a, f, w), q.publish(a), q.unsubscribe(a)) : e.push(q.subscribe(a, m, w).event);
                    return {
                        event: e.join(" "),
                        callback: m
                    }
                };
                k.each("ready load unload afterLoad scroll resize orientationchange zoom".split(" "),
                    function(a, g) {
                        b[a] = function() {
                            b.apply(p, [a].concat([].slice.call(arguments, 0)))
                        }
                    });
                return b
            }(),
            b = k.once(function() {
                e.responsiveGridEnabled() && e.toggleResponsiveGrid(!0);
                m("beforeReady");
                m("ready");
                m("afterReady");
                "complete" === document.readyState && c()
            });
        h(document).ready(b);
        n.when("a-bodyBegin").execute(function() {
            m("bodyBegin")
        });
        n.when("a-domready").execute(b);
        t.load(c);
        t.unload(function() {
            m("unload", !1)
        });
        return {
            isListening: q.isSubscribed,
            on: v,
            one: function(b, a) {
                var g = b.split(" ");
                if (1 < g.length) n.error("A.one only accepts a single event name, but was provided with: " +
                    g.length + ", (" + b + ")", "A.events", "one");
                else return v(b, a, !0)
            },
            off: function(b, a) {
                var g;
                "object" === typeof b ? (g = b.event, b = b.callback) : (g = b, b = a);
                return q.unsubscribe(g, b)
            },
            trigger: function() {
                q.publish.apply(p, arguments)
            },
            events: {
                defaults: {
                    input: "change",
                    select: "change",
                    a: "click",
                    button: "click",
                    form: "submit"
                }
            }
        }
    });
    "use strict";
    n.when("a-util", "a-events").register("a-prefix", function(h, k) {
        function e(a) {
            return a.toLowerCase().replace(/-(.)/g, function(a, c) {
                return c.toUpperCase()
            })
        }
        var a = {
                transitionend: null
            },
            m = document.createElement("div").style,
            c = {},
            d = ["o", "ms", "moz", "webkit"];
        k.on("beforeReady", function() {
            if (p.addEventListener) {
                var c = document.createElement("div"),
                    d = function(c) {
                        a.transitionend = c.type;
                        this.removeEventListener("webkitTransitionEnd", d, !1);
                        this.removeEventListener("transitionend", d, !1);
                        this.removeEventListener("otransitionend", d, !1);
                        this.removeEventListener("oTransitionEnd", d, !1)
                    };
                c.setAttribute("style", "position:absolute;top:0px;z-index:-1;transition:top 1ms ease;-webkit-transition:top 1ms ease;-moz-transition:top 1ms ease;-o-transition:top 1ms ease;");
                c.addEventListener("transitionend", d, !1);
                c.addEventListener("webkitTransitionEnd", d, !1);
                c.addEventListener("otransitionend", d, !1);
                this.addEventListener("oTransitionEnd", d, !1);
                document.body.appendChild(c);
                h.delay(function() {
                    c.style.top = "100px";
                    h.delay(function() {
                        c.parentNode.removeChild(c);
                        c = d = null;
                        h.each(a, function(a) {})
                    }, 100)
                }, 0)
            }
        });
        return {
            prefixes: {
                getStyle: function(a) {
                    if (!c[a]) {
                        var h = e(a);
                        if (h in m) c[a] = h;
                        else
                            for (var h = h.charAt(0).toUpperCase() + h.slice(1), k = d.length; k--;) {
                                var b = d[k] + h;
                                b in m &&
                                    (c[a] = b)
                            }
                    }
                    return c[a]
                },
                getEvent: function(c) {
                    return c ? a[c.toLowerCase()] : u
                }
            }
        }
    });
    "use strict";
    n.when("a-base", "a-util", "a-events", "a-event-analytics", "a-timing-analytics", "prv:a-declarative-analytics", "p-recorder-stop").register("a-declarative", function(h, k, e, a, m, c, d) {
        function t(b) {
            var f = q(b.currentTarget),
                c = q(b.target);
            if ("submit" === b.type) {
                var g = c.closest("form");
                g.length && (c = g)
            }
            if (g = f.data("action")) g = g.split(" "), k.each(g, function(g) {
                var d = v[g] || {},
                    m = f.data(g),
                    h = b.type,
                    w = {
                        $target: c,
                        $currentTarget: f,
                        targetTag: c.prop("tagName").toLowerCase(),
                        type: h,
                        action: g,
                        data: m,
                        $event: b,
                        $declarativeParent: f
                    };
                g = "a:declarative:" + g;
                h = g + ":" + h;
                e.trigger(g, w);
                e.trigger(h, w);
                e.isListening(h) || a.handle(b);
                w = !1;
                m ? w = !!m.allowLinkDefault : d && (w = !!d.allowLinkDefault);
                "click" !== b.type || w ? d = !1 : (d = c.closest("a"), d = d.length && ("#" === d[0].href || b.currentTarget === d[0] || d.parent(".a-declarative").length));
                d && b.preventDefault()
            })
        }
        var q = h.$,
            v = {};
        d();
        q(document).delegate(".a-declarative", "blur click dblclick focus focusin focusout mousedown mouseup mouseenter mouseleave mousemove change submit touchstart touchend touchmove touchcancel keydown keyup keypress MSPointerDown pointerdown MSPointerUp pointerup MSPointerMove pointermove MSPointerCancel pointercancel MSPointerOver pointerenter MSPointerOut pointerleave",
            t).delegate(".a-gesture", "tap swipe swipe-horizontal swipe-vertical pan-horizontal pan-vertical doubleTap", t);
        h = function() {
            var b, f, l, g;
            switch (arguments.length) {
                case 2:
                    b = arguments[0];
                    g = arguments[1];
                    break;
                case 3:
                    b = arguments[0];
                    f = arguments[1];
                    g = arguments[2];
                    break;
                case 4:
                    b = arguments[0], f = arguments[1], l = arguments[2], g = arguments[3]
            }
            if (b) {
                "string" === typeof b && (b = k.trim(b).split(" "));
                var d = this;
                k.each(b, function(b) {
                    var m = "a:declarative:" + b;
                    v[b] = l || {};
                    f ? (f = "string" === typeof f ? k.trim(f).split(" ") : f, k.each(f,
                        function(f) {
                            e.on.call(d, m + ":" + f, g);
                            a.notifyDeclarativeAction(b, f);
                            c.notify(b, f)
                        })) : e.on.call(d, m, g)
                })
            }
        };
        h.create = function(b, a, c) {
            var g = b.jquery && b.length ? b : q(b);
            if (g.length && a) {
                var d = g.data("action");
                g.data("action", d ? d + " " + a : a).data(a, c ? c : {});
                g.addClass("a-declarative")
            }
            return b
        };
        h.remove = function(b, a) {
            var c = b.jquery && b.length ? b : q(b),
                g = c.data("action");
            a = a || g;
            if (c.length && g) {
                for (var g = g.split(" "), d = g.length; d--;) g[d] !== a && "" !== g[d] || g.splice(d, 1);
                g.length ? c.data("action", g.join("")) : c.data("action",
                    null).removeClass("a-declarative");
                c.data(a, null)
            }
            return b
        };
        m.stopWidgetLogging("declarative");
        return {
            declarative: h
        }
    });
    "use strict";
    n.when("a-util", "jQuery", "a-declarative").register("a-draggable", function(h, k, e) {
        var a, m = {
                _maxZIndex: 0,
                _isInit: !1,
                _draggables: [],
                _init: function() {
                    this._isInit || (this._isInit = !0, this._maxZIndex = 975)
                },
                create: function(a) {
                    this._init();
                    a._zimIndex || (a._zimIndex = 975, this._maxZIndex += 1, this._draggables.push(a));
                    this.acquireFocus(a)
                },
                acquireFocus: function(c) {
                    c.css("zIndex", this._maxZIndex);
                    a.css("zIndex", this._maxZIndex - 1);
                    for (var b = 0; b < this._draggables.length; b++) {
                        var f = this._draggables[b];
                        f[0] !== c[0] && f._zimIndex > c._zimIndex && (f._zimIndex -= f._zimIndex > this._maxZIndex - 1 ? 2 : 1, f.css("zIndex", f._zimIndex))
                    }
                    c._zimIndex = this._maxZIndex
                }
            },
            c = function(a) {
                var b = a.$event;
                h.contains("touchstart touchend touchmove", a.type) && (b = b.originalEvent.touches[0]);
                return {
                    x: b.clientX,
                    y: b.clientY
                }
            },
            d = function(a) {
                var b = a.data.$draggable,
                    f = b.data("a-draggables"),
                    l = c(a);
                f.isMouseDown && (b.css({
                    left: l.x - f.clickOffset.x,
                    top: l.y - f.clickOffset.y
                }), a.$event.preventDefault())
            },
            t = function(d) {
                var b = d.$event.target || d.$event.srcElement,
                    f = d.data.$draggable,
                    l = f.data("a-draggables");
                m.acquireFocus(f);
                b = k(b).closest(l.$handle, f);
                l.isMouseDown = 0 < b.length;
                l.isMouseDown && (a && a.removeClass("aok-hidden"), b = c(d), l.clickOffset = {
                    x: b.x - parseFloat(f.css("left")),
                    y: b.y - parseFloat(f.css("top"))
                }, f.data("a-draggables", l), a.data("a-draggables", l), d.$event.preventDefault())
            },
            q = function(c) {
                c = c.data.$draggable;
                var b = c.data("a-draggables");
                b.isMouseDown = !1;
                c.data("a-draggables", b);
                a && a.addClass("aok-hidden")
            };
        return {
            draggable: function(c, b) {
                c = c.jquery ? c : k(c);
                b = {
                    isMouseDown: !1,
                    $draggable: c,
                    $handle: b && b.handle ? b.handle : c
                };
                b.$handle = b.$handle.jquery ? b.$handle : k(b.handle);
                b.$handle.css("cursor", "move");
                a || (a = k("\x3cdiv\x3e", {
                    id: "a-draggables-mousedown-layer",
                    "class": "aok-hidden"
                }).appendTo("body"), e.declarative.create(a, "a-draggables", b));
                m.create(b.$draggable);
                e.declarative.create(b.$draggable, "a-draggables", b);
                e.declarative("a-draggables", ["mousedown", "touchstart"], t);
                e.declarative("a-draggables", ["mouseup", "touchend"], q);
                e.declarative("a-draggables", ["mousemove", "touchmove"], d)
            }
        }
    });
    "use strict";
    n.when("a-base", "a-util", "a-events", "a-declarative", "a-constants").register("a-state", function(h, k, e, a, m) {
        function c(b, a, c, g) {
            var d = !(b in v);
            if (null === a || q.isArray(a) || q.isPlainObject(a)) {
                var h = k.copy(v[b]);
                h && a && !g && (q.isArray(h) || q.isPlainObject(h)) ? k.extend(v[b], a) : v[b] = k.copy(a);
                a = k.diff(h, v[b]);
                g = k.copy(v[b]);
                c || e.trigger("a:state:update:" +
                    b, g, a, h);
                d && n.declare(m.constants.PAGESTATE_LOADED_MODULE_PREFIX + b, g);
                return g
            }
            n.error("Invalid value passed to A.state with a namespace of " + b + ".  Value: " + a, "A.state", "updateNamespace")
        }

        function d(b, a, c) {
            if (1 === a.length) return b[a.shift()] = c, b;
            b[a.shift()] = d({}, a, c);
            return b
        }

        function t() {
            for (var b = document.getElementsByTagName("script"), a = 0, l = b.length; a < l; a++)
                if (!q.data(b[a], "a-eval")) {
                    var g = q(b[a]),
                        d = g.attr("data-a-state");
                    if (d && (d = k.parseJSON(d), d.key)) {
                        var e;
                        try {
                            e = k.parseJSON(g.html())
                        } catch (m) {
                            n.logError(m,
                                "State parsing failed for state " + d.key, "ERROR");
                            continue
                        }
                        q.data(b[a], "a-eval", !0);
                        (g = v[d.key]) && k.extend(e, g);
                        c(d.key, e)
                    }
                }
        }
        var q = h.$,
            v = {};
        a.declarative("a-state", function(b) {
            var a = b.$target,
                l = b.data.key,
                g = b.data[b.type];
            g || e.events.defaults[b.targetTag] !== b.type || (g = a.attr("name"));
            g && l && (a.is("select") && (a = a.find(":selected")), typeof a.val() !== u && "string" === typeof g && (b = a.val(), a.is("input[type\x3dcheckbox]") && !a.prop("checked") && (b = null), g = d({}, g.split("."), b)), c(l, g))
        });
        h = function(b, a, d) {
            return a ===
                u ? k.copy(v[b]) : c(b, a, !!d)
        };
        h.bind = function(b, a) {
            e.on("a:state:update:" + b, a)
        };
        h.replace = function(b, a, d) {
            return c(b, a, !!d, !0)
        };
        e.on("beforeReady", t);
        h.parse = t;
        return {
            state: h
        }
    });
    "use strict";
    n.when("prv:a-guard", "a-base", "a-util", "a-events", "a-declarative", "a-state").register("a-ajax", function(h, k, e, a, m, c) {
        function d(b, a) {
            if (!b) return "";
            var c = "string" === typeof b;
            if ("string" === a) return c ? b : "";
            if ("json" === a) {
                if (c) return b;
                try {
                    return JSON && JSON.stringify ? JSON.stringify(b) : ""
                } catch (f) {
                    n.logError(f, "AJAX POST failed to convert JSON object to string")
                }
                return ""
            }
            return c ?
                "" : q.param(b)
        }

        function t(a, c) {
            a && 0 !== a.length && ("string" === typeof a && "" === e.trim(a) ? c && c(a) : (a[0] instanceof Array || (a = [a]), e.each(a, function(f) {
                var d = b[f[0]];
                d ? d.apply(p, f) : ((d = c) || n.error("There is no handler for the streaming ajax command: " + a[0], "A.ajax", "chunkHandler"), d(f))
            })))
        }
        var q = k.$,
            v = function() {
                p.XMLHttpRequest || (p.XMLHttpRequest = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var b = function() {
                        function b() {
                            0 < a.length ? a.pop().send() : c--
                        }
                        var a = [],
                            c = 0,
                            g = 0,
                            f = 0;
                        return {
                            add: function(b) {
                                4 >
                                    c ? (b.send(), c++) : (a.push(b), g++, a.length > f && (f = a.length), (b = p.ue) && b.count && (b.count("aui:ajax:queued", g), b.count("aui:ajax:maxQueued", f)))
                            },
                            complete: b,
                            abort: function(c) {
                                e.each(a, function(b, g) {
                                    if (b === c) return a.splice(g, 1), e.breaker
                                });
                                b()
                            }
                        }
                    }(),
                    c = function() {},
                    f = function(c) {
                        var f = c.http,
                            d = !1,
                            l = !1;
                        switch (f.readyState) {
                            case 4:
                                l = !0;
                                break;
                            case 3:
                                d = !0
                        }
                        var m = 200 === f.status || 304 === f.status,
                            h = c.responsePosition;
                        if (d || l && m) {
                            var k = f.responseText;
                            if (h < k.length) {
                                var h = k.substring(h, k.length),
                                    k = h.split("\x26\x26\x26"),
                                    q = h.lastIndexOf("\x26\x26\x26");
                                if (-1 === q && d) return;
                                q < h.length - 3 && d && k.pop();
                                e.each(k, function(b, a) {
                                    var g;
                                    if ("" !== e.trim(b)) try {
                                        g = e.parseJSON(b)
                                    } catch (f) {
                                        n.logError(f, "Invalid streaming ajax JSON response: " + b)
                                    } else g = b;
                                    c.callbacks.chunk(g)
                                });
                                c.responsePosition += q
                            }
                        }
                        l && (clearInterval(c.pollTimer), clearTimeout(c.timeoutTimer), b.complete(), m ? c.callbacks.success(null, f.statusText, c) : c.callbacks.failure(c, f.statusText, f.statusText), a.trigger("a:pageUpdate"), a.trigger("a:ajax:complete"))
                    },
                    d = function(c) {
                        var f =
                            c.http;
                        if (4 === f.readyState) {
                            clearInterval(c.pollTimer);
                            clearTimeout(c.timeoutTimer);
                            b.complete();
                            var d = f.responseText;
                            try {
                                var l = e.parseJSON(d);
                                l && (d = l)
                            } catch (m) {}
                            200 !== f.status && 304 !== f.status ? c.callbacks.failure(c, f.statusText, f.statusText) : c.callbacks.success(d, f.statusText, c);
                            a.trigger("a:ajax:complete")
                        }
                    };
                return function() {
                    function a(c) {
                        if (4 > c.http.readyState) {
                            clearInterval(c.pollTimer);
                            var f = "Request Timeout";
                            try {
                                f = c.http.statusText
                            } catch (d) {}
                            c.callbacks.failure(c, f, f);
                            b.complete()
                        }
                    }

                    function l(b,
                        a, c) {
                        c = c || {};
                        c = e.extend({}, h.all, h[a], c);
                        e.each(c, function(a, c) {
                            (a || "" === a) && b.setRequestHeader(c, a)
                        });
                        return b
                    }

                    function m(a, c, f, d, e, h, k, q, t, x) {
                        var r = a.http;
                        r.open(c, f);
                        l(r, c, t);
                        a.timeout = d;
                        a.callbacks.chunk = e || a.callbacks.chunk;
                        a.callbacks.success = h || a.callbacks.success;
                        a.callbacks.failure = k || a.callbacks.failure;
                        a.callbacks.abort = q || a.callbacks.abort;
                        x && (r.withCredentials = !0);
                        b.add(a);
                        return {
                            abort: function() {
                                a.abort()
                            }
                        }
                    }
                    var h = {
                            all: {
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            get: {
                                Accept: "text/html,*/*"
                            },
                            post: {
                                Accept: "text/html,*/*",
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        },
                        k = function() {
                            var b = new XMLHttpRequest;
                            this.pollTimer = null;
                            this.http = b;
                            this.responsePosition = 0;
                            this.buffer = "";
                            this.callbacks = {
                                success: c,
                                failure: c,
                                chunk: c,
                                abort: c
                            }
                        };
                    k.prototype = {
                        send: function() {
                            var b = this;
                            b.http.send(b.params);
                            b.pollTimer = setInterval(function() {
                                if (2 <= b.http.readyState && "unknown" !== typeof b.http.responseText) {
                                    var a = b.http.getResponseHeader("Content-Type"),
                                        a = a ? a.toLowerCase() : "";
                                    (-1 !== a.indexOf("application/json-amazonui-streaming") ||
                                        -1 !== a.indexOf("application/amazonui-streaming-json") ? f : d)(b)
                                }
                            }, 25);
                            b.timeout = "undefined" === typeof b.timeout ? 2E4 : b.timeout;
                            b.timeoutTimer = e.delay(a, b.timeout, b)
                        },
                        get: function(b, a, c, f, g, d, l, e, h) {
                            if (a) {
                                var k = b.indexOf("?"),
                                    w = b.charAt(b.length - 1); - 1 < k ? "?" !== w && "\x26" !== w && (b += "\x26") : b += "?";
                                b += a
                            }
                            return m(this, "get", b, c, f, g, d, l, e, h)
                        },
                        abort: function() {
                            this.http && this.http.abort();
                            clearInterval(this.pollTimer);
                            clearTimeout(this.timeoutTimer);
                            b.abort(this);
                            this.callbacks.abort(this)
                        },
                        post: function(b, a, c,
                            f, g, d, l, e, h) {
                            this.params = a;
                            return m(this, "post", b, c, f, g, d, l, e, h)
                        }
                    };
                    return k
                }()
            }(),
            b = {
                update: function(b, a, c) {
                    q(a).html(c)
                },
                append: function(b, a, c) {
                    b = q(a);
                    b.html(b.html() + c)
                },
                prepend: function(b, a, c) {
                    b = q(a);
                    b.html(c + b.html())
                },
                state: function(b, a, f) {
                    c.state(a, f)
                },
                script: function(b, a) {
                    eval(a)
                },
                trigger: function(b, c) {
                    var f;
                    f = Array.prototype.slice.call(arguments, 1);
                    a.trigger.apply(void 0, f)
                }
            },
            f = {
                "a-ajax-update": function(b) {
                    var a = new v,
                        c = function() {
                            var b = p.ue;
                            b && b.tag && (b.tag("aui"), b.tag("aui:ajax"))
                        },
                        f = b.abort,
                        d = q(b.indicator);
                    d.show();
                    var l = "string" === typeof b.method && "post" === b.method.toLowerCase() ? "post" : "get";
                    "get" === l && !1 === b.cache && (b.params += ["" === b.params ? "" : "\x26", "_\x3d", e.now()].join(""));
                    return a[l](b.url, b.params, b.timeout, function(a) {
                        c();
                        t(a, b.chunk)
                    }, function() {
                        d.hide();
                        c();
                        b.success && b.success.apply(p, arguments)
                    }, function() {
                        d.hide();
                        c();
                        b.failure && b.failure.apply(p, arguments)
                    }, f, b.headers, b.withCredentials)
                }
            };
        m.declarative("a-ajax-update", function(b) {
            var c = b.$target,
                l = b.action,
                e = b.data;
            if (e || a.events.defaults[b.targetTag] === b.type)
                if ("object" !== typeof e || e[b.type]) {
                    var e = e || {},
                        h = e.url || c.attr("href") || c.attr("action"),
                        m = d(e.params, e.paramsFormat),
                        k = c.attr("method") || e.method,
                        q = e.indicator,
                        e = e.timeout;
                    h || n.error("No ajax url provided.", "A.ajax", "declarativeHandler");
                    "form" === b.targetTag && b.type === a.events.defaults.form && (c = c.serialize(), m += c);
                    b.$event.preventDefault();
                    return f[l]({
                        url: h,
                        params: m,
                        method: k,
                        indicator: q,
                        operation: l,
                        timeout: e
                    })
                }
        });
        var l = function(b, a) {
            a = a || {};
            var c = a.headers || {};
            a.accepts !== u && (c.Accept = a.accepts);
            a.contentType !== u && (c["Content-Type"] = a.contentType);
            var l = d(a.params, a.paramsFormat);
            return f["a-ajax-update"](h.obj(this, {
                url: b,
                cache: a.cache,
                params: l,
                method: a.method,
                chunk: a.chunk,
                success: a.success,
                failure: a.failure || a.error,
                abort: a.abort,
                indicator: a.indicator,
                timeout: a.timeout,
                headers: c,
                withCredentials: !!a.withCredentials
            }))
        };
        return {
            ajax: l,
            get: function(b, a) {
                a = a || {};
                a.method = "get";
                return l.call(this, b, a)
            },
            post: function(b, a) {
                a = a || {};
                a.method = "post";
                return l.call(this,
                    b, a)
            }
        }
    });
    "use strict";
    n.when("a-base", "a-util", "p-detect", "a-prefix").register("a-animate", function(h, k, e, a) {
        function m(b, c, d) {
            b = b.jquery ? b[0] : b;
            c = a.prefixes.getStyle(c);
            b.style[c] = d
        }

        function c(b) {
            var a = "",
                c = e.capabilities.transform3d;
            b.top !== u && b.left !== u ? (a = "translate", c && (a += "3d"), a += "(" + b.left + ", " + b.top, c && (a += ", 0"), a += ")") : (b.top !== u ? a = "translateY(" + b.top + ")" : b.left !== u && (a = "translateX(" + b.left + ")"), c && (a += " translateZ(0)"));
            b.scale !== u && (a += " scale(" + b.scale + ")");
            return a
        }

        function d(b) {
            var a = {},
                c = !1;
            k.each(q, function(g) {
                g in b && (c = !0, a[g] = b[g], delete b[g])
            });
            return c ? a : null
        }

        function t(b, a, c) {
            e.capabilities.transform ? ("string" === typeof c && (c = parseInt(c, 10)), k.isFiniteNumber(c) || (c = 0), b = parseInt(b.css(a), 10), k.isFiniteNumber(b) || (b = 0), c = c - b + "px") : k.isFiniteNumber(c) && (c += "px");
            return c
        }
        var q = ["top", "left", "scale"];
        h = {
            animate: function(b, a, c, g, d) {
                b._a || (b._a = 0);
                b._a++;
                var e = function() {
                    b._a--;
                    d && d()
                };
                b.queue("fx", [function() {
                    b.animate(a, {
                        duration: c,
                        easing: "linear" === g ? g : "swing",
                        complete: e,
                        queue: !1
                    })
                }])
            },
            fadeIn: function(b, a, c, d) {
                b.fadeIn({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: d,
                    queue: !1
                })
            },
            fadeOut: function(b, a, c, d) {
                var e = b.css("opacity");
                b.fadeOut({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: function() {
                        .95 > +e && b.css("opacity", e);
                        d && d()
                    },
                    queue: !1
                })
            },
            fadeToggle: function(b, a, c, d) {
                b.fadeToggle({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: d,
                    queue: !1
                })
            },
            slideUp: function(b, a, c, d) {
                b.slideUp({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: d,
                    queue: !1
                })
            },
            slideDown: function(b,
                a, c, d) {
                b.slideDown({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: d,
                    queue: !1
                })
            },
            slideToggle: function(b, a, c, d) {
                b.slideToggle({
                    duration: a,
                    easing: "linear" === c ? c : "swing",
                    complete: d,
                    queue: !1
                })
            },
            isAnimated: function(b) {
                b = b.jquery ? b[0] : b;
                return b._a && 0 < b._a
            }
        };
        var v = {
            animate: function(b, a, l, g, h) {
                var q = b[0];
                a = k.copy(a);
                l = l === u ? 250 : l;
                g = g || "linear";
                a.top !== u && (a.top = t(b, "top", a.top));
                a.left !== u && (a.left = t(b, "left", a.left));
                m(b, "transition", 4 > l ? "all 0ms" : "all " + l + "ms " + g);
                if (4 < l) {
                    q._a === u && (q._a = 0);
                    q._a++;
                    var v = function() {
                        q._a--;
                        q._a || m(b, "transition", "");
                        h && h()
                    };
                    k.delay(function() {
                        k.delay(v, l)
                    }, 0)
                }
                e.capabilities.transform && (g = d(a)) && m(b, "transform", c({
                    top: g.top,
                    left: g.left,
                    scale: g.scale
                }));
                k.objectIsEmpty(a) || b.css(a);
                4 >= l && h && k.delay(h, 0)
            },
            fadeIn: function(b, a, c, d) {
                if ("none" === b.css("display") || .05 > +b.css("opacity")) {
                    var e = b.css("opacity") || 1;
                    if (!e || .05 > +e) e = 1;
                    b.css("opacity", "0").show();
                    var h = this.animate;
                    k.delay(function() {
                        h(b, {
                            opacity: e
                        }, a, c, function() {
                            d && d()
                        })
                    }, 16)
                } else d && d()
            },
            fadeOut: function(b,
                a, c, d) {
                var e = b.css("opacity");
                "none" !== b.css("display") && .05 < +e ? this.animate(b, {
                    opacity: 0
                }, a, c, function() {
                    b.hide().css("opacity", e);
                    d && d()
                }) : d && d()
            },
            fadeToggle: function(b, a, c, d) {
                ("none" === b.css("display") || .05 > +b.css("opacity") ? this.fadeIn : this.fadeOut).call(this, b, a, c, d)
            },
            slideUp: function(b, a, c, d) {
                var e = this.animate;
                b.css({
                    height: b.innerHeight(),
                    overflow: "hidden"
                });
                k.delay(function() {
                    e(b, {
                        height: 0
                    }, a, c, function() {
                        b.hide();
                        b.css({
                            height: "",
                            overflow: ""
                        });
                        d && d()
                    })
                }, 0)
            },
            slideDown: function(b, a, c, d) {
                var e =
                    b.innerHeight(),
                    h = this.animate;
                b.css({
                    height: 0,
                    overflow: "hidden"
                });
                b.show();
                k.delay(function() {
                    h(b, {
                        height: e
                    }, a, c, function() {
                        d && d();
                        b.css({
                            height: "",
                            overflow: ""
                        })
                    })
                }, 0)
            },
            slideToggle: function(b, a, c, d) {
                (b.is(":visible") ? this.slideUp : this.slideDown).call(this, b, a, c, d)
            },
            isAnimated: function(b) {
                b = b.jquery ? b[0] : b;
                return b._a && 0 < b._a
            }
        };
        return e.capabilities.transition ? v : h
    });
    "use strict";
    n.when("A").register("a-image-lazy-loader", function(h, k) {
        function e() {
            c(".a-lazy-loaded").each(function() {
                d.set(c(this))
            })
        }

        function a() {
            var a = [];
            c(".a-lazy-loaded").each(function() {
                var k = c(this);
                k.data("src") && m(k) && (k.load(function() {
                    h.trigger("a:image:lazyLoaded", k);
                    e()
                }), a.push(k), k.removeClass("a-lazy-loaded"), d.remove(k))
            });
            a.forEach(function(a) {
                a.attr("src", a.data("src"))
            })
        }

        function m(a) {
            d.get(a) || d.set(a);
            var e = c(p),
                h = e.scrollTop(),
                e = p.innerHeight ? p.innerHeight : e.height(),
                b = h + e + 500,
                h = h - 500,
                f = d.get(a);
            a = f.top;
            var f = f.height,
                l = a + f;
            return a >= h && a < b || l > h && l <= b || f > e && a <= h && l >= b
        }
        var c = h.$,
            d = function() {
                var a = {},
                    c = 0;
                return {
                    get: function(c) {
                        return a[c.data("cacheKey")]
                    },
                    set: function(d) {
                        d.data("cacheKey") || (d.data("cacheKey", c), c++);
                        a[d.data("cacheKey")] = {
                            top: d.offset().top,
                            height: d.height()
                        }
                    },
                    remove: function(c) {
                        c.data("cacheKey") && delete a[c.data("cacheKey")]
                    }
                }
            }();
        e();
        a();
        h.on("scroll", function() {
            a()
        });
        h.on("scroll", h.debounce(function() {
            e();
            a()
        }, 250));
        h.on("resize", a)
    });
    "use strict";
    n.register("a-image-url-key-handler", function() {
        return {
            generate: function(h, k) {
                return h
            },
            parse: function(h) {
                return {
                    url: h
                }
            }
        }
    });
    "use strict";
    n.when("a-base", "a-util", "a-events", "a-defer",
        "p-detect", "a-image-url-key-handler").register("a-image", function(h, k, e, a, m, c) {
        function d(b) {
            b = q(b);
            var a = b.data("a-dynamic-image");
            if (a && "object" === typeof a) {
                var c = b.data("a-dynamic-image-container");
                "undefined" === typeof c && (c = b.closest(".a-dynamic-image-container"), 0 === c.length && (c = b.parent()), b.data("a-dynamic-image-container", c));
                var d = m.capabilities.hires && p.devicePixelRatio ? p.devicePixelRatio : 1,
                    f = c.width() * d,
                    g = c.height() * d,
                    e = Number.MAX_VALUE,
                    h = Number.MAX_VALUE,
                    t = b.attr("src") || "",
                    n, v = f / g;
                k.each(a,
                    function(b, a) {
                        var c = parseInt(b[0], 10);
                        b = parseInt(b[1], 10);
                        c -= g;
                        b -= f;
                        c = 1 <= v ? b : c;
                        Math.abs(c) < h && 0 <= c && (h = Math.abs(c), n = a);
                        Math.abs(c) < e && (e = Math.abs(c), t = a)
                    });
                n && (t = n);
                l.schedule(t, b);
                l.fill();
                return t
            }
        }

        function t() {
            q("img.a-dynamic-image").each(function() {
                q(this).data("a-manual-replacement") || d(this)
            })
        }
        var q = h.$;
        q(p);
        var n = document.getElementsByTagName("img"),
            b = {},
            f = 0,
            l = function() {
                var a = [],
                    d = {};
                return {
                    schedule: function(f, g) {
                        f = c.generate(f, g.attr("crossorigin"));
                        d[f] || (a.push(f), d[f] = !0);
                        b[f] = b[f] || [];
                        for (var e = 0; e < b[f].length; e++)
                            if (g.is(b[f][e])) return;
                        b[f].push(g)
                    },
                    fill: function() {
                        for (var b = 0; b < 2 - f; b++)
                            if (0 < a.length) {
                                var c = a.shift();
                                d[c] = !1;
                                g.load(c)
                            }
                    }
                }
            }(),
            g = function() {
                function d(f) {
                    var g = b[f],
                        h = c.parse(f).url;
                    g && (k.each(g, function(b) {
                        b.data("a-image-replaced") !== h && (b.data("a-image-replaced", h), a.defer(function() {
                            b.attr("src", h);
                            e.trigger("a:image:load", {
                                $imageElement: b,
                                url: h
                            });
                            var a = b.data("a-image-name");
                            a && e.trigger("a:image:load:" + a, {
                                $imageElement: b,
                                url: h
                            })
                        }))
                    }), b[f] = [])
                }
                var g = {};
                return {
                    load: function(b) {
                        if (g[b]) d(b);
                        else if (!1 !== g[b]) {
                            var e = new Image;
                            e.onload = function() {
                                f--;
                                d(b);
                                g[b] = !0;
                                l.fill()
                            };
                            e.onerror = function() {
                                f--;
                                g[b] = !1;
                                l.fill()
                            };
                            f++;
                            a.defer(function() {
                                var a = c.parse(b),
                                    d = a.crossOrigin;
                                d && (e.crossOrigin = d);
                                e.src = a.url
                            })
                        }
                    },
                    poll: function() {
                        k.isPageHidden() || k.each(n, function(b) {
                            b = q(b);
                            !b.data("a-hires") || b.data("a-hires-loaded") || b.data("a-manual-replacement") || b.is(":hidden") || !k.onScreen(b) || (l.schedule(b.data("a-hires"), b), b.data("a-hires-loaded", !0))
                        })
                    }
                }
            }();
        m.capabilities.hires && e.on.ready(function() {
            k.interval(function() {
                g.poll();
                l.fill()
            }, 2E3)
        });
        e.on.ready(t);
        q(p).resize(t);
        return {
            loadHiResImage: function(b) {
                var a = [];
                q(b).each(function() {
                    var b = q(this),
                        c = b.data("a-hires");
                    c && (l.schedule(c, b), l.fill(), a.push(c));
                    b.data("a-hires-loaded", !0)
                });
                return a
            },
            loadDynamicImage: function(b) {
                var a = [];
                q(b).each(function() {
                    a.push(d(this))
                });
                return a
            },
            loadImageManually: function(b, a) {
                var c = [];
                q(b, a).each(function() {
                    var b = q(this);
                    if (!b.data("a-image-already-loaded")) {
                        b.data("a-image-already-loaded", !0);
                        var a = d(b),
                            f = q("\x3cimg\x3e").attr("src",
                                a || b.data("a-image-source"));
                        c.push(a);
                        var a = "" + this.className,
                            g = b.data("a-extra-classes");
                        g && (a += " " + g);
                        f.attr("class", a);
                        f.attr("id", this.id);
                        f.attr("style", b.attr("style"));
                        f.attr("alt", b.attr("alt"));
                        f.attr("usemap", b.attr("usemap"));
                        f.attr("title", b.attr("title"));
                        f.attr("role", b.attr("role"));
                        (a = b.data("a-image-crossorigin")) && f.attr("crossorigin", a);
                        k.each(this.attributes, function(b) {
                            b && b.name && (0 === b.name.indexOf("data-") || 0 === b.name.indexOf("aria-")) && f.attr(b.name, b.value)
                        });
                        f.data(b.data());
                        b.replaceWith(f)
                    }
                    return c
                })
            },
            loadDescendantImagesManually: function(b, a) {
                b = q(b, a).find("div.a-manually-loaded").filter(function() {
                    return !q(this).data("a-image-already-loaded")
                });
                return this.loadImageManually(b)
            }
        }
    });
    n.register("a-class", function() {
        function h() {}
        var k = /xyz/.test(function() {
            xyz
        }) ? /\b_super\b/ : /.*/;
        h.extend = function(e) {
            var a = this.prototype,
                m = Object.create ? Object.create(a) : function(a) {
                    function c() {}
                    c.prototype = a;
                    return new c
                }(a),
                c;
            for (c in e) m[c] = "function" === typeof e[c] && "function" ===
                typeof a[c] && k.test(e[c]) ? function(c, d) {
                    return function() {
                        var e = this._super;
                        this._super = a[c];
                        var b = d.apply(this, arguments);
                        this._super = e;
                        return b
                    }
                }(c, e[c]) : e[c];
            var d;
            n.now("a-weblab").execute(function(c) {
                d = c && c.is("AUI_58736", "T1") ? "function" === typeof m.init ? m.hasOwnProperty("init") ? m.init : function() {
                    a.init.apply(this, arguments)
                } : function() {} : "function" === typeof m.init ? m.init : function() {}
            });
            d.prototype = m;
            m.constructor = d;
            d.extend = h.extend;
            return d
        };
        return {
            createClass: function(e) {
                return h.extend(e)
            }
        }
    });
    "use strict";
    n.when("a-timing-analytics", "a-bodyBegin").execute("build-A", function(h) {
        var k = n.execute().decorate,
            e = n.when("a-util", "a-defer", "a-base", "a-events", "a-declarative", "a-state", "a-ajax", "a-animate", "a-image", "a-constants", "a-detect", "a-browser-events", "a-preload", "a-prefix", "a-request-animation-frame", "a-class", "a-draggable").register("A", function(a) {
                function e(a, d) {
                    this._guard = a;
                    this._logError = d
                }
                e.prototype = {};
                a.each(arguments, function(c) {
                    a.extend(e.prototype, c)
                });
                h.stopWidgetLogging("A");
                return k ? e : e.prototype
            });
        k && e.decorate(function(a, e) {
            return new a(e.guard, e.logError)
        })
    });
    "use strict";
    n.register("a-constants", function() {
        return {
            constants: {
                keycodes: {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESCAPE: 27,
                    SPACE: 32,
                    LEFT_ARROW: 37,
                    UP_ARROW: 38,
                    RIGHT_ARROW: 39,
                    DOWN_ARROW: 40,
                    DELETE: 46
                },
                HIDE_CLASS: "aok-hidden",
                PAGESTATE_LOADED_MODULE_PREFIX: "page-state-loaded:",
                NOOP: function() {}
            }
        }
    });
    "use strict";
    n.when("jQuery", "a-detect", "a-events", "a-util", "a-defer").register("a-browser-events", function(h, k, e, a, m) {
        function c() {
            return p.innerHeight ?
                p.innerHeight : document.documentElement.clientHeight
        }

        function d() {
            return p.innerWidth ? p.innerWidth : document.documentElement.clientWidth
        }

        function t() {
            return p.innerWidth ? Math.round(document.documentElement.clientWidth / p.innerWidth * 10) / 10 : 1
        }

        function q(b) {
            switch (b) {
                case l.ALL:
                    b = "orientation height width zoom scrollLeft scrollTop".split(" ");
                    break;
                case l.SCROLL:
                    b = ["scrollLeft", "scrollTop"];
                    break;
                case l.ZOOM:
                    b = ["height", "width", "zoom", "scrollLeft", "scrollTop"];
                    break;
                default:
                    b = ["orientation", "height", "width",
                        "scrollLeft", "scrollTop"
                    ]
            }
            for (var a = {}, e, h;
                (h = b.pop()) !== u;) e = g[h], "orientation" === h ? g[h] = p.orientation === u ? d() > c() ? 90 : 0 : p.orientation : "height" === h ? g[h] = c() : "width" === h ? g[h] = d() : "scrollTop" === h ? g[h] = p.scrollY ? p.scrollY : f.scrollTop() : "scrollLeft" === h ? g[h] = p.scrollX ? p.scrollX : f.scrollLeft() : "zoom" === h && (g[h] = t()), g[h] !== e && (a[h] = e);
            return a
        }

        function n(b) {
            if (b = y[b]) b.pollCounter = b.maxPollCount, b.intervalId || (b.intervalId = setInterval(b.handler, b.pollInterval))
        }

        function b(b) {
            (b = y[b]) && b.intervalId && (clearInterval(b.intervalId),
                b.intervalId = 0)
        }
        var f = h(p),
            l = {
                ORIENTATION_CHANGE: "orientationchange",
                SCROLL: "scroll",
                RESIZE: "resize",
                ZOOM: "zoom",
                ALL: "all"
            },
            g = {
                scrollLeft: 0,
                scrollTop: 0,
                height: c(),
                width: d(),
                orientation: p.orientation === u ? d() > c() ? 90 : 0 : p.orientation,
                zoom: t()
            };
        e.on("beforeReady", function() {
            q(l.ALL)
        });
        var x = {
                speed: 0,
                degree: 0,
                direction: "",
                positionX: 0,
                positionY: 0
            },
            r = [],
            z;
        f.bind("mousemove", a.throttle(function(b) {
            b = {
                x: b.clientX,
                y: b.clientY
            };
            if (z) {
                var a = z,
                    c = 0,
                    d = 0;
                r.push({
                    speed: Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y,
                        2)) / 50 * 10,
                    degree: Math.atan2(b.y - a.y, b.x - a.x) / (Math.PI / 180)
                });
                4 < r.length && (r = r.slice(-4));
                for (var a = r.length, f = 0; f < a; f++) c += r[f].speed, d += r[f].degree;
                c = Number((c / a).toFixed(2));
                d = Math.round(d / a);
                x = {
                    speed: c,
                    degree: d,
                    direction: 0 <= d ? 157.5 < d ? "W" : 112.5 < d ? "SW" : 67.5 < d ? "S" : 22.5 < d ? "SE" : "E" : -157.5 > d ? "W" : -112.5 > d ? "NW" : -67.5 > d ? "N" : -22.5 > d ? "NE" : "E",
                    positionX: b.x,
                    positionY: b.y
                };
                z = b
            } else b && (z = b)
        }, 50));
        f.bind(l.SCROLL, a.throttle(function() {
            var b = q(l.SCROLL);
            e.trigger(l.SCROLL, g, b)
        }, 100));
        var y = {};
        a.each([l.RESIZE,
            l.ZOOM
        ], function(b) {
            y[b] = {
                handler: function() {},
                lastViewport: a.copy(g),
                maxPollCount: 5,
                pollCounter: 5,
                pollInterval: 100,
                intervalId: 0
            }
        });
        y.resize.handler = function() {
            var c = [],
                d = y.resize;
            q("resize");
            var f = a.diff(g, d.lastViewport);
            f.orientation && c.push(l.ORIENTATION_CHANGE);
            f.width || f.height ? c.push(l.RESIZE) : k.capabilities.isIETouchCapable && f.scrollTop && c.push(l.RESIZE);
            c.length && (d.lastViewport = a.copy(g), a.each(c, function(b) {
                e.trigger(b, g, f)
            }));
            0 === --d.pollCounter && b(l.RESIZE)
        };
        y.resize.pollInterval = 100;
        y.resize.maxPollCount = 10;
        f.bind(l.RESIZE, function(b) {
            n(l.RESIZE)
        });
        y.zoom.handler = function() {
            q(l.ZOOM);
            var c = y.zoom,
                d = a.diff(g, c.lastViewport);
            d.zoom && (c.lastViewport = a.copy(g), e.trigger(l.ZOOM, g, d));
            0 === --c.pollCounter && b(l.ZOOM)
        };
        y.zoom.pollInterval = 200;
        k.capabilities.android && f.bind("touchcancel", function(b) {
            2 === b.originalEvent.changedTouches.length && (y.zoom.maxPollCount = 15, n(l.ZOOM))
        });
        k.capabilities.ios && f.bind("touchend", function(b) {
            1 === b.originalEvent.touches.length && (y.zoom.maxPollCount = 1,
                n(l.ZOOM))
        });
        k.capabilities.ios || k.capabilities.android || f.bind("resize", function(b) {
            y.zoom.maxPollCount = 5;
            n(l.ZOOM)
        });
        return {
            viewport: function(b) {
                b && q(l.ALL);
                return a.copy(g)
            },
            cursor: function() {
                return a.copy(x)
            },
            scrollBarWidth: function(b) {
                if (b || (document && document.body && document.body.scrollHeight ? document.body.scrollHeight : 0) > c()) {
                    b = document.createElement("div");
                    b.style.visibility = "hidden";
                    b.style.width = "100%";
                    b.style.overflowX = "scroll";
                    document.body.appendChild(b);
                    var a = b.offsetHeight;
                    document.body.removeChild(b);
                    return a
                }
                return 0
            }
        }
    });
    "use strict";
    n.register("a-analytics", function() {
        function h(h, e) {
            var a = p && p.ue && p.ue.count;
            if (a && h) {
                var m = "aui:" + h;
                1 < arguments.length && a(m, e);
                return a(m)
            }
        }
        return {
            increment: function(k, e) {
                if (k) {
                    var a = h(k) || 0;
                    h(k, a + (e || 1))
                }
            },
            count: h,
            logError: function(h, e, a) {
                p.ueLogError && p.ueLogError({
                    message: h
                }, {
                    logLevel: e,
                    attribution: a
                })
            }
        }
    });
    "use strict";
    n.when("3p-promise", "a-analytics").register("a-preload", function(h, k) {
        function e() {
            if (0 < D.length) y = D;
            else if (y = w, 0 === y.length || !F) return !1;
            if (C >=
                I) return !1;
            C++;
            return !0
        }

        function a(b, a) {
            var c = function() {
                if (b) {
                    var a = b.parentElement;
                    a && a.removeChild(b);
                    b = null
                }
            };
            a && clearTimeout(a);
            C = 1 > C ? 0 : C - 1;
            A ? f(c, 5) : c();
            B ? f(q, 0) : q()
        }

        function m(b) {
            var a, c;
            c = b.indexOf("#");
            var d = b.indexOf("?"),
                d = 0 < d ? d : 0 < c ? c : b.length;
            (c = b.lastIndexOf(".", d)) && (a = b.substring(c + 1, d).toLowerCase());
            return "gz" === a ? m(b.substring(0, c)) : a
        }

        function c(b) {
            for (var a = H.length; a--;)
                if (H[a] === b) return !0;
            return !1
        }

        function d(b, a, c) {
            var d;
            A ? "js" !== a && (d = "OBJECT") : B ? (d = "IMG", b || (10 <= G ? d = "LINK" :
                9 === G && (d = "SCRIPT"))) : d = "IMG";
            return d
        }

        function t(b, c, d, e) {
            var g;
            if (A || E && !d) g = f(function() {
                e();
                a(b, g)
            }, 2500 + 100 * Math.random());
            b.onerror = function() {
                e();
                a(b, g)
            };
            b.onload = function() {
                e();
                a(b, g)
            }
        }

        function q() {
            function b() {
                var a = Date.now() - u;
                h.resolve({
                    url: n,
                    success: !0,
                    duration: a
                })
            }
            if (e()) {
                var h = y.pop(),
                    n = h.url,
                    p = m(n),
                    v = c(p),
                    p = d(v, p, y === D),
                    w = 1,
                    r = "",
                    u = Date.now(),
                    x;
                if (p) {
                    x = "IMG" === p ? new Image : l.createElement(p);
                    x.style.display = "none";
                    if ("IFRAME" === p)
                        for (w = 0; n;) A && "js" === m(n) || (r += "\x3clink rel\x3d'prefetch' href\x3d'" +
                            n + "'/\x3e", w++), n = y.pop();
                    else "IMG" === p ? (t(x, p, v, b), x.src = n) : "OBJECT" === p ? (x.data = n, t(x, p, v, b)) : "SCRIPT" === p ? (x.type = "text/cache", t(x, p, v, b), x.src = n) : "LINK" === p && (x.rel = "stylesheet", x.media = "speech", t(x, p, v, b), x.href = n);
                    if (!B || "IMG" !== p) try {
                        if (g.appendChild(x), r) {
                            var z = x.contentWindow.document;
                            z.open();
                            z.write(r);
                            z.close();
                            f(a, 0)
                        }
                    } catch (F) {
                        h.reject({
                            url: n,
                            success: !1,
                            reason: "failed to appendChild"
                        });
                        a();
                        return
                    }
                    k.increment("preload_fulfilled", w);
                    C < I && q()
                } else h.reject({
                        url: n,
                        success: !1,
                        error: "not supported type"
                    }),
                    a()
            }
        }

        function v(b, a) {
            return new h(function(c, d) {
                b.splice(Math.round(Math.random() * b.length), 0, {
                    url: a,
                    resolve: c,
                    reject: d
                })
            })
        }

        function b(a, c) {
            if (!K) return h.reject("not supported browser");
            if ("string" === typeof a) a = [a];
            else if ("object" !== typeof a || null === a) return h.reject("not an URL or URL list");
            var d, f, e = [];
            for (d = 0; d < a.length; d++)(f = a[d]) && "string" !== typeof f ? b(f, c) : f && " " !== f[0] && (e.push(v(c, f)), k.increment("preload_asks"));
            return 0 === e.length ? h.resolve() : 1 === e.length ? e[0] : h.all(e)
        }
        var f = setTimeout,
            l = document,
            g = l.documentElement,
            u = g.style,
            r = navigator,
            z = r.userAgent,
            y = [],
            w = [],
            D = [],
            F = !1,
            A = "MozAppearance" in u,
            E = !A && "webkitAppearance" in u;
        E && /^Apple/.test(r.vendor);
        var B = !A && !E && (0 === r.appName.indexOf("Microsoft") || -1 < z.indexOf("Trident/")),
            K = E || A || B,
            u = B ? null !== /Trident\/([\d]+)/.exec(z) ? parseFloat(RegExp.$1) : null : -1,
            G = B ? u ? u + 4 : 6 : -1,
            I = "undefined" !== typeof p.plCount ? p.plCount() : B && 8 > G ? 2 : 5,
            C = 0,
            J = !1,
            H = ["gif", "jpeg", "jpg", "png"];
        n.when("a-preload-api-used", "afterLoad").execute("a-preload-low-priority",
            function() {
                F = !0;
                q()
            });
        return {
            preload: function(a, c) {
                c ? a = b(a, D) : (J || (J = !0, n.declare("a-preload-api-used")), a = b(a, w));
                q();
                return a
            }
        }
    });
    "use strict";
    n.when("a-util").register("a-request-animation-frame", function(h) {
        for (var k = 0, e = ["ms", "moz", "webkit", "o"], a = 0; a < e.length && !p.requestAnimationFrame; ++a) p.requestAnimationFrame = p[e[a] + "RequestAnimationFrame"], p.cancelAnimationFrame = p[e[a] + "CancelAnimationFrame"] || p[e[a] + "CancelRequestAnimationFrame"];
        p.requestAnimationFrame || (p.requestAnimationFrame = function(a,
            c) {
            var d = h.now(),
                e = Math.max(0, 16 - (d - k));
            c = p.setTimeout(function() {
                a(d + e)
            }, e);
            k = d + e;
            return c
        });
        p.cancelAnimationFrame || (p.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        });
        return {
            requestAnimationFrame: function(a, c) {
                return p.requestAnimationFrame(a, c)
            },
            cancelAnimationFrame: function(a) {
                p.cancelAnimationFrame(a)
            }
        }
    });
    "use strict";
    n.when("jQuery", "A", "3p-promise").register("a-fonts", function(h, k, e) {
        function a(a, b) {
            var c = q && q[a] ? q : b;
            return function() {
                return c[a].apply(c, arguments)
            }
        }
        var m = [],
            c = h("body"),
            d = function() {
                return new e(function(a, b) {
                    var c = p.setInterval(function() {
                        k.reduce(m, function(b, a) {
                            return b && "loaded" === a.status
                        }, !0) && (a(), clearInterval(c))
                    }, 50)
                })
            }(),
            n = {
                load: function(a) {
                    return new e(function(b, d) {
                        var e = {
                            variant: a,
                            status: "unloaded"
                        };
                        m.push(e);
                        e.$loader = h("\x3cspan\x3e.\x3c/span\x3e", {
                            "class": "aok-hidden"
                        }).css("font", e.variant).appendTo(c);
                        e.status = "loading";
                        e.$checker = h("\x3cspan\x3e.\x3c/span\x3e", {
                            "class": "aok-hidden"
                        }).appendTo(c);
                        e.intervalId = p.setInterval(function() {
                            e.$checker.css("font",
                                e.variant + ', Consolas, "Courier New", Courier, monospace');
                            var a = e.$checker.width(),
                                c = e.$checker.height();
                            e.$checker.css("fontFamily", 'Consolas, "Courier New", Courier, monospace');
                            if (e.$checker.width() !== a || e.$checker.height() !== c) b(e.variant), e.status = "loaded", e.$loader.remove(), e.$checker.remove(), clearInterval(e.intervalId)
                        }, 50)
                    })
                },
                check: function(a) {
                    k.each(m, function(b) {
                        if (b.variant === a) return "loaded" === b.status
                    });
                    return !1
                },
                ready: d
            },
            q = document.fonts;
        q && q.ready && (d = q.ready.then ? q.ready : q.ready.apply(q));
        return {
            load: a("load", n),
            check: a("check", n),
            ready: d
        }
    });
    "use strict";
    n.when("A").register("a-form-controls-api", function(h) {
        var k = h.$,
            e = 0,
            a = function(a) {
                return a && a.jquery ? a : a && 1 === a.nodeType ? k(a) : null
            },
            m = function(c, d, e) {
                var h = a(c);
                if (!h || 1 !== h.length) return !1;
                c = h.find("input").first();
                d !== u && (d = !!d, h.hasClass("a-touch-multi-select") && (h.find("i.a-icon").first().toggleClass("a-icon-touch-multi-select-active", d).toggleClass("a-icon-touch-multi-select", !d), h.attr("aria-checked", d)), c.prop("checked") !==
                    d && c.prop("checked", d).trigger("change"));
                e !== u && (e = !!e, c.prop("disabled") !== e && c.prop("disabled", e))
            };
        return {
            findFormElementContainer: function(c) {
                if ((c = a(c)) && 1 === c.length) {
                    var d = c.closest("form");
                    0 === d.length && (d = c.closest("fieldset"), 0 === d.length && (d = k(document)));
                    return d
                }
            },
            toggleCheckboxState: function(c) {
                c = a(c);
                var d;
                c && 1 === c.length && (d = c.find("input").first(), m(c, !d[0].checked))
            },
            setCheckboxState: m,
            setRadioState: m,
            normalizeElement: function(c) {
                if ((c = (c = a(c)) ? c : a(this)) && 1 === c.length) {
                    var d = c.find("input").first();
                    d.attr("type");
                    var h = c.hasClass("a-touch-multi-select");
                    c.attr("id") || d.attr("id") || h && (!h || c.parent().attr("id")) || (h = "a-form-controls-autoid-" + e, c.attr("aria-labelledby", h).find(".a-checkbox-label, .a-radio-label, .a-touch-multi-select-item-label").attr("id", h), e++);
                    m(c, d[0].checked, d[0].disabled)
                }
            },
            normalizeFieldsets: function(a) {
                k(a).closest("fieldset").each(function(a, c) {
                    a = k(c);
                    c = a.find("legend").first();
                    if (c.length) {
                        var h = c.attr("id");
                        h || (h = "a-form-controls-autoid-" + e, c.attr("id", h), e++);
                        a.attr("aria-describedby",
                            h)
                    }
                })
            }
        }
    });
    "use strict";
    n.when("jQuery", "a-util", "a-state", "a-analytics", "a-constants").execute("prepare-a-weblab", function(h, k, e, a, m) {
        n.when(m.constants.PAGESTATE_LOADED_MODULE_PREFIX + "a-wlab-states").register("a-weblab", function(c) {
            function d(b) {
                l || (r[b] = f[b]);
                return l && l[b] || f[b]
            }

            function e(b) {
                return d(b) || "C"
            }

            function q(a) {
                var c = d(a);
                !c || g[a] || x[a] || (g[a] = c, clearTimeout(z), z = setTimeout(b, 5E3));
                return c || "C"
            }

            function v(b) {
                return b !== u && p.encodeURIComponent(b) || ""
            }

            function b() {
                var b = [];
                k.each(g,
                    function(a, c) {
                        b.push(c + ":" + a);
                        x[c] = 1
                    });
                if (b.length) {
                    var c = y + v(b.join(",")) + "\x26t\x3d" + (new Date).getTime() + "\x26type\x3d",
                        d = p.navigator;
                    d.sendBeacon && d.sendBeacon(c + "b") ? a.increment("wlabBcn") : ((new Image).src = c + "i", a.increment("wlabImg"))
                }
                g = {};
                clearTimeout(z)
            }
            var f = c || {},
                l, g = {},
                x = {},
                r = {},
                z;
            n.when(m.constants.PAGESTATE_LOADED_MODULE_PREFIX + "a-ltree-states").execute(function(b) {
                l = b || {};
                k.each(k.keys(r), function(b) {
                    (l[b] || r[b]) && l[b] !== r[b] && n.log("a-weblab returned wrong value for " + b + ". It returned " +
                        r[b] + ". it is set as " + l[b] + " at a-ltree-states.")
                })
            });
            var y = "/gp/aui/record.html?rid\x3d" + v(p.ue_id) + "\x26sid\x3d" + v(p.ue_sid) + "\x26wlab\x3d";
            h(p).bind("unload", b);
            return {
                is: function(b, a, c) {
                    return (c ? q(b) : e(b)) === a
                },
                isActive: function(b) {
                    return !!d(b)
                },
                noTrigger: e,
                trigger: q
            }
        })
    });
    "use strict";
    n.declare("prv:a-post-atf-catchdomready", !0);
    n.when("a-util", "a-defer", "prv:a-post-atf-catchdomready").register("prv:a-post-atf", function(h, k, e) {
        function a() {
            d || (d = !0, h.each(c, function(a) {
                k.defer(a)
            }), c = [])
        }

        function m() {
            e &&
                a()
        }
        var c = [],
            d = !1;
        n.when("af", "cf").execute("flush_queued_functions_after_ATF", a);
        n.when("a-domready").execute("flush_queued_functions_after_domready", function() {
            h.delay(m, 500)
        });
        return {
            execute: function(a) {
                d ? k.defer(a) : c.push(a)
            }
        }
    });
    "use strict";
    n.declare("prv:a-is-typedarray-supported", !(!p.ArrayBuffer || !p.Uint8Array));
    n.when("a-class", "prv:a-is-typedarray-supported").register("prv:a-bit-array", function(h, k) {
        function e(a) {
            return function(c, d) {
                c |= 0;
                d = (d | 0) + (c / 8 >> 0);
                c %= 8;
                if (d < this.byteLength()) return a.call(this,
                    c, d)
            }
        }
        var a = h.createClass({
            init: function(a) {
                this._bitsBuffer = a
            },
            byteLength: function() {
                return this._bitsBuffer.length
            },
            toString: function() {
                var a;
                try {
                    a = String.fromCharCode.apply(null, this._bitsBuffer)
                } catch (c) {
                    a = String.fromCharCode.apply(null, [].slice.call(this._bitsBuffer))
                }
                return a
            },
            setByte: function(a, c) {
                c |= 0;
                c < this._bitsBuffer.length && (this._bitsBuffer[c] = a)
            },
            getByte: function(a) {
                if (a < this.byteLength()) return this._bitsBuffer[a]
            },
            set: e(function(a, c) {
                this._bitsBuffer[c] |= 1 << a
            }),
            unset: e(function(a,
                c) {
                this._bitsBuffer[c] ^= this._bitsBuffer[c] & 1 << a
            }),
            get: e(function(a, c) {
                return this._bitsBuffer[c] & 1 << a ? 1 : 0
            })
        });
        a.create = function(e) {
            return a.createByteLength((e - 1) / 8 + 1 >> 0)
        };
        a.createByteLength = function(e) {
            var c;
            if (k) c = new Uint8Array(e);
            else
                for (c = Array(e), --e; 0 <= e; e--) c[e] = 0;
            return new a(c)
        };
        a.fromArray = function(e) {
            if (k) e = new Uint8Array(e);
            else {
                e = [].slice.call(e);
                for (var c = e.length - 1; 0 <= c; c--) 256 <= e[c] && (e[c] %= 256)
            }
            return new a(e)
        };
        a.fromString = function(e) {
            for (var c = e.length, d = Array(c), c = c - 1; 0 <= c; c--) d[c] =
                e.charCodeAt(c);
            return a.fromArray(d)
        };
        return a
    });
    "use strict";
    n.when("a-util").register("prv:a-cookie-writer", function(h) {
        return function(k, e, a) {
            var m = [],
                c;
            e = h.trim(e);
            if (-1 < e.indexOf('"') || -1 < e.indexOf("\\")) e = '"' + e.replace(/("|\\)/g, "\\$1") + '"';
            a = a || {};
            a.path && m.push(";path\x3d" + a.path);
            a.domain && m.push(";domain\x3d" + a.domain);
            a.maxAge && m.push(";max-age\x3d" + a.maxAge);
            a.expires && (c = a.expires, a.expires.getTime && a.expires.toUTCString ? c = a.expires.toUTCString() : "number" === typeof a.expires && (c = (new Date(Date.now() +
                1E3 * a.expires)).toUTCString()), m.push(";expires\x3d" + c));
            document.cookie = k + "\x3d" + e + m.join("")
        }
    });
    "use strict";
    n.when("a-util", "prv:a-cookie-writer", "prv:a-bit-array", "a-constants").register("a-cookie-hint", function(h, k, e, a) {
        function m(a) {
            return function(c) {
                k(a, p.btoa(c.toString()), {
                    path: "/",
                    expires: 31536E3
                })
            }
        }

        function c(a, c) {
            var b = 8 * a.byteLength() - 16;
            return {
                set: h.rest(function(d) {
                    h.each(d, function(c) {
                        c >= b || a.set(c, 2)
                    });
                    c(a);
                    return this
                })
            }
        }
        if (!p.btoa || !p.atob) return {
            get: a.constants.NOOP
        };
        var d = {
                set: function() {
                    return this
                }
            },
            n = {};
        return {
            get: function(a, k) {
                if (!n[a]) {
                    var b = k || 120;
                    k = m(a);
                    var f = h.cookies.get(a);
                    if (f) {
                        var l;
                        b: {
                            if (!(4 > f.length)) try {
                                var g = p.atob(f);
                                if (0 !== g.length && (1 !== g.length || 0 !== g.charCodeAt(0))) {
                                    l = e.fromString(g);
                                    break b
                                }
                            } catch (u) {}
                            l = void 0
                        }
                        l || (b = e.create(16 + b), l = new Date, g = new Date(l.getFullYear(), 0, 0), l = Math.floor((l - g) / 864E5) / 2 >> 0, b.setByte(0, 0), b.setByte(l, 1), k(b), l = b);
                        b = l;
                        k = 0 >= (b.getByte(0) & 63) ? c(b, k) : d
                    } else k = d;
                    n[a] = k
                }
                return n[a]
            }
        }
    });
    "use strict";
    n.when("A").register("a-component-mixins", function(h) {
        return {
            show: function() {
                this._$element.removeClass("a-hidden aok-hidden").show();
                return this
            },
            hide: function() {
                this._$element.addClass("aok-hidden");
                return this
            },
            size: function() {
                return this._$element.size()
            },
            isEmpty: function() {
                return 0 === this._$element.size()
            }
        }
    });
    "use strict";
    n.when("A", "a-component-mixins", "a-analytics", "prv:a-sampler").register("a-component", function(h, k, e, a) {
        var m = h.createClass({
            init: function(a, d) {
                h.contains(a, ".a-") && n.error("{API} Cannot create components using 'a-' selectors. Apply your own CSS class or ID to select this element.", "API", "component");
                this._$element =
                    h.$(a, d);
                this._trackApi()
            },
            _trackApi: function() {
                this._componentName && a("AUI API Analytics") && e.increment("api:" + this._componentName)
            }
        });
        return {
            create: function(a) {
                var d = a.mixin;
                d && delete a.mixin;
                a = m.extend(a);
                d && h.mixin(a.prototype, k, d);
                return a
            }
        }
    });
    "use strict";
    n.when("A", "a-component").register("a-alert", function(h, k) {
        var e = h.$,
            a = ["error", "success", "warning", "info"],
            m = h.map(a, function(a) {
                return "a-alert-" + a
            }).join(" "),
            c = h.map(a, function(a) {
                return "a-alert-inline-" + a
            }).join(" "),
            d = document.createElement("h4");
        d.className = "a-alert-heading";
        var p = e(d),
            q = k.create({
                _componentName: "alert",
                init: function(a, b) {
                    this._super(a, b);
                    this._$element = this._$element.filter(".a-alert, .a-alert-inline");
                    this._$heading = this._$element.find(".a-alert-heading");
                    this._$content = this._$element.find(".a-alert-content")
                },
                mixin: ["show", "hide", "size", "isEmpty"],
                heading: function(a) {
                    if ("undefined" === typeof a) return this._$heading.text();
                    this._$heading.length ? this._$heading.text(a) : this._$heading = p.clone().text(a).insertBefore(this._$content);
                    return this
                },
                removeHeading: function() {
                    this._$heading.remove();
                    this._$heading = e();
                    return this
                },
                text: function(a) {
                    if ("undefined" === typeof a) return this._$content.text();
                    this._$content.text(a);
                    return this
                },
                html: function(a) {
                    if ("undefined" === typeof a) return this._$content.html();
                    this._$content.html(a);
                    return this
                },
                type: function(d) {
                    -1 === h.indexOfArray(a, d) && n.error("{API} Alert type must be one of [error, success, warning, info].", "API", "alert");
                    this._$element.each(function(b, a) {
                        b = e(a);
                        a = "a-alert-";
                        b.hasClass("a-alert-inline") ?
                            (a += "inline-", b.removeClass(c)) : b.removeClass(m);
                        b.addClass(a + d)
                    });
                    return this
                }
            });
        return function(a, b) {
            return new q(a, b)
        }
    });
    "use strict";
    n.when("A", "a-component").register("a-button", function(h, k) {
        function e(a) {
            a.preventDefault()
        }
        var a = k.create({
            _componentName: "button",
            init: function(a, c) {
                this._super(a, c);
                this._$element = this._$element.filter(".a-button");
                this._$coreFormElement = this._$element.children(".a-button-inner").children("button,input");
                this._$coreLinkElement = this._$element.children(".a-button-inner").children("a");
                this._$contentElement = this._$element.find(".a-button-text")
            },
            mixin: ["show", "hide", "isEmpty", "size"],
            toggle: function() {
                this._$element.toggle();
                return this
            },
            enable: function() {
                this._$element.removeClass("a-button-disabled");
                this._$coreFormElement.prop("disabled", !1);
                this._$coreLinkElement.unbind("click", e);
                return this
            },
            disable: function() {
                this._$element.addClass("a-button-disabled");
                this._$coreFormElement.prop("disabled", !0);
                this._$coreLinkElement.click(e);
                return this
            },
            isEnabled: function() {
                return !this._$element.hasClass("a-button-disabled")
            },
            text: function(a) {
                if (!(1 > this._$contentElement.length)) {
                    if ("undefined" === typeof a) return this._$contentElement.text();
                    this._$contentElement.text(a);
                    return this
                }
            }
        });
        return function(e, c) {
            return new a(e, c)
        }
    });
    "use strict";
    n.when("A", "a-component", "a-form-controls-api").register("a-checkbox", function(h, k, e) {
        var a = h.$,
            m = e.setCheckboxState,
            c = k.create({
                _componentName: "checkbox",
                init: function(a, c) {
                    this._super(a, c);
                    this._$element = this._$element.closest(".a-checkbox");
                    this._$input = this._$element.find("[type\x3dcheckbox]")
                },
                mixin: ["show", "hide", "size", "isEmpty"],
                check: function(a) {
                    a = void 0 === a ? !0 : a;
                    this._$element.each(function() {
                        m(this, a)
                    });
                    return this
                },
                uncheck: function() {
                    return this.check(!1)
                },
                toggleChecked: function() {
                    this._$element.each(function() {
                        e.toggleCheckboxState(this)
                    });
                    return this
                },
                isChecked: function() {
                    for (var a = 0, c = this._$input.length; a < c; a++)
                        if (!this._$input[a].checked) return !1;
                    return !0
                },
                isUnchecked: function() {
                    for (var a = 0, c = this._$input.length; a < c; a++)
                        if (this._$input[a].checked) return !1;
                    return !0
                },
                enable: function(a) {
                    a =
                        void 0 === a ? !0 : a;
                    this._$element.each(function() {
                        m(this, void 0, !a)
                    });
                    return this
                },
                disable: function() {
                    return this.enable(!1)
                },
                toggleEnabled: function() {
                    for (var a = 0, c = this._$input.length; a < c; a++) m(this._$element[a], void 0, !this._$input[a].disabled);
                    return this
                },
                isEnabled: function() {
                    for (var a = 0, c = this._$input.length; a < c; a++)
                        if (this._$input[a].disabled) return !1;
                    return !0
                },
                isDisabled: function() {
                    for (var a = 0, c = this._$input.length; a < c; a++)
                        if (!this._$input[a].disabled) return !1;
                    return !0
                },
                toggle: function(c) {
                    "undefined" !==
                    typeof c && (c = !!c);
                    this._$element.each(function() {
                        a(this).toggle(c)
                    });
                    return this
                }
            });
        return function(a, e) {
            return new c(a, e)
        }
    });
    "use strict";
    n.when("A", "a-component").register("a-meter", function(h, k) {
        var e = k.create({
            _componentName: "meter",
            init: function(a, e) {
                this._super(a, e);
                this._$element = this._$element.filter(".a-meter, .a-meter-with-txt");
                this._$bar = this._$element.find(".a-meter-bar");
                this._$progressTxt = this._$element.find(".a-meter-progress-txt")
            },
            mixin: ["show", "hide", "size", "isEmpty"],
            get: function() {
                return {
                    percent: this.percent(),
                    txt: this.text()
                }
            },
            enable: function() {
                this._$element.removeClass("a-inactive");
                return this
            },
            disable: function() {
                this._$element.addClass("a-inactive");
                return this
            },
            isEnabled: function() {
                return !this._$element.hasClass("a-inactive")
            },
            percent: function(a) {
                if ("undefined" === typeof a) return a = this._$bar.get(0).style.width, parseInt(a, 10);
                h.isFiniteNumber(a) || n.error("{API}  Meter percent should be a number between 0 and 100", "a-meter", "setProgress");
                a = Math.min(100, Math.max(0, a));
                a += "%";
                this._$bar.css({
                    width: a
                });
                this._$element.attr({
                    "aria-label": a,
                    "aria-valuenow": a
                });
                return this
            },
            text: function(a) {
                if ("undefined" === typeof a) return this._$progressTxt.text();
                this._$progressTxt.text(a);
                return this
            },
            set: function(a, e) {
                this.percent(a);
                e && this.text(e);
                return this
            }
        });
        return function(a, h) {
            return new e(a, h)
        }
    });
    n.when("a-component").register("a-spinner", function(h) {
        var k = h.create({
            _componentName: "spinner",
            init: function(e, a) {
                this._super(e, a);
                this._$element = this._$element.filter(".a-spinner-wrapper, .a-spinner")
            },
            mixin: ["show",
                "hide", "isEmpty", "size"
            ],
            remove: function() {
                this._$element.remove()
            }
        });
        return function(e, a) {
            return new k(e, a)
        }
    });
    "use strict";
    n.register("a-ua", function() {
        return {
            compareVersions: function(h, k, e) {
                var a = function(a) {
                    n.error("Versions are not comparable. " + a, "A - extras", "compareVersions")
                };
                e = e || ".";
                "string" === typeof h && "string" === typeof k && "string" === typeof e && "" !== h && "" !== k || a("Input values are not valid.");
                h = h.split(e);
                k = k.split(e);
                e = Math.max(h.length, k.length);
                for (var m = 0; m < e; m++) {
                    var c = m < h.length ?
                        Number(h[m]) : 0,
                        d = m < k.length ? Number(k[m]) : 0;
                    !isNaN(c) && isFinite(c) && !isNaN(d) && isFinite(d) || a("Piece of one version number evaluates to NaN or +/- Infinity.");
                    if (c < d) return -1;
                    if (c > d) return 1
                }
                return 0
            }
        }
    });
    "use strict";
    n.when("a-analytics", "prv:p-debug", "ready").execute(function(h, k) {
        n.declare("prv:a-logTrigger", function(e) {
            var a = k[e] && k[e].registered || 0,
                m = 0,
                c = 0,
                d;
            for (d in k)
                if (k.hasOwnProperty(d)) {
                    var n = k[d];
                    n.end && n.end <= a && (m++, c += n.end - n.start)
                }
            h.count("blocking-count:" + e, m);
            h.count("blocking-time:" +
                e, Math.round(c))
        })
    });
    "use strict";
    n.when("jQuery", "a-analytics", "load").register("a-unicode-rupee-test", function(h, k) {
        var e = h("\x3cdiv/\x3e"),
            a = h("\x3cspan/\x3e").html("\x26#65534;");
        h = h("\x3cspan/\x3e").html("\x26#8377;");
        e.append(a, h);
        e.appendTo(document.body);
        h = h.width();
        a = a.width();
        h === a ? k.increment("aui-unsupported-rupee", 1) : k.increment("aui-supported-rupee", 1);
        e.remove()
    });
    "use strict";
    n.register("prv:a-sampler-inclusion", function() {
        return {
            "AUI API Analytics": .01 > Math.random()
        }
    });
    n.when("prv:a-sampler-inclusion").register("prv:a-sampler",
        function(h) {
            return function(k) {
                return h.hasOwnProperty(k) && h[k]
            }
        });
    "use strict";
    n.when("A").execute("a-ember", function(h) {
        !h.capabilities.isUCBrowser && h.localStorage && n.when("prv:ember-weblab-type").execute("a-ember-weblab", function(k) {
            k = "ember_weblab:" + k;
            var e = k + ":loadingCount",
                a = k + ":loadedCount",
                m = k + ":displayedCount",
                c = k + ":load_timeAvgCount";
            n.when("a-fonts", "a-analytics", "load").execute("a-ember-loader", function(d, k) {
                if ("a-ember" !== h.localStorage.getItem("a-font-class")) {
                    k.increment(e);
                    var n = (new Date).getTime();
                    d.load("1em Amazon Ember");
                    d.load("bold 1em Amazon Ember");
                    d.load("italic 1em Amazon Ember");
                    d.load("italic bold 1em Amazon Ember");
                    d.ready.then(function(d) {
                        h.localStorage.setItem("a-font-class", "a-ember");
                        k.increment(a);
                        d = (new Date).getTime() - n;
                        k.count(c, d)
                    })
                } else -1 !== document.documentElement.className.indexOf("a-ember") && k.increment(m)
            })
        })
    })
});
/* ******** */
(function(g) {
    var z = window.AmazonUIPageJS || window.P,
        y = z._namespace || z.attributeErrors,
        b = y ? y("AmazonUIStandardComponent", "AmazonUI") : z;
    b.guardFatal ? b.guardFatal(g)(b, window) : b.execute(function() {
        g(b, window)
    })
})(function(g, z, y) {
    g.when("A", "prv:a-sc-component-factory").register("a-sc", function(b, f) {
        var d = new f;
        return {
            define: function(a) {
                a.components && b.each(a.components, function(a) {
                    if (!(a instanceof f)) throw Error("You must provide a component factory when specifying child components");
                });
                return d.redefine(a)
            }
        }
    });
    g.when("A").register("prv:a-sc-util", function(b) {
        function f(a, b, c) {
            "value" in c && (a[b] = c.value);
            return a
        }
        b = Object.defineProperty;
        var d;
        try {
            b({}, "x", {}), d = !0
        } catch (a) {
            d = !1
        }
        return {
            defineProperty: d ? b : f
        }
    });
    "use strict";
    g.when("A", "prv:a-sc-util").register("prv:a-sc-base", function(b, f) {
        var d = f.defineProperty;
        b = b.createClass({
            init: function(a, b, c) {
                d(this, "__sid", {
                    value: a
                });
                d(this, "__id", {
                    value: b
                });
                d(this, "__pid", {
                    value: c
                });
                d(this, "isRoot", {
                    value: !c,
                    writable: !1
                })
            },
            toString: function() {
                return "" + this.__id
            }
        });
        f = b.extend({
            init: function(a, b, c) {
                this._super(a, b, c);
                d(this, "__at", {
                    value: -1,
                    writable: !0
                });
                d(this, "__to", {
                    value: null,
                    writable: !0
                });
                d(this, "__busy", {
                    value: !1,
                    writable: !0
                })
            }
        });
        return {
            ComponentState: b,
            Component: f
        }
    });
    "use strict";
    g.when("prv:a-sc-datastore").register("prv:a-sc-registry", function(b) {
        var f = {},
            d = {},
            a = 0,
            e = 0;
        return {
            specifications: {},
            constructors: {},
            instances: f,
            datastores: {},
            hierarchy: d,
            elements: {},
            handlers: {},
            children: function(a) {
                a = d[a];
                var b = [],
                    e;
                for (e in a) a.hasOwnProperty(e) && b.push(f[a[e]]);
                return b
            },
            getNextInstanceId: function() {
                return ++a
            },
            getNextSpecificationId: function() {
                return ++e
            }
        }
    });
    "use strict";
    g.when("A", "prv:a-sc-util").register("prv:a-sc-lifecycle", function(b, f) {
        function d() {
            return b.constants.NOOP
        }

        function a(a, b, e) {
            c(this, "name", {
                value: a
            });
            c(this, "enter", {
                value: b
            });
            c(this, "leave", {
                value: e
            })
        }

        function e(a) {
            c(this, "states", {
                value: a
            });
            c(this, "stateNames", {
                value: b.map(a, function(a) {
                    return a.name
                })
            });
            c(this, "methodNames", {
                value: b.reduce(a, function(a, b) {
                    a.push(b.enter);
                    a.push(b.leave);
                    return a
                }, [])
            })
        }
        var c = f.defineProperty;
        a.create = function(b, e, c) {
            return new a(b, e, c)
        };
        e.prototype.indexOf = function(a) {
            return this.stateNames.indexOf(a)
        };
        e.prototype.enterForIndex = function(a) {
            return this.states[a].enter
        };
        e.prototype.leaveForIndex = function(a) {
            return this.states[a].leave
        };
        e.prototype.getTransitionArray = function(a, e) {
            var c = a < e,
                h = c ? "enter" : "leave",
                f = c ? 1 : -1;
            return b.map(b.range(c ? a + 1 : a, e + f, f), function(a) {
                return this.states[a][h]
            }, this)
        };
        e.prototype.implement = function(a, e) {
            a = a || {};
            e = "function" ===
                typeof e ? e : d;
            return b.reduce(this.states, function(b, c) {
                b[c.enter] = a[c.enter] || e(c.enter, c);
                b[c.leave] = a[c.leave] || e(c.leave, c);
                return b
            }, {})
        };
        e.create = function(c) {
            c = b.map(c, function(b) {
                return a.create.apply(null, b)
            });
            return new e(c)
        };
        return {
            create: e.create
        }
    });
    "use strict";
    g.when("prv:a-sc-lifecycle").register("prv:a-sc-lifecycle-instances", function(b) {
        return {
            standard: b.create([
                ["created", "create", "destroy"],
                ["loaded", "load", "unload"],
                ["rendered", "render", "remove"],
                ["visible", "show", "hide"]
            ])
        }
    });
    "use strict";
    g.when("A").register("prv:a-sc-event-emitter", function(b) {
        var f = /\s+/,
            d = {
                on: function(a, e, c) {
                    a = f.test(a) ? a.split(f) : a;
                    b.isArray(a) ? b.each(a, function(a) {
                        this.on(a, e, c)
                    }, this) : (this.__events[a] || (this.__events[a] = [])).push({
                        handler: e,
                        context: c || this
                    });
                    return this
                },
                off: function(a, e) {
                    var c, d;
                    if (!a && !e) return this.__events = {}, this;
                    a = f.test(a) ? a.split(f) : a;
                    if (b.isArray(a)) return b.each(a, function(a) {
                        this.off(a, e)
                    }, this), this;
                    if (!e) return delete this.__events[a], this;
                    c = this.__events[a];
                    this.__events[a] = d = [];
                    b.each(c, function(a) {
                        a.handler !== e && d.push(a)
                    }, this);
                    d.length || delete this.__events[a];
                    return this
                },
                trigger: function(a) {
                    var e, c;
                    if (!this.__events || !a) return this;
                    c = this.__events[a];
                    if (!c) return this;
                    e = [].slice.call(arguments, 1);
                    b.each(c, function(a) {
                        a.handler.apply(a.context, e)
                    });
                    return this
                }
            };
        return {
            init: function(a) {
                a.__events = a.__events || {};
                return a
            },
            mixin: function(a) {
                b.mixin(a, d);
                return a
            }
        }
    });
    "use strict";
    g.when("A", "prv:a-sc-base", "prv:a-sc-lifecycle-instances", "3p-promise", "prv:a-sc-default-datastore",
        "prv:a-sc-registry", "prv:a-sc-component-proxies").register("prv:a-sc-define", function(b, f, d, a, e, c, p) {
        function g(m, b) {
            return function() {
                var e = this,
                    c = h[this.__sid],
                    f = a.resolve(),
                    d = this.__at,
                    r;
                if (d === m || b && d > m || !b && d < m) return f;
                for (d = k.getTransitionArray(d, m); r = d.shift();)(function(a) {
                    f = f.then(c.lifecycle[a].call(new p.Transition(e))).then(c.view[a].call(new p.View(e))).then(function() {
                        b ? e.__at++ : e.__at--
                    })
                })(r);
                return f["catch"](function(a) {
                    console.error(a)
                })
            }
        }
        var k = d.standard,
            h = c.specifications,
            r =
            c.constructors,
            l = c.instances,
            n = c.datastores,
            t = c.hierarchy,
            u = c.handlers,
            v, x;
        d = {
            init: function() {
                this._super.apply(this, arguments)
            }
        };
        for (var w = 0; w < k.states.length; w++) v = k.states[w], d[v.enter] = g(w, !0), d[v.leave] = g(w, !1);
        x = f.Component.extend(d);
        return function(a, d) {
            a.lifecycle = k.implement(a.lifecycle || {});
            a.view = k.implement(a.view || {});
            var f = a.components || {},
                v = a.data || {},
                p = a.events || {},
                g;
            d = d || c.getNextSpecificationId();
            h[d] = a;
            u[d] = {};
            for (g in p) p.hasOwnProperty(g) && (u[d][g] = p[g]);
            return x.extend({
                init: function(a,
                    m) {
                    var h = c.getNextInstanceId();
                    this._super(d, h, m);
                    a = b.extend({}, v, a);
                    l[h] = this;
                    n[h] = new e(a);
                    t[h] = {};
                    b.each(f, function(a, b) {
                        a = new r[a](a.defaultData, h);
                        t[h][b] = a.toString()
                    })
                }
            })
        }
    });
    "use strict";
    g.when("A", "prv:a-sc-event-emitter", "prv:a-sc-util").register("prv:a-sc-datastore", function(b, f, d) {
        var a = d.defineProperty;
        return b.createClass({
            init: function(e) {
                if (e && "object" !== typeof e) throw Error("Datastores only accept plain JavaScript objects as input");
                e = b.copy(e || {});
                a(this, "store", {
                    value: e
                })
            },
            get: function(a) {
                return this.store[a]
            },
            set: function(a, b) {
                if (a === y || null === a || b === y) return !1;
                this.store[a] = b;
                return !0
            }
        }).extend(f.mixin({
            init: function(a) {
                this._super(a);
                f.init(this)
            },
            set: function(a, c) {
                var d = this.store[a];
                return this._super(a, c) && !b.equals(d, c) ? (this.trigger("change:" + a, d, c), !0) : !1
            }
        }))
    });
    "use strict";
    g.when("A", "prv:a-sc-datastore", "prv:a-sc-registry", "prv:a-sc-component-proxies", "prv:a-sc-lifecycle-instances").register("prv:a-sc-default-datastore", function(b, f, d, a, e) {
        var c = /\s+/,
            g = d.instances,
            q = d.specifications,
            k = e.standard,
            h = function() {
                function b(c, d) {
                    c = g[c];
                    var e = q[c.__sid].view,
                        f = k.enterForIndex(c.__at);
                    e[f].call(new a.View(c), d)
                }
                var c = {},
                    d = {};
                return {
                    add: function(a, e, f, h) {
                        var k = d[a],
                            m = c[a];
                        a = g[a];
                        k && clearTimeout(k);
                        m || (c[a] = m = {});
                        m[e] = {
                            oldValue: f,
                            newValue: h
                        };
                        d[a] = setTimeout(function() {
                            b(a, m);
                            d[a] = c[a] = null
                        }, 100)
                    },
                    trigger: b
                }
            }();
        return f.extend({
            init: function(a) {
                var b = {},
                    c;
                for (c in a) a.hasOwnProperty(c) && "function" !== typeof a[c] && (b[c] = a[c]);
                this._super(b)
            },
            getProxy: function(a, d) {
                var e = this,
                    f = {
                        get: function(a) {
                            return e.get(a)
                        }
                    };
                !0 !== d && (f.set = function(a, b) {
                    return e.set(a, b)
                }, f.bind = function(d, f) {
                    d = d.split(c);
                    f = f || {};
                    b.each(d, function(b) {
                        e.on("change:" + b, function(c, d) {
                            var e;
                            !1 === f.batch ? (e = {}, e[b] = {
                                oldValue: c,
                                newValue: d
                            }, h.trigger(a, e)) : h.add(a, b, c, d)
                        })
                    })
                }, f.unbind = function(a) {
                    a ? (a = a.split(c), b.each(a, function(a) {
                        e.off("change:" + a)
                    })) : e.off()
                });
                return f
            }
        })
    });
    "use strict";
    g.when("A", "prv:a-sc-define").register("prv:a-sc-component-collection", function(b, f) {
        var d = {};
        return {
            get: function(a) {
                if (d[a]) return d[a];
                d[a] = f({
                    data: {
                        factory: a,
                        index: []
                    }
                });
                return d[a]
            }
        }
    });
    "use strict";
    g.when("A", "prv:a-sc-registry", "prv:a-sc-base", "prv:a-sc-define", "prv:a-sc-component-collection").register("prv:a-sc-component-factory", function(b, f, d, a, e) {
        var c = f.specifications,
            g = f.constructors,
            q = 0,
            k = d.ComponentState.extend({
                init: function(a, b, c, d) {
                    this._super(a, b || ++q);
                    this.defaultData = d || {};
                    c && (g[this] = c)
                },
                getInstance: function(a) {
                    var c = g[this];
                    a = b.extend({}, this.defaultData, a);
                    return new c(a)
                },
                toCollection: function() {
                    if (!g[this]) throw Error("You cannot create a collection of nothing");
                    return new k(null, null, e.get(this), this.defaultData)
                },
                redefine: function(d) {
                    var e = b.keys(d);
                    if (!e.length && this.__sid) throw Error("You must provide a new specification to the `redefine` method");
                    if (1 === e.length && "data" === e[0]) return new k(this.__sid, this.__id, null, d.data);
                    d = b.extend({}, c[this.__sid] || {}, d);
                    e = f.getNextSpecificationId();
                    d = a(d, e);
                    return new k(e, null, d)
                }
            });
        return k
    });
    "use strict";
    g.when("A", "prv:a-sc-registry", "prv:a-sc-base", "prv:a-sc-events", "prv:a-sc-lifecycle-instances", "3p-promise").register("prv:a-sc-component-proxies",
        function(b, f, d, a, e, c) {
            var g = f.instances,
                q = f.constructors,
                k = f.datastores,
                h = f.hierarchy,
                r = f.elements,
                l = e.standard,
                n = /\s+/,
                t = Math.pow(2, 32);
            f = d.ComponentState.extend({
                init: function(a, b, c) {
                    a instanceof d.ComponentState ? this._super(a.__sid, a.__id, a.__pid) : this._super(a, b, c)
                }
            });
            var u = f.extend({
                init: function(a, b, c) {
                    this._super(a, b, c);
                    this.data = k[this].getProxy(this)
                },
                children: function(a) {
                    return (new x(this)).filter(a)
                },
                collection: function(a) {
                    return new w(this, a)
                },
                dispatch: function(b) {
                    a.dispatch.call(this,
                        b, [].slice.call(arguments, 1))
                },
                broadcast: function(b) {
                    a.broadcast.call(this, b, [].slice.call(arguments, 1))
                }
            });
            e = f.extend({
                init: function(a, b, c) {
                    this._super(a, b, c);
                    this.data = k[this].getProxy(this, !0)
                },
                getElement: function() {
                    return r[this.__id] || null
                },
                setElement: function(a) {
                    if (a instanceof HTMLElement) r[this.__id] = a;
                    else throw Error("You must provide an HTMLElement object to View.setElement");
                },
                unsetElement: function() {
                    r[this.__id] = null
                },
                dispatch: function(b) {
                    a.viewDispatch.call(new u(this.__sid, this.__id,
                        this.__pid), b, [].slice.call(arguments, 1))
                }
            });
            var v = {
                    init: function(a) {
                        this._super(a);
                        this.__cache = []
                    },
                    filter: function(a) {
                        var c = this.__cache = [];
                        a && "string" === typeof a ? (c = b.map(a.split(n), function(a) {
                            return (a = h[this][a] || null) ? g[a] : a
                        }, this), c = b.filter(c, function(a) {
                            return null !== a
                        })) : c = b.map(b.values(h[this]), function(a) {
                            return g[a]
                        });
                        this.__cache = c;
                        return this
                    },
                    add: function(a, b, c) {
                        b = new q[b](c, this.__id);
                        h[this][a] = b.__id;
                        this.__cache.push(b);
                        return this
                    },
                    disown: function(a) {
                        var c = h[this][a],
                            d;
                        if (!c) return this;
                        delete h[this][a];
                        d = g[c];
                        this.__cache = b.filter(this.__cache, function(a) {
                            return a !== d
                        });
                        return this
                    },
                    length: function() {
                        return this.__cache.length
                    }
                },
                l = l.implement({}, function(a) {
                    return function() {
                        return c.all(b.map(this.__cache, function(b) {
                            return b[a]()
                        }))
                    }
                });
            b.mixin(v, l);
            var x = f.extend(v),
                w = x.extend({
                    init: function(a, b) {
                        a = g[h[a][b]];
                        if (!a) throw Error("Child collection named " + b + " does not exist");
                        this._super(a);
                        this.filter()
                    },
                    filter: function() {
                        return this._super()
                    },
                    add: function(a, c) {
                        var d, e, f;
                        if ("string" ===
                            typeof a || !b.isFiniteNumber(c)) throw Error("Argument error, usage: Collection.add(data:object, index:integer)");
                        d = k[this];
                        e = d.get("factory");
                        f = d.get("index");
                        e = new q[e](a, this.__id);
                        a = e.toString();
                        h[this][a] = e.__id;
                        this.__cache.push(e);
                        f.splice(c, 0, a);
                        d.set("index", f);
                        return this
                    },
                    append: function(a) {
                        return this.add(a, t)
                    },
                    prepend: function(a) {
                        return this.add(a, 0)
                    },
                    insert: function(a, b) {
                        return this.add(a, b)
                    },
                    get: function(a) {
                        var b = k[this].get("index");
                        if (0 > a || a > b.length - 1) throw Error("Component index out of bounds");
                        return (new x(this)).filter(b[a])
                    },
                    disown: function(a) {
                        var b = k[this].get("index");
                        if (0 > a || a > b.length - 1) throw Error("Component index out of bounds");
                        a = b.splice(a, 1);
                        return this._super(a[0])
                    }
                });
            return {
                Transition: u,
                View: e,
                ChildComponent: x,
                ChildCollection: w
            }
        });
    "use strict";
    g.when("A", "prv:a-sc-registry").register("prv:a-sc-events", function(b, f) {
        var d = f.instances,
            a = f.handlers,
            e = function p(b, e) {
                var f = this.constructor,
                    g, l, n;
                this.isRoot || (l = d[this.__pid], g = a[l.__sid][b], f = new f(l.__sid, l.__id, l.__pid), g && (n = !1 === g.apply(f, e)), n || p.call(f, b, e))
            };
        return {
            dispatch: e,
            viewDispatch: function(b, f) {
                var g, h;
                (g = a[d[this].__sid][b]) && (h = !1 === g.apply(this, f));
                h || e.call(this, b, f)
            },
            broadcast: function q(d, e) {
                var g = this.constructor,
                    l = f.children(this),
                    n, t, u;
                l.length && b.each(l, function(b) {
                    t = a[b.__sid][d];
                    n = new g(b.__sid, b.__id, b.__pid);
                    t && (u = !1 === t.apply(n, e));
                    u || q.call(n, d, e)
                })
            }
        }
    })
});
/* ******** */
(function(f) {
    var q = window.AmazonUIPageJS || window.P,
        k = q._namespace || q.attributeErrors,
        d = k ? k("AmazonUICard", "") : q;
    d.guardFatal ? d.guardFatal(f)(d, window) : d.execute(function() {
        f(d, window)
    })
})(function(f, q, k) {
    f.register("prv:a-card-constants", function() {
        var d = {
            PINNED_AS_FIXED: 0,
            PINNED_AS_RELATIVE: 1,
            CARD_DOWN: -1,
            CARD_UP: 1,
            CARD_PEEK_SIZE: 75,
            CARD_PINNED_HEADER_SIZE: 56,
            CARD_PEEK_DESCRIPTION_SUFFIX: "-card-peek-label",
            CARD_BODY_ID_SUFFIX: "-card-body",
            selectors: {
                CARD_LIST: ".a-card-list",
                CARD: ".a-card",
                CARD_HEADER: ".a-card-header",
                CARD_BODY: ".a-card-body",
                CARD_A11Y_LABEL: ".a-card-peek-label"
            }
        };
        f.when("prv:skin-vars").execute(function(f) {
            d.CARD_PINNED_HEADER_SIZE = f.card.CARD_PINNED_HEADER_SIZE
        });
        return d
    });
    "use strict";
    f.when("A", "a-sc", "prv:a-card-constants").register("a-card-component", function(d, f, g) {
        function h(b, e, a) {
            for (; !e(b);) {
                for (var c in a)
                    if (a.hasOwnProperty(c) && a[c](b)) return c;
                b = b.parentNode
            }
            return "2"
        }

        function q(b, e, a) {
            e && (e = e.getAttribute("id"), b.setAttribute("aria-describedby", a ? "" : e))
        }

        function t(b) {
            return b.isTopTouchingCanvasTop ||
                b.isCutByCanvasTop
        }

        function k(b) {
            return b.isTopTouchingCanvasTop || b.isTopBelowCanvasTop
        }

        function v(b) {
            return b.isBottomTouchCanvasTop || b.isCutByCanvasTop
        }

        function a(b) {
            return b.isBottomTouchCanvasTop || b.isAboveCanvas
        }

        function c(b, e, a) {
            a ? b.classList.add(e) : b.classList.remove(e)
        }
        return f.define({
            data: {
                id: "",
                idx: "",
                selector: "",
                expandable: !1,
                expanded: !1,
                pinned: !1,
                hasPeek: !1,
                canvasTop: 0,
                pinnedMode: -1,
                unpinnedHeaderHeight: 0,
                scrollDirection: 0
            },
            events: {
                "ui:toggle-card": function() {
                    var b = !this.data.get("expanded");
                    this.data.set("expanded", b);
                    b || this.data.set("pinned", !1);
                    return !1
                },
                "ui:expand-card": function() {
                    this.data.set("expanded", !0);
                    return !1
                },
                "card:update-dom-data": function(b) {
                    for (var e in b) b.hasOwnProperty(e) && this.data.set(e, b[e])
                },
                "cardList:refresh-card": function(b, e) {
                    if (this.data.get("id") === b) {
                        var c = this.data.get("cardEl");
                        b = this.data.get("canvasTop");
                        var d = c.getBoundingClientRect(),
                            y = c.querySelector(g.selectors.CARD_HEADER).getBoundingClientRect(),
                            c = {
                                _cardRect: d,
                                _headerRect: y,
                                isAboveCanvas: d.bottom <
                                    b,
                                isBottomTouchCanvasTop: c.bottom === b,
                                isVisibleHeightLessThanPinnedHeader: d.bottom - b < g.CARD_PINNED_HEADER_SIZE,
                                isCutByCanvasTop: d.top < b && b < d.bottom,
                                isTopTouchingCanvasTop: d.top === b,
                                isTopBelowCanvasTop: b < d.top
                            };
                        c.isVisibleHeightLessThanPinnedHeader && (c.visibleHeight = d.bottom - b);
                        this.data.get("pinned") ? (e = e === g.CARD_UP ? a : k, e(c) && this.data.set("pinned", !1)) : (e = e === g.CARD_UP ? t : v, e(c) && this.data.set("pinned", !0));
                        this.data.get("pinned") && this.data.set("pinnedMode", c.isVisibleHeightLessThanPinnedHeader ?
                            g.PINNED_AS_RELATIVE : g.PINNED_AS_FIXED)
                    }
                },
                "cardList:update-canvas-top": function(b) {
                    this.data.set("canvasTop", b)
                }
            },
            lifecycle: {
                render: function() {
                    this.data.get("expandable") && (this.data.bind("expanded canvasTop"), this.data.bind("pinned", {
                        batch: !1
                    }), this.data.bind("pinnedMode", {
                        batch: !1
                    }))
                },
                show: function() {
                    return this.children().show()
                }
            },
            view: {
                render: function() {
                    function b(b) {
                        var a = b.currentTarget;
                        b = h(b.target, function(b) {
                            return b === a
                        }, {
                            0: function(b) {
                                return "a" === b.tagName.toLowerCase() || b.classList.contains("aok-card-allow-interaction")
                            },
                            1: function(b) {
                                return b.classList.contains("a-card-header")
                            }
                        });
                        "0" !== b && ("1" === b ? m.dispatch("ui:toggle-card") : m.data.get("expanded") || m.dispatch("ui:expand-card"))
                    }
                    var e = document.querySelector(this.data.get("selector")),
                        a = e.querySelector(g.selectors.CARD_HEADER),
                        c = e.querySelector(g.selectors.CARD_BODY),
                        d = e.querySelector(g.selectors.CARD_A11Y_LABEL),
                        u = this.data.get("expandable"),
                        m = this,
                        f = this.data.get("hasPeek") && d,
                        l = {
                            cardEl: e,
                            headerEl: a,
                            bodyEl: c,
                            a11yLabelEl: d,
                            shouldMaintainA11yLabel: f
                        };
                    if (a) {
                        var p =
                            a.getBoundingClientRect();
                        l.unpinnedHeaderHeight = p.height
                    }
                    this.dispatch("card:update-dom-data", l);
                    u && e.addEventListener("click", b);
                    e.classList.contains("a-card-expanded") && m.dispatch("ui:expand-card");
                    u && (u = this.data.get("id") + g.CARD_BODY_ID_SUFFIX, c.setAttribute("id", u), a.setAttribute("aria-controls", u));
                    f && (c = this.data.get("id") + g.CARD_PEEK_DESCRIPTION_SUFFIX, d.setAttribute("id", c), q(a, d, this.data.get("expanded")));
                    this.setElement(e)
                },
                show: function(b) {
                    if (b) {
                        var a = this.getElement(),
                            n = a.getBoundingClientRect(),
                            f = this.data.get("headerEl"),
                            y = this.data.get("bodyEl"),
                            u = this.data.get("a11yLabelEl"),
                            m = this.data.get("unpinnedHeaderHeight"),
                            h = this.data.get("pinned"),
                            l = this.data.get("expanded"),
                            p = this.data.get("canvasTop"),
                            k = this.data.get("pinnedMode"),
                            r = this.data.get("isDynamicCardHeight");
                        this.data.get("hasPeek");
                        var t = b.pinned && h,
                            v = b.pinned && !h,
                            w = !!b.expanded;
                        b = w && l;
                        var x = w && !l,
                            n = n.bottom < p,
                            z = this.data.get("shouldMaintainA11yLabel");
                        c(a, "aok-card-expanded", l);
                        c(a, "a-card-expanded", l);
                        c(a, "aok-card-collapsed", !l);
                        c(a, "a-card-collapsed", !l);
                        c(a, "a-card-pinned", h);
                        c(a, "a-card-pinned-fixed", h && k === g.PINNED_AS_FIXED);
                        c(a, "a-card-pinned-relative", h && k === g.PINNED_AS_RELATIVE);
                        f.style.top = k === g.PINNED_AS_FIXED ? p + "px" : "";
                        r ? c(a, "a-card-above-canvas", n) : t ? a.style.paddingTop = m + "px" : v && (a.style.paddingTop = 0);
                        n = a.getBoundingClientRect();
                        a = d.viewport().height;
                        h = n.top < p;
                        k = a < n.bottom;
                        r = 0;
                        t && this.dispatch("card:updated-pinned-index", this.data.get("idx"));
                        h && (b || x) ? r = g.CARD_DOWN * (p - n.top) : k && b && (r = Math.min(n.height, m + 2 *
                            g.CARD_PEEK_SIZE), r = g.CARD_UP * (r - (a - n.top)));
                        r && this.dispatch("card:scroll-card-list-up", r);
                        w && (m = b ? "expand" : "collapse", p = this.data.get("id"), d.trigger("a:card:" + m, {
                            card: p
                        }), d.trigger("a:card:" + p + ":" + m), f.setAttribute("aria-expanded", l), y.setAttribute("aria-hidden", !l), z && q(f, u, b))
                    }
                }
            }
        })
    });
    "use strict";
    f.when("A", "a-sc", "a-card-component", "prv:a-card-constants").register("a-card-list", function(d, f, g, h) {
        function k(a) {
            for (var c = 0; a;) isNaN(a.offsetTop) || (c += a.offsetTop), a = a.offsetParent;
            return c
        }

        function t(a) {
            a =
                document.querySelector(a);
            var c = a.getBoundingClientRect();
            return k(a) + c.height
        }

        function x(a) {
            return function(c) {
                var b = c.target;
                a(c, b.scrollTop > v ? h.CARD_UP : h.CARD_DOWN);
                v = b.scrollTop
            }
        }
        var v = 0;
        return f.define({
            components: {
                cards: g.toCollection()
            },
            data: {
                headerSelector: "header",
                selector: h.selectors.CARD_LIST,
                cardSelector: h.selectors.CARD,
                canvasTop: 0,
                cardListScrollTop: 0,
                cardListScrollTopDelta: 0,
                pinnedIndex: null,
                isDynamicCardHeight: !0,
                cardStateCollection: []
            },
            events: {
                "ui:scroll-card-list": function(a) {
                    this.data.set("cardListScrollTop",
                        a)
                },
                "ui:update-canvas-top": function(a) {
                    this.data.set("canvasTop", a);
                    this.broadcast("cardList:update-canvas-top", a)
                },
                "ui:refresh-card": function(a, c) {
                    this.broadcast("cardList:refresh-card", a, c)
                },
                "card:updated-pinned-index": function(a) {
                    this.data.set("pinnedIndex", a)
                },
                "card:scroll-card-list-up": function(a) {
                    this.data.set("cardListScrollTopDelta", a)
                },
                "cardList:update-dom-data": function(a) {
                    for (var c in a) a.hasOwnProperty(c) && this.data.set(c, a[c])
                }
            },
            lifecycle: {
                render: function() {
                    this.data.bind("cardListScrollTop", {
                        batch: !1
                    });
                    this.data.bind("cardListScrollTopDelta", {
                        batch: !1
                    });
                    var a = t(this.data.get("headerSelector"));
                    this.data.set("canvasTop", a)
                },
                show: function() {
                    var a = this.collection("cards"),
                        c = this.data.get("cardStateCollection"),
                        b = this.data.get("canvasTop"),
                        e = this.data.get("isDynamicCardHeight");
                    d.each(c, function(c) {
                        c = d.extend(c, {
                            canvasTop: b,
                            isDynamicCardHeight: e
                        });
                        a.append(c)
                    });
                    return a.show()
                }
            },
            view: {
                render: function() {
                    var a = document.querySelector(this.data.get("selector")),
                        c = Array.prototype.slice.call(a.querySelectorAll(this.data.get("cardSelector")));
                    this.data.get("canvasTop");
                    var b = this.data.get("headerSelector"),
                        e = this,
                        f = [];
                    d.each(c, function(a, b) {
                        a.id = a.id || "a-card-" + b;
                        f.push({
                            expandable: a.classList.contains("a-card-expandable"),
                            expanded: a.classList.contains("a-card-expanded"),
                            hasPeek: a.classList.contains("a-card-has-peek"),
                            id: a.id,
                            idx: b,
                            selector: "#" + a.id
                        })
                    });
                    this.dispatch("cardList:update-dom-data", {
                        cardStateCollection: f
                    });
                    var g = x(function(a, b) {
                        d.each(c, function(a) {
                            a.classList.contains("a-card-expanded") && e.dispatch("ui:refresh-card", a.id,
                                b)
                        })
                    });
                    a.addEventListener("scroll", d.throttle(g, 20));
                    q.addEventListener("orientationchange", function() {
                        d.animationFrameDelay(function() {
                            var a = t(b);
                            e.dispatch("ui:update-canvas-top", a);
                            var d = e.data.get("pinnedIndex");
                            d && (a = k(c[d]) - a, e.dispatch("ui:scroll-card-list", a), e.dispatch("ui:scroll-card-list", a + h.CARD_UP))
                        })
                    });
                    this.setElement(a)
                },
                show: function(a) {
                    if (a) {
                        d.trigger("card-list:view:show:states-change", {
                            changes: a
                        });
                        var c = this.getElement();
                        a.cardListScrollTopDelta && (c.scrollTop += this.data.get("cardListScrollTopDelta"));
                        a.cardListScrollTop && (c.scrollTop = this.data.get("cardListScrollTop"))
                    }
                }
            }
        })
    });
    "use strict";
    f.when("A", "a-card-list").register("a-card", function(d, f) {
        return {
            init: function(d) {
                return f.getInstance(d).show()
            }
        }
    })
});
/* ******** */
(function(c) {
    var b = window.AmazonUIPageJS || window.P,
        d = b._namespace || b.attributeErrors,
        a = d ? d("AmazonUITouchJS", "AmazonUI") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
})(function(c, b, d) {});
/* ******** */
(function(m) {
    var C = window.AmazonUIPageJS || window.P,
        A = C._namespace || C.attributeErrors,
        e = A ? A("AmazonUICarousel", "") : C;
    e.guardFatal ? e.guardFatal(m)(e, window) : e.execute(function() {
        m(e, window)
    })
})(function(m, C, A) {
    m.declare("a-carousel-constants", {
        ANIMATING: "animating",
        ANIMATION_SPEED: "animation_speed",
        AUTO_ADJUST_HEIGHT: "auto_adjust_height",
        CIRCULAR: "circular",
        CURRENT_PIXEL: "px",
        CURRENTLY_WRAPPING: "currentlyWrapping",
        DELAY_TIME: "delay_time",
        ELEMENT_CSS_CLASS: "elementCssClass",
        FETCHED_ITEMS: "fetchedItems",
        FIRST_VISIBLE_ITEM: "firstVisibleItem",
        HIDE_OFF_SCREEN: "hide_off_screen",
        INIT_EVENTS: "a:pageUpdate beforeReady",
        LOADING: "loading",
        MIN_GUTTER: "minimum_gutter_width",
        NAME: "name",
        NO_TRANSITION: "no_transition",
        PAGE_NUMBER: "pageNumber",
        PAGE_SIZE: "pageSize",
        PEEK_GRADIENT: "peek_gradient",
        PEEK_PERCENTAGE: "peek_percentage",
        PEEK_WIDTH: "peek_width",
        SET_SIZE: "set_size",
        SPRINGINESS: "springiness",
        STATIC_LOADER_CSS_CLASS: "staticLoaderCssClass",
        TOTAL_PAGES: "totalPages",
        TOUCH_EASING: "touch_easing",
        TRANSITION_STRATEGY: "transitionStrategy",
        WRAP_EASING: "wrap_easing"
    });
    "use strict";
    m.register("a-carousel-utils", function() {
        function e(c) {
            return "string" === typeof c
        }

        function h(c) {
            return c && c.nodeType !== A
        }

        function l(c) {
            return "" === c ? "\x3cdiv\x3e\x3c/div\x3e" : c ? e(c) || h(c) ? c : l(c.content) : null
        }

        function f(c) {
            c && (e(c) || h(c) ? c = !0 : c.content = f(c.content));
            return c
        }
        return {
            addElementToDom: function(c, f) {
                f && (e(f) ? c.html(f) : h(f) && c.empty().append(f), !0 !== f && c.removeClass("a-carousel-card-empty"))
            },
            clearElementFromItem: f,
            getElementFromItem: l,
            isElement: h,
            isString: e
        }
    });
    "use strict";
    m.register("a-carousel-circular-utils", function() {
        function e(e) {
            var f = 0 < e;
            return function(c, e, k) {
                var d = e.length;
                k = (k || 1) % d;
                c = c.get(0);
                for (var b, a = 0; a < k; a++) f ? (b = e.get(a), c.appendChild(b)) : (b = e.get(d - 1 - a), c.insertBefore(b, c.children[0]))
            }
        }

        function h(e) {
            var f = 0 < e;
            return function(c, e) {
                e = e ? e % c.length : 1;
                f ? c = c.concat(c.splice(0, e)) : c.unshift.apply(c, c.splice(c.length - e, e));
                return c
            }
        }
        return {
            rotateCW: e(1),
            rotateCCW: e(-1),
            rotateArrayCW: h(1),
            rotateArrayCCW: h(-1),
            firstCardIndexAfterRotate: function(e,
                f, c) {
                e = (f + e) % c;
                0 === e ? e = c : 0 > e && (e = c + e);
                return e
            },
            relativeIndexFromIndex: function(e, f, c) {
                var g = 1;
                if (0 < e && e <= c) return e > f ? g = e - f + 1 : e < f && (g = c - f + e + 1), g;
                m.error("idx should be between 1 and " + c, "a-carousel-circular-utils", "relativeIndexFromIndex")
            }
        }
    });
    "use strict";
    m.when("A", "jQuery").register("a-carousel-measure", function(e, h) {
        return function(l) {
            function f(c, f, d) {
                var b, a, t, u;
                f.jquery || (f = h(f));
                for (e.each(d, function(b) {
                        if ("top" === b || "left" === b) return a = f.offset(), !1
                    }); void 0 !== (b = d.pop());) t = c[b], "left" ===
                    b || "top" === b ? c[b] = a[b] : -1 < b.indexOf("outer") ? c[b] = f[b](!0) : c[b] = f["outer" + b.charAt(0).toUpperCase() + b.substr(1)](), c[b] !== t && (void 0 === u && (u = {}), u[b] = t);
                return u
            }
            var c = {
                carousel: {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                },
                viewport: {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                },
                items: [],
                getFirstCardWidth: function() {
                    return void 0 !== this.items[0] && e.isFiniteNumber(this.items[0].width) ? this.items[0].width : 160
                }
            };
            l.measure = function(g) {
                var k = this.dom.$carousel,
                    d = this.dom.$viewport,
                    b = {};
                g && (g = g.split(" "));
                if (!g || -1 < e.indexOfArray(g, "carousel")) b.carousel = f(c.carousel, k, "top left height width outerHeight outerWidth".split(" "));
                if (!g || -1 < e.indexOfArray(g, "viewport")) b.viewport = f(c.viewport, d, ["height", "width", "outerHeight", "outerWidth"]);
                if (!g || -1 < e.indexOfArray(g, "items")) c.items = [], b.items = {}, k.children("li").each(function(a, d) {
                    c.items[a] = {};
                    d = f(c.items[a], d, "top left height width outerHeight outerWidth".split(" "));
                    void 0 !== d && (b.items[a] = d)
                });
                return b
            };
            l.getItemOffset = function(e) {
                var f = c.items;
                e--;
                if (f && f.length) {
                    if (e < f.length) {
                        for (var d = 0, b = f[0].outerWidth, a = 0; a < e; a++) d += f[a] ? f[a].outerWidth : b;
                        0 < e && this.getAttr("first_item_flush_left") && (d += l.getAttr("currentGutter"));
                        return d
                    }
                } else return 0
            };
            l.getDimensions = function() {
                return e.copy(c)
            };
            l.updateDimensionsCache = function(f) {
                e.extend(c, f)
            };
            l.getViewportWidth = function() {
                try {
                    return c.viewport.width
                } catch (e) {}
            }
        }
    });
    "use strict";
    m.when("A", "jQuery").register("a-carousel-attributes", function(e, h) {
        return function(l, f) {
            var c = {},
                g = {},
                k = {};
            e.extend(c,
                f);
            l.onChange = function(d, b) {
                d = d.split(" ");
                for (var a = d.length, t; a--;) t = d[a], g[t] || (g[t] = []), h.isFunction(b) && -1 === e.indexOfArray(g[t], b) && g[t].push(b);
                return this
            };
            l.unbind = function(d, b) {
                g[d] && b && (b = e.indexOfArray(g[d], b), -1 < b && g[d].splice(b, 1));
                return this
            };
            l.once = function(d, b) {
                var a = function() {
                    b.apply(null, arguments);
                    l.unbind(d, a)
                };
                return l.onChange(d, a)
            };
            l.setAttr = function(d, b, a) {
                var t = c[d];
                c[d] = b;
                if (!(a || k[d] || e.equals(b, t))) {
                    k[d] = !0;
                    b = e.copy(b);
                    t = e.copy(t);
                    if (g[d]) {
                        a = e.copy(g[d]);
                        for (var f = 0,
                                p = a.length; f < p; f++) a[f](b, t, l, d)
                    }
                    b = {
                        newValue: b,
                        oldValue: t,
                        carousel: l
                    };
                    e.trigger("a:carousel:change:" + d, b);
                    c.name && e.trigger("a:carousel:" + c.name + ":change:" + d, b);
                    k[d] = !1
                }
                return this
            };
            l.getAttr = function(d) {
                return e.copy(c[d])
            }
        }
    });
    "use strict";
    m.when("A", "jQuery", "a-carousel-measure", "a-carousel-attributes", "a-carousel-strategies", "a-carousel-constants").register("a-carousel-base", function(e, h, l, f, c, g) {
        function k(a) {
            var b = a.getAttr("set_size") <= a.getAttr("pageSize"),
                d = a.getAttr(g.NO_TRANSITION);
            1 ===
                a.getAttr("totalPages") && 1 < a.getAttr("pageNumber") && a.gotoPage(1, {
                    startover: !0,
                    animationDuration: 0
                });
            a.dom.$container.find(".a-carousel-left, .a-carousel-right").css("visibility", b || d ? "hidden" : "visible")
        }

        function d(a) {
            a.onChange("pageSize", function(b, d) {
                var e = a.getAttr("firstVisibleItem"),
                    c = Math.ceil(e / b);
                1 === c && 1 < e ? c = 2 : 1 > c && (c = 1);
                a.setAttr("pageNumber", c);
                a.setAttr("totalPages", Math.ceil(a.getAttr("set_size") / b));
                e = a.getAttr("ajax");
                b > d && (e && e.prefetch_next_page ? a.strategies.ajax.wantNextPage(a) :
                    a.strategies.ajax.wantCurrentPage(a))
            });
            a.onChange("set_size", function(b, d) {
                var e = a.getAttr("pageSize"),
                    c = a.getAttr("fetchedItems");
                a.setAttr("totalPages", Math.ceil(b / e));
                b < d ? (c.splice(b, Number.MAX_VALUE), a.setAttr("fetchedItems", c)) : a.strategies.ajax.wantCurrentPage && a.strategies.ajax.wantCurrentPage(a)
            });
            a.onChange("firstVisibleItem", function(b) {
                a.dom.$container.find("input.a-carousel-firstvisibleitem").val(b)
            });
            a.onChange("pageNumber", function(b) {
                0 < b && b <= a.getAttr("totalPages") && a.setAttr("currentlyWrapping", !1)
            })
        }

        function b(a, b, d) {
            if (0 !== arguments.length) {
                a.jquery || (a = h(a));
                this.dom = {
                    $container: a,
                    $viewport: a.hasClass("a-carousel-viewport") ? a : a.find(".a-carousel-viewport"),
                    $carousel: a.find(".a-carousel")
                };
                var c = {
                    totalPages: 1E3,
                    pageNumber: 1,
                    pageSize: 0,
                    firstVisibleItem: 1,
                    maintain_state: !0,
                    px: 0,
                    auto_adjust_height: !0,
                    ajax: {}
                };
                e.extend(c, d);
                c.maintain_state = !!c.maintain_state;
                c.id_list ? c.set_size || (c.set_size = c.id_list.length) : c.id_list = [];
                if (!c.set_size) {
                    var n = this.dom.$carousel.children("li"),
                        k = parseInt(n.first().attr("aria-setsize"),
                            10);
                    e.isFiniteNumber(k) && 0 < k ? c.set_size = k : c.set_size = n.length
                }
                var g = [];
                this.dom.$carousel.children("li").each(function(a, b) {
                    g.push(e.trim(b.innerHTML))
                });
                c.fetchedItems = g;
                l(this);
                f(this, c);
                this.strategies = b;
                return this
            }
        }
        e.each(c, function(a, d) {
            b.prototype["set" + d.charAt(0).toUpperCase() + d.slice(1) + "Strategy"] = function(a) {
                this.strategies[name] = a;
                "function" === typeof a.init && a.init(this)
            }
        });
        c = b.prototype;
        c.gotoNextPage = function(a) {
            this.getAttr("transitionPaused") || (this.strategies.transition.gotoNextPage(this,
                a), a && a.accessibleSafe && this.strategies.accessibility.nextPage(this, a.animationDuration, a.animationSpeed))
        };
        c.gotoPrevPage = function(a) {
            this.getAttr("transitionPaused") || (this.strategies.transition.gotoPrevPage(this, a), a && a.accessibleSafe && this.strategies.accessibility.prevPage(this, a.animationDuration, a.animationSpeed))
        };
        c.gotoPage = function(a, b) {
            this.getAttr("transitionPaused") || (this.strategies.transition.gotoPage(this, a, b), b && b.accessibleSafe && this.strategies.accessibility.gotoPage(this, b.animationDuration,
                b.animationSpeed))
        };
        c.gotoIndex = function(a, b) {
            (!this.getAttr("transitionPaused") || b && b.ignorePause) && this.strategies.transition.gotoIndex(this, a, b)
        };
        c.gotoPixel = function(a, b) {
            this.getAttr("transitionPaused") || this.strategies.transition.gotoPixel(this, a, b)
        };
        c.resize = function() {
            if (this.dom.$container.is(":visible")) {
                var a = this.measure("carousel viewport");
                this.strategies.display.resize(this, a)
            }
        };
        c.pause = function() {
            this.setAttr("transitionPaused", !0)
        };
        c.resume = function() {
            this.setAttr("transitionPaused", !1)
        };
        c.triggerEvent = function(a, b) {
            b = b || {};
            b.carousel = this;
            e.trigger("a:carousel:" + a, b);
            var d = this.getAttr("name");
            d && e.trigger("a:carousel:" + d + ":" + a, b)
        };
        c.getStaticLoader = function() {
            return this.getAttr(g.STATIC_LOADER_CSS_CLASS) ? '\x3cdiv class\x3d"' + this.getAttr(g.STATIC_LOADER_CSS_CLASS) + '"\x3e\x3c/div\x3e' : ""
        };
        c.getEmptyCard = function(a, b) {
            var d = "a-carousel-card a-carousel-card-empty";
            this.getAttr(g.ELEMENT_CSS_CLASS) && (d = d + " " + this.getAttr(g.ELEMENT_CSS_CLASS));
            return ['\x3cli class\x3d"', d, '" role\x3d"listitem" aria-setsize\x3d"',
                b, '" aria-posinset\x3d"', a, '"\x3e', this.getStaticLoader(), "\x3c/li\x3e"
            ].join("")
        };
        c.initTouchHandling = function() {
            var a = this,
                b = a.dom.$viewport;
            (e.capabilities.touch || e.capabilities.pointerPrefix) && m.when("a-touch").execute(function(d) {
                b.addClass("a-gesture a-gesture-horizontal").bind("pan-horizontal swipe-horizontal", function() {
                    return !1
                });
                e.on("a:swipe-horizontal:" + b[0].id, function(b) {
                    if (!a.getAttr("transitionPaused") && a.strategies.transition.onSwipe) a.strategies.transition.onSwipe(a, b)
                });
                if (!a.getAttr("disable_panning")) e.on("a:pan-horizontal:" +
                    b[0].id,
                    function(b) {
                        if (!a.getAttr("transitionPaused") && a.strategies.transition.onPan) a.strategies.transition.onPan(a, b)
                    })
            });
            if (e.capabilities.isIE10 || e.capabilities.isIE11Plus) {
                var d = function(a) {
                    a.stopPropagation();
                    a.preventDefault();
                    document.body.removeEventListener("click", d, !0)
                };
                b.bind(e.action.start, function(a) {
                    b.bind("swipe-horizontal.a-ssiec pan-horizontal.a-ssiec", function(a) {
                        b.unbind(".a-ssiec");
                        b.bind(e.action.end + ".a-ssiec", function(a) {
                            b.unbind(".a-ssiec");
                            document.body && document.body.addEventListener("click",
                                d, !0)
                        })
                    })
                })
            }
        };
        c.init = function() {
            var a = this,
                b = a.strategies,
                c = a.dom.$viewport[0];
            c && !c.id && (c.id = "anonCarousel" + a.__id);
            for (var c = a.dom.$carousel[0], f = c.childNodes, n = f.length; n--;) f[n].tagName && "li" === f[n].tagName.toLowerCase() || c.removeChild(f[n]);
            e.each(a.strategies, function(b) {
                b.initAttrs && e.each(b.initAttrs, function(b, d) {
                    var c = b;
                    "function" === typeof b && (c = b(a.getAttr(d)));
                    a.setAttr(d, c)
                })
            });
            if (1 > a.getAttr("set_size")) return b.ajax.init(a), !1;
            a.measure();
            e.each(a.strategies, function(b) {
                b.init(a)
            });
            b = a.getAttr("pageSize");
            c = a.getAttr("set_size");
            a.setAttr("totalPages", Math.ceil(c / b));
            d(a);
            a.setAttr("isInTab", 0 < a.dom.$container.closest(".a-tab-content").length, !0);
            a.triggerEvent("init");
            e.each(a.strategies, function(b) {
                b.afterInit && b.afterInit(a)
            });
            a.triggerEvent("afterInit");
            b = a.getAttr("firstVisibleItem");
            1 === b && a.getAttr("maintain_state") && (b = parseInt(a.dom.$container.find("input.a-carousel-firstvisibleitem").val(), 10), e.isFiniteNumber(b) && 0 < b && b <= c || (b = 1));
            if (1 < b) {
                c = 700;
                f = Math.ceil(b / a.getAttr("pageSize"));
                for (n = 2; n < f; n++) c += 700 / n;
                a.gotoIndex(b, {
                    animationDuration: c,
                    easingFunction: "ease"
                })
            }
            k(this);
            a.onChange("pageSize set_size", function() {
                k(a)
            });
            b = a.dom.$container.find(".a-carousel-button");
            b.length && (c = b.eq(0).position().top + "px", b.css("top", c));
            var g = !1,
                l = function(b) {
                    b.preventDefault();
                    b = {
                        startover: !0,
                        accessibleSafe: "keydown" === b.type ? !0 : !1
                    };
                    5 < a.getAttr("pageNumber") ? b.animationDuration = 1250 : b.animationSpeed = 5 * a.getDimensions().viewport.width;
                    a.gotoPage(1, b)
                };
            a.dom.$container.delegate(".a-carousel-goto-nextpage",
                "click dblclick",
                function(b) {
                    g || (g = !0, b.preventDefault(), a.gotoNextPage(), e.delay(function() {
                        g = !1
                    }, 5))
                }).delegate(".a-carousel-goto-prevpage", "click dblclick", function(b) {
                g || (g = !0, b.preventDefault(), a.gotoPrevPage(), e.delay(function() {
                    g = !1
                }, 5))
            }).delegate(".a-carousel-goto-nextpage", "keydown", function(b) {
                if (b.which === e.constants.keycodes.ENTER || b.which === e.constants.keycodes.SPACE) b.preventDefault(), a.gotoNextPage({
                    accessibleSafe: !0
                })
            }).delegate(".a-carousel-goto-prevpage", "keydown", function(b) {
                if (b.which ===
                    e.constants.keycodes.ENTER || b.which === e.constants.keycodes.SPACE) b.preventDefault(), a.gotoPrevPage({
                    accessibleSafe: !0
                })
            }).delegate(".a-carousel-restart", "keydown", function(a) {
                a.which !== e.constants.keycodes.ENTER && a.which !== e.constants.keycodes.SPACE || l(a)
            }).delegate(".a-carousel-restart", "click", l);
            a.dom.$container.find(".a-carousel-page-max").html(this.getAttr("totalPages"));
            return !0
        };
        return b
    });
    "use strict";
    m.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register("a-carousel-mobile",
        function(e, h, l, f) {
            function c(d) {
                var b = d.getAttr("loaderHeight");
                b || ((b = d.getAttr("maxHeight")) ? (b = Math.min(.9 * b, 90), b = Math.max(b, 120)) : b = 90, d.setAttr("loaderHeight", b));
                return b
            }

            function g(d, b, a) {
                l.call(this, d, b, a);
                if (0 !== arguments.length) return this.getAttr("circular") === k && this.setAttr("circular", !1), this.getAttr("show_partial_next") === k && this.setAttr("show_partial_next", !0), this.getAttr("hide_off_screen") === k && this.setAttr("hide_off_screen", !1), this.getAttr("springiness") === k && this.setAttr("springiness",
                    .8), this.getAttr("touch_easing") === k && this.setAttr("touch_easing", "cubic-bezier(0.215, 0.610, 0.355, 1.000)"), this.init = function() {
                    return l.prototype.init.call(this) ? (this.getAttr(f.STATIC_LOADER_CSS_CLASS) || this.dom.$carousel.children("li").children(".a-loading-static").css("height", c(this) + "px"), this.getAttr(f.NO_TRANSITION) || this.initTouchHandling(), !0) : !1
                }, this
            }
            var k;
            g.prototype = new l;
            g.prototype.constructor = g;
            g.prototype.getStaticLoader = function() {
                return this.getAttr(f.STATIC_LOADER_CSS_CLASS) ?
                    '\x3cdiv class\x3d"' + this.getAttr(f.STATIC_LOADER_CSS_CLASS) + '"\x3e\x3c/div\x3e' : '\x3cdiv class\x3d"a-loading-static" style\x3d"height:' + c(this) + 'px"\x3e\x3cdiv class\x3d"a-loading-static-inner"\x3e\x3c/div\x3e\x3c/div\x3e'
            };
            return g
        });
    "use strict";
    m.when("A", "jQuery", "a-carousel-base", "a-carousel-constants").register("a-carousel-desktop", function(e, h, l, f) {
        function c(d) {
            var b = d.getAttr("set_size") <= d.getAttr("pageSize"),
                a = d.getAttr(f.NO_TRANSITION);
            d.dom.$container.find(".a-carousel-pagination").css("visibility",
                b || a ? "hidden" : "visible")
        }

        function g(d, b, a) {
            l.call(this, d, b, a);
            if (0 !== arguments.length) {
                var e = this;
                e.getAttr("circular") === k && this.setAttr("circular", !0);
                e.getAttr("hide_off_screen") === k && this.setAttr("hide_off_screen", !0);
                e.onChange("totalPages", function(a) {
                    e.dom.$container.find(".a-carousel-page-max").html(a);
                    a < e.getAttr("pageNumber") && e.gotoPage(a)
                });
                e.onChange("pageNumber", function(a, b) {
                    b = e.dom.$container;
                    var d = b.find(".a-carousel-restart-container");
                    1 < a ? d.show() : d.hide();
                    b.find(".a-carousel-page-current").html(a)
                });
                e.init = function() {
                    var a = this;
                    return l.prototype.init.call(a) ? (c(this), a.onChange("pageSize set_size", function() {
                        c(a)
                    }), 2 > a.getAttr("pageNumber") && a.dom.$container.find(".a-carousel-restart-container").hide(), a.getAttr(f.NO_TRANSITION) || a.initTouchHandling(), !0) : !1
                };
                return e
            }
        }
        var k;
        g.prototype = new l;
        return g.prototype.constructor = g
    });
    "use strict";
    m.when("A", "a-carousel-desktop", "a-carousel-mobile").register("a-carousel-classes", function(e, h, l) {
        return {
            desktop: h,
            mobile: l,
            "default": e.capabilities.mobile ||
                e.capabilities.tablet ? "mobile" : "desktop"
        }
    });
    "use strict";
    m.when("A", "jQuery", "p-detect", "a-carousel-constants").register("a-carousel-stretchygoodness", function(e, h, l, f) {
        function c(a, b, d, c) {
            a.getAttr("show_partial_next") && (b -= d / 10);
            var f = a.getAttr("minimum_gutter_width");
            a.getAttr("set_size");
            a = 0;
            for (var k = !0; 0 < b;) a++, b = c && k ? b - d : b - (d + f), k = !1;
            0 > b && a--;
            return e.isFiniteNumber(a) && 0 < a ? a : 1
        }

        function g(a, b, d, c, f, k, g) {
            "stretch" === a.getAttr("single_page_align") && c > k && (c = k);
            b -= d * c;
            a.getAttr("show_partial_next") ?
                (a = b - f * (c + 1), g && (a += f), g = a / d, b -= d * (.5 < g ? .5 : g)) : g && (b += f);
            d = Math.ceil(b / (c + 1));
            if (!e.isFiniteNumber(d) || d < f) d = f;
            return d
        }

        function k(a) {
            if (a.getAttr("auto_adjust_height"))
                if (a.getAttr("animating")) a.once("animating", function() {
                    k(a)
                });
                else {
                    var b = a.getAttr("maxHeight"),
                        d = a.getDimensions();
                    b && e.isFiniteNumber(b) || (b = 1);
                    var c = b,
                        f = a.getAttr("pageSize"),
                        g = f * (a.getAttr("pageNumber") - 1),
                        f = g + f - 1,
                        d = d.items,
                        l = d.length,
                        h;
                    for (a.getAttr("show_partial_next") && f++; g <= f && g < l; g++)(h = d[g]) && h.outerHeight > c && (c = d[g].outerHeight ||
                        d[g].height);
                    c > b && (a.updateDimensionsCache({
                        viewport: {
                            height: c,
                            outerHeight: c
                        }
                    }), a.setAttr("maxHeight", c), 1 === b ? a.dom.$viewport.height(c) : e.animate(a.dom.$viewport, {
                        height: c
                    }, a.getAttr("height_animation_speed"), "linear"))
                }
            else a.dom.$viewport.css("height", "")
        }

        function d(a) {
            a.onChange("pageNumber", function() {
                a.getAttr("hide_off_screen") && a.dom.$carousel.children("li").css("visibility", "")
            });
            a.onChange("pageSize", function(b, d) {
                b > d && k(a)
            });
            a.onChange("loading", function(b) {
                b || k(a)
            });
            a.onChange("firstVisibleItem",
                function() {
                    k(a)
                });
            a.onChange("animating", function(b) {
                if (!b && a.getAttr("hide_off_screen")) {
                    var d = a.getAttr("firstVisibleItem") - 1,
                        c = d + a.getAttr("pageSize") - 1;
                    a.getAttr("show_partial_next") && c++;
                    a.dom.$carousel.children("li").each(function(a, b) {
                        a = a >= d && a <= c;
                        h(b).css("visibility", a ? "" : "hidden")
                    })
                }
            });
            a.onChange("single_page_align minimum_gutter_width", function() {
                b(a)
            });
            a.onChange("minimum_gutter_width", function() {
                b(a)
            })
        }

        function b(a) {
            var b = a.getDimensions(),
                d = b.viewport.width,
                b = b.getFirstCardWidth(),
                e =
                a.getAttr("minimum_gutter_width"),
                f = a.getAttr("set_size"),
                k = a.getAttr("first_item_flush_left"),
                l = c(a, d, b, k),
                h = g(a, d, b, l, e, f, k);
            a.setAttr("currentGutter", h);
            a.setAttr("pageSize", l);
            var r = a.dom.$carousel,
                x = r.children("li"),
                e = x.length,
                w = a.getAttr("totalPages"),
                D = a.getAttr("pageNumber"),
                z = a.getAttr("firstVisibleItem"),
                m = (D - 1) * l + 1;
            D > w ? (z = (w - 1) * l + 1, a.setAttr("pageNumber", w), a.setAttr("firstVisibleItem", z)) : z !== m && (w = Math.ceil(z / l), z = (w - 1) * l + 1, a.setAttr("pageNumber", w), a.setAttr("firstVisibleItem", z));
            var F =
                z - 1,
                B = F + l - 1;
            a.getAttr("show_partial_next") && B++;
            var H = a.getAttr("hide_off_screen"),
                I = h + "px",
                A = b + "px",
                G;
            x.each(function(a, b) {
                G = !H || a >= F && a <= B;
                b.style.marginLeft = k && 0 === a ? 0 : I;
                b.style.visibility = G ? "" : "hidden";
                b.style.width = A
            });
            var E;
            a.getAttr("first_item_flush_left") ? (h = x.first().outerWidth(!0), 1 < x.length && (E = x.eq(1).outerWidth(!0)), w = (e - 1) * E + h) : (h = E = x.first().outerWidth(!0), w = e * E);
            l >= f ? (w = d, D = a.getAttr("single_page_align"), r.toggleClass("a-text-right", "right" === D), r.toggleClass("a-text-center", "center" ===
                D), "center" === D && x.first().css("margin-left", 0)) : r.removeClass("a-text-right a-text-center");
            w = l >= f ? d : w;
            r.css("width", w + "px");
            d = {
                carousel: {
                    width: w,
                    outerWidth: r.outerWidth()
                },
                items: []
            };
            for (f = 0; f < e; f++) d.items.push({
                width: b,
                outerWidth: 0 === f ? h : E
            });
            a.updateDimensionsCache(d);
            a.gotoIndex(z, {
                animationDuration: 0,
                ignorePause: !0
            });
            a.triggerEvent("repaint")
        }
        return {
            repaint: b,
            init: function(a) {
                var c = a.getAttr("minimum_gutter_width");
                e.isFiniteNumber(c) || (c = 15, a.setAttr("minimum_gutter_width", c));
                a.setAttr("currentGutter",
                    c);
                c = a.getAttr("height_animation_speed");
                e.isFiniteNumber(c) || a.setAttr("height_animation_speed", 200);
                a.setAttr("first_item_flush_left", !!a.getAttr("first_item_flush_left"));
                a.setAttr("show_partial_next", !!a.getAttr("show_partial_next"));
                b(a);
                a.getAttr(f.NO_TRANSITION) || k(a);
                c = a.getDimensions();
                a.dom.$container.find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport").css("height", Math.max(c.viewport.height, c.items[0] ? c.items[0].height : 0) + "px");
                c = a.getAttr("firstVisibleItem");
                1 < c && (a.setAttr("firstVisibleItem",
                    c), c = Math.ceil(c / a.getAttr("pageSize")), a.gotoPage(c));
                d(a)
            },
            resize: function(a, d) {
                d.viewport && void 0 !== d.viewport.width && b(a)
            }
        }
    });
    "use strict";
    m.when("A", "jQuery", "p-detect", "a-carousel-utils").register("a-carousel-display-swap", function(e, h, l, f) {
        function c(b) {
            if (b.getAttr("auto_adjust_height")) {
                var a = b.getAttr("maxHeight");
                a && e.isFiniteNumber(a) || (a = 1);
                var d = a;
                b.dom.$carousel.children("li").not(".a-carousel-card-empty").each(function(a, b) {
                    a = h(b).outerHeight();
                    d = Math.max(a, d)
                });
                d > a && (b.setAttr("maxHeight",
                    d), l.capabilities.transition ? 1 === a ? b.dom.$viewport.height(d) : e.animate(b.dom.$viewport, {
                    height: d
                }, b.getAttr("height_animation_speed"), "linear") : b.dom.$viewport.height(d), b.updateDimensionsCache({
                    viewport: {
                        height: d,
                        outerHeight: d
                    }
                }))
            } else b.dom.$viewport.css("height", "")
        }

        function g(b, a) {
            var d = b.dom.$carousel[0];
            b = b.dom.$carousel.children("li").get();
            for (var c; b.length > a;) c = b.pop(), d.removeChild(c)
        }

        function k(b) {
            b.onChange("animating", function(a) {
                a || c(b)
            });
            b.onChange("loading", function(a) {
                a || c(b)
            });
            b.onChange("pageSize", function(a, d) {
                if (a > d) {
                    0 === d && g(b);
                    d = b.getAttr("set_size");
                    var e = b.getDimensions().getFirstCardWidth(),
                        k = b.getAttr("currentGutter"),
                        n = b.getAttr("fetchedItems"),
                        l = b.getAttr("firstVisibleItem") - 1,
                        v = b.dom.$carousel.children("li"),
                        q = document.createDocumentFragment(),
                        r;
                    if (h.isArray(n)) {
                        for (var x = v.length; x < a; x++) r = x + l, v = h(['\x3cli class\x3d"a-carousel-card a-carousel-card-empty" role\x3d"listitem" aria-setsize\x3d"', d, '" aria-posinset\x3d"', r + 1, '" style\x3d"width:', e, "px; margin-left:",
                            k, 'px;"\x3e', b.getStaticLoader()
                        ].join("")), n[r] && f.addElementToDom(v, f.getElementFromItem(n[r])), r >= d && v.removeClass("a-carousel-card-empty"), q.appendChild(v[0]);
                        b.dom.$carousel.append(q)
                    }
                    c(b)
                } else a < d && g(b)
            });
            b.onChange("set_size", function(a, c) {
                var f = b.getAttr("pageNumber"),
                    k = b.getAttr("totalPages"),
                    g = b.dom.$carousel.children("li");
                f === k && a > c && (g.length && b.dom.$carousel.children("li").each(function(a, d) {
                        e.trim(d.innerHTML) || (d.className += " a-carousel-card-empty", d.innerHTML = b.getStaticLoader())
                    }),
                    0 === c && d(b))
            });
            b.onChange("single_page_align minimum_gutter_width", function() {
                d(b)
            });
            b.onChange("minimum_gutter_width", function() {
                d(b)
            })
        }

        function d(b) {
            var a = b.getDimensions(),
                d = a.viewport.width,
                c = a.getFirstCardWidth(),
                f = b.getAttr("minimum_gutter_width"),
                a = b.getAttr("set_size"),
                k;
            k = b.getAttr("minimum_gutter_width");
            b.getAttr("set_size");
            k = Math.max(Math.floor(d / (c + k)), 1);
            k = e.isFiniteNumber(k) ? k : 1;
            var l, h = k;
            "stretch" === b.getAttr("single_page_align") && h > a && (h = a);
            h = Math.ceil((d - c * h) / (h + 1));
            e.isFiniteNumber(h) ||
                (h = f);
            l = h;
            b.setAttr("currentGutter", l);
            b.setAttr("pageSize", k);
            var h = b.dom.$carousel,
                q = h.children("li"),
                f = q.length,
                c = c + l,
                r = f * c;
            g(b, Math.min(k, a));
            q.css("margin-left", l + "px");
            k >= a ? (r = d, d = b.getAttr("single_page_align"), h.toggleClass("a-text-right", "right" === d), h.toggleClass("a-text-center", "center" === d), "center" === d && q.first().css("margin-left", 0)) : h.removeClass("a-text-right a-text-center");
            for (d = {
                    carousel: {
                        width: r,
                        outerWidth: h.outerWidth()
                    },
                    items: []
                }; f--;) d.items.push({
                outerWidth: c
            });
            b.updateDimensionsCache(d);
            b.triggerEvent("repaint")
        }
        return {
            repaint: d,
            init: function(b) {
                var a = b.getAttr("minimum_gutter_width");
                a || (a = 15, b.setAttr("minimum_gutter_width", a));
                b.setAttr("currentGutter", a);
                a = b.getAttr("height_animation_speed");
                e.isFiniteNumber(a) || b.setAttr("height_animation_speed", 200);
                k(b);
                d(b);
                a = b.getDimensions();
                b.dom.$container.find(".a-carousel-left, .a-carousel-right, .a-carousel-viewport").css("height", Math.max(a.viewport.height, a.items[0] ? a.items[0].height : 0) + "px");
                a = b.getAttr("firstVisibleItem");
                1 < a &&
                    (b.setAttr("firstVisibleItem", a), a = Math.ceil(a / b.getAttr("pageSize")), b.gotoPage(a))
            },
            resize: function(b, a) {
                a.viewport && void 0 !== a.viewport.width && d(b)
            }
        }
    });
    "use strict";
    m.when("A", "jQuery").register("a-carousel-display-single", function(e, h) {
        function l(c) {
            if (c.getAttr("auto_adjust_height"))
                if (c.getAttr("animating")) c.once("animating", function() {
                    l(c)
                });
                else c.dom.$viewport.css("height", "auto"), e.delay(function() {
                    c.dom.$viewport.height(c.dom.$viewport.height())
                }, 0);
            else c.dom.$viewport.css("height", "")
        }

        function f(c, d) {
            var b = c.dom.$carousel.children("li"),
                a = c.getAttr("firstVisibleItem") - 1;
            c = c.getAttr("show_partial_next") ? 2 : 1;
            a = b.slice(a, a + c);
            b.not(a).css("visibility", "hidden");
            d && a.css("visibility", "")
        }

        function c(c) {
            c.getAttr("fixed_height") || (c.dom.$viewport.delegate("img", "load", function() {
                l(c)
            }), c.onChange("loading", function(d) {
                d || l(c)
            }), c.onChange("pageNumber", function() {
                c.getAttr("hide_off_screen") && c.dom.$carousel.children("li").css("visibility", "")
            }), c.onChange("animating", function(d) {
                !d &&
                    c.getAttr("hide_off_screen") && f(c)
            }), c.onChange("minimum_gutter_width", function() {
                g(c)
            }))
        }

        function g(c) {
            var d = c.getDimensions(),
                b = d.viewport.width,
                a = c.getAttr("show_partial_next"),
                e = c.getAttr("minimum_gutter_width"),
                g = c.getAttr("set_size"),
                p = c.dom.$carousel.children("li"),
                b = b - 2 * e;
            a && (b -= e + d.viewport.width / 3);
            p.css({
                width: b + "px",
                margin: "0 " + e + "px"
            });
            d = b + 2 * e;
            a = d * g;
            c.dom.$carousel.width(a);
            for (a = {
                    carousel: {
                        width: a
                    },
                    items: []
                }; g--;) a.items[g] = {
                width: b,
                outerWidth: d
            };
            c.updateDimensionsCache(a);
            c.getAttr("hide_off_screen") &&
                f(c, !0);
            c.gotoIndex(c.getAttr("firstVisibleItem"), {
                animationDuration: 0,
                ignorePause: !0
            });
            c.triggerEvent("repaint")
        }
        return {
            repaint: g,
            init: function(f) {
                var d = f.getAttr("minimum_gutter_width");
                f.setAttr("minimum_gutter_width", e.isFiniteNumber(d) ? d : 14);
                f.setAttr("show_partial_next", !!f.getAttr("show_partial_next"));
                f.setAttr("pageSize", 1);
                f.setAttr("pageSize", 1);
                d = f.getAttr("fixed_height");
                e.isFiniteNumber(d) ? f.dom.$viewport.height(d) : f.setAttr("fixed_height", !1);
                f.dom.$carousel.children("li").css("visibility",
                    "visible");
                c(f);
                this.repaint(f);
                l(f)
            },
            resize: function(c, d) {
                d.viewport && void 0 !== d.viewport.width && (this.repaint(c), c.getAttr("fixed_height") || l(c))
            }
        }
    });
    "use strict";
    m.when("A", "jQuery", "a-carousel-constants").register("a-carousel-display-peekcircular", function(e, h, l) {
        function f(c) {
            return function(f) {
                return e.isFiniteNumber(f) ? f : c
            }
        }
        h = {};
        h[l.PAGE_SIZE] = 1;
        h[l.MIN_GUTTER] = f(14);
        h[l.PEEK_PERCENTAGE] = f(10);
        return {
            initAttrs: h,
            init: function(c) {
                var e = this;
                c.onChange(l.PEEK_PERCENTAGE, function(f, d) {
                    e.repaint(c)
                });
                c.dom.$carousel.children("li").css("visibility", "visible");
                e.repaint(c)
            },
            repaint: function(c) {
                var f = c.getAttr(l.MIN_GUTTER),
                    h = c.getAttr(l.SET_SIZE),
                    d = c.getAttr(l.PEEK_PERCENTAGE),
                    b = c.getDimensions().viewport.width,
                    a = c.dom.$carousel,
                    t = a.children("li"),
                    d = d / 100 * b,
                    u = b - 2 * d - f,
                    p = u + 2 * f,
                    b = p * h;
                a.width(b);
                t.css({
                    width: u + "px",
                    "margin-left": f + "px",
                    "margin-right": f + "px"
                });
                c.updateDimensionsCache({
                    carousel: {
                        width: b
                    },
                    items: e.map(e.range(h), function() {
                        return {
                            width: u,
                            outerWidth: p
                        }
                    })
                });
                c.setAttr(l.PEEK_WIDTH, d, !1);
                c.triggerEvent("repaint")
            },
            resize: function(c, e) {
                e.viewport && e.viewport.width !== A && this.repaint(c)
            }
        }
    });
    "use strict";
    m.when("A").register("a-carousel-display-variablewidth", function(e) {
        return {
            init: e.constants.NOOP,
            resize: e.constants.NOOP,
            repaint: e.constants.NOOP
        }
    });
    "use strict";
    m.when("a-carousel-stretchygoodness", "a-carousel-display-swap", "a-carousel-display-single", "a-carousel-display-peekcircular", "a-carousel-display-variablewidth").register("a-carousel-strategies-display", function(e, h, l, f, c) {
        return {
            swap: h,
            single: l,
            peekCircular: f,
            stretchyGoodness: e,
            variableWidth: c,
            "default": "stretchyGoodness"
        }
    });
    "use strict";
    m.when("A", "jQuery", "a-carousel-utils").register("a-carousel-transition-swap", function(e, h, l) {
        function f(d, b) {
            var a = d.getAttr("preloadedImages");
            a || (a = []);
            for (var c = [], f = b.length - 1; 0 <= f; f--)
                if (b[f] && !a[f]) {
                    var g = l.getElementFromItem(b[f]);
                    g && h("img", g).each(function() {
                        c.push(this.src)
                    });
                    a[f] = !0
                }
            e.preload(c);
            d.setAttr("preloadedImages", a)
        }

        function c(d) {
            return "number" === typeof d ? d ? 0 > d ? -1 : 1 : isNaN(d) ? NaN : 0 : NaN
        }

        function g(d,
            b) {
            d.getAttr("pageNumber");
            d.getAttr("pageSize");
            var a = d.getAttr("firstVisibleItem"),
                c = d.getAttr("delay_time"),
                f = d.dom.$carousel.children("li"),
                g = f.filter(".a-carousel-card-empty");
            g.length && d.setAttr("loading", !0);
            g.each(function(n, k) {
                var v = h(k);
                k = f.index(k) + a - 1;
                var q = b[k];
                q && e.delay(function() {
                    l.addElementToDom(v, l.getElementFromItem(q));
                    n === g.length - 1 && d.setAttr("loading", !1)
                }, 0 + c)
            })
        }

        function k(d, b, a) {
            a = a || {};
            var f = d.getAttr("pageNumber");
            if (b !== f) {
                var g = d.getAttr("set_size"),
                    p = d.getAttr("totalPages"),
                    n = d.getAttr("circular"),
                    h = d.getAttr("pageSize"),
                    k = a.delayTime || d.getAttr("delay_time"),
                    q = c(a.direction) || NaN;
                !n && 1 > b ? b = 1 : !n && b > p ? b = p : n && 1 > b ? b = p : n && b > p && (b = 1);
                q || (q = f < b ? 1 : -1);
                a.startover && (q = k = 1);
                var r = h * (b - 1),
                    x = 1 === q ? 0 : h - 1;
                d.setAttr("pageNumber", b);
                d.setAttr("firstVisibleItem", r + 1);
                d.setAttr("animating", !0);
                var w = e.interval(function() {
                    var a = r + x;
                    if (w !== d.getAttr("responsiveTimerId")) clearInterval(w);
                    else if (-1 === q && 0 > x || 1 === q && x >= h) d.setAttr("responsiveTimerId", A), d.setAttr("animating", !1);
                    else {
                        var b =
                            d.dom.$carousel.children("li").eq(x),
                            c = d.getAttr("fetchedItems")[a];
                        c ? l.addElementToDom(b, l.getElementFromItem(c)) : a < g ? b.html(d.getStaticLoader()).addClass("a-carousel-card-empty") : b.empty().removeClass("a-carousel-card-empty");
                        x += q
                    }
                }, k);
                d.setAttr("responsiveTimerId", w)
            }
        }
        return {
            init: function(d) {
                var b = d.getAttr("delay_time");
                e.isFiniteNumber(b) || d.setAttr("delay_time", 30);
                d.onChange("responsiveTimerId", function(a, b) {
                    b !== a && clearInterval(b)
                });
                d.onChange("fetchedItems", function(a, b) {
                    g(d, a);
                    f(d, a)
                });
                f(d, d.getAttr("fetchedItems"))
            },
            gotoIndex: function(d, b, a) {
                a = a || {};
                var c = d.getAttr("pageSize");
                k(d, Math.ceil(b / c), a)
            },
            gotoNextPage: function(d, b) {
                b = b || {};
                var a = d.getAttr("pageNumber");
                b.direction = -1;
                k(d, ++a, b)
            },
            gotoPrevPage: function(d, b) {
                b = b || {};
                var a = d.getAttr("pageNumber");
                b.direction = 1;
                k(d, --a, b)
            },
            gotoPage: k
        }
    });
    "use strict";
    m.when("A", "jQuery", "a-carousel-utils", "a-carousel-constants").register("a-carousel-transition-slide", function(e, h, l, f) {
        function c(d) {
            var b = d.dom.$carousel.children("li").length,
                a = b + 1,
                c = d.getAttr(f.SET_SIZE),
                e = c - b;
            if (0 < e) {
                for (var e = a + e - 1, g = []; a <= e; a++) g.push(d.getEmptyCard(a, c));
                d.dom.$carousel.append(g.join(""));
                d.setAttr(f.LOADING, !0);
                for (var e = d.getAttr(f.FETCHED_ITEMS), g = d.dom.$carousel.children("li"), h, a = b; a < c; a++)
                    if (h = e[a]) {
                        var k = l.getElementFromItem(h),
                            b = g.eq(a);
                        l.addElementToDom(b, k);
                        e[a] = l.clearElementFromItem(h)
                    }
                d.strategies.display.repaint && d.strategies.display.repaint(d);
                d.setAttr(f.FETCHED_ITEMS, e, !0);
                d.setAttr(f.LOADING, !1)
            }
        }

        function g(d, b, a) {
            if (d.getAttr(f.ANIMATING)) d.once(f.ANIMATING,
                function() {
                    g(d, b, a)
                });
            else {
                var c = d.getDimensions().items;
                if (!a || b.length >= a.length) {
                    d.setAttr(f.LOADING, !0);
                    for (var h = d.dom.$carousel.children("li"), p = b.length, k, y; p--;)
                        if ((y = b[p]) && !e.equals(y, a[p]) && !0 !== y && !0 !== y.content) {
                            var v = l.getElementFromItem(y);
                            k = h.eq(p);
                            k.length && (l.addElementToDom(k, v), c[p] = {
                                width: k.outerWidth(),
                                outerWidth: k.outerWidth(!0),
                                height: k.outerHeight(),
                                outerHeight: k.outerHeight(!0)
                            }, b[p] = l.clearElementFromItem(y))
                        }
                }
                d.setAttr(f.FETCHED_ITEMS, b);
                d.updateDimensionsCache({
                    items: c
                });
                d.setAttr(f.LOADING, !1)
            }
        }
        var k = e.capabilities.touch ? 2E3 : 3E3;
        return {
            wrapToFirst: function(d) {
                var b = d.getAttr(f.PAGE_SIZE),
                    a = d.getDimensions().getFirstCardWidth(),
                    c = this;
                d.gotoPixel(b * a * -1, {
                    animationDuration: 0,
                    callback: function() {
                        d.setAttr(f.CURRENTLY_WRAPPING, !1);
                        c.gotoPage(d, 1)
                    }
                })
            },
            wrapToLast: function(d) {
                d.getAttr(f.PAGE_SIZE);
                var b = d.getAttr(f.TOTAL_PAGES),
                    a = this,
                    c = d.getDimensions().carousel.width;
                d.gotoPixel(c, {
                    animationDuration: 0,
                    callback: function() {
                        d.setAttr(f.CURRENTLY_WRAPPING, !1);
                        a.gotoPage(d,
                            b)
                    }
                })
            },
            gotoPage: function(d, b, a) {
                a = a || {};
                (void 0 === a.animationDuration || 0 < a.animationDuration) && !a.silent && d.setAttr(f.ANIMATING, !0);
                var c = d.getAttr(f.TOTAL_PAGES);
                0 < b && b <= c && d.setAttr(f.PAGE_NUMBER, b);
                var e = d.getAttr(f.CIRCULAR);
                !e && 1 > b ? (b = 1, a.animationDuration = Math.pow(d.getAttr(f.ANIMATION_SPEED) * d.getAttr(f.SPRINGINESS))) : !e && b > c && (b = c, a.animationDuration = Math.pow(d.getAttr(f.ANIMATION_SPEED), d.getAttr(f.SPRINGINESS)));
                this.gotoIndex(d, d.getAttr(f.PAGE_SIZE) * (b - 1) + 1, a)
            },
            gotoIndex: function(d, b,
                a) {
                a = a || {};
                (void 0 === a.animationDuration || 0 < a.animationDuration) && !a.silent && d.setAttr(f.ANIMATING, !0);
                var c = d.getAttr(f.CIRCULAR) && !d.getAttr(f.CURRENTLY_WRAPPING),
                    g = a.callback,
                    h = this,
                    k = !1,
                    l = d.getViewportWidth(),
                    v = Math.ceil(b / d.getAttr(f.PAGE_SIZE)),
                    q;
                v !== d.getAttr(f.PAGE_NUMBER) && 0 < v && v <= d.getAttr(f.TOTAL_PAGES) && d.setAttr(f.PAGE_NUMBER, v);
                d.setAttr(f.FIRST_VISIBLE_ITEM, b);
                1 > b ? c && (k = -1 * l, q = function() {
                    g && g();
                    h.wrapToLast(d)
                }) : b > d.getAttr(f.SET_SIZE) ? c && (k = d.getAttr(f.CURRENT_PIXEL) + l, q = function() {
                    g &&
                        g();
                    h.wrapToFirst(d)
                }) : k = d.getItemOffset(b);
                q ? (d.setAttr(f.CURRENTLY_WRAPPING, !0), a.callback = q, a.easingFunction = a.easingFunction || d.getAttr(f.WRAP_EASING), a.animationSpeed = 1.3 * (e.isFiniteNumber(a.animationSpeed) ? a.animationSpeed : d.getAttr(f.ANIMATION_SPEED))) : a.callback = g;
                !1 !== k && this.gotoPixel(d, k, a)
            },
            gotoPixel: function(d, b, a) {
                var c = d.getAttr(f.CURRENT_PIXEL);
                if (b !== c) {
                    a = a || {};
                    var g = a.easingFunction || "ease-out",
                        h = a.callback;
                    d.getViewportWidth();
                    var k;
                    void 0 !== a.animationDuration ? k = a.animationDuration :
                        (k = e.isFiniteNumber(a.animationSpeed) ? a.animationSpeed : d.getAttr(f.ANIMATION_SPEED), c = Math.abs(b - c), k = 0 === k ? 0 : Math.floor(c / k * 1E3));
                    0 < k && !a.silent && d.setAttr(f.ANIMATING, !0);
                    e.isFiniteNumber(b) ? (c = 0 < k ? function() {
                        h && h();
                        d.getAttr(f.CURRENTLY_WRAPPING) || d.setAttr(f.ANIMATING, e.isAnimated(d.dom.$carousel), a.silent)
                    } : h, d.setAttr(f.CURRENT_PIXEL, b), e.animate(d.dom.$carousel, {
                        left: -1 * b
                    }, k, g, c)) : m.error("Target pixel is not a finite number", "a-carousel-transition-slide", "gotoPixel")
                }
            },
            gotoNextPage: function(d,
                b) {
                var a = d.getAttr(f.PAGE_NUMBER);
                this.gotoPage(d, ++a, b)
            },
            gotoPrevPage: function(d, b) {
                var a = d.getAttr(f.PAGE_NUMBER);
                this.gotoPage(d, --a, b)
            },
            onSwipe: function(d, b) {
                if (!d.getAttr(f.CURRENTLY_WRAPPING)) {
                    var a = d.getAttr(f.FIRST_VISIBLE_ITEM),
                        c = d.getAttr(f.PAGE_SIZE),
                        g = d.getAttr(f.PAGE_NUMBER),
                        k = 0 > b.velocityX,
                        h = a;
                    k && g < d.getAttr(f.TOTAL_PAGES) ? h = a + c : !k && 1 < g && (h = a - c);
                    c = d.getAttr(f.CURRENT_PIXEL);
                    g = d.getItemOffset(h);
                    b = Math.abs(1E3 * (k ? c - g : c + g) / b.velocityX);
                    b = Math.max(b, 300);
                    b = Math.min(b, 1.2 * e.viewport().width);
                    b = {
                        animationDuration: b,
                        easingFunction: d.getAttr(f.TOUCH_EASING)
                    };
                    h !== a || d.getAttr("circular") ? k ? d.gotoNextPage(b) : d.gotoPrevPage(b) : (b.animationSpeed = .95 * e.viewport().width, delete b.animationDuration, d.gotoIndex(h, b))
                }
            },
            onPan: function(d, b) {
                if (!d.getAttr(f.CURRENTLY_WRAPPING)) {
                    d.setAttr(f.ANIMATING, !0);
                    var a = d.getItemOffset(d.getAttr(f.FIRST_VISIBLE_ITEM)),
                        c = a - b.touchDeltaX,
                        g = d.getAttr(f.CIRCULAR),
                        k = d.getAttr(f.PAGE_NUMBER),
                        h = d.getAttr(f.TOTAL_PAGES);
                    b.ended ? (a = {
                        easingFunction: d.getAttr(f.TOUCH_EASING),
                        animationSpeed: .95 * e.viewport().width,
                        silent: !0
                    }, b = b.touchDeltaX, c = Math.abs(b) < .4 * d.getViewportWidth(), !g && (0 > b && h === k || 0 < b && 1 === k) || c ? d.gotoPage(k, a) : 0 > b ? d.gotoNextPage(a) : d.gotoPrevPage(a)) : (!g && (g = d.getAttr(f.SPRINGINESS), 0 > c && 0 < b.touchDeltaX || k === h && 0 > b.touchDeltaX) && (k = Math.pow(Math.abs(b.touchDeltaX), g), c = 0 >= c ? -1 * k : a + k), d.gotoPixel(c, {
                        easingFunction: d.getAttr(f.TOUCH_EASING),
                        animationDuration: 0,
                        silent: !0
                    }))
                }
            },
            init: function(d) {
                var b = d.getAttr(f.ANIMATION_SPEED);
                e.isFiniteNumber(b) || d.setAttr(f.ANIMATION_SPEED,
                    k);
                void 0 === d.getAttr(f.WRAP_EASING) && d.setAttr(f.WRAP_EASING, "linear");
                c(d);
                d.onChange(f.FETCHED_ITEMS, function(a, b) {
                    g(d, a, b)
                });
                d.onChange(f.SET_SIZE, function(a, b) {
                    a > b && c(d)
                })
            }
        }
    });
    "use strict";
    m.when("A", "a-carousel-utils", "a-carousel-circular-utils", "a-carousel-constants").register("a-carousel-transition-slidecircular", function(e, h, l, f) {
        function c(a) {
            var b = a.dom.$carousel.children("li").length,
                c = a.getAttr(f.SET_SIZE),
                g = c - b,
                k = d(a, b);
            0 < g && (b += 1, g = e.map(e.range(b, b + g), function(b) {
                return a.getEmptyCard(b,
                    c)
            }), k.after(g.join("")), a.measure("items"))
        }

        function g(c, d) {
            var e = c.getAttr(f.SET_SIZE);
            if (2 < c.getAttr(f.SET_SIZE)) {
                var g = a(c, c.getAttr(f.FIRST_VISIBLE_ITEM)),
                    h = Math.round(c.getAttr(f.SET_SIZE) / 2),
                    e = k(h, g, e);
                0 !== e.quantity && (n(c, e.direction, e.quantity), g = e.direction === v.CLOCKWISE ? g - e.quantity : g + e.quantity, d.gotoPixel(c, b(c, g), {
                    animationDuration: 0
                }))
            }
        }

        function k(a, b, c) {
            var d = {};
            a === b ? a = b = 0 : a > b ? (b = a - b, a = c - b) : (a = b - a, b = c - a);
            d.direction = a <= b ? v.CLOCKWISE : v.COUNTER_CLOCKWISE;
            d.quantity = Math.min(a, b);
            return d
        }

        function d(b, c) {
            return b.dom.$carousel.children("li").eq(a(b, c) - 1)
        }

        function b(a, b) {
            var c = Math.floor(a.getAttr(f.PEEK_WIDTH) || 0);
            return a.getItemOffset(b) - c
        }

        function a(a, b) {
            b = b || 1;
            var c = a.getAttr("transitionSlideCircularFirstCardIndex");
            a = a.getAttr(f.SET_SIZE);
            return l.relativeIndexFromIndex(b, c, a)
        }

        function t(b, c, g) {
            if (b.getAttr(f.ANIMATING)) b.once(f.ANIMATING, function() {
                t(b, c, g)
            });
            else {
                var k = b.getDimensions().items,
                    l = Math.min(c.length, b.getAttr(f.SET_SIZE));
                if (!g || c.length >= g.length) b.setAttr(f.LOADING, !0), e.each(e.range(l), function(f) {
                    var l = f + 1,
                        p = c[f],
                        n = d(b, l),
                        t = p && !(!0 === p || !0 === p.content);
                    p && !e.equals(p, g[f]) && n.length && t && (l = a(b, l), k[l] = {
                        width: n.outerWidth(),
                        outerWidth: n.outerWidth(!0),
                        height: n.outerHeight(),
                        outerHeight: n.outerHeight(!0)
                    }, h.addElementToDom(n, h.getElementFromItem(p)), c[f] = h.clearElementFromItem(p))
                }), b.setAttr(f.LOADING, !1);
                b.setAttr(f.FETCHED_ITEMS, c);
                b.updateDimensionsCache({
                    items: k
                })
            }
        }

        function u(a) {
            var b = {
                reached: !1,
                left: !1,
                right: !1
            };
            if (!(2 < a.getAttr(f.SET_SIZE))) {
                var c = a.getAttr(f.PAGE_NUMBER);
                a = a.getAttr(f.SET_SIZE);
                1 === c && (b.reached = !0, b.left = !0);
                c === a && (b.reached = !0, b.right = !0)
            }
            return b
        }

        function p(a, b, c) {
            var d = u(a),
                e = a.getAttr(f.PAGE_NUMBER);
            d.reached && d[b] ? a.gotoPage(e) : ("right" === b ? a.gotoNextPage : a.gotoPrevPage).call(a, c)
        }

        function n(a, b, c) {
            var d = a.getAttr("transitionSlideCircularFirstCardIndex") || 1,
                e = a.getAttr(f.SET_SIZE),
                g = a.dom.$carousel.children("li"),
                k = a.dom.$carousel;
            b === v.CLOCKWISE ? (l.rotateCW(k, g, c), d = l.firstCardIndexAfterRotate(c, d, e)) : (l.rotateCCW(a.dom.$carousel, a.dom.$carousel.children("li"),
                c), d = l.firstCardIndexAfterRotate(-1 * c, d, e));
            a.setAttr("transitionSlideCircularFirstCardIndex", d);
            c = c || 1;
            b = b || v.CLOCKWISE;
            d = a.getDimensions().items;
            d = b === v.CLOCKWISE ? l.rotateArrayCW(d, c) : l.rotateArrayCCW(d, c);
            a.updateDimensionsCache({
                items: d
            })
        }

        function y(c, d, k, h, l) {
            var p = l.callback,
                B = a(c, c.getAttr(f.FIRST_VISIBLE_ITEM)),
                t = c.getAttr(f.CURRENT_PIXEL) - b(c, B);
            e.sequence(function(a) {
                n(c, d, h);
                a()
            }, function(a) {
                k.gotoPixel(c, b(c, d === v.CLOCKWISE ? B - h : B + h) + t, {
                    animationDuration: 0,
                    callback: a
                })
            }, function(a) {
                l.callback =
                    a;
                k.gotoPixel(c, b(c, B), l)
            }, function(a) {
                g(c, k);
                a()
            }, function(a) {
                p && p();
                a()
            })()
        }
        var v = {
                CLOCKWISE: 1,
                COUNTER_CLOCKWISE: -1
            },
            q = e.capabilities.touch ? 2E3 : 3E3,
            r = {};
        r[f.HIDE_OFF_SCREEN] = !1;
        r[f.ANIMATION_SPEED] = function(a) {
            return function(b) {
                return e.isFiniteNumber(b) ? b : a
            }
        }(q);
        r.transitionSlideCircularFirstCardIndex = 1;
        return {
            initAttrs: r,
            init: function(a) {
                c(a);
                a.onChange(f.FETCHED_ITEMS, function(b, c) {
                    t(a, b, c);
                    a.strategies.display.repaint(a)
                });
                a.onChange(f.SET_SIZE, function(b, d) {
                    b > d && c(a)
                });
                a.onChange(f.PEEK_WIDTH,
                    function(b, c) {
                        b !== c && (b = a.getAttr(f.FIRST_VISIBLE_ITEM), a.gotoIndex(b))
                    })
            },
            afterInit: function(a) {
                g(a, this);
                a.strategies.display.repaint(a);
                a.gotoPage(a.getAttr(f.PAGE_NUMBER))
            },
            gotoPage: function(a, b, c) {
                c = c || {};
                var d = a.getAttr(f.TOTAL_PAGES);
                0 < b && b <= d && (a.setAttr(f.PAGE_NUMBER, b), this.gotoIndex(a, a.getAttr(f.PAGE_SIZE) * (b - 1) + 1, c))
            },
            gotoIndex: function(c, d, e) {
                var g = c.getAttr(f.SET_SIZE),
                    h = a(c, c.getAttr(f.FIRST_VISIBLE_ITEM)),
                    l = a(c, d);
                h === l ? this.gotoPixel(c, b(c, h), e) : (2 < c.getAttr(f.SET_SIZE) ? (g = k(h, l,
                    g), e.startover && (5 < g.quantity ? e.animationDuration = 1250 : (delete e.animationDuration, e.animationSpeed = 5 * c.getDimensions().viewport.width)), y(c, g.direction, this, g.quantity, e)) : this.gotoPixel(c, b(c, d), e), c.setAttr(f.FIRST_VISIBLE_ITEM, d))
            },
            gotoPixel: function(a, b, c) {
                var d = a.getAttr(f.CURRENT_PIXEL);
                if (b !== d) {
                    e.isFiniteNumber(b) || m.error("Target pixel is not a finite number", "a-carousel-transition-slide-circular", "gotoPixel");
                    c = c || {};
                    var g = c.easingFunction || "ease-out",
                        k = c.callback,
                        h;
                    c.animationDuration !==
                        A ? h = c.animationDuration : (h = e.isFiniteNumber(c.animationSpeed) ? c.animationSpeed : a.getAttr(f.ANIMATION_SPEED), d = Math.abs(b - d), h = 0 === h ? 0 : Math.floor(d / h * 1E3));
                    0 < h && (!c.silent && a.setAttr(f.ANIMATING, !0), k = function() {
                        c.callback && c.callback();
                        a.setAttr(f.ANIMATING, e.isAnimated(a.dom.$carousel), c.silent)
                    });
                    a.setAttr(f.CURRENT_PIXEL, b);
                    e.animate(a.dom.$carousel, {
                        left: -1 * b
                    }, h, g, k)
                }
            },
            gotoNextPage: function(a, b) {
                var c = a.getAttr(f.PAGE_NUMBER),
                    c = c === a.getAttr(f.TOTAL_PAGES) ? 1 : c + 1;
                this.gotoPage(a, c, b)
            },
            gotoPrevPage: function(a,
                b) {
                var c = a.getAttr(f.PAGE_NUMBER),
                    c = 1 === c ? a.getAttr(f.TOTAL_PAGES) : c - 1;
                this.gotoPage(a, c, b)
            },
            onSwipe: function(c, d) {
                var g = c.getAttr(f.CURRENT_PIXEL),
                    k = c.getAttr(f.PAGE_SIZE),
                    h = a(c, c.getAttr(f.FIRST_VISIBLE_ITEM)),
                    l = 0 > d.velocityX,
                    k = b(c, l ? h + k : h - k),
                    g = Math.abs(1E3 * (l ? g - k : g + k) / d.velocityX),
                    l = 1.2 * e.viewport().width;
                p(c, 0 > d.touchDeltaX ? "right" : "left", {
                    animationDuration: Math.min(Math.max(g, 300), l),
                    easingFunction: c.getAttr(f.TOUCH_EASING)
                })
            },
            onPan: function(c, d) {
                c.setAttr(f.ANIMATING, !0);
                var g = c.getAttr(f.PAGE_NUMBER),
                    k = a(c, c.getAttr(f.FIRST_VISIBLE_ITEM)),
                    k = b(c, k),
                    k = u(c).reached ? k - .4 * d.touchDeltaX : k - d.touchDeltaX;
                d.ended ? (k = {
                    easingFunction: c.getAttr(f.TOUCH_EASING),
                    animationSpeed: .95 * e.viewport().width,
                    silent: !0
                }, Math.abs(d.touchDeltaX) >= .4 * c.getViewportWidth() ? p(c, 0 > d.touchDeltaX ? "right" : "left", k) : c.gotoPage(g, k)) : c.gotoPixel(k, {
                    easingFunction: c.getAttr(f.TOUCH_EASING),
                    animationDuration: 0,
                    silent: !0
                })
            }
        }
    });
    "use strict";
    m.when("A", "a-carousel-utils", "a-carousel-constants").register("a-carousel-transition-freescroll",
        function(e, h, l) {
            function f(b) {
                a[b.__id] || (a[b.__id] = new t(b));
                return a[b.__id]
            }

            function c(a) {
                for (var b = a.countItems(), c = [], d = 0; d < b; d++) c.push(!0);
                a.setAttr(l.FETCHED_ITEMS, c)
            }

            function g(a) {
                var b = a.countItems(),
                    c = a.getAttr(l.SET_SIZE),
                    d = [],
                    e;
                if (c > b) {
                    for (var f = 0; f < c - b; f++) e = b + f + 1, d.push(a.getEmptyCard(e, c));
                    a.appendItems(d)
                }
            }

            function k(a, b, c) {
                if (!c || b.length >= c.length)
                    for (var d = a.getItems(), f = b.length, g; f--;)(g = b[f]) && !e.equals(g, c[f]) && !0 !== g && !0 !== g.content && a.hasItem(d, f) && (b[f] = a.insertFetchedItem(g,
                        d, f));
                a.setAttr(l.FETCHED_ITEMS, b)
            }

            function d(a) {
                a.hasEmptyCard() && a.attachScrollListener(function() {
                    a.throttle("detect", b)
                })
            }

            function b(a) {
                var c = a.getAttr("loading_threshold_pixels"),
                    d = a.measureWidth(),
                    e = a.getFirstEmptyDetails(); - 1 !== e.index && e.left < d + c ? a.wantNext(e.index, a.getAttr("next_request_size")) : (a.previousCardLeft && a.previousCardLeft !== e.left && a.throttle("detect", b), a.previousCardLeft = e.left)
            }
            var a = {},
                t = function(a) {
                    this.carousel = a
                };
            e.extend(t.prototype, {
                setAttr: function(a, b) {
                    return this.carousel.setAttr(a,
                        b)
                },
                getAttr: function(a) {
                    return this.carousel.getAttr(a)
                },
                onChange: function(a, b) {
                    this.carousel.onChange(a, b)
                },
                getItems: function() {
                    return this.carousel.dom.$carousel.children("li")
                },
                countItems: function() {
                    return this.getItems().length
                },
                showItems: function() {
                    return this.getItems().css("visibility", "").attr("aria-hidden", "false")
                },
                getEmptyCard: function(a, b) {
                    return this.carousel.getEmptyCard(a, b)
                },
                getEmptyCards: function() {
                    return this.carousel.dom.$carousel.children(".a-carousel-card-empty")
                },
                hasEmptyCard: function() {
                    return 0 <
                        this.getEmptyCards().length
                },
                getFirstEmptyDetails: function() {
                    var a = this.getEmptyCards();
                    return 0 < a.length ? (a = a.first(), {
                        index: a.index(),
                        left: a.position().left
                    }) : {
                        index: -1,
                        left: -1
                    }
                },
                appendItems: function(a) {
                    this.carousel.dom.$carousel.append(a.join(""))
                },
                hasItem: function(a, b) {
                    return 0 < a.eq(b).length
                },
                insertFetchedItem: function(a, b, c) {
                    h.addElementToDom(b.eq(c), h.getElementFromItem(a));
                    return h.clearElementFromItem(a)
                },
                attachScrollListener: function(a) {
                    this.carousel.dom.$carousel.bind(e.action.move + ".a-carousel-freeScroll scroll.a-carousel-freeScroll",
                        a)
                },
                detachScrollListener: function(a) {
                    this.carousel.dom.$carousel.unbind(".a-carousel-freeScroll")
                },
                measureWidth: function() {
                    return this.carousel.dom.$carousel.outerWidth()
                },
                wantNext: function(a, b) {
                    this.carousel.strategies.ajax.want(this.carousel, a, b)
                },
                throttle: function(a, b) {
                    var c = this;
                    clearTimeout(c[a]);
                    c[a] = setTimeout(function() {
                        b(c)
                    }, 100)
                }
            });
            var u = {
                ajaxLock: !0
            };
            u[l.NO_TRANSITION] = !0;
            u[l.HIDE_OFF_SCREEN] = !1;
            u[l.AUTO_ADJUST_HEIGHT] = !1;
            u.next_request_size = 10;
            u.loading_threshold_pixels = 400;
            return {
                gotoIndex: e.constants.NOOP,
                gotoNextpage: e.constants.NOOP,
                gotoPrevPage: e.constants.NOOP,
                gotoPage: e.constants.NOOP,
                initAttrs: u,
                init: function(a) {
                    var h = f(a);
                    h.showItems();
                    c(h);
                    g(h);
                    d(h);
                    h.onChange(l.FETCHED_ITEMS, function(a, c) {
                        b(h);
                        k(h, a, c);
                        h.hasEmptyCard() || h.detachScrollListener()
                    });
                    e.on.resize(function() {
                        b(h)
                    })
                },
                afterInit: function(a) {
                    var c = f(a);
                    e.delay(function() {
                        c.setAttr("ajaxLock", !1);
                        b(c)
                    })
                },
                prepareFetchedItems: c,
                addEmptyCards: g,
                handleItemChanges: k,
                detectEmptyCardsLoadingThreshold: b,
                ATTR: {
                    NEXT_REQUEST_SIZE: "next_request_size",
                    LOADING_THRESHOLD_PIXELS: "loading_threshold_pixels"
                }
            }
        });
    "use strict";
    m.when("A", "jQuery", "a-carousel-transition-slide", "a-carousel-transition-swap", "a-carousel-transition-freescroll", "a-carousel-transition-slidecircular", "a-carousel-constants").register("a-carousel-strategies-transition", function(e, h, l, f, c, g, k) {
        h = {};
        h[k.NO_TRANSITION] = !0;
        h[k.HIDE_OFF_SCREEN] = !1;
        h[k.AUTO_ADJUST_HEIGHT] = !1;
        return {
            slideHorizontal: l,
            swap: f,
            freeScroll: c,
            slideCircular: g,
            none: {
                gotoIndex: e.constants.NOOP,
                gotoNextPage: e.constants.NOOP,
                gotoPrevPage: e.constants.NOOP,
                gotoPage: e.constants.NOOP,
                initAttrs: h,
                init: function(c) {
                    c.dom.$carousel.children("li").css("visibility", "").attr("aria-hidden", "false")
                }
            },
            "default": "slideHorizontal"
        }
    });
    "use strict";
    m.when("A").register("a-carousel-ajax-standard", function(e) {
        function h(c, g, k) {
            c.triggerEvent("beforeAjax", {
                url: g,
                params: k
            });
            e.get(g, {
                cache: !1,
                success: function(d) {
                    d = e.isArray(d) ? d : d !== f && null !== d && !e.objectIsEmpty(d) && d.hasOwnProperty("data") && e.isArray(d.data) ? d.data : null;
                    if (null === d) m.error("Invalid JSON returned to carousel from " +
                        g + " - see http://tiny/c1mr5h0u for details.", "a-carousel-ajax-standard", "sendRequest");
                    else {
                        k.needSetSize && (d && d.length || m.error("Carousel requires a set_size and none was returned by the fallback AJAX request at: " + g, "a-carousel-ajax-standard", "sendRequest"), c.setAttr("set_size", d[0].setSize ? d[0].setSize : d.length));
                        for (var b = c.getAttr("fetchedItems"), a;
                            (a = d.pop()) !== f;) a && (a.content || "" === a.content ? a.content = e.trim(a.content) : a = e.trim(a)), b[k.offset + d.length] = a;
                        k.needSetSize && c.init();
                        c.setAttr("fetchedItems",
                            b);
                        c.setAttr("ajaxLock", !1);
                        k.needSetSize && c.getAttr("pageSize") >= b.length && c.strategies.ajax.wantCurrentPage(c);
                        c.triggerEvent("ajaxSuccess", {
                            url: g,
                            params: k
                        })
                    }
                },
                params: k
            })
        }

        function l(c) {
            var e = c.getAttr("requestTimer");
            e && (clearTimeout(e), c.setAttr("requestTimer", null))
        }
        var f;
        return {
            getItems: function(c, f, k) {
                var d = c.getAttr("ajax");
                c.setAttr("requestTimer", e.delay(h, d.fetch_delay, c, f, k))
            },
            wantNextPage: function(c) {
                l(c);
                if (c.getAttr("ajax").prefetch_next_page) {
                    var e = c.getAttr("pageSize"),
                        f = 2 * e;
                    c.getAttr("show_partial_next") &&
                        f++;
                    this.want(c, (c.getAttr("pageNumber") - 1) * e, f)
                } else this.wantCurrentPage(c)
            },
            wantPrevPage: function(c) {
                l(c);
                if (c.getAttr("ajax").prefetch_next_page) {
                    var e = c.getAttr("pageSize"),
                        f = 2 * e;
                    c.getAttr("show_partial_next") && f++;
                    this.want(c, (c.getAttr("pageNumber") - 2) * e, f)
                } else this.wantCurrentPage(c)
            },
            wantCurrentPage: function(c) {
                l(c);
                var e = c.getAttr("pageSize"),
                    f = c.getAttr("show_partial_next") ? e + 1 : e;
                this.want(c, (c.getAttr("pageNumber") - 1) * e, f)
            },
            want: function(c, e, f) {
                if (!c.getAttr("ajaxLock")) {
                    l(c);
                    var d = c.getAttr("ajax"),
                        b = c.getAttr("set_size");
                    if (d.url) {
                        var a = c.getAttr("fetchedItems"),
                            h = d.id_list;
                        h || (h = []);
                        var u = -1 < e ? e : 0;
                        e = e + f - 1;
                        var p = d.params || {},
                            n = [],
                            m = [];
                        0 === b && (h.length && (b = h), p.needSetSize = "true", c.setAttr("ajaxLock", !0));
                        for (-1 === f && b && (e = b); u <= e && u < b;) a[u] || ((f = h[u]) && n.push(f), m.push(u), a[u] = !1), u++;
                        c.setAttr("fetchedItems", a, {
                            silent: !0
                        });
                        p.count = m.length;
                        p.offset = m[0] || 0;
                        0 < n.length && (p[d.id_param_name] = n.join(","));
                        (0 < m.length || p.needSetSize) && this.getItems(c, d.url, p)
                    }
                }
            },
            init: function(c) {
                var g = c.getAttr("ajax");
                e.isFiniteNumber(g.fetch_delay) || (g.fetch_delay = 500);
                g.id_param_name = g.id_param_name || "ids";
                g.prefetch_next_page = g.prefetch_next_page === f ? !0 : !!g.prefetch_next_page;
                c.setAttr("ajax", g);
                c.getAttr("set_size") || this.want(c, 0, -1)
            },
            afterInit: function(c) {
                c.strategies.ajax.wantCurrentPage(c);
                c.onChange("pageNumber", function(e, f) {
                    e > f ? c.strategies.ajax.wantNextPage(c) : c.strategies.ajax.wantPrevPage(c)
                })
            }
        }
    });
    "use strict";
    m.when("A", "a-carousel-ajax-standard").register("a-carousel-strategies-ajax", function(e,
        h) {
        return {
            standard: h,
            none: {
                wantNextPage: e.constants.NOOP,
                wantPrevPage: e.constants.NOOP,
                wantCurrentPage: e.constants.NOOP,
                want: e.constants.NOOP,
                init: e.constants.NOOP
            },
            "default": "standard"
        }
    });
    "use strict";
    m.when("A", "a-carousel-constants").register("a-carousel-accessibility-standard-desktop", function(e, h) {
        function l(a) {
            var b = a.dom.$carousel,
                c = b.children("li"),
                d = a.getAttr(h.PAGE_SIZE),
                e = a.getAttr(h.FIRST_VISIBLE_ITEM) - 1;
            return a.getAttr(h.NO_TRANSITION) ? c : c.length <= d ? b.children("li:not(:empty), li.a-carousel-card-empty") :
                c.slice(e, e + d)
        }

        function f(a, b, c, d) {
            var f = function() {
                var c = l(a);
                (b ? c.first() : c.last()).find("a, button, input, select, textarea, [tabindex]:not([tabindex\x3d'-1'])").not(":disabled").first().focus();
                e.delay(function() {
                    g(a)
                }, a.getAttr(h.PAGE_SIZE) * a.getAttr(h.DELAY_TIME) + 50)
            };
            if (0 === c || 0 === d) e.delay(f, 0);
            else a.once(h.ANIMATING, function(a) {
                a || f()
            })
        }

        function c(a) {
            var c = a.dom.$carousel.children("li"),
                d = a.getAttr(h.TRANSITION_STRATEGY),
                e = a.getAttr(h.SET_SIZE),
                f = e ? {
                    "aria-setsize": e
                } : {};
            if ("swap" === d) {
                var g =
                    a.getAttr(h.FIRST_VISIBLE_ITEM);
                c.each(function(a) {
                    var c = b(this);
                    g + a > e ? (c.removeAttr("aria-setsize"), c.removeAttr("aria-posinset")) : (f["aria-posinset"] = g + a, c.attr(f))
                })
            } else c.each(function(a) {
                f["aria-posinset"] = a + 1;
                b(this).attr(f)
            })
        }

        function g(a) {
            a = a.dom.$container;
            a.find(".a-carousel-accessibility-page-info").html(a.find(".a-carousel-page-count").text())
        }

        function k(a) {
            a.getAttr(h.TRANSITION_STRATEGY);
            if (!a.getAttr(h.NO_TRANSITION)) {
                var b = a.dom.$carousel.children("li");
                a = l(a);
                b = b.not(a);
                a.attr("aria-hidden", !1);
                b.attr("aria-hidden", !0)
            }
        }

        function d(a, b) {
            if (!a.getAttr(h.CIRCULAR)) {
                var c = a.dom.$container;
                c.find(".a-carousel-goto-prevpage").attr("aria-disabled", 1 === b ? "true" : "false");
                c.find(".a-carousel-goto-nextpage").attr("aria-disabled", b === a.getAttr(h.TOTAL_PAGES) ? "true" : "false")
            }
        }
        var b = e.$;
        return {
            init: function(a) {
                var b = a.getAttr(h.NAME);
                c(a);
                k(a);
                d(a, 1);
                e.on("a:carousel" + (b ? ":" + name : "") + ":repaint", function() {
                    k(a)
                });
                a.onChange(h.SET_SIZE, function(b, d) {
                    c(a)
                });
                a.onChange(h.LOADING, function(b) {
                    a.getAttr(h.ANIMATING) ||
                        a.dom.$carousel.attr("aria-busy", (!!b).toString())
                });
                a.onChange(h.ANIMATING, function(b) {
                    a.getAttr(h.LOADING) || a.dom.$carousel.attr("aria-busy", (!!b).toString());
                    !b && a.getAttr(h.SET_SIZE) > a.getAttr(h.PAGE_SIZE) && (b = a.getAttr(h.TRANSITION_STRATEGY), k(a), "slide" !== b && c(a))
                });
                a.onChange(h.PAGE_NUMBER, function(b) {
                    d(a, b)
                })
            },
            afterInit: function(a) {
                g(a)
            },
            gotoPage: function(a, b, c) {
                a.getAttr(h.NO_TRANSITION) || f(a, !0, b, c)
            },
            nextPage: function(a, b, c) {
                a.getAttr(h.NO_TRANSITION) || f(a, !0, b, c)
            },
            prevPage: function(a, b,
                c) {
                a.getAttr(h.NO_TRANSITION) || f(a, !1, b, c)
            }
        }
    });
    "use strict";
    m.when("A", "a-carousel-constants").register("a-carousel-accessibility-standard-mobile", function(e, h) {
        function l(c) {
            var e = c.dom.$carousel;
            c = e.children(".a-carousel-card-empty");
            var e = e.children("li").not(c),
                h = e.length,
                d = h ? {
                    "aria-setsize": h
                } : {};
            c.attr("aria-hidden", "true").removeAttr("aria-setsize").removeAttr("aria-posinset");
            e.each(function(b) {
                d["aria-posinset"] = b + 1;
                d["aria-hidden"] = "false";
                f(this).attr(d)
            })
        }
        var f = e.$;
        e = e.constants.NOOP;
        return {
            init: function(c) {
                l(c);
                c.onChange(h.SET_SIZE, function() {
                    l(c)
                });
                c.onChange(h.LOADING, function(e) {
                    c.dom.$carousel.attr("aria-busy", (!!e).toString());
                    e || l(c)
                })
            },
            gotoPage: e,
            nextPage: e,
            prevPage: e
        }
    });
    "use strict";
    m.when("A", "a-carousel-accessibility-standard-desktop", "a-carousel-accessibility-standard-mobile").register("a-carousel-strategies-accessibility", function(e, h, l) {
        return {
            standardDesktop: h,
            standardMobile: l,
            none: {
                init: e.constants.NOOP,
                gotoPage: e.constants.NOOP,
                nextPage: e.constants.NOOP,
                prevPage: e.constants.NOOP
            },
            "default": e.capabilities.mobile || e.capabilities.tablet ? "standardMobile" : "standardDesktop"
        }
    });
    "use strict";
    m.when("a-carousel-strategies-display", "a-carousel-strategies-transition", "a-carousel-strategies-ajax", "a-carousel-strategies-accessibility").register("a-carousel-strategies", function(e, h, l, f) {
        return {
            display: e,
            transition: h,
            ajax: l,
            accessibility: f
        }
    });
    "use strict";
    m.when("A", "jQuery", "a-timing-analytics", "a-carousel-classes", "a-carousel-strategies", "a-carousel-constants").register("a-carousel-framework",
        function(e, h, l, f, c, g) {
            function k(a, b, c, f) {
                b = new b(a, c, f);
                b.__id = ++C;
                a.data("a-carousel", b);
                a.removeClass("a-carousel-static");
                p(a) ? e.delay(d, 10, b) : r.push(b);
                f.name && (w[f.name] = b);
                return b
            }

            function d(a) {
                a.init();
                q.push(a);
                a.__initialized = !0;
                a.dom.$container.addClass("a-carousel-initialized");
                var b = a.getAttr("name");
                b && z[b] && e.each(z[b], function(b) {
                    b(a)
                })
            }

            function b(a, b) {
                (b = b[a + "Strategy"]) || (b = c[a]["default"]);
                return c[a][b]
            }

            function a(a) {
                for (var b = a.length, c; b--;) c = a[b], c.dom.$container.length && A.find(c.dom.$container).length ||
                    ((c = c.getAttr("name")) && delete w[c], a.splice(b, 1))
            }

            function t() {
                a(r);
                a(q)
            }

            function u(a) {
                var c = a.data("a-carousel-options") || {};
                c.displayStrategy = a.data("a-display-strategy");
                c.transitionStrategy = a.data("a-transition-strategy");
                c.ajaxStrategy = a.data("a-ajax-strategy");
                c.accessibilityStrategy = a.data("a-accessibility-strategy");
                c.carouselClass = a.data("a-class");
                a = b("display", c);
                var d = b("transition", c),
                    e = b("ajax", c),
                    h = b("accessibility", c),
                    g = c.carouselClass;
                g || (g = f["default"]);
                g = f[g];
                if (g !== v && a !== v &&
                    d !== v && e !== v && h !== v) return {
                    carouselClass: g,
                    strategies: {
                        display: a,
                        transition: d,
                        ajax: e,
                        accessibility: h
                    },
                    opts: c
                }
            }

            function p(a) {
                return a.hasClass("a-begin") && 0 === a.children(".a-end").length ? !1 : e.onScreen(a)
            }

            function n() {
                h(".a-carousel-static").each(function() {
                    var a = h(this),
                        b = u(a);
                    b && k(a, b.carouselClass, b.strategies, b.opts)
                })
            }

            function y() {
                for (var a = r.length; a--;) {
                    var b = r[a];
                    p(b.dom.$container) && (r.splice(a, 1), d(b))
                }
            }
            var v, q = [],
                r = [],
                x = !1,
                w = {},
                A = h(document),
                z = {},
                C = 0;
            e.on("resize orientationchange", function(a,
                b) {
                t();
                (b.height || b.width) && e.delay(function() {
                    e.each(q, function(a) {
                        a.resize()
                    })
                }, e.capabilities.mobile || e.capabilities.tablet ? 100 : 0)
            });
            e.on("a:popover:afterSlideOut", function() {
                e.each(q, function(a) {
                    a.resize()
                })
            });
            e.on("a:carousel:change:name", function(a) {
                a.newValue && (w[a.newValue] = a.carousel);
                a.oldValue && delete w[a.oldValue]
            });
            e.on(g.INIT_EVENTS, function() {
                y();
                n();
                e.once(function() {
                    l.stopWidgetLogging("carousel")
                })()
            });
            e.on("a:pageUpdate", t);
            e.on("scroll", function() {
                y();
                n()
            });
            e.declarative("a-tabs",
                "click",
                function(a) {
                    e.delay(function() {
                        y();
                        e.each(q, function(a) {
                            a.getAttr("isInTab") && a.resize()
                        })
                    }, 50)
                });
            e.on("a:popover:afterShow", function() {
                e.delay(y, 50)
            });
            e.on("a:popover:ajaxContentLoaded", function() {
                e.delay(function() {
                    t();
                    n()
                }, 50)
            });
            e.on.ready(function() {
                x = !0
            });
            g = {
                getCarousel: function(a) {
                    a.jquery || (a = h(a));
                    var b = a.closest(".a-carousel-container").data("a-carousel");
                    if (!b) {
                        var c = u(a);
                        c && (b = k(a, c.carouselClass, c.strategies, c.opts))
                    }
                    return b
                },
                getCarouselByName: function(a) {
                    return w[a]
                },
                createAll: function() {
                    t();
                    n()
                },
                initializeAll: function() {
                    t();
                    y()
                },
                kill: function(a) {
                    a.jquery || (a = h(a));
                    if (a.length && (a = a.closest(".a-carousel-container"), a.length)) {
                        var b = a.data("a-carousel");
                        if (b) {
                            var c = e.indexOfArray(q, b); - 1 < c ? (q[c].name && delete w[q[c].name], q.splice(c, 1)) : (c = e.indexOfArray(r, b), -1 < c && (r[c].name && delete w[r[c].name], r.splice(c, 1)))
                        }
                        a.remove()
                    }
                },
                registerStrategy: function(a, b, d) {
                    c[a] || (c.type = {});
                    c[a][b] && m.error("Attempted to register a " + a + " strategy which already exists: " + b, "a-carousel-framework", "registerStrategy");
                    c[a][b] = d;
                    x && n()
                },
                registerCarouselClass: function(a, b) {
                    f[a] && m.error("Attempted to register a carousel class which already exists: " + a, "a-carousel-framework", "registerCarouselClass");
                    h.isFunction(b) || m.error("Attempted to register carousel class " + a + " without a constructor function.", "a-carousel-framework", "registerCarouselClass");
                    f[a] = b;
                    x && n()
                },
                getAllCarousels: function() {
                    return q.concat(r)
                },
                onInit: function(a, b) {
                    a && (z[a] || (z[a] = []), h.isFunction(b) && (z[a].push(b), (a = w[a]) && a.__initialized && b(a)))
                }
            };
            Object.freeze !== v && Object.freeze(g);
            return g
        })
});
/* ******** */
(function(c) {
    var b = window.AmazonUIPageJS || window.P,
        d = b._namespace || b.attributeErrors,
        a = d ? d("AmazonUICompatJS", "AmazonUI") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
})(function(c, b, d) {});
/* ******** */
(function(f) {
    var v = window.AmazonUIPageJS || window.P,
        r = v._namespace || v.attributeErrors,
        b = r ? r("AmazonUIComponents", "AmazonUI") : v;
    b.guardFatal ? b.guardFatal(f)(b, window) : b.execute(function() {
        f(b, window)
    })
})(function(f, v, r) {
    f.when("A").register("a-tabs", function(b) {
        var d = b.$;
        b.declarative("a-tabs", ["click"], function(c) {
            var a = c.$target.closest("li"),
                g = c.data.name,
                e = a.data("a-tab-name"),
                k = a.closest(".a-tab-container").find(".a-box-tab");
            e && (d("li.a-active", a.closest(".a-tabs")).removeClass("a-active"), a.closest("li").addClass("a-active"),
                k.addClass("a-hidden"), k.filter('[data-a-name\x3d"' + e + '"]').removeClass("a-hidden"), a = {
                    $tab: a,
                    tabName: e,
                    tabSetName: g
                }, b.trigger("a:tabs:" + g + ":select", {
                    selectedTab: a
                }), b.trigger("a:tabs:" + g + ":" + e + ":select", {
                    selectedTab: a
                }), c.$event.preventDefault())
        })
    });
    "use strict";
    f.when("A").register("a-accordion-a11y", function(b) {
        var d = b.$,
            c;
        return {
            refreshFocus: function(a, g) {
                g = g || 600;
                c || (c = d("\x3cb /\x3e", {
                    "class": "a-accordion-a11y",
                    tabIndex: -1,
                    style: "position: absolute"
                }).appendTo("body"));
                c.css({
                    display: "block"
                }).offset(a.offset());
                b.delay(function() {
                    c.focus()
                }, 50);
                b.delay(function() {
                    a.focus();
                    c.css({
                        display: "none"
                    })
                }, g)
            }
        }
    });
    f.when("A", "a-accordion-a11y").register("a-accordion", function(b, d) {
        var c = "slideDown",
            a = "slideUp",
            g = 300;
        if (b.capabilities.mobile || b.capabilities.tablet) c = "show", a = "hide", g = 0;
        var e = !b.capabilities.touch && b.capabilities.isFirefox;
        b.declarative("a-accordion", ["click"], function(k) {
            var p = k.$target.closest(".a-accordion"),
                h = k.$target.closest(".a-box"),
                l = p.find(".a-box").not(h),
                n = h.find(".a-accordion-row"),
                x = p.data("a-accordion-name"),
                f = h.data("a-accordion-row-name"),
                w = p.hasClass("a-accordion-collapse"),
                m = k.$target.closest(".a-accordion-row-a11y"),
                p = p.find(".a-accordion-row-a11y").not(m);
            if (f) {
                var t = h.find(".a-accordion-inner"),
                    u = !0;
                if (h.hasClass("a-accordion-active"))
                    if (w) t[a]({
                        duration: g,
                        complete: function() {
                            h.removeClass("a-accordion-active");
                            h.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");
                            m.attr("aria-checked", "false").attr("aria-expanded", "false")
                        }
                    });
                    else u = !1;
                else l.find(".a-accordion-inner")[a]({
                    duration: g,
                    complete: function() {
                        l.removeClass("a-accordion-active")
                    }
                }), t[c]({
                    duration: g,
                    complete: function() {
                        h.addClass("a-accordion-active");
                        l.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");
                        h.find(".a-icon.a-accordion-radio").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active")
                    }
                }), p.attr("aria-checked", "false").attr("aria-expanded", "false"), m.attr("aria-checked", "true").attr("aria-expanded", "true");
                u && e && d.refreshFocus(n);
                u && (n = {
                    $row: h,
                    rowName: f,
                    accordionName: x
                }, b.trigger("a:accordion:select", {
                    selectedRow: n
                }), b.trigger("a:accordion:" + x + ":select", {
                    selectedRow: n
                }), b.trigger("a:accordion:" + x + ":" + f + ":select", {
                    selectedRow: n
                }))
            }
            k.$event.preventDefault()
        })
    });
    "use strict";
    f.when("A", "jQuery").register("a-expander", function(b, d) {
        function c(b, a) {
            var g = b.closest("." + e.container),
                c = g.data("a-expander-collapsed-height"),
                k = "true" === b.attr("aria-expanded");
            b.toggleClass(e.content + "-expanded");
            c ? (g.css("height", k ? c : "auto"), b.attr("aria-expanded", k ? "false" :
                "true"), a()) : b.toggle(0, function() {
                b.attr("aria-expanded", k ? "false" : "true");
                a()
            })
        }

        function a() {
            d(".a-expander-partial-collapse-container").each(function() {
                var b = d(this),
                    a = b.children("." + e.content),
                    g = b.data("a-expander-collapsed-height"),
                    c = b.children("." + e.header);
                a.height() <= g ? c.css({
                    opacity: "0",
                    display: "none"
                }) : (c.css({
                    opacity: "1",
                    display: "block"
                }), a.css("padding-bottom", c.height()), "true" !== a.attr("aria-expanded") && b.css({
                    height: g,
                    "max-height": "none"
                }))
            })
        }
        var g = {
                inline: {
                    expand: "a-icon-expand",
                    collapse: "a-icon-collapse"
                },
                section: {
                    expand: "a-icon-section-expand",
                    collapse: "a-icon-section-collapse"
                },
                extender: {
                    expand: "a-icon-extender-expand",
                    collapse: "a-icon-extender-collapse"
                }
            },
            e = {
                container: "a-expander-container",
                content: "a-expander-content",
                header: "a-expander-header",
                fadeDiv: "a-expander-content-fade"
            },
            k = {};
        b.each(g, function(a, e) {
            k[e] = {};
            b.each(a, function(b, a) {
                k[e][a] = new RegExp("\\b" + b + "\\b", "g")
            })
        });
        b.declarative("a-expander-toggle", "click", function(a) {
            var d = a.$target.closest("." + e.container),
                l = d.find("." + e.container),
                n = d.data("a-expander-name"),
                f;
            f = a.$currentTarget.hasClass(e.header) ? a.$currentTarget : d.find("." + e.header).not(l.find("." + e.header));
            var r = d.find("." + e.content).not(l.find("." + e.content));
            c(r, function() {
                var c = f.find(".a-icon")[0],
                    m = null,
                    t = f.children("." + e.fadeDiv);
                "false" === r.attr("aria-expanded") ? (c && (c.className = c.className.replace(k.inline.collapse, g.inline.expand).replace(k.section.collapse, g.section.expand).replace(k.extender.collapse, g.extender.expand)), a.data && a.data.expand_prompt && (m = a.data.expand_prompt),
                    t.show(), c = "collapse") : (c && (c.className = c.className.replace(k.inline.expand, g.inline.collapse).replace(k.section.expand, g.section.collapse).replace(k.extender.expand, g.extender.collapse)), a.data && a.data.collapse_prompt && (m = a.data.collapse_prompt), t.hide(), c = "expand");
                m && "" !== m && f.find(".a-expander-prompt").not(l.find(".a-expander-prompt")).html(m);
                m = {
                    $expander: d,
                    expanderName: n
                };
                b.trigger("a:expander:toggle", {
                    expander: m
                });
                b.trigger("a:expander:toggle:" + c, {
                    expander: m
                });
                n && (b.trigger("a:expander:" + n +
                    ":toggle", {
                        expander: m
                    }), b.trigger("a:expander:" + n + ":toggle:" + c, {
                    expander: m
                }))
            })
        });
        b.on("load ready resize orientationchange a:popover:afterShow a:popover:ajaxContentLoaded", a);
        return {
            initializeExpanders: a
        }
    });
    "use strict";
    f.when("A", "a-form-controls-api").register("a-form-controls-handlers", function(b, d) {
        var c = b.$,
            a = function() {
                c(this).removeClass("a-hover-disable")
            },
            g = function(a, c) {
                var g = d.findFormElementContainer(a);
                b.delay(function() {
                    g.find(c).each(d.normalizeElement)
                }, 0)
            };
        return {
            handleBoxInputMobileFocus: function() {
                c(this).addClass("a-form-focus")
            },
            handleBoxInputMobileBlur: function() {
                c(this).removeClass("a-form-focus")
            },
            accessibilityKeyPress: function(a) {
                a.keyCode === b.constants.keycodes.SPACE && (a.preventDefault(), a.stopPropagation())
            },
            formReset: g,
            handleCheckboxClick: function() {
                if (!b.capabilities.mobile && !b.capabilities.tablet) c(this).addClass("a-hover-disable").one("mouseleave", a)
            },
            normalizeFormControls: function() {
                c("form").unbind("reset.a-form-controls-reset").bind("reset.a-form-controls-reset", function(b) {
                    g(b.currentTarget, "li .a-touch-multi-select")
                })
            },
            touchMultiSelectHandler: function(b) {
                d.toggleCheckboxState(b.currentTarget)
            }
        }
    });
    "use strict";
    f.when("A", "a-form-controls-handlers", "ready").register("a-form-controls", function(b, d) {
        var c = b.$;
        c("html").hasClass("a-lt-ie8") || (c(document).delegate(".a-checkbox-fancy", "click", d.handleCheckboxClick).delegate(".a-checkbox-fancy, .a-radio-fancy", "keypress", d.accessibilityKeyPress), b.on("a:pageUpdate beforeReady", d.normalizeFormControls))
    });
    "use strict";
    f.when("A").register("a-buttons", function(b) {
        var d = b.$,
            c = 0;
        b.declarative("a-button-group", ["click"], function(a) {
            var c = a.$target.closest(".a-button:not(.a-button-disabled)");
            if (c.length) {
                var e = a.$declarativeParent.find(".a-button"),
                    d = a.data && a.data.name ? a.data.name : !1;
                a = a.$target.attr("name");
                e.removeClass("a-button-selected").attr("aria-checked", "false");
                c.addClass("a-button-selected").attr("aria-checked", "true");
                if (a || d) c = {
                    $button: c,
                    buttonName: a,
                    buttonGroupName: d
                }, d && (b.trigger("a:button-group:" + d + ":toggle", {
                    selectedButton: c
                }), a && b.trigger("a:button-group:" +
                    d + ":" + a + ":toggle", {
                        selectedButton: c
                    }))
            }
        });
        b.on("a:pageUpdate beforeReady", function() {
            var b = d(".a-button:not([id])"),
                g = d(".a-button-group,.a-button-toggle-group");
            b.each(function() {
                var b = d(this),
                    a = b.find(".a-button-text"),
                    g = b.find(".a-button-input"),
                    h = "a-autoid-" + c++;
                b.attr("id", h);
                a.length && (h = (b = a.attr("id")) ? b : h + "-announce", g.attr("aria-labelledby", h), a.attr("id", h))
            });
            g.each(function() {
                var b = d(this).find(".a-button[role\x3d'radio']"),
                    a = b.length,
                    c = 1;
                b.each(function() {
                    d(this).attr({
                        "aria-posinset": c++,
                        "aria-setsize": a
                    })
                })
            })
        });
        d(document).delegate(".a-button-input, .a-button-text", "focusin", function() {
            var b = d(this).closest(".a-button");
            b.hasClass("a-button-disabled") || b.addClass("a-button-focus")
        }).delegate(".a-button-input, .a-button-text", "focusout " + b.action.cancel, function() {
            d(this).closest(".a-button").removeClass("a-button-focus")
        })
    });
    "use strict";
    f.when("A", "ready").register("a-meters", function(b) {
        var d = b.$;
        if (document.getElementsByClassName) {
            var c = function(b) {
                b.removeClass("a-meter-unfilled").addClass("a-meter-filled")
            };
            d(".a-meter-bar").not(".a-manual-animation").each(function() {
                var a = d(this);
                b.onScreen(a, 0) || a.addClass("a-meter-unfilled")
            });
            d("body").addClass("a-meter-animate");
            b.on("resize orientationchange scroll", function(a) {
                d(".a-meter-unfilled").each(function() {
                    var a = d(this);
                    b.onScreen(a, 0) && c(a)
                })
            });
            b.on("a:popover:afterShow", function(b) {
                "ajax" !== b.popover.currentDataStrategy && (b = b.popover.$popover.find(".a-meter-unfilled"), b.length && c(b))
            });
            b.on("a:popover:ajaxContentLoaded", function(a) {
                var d = a.popover.$popover.find(".a-meter-bar").not(".a-manual-animation");
                d.length && (d.addClass("a-meter-unfilled"), b.delay(function() {
                    c(d)
                }, 17))
            })
        }
    });
    "use strict";
    f.when("a-switch-framework", "jQuery").register("a-switch", function(b, d) {
        var c = b.SWITCH_STATE,
            a = b.SWITCH_CONTAINER_CLASS,
            g = b.SWITCH_CLASS;
        return {
            getSwitch: function(e) {
                function k(a) {
                    var d = h.data(c);
                    if (a === r) return d.isOn;
                    if (!d.isEnabled || f(h)) return !1;
                    b.setOnState(h, a);
                    return !0
                }

                function f() {
                    return h.data(c).isDragging
                }
                e.jquery || (e = d(e));
                if (0 === e.length) return null;
                e = e.eq(0);
                e = e.closest("." + a);
                if (0 === e.length) return null;
                var h = e.find("." + g);
                b.ensureInitialized(h);
                return {
                    toggle: function() {
                        return k(!h.data(c).isOn)
                    },
                    isOn: k,
                    enabled: function(a) {
                        var d = h.data(c);
                        if (a === r) return d.isEnabled;
                        if (d.isEnabled === a) return !1;
                        b.setEnabled(h, a);
                        return !0
                    },
                    isDragging: f,
                    label: function(b) {
                        var a = h.data(c).label,
                            d = a[0].childNodes[0];
                        if (b === r) return a.text();
                        3 === d.nodeType && (d.textContent = b)
                    }
                }
            }
        }
    });
    "use strict";
    f.when("A", "jQuery").register("a-switch-framework", function(b, d) {
        function c(q) {
            q.preventDefault();
            var a = q.data.$switch.data("a-switch-state"),
                c = a.control;
            if (!b.isAnimated(c)) {
                q = u(q) - a.initialX;
                a.isOn && (q += a.rightBoundary);
                var d = a.leftBoundary,
                    e = a.rightBoundary;
                q = q < d ? d : q > e ? e : q;
                q !== a.leftOffset && (b.animate(c, {
                    left: q
                }, 0), a.leftOffset = q, a.isDragging = !0, a.dragCount++)
            }
        }

        function a(a) {
            a.preventDefault();
            if (b.capabilities.touch || 1 === a.which) {
                a = a.data.$switch;
                var c = a.data("a-switch-state");
                k(a, c.isDragging && 1 < c.dragCount ? c.leftOffset > c.midPoint : !c.isOn);
                c.isDragging = !1;
                t(a)
            }
        }

        function g(a, c, d) {
            d = {
                switchState: a,
                previousState: d
            };
            b.trigger("a:switch:" +
                c, d);
            a.name && b.trigger("a:switch:" + a.name + ":" + c, d)
        }

        function e(b) {
            if (!b.data("a-switch-state")) {
                var a = b.closest(".a-switch-row"),
                    c = b.children(".a-switch-control"),
                    d = a.find(".a-switch-label"),
                    e = d.siblings("input"),
                    g = e.attr("name"),
                    k = a.hasClass("a-active"),
                    h = !a.hasClass("a-disabled"),
                    f = w.left,
                    p = b.width() - c.width() + w.right;
                b.data("a-switch-state", {
                    input: e,
                    container: a,
                    control: c,
                    label: d,
                    isDragging: !1,
                    rightBoundary: p,
                    leftBoundary: f,
                    midPoint: p / 2,
                    initialX: null,
                    leftOffset: k ? p : f,
                    isOn: k,
                    isEnabled: h,
                    name: g,
                    dragCount: 0,
                    clicked: !1
                })
            }
        }

        function k(a, c) {
            e(a);
            a = a.data("a-switch-state");
            var d = a.isOn,
                k = c !== a.isOn;
            a.isOn = c;
            var h = a.isOn ? a.rightBoundary : a.leftBoundary;
            b.animate(a.control, {
                left: h
            }, 300, "ease-out");
            a.leftOffset = h;
            h = a.container;
            a.isOn ? h.addClass("a-active") : h.removeClass("a-active");
            h = a.input;
            a.isOn ? h.attr("checked", "checked") : h.removeAttr("checked");
            k && g(a, "flip", d);
            c ? g(a, "on", d) : g(a, "off", d)
        }
        var p = function(b) {
                b.bind("touchmove.a-switch-component", {
                    $switch: b
                }, c);
                b.bind("touchend.a-switch-component", {
                        $switch: b
                    },
                    a);
                b.bind("touchcancel.a-switch-component", {
                    $switch: b
                }, a);
                b.bind("mouseup.a-switch-component", {
                    $switch: b
                }, a)
            },
            h = function(a) {
                a.unbind("touchmove.a-switch-component");
                a.unbind("touchend.a-switch-component");
                a.unbind("touchcancel.a-switch-component");
                a.unbind("mouseup.a-switch-component")
            },
            l = function(a) {
                return (a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]).pageX
            },
            n = function(b) {
                d("body").bind("mousemove.a-switch-component", {
                    $switch: b
                }, c);
                d("body").bind("mouseup.a-switch-component", {
                        $switch: b
                    },
                    a)
            },
            r = function(b) {
                d("body").unbind("mousemove.a-switch-component", c);
                d("body").unbind("mouseup.a-switch-component", a)
            },
            v = function(a) {
                return a.pageX
            },
            w = {
                left: -1,
                right: -1
            };
        f.when("prv:skin-vars").execute(function(a) {
            w = a.toggle.bounds
        });
        var m = null,
            t = null,
            u = null;
        b.capabilities.touch ? (m = p, t = h, u = l) : (m = n, t = r, u = v);
        b.declarative("a-switch", b.capabilities.touch ? "touchstart" : "mousedown", function(a) {
            var c = a.$event;
            c.preventDefault();
            if (b.capabilities.touch || 1 === c.which) {
                a = a.$declarativeParent;
                e(a);
                var d = a.data("a-switch-state");
                d.dragCount = 0;
                d.clicked = !0;
                d.isDragging = !1;
                d.isEnabled && (d.initialX = u(c), m(a))
            }
        });
        b.declarative("a-switch-input", "change", function(a) {
            a.$event.preventDefault();
            a = a.$target.closest(".a-switch-row").find(".a-switch");
            e(a);
            var b = a.data("a-switch-state");
            k(a, !b.isOn)
        });
        b.declarative("a-switch-label", "click", function(a) {
            a.$event.preventDefault();
            a = a.$target.closest(".a-switch-row").find(".a-switch");
            e(a);
            var b = a.data("a-switch-state");
            b.clicked ? b.clicked = !1 : b.isEnabled && k(a, !b.isOn)
        });
        f.when("ready").execute("a-switch-normalization",
            function() {
                d(".a-switch-input").each(function() {
                    var a = d(this),
                        b = a.next().children(".a-switch");
                    k(b, a.prop("checked"))
                })
            });
        return {
            ensureInitialized: e,
            setOnState: k,
            setEnabled: function(a, b) {
                e(a);
                a = a.data("a-switch-state");
                var c = a.container;
                b ? c.removeClass("a-disabled") : c.addClass("a-disabled");
                a.isEnabled = b
            },
            SWITCH_STATE: "a-switch-state",
            SWITCH_CONTAINER_CLASS: "a-switch-row",
            SWITCH_CLASS: "a-switch"
        }
    });
    f.when("A", "ready").register("a-progress", function(b) {
        function d(a) {
            (a ? c(a) : c(".a-js-progress-bar")).each(function() {
                var a =
                    c(this);
                if (b.onScreen(a, 0)) {
                    var d, k, f, h;
                    d = +a.attr("data-progress-percentage");
                    k = -(d - 100);
                    f = a.width();
                    h = k / 100 * f;
                    var l = a.find(".a-js-progress-tooltip"),
                        n = l.width();
                    l.find(".a-js-tooltip-arrow");
                    d = (d + k / 2) / 100 * f - n / 2;
                    k = n + d;
                    (n = k < f) || (d -= k - f);
                    f = d;
                    c(l).css("left", f + 0);
                    f = l.width();
                    l = l.find(".a-js-tooltip-arrow");
                    l.removeClass("aok-hidden");
                    n ? (f /= 2, c(l).css("left", f + -9)) : c(l).css("left", f + -27);
                    12 > h && l.addClass("aok-hidden");
                    c(a.find(".a-js-progress-tooltip")).removeClass("a-progress-tooltip-hidden").addClass("a-progress-tooltip-revealed")
                }
            })
        }
        var c = b.$;
        d();
        b.on("resize scroll", function(a) {
            d()
        });
        return {
            init: d
        }
    })
});
/* ******** */
(function(k) {
    var x = window.AmazonUIPageJS || window.P,
        C = x._namespace || x.attributeErrors,
        d = C ? C("AmazonUIPopoverJS", "") : x;
    d.guardFatal ? d.guardFatal(k)(d, window) : d.execute(function() {
        k(d, window)
    })
})(function(k, x, C) {
    k.when("A", "a-popover-base-factory").register("a-popover-base-apis", function(d, f) {
        return {
            show: function(d) {
                var c = f.get(d.$trigger ? d.$trigger : d);
                if (c) return c.show.apply(c, arguments)
            },
            hide: function(d) {
                var c = f.get(d);
                if (c) return c.unlock(1), c.hide.apply(c, arguments)
            },
            get: function(d) {
                return f.get(d)
            },
            remove: function(d) {
                return f.remove(d)
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-iframes", "a-popover-util", "a-popover-objectclass", "a-popover-data").register("a-popover-base-factory", function(d, f, g, c, e) {
        function h(b) {
            return w[b] ? w[b] : null
        }

        function a(b, a) {
            return new c.PopoverClass(b, a)
        }

        function l(b, a) {
            var d = null;
            if ("number" === typeof b) d = h(b);
            else if ("string" === typeof b)(d = p[b] ? p[b] : null) || (d = h(b));
            else if ("object" === typeof b)
                if (b.$popover) d = b;
                else if (b = n(b), d = b.data("a-popover-id"), d || (d = b.find(".a-declarative").eq(0),
                    d = d.length ? d.data("a-popover-id") : null), d = h(d), !d) {
                var c = b.data("action");
                (c = c ? b.data(c) : null) && c.name && (d = c.name, d = p[d] ? p[d] : null, !d || a && d.type !== a ? d = null : (a = (a = d.attrs("currentDataStrategy")) ? e.getStrategyByName(a) : e.guessStrategyByAttrs(d.attrs())) && a.reusePopover ? d.$trigger[0] !== b[0] && (d.$trigger.data("a-popover-id", null), d.$trigger = b) : d = null)
            }
            return d
        }

        function b() {
            m || (m = a({
                id: -1,
                $popover: q,
                $trigger: q,
                immersive: !0
            }, {
                isActive: function() {
                    return !0
                },
                hideMethod: function() {
                    this.hideChildren()
                },
                showMethod: d.constants.NOOP
            }));
            return m
        }
        var n = d.$,
            t = 1,
            p = {},
            w = {},
            q = n("\x3cdiv id\x3d'a-popover-root' style\x3d'z-index:-1;position:absolute;' /\x3e").appendTo("body"),
            m;
        return {
            getRoot: b,
            get: function(b, a) {
                a = a ? a : this ? this.type : null;
                return (b = l(b, a)) && a && b.type !== a ? null : b
            },
            create: function(c, g) {
                var e = n(c),
                    q = g.attributes || {},
                    m = g.typeSpecificFunctions || g.variant || {};
                g = g.actionCheck || !1;
                e.data("a-popover-id");
                var k = q.type,
                    y = null;
                !k || e.hasClass("a-declarative") && e.data("action") && -1 !== e.data("action").indexOf(k) || (e = d.declarative.create(e,
                    "a-" + k), c = e[0]);
                if (g && e.data("action") && -1 === e.data("action").indexOf(k)) return null;
                k && e && (y = l(e));
                if (y) return y.type !== k ? null : y;
                e = q;
                c = n(c);
                (q = e.type) ? (-1 === n.inArray(q, ["modal", "secondary-view", "popover"]) || e.popoverLabel || x.ueLogError && -1 !== document.getElementsByTagName("body")[0].className.indexOf("a-aui_accessibility_49860-t1") && x.ueLogError({
                    message: "[popoverLabel attribute is required for all AUI popovers, modals and secondary views for accessibility reasons. Please see http://tiny/g8mxo1mk/auiamazdevepopo for more details]"
                }, {
                    logLevel: "ERROR"
                }), c && c.length ? (e = d.extend({
                    id: t++,
                    $trigger: c,
                    $triggerWrapper: null,
                    $iframe: f.get()
                }, e), m = d.copy(m), m = a(e, m), w[m.id] = m, m.name && (p[m.name] = m), c.data("a-popover-id", m.id), c = m.$trigger.closest(".a-popover"), c = !m.attrs("immersive") && c.length ? h(c.data("a-popover-id")) || b() : b(), m.parent = c, c.children.push(m)) : m = null) : m = null;
                return m
            },
            remove: function(b, a) {
                b = this.get(b);
                var n = !1;
                if (b) {
                    n = b.id;
                    if (b && -1 < n) {
                        var c = d.indexOfArray(b.parent.children, b),
                            h = b.$container,
                            l = b.$trigger;
                        b.parent.children.splice(c,
                            1);
                        b.unlock().hide();
                        b.update({
                            content: ""
                        });
                        f.release(b.$iframe);
                        h && b.$container.remove();
                        l.data("a-popover-id", "");
                        b.name && delete p[b.name];
                        delete w[n];
                        n = !0
                    } else n = !1;
                    a && d.declarative.remove(b.$trigger[0], "a-" + a)
                }
                return n
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-util", "a-popover-base-factory").register("a-popover-base-handlers", function(d, f, g) {
        function c(a) {
            for (var b; a.length && !(b = a.data("a-popover-id"));) a = a.parent();
            return g.get(b)
        }
        var e = d.$;
        e(document).bind("click " + d.action.start, function(a) {
            var b =
                e(a.target),
                n = a.originalEvent;
            if (!(n && n.pointerType && n.pointerType === d.pointerType.touch && "click" === n.type || b.hasClass("a-modal-scroller") || "a-popover-lgtbox" === b[0].id || "html" === b[0].nodeName.toLowerCase())) {
                var c = function(b) {
                    return f.eventOccursWithin(a, b)
                };
                d.each(g.getRoot().children, function(b) {
                    if (b.isVisible() || b.isContentLoaded()) {
                        var a = f.search(b, c);
                        a ? a.hideChildren() : null !== b.attrs("lightboxOptions") || b.attrs("immersive") || b.unlock(1).hide()
                    }
                })
            }
        });
        d.declarative("a-popover-close", ["click",
            d.action.start
        ], function(a) {
            var b = c(a.$target);
            b && (b.unlock().hide(), f.trigger("dismiss", b));
            a.$event.preventDefault()
        });
        var h = null,
            a = null;
        d.declarative("a-popover-a11y", "focusout", function(a) {
            var b = c(a.$target);
            b && a.$target.length && b.$firstTabbable.length && a.$target[0] === b.$firstTabbable[0] && !(h && 100 > d.now() - h) && (h = d.now(), d.delay(function() {
                e(document.activeElement).hasClass("a-popover-start") && b.$lastTabbable.focus()
            }, 0))
        });
        d.declarative("a-popover-a11y", "focusin", function(h) {
            var b = c(h.$target);
            b && h.$target.length && h.$target.hasClass("a-popover-end") && !(a && 100 > d.now() - a) && (a = d.now(), d.delay(function() {
                b.$firstTabbable.focus()
            }, 0))
        });
        d.declarative("a-popover-a11y", "keydown", function(a) {
            var b = a.$event;
            b.keyCode === d.constants.keycodes.ESCAPE && (a = c(a.$target), b.preventDefault(), a && a.hide())
        });
        d.on("resize zoom", function() {
            g.getRoot().updatePosition()
        });
        if (d.capabilities.isSafari && d.capabilities.ios) d.on("a:popover:refresh", function(a) {
            a = a.popover;
            a.$popover && a.$popover.undelegate('input[type\x3d"date"]',
                "blur").delegate('input[type\x3d"date"]', "blur", function() {
                var b = d.$(x);
                b.scrollTop(b.scrollTop() + 1)
            })
        })
    });
    "use strict";
    k.when("A", "a-popover-base-apis", "a-popover-base-handlers").register("a-popover-base", function(d, f, g) {
        return f
    });
    "use strict";
    k.when("A", "a-popover-util", "a-popover-data", "a-popover-position", "a-popover-iframes", "a-popover-lightbox", "a-popover-animate").register("a-popover-objectclass", function(d, f, g, c, e, h, a) {
        function l(c, p) {
            var g = -1,
                l = [1],
                r = -2;
            this.parent = null;
            this.children = [];
            this.typeSpecificFunctions = {};
            this.attributes = {
                position: "triggerVertical",
                alone: !1,
                immersive: !1,
                restoreFocusOnHide: !0
            };
            var D = function(a, c) {
                    var h = this.isActive(),
                        g = this.getDataStrategy(),
                        p = !this.$popover,
                        e = c || p;
                    c = !1;
                    a = a || e;
                    if (!e)
                        for (var f = l.length; f-- && !e;) e = !t[l[f]];
                    e && (e = k.apply(this), e = n(e), p || (g.unloadContent(this), this.$container.remove(), c = !0), n("body").append(e), this.$container = e, this.$popover = this.$container.hasClass("a-popover") ? this.$container : this.$container.find(".a-popover"), this.$startAnchor =
                        this.$popover.hasClass("a-popover-start") ? this.$popover : this.$popover.find(".a-popover-start"), this.$endAnchor = this.$popover.find(".a-popover-end"), this.$popover.attr("id", "a-popover-" + this.id).data("a-popover-id", this.id));
                    this.attrs("immersive") || (e = parseInt(this.parent.$popover.css("z-index"), 10), d.isFiniteNumber(e) || (e = this.parent.attrs("immersive") ? 1010 : 0), this.$popover.css("z-index", Math.max(299, 100 + e)));
                    if (g.shouldRefreshContent(this) || a) c || g.unloadContent(this), g.loadContent(this, p);
                    this.typeSpecificFunctions.updateDimensions !==
                        b && this.typeSpecificFunctions.updateDimensions.apply(this);
                    l = [];
                    h && x.call(this, [], !1);
                    a = this.$popover.find(".a-popover-inner").find("a, button, input, select, textarea, [tabindex]:not([tabindex\x3d'-1'])");
                    a = a.not(".a-dropdown-link");
                    this.$firstTabbable = this.$popover.find('[data-action\x3d"a-popover-close"]');
                    this.$firstTabbable = this.$firstTabbable.length ? this.$firstTabbable : a.first();
                    this.$lastTabbable = 0 === a.length ? this.$firstTabbable : a.last();
                    return this
                },
                x = function(a, n) {
                    function c() {
                        h.updatePosition();
                        var b = h.attrs("navigate");
                        !n && b && h.attrs("navigate", !1);
                        g.apply(h, a);
                        n && f.trigger("show", h);
                        t && t.apply(h, a);
                        n && f.trigger("afterShow", h);
                        h.$popover.attr("aria-hidden", "false");
                        !n && b && h.attrs("navigate", b);
                        r = 2
                    }
                    var h = this;
                    n = !!n;
                    var e = h.typeSpecificFunctions,
                        g = e.showMethod !== b ? e.showMethod : q,
                        p = e.beforeShowMethod !== b ? e.beforeShowMethod : null,
                        t = e.afterShowMethod !== b ? e.afterShowMethod : null;
                    r = 1;
                    h.attrs("originalFocus", document.activeElement);
                    h.$popover.css("visibility", "hidden").addClass("a-popover-hidden").show();
                    p && p.apply(h, a);
                    h.attrs("synchronous") ? c() : d.delay(function() {
                        c()
                    }, 0)
                };
            this.show = function() {
                var b = this,
                    n = b.attrs("lightboxOptions") || null;
                if (b.isActive() || a.isAnimating(b)) return this;
                b.lock(1);
                n && h.lock(1);
                b.attrs("alone") && d.each(b.parent.children, function(a) {
                    a.isActive() && a.id !== b.id && !a.attrs("modeless") && a.unlock().hide()
                });
                f.trigger("beforeShow", b);
                if (!b.$container || b.isDirty() || b.getDataStrategy().shouldRefreshContent(b)) f.trigger("refresh", b), D.call(b);
                if (b.draggable) {
                    var c = b.$container;
                    d.draggable(c, {
                        handle: c.find(".a-popover-draggable-handle")
                    })
                }
                n && h.show(d.extend({
                    popover: b
                }, n));
                x.call(b, arguments, !0);
                d.delay(function() {
                    b.unlock(1);
                    n && h.unlock(1)
                }, 0);
                return this
            };
            this.hide = function() {
                var c = this,
                    g = c.typeSpecificFunctions,
                    p = g.hideMethod !== b ? g.hideMethod : m,
                    t = g.beforeHideMethod !== b ? g.beforeHideMethod : null,
                    l = g.afterHideMethod !== b ? g.afterHideMethod : null,
                    v = c.attrs("lightboxOptions") || null;
                if (!c.isActive() || c.isLocked() || a.isAnimating(c)) return this;
                r = -1;
                c.hideChildren();
                f.trigger("beforeHide", c);
                t && t.apply(c, arguments);
                p.apply(c, arguments);
                e.release(c.$iframe);
                f.trigger("hide", c);
                d.delay(function() {
                    l && l.apply(c, arguments);
                    c.$popover.attr("aria-hidden", "true");
                    v && (c.parent.attrs("lightboxOptions") ? h.show(d.extend({
                        popover: c.parent
                    }, v)) : h.hide(v));
                    f.trigger("afterHide", c);
                    r = -2;
                    if (c.attrs("restoreFocusOnHide")) {
                        var b = null;
                        "dropdown" === c.type ? b = c.sourceButton.find("[aria-pressed]") : c.$trigger && n(c.$trigger).length && (b = c.$trigger.is("a, input, button") ? c.$trigger : c.$trigger.find("a, input, button"));
                        b && b.length || (b = n(c.attrs("originalFocus")));
                        !b.length || w && !b.is(":visible") || d.delay(function() {
                            b.focus()
                        }, 400)
                    }
                }, 0);
                return this
            };
            this.update = function(b) {
                var a = "string" === typeof b ? {
                        content: b
                    } : d.copy(b),
                    c = this.attrs();
                b = this.getDataStrategy();
                d.each(a, function(b, a) {
                    (b && !c[a] || c[a] && c[a] !== b) && l.push(a)
                });
                this.isDirty() && (a = d.extend({}, c, a), this.attrs(a), this.getDataStrategy(a), this.$popover && b.unloadContent(this), this.isActive() && (D.call(this, !0), this.focus()));
                return this
            };
            this.refresh = function(b,
                a) {
                return D.call(this, b || !0, a || !1)
            };
            this.isActive = function() {
                return 1 <= r
            };
            this.isVisible = function() {
                return 2 === r
            };
            this.isContentLoading = function() {
                return 3 === r
            };
            this.setContentLoading = function() {
                r = 3
            };
            this.isContentLoaded = function() {
                return 4 === r
            };
            this.setContentLoaded = function() {
                r = 4
            };
            this.isDirty = function() {
                return 0 < l.length
            };
            this.lock = function(b) {
                b || (b = 10);
                g < b && (g = b);
                return this
            };
            this.unlock = function(b) {
                b || (b = 10);
                g <= b && (g = -1);
                return this
            };
            this.isLocked = function() {
                return -1 !== g
            };
            this.typeSpecificFunctions =
                p;
            this.attrs(c);
            d.extend(this, this.attributes)
        }
        var b, n = d.$,
            t = {
                name: !0,
                url: !0,
                content: !0,
                width: !0,
                height: !0,
                "max-width": !0,
                "max-height": !0,
                "min-width": !0,
                "min-height": !0
            },
            p = d.capabilities.mobile && d.capabilities.isIE10Plus,
            w = n("html").hasClass("a-lt-ie9"),
            q = function() {
                this.$popover.css({
                    visibility: "visible"
                }).removeClass("a-popover-hidden");
                this.attrs("focusWhenShown") && "ajax" !== this.attrs("currentDataStrategy") && this.focus()
            },
            m = function() {
                this.$popover.hide().find(".a-lgtbox-vertical-scroll").removeClass("a-lgtbox-vertical-scroll")
            },
            k = function() {
                var a = this.typeSpecificFunctions;
                return a.skin !== b ? a.skin(this) : ""
            },
            r = l.prototype;
        r.getDataStrategy = function(b) {
            var a = this.typeSpecificFunctions;
            b || this.attrs("currentDataStrategy") || (b = this.attrs());
            b && (b = b.dataStrategy ? g.getStrategyByName(b.dataStrategy) : g.guessStrategyByAttrs(b)) && (a.dataStrategy = b, this.attrs("currentDataStrategy", b.name));
            return a.dataStrategy
        };
        r.getContent = function() {
            return this.typeSpecificFunctions.getContent !== b ? this.typeSpecificFunctions.getContent.apply(this,
                arguments) : null
        };
        r.updateContent = function(a) {
            this.typeSpecificFunctions.updateContent !== b && this.typeSpecificFunctions.updateContent.apply(this, arguments);
            return this
        };
        r.setAriaBusy = function(a) {
            this.typeSpecificFunctions.setAriaBusy !== b && this.typeSpecificFunctions.setAriaBusy.apply(this, arguments);
            return this
        };
        r.ajax = function(b) {
            return this.update({
                url: b
            })
        };
        r.updateChildrenPosition = function() {
            d.each(this.children, function(b) {
                b.isActive() && b.updatePosition()
            });
            return this
        };
        r.updatePosition = function() {
            var b =
                this;
            if (-1 === b.id) d.each(b.children, function(b) {
                b.isActive() && b.updatePosition()
            });
            else {
                var a = b.$popover;
                d.capabilities.isMetroIEGuess && d.capabilities.isIETouchCapable ? a.css("opacity", .01) : a.css("visibility", "hidden");
                var h = function() {
                    var h = a.find(".a-popover-inner").css({
                            height: "auto",
                            "overflow-y": "auto"
                        }),
                        e = b.attrs("position"),
                        g = {},
                        g = b.typeSpecificFunctions.positionStrategy ? c.customPosition(b, b.typeSpecificFunctions.positionStrategy) : c[e](b);
                    f.trigger("beforeUpdatePosition", b);
                    e = {
                        top: g.top + "px",
                        left: g.left + "px"
                    };
                    d.capabilities.isMetroIEGuess && d.capabilities.isIETouchCapable ? e.opacity = 1 : e.visibility = "visible";
                    a.css(e);
                    b.isContentLoaded() && 0 === n(document.activeElement).closest(b.$popover).length && !0 === b.attrs("focusWhenShown") && b.focus();
                    if (h.length && (!h[0].style.height || "auto" === h[0].style.height)) {
                        var p = a.outerHeight() || 0,
                            t = a.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) || 0,
                            l = a.find(".a-popover-footer").outerHeight(!0) || 0,
                            e = h.outerHeight() || 0,
                            p = p - t - l;
                        e > p && h.css({
                            height: p +
                                "px",
                            "overflow-y": "scroll"
                        })
                    }
                    b.$iframe.height(a.outerHeight()).width(a.outerWidth()).css("z-index", parseInt(a.css("z-index"), 10) - 2).show().offset({
                        top: g.top,
                        left: g.left
                    });
                    f.trigger("afterUpdatePosition", b);
                    f.trigger("positionUpdated", b);
                    d.each(b.children, function(b) {
                        b.isActive() && b.updatePosition()
                    })
                };
                b.attrs("immersive") && (d.capabilities.mobile || d.capabilities.tablet) ? (a.css({
                    top: 0,
                    left: 0
                }), d.delay(function() {
                    h()
                }, 0)) : h()
            }
            return b
        };
        r.attrs = function(a, c) {
            var n = this;
            if (c === b && "object" !== typeof a) return a ?
                "string" === typeof a ? this.attributes[a] !== b ? this.attributes[a] : null : null : this.attributes;
            "object" === typeof a ? d.each(a, function(b, a) {
                n.attrs(a, b)
            }) : "string" === typeof a && (this.attributes[a] = c, n[a] = c);
            return this
        };
        r.hideChildren = function() {
            d.each(this.children, function(b) {
                b.unlock(1);
                b.hide()
            });
            return this
        };
        r.focus = function() {
            var b = this,
                a = n(x),
                c = a.scrollTop(),
                h = b.$popover.offset().top;
            p && c > h && a.scrollTop(h);
            d.delay(function() {
                b.$startAnchor.focus()
            }, 0);
            return this
        };
        return {
            PopoverClass: l
        }
    });
    "use strict";
    k.when("jQuery", "ready").register("a-changeover", function(d) {
        d(document).delegate(".a-changeover:not(.a-changeover-manual)", "webkitAnimationEnd animationend click touchstart", function(d) {
            this.style.display = "none"
        })
    });
    "use strict";
    k.when("A", "a-popover-util").register("a-popover-ajax-strategy", function(d, f) {
        var g = d.$,
            c = g("html").hasClass("a-lt-ie8");
        return {
            name: "ajax",
            reusePopover: !1,
            loadContent: function(e, h) {
                e.setContentLoading();
                var a = e.attrs("url"),
                    g = e.attrs("timeout") || 1E4,
                    b = e.attrs("ajaxFailMsg") ||
                    "Sorry, content is not available.",
                    n = !!e.attrs("cache"),
                    t = e.attrs("spinnerTimer"),
                    p = e.attrs("ajaxHandler"),
                    w = e.attrs("content");
                e.attrs("content", null);
                if (w && !h) e.updateContent(w), t && clearTimeout(t), p && p.abort && p.abort();
                else {
                    var q = function() {
                            return !e.attrs("content") && "ajax" === e.attrs("currentDataStrategy") && (e.isVisible() || e.isActive())
                        },
                        t = d.delay(function() {
                            q() && (f.showSpinner(e), e.setAriaBusy(!0))
                        }, c ? 0 : 100),
                        m = function(b, a, c) {
                            q() && (clearTimeout(t), e.setContentLoaded(), f.trigger(a, e), e.setAriaBusy(!1),
                                e.update({
                                    content: b
                                }), e.isActive() && e.updatePosition(), c && f.trigger("ajaxContentLoaded", e))
                        },
                        p = d.ajax(a, {
                            type: "GET",
                            timeout: g,
                            cache: n,
                            success: function(b) {
                                m(b, "ajaxSuccess", !0)
                            },
                            error: function() {
                                m(b, "ajaxFail", !1)
                            }
                        });
                    e.attrs({
                        spinnerTimer: t,
                        ajaxHandler: p
                    })
                }
                return this
            },
            unloadContent: function(c) {
                f.clearContent(c);
                return this
            },
            shouldRefreshContent: function(c) {
                return !c.attrs("manualRefresh")
            },
            isValidStrategy: function(c) {
                return !!c.url
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-util").register("a-popover-inline-strategy",
        function(d, f) {
            return {
                name: "inline",
                reusePopover: !1,
                loadContent: function(d) {
                    d.setContentLoading();
                    var c = d.attrs("content");
                    c && d.attrs("content", null);
                    if (!c) var c = d.$trigger,
                        e = c.data("action"),
                        c = c.data(e) || {},
                        c = c.inlineContent ? c.inlineContent : null;
                    c || (c = d.attrs("inlineContent"));
                    d.updateContent(c);
                    d.setContentLoaded();
                    return this
                },
                unloadContent: function(d) {
                    var c = d.getContent(),
                        c = c && 0 < c.length ? c.html() : d.attrs("inlineContent"),
                        e = d.$trigger,
                        h = e.data("action"),
                        a = e.data(h) || {};
                    a.inlineContent = c;
                    e.data(h,
                        a);
                    f.clearContent(d);
                    return this
                },
                shouldRefreshContent: function(d) {
                    return d.isDirty()
                },
                isValidStrategy: function(d) {
                    return !0
                }
            }
        });
    "use strict";
    k.when("A", "a-popover-util").register("a-popover-preload-strategy", function(d, f) {
        var g = d.$;
        return {
            name: "preload",
            reusePopover: !0,
            loadContent: function(c) {
                c.setContentLoading();
                var d = c.attrs("name"),
                    h = c.attrs("content");
                c.attrs("content", null);
                var a;
                a = g("#a-popover-" + d);
                a.detach();
                if (a.length) {
                    a = a[0];
                    for (var l = document.createDocumentFragment(); a.firstChild;) l.appendChild(a.firstChild);
                    a = l
                } else a = !1;
                h ? c.updateContent(h) : d && c.updateContent(a);
                c.setContentLoaded();
                return this
            },
            unloadContent: function(c) {
                var e = c.attrs("name");
                if (e) {
                    var h = c.getContent();
                    if (h && h.html()) {
                        var e = "a-popover-" + e,
                            a = g("#" + e);
                        a.length ? a = a[0] : (a = document.createElement("div"), a.id = e, a.className = "a-popover-preload", document.body.appendChild(a));
                        e = a;
                        if (!d.trim(e.innerHTML))
                            if (h = h[0], "string" === typeof h) g(e).html(h);
                            else {
                                for (a = document.createDocumentFragment(); h.firstChild;) a.appendChild(h.firstChild);
                                e.appendChild(a)
                            }
                        f.clearContent(c)
                    }
                }
                return this
            },
            shouldRefreshContent: function(c) {
                c = (c = c.attrs("name")) ? g("#a-popover-" + c) : null;
                return !(!c || !c.length || "" === c.html())
            },
            isValidStrategy: function(c) {
                return c.name ? "preload" === c.currentDataStrategy ? !0 : !!g("#a-popover-" + c.name).length : !1
            }
        }
    });
    "use strict";
    k.when("A").register("a-dropdown-base-positions", function(d) {
        return {
            positionStrategy: function(f) {
                var g = f.$popover,
                    c = f.$trigger,
                    e = f.measure;
                f = g.find(".a-popover-inner");
                f.css({
                    "min-width": "0px",
                    width: "auto",
                    height: "auto"
                });
                var h = c.closest(".a-button-dropdown");
                h.length || (h = c.closest(".a-button-group"));
                var c = e(g, h),
                    e = c.windowWidth - (c.triggerLeft + c.popoverWidth),
                    h = c.windowWidth - c.triggerLeft - c.triggerWidth,
                    a = c.triggerLeft,
                    l = {},
                    b = c.triggerTop - c.windowTop,
                    n = c.windowBottom - c.triggerBottom,
                    t = g.find(".a-popover-inner");
                b > n && n < c.popoverHeight ? (n = b, l.top = b < c.popoverHeight ? c.triggerBottom - b : c.triggerBottom - c.popoverHeight) : l.top = c.triggerTop;
                t.css("height", n < c.popoverHeight ? n - c.headerHeight + "px" : "auto");
                c.popoverHeight > n ? t.addClass("a-lgtbox-vertical-scroll") : t.removeClass("a-lgtbox-vertical-scroll");
                f.hasClass("a-lgtbox-vertical-scroll") && -1 < navigator.appVersion.indexOf("Windows") ? (b = Math.max(c.popoverWidth, c.triggerWidth) + d.scrollBarWidth(!0), f.width(b)) : f.css("min-width", c.triggerWidth + "px");
                c.popoverWidth = g.width();
                l.left = 50 > e && a > h ? c.triggerRight - c.popoverWidth : c.triggerLeft;
                return l
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-base-positions").register("a-dropdown-base-view-base", function(d, f) {
        return d.extend(f, {
            updateContent: function(d) {
                "string" === typeof d ? this.$popover.find(".a-popover-inner").html(d) :
                    d && this.$popover.find(".a-popover-inner").html("").append(d)
            },
            beforeShowMethod: function() {
                this.parent.lock(1);
                this.$trigger.attr("aria-pressed", !0)
            },
            afterShowMethod: function() {
                var g = this.$popover,
                    c = g.find(".a-active");
                d.delay(function() {
                    c.length ? c.closest("li").focus() : c = g.find("li").first().focus()
                }, 0)
            },
            beforeHideMethod: function() {
                this.parent.unlock(1)
            },
            afterHideMethod: function() {
                this.$trigger.attr("aria-pressed", !1);
                this.$popover.css("width", "auto")
            }
        })
    });
    "use strict";
    k.when("A", "a-dropdown-base-view-base").register("a-dropdown-base-view",
        function(d, f) {
            return f
        });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-dropdown-base-view").register("a-dropdown-base-factory", function(d, f, g) {
        function c(b, c, h) {
            var e = ['\x3cli tabindex\x3d"0" role\x3d"option"'],
                g = b.data("aCssClass"),
                l = b.data("aId"),
                f = b.data("aHtmlContent"),
                k = b.data("aImageSource"),
                r = JSON.stringify({
                    stringVal: b.val()
                }),
                r = ['\x3ca tabindex\x3d"-1" href\x3d"javascript:void(0)" data-value\x3d"', d.escapeHtml(r), '"'],
                v = ["a-dropdown-link"],
                z = ["a-dropdown-item"];
            c && (v.push("a-active"),
                e.push(' aria-checked\x3d"true"'));
            a && (d.capabilities.mobile || d.capabilities.tablet) && v.push("a-list-link-after-group");
            a = !1;
            g && z.push(g);
            l && e.push(' id\x3d"' + l + '"');
            e.push('aria-labelledby\x3d"');
            e.push(h);
            e.push('"');
            r.push(' id\x3d"');
            r.push(h);
            r.push('"');
            e.push(' class\x3d"' + z.join(" ") + '"');
            e.push("\x3e");
            f ? c = f : (c = [], k && (v.push("a-option-has-image"), c.push('\x3cimg src\x3d"' + k + '" class\x3d"a-rich-option-image" /\x3e')), c.push(b.html()), c = c.join(""));
            r.push(' class\x3d"');
            r.push(v.join(" "));
            r.push('"\x3e');
            r.push(c);
            r.push("\x3c/a\x3e");
            e.push(r.join(""));
            e.push("\x3c/li\x3e");
            return e.join("")
        }

        function e(b) {
            b.jquery || (b = h(b));
            var d = b.children("optgroup,option:not(.a-prompt)"),
                e = !1,
                g = b[0],
                f = b.attr("id") ? b.attr("id") : "dropdown" + l++,
                q, m; - 1 < g.selectedIndex && (q = g.options[g.selectedIndex].value);
            m = ['\x3cul tabindex\x3d"-1" class\x3d"a-nostyle a-list-link', b.data("a-has-images") ? " a-box-list" : "", '" role\x3d"application" aria-multiselectable\x3d"false"\x3e'];
            var k = 0;
            d.each(function() {
                var b =
                    h(this);
                b.is("optgroup") ? (b.children().each(function(b) {
                    m.push(c(h(this), q === this.value, f + "_" + k++))
                }), m.push('\x3cli tabindex\x3d"-1" class\x3d"divider"\x3e\x3chr /\x3e\x3c/li\x3e'), e = a = !0) : (m.push(c(b, q === this.value, f + "_" + k++)), e = !1)
            });
            e && m.pop();
            m.push("\x3c/ul\x3e");
            return m.join("")
        }
        var h = d.$,
            a = !1,
            l = 1;
        return d.extend({
            create: f.create,
            remove: f.remove,
            get: f.get
        }, {
            type: "dropdown",
            create: function(b, a, c) {
                var h = a.$button,
                    l = a.$sourceSelect,
                    q = l[0],
                    m = h.find(".a-dropdown-label"),
                    k = l.data("aTouchHeader");
                if (!k || !k.length && m.length) k = m.text();
                return f.create(b, {
                    attributes: {
                        type: "dropdown",
                        header: k,
                        closeButtonLabel: a.closeButtonLabel ? a.closeButtonLabel : "Close",
                        inlineContent: l,
                        position: a.position,
                        alone: !0,
                        sourceSelect: l,
                        sourceButton: h,
                        name: l[0].name,
                        preventNameReuse: !0,
                        lightboxOptions: d.capabilities.mobile || d.capabilities.tablet ? {
                            showDuration: d.capabilities.ios ? null : 0,
                            hideDuration: 0
                        } : null
                    },
                    typeSpecificFunctions: d.extend({}, g, c, {
                        skin: function(b) {
                            var a = c.subskin ? c.subskin(q) : e(q);
                            b.attrs("inlineContent",
                                a);
                            return c.skin(b)
                        }
                    }),
                    actionCheck: !1
                })
            }
        })
    });
    "use strict";
    "use strict";
    k.when("A", "a-dropdown-base-factory").register("a-dropdown-keyboard-handlers", function(d, f) {
        function g(b) {
            b.removeData("a-user-navigated-text").removeData("a-user-navigated-idx")
        }

        function c(b, a) {
            b.removeAttr("aria-selected");
            "option" === a.attr("role") && a.attr("aria-selected", "true");
            a.focus()
        }

        function e(b) {
            var a = b.parent("ul");
            b = a.find("li");
            var c = a.find(":focus");
            1 > c.length && (c = a.find('[aria-checked\x3d"true"]'));
            a = c;
            return {
                index: 0 <
                    a.length ? a.index() : 0,
                $options: b
            }
        }

        function h(b, a, c) {
            b.preventDefault();
            a.find("a").eq(0).trigger("click");
            g(c)
        }

        function a(b) {
            var a = b.data("a-user-navigated-debouncer");
            a || (a = d.debounce(function() {
                g(b)
            }, 1E3), b.data("a-user-navigated-debouncer", a));
            a()
        }
        var l = d.$,
            b = d.constants.keycodes;
        return {
            keyDown: function(a) {
                var d = l(this),
                    p = d.parent();
                switch (a.which) {
                    case b.UP_ARROW:
                        a.preventDefault();
                        g(p);
                        0 < e(d).index && c(d, d.prev());
                        break;
                    case b.DOWN_ARROW:
                        a.preventDefault();
                        g(p);
                        p = e(d);
                        a = p.index;
                        0 <= a && a + 1 < p.$options.length &&
                            c(d, d.next());
                        break;
                    case b.ENTER:
                        h(a, d, p);
                        break;
                    case b.ESCAPE:
                        a.preventDefault();
                        d = f.get(d.closest(".a-popover"));
                        d.sourceButton.find(".a-button-text").focus();
                        d.hide();
                        g(p);
                        break;
                    case b.SPACE:
                        p.data("a-user-navigated-text") || h(a, d, p);
                        break;
                    case b.TAB:
                        g(p);
                        break;
                    case b.BACKSPACE:
                        a.preventDefault()
                }
            },
            keyPress: function(c) {
                var e = l(this),
                    g = e.parent(),
                    w = f.get(e.closest(".a-popover")),
                    q = c.which;
                if (w && w.isActive() && q !== b.TAB && 0 !== q) {
                    a(g);
                    var k = g.data("a-user-navigated-idx") || 0;
                    if (!(0 > k)) {
                        w = (g.data("a-user-navigated-text") ||
                            "") + String.fromCharCode(q).toLocaleLowerCase();
                        g.data("a-user-navigated-text", w);
                        for (var u = g.children(); k < u.length; k++) {
                            var r = u.eq(k);
                            if (0 === d.trim(r.text().toLocaleLowerCase()).indexOf(w)) {
                                r.focus();
                                g.data("a-user-navigated-idx", k);
                                return
                            }
                        }
                        g.data("a-user-navigated-idx", -1);
                        q === b.SPACE && h(c, e, g)
                    }
                }
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-select-apis", "a-dropdown-base-factory", "a-popover-base").register("a-dropdown-base", function(d, f, g, c) {
        function e(c, h, e) {
            try {
                c.$event.preventDefault()
            } catch (f) {}
            d.delay(function() {
                var f =
                    h.$button ? h.$button : h.getButtonFromEvent(c),
                    k = h.$select ? h.$select : h.getSelectFromEvent(c);
                if (!f.hasClass("a-button-disabled")) {
                    l(k, h).isSynced() || a(b.extend({
                        $button: f,
                        $select: k
                    }, h));
                    var m = c.$declarativeParent,
                        k = d.extend({}, h, {
                            $button: f,
                            $sourceSelect: k
                        }),
                        u = g.create(m, k, e);
                    if (u && (u.show(), f.data("a-popover-id", u.id).data("popover", u).data("isPressed", !0), !u.hasOnLoad)) {
                        u.hasOnLoad = !0;
                        var r = [],
                            f = u.$popover.find("img");
                        f.length && (f.each(function(a, c) {
                            if (!c.complete || !c.naturalWidth) {
                                var d = b.Deferred();
                                r.push(d);
                                b(c).bind("load error", function() {
                                    d.resolve()
                                })
                            }
                        }), r.length ? b.when.apply(b, r).done(function() {
                            u.updatePosition()
                        }) : u.updatePosition())
                    }
                }
            })
        }

        function h(b) {
            var a = b.$button;
            b = b.$select;
            a || (a = b.nextAll(".a-button-dropdown"));
            return b.length ? ((a = g.get(a)) && a.hide(), !0) : !1
        }

        function a(b) {
            var a = b.$button;
            b = b.$select;
            a || (a = b.nextAll(".a-button-dropdown"));
            return b.length ? ((a = g.get(a)) && g.remove(a.id), b.data("a-info", null), !0) : !1
        }

        function l(c, e) {
            var g;
            c = e.$select ? e.$select : "string" === typeof c ? b("select#" +
                c) : c.jquery ? c : b(c);
            if (!c.length) return null;
            g = e.$button ? e.$button : e.getButtonFromSelect(c);
            c.data("a-select") ? e = c.data("a-select") : (e = d.extend({
                hidePopover: h,
                refreshPopover: a,
                options: d.extend({
                    $select: c,
                    $button: g
                }, e)
            }, f), c.data("a-select", e));
            return e
        }
        var b = d.$;
        return {
            toggleDropdown: function(b, a) {
                var c = (a.$button ? a.$button : a.getButtonFromEvent(b)).data("popover");
                c && c.$popover.is(":visible") ? c.hide() : e(b, a)
            },
            showDropdown: e,
            getSelect: l
        }
    });
    "use strict";
    k.when("A", "jQuery").register("a-dropdown-options-apis",
        function(d, f) {
            return {
                update: function(d) {
                    "object" !== typeof d && k.error("input of options.update() function must be a hash");
                    this.hidePopover(this.options);
                    for (var c = 0, e = this.size(); c < e; c++) {
                        var h = this.options.elements[c],
                            a = h[0];
                        d.value && h.val(d.value);
                        void 0 !== d.selected && (!a.selected && d.selected ? this.options.$select.val(a.value) : a.selected && !d.selected && this.options.$select.val(""));
                        d.html_content && h.data("a-html-content", d.html_content);
                        d.image_source && h.data("a-image-source", d.image_source);
                        d.native_css_class &&
                            (a.className = d.native_css_class);
                        d.css_class && h.data("a-css-class", d.css_class);
                        d.native_id && (a.id = d.native_id);
                        d.id && h.data("a-id", d.id);
                        d.text && (h.text(d.text), a.selected && this.setSelectValue(a.value))
                    }
                    this.refreshPopover(this.options);
                    return this
                },
                remove: function() {
                    this.hidePopover(this.options);
                    for (var d = 0, c = this.size(); d < c; d++) {
                        var e = this.options.elements[d];
                        e.is(":selected") && this.setSelectValue("");
                        e.remove()
                    }
                    this.refreshPopover(this.options);
                    return !0
                },
                info: function() {
                    for (var d = [], c = 0, e = this.size(); c <
                        e; c++) {
                        var h = this.options.elements[c];
                        d.push({
                            value: h[0].value,
                            text: h.text(),
                            selected: h[0].selected,
                            html_content: h.data("a-html-content"),
                            image_source: h.data("a-image-source"),
                            native_css_class: h[0].className,
                            css_class: h.data("a-css-class"),
                            native_id: h[0].id,
                            id: h.data("a-id")
                        })
                    }
                    return d
                },
                size: function() {
                    return this.options.elements.length
                }
            }
        });
    "use strict";
    k.when("A", "jQuery", "a-dropdown-options-apis").register("a-dropdown-select-apis", function(d, f, g) {
        function c(a) {
            var c = this.options.$select,
                b = this.options.$button,
                d = c[0];
            "number" === typeof a && (a = a.toString());
            for (var e = 0, g = d.options.length; e < g && d.options[e].value !== a; e++);
            e === g && "" === a && (e = 0);
            e < g && (b.find(".a-dropdown-prompt").html(d.options[e].innerHTML), b.css("min-width", e / d.options.length + "%"), c.val() !== a && (c.val(a), c.trigger("change", [h, !0])));
            return this
        }

        function e(a) {
            if (a === h) return this.options.$select.val();
            this.setValue = c;
            return this.setValue(a)
        }
        var h;
        return {
            isSynced: function() {
                var a = this.options.$select,
                    c = a.data("a-info"),
                    b = this.getOptions().info();
                a.data("a-info", b);
                return c ? d.equals(c, b) : !0
            },
            update: function(a) {
                "object" !== typeof a && k.error("input of select.update() function must be an object");
                this.hidePopover(this.options);
                var c = {
                        none: !0,
                        micro: !0,
                        mini: !0,
                        small: !0,
                        base: !0,
                        medium: !0,
                        large: !0,
                        "extra-large": !0,
                        "double-large": !0,
                        block: !0
                    },
                    b = this.options.$select,
                    d = b[0],
                    e = this.options.$button,
                    g = e[0],
                    w = b.siblings("label");
                a.name && (d.name = a.name);
                if (a.option_prompt) {
                    var q = b.find(".a-prompt");
                    q.length ? (q.text(a.option_prompt), q.prop("selected") && e.find(".a-dropdown-prompt").text(a.option_prompt)) :
                        (b.prepend(f("\x3coption class\x3d'a-prompt' /\x3e").text(a.option_prompt)), e.find(".a-dropdown-prompt").text(a.option_prompt))
                }
                a.has_images !== h && b.data("a-has-images", !!a.has_images);
                a.button_size !== h && e.length && ("small" === a.button_size ? e.addClass("a-button-small") : e.removeClass("a-button-small"));
                a.spacing !== h && c.hasOwnProperty(a.spacing) && (c = /\ba-spacing-[a-z]+\b/g, d.className = d.className.replace(c, ""), g.className = g.className.replace(c, ""), b.addClass("a-spacing-" + a.spacing), e.addClass("a-spacing-" +
                    a.spacing));
                a.grid_units !== h && (c = /\ba-button-span\d{1,2}\b/g, d.className = d.className.replace(c, ""), g.className = g.className.replace(c, ""), isFinite(a.grid_units) && 0 < a.grid_units && 13 > a.grid_units && (b.addClass("a-button-span" + a.grid_units), e.addClass("a-button-span" + a.grid_units)));
                a.width_name && ("base" === a.width_named ? e.addClass("a-button-width-normal") : e.removeClass("a-button-width-normal"));
                if (a.status) {
                    var m = a.status,
                        c = e.closest(".a-dropdown-container, .a-splitdropdown-container").find(".a-button"),
                        q = "error" === m,
                        m = "disabled" === m;
                    d.disabled = m;
                    c.toggleClass("a-button-disabled", m);
                    m ? c.attr("aria-disabled", "true") : c.removeAttr("aria-disabled");
                    c.toggleClass("a-button-error", q)
                }
                a.native_id && (d.id = a.native_id, w.length && (w[0].htmlFor = a.native_id));
                a.id && (g.id = a.id);
                a.native_css_class && ((g = b.data("a-native-class")) && b.removeClass(g), b.addClass(a.native_css_class).data("a-native-class", a.native_css_class));
                a.css_class && ((g = e.data("a-class")) && e.removeClass(g), e.addClass(a.css_class).data("a-class", a.css_class));
                a.label_text !== h && ("" === a.label_text ? (e.find(".a-dropdown-label").remove(), b.siblings("label").remove()) : (g = e.find(".a-dropdown-label"), g.length ? g.text(a.label_text) : e.find(".a-dropdown-prompt").before(f("\x3cspan class\x3d'a-dropdown-label' /\x3e").text(a.label_text)), w.length ? w.text(a.label_text) : b.before(f("\x3clabel for\x3d'" + d.id + "' class\x3d'a-native-dropdown' /\x3e").text(a.label_text))), e.css("min-width", "" === a.label_text ? "0.1%" : "0%"));
                this.refreshPopover(this.options);
                return this
            },
            setValue: c,
            val: e,
            getOptions: function(a) {
                var c = this.options.$select,
                    b = [];
                a = a === h ? c.children("optgroup, option:not(.a-prompt)") : f.isArray(a) ? a : [a];
                for (var n = 0, t = a.length; n < t; n++) {
                    var p = a[n],
                        k = [];
                    d.isFiniteNumber(p) ? k = c.children("optgroup, option:not(.a-prompt)").eq(p) : "string" === typeof p ? k = c.children("option#" + p) : "object" === typeof p && (k = p.jquery ? p : f(p));
                    k.length && b.push(k)
                }
                return d.extend({
                        hidePopover: this.hidePopover,
                        refreshPopover: this.refreshPopover,
                        setSelectValue: e,
                        options: d.extend({
                            elements: b
                        }, this.options)
                    },
                    g)
            },
            getOption: function(a) {
                return this.getOptions(a)
            },
            addOptions: function(a, c) {
                f.isArray(a) || (a = [a]);
                for (var b = a.length; b--;) this.addOption(a[b], c);
                return this
            },
            addOption: function(a, c) {
                var b = this.options.$select;
                if (!a.native_id || !b.find("option#" + a.native_id).length) {
                    var d = b.children("optgroup, option:not(.a-prompt)"),
                        e = document.createElement("option");
                    c = c && 0 < c && c <= d.length ? c : 0;
                    a.native_id && (e.id = a.native_id);
                    0 === d.length || c === d.length ? b[0].appendChild(e) : d.eq(c).before(e);
                    this.getOption(e).update(a)
                }
                return this
            },
            removeOptions: function(a) {
                this.getOptions(a).remove();
                return this
            },
            removeOption: function(a) {
                return this.removeOptions(a)
            },
            appendOption: function(a) {
                return this.addOption(a, this.options.$select.children("optgroup, option:not(.a-prompt)").length)
            },
            appendOptions: function(a) {
                if (f.isArray(a))
                    for (var c = 0, b = a.length; c < b; c++) this.addOption(a[c]);
                return this
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-options", "a-dropdown-apis", "a-dropdown-keyboard-handlers").register("a-dropdown", function(d, f, g, c) {
        var e = d.$;
        c =
            e(document);
        c.delegate(".a-native-dropdown", "change", function(c, a, l) {
            var b = f.getButtonFromEvent(c),
                n = "",
                t = -1 < this.selectedIndex ? this.options[this.selectedIndex].value : "",
                p = b.data("popover");
            c = !1;
            var k;
            if (b.length) {
                for (var b = b.eq(0), q = this.length; q--;)
                    if (k = this.options[q], k.value === t) {
                        n = k.innerHTML;
                        break
                    }
                p && p.$popover && (p.$popover.find(".a-active").removeClass("a-active").closest("li").attr("aria-checked", !1), void 0 === a && (a = JSON.stringify({
                    stringVal: t
                }), a = p.$popover.find('a[data-value\x3d"' + d.escapeJquerySelector(a) +
                    '"]')));
                a && a.length && (c = !0, a.addClass("a-active").closest("li").attr("aria-checked", !0));
                b.find(".a-dropdown-prompt").html(n);
                b.css("min-width", this.selectedIndex / this.options.length + "%");
                p && (p.hide(), (b = g.getSelect(this)) && e(this).data("a-info", b.getOptions().info()));
                l || (l = this.name, b = this.id, a = {
                    auiItemNode: c ? a[0] : null,
                    nativeItemNode: this.options[this.selectedIndex],
                    selectNode: this,
                    id: b,
                    name: l,
                    value: this.value
                }, l && "" !== l && (d.trigger("a:dropdown:" + l + ":select", a), d.trigger("a:dropdown:selected:" +
                    l, a)), b && "" !== b && d.trigger("a:dropdown:" + b + ":select", a), d.trigger("a:dropdown:select", a))
            }
        });
        c.delegate(".a-button-dropdown:not(.a-button-disabled)", "focusin", function() {
            e(this).find(".a-button-text").focus()
        });
        return g
    });
    "use strict";
    k.when("A", "a-dropdown-base", "a-dropdown-options").register("a-dropdown-apis", function(d, f, g) {
        function c(c) {
            return f.getSelect(c, g)
        }
        var e = d.$;
        d.on("beforeReady", function() {
            e(".a-dropdown-container select").each(function() {
                var d = c(this);
                d && d.val(d.val())
            })
        });
        return {
            getSelect: c,
            updateOption: function(d, a) {
                var g = e("option#" + d).closest("select");
                c(g).getOption(d).update(a)
            },
            updateSelect: function(d, a) {
                c(d).update(a)
            },
            setValue: function(d, a) {
                c(d).setValue(a)
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-accessibility").register("a-dropdown-view", function(d, f) {
        return {
            skin: function(d) {
                var c = d.attrs("header") || "";
                d = {
                    id: d.id,
                    header_str: c,
                    needs_declarative: !1
                };
                return ['\x3cdiv class\x3d"a-popover a-dropdown a-dropdown-common a-declarative" data-action\x3d"a-popover-a11y"\x3e', f.getStartAnchorHtml(d),
                    '\x3cdiv class\x3d"a-popover-wrapper"\x3e\x3cdiv class\x3d"a-popover-inner"\x3e\x3c/div\x3e\x3c/div\x3e', f.getEndAnchorHtml(d), "\x3c/div\x3e"
                ].join("")
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-base", "a-dropdown-view", "a-dropdown-options", "a-dropdown-apis", "a-dropdown-base-factory", "a-dropdown-keyboard-handlers").register("a-dropdown-handlers", function(d, f, g, c, e, h, a) {
        var l = d.$;
        e = l(document);
        d.declarative("a-dropdown-button", "click", function(b) {
            var a = c.getButtonFromEvent(b);
            f.showDropdown(b, d.extend({
                    $button: a
                },
                c), g)
        });
        d.declarative("a-dropdown-button", "keydown", function(b) {
            var a = c.getButtonFromEvent(b),
                e = d.constants.keycodes,
                h = b.$event.which;
            h !== e.DOWN_ARROW && h !== e.ENTER && h !== e.SPACE || f.showDropdown(b, d.extend({
                $button: a
            }, c), g)
        });
        e.delegate(".a-popover.a-dropdown a", "click", function(b) {
            b.preventDefault();
            b = l(this);
            var a = h.get(b.closest(".a-popover"));
            if (b.hasClass("a-active")) a.hide();
            else {
                var c = b.data("value").stringVal;
                a.sourceSelect.val(c).trigger("change", [b])
            }
        });
        a && (a.keyDown && e.delegate(".a-dropdown li",
            "keydown", a.keyDown), a.keyPress && e.delegate(".a-dropdown li", "keypress", a.keyPress))
    });
    "use strict";
    k.when("A").register("a-dropdown-options", function(d) {
        function f(c) {
            return c.popover ? c.popover.$trigger.closest(".a-button-dropdown") : c.$target ? c.$target.closest(".a-button-dropdown") : g(c.target).nextAll(".a-button-dropdown")
        }
        var g = d.$;
        return {
            getButtonFromEvent: f,
            getButtonFromSelect: function(c) {
                return c.nextAll(".a-button-dropdown")
            },
            getSelectFromEvent: function(c) {
                c = f(c).prevAll("select").eq(0);
                c.length ||
                    k.error("Cannot locate the \x3cselect\x3e of dropdown");
                return c
            },
            triggerSelector: ".a-button-dropdown"
        }
    });
    "use strict";
    k.when("A", "a-popover-accessibility").register("a-dropdown-split-view", function(d, f) {
        return {
            skin: function(d) {
                var c = d.attrs("header") || "";
                d = {
                    id: d.id,
                    label_str: c,
                    needs_declarative: !1
                };
                return ['\x3cdiv class\x3d"a-popover a-splitdropdown a-dropdown-common a-declarative" data-action\x3d"a-popover-a11y"\x3e', f.getStartAnchorHtml(d), '\x3cdiv class\x3d"a-popover-wrapper"\x3e\n\x3cdiv class\x3d"a-popover-inner"\x3e\x3c/div\x3e\n\x3c/div\x3e',
                    f.getEndAnchorHtml(d), "\x3c/div\x3e"
                ].join("\n")
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-base", "a-dropdown-split-utils", "a-dropdown-split-view", "a-dropdown-split-options", "a-dropdown-base-factory", "a-dropdown-keyboard-handlers").register("a-dropdown-split-handlers", function(d, f, g, c, e, h, a) {
        var l = d.$;
        d.declarative("a-splitdropdown-button", "click", function(b) {
            var a = e.getButtonFromEvent(b);
            f.showDropdown(b, d.extend({
                $button: a
            }, e), c)
        });
        d.declarative("a-splitdropdown-main", "click", function(b) {
            var a = b.$target.closest(".a-splitdropdown-container").find("select"),
                c = a.attr("id"),
                d = a.val();
            g.triggerEvent(c, a, d);
            b.$event.preventDefault()
        });
        d.declarative("a-splitdropdown-button", "keydown", function(b) {
            var a = e.getButtonFromEvent(b),
                h = d.constants.keycodes,
                g = b.$event.which;
            g !== h.DOWN_ARROW && g !== h.ENTER && g !== h.SPACE || f.showDropdown(b, l.extend({
                $button: a
            }, e), c)
        });
        l(document).delegate(".a-popover.a-splitdropdown a", "click", function(b) {
            var a = l(this),
                c = a.data("value").stringVal,
                a = h.get(a.closest(".a-popover")),
                d = a.sourceSelect,
                e = d.attr("id");
            a.hide();
            g.triggerEvent(e,
                d, c);
            b.preventDefault()
        }).delegate(".a-splitdropdown li", "keydown", a.keyDown).delegate(".a-splitdropdown li", "keypress", a.keyPress)
    });
    "use strict";
    k.when("A").register("a-dropdown-split-options", function(d) {
        function f(c) {
            return c.popover ? c.popover.$trigger.closest(".a-button-splitdropdown") : c.$target ? c.$target.closest(".a-button-splitdropdown") : g(c.target).nextAll(".a-button-splitdropdown")
        }
        var g = d.$;
        return {
            getButtonFromEvent: f,
            getButtonFromSelect: function(c) {
                return c.next(".a-button-group-splitdropdown").find(".a-button-splitdropdown")
            },
            getSelectFromEvent: function(c) {
                c = f(c).closest(".a-splitdropdown-container").find("select");
                c.length || k.error("cannot locate the \x3cselect\x3e of the split dropdown");
                return c
            }
        }
    });
    "use strict";
    k.when("A").register("a-dropdown-split-utils", function(d) {
        return {
            triggerEvent: function(f, g, c) {
                g = {
                    $select: g,
                    value: c,
                    id: f
                };
                d.trigger("a:splitdropdown:" + f + ":select", g);
                d.trigger("a:splitdropdown:select", g)
            }
        }
    });
    "use strict";
    k.when("A", "a-dropdown-base", "a-dropdown-split-options", "a-dropdown-split-utils", "a-dropdown-split-handlers").register("a-splitdropdown",
        function(d, f, g, c, e) {
            var h = d.$;
            h(document).delegate(".a-native-splitdropdown", "change", function(a, d, b) {
                a = h(this);
                d = a.val();
                var e = a.attr("id");
                b || c.triggerEvent(e, a, d)
            }).delegate(".a-button-splitdropdown:not(.a-button-disabled)", "focusin", function() {
                h(this).find(".a-button-text").focus()
            });
            return {
                getSelect: function(a) {
                    return f.getSelect(a, g)
                }
            }
        });
    "use strict";
    k.when("A", "a-popover-accessibility-templates").register("a-popover-accessibility", function(d, f) {
        var g = f.startAnchorTemplate,
            c = f.startAnchorDeclarativeTemplate,
            e = f.endAnchorTemplate,
            h = f.descriptionTemplate,
            a = function(b, a) {
                var c = {
                    "{{DESCRIPTION}}": a,
                    "{{DESCRIPTION_ID}}": b
                };
                return h.replace(/\{\{[\w_]*\}\}/g, function(b) {
                    return c[b]
                })
            },
            l = function(b) {
                var a = b.id,
                    c = b.header_str;
                return (b = b.label_str) ? 'aria-label\x3d"' + b + '"' : c ? 'aria-labelledby\x3d"a-popover-header-' + a + '"' : ""
            };
        return {
            getStartAnchorHtml: function(b) {
                var e = b.id,
                    h = b.label_str,
                    f = b.aria_description,
                    k = "";
                if (!e) return "";
                var q = {
                    "{{ROLE}}": 'role\x3d"dialog"',
                    "{{ANCHOR_NAME}}": "a-popover-start",
                    "{{ARIA_LABEL}}": l(b),
                    "{{LABEL_STR}}": h || "",
                    "{{ARIA_DESCRIBEDBY}}": ""
                };
                b = b.needs_declarative ? c : g;
                f && !d.capabilities.ios && (e = "a-popover-aria-description-" + e, q["{{ARIA_DESCRIBEDBY}}"] = 'aria-describedby\x3d"' + e + '"', k = a(e, f));
                d.capabilities.ios && (q["{{ROLE}}"] = "");
                b = b.replace(/\{\{[\w_]*\}\}/g, function(b) {
                    return q[b]
                }) + k;
                d.capabilities.ios && (b = b.replace(/span/g, "button"));
                return b.replace(/\s\s>|\s>/g, "\x3e")
            },
            getEndAnchorHtml: function(b) {
                b = e;
                d.capabilities.ios && (b = b.replace(/span/g, "button"));
                return b
            }
        }
    });
    "use strict";
    k.declare("a-popover-accessibility-templates", {
        startAnchorTemplate: '\x3cspan tabindex\x3d"0" role\x3d"dialog" class\x3d"{{ANCHOR_NAME}} a-popover-a11y-offscreen" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}\x3e\x3c/span\x3e',
        startAnchorDeclarativeTemplate: '\x3cspan tabindex\x3d"0" role\x3d"dialog" data-action\x3d"a-popover-a11y" class\x3d"{{ANCHOR_NAME}} a-popover-a11y-offscreen a-declarative" {{ARIA_LABEL}} {{ARIA_DESCRIBEDBY}}\x3e{{LABEL_STR}}\x3c/span\x3e',
        endAnchorTemplate: '\x3cspan tabindex\x3d"0" class\x3d"a-popover-end a-popover-a11y-offscreen"\x3e\x3c/span\x3e',
        descriptionTemplate: '\x3cspan id\x3d"{{DESCRIPTION_ID}}" class\x3d"a-popover-a11y-offscreen"\x3e{{DESCRIPTION}}\x3c/span\x3e'
    });
    "use strict";
    k.when("A", "a-popover-util").register("a-popover-ajax", function(d, f) {
        return {
            update: function(d, c, e) {
                var h = {};
                h.url = c;
                e.timeout && (h.timeout = e.timeout);
                e.ajaxFailMsg && (h.ajaxFailMsg = e.ajaxFailMsg);
                e.cache && (h.cache = e.cache);
                d.update(h)
            },
            showSpinner: function(d) {
                return f.showSpinner(d)
            }
        }
    });
    "use strict";
    k.when("A").register("a-popover-animate", function(d) {
        function f(c,
            e) {
            return function() {
                d[c].apply(d, e)
            }
        }

        function g(c, d) {
            return function() {
                c._isAnimating = !1;
                d && d()
            }
        }
        return {
            isAnimating: function(c) {
                return c._isAnimating
            },
            animate: function(c, e, h, a, l) {
                c._isAnimating = 0 < h;
                d.animationFrameDelay(f("animate", [c.$popover, e, h, a, g(c, l)]))
            },
            fadeOut: function(c, e, h, a) {
                c._isAnimating = 0 < e;
                d.animationFrameDelay(f("fadeOut", [c.$popover, e, h, g(c, a)]))
            },
            fadeIn: function(c, e, h, a) {
                c._isAnimating = 0 < e;
                d.animationFrameDelay(f("fadeIn", [c.$popover, e, h, g(c, a)]))
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-util",
        "a-popover-inline-strategy", "a-popover-preload-strategy", "a-popover-ajax-strategy").register("a-popover-data", function(d, f, g, c, e) {
        var h = [e, c, g];
        return {
            guessStrategyByAttrs: function(a) {
                for (var c = 0, b = h.length; c < b; c++) {
                    var d = h[c];
                    if (d.isValidStrategy(a)) return d
                }
            },
            getStrategyByName: function(a) {
                for (var c = 0, b = h.length; c < b; c++) {
                    var d = h[c];
                    if (d.name === a) return d
                }
                return null
            },
            showSpinner: f.showSpinner
        }
    });
    "use strict";
    k.when("jQuery").register("a-popover-iframes", function(d) {
        return {
            get: function() {
                return d()
            },
            release: function() {}
        }
    });
    "use strict";
    k.when("A", "a-popover-lightbox-markup", "a-timing-analytics", "ready").register("a-popover-lightbox", function(d, f, g) {
        function c(b) {
            b.preventDefault();
            b.stopPropagation();
            b.stopImmediatePropagation();
            return !1
        }

        function e() {
            r.unbind("click", c);
            u = !1
        }

        function h(b) {
            var h = a(x); - 1 < z || !v || (b = b || {}, r.bind("click", c), u = !0, "number" !== typeof b.hideDuration && (b.hideDuration = 250), 0 < b.hideDuration ? d.fadeOut(v, b.duration, "linear", function() {
                b.lockScroll && (a("html, body").css("overflow",
                    ""), a("body").css("margin-right", ""), d.delay(function() {
                    0 < A && (h.scrollTop(A), A = -1);
                    0 < B && (h.scrollLeft(B), B = -1)
                }, 100));
                y = null
            }) : (v.css("display", "none"), b.lockScroll && (a("html, body").css("overflow", ""), a("body").css("margin-right", ""), 0 < A && (h.scrollTop(A), A = -1)), y = null), v.css({
                height: "",
                width: ""
            }), d.delay(e, b.hideDuration + 350), a("#a-page").removeAttr("aria-hidden"))
        }
        var a = d.$,
            l = document.documentElement.className,
            b = -1 < l.indexOf("-ie"),
            n = -1 < l.indexOf("a-lt-ie7"),
            k = d.capabilities.isIE10Plus && d.capabilities.mobile,
            p = 0 === (d.capabilities.androidVersion + "").indexOf("4."),
            w = d.capabilities.isUCBrowser,
            q = f.id,
            m = f.div,
            u = !1,
            r = a("body"),
            v = null,
            z = -1,
            A = -1,
            B = -1,
            y = null;
        a(document).delegate("#" + q, "click " + d.action.start + " " + d.action.move, function(b) {
            b.preventDefault()
        });
        d.declarative("a-popover-floating-close", d.capabilities.touch ? d.action.end : "click", function(b) {
            !u && b.$target.data("action") && -1 < b.$target.data("action").indexOf("a-popover-floating-close") && (y && y.isActive() ? (y.unlock().hide(), b.$event.preventDefault()) : h())
        });
        if (d.capabilities.isiOS8) d.on("a:popover:afterUpdatePosition", function(b) {
            b = b.popover;
            var c = a("#" + q),
                d = c.length ? c.offset().top : -1,
                e = a(x),
                h, g;
            b.isActive() && b.attrs("lightboxOptions") && d && (h = 0, g = setInterval(function() {
                e.scrollTop(d);
                5 < ++h && clearInterval(g)
            }, 200))
        });
        g.stopWidgetLogging("dropdown");
        return {
            show: function(h) {
                a("#a-page").attr("aria-hidden", "true");
                var g = a(x);
                v || (a("body").append(m), v = a("#" + q));
                h = h || {};
                r.bind("click", c);
                u = !0;
                h.lockScroll && (-1 === A && (A = g.scrollTop(), B = g.scrollLeft()), d.setCssImportant(a("body"),
                    "margin-right", d.scrollBarWidth() + "px"), k || (b ? a("html, body").css("overflow", "hidden") : a("body").css("overflow", "hidden")));
                var f = (y = h.popover || null) ? y.$popover.css("z-index") - 2 : -1;
                0 < f && (v.css("z-index", f), p && g.width());
                "number" !== typeof h.showDuration && (h.showDuration = 200);
                n && (-1 < A && v.css("top", A + "px"), -1 < B && v.css("left", B + "px"));
                w && y.$popover.css("overflow", "auto");
                0 < h.showDuration ? d.fadeIn(v, h.showDuration) : v.css("display", "block");
                d.delay(e, h.showDuration + 300)
            },
            hide: h,
            lock: function(b) {
                b || (b = 10);
                z < b && (z = b)
            },
            unlock: function(b) {
                b || (b = 10);
                z <= b && (z = -1)
            },
            LIGHTBOX_ID: q
        }
    });
    k.declare("a-popover-lightbox-markup", {
        id: "a-popover-lgtbox",
        div: '\x3cdiv id\x3d"a-popover-lgtbox" class\x3d"a-declarative" data-action\x3d"a-popover-floating-close" /\x3e'
    });
    "use strict";
    k.when("A", "ready").register("a-popover-navigate", function(d) {
        function f(b) {
            "string" === typeof b && (h = !0, x.location.hash = b);
            return x.location.hash || ""
        }
        var g = d.$,
            g = g(x),
            c = [],
            e = [],
            h = !1,
            a = {},
            l = !1;
        e.push(f());
        g.bind("hashchange", function(b) {
            b.preventDefault();
            l ? l = !1 : e.push(f());
            32 <= e.length && e.shift();
            h ? h = !1 : d.trigger("a:popover:navigate", a[e[e.length - 1]])
        });
        d.on("a:popover:navigate", function(b) {
            b ? b.show({
                preventNavigate: !0
            }) : (b = 0 <= c.length - 1 ? c[c.length - 1] : null) && b.unlock().hide({
                preventNavigate: !0
            })
        });
        d.on("a:popover:showNavigable a:popover:showNavigableLegacy", function(b) {
            c.push(b.popover)
        });
        d.on("a:popover:hideNavigable a:popover:hideNavigableLegacy", function(b) {
            c.pop()
        });
        return {
            forward: function(b) {
                var c = b.name + "_" + d.now();
                a["#" + c] = b;
                f(c)
            },
            back: function() {
                0 <
                    e.length && e.pop();
                l = !0;
                x.history.back()
            }
        }
    });
    "use strict";
    k.when("A").register("a-popover-position", function(d) {
        function f(b, c) {
            var e = d.viewport(),
                g;
            1 === d.viewport().zoom ? g = {
                top: 0,
                left: 0
            } : (a || (a = h('\x3cspan id\x3d"a-popover-offset-tracker"\x3e\x3c/span\x3e'), h("body").prepend(a)), g = a.offset());
            var f = c.offset(),
                k = b.offset();
            if (l) {
                var m = x.pageYOffset - document.documentElement.scrollTop;
                f.top -= m;
                k.top -= m
            }
            f.top -= g.top;
            f.left -= g.left;
            k.top -= g.top;
            k.left -= g.left;
            m = c.outerWidth();
            c = c.outerHeight();
            var u = b.outerWidth(!0),
                r = b.outerHeight(!0);
            b = b.find(".a-popover-header");
            b = b.length ? b.outerHeight(!0) : 0;
            return {
                windowWidth: e.width,
                windowHeight: e.height,
                windowTop: e.scrollTop,
                windowLeft: e.scrollLeft,
                windowRight: e.scrollLeft + e.width,
                windowBottom: e.scrollTop + e.height,
                zoomTop: g.top,
                zoomLeft: g.left,
                triggerWidth: m + 1,
                triggerHeight: c,
                triggerTop: f.top - 1,
                triggerLeft: f.left - 1,
                triggerRight: f.left + m + 1,
                triggerBottom: f.top + c + 1,
                triggerVerticalCenter: f.top + c / 2,
                triggerHorizontalCenter: f.left + m / 2,
                popoverWidth: u,
                popoverHeight: r,
                popoverTop: k.top,
                popoverLeft: k.left,
                popoverRight: k.left + u,
                popoverBottom: k.top + r,
                popoverVerticalCenter: k.top + r / 2,
                popoverHorizontalCenter: k.left + u / 2,
                headerHeight: b
            }
        }

        function g(b) {
            return b.removeClass("a-arrow-top a-arrow-bottom a-arrow-left a-arrow-right")
        }

        function c(b) {
            var a = {
                    deltaTop: 0
                },
                c;
            a.top = b.triggerVerticalCenter - b.popoverHeight / 2;
            a.top < b.windowTop + 20 ? (c = Math.min(b.windowTop + 20, b.triggerTop - 20), a.deltaTop = a.top - c, a.top = c) : a.top + b.popoverHeight > b.windowBottom - 20 && (c = Math.min(20, b.windowBottom - b.triggerBottom +
                20), a.deltaTop = a.top + b.popoverHeight - (b.windowBottom - c), a.top = b.windowBottom - c - b.popoverHeight);
            return a
        }

        function e(b) {
            var a = {
                    deltaLeft: 0
                },
                c;
            a.left = b.triggerHorizontalCenter - b.popoverWidth / 2;
            20 > a.left ? (c = Math.min(20, b.triggerLeft - 20), a.deltaLeft = a.left - c, a.left = c) : a.left + b.popoverWidth > b.windowRight - 20 && (c = Math.min(20, b.windowRight - b.triggerRight + 20), a.deltaLeft = a.left + b.popoverWidth - (b.windowRight - c), a.left = b.windowRight - c - b.popoverWidth);
            return a
        }
        var h = d.$;
        h(x);
        var a = null,
            l = d.capabilities.mobile &&
            d.capabilities.isIE10Plus;
        return {
            windowCenter: function(b) {
                b = f(b.$popover, b.$trigger);
                var a = {};
                a.top = (b.windowHeight - b.popoverHeight) / 2;
                a.left = (b.windowWidth - b.popoverWidth) / 2;
                0 > a.top && (a.top = 0);
                return a
            },
            windowTop: function(b) {
                b = f(b.$popover, b.$trigger);
                var a = {
                    top: 0
                };
                a.left = b.windowWidth / 2 - b.popoverWidth / 2;
                return a
            },
            windowFullWidth: function(b) {
                return {
                    top: 0,
                    left: 0
                }
            },
            triggerRight: function(b, a) {
                var d = b.$popover,
                    e = b.$trigger;
                a || (a = f(d, e));
                e = c(a);
                e.left = a.triggerRight;
                b.attrs("popoverArrow") && (g(d).addClass("a-arrow-right"),
                    d.find(".a-arrow-border").css("top", a.popoverHeight / 2 + e.deltaTop));
                return e
            },
            triggerLeft: function(b, a) {
                var d = b.$popover,
                    e = b.$trigger;
                a || (a = f(d, e));
                e = c(a);
                e.left = a.triggerLeft - a.popoverWidth;
                e.left = 0 < e.left ? e.left : 0;
                b.attrs("popoverArrow") && (g(d).addClass("a-arrow-left"), d.find(".a-arrow-border").css("top", a.popoverHeight / 2 + e.deltaTop));
                return e
            },
            triggerTop: function(b, a) {
                var c = b.$popover,
                    d = b.$trigger;
                a || (a = f(c, d));
                d = e(a);
                d.top = a.triggerTop - a.popoverHeight;
                b.attrs("popoverArrow") && (g(c).addClass("a-arrow-top"),
                    c.find(".a-arrow-border").css("left", a.popoverWidth / 2 + d.deltaLeft));
                return d
            },
            triggerBottom: function(b, a) {
                var c = b.$popover,
                    d = b.$trigger;
                a || (a = f(c, d));
                d = e(a);
                d.top = a.triggerBottom;
                b.attrs("popoverArrow") && (g(c).addClass("a-arrow-bottom"), c.find(".a-arrow-border").css("left", a.popoverWidth / 2 + d.deltaLeft));
                return d
            },
            triggerHorizontal: function(b, a) {
                var c = b.$popover,
                    d = b.$trigger;
                a || (a = f(c, d));
                return a.triggerLeft - a.windowLeft > a.windowRight - a.triggerRight ? this.triggerLeft(b, a) : this.triggerRight(b, a)
            },
            triggerVertical: function(b,
                a) {
                var c = b.$popover,
                    d = b.$trigger;
                a = a ? a : f(c, d);
                return a.triggerTop - a.windowTop > a.popoverHeight + 20 ? this.triggerTop(b, a) : this.triggerBottom(b, a)
            },
            triggerVerticalAlignLeft: function(b, a) {
                var c = b.$popover,
                    d = b.$trigger;
                a || (a = f(c, d));
                var d = {},
                    e = 0,
                    h, l = a.windowBottom - a.triggerBottom;
                d.left = a.triggerLeft;
                d.top = l > a.popoverHeight ? a.triggerBottom + 3 : a.triggerTop - a.popoverHeight - 3;
                20 > d.left ? (h = Math.min(20, a.triggerLeft - 20), e = d.left - h, d.left = h) : d.left + a.popoverWidth > a.windowRight - 20 && (h = Math.min(20, a.windowRight -
                    a.triggerRight + 20), e = d.left + a.popoverWidth - (a.windowRight - h), d.left = a.windowRight - h - a.popoverWidth);
                b.attrs("popoverArrow") && (g(c).addClass(l > a.popoverHeight ? "a-arrow-bottom" : "a-arrow-top"), c.find(".a-arrow-border").css("left", a.triggerWidth / 2 + e));
                return d
            },
            customPosition: function(b, a) {
                return a.call(this, {
                    popover: b,
                    $popover: b.$popover,
                    $trigger: b.$trigger,
                    measure: f
                })
            }
        }
    });
    "use strict";
    k.when("A").register("a-popover-util", function(d) {
        function f(c, d) {
            for (var a = c.children.length; a--;) {
                var g = f(c.children[a],
                    d);
                if (g) return g
            }
            if (d(c)) return c
        }
        var g = d.$,
            c = /^-?\d+(?:\.\d+)?$/;
        return {
            trigger: function(c, h) {
                d.trigger("a:popover:" + c, {
                    popover: h
                });
                h.name && d.trigger("a:popover:" + c + ":" + h.name, {
                    popover: h
                })
            },
            extractDeclarativeParams: function(c, h) {
                c = g(c);
                c = c.hasClass("a-declarative") ? c : c.find(".a-declarative").eq(0);
                h = "a-" + h;
                var a = c.data("action");
                return a && d.contains(a, h) ? {
                    attributes: c.data(h) || null,
                    $trigger: c
                } : null
            },
            eventOccursWithin: function(c, d) {
                c = g(c.target);
                return 0 < c.closest(d.$trigger).length || 0 < c.closest(d.$popover).length
            },
            search: f,
            getCSSHash: function(e) {
                var h = {};
                d.each("height width max-height max-width min-height min-width".split(" "), function(a) {
                    if (e[a]) {
                        var g = e[a];
                        if (d.isFiniteNumber(g) || c.test(g)) g += "px";
                        h[a] = g
                    }
                });
                h.height && !h["max-height"] && (h["max-height"] = "none");
                h.width && !h["max-width"] && (h["max-width"] = "none");
                return h
            },
            clearContent: function(c) {
                (c = c.getContent()) && c.empty()
            },
            showSpinner: function(c) {
                c.updateContent('\x3cdiv class\x3d"a-popover-loading-wrapper a-text-center"\x3e\x3cdiv class\x3d"a-box a-color-base-background a-popover-loading"\x3e\x3c/div\x3e\x3c/div\x3e');
                c.updatePosition();
                return c
            },
            getBool: function(c, d) {
                return void 0 !== c ? !0 === c || "true" === c : !0 === d
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-util", "a-popover-animate").register("a-modal-view-base", function(d, f, g) {
        var c = d.$,
            e = c("html").hasClass("a-lt-ie9");
        return {
            setAriaBusy: function(c) {
                this.$popover.find(".a-popover-wrapper").attr("aria-busy", c)
            },
            updateContent: function(c) {
                "string" === typeof c ? this.$popover.find(".a-popover-inner").html(c) : c && this.$popover.find(".a-popover-inner").html("").append(c)
            },
            updateDimensions: function() {
                var c =
                    this.$popover,
                    a = f.getCSSHash(this.attrs());
                !this.draggable || a.width && "auto" !== a.width || (a.width = c.width() + "px");
                c.css(a);
                a.height ? c.addClass("a-popover-modal-fixed-height") : c.removeClass("a-popover-modal-fixed-height");
                this.isActive() && this.updatePosition();
                return this
            },
            getContent: function() {
                return this.$popover ? this.$popover.find(".a-popover-inner") : null
            },
            showMethod: function() {
                var c = this,
                    a = c.$popover;
                a.css({
                    visibility: "visible"
                }).removeClass("a-popover-hidden");
                e || "ajax" === c.attrs("currentDataStrategy") ||
                    (a.css({
                        opacity: 0
                    }), g.animate(c, {
                        opacity: 1
                    }, 500, "linear"));
                d.animationFrameDelay(function() {
                    c.focus()
                });
                c.attrs("legacyNavigable") && f.trigger("showNavigableLegacy", c)
            },
            hideMethod: function() {
                e ? this.$popover.hide().css("visibility", "hidden").find(".a-lgtbox-vertical-scroll").removeClass("a-lgtbox-vertical-scroll") : g.fadeOut(this, 250, "linear");
                this.attrs("legacyNavigable") && f.trigger("hideNavigableLegacy", this)
            }
        }
    });
    "use strict";
    k.when("A", "a-modal-view-base", "a-modal-positions", "a-popover-accessibility").register("a-modal-view",
        function(d, f, g, c) {
            var e = d.$,
                e = e("html").hasClass("a-lt-ie9");
            return d.extend(f, d.capabilities.touch || d.capabilities.mobile || d.capabilities.tablet || e ? g.innerScroll : g.modalScroll, {
                skin: function(d) {
                    var a = d.attrs("id"),
                        e = d.attrs("header") || "",
                        b = d.attrs("hideHeader") || !1,
                        g = d.attrs("footer"),
                        f = d.attrs("modeless") || !1,
                        k = d.attrs("closeButton"),
                        w = d.attrs("closeButtonLabel") ? d.attrs("closeButtonLabel") : "",
                        q = d.attrs("hideHeaderCloseButtonLayout") || "",
                        m = d.attrs("popoverLabel") ? d.attrs("popoverLabel") : "",
                        u = d.attrs("padding");
                    d = d.attrs("ariaDescription");
                    m = {
                        id: a,
                        header_str: e,
                        label_str: m,
                        aria_description: d
                    };
                    k = ['\x3cbutton data-action\x3d"a-popover-close" class\x3d"', k ? "" : " a-button-close-a11y", " a-button-close a-declarative", k && b ? "top" === q ? " a-modal-close-nohead-top" : " a-button-top-right" : "", '" aria-label\x3d"', w, '"\x3e\x3ci class\x3d"a-icon a-icon-close"\x3e\x3c/i\x3e\x3c/button\x3e'].join("");
                    e = b ? "" : ['\x3cdiv class\x3d"a-popover-header"\x3e', k, '\x3ch4 class\x3d"a-popover-header-content' + (f ? " a-popover-draggable-handle" :
                        "") + '" id\x3d"a-popover-header-', a, '"\x3e', e, "\x3c/h4\x3e\x3c/div\x3e"].join("");
                    g = g ? ['\x3cdiv class\x3d"a-popover-footer"\x3e', g, "\x3c/div\x3e"].join("") : "";
                    u = "none" === u ? " a-padding-none" : "";
                    return [f ? "" : '\x3cdiv class\x3d"a-modal-scroller a-declarative" data-action\x3d"a-popover-floating-close"\x3e', '\x3cdiv class\x3d"a-popover a-popover-modal a-declarative' + (f ? " a-modal-modeless" : " ") + '" data-action\x3d"a-popover-a11y"\x3e', c.getStartAnchorHtml(m), '\x3cdiv class\x3d"a-popover-wrapper"\x3e', e, b ?
                        k : "", '\x3cdiv class\x3d"a-popover-inner', u, '" id\x3d"a-popover-content-', a, '"\x3e\x3c/div\x3e', g, "\x3c/div\x3e", c.getEndAnchorHtml(m), "\x3c/div\x3e", f ? "" : "\x3c/div\x3e"
                    ].join("")
                }
            })
        });
    "use strict";
    k.when("A", "a-popover-lightbox", "a-popover-optional-helpers").register("a-modal-positions", function(d, f, g) {
        function c(b) {
            var a = b.$popover.closest(".a-modal-scroller");
            a.scrollTop(0).css("visibility", "visible");
            a.bind("scroll", function() {
                b.updateChildrenPosition()
            })
        }

        function e() {
            var b = d.viewport();
            2 < b.width /
                b.height && d.delay(function() {
                    document.activeElement.scrollIntoView();
                    x.scrollTo(x.pageXOffset, 0)
                }, 0)
        }

        function h(b, a, c) {
            if (0 > b) return c({
                "padding-right": a + "px",
                "box-sizing": "content-box"
            }), !0;
            c({
                "padding-right": "",
                "box-sizing": ""
            });
            return !1
        }

        function a(b) {
            return function(a) {
                b.css(a)
            }
        }
        var l = d.$,
            b = -1 < document.documentElement.className.indexOf("a-lt-ie7"),
            n = d.capabilities.isIE10Plus && d.capabilities.mobile,
            t = 0;
        k.when("prv:skin-vars").execute(function(b) {
            t = b.popover.optionalButtonHeight
        });
        k.declare("prv:a-model-applyHorizonalScrollStyles",
            h);
        return {
            innerScroll: {
                positionStrategy: function(c) {
                    var k = c.popover,
                        q = c.$popover,
                        m = c.$trigger,
                        u = q.find(".a-popover-inner").css("height", "auto"),
                        r = q.closest(".a-modal-scroller"),
                        v = {},
                        z = d.viewport(!0),
                        A = .1 * z.height,
                        B = .05 * z.width,
                        z = .8 * z.height,
                        y = k.attrs("height"),
                        k = k.attrs("min-height");
                    q.css({
                        height: y ? y : "",
                        "min-height": k ? k : ""
                    });
                    m = c.measure(q, m);
                    v.left = (m.windowWidth - m.popoverWidth) / 2;
                    h(v.left, B, a(q)) && (v.left = B);
                    g.evaluateActualHeight(c, m.popoverHeight, t) > z ? (k = q.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) ||
                        0, y = q.find(".a-popover-footer").outerHeight(!0) || 0, c = g.getOffsetTopDelta(c, A, t), z -= c, A += c, u.css({
                            height: z - k - y + "px",
                            "overflow-y": "auto"
                        }), q.css({
                            height: z,
                            "min-height": 0
                        }), v.top = A) : (v.top = (m.windowHeight - m.popoverHeight) / 2, u.css("height", "auto"));
                    v.left += m.zoomLeft;
                    v.top += m.zoomTop;
                    b && r.css("top", document.getElementById(f.LIGHTBOX_ID).style.top);
                    n && (r.css("top", l(x).scrollTop()), q.removeClass("a-popover-pan-y").addClass("a-popover-pan-x"), q = l(document).height(), u = l(document).width(), l("#" + f.LIGHTBOX_ID).css({
                        height: q,
                        width: u > m.popoverWidth ? u : m.popoverWidth + B
                    }));
                    d.capabilities.isMetroIEGuess && d.capabilities.isIETouchCapable && e();
                    return v
                },
                beforeShowMethod: d.constants.NOOP,
                beforeHideMethod: d.constants.NOOP
            },
            modalScroll: {
                positionStrategy: function(b) {
                    var c = b.$popover,
                        g = b.$trigger,
                        f = c.closest(".a-modal-scroller"),
                        l = c.find(".a-popover-inner").css("height", "auto");
                    if (c.hasClass("a-popover-modal-fixed-height")) {
                        var k = c.find(".a-popover-footer");
                        l.css("padding-bottom", k.height() + 15)
                    }
                    var l = {},
                        n = d.viewport(!0),
                        t = n.height,
                        k = .1 * t,
                        n = .05 * n.width,
                        t = .8 * t,
                        x = c.height(),
                        B = c.width();
                    b = b.measure(c, g);
                    l.left = (b.windowWidth - B) / 2;
                    l.top = (b.windowHeight - x) / 2;
                    h(l.left, n, a(c)) && (l.left = n);
                    x > t ? f.length ? (l.top = 0, c.css({
                        position: "relative",
                        margin: b.zoomTop + k + "px 0 " + k + "px " + (b.zoomLeft + l.left) + "px"
                    }), l.left = 0, f.css("padding-bottom", "1px")) : x > t && (l.top = padding) : f.length && (c.css({
                        position: "absolute",
                        margin: "0px"
                    }), f.css("padding-bottom", "0px"));
                    l.left += b.zoomLeft;
                    l.top += b.zoomTop;
                    d.capabilities.isMetroIEGuess && d.capabilities.isIETouchCapable &&
                        e();
                    return l
                },
                beforeShowMethod: function() {
                    c(this)
                },
                beforeHideMethod: function() {
                    this.$popover.closest(".a-modal-scroller").css("visibility", "hidden").unbind("scroll")
                }
            },
            util: {
                determineMaximumInnerHeight: function(b) {
                    var a = b.$popover;
                    b = .8 * d.viewport().height;
                    var c = a.find(".a-popover-header, .a-modal-close-nohead-top").outerHeight(!0) || 0,
                        a = a.find(".a-popover-footer").outerHeight(!0) || 0;
                    return b - c - a
                },
                determineInnerVerticalPadding: function(b) {
                    b = b.$popover.find(".a-popover-inner");
                    return b.outerHeight() -
                        b.height()
                }
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-modal-view", "a-popover-util").register("a-modal-factory", function(d, f, g, c) {
        function e(e, b) {
            var k = !1,
                t = !1;
            d.capabilities.mobile || d.capabilities.tablet || (k = c.getBool(b.modeless), t = c.getBool(b.draggable));
            b = {
                modeless: k,
                draggable: t,
                type: "modal",
                alone: !0,
                immersive: !0,
                position: "windowCenter",
                header: b.header,
                hideHeader: b.hideHeader,
                footer: b.footer,
                padding: b.padding,
                width: b.width,
                height: b.height,
                "max-width": b["max-width"],
                "max-height": b["max-height"],
                "min-width": b["min-width"],
                "min-height": b["min-height"],
                closeButton: c.getBool(b.closeButton, !0),
                timeout: b.timeout,
                lightboxOptions: k ? C : {
                    lockScroll: !0,
                    showDuration: h || a ? 0 : null
                },
                data: b.data || {},
                dataStrategy: b.dataStrategy,
                url: b.url,
                manualRefresh: !!b.manualRefresh,
                ajaxFailMsg: b.ajaxFailMsg,
                cache: c.getBool(b.cache, !0),
                inlineContent: b.inlineContent ? b.inlineContent : b.content,
                name: b.name,
                closeButtonLabel: b.closeButtonLabel ? b.closeButtonLabel : "Close",
                hideHeaderCloseButtonLayout: b.hideHeaderCloseButtonLayout,
                popoverLabel: b.popoverLabel,
                ariaDescription: b.ariaDescription,
                legacyNavigable: c.getBool(b.legacyNavigable, !0)
            };
            return f.create(e, {
                attributes: b,
                typeSpecificFunctions: g,
                actionCheck: !0
            })
        }
        var h = -1 < document.documentElement.className.indexOf("a-lt-ie9"),
            a = d.capabilities.mobile && d.capabilities.isIE10Plus;
        return {
            type: "modal",
            create: e,
            get: function(a) {
                var b = f.get(a, "modal");
                b || "object" !== typeof a || (a = c.extractDeclarativeParams(a, "modal")) && (b = e(a.$trigger, a.attributes || {}));
                return b
            },
            remove: function(a) {
                return f.remove(a,
                    "modal")
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-modal-factory", "ready").register("a-modal-handlers", function(d, f, g) {
        f = d.$;
        d.declarative("a-modal", "click", function(c) {
            g.get(c.$declarativeParent).show();
            c.$event.preventDefault()
        });
        f(document).delegate(".a-modal-scroller", "click " + d.action.start + " " + d.action.move, function(c) {
            c.target === this && c.preventDefault()
        })
    });
    "use strict";
    k.when("A", "a-modal-factory", "a-popover-base", "a-modal-handlers").register("a-modal", function(d, f) {
        return f
    });
    "use strict";
    k.when("A", "a-popover-util").register("a-popover-view-base", function(d, f) {
        return {
            setAriaBusy: function(d) {
                this.$popover.find(".a-popover-wrapper").attr("aria-busy", d)
            },
            updateContent: function(d) {
                "string" === typeof d ? this.$popover.find(".a-popover-content").html(d) : d && this.$popover.find(".a-popover-content").html("").append(d)
            },
            updateDimensions: function() {
                this.$popover.css(f.getCSSHash(this.attrs()));
                this.isActive() && this.updatePosition();
                return this
            },
            getContent: function() {
                return this.$popover ?
                    this.$popover.find(".a-popover-content") : null
            },
            hideMethod: function() {
                var g = this;
                d.fadeOut(g.$popover, 250, "linear", function() {
                    g.$popover.css({
                        top: "auto",
                        left: "auto"
                    })
                })
            }
        }
    });
    k.when("a-util").register("a-popover-optional-helpers", function(d) {
        return {
            getOffsetTopDelta: function(f, g, c) {
                c = parseFloat(c);
                var e = d.isFiniteNumber(c) && 0 < c;
                f = f.$popover.find(".a-button-close").length && !f.$popover.find(".a-button-close-a11y").length;
                return e && f && 0 > g - c ? c - g : 0
            },
            evaluateActualHeight: function(d, g, c) {
                return d.$popover.find(".a-button-close").length &&
                    !d.$popover.find(".a-button-close-a11y").length ? g + c : g
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-view-base", "a-popover-util", "a-popover-accessibility").register("a-popover-view", function(d, f, g, c) {
        var e = !0;
        k.when("prv:skin-vars").execute(function(c) {
            e = c.popover.closeButtonEnabled
        });
        return d.extend(f, {
            skin: function(d) {
                var a = d.attrs("id"),
                    g = d.attrs("header"),
                    b = e && d.attrs("closeButton"),
                    f = d.attrs("closeButtonLabel") ? d.attrs("closeButtonLabel") : "",
                    k = d.attrs("popoverLabel") ? d.attrs("popoverLabel") : "",
                    p = d.attrs("ariaDescription"),
                    w = d.attrs("padding");
                d = d.attrs("popoverArrow");
                k = {
                    id: a,
                    header_str: g,
                    label_str: k,
                    aria_description: p
                };
                b = '\x3cbutton data-action\x3d"a-popover-close" class\x3d"a-button-close ' + (b ? "" : "a-button-close-a11y") + ' a-declarative" aria-label\x3d"' + f + '"\x3e\x3ci class\x3d"a-icon a-icon-close"\x3e\x3c/i\x3e\x3c/button\x3e';
                g = g && "" !== g ? ['\x3cdiv class\x3d"a-popover-header"\x3e', b, '\x3ch4 class\x3d"a-popover-header-content" id\x3d"a-popover-header-', a, '"\x3e', g, "\x3c/h4\x3e\x3c/div\x3e"].join("") : "";
                w = "none" ===
                    w ? " a-padding-none" : "";
                d = d ? '\x3cdiv class\x3d"a-arrow-border"\x3e\x3cdiv class\x3d"a-arrow"\x3e\x3c/div\x3e\x3c/div\x3e' : "";
                return ['\x3cdiv class\x3d"a-popover a-declarative" data-action\x3d"a-popover-container a-popover-a11y"\x3e', c.getStartAnchorHtml(k), '\x3cdiv class\x3d"a-popover-wrapper"\x3e', g, '\x3cdiv class\x3d"a-popover-inner', w, '"\x3e', "" === g ? b : "", '\x3cdiv class\x3d"a-popover-content" id\x3d"a-popover-content-', a, '"\x3e\x3c/div\x3e\x3c/div\x3e', d, "\x3c/div\x3e", c.getEndAnchorHtml(k), "\x3c/div\x3e"].join("")
            }
        })
    });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-popover-view", "a-popover-util").register("a-popover-factory", function(d, f, g, c) {
        function e(d, a) {
            a = {
                type: "popover",
                alone: !0,
                header: a.header,
                width: a.width,
                height: a.height,
                "max-width": a["max-width"],
                "max-height": a["max-height"],
                "min-width": a["min-width"],
                "min-height": a["min-height"],
                padding: a.padding,
                closeButton: c.getBool(a.closeButton, !0),
                position: a.position || "triggerVertical",
                activate: a.activate || "onmouseover",
                timeout: a.timeout,
                data: a.data || {},
                dataStrategy: a.dataStrategy,
                url: a.url,
                manualRefresh: !!a.manualRefresh,
                ajaxFailMsg: a.ajaxFailMsg,
                cache: c.getBool(a.cache, !0),
                inlineContent: a.inlineContent ? a.inlineContent : a.content,
                name: a.name,
                closeButtonLabel: a.closeButtonLabel ? a.closeButtonLabel : "Close",
                popoverLabel: a.popoverLabel,
                ariaDescription: a.ariaDescription,
                focusWhenShown: c.getBool(a.focusWhenShown, !0),
                popoverArrow: c.getBool(a.popoverArrow, !0),
                restoreFocusOnHide: c.getBool(a.restoreFocusOnHide, !0)
            };
            return f.create(d, {
                attributes: a,
                typeSpecificFunctions: g,
                actionCheck: !0
            })
        }
        return {
            type: "popover",
            create: e,
            get: function(d) {
                var a = f.get(d, "popover");
                a || "object" !== typeof d || (d = c.extractDeclarativeParams(d, "popover")) && (a = e(d.$trigger, d.attributes || {}));
                return a
            },
            remove: function(c) {
                return f.remove(c, "popover")
            }
        }
    });
    "use strict";
    k.when("A", "a-popover-factory").register("a-popover-handlers", function(d, f) {
        function g(a) {
            a && !a.destroyTimer && (a.destroyTimer = d.delay(function() {
                a.hide()
            }, 250))
        }

        function c(a) {
            a && (clearTimeout(a.destroyTimer), a.destroyTimer = null, clearTimeout(a.parent.destroyTimer),
                a.parent.destroyTimer = null)
        }
        var e = d.$,
            h = !(d.capabilities.mobile || d.capabilities.tablet) && d.capabilities.ios;
        d.declarative("a-popover", "click", function(a) {
            var b = f.get(a.$declarativeParent);
            b && ("onclick" === b.attrs("activate") || h) && (b.show(), a.$event.preventDefault())
        });
        d.declarative("a-popover", "keydown", function(a) {
            var b = d.constants.keycodes,
                c = a.$event.which;
            if (c === b.ENTER || c === b.SPACE) a.$event.preventDefault(), f.get(a.$declarativeParent).show()
        });
        if (!h) {
            var a;
            d.declarative("a-popover", "mouseenter",
                function(e) {
                    var b = f.get(e.$declarativeParent);
                    b && "onmouseover" === b.attrs("activate") && (c(b), a = d.delay(function() {
                        (b = f.get(e.$declarativeParent)) && b.show()
                    }, 200))
                });
            d.declarative("a-popover", "mousemove", function(a) {
                2 > d.cursor().speed && (a = f.get(a.$declarativeParent)) && "onmouseover" === a.attrs("activate") && a.show()
            });
            d.declarative("a-popover", "mouseleave", function(c) {
                (c = f.get(c.$declarativeParent)) && "onmouseover" === c.attrs("activate") && (g(c), a && clearTimeout(a))
            });
            d.declarative("a-popover-container", "mouseenter",
                function(a) {
                    (a = f.get(a.$declarativeParent)) && "onmouseover" === a.attrs("activate") && c(a)
                });
            d.declarative("a-popover-container", "mouseleave", function(a) {
                var b = f.get(a.$declarativeParent),
                    c = !0,
                    h = e(a.$event.relatedTarget);
                b && "onmouseover" === b.attrs("activate") && b.isActive() && (d.each(b.children, function(b) {
                    if (h.closest(b.$popover).length) return c = !1
                }), c && (g(b), b.parent.immersive || 0 !== h.closest(b.parent.$popover).length || g(b.parent)))
            })
        }
    });
    "use strict";
    k.when("A", "a-popover-factory", "a-popover-base", "a-popover-handlers").register("a-popover",
        function(d, f) {
            return f
        });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-secondary-view-view", "a-popover-util").register("a-secondary-view-factory", function(d, f, g, c) {
        function e(c, b) {
            b.disableAnimation = b.disableAnimation || d.capabilities.isOldAndroid;
            return f.create(c, {
                attributes: {
                    type: "secondary-view",
                    immersive: !0,
                    disableAnimation: a || b.disableAnimation,
                    synchronous: !!(a || b.synchronous && "false" !== b.synchronous),
                    animationLength: b.disableAnimation ? 0 : 300,
                    alternateBackground: b.alternateBackground || !1,
                    hideHeader: a || b.hideHeader || !1,
                    scrollable: b.scrollable || !0,
                    header: b.header,
                    backButtonText: b.backButtonText,
                    position: "windowFullWidth",
                    timeout: b.timeout,
                    dataStrategy: b.dataStrategy,
                    inlineContent: b.inlineContent ? b.inlineContent : b.content,
                    url: b.url,
                    manualRefresh: !!b.manualRefresh,
                    name: b.name,
                    cache: "false" === b.cache || !1 === b.cache ? !1 : !0,
                    data: b.data || {},
                    popoverLabel: b.popoverLabel,
                    padding: b.padding,
                    ariaDescription: b.ariaDescription
                },
                typeSpecificFunctions: g,
                actionCheck: !0
            })
        }
        var h = d.$,
            a = !1;
        k.when("mash-will-load").execute(function() {
            a = !0
        });
        return {
            type: "secondary-view",
            create: e,
            get: function(a) {
                var b = f.get(a, "secondary-view");
                if (!b && "object" === typeof a) {
                    var d = c.extractDeclarativeParams(a, "secondary-view");
                    d && (b = e(d.$trigger, d.attributes || {}))
                }
                b && "object" === typeof a && (a = h(a), a = (a = a.hasClass("a-declarative") ? a : a.find(".a-declarative").eq(0)) ? a.data("a-secondary-view") : null, b.data = a.data);
                return b
            },
            remove: function(a) {
                return f.remove(a, "secondary-view")
            }
        }
    });
    "use strict";
    k.when("A", "a-secondary-view-factory", "a-popover-base", "a-secondary-view-handlers").register("a-secondary-view",
        function(d, f) {
            return f
        });
    "use strict";
    k.when("A").register("a-tooltip-view-base", function(d) {
        return {
            updateContent: function(d) {
                this.$popover.find(".a-tooltip-inner").html(d)
            },
            getContent: function() {
                return this.$popover ? this.$popover.find(".a-tooltip-inner") : null
            },
            hideMethod: function() {
                d.fadeOut(this.$popover, 250, "linear")
            }
        }
    });
    "use strict";
    k.when("A", "a-tooltip-view-base").register("a-tooltip-view", function(d, f) {
        return d.extend(f, {
            skin: function(d) {
                return ['\x3cdiv role\x3d"tooltip" class\x3d"a-popover a-tooltip a-declarative" data-action\x3d"a-popover-close"\x3e\x3cdiv class\x3d"a-tooltip-inner"\x3e\x3c/div\x3e',
                    d.attrs("popoverArrow") ? '\x3cdiv class\x3d"a-arrow-border"\x3e\x3cdiv class\x3d"a-arrow"\x3e\x3c/div\x3e\x3c/div\x3e' : "", "\x3c/div\x3e"
                ].join("")
            }
        })
    });
    "use strict";
    k.when("A", "a-popover-base-factory", "a-tooltip-view", "a-popover-util").register("a-tooltip-factory", function(d, f, g, c) {
        function e(d, a) {
            a = {
                type: "tooltip",
                name: a.name,
                inlineContent: a.inlineContent ? a.inlineContent : a.content,
                position: a.position || "triggerVertical",
                activate: a.activate || "onmouseover",
                popoverArrow: c.getBool(a.popoverArrow, !0),
                restoreFocusOnHide: !1
            };
            a = f.create(d, {
                attributes: a,
                typeSpecificFunctions: g,
                actionCheck: !0
            });
            d.add(d.children()).filter("a, input").attr("aria-describedby", "a-popover-" + d.data("a-popover-id"));
            return a
        }
        return {
            type: "tooltip",
            create: e,
            get: function(d) {
                var a = f.get(d, "tooltip");
                a || "object" !== typeof d || (d = c.extractDeclarativeParams(d, "tooltip")) && (a = e(d.$trigger, d.attributes || {}));
                return a
            },
            remove: function(c) {
                return f.remove(c, "tooltip")
            }
        }
    });
    "use strict";
    k.when("A", "a-tooltip-factory").register("a-tooltip-handlers", function(d,
        f) {
        d.declarative("a-tooltip", "click", function(d) {
            var c = f.get(d.$declarativeParent);
            c && "onclick" === c.attrs("activate") && (c.show(), d.$event.preventDefault())
        });
        d.declarative("a-tooltip", "mouseenter", function(d) {
            (d = f.get(d.$declarativeParent)) && "onmouseover" === d.attrs("activate") && (d.show(), d.destroyTimer && (clearTimeout(d.destroyTimer), d.destroyTimer = null))
        });
        d.declarative("a-tooltip", "mouseleave", function(g) {
            var c = f.get(g.$declarativeParent);
            c && "onmouseover" === c.attrs("activate") && (c.destroyTimer = d.delay(function() {
                    c.hide()
                },
                125))
        });
        d.declarative("a-tooltip", "focus focusin", function(d) {
            (d = f.get(d.$declarativeParent)) && d.show()
        });
        d.declarative("a-tooltip", "blur focusout", function(d) {
            (d = f.get(d.$declarativeParent)) && d.hide()
        })
    });
    "use strict";
    k.when("A", "a-tooltip-factory", "a-popover-base", "a-tooltip-handlers").register("a-tooltip", function(d, f) {
        return f
    })
});
/* ******** */
(function(c) {
    var b = window.AmazonUIPageJS || window.P,
        d = b._namespace || b.attributeErrors,
        a = d ? d("AmazonUIBottomSheet", "") : b;
    a.guardFatal ? a.guardFatal(c)(a, window) : a.execute(function() {
        c(a, window)
    })
})(function(c, b, d) {});
/* ******** */