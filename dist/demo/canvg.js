(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvg"],{

/***/ "++4Y":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/descriptors.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ "/TZh":
/*!**************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "/dXc":
/*!*************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/math-trunc.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "/pbl":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "eE3R");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "013W":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/document-all.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "0B/8":
/*!*************************************************************!*\
  !*** ./node_modules/svg-pathdata/lib/SVGPathData.module.js ***!
  \*************************************************************/
/*! exports provided: COMMAND_ARG_COUNTS, SVGPathData, SVGPathDataParser, SVGPathDataTransformer, encodeSVGPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_ARG_COUNTS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathData", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataParser", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataTransformer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSVGPath", function() { return e; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _t = function t(r, e) {
  return (_t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (t, r) {
    t.__proto__ = r;
  } || function (t, r) {
    for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
  })(r, e);
};

function r(r, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

  function i() {
    this.constructor = r;
  }

  _t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}

function e(t) {
  var r = "";
  Array.isArray(t) || (t = [t]);

  for (var e = 0; e < t.length; e++) {
    var i = t[e];
    if (i.type === _.CLOSE_PATH) r += "z";else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y;else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y;else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y;else {
      if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
      r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
    }
  }

  return r;
}

function i(t, r) {
  var e = t[0],
      i = t[1];
  return [e * Math.cos(r) - i * Math.sin(r), e * Math.sin(r) + i * Math.cos(r)];
}

function a() {
  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];

  for (var e = 0; e < t.length; e++) if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof t[e] + " == typeof " + t[e]);

  return !0;
}

var n = Math.PI;

function o(t, r, e) {
  t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
  var a = t.rX,
      o = t.rY,
      s = t.x,
      u = t.y;
  a = Math.abs(t.rX), o = Math.abs(t.rY);
  var h = i([(r - s) / 2, (e - u) / 2], -t.xRot / 180 * n),
      c = h[0],
      y = h[1],
      p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
  1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
  var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2),
      O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)),
      l = a * y / o * O,
      T = -o * c / a * O,
      v = i([l, T], t.xRot / 180 * n);
  t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
}

function s(t, r, e) {
  a(t, r, e);
  var i = t * t + r * r - e * e;
  if (0 > i) return [];
  if (0 === i) return [[t * e / (t * t + r * r), r * e / (t * t + r * r)]];
  var n = Math.sqrt(i);
  return [[(t * e + r * n) / (t * t + r * r), (r * e - t * n) / (t * t + r * r)], [(t * e - r * n) / (t * t + r * r), (r * e + t * n) / (t * t + r * r)]];
}

var u,
    h = Math.PI / 180;

function c(t, r, e) {
  return (1 - e) * t + e * r;
}

function y(t, r, e, i) {
  return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
}

function p(t, r, e, i) {
  var a = 1e-6,
      n = r - t,
      o = e - r,
      s = 3 * n + 3 * (i - e) - 6 * o,
      u = 6 * (o - n),
      h = 3 * n;
  return Math.abs(s) < a ? [-h / u] : function (t, r, e) {
    void 0 === e && (e = 1e-6);
    var i = t * t / 4 - r;
    if (i < -e) return [];
    if (i <= e) return [-t / 2];
    var a = Math.sqrt(i);
    return [-t / 2 - a, -t / 2 + a];
  }(u / s, h / s, a);
}

function m(t, r, e, i, a) {
  var n = 1 - a;
  return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
}

!function (t) {
  function r() {
    return u(function (t, r, e) {
      return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
    });
  }

  function e() {
    var t = NaN,
        r = NaN,
        e = NaN,
        i = NaN;
    return u(function (a, n, o) {
      return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, t = isNaN(t) ? n : t, r = isNaN(r) ? o : r, a.x1 = a.relative ? n - t : 2 * n - t, a.y1 = a.relative ? o - r : 2 * o - r), a.type & _.CURVE_TO ? (t = a.relative ? n + a.x2 : a.x2, r = a.relative ? o + a.y2 : a.y2) : (t = NaN, r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, e = isNaN(e) ? n : e, i = isNaN(i) ? o : i, a.x1 = a.relative ? n - e : 2 * n - e, a.y1 = a.relative ? o - i : 2 * o - i), a.type & _.QUAD_TO ? (e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (e = NaN, i = NaN), a;
    });
  }

  function n() {
    var t = NaN,
        r = NaN;
    return u(function (e, i, a) {
      if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, t = isNaN(t) ? i : t, r = isNaN(r) ? a : r, e.x1 = e.relative ? i - t : 2 * i - t, e.y1 = e.relative ? a - r : 2 * a - r), e.type & _.QUAD_TO) {
        t = e.relative ? i + e.x1 : e.x1, r = e.relative ? a + e.y1 : e.y1;
        var n = e.x1,
            o = e.y1;
        e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
      } else t = NaN, r = NaN;

      return e;
    });
  }

  function u(t) {
    var r = 0,
        e = 0,
        i = NaN,
        a = NaN;
    return function (n) {
      if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      var o = t(n, r, e, i, a);
      return n.type & _.CLOSE_PATH && (r = i, e = a), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & _.MOVE_TO && (i = r, a = e), o;
    };
  }

  function O(t, r, e, i, n, o) {
    return a(t, r, e, i, n, o), u(function (a, s, u, h) {
      var c = a.x1,
          y = a.x2,
          p = a.relative && !isNaN(h),
          m = void 0 !== a.x ? a.x : p ? 0 : s,
          O = void 0 !== a.y ? a.y : p ? 0 : u;

      function l(t) {
        return t * t;
      }

      a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
      var T = t * i - r * e;
      if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) if (0 === T) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO;else {
        var v = a.xRot * Math.PI / 180,
            f = Math.sin(v),
            N = Math.cos(v),
            x = 1 / l(a.rX),
            d = 1 / l(a.rY),
            E = l(N) * x + l(f) * d,
            A = 2 * f * N * (x - d),
            C = l(f) * x + l(N) * d,
            M = E * i * i - A * r * i + C * r * r,
            R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r),
            g = E * e * e - A * t * e + C * t * t,
            I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2,
            S = Math.sin(I),
            L = Math.cos(I);
        a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), a.xRot = 180 * I / Math.PI;
      }
      return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
    });
  }

  function l() {
    return function (t) {
      var r = {};

      for (var e in t) r[e] = t[e];

      return r;
    };
  }

  t.ROUND = function (t) {
    function r(r) {
      return Math.round(r * t) / t;
    }

    return void 0 === t && (t = 1e13), a(t), function (t) {
      return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
    };
  }, t.TO_ABS = r, t.TO_REL = function () {
    return u(function (t, r, e) {
      return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
    });
  }, t.NORMALIZE_HVZ = function (t, r, e) {
    return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), u(function (i, a, n, o, s) {
      if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i;
    });
  }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function (t) {
    void 0 === t && (t = 0), a(t);
    var r = NaN,
        e = NaN,
        i = NaN,
        n = NaN;
    return u(function (a, o, s, u, h) {
      var c = Math.abs,
          y = !1,
          p = 0,
          m = 0;

      if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(r) ? 0 : o - r, m = isNaN(e) ? 0 : s - e), a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r = a.relative ? o + a.x2 : a.x2, e = a.relative ? s + a.y2 : a.y2) : (r = NaN, e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, n = isNaN(n) ? s : 2 * s - n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, n = a.relative ? s + a.y1 : a.y2) : (i = NaN, n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
        var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o,
            l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
        p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : n - s;
        var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o,
            v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
        c(O) <= t && c(l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
      }

      return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
    });
  }, t.MATRIX = O, t.ROTATE = function (t, r, e) {
    void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
    var i = Math.sin(t),
        n = Math.cos(t);
    return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
  }, t.TRANSLATE = function (t, r) {
    return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
  }, t.SCALE = function (t, r) {
    return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
  }, t.SKEW_X = function (t) {
    return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
  }, t.SKEW_Y = function (t) {
    return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
  }, t.X_AXIS_SYMMETRY = function (t) {
    return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
  }, t.Y_AXIS_SYMMETRY = function (t) {
    return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
  }, t.A_TO_C = function () {
    return u(function (t, r, e) {
      return _.ARC === t.type ? function (t, r, e) {
        var a, n, s, u;
        t.cX || o(t, r, e);

        for (var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), O = new Array(m), l = r, T = e, v = 0; v < m; v++) {
          var f = c(t.phi1, t.phi2, v / m),
              N = c(t.phi1, t.phi2, (v + 1) / m),
              x = N - f,
              d = 4 / 3 * Math.tan(x * h / 4),
              E = [Math.cos(f * h) - d * Math.sin(f * h), Math.sin(f * h) + d * Math.cos(f * h)],
              A = E[0],
              C = E[1],
              M = [Math.cos(N * h), Math.sin(N * h)],
              R = M[0],
              g = M[1],
              I = [R + d * Math.sin(N * h), g - d * Math.cos(N * h)],
              S = I[0],
              L = I[1];
          O[v] = {
            relative: t.relative,
            type: _.CURVE_TO
          };

          var H = function H(r, e) {
            var a = i([r * t.rX, e * t.rY], t.xRot),
                n = a[0],
                o = a[1];
            return [t.cX + n, t.cY + o];
          };

          a = H(A, C), O[v].x1 = a[0], O[v].y1 = a[1], n = H(S, L), O[v].x2 = n[0], O[v].y2 = n[1], s = H(R, g), O[v].x = s[0], O[v].y = s[1], t.relative && (O[v].x1 -= l, O[v].y1 -= T, O[v].x2 -= l, O[v].y2 -= T, O[v].x -= l, O[v].y -= T), l = (u = [O[v].x, O[v].y])[0], T = u[1];
        }

        return O;
      }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
    });
  }, t.ANNOTATE_ARCS = function () {
    return u(function (t, r, e) {
      return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
    });
  }, t.CLONE = l, t.CALCULATE_BOUNDS = function () {
    var t = function t(_t2) {
      var r = {};

      for (var e in _t2) r[e] = _t2[e];

      return r;
    },
        i = r(),
        a = n(),
        h = e(),
        c = u(function (r, e, n) {
      var u = h(a(i(t(r))));

      function O(t) {
        t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
      }

      function l(t) {
        t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
      }

      if (u.type & _.DRAWING_COMMANDS && (O(e), l(n)), u.type & _.HORIZ_LINE_TO && O(u.x), u.type & _.VERT_LINE_TO && l(u.y), u.type & _.LINE_TO && (O(u.x), l(u.y)), u.type & _.CURVE_TO) {
        O(u.x), l(u.y);

        for (var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++) {
          0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
        }

        for (var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++) {
          0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
        }
      }

      if (u.type & _.ARC) {
        O(u.x), l(u.y), o(u, e, n);

        for (var x = u.xRot / 180 * Math.PI, d = Math.cos(x) * u.rX, E = Math.sin(x) * u.rX, A = -Math.sin(x) * u.rY, C = Math.cos(x) * u.rY, M = u.phi1 < u.phi2 ? [u.phi1, u.phi2] : -180 > u.phi2 ? [u.phi2 + 360, u.phi1 + 360] : [u.phi2, u.phi1], R = M[0], g = M[1], I = function I(t) {
          var r = t[0],
              e = t[1],
              i = 180 * Math.atan2(e, r) / Math.PI;
          return i < R ? i + 360 : i;
        }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++) {
          (w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
        }

        for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
          var w;
          (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
        }
      }

      return r;
    });

    return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
  };
}(u || (u = {}));

var O,
    l = function () {
  function t() {}

  return t.prototype.round = function (t) {
    return this.transform(u.ROUND(t));
  }, t.prototype.toAbs = function () {
    return this.transform(u.TO_ABS());
  }, t.prototype.toRel = function () {
    return this.transform(u.TO_REL());
  }, t.prototype.normalizeHVZ = function (t, r, e) {
    return this.transform(u.NORMALIZE_HVZ(t, r, e));
  }, t.prototype.normalizeST = function () {
    return this.transform(u.NORMALIZE_ST());
  }, t.prototype.qtToC = function () {
    return this.transform(u.QT_TO_C());
  }, t.prototype.aToC = function () {
    return this.transform(u.A_TO_C());
  }, t.prototype.sanitize = function (t) {
    return this.transform(u.SANITIZE(t));
  }, t.prototype.translate = function (t, r) {
    return this.transform(u.TRANSLATE(t, r));
  }, t.prototype.scale = function (t, r) {
    return this.transform(u.SCALE(t, r));
  }, t.prototype.rotate = function (t, r, e) {
    return this.transform(u.ROTATE(t, r, e));
  }, t.prototype.matrix = function (t, r, e, i, a, n) {
    return this.transform(u.MATRIX(t, r, e, i, a, n));
  }, t.prototype.skewX = function (t) {
    return this.transform(u.SKEW_X(t));
  }, t.prototype.skewY = function (t) {
    return this.transform(u.SKEW_Y(t));
  }, t.prototype.xSymmetry = function (t) {
    return this.transform(u.X_AXIS_SYMMETRY(t));
  }, t.prototype.ySymmetry = function (t) {
    return this.transform(u.Y_AXIS_SYMMETRY(t));
  }, t.prototype.annotateArcs = function () {
    return this.transform(u.ANNOTATE_ARCS());
  }, t;
}(),
    T = function T(t) {
  return " " === t || "\t" === t || "\r" === t || "\n" === t;
},
    v = function v(t) {
  return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
},
    f = function (t) {
  function e() {
    var r = t.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }

  return r(e, t), e.prototype.finish = function (t) {
    if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return t;
  }, e.prototype.parse = function (t, r) {
    var e = this;
    void 0 === r && (r = []);

    for (var i = function i(t) {
      r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
    }, a = 0; a < t.length; a++) {
      var n = t[a],
          o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
          s = v(n) && ("0" === this.curNumber && "0" === n || o);
      if (!v(n) || s) {
        if ("e" !== n && "E" !== n) {
          if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) {
            if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
              if (this.curNumber && -1 !== this.curCommandType) {
                var u = Number(this.curNumber);
                if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                if (this.curCommandType === _.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                  if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                  type: _.HORIZ_LINE_TO,
                  relative: this.curCommandRelative,
                  x: u
                }) : _.VERT_LINE_TO === this.curCommandType ? i({
                  type: _.VERT_LINE_TO,
                  relative: this.curCommandRelative,
                  y: u
                }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                  type: this.curCommandType,
                  relative: this.curCommandRelative,
                  x: this.curArgs[0],
                  y: this.curArgs[1]
                }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                  type: _.CURVE_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x2: this.curArgs[2],
                  y2: this.curArgs[3],
                  x: this.curArgs[4],
                  y: this.curArgs[5]
                }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                  type: _.SMOOTH_CURVE_TO,
                  relative: this.curCommandRelative,
                  x2: this.curArgs[0],
                  y2: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === _.QUAD_TO ? i({
                  type: _.QUAD_TO,
                  relative: this.curCommandRelative,
                  x1: this.curArgs[0],
                  y1: this.curArgs[1],
                  x: this.curArgs[2],
                  y: this.curArgs[3]
                }) : this.curCommandType === _.ARC && i({
                  type: _.ARC,
                  relative: this.curCommandRelative,
                  rX: this.curArgs[0],
                  rY: this.curArgs[1],
                  xRot: this.curArgs[2],
                  lArcFlag: this.curArgs[3],
                  sweepFlag: this.curArgs[4],
                  x: this.curArgs[5],
                  y: this.curArgs[6]
                })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
              }

              if (!T(n)) if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;else if ("+" !== n && "-" !== n && "." !== n) {
                if (s) this.curNumber = n, this.curNumberHasDecimal = !1;else {
                  if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                  if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                  if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) {
                    if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n;else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n;else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n;else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n;else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n;else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;else {
                      if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                      this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                    }
                  } else r.push({
                    type: _.CLOSE_PATH
                  }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                }
              } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
            } else this.curNumber += n, this.curNumberHasDecimal = !0;
          } else this.curNumber += n;
        } else this.curNumber += n, this.curNumberHasExp = !0;
      } else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
    }

    return r;
  }, e.prototype.transform = function (t) {
    return Object.create(this, {
      parse: {
        value: function value(r, e) {
          void 0 === e && (e = []);

          for (var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++) {
            var n = a[i],
                o = t(n);
            Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
          }

          return e;
        }
      }
    });
  }, e;
}(l),
    _ = function (t) {
  function i(r) {
    var e = t.call(this) || this;
    return e.commands = "string" == typeof r ? i.parse(r) : r, e;
  }

  return r(i, t), i.prototype.encode = function () {
    return i.encode(this.commands);
  }, i.prototype.getBounds = function () {
    var t = u.CALCULATE_BOUNDS();
    return this.transform(t), t;
  }, i.prototype.transform = function (t) {
    for (var r = [], e = 0, i = this.commands; e < i.length; e++) {
      var a = t(i[e]);
      Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
    }

    return this.commands = r, this;
  }, i.encode = function (t) {
    return e(t);
  }, i.parse = function (t) {
    var r = new f(),
        e = [];
    return r.parse(t, e), r.finish(e), e;
  }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, i;
}(l),
    N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);



/***/ }),

/***/ "0r2v":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/array-slice.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "11yv":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/well-known-symbol.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var shared = __webpack_require__(/*! ../internals/shared */ "aNr2");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var uid = __webpack_require__(/*! ../internals/uid */ "MURR");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "v/rq");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "1Sr1");

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "13vt":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.catch.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "GxTi").CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "KLK4");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ "1Sr1":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "v/rq");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "1mOU":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-apply.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "66qH");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2YF/":
/*!**************************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/promise-statics-incorrect-iteration.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "KLK4");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "X/EZ");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "GxTi").CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ "2lHc":
/*!************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "3DCu":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/make-built-in.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "N6FT").CONFIGURABLE;
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "sNJV");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "UQ6y");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "3Xd8":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-is-prototype-of.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3fk+":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "WMbf");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "3n0U":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "AoAp");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "4Qxg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


/***/ }),

/***/ "4YbN":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-constructor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var classof = __webpack_require__(/*! ../internals/classof */ "g8+u");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "sNJV");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "4gdG":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/shared-store.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "X4md");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "4uGi":
/*!*****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5JCY":
/*!*********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/string-trim-forced.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "N6FT").PROPER;
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "noWC");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "5Q0V":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "cDf5")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "5r2E":
/*!********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "66qH":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-bind-native.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "721z":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-object.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "8HiI":
/*!*************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/a-callable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "IL+x");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "8ODz":
/*!*********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "4uGi");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "8Ys4":
/*!*********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/array-slice-simple.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "n6S8");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "tMNq");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "oauk");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  var n = 0;
  for (; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "8xe4":
/*!**********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/perform.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "9Bi7":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/set-species.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "WhZm");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "A2dy":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.all.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "zFjv");
var perform = __webpack_require__(/*! ../internals/perform */ "8xe4");
var iterate = __webpack_require__(/*! ../internals/iterate */ "nvEG");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "2YF/");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "Ai06":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-keys.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "ZpKI");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "Yzn+");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "AoAp":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterators.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "COGW":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-regexp.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ "D0VN":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.race.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "zFjv");
var perform = __webpack_require__(/*! ../internals/perform */ "8xe4");
var iterate = __webpack_require__(/*! ../internals/iterate */ "nvEG");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(/*! ../internals/promise-statics-incorrect-iteration */ "2YF/");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "DXPr":
/*!********************************************!*\
  !*** ./node_modules/canvg/lib/index.es.js ***!
  \********************************************/
/*! exports provided: AElement, AnimateColorElement, AnimateElement, AnimateTransformElement, BoundingBox, CB1, CB2, CB3, CB4, Canvg, CircleElement, ClipPathElement, DefsElement, DescElement, Document, Element, EllipseElement, FeColorMatrixElement, FeCompositeElement, FeDropShadowElement, FeGaussianBlurElement, FeMorphologyElement, FilterElement, Font, FontElement, FontFaceElement, GElement, GlyphElement, GradientElement, ImageElement, LineElement, LinearGradientElement, MarkerElement, MaskElement, Matrix, MissingGlyphElement, Mouse, PSEUDO_ZERO, Parser, PathElement, PathParser, PatternElement, Point, PolygonElement, PolylineElement, Property, QB1, QB2, QB3, RadialGradientElement, RectElement, RenderedElement, Rotate, SVGElement, SVGFontLoader, Scale, Screen, Skew, SkewX, SkewY, StopElement, StyleElement, SymbolElement, TRefElement, TSpanElement, TextElement, TextPathElement, TitleElement, Transform, Translate, UnknownElement, UseElement, ViewPort, compressSpaces, default, getSelectorSpecificity, normalizeAttributeName, normalizeColor, parseExternalUrl, presets, toNumbers, trimLeft, trimRight, vectorMagnitude, vectorsAngle, vectorsRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AElement", function() { return AElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateColorElement", function() { return AnimateColorElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateElement", function() { return AnimateElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTransformElement", function() { return AnimateTransformElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingBox", function() { return BoundingBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CB1", function() { return CB1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CB2", function() { return CB2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CB3", function() { return CB3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CB4", function() { return CB4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvg", function() { return Canvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleElement", function() { return CircleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPathElement", function() { return ClipPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefsElement", function() { return DefsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescElement", function() { return DescElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseElement", function() { return EllipseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeColorMatrixElement", function() { return FeColorMatrixElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeCompositeElement", function() { return FeCompositeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeDropShadowElement", function() { return FeDropShadowElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeGaussianBlurElement", function() { return FeGaussianBlurElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeMorphologyElement", function() { return FeMorphologyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElement", function() { return FilterElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontElement", function() { return FontElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceElement", function() { return FontFaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GElement", function() { return GElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlyphElement", function() { return GlyphElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientElement", function() { return GradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageElement", function() { return ImageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineElement", function() { return LineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGradientElement", function() { return LinearGradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerElement", function() { return MarkerElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return MaskElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingGlyphElement", function() { return MissingGlyphElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mouse", function() { return Mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PSEUDO_ZERO", function() { return PSEUDO_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathElement", function() { return PathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathParser", function() { return PathParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternElement", function() { return PatternElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonElement", function() { return PolygonElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineElement", function() { return PolylineElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QB1", function() { return QB1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QB2", function() { return QB2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QB3", function() { return QB3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialGradientElement", function() { return RadialGradientElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectElement", function() { return RectElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderedElement", function() { return RenderedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotate", function() { return Rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGFontLoader", function() { return SVGFontLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return Scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skew", function() { return Skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkewX", function() { return SkewX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkewY", function() { return SkewY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopElement", function() { return StopElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleElement", function() { return StyleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolElement", function() { return SymbolElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRefElement", function() { return TRefElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TSpanElement", function() { return TSpanElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextElement", function() { return TextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPathElement", function() { return TextPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleElement", function() { return TitleElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translate", function() { return Translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownElement", function() { return UnknownElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseElement", function() { return UseElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPort", function() { return ViewPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressSpaces", function() { return compressSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectorSpecificity", function() { return getSelectorSpecificity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAttributeName", function() { return normalizeAttributeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColor", function() { return normalizeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExternalUrl", function() { return parseExternalUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumbers", function() { return toNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimLeft", function() { return trimLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimRight", function() { return trimRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorMagnitude", function() { return vectorMagnitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorsAngle", function() { return vectorsAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vectorsRatio", function() { return vectorsRatio; });
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "+EXs");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "QdLy");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "JL25");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/get */ "t9bE");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "KUzl");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "8vcG");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/inherits */ "mvVQ");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createSuper */ "/E8u");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "MGFw");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/createClass */ "WtWf");
/* harmony import */ var _Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "95OS");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "vrKp");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "KKe4");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "x8x8");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "KLN8");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "Lltv");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "qJvV");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "mdxj");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "GVkW");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "NCkV");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! raf */ "xEkU");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "wOD2");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var rgbcolor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rgbcolor */ "WOGj");
/* harmony import */ var rgbcolor__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(rgbcolor__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "g9jQ");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "MNKV");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "iWRt");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var svg_pathdata__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! svg-pathdata */ "0B/8");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "yD9w");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var stackblur_canvas__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! stackblur-canvas */ "Xp4B");












function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }





















/**
 * Options preset for `OffscreenCanvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @returns Preset object.
 */

function offscreen() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      DOMParserFallback = _ref4.DOMParser;

  var preset = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParserFallback,
    createCanvas: function createCanvas(width, height) {
      return new OffscreenCanvas(width, height);
    },
    createImage: function createImage(url) {
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, blob, img;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.blob();

            case 5:
              blob = _context.sent;
              _context.next = 8;
              return createImageBitmap(blob);

            case 8:
              img = _context.sent;
              return _context.abrupt("return", img);

            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  };

  if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') {
    Reflect.deleteProperty(preset, 'DOMParser');
  }

  return preset;
}
/**
 * Options preset for `node-canvas`.
 * @param config - Preset requirements.
 * @param config.DOMParser - XML/HTML parser from string into DOM Document.
 * @param config.canvas - `node-canvas` exports.
 * @param config.fetch - WHATWG-compatible `fetch` function.
 * @returns Preset object.
 */


function node(_ref) {
  var DOMParser = _ref.DOMParser,
      canvas = _ref.canvas,
      fetch = _ref.fetch;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParser,
    fetch: fetch,
    createCanvas: canvas.createCanvas,
    createImage: canvas.loadImage
  };
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  offscreen: offscreen,
  node: node
});
/**
 * HTML-safe compress white-spaces.
 * @param str - String to compress.
 * @returns String.
 */

function compressSpaces(str) {
  return str.replace(/(?!\u3000)\s+/gm, ' ');
}
/**
 * HTML-safe left trim.
 * @param str - String to trim.
 * @returns String.
 */


function trimLeft(str) {
  return str.replace(/^[\n \t]+/, '');
}
/**
 * HTML-safe right trim.
 * @param str - String to trim.
 * @returns String.
 */


function trimRight(str) {
  return str.replace(/[\n \t]+$/, '');
}
/**
 * String to numbers array.
 * @param str - Numbers string.
 * @returns Numbers array.
 */


function toNumbers(str) {
  var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return matches.map(parseFloat);
} // Microsoft Edge fix


var allUppercase = /^[A-Z-]+$/;
/**
 * Normalize attribute name.
 * @param name - Attribute name.
 * @returns Normalized attribute name.
 */

