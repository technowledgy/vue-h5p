var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import Toposort from "toposort-class";
class FetchError extends Error {
  constructor(resp, body) {
    super(resp.statusText);
    this.name = "FetchError";
    this.resp = resp;
    this.status = resp.status;
    Object.assign(this, body);
  }
}
var l10n = {
  H5P: {
    advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:",
    author: "Author",
    by: "by",
    cancelLabel: "Cancel",
    changes: "Changelog",
    close: "Close",
    confirmDialogBody: "Please confirm that you wish to proceed. This action is not reversible.",
    confirmDialogHeader: "Confirm action",
    confirmLabel: "Confirm",
    connectionLost: "Connection lost. Results will be stored and sent when you regain connection.",
    connectionReestablished: "Connection reestablished.",
    contentChanged: "This content has changed since you last used it.",
    contentCopied: "Content is copied to the clipboard",
    contentType: "Content Type",
    copyrightInformation: "Rights of use",
    copyrights: "Rights of use",
    copyrightsDescription: "View copyright information for this content.",
    disableFullscreen: "Disable fullscreen",
    download: "Download",
    downloadDescription: "Download this content as a H5P file.",
    embed: "Embed",
    embedDescription: "View the embed code for this content.",
    fullscreen: "Fullscreen",
    h5pDescription: "Visit H5P.org to check out more cool content.",
    hideAdvanced: "Hide advanced",
    license: "License",
    licenseC: "Copyright",
    licenseCC010: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
    licenseCC10: "1.0 Generic",
    licenseCC20: "2.0 Generic",
    licenseCC25: "2.5 Generic",
    licenseCC30: "3.0 Unported",
    licenseCC40: "4.0 International",
    licenseCCBY: "Attribution",
    licenseCCBYNC: "Attribution-NonCommercial",
    licenseCCBYNCND: "Attribution-NonCommercial-NoDerivs",
    licenseCCBYNCSA: "Attribution-NonCommercial-ShareAlike",
    licenseCCBYND: "Attribution-NoDerivs",
    licenseCCBYSA: "Attribution-ShareAlike",
    licenseExtras: "License Extras",
    licenseGPL: "General Public License",
    licensePD: "Public Domain",
    licensePDM: "Public Domain Mark",
    licenseU: "Undisclosed",
    licenseV1: "Version 1",
    licenseV2: "Version 2",
    licenseV3: "Version 3",
    noCopyrights: "No copyright information available for this content.",
    offlineDialogBody: "We were unable to send information about your completion of this task. Please check your internet connection.",
    offlineDialogHeader: "Your connection to the server was lost",
    offlineDialogRetryButtonLabel: "Retry now",
    offlineDialogRetryMessage: "Retrying in :num....",
    offlineSuccessfulSubmit: "Successfully submitted results.",
    resubmitScores: "Attempting to submit stored results.",
    reuse: "Reuse",
    reuseContent: "Reuse Content",
    reuseDescription: "Reuse this content.",
    showAdvanced: "Show advanced",
    showLess: "Show less",
    showMore: "Show more",
    size: "Size",
    source: "Source",
    startingOver: "You'll be starting over.",
    subLevel: "Sublevel",
    thumbnail: "Thumbnail",
    title: "Title",
    year: "Year"
  }
};
var frameScript = `var h5p = "";
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e, t) {
  var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e2, t2) {
    return new b.fn.init(e2, t2, r);
  }, x = /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source, w = /\\S+/g, T = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, N = /^(?:(<[\\w\\W]+>)[^>]*|#([\\w-]*))$/, C = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/, k = /^[\\],:{}\\s]*$/, E = /(?:^|:|,)(?:\\s*\\[)+/g, S = /\\\\(?:["\\\\\\/bfnrt]|u[\\da-fA-F]{4})/g, A = /"[^"\\\\\\r\\n]*"|true|false|null|-?(?:\\d+\\.|)\\d+(?:[eE][+-]?\\d+|)/g, j = /^-ms-/, D = /-([\\da-z])/gi, L = function(e2, t2) {
    return t2.toUpperCase();
  }, H = function(e2) {
    (o.addEventListener || e2.type === "load" || o.readyState === "complete") && (q(), b.ready());
  }, q = function() {
    o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, false), e.removeEventListener("load", H, false)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H));
  };
  b.fn = b.prototype = { jquery: p, constructor: b, init: function(e2, n2, r2) {
    var i2, a2;
    if (!e2)
      return this;
    if (typeof e2 == "string") {
      if (i2 = e2.charAt(0) === "<" && e2.charAt(e2.length - 1) === ">" && e2.length >= 3 ? [null, e2, null] : N.exec(e2), !i2 || !i2[1] && n2)
        return !n2 || n2.jquery ? (n2 || r2).find(e2) : this.constructor(n2).find(e2);
      if (i2[1]) {
        if (n2 = n2 instanceof b ? n2[0] : n2, b.merge(this, b.parseHTML(i2[1], n2 && n2.nodeType ? n2.ownerDocument || n2 : o, true)), C.test(i2[1]) && b.isPlainObject(n2))
          for (i2 in n2)
            b.isFunction(this[i2]) ? this[i2](n2[i2]) : this.attr(i2, n2[i2]);
        return this;
      }
      if (a2 = o.getElementById(i2[2]), a2 && a2.parentNode) {
        if (a2.id !== i2[2])
          return r2.find(e2);
        this.length = 1, this[0] = a2;
      }
      return this.context = o, this.selector = e2, this;
    }
    return e2.nodeType ? (this.context = this[0] = e2, this.length = 1, this) : b.isFunction(e2) ? r2.ready(e2) : (e2.selector !== t && (this.selector = e2.selector, this.context = e2.context), b.makeArray(e2, this));
  }, selector: "", length: 0, size: function() {
    return this.length;
  }, toArray: function() {
    return h.call(this);
  }, get: function(e2) {
    return e2 == null ? this.toArray() : 0 > e2 ? this[this.length + e2] : this[e2];
  }, pushStack: function(e2) {
    var t2 = b.merge(this.constructor(), e2);
    return t2.prevObject = this, t2.context = this.context, t2;
  }, each: function(e2, t2) {
    return b.each(this, e2, t2);
  }, ready: function(e2) {
    return b.ready.promise().done(e2), this;
  }, slice: function() {
    return this.pushStack(h.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (0 > e2 ? t2 : 0);
    return this.pushStack(n2 >= 0 && t2 > n2 ? [this[n2]] : []);
  }, map: function(e2) {
    return this.pushStack(b.map(this, function(t2, n2) {
      return e2.call(t2, n2, t2);
    }));
  }, end: function() {
    return this.prevObject || this.constructor(null);
  }, push: d, sort: [].sort, splice: [].splice }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
    var e2, n2, r2, i2, o2, a2, s2 = arguments[0] || {}, u2 = 1, l2 = arguments.length, c2 = false;
    for (typeof s2 == "boolean" && (c2 = s2, s2 = arguments[1] || {}, u2 = 2), typeof s2 == "object" || b.isFunction(s2) || (s2 = {}), l2 === u2 && (s2 = this, --u2); l2 > u2; u2++)
      if ((o2 = arguments[u2]) != null)
        for (i2 in o2)
          e2 = s2[i2], r2 = o2[i2], s2 !== r2 && (c2 && r2 && (b.isPlainObject(r2) || (n2 = b.isArray(r2))) ? (n2 ? (n2 = false, a2 = e2 && b.isArray(e2) ? e2 : []) : a2 = e2 && b.isPlainObject(e2) ? e2 : {}, s2[i2] = b.extend(c2, a2, r2)) : r2 !== t && (s2[i2] = r2));
    return s2;
  }, b.extend({ noConflict: function(t2) {
    return e.$ === b && (e.$ = u), t2 && e.jQuery === b && (e.jQuery = s), b;
  }, isReady: false, readyWait: 1, holdReady: function(e2) {
    e2 ? b.readyWait++ : b.ready(true);
  }, ready: function(e2) {
    if (e2 === true ? !--b.readyWait : !b.isReady) {
      if (!o.body)
        return setTimeout(b.ready);
      b.isReady = true, e2 !== true && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"));
    }
  }, isFunction: function(e2) {
    return b.type(e2) === "function";
  }, isArray: Array.isArray || function(e2) {
    return b.type(e2) === "array";
  }, isWindow: function(e2) {
    return e2 != null && e2 == e2.window;
  }, isNumeric: function(e2) {
    return !isNaN(parseFloat(e2)) && isFinite(e2);
  }, type: function(e2) {
    return e2 == null ? e2 + "" : typeof e2 == "object" || typeof e2 == "function" ? l[m.call(e2)] || "object" : typeof e2;
  }, isPlainObject: function(e2) {
    if (!e2 || b.type(e2) !== "object" || e2.nodeType || b.isWindow(e2))
      return false;
    try {
      if (e2.constructor && !y.call(e2, "constructor") && !y.call(e2.constructor.prototype, "isPrototypeOf"))
        return false;
    } catch (n2) {
      return false;
    }
    var r2;
    for (r2 in e2)
      ;
    return r2 === t || y.call(e2, r2);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2)
      return false;
    return true;
  }, error: function(e2) {
    throw Error(e2);
  }, parseHTML: function(e2, t2, n2) {
    if (!e2 || typeof e2 != "string")
      return null;
    typeof t2 == "boolean" && (n2 = t2, t2 = false), t2 = t2 || o;
    var r2 = C.exec(e2), i2 = !n2 && [];
    return r2 ? [t2.createElement(r2[1])] : (r2 = b.buildFragment([e2], t2, i2), i2 && b(i2).remove(), b.merge([], r2.childNodes));
  }, parseJSON: function(n2) {
    return e.JSON && e.JSON.parse ? e.JSON.parse(n2) : n2 === null ? n2 : typeof n2 == "string" && (n2 = b.trim(n2), n2 && k.test(n2.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n2)() : (b.error("Invalid JSON: " + n2), t);
  }, parseXML: function(n2) {
    var r2, i2;
    if (!n2 || typeof n2 != "string")
      return null;
    try {
      e.DOMParser ? (i2 = new DOMParser(), r2 = i2.parseFromString(n2, "text/xml")) : (r2 = new ActiveXObject("Microsoft.XMLDOM"), r2.async = "false", r2.loadXML(n2));
    } catch (o2) {
      r2 = t;
    }
    return r2 && r2.documentElement && !r2.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n2), r2;
  }, noop: function() {
  }, globalEval: function(t2) {
    t2 && b.trim(t2) && (e.execScript || function(t3) {
      e.eval.call(e, t3);
    })(t2);
  }, camelCase: function(e2) {
    return e2.replace(j, "ms-").replace(D, L);
  }, nodeName: function(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }, each: function(e2, t2, n2) {
    var r2, i2 = 0, o2 = e2.length, a2 = M(e2);
    if (n2) {
      if (a2) {
        for (; o2 > i2; i2++)
          if (r2 = t2.apply(e2[i2], n2), r2 === false)
            break;
      } else
        for (i2 in e2)
          if (r2 = t2.apply(e2[i2], n2), r2 === false)
            break;
    } else if (a2) {
      for (; o2 > i2; i2++)
        if (r2 = t2.call(e2[i2], i2, e2[i2]), r2 === false)
          break;
    } else
      for (i2 in e2)
        if (r2 = t2.call(e2[i2], i2, e2[i2]), r2 === false)
          break;
    return e2;
  }, trim: v && !v.call("\\uFEFF\\xA0") ? function(e2) {
    return e2 == null ? "" : v.call(e2);
  } : function(e2) {
    return e2 == null ? "" : (e2 + "").replace(T, "");
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return e2 != null && (M(Object(e2)) ? b.merge(n2, typeof e2 == "string" ? [e2] : e2) : d.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    var r2;
    if (t2) {
      if (g)
        return g.call(t2, e2, n2);
      for (r2 = t2.length, n2 = n2 ? 0 > n2 ? Math.max(0, r2 + n2) : n2 : 0; r2 > n2; n2++)
        if (n2 in t2 && t2[n2] === e2)
          return n2;
    }
    return -1;
  }, merge: function(e2, n2) {
    var r2 = n2.length, i2 = e2.length, o2 = 0;
    if (typeof r2 == "number")
      for (; r2 > o2; o2++)
        e2[i2++] = n2[o2];
    else
      while (n2[o2] !== t)
        e2[i2++] = n2[o2++];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    var r2, i2 = [], o2 = 0, a2 = e2.length;
    for (n2 = !!n2; a2 > o2; o2++)
      r2 = !!t2(e2[o2], o2), n2 !== r2 && i2.push(e2[o2]);
    return i2;
  }, map: function(e2, t2, n2) {
    var r2, i2 = 0, o2 = e2.length, a2 = M(e2), s2 = [];
    if (a2)
      for (; o2 > i2; i2++)
        r2 = t2(e2[i2], i2, n2), r2 != null && (s2[s2.length] = r2);
    else
      for (i2 in e2)
        r2 = t2(e2[i2], i2, n2), r2 != null && (s2[s2.length] = r2);
    return f.apply([], s2);
  }, guid: 1, proxy: function(e2, n2) {
    var r2, i2, o2;
    return typeof n2 == "string" && (o2 = e2[n2], n2 = e2, e2 = o2), b.isFunction(e2) ? (r2 = h.call(arguments, 2), i2 = function() {
      return e2.apply(n2 || this, r2.concat(h.call(arguments)));
    }, i2.guid = e2.guid = e2.guid || b.guid++, i2) : t;
  }, access: function(e2, n2, r2, i2, o2, a2, s2) {
    var u2 = 0, l2 = e2.length, c2 = r2 == null;
    if (b.type(r2) === "object") {
      o2 = true;
      for (u2 in r2)
        b.access(e2, n2, u2, r2[u2], true, a2, s2);
    } else if (i2 !== t && (o2 = true, b.isFunction(i2) || (s2 = true), c2 && (s2 ? (n2.call(e2, i2), n2 = null) : (c2 = n2, n2 = function(e3, t2, n3) {
      return c2.call(b(e3), n3);
    })), n2))
      for (; l2 > u2; u2++)
        n2(e2[u2], r2, s2 ? i2 : i2.call(e2[u2], u2, n2(e2[u2], r2)));
    return o2 ? e2 : c2 ? n2.call(e2) : l2 ? n2(e2[0], r2) : a2;
  }, now: function() {
    return new Date().getTime();
  } }), b.ready.promise = function(t2) {
    if (!n)
      if (n = b.Deferred(), o.readyState === "complete")
        setTimeout(b.ready);
      else if (o.addEventListener)
        o.addEventListener("DOMContentLoaded", H, false), e.addEventListener("load", H, false);
      else {
        o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
        var r2 = false;
        try {
          r2 = e.frameElement == null && o.documentElement;
        } catch (i2) {
        }
        r2 && r2.doScroll && function a2() {
          if (!b.isReady) {
            try {
              r2.doScroll("left");
            } catch (e2) {
              return setTimeout(a2, 50);
            }
            q(), b.ready();
          }
        }();
      }
    return n.promise(t2);
  }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e2, t2) {
    l["[object " + t2 + "]"] = t2.toLowerCase();
  });
  function M(e2) {
    var t2 = e2.length, n2 = b.type(e2);
    return b.isWindow(e2) ? false : e2.nodeType === 1 && t2 ? true : n2 === "array" || n2 !== "function" && (t2 === 0 || typeof t2 == "number" && t2 > 0 && t2 - 1 in e2);
  }
  r = b(o);
  var _ = {};
  function F(e2) {
    var t2 = _[e2] = {};
    return b.each(e2.match(w) || [], function(e3, n2) {
      t2[n2] = true;
    }), t2;
  }
  b.Callbacks = function(e2) {
    e2 = typeof e2 == "string" ? _[e2] || F(e2) : b.extend({}, e2);
    var n2, r2, i2, o2, a2, s2, u2 = [], l2 = !e2.once && [], c2 = function(t2) {
      for (r2 = e2.memory && t2, i2 = true, a2 = s2 || 0, s2 = 0, o2 = u2.length, n2 = true; u2 && o2 > a2; a2++)
        if (u2[a2].apply(t2[0], t2[1]) === false && e2.stopOnFalse) {
          r2 = false;
          break;
        }
      n2 = false, u2 && (l2 ? l2.length && c2(l2.shift()) : r2 ? u2 = [] : p2.disable());
    }, p2 = { add: function() {
      if (u2) {
        var t2 = u2.length;
        (function i3(t3) {
          b.each(t3, function(t4, n3) {
            var r3 = b.type(n3);
            r3 === "function" ? e2.unique && p2.has(n3) || u2.push(n3) : n3 && n3.length && r3 !== "string" && i3(n3);
          });
        })(arguments), n2 ? o2 = u2.length : r2 && (s2 = t2, c2(r2));
      }
      return this;
    }, remove: function() {
      return u2 && b.each(arguments, function(e3, t2) {
        var r3;
        while ((r3 = b.inArray(t2, u2, r3)) > -1)
          u2.splice(r3, 1), n2 && (o2 >= r3 && o2--, a2 >= r3 && a2--);
      }), this;
    }, has: function(e3) {
      return e3 ? b.inArray(e3, u2) > -1 : !(!u2 || !u2.length);
    }, empty: function() {
      return u2 = [], this;
    }, disable: function() {
      return u2 = l2 = r2 = t, this;
    }, disabled: function() {
      return !u2;
    }, lock: function() {
      return l2 = t, r2 || p2.disable(), this;
    }, locked: function() {
      return !l2;
    }, fireWith: function(e3, t2) {
      return t2 = t2 || [], t2 = [e3, t2.slice ? t2.slice() : t2], !u2 || i2 && !l2 || (n2 ? l2.push(t2) : c2(t2)), this;
    }, fire: function() {
      return p2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!i2;
    } };
    return p2;
  }, b.extend({ Deferred: function(e2) {
    var t2 = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]], n2 = "pending", r2 = { state: function() {
      return n2;
    }, always: function() {
      return i2.done(arguments).fail(arguments), this;
    }, then: function() {
      var e3 = arguments;
      return b.Deferred(function(n3) {
        b.each(t2, function(t3, o2) {
          var a2 = o2[0], s2 = b.isFunction(e3[t3]) && e3[t3];
          i2[o2[1]](function() {
            var e4 = s2 && s2.apply(this, arguments);
            e4 && b.isFunction(e4.promise) ? e4.promise().done(n3.resolve).fail(n3.reject).progress(n3.notify) : n3[a2 + "With"](this === r2 ? n3.promise() : this, s2 ? [e4] : arguments);
          });
        }), e3 = null;
      }).promise();
    }, promise: function(e3) {
      return e3 != null ? b.extend(e3, r2) : r2;
    } }, i2 = {};
    return r2.pipe = r2.then, b.each(t2, function(e3, o2) {
      var a2 = o2[2], s2 = o2[3];
      r2[o2[1]] = a2.add, s2 && a2.add(function() {
        n2 = s2;
      }, t2[1 ^ e3][2].disable, t2[2][2].lock), i2[o2[0]] = function() {
        return i2[o2[0] + "With"](this === i2 ? r2 : this, arguments), this;
      }, i2[o2[0] + "With"] = a2.fireWith;
    }), r2.promise(i2), e2 && e2.call(i2, i2), i2;
  }, when: function(e2) {
    var t2 = 0, n2 = h.call(arguments), r2 = n2.length, i2 = r2 !== 1 || e2 && b.isFunction(e2.promise) ? r2 : 0, o2 = i2 === 1 ? e2 : b.Deferred(), a2 = function(e3, t3, n3) {
      return function(r3) {
        t3[e3] = this, n3[e3] = arguments.length > 1 ? h.call(arguments) : r3, n3 === s2 ? o2.notifyWith(t3, n3) : --i2 || o2.resolveWith(t3, n3);
      };
    }, s2, u2, l2;
    if (r2 > 1)
      for (s2 = Array(r2), u2 = Array(r2), l2 = Array(r2); r2 > t2; t2++)
        n2[t2] && b.isFunction(n2[t2].promise) ? n2[t2].promise().done(a2(t2, l2, n2)).fail(o2.reject).progress(a2(t2, u2, s2)) : --i2;
    return i2 || o2.resolveWith(l2, n2), o2.promise();
  } }), b.support = function() {
    var t2, n2, r2, a2, s2, u2, l2, c2, p2, f2, d2 = o.createElement("div");
    if (d2.setAttribute("className", "t"), d2.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n2 = d2.getElementsByTagName("*"), r2 = d2.getElementsByTagName("a")[0], !n2 || !r2 || !n2.length)
      return {};
    s2 = o.createElement("select"), l2 = s2.appendChild(o.createElement("option")), a2 = d2.getElementsByTagName("input")[0], r2.style.cssText = "top:1px;float:left;opacity:.5", t2 = { getSetAttribute: d2.className !== "t", leadingWhitespace: d2.firstChild.nodeType === 3, tbody: !d2.getElementsByTagName("tbody").length, htmlSerialize: !!d2.getElementsByTagName("link").length, style: /top/.test(r2.getAttribute("style")), hrefNormalized: r2.getAttribute("href") === "/a", opacity: /^0.5/.test(r2.style.opacity), cssFloat: !!r2.style.cssFloat, checkOn: !!a2.value, optSelected: l2.selected, enctype: !!o.createElement("form").enctype, html5Clone: o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>", boxModel: o.compatMode === "CSS1Compat", deleteExpando: true, noCloneEvent: true, inlineBlockNeedsLayout: false, shrinkWrapBlocks: false, reliableMarginRight: true, boxSizingReliable: true, pixelPosition: false }, a2.checked = true, t2.noCloneChecked = a2.cloneNode(true).checked, s2.disabled = true, t2.optDisabled = !l2.disabled;
    try {
      delete d2.test;
    } catch (h2) {
      t2.deleteExpando = false;
    }
    a2 = o.createElement("input"), a2.setAttribute("value", ""), t2.input = a2.getAttribute("value") === "", a2.value = "t", a2.setAttribute("type", "radio"), t2.radioValue = a2.value === "t", a2.setAttribute("checked", "t"), a2.setAttribute("name", "t"), u2 = o.createDocumentFragment(), u2.appendChild(a2), t2.appendChecked = a2.checked, t2.checkClone = u2.cloneNode(true).cloneNode(true).lastChild.checked, d2.attachEvent && (d2.attachEvent("onclick", function() {
      t2.noCloneEvent = false;
    }), d2.cloneNode(true).click());
    for (f2 in { submit: true, change: true, focusin: true })
      d2.setAttribute(c2 = "on" + f2, "t"), t2[f2 + "Bubbles"] = c2 in e || d2.attributes[c2].expando === false;
    return d2.style.backgroundClip = "content-box", d2.cloneNode(true).style.backgroundClip = "", t2.clearCloneStyle = d2.style.backgroundClip === "content-box", b(function() {
      var n3, r3, a3, s3 = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u3 = o.getElementsByTagName("body")[0];
      u3 && (n3 = o.createElement("div"), n3.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u3.appendChild(n3).appendChild(d2), d2.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a3 = d2.getElementsByTagName("td"), a3[0].style.cssText = "padding:0;margin:0;border:0;display:none", p2 = a3[0].offsetHeight === 0, a3[0].style.display = "", a3[1].style.display = "none", t2.reliableHiddenOffsets = p2 && a3[0].offsetHeight === 0, d2.innerHTML = "", d2.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t2.boxSizing = d2.offsetWidth === 4, t2.doesNotIncludeMarginInBodyOffset = u3.offsetTop !== 1, e.getComputedStyle && (t2.pixelPosition = (e.getComputedStyle(d2, null) || {}).top !== "1%", t2.boxSizingReliable = (e.getComputedStyle(d2, null) || { width: "4px" }).width === "4px", r3 = d2.appendChild(o.createElement("div")), r3.style.cssText = d2.style.cssText = s3, r3.style.marginRight = r3.style.width = "0", d2.style.width = "1px", t2.reliableMarginRight = !parseFloat((e.getComputedStyle(r3, null) || {}).marginRight)), typeof d2.style.zoom !== i && (d2.innerHTML = "", d2.style.cssText = s3 + "width:1px;padding:1px;display:inline;zoom:1", t2.inlineBlockNeedsLayout = d2.offsetWidth === 3, d2.style.display = "block", d2.innerHTML = "<div></div>", d2.firstChild.style.width = "5px", t2.shrinkWrapBlocks = d2.offsetWidth !== 3, t2.inlineBlockNeedsLayout && (u3.style.zoom = 1)), u3.removeChild(n3), n3 = d2 = a3 = r3 = null);
    }), n2 = s2 = u2 = l2 = r2 = a2 = null, t2;
  }();
  var O = /(?:\\{[\\s\\S]*\\}|\\[[\\s\\S]*\\])$/, B = /([A-Z])/g;
  function P(e2, n2, r2, i2) {
    if (b.acceptData(e2)) {
      var o2, a2, s2 = b.expando, u2 = typeof n2 == "string", l2 = e2.nodeType, p2 = l2 ? b.cache : e2, f2 = l2 ? e2[s2] : e2[s2] && s2;
      if (f2 && p2[f2] && (i2 || p2[f2].data) || !u2 || r2 !== t)
        return f2 || (l2 ? e2[s2] = f2 = c.pop() || b.guid++ : f2 = s2), p2[f2] || (p2[f2] = {}, l2 || (p2[f2].toJSON = b.noop)), (typeof n2 == "object" || typeof n2 == "function") && (i2 ? p2[f2] = b.extend(p2[f2], n2) : p2[f2].data = b.extend(p2[f2].data, n2)), o2 = p2[f2], i2 || (o2.data || (o2.data = {}), o2 = o2.data), r2 !== t && (o2[b.camelCase(n2)] = r2), u2 ? (a2 = o2[n2], a2 == null && (a2 = o2[b.camelCase(n2)])) : a2 = o2, a2;
    }
  }
  function R(e2, t2, n2) {
    if (b.acceptData(e2)) {
      var r2, i2, o2, a2 = e2.nodeType, s2 = a2 ? b.cache : e2, u2 = a2 ? e2[b.expando] : b.expando;
      if (s2[u2]) {
        if (t2 && (o2 = n2 ? s2[u2] : s2[u2].data)) {
          b.isArray(t2) ? t2 = t2.concat(b.map(t2, b.camelCase)) : t2 in o2 ? t2 = [t2] : (t2 = b.camelCase(t2), t2 = t2 in o2 ? [t2] : t2.split(" "));
          for (r2 = 0, i2 = t2.length; i2 > r2; r2++)
            delete o2[t2[r2]];
          if (!(n2 ? $ : b.isEmptyObject)(o2))
            return;
        }
        (n2 || (delete s2[u2].data, $(s2[u2]))) && (a2 ? b.cleanData([e2], true) : b.support.deleteExpando || s2 != s2.window ? delete s2[u2] : s2[u2] = null);
      }
    }
  }
  b.extend({ cache: {}, expando: "jQuery" + (p + Math.random()).replace(/\\D/g, ""), noData: { embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true }, hasData: function(e2) {
    return e2 = e2.nodeType ? b.cache[e2[b.expando]] : e2[b.expando], !!e2 && !$(e2);
  }, data: function(e2, t2, n2) {
    return P(e2, t2, n2);
  }, removeData: function(e2, t2) {
    return R(e2, t2);
  }, _data: function(e2, t2, n2) {
    return P(e2, t2, n2, true);
  }, _removeData: function(e2, t2) {
    return R(e2, t2, true);
  }, acceptData: function(e2) {
    if (e2.nodeType && e2.nodeType !== 1 && e2.nodeType !== 9)
      return false;
    var t2 = e2.nodeName && b.noData[e2.nodeName.toLowerCase()];
    return !t2 || t2 !== true && e2.getAttribute("classid") === t2;
  } }), b.fn.extend({ data: function(e2, n2) {
    var r2, i2, o2 = this[0], a2 = 0, s2 = null;
    if (e2 === t) {
      if (this.length && (s2 = b.data(o2), o2.nodeType === 1 && !b._data(o2, "parsedAttrs"))) {
        for (r2 = o2.attributes; r2.length > a2; a2++)
          i2 = r2[a2].name, i2.indexOf("data-") || (i2 = b.camelCase(i2.slice(5)), W(o2, i2, s2[i2]));
        b._data(o2, "parsedAttrs", true);
      }
      return s2;
    }
    return typeof e2 == "object" ? this.each(function() {
      b.data(this, e2);
    }) : b.access(this, function(n3) {
      return n3 === t ? o2 ? W(o2, e2, b.data(o2, e2)) : null : (this.each(function() {
        b.data(this, e2, n3);
      }), t);
    }, null, n2, arguments.length > 1, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      b.removeData(this, e2);
    });
  } });
  function W(e2, n2, r2) {
    if (r2 === t && e2.nodeType === 1) {
      var i2 = "data-" + n2.replace(B, "-$1").toLowerCase();
      if (r2 = e2.getAttribute(i2), typeof r2 == "string") {
        try {
          r2 = r2 === "true" ? true : r2 === "false" ? false : r2 === "null" ? null : +r2 + "" === r2 ? +r2 : O.test(r2) ? b.parseJSON(r2) : r2;
        } catch (o2) {
        }
        b.data(e2, n2, r2);
      } else
        r2 = t;
    }
    return r2;
  }
  function $(e2) {
    var t2;
    for (t2 in e2)
      if ((t2 !== "data" || !b.isEmptyObject(e2[t2])) && t2 !== "toJSON")
        return false;
    return true;
  }
  b.extend({ queue: function(e2, n2, r2) {
    var i2;
    return e2 ? (n2 = (n2 || "fx") + "queue", i2 = b._data(e2, n2), r2 && (!i2 || b.isArray(r2) ? i2 = b._data(e2, n2, b.makeArray(r2)) : i2.push(r2)), i2 || []) : t;
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = b.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = b._queueHooks(e2, t2), a2 = function() {
      b.dequeue(e2, t2);
    };
    i2 === "inprogress" && (i2 = n2.shift(), r2--), o2.cur = i2, i2 && (t2 === "fx" && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, a2, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return b._data(e2, n2) || b._data(e2, n2, { empty: b.Callbacks("once memory").add(function() {
      b._removeData(e2, t2 + "queue"), b._removeData(e2, n2);
    }) });
  } }), b.fn.extend({ queue: function(e2, n2) {
    var r2 = 2;
    return typeof e2 != "string" && (n2 = e2, e2 = "fx", r2--), r2 > arguments.length ? b.queue(this[0], e2) : n2 === t ? this : this.each(function() {
      var t2 = b.queue(this, e2, n2);
      b._queueHooks(this, e2), e2 === "fx" && t2[0] !== "inprogress" && b.dequeue(this, e2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      b.dequeue(this, e2);
    });
  }, delay: function(e2, t2) {
    return e2 = b.fx ? b.fx.speeds[e2] || e2 : e2, t2 = t2 || "fx", this.queue(t2, function(t3, n2) {
      var r2 = setTimeout(t3, e2);
      n2.stop = function() {
        clearTimeout(r2);
      };
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, n2) {
    var r2, i2 = 1, o2 = b.Deferred(), a2 = this, s2 = this.length, u2 = function() {
      --i2 || o2.resolveWith(a2, [a2]);
    };
    typeof e2 != "string" && (n2 = e2, e2 = t), e2 = e2 || "fx";
    while (s2--)
      r2 = b._data(a2[s2], e2 + "queueHooks"), r2 && r2.empty && (i2++, r2.empty.add(u2));
    return u2(), o2.promise(n2);
  } });
  var I, z, X = /[\\t\\r\\n]/g, U = /\\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
  b.fn.extend({ attr: function(e2, t2) {
    return b.access(this, b.attr, e2, t2, arguments.length > 1);
  }, removeAttr: function(e2) {
    return this.each(function() {
      b.removeAttr(this, e2);
    });
  }, prop: function(e2, t2) {
    return b.access(this, b.prop, e2, t2, arguments.length > 1);
  }, removeProp: function(e2) {
    return e2 = b.propFix[e2] || e2, this.each(function() {
      try {
        this[e2] = t, delete this[e2];
      } catch (n2) {
      }
    });
  }, addClass: function(e2) {
    var t2, n2, r2, i2, o2, a2 = 0, s2 = this.length, u2 = typeof e2 == "string" && e2;
    if (b.isFunction(e2))
      return this.each(function(t3) {
        b(this).addClass(e2.call(this, t3, this.className));
      });
    if (u2) {
      for (t2 = (e2 || "").match(w) || []; s2 > a2; a2++)
        if (n2 = this[a2], r2 = n2.nodeType === 1 && (n2.className ? (" " + n2.className + " ").replace(X, " ") : " ")) {
          o2 = 0;
          while (i2 = t2[o2++])
            0 > r2.indexOf(" " + i2 + " ") && (r2 += i2 + " ");
          n2.className = b.trim(r2);
        }
    }
    return this;
  }, removeClass: function(e2) {
    var t2, n2, r2, i2, o2, a2 = 0, s2 = this.length, u2 = arguments.length === 0 || typeof e2 == "string" && e2;
    if (b.isFunction(e2))
      return this.each(function(t3) {
        b(this).removeClass(e2.call(this, t3, this.className));
      });
    if (u2) {
      for (t2 = (e2 || "").match(w) || []; s2 > a2; a2++)
        if (n2 = this[a2], r2 = n2.nodeType === 1 && (n2.className ? (" " + n2.className + " ").replace(X, " ") : "")) {
          o2 = 0;
          while (i2 = t2[o2++])
            while (r2.indexOf(" " + i2 + " ") >= 0)
              r2 = r2.replace(" " + i2 + " ", " ");
          n2.className = e2 ? b.trim(r2) : "";
        }
    }
    return this;
  }, toggleClass: function(e2, t2) {
    var n2 = typeof e2, r2 = typeof t2 == "boolean";
    return b.isFunction(e2) ? this.each(function(n3) {
      b(this).toggleClass(e2.call(this, n3, this.className, t2), t2);
    }) : this.each(function() {
      if (n2 === "string") {
        var o2, a2 = 0, s2 = b(this), u2 = t2, l2 = e2.match(w) || [];
        while (o2 = l2[a2++])
          u2 = r2 ? u2 : !s2.hasClass(o2), s2[u2 ? "addClass" : "removeClass"](o2);
      } else
        (n2 === i || n2 === "boolean") && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e2 === false ? "" : b._data(this, "__className__") || "");
    });
  }, hasClass: function(e2) {
    var t2 = " " + e2 + " ", n2 = 0, r2 = this.length;
    for (; r2 > n2; n2++)
      if (this[n2].nodeType === 1 && (" " + this[n2].className + " ").replace(X, " ").indexOf(t2) >= 0)
        return true;
    return false;
  }, val: function(e2) {
    var n2, r2, i2, o2 = this[0];
    {
      if (arguments.length)
        return i2 = b.isFunction(e2), this.each(function(n3) {
          var o3, a2 = b(this);
          this.nodeType === 1 && (o3 = i2 ? e2.call(this, n3, a2.val()) : e2, o3 == null ? o3 = "" : typeof o3 == "number" ? o3 += "" : b.isArray(o3) && (o3 = b.map(o3, function(e3) {
            return e3 == null ? "" : e3 + "";
          })), r2 = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r2 && "set" in r2 && r2.set(this, o3, "value") !== t || (this.value = o3));
        });
      if (o2)
        return r2 = b.valHooks[o2.type] || b.valHooks[o2.nodeName.toLowerCase()], r2 && "get" in r2 && (n2 = r2.get(o2, "value")) !== t ? n2 : (n2 = o2.value, typeof n2 == "string" ? n2.replace(U, "") : n2 == null ? "" : n2);
    }
  } }), b.extend({ valHooks: { option: { get: function(e2) {
    var t2 = e2.attributes.value;
    return !t2 || t2.specified ? e2.value : e2.text;
  } }, select: { get: function(e2) {
    var t2, n2, r2 = e2.options, i2 = e2.selectedIndex, o2 = e2.type === "select-one" || 0 > i2, a2 = o2 ? null : [], s2 = o2 ? i2 + 1 : r2.length, u2 = 0 > i2 ? s2 : o2 ? i2 : 0;
    for (; s2 > u2; u2++)
      if (n2 = r2[u2], !(!n2.selected && u2 !== i2 || (b.support.optDisabled ? n2.disabled : n2.getAttribute("disabled") !== null) || n2.parentNode.disabled && b.nodeName(n2.parentNode, "optgroup"))) {
        if (t2 = b(n2).val(), o2)
          return t2;
        a2.push(t2);
      }
    return a2;
  }, set: function(e2, t2) {
    var n2 = b.makeArray(t2);
    return b(e2).find("option").each(function() {
      this.selected = b.inArray(b(this).val(), n2) >= 0;
    }), n2.length || (e2.selectedIndex = -1), n2;
  } } }, attr: function(e2, n2, r2) {
    var o2, a2, s2, u2 = e2.nodeType;
    if (e2 && u2 !== 3 && u2 !== 8 && u2 !== 2)
      return typeof e2.getAttribute === i ? b.prop(e2, n2, r2) : (a2 = u2 !== 1 || !b.isXMLDoc(e2), a2 && (n2 = n2.toLowerCase(), o2 = b.attrHooks[n2] || (J.test(n2) ? z : I)), r2 === t ? o2 && a2 && "get" in o2 && (s2 = o2.get(e2, n2)) !== null ? s2 : (typeof e2.getAttribute !== i && (s2 = e2.getAttribute(n2)), s2 == null ? t : s2) : r2 !== null ? o2 && a2 && "set" in o2 && (s2 = o2.set(e2, r2, n2)) !== t ? s2 : (e2.setAttribute(n2, r2 + ""), r2) : (b.removeAttr(e2, n2), t));
  }, removeAttr: function(e2, t2) {
    var n2, r2, i2 = 0, o2 = t2 && t2.match(w);
    if (o2 && e2.nodeType === 1)
      while (n2 = o2[i2++])
        r2 = b.propFix[n2] || n2, J.test(n2) ? !Q && G.test(n2) ? e2[b.camelCase("default-" + n2)] = e2[r2] = false : e2[r2] = false : b.attr(e2, n2, ""), e2.removeAttribute(Q ? n2 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!b.support.radioValue && t2 === "radio" && b.nodeName(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(e2, n2, r2) {
    var i2, o2, a2, s2 = e2.nodeType;
    if (e2 && s2 !== 3 && s2 !== 8 && s2 !== 2)
      return a2 = s2 !== 1 || !b.isXMLDoc(e2), a2 && (n2 = b.propFix[n2] || n2, o2 = b.propHooks[n2]), r2 !== t ? o2 && "set" in o2 && (i2 = o2.set(e2, r2, n2)) !== t ? i2 : e2[n2] = r2 : o2 && "get" in o2 && (i2 = o2.get(e2, n2)) !== null ? i2 : e2[n2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var n2 = e2.getAttributeNode("tabindex");
    return n2 && n2.specified ? parseInt(n2.value, 10) : V.test(e2.nodeName) || Y.test(e2.nodeName) && e2.href ? 0 : t;
  } } } }), z = { get: function(e2, n2) {
    var r2 = b.prop(e2, n2), i2 = typeof r2 == "boolean" && e2.getAttribute(n2), o2 = typeof r2 == "boolean" ? K && Q ? i2 != null : G.test(n2) ? e2[b.camelCase("default-" + n2)] : !!i2 : e2.getAttributeNode(n2);
    return o2 && o2.value !== false ? n2.toLowerCase() : t;
  }, set: function(e2, t2, n2) {
    return t2 === false ? b.removeAttr(e2, n2) : K && Q || !G.test(n2) ? e2.setAttribute(!Q && b.propFix[n2] || n2, n2) : e2[b.camelCase("default-" + n2)] = e2[n2] = true, n2;
  } }, K && Q || (b.attrHooks.value = { get: function(e2, n2) {
    var r2 = e2.getAttributeNode(n2);
    return b.nodeName(e2, "input") ? e2.defaultValue : r2 && r2.specified ? r2.value : t;
  }, set: function(e2, n2, r2) {
    return b.nodeName(e2, "input") ? (e2.defaultValue = n2, t) : I && I.set(e2, n2, r2);
  } }), Q || (I = b.valHooks.button = { get: function(e2, n2) {
    var r2 = e2.getAttributeNode(n2);
    return r2 && (n2 === "id" || n2 === "name" || n2 === "coords" ? r2.value !== "" : r2.specified) ? r2.value : t;
  }, set: function(e2, n2, r2) {
    var i2 = e2.getAttributeNode(r2);
    return i2 || e2.setAttributeNode(i2 = e2.ownerDocument.createAttribute(r2)), i2.value = n2 += "", r2 === "value" || n2 === e2.getAttribute(r2) ? n2 : t;
  } }, b.attrHooks.contenteditable = { get: I.get, set: function(e2, t2, n2) {
    I.set(e2, t2 === "" ? false : t2, n2);
  } }, b.each(["width", "height"], function(e2, n2) {
    b.attrHooks[n2] = b.extend(b.attrHooks[n2], { set: function(e3, r2) {
      return r2 === "" ? (e3.setAttribute(n2, "auto"), r2) : t;
    } });
  })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e2, n2) {
    b.attrHooks[n2] = b.extend(b.attrHooks[n2], { get: function(e3) {
      var r2 = e3.getAttribute(n2, 2);
      return r2 == null ? t : r2;
    } });
  }), b.each(["href", "src"], function(e2, t2) {
    b.propHooks[t2] = { get: function(e3) {
      return e3.getAttribute(t2, 4);
    } };
  })), b.support.style || (b.attrHooks.style = { get: function(e2) {
    return e2.style.cssText || t;
  }, set: function(e2, t2) {
    return e2.style.cssText = t2 + "";
  } }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex), null;
  } })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
    b.valHooks[this] = { get: function(e2) {
      return e2.getAttribute("value") === null ? "on" : e2.value;
    } };
  }), b.each(["radio", "checkbox"], function() {
    b.valHooks[this] = b.extend(b.valHooks[this], { set: function(e2, n2) {
      return b.isArray(n2) ? e2.checked = b.inArray(b(e2).val(), n2) >= 0 : t;
    } });
  });
  var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\\.(.+)|)$/;
  function it() {
    return true;
  }
  function ot() {
    return false;
  }
  b.event = { global: {}, add: function(e2, n2, r2, o2, a2) {
    var s2, u2, l2, c2, p2, f2, d2, h2, g2, m2, y2, v2 = b._data(e2);
    if (v2) {
      r2.handler && (c2 = r2, r2 = c2.handler, a2 = c2.selector), r2.guid || (r2.guid = b.guid++), (u2 = v2.events) || (u2 = v2.events = {}), (f2 = v2.handle) || (f2 = v2.handle = function(e3) {
        return typeof b === i || e3 && b.event.triggered === e3.type ? t : b.event.dispatch.apply(f2.elem, arguments);
      }, f2.elem = e2), n2 = (n2 || "").match(w) || [""], l2 = n2.length;
      while (l2--)
        s2 = rt.exec(n2[l2]) || [], g2 = y2 = s2[1], m2 = (s2[2] || "").split(".").sort(), p2 = b.event.special[g2] || {}, g2 = (a2 ? p2.delegateType : p2.bindType) || g2, p2 = b.event.special[g2] || {}, d2 = b.extend({ type: g2, origType: y2, data: o2, handler: r2, guid: r2.guid, selector: a2, needsContext: a2 && b.expr.match.needsContext.test(a2), namespace: m2.join(".") }, c2), (h2 = u2[g2]) || (h2 = u2[g2] = [], h2.delegateCount = 0, p2.setup && p2.setup.call(e2, o2, m2, f2) !== false || (e2.addEventListener ? e2.addEventListener(g2, f2, false) : e2.attachEvent && e2.attachEvent("on" + g2, f2))), p2.add && (p2.add.call(e2, d2), d2.handler.guid || (d2.handler.guid = r2.guid)), a2 ? h2.splice(h2.delegateCount++, 0, d2) : h2.push(d2), b.event.global[g2] = true;
      e2 = null;
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, p2, f2, d2, h2, g2, m2 = b.hasData(e2) && b._data(e2);
    if (m2 && (c2 = m2.events)) {
      t2 = (t2 || "").match(w) || [""], l2 = t2.length;
      while (l2--)
        if (s2 = rt.exec(t2[l2]) || [], d2 = g2 = s2[1], h2 = (s2[2] || "").split(".").sort(), d2) {
          p2 = b.event.special[d2] || {}, d2 = (r2 ? p2.delegateType : p2.bindType) || d2, f2 = c2[d2] || [], s2 = s2[2] && RegExp("(^|\\\\.)" + h2.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)"), u2 = o2 = f2.length;
          while (o2--)
            a2 = f2[o2], !i2 && g2 !== a2.origType || n2 && n2.guid !== a2.guid || s2 && !s2.test(a2.namespace) || r2 && r2 !== a2.selector && (r2 !== "**" || !a2.selector) || (f2.splice(o2, 1), a2.selector && f2.delegateCount--, p2.remove && p2.remove.call(e2, a2));
          u2 && !f2.length && (p2.teardown && p2.teardown.call(e2, h2, m2.handle) !== false || b.removeEvent(e2, d2, m2.handle), delete c2[d2]);
        } else
          for (d2 in c2)
            b.event.remove(e2, d2 + t2[l2], n2, r2, true);
      b.isEmptyObject(c2) && (delete m2.handle, b._removeData(e2, "events"));
    }
  }, trigger: function(n2, r2, i2, a2) {
    var s2, u2, l2, c2, p2, f2, d2, h2 = [i2 || o], g2 = y.call(n2, "type") ? n2.type : n2, m2 = y.call(n2, "namespace") ? n2.namespace.split(".") : [];
    if (l2 = f2 = i2 = i2 || o, i2.nodeType !== 3 && i2.nodeType !== 8 && !nt.test(g2 + b.event.triggered) && (g2.indexOf(".") >= 0 && (m2 = g2.split("."), g2 = m2.shift(), m2.sort()), u2 = 0 > g2.indexOf(":") && "on" + g2, n2 = n2[b.expando] ? n2 : new b.Event(g2, typeof n2 == "object" && n2), n2.isTrigger = true, n2.namespace = m2.join("."), n2.namespace_re = n2.namespace ? RegExp("(^|\\\\.)" + m2.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)") : null, n2.result = t, n2.target || (n2.target = i2), r2 = r2 == null ? [n2] : b.makeArray(r2, [n2]), p2 = b.event.special[g2] || {}, a2 || !p2.trigger || p2.trigger.apply(i2, r2) !== false)) {
      if (!a2 && !p2.noBubble && !b.isWindow(i2)) {
        for (c2 = p2.delegateType || g2, nt.test(c2 + g2) || (l2 = l2.parentNode); l2; l2 = l2.parentNode)
          h2.push(l2), f2 = l2;
        f2 === (i2.ownerDocument || o) && h2.push(f2.defaultView || f2.parentWindow || e);
      }
      d2 = 0;
      while ((l2 = h2[d2++]) && !n2.isPropagationStopped())
        n2.type = d2 > 1 ? c2 : p2.bindType || g2, s2 = (b._data(l2, "events") || {})[n2.type] && b._data(l2, "handle"), s2 && s2.apply(l2, r2), s2 = u2 && l2[u2], s2 && b.acceptData(l2) && s2.apply && s2.apply(l2, r2) === false && n2.preventDefault();
      if (n2.type = g2, !(a2 || n2.isDefaultPrevented() || p2._default && p2._default.apply(i2.ownerDocument, r2) !== false || g2 === "click" && b.nodeName(i2, "a") || !b.acceptData(i2) || !u2 || !i2[g2] || b.isWindow(i2))) {
        f2 = i2[u2], f2 && (i2[u2] = null), b.event.triggered = g2;
        try {
          i2[g2]();
        } catch (v2) {
        }
        b.event.triggered = t, f2 && (i2[u2] = f2);
      }
      return n2.result;
    }
  }, dispatch: function(e2) {
    e2 = b.event.fix(e2);
    var n2, r2, i2, o2, a2, s2 = [], u2 = h.call(arguments), l2 = (b._data(this, "events") || {})[e2.type] || [], c2 = b.event.special[e2.type] || {};
    if (u2[0] = e2, e2.delegateTarget = this, !c2.preDispatch || c2.preDispatch.call(this, e2) !== false) {
      s2 = b.event.handlers.call(this, e2, l2), n2 = 0;
      while ((o2 = s2[n2++]) && !e2.isPropagationStopped()) {
        e2.currentTarget = o2.elem, a2 = 0;
        while ((i2 = o2.handlers[a2++]) && !e2.isImmediatePropagationStopped())
          (!e2.namespace_re || e2.namespace_re.test(i2.namespace)) && (e2.handleObj = i2, e2.data = i2.data, r2 = ((b.event.special[i2.origType] || {}).handle || i2.handler).apply(o2.elem, u2), r2 !== t && (e2.result = r2) === false && (e2.preventDefault(), e2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, e2), e2.result;
    }
  }, handlers: function(e2, n2) {
    var r2, i2, o2, a2, s2 = [], u2 = n2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && (!e2.button || e2.type !== "click")) {
      for (; l2 != this; l2 = l2.parentNode || this)
        if (l2.nodeType === 1 && (l2.disabled !== true || e2.type !== "click")) {
          for (o2 = [], a2 = 0; u2 > a2; a2++)
            i2 = n2[a2], r2 = i2.selector + " ", o2[r2] === t && (o2[r2] = i2.needsContext ? b(r2, this).index(l2) >= 0 : b.find(r2, this, null, [l2]).length), o2[r2] && o2.push(i2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
    }
    return n2.length > u2 && s2.push({ elem: this, handlers: n2.slice(u2) }), s2;
  }, fix: function(e2) {
    if (e2[b.expando])
      return e2;
    var t2, n2, r2, i2 = e2.type, a2 = e2, s2 = this.fixHooks[i2];
    s2 || (this.fixHooks[i2] = s2 = tt.test(i2) ? this.mouseHooks : et.test(i2) ? this.keyHooks : {}), r2 = s2.props ? this.props.concat(s2.props) : this.props, e2 = new b.Event(a2), t2 = r2.length;
    while (t2--)
      n2 = r2[t2], e2[n2] = a2[n2];
    return e2.target || (e2.target = a2.srcElement || o), e2.target.nodeType === 3 && (e2.target = e2.target.parentNode), e2.metaKey = !!e2.metaKey, s2.filter ? s2.filter(e2, a2) : e2;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e2, t2) {
    return e2.which == null && (e2.which = t2.charCode != null ? t2.charCode : t2.keyCode), e2;
  } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e2, n2) {
    var r2, i2, a2, s2 = n2.button, u2 = n2.fromElement;
    return e2.pageX == null && n2.clientX != null && (i2 = e2.target.ownerDocument || o, a2 = i2.documentElement, r2 = i2.body, e2.pageX = n2.clientX + (a2 && a2.scrollLeft || r2 && r2.scrollLeft || 0) - (a2 && a2.clientLeft || r2 && r2.clientLeft || 0), e2.pageY = n2.clientY + (a2 && a2.scrollTop || r2 && r2.scrollTop || 0) - (a2 && a2.clientTop || r2 && r2.clientTop || 0)), !e2.relatedTarget && u2 && (e2.relatedTarget = u2 === e2.target ? n2.toElement : u2), e2.which || s2 === t || (e2.which = 1 & s2 ? 1 : 2 & s2 ? 3 : 4 & s2 ? 2 : 0), e2;
  } }, special: { load: { noBubble: true }, click: { trigger: function() {
    return b.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(), false) : t;
  } }, focus: { trigger: function() {
    if (this !== o.activeElement && this.focus)
      try {
        return this.focus(), false;
      } catch (e2) {
      }
  }, delegateType: "focusin" }, blur: { trigger: function() {
    return this === o.activeElement && this.blur ? (this.blur(), false) : t;
  }, delegateType: "focusout" }, beforeunload: { postDispatch: function(e2) {
    e2.result !== t && (e2.originalEvent.returnValue = e2.result);
  } } }, simulate: function(e2, t2, n2, r2) {
    var i2 = b.extend(new b.Event(), n2, { type: e2, isSimulated: true, originalEvent: {} });
    r2 ? b.event.trigger(i2, null, t2) : b.event.dispatch.call(t2, i2), i2.isDefaultPrevented() && n2.preventDefault();
  } }, b.removeEvent = o.removeEventListener ? function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2, false);
  } : function(e2, t2, n2) {
    var r2 = "on" + t2;
    e2.detachEvent && (typeof e2[r2] === i && (e2[r2] = null), e2.detachEvent(r2, n2));
  }, b.Event = function(e2, n2) {
    return this instanceof b.Event ? (e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || e2.returnValue === false || e2.getPreventDefault && e2.getPreventDefault() ? it : ot) : this.type = e2, n2 && b.extend(this, n2), this.timeStamp = e2 && e2.timeStamp || b.now(), this[b.expando] = true, t) : new b.Event(e2, n2);
  }, b.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = it, e2 && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false);
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = it, e2 && (e2.stopPropagation && e2.stopPropagation(), e2.cancelBubble = true);
  }, stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = it, this.stopPropagation();
  } }, b.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e2, t2) {
    b.event.special[e2] = { delegateType: t2, bindType: t2, handle: function(e3) {
      var n2, r2 = this, i2 = e3.relatedTarget, o2 = e3.handleObj;
      return (!i2 || i2 !== r2 && !b.contains(r2, i2)) && (e3.type = o2.origType, n2 = o2.handler.apply(this, arguments), e3.type = t2), n2;
    } };
  }), b.support.submitBubbles || (b.event.special.submit = { setup: function() {
    return b.nodeName(this, "form") ? false : (b.event.add(this, "click._submit keypress._submit", function(e2) {
      var n2 = e2.target, r2 = b.nodeName(n2, "input") || b.nodeName(n2, "button") ? n2.form : t;
      r2 && !b._data(r2, "submitBubbles") && (b.event.add(r2, "submit._submit", function(e3) {
        e3._submit_bubble = true;
      }), b._data(r2, "submitBubbles", true));
    }), t);
  }, postDispatch: function(e2) {
    e2._submit_bubble && (delete e2._submit_bubble, this.parentNode && !e2.isTrigger && b.event.simulate("submit", this.parentNode, e2, true));
  }, teardown: function() {
    return b.nodeName(this, "form") ? false : (b.event.remove(this, "._submit"), t);
  } }), b.support.changeBubbles || (b.event.special.change = { setup: function() {
    return Z.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (b.event.add(this, "propertychange._change", function(e2) {
      e2.originalEvent.propertyName === "checked" && (this._just_changed = true);
    }), b.event.add(this, "click._change", function(e2) {
      this._just_changed && !e2.isTrigger && (this._just_changed = false), b.event.simulate("change", this, e2, true);
    })), false) : (b.event.add(this, "beforeactivate._change", function(e2) {
      var t2 = e2.target;
      Z.test(t2.nodeName) && !b._data(t2, "changeBubbles") && (b.event.add(t2, "change._change", function(e3) {
        !this.parentNode || e3.isSimulated || e3.isTrigger || b.event.simulate("change", this.parentNode, e3, true);
      }), b._data(t2, "changeBubbles", true));
    }), t);
  }, handle: function(e2) {
    var n2 = e2.target;
    return this !== n2 || e2.isSimulated || e2.isTrigger || n2.type !== "radio" && n2.type !== "checkbox" ? e2.handleObj.handler.apply(this, arguments) : t;
  }, teardown: function() {
    return b.event.remove(this, "._change"), !Z.test(this.nodeName);
  } }), b.support.focusinBubbles || b.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
    var n2 = 0, r2 = function(e3) {
      b.event.simulate(t2, e3.target, b.event.fix(e3), true);
    };
    b.event.special[t2] = { setup: function() {
      n2++ === 0 && o.addEventListener(e2, r2, true);
    }, teardown: function() {
      --n2 === 0 && o.removeEventListener(e2, r2, true);
    } };
  }), b.fn.extend({ on: function(e2, n2, r2, i2, o2) {
    var a2, s2;
    if (typeof e2 == "object") {
      typeof n2 != "string" && (r2 = r2 || n2, n2 = t);
      for (a2 in e2)
        this.on(a2, n2, r2, e2[a2], o2);
      return this;
    }
    if (r2 == null && i2 == null ? (i2 = n2, r2 = n2 = t) : i2 == null && (typeof n2 == "string" ? (i2 = r2, r2 = t) : (i2 = r2, r2 = n2, n2 = t)), i2 === false)
      i2 = ot;
    else if (!i2)
      return this;
    return o2 === 1 && (s2 = i2, i2 = function(e3) {
      return b().off(e3), s2.apply(this, arguments);
    }, i2.guid = s2.guid || (s2.guid = b.guid++)), this.each(function() {
      b.event.add(this, e2, i2, r2, n2);
    });
  }, one: function(e2, t2, n2, r2) {
    return this.on(e2, t2, n2, r2, 1);
  }, off: function(e2, n2, r2) {
    var i2, o2;
    if (e2 && e2.preventDefault && e2.handleObj)
      return i2 = e2.handleObj, b(e2.delegateTarget).off(i2.namespace ? i2.origType + "." + i2.namespace : i2.origType, i2.selector, i2.handler), this;
    if (typeof e2 == "object") {
      for (o2 in e2)
        this.off(o2, n2, e2[o2]);
      return this;
    }
    return (n2 === false || typeof n2 == "function") && (r2 = n2, n2 = t), r2 === false && (r2 = ot), this.each(function() {
      b.event.remove(this, e2, r2, n2);
    });
  }, bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return arguments.length === 1 ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, trigger: function(e2, t2) {
    return this.each(function() {
      b.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, n2) {
    var r2 = this[0];
    return r2 ? b.event.trigger(e2, n2, r2, true) : t;
  } }), function(e2, t2) {
    var n2, r2, i2, o2, a2, s2, u2, l2, c2, p2, f2, d2, h2, g2, m2, y2, v2, x2 = "sizzle" + -new Date(), w2 = e2.document, T2 = {}, N2 = 0, C2 = 0, k2 = it2(), E2 = it2(), S2 = it2(), A2 = typeof t2, j2 = 1 << 31, D2 = [], L2 = D2.pop, H2 = D2.push, q2 = D2.slice, M2 = D2.indexOf || function(e3) {
      var t3 = 0, n3 = this.length;
      for (; n3 > t3; t3++)
        if (this[t3] === e3)
          return t3;
      return -1;
    }, _2 = "[\\\\x20\\\\t\\\\r\\\\n\\\\f]", F2 = "(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+", O2 = F2.replace("w", "w#"), B2 = "([*^$|!~]?=)", P2 = "\\\\[" + _2 + "*(" + F2 + ")" + _2 + "*(?:" + B2 + _2 + \`*(?:(['"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|(\` + O2 + ")|)|)" + _2 + "*\\\\]", R2 = ":(" + F2 + \`)(?:\\\\(((['"])((?:\\\\\\\\.|[^\\\\\\\\])*?)\\\\3|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\` + P2.replace(3, 8) + ")*)|.*)\\\\)|)", W2 = RegExp("^" + _2 + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" + _2 + "+$", "g"), $2 = RegExp("^" + _2 + "*," + _2 + "*"), I2 = RegExp("^" + _2 + "*([\\\\x20\\\\t\\\\r\\\\n\\\\f>+~])" + _2 + "*"), z2 = RegExp(R2), X2 = RegExp("^" + O2 + "$"), U2 = { ID: RegExp("^#(" + F2 + ")"), CLASS: RegExp("^\\\\.(" + F2 + ")"), NAME: RegExp(\`^\\\\[name=['"]?(\` + F2 + \`)['"]?\\\\]\`), TAG: RegExp("^(" + F2.replace("w", "w*") + ")"), ATTR: RegExp("^" + P2), PSEUDO: RegExp("^" + R2), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" + _2 + "*(even|odd|(([+-]|)(\\\\d*)n|)" + _2 + "*(?:([+-]|)" + _2 + "*(\\\\d+)|))" + _2 + "*\\\\)|)", "i"), needsContext: RegExp("^" + _2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + _2 + "*((?:-\\\\d)?\\\\d*)" + _2 + "*\\\\)|)(?=[^-]|$)", "i") }, V2 = /[\\x20\\t\\r\\n\\f]*[+~]/, Y2 = /^[^{]+\\{\\s*\\[native code/, J2 = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/, G2 = /^(?:input|select|textarea|button)$/i, Q2 = /^h\\d$/i, K2 = /'|\\\\/g, Z2 = /\\=[\\x20\\t\\r\\n\\f]*([^'"\\]]*)[\\x20\\t\\r\\n\\f]*\\]/g, et2 = /\\\\([\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|.)/g, tt2 = function(e3, t3) {
      var n3 = "0x" + t3 - 65536;
      return n3 !== n3 ? t3 : 0 > n3 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(55296 | n3 >> 10, 56320 | 1023 & n3);
    };
    try {
      q2.call(w2.documentElement.childNodes, 0)[0].nodeType;
    } catch (nt2) {
      q2 = function(e3) {
        var t3, n3 = [];
        while (t3 = this[e3++])
          n3.push(t3);
        return n3;
      };
    }
    function rt2(e3) {
      return Y2.test(e3 + "");
    }
    function it2() {
      var e3, t3 = [];
      return e3 = function(n3, r3) {
        return t3.push(n3 += " ") > i2.cacheLength && delete e3[t3.shift()], e3[n3] = r3;
      };
    }
    function ot2(e3) {
      return e3[x2] = true, e3;
    }
    function at2(e3) {
      var t3 = p2.createElement("div");
      try {
        return e3(t3);
      } catch (n3) {
        return false;
      } finally {
        t3 = null;
      }
    }
    function st2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, f3, g3, m3, v3;
      if ((t3 ? t3.ownerDocument || t3 : w2) !== p2 && c2(t3), t3 = t3 || p2, n3 = n3 || [], !e3 || typeof e3 != "string")
        return n3;
      if ((s3 = t3.nodeType) !== 1 && s3 !== 9)
        return [];
      if (!d2 && !r3) {
        if (i3 = J2.exec(e3))
          if (a3 = i3[1]) {
            if (s3 === 9) {
              if (o3 = t3.getElementById(a3), !o3 || !o3.parentNode)
                return n3;
              if (o3.id === a3)
                return n3.push(o3), n3;
            } else if (t3.ownerDocument && (o3 = t3.ownerDocument.getElementById(a3)) && y2(t3, o3) && o3.id === a3)
              return n3.push(o3), n3;
          } else {
            if (i3[2])
              return H2.apply(n3, q2.call(t3.getElementsByTagName(e3), 0)), n3;
            if ((a3 = i3[3]) && T2.getByClassName && t3.getElementsByClassName)
              return H2.apply(n3, q2.call(t3.getElementsByClassName(a3), 0)), n3;
          }
        if (T2.qsa && !h2.test(e3)) {
          if (f3 = true, g3 = x2, m3 = t3, v3 = s3 === 9 && e3, s3 === 1 && t3.nodeName.toLowerCase() !== "object") {
            l3 = ft2(e3), (f3 = t3.getAttribute("id")) ? g3 = f3.replace(K2, "\\\\$&") : t3.setAttribute("id", g3), g3 = "[id='" + g3 + "'] ", u3 = l3.length;
            while (u3--)
              l3[u3] = g3 + dt2(l3[u3]);
            m3 = V2.test(e3) && t3.parentNode || t3, v3 = l3.join(",");
          }
          if (v3)
            try {
              return H2.apply(n3, q2.call(m3.querySelectorAll(v3), 0)), n3;
            } catch (b2) {
            } finally {
              f3 || t3.removeAttribute("id");
            }
        }
      }
      return wt2(e3.replace(W2, "$1"), t3, n3, r3);
    }
    a2 = st2.isXML = function(e3) {
      var t3 = e3 && (e3.ownerDocument || e3).documentElement;
      return t3 ? t3.nodeName !== "HTML" : false;
    }, c2 = st2.setDocument = function(e3) {
      var n3 = e3 ? e3.ownerDocument || e3 : w2;
      return n3 !== p2 && n3.nodeType === 9 && n3.documentElement ? (p2 = n3, f2 = n3.documentElement, d2 = a2(n3), T2.tagNameNoComments = at2(function(e4) {
        return e4.appendChild(n3.createComment("")), !e4.getElementsByTagName("*").length;
      }), T2.attributes = at2(function(e4) {
        e4.innerHTML = "<select></select>";
        var t3 = typeof e4.lastChild.getAttribute("multiple");
        return t3 !== "boolean" && t3 !== "string";
      }), T2.getByClassName = at2(function(e4) {
        return e4.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e4.getElementsByClassName && e4.getElementsByClassName("e").length ? (e4.lastChild.className = "e", e4.getElementsByClassName("e").length === 2) : false;
      }), T2.getByName = at2(function(e4) {
        e4.id = x2 + 0, e4.innerHTML = "<a name='" + x2 + "'></a><div name='" + x2 + "'></div>", f2.insertBefore(e4, f2.firstChild);
        var t3 = n3.getElementsByName && n3.getElementsByName(x2).length === 2 + n3.getElementsByName(x2 + 0).length;
        return T2.getIdNotName = !n3.getElementById(x2), f2.removeChild(e4), t3;
      }), i2.attrHandle = at2(function(e4) {
        return e4.innerHTML = "<a href='#'></a>", e4.firstChild && typeof e4.firstChild.getAttribute !== A2 && e4.firstChild.getAttribute("href") === "#";
      }) ? {} : { href: function(e4) {
        return e4.getAttribute("href", 2);
      }, type: function(e4) {
        return e4.getAttribute("type");
      } }, T2.getIdNotName ? (i2.find.ID = function(e4, t3) {
        if (typeof t3.getElementById !== A2 && !d2) {
          var n4 = t3.getElementById(e4);
          return n4 && n4.parentNode ? [n4] : [];
        }
      }, i2.filter.ID = function(e4) {
        var t3 = e4.replace(et2, tt2);
        return function(e5) {
          return e5.getAttribute("id") === t3;
        };
      }) : (i2.find.ID = function(e4, n4) {
        if (typeof n4.getElementById !== A2 && !d2) {
          var r3 = n4.getElementById(e4);
          return r3 ? r3.id === e4 || typeof r3.getAttributeNode !== A2 && r3.getAttributeNode("id").value === e4 ? [r3] : t2 : [];
        }
      }, i2.filter.ID = function(e4) {
        var t3 = e4.replace(et2, tt2);
        return function(e5) {
          var n4 = typeof e5.getAttributeNode !== A2 && e5.getAttributeNode("id");
          return n4 && n4.value === t3;
        };
      }), i2.find.TAG = T2.tagNameNoComments ? function(e4, n4) {
        return typeof n4.getElementsByTagName !== A2 ? n4.getElementsByTagName(e4) : t2;
      } : function(e4, t3) {
        var n4, r3 = [], i3 = 0, o3 = t3.getElementsByTagName(e4);
        if (e4 === "*") {
          while (n4 = o3[i3++])
            n4.nodeType === 1 && r3.push(n4);
          return r3;
        }
        return o3;
      }, i2.find.NAME = T2.getByName && function(e4, n4) {
        return typeof n4.getElementsByName !== A2 ? n4.getElementsByName(name) : t2;
      }, i2.find.CLASS = T2.getByClassName && function(e4, n4) {
        return typeof n4.getElementsByClassName === A2 || d2 ? t2 : n4.getElementsByClassName(e4);
      }, g2 = [], h2 = [":focus"], (T2.qsa = rt2(n3.querySelectorAll)) && (at2(function(e4) {
        e4.innerHTML = "<select><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || h2.push("\\\\[" + _2 + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e4.querySelectorAll(":checked").length || h2.push(":checked");
      }), at2(function(e4) {
        e4.innerHTML = "<input type='hidden' i=''/>", e4.querySelectorAll("[i^='']").length && h2.push("[*^$]=" + _2 + \`*(?:""|'')\`), e4.querySelectorAll(":enabled").length || h2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), h2.push(",.*:");
      })), (T2.matchesSelector = rt2(m2 = f2.matchesSelector || f2.mozMatchesSelector || f2.webkitMatchesSelector || f2.oMatchesSelector || f2.msMatchesSelector)) && at2(function(e4) {
        T2.disconnectedMatch = m2.call(e4, "div"), m2.call(e4, "[s!='']:x"), g2.push("!=", R2);
      }), h2 = RegExp(h2.join("|")), g2 = RegExp(g2.join("|")), y2 = rt2(f2.contains) || f2.compareDocumentPosition ? function(e4, t3) {
        var n4 = e4.nodeType === 9 ? e4.documentElement : e4, r3 = t3 && t3.parentNode;
        return e4 === r3 || !(!r3 || r3.nodeType !== 1 || !(n4.contains ? n4.contains(r3) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r3)));
      } : function(e4, t3) {
        if (t3) {
          while (t3 = t3.parentNode)
            if (t3 === e4)
              return true;
        }
        return false;
      }, v2 = f2.compareDocumentPosition ? function(e4, t3) {
        var r3;
        return e4 === t3 ? (u2 = true, 0) : (r3 = t3.compareDocumentPosition && e4.compareDocumentPosition && e4.compareDocumentPosition(t3)) ? 1 & r3 || e4.parentNode && e4.parentNode.nodeType === 11 ? e4 === n3 || y2(w2, e4) ? -1 : t3 === n3 || y2(w2, t3) ? 1 : 0 : 4 & r3 ? -1 : 1 : e4.compareDocumentPosition ? -1 : 1;
      } : function(e4, t3) {
        var r3, i3 = 0, o3 = e4.parentNode, a3 = t3.parentNode, s3 = [e4], l3 = [t3];
        if (e4 === t3)
          return u2 = true, 0;
        if (!o3 || !a3)
          return e4 === n3 ? -1 : t3 === n3 ? 1 : o3 ? -1 : a3 ? 1 : 0;
        if (o3 === a3)
          return ut2(e4, t3);
        r3 = e4;
        while (r3 = r3.parentNode)
          s3.unshift(r3);
        r3 = t3;
        while (r3 = r3.parentNode)
          l3.unshift(r3);
        while (s3[i3] === l3[i3])
          i3++;
        return i3 ? ut2(s3[i3], l3[i3]) : s3[i3] === w2 ? -1 : l3[i3] === w2 ? 1 : 0;
      }, u2 = false, [0, 0].sort(v2), T2.detectDuplicates = u2, p2) : p2;
    }, st2.matches = function(e3, t3) {
      return st2(e3, null, null, t3);
    }, st2.matchesSelector = function(e3, t3) {
      if ((e3.ownerDocument || e3) !== p2 && c2(e3), t3 = t3.replace(Z2, "='$1']"), !(!T2.matchesSelector || d2 || g2 && g2.test(t3) || h2.test(t3)))
        try {
          var n3 = m2.call(e3, t3);
          if (n3 || T2.disconnectedMatch || e3.document && e3.document.nodeType !== 11)
            return n3;
        } catch (r3) {
        }
      return st2(t3, p2, null, [e3]).length > 0;
    }, st2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) !== p2 && c2(e3), y2(e3, t3);
    }, st2.attr = function(e3, t3) {
      var n3;
      return (e3.ownerDocument || e3) !== p2 && c2(e3), d2 || (t3 = t3.toLowerCase()), (n3 = i2.attrHandle[t3]) ? n3(e3) : d2 || T2.attributes ? e3.getAttribute(t3) : ((n3 = e3.getAttributeNode(t3)) || e3.getAttribute(t3)) && e3[t3] === true ? t3 : n3 && n3.specified ? n3.value : null;
    }, st2.error = function(e3) {
      throw Error("Syntax error, unrecognized expression: " + e3);
    }, st2.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 1, i3 = 0;
      if (u2 = !T2.detectDuplicates, e3.sort(v2), u2) {
        for (; t3 = e3[r3]; r3++)
          t3 === e3[r3 - 1] && (i3 = n3.push(r3));
        while (i3--)
          e3.splice(n3[i3], 1);
      }
      return e3;
    };
    function ut2(e3, t3) {
      var n3 = t3 && e3, r3 = n3 && (~t3.sourceIndex || j2) - (~e3.sourceIndex || j2);
      if (r3)
        return r3;
      if (n3) {
        while (n3 = n3.nextSibling)
          if (n3 === t3)
            return -1;
      }
      return e3 ? 1 : -1;
    }
    function lt2(e3) {
      return function(t3) {
        var n3 = t3.nodeName.toLowerCase();
        return n3 === "input" && t3.type === e3;
      };
    }
    function ct2(e3) {
      return function(t3) {
        var n3 = t3.nodeName.toLowerCase();
        return (n3 === "input" || n3 === "button") && t3.type === e3;
      };
    }
    function pt2(e3) {
      return ot2(function(t3) {
        return t3 = +t3, ot2(function(n3, r3) {
          var i3, o3 = e3([], n3.length, t3), a3 = o3.length;
          while (a3--)
            n3[i3 = o3[a3]] && (n3[i3] = !(r3[i3] = n3[i3]));
        });
      });
    }
    o2 = st2.getText = function(e3) {
      var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
      if (i3) {
        if (i3 === 1 || i3 === 9 || i3 === 11) {
          if (typeof e3.textContent == "string")
            return e3.textContent;
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
            n3 += o2(e3);
        } else if (i3 === 3 || i3 === 4)
          return e3.nodeValue;
      } else
        for (; t3 = e3[r3]; r3++)
          n3 += o2(t3);
      return n3;
    }, i2 = st2.selectors = { cacheLength: 50, createPseudo: ot2, match: U2, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(et2, tt2), e3[3] = (e3[4] || e3[5] || "").replace(et2, tt2), e3[2] === "~=" && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), e3[1].slice(0, 3) === "nth" ? (e3[3] || st2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * (e3[3] === "even" || e3[3] === "odd")), e3[5] = +(e3[7] + e3[8] || e3[3] === "odd")) : e3[3] && st2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[5] && e3[2];
      return U2.CHILD.test(e3[0]) ? null : (e3[4] ? e3[2] = e3[4] : n3 && z2.test(n3) && (t3 = ft2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      return e3 === "*" ? function() {
        return true;
      } : (e3 = e3.replace(et2, tt2).toLowerCase(), function(t3) {
        return t3.nodeName && t3.nodeName.toLowerCase() === e3;
      });
    }, CLASS: function(e3) {
      var t3 = k2[e3 + " "];
      return t3 || (t3 = RegExp("(^|" + _2 + ")" + e3 + "(" + _2 + "|$)")) && k2(e3, function(e4) {
        return t3.test(e4.className || typeof e4.getAttribute !== A2 && e4.getAttribute("class") || "");
      });
    }, ATTR: function(e3, t3, n3) {
      return function(r3) {
        var i3 = st2.attr(r3, e3);
        return i3 == null ? t3 === "!=" : t3 ? (i3 += "", t3 === "=" ? i3 === n3 : t3 === "!=" ? i3 !== n3 : t3 === "^=" ? n3 && i3.indexOf(n3) === 0 : t3 === "*=" ? n3 && i3.indexOf(n3) > -1 : t3 === "$=" ? n3 && i3.slice(-n3.length) === n3 : t3 === "~=" ? (" " + i3 + " ").indexOf(n3) > -1 : t3 === "|=" ? i3 === n3 || i3.slice(0, n3.length + 1) === n3 + "-" : false) : true;
      };
    }, CHILD: function(e3, t3, n3, r3, i3) {
      var o3 = e3.slice(0, 3) !== "nth", a3 = e3.slice(-4) !== "last", s3 = t3 === "of-type";
      return r3 === 1 && i3 === 0 ? function(e4) {
        return !!e4.parentNode;
      } : function(t4, n4, u3) {
        var l3, c3, p3, f3, d3, h3, g3 = o3 !== a3 ? "nextSibling" : "previousSibling", m3 = t4.parentNode, y3 = s3 && t4.nodeName.toLowerCase(), v3 = !u3 && !s3;
        if (m3) {
          if (o3) {
            while (g3) {
              p3 = t4;
              while (p3 = p3[g3])
                if (s3 ? p3.nodeName.toLowerCase() === y3 : p3.nodeType === 1)
                  return false;
              h3 = g3 = e3 === "only" && !h3 && "nextSibling";
            }
            return true;
          }
          if (h3 = [a3 ? m3.firstChild : m3.lastChild], a3 && v3) {
            c3 = m3[x2] || (m3[x2] = {}), l3 = c3[e3] || [], d3 = l3[0] === N2 && l3[1], f3 = l3[0] === N2 && l3[2], p3 = d3 && m3.childNodes[d3];
            while (p3 = ++d3 && p3 && p3[g3] || (f3 = d3 = 0) || h3.pop())
              if (p3.nodeType === 1 && ++f3 && p3 === t4) {
                c3[e3] = [N2, d3, f3];
                break;
              }
          } else if (v3 && (l3 = (t4[x2] || (t4[x2] = {}))[e3]) && l3[0] === N2)
            f3 = l3[1];
          else
            while (p3 = ++d3 && p3 && p3[g3] || (f3 = d3 = 0) || h3.pop())
              if ((s3 ? p3.nodeName.toLowerCase() === y3 : p3.nodeType === 1) && ++f3 && (v3 && ((p3[x2] || (p3[x2] = {}))[e3] = [N2, f3]), p3 === t4))
                break;
          return f3 -= i3, f3 === r3 || f3 % r3 === 0 && f3 / r3 >= 0;
        }
      };
    }, PSEUDO: function(e3, t3) {
      var n3, r3 = i2.pseudos[e3] || i2.setFilters[e3.toLowerCase()] || st2.error("unsupported pseudo: " + e3);
      return r3[x2] ? r3(t3) : r3.length > 1 ? (n3 = [e3, e3, "", t3], i2.setFilters.hasOwnProperty(e3.toLowerCase()) ? ot2(function(e4, n4) {
        var i3, o3 = r3(e4, t3), a3 = o3.length;
        while (a3--)
          i3 = M2.call(e4, o3[a3]), e4[i3] = !(n4[i3] = o3[a3]);
      }) : function(e4) {
        return r3(e4, 0, n3);
      }) : r3;
    } }, pseudos: { not: ot2(function(e3) {
      var t3 = [], n3 = [], r3 = s2(e3.replace(W2, "$1"));
      return r3[x2] ? ot2(function(e4, t4, n4, i3) {
        var o3, a3 = r3(e4, null, i3, []), s3 = e4.length;
        while (s3--)
          (o3 = a3[s3]) && (e4[s3] = !(t4[s3] = o3));
      }) : function(e4, i3, o3) {
        return t3[0] = e4, r3(t3, null, o3, n3), !n3.pop();
      };
    }), has: ot2(function(e3) {
      return function(t3) {
        return st2(e3, t3).length > 0;
      };
    }), contains: ot2(function(e3) {
      return function(t3) {
        return (t3.textContent || t3.innerText || o2(t3)).indexOf(e3) > -1;
      };
    }), lang: ot2(function(e3) {
      return X2.test(e3 || "") || st2.error("unsupported lang: " + e3), e3 = e3.replace(et2, tt2).toLowerCase(), function(t3) {
        var n3;
        do
          if (n3 = d2 ? t3.getAttribute("xml:lang") || t3.getAttribute("lang") : t3.lang)
            return n3 = n3.toLowerCase(), n3 === e3 || n3.indexOf(e3 + "-") === 0;
        while ((t3 = t3.parentNode) && t3.nodeType === 1);
        return false;
      };
    }), target: function(t3) {
      var n3 = e2.location && e2.location.hash;
      return n3 && n3.slice(1) === t3.id;
    }, root: function(e3) {
      return e3 === f2;
    }, focus: function(e3) {
      return e3 === p2.activeElement && (!p2.hasFocus || p2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: function(e3) {
      return e3.disabled === false;
    }, disabled: function(e3) {
      return e3.disabled === true;
    }, checked: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return t3 === "input" && !!e3.checked || t3 === "option" && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, e3.selected === true;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
        if (e3.nodeName > "@" || e3.nodeType === 3 || e3.nodeType === 4)
          return false;
      return true;
    }, parent: function(e3) {
      return !i2.pseudos.empty(e3);
    }, header: function(e3) {
      return Q2.test(e3.nodeName);
    }, input: function(e3) {
      return G2.test(e3.nodeName);
    }, button: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return t3 === "input" && e3.type === "button" || t3 === "button";
    }, text: function(e3) {
      var t3;
      return e3.nodeName.toLowerCase() === "input" && e3.type === "text" && ((t3 = e3.getAttribute("type")) == null || t3.toLowerCase() === e3.type);
    }, first: pt2(function() {
      return [0];
    }), last: pt2(function(e3, t3) {
      return [t3 - 1];
    }), eq: pt2(function(e3, t3, n3) {
      return [0 > n3 ? n3 + t3 : n3];
    }), even: pt2(function(e3, t3) {
      var n3 = 0;
      for (; t3 > n3; n3 += 2)
        e3.push(n3);
      return e3;
    }), odd: pt2(function(e3, t3) {
      var n3 = 1;
      for (; t3 > n3; n3 += 2)
        e3.push(n3);
      return e3;
    }), lt: pt2(function(e3, t3, n3) {
      var r3 = 0 > n3 ? n3 + t3 : n3;
      for (; --r3 >= 0; )
        e3.push(r3);
      return e3;
    }), gt: pt2(function(e3, t3, n3) {
      var r3 = 0 > n3 ? n3 + t3 : n3;
      for (; t3 > ++r3; )
        e3.push(r3);
      return e3;
    }) } };
    for (n2 in { radio: true, checkbox: true, file: true, password: true, image: true })
      i2.pseudos[n2] = lt2(n2);
    for (n2 in { submit: true, reset: true })
      i2.pseudos[n2] = ct2(n2);
    function ft2(e3, t3) {
      var n3, r3, o3, a3, s3, u3, l3, c3 = E2[e3 + " "];
      if (c3)
        return t3 ? 0 : c3.slice(0);
      s3 = e3, u3 = [], l3 = i2.preFilter;
      while (s3) {
        (!n3 || (r3 = $2.exec(s3))) && (r3 && (s3 = s3.slice(r3[0].length) || s3), u3.push(o3 = [])), n3 = false, (r3 = I2.exec(s3)) && (n3 = r3.shift(), o3.push({ value: n3, type: r3[0].replace(W2, " ") }), s3 = s3.slice(n3.length));
        for (a3 in i2.filter)
          !(r3 = U2[a3].exec(s3)) || l3[a3] && !(r3 = l3[a3](r3)) || (n3 = r3.shift(), o3.push({ value: n3, type: a3, matches: r3 }), s3 = s3.slice(n3.length));
        if (!n3)
          break;
      }
      return t3 ? s3.length : s3 ? st2.error(e3) : E2(e3, u3).slice(0);
    }
    function dt2(e3) {
      var t3 = 0, n3 = e3.length, r3 = "";
      for (; n3 > t3; t3++)
        r3 += e3[t3].value;
      return r3;
    }
    function ht2(e3, t3, n3) {
      var i3 = t3.dir, o3 = n3 && i3 === "parentNode", a3 = C2++;
      return t3.first ? function(t4, n4, r3) {
        while (t4 = t4[i3])
          if (t4.nodeType === 1 || o3)
            return e3(t4, n4, r3);
      } : function(t4, n4, s3) {
        var u3, l3, c3, p3 = N2 + " " + a3;
        if (s3) {
          while (t4 = t4[i3])
            if ((t4.nodeType === 1 || o3) && e3(t4, n4, s3))
              return true;
        } else
          while (t4 = t4[i3])
            if (t4.nodeType === 1 || o3) {
              if (c3 = t4[x2] || (t4[x2] = {}), (l3 = c3[i3]) && l3[0] === p3) {
                if ((u3 = l3[1]) === true || u3 === r2)
                  return u3 === true;
              } else if (l3 = c3[i3] = [p3], l3[1] = e3(t4, n4, s3) || r2, l3[1] === true)
                return true;
            }
      };
    }
    function gt2(e3) {
      return e3.length > 1 ? function(t3, n3, r3) {
        var i3 = e3.length;
        while (i3--)
          if (!e3[i3](t3, n3, r3))
            return false;
        return true;
      } : e3[0];
    }
    function mt2(e3, t3, n3, r3, i3) {
      var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = t3 != null;
      for (; u3 > s3; s3++)
        (o3 = e3[s3]) && (!n3 || n3(o3, r3, i3)) && (a3.push(o3), l3 && t3.push(s3));
      return a3;
    }
    function yt2(e3, t3, n3, r3, i3, o3) {
      return r3 && !r3[x2] && (r3 = yt2(r3)), i3 && !i3[x2] && (i3 = yt2(i3, o3)), ot2(function(o4, a3, s3, u3) {
        var l3, c3, p3, f3 = [], d3 = [], h3 = a3.length, g3 = o4 || xt2(t3 || "*", s3.nodeType ? [s3] : s3, []), m3 = !e3 || !o4 && t3 ? g3 : mt2(g3, f3, e3, s3, u3), y3 = n3 ? i3 || (o4 ? e3 : h3 || r3) ? [] : a3 : m3;
        if (n3 && n3(m3, y3, s3, u3), r3) {
          l3 = mt2(y3, d3), r3(l3, [], s3, u3), c3 = l3.length;
          while (c3--)
            (p3 = l3[c3]) && (y3[d3[c3]] = !(m3[d3[c3]] = p3));
        }
        if (o4) {
          if (i3 || e3) {
            if (i3) {
              l3 = [], c3 = y3.length;
              while (c3--)
                (p3 = y3[c3]) && l3.push(m3[c3] = p3);
              i3(null, y3 = [], l3, u3);
            }
            c3 = y3.length;
            while (c3--)
              (p3 = y3[c3]) && (l3 = i3 ? M2.call(o4, p3) : f3[c3]) > -1 && (o4[l3] = !(a3[l3] = p3));
          }
        } else
          y3 = mt2(y3 === a3 ? y3.splice(h3, y3.length) : y3), i3 ? i3(null, a3, y3, u3) : H2.apply(a3, y3);
      });
    }
    function vt2(e3) {
      var t3, n3, r3, o3 = e3.length, a3 = i2.relative[e3[0].type], s3 = a3 || i2.relative[" "], u3 = a3 ? 1 : 0, c3 = ht2(function(e4) {
        return e4 === t3;
      }, s3, true), p3 = ht2(function(e4) {
        return M2.call(t3, e4) > -1;
      }, s3, true), f3 = [function(e4, n4, r4) {
        return !a3 && (r4 || n4 !== l2) || ((t3 = n4).nodeType ? c3(e4, n4, r4) : p3(e4, n4, r4));
      }];
      for (; o3 > u3; u3++)
        if (n3 = i2.relative[e3[u3].type])
          f3 = [ht2(gt2(f3), n3)];
        else {
          if (n3 = i2.filter[e3[u3].type].apply(null, e3[u3].matches), n3[x2]) {
            for (r3 = ++u3; o3 > r3; r3++)
              if (i2.relative[e3[r3].type])
                break;
            return yt2(u3 > 1 && gt2(f3), u3 > 1 && dt2(e3.slice(0, u3 - 1)).replace(W2, "$1"), n3, r3 > u3 && vt2(e3.slice(u3, r3)), o3 > r3 && vt2(e3 = e3.slice(r3)), o3 > r3 && dt2(e3));
          }
          f3.push(n3);
        }
      return gt2(f3);
    }
    function bt2(e3, t3) {
      var n3 = 0, o3 = t3.length > 0, a3 = e3.length > 0, s3 = function(s4, u3, c3, f3, d3) {
        var h3, g3, m3, y3 = [], v3 = 0, b2 = "0", x3 = s4 && [], w3 = d3 != null, T3 = l2, C3 = s4 || a3 && i2.find.TAG("*", d3 && u3.parentNode || u3), k3 = N2 += T3 == null ? 1 : Math.random() || 0.1;
        for (w3 && (l2 = u3 !== p2 && u3, r2 = n3); (h3 = C3[b2]) != null; b2++) {
          if (a3 && h3) {
            g3 = 0;
            while (m3 = e3[g3++])
              if (m3(h3, u3, c3)) {
                f3.push(h3);
                break;
              }
            w3 && (N2 = k3, r2 = ++n3);
          }
          o3 && ((h3 = !m3 && h3) && v3--, s4 && x3.push(h3));
        }
        if (v3 += b2, o3 && b2 !== v3) {
          g3 = 0;
          while (m3 = t3[g3++])
            m3(x3, y3, u3, c3);
          if (s4) {
            if (v3 > 0)
              while (b2--)
                x3[b2] || y3[b2] || (y3[b2] = L2.call(f3));
            y3 = mt2(y3);
          }
          H2.apply(f3, y3), w3 && !s4 && y3.length > 0 && v3 + t3.length > 1 && st2.uniqueSort(f3);
        }
        return w3 && (N2 = k3, l2 = T3), x3;
      };
      return o3 ? ot2(s3) : s3;
    }
    s2 = st2.compile = function(e3, t3) {
      var n3, r3 = [], i3 = [], o3 = S2[e3 + " "];
      if (!o3) {
        t3 || (t3 = ft2(e3)), n3 = t3.length;
        while (n3--)
          o3 = vt2(t3[n3]), o3[x2] ? r3.push(o3) : i3.push(o3);
        o3 = S2(e3, bt2(i3, r3));
      }
      return o3;
    };
    function xt2(e3, t3, n3) {
      var r3 = 0, i3 = t3.length;
      for (; i3 > r3; r3++)
        st2(e3, t3[r3], n3);
      return n3;
    }
    function wt2(e3, t3, n3, r3) {
      var o3, a3, u3, l3, c3, p3 = ft2(e3);
      if (!r3 && p3.length === 1) {
        if (a3 = p3[0] = p3[0].slice(0), a3.length > 2 && (u3 = a3[0]).type === "ID" && t3.nodeType === 9 && !d2 && i2.relative[a3[1].type]) {
          if (t3 = i2.find.ID(u3.matches[0].replace(et2, tt2), t3)[0], !t3)
            return n3;
          e3 = e3.slice(a3.shift().value.length);
        }
        o3 = U2.needsContext.test(e3) ? 0 : a3.length;
        while (o3--) {
          if (u3 = a3[o3], i2.relative[l3 = u3.type])
            break;
          if ((c3 = i2.find[l3]) && (r3 = c3(u3.matches[0].replace(et2, tt2), V2.test(a3[0].type) && t3.parentNode || t3))) {
            if (a3.splice(o3, 1), e3 = r3.length && dt2(a3), !e3)
              return H2.apply(n3, q2.call(r3, 0)), n3;
            break;
          }
        }
      }
      return s2(e3, p3)(r3, t3, d2, n3, V2.test(e3)), n3;
    }
    i2.pseudos.nth = i2.pseudos.eq;
    function Tt2() {
    }
    i2.filters = Tt2.prototype = i2.pseudos, i2.setFilters = new Tt2(), c2(), st2.attr = b.attr, b.find = st2, b.expr = st2.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st2.uniqueSort, b.text = st2.getText, b.isXMLDoc = st2.isXML, b.contains = st2.contains;
  }(e);
  var at = /Until$/, st = /^(?:parents|prev(?:Until|All))/, ut = /^.[^:#\\[\\.,]*$/, lt = b.expr.match.needsContext, ct = { children: true, contents: true, next: true, prev: true };
  b.fn.extend({ find: function(e2) {
    var t2, n2, r2, i2 = this.length;
    if (typeof e2 != "string")
      return r2 = this, this.pushStack(b(e2).filter(function() {
        for (t2 = 0; i2 > t2; t2++)
          if (b.contains(r2[t2], this))
            return true;
      }));
    for (n2 = [], t2 = 0; i2 > t2; t2++)
      b.find(e2, this[t2], n2);
    return n2 = this.pushStack(i2 > 1 ? b.unique(n2) : n2), n2.selector = (this.selector ? this.selector + " " : "") + e2, n2;
  }, has: function(e2) {
    var t2, n2 = b(e2, this), r2 = n2.length;
    return this.filter(function() {
      for (t2 = 0; r2 > t2; t2++)
        if (b.contains(this, n2[t2]))
          return true;
    });
  }, not: function(e2) {
    return this.pushStack(ft(this, e2, false));
  }, filter: function(e2) {
    return this.pushStack(ft(this, e2, true));
  }, is: function(e2) {
    return !!e2 && (typeof e2 == "string" ? lt.test(e2) ? b(e2, this.context).index(this[0]) >= 0 : b.filter(e2, this).length > 0 : this.filter(e2).length > 0);
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = lt.test(e2) || typeof e2 != "string" ? b(e2, t2 || this.context) : 0;
    for (; i2 > r2; r2++) {
      n2 = this[r2];
      while (n2 && n2.ownerDocument && n2 !== t2 && n2.nodeType !== 11) {
        if (a2 ? a2.index(n2) > -1 : b.find.matchesSelector(n2, e2)) {
          o2.push(n2);
          break;
        }
        n2 = n2.parentNode;
      }
    }
    return this.pushStack(o2.length > 1 ? b.unique(o2) : o2);
  }, index: function(e2) {
    return e2 ? typeof e2 == "string" ? b.inArray(this[0], b(e2)) : b.inArray(e2.jquery ? e2[0] : e2, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    var n2 = typeof e2 == "string" ? b(e2, t2) : b.makeArray(e2 && e2.nodeType ? [e2] : e2), r2 = b.merge(this.get(), n2);
    return this.pushStack(b.unique(r2));
  }, addBack: function(e2) {
    return this.add(e2 == null ? this.prevObject : this.prevObject.filter(e2));
  } }), b.fn.andSelf = b.fn.addBack;
  function pt(e2, t2) {
    do
      e2 = e2[t2];
    while (e2 && e2.nodeType !== 1);
    return e2;
  }
  b.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.nodeType !== 11 ? t2 : null;
  }, parents: function(e2) {
    return b.dir(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return b.dir(e2, "parentNode", n2);
  }, next: function(e2) {
    return pt(e2, "nextSibling");
  }, prev: function(e2) {
    return pt(e2, "previousSibling");
  }, nextAll: function(e2) {
    return b.dir(e2, "nextSibling");
  }, prevAll: function(e2) {
    return b.dir(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return b.dir(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return b.dir(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return b.sibling((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return b.sibling(e2.firstChild);
  }, contents: function(e2) {
    return b.nodeName(e2, "iframe") ? e2.contentDocument || e2.contentWindow.document : b.merge([], e2.childNodes);
  } }, function(e2, t2) {
    b.fn[e2] = function(n2, r2) {
      var i2 = b.map(this, t2, n2);
      return at.test(e2) || (r2 = n2), r2 && typeof r2 == "string" && (i2 = b.filter(r2, i2)), i2 = this.length > 1 && !ct[e2] ? b.unique(i2) : i2, this.length > 1 && st.test(e2) && (i2 = i2.reverse()), this.pushStack(i2);
    };
  }), b.extend({ filter: function(e2, t2, n2) {
    return n2 && (e2 = ":not(" + e2 + ")"), t2.length === 1 ? b.find.matchesSelector(t2[0], e2) ? [t2[0]] : [] : b.find.matches(e2, t2);
  }, dir: function(e2, n2, r2) {
    var i2 = [], o2 = e2[n2];
    while (o2 && o2.nodeType !== 9 && (r2 === t || o2.nodeType !== 1 || !b(o2).is(r2)))
      o2.nodeType === 1 && i2.push(o2), o2 = o2[n2];
    return i2;
  }, sibling: function(e2, t2) {
    var n2 = [];
    for (; e2; e2 = e2.nextSibling)
      e2.nodeType === 1 && e2 !== t2 && n2.push(e2);
    return n2;
  } });
  function ft(e2, t2, n2) {
    if (t2 = t2 || 0, b.isFunction(t2))
      return b.grep(e2, function(e3, r3) {
        var i2 = !!t2.call(e3, r3, e3);
        return i2 === n2;
      });
    if (t2.nodeType)
      return b.grep(e2, function(e3) {
        return e3 === t2 === n2;
      });
    if (typeof t2 == "string") {
      var r2 = b.grep(e2, function(e3) {
        return e3.nodeType === 1;
      });
      if (ut.test(t2))
        return b.filter(t2, r2, !n2);
      t2 = b.filter(t2, r2);
    }
    return b.grep(e2, function(e3) {
      return b.inArray(e3, t2) >= 0 === n2;
    });
  }
  function dt(e2) {
    var t2 = ht.split("|"), n2 = e2.createDocumentFragment();
    if (n2.createElement)
      while (t2.length)
        n2.createElement(t2.pop());
    return n2;
  }
  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\\d+="(?:null|\\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\\\s/>]", "i"), yt = /^\\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/gi, bt = /<([\\w:]+)/, xt = /<tbody/i, wt = /<|&#?\\w+;/, Tt = /<(?:script|style|link)/i, Nt = /^(?:checkbox|radio)$/i, Ct = /checked\\s*(?:[^=]|=\\s*.checked.)/i, kt = /^$|\\/(?:java|ecma)script/i, Et = /^true\\/(.*)/, St = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(o), Dt = jt.appendChild(o.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({ text: function(e2) {
    return b.access(this, function(e3) {
      return e3 === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e3));
    }, null, e2, arguments.length);
  }, wrapAll: function(e2) {
    if (b.isFunction(e2))
      return this.each(function(t3) {
        b(this).wrapAll(e2.call(this, t3));
      });
    if (this[0]) {
      var t2 = b(e2, this[0].ownerDocument).eq(0).clone(true);
      this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
        var e3 = this;
        while (e3.firstChild && e3.firstChild.nodeType === 1)
          e3 = e3.firstChild;
        return e3;
      }).append(this);
    }
    return this;
  }, wrapInner: function(e2) {
    return b.isFunction(e2) ? this.each(function(t2) {
      b(this).wrapInner(e2.call(this, t2));
    }) : this.each(function() {
      var t2 = b(this), n2 = t2.contents();
      n2.length ? n2.wrapAll(e2) : t2.append(e2);
    });
  }, wrap: function(e2) {
    var t2 = b.isFunction(e2);
    return this.each(function(n2) {
      b(this).wrapAll(t2 ? e2.call(this, n2) : e2);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      b.nodeName(this, "body") || b(this).replaceWith(this.childNodes);
    }).end();
  }, append: function() {
    return this.domManip(arguments, true, function(e2) {
      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e2);
    });
  }, prepend: function() {
    return this.domManip(arguments, true, function(e2) {
      (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e2, this.firstChild);
    });
  }, before: function() {
    return this.domManip(arguments, false, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return this.domManip(arguments, false, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, remove: function(e2, t2) {
    var n2, r2 = 0;
    for (; (n2 = this[r2]) != null; r2++)
      (!e2 || b.filter(e2, [n2]).length > 0) && (t2 || n2.nodeType !== 1 || b.cleanData(Ot(n2)), n2.parentNode && (t2 && b.contains(n2.ownerDocument, n2) && Mt(Ot(n2, "script")), n2.parentNode.removeChild(n2)));
    return this;
  }, empty: function() {
    var e2, t2 = 0;
    for (; (e2 = this[t2]) != null; t2++) {
      e2.nodeType === 1 && b.cleanData(Ot(e2, false));
      while (e2.firstChild)
        e2.removeChild(e2.firstChild);
      e2.options && b.nodeName(e2, "select") && (e2.options.length = 0);
    }
    return this;
  }, clone: function(e2, t2) {
    return e2 = e2 == null ? false : e2, t2 = t2 == null ? e2 : t2, this.map(function() {
      return b.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return b.access(this, function(e3) {
      var n2 = this[0] || {}, r2 = 0, i2 = this.length;
      if (e3 === t)
        return n2.nodeType === 1 ? n2.innerHTML.replace(gt, "") : t;
      if (!(typeof e3 != "string" || Tt.test(e3) || !b.support.htmlSerialize && mt.test(e3) || !b.support.leadingWhitespace && yt.test(e3) || At[(bt.exec(e3) || ["", ""])[1].toLowerCase()])) {
        e3 = e3.replace(vt, "<$1></$2>");
        try {
          for (; i2 > r2; r2++)
            n2 = this[r2] || {}, n2.nodeType === 1 && (b.cleanData(Ot(n2, false)), n2.innerHTML = e3);
          n2 = 0;
        } catch (o2) {
        }
      }
      n2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function(e2) {
    var t2 = b.isFunction(e2);
    return t2 || typeof e2 == "string" || (e2 = b(e2).not(this).detach()), this.domManip([e2], true, function(e3) {
      var t3 = this.nextSibling, n2 = this.parentNode;
      n2 && (b(this).remove(), n2.insertBefore(e3, t3));
    });
  }, detach: function(e2) {
    return this.remove(e2, true);
  }, domManip: function(e2, n2, r2) {
    e2 = f.apply([], e2);
    var i2, o2, a2, s2, u2, l2, c2 = 0, p2 = this.length, d2 = this, h2 = p2 - 1, g2 = e2[0], m2 = b.isFunction(g2);
    if (m2 || !(1 >= p2 || typeof g2 != "string" || b.support.checkClone) && Ct.test(g2))
      return this.each(function(i3) {
        var o3 = d2.eq(i3);
        m2 && (e2[0] = g2.call(this, i3, n2 ? o3.html() : t)), o3.domManip(e2, n2, r2);
      });
    if (p2 && (l2 = b.buildFragment(e2, this[0].ownerDocument, false, this), i2 = l2.firstChild, l2.childNodes.length === 1 && (l2 = i2), i2)) {
      for (n2 = n2 && b.nodeName(i2, "tr"), s2 = b.map(Ot(l2, "script"), Ht), a2 = s2.length; p2 > c2; c2++)
        o2 = l2, c2 !== h2 && (o2 = b.clone(o2, true, true), a2 && b.merge(s2, Ot(o2, "script"))), r2.call(n2 && b.nodeName(this[c2], "table") ? Lt(this[c2], "tbody") : this[c2], o2, c2);
      if (a2)
        for (u2 = s2[s2.length - 1].ownerDocument, b.map(s2, qt), c2 = 0; a2 > c2; c2++)
          o2 = s2[c2], kt.test(o2.type || "") && !b._data(o2, "globalEval") && b.contains(u2, o2) && (o2.src ? b.ajax({ url: o2.src, type: "GET", dataType: "script", async: false, global: false, "throws": true }) : b.globalEval((o2.text || o2.textContent || o2.innerHTML || "").replace(St, "")));
      l2 = i2 = null;
    }
    return this;
  } });
  function Lt(e2, t2) {
    return e2.getElementsByTagName(t2)[0] || e2.appendChild(e2.ownerDocument.createElement(t2));
  }
  function Ht(e2) {
    var t2 = e2.getAttributeNode("type");
    return e2.type = (t2 && t2.specified) + "/" + e2.type, e2;
  }
  function qt(e2) {
    var t2 = Et.exec(e2.type);
    return t2 ? e2.type = t2[1] : e2.removeAttribute("type"), e2;
  }
  function Mt(e2, t2) {
    var n2, r2 = 0;
    for (; (n2 = e2[r2]) != null; r2++)
      b._data(n2, "globalEval", !t2 || b._data(t2[r2], "globalEval"));
  }
  function _t(e2, t2) {
    if (t2.nodeType === 1 && b.hasData(e2)) {
      var n2, r2, i2, o2 = b._data(e2), a2 = b._data(t2, o2), s2 = o2.events;
      if (s2) {
        delete a2.handle, a2.events = {};
        for (n2 in s2)
          for (r2 = 0, i2 = s2[n2].length; i2 > r2; r2++)
            b.event.add(t2, n2, s2[n2][r2]);
      }
      a2.data && (a2.data = b.extend({}, a2.data));
    }
  }
  function Ft(e2, t2) {
    var n2, r2, i2;
    if (t2.nodeType === 1) {
      if (n2 = t2.nodeName.toLowerCase(), !b.support.noCloneEvent && t2[b.expando]) {
        i2 = b._data(t2);
        for (r2 in i2.events)
          b.removeEvent(t2, r2, i2.handle);
        t2.removeAttribute(b.expando);
      }
      n2 === "script" && t2.text !== e2.text ? (Ht(t2).text = e2.text, qt(t2)) : n2 === "object" ? (t2.parentNode && (t2.outerHTML = e2.outerHTML), b.support.html5Clone && e2.innerHTML && !b.trim(t2.innerHTML) && (t2.innerHTML = e2.innerHTML)) : n2 === "input" && Nt.test(e2.type) ? (t2.defaultChecked = t2.checked = e2.checked, t2.value !== e2.value && (t2.value = e2.value)) : n2 === "option" ? t2.defaultSelected = t2.selected = e2.defaultSelected : (n2 === "input" || n2 === "textarea") && (t2.defaultValue = e2.defaultValue);
    }
  }
  b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, t2) {
    b.fn[e2] = function(e3) {
      var n2, r2 = 0, i2 = [], o2 = b(e3), a2 = o2.length - 1;
      for (; a2 >= r2; r2++)
        n2 = r2 === a2 ? this : this.clone(true), b(o2[r2])[t2](n2), d.apply(i2, n2.get());
      return this.pushStack(i2);
    };
  });
  function Ot(e2, n2) {
    var r2, o2, a2 = 0, s2 = typeof e2.getElementsByTagName !== i ? e2.getElementsByTagName(n2 || "*") : typeof e2.querySelectorAll !== i ? e2.querySelectorAll(n2 || "*") : t;
    if (!s2)
      for (s2 = [], r2 = e2.childNodes || e2; (o2 = r2[a2]) != null; a2++)
        !n2 || b.nodeName(o2, n2) ? s2.push(o2) : b.merge(s2, Ot(o2, n2));
    return n2 === t || n2 && b.nodeName(e2, n2) ? b.merge([e2], s2) : s2;
  }
  function Bt(e2) {
    Nt.test(e2.type) && (e2.defaultChecked = e2.checked);
  }
  b.extend({ clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2 = b.contains(e2.ownerDocument, e2);
    if (b.support.html5Clone || b.isXMLDoc(e2) || !mt.test("<" + e2.nodeName + ">") ? o2 = e2.cloneNode(true) : (Dt.innerHTML = e2.outerHTML, Dt.removeChild(o2 = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || e2.nodeType !== 1 && e2.nodeType !== 11 || b.isXMLDoc(e2)))
      for (r2 = Ot(o2), s2 = Ot(e2), a2 = 0; (i2 = s2[a2]) != null; ++a2)
        r2[a2] && Ft(i2, r2[a2]);
    if (t2)
      if (n2)
        for (s2 = s2 || Ot(e2), r2 = r2 || Ot(o2), a2 = 0; (i2 = s2[a2]) != null; a2++)
          _t(i2, r2[a2]);
      else
        _t(e2, o2);
    return r2 = Ot(o2, "script"), r2.length > 0 && Mt(r2, !u2 && Ot(e2, "script")), r2 = s2 = i2 = null, o2;
  }, buildFragment: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, p2 = e2.length, f2 = dt(t2), d2 = [], h2 = 0;
    for (; p2 > h2; h2++)
      if (o2 = e2[h2], o2 || o2 === 0)
        if (b.type(o2) === "object")
          b.merge(d2, o2.nodeType ? [o2] : o2);
        else if (wt.test(o2)) {
          s2 = s2 || f2.appendChild(t2.createElement("div")), u2 = (bt.exec(o2) || ["", ""])[1].toLowerCase(), c2 = At[u2] || At._default, s2.innerHTML = c2[1] + o2.replace(vt, "<$1></$2>") + c2[2], i2 = c2[0];
          while (i2--)
            s2 = s2.lastChild;
          if (!b.support.leadingWhitespace && yt.test(o2) && d2.push(t2.createTextNode(yt.exec(o2)[0])), !b.support.tbody) {
            o2 = u2 !== "table" || xt.test(o2) ? c2[1] !== "<table>" || xt.test(o2) ? 0 : s2 : s2.firstChild, i2 = o2 && o2.childNodes.length;
            while (i2--)
              b.nodeName(l2 = o2.childNodes[i2], "tbody") && !l2.childNodes.length && o2.removeChild(l2);
          }
          b.merge(d2, s2.childNodes), s2.textContent = "";
          while (s2.firstChild)
            s2.removeChild(s2.firstChild);
          s2 = f2.lastChild;
        } else
          d2.push(t2.createTextNode(o2));
    s2 && f2.removeChild(s2), b.support.appendChecked || b.grep(Ot(d2, "input"), Bt), h2 = 0;
    while (o2 = d2[h2++])
      if ((!r2 || b.inArray(o2, r2) === -1) && (a2 = b.contains(o2.ownerDocument, o2), s2 = Ot(f2.appendChild(o2), "script"), a2 && Mt(s2), n2)) {
        i2 = 0;
        while (o2 = s2[i2++])
          kt.test(o2.type || "") && n2.push(o2);
      }
    return s2 = null, f2;
  }, cleanData: function(e2, t2) {
    var n2, r2, o2, a2, s2 = 0, u2 = b.expando, l2 = b.cache, p2 = b.support.deleteExpando, f2 = b.event.special;
    for (; (n2 = e2[s2]) != null; s2++)
      if ((t2 || b.acceptData(n2)) && (o2 = n2[u2], a2 = o2 && l2[o2])) {
        if (a2.events)
          for (r2 in a2.events)
            f2[r2] ? b.event.remove(n2, r2) : b.removeEvent(n2, r2, a2.handle);
        l2[o2] && (delete l2[o2], p2 ? delete n2[u2] : typeof n2.removeAttribute !== i ? n2.removeAttribute(u2) : n2[u2] = null, c.push(o2));
      }
  } });
  var Pt, Rt, Wt, $t = /alpha\\([^)]*\\)/i, It = /opacity\\s*=\\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
  function tn(e2, t2) {
    if (t2 in e2)
      return t2;
    var n2 = t2.charAt(0).toUpperCase() + t2.slice(1), r2 = t2, i2 = en.length;
    while (i2--)
      if (t2 = en[i2] + n2, t2 in e2)
        return t2;
    return r2;
  }
  function nn(e2, t2) {
    return e2 = t2 || e2, b.css(e2, "display") === "none" || !b.contains(e2.ownerDocument, e2);
  }
  function rn(e2, t2) {
    var n2, r2, i2, o2 = [], a2 = 0, s2 = e2.length;
    for (; s2 > a2; a2++)
      r2 = e2[a2], r2.style && (o2[a2] = b._data(r2, "olddisplay"), n2 = r2.style.display, t2 ? (o2[a2] || n2 !== "none" || (r2.style.display = ""), r2.style.display === "" && nn(r2) && (o2[a2] = b._data(r2, "olddisplay", un(r2.nodeName)))) : o2[a2] || (i2 = nn(r2), (n2 && n2 !== "none" || !i2) && b._data(r2, "olddisplay", i2 ? n2 : b.css(r2, "display"))));
    for (a2 = 0; s2 > a2; a2++)
      r2 = e2[a2], r2.style && (t2 && r2.style.display !== "none" && r2.style.display !== "" || (r2.style.display = t2 ? o2[a2] || "" : "none"));
    return e2;
  }
  b.fn.extend({ css: function(e2, n2) {
    return b.access(this, function(e3, n3, r2) {
      var i2, o2, a2 = {}, s2 = 0;
      if (b.isArray(n3)) {
        for (o2 = Rt(e3), i2 = n3.length; i2 > s2; s2++)
          a2[n3[s2]] = b.css(e3, n3[s2], false, o2);
        return a2;
      }
      return r2 !== t ? b.style(e3, n3, r2) : b.css(e3, n3);
    }, e2, n2, arguments.length > 1);
  }, show: function() {
    return rn(this, true);
  }, hide: function() {
    return rn(this);
  }, toggle: function(e2) {
    var t2 = typeof e2 == "boolean";
    return this.each(function() {
      (t2 ? e2 : nn(this)) ? b(this).show() : b(this).hide();
    });
  } }), b.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Wt(e2, "opacity");
      return n2 === "" ? "1" : n2;
    }
  } } }, cssNumber: { columnCount: true, fillOpacity: true, fontWeight: true, lineHeight: true, opacity: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: { "float": b.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e2, n2, r2, i2) {
    if (e2 && e2.nodeType !== 3 && e2.nodeType !== 8 && e2.style) {
      var o2, a2, s2, u2 = b.camelCase(n2), l2 = e2.style;
      if (n2 = b.cssProps[u2] || (b.cssProps[u2] = tn(l2, u2)), s2 = b.cssHooks[n2] || b.cssHooks[u2], r2 === t)
        return s2 && "get" in s2 && (o2 = s2.get(e2, false, i2)) !== t ? o2 : l2[n2];
      if (a2 = typeof r2, a2 === "string" && (o2 = Jt.exec(r2)) && (r2 = (o2[1] + 1) * o2[2] + parseFloat(b.css(e2, n2)), a2 = "number"), !(r2 == null || a2 === "number" && isNaN(r2) || (a2 !== "number" || b.cssNumber[u2] || (r2 += "px"), b.support.clearCloneStyle || r2 !== "" || n2.indexOf("background") !== 0 || (l2[n2] = "inherit"), s2 && "set" in s2 && (r2 = s2.set(e2, r2, i2)) === t)))
        try {
          l2[n2] = r2;
        } catch (c2) {
        }
    }
  }, css: function(e2, n2, r2, i2) {
    var o2, a2, s2, u2 = b.camelCase(n2);
    return n2 = b.cssProps[u2] || (b.cssProps[u2] = tn(e2.style, u2)), s2 = b.cssHooks[n2] || b.cssHooks[u2], s2 && "get" in s2 && (a2 = s2.get(e2, true, r2)), a2 === t && (a2 = Wt(e2, n2, i2)), a2 === "normal" && n2 in Kt && (a2 = Kt[n2]), r2 === "" || r2 ? (o2 = parseFloat(a2), r2 === true || b.isNumeric(o2) ? o2 || 0 : a2) : a2;
  }, swap: function(e2, t2, n2, r2) {
    var i2, o2, a2 = {};
    for (o2 in t2)
      a2[o2] = e2.style[o2], e2.style[o2] = t2[o2];
    i2 = n2.apply(e2, r2 || []);
    for (o2 in t2)
      e2.style[o2] = a2[o2];
    return i2;
  } }), e.getComputedStyle ? (Rt = function(t2) {
    return e.getComputedStyle(t2, null);
  }, Wt = function(e2, n2, r2) {
    var i2, o2, a2, s2 = r2 || Rt(e2), u2 = s2 ? s2.getPropertyValue(n2) || s2[n2] : t, l2 = e2.style;
    return s2 && (u2 !== "" || b.contains(e2.ownerDocument, e2) || (u2 = b.style(e2, n2)), Yt.test(u2) && Ut.test(n2) && (i2 = l2.width, o2 = l2.minWidth, a2 = l2.maxWidth, l2.minWidth = l2.maxWidth = l2.width = u2, u2 = s2.width, l2.width = i2, l2.minWidth = o2, l2.maxWidth = a2)), u2;
  }) : o.documentElement.currentStyle && (Rt = function(e2) {
    return e2.currentStyle;
  }, Wt = function(e2, n2, r2) {
    var i2, o2, a2, s2 = r2 || Rt(e2), u2 = s2 ? s2[n2] : t, l2 = e2.style;
    return u2 == null && l2 && l2[n2] && (u2 = l2[n2]), Yt.test(u2) && !zt.test(n2) && (i2 = l2.left, o2 = e2.runtimeStyle, a2 = o2 && o2.left, a2 && (o2.left = e2.currentStyle.left), l2.left = n2 === "fontSize" ? "1em" : u2, u2 = l2.pixelLeft + "px", l2.left = i2, a2 && (o2.left = a2)), u2 === "" ? "auto" : u2;
  });
  function on(e2, t2, n2) {
    var r2 = Vt.exec(t2);
    return r2 ? Math.max(0, r2[1] - (n2 || 0)) + (r2[2] || "px") : t2;
  }
  function an(e2, t2, n2, r2, i2) {
    var o2 = n2 === (r2 ? "border" : "content") ? 4 : t2 === "width" ? 1 : 0, a2 = 0;
    for (; 4 > o2; o2 += 2)
      n2 === "margin" && (a2 += b.css(e2, n2 + Zt[o2], true, i2)), r2 ? (n2 === "content" && (a2 -= b.css(e2, "padding" + Zt[o2], true, i2)), n2 !== "margin" && (a2 -= b.css(e2, "border" + Zt[o2] + "Width", true, i2))) : (a2 += b.css(e2, "padding" + Zt[o2], true, i2), n2 !== "padding" && (a2 += b.css(e2, "border" + Zt[o2] + "Width", true, i2)));
    return a2;
  }
  function sn(e2, t2, n2) {
    var r2 = true, i2 = t2 === "width" ? e2.offsetWidth : e2.offsetHeight, o2 = Rt(e2), a2 = b.support.boxSizing && b.css(e2, "boxSizing", false, o2) === "border-box";
    if (0 >= i2 || i2 == null) {
      if (i2 = Wt(e2, t2, o2), (0 > i2 || i2 == null) && (i2 = e2.style[t2]), Yt.test(i2))
        return i2;
      r2 = a2 && (b.support.boxSizingReliable || i2 === e2.style[t2]), i2 = parseFloat(i2) || 0;
    }
    return i2 + an(e2, t2, n2 || (a2 ? "border" : "content"), r2, o2) + "px";
  }
  function un(e2) {
    var t2 = o, n2 = Gt[e2];
    return n2 || (n2 = ln(e2, t2), n2 !== "none" && n2 || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t2.documentElement), t2 = (Pt[0].contentWindow || Pt[0].contentDocument).document, t2.write("<!doctype html><html><body>"), t2.close(), n2 = ln(e2, t2), Pt.detach()), Gt[e2] = n2), n2;
  }
  function ln(e2, t2) {
    var n2 = b(t2.createElement(e2)).appendTo(t2.body), r2 = b.css(n2[0], "display");
    return n2.remove(), r2;
  }
  b.each(["height", "width"], function(e2, n2) {
    b.cssHooks[n2] = { get: function(e3, r2, i2) {
      return r2 ? e3.offsetWidth === 0 && Xt.test(b.css(e3, "display")) ? b.swap(e3, Qt, function() {
        return sn(e3, n2, i2);
      }) : sn(e3, n2, i2) : t;
    }, set: function(e3, t2, r2) {
      var i2 = r2 && Rt(e3);
      return on(e3, t2, r2 ? an(e3, n2, r2, b.support.boxSizing && b.css(e3, "boxSizing", false, i2) === "border-box", i2) : 0);
    } };
  }), b.support.opacity || (b.cssHooks.opacity = { get: function(e2, t2) {
    return It.test((t2 && e2.currentStyle ? e2.currentStyle.filter : e2.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t2 ? "1" : "";
  }, set: function(e2, t2) {
    var n2 = e2.style, r2 = e2.currentStyle, i2 = b.isNumeric(t2) ? "alpha(opacity=" + 100 * t2 + ")" : "", o2 = r2 && r2.filter || n2.filter || "";
    n2.zoom = 1, (t2 >= 1 || t2 === "") && b.trim(o2.replace($t, "")) === "" && n2.removeAttribute && (n2.removeAttribute("filter"), t2 === "" || r2 && !r2.filter) || (n2.filter = $t.test(o2) ? o2.replace($t, i2) : o2 + " " + i2);
  } }), b(function() {
    b.support.reliableMarginRight || (b.cssHooks.marginRight = { get: function(e2, n2) {
      return n2 ? b.swap(e2, { display: "inline-block" }, Wt, [e2, "marginRight"]) : t;
    } }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e2, n2) {
      b.cssHooks[n2] = { get: function(e3, r2) {
        return r2 ? (r2 = Wt(e3, n2), Yt.test(r2) ? b(e3).position()[n2] + "px" : r2) : t;
      } };
    });
  }), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e2) {
    return 0 >= e2.offsetWidth && 0 >= e2.offsetHeight || !b.support.reliableHiddenOffsets && (e2.style && e2.style.display || b.css(e2, "display")) === "none";
  }, b.expr.filters.visible = function(e2) {
    return !b.expr.filters.hidden(e2);
  }), b.each({ margin: "", padding: "", border: "Width" }, function(e2, t2) {
    b.cssHooks[e2 + t2] = { expand: function(n2) {
      var r2 = 0, i2 = {}, o2 = typeof n2 == "string" ? n2.split(" ") : [n2];
      for (; 4 > r2; r2++)
        i2[e2 + Zt[r2] + t2] = o2[r2] || o2[r2 - 2] || o2[0];
      return i2;
    } }, Ut.test(e2) || (b.cssHooks[e2 + t2].set = on);
  });
  var cn = /%20/g, pn = /\\[\\]$/, fn = /\\r?\\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
  b.fn.extend({ serialize: function() {
    return b.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = b.prop(this, "elements");
      return e2 ? b.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e2) && (this.checked || !Nt.test(e2));
    }).map(function(e2, t2) {
      var n2 = b(this).val();
      return n2 == null ? null : b.isArray(n2) ? b.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(fn, "\\r\\n") };
      }) : { name: t2.name, value: n2.replace(fn, "\\r\\n") };
    }).get();
  } }), b.param = function(e2, n2) {
    var r2, i2 = [], o2 = function(e3, t2) {
      t2 = b.isFunction(t2) ? t2() : t2 == null ? "" : t2, i2[i2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(t2);
    };
    if (n2 === t && (n2 = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e2) || e2.jquery && !b.isPlainObject(e2))
      b.each(e2, function() {
        o2(this.name, this.value);
      });
    else
      for (r2 in e2)
        gn(r2, e2[r2], n2, o2);
    return i2.join("&").replace(cn, "+");
  };
  function gn(e2, t2, n2, r2) {
    var i2;
    if (b.isArray(t2))
      b.each(t2, function(t3, i3) {
        n2 || pn.test(e2) ? r2(e2, i3) : gn(e2 + "[" + (typeof i3 == "object" ? t3 : "") + "]", i3, n2, r2);
      });
    else if (n2 || b.type(t2) !== "object")
      r2(e2, t2);
    else
      for (i2 in t2)
        gn(e2 + "[" + i2 + "]", t2[i2], n2, r2);
  }
  b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e2, t2) {
    b.fn[t2] = function(e3, n2) {
      return arguments.length > 0 ? this.on(t2, null, e3, n2) : this.trigger(t2);
    };
  }), b.fn.hover = function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  };
  var mn, yn, vn = b.now(), bn = /\\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \\t]*([^\\r\\n]*)\\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\\/\\//, En = /^([\\w.+-]+:)(?:\\/\\/([^\\/?#:]*)(?::(\\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
  try {
    yn = a.href;
  } catch (Ln) {
    yn = o.createElement("a"), yn.href = "", yn = yn.href;
  }
  mn = En.exec(yn.toLowerCase()) || [];
  function Hn(e2) {
    return function(t2, n2) {
      typeof t2 != "string" && (n2 = t2, t2 = "*");
      var r2, i2 = 0, o2 = t2.toLowerCase().match(w) || [];
      if (b.isFunction(n2))
        while (r2 = o2[i2++])
          r2[0] === "+" ? (r2 = r2.slice(1) || "*", (e2[r2] = e2[r2] || []).unshift(n2)) : (e2[r2] = e2[r2] || []).push(n2);
    };
  }
  function qn(e2, n2, r2, i2) {
    var o2 = {}, a2 = e2 === jn;
    function s2(u2) {
      var l2;
      return o2[u2] = true, b.each(e2[u2] || [], function(e3, u3) {
        var c2 = u3(n2, r2, i2);
        return typeof c2 != "string" || a2 || o2[c2] ? a2 ? !(l2 = c2) : t : (n2.dataTypes.unshift(c2), s2(c2), false);
      }), l2;
    }
    return s2(n2.dataTypes[0]) || !o2["*"] && s2("*");
  }
  function Mn(e2, n2) {
    var r2, i2, o2 = b.ajaxSettings.flatOptions || {};
    for (i2 in n2)
      n2[i2] !== t && ((o2[i2] ? e2 : r2 || (r2 = {}))[i2] = n2[i2]);
    return r2 && b.extend(true, e2, r2), e2;
  }
  b.fn.load = function(e2, n2, r2) {
    if (typeof e2 != "string" && Sn)
      return Sn.apply(this, arguments);
    var i2, o2, a2, s2 = this, u2 = e2.indexOf(" ");
    return u2 >= 0 && (i2 = e2.slice(u2, e2.length), e2 = e2.slice(0, u2)), b.isFunction(n2) ? (r2 = n2, n2 = t) : n2 && typeof n2 == "object" && (a2 = "POST"), s2.length > 0 && b.ajax({ url: e2, type: a2, dataType: "html", data: n2 }).done(function(e3) {
      o2 = arguments, s2.html(i2 ? b("<div>").append(b.parseHTML(e3)).find(i2) : e3);
    }).complete(r2 && function(e3, t2) {
      s2.each(r2, o2 || [e3.responseText, t2, e3]);
    }), this;
  }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    b.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), b.each(["get", "post"], function(e2, n2) {
    b[n2] = function(e3, r2, i2, o2) {
      return b.isFunction(r2) && (o2 = o2 || i2, i2 = r2, r2 = t), b.ajax({ url: e3, type: n2, dataType: o2, data: r2, success: i2 });
    };
  }), b.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Nn.test(mn[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": true, "text json": b.parseJSON, "text xml": b.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Mn(Mn(e2, b.ajaxSettings), t2) : Mn(b.ajaxSettings, e2);
  }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function(e2, n2) {
    typeof e2 == "object" && (n2 = e2, e2 = t), n2 = n2 || {};
    var r2, i2, o2, a2, s2, u2, l2, c2, p2 = b.ajaxSetup({}, n2), f2 = p2.context || p2, d2 = p2.context && (f2.nodeType || f2.jquery) ? b(f2) : b.event, h2 = b.Deferred(), g2 = b.Callbacks("once memory"), m2 = p2.statusCode || {}, y2 = {}, v2 = {}, x2 = 0, T2 = "canceled", N2 = { readyState: 0, getResponseHeader: function(e3) {
      var t2;
      if (x2 === 2) {
        if (!c2) {
          c2 = {};
          while (t2 = Tn.exec(a2))
            c2[t2[1].toLowerCase()] = t2[2];
        }
        t2 = c2[e3.toLowerCase()];
      }
      return t2 == null ? null : t2;
    }, getAllResponseHeaders: function() {
      return x2 === 2 ? a2 : null;
    }, setRequestHeader: function(e3, t2) {
      var n3 = e3.toLowerCase();
      return x2 || (e3 = v2[n3] = v2[n3] || e3, y2[e3] = t2), this;
    }, overrideMimeType: function(e3) {
      return x2 || (p2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t2;
      if (e3)
        if (2 > x2)
          for (t2 in e3)
            m2[t2] = [m2[t2], e3[t2]];
        else
          N2.always(e3[N2.status]);
      return this;
    }, abort: function(e3) {
      var t2 = e3 || T2;
      return l2 && l2.abort(t2), k2(0, t2), this;
    } };
    if (h2.promise(N2).complete = g2.add, N2.success = N2.done, N2.error = N2.fail, p2.url = ((e2 || p2.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p2.type = n2.method || n2.type || p2.method || p2.type, p2.dataTypes = b.trim(p2.dataType || "*").toLowerCase().match(w) || [""], p2.crossDomain == null && (r2 = En.exec(p2.url.toLowerCase()), p2.crossDomain = !(!r2 || r2[1] === mn[1] && r2[2] === mn[2] && (r2[3] || (r2[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), p2.data && p2.processData && typeof p2.data != "string" && (p2.data = b.param(p2.data, p2.traditional)), qn(An, p2, n2, N2), x2 === 2)
      return N2;
    u2 = p2.global, u2 && b.active++ === 0 && b.event.trigger("ajaxStart"), p2.type = p2.type.toUpperCase(), p2.hasContent = !Cn.test(p2.type), o2 = p2.url, p2.hasContent || (p2.data && (o2 = p2.url += (bn.test(o2) ? "&" : "?") + p2.data, delete p2.data), p2.cache === false && (p2.url = wn.test(o2) ? o2.replace(wn, "$1_=" + vn++) : o2 + (bn.test(o2) ? "&" : "?") + "_=" + vn++)), p2.ifModified && (b.lastModified[o2] && N2.setRequestHeader("If-Modified-Since", b.lastModified[o2]), b.etag[o2] && N2.setRequestHeader("If-None-Match", b.etag[o2])), (p2.data && p2.hasContent && p2.contentType !== false || n2.contentType) && N2.setRequestHeader("Content-Type", p2.contentType), N2.setRequestHeader("Accept", p2.dataTypes[0] && p2.accepts[p2.dataTypes[0]] ? p2.accepts[p2.dataTypes[0]] + (p2.dataTypes[0] !== "*" ? ", " + Dn + "; q=0.01" : "") : p2.accepts["*"]);
    for (i2 in p2.headers)
      N2.setRequestHeader(i2, p2.headers[i2]);
    if (p2.beforeSend && (p2.beforeSend.call(f2, N2, p2) === false || x2 === 2))
      return N2.abort();
    T2 = "abort";
    for (i2 in { success: 1, error: 1, complete: 1 })
      N2[i2](p2[i2]);
    if (l2 = qn(jn, p2, n2, N2)) {
      N2.readyState = 1, u2 && d2.trigger("ajaxSend", [N2, p2]), p2.async && p2.timeout > 0 && (s2 = setTimeout(function() {
        N2.abort("timeout");
      }, p2.timeout));
      try {
        x2 = 1, l2.send(y2, k2);
      } catch (C2) {
        if (!(2 > x2))
          throw C2;
        k2(-1, C2);
      }
    } else
      k2(-1, "No Transport");
    function k2(e3, n3, r3, i3) {
      var c3, y3, v3, w2, T3, C2 = n3;
      x2 !== 2 && (x2 = 2, s2 && clearTimeout(s2), l2 = t, a2 = i3 || "", N2.readyState = e3 > 0 ? 4 : 0, r3 && (w2 = _n(p2, N2, r3)), e3 >= 200 && 300 > e3 || e3 === 304 ? (p2.ifModified && (T3 = N2.getResponseHeader("Last-Modified"), T3 && (b.lastModified[o2] = T3), T3 = N2.getResponseHeader("etag"), T3 && (b.etag[o2] = T3)), e3 === 204 ? (c3 = true, C2 = "nocontent") : e3 === 304 ? (c3 = true, C2 = "notmodified") : (c3 = Fn(p2, w2), C2 = c3.state, y3 = c3.data, v3 = c3.error, c3 = !v3)) : (v3 = C2, (e3 || !C2) && (C2 = "error", 0 > e3 && (e3 = 0))), N2.status = e3, N2.statusText = (n3 || C2) + "", c3 ? h2.resolveWith(f2, [y3, C2, N2]) : h2.rejectWith(f2, [N2, C2, v3]), N2.statusCode(m2), m2 = t, u2 && d2.trigger(c3 ? "ajaxSuccess" : "ajaxError", [N2, p2, c3 ? y3 : v3]), g2.fireWith(f2, [N2, C2]), u2 && (d2.trigger("ajaxComplete", [N2, p2]), --b.active || b.event.trigger("ajaxStop")));
    }
    return N2;
  }, getScript: function(e2, n2) {
    return b.get(e2, t, n2, "script");
  }, getJSON: function(e2, t2, n2) {
    return b.get(e2, t2, n2, "json");
  } });
  function _n(e2, n2, r2) {
    var i2, o2, a2, s2, u2 = e2.contents, l2 = e2.dataTypes, c2 = e2.responseFields;
    for (s2 in c2)
      s2 in r2 && (n2[c2[s2]] = r2[s2]);
    while (l2[0] === "*")
      l2.shift(), o2 === t && (o2 = e2.mimeType || n2.getResponseHeader("Content-Type"));
    if (o2) {
      for (s2 in u2)
        if (u2[s2] && u2[s2].test(o2)) {
          l2.unshift(s2);
          break;
        }
    }
    if (l2[0] in r2)
      a2 = l2[0];
    else {
      for (s2 in r2) {
        if (!l2[0] || e2.converters[s2 + " " + l2[0]]) {
          a2 = s2;
          break;
        }
        i2 || (i2 = s2);
      }
      a2 = a2 || i2;
    }
    return a2 ? (a2 !== l2[0] && l2.unshift(a2), r2[a2]) : t;
  }
  function Fn(e2, t2) {
    var n2, r2, i2, o2, a2 = {}, s2 = 0, u2 = e2.dataTypes.slice(), l2 = u2[0];
    if (e2.dataFilter && (t2 = e2.dataFilter(t2, e2.dataType)), u2[1])
      for (i2 in e2.converters)
        a2[i2.toLowerCase()] = e2.converters[i2];
    for (; r2 = u2[++s2]; )
      if (r2 !== "*") {
        if (l2 !== "*" && l2 !== r2) {
          if (i2 = a2[l2 + " " + r2] || a2["* " + r2], !i2) {
            for (n2 in a2)
              if (o2 = n2.split(" "), o2[1] === r2 && (i2 = a2[l2 + " " + o2[0]] || a2["* " + o2[0]])) {
                i2 === true ? i2 = a2[n2] : a2[n2] !== true && (r2 = o2[0], u2.splice(s2--, 0, r2));
                break;
              }
          }
          if (i2 !== true)
            if (i2 && e2["throws"])
              t2 = i2(t2);
            else
              try {
                t2 = i2(t2);
              } catch (c2) {
                return { state: "parsererror", error: i2 ? c2 : "No conversion from " + l2 + " to " + r2 };
              }
        }
        l2 = r2;
      }
    return { state: "success", data: t2 };
  }
  b.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e2) {
    return b.globalEval(e2), e2;
  } } }), b.ajaxPrefilter("script", function(e2) {
    e2.cache === t && (e2.cache = false), e2.crossDomain && (e2.type = "GET", e2.global = false);
  }), b.ajaxTransport("script", function(e2) {
    if (e2.crossDomain) {
      var n2, r2 = o.head || b("head")[0] || o.documentElement;
      return { send: function(t2, i2) {
        n2 = o.createElement("script"), n2.async = true, e2.scriptCharset && (n2.charset = e2.scriptCharset), n2.src = e2.url, n2.onload = n2.onreadystatechange = function(e3, t3) {
          (t3 || !n2.readyState || /loaded|complete/.test(n2.readyState)) && (n2.onload = n2.onreadystatechange = null, n2.parentNode && n2.parentNode.removeChild(n2), n2 = null, t3 || i2(200, "success"));
        }, r2.insertBefore(n2, r2.firstChild);
      }, abort: function() {
        n2 && n2.onload(t, true);
      } };
    }
  });
  var On = [], Bn = /(=)\\?(?=&|$)|\\?\\?/;
  b.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = On.pop() || b.expando + "_" + vn++;
    return this[e2] = true, e2;
  } }), b.ajaxPrefilter("json jsonp", function(n2, r2, i2) {
    var o2, a2, s2, u2 = n2.jsonp !== false && (Bn.test(n2.url) ? "url" : typeof n2.data == "string" && !(n2.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n2.data) && "data");
    return u2 || n2.dataTypes[0] === "jsonp" ? (o2 = n2.jsonpCallback = b.isFunction(n2.jsonpCallback) ? n2.jsonpCallback() : n2.jsonpCallback, u2 ? n2[u2] = n2[u2].replace(Bn, "$1" + o2) : n2.jsonp !== false && (n2.url += (bn.test(n2.url) ? "&" : "?") + n2.jsonp + "=" + o2), n2.converters["script json"] = function() {
      return s2 || b.error(o2 + " was not called"), s2[0];
    }, n2.dataTypes[0] = "json", a2 = e[o2], e[o2] = function() {
      s2 = arguments;
    }, i2.always(function() {
      e[o2] = a2, n2[o2] && (n2.jsonpCallback = r2.jsonpCallback, On.push(o2)), s2 && b.isFunction(a2) && a2(s2[0]), s2 = a2 = t;
    }), "script") : t;
  });
  var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
    var e2;
    for (e2 in Pn)
      Pn[e2](t, true);
  };
  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t2) {
    }
  }
  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t2) {
    }
  }
  b.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && In() || zn();
  } : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function(n2) {
    if (!n2.crossDomain || b.support.cors) {
      var r2;
      return { send: function(i2, o2) {
        var a2, s2, u2 = n2.xhr();
        if (n2.username ? u2.open(n2.type, n2.url, n2.async, n2.username, n2.password) : u2.open(n2.type, n2.url, n2.async), n2.xhrFields)
          for (s2 in n2.xhrFields)
            u2[s2] = n2.xhrFields[s2];
        n2.mimeType && u2.overrideMimeType && u2.overrideMimeType(n2.mimeType), n2.crossDomain || i2["X-Requested-With"] || (i2["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (s2 in i2)
            u2.setRequestHeader(s2, i2[s2]);
        } catch (l2) {
        }
        u2.send(n2.hasContent && n2.data || null), r2 = function(e2, i3) {
          var s3, l2, c2, p2;
          try {
            if (r2 && (i3 || u2.readyState === 4))
              if (r2 = t, a2 && (u2.onreadystatechange = b.noop, $n && delete Pn[a2]), i3)
                u2.readyState !== 4 && u2.abort();
              else {
                p2 = {}, s3 = u2.status, l2 = u2.getAllResponseHeaders(), typeof u2.responseText == "string" && (p2.text = u2.responseText);
                try {
                  c2 = u2.statusText;
                } catch (f2) {
                  c2 = "";
                }
                s3 || !n2.isLocal || n2.crossDomain ? s3 === 1223 && (s3 = 204) : s3 = p2.text ? 200 : 404;
              }
          } catch (d2) {
            i3 || o2(-1, d2);
          }
          p2 && o2(s3, c2, p2, l2);
        }, n2.async ? u2.readyState === 4 ? setTimeout(r2) : (a2 = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a2] = r2), u2.onreadystatechange = r2) : r2();
      }, abort: function() {
        r2 && r2(t, true);
      } };
    }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function(e2, t2) {
    var n2, r2, i2 = this.createTween(e2, t2), o2 = Yn.exec(t2), a2 = i2.cur(), s2 = +a2 || 0, u2 = 1, l2 = 20;
    if (o2) {
      if (n2 = +o2[2], r2 = o2[3] || (b.cssNumber[e2] ? "" : "px"), r2 !== "px" && s2) {
        s2 = b.css(i2.elem, e2, true) || n2 || 1;
        do
          u2 = u2 || ".5", s2 /= u2, b.style(i2.elem, e2, s2 + r2);
        while (u2 !== (u2 = i2.cur() / a2) && u2 !== 1 && --l2);
      }
      i2.unit = r2, i2.start = s2, i2.end = o2[1] ? s2 + (o2[1] + 1) * n2 : n2;
    }
    return i2;
  }] };
  function Kn() {
    return setTimeout(function() {
      Xn = t;
    }), Xn = b.now();
  }
  function Zn(e2, t2) {
    b.each(t2, function(t3, n2) {
      var r2 = (Qn[t3] || []).concat(Qn["*"]), i2 = 0, o2 = r2.length;
      for (; o2 > i2; i2++)
        if (r2[i2].call(e2, t3, n2))
          return;
    });
  }
  function er(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = Gn.length, s2 = b.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (i2)
        return false;
      var t3 = Xn || Kn(), n3 = Math.max(0, l2.startTime + l2.duration - t3), r3 = n3 / l2.duration || 0, o3 = 1 - r3, a3 = 0, u3 = l2.tweens.length;
      for (; u3 > a3; a3++)
        l2.tweens[a3].run(o3);
      return s2.notifyWith(e2, [l2, o3, n3]), 1 > o3 && u3 ? n3 : (s2.resolveWith(e2, [l2]), false);
    }, l2 = s2.promise({ elem: e2, props: b.extend({}, t2), opts: b.extend(true, { specialEasing: {} }, n2), originalProperties: t2, originalOptions: n2, startTime: Xn || Kn(), duration: n2.duration, tweens: [], createTween: function(t3, n3) {
      var r3 = b.Tween(e2, l2.opts, t3, n3, l2.opts.specialEasing[t3] || l2.opts.easing);
      return l2.tweens.push(r3), r3;
    }, stop: function(t3) {
      var n3 = 0, r3 = t3 ? l2.tweens.length : 0;
      if (i2)
        return this;
      for (i2 = true; r3 > n3; n3++)
        l2.tweens[n3].run(1);
      return t3 ? s2.resolveWith(e2, [l2, t3]) : s2.rejectWith(e2, [l2, t3]), this;
    } }), c2 = l2.props;
    for (tr(c2, l2.opts.specialEasing); a2 > o2; o2++)
      if (r2 = Gn[o2].call(l2, e2, c2, l2.opts))
        return r2;
    return Zn(l2, c2), b.isFunction(l2.opts.start) && l2.opts.start.call(e2, l2), b.fx.timer(b.extend(u2, { elem: e2, anim: l2, queue: l2.opts.queue })), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always);
  }
  function tr(e2, t2) {
    var n2, r2, i2, o2, a2;
    for (i2 in e2)
      if (r2 = b.camelCase(i2), o2 = t2[r2], n2 = e2[i2], b.isArray(n2) && (o2 = n2[1], n2 = e2[i2] = n2[0]), i2 !== r2 && (e2[r2] = n2, delete e2[i2]), a2 = b.cssHooks[r2], a2 && "expand" in a2) {
        n2 = a2.expand(n2), delete e2[r2];
        for (i2 in n2)
          i2 in e2 || (e2[i2] = n2[i2], t2[i2] = o2);
      } else
        t2[r2] = o2;
  }
  b.Animation = b.extend(er, { tweener: function(e2, t2) {
    b.isFunction(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.split(" ");
    var n2, r2 = 0, i2 = e2.length;
    for (; i2 > r2; r2++)
      n2 = e2[r2], Qn[n2] = Qn[n2] || [], Qn[n2].unshift(t2);
  }, prefilter: function(e2, t2) {
    t2 ? Gn.unshift(e2) : Gn.push(e2);
  } });
  function nr(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, p2, f2 = this, d2 = e2.style, h2 = {}, g2 = [], m2 = e2.nodeType && nn(e2);
    n2.queue || (c2 = b._queueHooks(e2, "fx"), c2.unqueued == null && (c2.unqueued = 0, p2 = c2.empty.fire, c2.empty.fire = function() {
      c2.unqueued || p2();
    }), c2.unqueued++, f2.always(function() {
      f2.always(function() {
        c2.unqueued--, b.queue(e2, "fx").length || c2.empty.fire();
      });
    })), e2.nodeType === 1 && ("height" in t2 || "width" in t2) && (n2.overflow = [d2.overflow, d2.overflowX, d2.overflowY], b.css(e2, "display") === "inline" && b.css(e2, "float") === "none" && (b.support.inlineBlockNeedsLayout && un(e2.nodeName) !== "inline" ? d2.zoom = 1 : d2.display = "inline-block")), n2.overflow && (d2.overflow = "hidden", b.support.shrinkWrapBlocks || f2.always(function() {
      d2.overflow = n2.overflow[0], d2.overflowX = n2.overflow[1], d2.overflowY = n2.overflow[2];
    }));
    for (i2 in t2)
      if (a2 = t2[i2], Vn.exec(a2)) {
        if (delete t2[i2], u2 = u2 || a2 === "toggle", a2 === (m2 ? "hide" : "show"))
          continue;
        g2.push(i2);
      }
    if (o2 = g2.length) {
      s2 = b._data(e2, "fxshow") || b._data(e2, "fxshow", {}), "hidden" in s2 && (m2 = s2.hidden), u2 && (s2.hidden = !m2), m2 ? b(e2).show() : f2.done(function() {
        b(e2).hide();
      }), f2.done(function() {
        var t3;
        b._removeData(e2, "fxshow");
        for (t3 in h2)
          b.style(e2, t3, h2[t3]);
      });
      for (i2 = 0; o2 > i2; i2++)
        r2 = g2[i2], l2 = f2.createTween(r2, m2 ? s2[r2] : 0), h2[r2] = s2[r2] || b.style(e2, r2), r2 in s2 || (s2[r2] = l2.start, m2 && (l2.end = l2.start, l2.start = r2 === "width" || r2 === "height" ? 1 : 0));
    }
  }
  function rr(e2, t2, n2, r2, i2) {
    return new rr.prototype.init(e2, t2, n2, r2, i2);
  }
  b.Tween = rr, rr.prototype = { constructor: rr, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || "swing", this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (b.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = rr.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : rr.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = rr.propHooks[this.prop];
    return this.pos = t2 = this.options.duration ? b.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : rr.propHooks._default.set(this), this;
  } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function(e2) {
    var t2;
    return e2.elem[e2.prop] == null || e2.elem.style && e2.elem.style[e2.prop] != null ? (t2 = b.css(e2.elem, e2.prop, ""), t2 && t2 !== "auto" ? t2 : 0) : e2.elem[e2.prop];
  }, set: function(e2) {
    b.fx.step[e2.prop] ? b.fx.step[e2.prop](e2) : e2.elem.style && (e2.elem.style[b.cssProps[e2.prop]] != null || b.cssHooks[e2.prop]) ? b.style(e2.elem, e2.prop, e2.now + e2.unit) : e2.elem[e2.prop] = e2.now;
  } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, b.each(["toggle", "show", "hide"], function(e2, t2) {
    var n2 = b.fn[t2];
    b.fn[t2] = function(e3, r2, i2) {
      return e3 == null || typeof e3 == "boolean" ? n2.apply(this, arguments) : this.animate(ir(t2, true), e3, r2, i2);
    };
  }), b.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(e2, t2, n2, r2) {
    var i2 = b.isEmptyObject(e2), o2 = b.speed(t2, n2, r2), a2 = function() {
      var t3 = er(this, b.extend({}, e2), o2);
      a2.finish = function() {
        t3.stop(true);
      }, (i2 || b._data(this, "finish")) && t3.stop(true);
    };
    return a2.finish = a2, i2 || o2.queue === false ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(e2, n2, r2) {
    var i2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(r2);
    };
    return typeof e2 != "string" && (r2 = n2, n2 = e2, e2 = t), n2 && e2 !== false && this.queue(e2 || "fx", []), this.each(function() {
      var t2 = true, n3 = e2 != null && e2 + "queueHooks", o2 = b.timers, a2 = b._data(this);
      if (n3)
        a2[n3] && a2[n3].stop && i2(a2[n3]);
      else
        for (n3 in a2)
          a2[n3] && a2[n3].stop && Jn.test(n3) && i2(a2[n3]);
      for (n3 = o2.length; n3--; )
        o2[n3].elem !== this || e2 != null && o2[n3].queue !== e2 || (o2[n3].anim.stop(r2), t2 = false, o2.splice(n3, 1));
      (t2 || !r2) && b.dequeue(this, e2);
    });
  }, finish: function(e2) {
    return e2 !== false && (e2 = e2 || "fx"), this.each(function() {
      var t2, n2 = b._data(this), r2 = n2[e2 + "queue"], i2 = n2[e2 + "queueHooks"], o2 = b.timers, a2 = r2 ? r2.length : 0;
      for (n2.finish = true, b.queue(this, e2, []), i2 && i2.cur && i2.cur.finish && i2.cur.finish.call(this), t2 = o2.length; t2--; )
        o2[t2].elem === this && o2[t2].queue === e2 && (o2[t2].anim.stop(true), o2.splice(t2, 1));
      for (t2 = 0; a2 > t2; t2++)
        r2[t2] && r2[t2].finish && r2[t2].finish.call(this);
      delete n2.finish;
    });
  } });
  function ir(e2, t2) {
    var n2, r2 = { height: e2 }, i2 = 0;
    for (t2 = t2 ? 1 : 0; 4 > i2; i2 += 2 - t2)
      n2 = Zt[i2], r2["margin" + n2] = r2["padding" + n2] = e2;
    return t2 && (r2.opacity = r2.width = e2), r2;
  }
  b.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, t2) {
    b.fn[e2] = function(e3, n2, r2) {
      return this.animate(t2, e3, n2, r2);
    };
  }), b.speed = function(e2, t2, n2) {
    var r2 = e2 && typeof e2 == "object" ? b.extend({}, e2) : { complete: n2 || !n2 && t2 || b.isFunction(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !b.isFunction(t2) && t2 };
    return r2.duration = b.fx.off ? 0 : typeof r2.duration == "number" ? r2.duration : r2.duration in b.fx.speeds ? b.fx.speeds[r2.duration] : b.fx.speeds._default, (r2.queue == null || r2.queue === true) && (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      b.isFunction(r2.old) && r2.old.call(this), r2.queue && b.dequeue(this, r2.queue);
    }, r2;
  }, b.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  } }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
    var e2, n2 = b.timers, r2 = 0;
    for (Xn = b.now(); n2.length > r2; r2++)
      e2 = n2[r2], e2() || n2[r2] !== e2 || n2.splice(r2--, 1);
    n2.length || b.fx.stop(), Xn = t;
  }, b.fx.timer = function(e2) {
    e2() && b.timers.push(e2) && b.fx.start();
  }, b.fx.interval = 13, b.fx.start = function() {
    Un || (Un = setInterval(b.fx.tick, b.fx.interval));
  }, b.fx.stop = function() {
    clearInterval(Un), Un = null;
  }, b.fx.speeds = { slow: 600, fast: 200, _default: 400 }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e2) {
    return b.grep(b.timers, function(t2) {
      return e2 === t2.elem;
    }).length;
  }), b.fn.offset = function(e2) {
    if (arguments.length)
      return e2 === t ? this : this.each(function(t2) {
        b.offset.setOffset(this, e2, t2);
      });
    var n2, r2, o2 = { top: 0, left: 0 }, a2 = this[0], s2 = a2 && a2.ownerDocument;
    if (s2)
      return n2 = s2.documentElement, b.contains(n2, a2) ? (typeof a2.getBoundingClientRect !== i && (o2 = a2.getBoundingClientRect()), r2 = or(s2), { top: o2.top + (r2.pageYOffset || n2.scrollTop) - (n2.clientTop || 0), left: o2.left + (r2.pageXOffset || n2.scrollLeft) - (n2.clientLeft || 0) }) : o2;
  }, b.offset = { setOffset: function(e2, t2, n2) {
    var r2 = b.css(e2, "position");
    r2 === "static" && (e2.style.position = "relative");
    var i2 = b(e2), o2 = i2.offset(), a2 = b.css(e2, "top"), s2 = b.css(e2, "left"), u2 = (r2 === "absolute" || r2 === "fixed") && b.inArray("auto", [a2, s2]) > -1, l2 = {}, c2 = {}, p2, f2;
    u2 ? (c2 = i2.position(), p2 = c2.top, f2 = c2.left) : (p2 = parseFloat(a2) || 0, f2 = parseFloat(s2) || 0), b.isFunction(t2) && (t2 = t2.call(e2, n2, o2)), t2.top != null && (l2.top = t2.top - o2.top + p2), t2.left != null && (l2.left = t2.left - o2.left + f2), "using" in t2 ? t2.using.call(e2, l2) : i2.css(l2);
  } }, b.fn.extend({ position: function() {
    if (this[0]) {
      var e2, t2, n2 = { top: 0, left: 0 }, r2 = this[0];
      return b.css(r2, "position") === "fixed" ? t2 = r2.getBoundingClientRect() : (e2 = this.offsetParent(), t2 = this.offset(), b.nodeName(e2[0], "html") || (n2 = e2.offset()), n2.top += b.css(e2[0], "borderTopWidth", true), n2.left += b.css(e2[0], "borderLeftWidth", true)), { top: t2.top - n2.top - b.css(r2, "marginTop", true), left: t2.left - n2.left - b.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent || o.documentElement;
      while (e2 && !b.nodeName(e2, "html") && b.css(e2, "position") === "static")
        e2 = e2.offsetParent;
      return e2 || o.documentElement;
    });
  } }), b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e2, n2) {
    var r2 = /Y/.test(n2);
    b.fn[e2] = function(i2) {
      return b.access(this, function(e3, i3, o2) {
        var a2 = or(e3);
        return o2 === t ? a2 ? n2 in a2 ? a2[n2] : a2.document.documentElement[i3] : e3[i3] : (a2 ? a2.scrollTo(r2 ? b(a2).scrollLeft() : o2, r2 ? o2 : b(a2).scrollTop()) : e3[i3] = o2, t);
      }, e2, i2, arguments.length, null);
    };
  });
  function or(e2) {
    return b.isWindow(e2) ? e2 : e2.nodeType === 9 ? e2.defaultView || e2.parentWindow : false;
  }
  b.each({ Height: "height", Width: "width" }, function(e2, n2) {
    b.each({ padding: "inner" + e2, content: n2, "": "outer" + e2 }, function(r2, i2) {
      b.fn[i2] = function(i3, o2) {
        var a2 = arguments.length && (r2 || typeof i3 != "boolean"), s2 = r2 || (i3 === true || o2 === true ? "margin" : "border");
        return b.access(this, function(n3, r3, i4) {
          var o3;
          return b.isWindow(n3) ? n3.document.documentElement["client" + e2] : n3.nodeType === 9 ? (o3 = n3.documentElement, Math.max(n3.body["scroll" + e2], o3["scroll" + e2], n3.body["offset" + e2], o3["offset" + e2], o3["client" + e2])) : i4 === t ? b.css(n3, r3, s2) : b.style(n3, r3, i4, s2);
        }, n2, a2 ? i3 : t, a2, null);
      };
    });
  }), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return b;
  });
})(window);
var H5P$5 = window.H5P = window.H5P || {};
H5P$5.jQuery = jQuery.noConflict(true);
H5P$5.jQuery.ajaxPrefilter(function(s) {
  if (s.crossDomain) {
    s.contents.script = false;
  }
});
var H5P$4 = window.H5P = window.H5P || {};
H5P$4.isFramed = window.self !== window.parent;
H5P$4.$window = H5P$4.jQuery(window);
H5P$4.instances = [];
if (document.documentElement.requestFullScreen) {
  H5P$4.fullScreenBrowserPrefix = "";
} else if (document.documentElement.webkitRequestFullScreen) {
  H5P$4.safariBrowser = navigator.userAgent.match(/version\\/([.\\d]+)/i);
  H5P$4.safariBrowser = H5P$4.safariBrowser === null ? 0 : parseInt(H5P$4.safariBrowser[1]);
  if (H5P$4.safariBrowser === 0 || H5P$4.safariBrowser > 6) {
    H5P$4.fullScreenBrowserPrefix = "webkit";
  }
} else if (document.documentElement.mozRequestFullScreen) {
  H5P$4.fullScreenBrowserPrefix = "moz";
} else if (document.documentElement.msRequestFullscreen) {
  H5P$4.fullScreenBrowserPrefix = "ms";
}
H5P$4.opened = {};
H5P$4.init = function(target) {
  if (H5P$4.$body === void 0) {
    H5P$4.$body = H5P$4.jQuery(document.body);
  }
  if (H5P$4.fullscreenSupported === void 0) {
    H5P$4.fullscreenSupported = !H5PIntegration.fullscreenDisabled && !H5P$4.fullscreenDisabled && (!(H5P$4.isFramed && H5P$4.externalEmbed !== false) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled));
  }
  if (H5P$4.canHasFullScreen === void 0) {
    H5P$4.canHasFullScreen = H5P$4.fullscreenSupported;
  }
  H5P$4.jQuery(".h5p-content:not(.h5p-initialized)", target).each(function() {
    var $element = H5P$4.jQuery(this).addClass("h5p-initialized");
    var $container = H5P$4.jQuery('<div class="h5p-container"></div>').appendTo($element);
    var contentId = $element.data("content-id");
    var contentData = H5PIntegration.contents["cid-" + contentId];
    if (contentData === void 0) {
      return H5P$4.error("No data for content id " + contentId + ". Perhaps the library is gone?");
    }
    var library = {
      library: contentData.library,
      params: JSON.parse(contentData.jsonContent),
      metadata: contentData.metadata
    };
    H5P$4.getUserData(contentId, "state", function(err, previousState) {
      if (previousState) {
        library.userDatas = {
          state: previousState
        };
      } else if (previousState === null && H5PIntegration.saveFreq) {
        delete contentData.contentUserData;
        var dialog = new H5P$4.Dialog("content-user-data-reset", "Data Reset", "<p>" + H5P$4.t("contentChanged") + "</p><p>" + H5P$4.t("startingOver") + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', $container);
        H5P$4.jQuery(dialog).on("dialog-opened", function(event, $dialog) {
          var closeDialog = function(event2) {
            if (event2.type === "click" || event2.which === 32) {
              dialog.close();
              H5P$4.deleteUserData(contentId, "state", 0);
            }
          };
          $dialog.find(".h5p-dialog-ok-button").click(closeDialog).keypress(closeDialog);
          H5P$4.trigger(instance, "resize");
        }).on("dialog-closed", function() {
          H5P$4.trigger(instance, "resize");
        });
        dialog.open();
      }
    });
    var instance = H5P$4.newRunnable(library, contentId, $container, true, { standalone: true });
    H5P$4.offlineRequestQueue = new H5P$4.OfflineRequestQueue({ instance });
    if (contentData.fullScreen == 1 && H5P$4.fullscreenSupported) {
      H5P$4.jQuery('<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' + H5P$4.t("fullscreen") + '" title="' + H5P$4.t("fullscreen") + '"></div></div>').prependTo($container).children().click(function() {
        H5P$4.fullScreen($container, instance);
      }).keydown(function(e) {
        if (e.which === 32 || e.which === 13) {
          H5P$4.fullScreen($container, instance);
          return false;
        }
      });
    }
    var displayOptions = contentData.displayOptions;
    var displayFrame = false;
    if (displayOptions.frame) {
      if (displayOptions.copyright) {
        var copyrights = H5P$4.getCopyrights(instance, library.params, contentId, library.metadata);
        if (!copyrights) {
          displayOptions.copyright = false;
        }
      }
      var actionBar = new H5P$4.ActionBar(displayOptions);
      var $actions = actionBar.getDOMElement();
      actionBar.on("reuse", function() {
        H5P$4.openReuseDialog($actions, contentData, library, instance, contentId);
        instance.triggerXAPI("accessed-reuse");
      });
      actionBar.on("copyrights", function() {
        var dialog = new H5P$4.Dialog("copyrights", H5P$4.t("copyrightInformation"), copyrights, $container);
        dialog.open(true);
        instance.triggerXAPI("accessed-copyright");
      });
      actionBar.on("embed", function() {
        H5P$4.openEmbedDialog($actions, contentData.embedCode, contentData.resizeCode, {
          width: $element.width(),
          height: $element.height()
        }, instance);
        instance.triggerXAPI("accessed-embed");
      });
      if (actionBar.hasActions()) {
        displayFrame = true;
        $actions.insertAfter($container);
      }
    }
    $element.addClass(displayFrame ? "h5p-frame" : "h5p-no-frame");
    H5P$4.opened[contentId] = new Date();
    H5P$4.on(instance, "finish", function(event) {
      if (event.data !== void 0) {
        H5P$4.setFinished(contentId, event.data.score, event.data.maxScore, event.data.time);
      }
    });
    H5P$4.on(instance, "xAPI", H5P$4.xAPICompletedListener);
    if (H5PIntegration.saveFreq !== false && (instance.getCurrentState instanceof Function || typeof instance.getCurrentState === "function")) {
      var saveTimer, save = function() {
        var state = instance.getCurrentState();
        if (state !== void 0) {
          H5P$4.setUserData(contentId, "state", state, { deleteOnChange: true });
        }
        if (H5PIntegration.saveFreq) {
          saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1e3);
        }
      };
      if (H5PIntegration.saveFreq) {
        saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1e3);
      }
      H5P$4.on(instance, "xAPI", function(event) {
        var verb = event.getVerb();
        if (verb === "completed" || verb === "progressed") {
          clearTimeout(saveTimer);
          saveTimer = setTimeout(save, 3e3);
        }
      });
    }
    if (H5P$4.isFramed) {
      var resizeDelay;
      if (H5P$4.externalEmbed === false) {
        var iframe = window.frameElement;
        var resizeIframe = function() {
          if (window.parent.H5P.isFullscreen) {
            return;
          }
          var parentHeight = iframe.parentElement.style.height;
          iframe.parentElement.style.height = iframe.parentElement.clientHeight + "px";
          iframe.getBoundingClientRect();
          iframe.style.height = "1px";
          iframe.style.height = iframe.contentDocument.body.scrollHeight + "px";
          iframe.parentElement.style.height = parentHeight;
        };
        H5P$4.on(instance, "resize", function() {
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function() {
            resizeIframe();
          }, 1);
        });
      } else if (H5P$4.communicator) {
        var parentIsFriendly = false;
        H5P$4.communicator.on("ready", function() {
          H5P$4.communicator.send("hello");
        });
        H5P$4.communicator.on("hello", function() {
          parentIsFriendly = true;
          document.body.style.height = "auto";
          document.body.style.overflow = "hidden";
          H5P$4.trigger(instance, "resize");
        });
        H5P$4.communicator.on("resizePrepared", function() {
          H5P$4.communicator.send("resize", {
            scrollHeight: document.body.scrollHeight
          });
        });
        H5P$4.communicator.on("resize", function() {
          H5P$4.trigger(instance, "resize");
        });
        H5P$4.on(instance, "resize", function() {
          if (H5P$4.isFullscreen) {
            return;
          }
          clearTimeout(resizeDelay);
          resizeDelay = setTimeout(function() {
            if (parentIsFriendly) {
              H5P$4.communicator.send("prepareResize", {
                scrollHeight: document.body.scrollHeight,
                clientHeight: document.body.clientHeight
              });
            } else {
              H5P$4.communicator.send("hello");
            }
          }, 0);
        });
      }
    }
    if (!H5P$4.isFramed || H5P$4.externalEmbed === false) {
      H5P$4.jQuery(window.parent).resize(function() {
        if (window.parent.H5P.isFullscreen) {
          H5P$4.trigger(instance, "resize");
        } else {
          H5P$4.trigger(instance, "resize");
        }
      });
    }
    H5P$4.instances.push(instance);
    H5P$4.trigger(instance, "resize");
    $element.addClass("using-mouse");
    $element.on("mousedown keydown keyup", function(event) {
      $element.toggleClass("using-mouse", event.type === "mousedown");
    });
    if (H5P$4.externalDispatcher) {
      H5P$4.externalDispatcher.trigger("initialized");
    }
  });
  H5P$4.jQuery("iframe.h5p-iframe:not(.h5p-initialized)", target).each(function() {
    var contentId = H5P$4.jQuery(this).addClass("h5p-initialized").data("content-id");
    this.contentDocument.open();
    this.contentDocument.write('<!doctype html><html class="h5p-iframe"><head>' + H5P$4.getHeadTags(contentId) + '</head><body><div class="h5p-content" data-content-id="' + contentId + '"/></body></html>');
    this.contentDocument.close();
  });
};
H5P$4.getHeadTags = function(contentId) {
  var createStyleTags = function(styles) {
    var tags = "";
    for (var i = 0; i < styles.length; i++) {
      tags += '<link rel="stylesheet" href="' + styles[i] + '">';
    }
    return tags;
  };
  var createScriptTags = function(scripts) {
    var tags = "";
    for (var i = 0; i < scripts.length; i++) {
      tags += '<script src="' + scripts[i] + '"><\\/script>';
    }
    return tags;
  };
  return '<base target="_parent">' + createStyleTags(H5PIntegration.core.styles) + createStyleTags(H5PIntegration.contents["cid-" + contentId].styles) + createScriptTags(H5PIntegration.core.scripts) + createScriptTags(H5PIntegration.contents["cid-" + contentId].scripts) + "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;<\\/script>";
};
H5P$4.communicator = function() {
  function Communicator() {
    var self = this;
    var actionHandlers = {};
    window.addEventListener("message", function receiveMessage(event) {
      if (window.parent !== event.source || event.data.context !== "h5p") {
        return;
      }
      if (actionHandlers[event.data.action] !== void 0) {
        actionHandlers[event.data.action](event.data);
      }
    }, false);
    self.on = function(action, handler) {
      actionHandlers[action] = handler;
    };
    self.send = function(action, data) {
      if (data === void 0) {
        data = {};
      }
      data.context = "h5p";
      data.action = action;
      window.parent.postMessage(data, "*");
    };
  }
  return window.postMessage && window.addEventListener ? new Communicator() : void 0;
}();
H5P$4.semiFullScreen = function($element, instance, exitCallback, body) {
  H5P$4.fullScreen($element, instance, exitCallback, body, true);
};
H5P$4.fullScreen = function($element, instance, exitCallback, body, forceSemiFullScreen) {
  if (H5P$4.exitFullScreen !== void 0) {
    return;
  }
  if (H5P$4.isFramed && H5P$4.externalEmbed === false) {
    window.parent.H5P.fullScreen($element, instance, exitCallback, H5P$4.$body.get(), forceSemiFullScreen);
    H5P$4.isFullscreen = true;
    H5P$4.exitFullScreen = function() {
      window.parent.H5P.exitFullScreen();
    };
    H5P$4.on(instance, "exitFullScreen", function() {
      H5P$4.isFullscreen = false;
      H5P$4.exitFullScreen = void 0;
    });
    return;
  }
  var $container = $element;
  var $classes, $iframe, $body;
  if (body === void 0) {
    $body = H5P$4.$body;
  } else {
    $body = H5P$4.jQuery(body);
    $classes = $body.add($element.get());
    var iframeSelector = "#h5p-iframe-" + $element.parent().data("content-id");
    $iframe = H5P$4.jQuery(iframeSelector);
    $element = $iframe.parent();
  }
  $classes = $element.add(H5P$4.$body).add($classes);
  var before = function(classes) {
    $classes.addClass(classes);
    if ($iframe !== void 0) {
      $iframe.css("height", "");
    }
  };
  var entered = function() {
    H5P$4.trigger(instance, "resize");
    H5P$4.trigger(instance, "focus");
    H5P$4.trigger(instance, "enterFullScreen");
  };
  var done = function(classes) {
    H5P$4.isFullscreen = false;
    $classes.removeClass(classes);
    H5P$4.trigger(instance, "resize");
    H5P$4.trigger(instance, "focus");
    H5P$4.exitFullScreen = void 0;
    if (exitCallback !== void 0) {
      exitCallback();
    }
    H5P$4.trigger(instance, "exitFullScreen");
  };
  H5P$4.isFullscreen = true;
  if (H5P$4.fullScreenBrowserPrefix === void 0 || forceSemiFullScreen === true) {
    if (H5P$4.isFramed) {
      return;
    }
    before("h5p-semi-fullscreen");
    var $disable = H5P$4.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + H5P$4.t("disableFullscreen") + '" aria-label="' + H5P$4.t("disableFullscreen") + '"></div>').appendTo($container.find(".h5p-content-controls"));
    var keyup, disableSemiFullscreen = H5P$4.exitFullScreen = function() {
      if (prevViewportContent) {
        h5pViewport.content = prevViewportContent;
      } else {
        head.removeChild(h5pViewport);
      }
      $disable.remove();
      $body.unbind("keyup", keyup);
      done("h5p-semi-fullscreen");
    };
    keyup = function(event) {
      if (event.keyCode === 27) {
        disableSemiFullscreen();
      }
    };
    $disable.click(disableSemiFullscreen);
    $body.keyup(keyup);
    var prevViewportContent, h5pViewport;
    var metaTags = document.getElementsByTagName("meta");
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === "viewport") {
        h5pViewport = metaTags[i];
        prevViewportContent = h5pViewport.content;
        break;
      }
    }
    if (!prevViewportContent) {
      h5pViewport = document.createElement("meta");
      h5pViewport.name = "viewport";
    }
    h5pViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    if (!prevViewportContent) {
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(h5pViewport);
    }
    entered();
  } else {
    before("h5p-fullscreen");
    var first, eventName = H5P$4.fullScreenBrowserPrefix === "ms" ? "MSFullscreenChange" : H5P$4.fullScreenBrowserPrefix + "fullscreenchange";
    document.addEventListener(eventName, function() {
      if (first === void 0) {
        first = false;
        entered();
        return;
      }
      done("h5p-fullscreen");
      document.removeEventListener(eventName, arguments.callee, false);
    });
    if (H5P$4.fullScreenBrowserPrefix === "") {
      $element[0].requestFullScreen();
    } else {
      var method = H5P$4.fullScreenBrowserPrefix === "ms" ? "msRequestFullscreen" : H5P$4.fullScreenBrowserPrefix + "RequestFullScreen";
      var params = H5P$4.fullScreenBrowserPrefix === "webkit" && H5P$4.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : void 0;
      $element[0][method](params);
    }
    H5P$4.exitFullScreen = function() {
      if (H5P$4.fullScreenBrowserPrefix === "") {
        document.exitFullscreen();
      } else if (H5P$4.fullScreenBrowserPrefix === "moz") {
        document.mozCancelFullScreen();
      } else {
        document[H5P$4.fullScreenBrowserPrefix + "ExitFullscreen"]();
      }
    };
  }
};
(function() {
  H5P$4.addQueryParameter = function(path, parameter) {
    let newPath, secondSplit;
    const firstSplit = path.split("?");
    if (firstSplit[1]) {
      secondSplit = firstSplit[1].split("#");
      newPath = firstSplit[0] + "?" + secondSplit[0] + "&";
    } else {
      secondSplit = firstSplit[0].split("#");
      newPath = secondSplit[0] + "?";
    }
    newPath += parameter;
    if (secondSplit[1]) {
      newPath += "#" + secondSplit[1];
    }
    return newPath;
  };
  H5P$4.setSource = function(element, source, contentId) {
    let path = source.path;
    const crossOrigin = H5P$4.getCrossOrigin(source);
    if (crossOrigin) {
      element.crossOrigin = crossOrigin;
      if (H5PIntegration.crossoriginCacheBuster) {
        path = H5P$4.addQueryParameter(path, H5PIntegration.crossoriginCacheBuster);
      }
    } else {
      element.removeAttribute("crossorigin");
    }
    element.src = H5P$4.getPath(path, contentId);
  };
  var hasProtocol = function(path) {
    return path.match(/^[a-z0-9]+:\\/\\//i);
  };
  H5P$4.getCrossOrigin = function(source) {
    if (typeof source !== "object") {
      return H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && source.match(H5PIntegration.crossoriginRegex) ? H5PIntegration.crossorigin : null;
    }
    if (H5PIntegration.crossorigin && !hasProtocol(source.path)) {
      return H5PIntegration.crossorigin;
    }
  };
  H5P$4.getPath = function(path, contentId) {
    if (hasProtocol(path)) {
      return path;
    }
    var prefix;
    var isTmpFile = path.substr(-4, 4) === "#tmp";
    if (contentId !== void 0 && !isTmpFile) {
      if (H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + contentId]) {
        prefix = H5PIntegration.contents["cid-" + contentId].contentUrl;
      }
      if (!prefix) {
        prefix = H5PIntegration.url + "/content/" + contentId;
      }
    } else if (window.H5PEditor !== void 0) {
      prefix = H5PEditor.filesPath;
    } else {
      return;
    }
    if (!hasProtocol(prefix)) {
      prefix = window.location.protocol + "//" + window.location.host + prefix;
    }
    return prefix + "/" + path;
  };
})();
H5P$4.getContentPath = function(contentId) {
  return H5PIntegration.url + "/content/" + contentId;
};
H5P$4.classFromName = function(name2) {
  var arr = name2.split(".");
  return this[arr[arr.length - 1]];
};
H5P$4.newRunnable = function(library, contentId, $attachTo, skipResize, extras) {
  var nameSplit, versionSplit, machineName;
  try {
    nameSplit = library.library.split(" ", 2);
    machineName = nameSplit[0];
    versionSplit = nameSplit[1].split(".", 2);
  } catch (err) {
    return H5P$4.error("Invalid library string: " + library.library);
  }
  if (library.params instanceof Object !== true || library.params instanceof Array === true) {
    H5P$4.error("Invalid library params for: " + library.library);
    return H5P$4.error(library.params);
  }
  var constructor;
  try {
    nameSplit = nameSplit[0].split(".");
    constructor = window;
    for (var i = 0; i < nameSplit.length; i++) {
      constructor = constructor[nameSplit[i]];
    }
    if (typeof constructor !== "function") {
      throw null;
    }
  } catch (err) {
    return H5P$4.error("Unable to find constructor for: " + library.library);
  }
  if (extras === void 0) {
    extras = {};
  }
  if (library.subContentId) {
    extras.subContentId = library.subContentId;
  }
  if (library.userDatas && library.userDatas.state && H5PIntegration.saveFreq) {
    extras.previousState = library.userDatas.state;
  }
  if (library.metadata) {
    extras.metadata = library.metadata;
  }
  var standalone = extras.standalone || false;
  constructor.prototype = H5P$4.jQuery.extend({}, H5P$4.ContentType(standalone).prototype, constructor.prototype);
  var instance;
  if (H5P$4.jQuery.inArray(library.library, ["H5P.CoursePresentation 1.0", "H5P.CoursePresentation 1.1", "H5P.CoursePresentation 1.2", "H5P.CoursePresentation 1.3"]) > -1) {
    instance = new constructor(library.params, contentId);
  } else {
    instance = new constructor(library.params, contentId, extras);
  }
  if (instance.$ === void 0) {
    instance.$ = H5P$4.jQuery(instance);
  }
  if (instance.contentId === void 0) {
    instance.contentId = contentId;
  }
  if (instance.subContentId === void 0 && library.subContentId) {
    instance.subContentId = library.subContentId;
  }
  if (instance.parent === void 0 && extras && extras.parent) {
    instance.parent = extras.parent;
  }
  if (instance.libraryInfo === void 0) {
    instance.libraryInfo = {
      versionedName: library.library,
      versionedNameNoSpaces: machineName + "-" + versionSplit[0] + "." + versionSplit[1],
      machineName,
      majorVersion: versionSplit[0],
      minorVersion: versionSplit[1]
    };
  }
  if ($attachTo !== void 0) {
    $attachTo.toggleClass("h5p-standalone", standalone);
    instance.attach($attachTo);
    H5P$4.trigger(instance, "domChanged", {
      "$target": $attachTo,
      "library": machineName,
      "key": "newLibrary"
    }, { "bubbles": true, "external": true });
    if (skipResize === void 0 || !skipResize) {
      H5P$4.trigger(instance, "resize");
    }
  }
  return instance;
};
H5P$4.error = function(err) {
  if (window.console !== void 0 && console.error !== void 0) {
    console.error(err.stack ? err.stack : err);
  }
};
H5P$4.t = function(key, vars, ns) {
  if (ns === void 0) {
    ns = "H5P";
  }
  if (H5PIntegration.l10n[ns] === void 0) {
    return '[Missing translation namespace "' + ns + '"]';
  }
  if (H5PIntegration.l10n[ns][key] === void 0) {
    return '[Missing translation "' + key + '" in "' + ns + '"]';
  }
  var translation = H5PIntegration.l10n[ns][key];
  if (vars !== void 0) {
    for (var placeholder in vars) {
      translation = translation.replace(placeholder, vars[placeholder]);
    }
  }
  return translation;
};
H5P$4.Dialog = function(name2, title, content, $element) {
  var self = this;
  var $dialog = H5P$4.jQuery('<div class="h5p-popup-dialog h5p-' + name2 + '-dialog" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2>' + title + '</h2>                                <div class="h5p-scroll-content">' + content + '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' + H5P$4.t("close") + '" title="' + H5P$4.t("close") + '"></div>                              </div>                            </div>').insertAfter($element).click(function(e) {
    if (e && e.originalEvent && e.originalEvent.preventClosing) {
      return;
    }
    self.close();
  }).children(".h5p-inner").click(function(e) {
    e.originalEvent.preventClosing = true;
  }).find(".h5p-close").click(function() {
    self.close();
  }).keypress(function(e) {
    if (e.which === 13 || e.which === 32) {
      self.close();
      return false;
    }
  }).end().find("a").click(function(e) {
    e.stopPropagation();
  }).end().end();
  self.open = function(scrollbar) {
    if (scrollbar) {
      $dialog.css("height", "100%");
    }
    setTimeout(function() {
      $dialog.addClass("h5p-open");
      H5P$4.jQuery(self).trigger("dialog-opened", [$dialog]);
      $dialog.focus();
    }, 1);
  };
  self.close = function() {
    $dialog.removeClass("h5p-open");
    setTimeout(function() {
      $dialog.remove();
      H5P$4.jQuery(self).trigger("dialog-closed", [$dialog]);
      $element.attr("tabindex", "-1");
      $element.focus();
    }, 200);
  };
};
H5P$4.getCopyrights = function(instance, parameters, contentId, metadata) {
  var copyrights;
  if (instance.getCopyrights !== void 0) {
    try {
      copyrights = instance.getCopyrights();
    } catch (err) {
    }
  }
  if (copyrights === void 0) {
    copyrights = new H5P$4.ContentCopyrights();
    H5P$4.findCopyrights(copyrights, parameters, contentId);
  }
  var metadataCopyrights = H5P$4.buildMetadataCopyrights(metadata, instance.libraryInfo.machineName);
  if (metadataCopyrights !== void 0) {
    copyrights.addMediaInFront(metadataCopyrights);
  }
  if (copyrights !== void 0) {
    copyrights = copyrights.toString();
  }
  return copyrights;
};
H5P$4.findCopyrights = function(info, parameters, contentId, extras) {
  if (extras) {
    extras.params = parameters;
    buildFromMetadata(extras, extras.machineName, contentId);
  }
  var lastContentTypeName;
  for (var field in parameters) {
    if (!parameters.hasOwnProperty(field)) {
      continue;
    }
    if (field === "overrideSettings") {
      console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used.");
      console.warn(parameters);
      continue;
    }
    var value = parameters[field];
    if (value && value.library && typeof value.library === "string") {
      lastContentTypeName = value.library.split(" ")[0];
    } else if (value && value.library && typeof value.library === "object") {
      lastContentTypeName = value.library.library && typeof value.library.library === "string" ? value.library.library.split(" ")[0] : lastContentTypeName;
    }
    if (value instanceof Array) {
      H5P$4.findCopyrights(info, value, contentId);
    } else if (value instanceof Object) {
      buildFromMetadata(value, lastContentTypeName, contentId);
      if (value.copyright === void 0 || value.copyright.license === void 0 || value.path === void 0 || value.mime === void 0) {
        H5P$4.findCopyrights(info, value, contentId);
      } else {
        var copyrights = new H5P$4.MediaCopyright(value.copyright);
        if (value.width !== void 0 && value.height !== void 0) {
          copyrights.setThumbnail(new H5P$4.Thumbnail(H5P$4.getPath(value.path, contentId), value.width, value.height));
        }
        info.addMedia(copyrights);
      }
    }
  }
  function buildFromMetadata(data, name2, contentId2) {
    if (data.metadata) {
      const metadataCopyrights = H5P$4.buildMetadataCopyrights(data.metadata, name2);
      if (metadataCopyrights !== void 0) {
        if (data.params && data.params.contentName === "Image" && data.params.file) {
          const path = data.params.file.path;
          const width = data.params.file.width;
          const height = data.params.file.height;
          metadataCopyrights.setThumbnail(new H5P$4.Thumbnail(H5P$4.getPath(path, contentId2), width, height));
        }
        info.addMedia(metadataCopyrights);
      }
    }
  }
};
H5P$4.buildMetadataCopyrights = function(metadata) {
  if (metadata && metadata.license !== void 0 && metadata.license !== "U") {
    var dataset = {
      contentType: metadata.contentType,
      title: metadata.title,
      author: metadata.authors && metadata.authors.length > 0 ? metadata.authors.map(function(author) {
        return author.role ? author.name + " (" + author.role + ")" : author.name;
      }).join(", ") : void 0,
      source: metadata.source,
      year: metadata.yearFrom ? metadata.yearFrom + (metadata.yearTo ? "-" + metadata.yearTo : "") : void 0,
      license: metadata.license,
      version: metadata.licenseVersion,
      licenseExtras: metadata.licenseExtras,
      changes: metadata.changes && metadata.changes.length > 0 ? metadata.changes.map(function(change) {
        return change.log + (change.author ? ", " + change.author : "") + (change.date ? ", " + change.date : "");
      }).join(" / ") : void 0
    };
    return new H5P$4.MediaCopyright(dataset);
  }
};
H5P$4.openReuseDialog = function($element, contentData, library, instance, contentId) {
  let html = "";
  if (contentData.displayOptions.export) {
    html += '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>';
  }
  if (contentData.displayOptions.export && contentData.displayOptions.copy) {
    html += '<div class="h5p-horizontal-line-text"><span>or</span></div>';
  }
  if (contentData.displayOptions.copy) {
    html += '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>';
  }
  const dialog = new H5P$4.Dialog("reuse", H5P$4.t("reuseContent"), html, $element);
  H5P$4.jQuery(dialog).on("dialog-opened", function(e, $dialog) {
    H5P$4.jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>').click(function(e2) {
      e2.stopPropagation();
    }).appendTo($dialog.find("h2"));
    $dialog.find(".h5p-download-button").click(function() {
      window.location.href = contentData.exportUrl;
      instance.triggerXAPI("downloaded");
      dialog.close();
    });
    $dialog.find(".h5p-copy-button").click(function() {
      const item = new H5P$4.ClipboardItem(library);
      item.contentId = contentId;
      H5P$4.setClipboard(item);
      instance.triggerXAPI("copied");
      dialog.close();
      H5P$4.attachToastTo(H5P$4.jQuery(".h5p-content:first")[0], H5P$4.t("contentCopied"), {
        position: {
          horizontal: "centered",
          vertical: "centered",
          noOverflowX: true
        }
      });
    });
    H5P$4.trigger(instance, "resize");
  }).on("dialog-closed", function() {
    H5P$4.trigger(instance, "resize");
  });
  dialog.open();
};
H5P$4.openEmbedDialog = function($element, embedCode, resizeCode, size, instance) {
  var fullEmbedCode = embedCode + resizeCode;
  var dialog = new H5P$4.Dialog("embed", H5P$4.t("embed"), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + H5P$4.t("size") + ': <input type="text" value="' + Math.ceil(size.width) + '" class="h5p-embed-size"/> \\xD7 <input type="text" value="' + Math.ceil(size.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + H5P$4.t("showAdvanced") + '</div><div class="h5p-expander-content"><p>' + H5P$4.t("advancedHelp") + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + resizeCode + "</textarea></div>", $element);
  H5P$4.jQuery(dialog).on("dialog-opened", function(event, $dialog) {
    var $inner = $dialog.find(".h5p-inner");
    var $scroll = $inner.find(".h5p-scroll-content");
    $scroll.outerHeight() - $scroll.innerHeight();
    var positionInner = function() {
      H5P$4.trigger(instance, "resize");
    };
    var $w = $dialog.find(".h5p-embed-size:eq(0)");
    var $h = $dialog.find(".h5p-embed-size:eq(1)");
    var getNum = function($e, d) {
      var num = parseFloat($e.val());
      if (isNaN(num)) {
        return d;
      }
      return Math.ceil(num);
    };
    var updateEmbed = function() {
      $dialog.find(".h5p-embed-code-container:first").val(fullEmbedCode.replace(":w", getNum($w, size.width)).replace(":h", getNum($h, size.height)));
    };
    $w.change(updateEmbed);
    $h.change(updateEmbed);
    updateEmbed();
    $dialog.find(".h5p-embed-code-container").each(function() {
      H5P$4.jQuery(this).css("height", this.scrollHeight + "px").focus(function() {
        H5P$4.jQuery(this).select();
      });
    });
    $dialog.find(".h5p-embed-code-container").eq(0).select();
    positionInner();
    var expand = function() {
      var $expander = H5P$4.jQuery(this);
      var $content = $expander.next();
      if ($content.is(":visible")) {
        $expander.removeClass("h5p-open").text(H5P$4.t("showAdvanced")).attr("aria-expanded", "true");
        $content.hide();
      } else {
        $expander.addClass("h5p-open").text(H5P$4.t("hideAdvanced")).attr("aria-expanded", "false");
        $content.show();
      }
      $dialog.find(".h5p-embed-code-container").each(function() {
        H5P$4.jQuery(this).css("height", this.scrollHeight + "px");
      });
      positionInner();
    };
    $dialog.find(".h5p-expander").click(expand).keypress(function(event2) {
      if (event2.keyCode === 32) {
        expand.apply(this);
        return false;
      }
    });
  }).on("dialog-closed", function() {
    H5P$4.trigger(instance, "resize");
  });
  dialog.open();
};
H5P$4.attachToastTo = function(element, message, config) {
  if (element === void 0 || message === void 0) {
    return;
  }
  const eventPath = function(evt) {
    var path = evt.composedPath && evt.composedPath() || evt.path;
    var target = evt.target;
    if (path != null) {
      return path.indexOf(window) < 0 ? path.concat(window) : path;
    }
    if (target === window) {
      return [window];
    }
    function getParents(node, memo) {
      memo = memo || [];
      var parentNode = node.parentNode;
      if (!parentNode) {
        return memo;
      } else {
        return getParents(parentNode, memo.concat(parentNode));
      }
    }
    return [target].concat(getParents(target), window);
  };
  const clickHandler = function(event) {
    var path = eventPath(event);
    if (path.indexOf(element) !== -1) {
      return;
    }
    clearTimeout(timer);
    removeToast();
  };
  const removeToast = function() {
    document.removeEventListener("click", clickHandler);
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  };
  const getToastCoordinates = function(element2, toast2, position) {
    position = position || {};
    position.offsetHorizontal = position.offsetHorizontal || 0;
    position.offsetVertical = position.offsetVertical || 0;
    const toastRect = toast2.getBoundingClientRect();
    const elementRect = element2.getBoundingClientRect();
    let left = 0;
    let top = 0;
    switch (position.horizontal) {
      case "before":
        left = elementRect.left - toastRect.width - position.offsetHorizontal;
        break;
      case "after":
        left = elementRect.left + elementRect.width + position.offsetHorizontal;
        break;
      case "left":
        left = elementRect.left + position.offsetHorizontal;
        break;
      case "right":
        left = elementRect.left + elementRect.width - toastRect.width - position.offsetHorizontal;
        break;
      case "centered":
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
        break;
      default:
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
    }
    switch (position.vertical) {
      case "above":
        top = elementRect.top - toastRect.height - position.offsetVertical;
        break;
      case "below":
        top = elementRect.top + elementRect.height + position.offsetVertical;
        break;
      case "top":
        top = elementRect.top + position.offsetVertical;
        break;
      case "bottom":
        top = elementRect.top + elementRect.height - toastRect.height - position.offsetVertical;
        break;
      case "centered":
        top = elementRect.top + elementRect.height / 2 - toastRect.height / 2 + position.offsetVertical;
        break;
      default:
        top = elementRect.top + elementRect.height + position.offsetVertical;
    }
    const overflowElement = document.body;
    const bounds = overflowElement.getBoundingClientRect();
    if ((position.noOverflowLeft || position.noOverflowX) && left < bounds.x) {
      left = bounds.x;
    }
    if ((position.noOverflowRight || position.noOverflowX) && left + toastRect.width > bounds.x + bounds.width) {
      left = bounds.x + bounds.width - toastRect.width;
    }
    if ((position.noOverflowTop || position.noOverflowY) && top < bounds.y) {
      top = bounds.y;
    }
    if ((position.noOverflowBottom || position.noOverflowY) && top + toastRect.height > bounds.y + bounds.height) {
      left = bounds.y + bounds.height - toastRect.height;
    }
    return { left, top };
  };
  config = config || {};
  config.style = config.style || "h5p-toast";
  config.duration = config.duration || 3e3;
  const toast = document.createElement("div");
  toast.setAttribute("id", config.style);
  toast.classList.add("h5p-toast-disabled");
  toast.classList.add(config.style);
  const msg = document.createElement("span");
  msg.innerHTML = message;
  toast.appendChild(msg);
  document.body.appendChild(toast);
  const coordinates = getToastCoordinates(element, toast, config.position);
  toast.style.left = Math.round(coordinates.left) + "px";
  toast.style.top = Math.round(coordinates.top) + "px";
  toast.classList.remove("h5p-toast-disabled");
  const timer = setTimeout(removeToast, config.duration);
  document.addEventListener("click", clickHandler);
};
H5P$4.ContentCopyrights = function() {
  var label;
  var media = [];
  var content = [];
  this.setLabel = function(newLabel) {
    label = newLabel;
  };
  this.addMedia = function(newMedia) {
    if (newMedia !== void 0) {
      media.push(newMedia);
    }
  };
  this.addMediaInFront = function(newMedia) {
    if (newMedia !== void 0) {
      media.unshift(newMedia);
    }
  };
  this.addContent = function(newContent) {
    if (newContent !== void 0) {
      content.push(newContent);
    }
  };
  this.toString = function() {
    var html = "";
    for (var i = 0; i < media.length; i++) {
      html += media[i];
    }
    for (i = 0; i < content.length; i++) {
      html += content[i];
    }
    if (html !== "") {
      if (label !== void 0) {
        html = "<h3>" + label + "</h3>" + html;
      }
      html = '<div class="h5p-content-copyrights">' + html + "</div>";
    }
    return html;
  };
};
H5P$4.MediaCopyright = function(copyright, labels, order, extraFields) {
  var thumbnail;
  var list = new H5P$4.DefinitionList();
  var getLabel = function(fieldName2) {
    if (labels === void 0 || labels[fieldName2] === void 0) {
      return H5P$4.t(fieldName2);
    }
    return labels[fieldName2];
  };
  var humanizeLicense = function(license, version) {
    var copyrightLicense = H5P$4.copyrightLicenses[license];
    var value = "";
    if (!(license === "PD" && version)) {
      value += copyrightLicense.hasOwnProperty("label") ? copyrightLicense.label : copyrightLicense;
    }
    var versionInfo;
    if (copyrightLicense.versions) {
      if (copyrightLicense.versions.default && (!version || !copyrightLicense.versions[version])) {
        version = copyrightLicense.versions.default;
      }
      if (version && copyrightLicense.versions[version]) {
        versionInfo = copyrightLicense.versions[version];
      }
    }
    if (versionInfo) {
      if (value) {
        value += " ";
      }
      value += versionInfo.hasOwnProperty("label") ? versionInfo.label : versionInfo;
    }
    var link;
    if (copyrightLicense.hasOwnProperty("link")) {
      link = copyrightLicense.link.replace(":version", copyrightLicense.linkVersions ? copyrightLicense.linkVersions[version] : version);
    } else if (versionInfo && copyrightLicense.hasOwnProperty("link")) {
      link = versionInfo.link;
    }
    if (link) {
      value = '<a href="' + link + '" target="_blank">' + value + "</a>";
    }
    var parenthesis = "";
    if (license !== "PD" && license !== "C") {
      parenthesis += license;
    }
    if (version && version !== "CC0 1.0") {
      if (parenthesis && license !== "GNU GPL") {
        parenthesis += " ";
      }
      parenthesis += version;
    }
    if (parenthesis) {
      value += " (" + parenthesis + ")";
    }
    if (license === "C") {
      value += " &copy;";
    }
    return value;
  };
  if (copyright !== void 0) {
    for (var field in extraFields) {
      if (extraFields.hasOwnProperty(field)) {
        copyright[field] = extraFields[field];
      }
    }
    if (order === void 0) {
      order = ["contentType", "title", "license", "author", "year", "source", "licenseExtras", "changes"];
    }
    for (var i = 0; i < order.length; i++) {
      var fieldName = order[i];
      if (copyright[fieldName] !== void 0 && copyright[fieldName] !== "") {
        var humanValue = copyright[fieldName];
        if (fieldName === "license") {
          humanValue = humanizeLicense(copyright.license, copyright.version);
        }
        if (fieldName === "source") {
          humanValue = humanValue ? '<a href="' + humanValue + '" target="_blank">' + humanValue + "</a>" : void 0;
        }
        list.add(new H5P$4.Field(getLabel(fieldName), humanValue));
      }
    }
  }
  this.setThumbnail = function(newThumbnail) {
    thumbnail = newThumbnail;
  };
  this.undisclosed = function() {
    if (list.size() === 1) {
      var field2 = list.get(0);
      if (field2.getLabel() === getLabel("license") && field2.getValue() === humanizeLicense("U")) {
        return true;
      }
    }
    return false;
  };
  this.toString = function() {
    var html = "";
    if (this.undisclosed()) {
      return html;
    }
    if (thumbnail !== void 0) {
      html += thumbnail;
    }
    html += list;
    if (html !== "") {
      html = '<div class="h5p-media-copyright">' + html + "</div>";
    }
    return html;
  };
};
H5P$4.Thumbnail = function(source, width, height) {
  var thumbWidth, thumbHeight = 100;
  if (width !== void 0) {
    thumbWidth = Math.round(thumbHeight * (width / height));
  }
  this.toString = function() {
    return '<img src="' + source + '" alt="' + H5P$4.t("thumbnail") + '" class="h5p-thumbnail" height="' + thumbHeight + '"' + (thumbWidth === void 0 ? "" : ' width="' + thumbWidth + '"') + "/>";
  };
};
H5P$4.Field = function(label, value) {
  this.getLabel = function() {
    return label;
  };
  this.getValue = function() {
    return value;
  };
};
H5P$4.DefinitionList = function() {
  var fields = [];
  this.add = function(field) {
    fields.push(field);
  };
  this.size = function() {
    return fields.length;
  };
  this.get = function(index) {
    return fields[index];
  };
  this.toString = function() {
    var html = "";
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      html += "<dt>" + field.getLabel() + "</dt><dd>" + field.getValue() + "</dd>";
    }
    return html === "" ? html : '<dl class="h5p-definition-list">' + html + "</dl>";
  };
};
H5P$4.Coords = function(x, y, w, h) {
  if (!(this instanceof H5P$4.Coords))
    return new H5P$4.Coords(x, y, w, h);
  this.x = 0;
  this.y = 0;
  this.w = 1;
  this.h = 1;
  if (typeof x === "object") {
    this.x = x.x;
    this.y = x.y;
    this.w = x.w;
    this.h = x.h;
  } else {
    if (x !== void 0) {
      this.x = x;
    }
    if (y !== void 0) {
      this.y = y;
    }
    if (w !== void 0) {
      this.w = w;
    }
    if (h !== void 0) {
      this.h = h;
    }
  }
  return this;
};
H5P$4.libraryFromString = function(library) {
  var regExp = /(.+)\\s(\\d+)\\.(\\d+)$/g;
  var res = regExp.exec(library);
  if (res !== null) {
    return {
      "machineName": res[1],
      "majorVersion": parseInt(res[2]),
      "minorVersion": parseInt(res[3])
    };
  } else {
    return false;
  }
};
H5P$4.getLibraryPath = function(library) {
  if (H5PIntegration.urlLibraries !== void 0) {
    return H5PIntegration.urlLibraries + "/" + library;
  } else {
    return H5PIntegration.url + "/libraries/" + library;
  }
};
H5P$4.cloneObject = function(object, recursive) {
  var clone = object instanceof Array ? [] : {};
  for (var i in object) {
    if (object.hasOwnProperty(i)) {
      if (recursive !== void 0 && recursive && typeof object[i] === "object") {
        clone[i] = H5P$4.cloneObject(object[i], recursive);
      } else {
        clone[i] = object[i];
      }
    }
  }
  return clone;
};
H5P$4.trim = function(value) {
  return value.replace(/^\\s+|\\s+$/g, "");
};
H5P$4.jsLoaded = function(path) {
  H5PIntegration.loadedJs = H5PIntegration.loadedJs || [];
  return H5P$4.jQuery.inArray(path, H5PIntegration.loadedJs) !== -1;
};
H5P$4.cssLoaded = function(path) {
  H5PIntegration.loadedCss = H5PIntegration.loadedCss || [];
  return H5P$4.jQuery.inArray(path, H5PIntegration.loadedCss) !== -1;
};
H5P$4.shuffleArray = function(array) {
  if (!(array instanceof Array)) {
    return;
  }
  var i = array.length, j, tempi, tempj;
  if (i === 0)
    return false;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    tempi = array[i];
    tempj = array[j];
    array[i] = tempj;
    array[j] = tempi;
  }
  return array;
};
H5P$4.setFinished = function(contentId, score, maxScore, time) {
  var validScore = typeof score === "number" || score instanceof Number;
  if (validScore && H5PIntegration.postUserStatistics === true) {
    var toUnix = function(date) {
      return Math.round(date.getTime() / 1e3);
    };
    const data = {
      contentId,
      score,
      maxScore,
      opened: toUnix(H5P$4.opened[contentId]),
      finished: toUnix(new Date()),
      time
    };
    H5P$4.jQuery.post(H5PIntegration.ajax.setFinished, data).fail(function() {
      H5P$4.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, data);
    });
  }
};
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(needle) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === needle) {
        return i;
      }
    }
    return -1;
  };
}
if (String.prototype.trim === void 0) {
  String.prototype.trim = function() {
    return H5P$4.trim(this);
  };
}
H5P$4.trigger = function(instance, eventType, data, extras) {
  if (instance.trigger !== void 0) {
    instance.trigger(eventType, data, extras);
  } else if (instance.$ !== void 0 && instance.$.trigger !== void 0) {
    instance.$.trigger(eventType);
  }
};
H5P$4.on = function(instance, eventType, handler) {
  if (instance.on !== void 0) {
    instance.on(eventType, handler);
  } else if (instance.$ !== void 0 && instance.$.on !== void 0) {
    instance.$.on(eventType, handler);
  }
};
H5P$4.createUUID = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(char) {
    var random = Math.random() * 16 | 0, newChar = char === "x" ? random : random & 3 | 8;
    return newChar.toString(16);
  });
};
H5P$4.createTitle = function(rawTitle, maxLength) {
  if (!rawTitle) {
    return "";
  }
  if (maxLength === void 0) {
    maxLength = 60;
  }
  var title = H5P$4.jQuery("<div></div>").text(rawTitle.replace(/(<([^>]+)>)/ig, "")).text();
  if (title.length > maxLength) {
    title = title.substr(0, maxLength - 3) + "...";
  }
  return title;
};
(function($) {
  function contentUserDataAjax(contentId, dataType, subContentId, done, data, preload, invalidate, async) {
    if (H5PIntegration.user === void 0) {
      done("Not signed in.");
      return;
    }
    var options = {
      url: H5PIntegration.ajax.contentUserData.replace(":contentId", contentId).replace(":dataType", dataType).replace(":subContentId", subContentId ? subContentId : 0),
      dataType: "json",
      async: async === void 0 ? true : async
    };
    if (data !== void 0) {
      options.type = "POST";
      options.data = {
        data: data === null ? 0 : data,
        preload: preload ? 1 : 0,
        invalidate: invalidate ? 1 : 0
      };
    } else {
      options.type = "GET";
    }
    if (done !== void 0) {
      options.error = function(xhr, error) {
        done(error);
      };
      options.success = function(response) {
        if (!response.success) {
          done(response.message);
          return;
        }
        if (response.data === false || response.data === void 0) {
          done();
          return;
        }
        done(void 0, response.data);
      };
    }
    $.ajax(options);
  }
  H5P$4.getUserData = function(contentId, dataId, done, subContentId) {
    if (!subContentId) {
      subContentId = 0;
    }
    H5PIntegration.contents = H5PIntegration.contents || {};
    var content = H5PIntegration.contents["cid-" + contentId] || {};
    var preloadedData = content.contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId] !== void 0) {
      if (preloadedData[subContentId][dataId] === "RESET") {
        done(void 0, null);
        return;
      }
      try {
        done(void 0, JSON.parse(preloadedData[subContentId][dataId]));
      } catch (err) {
        done(err);
      }
    } else {
      contentUserDataAjax(contentId, dataId, subContentId, function(err, data) {
        if (err || data === void 0) {
          done(err, data);
          return;
        }
        if (content.contentUserData === void 0) {
          content.contentUserData = preloadedData = {};
        }
        if (preloadedData[subContentId] === void 0) {
          preloadedData[subContentId] = {};
        }
        preloadedData[subContentId][dataId] = data;
        try {
          done(void 0, JSON.parse(data));
        } catch (e) {
          done(e);
        }
      });
    }
  };
  H5P$4.setUserData = function(contentId, dataId, data, extras) {
    var options = H5P$4.jQuery.extend(true, {}, {
      subContentId: 0,
      preloaded: true,
      deleteOnChange: false,
      async: true
    }, extras);
    try {
      data = JSON.stringify(data);
    } catch (err) {
      if (options.errorCallback) {
        options.errorCallback(err);
      }
      return;
    }
    var content = H5PIntegration.contents["cid-" + contentId];
    if (content === void 0) {
      content = H5PIntegration.contents["cid-" + contentId] = {};
    }
    if (!content.contentUserData) {
      content.contentUserData = {};
    }
    var preloadedData = content.contentUserData;
    if (preloadedData[options.subContentId] === void 0) {
      preloadedData[options.subContentId] = {};
    }
    if (data === preloadedData[options.subContentId][dataId]) {
      return;
    }
    preloadedData[options.subContentId][dataId] = data;
    contentUserDataAjax(contentId, dataId, options.subContentId, function(error) {
      if (options.errorCallback && error) {
        options.errorCallback(error);
      }
    }, data, options.preloaded, options.deleteOnChange, options.async);
  };
  H5P$4.deleteUserData = function(contentId, dataId, subContentId) {
    if (!subContentId) {
      subContentId = 0;
    }
    var preloadedData = H5PIntegration.contents["cid-" + contentId].contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId]) {
      delete preloadedData[subContentId][dataId];
    }
    contentUserDataAjax(contentId, dataId, subContentId, void 0, null);
  };
  H5P$4.getContentForInstance = function(contentId) {
    var key = "cid-" + contentId;
    var exists = H5PIntegration && H5PIntegration.contents && H5PIntegration.contents[key];
    return exists ? H5PIntegration.contents[key] : void 0;
  };
  H5P$4.ClipboardItem = function(parameters, genericProperty, specificKey) {
    var self = this;
    var setDimensionsFromFile = function() {
      if (!self.generic) {
        return;
      }
      var params = self.specific[self.generic];
      if (!params.params.file || !params.params.file.width || !params.params.file.height) {
        return;
      }
      self.width = 20;
      self.height = params.params.file.height / params.params.file.width * self.width;
    };
    if (!genericProperty) {
      genericProperty = "action";
      parameters = {
        action: parameters
      };
    }
    self.specific = parameters;
    if (genericProperty && parameters[genericProperty]) {
      self.generic = genericProperty;
    }
    if (specificKey) {
      self.from = specificKey;
    }
    if (window.H5PEditor && H5PEditor.contentId) {
      self.contentId = H5PEditor.contentId;
    }
    if (!self.specific.width && !self.specific.height) {
      setDimensionsFromFile();
    }
  };
  H5P$4.clipboardify = function(clipboardItem) {
    if (!(clipboardItem instanceof H5P$4.ClipboardItem)) {
      clipboardItem = new H5P$4.ClipboardItem(clipboardItem);
    }
    H5P$4.setClipboard(clipboardItem);
  };
  H5P$4.getClipboard = function() {
    return parseClipboard();
  };
  H5P$4.setClipboard = function(clipboardItem) {
    localStorage.setItem("h5pClipboard", JSON.stringify(clipboardItem));
    H5P$4.externalDispatcher.trigger("datainclipboard", { reset: false });
  };
  H5P$4.getLibraryConfig = function(machineName) {
    var hasConfig = H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[machineName];
    return hasConfig ? H5PIntegration.libraryConfig[machineName] : {};
  };
  var parseClipboard = function() {
    var clipboardData = localStorage.getItem("h5pClipboard");
    if (!clipboardData) {
      return;
    }
    try {
      clipboardData = JSON.parse(clipboardData);
    } catch (err) {
      console.error("Unable to parse JSON from clipboard.", err);
      return;
    }
    recursiveUpdate(clipboardData.specific, function(path) {
      var isTmpFile = path.substr(-4, 4) === "#tmp";
      if (!isTmpFile && clipboardData.contentId && !path.match(/^https?:\\/\\//i)) {
        if (H5PEditor.contentId) {
          return "../" + clipboardData.contentId + "/" + path;
        } else {
          return (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : "../content/") + clipboardData.contentId + "/" + path;
        }
      }
      return path;
    });
    if (clipboardData.generic) {
      clipboardData.generic = clipboardData.specific[clipboardData.generic];
    }
    return clipboardData;
  };
  var recursiveUpdate = function(params, handler) {
    for (var prop in params) {
      if (params.hasOwnProperty(prop) && params[prop] instanceof Object) {
        var obj = params[prop];
        if (obj.path !== void 0 && obj.mime !== void 0) {
          obj.path = handler(obj.path);
        } else {
          if (obj.library !== void 0 && obj.subContentId !== void 0) {
            delete obj.subContentId;
          }
          recursiveUpdate(obj, handler);
        }
      }
    }
  };
  $(document).ready(function() {
    window.addEventListener("storage", function(event) {
      if (event.key === "h5pClipboard") {
        H5P$4.externalDispatcher.trigger("datainclipboard", { reset: event.newValue === null });
      }
    });
    var ccVersions = {
      "default": "4.0",
      "4.0": H5P$4.t("licenseCC40"),
      "3.0": H5P$4.t("licenseCC30"),
      "2.5": H5P$4.t("licenseCC25"),
      "2.0": H5P$4.t("licenseCC20"),
      "1.0": H5P$4.t("licenseCC10")
    };
    H5P$4.copyrightLicenses = {
      "U": H5P$4.t("licenseU"),
      "CC BY": {
        label: H5P$4.t("licenseCCBY"),
        link: "http://creativecommons.org/licenses/by/:version",
        versions: ccVersions
      },
      "CC BY-SA": {
        label: H5P$4.t("licenseCCBYSA"),
        link: "http://creativecommons.org/licenses/by-sa/:version",
        versions: ccVersions
      },
      "CC BY-ND": {
        label: H5P$4.t("licenseCCBYND"),
        link: "http://creativecommons.org/licenses/by-nd/:version",
        versions: ccVersions
      },
      "CC BY-NC": {
        label: H5P$4.t("licenseCCBYNC"),
        link: "http://creativecommons.org/licenses/by-nc/:version",
        versions: ccVersions
      },
      "CC BY-NC-SA": {
        label: H5P$4.t("licenseCCBYNCSA"),
        link: "http://creativecommons.org/licenses/by-nc-sa/:version",
        versions: ccVersions
      },
      "CC BY-NC-ND": {
        label: H5P$4.t("licenseCCBYNCND"),
        link: "http://creativecommons.org/licenses/by-nc-nd/:version",
        versions: ccVersions
      },
      "CC0 1.0": {
        label: H5P$4.t("licenseCC010"),
        link: "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      "GNU GPL": {
        label: H5P$4.t("licenseGPL"),
        link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
        linkVersions: {
          "v3": "3.0",
          "v2": "2.0",
          "v1": "1.0"
        },
        versions: {
          "default": "v3",
          "v3": H5P$4.t("licenseV3"),
          "v2": H5P$4.t("licenseV2"),
          "v1": H5P$4.t("licenseV1")
        }
      },
      "PD": {
        label: H5P$4.t("licensePD"),
        versions: {
          "CC0 1.0": {
            label: H5P$4.t("licenseCC010"),
            link: "https://creativecommons.org/publicdomain/zero/1.0/"
          },
          "CC PDM": {
            label: H5P$4.t("licensePDM"),
            link: "https://creativecommons.org/publicdomain/mark/1.0/"
          }
        }
      },
      "ODC PDDL": '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
      "CC PDM": {
        label: H5P$4.t("licensePDM"),
        link: "https://creativecommons.org/publicdomain/mark/1.0/"
      },
      "C": H5P$4.t("licenseC")
    };
    if (H5P$4.isFramed && H5P$4.externalEmbed === false) {
      H5P$4.externalDispatcher.on("*", function(event) {
        window.parent.H5P.externalDispatcher.trigger.call(this, event);
      });
    }
    if (!H5P$4.preventInit) {
      H5P$4.init(document.body);
    }
    if (H5PIntegration.saveFreq !== false) {
      var lastStoredOn = 0;
      var storeCurrentState = function() {
        var currentTime = new Date().getTime();
        if (currentTime - lastStoredOn > 250) {
          lastStoredOn = currentTime;
          for (var i = 0; i < H5P$4.instances.length; i++) {
            var instance = H5P$4.instances[i];
            if (instance.getCurrentState instanceof Function || typeof instance.getCurrentState === "function") {
              var state = instance.getCurrentState();
              if (state !== void 0) {
                H5P$4.setUserData(instance.contentId, "state", state, { deleteOnChange: true, async: false });
              }
            }
          }
        }
      };
      H5P$4.$window.one("beforeunload unload", function() {
        H5P$4.$window.off("pagehide beforeunload unload");
        storeCurrentState();
      });
      H5P$4.$window.on("pagehide", storeCurrentState);
    }
  });
})(H5P$4.jQuery);
var H5P$3 = window.H5P = window.H5P || {};
H5P$3.Event = function(type, data, extras) {
  this.type = type;
  this.data = data;
  var bubbles = false;
  var external = false;
  var scheduledForExternal = false;
  if (extras === void 0) {
    extras = {};
  }
  if (extras.bubbles === true) {
    bubbles = true;
  }
  if (extras.external === true) {
    external = true;
  }
  this.preventBubbling = function() {
    bubbles = false;
  };
  this.getBubbles = function() {
    return bubbles;
  };
  this.scheduleForExternal = function() {
    if (external && !scheduledForExternal) {
      scheduledForExternal = true;
      return true;
    }
    return false;
  };
};
H5P$3.EventDispatcher = function() {
  function EventDispatcher() {
    var self = this;
    var triggers = {};
    this.on = function(type, listener, thisArg) {
      if (typeof listener !== "function") {
        throw TypeError("listener must be a function");
      }
      self.trigger("newListener", { "type": type, "listener": listener });
      var trigger = { "listener": listener, "thisArg": thisArg };
      if (!triggers[type]) {
        triggers[type] = [trigger];
      } else {
        triggers[type].push(trigger);
      }
    };
    this.once = function(type, listener, thisArg) {
      if (!(listener instanceof Function)) {
        throw TypeError("listener must be a function");
      }
      var once = function(event) {
        self.off(event.type, once);
        listener.call(this, event);
      };
      self.on(type, once, thisArg);
    };
    this.off = function(type, listener) {
      if (listener !== void 0 && !(listener instanceof Function)) {
        throw TypeError("listener must be a function");
      }
      if (triggers[type] === void 0) {
        return;
      }
      if (listener === void 0) {
        delete triggers[type];
        self.trigger("removeListener", type);
        return;
      }
      for (var i = 0; i < triggers[type].length; i++) {
        if (triggers[type][i].listener === listener) {
          triggers[type].splice(i, 1);
          self.trigger("removeListener", type, { "listener": listener });
          break;
        }
      }
      if (!triggers[type].length) {
        delete triggers[type];
      }
    };
    var call = function(type, event) {
      if (triggers[type] === void 0) {
        return;
      }
      var handlers = triggers[type].slice();
      for (var i = 0; i < handlers.length; i++) {
        var trigger = handlers[i];
        var thisArg = trigger.thisArg ? trigger.thisArg : this;
        trigger.listener.call(thisArg, event);
      }
    };
    this.trigger = function(event, eventData, extras) {
      if (event === void 0) {
        return;
      }
      if (event instanceof String || typeof event === "string") {
        event = new H5P$3.Event(event, eventData, extras);
      } else if (eventData !== void 0) {
        event.data = eventData;
      }
      var scheduledForExternal = event.scheduleForExternal();
      call.call(this, event.type, event);
      call.call(this, "*", event);
      if (event.getBubbles() && self.parent instanceof H5P$3.EventDispatcher && (self.parent.trigger instanceof Function || typeof self.parent.trigger === "function")) {
        self.parent.trigger(event);
      }
      if (scheduledForExternal) {
        H5P$3.externalDispatcher.trigger.call(this, event);
      }
    };
  }
  return EventDispatcher;
}();
var H5P$2 = window.H5P = window.H5P || {};
H5P$2.externalDispatcher = new H5P$2.EventDispatcher();
H5P$2.EventDispatcher.prototype.triggerXAPI = function(verb, extra) {
  this.trigger(this.createXAPIEventTemplate(verb, extra));
};
H5P$2.EventDispatcher.prototype.createXAPIEventTemplate = function(verb, extra) {
  var event = new H5P$2.XAPIEvent();
  event.setActor();
  event.setVerb(verb);
  if (extra !== void 0) {
    for (var i in extra) {
      event.data.statement[i] = extra[i];
    }
  }
  if (!("object" in event.data.statement)) {
    event.setObject(this);
  }
  if (!("context" in event.data.statement)) {
    event.setContext(this);
  }
  return event;
};
H5P$2.EventDispatcher.prototype.triggerXAPICompleted = function(score, maxScore, success) {
  this.triggerXAPIScored(score, maxScore, "completed", true, success);
};
H5P$2.EventDispatcher.prototype.triggerXAPIScored = function(score, maxScore, verb, completion, success) {
  var event = this.createXAPIEventTemplate(verb);
  event.setScoredResult(score, maxScore, this, completion, success);
  this.trigger(event);
};
H5P$2.EventDispatcher.prototype.setActivityStarted = function() {
  if (this.activityStartTime === void 0) {
    if (this.contentId !== void 0 && H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + this.contentId] !== void 0) {
      this.triggerXAPI("attempted");
    }
    this.activityStartTime = Date.now();
  }
};
H5P$2.xAPICompletedListener = function(event) {
  if ((event.getVerb() === "completed" || event.getVerb() === "answered") && !event.getVerifiedStatementValue(["context", "contextActivities", "parent"])) {
    var score = event.getScore();
    var maxScore = event.getMaxScore();
    var contentId = event.getVerifiedStatementValue(["object", "definition", "extensions", "http://h5p.org/x-api/h5p-local-content-id"]);
    H5P$2.setFinished(contentId, score, maxScore);
  }
};
var H5P$1 = window.H5P = window.H5P || {};
H5P$1.XAPIEvent = function() {
  H5P$1.Event.call(this, "xAPI", { "statement": {} }, { bubbles: true, external: true });
};
H5P$1.XAPIEvent.prototype = Object.create(H5P$1.Event.prototype);
H5P$1.XAPIEvent.prototype.constructor = H5P$1.XAPIEvent;
H5P$1.XAPIEvent.prototype.setScoredResult = function(score, maxScore, instance, completion, success) {
  this.data.statement.result = {};
  if (typeof score !== "undefined") {
    if (typeof maxScore === "undefined") {
      this.data.statement.result.score = { "raw": score };
    } else {
      this.data.statement.result.score = {
        "min": 0,
        "max": maxScore,
        "raw": score
      };
      if (maxScore > 0) {
        this.data.statement.result.score.scaled = Math.round(score / maxScore * 1e4) / 1e4;
      }
    }
  }
  if (typeof completion === "undefined") {
    this.data.statement.result.completion = this.getVerb() === "completed" || this.getVerb() === "answered";
  } else {
    this.data.statement.result.completion = completion;
  }
  if (typeof success !== "undefined") {
    this.data.statement.result.success = success;
  }
  if (instance && instance.activityStartTime) {
    var duration = Math.round((Date.now() - instance.activityStartTime) / 10) / 100;
    this.data.statement.result.duration = "PT" + duration + "S";
  }
};
H5P$1.XAPIEvent.prototype.setVerb = function(verb) {
  if (H5P$1.jQuery.inArray(verb, H5P$1.XAPIEvent.allowedXAPIVerbs) !== -1) {
    this.data.statement.verb = {
      "id": "http://adlnet.gov/expapi/verbs/" + verb,
      "display": {
        "en-US": verb
      }
    };
  } else if (verb.id !== void 0) {
    this.data.statement.verb = verb;
  }
};
H5P$1.XAPIEvent.prototype.getVerb = function(full) {
  var statement = this.data.statement;
  if ("verb" in statement) {
    if (full === true) {
      return statement.verb;
    }
    return statement.verb.id.slice(31);
  } else {
    return null;
  }
};
H5P$1.XAPIEvent.prototype.setObject = function(instance) {
  if (instance.contentId) {
    this.data.statement.object = {
      "id": this.getContentXAPIId(instance),
      "objectType": "Activity",
      "definition": {
        "extensions": {
          "http://h5p.org/x-api/h5p-local-content-id": instance.contentId
        }
      }
    };
    if (instance.subContentId) {
      this.data.statement.object.definition.extensions["http://h5p.org/x-api/h5p-subContentId"] = instance.subContentId;
      if (typeof instance.getTitle === "function") {
        this.data.statement.object.definition.name = {
          "en-US": instance.getTitle()
        };
      }
    } else {
      var content = H5P$1.getContentForInstance(instance.contentId);
      if (content && content.metadata && content.metadata.title) {
        this.data.statement.object.definition.name = {
          "en-US": H5P$1.createTitle(content.metadata.title)
        };
      }
    }
  } else {
    this.data.statement.object = {
      definition: {}
    };
  }
};
H5P$1.XAPIEvent.prototype.setContext = function(instance) {
  if (instance.parent && (instance.parent.contentId || instance.parent.subContentId)) {
    this.data.statement.context = {
      "contextActivities": {
        "parent": [
          {
            "id": this.getContentXAPIId(instance.parent),
            "objectType": "Activity"
          }
        ]
      }
    };
  }
  if (instance.libraryInfo) {
    if (this.data.statement.context === void 0) {
      this.data.statement.context = { "contextActivities": {} };
    }
    this.data.statement.context.contextActivities.category = [
      {
        "id": "http://h5p.org/libraries/" + instance.libraryInfo.versionedNameNoSpaces,
        "objectType": "Activity"
      }
    ];
  }
};
H5P$1.XAPIEvent.prototype.setActor = function() {
  if (H5PIntegration.user !== void 0) {
    this.data.statement.actor = {
      "name": H5PIntegration.user.name,
      "mbox": "mailto:" + H5PIntegration.user.mail,
      "objectType": "Agent"
    };
  } else {
    var uuid;
    try {
      if (localStorage.H5PUserUUID) {
        uuid = localStorage.H5PUserUUID;
      } else {
        uuid = H5P$1.createUUID();
        localStorage.H5PUserUUID = uuid;
      }
    } catch (err) {
      uuid = "not-trackable-" + H5P$1.createUUID();
    }
    this.data.statement.actor = {
      "account": {
        "name": uuid,
        "homePage": H5PIntegration.siteUrl
      },
      "objectType": "Agent"
    };
  }
};
H5P$1.XAPIEvent.prototype.getMaxScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "max"]);
};
H5P$1.XAPIEvent.prototype.getScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "raw"]);
};
H5P$1.XAPIEvent.prototype.getContentXAPIId = function(instance) {
  var xAPIId;
  if (instance.contentId && H5PIntegration && H5PIntegration.contents && H5PIntegration.contents["cid-" + instance.contentId]) {
    xAPIId = H5PIntegration.contents["cid-" + instance.contentId].url;
    if (instance.subContentId) {
      xAPIId += "?subContentId=" + instance.subContentId;
    }
  }
  return xAPIId;
};
H5P$1.XAPIEvent.prototype.isFromChild = function() {
  var parentId = this.getVerifiedStatementValue(["context", "contextActivities", "parent", 0, "id"]);
  return !parentId || parentId.indexOf("subContentId") === -1;
};
H5P$1.XAPIEvent.prototype.getVerifiedStatementValue = function(keys) {
  var val = this.data.statement;
  for (var i = 0; i < keys.length; i++) {
    if (val[keys[i]] === void 0) {
      return null;
    }
    val = val[keys[i]];
  }
  return val;
};
H5P$1.XAPIEvent.allowedXAPIVerbs = [
  "answered",
  "asked",
  "attempted",
  "attended",
  "commented",
  "completed",
  "exited",
  "experienced",
  "failed",
  "imported",
  "initialized",
  "interacted",
  "launched",
  "mastered",
  "passed",
  "preferred",
  "progressed",
  "registered",
  "responded",
  "resumed",
  "scored",
  "shared",
  "suspended",
  "terminated",
  "voided",
  "downloaded",
  "copied",
  "accessed-reuse",
  "accessed-embed",
  "accessed-copyright"
];
H5P.ContentType = function(isRootLibrary) {
  function ContentType() {
  }
  ContentType.prototype = new H5P.EventDispatcher();
  ContentType.prototype.isRoot = function() {
    return isRootLibrary;
  };
  ContentType.prototype.getLibraryFilePath = function(filePath) {
    return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + "/" + filePath;
  };
  return ContentType;
};
H5P.ConfirmationDialog = function(EventDispatcher) {
  function ConfirmationDialog(options) {
    EventDispatcher.call(this);
    var self = this;
    H5P.ConfirmationDialog.uniqueId += 1;
    var uniqueId = H5P.ConfirmationDialog.uniqueId;
    options = options || {};
    options.headerText = options.headerText || H5P.t("confirmDialogHeader");
    options.dialogText = options.dialogText || H5P.t("confirmDialogBody");
    options.cancelText = options.cancelText || H5P.t("cancelLabel");
    options.confirmText = options.confirmText || H5P.t("confirmLabel");
    function dialogConfirmed(e) {
      self.hide();
      self.trigger("confirmed");
      e.preventDefault();
    }
    function dialogCanceled(e) {
      self.hide();
      self.trigger("canceled");
      e.preventDefault();
    }
    function flowTo(element, e) {
      element.focus();
      e.preventDefault();
    }
    var exitButtonOffset = 2 * 16;
    var shadowOffset = 8;
    var resizeIFrame = false;
    var popupBackground = document.createElement("div");
    popupBackground.classList.add("h5p-confirmation-dialog-background", "hidden", "hiding");
    var popup = document.createElement("div");
    popup.classList.add("h5p-confirmation-dialog-popup", "hidden");
    if (options.classes) {
      options.classes.forEach(function(popupClass) {
        popup.classList.add(popupClass);
      });
    }
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-labelledby", "h5p-confirmation-dialog-dialog-text-" + uniqueId);
    popupBackground.appendChild(popup);
    popup.addEventListener("keydown", function(e) {
      if (e.which === 27) {
        dialogCanceled(e);
      }
    });
    var header = document.createElement("div");
    header.classList.add("h5p-confirmation-dialog-header");
    popup.appendChild(header);
    var headerText = document.createElement("div");
    headerText.classList.add("h5p-confirmation-dialog-header-text");
    headerText.innerHTML = options.headerText;
    header.appendChild(headerText);
    var body = document.createElement("div");
    body.classList.add("h5p-confirmation-dialog-body");
    popup.appendChild(body);
    var text = document.createElement("div");
    text.classList.add("h5p-confirmation-dialog-text");
    text.innerHTML = options.dialogText;
    text.id = "h5p-confirmation-dialog-dialog-text-" + uniqueId;
    body.appendChild(text);
    var buttons = document.createElement("div");
    buttons.classList.add("h5p-confirmation-dialog-buttons");
    body.appendChild(buttons);
    var cancelButton = document.createElement("button");
    cancelButton.classList.add("h5p-core-cancel-button");
    cancelButton.textContent = options.cancelText;
    var confirmButton = document.createElement("button");
    confirmButton.classList.add("h5p-core-button");
    confirmButton.classList.add("h5p-confirmation-dialog-confirm-button");
    confirmButton.textContent = options.confirmText;
    var exitButton = document.createElement("button");
    exitButton.classList.add("h5p-confirmation-dialog-exit");
    exitButton.setAttribute("aria-hidden", "true");
    exitButton.tabIndex = -1;
    exitButton.title = options.cancelText;
    cancelButton.addEventListener("click", dialogCanceled);
    cancelButton.addEventListener("keydown", function(e) {
      if (e.which === 32) {
        dialogCanceled(e);
      } else if (e.which === 9 && e.shiftKey) {
        flowTo(confirmButton, e);
      }
    });
    if (!options.hideCancel) {
      buttons.appendChild(cancelButton);
    } else {
      buttons.classList.add("center");
    }
    confirmButton.addEventListener("click", dialogConfirmed);
    confirmButton.addEventListener("keydown", function(e) {
      if (e.which === 32) {
        dialogConfirmed(e);
      } else if (e.which === 9 && !e.shiftKey) {
        const nextButton = !options.hideCancel ? cancelButton : confirmButton;
        flowTo(nextButton, e);
      }
    });
    buttons.appendChild(confirmButton);
    exitButton.addEventListener("click", dialogCanceled);
    exitButton.addEventListener("keydown", function(e) {
      if (e.which === 32) {
        dialogCanceled(e);
      }
    });
    if (!options.hideExit) {
      popup.appendChild(exitButton);
    }
    var wrapperElement;
    var focusPredator;
    var wrapperSiblingsHidden = [];
    var popupSiblingsHidden = [];
    var previouslyFocused;
    this.appendTo = function(wrapper) {
      wrapperElement = wrapper;
      return this;
    };
    var captureFocus = function(e) {
      if (!popupBackground.contains(e.target)) {
        e.preventDefault();
        confirmButton.focus();
      }
    };
    var hideSiblings = function(element) {
      var hiddenSiblings = [];
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        hiddenSiblings[i] = siblings[i].getAttribute("aria-hidden") ? true : false;
        if (siblings[i] !== element) {
          siblings[i].setAttribute("aria-hidden", true);
        }
      }
      return hiddenSiblings;
    };
    var restoreSiblings = function(element, hiddenSiblings) {
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== element && !hiddenSiblings[i]) {
          siblings[i].removeAttribute("aria-hidden");
        }
      }
    };
    var startCapturingFocus = function() {
      focusPredator = wrapperElement.parentNode || wrapperElement;
      focusPredator.addEventListener("focus", captureFocus, true);
    };
    var stopCapturingFocus = function() {
      focusPredator.removeAttribute("aria-hidden");
      focusPredator.removeEventListener("focus", captureFocus, true);
    };
    var disableUnderlay = function() {
      wrapperSiblingsHidden = hideSiblings(wrapperElement);
      popupSiblingsHidden = hideSiblings(popupBackground);
    };
    var restoreUnderlay = function() {
      restoreSiblings(wrapperElement, wrapperSiblingsHidden);
      restoreSiblings(popupBackground, popupSiblingsHidden);
    };
    var fitToContainer = function(offsetTop) {
      var popupOffsetTop = parseInt(popup.style.top, 10);
      if (offsetTop !== void 0) {
        popupOffsetTop = offsetTop;
      }
      if (!popupOffsetTop) {
        popupOffsetTop = 0;
      }
      if (popupOffsetTop + popup.offsetHeight > wrapperElement.offsetHeight) {
        popupOffsetTop = wrapperElement.offsetHeight - popup.offsetHeight - shadowOffset;
      }
      if (popupOffsetTop - exitButtonOffset <= 0) {
        popupOffsetTop = exitButtonOffset + shadowOffset;
        resizeIFrame = true;
      }
      popup.style.top = popupOffsetTop + "px";
    };
    this.show = function(offsetTop) {
      previouslyFocused = document.activeElement;
      wrapperElement.appendChild(popupBackground);
      startCapturingFocus();
      disableUnderlay();
      popupBackground.classList.remove("hidden");
      fitToContainer(offsetTop);
      setTimeout(function() {
        popup.classList.remove("hidden");
        popupBackground.classList.remove("hiding");
        setTimeout(function() {
          confirmButton.focus();
          if (resizeIFrame && options.instance) {
            var minHeight = parseInt(popup.offsetHeight, 10) + exitButtonOffset + 2 * shadowOffset;
            self.setViewPortMinimumHeight(minHeight);
            options.instance.trigger("resize");
            resizeIFrame = false;
          }
        }, 100);
      }, 0);
      return this;
    };
    this.hide = function() {
      popupBackground.classList.add("hiding");
      popup.classList.add("hidden");
      stopCapturingFocus();
      if (!options.skipRestoreFocus) {
        previouslyFocused.focus();
      }
      restoreUnderlay();
      setTimeout(function() {
        popupBackground.classList.add("hidden");
        wrapperElement.removeChild(popupBackground);
        self.setViewPortMinimumHeight(null);
      }, 100);
      return this;
    };
    this.getElement = function() {
      return popup;
    };
    this.getPreviouslyFocused = function() {
      return previouslyFocused;
    };
    this.setViewPortMinimumHeight = function(minHeight) {
      var container = document.querySelector(".h5p-container") || document.body;
      container.style.minHeight = typeof minHeight === "number" ? minHeight + "px" : minHeight;
    };
  }
  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;
  return ConfirmationDialog;
}(H5P.EventDispatcher);
H5P.ConfirmationDialog.uniqueId = -1;
H5P.RequestQueue = function($, EventDispatcher) {
  const RequestQueue = function(options) {
    EventDispatcher.call(this);
    this.processingQueue = false;
    options = options || {};
    this.showToast = options.showToast;
    this.itemName = "requestQueue";
  };
  RequestQueue.prototype.add = function(url, data) {
    if (!window.localStorage) {
      return false;
    }
    let storedStatements = this.getStoredRequests();
    if (!storedStatements) {
      storedStatements = [];
    }
    storedStatements.push({
      url,
      data
    });
    window.localStorage.setItem(this.itemName, JSON.stringify(storedStatements));
    this.trigger("requestQueued", {
      storedStatements,
      processingQueue: this.processingQueue
    });
    return true;
  };
  RequestQueue.prototype.getStoredRequests = function() {
    if (!window.localStorage) {
      return false;
    }
    const item = window.localStorage.getItem(this.itemName);
    if (!item) {
      return [];
    }
    return JSON.parse(item);
  };
  RequestQueue.prototype.clearQueue = function() {
    if (!window.localStorage) {
      return false;
    }
    window.localStorage.removeItem(this.itemName);
    return true;
  };
  RequestQueue.prototype.resumeQueue = function() {
    if (!H5PIntegration || !window.navigator || !window.localStorage) {
      return false;
    }
    if (this.processingQueue) {
      return false;
    }
    const queue = this.getStoredRequests();
    const queueLength = queue.length;
    this.clearQueue();
    if (!queueLength) {
      this.trigger("emptiedQueue", queue);
      return true;
    }
    this.processingQueue = true;
    this.processQueue(queue);
    return true;
  };
  RequestQueue.prototype.processQueue = function(queue) {
    if (!queue.length) {
      return;
    }
    this.trigger("processingQueue");
    const request = queue.shift();
    const self = this;
    $.post(request.url, request.data).fail(self.onQueuedRequestFail.bind(self, request)).always(self.onQueuedRequestProcessed.bind(self, queue));
  };
  RequestQueue.prototype.onQueuedRequestFail = function(request) {
    if (!window.navigator.onLine) {
      this.add(request.url, request.data);
    }
  };
  RequestQueue.prototype.onQueuedRequestProcessed = function(queue) {
    if (queue.length) {
      this.processQueue(queue);
      return;
    }
    this.processingQueue = false;
    const requestQueue = this.getStoredRequests();
    this.trigger("queueEmptied", requestQueue);
  };
  RequestQueue.prototype.displayToastMessage = function(msg, forceShow, configOverride) {
    if (!this.showToast && !forceShow) {
      return;
    }
    const config = H5P.jQuery.extend(true, {}, {
      position: {
        horizontal: "centered",
        vertical: "centered",
        noOverflowX: true
      }
    }, configOverride);
    H5P.attachToastTo(H5P.jQuery(".h5p-content:first")[0], msg, config);
  };
  return RequestQueue;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.OfflineRequestQueue = function(RequestQueue, Dialog) {
  const offlineRequestQueue = function(options) {
    const requestQueue = new RequestQueue();
    requestQueue.clearQueue();
    let startTime = null;
    const retryIntervals = [10, 20, 40, 60, 120, 300, 600];
    let intervalIndex = -1;
    let currentInterval = null;
    let isAttached = false;
    let isShowing = false;
    let isLoading = false;
    const instance = options.instance;
    const offlineDialog = new Dialog({
      headerText: H5P.t("offlineDialogHeader"),
      dialogText: H5P.t("offlineDialogBody"),
      confirmText: H5P.t("offlineDialogRetryButtonLabel"),
      hideCancel: true,
      hideExit: true,
      classes: ["offline"],
      instance,
      skipRestoreFocus: true
    });
    const dialog = offlineDialog.getElement();
    const countDownText = document.createElement("div");
    countDownText.classList.add("count-down");
    countDownText.innerHTML = H5P.t("offlineDialogRetryMessage").replace(":num", '<span class="count-down-num">0</span>');
    dialog.querySelector(".h5p-confirmation-dialog-text").appendChild(countDownText);
    const countDownNum = countDownText.querySelector(".count-down-num");
    const throbberWrapper = document.createElement("div");
    throbberWrapper.classList.add("throbber-wrapper");
    const throbber = document.createElement("div");
    throbber.classList.add("sending-requests-throbber");
    throbberWrapper.appendChild(throbber);
    requestQueue.on("requestQueued", function(e) {
      if (e.data && e.data.processingQueue) {
        return;
      }
      if (!isAttached) {
        const rootContent = document.body.querySelector(".h5p-content");
        if (!rootContent) {
          return;
        }
        offlineDialog.appendTo(rootContent);
        rootContent.appendChild(throbberWrapper);
        isAttached = true;
      }
      startCountDown();
    }.bind(this));
    requestQueue.on("queueEmptied", function(e) {
      if (e.data && e.data.length) {
        startCountDown(true);
        return;
      }
      clearInterval(currentInterval);
      toggleThrobber(false);
      intervalIndex = -1;
      if (isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }
      requestQueue.displayToastMessage(H5P.t("offlineSuccessfulSubmit"), true, {
        position: {
          vertical: "top",
          offsetVertical: "100"
        }
      });
    }.bind(this));
    offlineDialog.on("confirmed", function() {
      isShowing = false;
      setTimeout(function() {
        retryRequests();
      }, 100);
    }.bind(this));
    window.addEventListener("online", function() {
      retryRequests();
    }.bind(this));
    window.addEventListener("message", function(event) {
      const isValidQueueEvent = window.parent === event.source && event.data.context === "h5p" && event.data.action === "queueRequest";
      if (!isValidQueueEvent) {
        return;
      }
      this.add(event.data.url, event.data.data);
    }.bind(this));
    const toggleThrobber = function(forceShow) {
      isLoading = !isLoading;
      if (forceShow !== void 0) {
        isLoading = forceShow;
      }
      if (isLoading && isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }
      if (isLoading) {
        throbberWrapper.classList.add("show");
      } else {
        throbberWrapper.classList.remove("show");
      }
    };
    const retryRequests = function() {
      clearInterval(currentInterval);
      toggleThrobber(true);
      requestQueue.resumeQueue();
    };
    const incrementRetryInterval = function() {
      intervalIndex += 1;
      if (intervalIndex >= retryIntervals.length) {
        intervalIndex = retryIntervals.length - 1;
      }
    };
    const startCountDown = function(forceDelayedShow) {
      if (isShowing) {
        return;
      }
      toggleThrobber(false);
      if (!isShowing) {
        if (forceDelayedShow) {
          setTimeout(function() {
            offlineDialog.show(0);
          }, 100);
        } else {
          offlineDialog.show(0);
        }
      }
      isShowing = true;
      startTime = new Date().getTime();
      incrementRetryInterval();
      clearInterval(currentInterval);
      currentInterval = setInterval(updateCountDown, 100);
    };
    const updateCountDown = function() {
      const time = new Date().getTime();
      const timeElapsed = Math.floor((time - startTime) / 1e3);
      const timeLeft = retryIntervals[intervalIndex] - timeElapsed;
      countDownNum.textContent = timeLeft.toString();
      if (timeLeft <= 0) {
        retryRequests();
      }
    };
    this.add = function(url, data) {
      if (window.navigator.onLine) {
        return false;
      }
      requestQueue.add(url, data);
    };
  };
  return offlineRequestQueue;
}(H5P.RequestQueue, H5P.ConfirmationDialog);
H5P.ActionBar = function($, EventDispatcher) {
  function ActionBar(displayOptions) {
    EventDispatcher.call(this);
    var self = this;
    var hasActions = false;
    var $actions = H5P.jQuery('<ul class="h5p-actions"></ul>');
    var addActionButton = function(type, customClass) {
      var handler = function() {
        self.trigger(type);
      };
      H5P.jQuery("<li/>", {
        "class": "h5p-button h5p-noselect h5p-" + (customClass ? customClass : type),
        role: "button",
        tabindex: 0,
        title: H5P.t(type + "Description"),
        html: H5P.t(type),
        on: {
          click: handler,
          keypress: function(e) {
            if (e.which === 32) {
              handler();
              e.preventDefault();
            }
          }
        },
        appendTo: $actions
      });
      hasActions = true;
    };
    if (displayOptions.export || displayOptions.copy) {
      addActionButton("reuse", "export");
    }
    if (displayOptions.copyright) {
      addActionButton("copyrights");
    }
    if (displayOptions.embed) {
      addActionButton("embed");
    }
    if (displayOptions.icon) {
      H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" title="' + H5P.t("h5pDescription") + '"></a></li>').appendTo($actions);
      hasActions = true;
    }
    self.getDOMElement = function() {
      return $actions;
    };
    self.hasActions = function() {
      return hasActions;
    };
  }
  ActionBar.prototype = Object.create(EventDispatcher.prototype);
  ActionBar.prototype.constructor = ActionBar;
  return ActionBar;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.getLibraryPath = function(library) {
  return H5PIntegration._libraryPaths[library];
};
H5P.getPath = function(path, contentId) {
  const hasProtocol = function(path2) {
    return path2.match(/^[a-z0-9]+:\\/\\//i);
  };
  if (hasProtocol(path)) {
    return path;
  }
  let prefix;
  if (contentId !== void 0) {
    prefix = H5PIntegration.url + "/content";
  } else if (window.H5PEditor !== void 0) {
    prefix = H5PEditor.filesPath;
  } else {
    return;
  }
  return prefix + "/" + path;
};
`;
var frameStyle = '@font-face{font-family:h5p;src:url(data:undefined;base64,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);src:url(data:undefined;base64,pCcAAPwmAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAWaWD5gAAAAAAAAAAAAAAAAAAAAAAABAAaAA1AHAALQBjAG8AcgBlAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADEAAAAQAGgANQBwAC0AYwBvAHIAZQAAAAAAAAEAAAALAIAAAwAwT1MvMg8SBjEAAAC8AAAAYGNtYXDQ8oQ2AAABHAAAAIRnYXNwAAAAEAAAAaAAAAAIZ2x5Zh2dUKEAAAGoAAAiJGhlYWQXLtD0AAAjzAAAADZoaGVhB5cD6wAAJAQAAAAkaG10eJ4AH3cAACQoAAAAqGxvY2GUBIuAAAAk0AAAAFZtYXhwADcBEgAAJSgAAAAgbmFtZd0yV3IAACVIAAABknBvc3QAAwAAAAAm3AAAACAAAwPzAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpFAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAaAAAABYAEAADAAYAAQAg5Wblj+YB6IrojOiU6RT//f//AAAAAAAg5WXljuYA6IjojOiO6QD//f//AAH/4xqfGngaCBeCF4EXgBcVAAMAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAOoBIAMWAjYAAgAAEyEB6gIs/uoCNv7qAAAAAQF9AKUCgwKxAAIAACURAQF9AQalAgz++gAAAAEBAAENAwACSQAFAAAJAQcnBycCAAEAPMTEPAJJ/wA8xMQ8AAEBAAENAwACSQAFAAABFwkBNxcCxDz/AP8APMQCSTz/AAEAPMQAAAAMAYMAAAJ9A1UAAwAHAAsADwATABcAGwAfACMAJwArAC8AAAEzFSM3MxUjBzMVIzczFSMHMxUjNzMVIwczFSM3MxUjBzMVIzczFSMHMxUjNzMVIwGDR0ezR0ezR0ezR0ezR0ezR0ezR0ezR0ezR0ezR0ezR0ezR0cDVUdHR1VHR0dWR0dHVUdHR1VHR0dVSEhIAAAAAQD9AOIDAwJ0AAUAAAEnBxcBJwHGdVTJAT1UAYt1VckBPVUAAQD9AKQC/wKxAC4AAAEiBw4BBwYXFBceARcWFzUjIiY/AT4BFzAWMRcWBisBFTY3PgE3NicmJy4BJyYnAgE3MTBGFBMBEBA3JyYtXQoCA4sEDQcEjAcGC102Kyo2CgkMCRcXQyopLgKxFRVJMjE3LysqRBgXCdYMBqwHAQMFrAYM1gwfH1U0MzYtJiY3DxACAAAAAAMA/ACmAwQCrwAcACAAKwAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTE0Jy4BJyYHMxUjEyM1MzUjNTMVMwcCADYvMEYVFBQVRjAvNjYvMEYVFBQVRjAvYFhYgrUzM4svBQKvFBVGMC82NjAvRxQVFRRHLzA2NC8uRxUVMUb+vzSiM9ovAAIBAQCoAwECrQAnADUAACUnNjc2JicmJyYnJgYHBgcGBwYWFxYXFjI3FxYyNzgBMTc+ASc4ATElIiY1NDYzMhYVFAYjMQMBbhsJCg4WFyUmKyxWJycbGwkKDhYXJTqQOm8ECAUhCAEE/ttCX19CQl5eQt9vJSwsVicmGxsJCRAXGCUlLCxWJycaKipvBAQhBA4ETl5CQ15eQ0JeAAoAlwCxA2kCpAAMABcAIwAuADoARQBSAF0AYQBlAAABNiYjJyYGFRcUFjE3BxcWMj8BNjQvAQcFFjY1NzQmIwciBjEXBwYUHwEWMj8BJwMGFjMXMjY1JzQmMQcnJiIPAQYUHwE3JSYGFQcUFjM3MjYxJxc3NjQvASYiDwEXAxEhEQMhESEBZQQFBWcEBwsGZ0tABAkEFwQEPykB7gQCCwcEbQUBLj8FBRcECQQ/KCMEBgRtBAgSBSM/BAkEFwQEPyj+EwUBCwcEbQQCbUU/BAQXBAkEQCmsAtIo/YMCfQI9BAILBAUFbQQBZz8/BQUXBAkEOSIoBQYEbQUHDAUjPwQJBBcEBD8o/ucEAgsHBGgEASI/BAQXBAkEPygiBQYEbQUHDAVtSj8ECQQXBAQ/KAGA/g0B8/41AZ0AAAADAGkA9QOXAmAAKQA6AF8AAAEuASsBFSMHPgEzOgEzMhYXHgEVFAYHDgEHBiYHMzUzMjY3PgE1NCYnMQcOASsBNTMyFhceARUUBgcxBSIGByc3IxUjNSMRMzUzFTMuAScuAScuASc3HgEzMjY1NCYjMQN7ECwdi50LCRYICRAJGS8REREJCAkZEAUOBHVDIjIRERAPDV4JExEiKBAUCAQHCAj+7gwYCF8sX3Vvb3WMDRcJCA8FBAgEXwQXERUdHRUCPwwPQzcEBxERECoZESIQERkJBAIJhhAMESoZHSoNcAQHUwcEBA8JDBEEJw8NEcOXl/6VhoYJBQkIEQgIEwwRDQ8dFREcAAAEAJIAgwNuAtcANwBsAOcBDwAAARwBMQ4BByIGIyoBIzAmNS4BJzAiMQ4BBwYmJy4BJyY2Mz4BNz4BMzIWMR4BFzAyMT4BNzoBMRclNhYXHgEHNhYXFgYHOgEzHgEXFgYHDgEHDgEHDgEnLgEnLgEnLgE1NDY3PgE3NhYXIgYVMR8BFjY3Jy4BJy4BNTQ2NzIWFR4BFx4BFx4BMz4BNzwBMS4BJy4BNTQ2FzAWFR4BFx4BMTI2NTwBMS4BJy4BNTQ2MTIWFR4BFx4BFx4BFzAWNT4BJzM4ATEcARUOAQcwBhUOASMiBhUOASciJjEOAQcGJicuASc+ATc5AQMeARceARcwMjMOAQcwIjEuAScqATEHFBYXHgEVDgEHLgE1NwY2FzEDbhElFwgSCQkMCQUxaDAGEiMSEikSDQwEBQgIH0QfCRgJBAgfPh8GFjIWBAJq/aANGw0JAQQNGAQJBgkFCQQJEAUEBgQFCQQECQUEJA0WJxYNGQkECAIECQwJDSYOBQGTHg0lCQYSIxIEAggEBQcJGQ0JGQ4EEAkJEAUfRB8FAQ4JBh9EHwUBDRckTSMFAQYECAQDBRo1GwkQBAYSEAQjBBsWBgkiFgQCDTUWBQcFCgkWKQ4IDAkNDASlFjIXGi8bAQUNGQkGJEUfBQFNCAQEAgUKCQ0QWAQNCQGeBAIREwUGAgQsWjEECQQFBwkJDQ4EEwkZDgQCBg4UDgUPBNUGCQcOCBoNBQ4JDRkJBAwNDhEFBAkFBAkEBQkOFjIWEh4RCQwJBA8ECQwJDQYNBwXPHQ0GDQYRJBIEAwQFAwQBBQgaDQkZDQkDBAsJBAIfPyQEAwQJAgUBBR9EHwQCFw0EAiNNJAQDBAUHAQUEAwUaNRsJEAQFBQQfEgUOBRYcCQEFFh8CBBsRCQUECQQJBw4IDAkSDwgCAggRBAkQBQQJBAkTDbcJCgUEAwUEDwQNHhbUCA0FAAIA/ACmAwQCrwAbAEAAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYTFhQPAQYiLwEHBiIvASY0PwEnJjQ/ATYyHwE3NjIfARYUDwEXAgA3MC9GFBQVFEcwLzU1LzBHFBUUFEYvMFYFBSEFDwlPTwQQCSEFBVRPBAQiBBAISk8EEAkhBQVPTwKvFRVHLy81NTAvRxUVFRVHLzA1NS8vRxUV/qwEDwkiBARPTwQEIgQQCFBPBBAIIgQEVU8FBSEFDwlJUAAACgCeALMDYgKjAAwAFgAiACwAOQBEAFAAWwBgAGQAABMGFjMXMjY1JzQmMQc3JyYiDwEGFB8BJSYGFQcUFjM3MjYxJzc2NC8BJiIPARM2JiMnIgYVFxQWMTcHFxYyPwE2NC8BBwUWNjU3NCYjByIGMRcHBhQfARYyPwEnExUhNSEFITUhuwQFBWwEBxEFZ0Q+BQgFEQQEPwIBBAEMCARsBAIuPwQEFwQJBD9KBQYEZwQHCwZmRD8ECQQXBAQ/KP4hBAILBwRtBAIuPwQEFwQJBD8ocgFc/qQBL/75AQcCJQQBDAcFZgUBZz8/BAQXBAkEP0oFBgRtBAcLBiI/BAkEFwQEP/7SBAESCARsBQFnPz8EBBcECQQ/KCIFBgRtBAcLBig/BAgFFgUFPigBEvDwyJoAAAACANIA4AMuAnUAHAA5AAABHgEdARQGMScuAT0BNDY1NzYWHQEUBhUHBhQfASU2NC8BLgE9ATQ2MRceAR0BFAYVBwYmPQE0NjU3Ab8EAgbnBQEG5wQCBqMEBKMBHgUFnAQCBucFAQbnBAIGnAE3BAoEPwQCnAUJBTEFCgScBQYFPgUKBHAFAwVkagUDBXAFCQU+BQGcBAoEMgUJBZwEBgQ/BQkFYwAAAAAEAOUAwgMbApMADAAXAD0ASgAAASIGHwEWMj8BNiYjIRc1NCYrASIGHQEzFyIGDwEOAQcwBiMiJjEuAS8BLgErASIGHQEUFjMhMjY9ATQmIwcFIiY1NDYzMhYVFAYjAWEJBgmZBRQFmQQBCf682g8JRgkPdkwEDwRNBA8ECAQEDgQPBE0EDwR8BA4JCQISBA4JCYL+pQ0QEA0NEBANAgAJCbwJCbwJCQyICA8PCI6BCAReBQ4FBgwFDgVeBAgJCY0FDQkJjQQOBnAQDQ4QEA4NEAAAAAEBEwC+Au0CmAAjAAABNzY0LwEmIg8BJyYiDwEGFB8BBwYUHwEWMj8BFxYyPwE2NCcCZ4YICD4HGgiGhggaBz4ICIaGCAg+BxoIhoYIGgc+CAgBq4YHGgg+CAiGhggIPggaB4aGCBoIPQgIhoYICD0IGggAAgCxAGADOwLuADoARgAAATYWFx4BBwYWFx4BFx4BFxYGBwYmJy4BJy4BBwYnLgEnJicmNjceARceATMyNjc+ATc2NCcuASc+ATcBFBYzPgE1NCYjIgYBLDRgKSsfCgIEBkduRgQIAx4cLhswFEhxSAUKBywqKUETFAEBCAkaMxgIEQsLEQcIEgkKCxo1GwMDAQGTGxISGhoSEhoC7hEPJCRdNgoMBkZuRgUIBCZbDQkPFUhxSAUDAgkKCjImJi0UJxMaMhoIBwYJCREJCicLGjUcAQIB/dITGwEaEhIaGgADASEAdQLfAuAARwCSAMkAACUiIyoBIyIjPAE1NCY1PgE3PgE3PgE3PAExLgEnLgEnLgE3NDY1MjM6ATMyMxQWFRYGBw4BBw4BBzAUMR4BMx4BFx4BFxQGByc0NicuAScuAScuATU8ATU0Njc+ATc+ATc+ATc8ATUiIyoBIyIjFBYVHgEXHgEXHgEVHAEVFAYHDgEHDgEHDgEHHAEVNjM6ATMyMwE6ATMOAQcOAQcOAQcOARUcARUeARceARcUFhUqASM+ATc+ATc+ATc0NjU0NicuAScuAScuAScC3Tc3OG83NzgBAQkJDSgdAwcDAQIBFSIOFxQCATc4N283ODcBAgMFCy4mAwYDAQEBHy0OCQoCAQEuAQEBCQkOKyACAQICBw4GFh4KCAgCLCssWCwsLAECCgoNKh8CAQIBBAkEGiMLCQkCLCwsWCwsK/7rM2YzAwUDCBQLDBEEAQIBEQ4hJAcBP3w+AgcGCh0UDREDAQEBAQ8NBg8GCQ4HdQIDAgoaCh45HCdCGgMFAwEBAQEBESsaLGEzBg8FAQIBHDsbN1oiAwUDAQEBGkQqGjUcDyMPLAUJBBw3GiU4DwEDAg0ZDAMDAQQIBRIxHRcvGQcNBwYNBhw2GSM2DgEDAg0aDAMCAQIFAhE0Hxs3HAQIBQEBowUJBA0VCAgWEAYKBg0aDRUfChdDKwEDAQ8eDhknDggZEgMIAw4cDhMcCgYLBgkVDAAAAAEBAACqAwACqwAjAAABFAYrARUUBisBIiY9ASMiJj0BNDY7ATU0NjsBMhYdATMyFhUDABUOlxUORg4Vlw8UFA+XFQ5GDhWXDxQBiA8UmA4VFQ6YFA9FDxSYDhUVDpgUDwAAAAAFANAAXQMyAvIAEAAtADYARwBmAAABFRQWOwEyNj0BNCYrASIGFSUnLgErARczFRQWOwERIREjERQWMyEyNjURNiYnBzUyFhUXHgEXAzU0JiMiBg8BFRcWNjM+ATUBNRcWNj8BNjQvASYiDwEGFB8BFjI/ARUUFjsBMDY1AYwbEIAQGhcTgBAbAZFmCiENjRZZEQ2N/lUqEQwBwA0RAw4KkQMKZgMCBCcFAwQGA1paBgMEAwX+iTsHDQYNBgZzBwsEcwMDDQYMAzwLBhoRAYOAEBoXE4AQGxgTq2sJDCuIDRH+qgFJ/qsNERENAYAMHQorfAUEZgMHA/7exAQFAQNaHlkEBAMCAwEziTwGAwMNBg0GawcHbwYNBg0HBzyJBgsMCQAAAgEVAJ8DDAKVABoALQAAATYyFx4BFxYXFgYHBgcGBwYmJyYnJjQ3PgE3BTY0LwEmIgcOAR0BFBYXFjI/AQF3PZVAIC4UGwYGGiAfMDA2NWUrLB0jIxAyIAENCgrABgkGBgcHBgYMA8AClSQkEy8gMDU1ZSwrHRsGBhogHzA9lEAgLxP7BhoGbwMDAwwG4wYMAwMDeAAAAAAGALcATQNJAwgAEAAhAD4ATABaAGgAAAEjIgYVERQWOwEyNjURNCYjExQGKwEiJjURNDY7ATIWFRElETQ2OwEyFh0BMzU0JisBIgYVERQWOwE1IwYmNSUjIiY1NDY7ATIWFRQGByMiJjU0NjsBMhYVFAYHIyImNTQ2OwEyFhUUBgLS+DFGRjH4MkVFMjkhGPgXISEX+Bch/eshGPcYIT5FMvcyRUUyExMYIQG0ow4REQ6jDhIUDKMOEREOow4SFAyjDhERDqMOEhQCXEYx/t8xRkYxASExRv5rFyEhFwEeFyEhF/7iqgEgGCEhGBMTMkVFMv7gMkY/AiEaIhEPDhERDg8RXhEODhISDg4RXhEODhISDg4RAAAABACAAKkDgAKtAAgAEQAzAFwAABM+ARcRLgEHAyEDJgYHETYWFxMuASciBgcuASMOAQcDMBY3PgEXHgEXMT4BNzYWFxY2MQMDLgEjKgEjDgEHLgEnKgEjIgYHDgEHEz4BNzIWHwE3PgEzHgEXEy4BJ9VEikMzfjknAlYrNoE0R4tEFSZYLSZMIyNMJi1YJkAyPSNRKiA9FhY9ICpOJj0yQCYgRyYHEQYgOhkaOSAKDwojRSAQJRRAJEsnI0UgDQ0gRSMnSyQ7FiMTARMdGycBGiMKIP7IATwdCCb+4iYZGgFiFxoHDhAQDgMeF/48BxwUDAYDGxkZGwMDDhMdCAHI/msQEgMUFBQUAw4QCQ0DAZ4TFAMNDAkEDQ0DFRP+XgcNCgAAAAIAgACrA4ACqwA0AEUAAAEFIycOARUeAQcOAQcXFAYHMCIrASImJzQmNTcuATU0Njc0NjcnLgE1NDYxJTMFMhYVFAYHBxYGIyImNTcXOgEzMjY/ARcDd/6JBNoQEhAGCQMHAxEBAwEDQAQCAwQRCgcLChIQagcCBAF4BAF3BAUFBKIEf1paewTAAwsDAwsDwAQCGm9EEzIdCiIQAwcDkQMCAwEDAwIDkgYSCgwUBh04Gh4DCAYDAXh8BQQDBgPFIzIyI2tAAQM8awAAAAMAqwBVA1UDAAAdADsAWAAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMxESInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBiMxESIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiMCAEc+Pl0aGxsaXT4+R0c+Pl0aGxsaXT4+R0E5OVUYGRkYVTk5QUE5OVUYGRkZVDk5QTQtLkMUFBQUQy4tNDQtLkMUFBQUQy4tNAMAGxtcPj9GRz4+XRsbGxtdPj5HRj4/XBsb/XIYGVU5OUFAOTlVGRgYGVU5OUBBOTlVGBkCMhMURC0uMzQuLUQTFBQTRC0uNDMuLUQUEwAAAgGTAKsCbQKqADEAkAAAATM4ATEyNjc+ATU4ATE1MDQxNCYnLgEjOAExIzgBMSIGBw4BFTAUMRU4ATEUFhceATMTIzU4ATE0JicuASM4ATEjOAExIgYHDgEVOAExFTgBMRQWFx4BMzgBMTMVIzgBMSIGBw4BFTAUMRU4ATEUFhceATM4ATEzOAExMjY3PgE1OAExNTA0NTQmJy4BIzAiMQHVVwUIAwMDAwMDCAVXBQgCAwQEAwIIBYIWBAMCCAWCBQgCAwQEAwIIBRYWBQgCAwQEAwIIBa4FCAIDBAMCAwgFAQI2BAMDCAVGAQQJAwMDAwMDCQQBRgQJAwME/tHSBQgDAwQEAwMIBS8ECQMDBIwDAwMJBAEuBQgDAwQEAwMIBS4BAQQHAwMEAAAABADIAGwDOALpABgANABAAFkAAAEjIgYVERQWFzUuATURNDY7ATA2NzE0JiMFMCIjLgEjIgYHKgExIgYVERQWOwEyNjURNiYjJzIWFRQGIyImNTQ2ExQGKwEiJjURNDY3MRQWOwEyNjUxHgEVEQGKSzFGMiYMDSEXhAECJBgBNyAJCS0fHioJCh8xRkYx+DFGAkgxehAYGBARGBbIIBj7FyENDC0hoCEuCQ0C6UYx/t8qPgxFCBcQASEXIQECGCRuGiIiGkYx/t8xRkYxAR4xSQ0YERAZGRARGP5YFyEhFwEhDhoHIS0tIQcaDv7fAAAAAgDVAIADKwLVABkAMwAAAS4BIyIHDgEHBhUzNDc+ATc2MzIWFwczNQcDIiYnNyMVNx4BMzI3PgE3NjUjFAcOAQcGIwLfKXNDPjY3URcYSxIRPSkpLjNYH0bHTN8zWB9Gx0wpc0M+NjdRFxhLEhE9KSkuAnEuNhcYUTY2Pi4pKTwSEiskR8dL/lorJEbHTC82FxhRNjc+LykoPRIRAAAAAAQAQP/VA8ADVQADAB8AOwA/AAAlMxEjEyIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJgMiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYDMzUjAdNaWi1dUVJ6IyMjI3pSUV1dUVJ6IyMjI3pSUV1KQUJhHBwcHGFCQUpKQUJhHBwcHGFCQXdaWrUBDQGTIyN6UVJdXFJSeSMkJCN5UlJcXVJReiMj/NocHGJBQUpKQkFhHRwcHWFBQkpKQUFiHBwB7VkAAAAABwAr/9UD1QOAAAsAFwAjAC8APABIAFUAAAEUBiMiJjU0NjMyFgMiBhUUFjMyNjU0JgEiBhUUFjMyNjU0JgU0JiMiBhUUFjMyNhciBhUUFjMyNjU0JiMhIgYVFBYzMjY1NCYBIgYVFBYzMjY1NCYjAlg0JCQ0NCQkNFgkNDQkJDQ0AVkkNDQkJTMz/Tk0JCUzMyUkNBckNDQkJTMzJQIcJTMzJSQ0NP3AJDQ0JCUzMyUDKCQ0NCQkNDT9OTMlJDQ0JCUzAX40JCUzMyUkNFgkNDQkJTMzkTQkJDQ0JCQ0NCQkNDQkJDQCGzMlJDQ0JCUzAAAAAAYAoQAsA18DKQAYACYANABGAFkAZwAAASEiBhURFBYXNS4BNRE0NjMhMhYXMy4BIxMjIgYVFBY7ATI2NTQmJyMiBhUUFjsBMjY1NCYTISIGFREUFjMxITI2NRE0JiMTFAYjISImNRE0NjMhMhYVETEVAyMiBhUUFjsBMjY1NCYCZ/7COFAdGAMENSUBPgsVCkQSOiI70QsMDAvRCQ8NC9ELDAwL0QkPDSr+wjhQUDgBPjhQUDhZNCX+wiU1NSUBPiU0jtELDAwL0QkPDQMpTzn+jiE4E0cIEwoBciU1BgUaH/3iDAsLDA0KCwx5DAsLDAwLCwwBKk85/o44UFA4AXI5T/4KJTU1JQFuJTU1Jf6jEQFFDAsLDAwLCwwABAChACwDXwMpABgAKgA9AEoAAAEhIgYVERQWFzUuATURNDYzITIWFzMuASMXISIGFREUFjMxITI2NRE0JiMTFAYjISImNRE0NjMhMhYVETEVAycHJwcXBxc3FzcnNwJn/sI4UB0YAwQ1JQE+CxUKRBI6InD+wjhQUDgBPjhQUDhZNCX+wiU1NSUBPiU0ahxubRxubhxtbhttbgMpTzn+jiE4E0cIEwoBciU1BgUaH3tPOf6OOFBQOAFyOU/+CiU1NSUBbiU1NSX+oxEBHRttbRtubRxubhxtbgAAAAQAnAA5A2MDHAAcADkARQBfAAAlIiY1ETQ2OwE3PgEzMhYfATMyFhceAQcRFAYjIQMOARURFBYzITI2NzM1ETQmLwEVFAYrASImPQEHNyIGFRQWMzI2NTQmJz4BNz4BNyMiBhURFBYXNS4BNRE0NjsBPgEBmjhRUThBBAwuHyEyCwRBGzUTFBMCUDj+vzETFjUmAUQhMQcBExAbMSTPIzEa0xQcHRMUHR2qBg0GAQMBnjlRHhoFBDUmdAMGOVE4AXU5UAsgIiMfCxcVFDIa/o44UQJGDCkX/oslNSofEQF1FikMFRIjMTEjDhBfHBUUHR0UFB0eBwwHAQQBUDn+iiI6EkQKFAwBdiU1BAgAAAAABQCcADkDYwMcABwAOQBFAF8AbAAAJSImNRE0NjsBNz4BMzIWHwEzMhYXHgEHERQGIyEDDgEVERQWMyEyNjczNRE0Ji8BFRQGKwEiJj0BBzciBhUUFjMyNjU0Jic+ATc+ATcjIgYVERQWFzUuATURNDY7AT4BAScHJwcXBxc3FzcnNwGaOFFROEEEDC4fITILBEEbNRMUEwJQOP6/MRMWNSYBRCExBwETEBsxJM8jMRrTFBwdExQdHaoGDQYBAwGeOVEeGgUENSZ0AwYBLBxvbxxvbxxvbxtubzlROAF1OVALICIjHwsXFRQyGv6OOFECRgwpF/6LJTUqHxEBdRYpDBUSIzExIw4QXxwVFB0dFBQdHgcMBwEEAVA5/ooiOhJEChQMAXYlNQQI/tccb28cb28bbm4bb28AAQCrAFUDVQMAAAsAAAEnCQEHCQEXCQE3AQNVRP7v/u9EARD+8EQBEQERRP7wArtF/u8BEUX+8P7vRQER/u9FAREAAAAEAPcA3AMHAoEAGABTAH4AugAAAREUBiMiJi8BIy4BPQE0NjsBNzYyFx4BFRceARUUBgcOAQcOASMiJicuATU0Njc+ATc+ATc+ATc2NCcuAScuAScuAScuATU0Njc+ATM6ARceARcxNxYUBw4BBw4BIyImJy4BNTQ2Nz4BNz4BJy4BJy4BJy4BNTQ2MzoBFx4BFzcWFxYGBwYHDgEHBiIjIiY1NDY3PgE3PgE3PgE3PgE3NjQnLgEnLgEnLgEnIiYnLgE1NDYzMhYXHgEXMQHZCwgEBwJiTQgLCwhNYgUQBQMDcQYGBgYGEQsBBAIEBwIDAwIBAgUCAgYCAwQCAwMCBAMCBQMCBQIBAgMDAgcEAgQBCxEGTRkZDCIUAgQCBAcCAwMGBgUMBSYPHAUNBwULBgYGCwgCBAIUIgxOGggIEhkYKAgSCQIEAggLBwUBBAECAwIGDQUSHQoVFQodEgUNBgIDAgEEAQUHCwgCBAIfMxICTv7BCAsDA2EBCghxCAthBgYCBwR1ChULDBUJCg4EAQEDAwIHBAMFAwIDAgIDAgIFAwgSCAMFAwEEAQIEAgIFAwQHAwIDAQQOCSkmWyYTHQgBAQMDAgcEBgkDAgcEG10mBw0FBAYDAgoFCAsBCB0TKigsLVUmJhoFCgQBCwcGCgIBAQEBAQEEBwQOIhQoWygUIg0FBwMBAgECAQIJBggLAQENKhwAAAYA0ABdAzIC8gAcACYARQBfAHsAlwAAAScuASsBFzMVFBY7AREhESMRFBYzITI2NRE2JicHNTIWFRceARcjJTUXFjY/ATY0LwEmIg8BBhQfARYyPwEVFBY7ATA2NRcVFAYxIyImLwEjIiY9ATQ2OwE3PgEXHgEVFz4BNTQmJyYiBwYUFx4BFRQGBwYUFx4BMzI2Nxc+ATU0JicuAQcOARceARUUBgcGFhceATMyNjcDHWYKIQ2NFVoRDY3+VSsSDAHADREDDwmRAwpmAwIDe/7eOwcNBg0GBnMHDANzAwMNBgwDPAsGGhGrBQYEAgQ6LwMHBgQvOgQKAgMCUxAQEBAHEAgICAgICAgICAQIBAQHBEkYFxcYBxAICAEEEBQQFAgFCAQIBAQHBAIuagoMK4gNEf6qAUn+qw0REQ0BgAwdCit8BQRmAwcDEYk8BgMDDQYNBmsGBm8GDQYNBwc7iAYLDAmCvAQHAgQ5BgQ/BAY6BAUDAwQErA8nGBcnEAgICA8ICBgPEBMMCBAHBAICAzQcPiQjPxsMAgQHEAgTNRsbNRMIFAQEAQEEAAAAAQAAAAEZmuaDpVlfDzz1AAsEAAAAAADaHTmEAAAAANodOYQAAP/VA9UDgAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAD1QABAAAAAAAAAAAAAAAAAAAAKgQAAAAAAAAAAAAAAAIAAAAEAADqBAABfQQAAQAEAAEABAABgwQAAP0EAAD9BAAA/AQAAQEEAACXBAAAaQQAAJIEAAD8BAAAngQAANIEAADlBAABEwQAALEEAAEhBAABAAQAANAEAAEVBAAAtwQAAIAEAACABAAAqwQAAZMEAADIBAAA1QQAAEAEAAArBAAAoQQAAKEEAACcBAAAnAQAAKsEAAD3BAAA0AAAAAAACgAUAB4ALAA6AEwAYACqALwBBgFIAZYCNAK4BCQEiAUiBXYF4AYaBooHnAfOCGAIrAk4CcoKMAqyC0gLwAwQDHQM7g18DeoOcg8ODzAQPBESAAAAAQAAACoBEAAMAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAgAAAABAAAAAAACAAcAtwABAAAAAAADAAgAhwABAAAAAAAEAAgAzAABAAAAAAAFAAsAZgABAAAAAAAGAAgAnwABAAAAAAAKABoAGAADAAEECQABABAACAADAAEECQACAA4AvgADAAEECQADABAAjwADAAEECQAEABAA1AADAAEECQAFABYAcQADAAEECQAGABAApwADAAEECQAKADQAMmg1cC1jb3JlAGgANQBwAC0AYwBvAHIAZUZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALlZlcnNpb24gMS4xAFYAZQByAHMAaQBvAG4AIAAxAC4AMWg1cC1jb3JlAGgANQBwAC0AYwBvAHIAZWg1cC1jb3JlAGgANQBwAC0AYwBvAHIAZVJlZ3VsYXIAUgBlAGcAdQBsAGEAcmg1cC1jb3JlAGgANQBwAC0AYwBvAHIAZQAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format("embedded-opentype"),url(data:font/ttf;base64,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) format("truetype"),url(data:font/woff;base64,d09GRgABAAAAACdIAAsAAAAAJvwAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGMWNtYXAAAAFoAAAAhAAAAITQ8oQ2Z2FzcAAAAewAAAAIAAAACAAAABBnbHlmAAAB9AAAIiQAACIkHZ1QoWhlYWQAACQYAAAANgAAADYXLtD0aGhlYQAAJFAAAAAkAAAAJAeXA+tobXR4AAAkdAAAAKgAAACongAfd2xvY2EAACUcAAAAVgAAAFaUBIuAbWF4cAAAJXQAAAAgAAAAIAA3ARJuYW1lAAAllAAAAZIAAAGS3TJXcnBvc3QAACcoAAAAIAAAACAAAwAAAAMD8wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6RQDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAGgAAAAWABAAAwAGAAEAIOVm5Y/mAeiK6IzolOkU//3//wAAAAAAIOVl5Y7mAOiI6IzojukA//3//wAB/+Manxp4GggXgheBF4AXFQADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQDqASADFgI2AAIAABMhAeoCLP7qAjb+6gAAAAEBfQClAoMCsQACAAAlEQEBfQEGpQIM/voAAAABAQABDQMAAkkABQAACQEHJwcnAgABADzExDwCSf8APMTEPAABAQABDQMAAkkABQAAARcJATcXAsQ8/wD/ADzEAkk8/wABADzEAAAADAGDAAACfQNVAAMABwALAA8AEwAXABsAHwAjACcAKwAvAAABMxUjNzMVIwczFSM3MxUjBzMVIzczFSMHMxUjNzMVIwczFSM3MxUjBzMVIzczFSMBg0dHs0dHs0dHs0dHs0dHs0dHs0dHs0dHs0dHs0dHs0dHs0dHA1VHR0dVR0dHVkdHR1VHR0dVR0dHVUhISAAAAAEA/QDiAwMCdAAFAAABJwcXAScBxnVUyQE9VAGLdVXJAT1VAAEA/QCkAv8CsQAuAAABIgcOAQcGFxQXHgEXFhc1IyImPwE+ARcwFjEXFgYrARU2Nz4BNzYnJicuAScmJwIBNzEwRhQTARAQNycmLV0KAgOLBA0HBIwHBgtdNisqNgoJDAkXF0MqKS4CsRUVSTIxNy8rKkQYFwnWDAasBwEDBawGDNYMHx9VNDM2LSYmNw8QAgAAAAADAPwApgMEAq8AHAAgACsAAAEiBw4BBwYVFBceARcWMzI3PgE3NjUxNCcuAScmBzMVIxMjNTM1IzUzFTMHAgA2LzBGFRQUFUYwLzY2LzBGFRQUFUYwL2BYWIK1MzOLLwUCrxQVRjAvNjYwL0cUFRUURy8wNjQvLkcVFTFG/r80ojPaLwACAQEAqAMBAq0AJwA1AAAlJzY3NiYnJicmJyYGBwYHBgcGFhcWFxYyNxcWMjc4ATE3PgEnOAExJSImNTQ2MzIWFRQGIzEDAW4bCQoOFhclJissVicnGxsJCg4WFyU6kDpvBAgFIQgBBP7bQl9fQkJeXkLfbyUsLFYnJhsbCQkQFxglJSwsVicnGioqbwQEIQQOBE5eQkNeXkNCXgAKAJcAsQNpAqQADAAXACMALgA6AEUAUgBdAGEAZQAAATYmIycmBhUXFBYxNwcXFjI/ATY0LwEHBRY2NTc0JiMHIgYxFwcGFB8BFjI/AScDBhYzFzI2NSc0JjEHJyYiDwEGFB8BNyUmBhUHFBYzNzI2MScXNzY0LwEmIg8BFwMRIREDIREhAWUEBQVnBAcLBmdLQAQJBBcEBD8pAe4EAgsHBG0FAS4/BQUXBAkEPygjBAYEbQQIEgUjPwQJBBcEBD8o/hMFAQsHBG0EAm1FPwQEFwQJBEAprALSKP2DAn0CPQQCCwQFBW0EAWc/PwUFFwQJBDkiKAUGBG0FBwwFIz8ECQQXBAQ/KP7nBAILBwRoBAEiPwQEFwQJBD8oIgUGBG0FBwwFbUo/BAkEFwQEPygBgP4NAfP+NQGdAAAAAwBpAPUDlwJgACkAOgBfAAABLgErARUjBz4BMzoBMzIWFx4BFRQGBw4BBwYmBzM1MzI2Nz4BNTQmJzEHDgErATUzMhYXHgEVFAYHMQUiBgcnNyMVIzUjETM1MxUzLgEnLgEnLgEnNx4BMzI2NTQmIzEDexAsHYudCwkWCAkQCRkvERERCQgJGRAFDgR1QyIyEREQDw1eCRMRIigQFAgEBwgI/u4MGAhfLF91b291jA0XCQgPBQQIBF8EFxEVHR0VAj8MD0M3BAcRERAqGREiEBEZCQQCCYYQDBEqGR0qDXAEB1MHBAQPCQwRBCcPDRHDl5f+lYaGCQUJCBEICBMMEQ0PHRURHAAABACSAIMDbgLXADcAbADnAQ8AAAEcATEOAQciBiMqASMwJjUuAScwIjEOAQcGJicuAScmNjM+ATc+ATMyFjEeARcwMjE+ATc6ATEXJTYWFx4BBzYWFxYGBzoBMx4BFxYGBw4BBw4BBw4BJy4BJy4BJy4BNTQ2Nz4BNzYWFyIGFTEfARY2NycuAScuATU0NjcyFhUeARceARceATM+ATc8ATEuAScuATU0NhcwFhUeARceATEyNjU8ATEuAScuATU0NjEyFhUeARceARceARcwFjU+ASczOAExHAEVDgEHMAYVDgEjIgYVDgEnIiYxDgEHBiYnLgEnPgE3OQEDHgEXHgEXMDIzDgEHMCIxLgEnKgExBxQWFx4BFQ4BBy4BNTcGNhcxA24RJRcIEgkJDAkFMWgwBhIjEhIpEg0MBAUICB9EHwkYCQQIHz4fBhYyFgQCav2gDRsNCQEEDRgECQYJBQkECRAFBAYEBQkEBAkFBCQNFicWDRkJBAgCBAkMCQ0mDgUBkx4NJQkGEiMSBAIIBAUHCRkNCRkOBBAJCRAFH0QfBQEOCQYfRB8FAQ0XJE0jBQEGBAgEAwUaNRsJEAQGEhAEIwQbFgYJIhYEAg01FgUHBQoJFikOCAwJDQwEpRYyFxovGwEFDRkJBiRFHwUBTQgEBAIFCgkNEFgEDQkBngQCERMFBgIELFoxBAkEBQcJCQ0OBBMJGQ4EAgYOFA4FDwTVBgkHDggaDQUOCQ0ZCQQMDQ4RBQQJBQQJBAUJDhYyFhIeEQkMCQQPBAkMCQ0GDQcFzx0NBg0GESQSBAMEBQMEAQUIGg0JGQ0JAwQLCQQCHz8kBAMECQIFAQUfRB8EAhcNBAIjTSQEAwQFBwEFBAMFGjUbCRAEBQUEHxIFDgUWHAkBBRYfAgQbEQkFBAkECQcOCAwJEg8IAgIIEQQJEAUECQQJEw23CQoFBAMFBA8EDR4W1AgNBQACAPwApgMEAq8AGwBAAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmExYUDwEGIi8BBwYiLwEmND8BJyY0PwE2Mh8BNzYyHwEWFA8BFwIANzAvRhQUFRRHMC81NS8wRxQVFBRGLzBWBQUhBQ8JT08EEAkhBQVUTwQEIgQQCEpPBBAJIQUFT08CrxUVRy8vNTUwL0cVFRUVRy8wNTUvL0cVFf6sBA8JIgQET08EBCIEEAhQTwQQCCIEBFVPBQUhBQ8JSVAAAAoAngCzA2ICowAMABYAIgAsADkARABQAFsAYABkAAATBhYzFzI2NSc0JjEHNycmIg8BBhQfASUmBhUHFBYzNzI2MSc3NjQvASYiDwETNiYjJyIGFRcUFjE3BxcWMj8BNjQvAQcFFjY1NzQmIwciBjEXBwYUHwEWMj8BJxMVITUhBSE1IbsEBQVsBAcRBWdEPgUIBREEBD8CAQQBDAgEbAQCLj8EBBcECQQ/SgUGBGcEBwsGZkQ/BAkEFwQEPyj+IQQCCwcEbQQCLj8EBBcECQQ/KHIBXP6kAS/++QEHAiUEAQwHBWYFAWc/PwQEFwQJBD9KBQYEbQQHCwYiPwQJBBcEBD/+0gQBEggEbAUBZz8/BAQXBAkEPygiBQYEbQQHCwYoPwQIBRYFBT4oARLw8MiaAAAAAgDSAOADLgJ1ABwAOQAAAR4BHQEUBjEnLgE9ATQ2NTc2Fh0BFAYVBwYUHwElNjQvAS4BPQE0NjEXHgEdARQGFQcGJj0BNDY1NwG/BAIG5wUBBucEAgajBASjAR4FBZwEAgbnBQEG5wQCBpwBNwQKBD8EApwFCQUxBQoEnAUGBT4FCgRwBQMFZGoFAwVwBQkFPgUBnAQKBDIFCQWcBAYEPwUJBWMAAAAABADlAMIDGwKTAAwAFwA9AEoAAAEiBh8BFjI/ATYmIyEXNTQmKwEiBh0BMxciBg8BDgEHMAYjIiYxLgEvAS4BKwEiBh0BFBYzITI2PQE0JiMHBSImNTQ2MzIWFRQGIwFhCQYJmQUUBZkEAQn+vNoPCUYJD3ZMBA8ETQQPBAgEBA4EDwRNBA8EfAQOCQkCEgQOCQmC/qUNEBANDRAQDQIACQm8CQm8CQkMiAgPDwiOgQgEXgUOBQYMBQ4FXgQICQmNBQ0JCY0EDgZwEA0OEBAODRAAAAABARMAvgLtApgAIwAAATc2NC8BJiIPAScmIg8BBhQfAQcGFB8BFjI/ARcWMj8BNjQnAmeGCAg+BxoIhoYIGgc+CAiGhggIPgcaCIaGCBoHPggIAauGBxoIPggIhoYICD4IGgeGhggaCD0ICIaGCAg9CBoIAAIAsQBgAzsC7gA6AEYAAAE2FhceAQcGFhceARceARcWBgcGJicuAScuAQcGJy4BJyYnJjY3HgEXHgEzMjY3PgE3NjQnLgEnPgE3ARQWMz4BNTQmIyIGASw0YCkrHwoCBAZHbkYECAMeHC4bMBRIcUgFCgcsKilBExQBAQgJGjMYCBELCxEHCBIJCgsaNRsDAwEBkxsSEhoaEhIaAu4RDyQkXTYKDAZGbkYFCAQmWw0JDxVIcUgFAwIJCgoyJiYtFCcTGjIaCAcGCQkRCQonCxo1HAECAf3SExsBGhISGhoAAwEhAHUC3wLgAEcAkgDJAAAlIiMqASMiIzwBNTQmNT4BNz4BNz4BNzwBMS4BJy4BJy4BNzQ2NTIzOgEzMjMUFhUWBgcOAQcOAQcwFDEeATMeARceARcUBgcnNDYnLgEnLgEnLgE1PAE1NDY3PgE3PgE3PgE3PAE1IiMqASMiIxQWFR4BFx4BFx4BFRwBFRQGBw4BBw4BBw4BBxwBFTYzOgEzMjMBOgEzDgEHDgEHDgEHDgEVHAEVHgEXHgEXFBYVKgEjPgE3PgE3PgE3NDY1NDYnLgEnLgEnLgEnAt03NzhvNzc4AQEJCQ0oHQMHAwECARUiDhcUAgE3ODdvNzg3AQIDBQsuJgMGAwEBAR8tDgkKAgEBLgEBAQkJDisgAgECAgcOBhYeCggIAiwrLFgsLCwBAgoKDSofAgECAQQJBBojCwkJAiwsLFgsLCv+6zNmMwMFAwgUCwwRBAECAREOISQHAT98PgIHBgodFA0RAwEBAQEPDQYPBgkOB3UCAwIKGgoeORwnQhoDBQMBAQEBARErGixhMwYPBQECARw7GzdaIgMFAwEBARpEKho1HA8jDywFCQQcNxolOA8BAwINGQwDAwEECAUSMR0XLxkHDQcGDQYcNhkjNg4BAwINGgwDAgECBQIRNB8bNxwECAUBAaMFCQQNFQgIFhAGCgYNGg0VHwoXQysBAwEPHg4ZJw4IGRIDCAMOHA4THAoGCwYJFQwAAAABAQAAqgMAAqsAIwAAARQGKwEVFAYrASImPQEjIiY9ATQ2OwE1NDY7ATIWHQEzMhYVAwAVDpcVDkYOFZcPFBQPlxUORg4Vlw8UAYgPFJgOFRUOmBQPRQ8UmA4VFQ6YFA8AAAAABQDQAF0DMgLyABAALQA2AEcAZgAAARUUFjsBMjY9ATQmKwEiBhUlJy4BKwEXMxUUFjsBESERIxEUFjMhMjY1ETYmJwc1MhYVFx4BFwM1NCYjIgYPARUXFjYzPgE1ATUXFjY/ATY0LwEmIg8BBhQfARYyPwEVFBY7ATA2NQGMGxCAEBoXE4AQGwGRZgohDY0WWRENjf5VKhEMAcANEQMOCpEDCmYDAgQnBQMEBgNaWgYDBAMF/ok7Bw0GDQYGcwcLBHMDAw0GDAM8CwYaEQGDgBAaFxOAEBsYE6trCQwriA0R/qoBSf6rDRERDQGADB0KK3wFBGYDBwP+3sQEBQEDWh5ZBAQDAgMBM4k8BgMDDQYNBmsHB28GDQYNBwc8iQYLDAkAAAIBFQCfAwwClQAaAC0AAAE2MhceARcWFxYGBwYHBgcGJicmJyY0Nz4BNwU2NC8BJiIHDgEdARQWFxYyPwEBdz2VQCAuFBsGBhogHzAwNjVlKywdIyMQMiABDQoKwAYJBgYHBwYGDAPAApUkJBMvIDA1NWUsKx0bBgYaIB8wPZRAIC8T+wYaBm8DAwMMBuMGDAMDA3gAAAAABgC3AE0DSQMIABAAIQA+AEwAWgBoAAABIyIGFREUFjsBMjY1ETQmIxMUBisBIiY1ETQ2OwEyFhURJRE0NjsBMhYdATM1NCYrASIGFREUFjsBNSMGJjUlIyImNTQ2OwEyFhUUBgcjIiY1NDY7ATIWFRQGByMiJjU0NjsBMhYVFAYC0vgxRkYx+DJFRTI5IRj4FyEhF/gXIf3rIRj3GCE+RTL3MkVFMhMTGCEBtKMOEREOow4SFAyjDhERDqMOEhQMow4REQ6jDhIUAlxGMf7fMUZGMQEhMUb+axchIRcBHhchIRf+4qoBIBghIRgTEzJFRTL+4DJGPwIhGiIRDw4REQ4PEV4RDg4SEg4OEV4RDg4SEg4OEQAAAAQAgACpA4ACrQAIABEAMwBcAAATPgEXES4BBwMhAyYGBxE2FhcTLgEnIgYHLgEjDgEHAzAWNz4BFx4BFzE+ATc2FhcWNjEDAy4BIyoBIw4BBy4BJyoBIyIGBw4BBxM+ATcyFh8BNz4BMx4BFxMuASfVRIpDM345JwJWKzaBNEeLRBUmWC0mTCMjTCYtWCZAMj0jUSogPRYWPSAqTiY9MkAmIEcmBxEGIDoZGjkgCg8KI0UgECUUQCRLJyNFIA0NIEUjJ0skOxYjEwETHRsnARojCiD+yAE8HQgm/uImGRoBYhcaBw4QEA4DHhf+PAccFAwGAxsZGRsDAw4THQgByP5rEBIDFBQUFAMOEAkNAwGeExQDDQwJBA0NAxUT/l4HDQoAAAACAIAAqwOAAqsANABFAAABBSMnDgEVHgEHDgEHFxQGBzAiKwEiJic0JjU3LgE1NDY3NDY3Jy4BNTQ2MSUzBTIWFRQGBwcWBiMiJjU3FzoBMzI2PwEXA3f+iQTaEBIQBgkDBwMRAQMBA0AEAgMEEQoHCwoSEGoHAgQBeAQBdwQFBQSiBH9aWnsEwAMLAwMLA8AEAhpvRBMyHQoiEAMHA5EDAgMBAwMCA5IGEgoMFAYdOBoeAwgGAwF4fAUEAwYDxSMyMiNrQAEDPGsAAAADAKsAVQNVAwAAHQA7AFgAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjMREiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjMREiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjAgBHPj5dGhsbGl0+PkdHPj5dGhsbGl0+PkdBOTlVGBkZGFU5OUFBOTlVGBkZGVQ5OUE0LS5DFBQUFEMuLTQ0LS5DFBQUFEMuLTQDABsbXD4/Rkc+Pl0bGxsbXT4+R0Y+P1wbG/1yGBlVOTlBQDk5VRkYGBlVOTlAQTk5VRgZAjITFEQtLjM0Li1EExQUE0QtLjQzLi1EFBMAAAIBkwCrAm0CqgAxAJAAAAEzOAExMjY3PgE1OAExNTA0MTQmJy4BIzgBMSM4ATEiBgcOARUwFDEVOAExFBYXHgEzEyM1OAExNCYnLgEjOAExIzgBMSIGBw4BFTgBMRU4ATEUFhceATM4ATEzFSM4ATEiBgcOARUwFDEVOAExFBYXHgEzOAExMzgBMTI2Nz4BNTgBMTUwNDU0JicuASMwIjEB1VcFCAMDAwMDAwgFVwUIAgMEBAMCCAWCFgQDAggFggUIAgMEBAMCCAUWFgUIAgMEBAMCCAWuBQgCAwQDAgMIBQECNgQDAwgFRgEECQMDAwMDAwkEAUYECQMDBP7R0gUIAwMEBAMDCAUvBAkDAwSMAwMDCQQBLgUIAwMEBAMDCAUuAQEEBwMDBAAAAAQAyABsAzgC6QAYADQAQABZAAABIyIGFREUFhc1LgE1ETQ2OwEwNjcxNCYjBTAiIy4BIyIGByoBMSIGFREUFjsBMjY1ETYmIycyFhUUBiMiJjU0NhMUBisBIiY1ETQ2NzEUFjsBMjY1MR4BFREBiksxRjImDA0hF4QBAiQYATcgCQktHx4qCQofMUZGMfgxRgJIMXoQGBgQERgWyCAY+xchDQwtIaAhLgkNAulGMf7fKj4MRQgXEAEhFyEBAhgkbhoiIhpGMf7fMUZGMQEeMUkNGBEQGRkQERj+WBchIRcBIQ4aByEtLSEHGg7+3wAAAAIA1QCAAysC1QAZADMAAAEuASMiBw4BBwYVMzQ3PgE3NjMyFhcHMzUHAyImJzcjFTceATMyNz4BNzY1IxQHDgEHBiMC3ylzQz42N1EXGEsSET0pKS4zWB9Gx0zfM1gfRsdMKXNDPjY3URcYSxIRPSkpLgJxLjYXGFE2Nj4uKSk8EhIrJEfHS/5aKyRGx0wvNhcYUTY3Pi8pKD0SEQAAAAAEAED/1QPAA1UAAwAfADsAPwAAJTMRIxMiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYDIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGAzM1IwHTWlotXVFSeiMjIyN6UlFdXVFSeiMjIyN6UlFdSkFCYRwcHBxhQkFKSkFCYRwcHBxhQkF3Wlq1AQ0BkyMjelFSXVxSUnkjJCQjeVJSXF1SUXojI/zaHBxiQUFKSkJBYR0cHB1hQUJKSkFBYhwcAe1ZAAAAAAcAK//VA9UDgAALABcAIwAvADwASABVAAABFAYjIiY1NDYzMhYDIgYVFBYzMjY1NCYBIgYVFBYzMjY1NCYFNCYjIgYVFBYzMjYXIgYVFBYzMjY1NCYjISIGFRQWMzI2NTQmASIGFRQWMzI2NTQmIwJYNCQkNDQkJDRYJDQ0JCQ0NAFZJDQ0JCUzM/05NCQlMzMlJDQXJDQ0JCUzMyUCHCUzMyUkNDT9wCQ0NCQlMzMlAygkNDQkJDQ0/TkzJSQ0NCQlMwF+NCQlMzMlJDRYJDQ0JCUzM5E0JCQ0NCQkNDQkJDQ0JCQ0AhszJSQ0NCQlMwAAAAAGAKEALANfAykAGAAmADQARgBZAGcAAAEhIgYVERQWFzUuATURNDYzITIWFzMuASMTIyIGFRQWOwEyNjU0JicjIgYVFBY7ATI2NTQmEyEiBhURFBYzMSEyNjURNCYjExQGIyEiJjURNDYzITIWFRExFQMjIgYVFBY7ATI2NTQmAmf+wjhQHRgDBDUlAT4LFQpEEjoiO9ELDAwL0QkPDQvRCwwMC9EJDw0q/sI4UFA4AT44UFA4WTQl/sIlNTUlAT4lNI7RCwwMC9EJDw0DKU85/o4hOBNHCBMKAXIlNQYFGh/94gwLCwwNCgsMeQwLCwwMCwsMASpPOf6OOFBQOAFyOU/+CiU1NSUBbiU1NSX+oxEBRQwLCwwMCwsMAAQAoQAsA18DKQAYACoAPQBKAAABISIGFREUFhc1LgE1ETQ2MyEyFhczLgEjFyEiBhURFBYzMSEyNjURNCYjExQGIyEiJjURNDYzITIWFRExFQMnBycHFwcXNxc3JzcCZ/7COFAdGAMENSUBPgsVCkQSOiJw/sI4UFA4AT44UFA4WTQl/sIlNTUlAT4lNGocbm0cbm4cbW4bbW4DKU85/o4hOBNHCBMKAXIlNQYFGh97Tzn+jjhQUDgBcjlP/golNTUlAW4lNTUl/qMRAR0bbW0bbm0cbm4cbW4AAAAEAJwAOQNjAxwAHAA5AEUAXwAAJSImNRE0NjsBNz4BMzIWHwEzMhYXHgEHERQGIyEDDgEVERQWMyEyNjczNRE0Ji8BFRQGKwEiJj0BBzciBhUUFjMyNjU0Jic+ATc+ATcjIgYVERQWFzUuATURNDY7AT4BAZo4UVE4QQQMLh8hMgsEQRs1ExQTAlA4/r8xExY1JgFEITEHARMQGzEkzyMxGtMUHB0TFB0dqgYNBgEDAZ45UR4aBQQ1JnQDBjlROAF1OVALICIjHwsXFRQyGv6OOFECRgwpF/6LJTUqHxEBdRYpDBUSIzExIw4QXxwVFB0dFBQdHgcMBwEEAVA5/ooiOhJEChQMAXYlNQQIAAAAAAUAnAA5A2MDHAAcADkARQBfAGwAACUiJjURNDY7ATc+ATMyFh8BMzIWFx4BBxEUBiMhAw4BFREUFjMhMjY3MzURNCYvARUUBisBIiY9AQc3IgYVFBYzMjY1NCYnPgE3PgE3IyIGFREUFhc1LgE1ETQ2OwE+AQEnBycHFwcXNxc3JzcBmjhRUThBBAwuHyEyCwRBGzUTFBMCUDj+vzETFjUmAUQhMQcBExAbMSTPIzEa0xQcHRMUHR2qBg0GAQMBnjlRHhoFBDUmdAMGASwcb28cb28cb28bbm85UTgBdTlQCyAiIx8LFxUUMhr+jjhRAkYMKRf+iyU1Kh8RAXUWKQwVEiMxMSMOEF8cFRQdHRQUHR4HDAcBBAFQOf6KIjoSRAoUDAF2JTUECP7XHG9vHG9vG25uG29vAAEAqwBVA1UDAAALAAABJwkBBwkBFwkBNwEDVUT+7/7vRAEQ/vBEAREBEUT+8AK7Rf7vARFF/vD+70UBEf7vRQERAAAABAD3ANwDBwKBABgAUwB+ALoAAAERFAYjIiYvASMuAT0BNDY7ATc2MhceARUXHgEVFAYHDgEHDgEjIiYnLgE1NDY3PgE3PgE3PgE3NjQnLgEnLgEnLgEnLgE1NDY3PgEzOgEXHgEXMTcWFAcOAQcOASMiJicuATU0Njc+ATc+AScuAScuAScuATU0NjM6ARceARc3FhcWBgcGBw4BBwYiIyImNTQ2Nz4BNz4BNz4BNz4BNzY0Jy4BJy4BJy4BJyImJy4BNTQ2MzIWFx4BFzEB2QsIBAcCYk0ICwsITWIFEAUDA3EGBgYGBhELAQQCBAcCAwMCAQIFAgIGAgMEAgMDAgQDAgUDAgUCAQIDAwIHBAIEAQsRBk0ZGQwiFAIEAgQHAgMDBgYFDAUmDxwFDQcFCwYGBgsIAgQCFCIMThoICBIZGCgIEgkCBAIICwcFAQQBAgMCBg0FEh0KFRUKHRIFDQYCAwIBBAEFBwsIAgQCHzMSAk7+wQgLAwNhAQoIcQgLYQYGAgcEdQoVCwwVCQoOBAEBAwMCBwQDBQMCAwICAwICBQMIEggDBQMBBAECBAICBQMEBwMCAwEEDgkpJlsmEx0IAQEDAwIHBAYJAwIHBBtdJgcNBQQGAwIKBQgLAQgdEyooLC1VJiYaBQoEAQsHBgoCAQEBAQEBBAcEDiIUKFsoFCINBQcDAQIBAgECCQYICwEBDSocAAAGANAAXQMyAvIAHAAmAEUAXwB7AJcAAAEnLgErARczFRQWOwERIREjERQWMyEyNjURNiYnBzUyFhUXHgEXIyU1FxY2PwE2NC8BJiIPAQYUHwEWMj8BFRQWOwEwNjUXFRQGMSMiJi8BIyImPQE0NjsBNz4BFx4BFRc+ATU0JicmIgcGFBceARUUBgcGFBceATMyNjcXPgE1NCYnLgEHDgEXHgEVFAYHBhYXHgEzMjY3Ax1mCiENjRVaEQ2N/lUrEgwBwA0RAw8JkQMKZgMCA3v+3jsHDQYNBgZzBwwDcwMDDQYMAzwLBhoRqwUGBAIEOi8DBwYELzoECgIDAlMQEBAQBxAICAgICAgICAgECAQEBwRJGBcXGAcQCAgBBBAUEBQIBQgECAQEBwQCLmoKDCuIDRH+qgFJ/qsNERENAYAMHQorfAUEZgMHAxGJPAYDAw0GDQZrBgZvBg0GDQcHO4gGCwwJgrwEBwIEOQYEPwQGOgQFAwMEBKwPJxgXJxAICAgPCAgYDxATDAgQBwQCAgM0HD4kIz8bDAIEBxAIEzUbGzUTCBQEBAEBBAAAAAEAAAABGZrmg6VZXw889QALBAAAAAAA2h05hAAAAADaHTmEAAD/1QPVA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA9UAAQAAAAAAAAAAAAAAAAAAACoEAAAAAAAAAAAAAAACAAAABAAA6gQAAX0EAAEABAABAAQAAYMEAAD9BAAA/QQAAPwEAAEBBAAAlwQAAGkEAACSBAAA/AQAAJ4EAADSBAAA5QQAARMEAACxBAABIQQAAQAEAADQBAABFQQAALcEAACABAAAgAQAAKsEAAGTBAAAyAQAANUEAABABAAAKwQAAKEEAAChBAAAnAQAAJwEAACrBAAA9wQAANAAAAAAAAoAFAAeACwAOgBMAGAAqgC8AQYBSAGWAjQCuAQkBIgFIgV2BeAGGgaKB5wHzghgCKwJOAnKCjAKsgtIC8AMEAx0DO4NfA3qDnIPDg8wEDwREgAAAAEAAAAqARAADAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAIAAAAAQAAAAAAAgAHALcAAQAAAAAAAwAIAIcAAQAAAAAABAAIAMwAAQAAAAAABQALAGYAAQAAAAAABgAIAJ8AAQAAAAAACgAaABgAAwABBAkAAQAQAAgAAwABBAkAAgAOAL4AAwABBAkAAwAQAI8AAwABBAkABAAQANQAAwABBAkABQAWAHEAAwABBAkABgAQAKcAAwABBAkACgA0ADJoNXAtY29yZQBoADUAcAAtAGMAbwByAGVGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMQBWAGUAcgBzAGkAbwBuACAAMQAuADFoNXAtY29yZQBoADUAcAAtAGMAbwByAGVoNXAtY29yZQBoADUAcAAtAGMAbwByAGVSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtY29yZQBoADUAcAAtAGMAbwByAGUAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format("woff"),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWNvcmUiLAoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIiwKCSJtYWpvclZlcnNpb24iOiAxLAoJIm1pbm9yVmVyc2lvbiI6IDEsCgkidmVyc2lvbiI6ICJWZXJzaW9uIDEuMSIsCgkiZm9udElkIjogImg1cC1jb3JlIiwKCSJwc05hbWUiOiAiaDVwLWNvcmUiLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtY29yZSIKfQpdXT4KPC9qc29uPgo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Img1cC1jb3JlIiBob3Jpei1hZHYteD0iMTAyNCI+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU2NTsiIGdseXBoLW5hbWU9ImFycm93LWRvd24iIGRhdGEtdGFncz0iYXJyb3ctZG93biIgZD0iTTIzNCA1NjUuNjY3aDU1NmwtMjc4LTI3OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNTY2OyIgZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgZGF0YS10YWdzPSJhcnJvdy1sZWZ0IiBkPSJNMzgxIDE2NC42Njd2NTI0bDI2Mi0yNjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU4ZTsiIGdseXBoLW5hbWU9ImNvbGFwc2UiIGRhdGEtdGFncz0iY29sYXBzZSIgZD0iTTUxMiA1ODQuNjY3bDI1Ni0yNTYtNjAtNjAtMTk2IDE5Ni0xOTYtMTk2LTYwIDYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU1OGY7IiBnbHlwaC1uYW1lPSJleHBhbmQiIGRhdGEtdGFncz0iZXhwYW5kIiBkPSJNNzA4IDU4NC42NjdsNjAtNjAtMjU2LTI1Ni0yNTYgMjU2IDYwIDYwIDE5Ni0xOTZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwMDsiIGdseXBoLW5hbWU9Im1vdmUiIGRhdGEtdGFncz0ibW92ZSIgZD0iTTM4Ni42NjIgODUzLjA2MWg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDg1My4wNjFoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiA2OTYuNzk4aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgNjk2Ljc5OGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDU0MC40MzNoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNNTY2LjA2NyA1NDAuNDMzaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTM4Ni42NjIgMzg0LjE3MWg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDM4NC4xNzFoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiAyMjcuODA2aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgMjI3LjgwNmg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDcxLjU0NGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDcxLjU0NGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU2MDE7IiBnbHlwaC1uYW1lPSJjaGVjay1tYXJrIiBkYXRhLXRhZ3M9ImNoZWNrLW1hcmsiIGQ9Ik00NTQuMzAxIDM5NS4yNTNsLTExNi45MTcgMTE2LjkxNy04NC43ODEtODQuNzA3IDIwMS42OTYtMjAxLjY5NyAzMTcuMDk3IDMxNy4wOTctODQuNzgxIDg0LjcwNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODg4OyIgZ2x5cGgtbmFtZT0iYXJyb3ctdXAtY2lyY2xlIiBkYXRhLXRhZ3M9ImFycm93LXVwLWNpcmNsZSIgZD0iTTUxMy4zNDQgNjg5LjA2OGMtMTQ4LjYxNiAwLTI2NC43MjItMTIwLjc1LTI2MC4wNzctMjY5LjM2NyAwLTEyNS4zOTUgODguMjQxLTIzMi4yMTIgMjA4Ljk5MS0yNTUuNDM0djIxMy42MzZoLTkyLjg4NWMtMTMuOTMzIDAtMTMuOTMzIDkuMjg4LTkuMjg4IDE4LjU3N2wxMzkuMzI3IDE3MS44MzhjNC42NDUgOS4yODggMTMuOTMzIDkuMjg4IDIzLjIyMSA0LjY0NSAwIDAgNC42NDUtNC42NDUgNC42NDUtNC42NDVsMTM5LjMyNy0xNzEuODM4YzkuMjg4LTkuMjg4IDQuNjQ1LTE4LjU3Ny05LjI4OC0xOC41NzdoLTkyLjg4NXYtMjEzLjYzNmMxNDMuOTcyIDMyLjUxIDIzMi4yMTIgMTcxLjgzOCAxOTkuNzAzIDMxNS44MDgtMjMuMjIxIDEyMC43NS0xMzAuMDM5IDIwNC4zNDctMjUwLjc4OSAyMDguOTkxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4ODk7IiBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZSIgZGF0YS10YWdzPSJpbmZvLWNpcmNsZSIgZD0iTTUxMiA2ODYuOTMzYy0xNDQuMDc3IDAtMjYwLjI2Ni0xMTYuMTkxLTI2MC4yNjYtMjYwLjI2NnMxMTYuMTkxLTI2MC4yNjYgMjYwLjI2Ni0yNjAuMjY2IDI2MC4yNjYgMTE2LjE5MSAyNjAuMjY2IDI2MC4yNjZ2MGMwIDEzOS40MjktMTE2LjE5MSAyNTUuNjE5LTI2MC4yNjYgMjYwLjI2NnpNNDcwLjE3MSA2MzUuODFoODguMzA1di02OS43MTRoLTg4LjMwNXY2OS43MTR6TTYwMC4zMDUgMjQ1LjQxaC0xODEuMjU3djUxLjEyM2g1MS4xMjN2MTYyLjY2NmgtNTEuMTIzdjUxLjEyM2gxMzkuNDI5di0yMTguNDM4aDQ2LjQ3N2wtNC42NDgtNDYuNDc3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGE7IiBnbHlwaC1uYW1lPSJzZWFyY2giIGRhdGEtdGFncz0ic2VhcmNoIiBkPSJNNzY5LjI2MyAyMjMuMTYzbC0xMTAuNjggMTEwLjY4YzcxLjk0MyA5OS42MTIgNDkuODA2IDI0My40OTQtNDkuODA2IDMxNS40MzdzLTI0My40OTQgNDQuMjctMzE1LjQzNy01NS4zMzljLTcxLjk0My05OS42MTItNDkuODA2LTI0My40OTQgNDkuODA2LTMxNS40MzcgNzcuNDc1LTU1LjMzOSAxODIuNjIzLTU1LjMzOSAyNjAuMDk4IDBsMTEwLjY4LTExMC42OGM1LjUzMy01LjUzMyAxMS4wNjgtNS41MzMgMTYuNjAxIDAgMCAwIDAgMCAwIDBsMzMuMjA1IDMzLjIwNWMxMS4wNjggNS41MzMgMTEuMDY4IDE2LjYwMSA1LjUzMyAyMi4xMzcgMCAwIDAgMCAwIDB6TTQ3NS45NiAzMDAuNjM4Yy04OC41NDQgMC0xNjAuNDg2IDcxLjk0My0xNjAuNDg2IDE2MC40ODZzNzEuOTQzIDE2MC40ODYgMTYwLjQ4NiAxNjAuNDg2IDE2MC40ODYtNzEuOTQzIDE2MC40ODYtMTYwLjQ4Ni03MS45NDMtMTYwLjQ4Ni0xNjAuNDg2LTE2MC40ODZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODhjOyIgZ2x5cGgtbmFtZT0iZnVsbHNjcmVlbiIgZGF0YS10YWdzPSJmdWxsc2NyZWVuIiBkPSJNMzU3LjA3NSA1NzIuOTgzYzUuNzM3IDUuNzM3IDAgNS43MzctNS43MzcgNS43MzdsLTEwMy4yODQgMTEuNDc2Yy01LjczNyA1LjczNy0xMS40NzYgMC0xMS40NzYtNS43MzdsMTEuNDc2LTEwOS4wMjFjMC01LjczNyA1LjczNy01LjczNyA1LjczNy01LjczN2wxMDMuMjg0IDEwMy4yODR6TTI4Mi40ODQgNTA5Ljg2NWw2My4xMTgtNjMuMTE4YzUuNzM3LTUuNzM3IDExLjQ3Ni01LjczNyAxNy4yMTMgMGwyMi45NTMgMjIuOTUzYzUuNzM3IDUuNzM3IDUuNzM3IDExLjQ3NiAwIDE3LjIxM2wtNjMuMTE4IDU3LjM3OS00MC4xNjYtMzQuNDI5ek03NzUuOTQ1IDQ2OS42OTljNS43MzctNS43MzcgNS43MzcgMCA1LjczNyA1LjczN2wxMS40NzYgMTA5LjAyMWMwIDUuNzM3LTUuNzM3IDExLjQ3Ni0xMS40NzYgMTEuNDc2bC0xMDkuMDIxLTExLjQ3NmMtNS43MzcgMC01LjczNy01LjczNy01LjczNy01LjczN2wxMDkuMDIxLTEwOS4wMjF6TTcxMi44MyA1NDQuMjk0bC02My4xMTgtNjMuMTE4Yy01LjczNy01LjczNy01LjczNy0xMS40NzYgMC0xNy4yMTNsMjIuOTUzLTIyLjk1M2M1LjczNy01LjczNyAxMS40NzYtNS43MzcgMTcuMjEzIDBsNjMuMTE4IDYzLjExOC00MC4xNjYgNDAuMTY2ek02NzguNDAxIDI2My4xMzRjLTUuNzM3LTUuNzM3IDAtNS43MzcgNS43MzctNS43MzdsMTA5LjAyMS0xMS40NzZjNS43MzcgMCAxMS40NzYgNS43MzcgMTEuNDc2IDExLjQ3NmwtMTcuMjEzIDEwMy4yODRjMCA1LjczNy01LjczNyA1LjczNy01LjczNyA1LjczN2wtMTAzLjI4NC0xMDMuMjg0ek03NDcuMjU2IDMzMS45ODlsLTYzLjExOCA2My4xMThjLTUuNzM3IDUuNzM3LTExLjQ3NiA1LjczNy0xNy4yMTMgMGwtMjIuOTUzLTIyLjk1M2MtNS43MzctNS43MzctNS43MzctMTEuNDc2IDAtMTcuMjEzbDYzLjExOC02My4xMTggNDAuMTY2IDQwLjE2NnpNMjUzLjc5NCAzNjYuNDE4Yy01LjczNyA1LjczNy01LjczNyAwLTUuNzM3LTUuNzM3bC0xMS40NzYtMTA5LjAyMWMwLTUuNzM3IDUuNzM3LTExLjQ3NiAxMS40NzYtMTEuNDc2bDEwOS4wMjEgMTEuNDc2YzUuNzM3IDAgNS43MzcgNS43MzcgNS43MzcgNS43MzdsLTEwOS4wMjEgMTA5LjAyMXpNMzIyLjY0OSAyOTEuODI0bDYzLjExOCA2My4xMThjNS43MzcgNS43MzcgNS43MzcgMTEuNDc2IDAgMTcuMjEzbC0yMi45NTMgMjIuOTUzYy01LjczNyA1LjczNy0xMS40NzYgNS43MzctMTcuMjEzIDBsLTYzLjExOC02My4xMTggNDAuMTY2LTQwLjE2NnpNMTUwLjUxIDY3Ni4yNjd2LTQ5OS4yMDFoNzIyLjk3OXY0OTkuMjAxaC03MjIuOTc5ek04MzMuMzI0IDIxNy4yMzJoLTYzNi45MTF2NDEzLjEzaDYzNi45MTF2LTQxMy4xM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODhlOyIgZ2x5cGgtbmFtZT0iaDVwIiBkYXRhLXRhZ3M9Img1cCIgZD0iTTg5MS40MDYgNTc0LjUyNGMtMjIuMzE5IDE2LjczOC01MC4yMTYgMjcuODk3LTg5LjI3MyAyNy44OTdoLTEzOS40ODd2LTY2Ljk1NGgtMTU2LjIyNWwtMTEuMTU5LTU1Ljc5NWMxMS4xNTkgNS41NzkgMjcuODk3IDExLjE1OSAzOS4wNTcgMTEuMTU5czIyLjMxOSAwIDMzLjQ3NiAwYzMzLjQ3NiAwIDY2Ljk1NC0xMS4xNTkgODkuMjczLTMzLjQ3NnMzMy40NzYtNTAuMjE2IDMzLjQ3Ni04My42OTJjMC0yMi4zMTktNS41NzktNDQuNjM1LTE2LjczOC02Ni45NTRzLTI3Ljg5Ny0zOS4wNTctNTAuMjE2LTUwLjIxNmMtNS41NzktNS41NzktMTYuNzM4IDAtMjIuMzE5LTExLjE1OWgxMTcuMTd2MTMzLjkwOGg2Ni45NTRjNDQuNjM1IDAgNzguMTEzIDExLjE1OSAxMDAuNDMgMjcuODk3IDIyLjMxOSAyMi4zMTkgMzMuNDc2IDUwLjIxNiAzMy40NzYgODMuNjkyIDAgMzkuMDU3LTExLjE1OSA2Ni45NTQtMjcuODk3IDgzLjY5MnYwek03OTYuNTU1IDQ2Mi45MzVjLTExLjE1OS01LjU3OS0yMi4zMTktMTEuMTU5LTQ0LjYzNS0xMS4xNTloLTMzLjQ3NnY4My42OTJoMzkuMDU3YzIyLjMxOSAwIDMzLjQ3Ni01LjU3OSA0NC42MzUtMTEuMTU5IDUuNTc5LTUuNTc5IDExLjE1OS0xNi43MzggMTEuMTU5LTI3Ljg5NyAwLTE2LjczOC01LjU3OS0yNy44OTctMTYuNzM4LTMzLjQ3NnYwek01MjMuMTYgNDIzLjg3OGMtMTYuNzM4IDAtMzMuNDc2LTExLjE1OS00NC42MzUtMjcuODk3bC05NC44NTEgMTYuNzM4IDQ0LjYzNSAxOTUuMjgxaC05NC44NTF2LTE1MC42NDZoLTExNy4xN3YxNTAuNjQ2aC0xMTEuNTg5di0zNjIuNjY3aDExMS41ODl2MTMzLjkwOGgxMTcuMTd2LTEzMy45MDhoMTM5LjQ4N2MtMTYuNzM4IDExLjE1OS0zMy40NzYgMTEuMTU5LTQ0LjYzNSAyMi4zMTlzLTIyLjMxOSAyMi4zMTktMjcuODk3IDMzLjQ3NmMtNS41NzkgMTEuMTU5LTExLjE1OSAyMi4zMTktMTYuNzM4IDM5LjA1N2w5NC44NTEgMTYuNzM4YzUuNTc5LTE2LjczOCAyMi4zMTktMjcuODk3IDQ0LjYzNS0yNy44OTcgMjcuODk3IDAgNTAuMjE2IDIyLjMxOSA1MC4yMTYgNTAuMjE2IDAgMjIuMzE5LTIyLjMxOSA0NC42MzUtNTAuMjE2IDQ0LjYzNXYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGY7IiBnbHlwaC1uYW1lPSJyaWdodHMtb2YtdXNlIiBkYXRhLXRhZ3M9InJpZ2h0cy1vZi11c2UiIGQ9Ik04NzguMjc3IDQxNC4zNWMwLTUuOTA3IDAtNS45MDcgMC01LjkwNy0yMy42MzEtMjMuNjMxLTQ3LjI2MS0zNS40NDgtNzYuNzk5LTQxLjM1NS0xMS44MTMgMC0yMy42MzEtNS45MDctMzUuNDQ4LTUuOTA3cy0xNy43MjQgMC0yOS41MzcgMGMwIDAtNS45MDcgMC01LjkwNyA1LjkwNy02NC45ODUgNTkuMDc5LTEzNS44NzcgMTE4LjE1My0yMDAuODYzIDE4My4xMzkgMCAwLTUuOTA3IDAtNS45MDcgMC0yMy42MzEtNS45MDctNDcuMjYxLTExLjgxMy03MC44OTItMTcuNzI0cy01My4xNjggMC03Ni43OTkgMTEuODEzYy0xNy43MjQgMTEuODEzLTIzLjYzMSAxNy43MjQtMjkuNTM3IDM1LjQ0OC01LjkwNyA1LjkwNyAwIDIzLjYzMSAxMS44MTMgMjMuNjMxIDQxLjM1NSAxMS44MTMgODguNjE2IDI5LjUzNyAxMjkuOTcxIDQ3LjI2MSAxMS44MTMgNS45MDcgMjkuNTM3IDUuOTA3IDQxLjM1NSA1LjkwNyA1LjkwNyAwIDExLjgxMy01LjkwNyAxMS44MTMtNS45MDcgNDEuMzU1LTE3LjcyNCA4Mi43MDktMjkuNTM3IDEyNC4wNjAtNDcuMjYxIDAgMCA1LjkwNyAwIDUuOTA3IDAgMjkuNTM3IDUuOTA3IDY0Ljk4NSAxNy43MjQgOTQuNTIzIDIzLjYzMSA1LjkwNyAwIDUuOTA3IDAgNS45MDcgMGwxMDYuMzQtMjEyLjY3NnpNMjY5Ljc4NiA0MjAuMjZjMTcuNzI0IDExLjgxMyAzNS40NDggNS45MDcgNTMuMTY4LTExLjgxMyAxMS44MTMtMTEuODEzIDExLjgxMy0yOS41MzcgNS45MDctNDcuMjYxIDE3LjcyNCA1LjkwNyAzNS40NDgtNS45MDcgNDEuMzU1LTE3LjcyNCAxMS44MTMtMTcuNzI0IDUuOTA3LTM1LjQ0OC01LjkwNy00Ny4yNjEgNS45MDcgMCAxMS44MTMgMCAxNy43MjQgMCAxMS44MTMtNS45MDcgMjMuNjMxLTExLjgxMyAyOS41MzctMjkuNTM3czAtMjkuNTM3LTUuOTA3LTM1LjQ0OGMtNS45MDctNS45MDctMTEuODEzLTExLjgxMy0xNy43MjQtMTcuNzI0cy0xMS44MTMtMTEuODEzLTE3LjcyNC0xNy43MjQtMzUuNDQ4LTE3LjcyNC01My4xNjggMGMtMjkuNTM3IDI5LjUzNy01My4xNjggNjQuOTg1LTgyLjcwOSA5NC41MjMtMTcuNzI0IDIzLjYzMS0zNS40NDggNDEuMzU1LTQ3LjI2MSA2NC45ODUtNS45MDcgMTEuODEzLTExLjgxMyAxNy43MjQtMTEuODEzIDI5LjUzNyAwIDUuOTA3IDAgMTcuNzI0IDUuOTA3IDIzLjYzMSAxMS44MTMgMTEuODEzIDE3LjcyNCAxNy43MjQgMjkuNTM3IDI5LjUzNyAxNy43MjQgMTcuNzI0IDQ3LjI2MSAxMS44MTMgNjQuOTg1LTUuOTA3LTUuOTA3IDAtNS45MDctNS45MDctNS45MDctMTEuODEzdjB6TTQxNy40NzcgMjEzLjQ5MWwyOS41MzctMjkuNTM3YzE3LjcyNC0xNy43MjQgNDcuMjYxLTExLjgxMyA1OS4wNzkgNS45MDdsLTUuOTA3IDUuOTA3Yy0yMy42MzEgMjMuNjMxLTQ3LjI2MSA0Ny4yNjEtNzAuODkyIDcwLjg5Mi01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTNzNS45MDcgNS45MDcgMTEuODEzIDExLjgxM2M1LjkwNyAwIDExLjgxMyAwIDExLjgxMy01LjkwNyAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSA1LjkwNy0xMS44MTMgMTcuNzI0LTExLjgxMyAyOS41MzctMTEuODEzIDExLjgxMyA1LjkwNyAyMy42MzEgMTEuODEzIDI5LjUzNyAyMy42MzEgMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDEuMzU1IDQxLjM1NS04OC42MTYgODIuNzA5LTEyOS45NzEgMTI5Ljk3MS01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTMgMCAxMS44MTMgMTEuODEzIDExLjgxMyAyMy42MzEgNS45MDcgMCAwIDUuOTA3IDAgNS45MDctNS45MDcgNDEuMzU1LTQxLjM1NSA4OC42MTYtODguNjE2IDEyOS45NzEtMTI5Ljk3MSA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxNy43MjQgMCAzNS40NDggMTcuNzI0IDM1LjQ0OCAzNS40NDggMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDcuMjYxIDQ3LjI2MS0xMDAuNDI5IDEwMC40MjktMTQ3LjY5MSAxNDcuNjkxLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxM3M1LjkwNyAxMS44MTMgNS45MDcgMTEuODEzYzUuOTA3IDAgMTEuODEzIDAgMTEuODEzLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxMy0xMS44MTMgMzUuNDQ4LTM1LjQ0OCA3MC44OTItNzAuODkyIDEwNi4zNC0xMDYuMzQgMTEuODEzLTExLjgxMyAyMy42MzEtMjMuNjMxIDI5LjUzNy0yOS41MzcgMCAwIDUuOTA3LTUuOTA3IDUuOTA3IDAgMjMuNjMxIDUuOTA3IDM1LjQ0OCAyOS41MzcgMjkuNTM3IDUzLjE2OGgzNS40NDhjMCAwIDAgMCAwIDAgMC01LjkwNyAwLTE3LjcyNCAwLTIzLjYzMS01LjkwNy0yOS41MzctMjMuNjMxLTQ3LjI2MS01My4xNjgtNTkuMDc5IDAgMC01LjkwNyAwLTUuOTA3LTUuOTA3LTExLjgxMy0yOS41MzctMzUuNDQ4LTUzLjE2OC02NC45ODUtNTMuMTY4LTUuOTA3IDAtNS45MDcgMC01LjkwNy01LjkwNy0xNy43MjQtMzUuNDQ4LTU5LjA3OS00Ny4yNjEtODguNjE2LTM1LjQ0OC01LjkwNyAwLTExLjgxMyA1LjkwNy0xMS44MTMgNS45MDctNS45MDctNS45MDctMTEuODEzLTExLjgxMy0yMy42MzEtMTcuNzI0LTI5LjUzNy0xMS44MTMtNTkuMDc5LTUuOTA3LTc2Ljc5OSAxMS44MTMtMTEuODEzIDExLjgxMy0xNy43MjQgMTcuNzI0LTI5LjUzNyAyOS41MzcgMTcuNzI0IDIzLjYzMSAyMy42MzEgMjkuNTM3IDI5LjUzNyA0MS4zNTV2MCAwek0yNTIuMDYyIDcyNy40NTljMjkuNTM3LTExLjgxMyA2NC45ODUtMjMuNjMxIDk0LjUyMy0yOS41MzcgMzUuNDQ4LTExLjgxMyA2NC45ODUtMjMuNjMxIDEwMC40MjktMjkuNTM3IDAgMCAwIDAgNS45MDcgMC0xNy43MjQtNS45MDctMzUuNDQ4LTExLjgxMy00Ny4yNjEtMTcuNzI0IDAgMC01LjkwNyAwLTUuOTA3IDAtNDcuMjYxIDExLjgxMy05NC41MjMgMjMuNjMxLTEzNS44NzcgNDEuMzU1LTUuOTA3IDAtNS45MDcgMC01LjkwNyAwbC03Ni43OTktMTgzLjEzOWMwLTExLjgxMyA1LjkwNy0xNy43MjQgMTEuODEzLTIzLjYzMXM1LjkwNy01LjkwNyA1LjkwNy0xMS44MTNjLTUuOTA3LTUuOTA3LTExLjgxMy0xNy43MjQtMjMuNjMxLTIzLjYzMS0xNy43MjQgMTcuNzI0LTI5LjUzNyAzNS40NDgtMjkuNTM3IDY0Ljk4NWw4OC42MTYgMjEyLjY3NmMtNS45MDctMTEuODEzIDUuOTA3IDUuOTA3IDE3LjcyNCAwdjB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MDsiIGdseXBoLW5hbWU9ImRlbGV0ZS1jaXJjbGUiIGRhdGEtdGFncz0iZGVsZXRlLWNpcmNsZSIgZD0iTTUxMiA2ODYuOTMzYy0xNDcuMTA3IDAtMjYwLjI2Ni0xMTguODE3LTI2MC4yNjYtMjYwLjI2NnMxMTguODE3LTI2MC4yNjYgMjYwLjI2Ni0yNjAuMjY2IDI2MC4yNjYgMTE4LjgxNyAyNjAuMjY2IDI2MC4yNjYtMTEzLjE1OCAyNjAuMjY2LTI2MC4yNjYgMjYwLjI2NnpNNjUzLjQ0OSAzNDcuNDU1YzUuNjU5LTUuNjU5IDUuNjU5LTE2Ljk3MyAwLTI4LjI5bC0zMy45NDktMzMuOTQ5Yy01LjY1OS01LjY1OS0xNi45NzMtNS42NTktMjguMjkgMGwtNzkuMjEyIDc5LjIxMi03OS4yMTItNzkuMjEyYy01LjY1OS01LjY1OS0xNi45NzMtNS42NTktMjguMjkgMGwtMzMuOTQ5IDMzLjk0OWMtNS42NTkgNS42NTktNS42NTkgMTYuOTczIDAgMjguMjlsODQuODcxIDc5LjIxMi03OS4yMTIgNzkuMjEyYy01LjY1OSA1LjY1OS01LjY1OSAxNi45NzMgMCAyOC4yOWwzMy45NDkgMzMuOTQ5YzUuNjU5IDUuNjU5IDE2Ljk3MyA1LjY1OSAyOC4yOSAwbDczLjU1NC04NC44NzEgNzkuMjEyIDc5LjIxMmM1LjY1OSA1LjY1OSAxNi45NzMgNS42NTkgMjguMjkgMGwzMy45NDktMzMuOTQ5YzUuNjU5LTUuNjU5IDUuNjU5LTE2Ljk3MyAwLTI4LjI5bC03OS4yMTItNzMuNTU0IDc5LjIxMi03OS4yMTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MTsiIGdseXBoLW5hbWU9IndpbmRvdyIgZGF0YS10YWdzPSJ3aW5kb3ciIGQ9Ik0xODYuODIxIDU0OS4zMTljLTUuNzA0LTUuNzA0IDAtNS43MDQgNS43MDQtNS43MDRsMTA4LjM5NC0xMS40MWM1LjcwNCAwIDExLjQxIDUuNzA0IDExLjQxIDExLjQxbC0xNy4xMTQgMTAyLjY4N2MwIDUuNzA0LTUuNzA0IDUuNzA0LTUuNzA0IDUuNzA0bC0xMDIuNjg3LTEwMi42ODd6TTI1NS4yOCA2MTIuMDc0bC02Mi43NTIgNjIuNzUyYy01LjcwNCA1LjcwNC0xMS40MSA1LjcwNC0xNy4xMTQgMGwtMTcuMTE0LTIyLjgyMWMtNS43MDQtNS43MDQtNS43MDQtMTEuNDEgMC0xNy4xMTRsNjIuNzUyLTYyLjc1MiAzNC4yMjggMzkuOTM1ek03MzQuNDkgNjQ2LjMwMmMtNS43MDQgNS43MDQtNS43MDQgMC01LjcwNC01LjcwNGwtMTEuNDEtMTA4LjM5NGMwLTUuNzA0IDUuNzA0LTExLjQxIDExLjQxLTExLjQxbDEwOC4zOTQgMTEuNDFjNS43MDQgMCA1LjcwNCA1LjcwNCA1LjcwNCA1LjcwNGwtMTA4LjM5NCAxMDguMzk0ek03OTcuMjQyIDU3Mi4xNGw2Mi43NTIgNjIuNzUyYzUuNzA0IDUuNzA0IDUuNzA0IDExLjQxIDAgMTcuMTE0bC0yMi44MjEgMjIuODIxYy01LjcwNCA1LjcwNC0xMS40MSA1LjcwNC0xNy4xMTQgMGwtNjIuNzUyLTYyLjc1MiAzOS45MzUtMzkuOTM1ek04MzEuNDczIDMwOS43MTdjNS43MDQgNS43MDQgMCA1LjcwNC01LjcwNCA1LjcwNGwtMTAyLjY4NyAxNy4xMTRjLTUuNzA0IDAtMTEuNDEtNS43MDQtMTEuNDEtMTEuNDFsMTEuNDEtMTA4LjM5NGMwLTUuNzA0IDUuNzA0LTUuNzA0IDUuNzA0LTUuNzA0bDEwMi42ODcgMTAyLjY4N3pNNzYzLjAxNCAyNDYuOTYybDYyLjc1Mi02Mi43NTJjNS43MDQtNS43MDQgMTEuNDEtNS43MDQgMTcuMTE0IDBsMjIuODIxIDIyLjgyMWM1LjcwNCA1LjcwNCA1LjcwNCAxMS40MSAwIDE3LjExNGwtNjIuNzUyIDYyLjc1Mi0zOS45MzUtMzkuOTM1ek0yODMuODA0IDIxMi43MzRjNS43MDQtNS43MDQgNS43MDQgMCA1LjcwNCA1LjcwNGwxMS40MSAxMDguMzk0YzAgNS43MDQtNS43MDQgMTEuNDEtMTEuNDEgMTEuNDFsLTEwOC4zOTQtMTEuNDFjLTUuNzA0IDAtNS43MDQtNS43MDQtNS43MDQtNS43MDRsMTA4LjM5NC0xMDguMzk0ek0yMjEuMDUyIDI4MS4xOTNsLTYyLjc1Mi02Mi43NTJjLTUuNzA0LTUuNzA0LTUuNzA0LTExLjQxIDAtMTcuMTE0bDIyLjgyMS0yMi44MjFjNS43MDQtNS43MDQgMTEuNDEtNS43MDQgMTcuMTE0IDBsNjIuNzUyIDYyLjc1Mi0zOS45MzUgMzkuOTM1ek0zMzUuMTQ5IDU1NS4wMjZ2LTIzOS42MDVoMzQ3Ljk5OHYyMzkuNjA1aC0zNDcuOTk4ek02MzcuNTA3IDM1NS4zNTVoLTI2Mi40MjR2MTU0LjAzMmgyNjIuNDI0di0xNTQuMDMyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OTI7IiBnbHlwaC1uYW1lPSJjb2RlIiBkYXRhLXRhZ3M9ImNvZGUiIGQ9Ik00NDYuNTIzIDMxMS4zMDNjNi4yMzUtNi4yMzUgNi4yMzUtMTIuNDcyIDYuMjM1LTE4LjcwN3YtNjIuMzU5YzAtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzVsLTIzMC43MjggMTU1Ljg5N2MtNi4yMzUgNi4yMzUtNi4yMzUgMTIuNDcyLTYuMjM1IDE4LjcwN3Y0OS44ODZjMCA2LjIzNSA2LjIzNSAxMi40NzIgNi4yMzUgMTguNzA3bDIzMC43MjggMTU1Ljg5N2M2LjIzNSA2LjIzNSA2LjIzNSAwIDYuMjM1LTYuMjM1di02Mi4zNTljMC02LjIzNS02LjIzNS0xMi40NzItNi4yMzUtMTguNzA3bC0xNjIuMTM0LTExMi4yNDVjLTYuMjM1LTYuMjM1LTYuMjM1LTYuMjM1IDAtMTIuNDcybDE2Mi4xMzQtOTkuNzc2ek03MzMuMzc1IDQxNy4zMTNjNi4yMzUgNi4yMzUgNi4yMzUgNi4yMzUgMCAxMi40NzJsLTE1NS44OTcgMTEyLjI0NWMtNi4yMzUgNi4yMzUtNi4yMzUgMTIuNDcyLTYuMjM1IDE4LjcwN3Y2Mi4zNTljMCA2LjIzNSA2LjIzNSA2LjIzNSA2LjIzNSA2LjIzNWwyMzAuNzI4LTE1NS44OTdjNi4yMzUtNi4yMzUgNi4yMzUtMTIuNDcyIDYuMjM1LTE4LjcwN3YtNDkuODg2YzAtNi4yMzUtNi4yMzUtMTIuNDcyLTYuMjM1LTE4LjcwN2wtMjMwLjcyOC0xNTUuODk3Yy02LjIzNS02LjIzNS02LjIzNSAwLTYuMjM1IDYuMjM1djYyLjM1OWMwIDYuMjM1IDYuMjM1IDEyLjQ3MiA2LjIzNSAxOC43MDdsMTU1Ljg5NyA5OS43NzZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MzsiIGdseXBoLW5hbWU9ImRvd25sb2FkIiBkYXRhLXRhZ3M9ImRvd25sb2FkIiBkPSJNMzUzLjA1MCA1MTIuMDI3Yy0xMS43NzMgMC0xNy42Ni01Ljg4Ny01Ljg4Ny0xNy42NmwxNTMuMDU5LTE4OC4zODJjNS44ODctMTEuNzczIDIzLjU0Ny0xMS43NzMgMjkuNDMzIDBsMTUzLjA1OSAxODguMzgyYzUuODg3IDExLjc3MyA1Ljg4NyAxNy42Ni01Ljg4NyAxNy42NmgtMzIzLjc4MnpNNTcwLjg2NSA1MDAuMjUzdjEzNS4zOTljMCAxMS43NzMtMTEuNzczIDIzLjU0Ny0yMy41NDcgMjMuNTQ3aC03MC42NDNjLTExLjc3MyAwLTIzLjU0Ny0xMS43NzMtMjMuNTQ3LTIzLjU0N3YtMTQxLjI4NmgxMTcuNzM5ek02NDcuMzk1IDM2NC44NTRjLTUuODg3IDAtMTcuNjYtNS44ODctMjMuNTQ3LTExLjc3M2wtNzYuNTMtOTQuMTljLTUuODg3LTUuODg3LTE3LjY2LTE3LjY2LTIzLjU0Ny0yMy41NDcgMCAwLTUuODg3LTUuODg3LTExLjc3My01Ljg4N3MtMTcuNjYgMTEuNzczLTE3LjY2IDExLjc3M2MtNS44ODcgNS44ODctMTcuNjYgMTcuNjYtMjMuNTQ3IDIzLjU0N2wtNzYuNTMgOTQuMTljLTUuODg3IDUuODg3LTE3LjY2IDExLjc3My0yMy41NDcgMTEuNzczaC0xMjMuNjI2Yy01Ljg4NyAwLTE3LjY2LTUuODg3LTE3LjY2LTE3LjY2di0xNDEuMjg2YzAtNS44ODcgNS44ODctMTcuNjYgMTcuNjYtMTcuNjZoNTI5LjgyNGM1Ljg4NyAwIDE3LjY2IDUuODg3IDE3LjY2IDE3LjY2djE0MS4yODZjMCA1Ljg4Ny01Ljg4NyAxNy42Ni0xNy42NiAxNy42NmwtMTI5LjUxMy01Ljg4N3pNMzAwLjA2NyAyNTMuMDA0Yy0xNy42NiAwLTI5LjQzMyAxMS43NzMtMjkuNDMzIDI5LjQzM3MxMS43NzMgMjkuNDMzIDI5LjQzMyAyOS40MzNjMTcuNjYgMCAyOS40MzMtMTEuNzczIDI5LjQzMy0yOS40MzNzLTExLjc3My0yOS40MzMtMjkuNDMzLTI5LjQzM3YweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OTQ7IiBnbHlwaC1uYW1lPSJkZWxldGUiIGRhdGEtdGFncz0iZGVsZXRlIiBkPSJNNjE1LjExMSA0MjYuNjY3bDEzNC4wNDUgMTM0LjA0NWMxMC4zMTEgMTAuMzExIDEwLjMxMSAzMC45MzQgMCA0MS4yNDVsLTYxLjg2NiA2MS44NjZjLTEwLjMxMSAxMC4zMTEtMzAuOTM0IDEwLjMxMS00MS4yNDUgMGwtMTM0LjA0NS0xMzQuMDQ1LTEzNC4wNDUgMTM0LjA0NWMtMTAuMzExIDEwLjMxMS0zMC45MzQgMTAuMzExLTQxLjI0NSAwbC02MS44NjYtNjEuODY2Yy0xMC4zMTEtMTAuMzExLTEwLjMxMS0zMC45MzQgMC00MS4yNDVsMTM0LjA0NS0xMzQuMDQ1LTEzNC4wNDUtMTM0LjA0NWMtMTAuMzExLTEwLjMxMS0xMC4zMTEtMzAuOTM0IDAtNDEuMjQ1bDYxLjg2Ni02MS44NjZjMTAuMzExLTEwLjMxMSAzMC45MzQtMTAuMzExIDQxLjI0NSAwbDEzNC4wNDUgMTM0LjA0NSAxMzQuMDQ1LTEzNC4wNDVjMTAuMzExLTEwLjMxMSAzMC45MzQtMTAuMzExIDQxLjI0NSAwbDYxLjg2NiA2MS44NjZjMTAuMzExIDEwLjMxMSAxMC4zMTEgMzAuOTM0IDAgNDEuMjQ1bC0xMzQuMDQ1IDEzNC4wNDV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMDsiIGdseXBoLW5hbWU9ImVkaXQtaW1hZ2UiIGRhdGEtdGFncz0iZWRpdC1pbWFnZSIgZD0iTTMwMC4zMzYgNzQ5LjY2NGM2OS4wMTggMjMuMTQyIDEzMy4zMjUgMTQuMjM0IDE4OS4xMzMtMzMuMjggNTYuNjI3LTQ4LjEyOCA3Ny42MTktMTEwLjU5MiA2My4xODEtMTgzLjgwOC0yLjM1NS0xMi4xODYgMC4zMDctMTkuNDU2IDguNzA0LTI3Ljg1MyA5My45MDEtOTMuMzg5IDE1Ni43NzQtMTU2LjQ2NyAyNTAuNDctMjUwLjE2MyA1LjQyNy01LjQyNyAxMC45NTctMTAuODU0IDE1LjY2Ny0xNi44OTYgMzkuNDI0LTUwLjI3OCAxNi43OTQtMTI0LjAwNi00NC4yMzctMTQyLjAyOS0zNi45NjYtMTAuOTU3LTY4LjQwMyAwLTk1LjMzNCAyNy4wMzQtOTUuNjQyIDk2LjA1MS0xNjAuOTczIDE2MC45NzMtMjU2LjYxNCAyNTcuMDI0LTYuOTYzIDYuOTYzLTEyLjggOC45MDktMjIuNjMgNi43NTgtMTE3Ljc2LTI2LjMxNy0yMjkuMTcxIDYwLjgyNi0yMzEuNzMxIDE4MS40NTMtMC42MTQgMjYuNDE5IDMuNTg0IDUyLjMyNiAxNS45NzQgNzcuOTI2IDM0LjgxNi0zNC44MTYgNjguNTA2LTY3Ljc4OSAxMDEuMjc0LTEwMS43ODYgMTAuNDQ1LTEwLjc1MiAyMC45OTItMTUuMzYgMzYuMDQ1LTE1LjM2IDE0LjY0MyAwIDI1LjE5IDMuODkxIDM0LjgxNiAxNC44NDggMTAuNzUyIDEyLjM5IDIzLjA0MCAyMy4zNDcgMzQuNjExIDM1LjAyMSAxNC4zMzYgMTQuNDM4IDE0LjMzNiA0Ni4wODAtMC4yMDUgNjAuNTE4LTM1LjEyMyAzNS4yMjYtNzAuMzQ5IDcwLjM0OS0xMDYuNTk4IDEwNi40OTYgMy44OTEgMi4yNTMgNS42MzIgMy40ODIgNy40NzUgNC4wOTZ6TTcwMy40ODUgMTkxLjU4NGMtMC40MS0yNC4yNjkgMjAuNjg1LTQ1LjQ2NiA0NC44NTEtNDUuMTU4IDIzLjc1NyAwLjQxIDQ0LjAzMiAyMC45OTIgNDMuOTMgNDQuNTQ0LTAuMTAyIDIzLjc1Ny0yMC4yNzUgNDQuMDMyLTQ0LjIzNyA0NC4xMzQtMjMuODU5IDAuMzA3LTQ0LjIzNy0xOS42NjEtNDQuNTQ0LTQzLjUyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDE7IiBnbHlwaC1uYW1lPSJob3VyZ2xhc3MiIGRhdGEtdGFncz0iaG91cmdsYXNzIiBkPSJNNzMzLjQxNCAxMTcuNDE5Yy0xNDcuNzYzIDAtMjk1LjUyNiAwLTQ0My4yOSAwIDAgMi4wNDggMC4xMDIgNC4wOTYgMCA2LjE0NC0wLjMwNyAxMy44MjQtMS4wMjQgMzIuNjY2LTAuOTIyIDQ2LjQ5IDAuNDEgMzkuNzMxIDYuODYxIDc4LjEzMSAxOS4wNDYgMTE1LjIgMTcuMjAzIDUyLjIyNCA0My43MjUgOTYuMjU2IDgxLjMwNiAxMzAuMzU1IDQuNTA2IDQuMDk2IDkuMjE2IDcuODg1IDEzLjcyMiAxMS43NzYtMC4yMDUgMC43MTctMC4zMDcgMS4xMjYtMC40MSAxLjIyOS0xLjMzMSAxLjIyOS0yLjc2NSAyLjM1NS00LjE5OCAzLjU4NC0yOC4wNTggMjIuNjMtNTAuNjg4IDUxLjQwNS02OC40MDMgODUuNjA2LTMwLjYxOCA1OS4wODUtNDMuNTIgMTIzLjU5Ny00MS4xNjUgMTkyLjYxNCAwLjIwNSA3LjE2OCAwLjYxNCAxOC4zMyAwLjkyMiAyNS40OTggMTQ3Ljc2MyAwIDI5NS41MjYgMCA0NDMuMjkgMCAwLjIwNS0xLjMzMSAwLjUxMi0yLjY2MiAwLjYxNC0zLjk5NCAyLjY2Mi0zNi45NjYgMS4yMjktNzcuNzIyLTUuOTM5LTExMy44NjktMTQuMzM2LTcyLjkwOS00NC41NDQtMTMzLjgzNy05NS4wMjctMTc5LjQwNS00LjA5Ni0zLjY4Ni04LjI5NC03LjA2Ni0xMi4zOS0xMC41NDcgMC4yMDUtMC43MTcgMC4zMDctMS4xMjYgMC41MTItMS4zMzEgMC44MTktMC43MTcgMS42MzgtMS40MzQgMi40NTgtMi4xNSA0Mi4xODktMzMuODk0IDcxLjY4LTc5Ljg3MiA5MC45MzEtMTM1Ljc4MiAxMS43NzYtMzQuMjAyIDE4LjYzNy02OS44MzcgMjAuMDcwLTEwNi43MDEgMC44MTktMTkuNzYzLTAuNjE0LTQ0Ljg1MS0xLjEyNi02NC43MTd6TTY4Ny40MzcgMTYwLjYzMmMwIDYuNTU0IDAuMjA1IDEyLjQ5MyAwIDE4LjQzMi0xLjMzMSAzNy41ODEtNy4yNyA3NC4xMzgtMTkuODY2IDEwOC43NDktMTcuOTIgNDkuNTYyLTQ1LjU2OCA4OC4yNjktODguNjc4IDEwOC42NDYtMi40NTggMS4xMjYtMi45NyAzLjA3Mi0yLjk3IDUuODM3IDAuMTAyIDE2LjY5MSAwLjEwMiAzMy40ODUgMCA1MC4xNzYgMCAzLjk5NCAxLjMzMSA1LjQyNyA0LjA5NiA2Ljk2MyA5LjExNCA1LjMyNSAxOC40MzIgMTAuMjQgMjYuODI5IDE2Ljg5NiAyOS42OTYgMjMuNTUyIDQ5LjE1MiA1Ni45MzQgNjIuMzYyIDk1Ljc0NCAxMC4zNDIgMzAuNDEzIDE1Ljc3IDYyLjI1OSAxNy44MTggOTQuODIyIDAuNjE0IDkuMTE0IDAuMTAyIDE4LjIyNyAwLjEwMiAyNy41NDYtMTE2LjYzNCAwLTIzMy41NzQgMC0zNTEuMDI3IDAgMC4zMDctOC43MDQgMC42MTQtMTYuOTk4IDEuMDI0LTI1LjM5NSAxLjk0Ni0zNy4yNzQgOC40OTktNzMuMjE2IDIxLjUwNC0xMDcuMjEzIDE4LjEyNS00Ny4xMDQgNDUuMjYxLTgzLjU1OCA4Ni41MjgtMTAzLjExNyAyLjI1My0xLjAyNCAyLjg2Ny0yLjY2MiAyLjg2Ny01LjQyNy0wLjEwMi0xNy4yMDMtMC4xMDItMzQuNTA5IDAtNTEuNzEyIDAtMy4wNzItMS4wMjQtNC41MDYtMy4yNzctNS42MzItNS42MzItMi44NjctMTEuMzY2LTUuNzM0LTE2LjY5MS05LjIxNi0zNC4zMDQtMjIuNzMzLTU2LjgzMi01Ny43NTQtNzEuOTg3LTEwMC4xNDctMTIuNDkzLTM1LjEyMy0xOC4xMjUtNzEuOTg3LTE5LjY2MS0xMDkuODc1LTAuMjA1LTUuMzI1IDAtMTAuNzUyIDAtMTYuMjgyIDExNy4zNSAwLjIwNSAyMzQuMTg5IDAuMjA1IDM1MS4wMjcgMC4yMDV6TTQxMC4zNDIgNTc5Ljk2YzY4LjA5NiAwIDEzNS4zNzMgMCAyMDMuNjc0IDAtMy43ODktNi41NTQtNy4xNjgtMTIuNTk1LTEwLjc1Mi0xOC4yMjctMTAuOTU3LTE2Ljk5OC0yNC4yNjktMzAuNjE4LTM5LjczMS00MS40NzJzLTI3Ljc1LTI1LjI5My0zMi43NjgtNDYuNTkyYy0xLjYzOC02Ljk2My0yLjc2NS0xNC4zMzYtMi44NjctMjEuNjA2LTAuMzA3LTE3LjIwMy0wLjIwNS0zNC40MDYgMC4zMDctNTEuNzEyIDAuNzE3LTI4LjA1OCAxMi40OTMtNDguOTQ3IDMyLjE1NC02Mi41NjYgNDMuMDA4LTMwLjAwMyA2NS44NDMtNzUuODc4IDc1Ljc3Ni0xMzIuNTA2IDAuMzA3LTEuNjM4IDAuMzA3LTMuMzc5IDAuNjE0LTUuNTMtODMuMTQ5IDAtMTY2LjA5MyAwLTI0OS4yNDIgMCAyLjY2MiAyMC42ODUgNy44ODUgNDAuMzQ2IDE1LjQ2MiA1OS4wODUgMTMuMzEyIDMyLjk3MyAzMi43NjggNTkuMTg3IDU5LjQ5NCA3Ny43MjIgMTYuNTg5IDExLjQ2OSAyOC4zNjUgMjcuOTU1IDMyLjM1OCA1MC45OTUgMC44MTkgNC44MTMgMS4zMzEgOS44MyAxLjQzNCAxNC43NDYgMC4xMDIgMTguNjM3IDAuNjE0IDM3LjI3NC0wLjIwNSA1NS44MDgtMS4xMjYgMjQuNjc4LTExLjk4MSA0My4yMTMtMjguNTcgNTcuMTM5LTkuMjE2IDcuNzgyLTE4Ljk0NCAxNC43NDYtMjcuNjQ4IDIzLjE0Mi0xMS45ODEgMTEuMTYyLTIxLjE5NyAyNS4zOTUtMjkuNDkxIDQxLjU3NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAyOyIgZ2x5cGgtbmFtZT0icGx1cy1pY29uIiBkYXRhLXRhZ3M9InBsdXMtaWNvbiIgZD0iTTc2Ny43ODcgMzkxLjg5M2MwLTE5LjMyMy0xNS42NjQtMzQuOTg3LTM0Ljk4Ny0zNC45ODdoLTE1MS4wNDB2LTE1MS40NjdjMC0xOS4zMjMtMTUuNjY0LTM0Ljk4Ny0zNC45ODctMzQuOTg3aC02OS41NDdjLTE5LjMyMyAwLTM0Ljk4NyAxNS42NjQtMzQuOTg3IDM0Ljk4N3YxNTEuNDY3aC0xNTEuNDY3Yy0xOS4zMjMgMC0zNC45ODcgMTUuNjY0LTM0Ljk4NyAzNC45ODd2NjkuNTQ3YzAgMTkuMzIzIDE1LjY2NCAzNC45ODcgMzQuOTg3IDM0Ljk4N2gxNTEuNDY3djE1MS40NjdjMCAxOS4zMjMgMTUuNjY0IDM0Ljk4NyAzNC45ODcgMzQuOTg3aDY5LjU0N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd2LTE1MS40NjdoMTUxLjQ2N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9InZpZGVvLXVwbG9hZC1pY29uIiBkYXRhLXRhZ3M9InZpZGVvLXVwbG9hZC1pY29uIiBkPSJNMzk1Ljg0OCAzODcuMjAxdi0xMjhjMC0yMS4zMzMgMjEuMzMzLTQyLjY2NyA0Mi42NjctNDIuNjY3aDEyOGMyMS4zMzMgMCA0Mi42NjcgMTcuMDY3IDQyLjY2NyA0Mi42Njd2MTI4YzAgMjEuMzMzLTE3LjA2NyA0Mi42NjctNDIuNjY3IDQyLjY2N2gtMTI4Yy0yMS4zMzMgMC00Mi42NjctMTcuMDY3LTQyLjY2Ny00Mi42Njd6TTc5Ni45MTUgNTU3Ljg2N2wtMTAyLjQgMTA2LjY2N2MtMTIuOCAxMi44LTM4LjQgMjEuMzMzLTU1LjQ2NyAyMS4zMzNoLTE0MC44bDIxLjMzMy00Mi42NjdoODkuNnYtMTM2LjUzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDE0MC44di0zNDEuMzMzaC00MjYuNjY3djMyOC41MzNoLTQyLjY2N3YtMzQxLjMzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDQ0OGMxNy4wNjcgMCAyOS44NjcgMTIuOCAyOS44NjcgMjkuODY3djM4NGM0LjI2NyAxNy4wNjctOC41MzMgMzguNC0yMS4zMzMgNTEuMnpNNjUxLjg0OCA1MTUuMjAxdjEyMy43MzNjNC4yNjcgMCAxMi44LTQuMjY3IDEyLjgtOC41MzNsMTAyLjQtMTAyLjRjNC4yNjctNC4yNjcgNC4yNjctOC41MzMgOC41MzMtMTIuOGgtMTIzLjczM3pNNzM3LjE4MSAyMjUuMDY3djE5Ni4yNjdjMCA0LjI2Ny00LjI2NyA4LjUzMy04LjUzMyA4LjUzM3MtOC41MzMgMC0xMi44LTQuMjY3bC04OS42LTg5LjZ2LTI5Ljg2N2w4OS42LTg5LjZjOC41MzMtNC4yNjcgOC41MzMgMCAxMi44IDAgNC4yNjcgNC4yNjcgOC41MzMgNC4yNjcgOC41MzMgOC41MzN6TTM2MS43MTUgNTMyLjI2N3YxMzYuNTMzbDU5LjczMy01OS43MzNjOC41MzMtOC41MzMgMTcuMDY3LTQuMjY3IDI1LjYgMGwxMi44IDEyLjhjOC41MzMgOC41MzMgOC41MzMgMTcuMDY3IDAgMjUuNmwtMTE1LjIgMTA2LjY2N2MtOC41MzMgOC41MzMtMTcuMDY3IDguNTMzLTIxLjMzMyAwbC0xMTUuMi0xMTAuOTMzYy00LjI2Ny04LjUzMy00LjI2Ny0xNy4wNjcgMC0yNS42bDEyLjgtMTIuOGM4LjUzMy04LjUzMyAxNy4wNjctOC41MzMgMjEuMzMzIDBsNTkuNzMzIDU5LjczM3YtMTM2LjUzM2MwLTguNTMzIDguNTMzLTE3LjA2NyAxNy4wNjctMTcuMDY3aDI1LjZjMCAwIDE3LjA2NyA4LjUzMyAxNy4wNjcgMjEuMzMzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJwbGF5LWljb24iIGRhdGEtdGFncz0icGxheS1pY29uIiBkPSJNMzc1LjQ0NCA2NjEuMzU3YzgxLjA2NyA0Ni45MzMgMTg3LjczMyA0Ni45MzMgMjczLjA2NyAwIDQyLjY2Ny0yNS42IDcyLjUzMy01NS40NjcgOTguMTMzLTk4LjEzMyA3Mi41MzMtMTI4IDI5Ljg2Ny0yOTQuNC05OC4xMzMtMzcxLjItMTI4LTcyLjUzMy0yOTQuNC0yOS44NjctMzcxLjIgOTguMTMzLTQ2LjkzMyA4MS4wNjctNDYuOTMzIDE4Ny43MzMgMCAyNzMuMDY3IDIxLjMzMyA0Mi42NjcgNTUuNDY3IDcyLjUzMyA5OC4xMzMgOTguMTMzek02NDQuMjQ0IDQwOS42MjNjMTIuOCA4LjUzMyAxMi44IDI5Ljg2NyAwIDM4LjRsLTE5MiAxMTAuOTMzYy04LjUzMyA0LjI2Ny0xMi44IDQuMjY3LTIxLjMzMyAwcy0xMi44LTEyLjgtMTIuOC0yMS4zMzN2LTIyNi4xMzNjMC04LjUzMyA0LjI2Ny0xNy4wNjcgMTIuOC0yMS4zMzNzMTcuMDY3LTQuMjY3IDIxLjMzMyAwbDE5MiAxMTkuNDY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDU7IiBnbHlwaC1uYW1lPSJjb3B5IiBkYXRhLXRhZ3M9ImNvcHkiIGQ9Ik03MjIuMTMzIDYwMy44NjdoLTI0Ny43MzNjLTY1Ljg2NyAwLTExOS4yLTUzLjMzMy0xMTkuMi0xMTkuMnYtMjg4LjUzM2MwLTY1Ljg2NyA1My4zMzMtMTE5LjIgMTE5LjItMTE5LjJoMjQ3Ljg2N2M2NS44NjcgMCAxMTkuMiA1My4zMzMgMTE5LjIgMTE5LjJ2Mjg4LjUzM2MtMC4yNjcgNjUuODY3LTUzLjQ2NyAxMTkuMi0xMTkuMzMzIDExOS4yek03NzguNTMzIDE5OS4yYzAtMzEuMzMzLTI1LjA2Ny01Ni40LTU2LjQtNTYuNGgtMjQ3Ljg2N2MtMzEuMzMzIDAtNTYuNCAyNS4wNjctNTYuNCA1Ni40djI4NS40NjdjMCAzMS4zMzMgMjUuMDY3IDU2LjQgNTYuNCA1Ni40aDI0Ny43MzNjMzEuMzMzIDAgNTYuNC0yNS4wNjcgNTYuNC01Ni40di0yODUuNDY3ek0yNDUuMiAzNjguNjY3djI4OC41MzNjMCAzMS4zMzMgMjUuMDY3IDU2LjQgNTYuNCA1Ni40aDI0Ny43MzNjMzEuMzMzIDAgNTYuNC0yNS4wNjcgNTYuNC01Ni40di0xOC44aDYyLjY2N3YxOC44YzAgNjUuODY3LTUzLjMzMyAxMTkuMi0xMTkuMiAxMTkuMmgtMjQ3LjQ2N2MtNjUuODY3IDAtMTE5LjItNTMuMzMzLTExOS4yLTExOS4ydi0yODguNTMzYzAtNjUuODY3IDUzLjMzMy0xMTkuMiAxMTkuMi0xMTkuMmgxOC44djYyLjY2N2gtMTguOGMtMzEuNDY3LTMuMDY3LTU2LjUzMyAyMi01Ni41MzMgNTYuNTMzek02ODEuMiA0MDMuMmgtMTYzLjA2N2MtMTguOCAwLTMxLjMzMyAxMi41MzMtMzEuMzMzIDMxLjMzM3MxMi41MzMgMzEuMzMzIDMxLjMzMyAzMS4zMzNoMTYzLjA2N2MxOC44IDAgMzEuMzMzLTEyLjUzMyAzMS4zMzMtMzEuMzMzcy0xNS42LTMxLjMzMy0zMS4zMzMtMzEuMzMzek02ODEuMiAzMDkuMDY3aC0xNjMuMDY3Yy0xOC44IDAtMzEuMzMzIDEyLjUzMy0zMS4zMzMgMzEuMzMzczEyLjUzMyAzMS4zMzMgMzEuMzMzIDMxLjMzM2gxNjMuMDY3YzE4LjggMCAzMS4zMzMtMTIuNTMzIDMxLjMzMy0zMS4zMzNzLTE1LjYtMzEuMzMzLTMxLjMzMy0zMS4zMzN6TTY4MS4yIDIxNC45MzRoLTE2My4wNjdjLTE4LjggMC0zMS4zMzMgMTIuNTMzLTMxLjMzMyAzMS4zMzNzMTIuNTMzIDMxLjMzMyAzMS4zMzMgMzEuMzMzaDE2My4wNjdjMTguOCAwIDMxLjMzMy0xMi41MzMgMzEuMzMzLTMxLjMzM3MtMTUuNi0zMS4zMzMtMzEuMzMzLTMxLjMzM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA2OyIgZ2x5cGgtbmFtZT0iZXhhbXBsZXMtaWNvbiIgZGF0YS10YWdzPSJleGFtcGxlcy1pY29uIiBkPSJNMjEzLjMzMyAyNzUuMjAxYzg5LjYgMzguNCAxODMuNDY3IDY4LjI2NyAyNzMuMDY3IDE3LjA2N3YyODEuNmMtNjguMjY3IDQ2LjkzMy0xNTcuODY3IDU1LjQ2Ny0yMzQuNjY3IDEyLjhsLTM4LjQtMzExLjQ2N3pNODEwLjY2NyAyNzUuMjAxbC00Mi42NjcgMzE1LjczM2MtNzIuNTMzIDM4LjQtMTY2LjQgMzQuMTMzLTIzNC42NjctMTcuMDY3di0yODUuODY3YzkzLjg2NyA1MS4yIDE4Ny43MzMgMjEuMzMzIDI3Ny4zMzMtMTIuOHpNODMyIDYyOS4zMzRjLTUxLjIgMjkuODY3LTExMC45MzMgNDYuOTMzLTE3MC42NjcgNTUuNDY3LTUxLjIgMC0xMDIuNC04LjUzMy0xNDkuMzMzLTI5Ljg2Ny00Ni45MzMgMjEuMzMzLTk4LjEzMyAyOS44NjctMTQ5LjMzMyAyOS44NjctNTkuNzMzLTQuMjY3LTExOS40NjctMjUuNi0xNzAuNjY3LTU1LjQ2N2wtNjQtNDUyLjI2N2MwIDAgMjkuODY3LTE3LjA2NyAxMTAuOTMzIDIxLjMzMyA0Ni45MzMgMjUuNiAxMDIuNCAzNC4xMzMgMTU3Ljg2NyAyNS42IDQyLjY2Ny00LjI2NyA4NS4zMzMtMjEuMzMzIDExNS4yLTU1LjQ2N3YwYzI5Ljg2NyAzNC4xMzMgNzIuNTMzIDUxLjIgMTE1LjIgNTUuNDY3IDU1LjQ2NyA0LjI2NyAxMDYuNjY3LTQuMjY3IDE1Ny44NjctMjkuODY3IDgxLjA2Ny0zOC40IDExMC45MzMtMjEuMzMzIDExMC45MzMtMjEuMzMzbC02NCA0NTYuNTMzek03OTMuNiAyMjQuMDAxYy00Mi42NjcgMjEuMzMzLTg5LjYgMzQuMTMzLTE0MC44IDM0LjEzMy04LjUzMyAwLTIxLjMzMyAwLTI5Ljg2NyAwLTQyLjY2Ny00LjI2Ny04MS4wNjctMTcuMDY3LTExNS4yLTQyLjY2Ny0zNC4xMzMgMjUuNi03Mi41MzMgMzguNC0xMTUuMiA0Mi42NjctMTIuOCAwLTIxLjMzMyAwLTM0LjEzMyAwLTQ2LjkzMyAwLTkzLjg2Ny04LjUzMy0xMzYuNTMzLTI5Ljg2Ny0yMS4zMzMtMTIuOC00Ni45MzMtMjEuMzMzLTcyLjUzMy0yNS42bDY0IDQxMy44NjdjNDYuOTMzIDI1LjYgOTguMTMzIDM4LjQgMTQ5LjMzMyA0Mi42NjcgNDYuOTMzIDAgOTMuODY3LTguNTMzIDEzNi41MzMtMjUuNmwxMi44LTguNTMzIDEyLjggNC4yNjdjNDIuNjY3IDE3LjA2NyA4OS42IDI1LjYgMTM2LjUzMyAyNS42IDUxLjItNC4yNjcgMTAyLjQtMTcuMDY3IDE0OS4zMzMtNDIuNjY3bDU5LjczMy00MTguMTMzYy0yOS44NjcgOC41MzMtNTEuMiAxNy4wNjctNzYuOCAyOS44Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNzsiIGdseXBoLW5hbWU9InR1dG9yaWFscy1pY29uIiBkYXRhLXRhZ3M9InR1dG9yaWFscy1pY29uIiBkPSJNODg3LjQ2OCA1MzcuNTk4bC0zNzUuNDY3LTExMC45MzNoLTQuMjY3bC0yMTcuNiA2OC4yNjdjLTIxLjMzMy0yNS42LTM0LjEzMy01OS43MzMtMzQuMTMzLTk4LjEzMyAyMS4zMzMtMTIuOCAyNS42LTM4LjQgMTIuOC01OS43MzMtNC4yNjctNC4yNjctOC41MzMtOC41MzMtMTIuOC0xMi44bDE3LjA2Ny0xNDUuMDY3YzAtNC4yNjcgMC00LjI2Ny00LjI2Ny04LjUzMyAwIDAgMCAwLTQuMjY3IDBoLTY0Yy00LjI2NyAwLTQuMjY3IDAtOC41MzMgNC4yNjcgMCA0LjI2Ny00LjI2NyA0LjI2Ny00LjI2NyA4LjUzM2wxNy4wNjcgMTQ1LjA2N2MtMTIuOCA4LjUzMy0xNy4wNjcgMjEuMzMzLTE3LjA2NyAzNC4xMzMgMCAxNy4wNjcgOC41MzMgMjkuODY3IDIxLjMzMyAzOC40IDAgMzguNCAxMi44IDc2LjggMzQuMTMzIDExMC45MzNsLTEwNi42NjcgMjkuODY3Yy04LjUzMyA0LjI2Ny04LjUzMyA4LjUzMy04LjUzMyAxNy4wNjcgMCA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2N2wzNzUuNDY3IDExOS40NjdoNC4yNjdsMzc1LjQ2Ny0xMjMuNzMzYzQuMjY3IDAgOC41MzMtNC4yNjcgOC41MzMtOC41MzNzLTQuMjY3LTguNTMzLTguNTMzLTEyLjh6TTcyNS4zMzQgMzQxLjMzMmM0LjI2Ny00Ni45MzMtOTMuODY3LTg1LjMzMy0yMTMuMzMzLTg1LjMzM3MtMjEzLjMzMyAzOC40LTIxMy4zMzMgODUuMzMzbDQuMjY3IDEwNi42NjcgMTkyLTY0YzQuMjY3IDAgMTIuOCAwIDE3LjA2NyAwczEyLjggMCAxNy4wNjcgNC4yNjdsMTkyIDU5LjczMyA0LjI2Ny0xMDYuNjY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDg7IiBnbHlwaC1uYW1lPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZGF0YS10YWdzPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZD0iTTUxMiA3NjguMDE3Yy0xODguNSAwLTM0MS4zLTE1Mi44LTM0MS4zLTM0MS4zczE1Mi44LTM0MS40IDM0MS4zLTM0MS40IDM0MS4zIDE1Mi44IDM0MS4zIDM0MS4zLTE1Mi44IDM0MS40LTM0MS4zIDM0MS40djB6TTUxMiAxMTMuOTE3Yy0xNzIuNyAwLTMxMi43IDE0MC0zMTIuNyAzMTIuN3MxNDAgMzEyLjcgMzEyLjcgMzEyLjdjMTcyLjcgMCAzMTIuNy0xNDAgMzEyLjctMzEyLjctMC4yLTE3Mi42LTE0MC4xLTMxMi41LTMxMi43LTMxMi43djB6TTUxMiA2NzYuMjE3Yy0xMzcuOSAwLTI0OS42LTExMS44LTI0OS42LTI0OS42czExMS43LTI0OS42IDI0OS42LTI0OS42IDI0OS42IDExMS44IDI0OS42IDI0OS42LTExMS44IDI0OS42LTI0OS42IDI0OS42djB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwOTsiIGdseXBoLW5hbWU9Imljb24taW5mbyIgZGF0YS10YWdzPSJpY29uLWluZm8iIGQ9Ik00NjguODc1IDU2NS45NzRoODcuNDY3YzAuMDI4IDAgMC4wNjIgMCAwLjA5NSAwIDYuMDU2IDAgMTEuNDk5IDIuNjI5IDE1LjI0OCA2LjgwOCAzLjk3OSA0LjE1IDYuNDE5IDkuNzY5IDYuNDE5IDE1Ljk1NyAwIDAuMDk3LTAuMDAxIDAuMTk0LTAuMDAyIDAuMjl2NzAuMzg1YzAuMDAxIDAuMDgyIDAuMDAyIDAuMTc5IDAuMDAyIDAuMjc2IDAgNi4xODgtMi40NCAxMS44MDYtNi40MDkgMTUuOTQ2LTMuNzU5IDQuMTktOS4yMDEgNi44MTktMTUuMjU3IDYuODE5LTAuMDMzIDAtMC4wNjcgMC0wLjEgMGgtODcuNDYyYy0wLjAyOCAwLTAuMDYyIDAtMC4wOTUgMC02LjA1NiAwLTExLjQ5OS0yLjYyOS0xNS4yNDgtNi44MDgtMy45NzktNC4xNS02LjQxOS05Ljc2OS02LjQxOS0xNS45NTcgMC0wLjA5NyAwLjAwMS0wLjE5NCAwLjAwMi0wLjI5di02OS45NTljLTAuMDAxLTAuMDgyLTAuMDAyLTAuMTc5LTAuMDAyLTAuMjc2IDAtNi4xODggMi40NC0xMS44MDYgNi40MDktMTUuOTQ2IDMuNzE1LTQuMzczIDkuMi03LjE1OSAxNS4zMzgtNy4yNDV6TTU5OS4wMDggMjYzLjA0MWgtMjIuMTg3djIwOS45MmMwLjAwMSAwLjA4MiAwLjAwMiAwLjE3OSAwLjAwMiAwLjI3NiAwIDYuMTg4LTIuNDQgMTEuODA2LTYuNDA5IDE1Ljk0Ni0zLjc1OSA0LjE5LTkuMjAxIDYuODE5LTE1LjI1NyA2LjgxOS0wLjAzMyAwLTAuMDY3IDAtMC4xIDBoLTEzMC4xMjhjLTAuMDI4IDAtMC4wNjIgMC0wLjA5NSAwLTYuMDU2IDAtMTEuNDk5LTIuNjI5LTE1LjI0OC02LjgwOC0zLjk3OS00LjE1LTYuNDE5LTkuNzY5LTYuNDE5LTE1Ljk1NyAwLTAuMDk3IDAuMDAxLTAuMTk0IDAuMDAyLTAuMjl2LTQ2LjQ5MmMtMC4wMDEtMC4wODItMC4wMDItMC4xNzktMC4wMDItMC4yNzYgMC02LjE4OCAyLjQ0LTExLjgwNiA2LjQwOS0xNS45NDYgMy43NTktNC4xOSA5LjIwMS02LjgxOSAxNS4yNTctNi44MTkgMC4wMzMgMCAwLjA2NyAwIDAuMSAwaDIyLjE4MnYtMTM5Ljk0N2gtMjIuMTg3Yy0wLjAyOCAwLTAuMDYyIDAtMC4wOTUgMC02LjA1NiAwLTExLjQ5OS0yLjYyOS0xNS4yNDgtNi44MDgtMy45NzktNC4xNS02LjQxOS05Ljc2OS02LjQxOS0xNS45NTcgMC0wLjA5NyAwLjAwMS0wLjE5NCAwLjAwMi0wLjI5di00Ni40OTJjLTAuMDAxLTAuMDgyLTAuMDAyLTAuMTc5LTAuMDAyLTAuMjc2IDAtNi4xODggMi40NC0xMS44MDYgNi40MDktMTUuOTQ2IDMuNzU5LTQuMTkgOS4yMDEtNi44MTkgMTUuMjU3LTYuODE5IDAuMDMzIDAgMC4wNjcgMCAwLjEgMGgxNzQuMDc1YzAuMDI4IDAgMC4wNjIgMCAwLjA5NSAwIDYuMDU2IDAgMTEuNDk5IDIuNjI5IDE1LjI0OCA2LjgwOCAzLjk3OSA0LjE1IDYuNDE5IDkuNzY5IDYuNDE5IDE1Ljk1NyAwIDAuMDk3LTAuMDAxIDAuMTk0LTAuMDAyIDAuMjl2NDYuMDY1YzAuMDQzIDAuNTI3IDAuMDY3IDEuMTQxIDAuMDY3IDEuNzYxIDAgNS4zMDItMS43OTEgMTAuMTg1LTQuOCAxNC4wNzktMy43NDIgNC40MjQtOS4zNiA3LjI0Ny0xNS42MzYgNy4yNDctMC40ODkgMC0wLjk3NS0wLjAxNy0xLjQ1Ni0wLjA1MXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBhOyIgZ2x5cGgtbmFtZT0icGFzdGUiIGRhdGEtdGFncz0icGFzdGUiIGQ9Ik0zOTQuNDAyIDc0NS4wNjdoLTc1LjMzM2MtNjUuODY3IDAtMTE5LjItNTMuMzMzLTExOS4yLTExOS4ydi0yODguNTMzYzAtNTYuNCAzNy42LTEwMC40IDg3Ljg2Ny0xMTZ2NjkuMDY3Yy0xNS43MzMgOS40NjctMjUuMDY3IDI1LjA2Ny0yNS4wNjcgNDcuMDY3djI4OC40YzAgMzEuMzMzIDI1LjA2NyA1Ni40IDU2LjQgNTYuNGgxMzEuNzMzYzAgMCAwIDAgMy4yIDMuMnYwYzAgMzEuMzMzLTI4LjI2NyA1OS42LTU5LjYgNTkuNnpNNzA0LjgwMiA2MzUuMmMwIDAtMjguMjY3IDAtNDAuOCAwLTEyLjUzMyAzNC41MzMtNDMuODY3IDU5LjYtODQuNjY3IDU5LjZzLTY5LjA2Ny0yNS4wNjctODEuNi01OS42Yy0xMi41MzMgMC00MC44IDAtNDAuOCAwLTY1Ljg2NyAwLTExOS4yLTUzLjMzMy0xMTkuMi0xMTkuMnYtMjg4LjUzM2MwLTY1Ljg2NyA1My4zMzMtMTE5LjIgMTE5LjItMTE5LjJoMjQ3Ljg2N2M2NS44NjcgMCAxMTkuMiA1My4zMzMgMTE5LjIgMTE5LjJ2Mjg1LjQ2N2MzLjIgNjUuODY3LTUzLjIgMTIyLjI2Ny0xMTkuMiAxMjIuMjY3ek01ODIuNTM1IDY0Ny44NjdjMjIgMCA0MC44LTE4LjggNDAuOC00MC44cy0xOC44LTQwLjgtNDAuOC00MC44Yy0yMiAwLTQwLjggMTguOC00MC44IDQwLjhzMTUuNzMzIDQwLjggNDAuOCA0MC44ek03NjQuNDAyIDIyNC40YzAtMzEuMzMzLTI1LjA2Ny01Ni40LTU2LjQtNTYuNGgtMjUwLjkzM2MtMzEuMzMzIDAtNTYuNCAyNS4wNjctNTYuNCA1Ni40djI4OC41MzNjMCAxOC44IDkuNDY3IDM3LjYgMjUuMDY3IDQ3LjA2N3YwYzAtNDMuODY3IDM0LjUzMy03OC40IDc4LjQtNzguNGgxNjBjNDMuODY3IDAgNzguNCAzNC41MzMgNzguNCA3OC40djBjMTIuNTMzLTkuNDY3IDIyLTI4LjI2NyAyMi00Ny4wNjd2LTI4OC41MzN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwYjsiIGdseXBoLW5hbWU9InJldXNlIiBkYXRhLXRhZ3M9InJldXNlIiBkPSJNNzM0Ljk3NCA2MjQuNzUxYy01NC42MDUgNjEuNjE5LTEzNC4xMjMgMTAwLjU3My0yMjIuOTc3IDEwMC41NzMtMTY0LjkzNiAwLTI5OC42NjEtMTMzLjcyNC0yOTguNjYxLTI5OC42NjFoNzQuNjY3YzAgMTIzLjcyMSAxMDAuMjcyIDIyMy45OTMgMjIzLjk5MyAyMjMuOTkzIDY4LjIxNCAwIDEyOC43NDctMzAuOTYgMTY5Ljc2Ni03OS4xMTlsLTcwLjIxMy03MC4yMTNoMTk5LjEwOXYxOTkuMTA5bC03NS42ODktNzUuNjg5ek01MTEuOTk5IDIwMi42NzFjLTY4LjIxNCAwLTEyOC43NDcgMzAuOTYtMTY5Ljc2NiA3OS4xMTlsNzAuMjEzIDcwLjIxM2gtMTk5LjEwOXYtMTk5LjEwOWw3NS42ODkgNzUuNjg5YzU0LjYwNS02MS42MTkgMTM0LjEyMy0xMDAuNTczIDIyMi45NzctMTAwLjU3MyAxNjQuOTM2IDAgMjk4LjY2MSAxMzMuNzI0IDI5OC42NjEgMjk4LjY2MWgtNzQuNjY3YzAtMTIzLjcyMS0xMDAuMjcyLTIyMy45OTMtMjIzLjk5My0yMjMuOTkzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGM7IiBnbHlwaC1uYW1lPSJpbmZvLW91dGxpbmVkIiBkYXRhLXRhZ3M9ImluZm8tb3V0bGluZWQiIGQ9Ik00NjcuMTk5IDE4MS4zMzZoODkuNTk5djI2OC44aC04OS41OTl2LTI2OC44ek01MTIgODUzLjMzNWMtMjQ3LjI5NiAwLTQ0OC4wMDEtMjAwLjcwNS00NDguMDAxLTQ0OC4wMDFzMjAwLjcwNS00NDguMDAxIDQ0OC4wMDEtNDQ4LjAwMSA0NDguMDAxIDIwMC43MDUgNDQ4LjAwMSA0NDguMDAxLTIwMC43MDUgNDQ4LjAwMS00NDguMDAxIDQ0OC4wMDF6TTUxMiA0Ni45MzZjLTE5Ny41NjggMC0zNTguMzk4IDE2MC44My0zNTguMzk4IDM1OC4zOThzMTYwLjgzIDM1OC4zOTggMzU4LjM5OCAzNTguMzk4IDM1OC4zOTgtMTYwLjgzIDM1OC4zOTgtMzU4LjM5OC0xNjAuODMtMzU4LjM5OC0zNTguMzk4LTM1OC4zOTh6TTQ2Ny4xOTkgNTM5LjczNGg4OS41OTl2ODkuNTk5aC04OS41OTl2LTg5LjU5OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBkOyIgZ2x5cGgtbmFtZT0ic3Bpbm5lciIgZGF0YS10YWdzPSJzcGlubmVyIiBkPSJNNjAwIDgwOC4wMDFjMC00OC42MDItMzkuMzk4LTg4LTg4LTg4cy04OCAzOS4zOTgtODggODggMzkuMzk4IDg4IDg4IDg4IDg4LTM5LjM5OCA4OC04OHpNNTEyIDEzMy4zMzNjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4LTM5LjM5OCA4OC04OCA4OHpNODkzLjMzNCA1MTQuNjY3Yy00OC42MDIgMC04OC0zOS4zOTgtODgtODhzMzkuMzk4LTg4IDg4LTg4IDg4IDM5LjM5OCA4OCA4OC0zOS4zOTggODgtODggODh6TTIxOC42NjYgNDI2LjY2N2MwIDQ4LjYwMi0zOS4zOTggODgtODggODhzLTg4LTM5LjM5OC04OC04OCAzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4ek0yNDIuMzU3IDI0NS4wMjRjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4YzAgNDguNi0zOS40IDg4LTg4IDg4ek03ODEuNjQzIDI0NS4wMjRjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4YzAgNDguNi0zOS4zOTggODgtODggODh6TTI0Mi4zNTcgNzg0LjMxYy00OC42MDIgMC04OC0zOS4zOTgtODgtODhzMzkuMzk4LTg4IDg4LTg4IDg4IDM5LjM5OCA4OCA4OC0zOS40IDg4LTg4IDg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGU7IiBnbHlwaC1uYW1lPSJjb3B5LWVuYWJsZWQiIGRhdGEtdGFncz0iY29weS1lbmFibGVkIiBkPSJNNjE0LjUyNSA4MDkuMjkyaC0zMTcuNjcyYy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC00My44MTcgMjAuODgtODIuODQyIDUzLjIzMS0xMDcuODN2NzAuMzQ2Yy00LjQ1IDExLjI5Ny03LjAxNiAyMy45NjItNy4wMTYgMzcuNDg0djM3MC4zODhjMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjMTUuMjMyIDAgMjkuNjExLTMuNzY2IDQyLjEwNy0xMC42MTNoNjguMjk0Yy0yNC42NDYgMzQuNDAyLTY1LjAzOSA1Ni45OTctMTEwLjU3IDU2Ljk5N3pNNjc0LjQzMSAyNjcuNDAzaC0yMDkuMzI3Yy0xNC43MjEgMC0yMy4xMDUtOC4zODgtMjMuMTA1LTIzLjEwNXM4LjM4OC0yMy4xMDUgMjMuMTA1LTIzLjEwNWgyMDkuMzI3YzExLjEyNCAwIDIzLjEwNSA4Ljg5OSAyMy4xMDUgMjMuMTA1IDAgMTQuNzIxLTguMzg4IDIzLjEwNS0yMy4xMDUgMjMuMTA1ek02NzQuNDMxIDM4OC4yNDRoLTIwOS4zMjdjLTE0LjcyMSAwLTIzLjEwNS04LjM4OC0yMy4xMDUtMjMuMTA1czguMzg4LTIzLjEwNSAyMy4xMDUtMjMuMTA1aDIwOS4zMjdjMTEuMTI0IDAgMjMuMTA1IDguODk5IDIzLjEwNSAyMy4xMDUgMCAxNC43MjEtOC4zODggMjMuMTA1LTIzLjEwNSAyMy4xMDV6TTcyNi45NzggNjg2LjIzaC0zMTguMDE0Yy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC03NC45NjggNjAuOTMxLTEzNS45IDEzNS45LTEzNS45djBoMzE4LjE4M2M3NC45NjggMCAxMzUuOSA2MC45MzEgMTM1LjkgMTM1Ljl2MzcwLjM4OGMtMC4zNDIgNzQuOTY4LTYxLjI3MyAxMzUuOS0xMzYuMDczIDEzNS45ek04MTYuNDk0IDE4My44NzhjMC00OS4yOTItNDAuMjI0LTg5LjUxNi04OS41MTYtODkuNTE2aC0zMTguMTgzYy00OS4yOTIgMC04OS41MTYgNDAuMjI0LTg5LjUxNiA4OS41MTZ2MzY2LjQ0OWMwIDQ5LjI5MiA0MC4yMjQgODkuNTE2IDg5LjUxNiA4OS41MTZoMzE4LjAxNGM0OS4yOTIgMCA4OS41MTYtNDAuMjI0IDg5LjUxNi04OS41MTZ2LTM0OS4zMzRoMC4xNzN2LTE3LjExNXpNNjc0LjQzMSA1MDkuMDgxaC0yMDkuMzI3Yy0xNC43MjEgMC0yMy4xMDUtOC4zODgtMjMuMTA1LTIzLjEwNXM4LjM4OC0yMy4xMDUgMjMuMTA1LTIzLjEwNWgyMDkuMzI3YzExLjEyNCAwIDIzLjEwNSA4Ljg5OSAyMy4xMDUgMjMuMTA1IDAgMTQuNzIxLTguMzg4IDIzLjEwNS0yMy4xMDUgMjMuMTA1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGY7IiBnbHlwaC1uYW1lPSJjb3B5LWRpc2FibGVkIiBkYXRhLXRhZ3M9ImNvcHktZGlzYWJsZWQiIGQ9Ik02MTQuNTI1IDgwOS4yOTJoLTMxNy42NzJjLTc0Ljk2OCAwLTEzNS45LTYwLjkzMS0xMzUuOS0xMzUuOXYtMzcwLjM4OGMwLTQzLjgxNyAyMC44OC04Mi44NDIgNTMuMjMxLTEwNy44M3Y3MC4zNDZjLTQuNDUgMTEuMjk3LTcuMDE2IDIzLjk2Mi03LjAxNiAzNy40ODR2MzcwLjM4OGMwIDQ5LjI5MiA0MC4yMjQgODkuNTE2IDg5LjUxNiA4OS41MTZoMzE4LjAxNGMxNS4yMzIgMCAyOS42MTEtMy43NjYgNDIuMTA3LTEwLjYxM2g2OC4yOTRjLTI0LjY0NiAzNC40MDItNjUuMDM5IDU2Ljk5Ny0xMTAuNTcgNTYuOTk3ek03MjYuOTc4IDY4Ni4yM2gtMzE4LjAxNGMtNzQuOTY4IDAtMTM1LjktNjAuOTMxLTEzNS45LTEzNS45di0zNzAuMzg4YzAtNzQuOTY4IDYwLjkzMS0xMzUuOSAxMzUuOS0xMzUuOXYwaDMxOC4xODNjNzQuOTY4IDAgMTM1LjkgNjAuOTMxIDEzNS45IDEzNS45djM3MC4zODhjLTAuMzQyIDc0Ljk2OC02MS4yNzMgMTM1LjktMTM2LjA3MyAxMzUuOXpNODE2LjQ5NCAxODMuODc4YzAtNDkuMjkyLTQwLjIyNC04OS41MTYtODkuNTE2LTg5LjUxNmgtMzE4LjE4M2MtNDkuMjkyIDAtODkuNTE2IDQwLjIyNC04OS41MTYgODkuNTE2djM2Ni40NDljMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjNDkuMjkyIDAgODkuNTE2LTQwLjIyNCA4OS41MTYtODkuNTE2di0zNDkuMzM0aDAuMTczdi0xNy4xMTV6TTcwOS41MjEgNDY4Ljg1N2wtMjcuNzI4IDI3LjU1NS0xMDkuNTQ0LTEwOS41NDQtMTA5LjU0NCAxMDkuNTQ0LTI3LjU1NS0yNy41NTUgMTA5LjU0NC0xMDkuNTQ0LTEwOS41NDQtMTA5LjU0NCAyNy41NTUtMjcuNTU1IDEwOS41NDQgMTA5LjU0NCAxMDkuNTQ0LTEwOS41NDQgMjcuNTU1IDI3LjU1NS0xMDkuNTQ0IDEwOS41NDQgMTA5LjcxMyAxMDkuNTQ0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTA7IiBnbHlwaC1uYW1lPSJwYXN0ZS1lbmFibGVkIiBkYXRhLXRhZ3M9InBhc3RlLWVuYWJsZWQiIGQ9Ik00MTAuMjM3IDU3LjI3NWMtNzUuNDAyIDAtMTM2Ljc5MyA2MS4zOTQtMTM2Ljc5MyAxMzYuNzkzdjM3My4wMjVjMCA3NS40MDIgNjEuMzk0IDEzNi43OTMgMTM2Ljc5MyAxMzYuNzkzaDY0Ljg1bDQuMTUyIDExLjQxM2MxNS4yMTkgNDEuNjc4IDQ3LjczMiA2NS43MTUgODkuMjM3IDY1LjcxNSA0Mi43MTYgMCA3OC41MTItMjUuMDc1IDkzLjIxMi02NS43MTVsNC4xNTItMTEuNDEzaDY0Ljg1YzM3LjAwNyAwIDczLjQ5OS0xNS45MTEgOTkuNzg2LTQzLjU4MSAyNS41OTQtMjYuODA1IDM4LjczNy02MS4wNDggMzcuMDA3LTk2LjMyNnYtMzY5LjczOGMwLTc1LjQwMi02MS4zOTQtMTM2Ljc5My0xMzYuNzkzLTEzNi43OTNsLTMyMC40NTMtMC4xNzN6TTM2MC45NDcgNjM4LjY4OWMtMjQuNzI5LTE1LjA0Ni00MC42NC00NC42MTktNDAuNjQtNzUuNTc1di0zNzMuMDI1YzAtNDkuODA0IDQwLjQ2Ny05MC4yNzEgOTAuMjcxLTkwLjI3MWgzMjQuNDMyYzQzLjc1NCAwIDgwLjQxNSAzMS40NzYgODguNTQ1IDcyLjk4MWgxLjczbDAuMTczIDE3LjI5NXYzNzMuMDI1YzAgMjguNzA4LTE0LjE4MSA1OC42MjctMzUuMjc3IDc0LjcxbC0yNy42NyAyMC45MjN2LTE3LjQ2OGMwLTQ3LjIxMy0zNi44MzQtODQuMDQ4LTg0LjA0OC04NC4wNDhoLTIwNy4zNTFjLTQ3LjIxMyAwLTg0LjA0OCAzNi44MzQtODQuMDQ4IDg0LjA0OHYxMy40ODlsLTI2LjExMy0xNi4wODR6TTU3Mi40NTEgNzMzLjYzMWMtMjcuODQzIDAtNDguNzY2LTIwLjkyMy00OC43NjYtNDguNzY2IDAtMjYuNDU5IDIyLjMwNy00OC43NjYgNDguNzY2LTQ4Ljc2NnM0OC43NjYgMjIuMzA3IDQ4Ljc2NiA0OC43NjZjMC4xNzMgMjYuMjg2LTIyLjEzNCA0OC43NjYtNDguNzY2IDQ4Ljc2NnpNNDIyLjE2OSA3NjQuMDY5YzcuNzggOC44MTggMTYuNjAzIDE2Ljc3NiAyNC4zODMgMjUuNTk0IDEuOTAzIDIuMDc2IDMuODA2IDQuMzI1IDUuNzA5IDYuNDAxaC0xNTguNTg1Yy03NS43NDggMC0xMzcuMzEyLTYxLjU2Ny0xMzcuMzEyLTEzNy4zMTJ2LTM3NC4yMzZjMC00NC45NjUgMjEuNzg4LTg0LjkxMyA1NS4xNjctMTA5Ljk4OHY2OC44MjljLTUuNTM2IDEyLjI3OC04LjQ3MiAyNi4xMTMtOC40NzIgNDEuMTU5djM3NC4yMzZjMCA0OS44MDQgNDAuNjQgOTAuNDQ0IDkwLjQ0NCA5MC40NDRoMTE2LjU2MWMzLjYzMyA1LjE5IDcuNzggMTAuMjAyIDEyLjEwNSAxNC44NzN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMTsiIGdseXBoLW5hbWU9InBhc3RlLWRpc2FibGVkIiBkYXRhLXRhZ3M9InBhc3RlLWRpc2FibGVkIiBkPSJNNDEwLjIzNyA1Ny4yNzVjLTc1LjQwMiAwLTEzNi43OTMgNjEuMzk0LTEzNi43OTMgMTM2Ljc5M3YzNzMuMDI1YzAgNzUuNDAyIDYxLjM5NCAxMzYuNzkzIDEzNi43OTMgMTM2Ljc5M2g2NC44NWw0LjE1MiAxMS40MTNjMTUuMjE5IDQxLjY3OCA0Ny43MzIgNjUuNzE1IDg5LjIzNyA2NS43MTUgNDIuNzE2IDAgNzguNTEyLTI1LjA3NSA5My4yMTItNjUuNzE1bDQuMTUyLTExLjQxM2g2NC44NWMzNy4wMDcgMCA3My40OTktMTUuOTExIDk5Ljc4Ni00My41ODEgMjUuNTk0LTI2LjgwNSAzOC43MzctNjEuMDQ4IDM3LjAwNy05Ni4zMjZ2LTM2OS43MzhjMC03NS40MDItNjEuMzk0LTEzNi43OTMtMTM2Ljc5My0xMzYuNzkzbC0zMjAuNDUzLTAuMTczek0zNjAuOTQ3IDYzOC42ODljLTI0LjcyOS0xNS4wNDYtNDAuNjQtNDQuNjE5LTQwLjY0LTc1LjU3NXYtMzczLjAyNWMwLTQ5LjgwNCA0MC40NjctOTAuMjcxIDkwLjI3MS05MC4yNzFoMzI0LjQzMmM0My43NTQgMCA4MC40MTUgMzEuNDc2IDg4LjU0NSA3Mi45ODFoMS43M2wwLjE3MyAxNy4yOTV2MzczLjAyNWMwIDI4LjcwOC0xNC4xODEgNTguNjI3LTM1LjI3NyA3NC43MWwtMjcuNjcgMjAuOTIzdi0xNy40NjhjMC00Ny4yMTMtMzYuODM0LTg0LjA0OC04NC4wNDgtODQuMDQ4aC0yMDcuMzUxYy00Ny4yMTMgMC04NC4wNDggMzYuODM0LTg0LjA0OCA4NC4wNDh2MTMuNDg5bC0yNi4xMTMtMTYuMDg0ek01NzIuNDUxIDczMy42MzFjLTI3Ljg0MyAwLTQ4Ljc2Ni0yMC45MjMtNDguNzY2LTQ4Ljc2NiAwLTI2LjQ1OSAyMi4zMDctNDguNzY2IDQ4Ljc2Ni00OC43NjZzNDguNzY2IDIyLjMwNyA0OC43NjYgNDguNzY2YzAuMTczIDI2LjI4Ni0yMi4xMzQgNDguNzY2LTQ4Ljc2NiA0OC43NjZ6TTQyMi4xNjkgNzY0LjA2OWM3Ljc4IDguODE4IDE2LjYwMyAxNi43NzYgMjQuMzgzIDI1LjU5NCAxLjkwMyAyLjA3NiAzLjgwNiA0LjMyNSA1LjcwOSA2LjQwMWgtMTU4LjU4NWMtNzUuNzQ4IDAtMTM3LjMxMi02MS41NjctMTM3LjMxMi0xMzcuMzEydi0zNzQuMjM2YzAtNDQuOTY1IDIxLjc4OC04NC45MTMgNTUuMTY3LTEwOS45ODh2NjguODI5Yy01LjUzNiAxMi4yNzgtOC40NzIgMjYuMTEzLTguNDcyIDQxLjE1OXYzNzQuMjM2YzAgNDkuODA0IDQwLjY0IDkwLjQ0NCA5MC40NDQgOTAuNDQ0aDExNi41NjFjMy42MzMgNS4xOSA3Ljc4IDEwLjIwMiAxMi4xMDUgMTQuODczek03MTguNTg1IDQ2My44NDhsLTI4LjAxNiAyNy44NDMtMTEwLjY4LTExMC42OC0xMTAuNjggMTEwLjY4LTI3Ljg0My0yNy44NDMgMTEwLjY4LTExMC42OC0xMTAuNjgtMTEwLjY4IDI3Ljg0My0yNy44NDMgMTEwLjY4IDExMC42OCAxMTAuNjgtMTEwLjY4IDI3Ljg0MyAyNy44NDMtMTEwLjY4IDExMC42OCAxMTAuODUzIDExMC42OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTEyOyIgZ2x5cGgtbmFtZT0iYnV0dG9uLWRpc2FibGVkIiBkYXRhLXRhZ3M9ImJ1dHRvbi1kaXNhYmxlZCIgZD0iTTg1My4zMzMgNjk5LjI0NmwtNjguNzU0IDY4Ljc1NC0yNzIuNTc5LTI3Mi41NzktMjcyLjU3OSAyNzIuNTc5LTY4Ljc1NC02OC43NTQgMjcyLjU3OS0yNzIuNTc5LTI3Mi41NzktMjcyLjU3OSA2OC43NTQtNjguNzU0IDI3Mi41NzkgMjcyLjU3OSAyNzIuNTc5LTI3Mi41NzkgNjguNzU0IDY4Ljc1NC0yNzIuNTc5IDI3Mi41Nzl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMzsiIGdseXBoLW5hbWU9ImF1ZGlvLWljb24iIGRhdGEtdGFncz0iYXVkaW8taWNvbiIgZD0iTTQ3Mi44IDU5MC4ydi0zMTkuM2MwLTEwLjMtOC4zLTE4LjctMTguNi0xOC44LTUgMC05LjkgMi0xMy40IDUuNmwtOTcuOCA5Ny43aC03N2MtMTAuMyAwLjItMTguNyA4LjUtMTguOCAxOC44djExMi42YzAuMiAxMC4zIDguNSAxOC43IDE4LjggMTguOGg3Ni45bDk3LjggOTcuOGM3LjQgNy4zIDE5LjMgNy4yIDI2LjYtMC4yIDMuNC0zLjUgNS40LTguMSA1LjQtMTNoMC4xek01ODUuOSA0NzIuNmM4LjItMTIuNSAxMi42LTI3LjIgMTIuNi00Mi4xcy00LjQtMjkuNS0xMi42LTQyYy03LjktMTIuNi0xOS43LTIyLjQtMzMuNi0yNy45LTIuMy0xLjEtNC45LTEuNi03LjQtMS41LTUgMC05LjggMS45LTEzLjMgNS41LTMuOCAzLjUtNS45IDguNC01LjggMTMuNS0wLjEgMy44IDEuMiA3LjYgMy42IDEwLjVzNS4zIDUuNCA4LjYgNy40YzMuMyAyLjEgNi43IDQuMyAxMC4xIDYuOCAzLjYgMi44IDYuNiA2LjQgOC42IDEwLjUgNC43IDEwLjggNC43IDIzIDAgMzMuOC0yIDQuMS01IDcuNy04LjYgMTAuNS0zLjMgMi41LTYuNyA0LjctMTAuMSA2LjgtMy4zIDItNi4yIDQuNS04LjYgNy40LTIuNCAzLTMuNyA2LjctMy42IDEwLjUtMC4xIDUuMSAyLjEgMTAgNS44IDEzLjUgMy41IDMuNiA4LjMgNS41IDEzLjMgNS41IDIuNiAwLjEgNS4xLTAuNCA3LjQtMS41IDEzLjgtNSAyNS42LTE0LjYgMzMuNi0yNy4ydjB6TTY2My4zIDUxNC4zYzMzLjYtNTAuOCAzMy42LTExNi44IDAtMTY3LjYtMTYtMjUuMS0zOS4yLTQ0LjYtNjYuNi01Ni4yLTIuNC0xLTQuOS0xLjUtNy40LTEuNS01LjIgMC0xMC4xIDIuMS0xMy42IDUuOC0zLjcgMy40LTUuOCA4LjMtNS44IDEzLjMgMCA3LjcgNC42IDE0LjYgMTEuNyAxNy41IDcuOCAzLjggMTUuNCA4LjIgMjIuNiAxMyA1MC42IDM2LjkgNjEuOCAxMDcuOCAyNC45IDE1OC40LTcgOS42LTE1LjQgMTgtMjQuOSAyNC45LTcuMiA0LjktMTQuNyA5LjMtMjIuNiAxMy4xLTcuMSAyLjktMTEuNyA5LjgtMTEuNyAxNy41IDAuMSAxMC40IDguNiAxOC45IDE5IDE5IDIuNiAwIDUuMy0wLjUgNy43LTEuNSAyNy4zLTExLjIgNTAuNi0zMC43IDY2LjctNTUuN3pNNzQxIDU1NS44YzY5LjMtMTA1LjEgNDAuMi0yNDYuNC02NC45LTMxNS43LTExLjItNy40LTIzLjEtMTMuOC0zNS40LTE5LjEtMi41LTEtNS4xLTEuNS03LjctMS41LTEwLjQgMC4yLTE4LjggOC42LTE5IDE5IDAuMyA3LjYgNC44IDE0LjQgMTEuNyAxNy41IDIuMiAxLjIgNC40IDIuMiA2LjcgMy4xczQuNSAxLjkgNi43IDMuMWM4LjQgNC41IDE2LjUgOS42IDI0LjMgMTUuMSAyNCAxNy42IDQzLjYgNDAuNyA1NyA2Ny4zIDI3LjMgNTMuOSAyNy4zIDExNy41IDAgMTcxLjQtMTMuNCAyNi43LTMzIDQ5LjgtNTcgNjcuNC03LjggNS41LTE1LjkgMTAuNi0yNC4zIDE1LjEtMi4yIDEuMi00LjQgMi4yLTYuNyAzLjFzLTQuNSAxLjktNi43IDMuMWMtNi45IDMuMi0xMS40IDkuOS0xMS43IDE3LjUgMC4zIDEwLjQgOC44IDE4LjYgMTkuMiAxOC43IDIuNiAwIDUuMy0wLjUgNy43LTEuNSA0MS0xNy4zIDc1LjktNDYuNSAxMDAuMy04My44aC0wLjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNDsiIGdseXBoLW5hbWU9ImF1ZGlvLXVwbG9hZC1pY29uIiBkYXRhLXRhZ3M9ImF1ZGlvLXVwbG9hZC1pY29uIiBkPSJNNzk2LjkgNTU3LjlsLTEwMi40IDEwNi42Yy0xMi44IDEyLjgtMzguNCAyMS4zLTU1LjUgMjEuM2gtMTQwLjhsMjEuMy00Mi43aDg5LjZ2LTEzNi41YzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDE0MC44di0zNDEuM2gtNDI2LjZ2MzI4LjZoLTQyLjd2LTM0MS4zYzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDQ0OGMxNy4xIDAgMjkuOSAxMi44IDI5LjkgMjkuOXYzODRjNC4yIDE3LTguNiAzOC40LTIxLjQgNTEuMnpNNjUxLjggNTE1LjJ2MTIzLjdjNC4zIDAgMTIuOC00LjMgMTIuOC04LjVsMTAyLjQtMTAyLjRjNC4zLTQuMyA0LjMtOC41IDguNS0xMi44aC0xMjMuN3pNMzYxLjcgNTMyLjN2MTM2LjVsNTkuNy01OS43YzguNS04LjUgMTcuMS00LjMgMjUuNiAwbDEyLjggMTIuOGM4LjUgOC41IDguNSAxNy4xIDAgMjUuNmwtMTE1LjIgMTA2LjZjLTguNSA4LjUtMTcuMSA4LjUtMjEuMyAwbC0xMTUuMi0xMTAuOWMtNC4zLTguNS00LjMtMTcuMSAwLTI1LjZsMTIuOC0xMi44YzguNS04LjUgMTcuMS04LjUgMjEuMyAwbDU5LjcgNTkuN3YtMTM2LjVjMC04LjUgOC41LTE3LjEgMTcuMS0xNy4xaDI1LjZjMCAwIDE3LjEgOC42IDE3LjEgMjEuNHpNNTMyLjcgNDAxLjh2LTE4OGMwLTUuMi01LjItMTAuNC01LjItMTAuNGgtNS4yYy01LjIgMC01LjIgMC0xMC40IDUuMmwtNTcuNSA1Ny40aC00N2MtNS4yIDAtMTAuNCA1LjItMTAuNCAxMC40djYyLjdjMCA1LjIgNS4yIDEwLjQgMTAuNCAxMC40aDQ3bDU3LjUgNTcuNWM1LjIgNS4yIDEyLjggOS43IDE2LjUgNnM0LjMtNiA0LjMtMTEuMnpNNjE2LjMgMjI5LjVjMjAuOSAyMC45IDMxLjMgNDcgMzEuMyA3OC4zcy0xMC40IDU3LjUtMzEuMyA3OC4zYy0xMC40IDEwLjQtMjAuOSAxMC40LTMxLjMgMHMtMTAuNC0yMC45IDAtMzEuM2MxMC40LTEwLjQgMTUuNy0yNi4xIDE1LjctNDdzLTUuMi0zMS4zLTE1LjctNDdjLTEwLjQtMTAuNC0xMC40LTIwLjkgMC0zMS4zIDUuMi01LjIgMTAuNC01LjIgMTUuNy01LjJzMTAuNC0wLjEgMTUuNiA1LjJ6TTY4OS40IDE3Ny4yYzMxLjMgMzYuNiA0NyA3OC4zIDQ3IDEyNS40IDAgNDctMTUuNyA4OC44LTQ3IDEyNS40LTEwLjQgMTUuNy0yMC45IDE1LjctMzEuMyAxMC40LTEwLjQtMTAuNC0xMC40LTIwLjktNS4yLTMxLjMgMjAuOS0yNi4xIDM2LjYtNjIuNyAzNi42LTk5LjJzLTEwLjQtNzMuMS0zNi42LTk5LjJjLTEwLjQtMTAuNC01LjItMjYuMSA1LjItMzEuMyA1LjItNS4yIDEwLjQtNS4yIDE1LjctNS4yczEwLjQtMC4yIDE1LjYgNXoiIC8+CjwvZm9udD48L2RlZnM+PC9zdmc+) format("svg");font-weight:400;font-style:normal}html.h5p-iframe,html.h5p-iframe>body{font-family:Sans-Serif;width:100%;height:100%;margin:0;padding:0}.h5p-semi-fullscreen,.h5p-fullscreen,html.h5p-iframe .h5p-container{overflow:hidden}.h5p-content{position:relative;background:#fefefe;border:1px solid #EEE;border-bottom:none;box-sizing:border-box;-moz-box-sizing:border-box}.h5p-noselect{-khtml-user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none}html.h5p-iframe .h5p-content{font-size:16px;line-height:1.5em;width:100%;height:auto}html.h5p-iframe .h5p-fullscreen .h5p-content,html.h5p-iframe .h5p-semi-fullscreen .h5p-content{height:100%}.h5p-content.h5p-no-frame,.h5p-fullscreen .h5p-content,.h5p-semi-fullscreen .h5p-content{border:0}.h5p-container{position:relative;z-index:1}.h5p-iframe-wrapper.h5p-fullscreen{background-color:#000}body.h5p-semi-fullscreen{position:fixed;width:100%;height:100%}.h5p-container.h5p-semi-fullscreen{position:fixed;top:0;left:0;z-index:101;width:100%;height:100%;background-color:#fff}.h5p-content-controls{margin:0;position:absolute;right:0;top:0;z-index:3}.h5p-fullscreen .h5p-content-controls{display:none}.h5p-content-controls>a:link,.h5p-content-controls>a:visited,a.h5p-disable-fullscreen:link,a.h5p-disable-fullscreen:visited{color:#e5eef6}.h5p-enable-fullscreen:before{font-family:H5P;content:"\\e88c"}.h5p-disable-fullscreen:before{font-family:H5P;content:"\\e891"}.h5p-enable-fullscreen,.h5p-disable-fullscreen{cursor:pointer;color:#eee;background:rgb(0,0,0);background:rgba(0,0,0,.3);line-height:.975em;font-size:2em;width:1.125em;height:1em;text-indent:.04em}.h5p-disable-fullscreen{line-height:.925em;width:1.1em;height:.9em}.h5p-enable-fullscreen:focus,.h5p-disable-fullscreen:focus{outline-style:solid;outline-width:1px;outline-offset:.25em}.h5p-enable-fullscreen:hover,.h5p-disable-fullscreen:hover{background:rgba(0,0,0,.5)}.h5p-semi-fullscreen .h5p-enable-fullscreen{display:none}div.h5p-fullscreen{width:100%;height:100%}.h5p-iframe-wrapper{width:auto;height:auto}.h5p-fullscreen .h5p-iframe-wrapper,.h5p-semi-fullscreen .h5p-iframe-wrapper{width:100%;height:100%}.h5p-iframe-wrapper.h5p-semi-fullscreen{width:auto;height:auto;background:black;position:fixed;inset:0;z-index:100001}.h5p-iframe-wrapper.h5p-semi-fullscreen .buttons{position:absolute;top:0;right:0;z-index:20}.h5p-iframe-wrapper iframe.h5p-iframe{width:10px;min-width:100%;*width: 100%;height:100%;z-index:10;overflow:hidden;border:0;display:block}.h5p-content ul.h5p-actions{box-sizing:border-box;-moz-box-sizing:border-box;overflow:hidden;list-style:none;padding:0 10px;margin:0;height:25px;font-size:12px;background:#FAFAFA;border-top:1px solid #EEE;border-bottom:1px solid #EEE;clear:both;font-family:Sans-Serif}.h5p-fullscreen .h5p-actions,.h5p-semi-fullscreen .h5p-actions{display:none}.h5p-actions>.h5p-button{float:left;cursor:pointer;margin:0 .5em 0 0;background:none;padding:0 .75em 0 .25em;vertical-align:top;color:#999;text-decoration:none;outline:none;line-height:22px}.h5p-actions>.h5p-button:hover{color:#666}.h5p-actions>.h5p-button:active,.h5p-actions>.h5p-button:focus,.h5p-actions .h5p-link:active,.h5p-actions .h5p-link:focus{color:#666}.h5p-actions>.h5p-button:focus,.h5p-actions .h5p-link:focus{outline-style:solid;outline-width:thin;outline-offset:-2px;outline-color:#9ecaed}.h5p-actions>.h5p-button:before{font-family:H5P;font-size:20px;line-height:23px;vertical-align:bottom;padding-right:0}.h5p-actions>.h5p-button.h5p-export:before{content:"\\e90b"}.h5p-actions>.h5p-button.h5p-copyrights:before{content:"\\e88f"}.h5p-actions>.h5p-button.h5p-embed:before{content:"\\e892"}.h5p-actions .h5p-link{float:right;margin-right:0;font-size:2em;line-height:23px;overflow:hidden;color:#999;text-decoration:none;outline:none}.h5p-actions .h5p-link:before{font-family:H5P;content:"\\e88e";vertical-align:bottom}.h5p-actions>li{margin:0;list-style:none}.h5p-popup-dialog{position:absolute;top:0;left:0;width:100%;min-height:100%;z-index:100;padding:2em;box-sizing:border-box;-moz-box-sizing:border-box;opacity:0;-webkit-transition:opacity .2s;-moz-transition:opacity .2s;-o-transition:opacity .2s;transition:opacity .2s;background:#000;background:rgba(0,0,0,.75)}.h5p-popup-dialog.h5p-open{opacity:1}.h5p-popup-dialog .h5p-inner{box-sizing:border-box;-moz-box-sizing:border-box;background:#fff;height:100%;max-height:100%;position:relative}.h5p-popup-dialog .h5p-inner>h2{position:absolute;box-sizing:border-box;-moz-box-sizing:border-box;width:100%;margin:0;background:#eee;display:block;color:#656565;font-size:1.25em;padding:.325em .5em .25em;line-height:1.25em;border-bottom:1px solid #ccc;z-index:2}.h5p-popup-dialog .h5p-inner>h2>a{font-size:12px;margin-left:1em}.h5p-embed-dialog .h5p-inner,.h5p-reuse-dialog .h5p-inner,.h5p-content-user-data-reset-dialog .h5p-inner{min-width:316px;max-width:400px;left:50%;top:50%;transform:translate(-50%)}.h5p-embed-dialog .h5p-embed-code-container,.h5p-embed-size{resize:none;outline:none;width:100%;padding:.375em .5em .25em;margin:0;overflow:hidden;border:1px solid #ccc;box-shadow:0 1px 2px #d0d0d0 inset;font-size:.875em;letter-spacing:.065em;font-family:sans-serif;white-space:pre;line-height:1.5em;height:2.0714em;background:#f5f5f5;box-sizing:border-box;-moz-box-sizing:border-box}.h5p-embed-dialog .h5p-embed-code-container:focus{height:5em}.h5p-embed-size{width:3.5em;text-align:right;margin:.5em 0;line-height:2em}.h5p-popup-dialog .h5p-scroll-content{border-top:2.25em solid transparent;padding:1em;box-sizing:border-box;-moz-box-sizing:border-box;color:#555;z-index:1}.h5p-popup-dialog.h5p-open .h5p-scroll-content{overflow:auto;overflow-x:hidden;overflow-y:auto;height:100%}.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar{width:8px}.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-track{background:#e0e0e0}.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-thumb{box-shadow:0 0 10px #000 inset;border-radius:4px}.h5p-popup-dialog .h5p-close{font-size:2em;position:absolute;right:0;top:0;width:1.125em;height:1.125em;line-height:1.125em;color:#656565;cursor:pointer;text-indent:-.065em;z-index:3}.h5p-popup-dialog .h5p-close:after{font-family:H5P;content:"\\e894"}.h5p-popup-dialog .h5p-close:hover:after,.h5p-popup-dialog .h5p-close:focus:after{color:#454545}.h5p-popup-dialog .h5p-close:active:after{color:#252525}.h5p-poopup-dialog h2{margin:.25em 0 .5em}.h5p-popup-dialog h3{margin:.75em 0 .25em}.h5p-popup-dialog dl{margin:.25em 0 .75em}.h5p-popup-dialog dt{float:left;margin:0 .75em 0 0}.h5p-popup-dialog dt:after{content:":"}.h5p-popup-dialog dd{margin:0}.h5p-expander{cursor:pointer;font-size:1.125em;margin:.5em 0 0;display:inline-block}.h5p-expander:before{content:"+";width:1em;display:inline-block;font-weight:700}.h5p-expander.h5p-open:before{content:"-";text-indent:.125em}.h5p-expander:hover,.h5p-expander:focus{color:#303030}.h5p-expander:active{color:#202020}.h5p-expander-content{display:none}.h5p-expander-content p{margin:.5em 0}.h5p-content-copyrights{border-left:.25em solid #d0d0d0;margin-left:.25em;padding-left:.25em}.h5p-throbber{background:url(data:image/gif;base64,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) 10px center no-repeat;padding-left:38px;min-height:30px;line-height:30px}.h5p-dialog-ok-button{cursor:default;float:right;outline:none;border:2px solid #ccc;padding:.25em .75em .125em;background:#eee}.h5p-dialog-ok-button:hover,.h5p-dialog-ok-button:focus{background:#fafafa}.h5p-dialog-ok-button:active{background:#eeffee}.h5p-big-button{line-height:1.25;display:block;position:relative;cursor:pointer;width:100%;padding:1em 1em 1em 3.75em;text-align:left;border:1px solid #dedede;background:linear-gradient(#ffffff,#f1f1f2);border-radius:.25em}.h5p-big-button:before{font-family:h5p;content:"\\e893";line-height:1;font-size:3em;color:#2747f7;position:absolute;left:.125em;top:.125em}.h5p-copy-button:before{content:"\\e905"}.h5p-big-button:hover{border:1px solid #2747f7;background:#eff1fe}.h5p-big-button:active{border:1px solid #dedede;background:#dfe4fe}.h5p-button-title{color:#2747f7;font-size:15px;font-weight:700;margin-bottom:.5em}.h5p-button-description{color:#757575}.h5p-horizontal-line-text{border-top:1px solid #dadada;line-height:1;color:#474747;text-align:center;position:relative;margin:1.25em 0}.h5p-horizontal-line-text>span{background:white;padding:.5em;position:absolute;top:-1em;left:50%;transform:translate(-50%)}.h5p-toast{font-size:.75em;background-color:#000000e6;color:#fff;z-index:110;position:absolute;padding:0 .5em;line-height:2;border-radius:4px;white-space:nowrap;pointer-events:none;top:0;opacity:1;visibility:visible;transition:opacity 1s}.h5p-toast-disabled{opacity:0;visibility:hidden}.h5p-content code,.h5peditor code{color:#3d3d3d;background:#e0e0e0;border-radius:2px;padding:0 5px}.h5p-content pre>code,.h5peditor pre>code{background-color:#fafafa;padding:5px;display:block;line-height:normal;border:1px solid #c7c7c7;border-left-width:4px;max-width:100%;white-space:pre;overflow:auto}.h5peditor-semi-fullscreen{width:100%;height:100%;position:fixed;inset:0;z-index:101}iframe.h5peditor-semi-fullscreen{background:#fff;z-index:100001}.h5p-content.using-mouse *:not(textarea):focus{outline:none!important}\n';
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm.srcdoc ? _c("iframe", { directives: [{ name: "show", rawName: "v-show", value: !_vm.loading, expression: "!loading" }], ref: "iframe", staticStyle: { "width": "100%", "height": "100%", "border": "none" }, attrs: { "srcdoc": _vm.srcdoc }, on: { "load": _vm.addEventHandlers } }) : _vm._e(), _vm.loading ? [_vm._t("default")] : _vm.error ? [_vm._t("error", null, { "error": _vm.error })] : _vm._e()], 2);
};
var staticRenderFns = [];
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script = {
  name: "H5p",
  props: {
    src: {
      type: String,
      required: true
    },
    embed: {
      type: String,
      default: ""
    },
    resize: {
      type: String,
      default: ""
    },
    export: {
      type: String,
      default: ""
    },
    copy: {
      type: Boolean,
      default: false
    },
    copyright: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    css: {
      type: String,
      default: ""
    },
    l10n: {
      type: Object,
      default: () => ({})
    },
    integration: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      loading: true,
      error: void 0,
      srcdoc: ""
    };
  },
  computed: {
    path() {
      return this.src.endsWith("/") ? this.src.slice(0, -1) : this.src;
    }
  },
  async mounted() {
    let h5p2;
    let content;
    let libraries;
    try {
      h5p2 = await this.getJSON("h5p.json");
      content = await this.getJSON("content", "content.json");
      libraries = await this.loadDependencies(h5p2.preloadedDependencies);
    } catch (e) {
      this.error = e;
      this.loading = false;
      return;
    }
    const { machineName, majorVersion, minorVersion } = h5p2.preloadedDependencies.find((dep) => dep.machineName === h5p2.mainLibrary);
    const h5pIntegration = __spreadValues({
      l10n: {
        H5P: Object.assign({}, l10n.H5P, this.l10n)
      },
      url: this.path,
      contents: {
        "cid-default": {
          embedCode: this.embed,
          resizeCode: this.resize,
          exportUrl: this.export,
          fullScreen: this.fullscreen,
          library: `${machineName} ${majorVersion}.${minorVersion}`,
          jsonContent: JSON.stringify(content),
          url: this.path,
          displayOptions: {
            frame: Boolean(this.export || this.embed || this.copyright || this.icon),
            export: Boolean(this.export),
            embed: Boolean(this.embed),
            copyright: this.copyright,
            icon: this.icon,
            copy: this.copy
          },
          metadata: {
            license: h5p2.license,
            defaultLanguage: h5p2.defaultLanguage,
            title: h5p2.title
          }
        }
      },
      _libraryPaths: Object.fromEntries(Object.entries(libraries).map(([id, lib]) => [id, lib.path]))
    }, this.integration);
    const { styles, scripts } = this.sortDependencies(libraries);
    const endScript = "<\/script>";
    const contentStyles = styles.map((style) => `<link rel="stylesheet" href="${style}">`).join("\n");
    const contentScripts = scripts.map((script) => `<script src="${script}">${endScript}`).join("\n");
    this.srcdoc = `<!doctype html>
<html class="h5p-iframe">
  <head>
    <base target="_parent">
    <style>${frameStyle}</style>
    ${contentStyles}
    <style>${this.css}</style>
    <script>H5PIntegration = ${JSON.stringify(h5pIntegration)};var H5P = H5P || {};H5P.externalEmbed = true;${endScript}
    <script>${frameScript}${endScript}
    ${contentScripts}
  </head>
  <body>
    <div class="h5p-content" data-content-id="default"/>
  </body>
</html>`;
  },
  methods: {
    addEventHandlers() {
      this.$refs.iframe.contentWindow.H5P.externalDispatcher.on("*", (ev) => {
        this.$emit(ev.type.toLowerCase(), ev.data);
      });
      this.loading = false;
    },
    async getJSON(...url) {
      const resp = await fetch(this.path + "/" + url.join("/"), { credentials: "include" });
      if (!resp.ok) {
        let body = {};
        try {
          body = await resp.json();
        } catch {
        }
        throw new FetchError(resp, body);
      }
      return resp.json();
    },
    async loadDependencies(deps, libraryMap = {}) {
      await Promise.all(deps.map(async ({ machineName, majorVersion, minorVersion }) => {
        const id = `${machineName}-${majorVersion}.${minorVersion}`;
        if (libraryMap[id])
          return;
        try {
          libraryMap[id] = {
            library: await this.getJSON(id, "library.json"),
            path: id
          };
        } catch {
          libraryMap[id] = {
            library: await this.getJSON(machineName, "library.json"),
            path: machineName
          };
        }
        const libDeps = libraryMap[id].library.preloadedDependencies;
        if (libDeps) {
          this.loadDependencies(libDeps, libraryMap);
          libraryMap[id].dependencies = libDeps.map(({ machineName: machineName2, majorVersion: majorVersion2, minorVersion: minorVersion2 }) => `${machineName2}-${majorVersion2}.${minorVersion2}`);
        }
      }));
      return libraryMap;
    },
    sortDependencies(libraries) {
      const sorter = new Toposort();
      Object.entries(libraries).forEach(([id, { dependencies = [] }]) => sorter.add(id, dependencies));
      const sorted = sorter.sort().reverse();
      const styles = sorted.map((id) => libraries[id]).map(({ path, library }) => {
        var _a;
        return (_a = library.preloadedCss) == null ? void 0 : _a.map((file) => `${this.path}/${path}/${file.path}`);
      }).flat(1).filter(Boolean);
      const scripts = sorted.map((id) => libraries[id]).map(({ path, library }) => {
        var _a;
        return (_a = library.preloadedJs) == null ? void 0 : _a.map((file) => `${this.path}/${path}/${file.path}`);
      }).flat(1).filter(Boolean);
      return { styles, scripts };
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var h5p = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export { h5p as default };
//# sourceMappingURL=vue-h5p.js.map