function normalizeAttributeName(name) {
  if (allUppercase.test(name)) {
    return name.toLowerCase();
  }

  return name;
}
/**
 * Parse external URL.
 * @param url - CSS url string.
 * @returns Parsed URL.
 */


function parseExternalUrl(url) {
  //                      single quotes [2]
  //                      v         double quotes [3]
  //                      v         v         no quotes [4]
  //                      v         v         v
  var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
  return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
/**
 * Transform floats to integers in rgb colors.
 * @param color - Color to normalize.
 * @returns Normalized color.
 */


function normalizeColor(color) {
  if (!color.startsWith('rgb')) {
    return color;
  }

  var rgbParts = 3;
  var normalizedColor = color.replace(/\d+(\.\d+)?/g, function (num, isFloat) {
    return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
  });
  return normalizedColor;
} // slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js


var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s+>~.[:]+)/g;
var classRegex = /(\.[^\s+>~.[:]+)/g;
var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
var elementRegex = /([^\s+>~.[:]+)/g;

function findSelectorMatch(selector, regex) {
  var matches = regex.exec(selector);

  if (!matches) {
    return [selector, 0];
  }

  return [selector.replace(regex, ' '), matches.length];
}
/**
 * Measure selector specificity.
 * @param selector - Selector to measure.
 * @returns Specificity.
 */


function getSelectorSpecificity(selector) {
  var specificity = [0, 0, 0];
  var currentSelector = selector.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
  var delta = 0;

  var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);

  var _findSelectorMatch2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch, 2);

  currentSelector = _findSelectorMatch2[0];
  delta = _findSelectorMatch2[1];
  specificity[1] += delta;

  var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);

  var _findSelectorMatch4 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch3, 2);

  currentSelector = _findSelectorMatch4[0];
  delta = _findSelectorMatch4[1];
  specificity[0] += delta;

  var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);

  var _findSelectorMatch6 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch5, 2);

  currentSelector = _findSelectorMatch6[0];
  delta = _findSelectorMatch6[1];
  specificity[1] += delta;

  var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);

  var _findSelectorMatch8 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch7, 2);

  currentSelector = _findSelectorMatch8[0];
  delta = _findSelectorMatch8[1];
  specificity[2] += delta;

  var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);

  var _findSelectorMatch10 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch9, 2);

  currentSelector = _findSelectorMatch10[0];
  delta = _findSelectorMatch10[1];
  specificity[1] += delta;

  var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);

  var _findSelectorMatch12 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch11, 2);

  currentSelector = _findSelectorMatch12[0];
  delta = _findSelectorMatch12[1];
  specificity[1] += delta;
  currentSelector = currentSelector.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ');

  // lgtm [js/useless-assignment-to-local]
  var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);

  var _findSelectorMatch14 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_findSelectorMatch13, 2);

  currentSelector = _findSelectorMatch14[0];
  delta = _findSelectorMatch14[1];
  specificity[2] += delta;
  return specificity.join('');
}

var PSEUDO_ZERO = .00000001;
/**
 * Vector magnitude.
 * @param v
 * @returns Number result.
 */

function vectorMagnitude(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
/**
 * Ratio between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */


function vectorsRatio(u, v) {
  return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
/**
 * Angle between two vectors.
 * @param u
 * @param v
 * @returns Number result.
 */


function vectorsAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}

function CB1(t) {
  return t * t * t;
}

function CB2(t) {
  return 3 * t * t * (1 - t);
}

function CB3(t) {
  return 3 * t * (1 - t) * (1 - t);
}

function CB4(t) {
  return (1 - t) * (1 - t) * (1 - t);
}

function QB1(t) {
  return t * t;
}

function QB2(t) {
  return 2 * t * (1 - t);
}

function QB3(t) {
  return (1 - t) * (1 - t);
}

var Property = /*#__PURE__*/function () {
  function Property(document, name, value) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Property);

    this.document = document;
    this.name = name;
    this.value = value;
    this.isNormalizedColor = false;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Property, [{
    key: "split",
    value: function split() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
      var document = this.document,
          name = this.name;
      return compressSpaces(this.getString()).trim().split(separator).map(function (value) {
        return new Property(document, name, value);
      });
    }
  }, {
    key: "hasValue",
    value: function hasValue(zeroIsValue) {
      var value = this.value;
      return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
    }
  }, {
    key: "isString",
    value: function isString(regexp) {
      var value = this.value;
      var result = typeof value === 'string';

      if (!result || !regexp) {
        return result;
      }

      return regexp.test(value);
    }
  }, {
    key: "isUrlDefinition",
    value: function isUrlDefinition() {
      return this.isString(/^url\(/);
    }
  }, {
    key: "isPixels",
    value: function isPixels() {
      if (!this.hasValue()) {
        return false;
      }

      var asString = this.getString();

      switch (true) {
        case asString.endsWith('px'):
        case /^[0-9]+$/.test(asString):
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(def) {
      if (typeof def === 'undefined' || this.hasValue()) {
        return this.value;
      }

      return def;
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      if (!this.hasValue()) {
        if (typeof def === 'undefined') {
          return 0;
        }

        return parseFloat(def);
      }

      var value = this.value;
      var n = parseFloat(value);

      if (this.isString(/%$/)) {
        n /= 100.0;
      }

      return n;
    }
  }, {
    key: "getString",
    value: function getString(def) {
      if (typeof def === 'undefined' || this.hasValue()) {
        return typeof this.value === 'undefined' ? '' : String(this.value);
      }

      return String(def);
    }
  }, {
    key: "getColor",
    value: function getColor(def) {
      var color = this.getString(def);

      if (this.isNormalizedColor) {
        return color;
      }

      this.isNormalizedColor = true;
      color = normalizeColor(color);
      this.value = color;
      return color;
    }
  }, {
    key: "getDpi",
    value: function getDpi() {
      return 96.0; // TODO: compute?
    }
  }, {
    key: "getRem",
    value: function getRem() {
      return this.document.rootEmSize;
    }
  }, {
    key: "getEm",
    value: function getEm() {
      return this.document.emSize;
    }
  }, {
    key: "getUnits",
    value: function getUnits() {
      return this.getString().replace(/[0-9.-]/g, '');
    }
  }, {
    key: "getPixels",
    value: function getPixels(axisOrIsFontSize) {
      var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.hasValue()) {
        return 0;
      }

      var _ref5 = typeof axisOrIsFontSize === 'boolean' ? [undefined, axisOrIsFontSize] : [axisOrIsFontSize],
          _ref6 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref5, 2),
          axis = _ref6[0],
          isFontSize = _ref6[1];

      var viewPort = this.document.screen.viewPort;

      switch (true) {
        case this.isString(/vmin$/):
          return this.getNumber() / 100.0 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));

        case this.isString(/vmax$/):
          return this.getNumber() / 100.0 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));

        case this.isString(/vw$/):
          return this.getNumber() / 100.0 * viewPort.computeSize('x');

        case this.isString(/vh$/):
          return this.getNumber() / 100.0 * viewPort.computeSize('y');

        case this.isString(/rem$/):
          return this.getNumber() * this.getRem();

        case this.isString(/em$/):
          return this.getNumber() * this.getEm();

        case this.isString(/ex$/):
          return this.getNumber() * this.getEm() / 2.0;

        case this.isString(/px$/):
          return this.getNumber();

        case this.isString(/pt$/):
          return this.getNumber() * this.getDpi() * (1.0 / 72.0);

        case this.isString(/pc$/):
          return this.getNumber() * 15;

        case this.isString(/cm$/):
          return this.getNumber() * this.getDpi() / 2.54;

        case this.isString(/mm$/):
          return this.getNumber() * this.getDpi() / 25.4;

        case this.isString(/in$/):
          return this.getNumber() * this.getDpi();

        case this.isString(/%$/) && isFontSize:
          return this.getNumber() * this.getEm();

        case this.isString(/%$/):
          return this.getNumber() * viewPort.computeSize(axis);

        default:
          {
            var n = this.getNumber();

            if (processPercent && n < 1.0) {
              return n * viewPort.computeSize(axis);
            }

            return n;
          }
      }
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      if (!this.hasValue()) {
        return 0;
      }

      if (this.isString(/ms$/)) {
        return this.getNumber();
      }

      return this.getNumber() * 1000;
    }
  }, {
    key: "getRadians",
    value: function getRadians() {
      if (!this.hasValue()) {
        return 0;
      }

      switch (true) {
        case this.isString(/deg$/):
          return this.getNumber() * (Math.PI / 180.0);

        case this.isString(/grad$/):
          return this.getNumber() * (Math.PI / 200.0);

        case this.isString(/rad$/):
          return this.getNumber();

        default:
          return this.getNumber() * (Math.PI / 180.0);
      }
    }
  }, {
    key: "getDefinition",
    value: function getDefinition() {
      var asString = this.getString();
      var name = /#([^)'"]+)/.exec(asString);

      if (name) {
        name = name[1];
      }

      if (!name) {
        name = asString;
      }

      return this.document.definitions[name];
    }
  }, {
    key: "getFillStyleDefinition",
    value: function getFillStyleDefinition(element, opacity) {
      var def = this.getDefinition();

      if (!def) {
        return null;
      } // gradient


      if (typeof def.createGradient === 'function') {
        return def.createGradient(this.document.ctx, element, opacity);
      } // pattern


      if (typeof def.createPattern === 'function') {
        if (def.getHrefAttribute().hasValue()) {
          var patternTransform = def.getAttribute('patternTransform');
          def = def.getHrefAttribute().getDefinition();

          if (patternTransform.hasValue()) {
            def.getAttribute('patternTransform', true).setValue(patternTransform.value);
          }
        }

        return def.createPattern(this.document.ctx, element, opacity);
      }

      return null;
    }
  }, {
    key: "getTextBaseline",
    value: function getTextBaseline() {
      if (!this.hasValue()) {
        return null;
      }

      return Property.textBaselineMapping[this.getString()];
    }
  }, {
    key: "addOpacity",
    value: function addOpacity(opacity) {
      var value = this.getColor();
      var len = value.length;
      var commas = 0; // Simulate old RGBColor version, which can't parse rgba.

      for (var i = 0; i < len; i++) {
        if (value[i] === ',') {
          commas++;
        }

        if (commas === 3) {
          break;
        }
      }

      if (opacity.hasValue() && this.isString() && commas !== 3) {
        var color = new rgbcolor__WEBPACK_IMPORTED_MODULE_24___default.a(value);

        if (color.ok) {
          color.alpha = opacity.getNumber();
          value = color.toRGBA();
        }
      }

      return new Property(this.document, this.name, value);
    }
  }], [{
    key: "empty",
    value: function empty(document) {
      return new Property(document, 'EMPTY', '');
    }
  }]);

  return Property;
}();

Property.textBaselineMapping = {
  'baseline': 'alphabetic',
  'before-edge': 'top',
  'text-before-edge': 'top',
  'middle': 'middle',
  'central': 'middle',
  'after-edge': 'bottom',
  'text-after-edge': 'bottom',
  'ideographic': 'ideographic',
  'alphabetic': 'alphabetic',
  'hanging': 'hanging',
  'mathematical': 'alphabetic'
};

var ViewPort = /*#__PURE__*/function () {
  function ViewPort() {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ViewPort);

    this.viewPorts = [];
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(ViewPort, [{
    key: "clear",
    value: function clear() {
      this.viewPorts = [];
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(width, height) {
      this.viewPorts.push({
        width: width,
        height: height
      });
    }
  }, {
    key: "removeCurrent",
    value: function removeCurrent() {
      this.viewPorts.pop();
    }
  }, {
    key: "getCurrent",
    value: function getCurrent() {
      var viewPorts = this.viewPorts;
      return viewPorts[viewPorts.length - 1];
    }
  }, {
    key: "width",
    get: function get() {
      return this.getCurrent().width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.getCurrent().height;
    }
  }, {
    key: "computeSize",
    value: function computeSize(d) {
      if (typeof d === 'number') {
        return d;
      }

      if (d === 'x') {
        return this.width;
      }

      if (d === 'y') {
        return this.height;
      }

      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
    }
  }]);

  return ViewPort;
}();

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Point);

    this.x = x;
    this.y = y;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Point, [{
    key: "angleTo",
    value: function angleTo(point) {
      return Math.atan2(point.y - this.y, point.x - this.x);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      var x = this.x,
          y = this.y;
      var xp = x * transform[0] + y * transform[2] + transform[4];
      var yp = x * transform[1] + y * transform[3] + transform[5];
      this.x = xp;
      this.y = yp;
    }
  }], [{
    key: "parse",
    value: function parse(point) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _toNumbers = toNumbers(point),
          _toNumbers2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_toNumbers, 2),
          _toNumbers2$ = _toNumbers2[0],
          x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$,
          _toNumbers2$2 = _toNumbers2[1],
          y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;

      return new Point(x, y);
    }
  }, {
    key: "parseScale",
    value: function parseScale(scale) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var _toNumbers3 = toNumbers(scale),
          _toNumbers4 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_toNumbers3, 2),
          _toNumbers4$ = _toNumbers4[0],
          x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$,
          _toNumbers4$2 = _toNumbers4[1],
          y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;

      return new Point(x, y);
    }
  }, {
    key: "parsePath",
    value: function parsePath(path) {
      var points = toNumbers(path);
      var len = points.length;
      var pathPoints = [];

      for (var i = 0; i < len; i += 2) {
        pathPoints.push(new Point(points[i], points[i + 1]));
      }

      return pathPoints;
    }
  }]);

  return Point;
}();

var Mouse = /*#__PURE__*/function () {
  function Mouse(screen) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Mouse);

    this.screen = screen;
    this.working = false;
    this.events = [];
    this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Mouse, [{
    key: "isWorking",
    value: function isWorking() {
      return this.working;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.working) {
        return;
      }

      var screen = this.screen,
          onClick = this.onClick,
          onMouseMove = this.onMouseMove;
      var canvas = screen.ctx.canvas;
      canvas.onclick = onClick;
      canvas.onmousemove = onMouseMove;
      this.working = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.working) {
        return;
      }

      var canvas = this.screen.ctx.canvas;
      this.working = false;
      canvas.onclick = null;
      canvas.onmousemove = null;
    }
  }, {
    key: "hasEvents",
    value: function hasEvents() {
      return this.working && this.events.length > 0;
    }
  }, {
    key: "runEvents",
    value: function runEvents() {
      if (!this.working) {
        return;
      }

      var document = this.screen,
          events = this.events,
          eventElements = this.eventElements;
      var style = document.ctx.canvas.style;

      if (style) {
        style.cursor = '';
      }

      events.forEach(function (_ref, i) {
        var run = _ref.run;
        var element = eventElements[i];

        while (element) {
          run(element);
          element = element.parent;
        }
      }); // done running, clear

      this.events = [];
      this.eventElements = [];
    }
  }, {
    key: "checkPath",
    value: function checkPath(element, ctx) {
      if (!this.working || !ctx) {
        return;
      }

      var events = this.events,
          eventElements = this.eventElements;
      events.forEach(function (_ref2, i) {
        var x = _ref2.x,
            y = _ref2.y;

        if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "checkBoundingBox",
    value: function checkBoundingBox(element, boundingBox) {
      if (!this.working || !boundingBox) {
        return;
      }

      var events = this.events,
          eventElements = this.eventElements;
      events.forEach(function (_ref3, i) {
        var x = _ref3.x,
            y = _ref3.y;

        if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "mapXY",
    value: function mapXY(x, y) {
      var _this$screen = this.screen,
          window = _this$screen.window,
          ctx = _this$screen.ctx;
      var point = new Point(x, y);
      var element = ctx.canvas;

      while (element) {
        point.x -= element.offsetLeft;
        point.y -= element.offsetTop;
        element = element.offsetParent;
      }

      if (window.scrollX) {
        point.x += window.scrollX;
      }

      if (window.scrollY) {
        point.y += window.scrollY;
      }

      return point;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this$mapXY = this.mapXY(event.clientX, event.clientY),
          x = _this$mapXY.x,
          y = _this$mapXY.y;

      this.events.push({
        type: 'onclick',
        x: x,
        y: y,
        run: function run(eventTarget) {
          if (eventTarget.onClick) {
            eventTarget.onClick();
          }
        }
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var _this$mapXY2 = this.mapXY(event.clientX, event.clientY),
          x = _this$mapXY2.x,
          y = _this$mapXY2.y;

      this.events.push({
        type: 'onmousemove',
        x: x,
        y: y,
        run: function run(eventTarget) {
          if (eventTarget.onMouseMove) {
            eventTarget.onMouseMove();
          }
        }
      });
    }
  }]);

  return Mouse;
}();

var defaultWindow = typeof window !== 'undefined' ? window : null;
var defaultFetch$1 = typeof fetch !== 'undefined' ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
: null;

var Screen = /*#__PURE__*/function () {
  function Screen(ctx) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Screen);

    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref7$fetch = _ref7.fetch,
        fetch = _ref7$fetch === void 0 ? defaultFetch$1 : _ref7$fetch,
        _ref7$window = _ref7.window,
        window = _ref7$window === void 0 ? defaultWindow : _ref7$window;

    this.ctx = ctx;
    this.FRAMERATE = 30;
    this.MAX_VIRTUAL_PIXELS = 30000;
    this.CLIENT_WIDTH = 800;
    this.CLIENT_HEIGHT = 600;
    this.viewPort = new ViewPort();
    this.mouse = new Mouse(this);
    this.animations = [];
    this.waits = [];
    this.frameDuration = 0;
    this.isReadyLock = false;
    this.isFirstRender = true;
    this.intervalId = null;
    this.window = window;
    this.fetch = fetch;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Screen, [{
    key: "wait",
    value: function wait(checker) {
      this.waits.push(checker);
    }
  }, {
    key: "ready",
    value: function ready() {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (!this.readyPromise) {
        return Promise.resolve();
      }

      return this.readyPromise;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      if (this.isReadyLock) {
        return true;
      }

      var isReadyLock = this.waits.every(function (_) {
        return _();
      });

      if (isReadyLock) {
        this.waits = [];

        if (this.resolveReady) {
          this.resolveReady();
        }
      }

      this.isReadyLock = isReadyLock;
      return isReadyLock;
    }
  }, {
    key: "setDefaults",
    value: function setDefaults(ctx) {
      // initial values and defaults
      ctx.strokeStyle = 'rgba(0,0,0,0)';
      ctx.lineCap = 'butt';
      ctx.lineJoin = 'miter';
      ctx.miterLimit = 4;
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(_ref) {
      var document = _ref.document,
          ctx = _ref.ctx,
          aspectRatio = _ref.aspectRatio,
          width = _ref.width,
          desiredWidth = _ref.desiredWidth,
          height = _ref.height,
          desiredHeight = _ref.desiredHeight,
          _ref$minX = _ref.minX,
          minX = _ref$minX === void 0 ? 0 : _ref$minX,
          _ref$minY = _ref.minY,
          minY = _ref$minY === void 0 ? 0 : _ref$minY,
          refX = _ref.refX,
          refY = _ref.refY,
          _ref$clip = _ref.clip,
          clip = _ref$clip === void 0 ? false : _ref$clip,
          _ref$clipX = _ref.clipX,
          clipX = _ref$clipX === void 0 ? 0 : _ref$clipX,
          _ref$clipY = _ref.clipY,
          clipY = _ref$clipY === void 0 ? 0 : _ref$clipY; // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute

      var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer

      var _cleanAspectRatio$spl = cleanAspectRatio.split(' '),
          _cleanAspectRatio$spl2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_cleanAspectRatio$spl, 2),
          aspectRatioAlign = _cleanAspectRatio$spl2[0],
          aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];

      var align = aspectRatioAlign || 'xMidYMid';
      var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale

      var scaleX = width / desiredWidth;
      var scaleY = height / desiredHeight;
      var scaleMin = Math.min(scaleX, scaleY);
      var scaleMax = Math.max(scaleX, scaleY);
      var finalDesiredWidth = desiredWidth;
      var finalDesiredHeight = desiredHeight;

      if (meetOrSlice === 'meet') {
        finalDesiredWidth *= scaleMin;
        finalDesiredHeight *= scaleMin;
      }

      if (meetOrSlice === 'slice') {
        finalDesiredWidth *= scaleMax;
        finalDesiredHeight *= scaleMax;
      }

      var refXProp = new Property(document, 'refX', refX);
      var refYProp = new Property(document, 'refY', refY);
      var hasRefs = refXProp.hasValue() && refYProp.hasValue();

      if (hasRefs) {
        ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
      }

      if (clip) {
        var scaledClipX = scaleMin * clipX;
        var scaledClipY = scaleMin * clipY;
        ctx.beginPath();
        ctx.moveTo(scaledClipX, scaledClipY);
        ctx.lineTo(width, scaledClipY);
        ctx.lineTo(width, height);
        ctx.lineTo(scaledClipX, height);
        ctx.closePath();
        ctx.clip();
      }

      if (!hasRefs) {
        var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
        var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
        var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
        var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;

        if (align.startsWith('xMid') && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
        }

        if (align.endsWith('YMid') && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
        }

        if (align.startsWith('xMax') && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width - finalDesiredWidth, 0);
        }

        if (align.endsWith('YMax') && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height - finalDesiredHeight);
        }
      } // scale


      switch (true) {
        case align === 'none':
          ctx.scale(scaleX, scaleY);
          break;

        case meetOrSlice === 'meet':
          ctx.scale(scaleMin, scaleMin);
          break;

        case meetOrSlice === 'slice':
          ctx.scale(scaleMax, scaleMax);
          break;
      } // translate


      ctx.translate(-minX, -minY);
    }
  }, {
    key: "start",
    value: function start(element) {
      var _this3 = this;

      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$enableRedraw = _ref8.enableRedraw,
          enableRedraw = _ref8$enableRedraw === void 0 ? false : _ref8$enableRedraw,
          _ref8$ignoreMouse = _ref8.ignoreMouse,
          ignoreMouse = _ref8$ignoreMouse === void 0 ? false : _ref8$ignoreMouse,
          _ref8$ignoreAnimation = _ref8.ignoreAnimation,
          ignoreAnimation = _ref8$ignoreAnimation === void 0 ? false : _ref8$ignoreAnimation,
          _ref8$ignoreDimension = _ref8.ignoreDimensions,
          ignoreDimensions = _ref8$ignoreDimension === void 0 ? false : _ref8$ignoreDimension,
          _ref8$ignoreClear = _ref8.ignoreClear,
          ignoreClear = _ref8$ignoreClear === void 0 ? false : _ref8$ignoreClear,
          forceRedraw = _ref8.forceRedraw,
          scaleWidth = _ref8.scaleWidth,
          scaleHeight = _ref8.scaleHeight,
          offsetX = _ref8.offsetX,
          offsetY = _ref8.offsetY;

      var FRAMERATE = this.FRAMERATE,
          mouse = this.mouse;
      var frameDuration = 1000 / FRAMERATE;
      this.frameDuration = frameDuration;
      this.readyPromise = new Promise(function (resolve) {
        _this3.resolveReady = resolve;
      });

      if (this.isReady()) {
        this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
      }

      if (!enableRedraw) {
        return;
      }

      var now = Date.now();
      var then = now;
      var delta = 0;

      var tick = function tick() {
        now = Date.now();
        delta = now - then;

        if (delta >= frameDuration) {
          then = now - delta % frameDuration;

          if (_this3.shouldUpdate(ignoreAnimation, forceRedraw)) {
            _this3.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);

            mouse.runEvents();
          }
        }

        _this3.intervalId = raf__WEBPACK_IMPORTED_MODULE_22___default()(tick);
      };

      if (!ignoreMouse) {
        mouse.start();
      }

      this.intervalId = raf__WEBPACK_IMPORTED_MODULE_22___default()(tick);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.intervalId) {
        raf__WEBPACK_IMPORTED_MODULE_22___default.a.cancel(this.intervalId);
        this.intervalId = null;
      }

      this.mouse.stop();
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(ignoreAnimation, forceRedraw) {
      // need update from animations?
      if (!ignoreAnimation) {
        var frameDuration = this.frameDuration;
        var shouldUpdate = this.animations.reduce(function (shouldUpdate, animation) {
          return animation.update(frameDuration) || shouldUpdate;
        }, false);

        if (shouldUpdate) {
          return true;
        }
      } // need update from redraw?


      if (typeof forceRedraw === 'function' && forceRedraw()) {
        return true;
      }

      if (!this.isReadyLock && this.isReady()) {
        return true;
      } // need update from mouse events?


      if (this.mouse.hasEvents()) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
      var CLIENT_WIDTH = this.CLIENT_WIDTH,
          CLIENT_HEIGHT = this.CLIENT_HEIGHT,
          viewPort = this.viewPort,
          ctx = this.ctx,
          isFirstRender = this.isFirstRender;
      var canvas = ctx.canvas;
      viewPort.clear();

      if (canvas.width && canvas.height) {
        viewPort.setCurrent(canvas.width, canvas.height);
      } else {
        viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
      }

      var widthStyle = element.getStyle('width');
      var heightStyle = element.getStyle('height');

      if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
        // set canvas size
        if (widthStyle.hasValue()) {
          canvas.width = widthStyle.getPixels('x');

          if (canvas.style) {
            canvas.style.width = "".concat(canvas.width, "px");
          }
        }

        if (heightStyle.hasValue()) {
          canvas.height = heightStyle.getPixels('y');

          if (canvas.style) {
            canvas.style.height = "".concat(canvas.height, "px");
          }
        }
      }

      var cWidth = canvas.clientWidth || canvas.width;
      var cHeight = canvas.clientHeight || canvas.height;

      if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
        cWidth = widthStyle.getPixels('x');
        cHeight = heightStyle.getPixels('y');
      }

      viewPort.setCurrent(cWidth, cHeight);

      if (typeof offsetX === 'number') {
        element.getAttribute('x', true).setValue(offsetX);
      }

      if (typeof offsetY === 'number') {
        element.getAttribute('y', true).setValue(offsetY);
      }

      if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
        var viewBox = toNumbers(element.getAttribute('viewBox').getString());
        var xRatio = 0;
        var yRatio = 0;

        if (typeof scaleWidth === 'number') {
          var _widthStyle = element.getStyle('width');

          if (_widthStyle.hasValue()) {
            xRatio = _widthStyle.getPixels('x') / scaleWidth;
          } else if (!isNaN(viewBox[2])) {
            xRatio = viewBox[2] / scaleWidth;
          }
        }

        if (typeof scaleHeight === 'number') {
          var _heightStyle = element.getStyle('height');

          if (_heightStyle.hasValue()) {
            yRatio = _heightStyle.getPixels('y') / scaleHeight;
          } else if (!isNaN(viewBox[3])) {
            yRatio = viewBox[3] / scaleHeight;
          }
        }

        if (!xRatio) {
          xRatio = yRatio;
        }

        if (!yRatio) {
          yRatio = xRatio;
        }

        element.getAttribute('width', true).setValue(scaleWidth);
        element.getAttribute('height', true).setValue(scaleHeight);
        var transformStyle = element.getStyle('transform', true, true);
        transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
      } // clear and render


      if (!ignoreClear) {
        ctx.clearRect(0, 0, cWidth, cHeight);
      }

      element.render(ctx);

      if (isFirstRender) {
        this.isFirstRender = false;
      }
    }
  }]);

  return Screen;
}();

Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch$1;
var defaultFetch = Screen.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;

var Parser = /*#__PURE__*/function () {
  function Parser() {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Parser);

    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref9$fetch = _ref9.fetch,
        fetch = _ref9$fetch === void 0 ? defaultFetch : _ref9$fetch,
        _ref9$DOMParser = _ref9.DOMParser,
        DOMParser = _ref9$DOMParser === void 0 ? DefaultDOMParser : _ref9$DOMParser;

    this.fetch = fetch;
    this.DOMParser = DOMParser;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Parser, [{
    key: "parse",
    value: function parse(resource) {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!resource.startsWith('<')) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", _this.parseFromString(resource));

            case 2:
              return _context2.abrupt("return", _this.load(resource));

            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  }, {
    key: "parseFromString",
    value: function parseFromString(xml) {
      var parser = new this.DOMParser();

      try {
        return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
      } catch (err) {
        return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
      }
    }
  }, {
    key: "checkDocument",
    value: function checkDocument(document) {
      var parserError = document.getElementsByTagName('parsererror')[0];

      if (parserError) {
        throw new Error(parserError.textContent);
      }

      return document;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, xml;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this2.fetch(url);

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return response.text();

            case 5:
              xml = _context3.sent;
              return _context3.abrupt("return", _this2.parseFromString(xml));

            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  }]);

  return Parser;
}();

var Translate = /*#__PURE__*/function () {
  function Translate(_, point) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Translate);

    this.type = 'translate';
    this.point = null;
    this.point = Point.parse(point);
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Translate, [{
    key: "apply",
    value: function apply(ctx) {
      var _this$point = this.point,
          x = _this$point.x,
          y = _this$point.y;
      ctx.translate(x || 0.0, y || 0.0);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$point2 = this.point,
          x = _this$point2.x,
          y = _this$point2.y;
      ctx.translate(-1.0 * x || 0.0, -1.0 * y || 0.0);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$point3 = this.point,
          x = _this$point3.x,
          y = _this$point3.y;
      point.applyTransform([1, 0, 0, 1, x || 0.0, y || 0.0]);
    }
  }]);

  return Translate;
}();

var Rotate = /*#__PURE__*/function () {
  function Rotate(document, rotate, transformOrigin) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Rotate);

    this.type = 'rotate';
    this.angle = null;
    this.originX = null;
    this.originY = null;
    this.cx = 0;
    this.cy = 0;
    var numbers = toNumbers(rotate);
    this.angle = new Property(document, 'angle', numbers[0]);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
    this.cx = numbers[1] || 0;
    this.cy = numbers[2] || 0;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Rotate, [{
    key: "apply",
    value: function apply(ctx) {
      var cx = this.cx,
          cy = this.cy,
          originX = this.originX,
          originY = this.originY,
          angle = this.angle;
      var tx = cx + originX.getPixels('x');
      var ty = cy + originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.rotate(angle.getRadians());
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var cx = this.cx,
          cy = this.cy,
          originX = this.originX,
          originY = this.originY,
          angle = this.angle;
      var tx = cx + originX.getPixels('x');
      var ty = cy + originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.rotate(-1.0 * angle.getRadians());
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var cx = this.cx,
          cy = this.cy,
          angle = this.angle;
      var rad = angle.getRadians();
      point.applyTransform([1, 0, 0, 1, cx || 0.0, cy || 0.0 // this.p.y
      ]);
      point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
      point.applyTransform([1, 0, 0, 1, -cx || 0.0, -cy || 0.0 // -this.p.y
      ]);
    }
  }]);

  return Rotate;
}();

var Scale = /*#__PURE__*/function () {
  function Scale(_, scale, transformOrigin) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Scale);

    this.type = 'scale';
    this.scale = null;
    this.originX = null;
    this.originY = null;
    var scaleSize = Point.parseScale(scale); // Workaround for node-canvas

    if (scaleSize.x === 0 || scaleSize.y === 0) {
      scaleSize.x = PSEUDO_ZERO;
      scaleSize.y = PSEUDO_ZERO;
    }

    this.scale = scaleSize;
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Scale, [{
    key: "apply",
    value: function apply(ctx) {
      var _this$scale = this.scale,
          x = _this$scale.x,
          y = _this$scale.y,
          originX = this.originX,
          originY = this.originY;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.scale(x, y || x);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$scale2 = this.scale,
          x = _this$scale2.x,
          y = _this$scale2.y,
          originX = this.originX,
          originY = this.originY;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.scale(1.0 / x, 1.0 / y || x);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$scale3 = this.scale,
          x = _this$scale3.x,
          y = _this$scale3.y;
      point.applyTransform([x || 0.0, 0, 0, y || 0.0, 0, 0]);
    }
  }]);

  return Scale;
}();

var Matrix = /*#__PURE__*/function () {
  function Matrix(_, matrix, transformOrigin) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Matrix);

    this.type = 'matrix';
    this.matrix = [];
    this.originX = null;
    this.originY = null;
    this.matrix = toNumbers(matrix);
    this.originX = transformOrigin[0];
    this.originY = transformOrigin[1];
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Matrix, [{
    key: "apply",
    value: function apply(ctx) {
      var originX = this.originX,
          originY = this.originY,
          matrix = this.matrix;
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var originX = this.originX,
          originY = this.originY,
          matrix = this.matrix;
      var a = matrix[0];
      var b = matrix[2];
      var c = matrix[4];
      var d = matrix[1];
      var e = matrix[3];
      var f = matrix[5];
      var g = 0.0;
      var h = 0.0;
      var i = 1.0;
      var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
      var tx = originX.getPixels('x');
      var ty = originY.getPixels('y');
      ctx.translate(tx, ty);
      ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
      ctx.translate(-tx, -ty);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      point.applyTransform(this.matrix);
    }
  }]);

  return Matrix;
}();

var Skew = /*#__PURE__*/function (_Matrix) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Skew, _Matrix);

  var _super = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Skew);

  function Skew(document, skew, transformOrigin) {
    var _this4;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Skew);

    _this4 = _super.call(this, document, skew, transformOrigin);
    _this4.type = 'skew';
    _this4.angle = null;
    _this4.angle = new Property(document, 'angle', skew);
    return _this4;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Skew);
}(Matrix);

var SkewX = /*#__PURE__*/function (_Skew) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SkewX, _Skew);

  var _super2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(SkewX);

  function SkewX(document, skew, transformOrigin) {
    var _this5;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SkewX);

    _this5 = _super2.call(this, document, skew, transformOrigin);
    _this5.type = 'skewX';
    _this5.matrix = [1, 0, Math.tan(_this5.angle.getRadians()), 1, 0, 0];
    return _this5;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(SkewX);
}(Skew);

var SkewY = /*#__PURE__*/function (_Skew2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SkewY, _Skew2);

  var _super3 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(SkewY);

  function SkewY(document, skew, transformOrigin) {
    var _this6;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SkewY);

    _this6 = _super3.call(this, document, skew, transformOrigin);
    _this6.type = 'skewY';
    _this6.matrix = [1, Math.tan(_this6.angle.getRadians()), 0, 1, 0, 0];
    return _this6;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(SkewY);
}(Skew);

function parseTransforms(transform) {
  return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
}

function parseTransform(transform) {
  var _transform$split = transform.split('('),
      _transform$split2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_transform$split, 2),
      type = _transform$split2[0],
      value = _transform$split2[1];

  return [type.trim(), value.trim().replace(')', '')];
}

var Transform = /*#__PURE__*/function () {
  function Transform(document, transform, transformOrigin) {
    var _this7 = this;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Transform);

    this.document = document;
    this.transforms = [];
    var data = parseTransforms(transform);
    data.forEach(function (transform) {
      if (transform === 'none') {
        return;
      }

      var _parseTransform = parseTransform(transform),
          _parseTransform2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_parseTransform, 2),
          type = _parseTransform2[0],
          value = _parseTransform2[1];

      var TransformType = Transform.transformTypes[type];

      if (typeof TransformType !== 'undefined') {
        _this7.transforms.push(new TransformType(_this7.document, value, transformOrigin));
      }
    });
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Transform, [{
    key: "apply",
    value: function apply(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;

      for (var i = 0; i < len; i++) {
        transforms[i].apply(ctx);
      }
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;

      for (var i = len - 1; i >= 0; i--) {
        transforms[i].unapply(ctx);
      }
    } // TODO: applyToPoint unused ... remove?

  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var transforms = this.transforms;
      var len = transforms.length;

      for (var i = 0; i < len; i++) {
        transforms[i].applyToPoint(point);
      }
    }
  }], [{
    key: "fromElement",
    value: function fromElement(document, element) {
      var transformStyle = element.getStyle('transform', false, true);

      var _element$getStyle$spl = element.getStyle('transform-origin', false, true).split(),
          _element$getStyle$spl2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_element$getStyle$spl, 2),
          transformOriginXProperty = _element$getStyle$spl2[0],
          _element$getStyle$spl3 = _element$getStyle$spl2[1],
          transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;

      var transformOrigin = [transformOriginXProperty, transformOriginYProperty];

      if (transformStyle.hasValue()) {
        return new Transform(document, transformStyle.getString(), transformOrigin);
      }

      return null;
    }
  }]);

  return Transform;
}();

Transform.transformTypes = {
  translate: Translate,
  rotate: Rotate,
  scale: Scale,
  matrix: Matrix,
  skewX: SkewX,
  skewY: SkewY
};

var Element = /*#__PURE__*/function () {
  function Element(document, node) {
    var _this8 = this;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Element);

    var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    this.document = document;
    this.node = node;
    this.captureTextNodes = captureTextNodes;
    this.attributes = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.animationFrozen = false;
    this.animationFrozenValue = '';
    this.parent = null;
    this.children = [];

    if (!node || node.nodeType !== 1) {
      // ELEMENT_NODE
      return;
    } // add attributes


    Array.from(node.attributes).forEach(function (attribute) {
      var nodeName = normalizeAttributeName(attribute.nodeName);
      _this8.attributes[nodeName] = new Property(document, nodeName, attribute.value);
    });
    this.addStylesFromStyleDefinition(); // add inline styles

    if (this.getAttribute('style').hasValue()) {
      var styles = this.getAttribute('style').getString().split(';').map(function (_) {
        return _.trim();
      });
      styles.forEach(function (style) {
        if (!style) {
          return;
        }

        var _style$split$map = style.split(':').map(function (_) {
          return _.trim();
        }),
            _style$split$map2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_style$split$map, 2),
            name = _style$split$map2[0],
            value = _style$split$map2[1];

        _this8.styles[name] = new Property(document, name, value);
      });
    }

    var definitions = document.definitions;
    var id = this.getAttribute('id'); // add id

    if (id.hasValue()) {
      if (!definitions[id.getString()]) {
        definitions[id.getString()] = this;
      }
    }

    Array.from(node.childNodes).forEach(function (childNode) {
      if (childNode.nodeType === 1) {
        _this8.addChild(childNode); // ELEMENT_NODE

      } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
        var textNode = document.createTextNode(childNode);

        if (textNode.getText().length > 0) {
          _this8.addChild(textNode); // TEXT_NODE

        }
      }
    });
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Element, [{
    key: "getAttribute",
    value: function getAttribute(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var attr = this.attributes[name];

      if (!attr && createIfNotExists) {
        var _attr = new Property(this.document, name, '');

        this.attributes[name] = _attr;
        return _attr;
      }

      return attr || Property.empty(this.document);
    }
  }, {
    key: "getHrefAttribute",
    value: function getHrefAttribute() {
      for (var key in this.attributes) {
        if (key === 'href' || key.endsWith(':href')) {
          return this.attributes[key];
        }
      }

      return Property.empty(this.document);
    }
  }, {
    key: "getStyle",
    value: function getStyle(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var style = this.styles[name];

      if (style) {
        return style;
      }

      var attr = this.getAttribute(name);

      if (attr !== null && attr !== void 0 && attr.hasValue()) {
        this.styles[name] = attr; // move up to me to cache

        return attr;
      }

      if (!skipAncestors) {
        var parent = this.parent;

        if (parent) {
          var parentStyle = parent.getStyle(name);

          if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) {
            return parentStyle;
          }
        }
      }

      if (createIfNotExists) {
        var _style = new Property(this.document, name, '');

        this.styles[name] = _style;
        return _style;
      }

      return style || Property.empty(this.document);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      // don't render display=none
      // don't render visibility=hidden
      if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') {
        return;
      }

      ctx.save();

      if (this.getStyle('mask').hasValue()) {
        // mask
        var mask = this.getStyle('mask').getDefinition();

        if (mask) {
          this.applyEffects(ctx);
          mask.apply(ctx, this);
        }
      } else if (this.getStyle('filter').getValue('none') !== 'none') {
        // filter
        var filter = this.getStyle('filter').getDefinition();

        if (filter) {
          this.applyEffects(ctx);
          filter.apply(ctx, this);
        }
      } else {
        this.setContext(ctx);
        this.renderChildren(ctx);
        this.clearContext(ctx);
      }

      ctx.restore();
    }
  }, {
    key: "setContext",
    value: function setContext(_) {// NO RENDER
    }
  }, {
    key: "applyEffects",
    value: function applyEffects(ctx) {
      // transform
      var transform = Transform.fromElement(this.document, this);

      if (transform) {
        transform.apply(ctx);
      } // clip


      var clipPathStyleProp = this.getStyle('clip-path', false, true);

      if (clipPathStyleProp.hasValue()) {
        var clip = clipPathStyleProp.getDefinition();

        if (clip) {
          clip.apply(ctx);
        }
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(_) {// NO RENDER
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.children.forEach(function (child) {
        child.render(ctx);
      });
    }
  }, {
    key: "addChild",
    value: function addChild(childNode) {
      var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
      child.parent = this;

      if (!Element.ignoreChildTypes.includes(child.type)) {
        this.children.push(child);
      }
    }
  }, {
    key: "matchesSelector",
    value: function matchesSelector(selector) {
      var _node$getAttribute;

      var node = this.node;

      if (typeof node.matches === 'function') {
        return node.matches(selector);
      }

      var styleClasses = (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'class');

      if (!styleClasses || styleClasses === '') {
        return false;
      }

      return styleClasses.split(' ').some(function (styleClass) {
        return ".".concat(styleClass) === selector;
      });
    }
  }, {
    key: "addStylesFromStyleDefinition",
    value: function addStylesFromStyleDefinition() {
      var _this$document = this.document,
          styles = _this$document.styles,
          stylesSpecificity = _this$document.stylesSpecificity;

      for (var selector in styles) {
        if (!selector.startsWith('@') && this.matchesSelector(selector)) {
          var style = styles[selector];
          var specificity = stylesSpecificity[selector];

          if (style) {
            for (var name in style) {
              var existingSpecificity = this.stylesSpecificity[name];

              if (typeof existingSpecificity === 'undefined') {
                existingSpecificity = '000';
              }

              if (specificity >= existingSpecificity) {
                this.styles[name] = style[name];
                this.stylesSpecificity[name] = specificity;
              }
            }
          }
        }
      }
    }
  }, {
    key: "removeStyles",
    value: function removeStyles(element, ignoreStyles) {
      var toRestore = ignoreStyles.reduce(function (toRestore, name) {
        var styleProp = element.getStyle(name);

        if (!styleProp.hasValue()) {
          return toRestore;
        }

        var value = styleProp.getString();
        styleProp.setValue('');
        return [].concat(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(toRestore), [[name, value]]);
      }, []);
      return toRestore;
    }
  }, {
    key: "restoreStyles",
    value: function restoreStyles(element, styles) {
      styles.forEach(function (_ref) {
        var _ref10 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref, 2),
            name = _ref10[0],
            value = _ref10[1];

        element.getStyle(name, true).setValue(value);
      });
    }
  }, {
    key: "isFirstChild",
    value: function isFirstChild() {
      var _this$parent;

      return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
    }
  }]);

  return Element;
}();

Element.ignoreChildTypes = ['title'];

var UnknownElement = /*#__PURE__*/function (_Element) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UnknownElement, _Element);

  var _super4 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(UnknownElement);

  function UnknownElement(document, node, captureTextNodes) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, UnknownElement);

    return _super4.call(this, document, node, captureTextNodes);
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(UnknownElement);
}(Element);

function wrapFontFamily(fontFamily) {
  var trimmed = fontFamily.trim();
  return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
}

function prepareFontFamily(fontFamily) {
  return typeof process === 'undefined' ? fontFamily : fontFamily.trim().split(',').map(wrapFontFamily).join(',');
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
 * @param fontStyle
 * @returns CSS font style.
 */


function prepareFontStyle(fontStyle) {
  if (!fontStyle) {
    return '';
  }

  var targetFontStyle = fontStyle.trim().toLowerCase();

  switch (targetFontStyle) {
    case 'normal':
    case 'italic':
    case 'oblique':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontStyle;

    default:
      if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
        return targetFontStyle;
      }

      return '';
  }
}
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
 * @param fontWeight
 * @returns CSS font weight.
 */


function prepareFontWeight(fontWeight) {
  if (!fontWeight) {
    return '';
  }

  var targetFontWeight = fontWeight.trim().toLowerCase();

  switch (targetFontWeight) {
    case 'normal':
    case 'bold':
    case 'lighter':
    case 'bolder':
    case 'inherit':
    case 'initial':
    case 'unset':
      return targetFontWeight;

    default:
      if (/^[\d.]+$/.test(targetFontWeight)) {
        return targetFontWeight;
      }

      return '';
  }
}

var Font = /*#__PURE__*/function () {
  function Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Font);

    var inheritFont = inherit ? typeof inherit === 'string' ? Font.parse(inherit) : inherit : {};
    this.fontFamily = fontFamily || inheritFont.fontFamily;
    this.fontSize = fontSize || inheritFont.fontSize;
    this.fontStyle = fontStyle || inheritFont.fontStyle;
    this.fontWeight = fontWeight || inheritFont.fontWeight;
    this.fontVariant = fontVariant || inheritFont.fontVariant;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Font, [{
    key: "toString",
    value: function toString() {
      return [prepareFontStyle(this.fontStyle), this.fontVariant, prepareFontWeight(this.fontWeight), this.fontSize, // Wrap fontFamily only on nodejs and only for canvas.ctx
      prepareFontFamily(this.fontFamily)].join(' ').trim();
    }
  }], [{
    key: "parse",
    value: function parse() {
      var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var inherit = arguments.length > 1 ? arguments[1] : undefined;
      var fontStyle = '';
      var fontVariant = '';
      var fontWeight = '';
      var fontSize = '';
      var fontFamily = '';
      var parts = compressSpaces(font).trim().split(' ');
      var set = {
        fontSize: false,
        fontStyle: false,
        fontWeight: false,
        fontVariant: false
      };
      parts.forEach(function (part) {
        switch (true) {
          case !set.fontStyle && Font.styles.includes(part):
            if (part !== 'inherit') {
              fontStyle = part;
            }

            set.fontStyle = true;
            break;

          case !set.fontVariant && Font.variants.includes(part):
            if (part !== 'inherit') {
              fontVariant = part;
            }

            set.fontStyle = true;
            set.fontVariant = true;
            break;

          case !set.fontWeight && Font.weights.includes(part):
            if (part !== 'inherit') {
              fontWeight = part;
            }

            set.fontStyle = true;
            set.fontVariant = true;
            set.fontWeight = true;
            break;

          case !set.fontSize:
            if (part !== 'inherit') {
              var _part$split = part.split('/');

              var _part$split2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_part$split, 1);

              fontSize = _part$split2[0];
            }

            set.fontStyle = true;
            set.fontVariant = true;
            set.fontWeight = true;
            set.fontSize = true;
            break;

          default:
            if (part !== 'inherit') {
              fontFamily += part;
            }

        }
      });
      return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
    }
  }]);

  return Font;
}();

Font.styles = 'normal|italic|oblique|inherit';
Font.variants = 'normal|small-caps|inherit';
Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

var BoundingBox = /*#__PURE__*/function () {
  function BoundingBox() {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, BoundingBox);

    var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
    var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
    var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
    var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.addPoint(x1, y1);
    this.addPoint(x2, y2);
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(BoundingBox, [{
    key: "x",
    get: function get() {
      return this.x1;
    }
  }, {
    key: "y",
    get: function get() {
      return this.y1;
    }
  }, {
    key: "width",
    get: function get() {
      return this.x2 - this.x1;
    }
  }, {
    key: "height",
    get: function get() {
      return this.y2 - this.y1;
    }
  }, {
    key: "addPoint",
    value: function addPoint(x, y) {
      if (typeof x !== 'undefined') {
        if (isNaN(this.x1) || isNaN(this.x2)) {
          this.x1 = x;
          this.x2 = x;
        }

        if (x < this.x1) {
          this.x1 = x;
        }

        if (x > this.x2) {
          this.x2 = x;
        }
      }

      if (typeof y !== 'undefined') {
        if (isNaN(this.y1) || isNaN(this.y2)) {
          this.y1 = y;
          this.y2 = y;
        }

        if (y < this.y1) {
          this.y1 = y;
        }

        if (y > this.y2) {
          this.y2 = y;
        }
      }
    }
  }, {
    key: "addX",
    value: function addX(x) {
      this.addPoint(x, null);
    }
  }, {
    key: "addY",
    value: function addY(y) {
      this.addPoint(null, y);
    }
  }, {
    key: "addBoundingBox",
    value: function addBoundingBox(boundingBox) {
      if (!boundingBox) {
        return;
      }

      var x1 = boundingBox.x1,
          y1 = boundingBox.y1,
          x2 = boundingBox.x2,
          y2 = boundingBox.y2;
      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    }
  }, {
    key: "sumCubic",
    value: function sumCubic(t, p0, p1, p2, p3) {
      return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
    }
  }, {
    key: "bezierCurveAdd",
    value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
      var b = 6 * p0 - 12 * p1 + 6 * p2;
      var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
      var c = 3 * p1 - 3 * p0;

      if (a === 0) {
        if (b === 0) {
          return;
        }

        var t = -c / b;

        if (0 < t && t < 1) {
          if (forX) {
            this.addX(this.sumCubic(t, p0, p1, p2, p3));
          } else {
            this.addY(this.sumCubic(t, p0, p1, p2, p3));
          }
        }

        return;
      }

      var b2ac = Math.pow(b, 2) - 4 * c * a;

      if (b2ac < 0) {
        return;
      }

      var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);

      if (0 < t1 && t1 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t1, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t1, p0, p1, p2, p3));
        }
      }

      var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);

      if (0 < t2 && t2 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t2, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t2, p0, p1, p2, p3));
        }
      }
    } // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html

  }, {
    key: "addBezierCurve",
    value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
      this.addPoint(p0x, p0y);
      this.addPoint(p3x, p3y);
      this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
      this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
    }
  }, {
    key: "addQuadraticCurve",
    value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
      var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)

      var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)

      var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)

      var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)

      this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
    }
  }, {
    key: "isPointInBox",
    value: function isPointInBox(x, y) {
      var x1 = this.x1,
          y1 = this.y1,
          x2 = this.x2,
          y2 = this.y2;
      return x1 <= x && x <= x2 && y1 <= y && y <= y2;
    }
  }]);

  return BoundingBox;
}();

var PathParser = /*#__PURE__*/function (_SVGPathData) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PathParser, _SVGPathData);

  var _super5 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PathParser);

  function PathParser(path) {
    var _this9;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PathParser);

    _this9 = _super5.call(this, path // Fix spaces after signs.
    .replace(/([+\-.])\s+/gm, '$1') // Remove invalid part.
    .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''));
    _this9.control = null;
    _this9.start = null;
    _this9.current = null;
    _this9.command = null;
    _this9.commands = _this9.commands;
    _this9.i = -1;
    _this9.previousCommand = null;
    _this9.points = [];
    _this9.angles = [];
    return _this9;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PathParser, [{
    key: "reset",
    value: function reset() {
      this.i = -1;
      this.command = null;
      this.previousCommand = null;
      this.start = new Point(0, 0);
      this.control = new Point(0, 0);
      this.current = new Point(0, 0);
      this.points = [];
      this.angles = [];
    }
  }, {
    key: "isEnd",
    value: function isEnd() {
      var i = this.i,
          commands = this.commands;
      return i >= commands.length - 1;
    }
  }, {
    key: "next",
    value: function next() {
      var command = this.commands[++this.i];
      this.previousCommand = this.command;
      this.command = command;
      return command;
    }
  }, {
    key: "getPoint",
    value: function getPoint() {
      var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
      var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
      var point = new Point(this.command[xProp], this.command[yProp]);
      return this.makeAbsolute(point);
    }
  }, {
    key: "getAsControlPoint",
    value: function getAsControlPoint(xProp, yProp) {
      var point = this.getPoint(xProp, yProp);
      this.control = point;
      return point;
    }
  }, {
    key: "getAsCurrentPoint",
    value: function getAsCurrentPoint(xProp, yProp) {
      var point = this.getPoint(xProp, yProp);
      this.current = point;
      return point;
    }
  }, {
    key: "getReflectedControlPoint",
    value: function getReflectedControlPoint() {
      var previousCommand = this.previousCommand.type;

      if (previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_28__["SVGPathData"].CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_28__["SVGPathData"].SMOOTH_CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_28__["SVGPathData"].QUAD_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_28__["SVGPathData"].SMOOTH_QUAD_TO) {
        return this.current;
      } // reflect point


      var _this$current = this.current,
          cx = _this$current.x,
          cy = _this$current.y,
          _this$control = this.control,
          ox = _this$control.x,
          oy = _this$control.y;
      var point = new Point(2 * cx - ox, 2 * cy - oy);
      return point;
    }
  }, {
    key: "makeAbsolute",
    value: function makeAbsolute(point) {
      if (this.command.relative) {
        var _this$current2 = this.current,
            x = _this$current2.x,
            y = _this$current2.y;
        point.x += x;
        point.y += y;
      }

      return point;
    }
  }, {
    key: "addMarker",
    value: function addMarker(point, from, priorTo) {
      var points = this.points,
          angles = this.angles; // if the last angle isn't filled in because we didn't have this point yet ...

      if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
        angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
      }

      this.addMarkerAngle(point, from ? from.angleTo(point) : null);
    }
  }, {
    key: "addMarkerAngle",
    value: function addMarkerAngle(point, angle) {
      this.points.push(point);
      this.angles.push(angle);
    }
  }, {
    key: "getMarkerPoints",
    value: function getMarkerPoints() {
      return this.points;
    }
  }, {
    key: "getMarkerAngles",
    value: function getMarkerAngles() {
      var angles = this.angles;
      var len = angles.length;

      for (var i = 0; i < len; i++) {
        if (!angles[i]) {
          for (var j = i + 1; j < len; j++) {
            if (angles[j]) {
              angles[i] = angles[j];
              break;
            }
          }
        }
      }

      return angles;
    }
  }]);

  return PathParser;
}(svg_pathdata__WEBPACK_IMPORTED_MODULE_28__["SVGPathData"]);

var RenderedElement = /*#__PURE__*/function (_Element2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RenderedElement, _Element2);

  var _super6 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(RenderedElement);

  function RenderedElement() {
    var _this10;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, RenderedElement);

    _this10 = _super6.apply(this, arguments);
    _this10.modifiedEmSizeStack = false;
    return _this10;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(RenderedElement, [{
    key: "calculateOpacity",
    value: function calculateOpacity() {
      var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this

      var element = this;

      while (element) {
        var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call

        if (opacityStyle.hasValue(true)) {
          opacity *= opacityStyle.getNumber();
        }

        element = element.parent;
      }

      return opacity;
    }
  }, {
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!fromMeasure) {
        // causes stack overflow when measuring text with gradients
        // fill
        var fillStyleProp = this.getStyle('fill');
        var fillOpacityStyleProp = this.getStyle('fill-opacity');
        var strokeStyleProp = this.getStyle('stroke');
        var strokeOpacityProp = this.getStyle('stroke-opacity');

        if (fillStyleProp.isUrlDefinition()) {
          var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);

          if (fillStyle) {
            ctx.fillStyle = fillStyle;
          }
        } else if (fillStyleProp.hasValue()) {
          if (fillStyleProp.getString() === 'currentColor') {
            fillStyleProp.setValue(this.getStyle('color').getColor());
          }

          var _fillStyle = fillStyleProp.getColor();

          if (_fillStyle !== 'inherit') {
            ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
          }
        }

        if (fillOpacityStyleProp.hasValue()) {
          var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();

          ctx.fillStyle = _fillStyle2;
        } // stroke


        if (strokeStyleProp.isUrlDefinition()) {
          var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);

          if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
          }
        } else if (strokeStyleProp.hasValue()) {
          if (strokeStyleProp.getString() === 'currentColor') {
            strokeStyleProp.setValue(this.getStyle('color').getColor());
          }

          var _strokeStyle = strokeStyleProp.getString();

          if (_strokeStyle !== 'inherit') {
            ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
          }
        }

        if (strokeOpacityProp.hasValue()) {
          var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();

          ctx.strokeStyle = _strokeStyle2;
        }

        var strokeWidthStyleProp = this.getStyle('stroke-width');

        if (strokeWidthStyleProp.hasValue()) {
          var newLineWidth = strokeWidthStyleProp.getPixels();
          ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
          : newLineWidth;
        }

        var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
        var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
        var strokeMiterlimitProp = this.getStyle('stroke-miterlimit'); // NEED TEST
        // const pointOrderStyleProp = this.getStyle('paint-order');

        var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
        var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');

        if (strokeLinecapStyleProp.hasValue()) {
          ctx.lineCap = strokeLinecapStyleProp.getString();
        }

        if (strokeLinejoinStyleProp.hasValue()) {
          ctx.lineJoin = strokeLinejoinStyleProp.getString();
        }

        if (strokeMiterlimitProp.hasValue()) {
          ctx.miterLimit = strokeMiterlimitProp.getNumber();
        } // NEED TEST
        // if (pointOrderStyleProp.hasValue()) {
        // 	// ?
        // 	ctx.paintOrder = pointOrderStyleProp.getValue();
        // }


        if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
          var gaps = toNumbers(strokeDasharrayStyleProp.getString());

          if (typeof ctx.setLineDash !== 'undefined') {
            ctx.setLineDash(gaps);
          } else // @ts-expect-error Handle browser prefix.
            if (typeof ctx.webkitLineDash !== 'undefined') {
              // @ts-expect-error Handle browser prefix.
              ctx.webkitLineDash = gaps;
            } else // @ts-expect-error Handle browser prefix.
              if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) {
                // @ts-expect-error Handle browser prefix.
                ctx.mozDash = gaps;
              }

          var offset = strokeDashoffsetProp.getPixels();

          if (typeof ctx.lineDashOffset !== 'undefined') {
            ctx.lineDashOffset = offset;
          } else // @ts-expect-error Handle browser prefix.
            if (typeof ctx.webkitLineDashOffset !== 'undefined') {
              // @ts-expect-error Handle browser prefix.
              ctx.webkitLineDashOffset = offset;
            } else // @ts-expect-error Handle browser prefix.
              if (typeof ctx.mozDashOffset !== 'undefined') {
                // @ts-expect-error Handle browser prefix.
                ctx.mozDashOffset = offset;
              }
        }
      } // font


      this.modifiedEmSizeStack = false;

      if (typeof ctx.font !== 'undefined') {
        var fontStyleProp = this.getStyle('font');
        var fontStyleStyleProp = this.getStyle('font-style');
        var fontVariantStyleProp = this.getStyle('font-variant');
        var fontWeightStyleProp = this.getStyle('font-weight');
        var fontSizeStyleProp = this.getStyle('font-size');
        var fontFamilyStyleProp = this.getStyle('font-family');
        var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
        fontStyleStyleProp.setValue(font.fontStyle);
        fontVariantStyleProp.setValue(font.fontVariant);
        fontWeightStyleProp.setValue(font.fontWeight);
        fontSizeStyleProp.setValue(font.fontSize);
        fontFamilyStyleProp.setValue(font.fontFamily);
        ctx.font = font.toString();

        if (fontSizeStyleProp.isPixels()) {
          this.document.emSize = fontSizeStyleProp.getPixels();
          this.modifiedEmSizeStack = true;
        }
      }

      if (!fromMeasure) {
        // effects
        this.applyEffects(ctx); // opacity

        ctx.globalAlpha = this.calculateOpacity();
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(RenderedElement.prototype), "clearContext", this).call(this, ctx);

      if (this.modifiedEmSizeStack) {
        this.document.popEmSize();
      }
    }
  }]);

  return RenderedElement;
}(Element);

var PathElement = /*#__PURE__*/function (_RenderedElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PathElement, _RenderedElement);

  var _super7 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PathElement);

  function PathElement(document, node, captureTextNodes) {
    var _this11;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PathElement);

    _this11 = _super7.call(this, document, node, captureTextNodes);
    _this11.type = 'path';
    _this11.pathParser = null;
    _this11.pathParser = new PathParser(_this11.getAttribute('d').getString());
    return _this11;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PathElement, [{
    key: "path",
    value: function path(ctx) {
      var pathParser = this.pathParser;
      var boundingBox = new BoundingBox();
      pathParser.reset();

      if (ctx) {
        ctx.beginPath();
      }

      while (!pathParser.isEnd()) {
        switch (pathParser.next().type) {
          case PathParser.MOVE_TO:
            this.pathM(ctx, boundingBox);
            break;

          case PathParser.LINE_TO:
            this.pathL(ctx, boundingBox);
            break;

          case PathParser.HORIZ_LINE_TO:
            this.pathH(ctx, boundingBox);
            break;

          case PathParser.VERT_LINE_TO:
            this.pathV(ctx, boundingBox);
            break;

          case PathParser.CURVE_TO:
            this.pathC(ctx, boundingBox);
            break;

          case PathParser.SMOOTH_CURVE_TO:
            this.pathS(ctx, boundingBox);
            break;

          case PathParser.QUAD_TO:
            this.pathQ(ctx, boundingBox);
            break;

          case PathParser.SMOOTH_QUAD_TO:
            this.pathT(ctx, boundingBox);
            break;

          case PathParser.ARC:
            this.pathA(ctx, boundingBox);
            break;

          case PathParser.CLOSE_PATH:
            this.pathZ(ctx, boundingBox);
            break;
        }
      }

      return boundingBox;
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(_) {
      return this.path();
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var pathParser = this.pathParser;
      var points = pathParser.getMarkerPoints();
      var angles = pathParser.getMarkerAngles();
      var markers = points.map(function (point, i) {
        return [point, angles[i]];
      });
      return markers;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.path(ctx);
      this.document.screen.mouse.checkPath(this, ctx);
      var fillRuleStyleProp = this.getStyle('fill-rule');

      if (ctx.fillStyle !== '') {
        if (fillRuleStyleProp.getString('inherit') !== 'inherit') {
          ctx.fill(fillRuleStyleProp.getString());
        } else {
          ctx.fill();
        }
      }

      if (ctx.strokeStyle !== '') {
        if (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke') {
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.stroke();
          ctx.restore();
        } else {
          ctx.stroke();
        }
      }

      var markers = this.getMarkers();

      if (markers) {
        var markersLastIndex = markers.length - 1;
        var markerStartStyleProp = this.getStyle('marker-start');
        var markerMidStyleProp = this.getStyle('marker-mid');
        var markerEndStyleProp = this.getStyle('marker-end');

        if (markerStartStyleProp.isUrlDefinition()) {
          var marker = markerStartStyleProp.getDefinition();

          var _markers$ = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(markers[0], 2),
              point = _markers$[0],
              angle = _markers$[1];

          marker.render(ctx, point, angle);
        }

        if (markerMidStyleProp.isUrlDefinition()) {
          var _marker = markerMidStyleProp.getDefinition();

          for (var i = 1; i < markersLastIndex; i++) {
            var _markers$i = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(markers[i], 2),
                _point = _markers$i[0],
                _angle = _markers$i[1];

            _marker.render(ctx, _point, _angle);
          }
        }

        if (markerEndStyleProp.isUrlDefinition()) {
          var _marker2 = markerEndStyleProp.getDefinition();

          var _markers$markersLastI = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(markers[markersLastIndex], 2),
              _point2 = _markers$markersLastI[0],
              _angle2 = _markers$markersLastI[1];

          _marker2.render(ctx, _point2, _angle2);
        }
      }
    }
  }, {
    key: "pathM",
    value: function pathM(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathM = PathElement.pathM(pathParser),
          point = _PathElement$pathM.point;

      var x = point.x,
          y = point.y;
      pathParser.addMarker(point);
      boundingBox.addPoint(x, y);

      if (ctx) {
        ctx.moveTo(x, y);
      }
    }
  }, {
    key: "pathL",
    value: function pathL(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathL = PathElement.pathL(pathParser),
          current = _PathElement$pathL.current,
          point = _PathElement$pathL.point;

      var x = point.x,
          y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);

      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathH",
    value: function pathH(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathH = PathElement.pathH(pathParser),
          current = _PathElement$pathH.current,
          point = _PathElement$pathH.point;

      var x = point.x,
          y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);

      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathV",
    value: function pathV(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathV = PathElement.pathV(pathParser),
          current = _PathElement$pathV.current,
          point = _PathElement$pathV.point;

      var x = point.x,
          y = point.y;
      pathParser.addMarker(point, current);
      boundingBox.addPoint(x, y);

      if (ctx) {
        ctx.lineTo(x, y);
      }
    }
  }, {
    key: "pathC",
    value: function pathC(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathC = PathElement.pathC(pathParser),
          current = _PathElement$pathC.current,
          point = _PathElement$pathC.point,
          controlPoint = _PathElement$pathC.controlPoint,
          currentPoint = _PathElement$pathC.currentPoint;

      pathParser.addMarker(currentPoint, controlPoint, point);
      boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

      if (ctx) {
        ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathS",
    value: function pathS(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathS = PathElement.pathS(pathParser),
          current = _PathElement$pathS.current,
          point = _PathElement$pathS.point,
          controlPoint = _PathElement$pathS.controlPoint,
          currentPoint = _PathElement$pathS.currentPoint;

      pathParser.addMarker(currentPoint, controlPoint, point);
      boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

      if (ctx) {
        ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathQ",
    value: function pathQ(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathQ = PathElement.pathQ(pathParser),
          current = _PathElement$pathQ.current,
          controlPoint = _PathElement$pathQ.controlPoint,
          currentPoint = _PathElement$pathQ.currentPoint;

      pathParser.addMarker(currentPoint, controlPoint, controlPoint);
      boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

      if (ctx) {
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathT",
    value: function pathT(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathT = PathElement.pathT(pathParser),
          current = _PathElement$pathT.current,
          controlPoint = _PathElement$pathT.controlPoint,
          currentPoint = _PathElement$pathT.currentPoint;

      pathParser.addMarker(currentPoint, controlPoint, controlPoint);
      boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

      if (ctx) {
        ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathA",
    value: function pathA(ctx, boundingBox) {
      var pathParser = this.pathParser;

      var _PathElement$pathA = PathElement.pathA(pathParser),
          currentPoint = _PathElement$pathA.currentPoint,
          rX = _PathElement$pathA.rX,
          rY = _PathElement$pathA.rY,
          sweepFlag = _PathElement$pathA.sweepFlag,
          xAxisRotation = _PathElement$pathA.xAxisRotation,
          centp = _PathElement$pathA.centp,
          a1 = _PathElement$pathA.a1,
          ad = _PathElement$pathA.ad; // for markers


      var dir = 1 - sweepFlag ? 1.0 : -1.0;
      var ah = a1 + dir * (ad / 2.0);
      var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
      pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
      pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
      boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better

      if (ctx && !isNaN(a1) && !isNaN(ad)) {
        var r = rX > rY ? rX : rY;
        var sx = rX > rY ? 1 : rX / rY;
        var sy = rX > rY ? rY / rX : 1;
        ctx.translate(centp.x, centp.y);
        ctx.rotate(xAxisRotation);
        ctx.scale(sx, sy);
        ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
        ctx.scale(1 / sx, 1 / sy);
        ctx.rotate(-xAxisRotation);
        ctx.translate(-centp.x, -centp.y);
      }
    }
  }, {
    key: "pathZ",
    value: function pathZ(ctx, boundingBox) {
      PathElement.pathZ(this.pathParser);

      if (ctx) {
        // only close path if it is not a straight line
        if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
          ctx.closePath();
        }
      }
    }
  }], [{
    key: "pathM",
    value: function pathM(pathParser) {
      var point = pathParser.getAsCurrentPoint();
      pathParser.start = pathParser.current;
      return {
        point: point
      };
    }
  }, {
    key: "pathL",
    value: function pathL(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathH",
    value: function pathH(pathParser) {
      var current = pathParser.current,
          command = pathParser.command;
      var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
      pathParser.current = point;
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathV",
    value: function pathV(pathParser) {
      var current = pathParser.current,
          command = pathParser.command;
      var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
      pathParser.current = point;
      return {
        current: current,
        point: point
      };
    }
  }, {
    key: "pathC",
    value: function pathC(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getPoint('x1', 'y1');
      var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathS",
    value: function pathS(pathParser) {
      var current = pathParser.current;
      var point = pathParser.getReflectedControlPoint();
      var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        point: point,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathQ",
    value: function pathQ(pathParser) {
      var current = pathParser.current;
      var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathT",
    value: function pathT(pathParser) {
      var current = pathParser.current;
      var controlPoint = pathParser.getReflectedControlPoint();
      pathParser.control = controlPoint;
      var currentPoint = pathParser.getAsCurrentPoint();
      return {
        current: current,
        controlPoint: controlPoint,
        currentPoint: currentPoint
      };
    }
  }, {
    key: "pathA",
    value: function pathA(pathParser) {
      var current = pathParser.current,
          command = pathParser.command;
      var rX = command.rX,
          rY = command.rY,
          xRot = command.xRot,
          lArcFlag = command.lArcFlag,
          sweepFlag = command.sweepFlag;
      var xAxisRotation = xRot * (Math.PI / 180.0);
      var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
      // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
      // x1', y1'

      var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii

      var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);

      if (l > 1) {
        rX *= Math.sqrt(l);
        rY *= Math.sqrt(l);
      } // cx', cy'


      var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));

      if (isNaN(s)) {
        s = 0;
      }

      var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy

      var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle

      var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]); // θ1
      // angle delta

      var u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
      var v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
      var ad = vectorsAngle(u, v); // Δθ

      if (vectorsRatio(u, v) <= -1) {
        ad = Math.PI;
      }

      if (vectorsRatio(u, v) >= 1) {
        ad = 0;
      }

      return {
        currentPoint: currentPoint,
        rX: rX,
        rY: rY,
        sweepFlag: sweepFlag,
        xAxisRotation: xAxisRotation,
        centp: centp,
        a1: a1,
        ad: ad
      };
    }
  }, {
    key: "pathZ",
    value: function pathZ(pathParser) {
      pathParser.current = pathParser.start;
    }
  }]);

  return PathElement;
}(RenderedElement);

var GlyphElement = /*#__PURE__*/function (_PathElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GlyphElement, _PathElement);

  var _super8 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(GlyphElement);

  function GlyphElement(document, node, captureTextNodes) {
    var _this12;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, GlyphElement);

    _this12 = _super8.call(this, document, node, captureTextNodes);
    _this12.type = 'glyph';
    _this12.horizAdvX = _this12.getAttribute('horiz-adv-x').getNumber();
    _this12.unicode = _this12.getAttribute('unicode').getString();
    _this12.arabicForm = _this12.getAttribute('arabic-form').getString();
    return _this12;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(GlyphElement);
}(PathElement);

var TextElement = /*#__PURE__*/function (_RenderedElement2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextElement, _RenderedElement2);

  var _super9 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TextElement);

  function TextElement(document, node, captureTextNodes) {
    var _this13;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TextElement);

    _this13 = _super9.call(this, document, node, (this instanceof TextElement ? this.constructor : void 0) === TextElement ? true : captureTextNodes);
    _this13.type = 'text';
    _this13.x = 0;
    _this13.y = 0;
    _this13.measureCache = -1;
    return _this13;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TextElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TextElement.prototype), "setContext", this).call(this, ctx, fromMeasure);

      var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();

      if (textBaseline) {
        ctx.textBaseline = textBaseline;
      }
    }
  }, {
    key: "initializeCoordinates",
    value: function initializeCoordinates() {
      this.x = 0;
      this.y = 0;
      this.leafTexts = [];
      this.textChunkStart = 0;
      this.minX = Number.POSITIVE_INFINITY;
      this.maxX = Number.NEGATIVE_INFINITY;
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var _this14 = this;

      if (this.type !== 'text') {
        return this.getTElementBoundingBox(ctx);
      } // first, calculate child positions


      this.initializeCoordinates();
      this.adjustChildCoordinatesRecursive(ctx);
      var boundingBox = null; // then calculate bounding box

      this.children.forEach(function (_, i) {
        var childBoundingBox = _this14.getChildBoundingBox(ctx, _this14, _this14, i);

        if (!boundingBox) {
          boundingBox = childBoundingBox;
        } else {
          boundingBox.addBoundingBox(childBoundingBox);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      var document = this.document,
          parent = this.parent;
      var inheritFontSize = Font.parse(document.ctx.font).fontSize;
      var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
      return fontSize;
    }
  }, {
    key: "getTElementBoundingBox",
    value: function getTElementBoundingBox(ctx) {
      var fontSize = this.getFontSize();
      return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
    }
  }, {
    key: "getGlyph",
    value: function getGlyph(font, text, i) {
      var char = text[i];
      var glyph = null;

      if (font.isArabic) {
        var len = text.length;
        var prevChar = text[i - 1];
        var nextChar = text[i + 1];
        var arabicForm = 'isolated';

        if ((i === 0 || prevChar === ' ') && i < len - 1 && nextChar !== ' ') {
          arabicForm = 'terminal';
        }

        if (i > 0 && prevChar !== ' ' && i < len - 1 && nextChar !== ' ') {
          arabicForm = 'medial';
        }

        if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) {
          arabicForm = 'initial';
        }

        if (typeof font.glyphs[char] !== 'undefined') {
          // NEED TEST
          var maybeGlyph = font.glyphs[char];
          glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
        }
      } else {
        glyph = font.glyphs[char];
      }

      if (!glyph) {
        glyph = font.missingGlyph;
      }

      return glyph;
    }
  }, {
    key: "getText",
    value: function getText() {
      return '';
    }
  }, {
    key: "getTextFromNode",
    value: function getTextFromNode(node) {
      var textNode = node || this.node;
      var childNodes = Array.from(textNode.parentNode.childNodes);
      var index = childNodes.indexOf(textNode);
      var lastIndex = childNodes.length - 1;
      var text = compressSpaces( // textNode.value
      // || textNode.text
      textNode.textContent || '');

      if (index === 0) {
        text = trimLeft(text);
      }

      if (index === lastIndex) {
        text = trimRight(text);
      }

      return text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var _this15 = this;

      if (this.type !== 'text') {
        this.renderTElementChildren(ctx);
        return;
      } // first, calculate child positions


      this.initializeCoordinates();
      this.adjustChildCoordinatesRecursive(ctx); // then render

      this.children.forEach(function (_, i) {
        _this15.renderChild(ctx, _this15, _this15, i);
      });
      var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.

      if (mouse.isWorking()) {
        mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
      }
    }
  }, {
    key: "renderTElementChildren",
    value: function renderTElementChildren(ctx) {
      var document = this.document,
          parent = this.parent;
      var renderText = this.getText();
      var customFont = parent.getStyle('font-family').getDefinition();

      if (customFont) {
        var unitsPerEm = customFont.fontFace.unitsPerEm;
        var ctxFont = Font.parse(document.ctx.font);
        var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
        var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
        var scale = fontSize / unitsPerEm;
        var text = customFont.isRTL ? renderText.split('').reverse().join('') : renderText;
        var dx = toNumbers(parent.getAttribute('dx').getString());
        var len = text.length;

        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          ctx.translate(this.x, this.y);
          ctx.scale(scale, -scale);
          var lw = ctx.lineWidth;
          ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;

          if (fontStyle === 'italic') {
            ctx.transform(1, 0, .4, 1, 0, 0);
          }

          glyph.render(ctx);

          if (fontStyle === 'italic') {
            ctx.transform(1, 0, -.4, 1, 0, 0);
          }

          ctx.lineWidth = lw;
          ctx.scale(1 / scale, -1 / scale);
          ctx.translate(-this.x, -this.y);
          this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;

          if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
            this.x += dx[i];
          }
        }

        return;
      }

      var x = this.x,
          y = this.y; // NEED TEST
      // if (ctx.paintOrder === 'stroke') {
      // 	if (ctx.strokeStyle) {
      // 		ctx.strokeText(renderText, x, y);
      // 	}
      // 	if (ctx.fillStyle) {
      // 		ctx.fillText(renderText, x, y);
      // 	}
      // } else {

      if (ctx.fillStyle) {
        ctx.fillText(renderText, x, y);
      }

      if (ctx.strokeStyle) {
        ctx.strokeText(renderText, x, y);
      } // }

    }
  }, {
    key: "applyAnchoring",
    value: function applyAnchoring() {
      if (this.textChunkStart >= this.leafTexts.length) {
        return;
      } // This is basically the "Apply anchoring" part of https://www.w3.org/TR/SVG2/text.html#TextLayoutAlgorithm.
      // The difference is that we apply the anchoring as soon as a chunk is finished. This saves some extra looping.
      // Vertical text is not supported.


      var firstElement = this.leafTexts[this.textChunkStart];
      var textAnchor = firstElement.getStyle('text-anchor').getString('start');
      var isRTL = false; // we treat RTL like LTR

      var shift = 0;

      if (textAnchor === 'start' && !isRTL || textAnchor === 'end' && isRTL) {
        shift = firstElement.x - this.minX;
      } else if (textAnchor === 'end' && !isRTL || textAnchor === 'start' && isRTL) {
        shift = firstElement.x - this.maxX;
      } else {
        shift = firstElement.x - (this.minX + this.maxX) / 2;
      }

      for (var i = this.textChunkStart; i < this.leafTexts.length; i++) {
        this.leafTexts[i].x += shift;
      } // start new chunk


      this.minX = Number.POSITIVE_INFINITY;
      this.maxX = Number.NEGATIVE_INFINITY;
      this.textChunkStart = this.leafTexts.length;
    }
  }, {
    key: "adjustChildCoordinatesRecursive",
    value: function adjustChildCoordinatesRecursive(ctx) {
      var _this16 = this;

      this.children.forEach(function (_, i) {
        _this16.adjustChildCoordinatesRecursiveCore(ctx, _this16, _this16, i);
      });
      this.applyAnchoring();
    }
  }, {
    key: "adjustChildCoordinatesRecursiveCore",
    value: function adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
      var child = parent.children[i];

      if (child.children.length > 0) {
        child.children.forEach(function (_, i) {
          textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i);
        });
      } else {
        // only leafs are relevant
        this.adjustChildCoordinates(ctx, textParent, parent, i);
      }
    }
  }, {
    key: "adjustChildCoordinates",
    value: function adjustChildCoordinates(ctx, textParent, parent, i) {
      var child = parent.children[i];

      if (typeof child.measureText !== 'function') {
        return child;
      }

      ctx.save();
      child.setContext(ctx, true);
      var xAttr = child.getAttribute('x');
      var yAttr = child.getAttribute('y');
      var dxAttr = child.getAttribute('dx');
      var dyAttr = child.getAttribute('dy');
      var customFont = child.getStyle('font-family').getDefinition();
      var isRTL = Boolean(customFont) && customFont.isRTL;

      if (i === 0) {
        // First children inherit attributes from parent(s). Positional attributes
        // are only inherited from a parent to it's first child.
        if (!xAttr.hasValue()) {
          xAttr.setValue(child.getInheritedAttribute('x'));
        }

        if (!yAttr.hasValue()) {
          yAttr.setValue(child.getInheritedAttribute('y'));
        }

        if (!dxAttr.hasValue()) {
          dxAttr.setValue(child.getInheritedAttribute('dx'));
        }

        if (!dyAttr.hasValue()) {
          dyAttr.setValue(child.getInheritedAttribute('dy'));
        }
      }

      var width = child.measureText(ctx);

      if (isRTL) {
        textParent.x -= width;
      }

      if (xAttr.hasValue()) {
        // an "x" attribute marks the start of a new chunk
        textParent.applyAnchoring();
        child.x = xAttr.getPixels('x');

        if (dxAttr.hasValue()) {
          child.x += dxAttr.getPixels('x');
        }
      } else {
        if (dxAttr.hasValue()) {
          textParent.x += dxAttr.getPixels('x');
        }

        child.x = textParent.x;
      }

      textParent.x = child.x;

      if (!isRTL) {
        textParent.x += width;
      }

      if (yAttr.hasValue()) {
        child.y = yAttr.getPixels('y');

        if (dyAttr.hasValue()) {
          child.y += dyAttr.getPixels('y');
        }
      } else {
        if (dyAttr.hasValue()) {
          textParent.y += dyAttr.getPixels('y');
        }

        child.y = textParent.y;
      }

      textParent.y = child.y; // update the current chunk and it's bounds

      textParent.leafTexts.push(child);
      textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
      textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
      child.clearContext(ctx);
      ctx.restore();
      return child;
    }
  }, {
    key: "getChildBoundingBox",
    value: function getChildBoundingBox(ctx, textParent, parent, i) {
      var child = parent.children[i]; // not a text node?

      if (typeof child.getBoundingBox !== 'function') {
        return null;
      }

      var boundingBox = child.getBoundingBox(ctx);

      if (!boundingBox) {
        return null;
      }

      child.children.forEach(function (_, i) {
        var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
        boundingBox.addBoundingBox(childBoundingBox);
      });
      return boundingBox;
    }
  }, {
    key: "renderChild",
    value: function renderChild(ctx, textParent, parent, i) {
      var child = parent.children[i];
      child.render(ctx);
      child.children.forEach(function (_, i) {
        textParent.renderChild(ctx, textParent, child, i);
      });
    }
  }, {
    key: "measureText",
    value: function measureText(ctx) {
      var measureCache = this.measureCache;

      if (~measureCache) {
        return measureCache;
      }

      var renderText = this.getText();
      var measure = this.measureTargetText(ctx, renderText);
      this.measureCache = measure;
      return measure;
    }
  }, {
    key: "measureTargetText",
    value: function measureTargetText(ctx, targetText) {
      if (!targetText.length) {
        return 0;
      }

      var parent = this.parent;
      var customFont = parent.getStyle('font-family').getDefinition();

      if (customFont) {
        var fontSize = this.getFontSize();
        var text = customFont.isRTL ? targetText.split('').reverse().join('') : targetText;
        var dx = toNumbers(parent.getAttribute('dx').getString());
        var len = text.length;
        var _measure = 0;

        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;

          if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
            _measure += dx[i];
          }
        }

        return _measure;
      }

      if (!ctx.measureText) {
        return targetText.length * 10;
      }

      ctx.save();
      this.setContext(ctx, true);

      var _ctx$measureText = ctx.measureText(targetText),
          measure = _ctx$measureText.width;

      this.clearContext(ctx);
      ctx.restore();
      return measure;
    }
    /**
     * Inherits positional attributes from {@link TextElement} parent(s). Attributes
     * are only inherited from a parent to its first child.
     * @param name - The attribute name.
     * @returns The attribute value or null.
     */

  }, {
    key: "getInheritedAttribute",
    value: function getInheritedAttribute(name) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias,consistent-this
      var current = this;

      while (current instanceof TextElement && current.isFirstChild()) {
        var parentAttr = current.parent.getAttribute(name);

        if (parentAttr.hasValue(true)) {
          return parentAttr.getValue('0');
        }

        current = current.parent;
      }

      return null;
    }
  }]);

  return TextElement;
}(RenderedElement);

var TSpanElement = /*#__PURE__*/function (_TextElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TSpanElement, _TextElement);

  var _super10 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TSpanElement);

  function TSpanElement(document, node, captureTextNodes) {
    var _this17;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TSpanElement);

    _this17 = _super10.call(this, document, node, (this instanceof TSpanElement ? this.constructor : void 0) === TSpanElement ? true : captureTextNodes);
    _this17.type = 'tspan'; // if this node has children, then they own the text

    _this17.text = _this17.children.length > 0 ? '' : _this17.getTextFromNode();
    return _this17;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TSpanElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }]);

  return TSpanElement;
}(TextElement);

var TextNode = /*#__PURE__*/function (_TSpanElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextNode, _TSpanElement);

  var _super11 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TextNode);

  function TextNode() {
    var _this18;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TextNode);

    _this18 = _super11.apply(this, arguments);
    _this18.type = 'textNode';
    return _this18;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TextNode);
}(TSpanElement);

var SVGElement = /*#__PURE__*/function (_RenderedElement3) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SVGElement, _RenderedElement3);

  var _super12 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(SVGElement);

  function SVGElement() {
    var _this19;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SVGElement);

    _this19 = _super12.apply(this, arguments);
    _this19.type = 'svg';
    _this19.root = false;
    return _this19;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(SVGElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      var _this$node$parentNode;

      var document = this.document;
      var screen = document.screen,
          window = document.window;
      var canvas = ctx.canvas;
      screen.setDefaults(ctx);

      if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
        ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
        var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);

        if (fontSizeProp.hasValue()) {
          document.rootEmSize = fontSizeProp.getPixels('y');
          document.emSize = document.rootEmSize;
        }
      } // create new view port


      if (!this.getAttribute('x').hasValue()) {
        this.getAttribute('x', true).setValue(0);
      }

      if (!this.getAttribute('y').hasValue()) {
        this.getAttribute('y', true).setValue(0);
      }

      var _screen$viewPort = screen.viewPort,
          width = _screen$viewPort.width,
          height = _screen$viewPort.height;

      if (!this.getStyle('width').hasValue()) {
        this.getStyle('width', true).setValue('100%');
      }

      if (!this.getStyle('height').hasValue()) {
        this.getStyle('height', true).setValue('100%');
      }

      if (!this.getStyle('color').hasValue()) {
        this.getStyle('color', true).setValue('black');
      }

      var refXAttr = this.getAttribute('refX');
      var refYAttr = this.getAttribute('refY');
      var viewBoxAttr = this.getAttribute('viewBox');
      var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
      var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
      var minX = 0;
      var minY = 0;
      var clipX = 0;
      var clipY = 0;

      if (viewBox) {
        minX = viewBox[0];
        minY = viewBox[1];
      }

      if (!this.root) {
        width = this.getStyle('width').getPixels('x');
        height = this.getStyle('height').getPixels('y');

        if (this.type === 'marker') {
          clipX = minX;
          clipY = minY;
          minX = 0;
          minY = 0;
        }
      }

      screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin

      if (this.node // is not temporary SVGElement
      && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === 'foreignObject') && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) {
        this.getStyle('transform-origin', true, true).setValue('50% 50%');
      }

      Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SVGElement.prototype), "setContext", this).call(this, ctx);

      ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));

      if (viewBox) {
        width = viewBox[2];
        height = viewBox[3];
      }

      document.setViewBox({
        ctx: ctx,
        aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
        width: screen.viewPort.width,
        desiredWidth: width,
        height: screen.viewPort.height,
        desiredHeight: height,
        minX: minX,
        minY: minY,
        refX: refXAttr.getValue(),
        refY: refYAttr.getValue(),
        clip: clip,
        clipX: clipX,
        clipY: clipY
      });

      if (viewBox) {
        screen.viewPort.removeCurrent();
        screen.viewPort.setCurrent(width, height);
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SVGElement.prototype), "clearContext", this).call(this, ctx);

      this.document.screen.viewPort.removeCurrent();
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */

  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var widthAttr = this.getAttribute('width', true);
      var heightAttr = this.getAttribute('height', true);
      var viewBoxAttr = this.getAttribute('viewBox');
      var styleAttr = this.getAttribute('style');
      var originWidth = widthAttr.getNumber(0);
      var originHeight = heightAttr.getNumber(0);

      if (preserveAspectRatio) {
        if (typeof preserveAspectRatio === 'string') {
          this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
        } else {
          var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');

          if (preserveAspectRatioAttr.hasValue()) {
            preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
          }
        }
      }

      widthAttr.setValue(width);
      heightAttr.setValue(height);

      if (!viewBoxAttr.hasValue()) {
        viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
      }

      if (styleAttr.hasValue()) {
        var widthStyle = this.getStyle('width');
        var heightStyle = this.getStyle('height');

        if (widthStyle.hasValue()) {
          widthStyle.setValue("".concat(width, "px"));
        }

        if (heightStyle.hasValue()) {
          heightStyle.setValue("".concat(height, "px"));
        }
      }
    }
  }]);

  return SVGElement;
}(RenderedElement);

var RectElement = /*#__PURE__*/function (_PathElement2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RectElement, _PathElement2);

  var _super13 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(RectElement);

  function RectElement() {
    var _this20;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, RectElement);

    _this20 = _super13.apply(this, arguments);
    _this20.type = 'rect';
    return _this20;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(RectElement, [{
    key: "path",
    value: function path(ctx) {
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width', false, true).getPixels('x');
      var height = this.getStyle('height', false, true).getPixels('y');
      var rxAttr = this.getAttribute('rx');
      var ryAttr = this.getAttribute('ry');
      var rx = rxAttr.getPixels('x');
      var ry = ryAttr.getPixels('y');

      if (rxAttr.hasValue() && !ryAttr.hasValue()) {
        ry = rx;
      }

      if (ryAttr.hasValue() && !rxAttr.hasValue()) {
        rx = ry;
      }

      rx = Math.min(rx, width / 2.0);
      ry = Math.min(ry, height / 2.0);

      if (ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        ctx.beginPath(); // always start the path so we don't fill prior paths

        if (height > 0 && width > 0) {
          ctx.moveTo(x + rx, y);
          ctx.lineTo(x + width - rx, y);
          ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
          ctx.lineTo(x + width, y + height - ry);
          ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
          ctx.lineTo(x + rx, y + height);
          ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
          ctx.lineTo(x, y + ry);
          ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
          ctx.closePath();
        }
      }

      return new BoundingBox(x, y, x + width, y + height);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);

  return RectElement;
}(PathElement);

var CircleElement = /*#__PURE__*/function (_PathElement3) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CircleElement, _PathElement3);

  var _super14 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CircleElement);

  function CircleElement() {
    var _this21;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, CircleElement);

    _this21 = _super14.apply(this, arguments);
    _this21.type = 'circle';
    return _this21;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(CircleElement, [{
    key: "path",
    value: function path(ctx) {
      var cx = this.getAttribute('cx').getPixels('x');
      var cy = this.getAttribute('cy').getPixels('y');
      var r = this.getAttribute('r').getPixels();

      if (ctx && r > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
        ctx.closePath();
      }

      return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);

  return CircleElement;
}(PathElement);

var EllipseElement = /*#__PURE__*/function (_PathElement4) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EllipseElement, _PathElement4);

  var _super15 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(EllipseElement);

  function EllipseElement() {
    var _this22;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, EllipseElement);

    _this22 = _super15.apply(this, arguments);
    _this22.type = 'ellipse';
    return _this22;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(EllipseElement, [{
    key: "path",
    value: function path(ctx) {
      var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
      var rx = this.getAttribute('rx').getPixels('x');
      var ry = this.getAttribute('ry').getPixels('y');
      var cx = this.getAttribute('cx').getPixels('x');
      var cy = this.getAttribute('cy').getPixels('y');

      if (ctx && rx > 0 && ry > 0) {
        ctx.beginPath();
        ctx.moveTo(cx + rx, cy);
        ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
        ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
        ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
        ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
        ctx.closePath();
      }

      return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);

  return EllipseElement;
}(PathElement);

var LineElement = /*#__PURE__*/function (_PathElement5) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LineElement, _PathElement5);

  var _super16 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(LineElement);

  function LineElement() {
    var _this23;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, LineElement);

    _this23 = _super16.apply(this, arguments);
    _this23.type = 'line';
    return _this23;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(LineElement, [{
    key: "getPoints",
    value: function getPoints() {
      return [new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')), new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))];
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var _this$getPoints = this.getPoints(),
          _this$getPoints2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$getPoints, 2),
          _this$getPoints2$ = _this$getPoints2[0],
          x0 = _this$getPoints2$.x,
          y0 = _this$getPoints2$.y,
          _this$getPoints2$2 = _this$getPoints2[1],
          x1 = _this$getPoints2$2.x,
          y1 = _this$getPoints2$2.y;

      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
      }

      return new BoundingBox(x0, y0, x1, y1);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var _this$getPoints3 = this.getPoints(),
          _this$getPoints4 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$getPoints3, 2),
          p0 = _this$getPoints4[0],
          p1 = _this$getPoints4[1];

      var a = p0.angleTo(p1);
      return [[p0, a], [p1, a]];
    }
  }]);

  return LineElement;
}(PathElement);

var PolylineElement = /*#__PURE__*/function (_PathElement6) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PolylineElement, _PathElement6);

  var _super17 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PolylineElement);

  function PolylineElement(document, node, captureTextNodes) {
    var _this24;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PolylineElement);

    _this24 = _super17.call(this, document, node, captureTextNodes);
    _this24.type = 'polyline';
    _this24.points = [];
    _this24.points = Point.parsePath(_this24.getAttribute('points').getString());
    return _this24;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PolylineElement, [{
    key: "path",
    value: function path(ctx) {
      var points = this.points;

      var _points = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(points, 1),
          _points$ = _points[0],
          x0 = _points$.x,
          y0 = _points$.y;

      var boundingBox = new BoundingBox(x0, y0);

      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
      }

      points.forEach(function (_ref) {
        var x = _ref.x,
            y = _ref.y;
        boundingBox.addPoint(x, y);

        if (ctx) {
          ctx.lineTo(x, y);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var points = this.points;
      var lastIndex = points.length - 1;
      var markers = [];
      points.forEach(function (point, i) {
        if (i === lastIndex) {
          return;
        }

        markers.push([point, point.angleTo(points[i + 1])]);
      });

      if (markers.length > 0) {
        markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
      }

      return markers;
    }
  }]);

  return PolylineElement;
}(PathElement);

var PolygonElement = /*#__PURE__*/function (_PolylineElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PolygonElement, _PolylineElement);

  var _super18 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PolygonElement);

  function PolygonElement() {
    var _this25;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PolygonElement);

    _this25 = _super18.apply(this, arguments);
    _this25.type = 'polygon';
    return _this25;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PolygonElement, [{
    key: "path",
    value: function path(ctx) {
      var boundingBox = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PolygonElement.prototype), "path", this).call(this, ctx);

      var _this$points = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(this.points, 1),
          _this$points$ = _this$points[0],
          x = _this$points$.x,
          y = _this$points$.y;

      if (ctx) {
        ctx.lineTo(x, y);
        ctx.closePath();
      }

      return boundingBox;
    }
  }]);

  return PolygonElement;
}(PolylineElement);

var PatternElement = /*#__PURE__*/function (_Element3) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PatternElement, _Element3);

  var _super19 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(PatternElement);

  function PatternElement() {
    var _this26;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, PatternElement);

    _this26 = _super19.apply(this, arguments);
    _this26.type = 'pattern';
    return _this26;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(PatternElement, [{
    key: "createPattern",
    value: function createPattern(ctx, _, parentOpacityProp) {
      var width = this.getStyle('width').getPixels('x', true);
      var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element

      var patternSvg = new SVGElement(this.document, null);
      patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
      patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
      patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
      patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
      patternSvg.children = this.children;
      var patternCanvas = this.document.createCanvas(width, height);
      var patternCtx = patternCanvas.getContext('2d');
      var xAttr = this.getAttribute('x');
      var yAttr = this.getAttribute('y');

      if (xAttr.hasValue() && yAttr.hasValue()) {
        patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
      }

      if (parentOpacityProp.hasValue()) {
        this.styles['fill-opacity'] = parentOpacityProp;
      } else {
        Reflect.deleteProperty(this.styles, 'fill-opacity');
      } // render 3x3 grid so when we transform there's no white space on edges


      for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
          patternCtx.save();
          patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
          patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
          patternSvg.render(patternCtx);
          patternCtx.restore();
        }
      }

      var pattern = ctx.createPattern(patternCanvas, 'repeat');
      return pattern;
    }
  }]);

  return PatternElement;
}(Element);

var MarkerElement = /*#__PURE__*/function (_Element4) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MarkerElement, _Element4);

  var _super20 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(MarkerElement);

  function MarkerElement() {
    var _this27;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, MarkerElement);

    _this27 = _super20.apply(this, arguments);
    _this27.type = 'marker';
    return _this27;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MarkerElement, [{
    key: "render",
    value: function render(ctx, point, angle) {
      if (!point) {
        return;
      }

      var x = point.x,
          y = point.y;
      var orient = this.getAttribute('orient').getString('auto');
      var markerUnits = this.getAttribute('markerUnits').getString('strokeWidth');
      ctx.translate(x, y);

      if (orient === 'auto') {
        ctx.rotate(angle);
      }

      if (markerUnits === 'strokeWidth') {
        ctx.scale(ctx.lineWidth, ctx.lineWidth);
      }

      ctx.save(); // render me using a temporary svg element

      var markerSvg = new SVGElement(this.document, null);
      markerSvg.type = this.type;
      markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
      markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
      markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
      markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
      markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
      markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
      markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
      markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
      markerSvg.children = this.children;
      markerSvg.render(ctx);
      ctx.restore();

      if (markerUnits === 'strokeWidth') {
        ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
      }

      if (orient === 'auto') {
        ctx.rotate(-angle);
      }

      ctx.translate(-x, -y);
    }
  }]);

  return MarkerElement;
}(Element);

var DefsElement = /*#__PURE__*/function (_Element5) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DefsElement, _Element5);

  var _super21 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(DefsElement);

  function DefsElement() {
    var _this28;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, DefsElement);

    _this28 = _super21.apply(this, arguments);
    _this28.type = 'defs';
    return _this28;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(DefsElement, [{
    key: "render",
    value: function render() {// NOOP
    }
  }]);

  return DefsElement;
}(Element);

var GElement = /*#__PURE__*/function (_RenderedElement4) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GElement, _RenderedElement4);

  var _super22 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(GElement);

  function GElement() {
    var _this29;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, GElement);

    _this29 = _super22.apply(this, arguments);
    _this29.type = 'g';
    return _this29;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(GElement, [{
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var boundingBox = new BoundingBox();
      this.children.forEach(function (child) {
        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
      });
      return boundingBox;
    }
  }]);

  return GElement;
}(RenderedElement);

var GradientElement = /*#__PURE__*/function (_Element6) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(GradientElement, _Element6);

  var _super23 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(GradientElement);

  function GradientElement(document, node, captureTextNodes) {
    var _this30;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, GradientElement);

    _this30 = _super23.call(this, document, node, captureTextNodes);
    _this30.attributesToInherit = ['gradientUnits'];
    _this30.stops = [];

    var _assertThisInitialize = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this30),
        stops = _assertThisInitialize.stops,
        children = _assertThisInitialize.children;

    children.forEach(function (child) {
      if (child.type === 'stop') {
        stops.push(child);
      }
    });
    return _this30;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(GradientElement, [{
    key: "getGradientUnits",
    value: function getGradientUnits() {
      return this.getAttribute('gradientUnits').getString('objectBoundingBox');
    }
  }, {
    key: "createGradient",
    value: function createGradient(ctx, element, parentOpacityProp) {
      var _this31 = this;

      // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
      var stopsContainer = this;

      if (this.getHrefAttribute().hasValue()) {
        stopsContainer = this.getHrefAttribute().getDefinition();
        this.inheritStopContainer(stopsContainer);
      }

      var _stopsContainer = stopsContainer,
          stops = _stopsContainer.stops;
      var gradient = this.getGradient(ctx, element);

      if (!gradient) {
        return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
      }

      stops.forEach(function (stop) {
        gradient.addColorStop(stop.offset, _this31.addParentOpacity(parentOpacityProp, stop.color));
      });

      if (this.getAttribute('gradientTransform').hasValue()) {
        // render as transformed pattern on temporary canvas
        var document = this.document;
        var _document$screen = document.screen,
            MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS,
            viewPort = _document$screen.viewPort;

        var _viewPort$viewPorts = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(viewPort.viewPorts, 1),
            rootView = _viewPort$viewPorts[0];

        var rect = new RectElement(document, null);
        rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3.0);
        rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3.0);
        rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
        rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
        var group = new GElement(document, null);
        group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
        group.children = [rect];
        var patternSvg = new SVGElement(document, null);
        patternSvg.attributes.x = new Property(document, 'x', 0);
        patternSvg.attributes.y = new Property(document, 'y', 0);
        patternSvg.attributes.width = new Property(document, 'width', rootView.width);
        patternSvg.attributes.height = new Property(document, 'height', rootView.height);
        patternSvg.children = [group];
        var patternCanvas = document.createCanvas(rootView.width, rootView.height);
        var patternCtx = patternCanvas.getContext('2d');
        patternCtx.fillStyle = gradient;
        patternSvg.render(patternCtx);
        return patternCtx.createPattern(patternCanvas, 'no-repeat');
      }

      return gradient;
    }
  }, {
    key: "inheritStopContainer",
    value: function inheritStopContainer(stopsContainer) {
      var _this32 = this;

      this.attributesToInherit.forEach(function (attributeToInherit) {
        if (!_this32.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
          _this32.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
        }
      });
    }
  }, {
    key: "addParentOpacity",
    value: function addParentOpacity(parentOpacityProp, color) {
      if (parentOpacityProp.hasValue()) {
        var colorProp = new Property(this.document, 'color', color);
        return colorProp.addOpacity(parentOpacityProp).getColor();
      }

      return color;
    }
  }]);

  return GradientElement;
}(Element);

var LinearGradientElement = /*#__PURE__*/function (_GradientElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LinearGradientElement, _GradientElement);

  var _super24 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(LinearGradientElement);

  function LinearGradientElement(document, node, captureTextNodes) {
    var _this33;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, LinearGradientElement);

    _this33 = _super24.call(this, document, node, captureTextNodes);
    _this33.type = 'linearGradient';

    _this33.attributesToInherit.push('x1', 'y1', 'x2', 'y2');

    return _this33;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(LinearGradientElement, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
      var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;

      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }

      if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
        this.getAttribute('x1', true).setValue(0);
        this.getAttribute('y1', true).setValue(0);
        this.getAttribute('x2', true).setValue(1);
        this.getAttribute('y2', true).setValue(0);
      }

      var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
      var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
      var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
      var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');

      if (x1 === x2 && y1 === y2) {
        return null;
      }

      return ctx.createLinearGradient(x1, y1, x2, y2);
    }
  }]);

  return LinearGradientElement;
}(GradientElement);

var RadialGradientElement = /*#__PURE__*/function (_GradientElement2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(RadialGradientElement, _GradientElement2);

  var _super25 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(RadialGradientElement);

  function RadialGradientElement(document, node, captureTextNodes) {
    var _this34;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, RadialGradientElement);

    _this34 = _super25.call(this, document, node, captureTextNodes);
    _this34.type = 'radialGradient';

    _this34.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');

    return _this34;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(RadialGradientElement, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
      var boundingBox = element.getBoundingBox(ctx);

      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }

      if (!this.getAttribute('cx').hasValue()) {
        this.getAttribute('cx', true).setValue('50%');
      }

      if (!this.getAttribute('cy').hasValue()) {
        this.getAttribute('cy', true).setValue('50%');
      }

      if (!this.getAttribute('r').hasValue()) {
        this.getAttribute('r', true).setValue('50%');
      }

      var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
      var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
      var fx = cx;
      var fy = cy;

      if (this.getAttribute('fx').hasValue()) {
        fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
      }

      if (this.getAttribute('fy').hasValue()) {
        fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
      }

      var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
      var fr = this.getAttribute('fr').getPixels();
      return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
    }
  }]);

  return RadialGradientElement;
}(GradientElement);

var StopElement = /*#__PURE__*/function (_Element7) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StopElement, _Element7);

  var _super26 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(StopElement);

  function StopElement(document, node, captureTextNodes) {
    var _this35;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, StopElement);

    _this35 = _super26.call(this, document, node, captureTextNodes);
    _this35.type = 'stop';
    var offset = Math.max(0, Math.min(1, _this35.getAttribute('offset').getNumber()));

    var stopOpacity = _this35.getStyle('stop-opacity');

    var stopColor = _this35.getStyle('stop-color', true);

    if (stopColor.getString() === '') {
      stopColor.setValue('#000');
    }

    if (stopOpacity.hasValue()) {
      stopColor = stopColor.addOpacity(stopOpacity);
    }

    _this35.offset = offset;
    _this35.color = stopColor.getColor();
    return _this35;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(StopElement);
}(Element);

var AnimateElement = /*#__PURE__*/function (_Element8) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimateElement, _Element8);

  var _super27 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(AnimateElement);

  function AnimateElement(document, node, captureTextNodes) {
    var _this36;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AnimateElement);

    _this36 = _super27.call(this, document, node, captureTextNodes);
    _this36.type = 'animate';
    _this36.duration = 0;
    _this36.initialValue = null;
    _this36.initialUnits = '';
    _this36.removed = false;
    _this36.frozen = false;
    document.screen.animations.push(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this36));
    _this36.begin = _this36.getAttribute('begin').getMilliseconds();
    _this36.maxDuration = _this36.begin + _this36.getAttribute('dur').getMilliseconds();
    _this36.from = _this36.getAttribute('from');
    _this36.to = _this36.getAttribute('to');
    _this36.values = new Property(document, 'values', null);

    var valuesAttr = _this36.getAttribute('values');

    if (valuesAttr.hasValue()) {
      _this36.values.setValue(valuesAttr.getString().split(';'));
    }

    return _this36;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AnimateElement, [{
    key: "getProperty",
    value: function getProperty() {
      var attributeType = this.getAttribute('attributeType').getString();
      var attributeName = this.getAttribute('attributeName').getString();

      if (attributeType === 'CSS') {
        return this.parent.getStyle(attributeName, true);
      }

      return this.parent.getAttribute(attributeName, true);
    }
  }, {
    key: "calcValue",
    value: function calcValue() {
      var initialUnits = this.initialUnits;

      var _this$getProgress = this.getProgress(),
          progress = _this$getProgress.progress,
          from = _this$getProgress.from,
          to = _this$getProgress.to; // tween value linearly


      var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;

      if (initialUnits === '%') {
        newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
      }

      return "".concat(newValue).concat(initialUnits);
    }
  }, {
    key: "update",
    value: function update(delta) {
      var parent = this.parent;
      var prop = this.getProperty(); // set initial value

      if (!this.initialValue) {
        this.initialValue = prop.getString();
        this.initialUnits = prop.getUnits();
      } // if we're past the end time


      if (this.duration > this.maxDuration) {
        var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations

        if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') {
          this.duration = 0;
        } else if (fill === 'freeze' && !this.frozen) {
          this.frozen = true;
          parent.animationFrozen = true;
          parent.animationFrozenValue = prop.getString();
        } else if (fill === 'remove' && !this.removed) {
          this.removed = true;
          prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
          return true;
        }

        return false;
      }

      this.duration += delta; // if we're past the begin time

      var updated = false;

      if (this.begin < this.duration) {
        var newValue = this.calcValue(); // tween

        var typeAttr = this.getAttribute('type');

        if (typeAttr.hasValue()) {
          // for transform, etc.
          var type = typeAttr.getString();
          newValue = "".concat(type, "(").concat(newValue, ")");
        }

        prop.setValue(newValue);
        updated = true;
      }

      return updated;
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var document = this.document,
          values = this.values;
      var result = {
        progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
      };

      if (values.hasValue()) {
        var p = result.progress * (values.getValue().length - 1);
        var lb = Math.floor(p);
        var ub = Math.ceil(p);
        result.from = new Property(document, 'from', parseFloat(values.getValue()[lb]));
        result.to = new Property(document, 'to', parseFloat(values.getValue()[ub]));
        result.progress = (p - lb) / (ub - lb);
      } else {
        result.from = this.from;
        result.to = this.to;
      }

      return result;
    }
  }]);

  return AnimateElement;
}(Element);

var AnimateColorElement = /*#__PURE__*/function (_AnimateElement) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimateColorElement, _AnimateElement);

  var _super28 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(AnimateColorElement);

  function AnimateColorElement() {
    var _this37;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AnimateColorElement);

    _this37 = _super28.apply(this, arguments);
    _this37.type = 'animateColor';
    return _this37;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AnimateColorElement, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress2 = this.getProgress(),
          progress = _this$getProgress2.progress,
          from = _this$getProgress2.from,
          to = _this$getProgress2.to;

      var colorFrom = new rgbcolor__WEBPACK_IMPORTED_MODULE_24___default.a(from.getColor());
      var colorTo = new rgbcolor__WEBPACK_IMPORTED_MODULE_24___default.a(to.getColor());

      if (colorFrom.ok && colorTo.ok) {
        // tween color linearly
        var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
        var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
        var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha

        return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
      }

      return this.getAttribute('from').getColor();
    }
  }]);

  return AnimateColorElement;
}(AnimateElement);

var AnimateTransformElement = /*#__PURE__*/function (_AnimateElement2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AnimateTransformElement, _AnimateElement2);

  var _super29 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(AnimateTransformElement);

  function AnimateTransformElement() {
    var _this38;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AnimateTransformElement);

    _this38 = _super29.apply(this, arguments);
    _this38.type = 'animateTransform';
    return _this38;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AnimateTransformElement, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress3 = this.getProgress(),
          progress = _this$getProgress3.progress,
          from = _this$getProgress3.from,
          to = _this$getProgress3.to; // tween value linearly


      var transformFrom = toNumbers(from.getString());
      var transformTo = toNumbers(to.getString());
      var newValue = transformFrom.map(function (from, i) {
        var to = transformTo[i];
        return from + (to - from) * progress;
      }).join(' ');
      return newValue;
    }
  }]);

  return AnimateTransformElement;
}(AnimateElement);

var FontElement = /*#__PURE__*/function (_Element9) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FontElement, _Element9);

  var _super30 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FontElement);

  function FontElement(document, node, captureTextNodes) {
    var _this39;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FontElement);

    _this39 = _super30.call(this, document, node, captureTextNodes);
    _this39.type = 'font';
    _this39.glyphs = {};
    _this39.horizAdvX = _this39.getAttribute('horiz-adv-x').getNumber();
    var definitions = document.definitions;

    var _assertThisInitialize2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this39),
        children = _assertThisInitialize2.children;

    var _iterator = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;

        switch (child.type) {
          case 'font-face':
            {
              _this39.fontFace = child;
              var fontFamilyStyle = child.getStyle('font-family');

              if (fontFamilyStyle.hasValue()) {
                definitions[fontFamilyStyle.getString()] = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this39);
              }

              break;
            }

          case 'missing-glyph':
            _this39.missingGlyph = child;
            break;

          case 'glyph':
            {
              var glyph = child;

              if (glyph.arabicForm) {
                _this39.isRTL = true;
                _this39.isArabic = true;

                if (typeof _this39.glyphs[glyph.unicode] === 'undefined') {
                  _this39.glyphs[glyph.unicode] = {};
                }

                _this39.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
              } else {
                _this39.glyphs[glyph.unicode] = glyph;
              }

              break;
            }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _this39;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FontElement, [{
    key: "render",
    value: function render() {// NO RENDER
    }
  }]);

  return FontElement;
}(Element);

var FontFaceElement = /*#__PURE__*/function (_Element10) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FontFaceElement, _Element10);

  var _super31 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FontFaceElement);

  function FontFaceElement(document, node, captureTextNodes) {
    var _this40;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FontFaceElement);

    _this40 = _super31.call(this, document, node, captureTextNodes);
    _this40.type = 'font-face';
    _this40.ascent = _this40.getAttribute('ascent').getNumber();
    _this40.descent = _this40.getAttribute('descent').getNumber();
    _this40.unitsPerEm = _this40.getAttribute('units-per-em').getNumber();
    return _this40;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FontFaceElement);
}(Element);

var MissingGlyphElement = /*#__PURE__*/function (_PathElement7) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MissingGlyphElement, _PathElement7);

  var _super32 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(MissingGlyphElement);

  function MissingGlyphElement() {
    var _this41;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, MissingGlyphElement);

    _this41 = _super32.apply(this, arguments);
    _this41.type = 'missing-glyph';
    _this41.horizAdvX = 0;
    return _this41;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MissingGlyphElement);
}(PathElement);

var TRefElement = /*#__PURE__*/function (_TextElement2) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TRefElement, _TextElement2);

  var _super33 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TRefElement);

  function TRefElement() {
    var _this42;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TRefElement);

    _this42 = _super33.apply(this, arguments);
    _this42.type = 'tref';
    return _this42;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TRefElement, [{
    key: "getText",
    value: function getText() {
      var element = this.getHrefAttribute().getDefinition();

      if (element) {
        var firstChild = element.children[0];

        if (firstChild) {
          return firstChild.getText();
        }
      }

      return '';
    }
  }]);

  return TRefElement;
}(TextElement);

var AElement = /*#__PURE__*/function (_TextElement3) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AElement, _TextElement3);

  var _super34 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(AElement);

  function AElement(document, node, captureTextNodes) {
    var _this43;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AElement);

    _this43 = _super34.call(this, document, node, captureTextNodes);
    _this43.type = 'a';
    var childNodes = node.childNodes;
    var firstChild = childNodes[0];
    var hasText = childNodes.length > 0 && Array.from(childNodes).every(function (node) {
      return node.nodeType === 3;
    });
    _this43.hasText = hasText;
    _this43.text = hasText ? _this43.getTextFromNode(firstChild) : '';
    return _this43;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      if (this.hasText) {
        // render as text element
        Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AElement.prototype), "renderChildren", this).call(this, ctx);

        var document = this.document,
            x = this.x,
            y = this.y;
        var mouse = document.screen.mouse;
        var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.

        if (mouse.isWorking()) {
          mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
        }
      } else if (this.children.length > 0) {
        // render as temporary group
        var g = new GElement(this.document, null);
        g.children = this.children;
        g.parent = this;
        g.render(ctx);
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var window = this.document.window;

      if (window) {
        window.open(this.getHrefAttribute().getString());
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove() {
      var ctx = this.document.ctx;
      ctx.canvas.style.cursor = 'pointer';
    }
  }]);

  return AElement;
}(TextElement);

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var TextPathElement = /*#__PURE__*/function (_TextElement4) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TextPathElement, _TextElement4);

  var _super35 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TextPathElement);

  function TextPathElement(document, node, captureTextNodes) {
    var _this44;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TextPathElement);

    _this44 = _super35.call(this, document, node, captureTextNodes);
    _this44.type = 'textPath';
    _this44.textWidth = 0;
    _this44.textHeight = 0;
    _this44.pathLength = -1;
    _this44.glyphInfo = null;
    _this44.letterSpacingCache = [];
    _this44.measuresCache = new Map([['', 0]]);

    var pathElement = _this44.getHrefAttribute().getDefinition();

    _this44.text = _this44.getTextFromNode();
    _this44.dataArray = _this44.parsePathData(pathElement);
    return _this44;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TextPathElement, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var dataArray = this.dataArray;

      if (ctx) {
        ctx.beginPath();
      }

      dataArray.forEach(function (_ref) {
        var type = _ref.type,
            points = _ref.points;

        switch (type) {
          case PathParser.LINE_TO:
            if (ctx) {
              ctx.lineTo(points[0], points[1]);
            }

            break;

          case PathParser.MOVE_TO:
            if (ctx) {
              ctx.moveTo(points[0], points[1]);
            }

            break;

          case PathParser.CURVE_TO:
            if (ctx) {
              ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
            }

            break;

          case PathParser.QUAD_TO:
            if (ctx) {
              ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
            }

            break;

          case PathParser.ARC:
            {
              var _points2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_10__["default"])(points, 8),
                  cx = _points2[0],
                  cy = _points2[1],
                  rx = _points2[2],
                  ry = _points2[3],
                  theta = _points2[4],
                  dTheta = _points2[5],
                  psi = _points2[6],
                  fs = _points2[7];

              var r = rx > ry ? rx : ry;
              var scaleX = rx > ry ? 1 : rx / ry;
              var scaleY = rx > ry ? ry / rx : 1;

              if (ctx) {
                ctx.translate(cx, cy);
                ctx.rotate(psi);
                ctx.scale(scaleX, scaleY);
                ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                ctx.scale(1 / scaleX, 1 / scaleY);
                ctx.rotate(-psi);
                ctx.translate(-cx, -cy);
              }

              break;
            }

          case PathParser.CLOSE_PATH:
            if (ctx) {
              ctx.closePath();
            }

            break;
        }
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.setTextData(ctx);
      ctx.save();
      var textDecoration = this.parent.getStyle('text-decoration').getString();
      var fontSize = this.getFontSize();
      var glyphInfo = this.glyphInfo;
      var fill = ctx.fillStyle;

      if (textDecoration === 'underline') {
        ctx.beginPath();
      }

      glyphInfo.forEach(function (glyph, i) {
        var p0 = glyph.p0,
            p1 = glyph.p1,
            rotation = glyph.rotation,
            partialText = glyph.text;
        ctx.save();
        ctx.translate(p0.x, p0.y);
        ctx.rotate(rotation);

        if (ctx.fillStyle) {
          ctx.fillText(partialText, 0, 0);
        }

        if (ctx.strokeStyle) {
          ctx.strokeText(partialText, 0, 0);
        }

        ctx.restore();

        if (textDecoration === 'underline') {
          if (i === 0) {
            ctx.moveTo(p0.x, p0.y + fontSize / 8);
          }

          ctx.lineTo(p1.x, p1.y + fontSize / 5);
        } // // To assist with debugging visually, uncomment following
        //
        // ctx.beginPath();
        // if (i % 2)
        // 	ctx.strokeStyle = 'red';
        // else
        // 	ctx.strokeStyle = 'green';
        // ctx.moveTo(p0.x, p0.y);
        // ctx.lineTo(p1.x, p1.y);
        // ctx.stroke();
        // ctx.closePath();

      });

      if (textDecoration === 'underline') {
        ctx.lineWidth = fontSize / 20;
        ctx.strokeStyle = fill;
        ctx.stroke();
        ctx.closePath();
      }

      ctx.restore();
    }
  }, {
    key: "getLetterSpacingAt",
    value: function getLetterSpacingAt() {
      var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.letterSpacingCache[idx] || 0;
    }
  }, {
    key: "findSegmentToFitChar",
    value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
      var offset = inputOffset;
      var glyphWidth = this.measureText(ctx, c);

      if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) {
        glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
      }

      if (charI > -1) {
        offset += this.getLetterSpacingAt(charI);
      }

      var splineStep = this.textHeight / 20;
      var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
      var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
      var segment = {
        p0: p0,
        p1: p1
      };
      var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;

      if (dy) {
        var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
        var dyY = Math.cos(-rotation) * dy;
        segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
          x: p0.x + dyX,
          y: p0.y + dyY
        });
        segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
          x: p1.x + dyX,
          y: p1.y + dyY
        });
      }

      offset += glyphWidth;
      return {
        offset: offset,
        segment: segment,
        rotation: rotation
      };
    }
  }, {
    key: "measureText",
    value: function measureText(ctx, text) {
      var measuresCache = this.measuresCache;
      var targetText = text || this.getText();

      if (measuresCache.has(targetText)) {
        return measuresCache.get(targetText);
      }

      var measure = this.measureTargetText(ctx, targetText);
      measuresCache.set(targetText, measure);
      return measure;
    } // This method supposes what all custom fonts already loaded.
    // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
    // You need to call this method manually to update glyphs cache.

  }, {
    key: "setTextData",
    value: function setTextData(ctx) {
      var _this45 = this;

      if (this.glyphInfo) {
        return;
      }

      var renderText = this.getText();
      var chars = renderText.split('');
      var spacesNumber = renderText.split(' ').length - 1;
      var dx = this.parent.getAttribute('dx').split().map(function (_) {
        return _.getPixels('x');
      });
      var dy = this.parent.getAttribute('dy').getPixels('y');
      var anchor = this.parent.getStyle('text-anchor').getString('start');
      var thisSpacing = this.getStyle('letter-spacing');
      var parentSpacing = this.parent.getStyle('letter-spacing');
      var letterSpacing = 0;

      if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') {
        letterSpacing = parentSpacing.getPixels();
      } else if (thisSpacing.hasValue()) {
        if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') {
          letterSpacing = thisSpacing.getPixels();
        }
      } // fill letter-spacing cache


      var letterSpacingCache = [];
      var textLen = renderText.length;
      this.letterSpacingCache = letterSpacingCache;

      for (var i = 0; i < textLen; i++) {
        letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
      }

      var dxSum = letterSpacingCache.reduce(function (acc, cur, i) {
        return i === 0 ? 0 : acc + cur || 0;
      }, 0);
      var textWidth = this.measureText(ctx);
      var textFullWidth = Math.max(textWidth + dxSum, 0);
      this.textWidth = textWidth;
      this.textHeight = this.getFontSize();
      this.glyphInfo = [];
      var fullPathWidth = this.getPathLength();
      var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
      var offset = 0;

      if (anchor === 'middle' || anchor === 'center') {
        offset = -textFullWidth / 2;
      }

      if (anchor === 'end' || anchor === 'right') {
        offset = -textFullWidth;
      }

      offset += startOffset;
      chars.forEach(function (char, i) {
        // Find such segment what distance between p0 and p1 is approx. width of glyph
        var _this45$findSegmentTo = _this45.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i),
            nextOffset = _this45$findSegmentTo.offset,
            segment = _this45$findSegmentTo.segment,
            rotation = _this45$findSegmentTo.rotation;

        offset = nextOffset;

        if (!segment.p0 || !segment.p1) {
          return;
        } // const width = this.getLineLength(
        // 	segment.p0.x,
        // 	segment.p0.y,
        // 	segment.p1.x,
        // 	segment.p1.y
        // );
        // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
        // Can foresee having a rough pair table built in that the developer can override as needed.
        // Or use "dx" attribute of the <text> node as a naive replacement
        // const kern = 0;
        // placeholder for future implementation
        // const midpoint = this.getPointOnLine(
        // 	kern + width / 2.0,
        // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
        // );


        _this45.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: chars[i],
          p0: segment.p0,
          p1: segment.p1,
          rotation: rotation
        });
      });
    }
  }, {
    key: "parsePathData",
    value: function parsePathData(path) {
      this.pathLength = -1; // reset path length

      if (!path) {
        return [];
      }

      var pathCommands = [];
      var pathParser = path.pathParser;
      pathParser.reset(); // convert l, H, h, V, and v to L

      while (!pathParser.isEnd()) {
        var current = pathParser.current;
        var startX = current ? current.x : 0;
        var startY = current ? current.y : 0;
        var command = pathParser.next();
        var nextCommandType = command.type;
        var points = [];

        switch (command.type) {
          case PathParser.MOVE_TO:
            this.pathM(pathParser, points);
            break;

          case PathParser.LINE_TO:
            nextCommandType = this.pathL(pathParser, points);
            break;

          case PathParser.HORIZ_LINE_TO:
            nextCommandType = this.pathH(pathParser, points);
            break;

          case PathParser.VERT_LINE_TO:
            nextCommandType = this.pathV(pathParser, points);
            break;

          case PathParser.CURVE_TO:
            this.pathC(pathParser, points);
            break;

          case PathParser.SMOOTH_CURVE_TO:
            nextCommandType = this.pathS(pathParser, points);
            break;

          case PathParser.QUAD_TO:
            this.pathQ(pathParser, points);
            break;

          case PathParser.SMOOTH_QUAD_TO:
            nextCommandType = this.pathT(pathParser, points);
            break;

          case PathParser.ARC:
            points = this.pathA(pathParser);
            break;

          case PathParser.CLOSE_PATH:
            PathElement.pathZ(pathParser);
            break;
        }

        if (command.type !== PathParser.CLOSE_PATH) {
          pathCommands.push({
            type: nextCommandType,
            points: points,
            start: {
              x: startX,
              y: startY
            },
            pathLength: this.calcLength(startX, startY, nextCommandType, points)
          });
        } else {
          pathCommands.push({
            type: PathParser.CLOSE_PATH,
            points: [],
            pathLength: 0
          });
        }
      }

      return pathCommands;
    }
  }, {
    key: "pathM",
    value: function pathM(pathParser, points) {
      var _PathElement$pathM$po = PathElement.pathM(pathParser).point,
          x = _PathElement$pathM$po.x,
          y = _PathElement$pathM$po.y;
      points.push(x, y);
    }
  }, {
    key: "pathL",
    value: function pathL(pathParser, points) {
      var _PathElement$pathL$po = PathElement.pathL(pathParser).point,
          x = _PathElement$pathL$po.x,
          y = _PathElement$pathL$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathH",
    value: function pathH(pathParser, points) {
      var _PathElement$pathH$po = PathElement.pathH(pathParser).point,
          x = _PathElement$pathH$po.x,
          y = _PathElement$pathH$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathV",
    value: function pathV(pathParser, points) {
      var _PathElement$pathV$po = PathElement.pathV(pathParser).point,
          x = _PathElement$pathV$po.x,
          y = _PathElement$pathV$po.y;
      points.push(x, y);
      return PathParser.LINE_TO;
    }
  }, {
    key: "pathC",
    value: function pathC(pathParser, points) {
      var _PathElement$pathC2 = PathElement.pathC(pathParser),
          point = _PathElement$pathC2.point,
          controlPoint = _PathElement$pathC2.controlPoint,
          currentPoint = _PathElement$pathC2.currentPoint;

      points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }, {
    key: "pathS",
    value: function pathS(pathParser, points) {
      var _PathElement$pathS2 = PathElement.pathS(pathParser),
          point = _PathElement$pathS2.point,
          controlPoint = _PathElement$pathS2.controlPoint,
          currentPoint = _PathElement$pathS2.currentPoint;

      points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      return PathParser.CURVE_TO;
    }
  }, {
    key: "pathQ",
    value: function pathQ(pathParser, points) {
      var _PathElement$pathQ2 = PathElement.pathQ(pathParser),
          controlPoint = _PathElement$pathQ2.controlPoint,
          currentPoint = _PathElement$pathQ2.currentPoint;

      points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
    }
  }, {
    key: "pathT",
    value: function pathT(pathParser, points) {
      var _PathElement$pathT2 = PathElement.pathT(pathParser),
          controlPoint = _PathElement$pathT2.controlPoint,
          currentPoint = _PathElement$pathT2.currentPoint;

      points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      return PathParser.QUAD_TO;
    }
  }, {
    key: "pathA",
    value: function pathA(pathParser) {
      var _PathElement$pathA2 = PathElement.pathA(pathParser),
          rX = _PathElement$pathA2.rX,
          rY = _PathElement$pathA2.rY,
          sweepFlag = _PathElement$pathA2.sweepFlag,
          xAxisRotation = _PathElement$pathA2.xAxisRotation,
          centp = _PathElement$pathA2.centp,
          a1 = _PathElement$pathA2.a1,
          ad = _PathElement$pathA2.ad;

      if (sweepFlag === 0 && ad > 0) {
        ad -= 2 * Math.PI;
      }

      if (sweepFlag === 1 && ad < 0) {
        ad += 2 * Math.PI;
      }

      return [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag];
    }
  }, {
    key: "calcLength",
    value: function calcLength(x, y, commandType, points) {
      var len = 0;
      var p1 = null;
      var p2 = null;
      var t = 0;

      switch (commandType) {
        case PathParser.LINE_TO:
          return this.getLineLength(x, y, points[0], points[1]);

        case PathParser.CURVE_TO:
          // Approximates by breaking curve into 100 line segments
          len = 0.0;
          p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);

          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }

          return len;

        case PathParser.QUAD_TO:
          // Approximates by breaking curve into 100 line segments
          len = 0.0;
          p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);

          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }

          return len;

        case PathParser.ARC:
          {
            // Approximates by breaking curve into line segments
            len = 0.0;
            var start = points[4]; // 4 = theta

            var dTheta = points[5]; // 5 = dTheta

            var end = points[4] + dTheta;
            var inc = Math.PI / 180.0; // 1 degree resolution

            if (Math.abs(start - end) < inc) {
              inc = Math.abs(start - end);
            } // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi


            p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);

            if (dTheta < 0) {
              // clockwise
              for (t = start - inc; t > end; t -= inc) {
                p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
            } else {
              // counter-clockwise
              for (t = start + inc; t < end; t += inc) {
                p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
            }

            p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            return len;
          }
      }

      return 0;
    }
  }, {
    key: "getPointOnLine",
    value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
      var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
      var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
      var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
      var run = Math.sqrt(dist * dist / (1 + m * m));

      if (p2x < p1x) {
        run *= -1;
      }

      var rise = m * run;
      var pt = null;

      if (p2x === p1x) {
        // vertical line
        pt = {
          x: fromX,
          y: fromY + rise
        };
      } else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) {
        pt = {
          x: fromX + run,
          y: fromY + rise
        };
      } else {
        var ix = 0;
        var iy = 0;
        var len = this.getLineLength(p1x, p1y, p2x, p2y);

        if (len < PSEUDO_ZERO) {
          return null;
        }

        var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
        u /= len * len;
        ix = p1x + u * (p2x - p1x);
        iy = p1y + u * (p2y - p1y);
        var pRise = this.getLineLength(fromX, fromY, ix, iy);
        var pRun = Math.sqrt(dist * dist - pRise * pRise);
        run = Math.sqrt(pRun * pRun / (1 + m * m));

        if (p2x < p1x) {
          run *= -1;
        }

        rise = m * run;
        pt = {
          x: ix + run,
          y: iy + rise
        };
      }

      return pt;
    }
  }, {
    key: "getPointOnPath",
    value: function getPointOnPath(distance) {
      var fullLen = this.getPathLength();
      var cumulativePathLength = 0;
      var p = null;

      if (distance < -0.00005 || distance - 0.00005 > fullLen) {
        return null;
      }

      var dataArray = this.dataArray;

      var _iterator2 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_1__["default"])(dataArray),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var command = _step2.value;

          if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
            cumulativePathLength += command.pathLength;
            continue;
          }

          var delta = distance - cumulativePathLength;
          var currentT = 0;

          switch (command.type) {
            case PathParser.LINE_TO:
              p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
              break;

            case PathParser.ARC:
              {
                var start = command.points[4]; // 4 = theta

                var dTheta = command.points[5]; // 5 = dTheta

                var end = command.points[4] + dTheta;
                currentT = start + delta / command.pathLength * dTheta;

                if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                  break;
                }

                p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                break;
              }

            case PathParser.CURVE_TO:
              currentT = delta / command.pathLength;

              if (currentT > 1) {
                currentT = 1;
              }

              p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
              break;

            case PathParser.QUAD_TO:
              currentT = delta / command.pathLength;

              if (currentT > 1) {
                currentT = 1;
              }

              p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
              break;
          }

          if (p) {
            return p;
          }

          break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return null;
    }
  }, {
    key: "getLineLength",
    value: function getLineLength(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
  }, {
    key: "getPathLength",
    value: function getPathLength() {
      if (this.pathLength === -1) {
        this.pathLength = this.dataArray.reduce(function (length, command) {
          return command.pathLength > 0 ? length + command.pathLength : length;
        }, 0);
      }

      return this.pathLength;
    }
  }, {
    key: "getPointOnCubicBezier",
    value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
      var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
      var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getPointOnQuadraticBezier",
    value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
      var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
      var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "getPointOnEllipticalArc",
    value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
      var cosPsi = Math.cos(psi);
      var sinPsi = Math.sin(psi);
      var pt = {
        x: rx * Math.cos(theta),
        y: ry * Math.sin(theta)
      };
      return {
        x: cx + (pt.x * cosPsi - pt.y * sinPsi),
        y: cy + (pt.x * sinPsi + pt.y * cosPsi)
      };
    } // TODO need some optimisations. possibly build cache only for curved segments?

  }, {
    key: "buildEquidistantCache",
    value: function buildEquidistantCache(inputStep, inputPrecision) {
      var fullLen = this.getPathLength();
      var precision = inputPrecision || 0.25; // accuracy vs performance

      var step = inputStep || fullLen / 100;

      if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
        // Prepare cache
        this.equidistantCache = {
          step: step,
          precision: precision,
          points: []
        }; // Calculate points

        var s = 0;

        for (var l = 0; l <= fullLen; l += precision) {
          var p0 = this.getPointOnPath(l);
          var p1 = this.getPointOnPath(l + precision);

          if (!p0 || !p1) {
            continue;
          }

          s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);

          if (s >= step) {
            this.equidistantCache.points.push({
              x: p0.x,
              y: p0.y,
              distance: l
            });
            s -= step;
          }
        }
      }
    }
  }, {
    key: "getEquidistantPointOnPath",
    value: function getEquidistantPointOnPath(targetDistance, step, precision) {
      this.buildEquidistantCache(step, precision);

      if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) {
        return null;
      }

      var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
      return this.equidistantCache.points[idx] || null;
    }
  }]);

  return TextPathElement;
}(TextElement);

var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;

var ImageElement = /*#__PURE__*/function (_RenderedElement5) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ImageElement, _RenderedElement5);

  var _super36 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(ImageElement);

  function ImageElement(document, node, captureTextNodes) {
    var _this46;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ImageElement);

    _this46 = _super36.call(this, document, node, captureTextNodes);
    _this46.type = 'image';
    _this46.loaded = false;

    var href = _this46.getHrefAttribute().getString();

    if (!href) {
      return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(_this46);
    }

    var isSvg = href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
    document.images.push(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this46));

    if (!isSvg) {
      void _this46.loadImage(href);
    } else {
      void _this46.loadSvg(href);
    }

    _this46.isSvg = isSvg;
    return _this46;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(ImageElement, [{
    key: "loadImage",
    value: function loadImage(href) {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var image;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _this.document.createImage(href);

            case 3:
              image = _context4.sent;
              _this.image = image;
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              console.error("Error while loading image \"".concat(href, "\":"), _context4.t0);

            case 10:
              _this.loaded = true;

            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    }
  }, {
    key: "loadSvg",
    value: function loadSvg(href) {
      var _this2 = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var match, data, response, svg;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              match = dataUriRegex.exec(href);

              if (!match) {
                _context5.next = 6;
                break;
              }

              data = match[5];

              if (match[4] === 'base64') {
                _this2.image = atob(data);
              } else {
                _this2.image = decodeURIComponent(data);
              }

              _context5.next = 19;
              break;

            case 6:
              _context5.prev = 6;
              _context5.next = 9;
              return _this2.document.fetch(href);

            case 9:
              response = _context5.sent;
              _context5.next = 12;
              return response.text();

            case 12:
              svg = _context5.sent;
              _this2.image = svg;
              _context5.next = 19;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](6);
              console.error("Error while loading image \"".concat(href, "\":"), _context5.t0);

            case 19:
              _this2.loaded = true;

            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[6, 16]]);
      }))();
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document = this.document,
          image = this.image,
          loaded = this.loaded;
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');

      if (!loaded || !image || !width || !height) {
        return;
      }

      ctx.save();
      ctx.translate(x, y);

      if (this.isSvg) {
        var subDocument = document.canvg.forkString(ctx, this.image, {
          ignoreMouse: true,
          ignoreAnimation: true,
          ignoreDimensions: true,
          ignoreClear: true,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: width,
          scaleHeight: height
        });
        subDocument.document.documentElement.parent = this;
        void subDocument.render();
      } else {
        var _image = this.image;
        document.setViewBox({
          ctx: ctx,
          aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
          width: width,
          desiredWidth: _image.width,
          height: height,
          desiredHeight: _image.height
        });

        if (this.loaded) {
          if (typeof _image.complete === 'undefined' || _image.complete) {
            ctx.drawImage(_image, 0, 0);
          }
        }
      }

      ctx.restore();
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox() {
      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');
      return new BoundingBox(x, y, x + width, y + height);
    }
  }]);

  return ImageElement;
}(RenderedElement);

var SymbolElement = /*#__PURE__*/function (_RenderedElement6) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SymbolElement, _RenderedElement6);

  var _super37 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(SymbolElement);

  function SymbolElement() {
    var _this47;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SymbolElement);

    _this47 = _super37.apply(this, arguments);
    _this47.type = 'symbol';
    return _this47;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(SymbolElement, [{
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);

  return SymbolElement;
}(RenderedElement);

var SVGFontLoader = /*#__PURE__*/function () {
  function SVGFontLoader(document) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, SVGFontLoader);

    this.document = document;
    this.loaded = false;
    document.fonts.push(this);
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(SVGFontLoader, [{
    key: "load",
    value: function load(fontFamily, url) {
      var _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var document, svgDocument, fonts;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              document = _this.document;
              _context6.next = 4;
              return document.canvg.parser.load(url);

            case 4:
              svgDocument = _context6.sent;
              fonts = svgDocument.getElementsByTagName('font');
              Array.from(fonts).forEach(function (fontNode) {
                var font = document.createElement(fontNode);
                document.definitions[fontFamily] = font;
              });
              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](0);
              console.error("Error while loading font \"".concat(url, "\":"), _context6.t0);

            case 12:
              _this.loaded = true;

            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    }
  }]);

  return SVGFontLoader;
}();

var StyleElement = /*#__PURE__*/function (_Element11) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StyleElement, _Element11);

  var _super38 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(StyleElement);

  function StyleElement(document, node, captureTextNodes) {
    var _this48;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, StyleElement);

    _this48 = _super38.call(this, document, node, captureTextNodes);
    _this48.type = 'style';
    var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
    .map(function (_) {
      return _.textContent;
    }).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '') // remove comments
    .replace(/@import.*;/g, '') // remove imports
    );
    var cssDefs = css.split('}');
    cssDefs.forEach(function (_) {
      var def = _.trim();

      if (!def) {
        return;
      }

      var cssParts = def.split('{');
      var cssClasses = cssParts[0].split(',');
      var cssProps = cssParts[1].split(';');
      cssClasses.forEach(function (_) {
        var cssClass = _.trim();

        if (!cssClass) {
          return;
        }

        var props = document.styles[cssClass] || {};
        cssProps.forEach(function (cssProp) {
          var prop = cssProp.indexOf(':');
          var name = cssProp.substr(0, prop).trim();
          var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();

          if (name && value) {
            props[name] = new Property(document, name, value);
          }
        });
        document.styles[cssClass] = props;
        document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);

        if (cssClass === '@font-face') {
          //  && !nodeEnv
          var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
          var srcs = props.src.getString().split(',');
          srcs.forEach(function (src) {
            if (src.indexOf('format("svg")') > 0) {
              var url = parseExternalUrl(src);

              if (url) {
                void new SVGFontLoader(document).load(fontFamily, url);
              }
            }
          });
        }
      });
    });
    return _this48;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(StyleElement);
}(Element);

StyleElement.parseExternalUrl = parseExternalUrl;

var UseElement = /*#__PURE__*/function (_RenderedElement7) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(UseElement, _RenderedElement7);

  var _super39 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(UseElement);

  function UseElement() {
    var _this49;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, UseElement);

    _this49 = _super39.apply(this, arguments);
    _this49.type = 'use';
    return _this49;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(UseElement, [{
    key: "setContext",
    value: function setContext(ctx) {
      Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(UseElement.prototype), "setContext", this).call(this, ctx);

      var xAttr = this.getAttribute('x');
      var yAttr = this.getAttribute('y');

      if (xAttr.hasValue()) {
        ctx.translate(xAttr.getPixels('x'), 0);
      }

      if (yAttr.hasValue()) {
        ctx.translate(0, yAttr.getPixels('y'));
      }
    }
  }, {
    key: "path",
    value: function path(ctx) {
      var element = this.element;

      if (element) {
        element.path(ctx);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document = this.document,
          element = this.element;

      if (element) {
        var tempSvg = element;

        if (element.type === 'symbol') {
          // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
          tempSvg = new SVGElement(document, null);
          tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
          tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
          tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
          tempSvg.children = element.children; // element is still the parent of the children

          element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
        }

        if (tempSvg.type === 'svg') {
          var widthStyle = this.getStyle('width', false, true);
          var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me

          if (widthStyle.hasValue()) {
            tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
          }

          if (heightStyle.hasValue()) {
            tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
          }
        }

        var oldParent = tempSvg.parent;
        tempSvg.parent = this;
        tempSvg.render(ctx);
        tempSvg.parent = oldParent;
      }
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var element = this.element;

      if (element) {
        return element.getBoundingBox(ctx);
      }

      return null;
    }
  }, {
    key: "elementTransform",
    value: function elementTransform() {
      var document = this.document,
          element = this.element;
      return Transform.fromElement(document, element);
    }
  }, {
    key: "element",
    get: function get() {
      if (!this.cachedElement) {
        this.cachedElement = this.getHrefAttribute().getDefinition();
      }

      return this.cachedElement;
    }
  }]);

  return UseElement;
}(RenderedElement);

function imGet(img, x, y, width, _height, rgba) {
  return img[y * width * 4 + x * 4 + rgba];
}

function imSet(img, x, y, width, _height, rgba, val) {
  img[y * width * 4 + x * 4 + rgba] = val;
}

function m(matrix, i, v) {
  var mi = matrix[i];
  return mi * v;
}

function c(a, m1, m2, m3) {
  return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}

var FeColorMatrixElement = /*#__PURE__*/function (_Element12) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FeColorMatrixElement, _Element12);

  var _super40 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FeColorMatrixElement);

  function FeColorMatrixElement(document, node, captureTextNodes) {
    var _this50;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FeColorMatrixElement);

    _this50 = _super40.call(this, document, node, captureTextNodes);
    _this50.type = 'feColorMatrix';
    var matrix = toNumbers(_this50.getAttribute('values').getString());

    switch (_this50.getAttribute('type').getString('matrix')) {
      // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
      case 'saturate':
        {
          var s = matrix[0];
          /* eslint-disable array-element-newline */

          matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }

      case 'hueRotate':
        {
          var a = matrix[0] * Math.PI / 180.0;
          /* eslint-disable array-element-newline */

          matrix = [c(a, 0.213, 0.787, -0.213), c(a, 0.715, -0.715, -0.715), c(a, 0.072, -0.072, 0.928), 0, 0, c(a, 0.213, -0.213, 0.143), c(a, 0.715, 0.285, 0.140), c(a, 0.072, -0.072, -0.283), 0, 0, c(a, 0.213, -0.213, -0.787), c(a, 0.715, -0.715, 0.715), c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          /* eslint-enable array-element-newline */

          break;
        }

      case 'luminanceToAlpha':
        /* eslint-disable array-element-newline */
        matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        /* eslint-enable array-element-newline */

        break;
    }

    _this50.matrix = matrix;
    _this50.includeOpacity = _this50.getAttribute('includeOpacity').hasValue();
    return _this50;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FeColorMatrixElement, [{
    key: "apply",
    value: function apply(ctx, _x, _y, width, height) {
      // assuming x==0 && y==0 for now
      var includeOpacity = this.includeOpacity,
          matrix = this.matrix;
      var srcData = ctx.getImageData(0, 0, width, height);

      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var r = imGet(srcData.data, x, y, width, height, 0);
          var g = imGet(srcData.data, x, y, width, height, 1);
          var b = imGet(srcData.data, x, y, width, height, 2);
          var a = imGet(srcData.data, x, y, width, height, 3);
          var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
          var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
          var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
          var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);

          if (includeOpacity) {
            nr = 0;
            ng = 0;
            nb = 0;
            na *= a / 255;
          }

          imSet(srcData.data, x, y, width, height, 0, nr);
          imSet(srcData.data, x, y, width, height, 1, ng);
          imSet(srcData.data, x, y, width, height, 2, nb);
          imSet(srcData.data, x, y, width, height, 3, na);
        }
      }

      ctx.clearRect(0, 0, width, height);
      ctx.putImageData(srcData, 0, 0);
    }
  }]);

  return FeColorMatrixElement;
}(Element);

var MaskElement = /*#__PURE__*/function (_Element13) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MaskElement, _Element13);

  var _super41 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(MaskElement);

  function MaskElement() {
    var _this51;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, MaskElement);

    _this51 = _super41.apply(this, arguments);
    _this51.type = 'mask';
    return _this51;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MaskElement, [{
    key: "apply",
    value: function apply(ctx, element) {
      var document = this.document; // render as temp svg

      var x = this.getAttribute('x').getPixels('x');
      var y = this.getAttribute('y').getPixels('y');
      var width = this.getStyle('width').getPixels('x');
      var height = this.getStyle('height').getPixels('y');

      if (!width && !height) {
        var boundingBox = new BoundingBox();
        this.children.forEach(function (child) {
          boundingBox.addBoundingBox(child.getBoundingBox(ctx));
        });
        x = Math.floor(boundingBox.x1);
        y = Math.floor(boundingBox.y1);
        width = Math.floor(boundingBox.width);
        height = Math.floor(boundingBox.height);
      }

      var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
      var maskCanvas = document.createCanvas(x + width, y + height);
      var maskCtx = maskCanvas.getContext('2d');
      document.screen.setDefaults(maskCtx);
      this.renderChildren(maskCtx); // convert mask to alpha with a fake node
      // TODO: refactor out apply from feColorMatrix

      new FeColorMatrixElement(document, {
        nodeType: 1,
        childNodes: [],
        attributes: [{
          nodeName: 'type',
          value: 'luminanceToAlpha'
        }, {
          nodeName: 'includeOpacity',
          value: 'true'
        }]
      }).apply(maskCtx, 0, 0, x + width, y + height);
      var tmpCanvas = document.createCanvas(x + width, y + height);
      var tmpCtx = tmpCanvas.getContext('2d');
      document.screen.setDefaults(tmpCtx);
      element.render(tmpCtx);
      tmpCtx.globalCompositeOperation = 'destination-in';
      tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
      tmpCtx.fillRect(0, 0, x + width, y + height);
      ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
      ctx.fillRect(0, 0, x + width, y + height); // reassign mask

      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);

  return MaskElement;
}(Element);

MaskElement.ignoreStyles = ['mask', 'transform', 'clip-path'];

var noop = function noop() {// NOOP
};

var ClipPathElement = /*#__PURE__*/function (_Element14) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ClipPathElement, _Element14);

  var _super42 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(ClipPathElement);

  function ClipPathElement() {
    var _this52;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, ClipPathElement);

    _this52 = _super42.apply(this, arguments);
    _this52.type = 'clipPath';
    return _this52;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(ClipPathElement, [{
    key: "apply",
    value: function apply(ctx) {
      var document = this.document;
      var contextProto = Reflect.getPrototypeOf(ctx);
      var beginPath = ctx.beginPath,
          closePath = ctx.closePath;

      if (contextProto) {
        contextProto.beginPath = noop;
        contextProto.closePath = noop;
      }

      Reflect.apply(beginPath, ctx, []);
      this.children.forEach(function (child) {
        if (typeof child.path === 'undefined') {
          return;
        }

        var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />

        if (!transform) {
          transform = Transform.fromElement(document, child);
        }

        if (transform) {
          transform.apply(ctx);
        }

        child.path(ctx);

        if (contextProto) {
          contextProto.closePath = closePath;
        }

        if (transform) {
          transform.unapply(ctx);
        }
      });
      Reflect.apply(closePath, ctx, []);
      ctx.clip();

      if (contextProto) {
        contextProto.beginPath = beginPath;
        contextProto.closePath = closePath;
      }
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);

  return ClipPathElement;
}(Element);

var FilterElement = /*#__PURE__*/function (_Element15) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FilterElement, _Element15);

  var _super43 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FilterElement);

  function FilterElement() {
    var _this53;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FilterElement);

    _this53 = _super43.apply(this, arguments);
    _this53.type = 'filter';
    return _this53;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FilterElement, [{
    key: "apply",
    value: function apply(ctx, element) {
      // render as temp svg
      var document = this.document,
          children = this.children;
      var boundingBox = element.getBoundingBox(ctx);

      if (!boundingBox) {
        return;
      }

      var px = 0;
      var py = 0;
      children.forEach(function (child) {
        var efd = child.extraFilterDistance || 0;
        px = Math.max(px, efd);
        py = Math.max(py, efd);
      });
      var width = Math.floor(boundingBox.width);
      var height = Math.floor(boundingBox.height);
      var tmpCanvasWidth = width + 2 * px;
      var tmpCanvasHeight = height + 2 * py;

      if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
        return;
      }

      var x = Math.floor(boundingBox.x);
      var y = Math.floor(boundingBox.y);
      var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
      var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
      var tmpCtx = tmpCanvas.getContext('2d');
      document.screen.setDefaults(tmpCtx);
      tmpCtx.translate(-x + px, -y + py);
      element.render(tmpCtx); // apply filters

      children.forEach(function (child) {
        if (typeof child.apply === 'function') {
          child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
        }
      }); // render on me

      ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {// NO RENDER
    }
  }]);

  return FilterElement;
}(Element);

FilterElement.ignoreStyles = ['filter', 'transform', 'clip-path'];

var FeDropShadowElement = /*#__PURE__*/function (_Element16) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FeDropShadowElement, _Element16);

  var _super44 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FeDropShadowElement);

  function FeDropShadowElement(document, node, captureTextNodes) {
    var _this54;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FeDropShadowElement);

    _this54 = _super44.call(this, document, node, captureTextNodes);
    _this54.type = 'feDropShadow';

    _this54.addStylesFromStyleDefinition();

    return _this54;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FeDropShadowElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);

  return FeDropShadowElement;
}(Element);

var FeMorphologyElement = /*#__PURE__*/function (_Element17) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FeMorphologyElement, _Element17);

  var _super45 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FeMorphologyElement);

  function FeMorphologyElement() {
    var _this55;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FeMorphologyElement);

    _this55 = _super45.apply(this, arguments);
    _this55.type = 'feMorphology';
    return _this55;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FeMorphologyElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);

  return FeMorphologyElement;
}(Element);

var FeCompositeElement = /*#__PURE__*/function (_Element18) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FeCompositeElement, _Element18);

  var _super46 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FeCompositeElement);

  function FeCompositeElement() {
    var _this56;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FeCompositeElement);

    _this56 = _super46.apply(this, arguments);
    _this56.type = 'feComposite';
    return _this56;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FeCompositeElement, [{
    key: "apply",
    value: function apply(_, _x, _y, _width, _height) {// TODO: implement
    }
  }]);

  return FeCompositeElement;
}(Element);

var FeGaussianBlurElement = /*#__PURE__*/function (_Element19) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FeGaussianBlurElement, _Element19);

  var _super47 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(FeGaussianBlurElement);

  function FeGaussianBlurElement(document, node, captureTextNodes) {
    var _this57;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, FeGaussianBlurElement);

    _this57 = _super47.call(this, document, node, captureTextNodes);
    _this57.type = 'feGaussianBlur';
    _this57.blurRadius = Math.floor(_this57.getAttribute('stdDeviation').getNumber());
    _this57.extraFilterDistance = _this57.blurRadius;
    return _this57;
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(FeGaussianBlurElement, [{
    key: "apply",
    value: function apply(ctx, x, y, width, height) {
      var document = this.document,
          blurRadius = this.blurRadius;
      var body = document.window ? document.window.document.body : null;
      var canvas = ctx.canvas; // StackBlur requires canvas be on document

      canvas.id = document.getUniqueId();

      if (body) {
        canvas.style.display = 'none';
        body.appendChild(canvas);
      }

      Object(stackblur_canvas__WEBPACK_IMPORTED_MODULE_30__["canvasRGBA"])(canvas, x, y, width, height, blurRadius);

      if (body) {
        body.removeChild(canvas);
      }
    }
  }]);

  return FeGaussianBlurElement;
}(Element);

var TitleElement = /*#__PURE__*/function (_Element20) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TitleElement, _Element20);

  var _super48 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(TitleElement);

  function TitleElement() {
    var _this58;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, TitleElement);

    _this58 = _super48.apply(this, arguments);
    _this58.type = 'title';
    return _this58;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(TitleElement);
}(Element);

var DescElement = /*#__PURE__*/function (_Element21) {
  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(DescElement, _Element21);

  var _super49 = Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(DescElement);

  function DescElement() {
    var _this59;

    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, DescElement);

    _this59 = _super49.apply(this, arguments);
    _this59.type = 'desc';
    return _this59;
  }

  return Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(DescElement);
}(Element);

var elements = {
  'svg': SVGElement,
  'rect': RectElement,
  'circle': CircleElement,
  'ellipse': EllipseElement,
  'line': LineElement,
  'polyline': PolylineElement,
  'polygon': PolygonElement,
  'path': PathElement,
  'pattern': PatternElement,
  'marker': MarkerElement,
  'defs': DefsElement,
  'linearGradient': LinearGradientElement,
  'radialGradient': RadialGradientElement,
  'stop': StopElement,
  'animate': AnimateElement,
  'animateColor': AnimateColorElement,
  'animateTransform': AnimateTransformElement,
  'font': FontElement,
  'font-face': FontFaceElement,
  'missing-glyph': MissingGlyphElement,
  'glyph': GlyphElement,
  'text': TextElement,
  'tspan': TSpanElement,
  'tref': TRefElement,
  'a': AElement,
  'textPath': TextPathElement,
  'image': ImageElement,
  'g': GElement,
  'symbol': SymbolElement,
  'style': StyleElement,
  'use': UseElement,
  'mask': MaskElement,
  'clipPath': ClipPathElement,
  'filter': FilterElement,
  'feDropShadow': FeDropShadowElement,
  'feMorphology': FeMorphologyElement,
  'feComposite': FeCompositeElement,
  'feColorMatrix': FeColorMatrixElement,
  'feGaussianBlur': FeGaussianBlurElement,
  'title': TitleElement,
  'desc': DescElement
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function createImage(_x) {
  return _createImage.apply(this, arguments);
}

function _createImage() {
  _createImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(src) {
    var anonymousCrossOrigin,
        image,
        _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          anonymousCrossOrigin = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;
          image = document.createElement('img');

          if (anonymousCrossOrigin) {
            image.crossOrigin = 'Anonymous';
          }

          return _context7.abrupt("return", new Promise(function (resolve, reject) {
            image.onload = function () {
              resolve(image);
            };

            image.onerror = function (_event, _source, _lineno, _colno, error) {
              reject(error);
            };

            image.src = src;
          }));

        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _createImage.apply(this, arguments);
}

var Document = /*#__PURE__*/function () {
  function Document(canvg) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Document);

    var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref11$rootEmSize = _ref11.rootEmSize,
        rootEmSize = _ref11$rootEmSize === void 0 ? 12 : _ref11$rootEmSize,
        _ref11$emSize = _ref11.emSize,
        emSize = _ref11$emSize === void 0 ? 12 : _ref11$emSize,
        _ref11$createCanvas = _ref11.createCanvas,
        createCanvas = _ref11$createCanvas === void 0 ? Document.createCanvas : _ref11$createCanvas,
        _ref11$createImage = _ref11.createImage,
        createImage = _ref11$createImage === void 0 ? Document.createImage : _ref11$createImage,
        anonymousCrossOrigin = _ref11.anonymousCrossOrigin;

    this.canvg = canvg;
    this.definitions = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.images = [];
    this.fonts = [];
    this.emSizeStack = [];
    this.uniqueId = 0;
    this.screen = canvg.screen;
    this.rootEmSize = rootEmSize;
    this.emSize = emSize;
    this.createCanvas = createCanvas;
    this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
    this.screen.wait(this.isImagesLoaded.bind(this));
    this.screen.wait(this.isFontsLoaded.bind(this));
  }

  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Document, [{
    key: "bindCreateImage",
    value: function bindCreateImage(createImage, anonymousCrossOrigin) {
      if (typeof anonymousCrossOrigin === 'boolean') {
        return function (source, forceAnonymousCrossOrigin) {
          return createImage(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
        };
      }

      return createImage;
    }
  }, {
    key: "window",
    get: function get() {
      return this.screen.window;
    }
  }, {
    key: "fetch",
    get: function get() {
      return this.screen.fetch;
    }
  }, {
    key: "ctx",
    get: function get() {
      return this.screen.ctx;
    }
  }, {
    key: "emSize",
    get: function get() {
      var emSizeStack = this.emSizeStack;
      return emSizeStack[emSizeStack.length - 1];
    },
    set: function set(value) {
      var emSizeStack = this.emSizeStack;
      emSizeStack.push(value);
    }
  }, {
    key: "popEmSize",
    value: function popEmSize() {
      var emSizeStack = this.emSizeStack;
      emSizeStack.pop();
    }
  }, {
    key: "getUniqueId",
    value: function getUniqueId() {
      return "canvg".concat(++this.uniqueId);
    }
  }, {
    key: "isImagesLoaded",
    value: function isImagesLoaded() {
      return this.images.every(function (_) {
        return _.loaded;
      });
    }
  }, {
    key: "isFontsLoaded",
    value: function isFontsLoaded() {
      return this.fonts.every(function (_) {
        return _.loaded;
      });
    }
  }, {
    key: "createDocumentElement",
    value: function createDocumentElement(document) {
      var documentElement = this.createElement(document.documentElement);
      documentElement.root = true;
      documentElement.addStylesFromStyleDefinition();
      this.documentElement = documentElement;
      return documentElement;
    }
  }, {
    key: "createElement",
    value: function createElement(node) {
      var elementType = node.nodeName.replace(/^[^:]+:/, '');
      var ElementType = Document.elementTypes[elementType];

      if (typeof ElementType !== 'undefined') {
        return new ElementType(this, node);
      }

      return new UnknownElement(this, node);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(node) {
      return new TextNode(this, node);
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(config) {
      this.screen.setViewBox(_objectSpread$1({
        document: this
      }, config));
    }
  }]);

  return Document;
}();

Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elements;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * SVG renderer on canvas.
 */


var Canvg = /*#__PURE__*/function () {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  function Canvg(ctx, svg) {
    Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Canvg);

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.parser = new Parser(options);
    this.screen = new Screen(ctx, options);
    this.options = options;
    var document = new Document(this, options);
    var documentElement = document.createDocumentElement(svg);
    this.document = document;
    this.documentElement = documentElement;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */


  Object(_Users_mac_Desktop_projet_ipm_ma_branche_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(Canvg, [{
    key: "fork",
    value:
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string or URL.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */
    function fork(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */

  }, {
    key: "forkString",
    value: function forkString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
    }
    /**
     * Document is ready promise.
     * @returns Ready promise.
     */

  }, {
    key: "ready",
    value: function ready() {
      return this.screen.ready();
    }
    /**
     * Document is ready value.
     * @returns Is ready or not.
     */

  }, {
    key: "isReady",
    value: function isReady() {
      return this.screen.isReady();
    }
    /**
     * Render only first frame, ignoring animations and mouse.
     * @param options - Rendering options.
     */

  }, {
    key: "render",
    value: function render() {
      var _arguments2 = arguments,
          _this = this;

      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var options;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};

              _this.start(_objectSpread({
                enableRedraw: true,
                ignoreAnimation: true,
                ignoreMouse: true
              }, options));

              _context8.next = 4;
              return _this.ready();

            case 4:
              _this.stop();

            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }))();
    }
    /**
     * Start rendering.
     * @param options - Render options.
     */

  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var documentElement = this.documentElement,
          screen = this.screen,
          baseOptions = this.options;
      screen.start(documentElement, _objectSpread(_objectSpread({
        enableRedraw: true
      }, baseOptions), options));
    }
    /**
     * Stop rendering.
     */

  }, {
    key: "stop",
    value: function stop() {
      this.screen.stop();
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */

  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.documentElement.resize(width, height, preserveAspectRatio);
    }
  }], [{
    key: "from",
    value: function from(ctx, svg) {
      var _arguments = arguments;
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_12___default()( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var options, parser, svgDocument;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
              parser = new Parser(options);
              _context9.next = 4;
              return parser.parse(svg);

            case 4:
              svgDocument = _context9.sent;
              return _context9.abrupt("return", new Canvg(ctx, svgDocument, options));

            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    }
    /**
     * Create Canvg instance from SVG source string.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     * @returns Canvg instance.
     */

  }, {
    key: "fromString",
    value: function fromString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var parser = new Parser(options);
      var svgDocument = parser.parseFromString(svg);
      return new Canvg(ctx, svgDocument, options);
    }
  }]);

  return Canvg;
}();



/***/ }),

/***/ "Dk1u":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/a-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "4YbN");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "IL+x");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "ENhe":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/dom-iterables.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "ESVS":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.reject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "zFjv");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "GxTi").CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ "FjAG":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/array-reduce.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var toObject = __webpack_require__(/*! ../internals/to-object */ "721z");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "p5Ma");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "tMNq");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "FkIU":
/*!**************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ "FlRv":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-define-property.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "pVCk");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "FkIU");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "GTqx");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "FqHY":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "eE3R");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ "G5Kn":
/*!*********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var create = __webpack_require__(/*! ../internals/object-create */ "XFuk");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "FlRv").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "GHES":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterator-define.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "N6FT");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var createIteratorConstructor = __webpack_require__(/*! ../internals/iterator-create-constructor */ "qozo");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "WLJ+");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "JHvW");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "ueY1");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "8ODz");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "AoAp");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "qjFr");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "GI0h":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "me6S");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "GTqx":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-property-key.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "ms20");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "bT0D");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "GVkW":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.ends-with.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "rt8w");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "fKql").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "OU4x");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "/TZh");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return nativeEndsWith
      ? nativeEndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ "GgKt":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-ios.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "eE3R");

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "GxTi":
/*!********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/promise-constructor-detection.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "KLK4");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "mGb/");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "sNJV");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "vTDQ");
var IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ "dAmL");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "aNIs");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ "Gywb":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "HTC/":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-flags.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "IGIO":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-node.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ "IL+x":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/try-to-string.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "JHvW":
/*!**************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(/*! ../internals/function-uncurry-this-accessor */ "P31t");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "NIpK");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "JTf3":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-callable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $documentAll = __webpack_require__(/*! ../internals/document-all */ "013W");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "KKe4":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.match.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "WONN");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");
var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "M/+V");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "3fk+");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "KLK4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/promise-native-constructor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

module.exports = global.Promise;


/***/ }),

/***/ "KLN8":
/*!**********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.starts-with.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "rt8w");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "fKql").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "OU4x");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "/TZh");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ "Ks5W":
/*!*********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/global.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "Lltv":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.array.iterator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "vkZI");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "G5Kn");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "AoAp");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "UQ6y");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "FlRv").f;
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "GHES");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "i57Q");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "M/+V":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/advance-string-index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "ymN0").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "MNKV":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.includes.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "OU4x");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "/TZh");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "MURR":
/*!******************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "N6FT":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-name.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "NCkV":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.split.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "1mOU");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "WONN");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "COGW");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "NudO");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "M/+V");
var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "8Ys4");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "3fk+");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "WMbf");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "RhGR");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] === 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length !== 4 ||
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "NIpK":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/a-possible-prototype.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "NK/Q":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "Ne/+":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/get-substitution.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var toObject = __webpack_require__(/*! ../internals/to-object */ "721z");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "NudO":
/*!**********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/species-constructor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "Dk1u");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "Nybj":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/array-includes.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "vkZI");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "n6S8");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "tMNq");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "OU4x":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/not-a-regexp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "COGW");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "P31t":
/*!*********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "Ppro":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.regexp.exec.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "WMbf");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "QELg":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/array-method-is-strict.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "QrM1":
/*!********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "ZpKI");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "Yzn+");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "RXj+":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/string-trim.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "noWC");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "RYfq":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/get-built-in.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "RhGR":
/*!************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "SN6V":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "/dXc");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "ST+I":
/*!*************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/shared-key.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(/*! ../internals/shared */ "aNr2");
var uid = __webpack_require__(/*! ../internals/uid */ "MURR");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "SkNP":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/hidden-keys.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};


/***/ }),

/***/ "SwuV":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-object.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "013W");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "TRzv":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/promise-resolve.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "zFjv");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "Ttl4":
/*!******************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "x1+7");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "fKql");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "UCFi":
/*!**********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "UQ6y":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/internal-state.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/weak-map-basic-detection */ "NK/Q");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "8ODz");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var shared = __webpack_require__(/*! ../internals/shared-store */ "4gdG");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "ST+I");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "SkNP");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "Vgcz":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-get-flags.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "3Xd8");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "HTC/");

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ "WLJ+":
/*!**************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var toObject = __webpack_require__(/*! ../internals/to-object */ "721z");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "ST+I");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "Gywb");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "WMbf":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-exec.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "HTC/");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "RhGR");
var shared = __webpack_require__(/*! ../internals/shared */ "aNr2");
var create = __webpack_require__(/*! ../internals/object-create */ "XFuk");
var getInternalState = __webpack_require__(/*! ../internals/internal-state */ "UQ6y").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "4Qxg");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "c55Z");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "WOGj":
/*!****************************************!*\
  !*** ./node_modules/rgbcolor/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/
module.exports = function (color_string) {
  this.ok = false;
  this.alpha = 1.0; // strip any leading #

  if (color_string.charAt(0) == '#') {
    // remove # if any
    color_string = color_string.substr(1, 6);
  }

  color_string = color_string.replace(/ /g, '');
  color_string = color_string.toLowerCase(); // before getting into regexps, try simple matches
  // and overwrite the input

  var simple_colors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '663399',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
  };
  color_string = simple_colors[color_string] || color_string; // emd of simple type-in colors
  // array of color definition objects

  var color_defs = [{
    re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
    example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
    process: function process(bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]), parseFloat(bits[4])];
    }
  }, {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
    process: function process(bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
    }
  }, {
    re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    example: ['#00ff00', '336699'],
    process: function process(bits) {
      return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
    }
  }, {
    re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    example: ['#fb0', 'f0f'],
    process: function process(bits) {
      return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
    }
  }]; // search through the definitions to find a match

  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);

    if (bits) {
      var channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];

      if (channels.length > 3) {
        this.alpha = channels[3];
      }

      this.ok = true;
    }
  } // validate/cleanup values


  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
  this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha; // some getters

  this.toRGB = function () {
    return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
  };

  this.toRGBA = function () {
    return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
  };

  this.toHex = function () {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    return '#' + r + g + b;
  }; // help


  this.getHelpXML = function () {
    var examples = new Array(); // add regexps

    for (var i = 0; i < color_defs.length; i++) {
      var example = color_defs[i].example;

      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    } // add type-in colors


    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }

    var xml = document.createElement('ul');
    xml.setAttribute('id', 'rgbcolor-examples');

    for (var i = 0; i < examples.length; i++) {
      try {
        var list_item = document.createElement('li');
        var list_color = new RGBColor(examples[i]);
        var example_div = document.createElement('div');
        example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
        example_div.appendChild(document.createTextNode('test'));
        var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {}
    }

    return xml;
  };
};

/***/ }),

/***/ "WONN":
/*!*************************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "Ppro");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "rt8w");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "WMbf");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "8ODz");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "WaP5":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/define-built-in.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "3DCu");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "X4md");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "WhZm":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/define-built-in-accessor.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "3DCu");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ "WxoH":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/an-object.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "X/EZ":
/*!*********************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "X4md":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/define-global-property.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "XFuk":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-create.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "oR5W");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "Yzn+");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "SkNP");
var html = __webpack_require__(/*! ../internals/html */ "bUA4");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "me6S");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "ST+I");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "XTcp":
/*!*******************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/task.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var apply = __webpack_require__(/*! ../internals/function-apply */ "1mOU");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "mcoe");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var html = __webpack_require__(/*! ../internals/html */ "bUA4");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "0r2v");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "me6S");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "k2qh");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "GgKt");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "IGIO");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "XaNE":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/require-object-coercible.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "Xp4B":
/*!************************************************************!*\
  !*** ./node_modules/stackblur-canvas/dist/stackblur-es.js ***!
  \************************************************************/
/*! exports provided: BlurStack, canvasRGB, canvasRGBA, image, imageDataRGB, imageDataRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurStack", function() { return BlurStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGB", function() { return processCanvasRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGBA", function() { return processCanvasRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return processImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGB", function() { return processImageDataRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGBA", function() { return processImageDataRGBA; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable no-bitwise -- used for calculations */

/* eslint-disable unicorn/prefer-query-selector -- aiming at
  backward-compatibility */

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @param {boolean} useOffset
 * @param {boolean} skipStyles
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }

  if (!img || !('naturalWidth' in img)) {
    return;
  }

  var dimensionType = useOffset ? 'offset' : 'natural';
  var w = img[dimensionType + 'Width'];
  var h = img[dimensionType + 'Height'];

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || !('getContext' in canvas)) {
    return;
  }

  if (!skipStyles) {
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }

  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */


function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
  }

  var context = canvas.getContext('2d');

  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null,
      stackOut = null,
      yw = 0,
      yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (var y = 0; y < height; y++) {
    stack = stackStart;
    var pr = pixels[yi],
        pg = pixels[yi + 1],
        pb = pixels[yi + 2],
        pa = pixels[yi + 3];

    for (var _i = 0; _i < radiusPlus1; _i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    var rInSum = 0,
        gInSum = 0,
        bInSum = 0,
        aInSum = 0,
        rOutSum = radiusPlus1 * pr,
        gOutSum = radiusPlus1 * pg,
        bOutSum = radiusPlus1 * pb,
        aOutSum = radiusPlus1 * pa,
        rSum = sumFactor * pr,
        gSum = sumFactor * pg,
        bSum = sumFactor * pb,
        aSum = sumFactor * pa;

    for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
      var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
      var r = pixels[p],
          g = pixels[p + 1],
          b = pixels[p + 2],
          a = pixels[p + 3];
      var rbs = radiusPlus1 - _i2;
      rSum += (stack.r = r) * rbs;
      gSum += (stack.g = g) * rbs;
      bSum += (stack.b = b) * rbs;
      aSum += (stack.a = a) * rbs;
      rInSum += r;
      gInSum += g;
      bInSum += b;
      aInSum += a;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (var x = 0; x < width; x++) {
      var paInitial = aSum * mulSum >> shgSum;
      pixels[yi + 3] = paInitial;

      if (paInitial !== 0) {
        var _a2 = 255 / paInitial;

        pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;

      var _p = x + radius + 1;

      _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[_p];
      gInSum += stackIn.g = pixels[_p + 1];
      bInSum += stackIn.b = pixels[_p + 2];
      aInSum += stackIn.a = pixels[_p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      var _stackOut = stackOut,
          _r = _stackOut.r,
          _g = _stackOut.g,
          _b = _stackOut.b,
          _a = _stackOut.a;
      rOutSum += _r;
      gOutSum += _g;
      bOutSum += _b;
      aOutSum += _a;
      rInSum -= _r;
      gInSum -= _g;
      bInSum -= _b;
      aInSum -= _a;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (var _x = 0; _x < width; _x++) {
    yi = _x << 2;

    var _pr = pixels[yi],
        _pg = pixels[yi + 1],
        _pb = pixels[yi + 2],
        _pa = pixels[yi + 3],
        _rOutSum = radiusPlus1 * _pr,
        _gOutSum = radiusPlus1 * _pg,
        _bOutSum = radiusPlus1 * _pb,
        _aOutSum = radiusPlus1 * _pa,
        _rSum = sumFactor * _pr,
        _gSum = sumFactor * _pg,
        _bSum = sumFactor * _pb,
        _aSum = sumFactor * _pa;

    stack = stackStart;

    for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
      stack.r = _pr;
      stack.g = _pg;
      stack.b = _pb;
      stack.a = _pa;
      stack = stack.next;
    }

    var yp = width;
    var _gInSum = 0,
        _bInSum = 0,
        _aInSum = 0,
        _rInSum = 0;

    for (var _i4 = 1; _i4 <= radius; _i4++) {
      yi = yp + _x << 2;

      var _rbs = radiusPlus1 - _i4;

      _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
      _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
      _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
      _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
      _rInSum += _pr;
      _gInSum += _pg;
      _bInSum += _pb;
      _aInSum += _pa;
      stack = stack.next;

      if (_i4 < heightMinus1) {
        yp += width;
      }
    }

    yi = _x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (var _y = 0; _y < height; _y++) {
      var _p2 = yi << 2;

      pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;

      if (_pa > 0) {
        _pa = 255 / _pa;
        pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
      } else {
        pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
      }

      _rSum -= _rOutSum;
      _gSum -= _gOutSum;
      _bSum -= _bOutSum;
      _aSum -= _aOutSum;
      _rOutSum -= stackIn.r;
      _gOutSum -= stackIn.g;
      _bOutSum -= stackIn.b;
      _aOutSum -= stackIn.a;
      _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
      _rSum += _rInSum += stackIn.r = pixels[_p2];
      _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
      _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
      _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
      stackIn = stackIn.next;
      _rOutSum += _pr = stackOut.r;
      _gOutSum += _pg = stackOut.g;
      _bOutSum += _pb = stackOut.b;
      _aOutSum += _pa = stackOut.a;
      _rInSum -= _pr;
      _gInSum -= _pg;
      _bInSum -= _pb;
      _aInSum -= _pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];
  var p, rbs;
  var yw = 0,
      yi = 0;

  for (var y = 0; y < height; y++) {
    var pr = pixels[yi],
        pg = pixels[yi + 1],
        pb = pixels[yi + 2],
        rOutSum = radiusPlus1 * pr,
        gOutSum = radiusPlus1 * pg,
        bOutSum = radiusPlus1 * pb,
        rSum = sumFactor * pr,
        gSum = sumFactor * pg,
        bSum = sumFactor * pb;
    stack = stackStart;

    for (var _i5 = 0; _i5 < radiusPlus1; _i5++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    var rInSum = 0,
        gInSum = 0,
        bInSum = 0;

    for (var _i6 = 1; _i6 < radiusPlus1; _i6++) {
      p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (var x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >> shgSum;
      pixels[yi + 1] = gSum * mulSum >> shgSum;
      pixels[yi + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (var _x2 = 0; _x2 < width; _x2++) {
    yi = _x2 << 2;

    var _pr2 = pixels[yi],
        _pg2 = pixels[yi + 1],
        _pb2 = pixels[yi + 2],
        _rOutSum2 = radiusPlus1 * _pr2,
        _gOutSum2 = radiusPlus1 * _pg2,
        _bOutSum2 = radiusPlus1 * _pb2,
        _rSum2 = sumFactor * _pr2,
        _gSum2 = sumFactor * _pg2,
        _bSum2 = sumFactor * _pb2;

    stack = stackStart;

    for (var _i7 = 0; _i7 < radiusPlus1; _i7++) {
      stack.r = _pr2;
      stack.g = _pg2;
      stack.b = _pb2;
      stack = stack.next;
    }

    var _rInSum2 = 0,
        _gInSum2 = 0,
        _bInSum2 = 0;

    for (var _i8 = 1, yp = width; _i8 <= radius; _i8++) {
      yi = yp + _x2 << 2;
      _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
      _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
      _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
      _rInSum2 += _pr2;
      _gInSum2 += _pg2;
      _bInSum2 += _pb2;
      stack = stack.next;

      if (_i8 < heightMinus1) {
        yp += width;
      }
    }

    yi = _x2;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (var _y2 = 0; _y2 < height; _y2++) {
      p = yi << 2;
      pixels[p] = _rSum2 * mulSum >> shgSum;
      pixels[p + 1] = _gSum2 * mulSum >> shgSum;
      pixels[p + 2] = _bSum2 * mulSum >> shgSum;
      _rSum2 -= _rOutSum2;
      _gSum2 -= _gOutSum2;
      _bSum2 -= _bOutSum2;
      _rOutSum2 -= stackIn.r;
      _gOutSum2 -= stackIn.g;
      _bOutSum2 -= stackIn.b;
      p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      _rSum2 += _rInSum2 += stackIn.r = pixels[p];
      _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
      _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      _rOutSum2 += _pr2 = stackOut.r;
      _gOutSum2 += _pg2 = stackOut.g;
      _bOutSum2 += _pb2 = stackOut.b;
      _rInSum2 -= _pr2;
      _gInSum2 -= _pg2;
      _bInSum2 -= _pb2;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 *
 */


var BlurStack =
/**
 * Set properties.
 */
function BlurStack() {
  _classCallCheck(this, BlurStack);

  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};



/***/ }),

/***/ "YELS":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/has-own-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var toObject = __webpack_require__(/*! ../internals/to-object */ "721z");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "Yzn+":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/enum-bug-keys.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "ZpKI":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-keys-internal.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "vkZI");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "Nybj").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "SkNP");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "a9Cf":
/*!************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-string-tag-support.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "aLaa":
/*!************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-uncurry-this.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "66qH");

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "aNIs":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-v8-version.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "eE3R");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "aNr2":
/*!*********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/shared.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var store = __webpack_require__(/*! ../internals/shared-store */ "4gdG");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "bQgK":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };

    hrtime = process.hrtime;

    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };

    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
}).call(this);

/***/ }),

/***/ "bT0D":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-symbol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "3Xd8");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "1Sr1");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "bUA4":
/*!*******************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/html.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "ba8b":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/classof-raw.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c3MK":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-length.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "SN6V");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "c55Z":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "dAmL":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-deno.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ "eE3R":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-user-agent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ "eRwv":
/*!********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/fails.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "fKql":
/*!*************************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "5r2E");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "4uGi");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "vkZI");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "GTqx");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "pVCk");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "g8+u":
/*!**********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/classof.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "a9Cf");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "g9jQ":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.array.index-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "rt8w");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "Nybj").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "QELg");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ "gzPo":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/microtask.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "mcoe");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "fKql").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "XTcp").set;
var Queue = __webpack_require__(/*! ../internals/queue */ "zUnQ");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "GgKt");
var IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ "FqHY");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "/pbl");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "IGIO");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ "hIaP":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/get-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "IL+x");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "ltkU");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "i57Q":
/*!****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/create-iter-result-object.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "iBj/":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterator-close.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "iWRt":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.array.reverse.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var isArray = __webpack_require__(/*! ../internals/is-array */ "uZ/K");

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),

/***/ "jCYL":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.resolve.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "KLK4");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(/*! ../internals/promise-constructor-detection */ "GxTi").CONSTRUCTOR;
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "TRzv");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ "jybJ":
/*!**********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-pure.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = false;


/***/ }),

/***/ "k2qh":
/*!****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/validate-arguments-length.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "lAFk":
/*!*********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/host-report-errors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ "lSNA":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "o5UB");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "ltkU":
/*!**********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/get-iterator-method.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "g8+u");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "AoAp");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "m7zg":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-call.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "66qH");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "mGb/":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-forced.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "mcoe":
/*!************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-bind-context.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "rt8w");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "66qH");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "mdxj":
/*!****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.array.reduce.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "FjAG").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "QELg");
var CHROME_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "aNIs");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "IGIO");

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "me6S":
/*!**************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/document-create-element.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ms20":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-primitive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "bT0D");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "2lHc");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "n6S8":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-absolute-index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "SN6V");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "nCzB":
/*!*********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/export.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "fKql").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "8ODz");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "X4md");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "Ttl4");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "mGb/");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "noWC":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/whitespaces.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "nvEG":
/*!**********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterate.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "mcoe");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "IL+x");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "3n0U");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "tMNq");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "3Xd8");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "hIaP");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "ltkU");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "iBj/");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "o5UB":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "cDf5")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "5Q0V");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "oK8H":
/*!*************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/get-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "oR5W":
/*!***************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/object-define-properties.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "FkIU");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "vkZI");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "Ai06");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "oauk":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/create-property.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "GTqx");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "FlRv");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "4uGi");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "p5Ma":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/indexed-object.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "pVCk":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "++4Y");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "me6S");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ "qJvV":
/*!*****************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "ENhe");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "GI0h");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "Lltv");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "8ODz");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "qjFr":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterators-core.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var create = __webpack_require__(/*! ../internals/object-create */ "XFuk");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "WLJ+");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "qozo":
/*!******************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/iterator-create-constructor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "qjFr").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "XFuk");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "4uGi");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "ueY1");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "AoAp");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "qzpy":
/*!************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-string.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "g8+u");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "rt8w":
/*!*******************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ "sNJV":
/*!*****************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/inspect-source.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var store = __webpack_require__(/*! ../internals/shared-store */ "4gdG");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "tMNq":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/length-of-array-like.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "tZjp":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.constructor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "jybJ");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "IGIO");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "JHvW");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "ueY1");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "9Bi7");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isObject = __webpack_require__(/*! ../internals/is-object */ "SwuV");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "uoua");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "NudO");
var task = __webpack_require__(/*! ../internals/task */ "XTcp").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "gzPo");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "lAFk");
var perform = __webpack_require__(/*! ../internals/perform */ "8xe4");
var Queue = __webpack_require__(/*! ../internals/queue */ "zUnQ");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "UQ6y");
var NativePromiseConstructor = __webpack_require__(/*! ../internals/promise-native-constructor */ "KLK4");
var PromiseConstructorDetection = __webpack_require__(/*! ../internals/promise-constructor-detection */ "GxTi");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "zFjv");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ "uZ/K":
/*!***********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof-raw */ "ba8b");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ "ueY1":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/set-to-string-tag.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "FlRv").f;
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "YELS");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "uoua":
/*!**************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/an-instance.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "3Xd8");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "v/rq":
/*!*******************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "aNIs");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var global = __webpack_require__(/*! ../internals/global */ "Ks5W");

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "vTDQ":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/engine-is-browser.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_DENO = __webpack_require__(/*! ../internals/engine-is-deno */ "dAmL");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "IGIO");

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ "vkZI":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/to-indexed-object.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "p5Ma");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "vrKp":
/*!***********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/es.promise.constructor */ "tZjp");
__webpack_require__(/*! ../modules/es.promise.all */ "A2dy");
__webpack_require__(/*! ../modules/es.promise.catch */ "13vt");
__webpack_require__(/*! ../modules/es.promise.race */ "D0VN");
__webpack_require__(/*! ../modules/es.promise.reject */ "ESVS");
__webpack_require__(/*! ../modules/es.promise.resolve */ "jCYL");


/***/ }),

/***/ "wOD2":
/*!***************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.trim.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "nCzB");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "RXj+").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "5JCY");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "x0Ve":
/*!***********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/is-null-or-undefined.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "x1+7":
/*!***********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/own-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "RYfq");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "QrM1");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "UCFi");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "x8x8":
/*!******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.string.replace.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "1mOU");
var call = __webpack_require__(/*! ../internals/function-call */ "m7zg");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "WONN");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "JTf3");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "x0Ve");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "SN6V");
var toLength = __webpack_require__(/*! ../internals/to-length */ "c3MK");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "M/+V");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "oK8H");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "Ne/+");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "3fk+");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "11yv");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "xEkU":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(/*! performance-now */ "bQgK"),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
} // Some versions of FF have rAF but not cAF


if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));

      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0); // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue

        queue.length = 0;

        var _loop = function _loop() {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        };

        for (var i = 0; i < cp.length; i++) {
          _loop();
        }
      }, Math.round(next));
    }

    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};

module.exports.cancel = function () {
  caf.apply(root, arguments);
};

module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }

  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ "yD9w":
/*!********************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/modules/es.regexp.to-string.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = __webpack_require__(/*! ../internals/function-name */ "N6FT").PROPER;
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "WaP5");
var anObject = __webpack_require__(/*! ../internals/an-object */ "WxoH");
var $toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var fails = __webpack_require__(/*! ../internals/fails */ "eRwv");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "Vgcz");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ "yXPU":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "ymN0":
/*!*******************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/string-multibyte.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "aLaa");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "SN6V");
var toString = __webpack_require__(/*! ../internals/to-string */ "qzpy");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "XaNE");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "zFjv":
/*!*************************************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/new-promise-capability.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "8HiI");

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "zUnQ":
/*!********************************************************************!*\
  !*** ./node_modules/canvg/node_modules/core-js/internals/queue.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ })

}]);
//# sourceMappingURL=canvg.js.map