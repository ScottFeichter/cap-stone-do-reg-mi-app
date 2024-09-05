function Td(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(r, a);
          l &&
            Object.defineProperty(
              e,
              a,
              l.get ? l : { enumerable: !0, get: () => r[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const l = {};
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const l = n(a);
    fetch(a.href, l);
  }
})();
function kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _d = { exports: {} },
  Ki = {},
  Md = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rl = Symbol.for("react.element"),
  ey = Symbol.for("react.portal"),
  ty = Symbol.for("react.fragment"),
  ny = Symbol.for("react.strict_mode"),
  ry = Symbol.for("react.profiler"),
  ay = Symbol.for("react.provider"),
  ly = Symbol.for("react.context"),
  iy = Symbol.for("react.forward_ref"),
  oy = Symbol.for("react.suspense"),
  sy = Symbol.for("react.memo"),
  uy = Symbol.for("react.lazy"),
  Yu = Symbol.iterator;
function cy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yu && e[Yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Od = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bd = Object.assign,
  Ud = {};
function Ca(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || Od);
}
Ca.prototype.isReactComponent = {};
Ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zd() {}
zd.prototype = Ca.prototype;
function Ws(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ud),
    (this.updater = n || Od);
}
var Qs = (Ws.prototype = new zd());
Qs.constructor = Ws;
bd(Qs, Ca.prototype);
Qs.isPureReactComponent = !0;
var Gu = Array.isArray,
  Ad = Object.prototype.hasOwnProperty,
  Ks = { current: null },
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hd(e, t, n) {
  var r,
    a = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ad.call(t, r) && !Bd.hasOwnProperty(r) && (a[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) a.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    a.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) a[r] === void 0 && (a[r] = s[r]);
  return {
    $$typeof: Rl,
    type: e,
    key: l,
    ref: o,
    props: a,
    _owner: Ks.current,
  };
}
function dy(e, t) {
  return {
    $$typeof: Rl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ys(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rl;
}
function my(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Xu = /\/+/g;
function vo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? my("" + e.key)
    : t.toString(36);
}
function li(e, t, n, r, a) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rl:
          case ey:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (a = a(o)),
      (e = r === "" ? "." + vo(o, 0) : r),
      Gu(a)
        ? ((n = ""),
          e != null && (n = e.replace(Xu, "$&/") + "/"),
          li(a, t, n, "", function (c) {
            return c;
          }))
        : a != null &&
          (Ys(a) &&
            (a = dy(
              a,
              n +
                (!a.key || (o && o.key === a.key)
                  ? ""
                  : ("" + a.key).replace(Xu, "$&/") + "/") +
                e
            )),
          t.push(a)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Gu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + vo(l, s);
      o += li(l, t, n, u, a);
    }
  else if (((u = cy(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + vo(l, s++)), (o += li(l, t, n, u, a));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Al(e, t, n) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    li(e, r, "", "", function (l) {
      return t.call(n, l, a++);
    }),
    r
  );
}
function py(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  ii = { transition: null },
  fy = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: ii,
    ReactCurrentOwner: Ks,
  };
function $d() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Al,
  forEach: function (e, t, n) {
    Al(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Al(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Al(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ys(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ca;
X.Fragment = ty;
X.Profiler = ry;
X.PureComponent = Ws;
X.StrictMode = ny;
X.Suspense = oy;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
X.act = $d;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bd({}, e.props),
    a = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = Ks.current)),
      t.key !== void 0 && (a = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Ad.call(t, u) &&
        !Bd.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Rl, type: e.type, key: a, ref: l, props: r, _owner: o };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: ly,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ay, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Hd;
X.createFactory = function (e) {
  var t = Hd.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: iy, render: e };
};
X.isValidElement = Ys;
X.lazy = function (e) {
  return { $$typeof: uy, _payload: { _status: -1, _result: e }, _init: py };
};
X.memo = function (e, t) {
  return { $$typeof: sy, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = ii.transition;
  ii.transition = {};
  try {
    e();
  } finally {
    ii.transition = t;
  }
};
X.unstable_act = $d;
X.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
X.useContext = function (e) {
  return nt.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
X.useId = function () {
  return nt.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return nt.current.useRef(e);
};
X.useState = function (e) {
  return nt.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return nt.current.useTransition();
};
X.version = "18.3.1";
Md.exports = X;
var f = Md.exports;
const pn = kd(f),
  Ko = Td({ __proto__: null, default: pn }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yy = f,
  hy = Symbol.for("react.element"),
  vy = Symbol.for("react.fragment"),
  Ey = Object.prototype.hasOwnProperty,
  gy = yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vd(e, t, n) {
  var r,
    a = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ey.call(t, r) && !xy.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
  return {
    $$typeof: hy,
    type: e,
    key: l,
    ref: o,
    props: a,
    _owner: gy.current,
  };
}
Ki.Fragment = vy;
Ki.jsx = Vd;
Ki.jsxs = Vd;
_d.exports = Ki;
var i = _d.exports,
  Yo = {},
  qd = { exports: {} },
  It = {},
  Wd = { exports: {} },
  Qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, F) {
    var V = M.length;
    M.push(F);
    e: for (; 0 < V; ) {
      var U = (V - 1) >>> 1,
        J = M[U];
      if (0 < a(J, F)) (M[U] = F), (M[V] = J), (V = U);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var F = M[0],
      V = M.pop();
    if (V !== F) {
      M[0] = V;
      e: for (var U = 0, J = M.length, ke = J >>> 1; U < ke; ) {
        var he = 2 * (U + 1) - 1,
          gt = M[he],
          se = he + 1,
          qe = M[se];
        if (0 > a(gt, V))
          se < J && 0 > a(qe, gt)
            ? ((M[U] = qe), (M[se] = V), (U = se))
            : ((M[U] = gt), (M[he] = V), (U = he));
        else if (se < J && 0 > a(qe, V)) (M[U] = qe), (M[se] = V), (U = se);
        else break e;
      }
    }
    return F;
  }
  function a(M, F) {
    var V = M.sortIndex - F.sortIndex;
    return V !== 0 ? V : M.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    c = [],
    d = 1,
    p = null,
    y = 3,
    N = !1,
    D = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(M) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= M)
        r(c), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(c);
    }
  }
  function j(M) {
    if (((S = !1), E(M), !D))
      if (n(u) !== null) (D = !0), be(T);
      else {
        var F = n(c);
        F !== null && at(j, F.startTime - M);
      }
  }
  function T(M, F) {
    (D = !1), S && ((S = !1), h(g), (g = -1)), (N = !0);
    var V = y;
    try {
      for (
        E(F), p = n(u);
        p !== null && (!(p.expirationTime > F) || (M && !W()));

      ) {
        var U = p.callback;
        if (typeof U == "function") {
          (p.callback = null), (y = p.priorityLevel);
          var J = U(p.expirationTime <= F);
          (F = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(u) && r(u),
            E(F);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ke = !0;
      else {
        var he = n(c);
        he !== null && at(j, he.startTime - F), (ke = !1);
      }
      return ke;
    } finally {
      (p = null), (y = V), (N = !1);
    }
  }
  var _ = !1,
    O = null,
    g = -1,
    H = 5,
    b = -1;
  function W() {
    return !(e.unstable_now() - b < H);
  }
  function ae() {
    if (O !== null) {
      var M = e.unstable_now();
      b = M;
      var F = !0;
      try {
        F = O(!0, M);
      } finally {
        F ? me() : ((_ = !1), (O = null));
      }
    } else _ = !1;
  }
  var me;
  if (typeof m == "function")
    me = function () {
      m(ae);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      Ve = oe.port2;
    (oe.port1.onmessage = ae),
      (me = function () {
        Ve.postMessage(null);
      });
  } else
    me = function () {
      C(ae, 0);
    };
  function be(M) {
    (O = M), _ || ((_ = !0), me());
  }
  function at(M, F) {
    g = C(function () {
      M(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      D || N || ((D = !0), be(T));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = y;
      }
      var V = y;
      y = F;
      try {
        return M();
      } finally {
        y = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, F) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var V = y;
      y = M;
      try {
        return F();
      } finally {
        y = V;
      }
    }),
    (e.unstable_scheduleCallback = function (M, F, V) {
      var U = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? U + V : U))
          : (V = U),
        M)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = V + J),
        (M = {
          id: d++,
          callback: F,
          priorityLevel: M,
          startTime: V,
          expirationTime: J,
          sortIndex: -1,
        }),
        V > U
          ? ((M.sortIndex = V),
            t(c, M),
            n(u) === null &&
              M === n(c) &&
              (S ? (h(g), (g = -1)) : (S = !0), at(j, V - U)))
          : ((M.sortIndex = J), t(u, M), D || N || ((D = !0), be(T))),
        M
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (M) {
      var F = y;
      return function () {
        var V = y;
        y = F;
        try {
          return M.apply(this, arguments);
        } finally {
          y = V;
        }
      };
    });
})(Qd);
Wd.exports = Qd;
var Ny = Wd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dy = f,
  jt = Ny;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Kd = new Set(),
  dl = {};
function zr(e, t) {
  ya(e, t), ya(e + "Capture", t);
}
function ya(e, t) {
  for (dl[e] = t, e = 0; e < t.length; e++) Kd.add(t[e]);
}
var In = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Go = Object.prototype.hasOwnProperty,
  Sy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zu = {},
  Ju = {};
function Cy(e) {
  return Go.call(Ju, e)
    ? !0
    : Go.call(Zu, e)
    ? !1
    : Sy.test(e)
    ? (Ju[e] = !0)
    : ((Zu[e] = !0), !1);
}
function wy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jy(e, t, n, r) {
  if (t === null || typeof t > "u" || wy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function rt(e, t, n, r, a, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gs = /[\-:]([a-z])/g;
function Xs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gs, Xs);
    $e[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gs, Xs);
    $e[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gs, Xs);
  $e[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new rt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zs(e, t, n, r) {
  var a = $e.hasOwnProperty(t) ? $e[t] : null;
  (a !== null
    ? a.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jy(t, n, a, r) && (n = null),
    r || a === null
      ? Cy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((a = a.type),
            (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tn = Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bl = Symbol.for("react.element"),
  Gr = Symbol.for("react.portal"),
  Xr = Symbol.for("react.fragment"),
  Js = Symbol.for("react.strict_mode"),
  Xo = Symbol.for("react.profiler"),
  Yd = Symbol.for("react.provider"),
  Gd = Symbol.for("react.context"),
  eu = Symbol.for("react.forward_ref"),
  Zo = Symbol.for("react.suspense"),
  Jo = Symbol.for("react.suspense_list"),
  tu = Symbol.for("react.memo"),
  $n = Symbol.for("react.lazy"),
  Xd = Symbol.for("react.offscreen"),
  ec = Symbol.iterator;
function Ua(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ec && e[ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Se = Object.assign,
  Eo;
function Xa(e) {
  if (Eo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Eo = (t && t[1]) || "";
    }
  return (
    `
` +
    Eo +
    e
  );
}
var go = !1;
function xo(e, t) {
  if (!e || go) return "";
  go = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var a = c.stack.split(`
`),
          l = r.stack.split(`
`),
          o = a.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && a[o] !== l[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (a[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || a[o] !== l[s])) {
                var u =
                  `
` + a[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (go = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xa(e) : "";
}
function Iy(e) {
  switch (e.tag) {
    case 5:
      return Xa(e.type);
    case 16:
      return Xa("Lazy");
    case 13:
      return Xa("Suspense");
    case 19:
      return Xa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xo(e.type, !1)), e;
    case 11:
      return (e = xo(e.type.render, !1)), e;
    case 1:
      return (e = xo(e.type, !0)), e;
    default:
      return "";
  }
}
function es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xr:
      return "Fragment";
    case Gr:
      return "Portal";
    case Xo:
      return "Profiler";
    case Js:
      return "StrictMode";
    case Zo:
      return "Suspense";
    case Jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gd:
        return (e.displayName || "Context") + ".Consumer";
      case Yd:
        return (e._context.displayName || "Context") + ".Provider";
      case eu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case tu:
        return (
          (t = e.displayName || null), t !== null ? t : es(e.type) || "Memo"
        );
      case $n:
        (t = e._payload), (e = e._init);
        try {
          return es(e(t));
        } catch {}
    }
  return null;
}
function Ly(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return es(t);
    case 8:
      return t === Js ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function rr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fy(e) {
  var t = Zd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var a = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hl(e) {
  e._valueTracker || (e._valueTracker = Fy(e));
}
function Jd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ts(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function tc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function em(e, t) {
  (t = t.checked), t != null && Zs(e, "checked", t, !1);
}
function ns(e, t) {
  em(e, t);
  var n = rr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? rs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && rs(e, t.type, rr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function nc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function rs(e, t, n) {
  (t !== "number" || Ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Za = Array.isArray;
function ua(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rr(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function as(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function rc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Za(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: rr(n) };
}
function tm(e, t) {
  var n = rr(t.value),
    r = rr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ls(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $l,
  rm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $l = $l || document.createElement("div"),
          $l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ml(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Py = ["Webkit", "ms", "Moz", "O"];
Object.keys(nl).forEach(function (e) {
  Py.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (nl[t] = nl[e]);
  });
});
function am(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (nl.hasOwnProperty(e) && nl[e])
    ? ("" + t).trim()
    : t + "px";
}
function lm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        a = am(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
var Ry = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function is(e, t) {
  if (t) {
    if (Ry[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function os(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ss = null;
function nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var us = null,
  ca = null,
  da = null;
function lc(e) {
  if ((e = _l(e))) {
    if (typeof us != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Ji(t)), us(e.stateNode, e.type, t));
  }
}
function im(e) {
  ca ? (da ? da.push(e) : (da = [e])) : (ca = e);
}
function om() {
  if (ca) {
    var e = ca,
      t = da;
    if (((da = ca = null), lc(e), t)) for (e = 0; e < t.length; e++) lc(t[e]);
  }
}
function sm(e, t) {
  return e(t);
}
function um() {}
var No = !1;
function cm(e, t, n) {
  if (No) return e(t, n);
  No = !0;
  try {
    return sm(e, t, n);
  } finally {
    (No = !1), (ca !== null || da !== null) && (um(), om());
  }
}
function pl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ji(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var cs = !1;
if (In)
  try {
    var za = {};
    Object.defineProperty(za, "passive", {
      get: function () {
        cs = !0;
      },
    }),
      window.addEventListener("test", za, za),
      window.removeEventListener("test", za, za);
  } catch {
    cs = !1;
  }
function Ty(e, t, n, r, a, l, o, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var rl = !1,
  gi = null,
  xi = !1,
  ds = null,
  ky = {
    onError: function (e) {
      (rl = !0), (gi = e);
    },
  };
function _y(e, t, n, r, a, l, o, s, u) {
  (rl = !1), (gi = null), Ty.apply(ky, arguments);
}
function My(e, t, n, r, a, l, o, s, u) {
  if ((_y.apply(this, arguments), rl)) {
    if (rl) {
      var c = gi;
      (rl = !1), (gi = null);
    } else throw Error(R(198));
    xi || ((xi = !0), (ds = c));
  }
}
function Ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function dm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ic(e) {
  if (Ar(e) !== e) throw Error(R(188));
}
function Oy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ar(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var l = a.alternate;
    if (l === null) {
      if (((r = a.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === l.child) {
      for (l = a.child; l; ) {
        if (l === n) return ic(a), e;
        if (l === r) return ic(a), t;
        l = l.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = a), (r = l);
    else {
      for (var o = !1, s = a.child; s; ) {
        if (s === n) {
          (o = !0), (n = a), (r = l);
          break;
        }
        if (s === r) {
          (o = !0), (r = a), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            (o = !0), (n = l), (r = a);
            break;
          }
          if (s === r) {
            (o = !0), (r = l), (n = a);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function mm(e) {
  return (e = Oy(e)), e !== null ? pm(e) : null;
}
function pm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fm = jt.unstable_scheduleCallback,
  oc = jt.unstable_cancelCallback,
  by = jt.unstable_shouldYield,
  Uy = jt.unstable_requestPaint,
  je = jt.unstable_now,
  zy = jt.unstable_getCurrentPriorityLevel,
  ru = jt.unstable_ImmediatePriority,
  ym = jt.unstable_UserBlockingPriority,
  Ni = jt.unstable_NormalPriority,
  Ay = jt.unstable_LowPriority,
  hm = jt.unstable_IdlePriority,
  Yi = null,
  fn = null;
function By(e) {
  if (fn && typeof fn.onCommitFiberRoot == "function")
    try {
      fn.onCommitFiberRoot(Yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : Vy,
  Hy = Math.log,
  $y = Math.LN2;
function Vy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hy(e) / $y) | 0)) | 0;
}
var Vl = 64,
  ql = 4194304;
function Ja(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    a = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~a;
    s !== 0 ? (r = Ja(s)) : ((l &= o), l !== 0 && (r = Ja(l)));
  } else (o = n & ~a), o !== 0 ? (r = Ja(o)) : l !== 0 && (r = Ja(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & a) &&
    ((a = r & -r), (l = t & -t), a >= l || (a === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Zt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
  return r;
}
function qy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Zt(l),
      s = 1 << o,
      u = a[o];
    u === -1
      ? (!(s & n) || s & r) && (a[o] = qy(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ms(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vm() {
  var e = Vl;
  return (Vl <<= 1), !(Vl & 4194240) && (Vl = 64), e;
}
function Do(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Zt(t)),
    (e[t] = n);
}
function Qy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Zt(n),
      l = 1 << a;
    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
  }
}
function au(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Zt(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var ie = 0;
function Em(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gm,
  lu,
  xm,
  Nm,
  Dm,
  ps = !1,
  Wl = [],
  Yn = null,
  Gn = null,
  Xn = null,
  fl = new Map(),
  yl = new Map(),
  qn = [],
  Ky =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Xn = null;
      break;
    case "pointerover":
    case "pointerout":
      fl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yl.delete(t.pointerId);
  }
}
function Aa(e, t, n, r, a, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [a],
      }),
      t !== null && ((t = _l(t)), t !== null && lu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e);
}
function Yy(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return (Yn = Aa(Yn, e, t, n, r, a)), !0;
    case "dragenter":
      return (Gn = Aa(Gn, e, t, n, r, a)), !0;
    case "mouseover":
      return (Xn = Aa(Xn, e, t, n, r, a)), !0;
    case "pointerover":
      var l = a.pointerId;
      return fl.set(l, Aa(fl.get(l) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return (
        (l = a.pointerId), yl.set(l, Aa(yl.get(l) || null, e, t, n, r, a)), !0
      );
  }
  return !1;
}
function Sm(e) {
  var t = Sr(e.target);
  if (t !== null) {
    var n = Ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dm(n)), t !== null)) {
          (e.blockedOn = t),
            Dm(e.priority, function () {
              xm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ss = r), n.target.dispatchEvent(r), (ss = null);
    } else return (t = _l(n)), t !== null && lu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function uc(e, t, n) {
  oi(e) && n.delete(t);
}
function Gy() {
  (ps = !1),
    Yn !== null && oi(Yn) && (Yn = null),
    Gn !== null && oi(Gn) && (Gn = null),
    Xn !== null && oi(Xn) && (Xn = null),
    fl.forEach(uc),
    yl.forEach(uc);
}
function Ba(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ps ||
      ((ps = !0),
      jt.unstable_scheduleCallback(jt.unstable_NormalPriority, Gy)));
}
function hl(e) {
  function t(a) {
    return Ba(a, e);
  }
  if (0 < Wl.length) {
    Ba(Wl[0], e);
    for (var n = 1; n < Wl.length; n++) {
      var r = Wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && Ba(Yn, e),
      Gn !== null && Ba(Gn, e),
      Xn !== null && Ba(Xn, e),
      fl.forEach(t),
      yl.forEach(t),
      n = 0;
    n < qn.length;
    n++
  )
    (r = qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qn.length && ((n = qn[0]), n.blockedOn === null); )
    Sm(n), n.blockedOn === null && qn.shift();
}
var ma = Tn.ReactCurrentBatchConfig,
  Si = !0;
function Xy(e, t, n, r) {
  var a = ie,
    l = ma.transition;
  ma.transition = null;
  try {
    (ie = 1), iu(e, t, n, r);
  } finally {
    (ie = a), (ma.transition = l);
  }
}
function Zy(e, t, n, r) {
  var a = ie,
    l = ma.transition;
  ma.transition = null;
  try {
    (ie = 4), iu(e, t, n, r);
  } finally {
    (ie = a), (ma.transition = l);
  }
}
function iu(e, t, n, r) {
  if (Si) {
    var a = fs(e, t, n, r);
    if (a === null) To(e, t, r, Ci, n), sc(e, r);
    else if (Yy(a, e, t, n, r)) r.stopPropagation();
    else if ((sc(e, r), t & 4 && -1 < Ky.indexOf(e))) {
      for (; a !== null; ) {
        var l = _l(a);
        if (
          (l !== null && gm(l),
          (l = fs(e, t, n, r)),
          l === null && To(e, t, r, Ci, n),
          l === a)
        )
          break;
        a = l;
      }
      a !== null && r.stopPropagation();
    } else To(e, t, r, null, n);
  }
}
var Ci = null;
function fs(e, t, n, r) {
  if (((Ci = null), (e = nu(r)), (e = Sr(e)), e !== null))
    if (((t = Ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Cm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (zy()) {
        case ru:
          return 1;
        case ym:
          return 4;
        case Ni:
        case Ay:
          return 16;
        case hm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qn = null,
  ou = null,
  si = null;
function wm() {
  if (si) return si;
  var e,
    t = ou,
    n = t.length,
    r,
    a = "value" in Qn ? Qn.value : Qn.textContent,
    l = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === a[l - r]; r++);
  return (si = a.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ql() {
  return !0;
}
function cc() {
  return !1;
}
function Lt(e) {
  function t(n, r, a, l, o) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ql
        : cc),
      (this.isPropagationStopped = cc),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ql));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ql));
      },
      persist: function () {},
      isPersistent: Ql,
    }),
    t
  );
}
var wa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  su = Lt(wa),
  kl = Se({}, wa, { view: 0, detail: 0 }),
  Jy = Lt(kl),
  So,
  Co,
  Ha,
  Gi = Se({}, kl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ha &&
            (Ha && e.type === "mousemove"
              ? ((So = e.screenX - Ha.screenX), (Co = e.screenY - Ha.screenY))
              : (Co = So = 0),
            (Ha = e)),
          So);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Co;
    },
  }),
  dc = Lt(Gi),
  eh = Se({}, Gi, { dataTransfer: 0 }),
  th = Lt(eh),
  nh = Se({}, kl, { relatedTarget: 0 }),
  wo = Lt(nh),
  rh = Se({}, wa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ah = Lt(rh),
  lh = Se({}, wa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ih = Lt(lh),
  oh = Se({}, wa, { data: 0 }),
  mc = Lt(oh),
  sh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ch = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
}
function uu() {
  return dh;
}
var mh = Se({}, kl, {
    key: function (e) {
      if (e.key) {
        var t = sh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? uh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uu,
    charCode: function (e) {
      return e.type === "keypress" ? ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ph = Lt(mh),
  fh = Se({}, Gi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pc = Lt(fh),
  yh = Se({}, kl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uu,
  }),
  hh = Lt(yh),
  vh = Se({}, wa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eh = Lt(vh),
  gh = Se({}, Gi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xh = Lt(gh),
  Nh = [9, 13, 27, 32],
  cu = In && "CompositionEvent" in window,
  al = null;
In && "documentMode" in document && (al = document.documentMode);
var Dh = In && "TextEvent" in window && !al,
  jm = In && (!cu || (al && 8 < al && 11 >= al)),
  fc = String.fromCharCode(32),
  yc = !1;
function Im(e, t) {
  switch (e) {
    case "keyup":
      return Nh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Zr = !1;
function Sh(e, t) {
  switch (e) {
    case "compositionend":
      return Lm(t);
    case "keypress":
      return t.which !== 32 ? null : ((yc = !0), fc);
    case "textInput":
      return (e = t.data), e === fc && yc ? null : e;
    default:
      return null;
  }
}
function Ch(e, t) {
  if (Zr)
    return e === "compositionend" || (!cu && Im(e, t))
      ? ((e = wm()), (si = ou = Qn = null), (Zr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wh[e.type] : t === "textarea";
}
function Fm(e, t, n, r) {
  im(r),
    (t = wi(t, "onChange")),
    0 < t.length &&
      ((n = new su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ll = null,
  vl = null;
function jh(e) {
  Am(e, 0);
}
function Xi(e) {
  var t = ta(e);
  if (Jd(t)) return e;
}
function Ih(e, t) {
  if (e === "change") return t;
}
var Pm = !1;
if (In) {
  var jo;
  if (In) {
    var Io = "oninput" in document;
    if (!Io) {
      var vc = document.createElement("div");
      vc.setAttribute("oninput", "return;"),
        (Io = typeof vc.oninput == "function");
    }
    jo = Io;
  } else jo = !1;
  Pm = jo && (!document.documentMode || 9 < document.documentMode);
}
function Ec() {
  ll && (ll.detachEvent("onpropertychange", Rm), (vl = ll = null));
}
function Rm(e) {
  if (e.propertyName === "value" && Xi(vl)) {
    var t = [];
    Fm(t, vl, e, nu(e)), cm(jh, t);
  }
}
function Lh(e, t, n) {
  e === "focusin"
    ? (Ec(), (ll = t), (vl = n), ll.attachEvent("onpropertychange", Rm))
    : e === "focusout" && Ec();
}
function Fh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xi(vl);
}
function Ph(e, t) {
  if (e === "click") return Xi(t);
}
function Rh(e, t) {
  if (e === "input" || e === "change") return Xi(t);
}
function Th(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var en = typeof Object.is == "function" ? Object.is : Th;
function El(e, t) {
  if (en(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Go.call(t, a) || !en(e[a], t[a])) return !1;
  }
  return !0;
}
function gc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xc(e, t) {
  var n = gc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gc(n);
  }
}
function Tm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function km() {
  for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ei(e.document);
  }
  return t;
}
function du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function kh(e) {
  var t = km(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && du(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          l = Math.min(r.start, a);
        (r = r.end === void 0 ? l : Math.min(r.end, a)),
          !e.extend && l > r && ((a = r), (r = l), (l = a)),
          (a = xc(n, l));
        var o = xc(n, r);
        a &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _h = In && "documentMode" in document && 11 >= document.documentMode,
  Jr = null,
  ys = null,
  il = null,
  hs = !1;
function Nc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hs ||
    Jr == null ||
    Jr !== Ei(r) ||
    ((r = Jr),
    "selectionStart" in r && du(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (il && El(il, r)) ||
      ((il = r),
      (r = wi(ys, "onSelect")),
      0 < r.length &&
        ((t = new su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jr))));
}
function Kl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ea = {
    animationend: Kl("Animation", "AnimationEnd"),
    animationiteration: Kl("Animation", "AnimationIteration"),
    animationstart: Kl("Animation", "AnimationStart"),
    transitionend: Kl("Transition", "TransitionEnd"),
  },
  Lo = {},
  _m = {};
In &&
  ((_m = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ea.animationend.animation,
    delete ea.animationiteration.animation,
    delete ea.animationstart.animation),
  "TransitionEvent" in window || delete ea.transitionend.transition);
function Zi(e) {
  if (Lo[e]) return Lo[e];
  if (!ea[e]) return e;
  var t = ea[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _m) return (Lo[e] = t[n]);
  return e;
}
var Mm = Zi("animationend"),
  Om = Zi("animationiteration"),
  bm = Zi("animationstart"),
  Um = Zi("transitionend"),
  zm = new Map(),
  Dc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ir(e, t) {
  zm.set(e, t), zr(t, [e]);
}
for (var Fo = 0; Fo < Dc.length; Fo++) {
  var Po = Dc[Fo],
    Mh = Po.toLowerCase(),
    Oh = Po[0].toUpperCase() + Po.slice(1);
  ir(Mh, "on" + Oh);
}
ir(Mm, "onAnimationEnd");
ir(Om, "onAnimationIteration");
ir(bm, "onAnimationStart");
ir("dblclick", "onDoubleClick");
ir("focusin", "onFocus");
ir("focusout", "onBlur");
ir(Um, "onTransitionEnd");
ya("onMouseEnter", ["mouseout", "mouseover"]);
ya("onMouseLeave", ["mouseout", "mouseover"]);
ya("onPointerEnter", ["pointerout", "pointerover"]);
ya("onPointerLeave", ["pointerout", "pointerover"]);
zr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var el =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bh = new Set("cancel close invalid load scroll toggle".split(" ").concat(el));
function Sc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), My(r, t, void 0, e), (e.currentTarget = null);
}
function Am(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== l && a.isPropagationStopped())) break e;
          Sc(a, s, c), (l = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== l && a.isPropagationStopped())
          )
            break e;
          Sc(a, s, c), (l = u);
        }
    }
  }
  if (xi) throw ((e = ds), (xi = !1), (ds = null), e);
}
function fe(e, t) {
  var n = t[Ns];
  n === void 0 && (n = t[Ns] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bm(t, e, 2, !1), n.add(r));
}
function Ro(e, t, n) {
  var r = 0;
  t && (r |= 4), Bm(n, e, r, t);
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function gl(e) {
  if (!e[Yl]) {
    (e[Yl] = !0),
      Kd.forEach(function (n) {
        n !== "selectionchange" && (bh.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yl] || ((t[Yl] = !0), Ro("selectionchange", !1, t));
  }
}
function Bm(e, t, n, r) {
  switch (Cm(t)) {
    case 1:
      var a = Xy;
      break;
    case 4:
      a = Zy;
      break;
    default:
      a = iu;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !cs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function To(e, t, n, r, a) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === a || (s.nodeType === 8 && s.parentNode === a)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === a || (u.nodeType === 8 && u.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Sr(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = l = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  cm(function () {
    var c = l,
      d = nu(n),
      p = [];
    e: {
      var y = zm.get(e);
      if (y !== void 0) {
        var N = su,
          D = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = ph;
            break;
          case "focusin":
            (D = "focus"), (N = wo);
            break;
          case "focusout":
            (D = "blur"), (N = wo);
            break;
          case "beforeblur":
          case "afterblur":
            N = wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            N = dc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = hh;
            break;
          case Mm:
          case Om:
          case bm:
            N = ah;
            break;
          case Um:
            N = Eh;
            break;
          case "scroll":
            N = Jy;
            break;
          case "wheel":
            N = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = ih;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = pc;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          h = S ? (y !== null ? y + "Capture" : null) : y;
        S = [];
        for (var m = c, E; m !== null; ) {
          E = m;
          var j = E.stateNode;
          if (
            (E.tag === 5 &&
              j !== null &&
              ((E = j),
              h !== null && ((j = pl(m, h)), j != null && S.push(xl(m, j, E)))),
            C)
          )
            break;
          m = m.return;
        }
        0 < S.length &&
          ((y = new N(y, D, null, n, d)), p.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          y &&
            n !== ss &&
            (D = n.relatedTarget || n.fromElement) &&
            (Sr(D) || D[Ln]))
        )
          break e;
        if (
          (N || y) &&
          ((y =
            d.window === d
              ? d
              : (y = d.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          N
            ? ((D = n.relatedTarget || n.toElement),
              (N = c),
              (D = D ? Sr(D) : null),
              D !== null &&
                ((C = Ar(D)), D !== C || (D.tag !== 5 && D.tag !== 6)) &&
                (D = null))
            : ((N = null), (D = c)),
          N !== D)
        ) {
          if (
            ((S = dc),
            (j = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = pc),
              (j = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (C = N == null ? y : ta(N)),
            (E = D == null ? y : ta(D)),
            (y = new S(j, m + "leave", N, n, d)),
            (y.target = C),
            (y.relatedTarget = E),
            (j = null),
            Sr(d) === c &&
              ((S = new S(h, m + "enter", D, n, d)),
              (S.target = E),
              (S.relatedTarget = C),
              (j = S)),
            (C = j),
            N && D)
          )
            t: {
              for (S = N, h = D, m = 0, E = S; E; E = Kr(E)) m++;
              for (E = 0, j = h; j; j = Kr(j)) E++;
              for (; 0 < m - E; ) (S = Kr(S)), m--;
              for (; 0 < E - m; ) (h = Kr(h)), E--;
              for (; m--; ) {
                if (S === h || (h !== null && S === h.alternate)) break t;
                (S = Kr(S)), (h = Kr(h));
              }
              S = null;
            }
          else S = null;
          N !== null && Cc(p, y, N, S, !1),
            D !== null && C !== null && Cc(p, C, D, S, !0);
        }
      }
      e: {
        if (
          ((y = c ? ta(c) : window),
          (N = y.nodeName && y.nodeName.toLowerCase()),
          N === "select" || (N === "input" && y.type === "file"))
        )
          var T = Ih;
        else if (hc(y))
          if (Pm) T = Rh;
          else {
            T = Fh;
            var _ = Lh;
          }
        else
          (N = y.nodeName) &&
            N.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (T = Ph);
        if (T && (T = T(e, c))) {
          Fm(p, T, n, d);
          break e;
        }
        _ && _(e, y, c),
          e === "focusout" &&
            (_ = y._wrapperState) &&
            _.controlled &&
            y.type === "number" &&
            rs(y, "number", y.value);
      }
      switch (((_ = c ? ta(c) : window), e)) {
        case "focusin":
          (hc(_) || _.contentEditable === "true") &&
            ((Jr = _), (ys = c), (il = null));
          break;
        case "focusout":
          il = ys = Jr = null;
          break;
        case "mousedown":
          hs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hs = !1), Nc(p, n, d);
          break;
        case "selectionchange":
          if (_h) break;
        case "keydown":
        case "keyup":
          Nc(p, n, d);
      }
      var O;
      if (cu)
        e: {
          switch (e) {
            case "compositionstart":
              var g = "onCompositionStart";
              break e;
            case "compositionend":
              g = "onCompositionEnd";
              break e;
            case "compositionupdate":
              g = "onCompositionUpdate";
              break e;
          }
          g = void 0;
        }
      else
        Zr
          ? Im(e, n) && (g = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g &&
        (jm &&
          n.locale !== "ko" &&
          (Zr || g !== "onCompositionStart"
            ? g === "onCompositionEnd" && Zr && (O = wm())
            : ((Qn = d),
              (ou = "value" in Qn ? Qn.value : Qn.textContent),
              (Zr = !0))),
        (_ = wi(c, g)),
        0 < _.length &&
          ((g = new mc(g, e, null, n, d)),
          p.push({ event: g, listeners: _ }),
          O ? (g.data = O) : ((O = Lm(n)), O !== null && (g.data = O)))),
        (O = Dh ? Sh(e, n) : Ch(e, n)) &&
          ((c = wi(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new mc("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = O)));
    }
    Am(p, t);
  });
}
function xl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e,
      l = a.stateNode;
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      (l = pl(e, n)),
      l != null && r.unshift(xl(e, l, a)),
      (l = pl(e, t)),
      l != null && r.push(xl(e, l, a))),
      (e = e.return);
  }
  return r;
}
function Kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cc(e, t, n, r, a) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      a
        ? ((u = pl(n, l)), u != null && o.unshift(xl(n, u, s)))
        : a || ((u = pl(n, l)), u != null && o.push(xl(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Uh = /\r\n?/g,
  zh = /\u0000|\uFFFD/g;
function wc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Uh,
      `
`
    )
    .replace(zh, "");
}
function Gl(e, t, n) {
  if (((t = wc(t)), wc(e) !== t && n)) throw Error(R(425));
}
function ji() {}
var vs = null,
  Es = null;
function gs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xs = typeof setTimeout == "function" ? setTimeout : void 0,
  Ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jc = typeof Promise == "function" ? Promise : void 0,
  Bh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jc < "u"
      ? function (e) {
          return jc.resolve(null).then(e).catch(Hh);
        }
      : xs;
function Hh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ko(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(a), hl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = a;
  } while (n);
  hl(t);
}
function Zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ic(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ja = Math.random().toString(36).slice(2),
  mn = "__reactFiber$" + ja,
  Nl = "__reactProps$" + ja,
  Ln = "__reactContainer$" + ja,
  Ns = "__reactEvents$" + ja,
  $h = "__reactListeners$" + ja,
  Vh = "__reactHandles$" + ja;
function Sr(e) {
  var t = e[mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ln] || n[mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ic(e); e !== null; ) {
          if ((n = e[mn])) return n;
          e = Ic(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _l(e) {
  return (
    (e = e[mn] || e[Ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ta(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Ji(e) {
  return e[Nl] || null;
}
var Ds = [],
  na = -1;
function or(e) {
  return { current: e };
}
function ye(e) {
  0 > na || ((e.current = Ds[na]), (Ds[na] = null), na--);
}
function pe(e, t) {
  na++, (Ds[na] = e.current), (e.current = t);
}
var ar = {},
  Ge = or(ar),
  yt = or(!1),
  kr = ar;
function ha(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    l;
  for (l in n) a[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function ht(e) {
  return (e = e.childContextTypes), e != null;
}
function Ii() {
  ye(yt), ye(Ge);
}
function Lc(e, t, n) {
  if (Ge.current !== ar) throw Error(R(168));
  pe(Ge, t), pe(yt, n);
}
function Hm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(R(108, Ly(e) || "Unknown", a));
  return Se({}, n, r);
}
function Li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ar),
    (kr = Ge.current),
    pe(Ge, e),
    pe(yt, yt.current),
    !0
  );
}
function Fc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Hm(e, t, kr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ye(yt),
      ye(Ge),
      pe(Ge, e))
    : ye(yt),
    pe(yt, n);
}
var Dn = null,
  eo = !1,
  _o = !1;
function $m(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function qh(e) {
  (eo = !0), $m(e);
}
function sr() {
  if (!_o && Dn !== null) {
    _o = !0;
    var e = 0,
      t = ie;
    try {
      var n = Dn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dn = null), (eo = !1);
    } catch (a) {
      throw (Dn !== null && (Dn = Dn.slice(e + 1)), fm(ru, sr), a);
    } finally {
      (ie = t), (_o = !1);
    }
  }
  return null;
}
var ra = [],
  aa = 0,
  Fi = null,
  Pi = 0,
  Ot = [],
  bt = 0,
  _r = null,
  Sn = 1,
  Cn = "";
function xr(e, t) {
  (ra[aa++] = Pi), (ra[aa++] = Fi), (Fi = e), (Pi = t);
}
function Vm(e, t, n) {
  (Ot[bt++] = Sn), (Ot[bt++] = Cn), (Ot[bt++] = _r), (_r = e);
  var r = Sn;
  e = Cn;
  var a = 32 - Zt(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var l = 32 - Zt(t) + a;
  if (30 < l) {
    var o = a - (a % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Sn = (1 << (32 - Zt(t) + a)) | (n << a) | r),
      (Cn = l + e);
  } else (Sn = (1 << l) | (n << a) | r), (Cn = e);
}
function mu(e) {
  e.return !== null && (xr(e, 1), Vm(e, 1, 0));
}
function pu(e) {
  for (; e === Fi; )
    (Fi = ra[--aa]), (ra[aa] = null), (Pi = ra[--aa]), (ra[aa] = null);
  for (; e === _r; )
    (_r = Ot[--bt]),
      (Ot[bt] = null),
      (Cn = Ot[--bt]),
      (Ot[bt] = null),
      (Sn = Ot[--bt]),
      (Ot[bt] = null);
}
var wt = null,
  St = null,
  ge = !1,
  Xt = null;
function qm(e, t) {
  var n = Ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (St = Zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (St = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _r !== null ? { id: Sn, overflow: Cn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (St = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ss(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cs(e) {
  if (ge) {
    var t = St;
    if (t) {
      var n = t;
      if (!Pc(e, t)) {
        if (Ss(e)) throw Error(R(418));
        t = Zn(n.nextSibling);
        var r = wt;
        t && Pc(e, t)
          ? qm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e));
      }
    } else {
      if (Ss(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e);
    }
  }
}
function Rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function Xl(e) {
  if (e !== wt) return !1;
  if (!ge) return Rc(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps))),
    t && (t = St))
  ) {
    if (Ss(e)) throw (Wm(), Error(R(418)));
    for (; t; ) qm(e, t), (t = Zn(t.nextSibling));
  }
  if ((Rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = Zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else St = wt ? Zn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wm() {
  for (var e = St; e; ) e = Zn(e.nextSibling);
}
function va() {
  (St = wt = null), (ge = !1);
}
function fu(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
var Wh = Tn.ReactCurrentBatchConfig;
function $a(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var a = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var s = a.refs;
            o === null ? delete s[l] : (s[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Tc(e) {
  var t = e._init;
  return t(e._payload);
}
function Qm(e) {
  function t(h, m) {
    if (e) {
      var E = h.deletions;
      E === null ? ((h.deletions = [m]), (h.flags |= 16)) : E.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function a(h, m) {
    return (h = nr(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, m, E) {
    return (
      (h.index = E),
      e
        ? ((E = h.alternate),
          E !== null
            ? ((E = E.index), E < m ? ((h.flags |= 2), m) : E)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, m, E, j) {
    return m === null || m.tag !== 6
      ? ((m = Bo(E, h.mode, j)), (m.return = h), m)
      : ((m = a(m, E)), (m.return = h), m);
  }
  function u(h, m, E, j) {
    var T = E.type;
    return T === Xr
      ? d(h, m, E.props.children, j, E.key)
      : m !== null &&
        (m.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === $n &&
            Tc(T) === m.type))
      ? ((j = a(m, E.props)), (j.ref = $a(h, m, E)), (j.return = h), j)
      : ((j = hi(E.type, E.key, E.props, null, h.mode, j)),
        (j.ref = $a(h, m, E)),
        (j.return = h),
        j);
  }
  function c(h, m, E, j) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== E.containerInfo ||
      m.stateNode.implementation !== E.implementation
      ? ((m = Ho(E, h.mode, j)), (m.return = h), m)
      : ((m = a(m, E.children || [])), (m.return = h), m);
  }
  function d(h, m, E, j, T) {
    return m === null || m.tag !== 7
      ? ((m = Fr(E, h.mode, j, T)), (m.return = h), m)
      : ((m = a(m, E)), (m.return = h), m);
  }
  function p(h, m, E) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Bo("" + m, h.mode, E)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bl:
          return (
            (E = hi(m.type, m.key, m.props, null, h.mode, E)),
            (E.ref = $a(h, null, m)),
            (E.return = h),
            E
          );
        case Gr:
          return (m = Ho(m, h.mode, E)), (m.return = h), m;
        case $n:
          var j = m._init;
          return p(h, j(m._payload), E);
      }
      if (Za(m) || Ua(m))
        return (m = Fr(m, h.mode, E, null)), (m.return = h), m;
      Zl(h, m);
    }
    return null;
  }
  function y(h, m, E, j) {
    var T = m !== null ? m.key : null;
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return T !== null ? null : s(h, m, "" + E, j);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Bl:
          return E.key === T ? u(h, m, E, j) : null;
        case Gr:
          return E.key === T ? c(h, m, E, j) : null;
        case $n:
          return (T = E._init), y(h, m, T(E._payload), j);
      }
      if (Za(E) || Ua(E)) return T !== null ? null : d(h, m, E, j, null);
      Zl(h, E);
    }
    return null;
  }
  function N(h, m, E, j, T) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (h = h.get(E) || null), s(m, h, "" + j, T);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Bl:
          return (h = h.get(j.key === null ? E : j.key) || null), u(m, h, j, T);
        case Gr:
          return (h = h.get(j.key === null ? E : j.key) || null), c(m, h, j, T);
        case $n:
          var _ = j._init;
          return N(h, m, E, _(j._payload), T);
      }
      if (Za(j) || Ua(j)) return (h = h.get(E) || null), d(m, h, j, T, null);
      Zl(m, j);
    }
    return null;
  }
  function D(h, m, E, j) {
    for (
      var T = null, _ = null, O = m, g = (m = 0), H = null;
      O !== null && g < E.length;
      g++
    ) {
      O.index > g ? ((H = O), (O = null)) : (H = O.sibling);
      var b = y(h, O, E[g], j);
      if (b === null) {
        O === null && (O = H);
        break;
      }
      e && O && b.alternate === null && t(h, O),
        (m = l(b, m, g)),
        _ === null ? (T = b) : (_.sibling = b),
        (_ = b),
        (O = H);
    }
    if (g === E.length) return n(h, O), ge && xr(h, g), T;
    if (O === null) {
      for (; g < E.length; g++)
        (O = p(h, E[g], j)),
          O !== null &&
            ((m = l(O, m, g)), _ === null ? (T = O) : (_.sibling = O), (_ = O));
      return ge && xr(h, g), T;
    }
    for (O = r(h, O); g < E.length; g++)
      (H = N(O, h, g, E[g], j)),
        H !== null &&
          (e && H.alternate !== null && O.delete(H.key === null ? g : H.key),
          (m = l(H, m, g)),
          _ === null ? (T = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        O.forEach(function (W) {
          return t(h, W);
        }),
      ge && xr(h, g),
      T
    );
  }
  function S(h, m, E, j) {
    var T = Ua(E);
    if (typeof T != "function") throw Error(R(150));
    if (((E = T.call(E)), E == null)) throw Error(R(151));
    for (
      var _ = (T = null), O = m, g = (m = 0), H = null, b = E.next();
      O !== null && !b.done;
      g++, b = E.next()
    ) {
      O.index > g ? ((H = O), (O = null)) : (H = O.sibling);
      var W = y(h, O, b.value, j);
      if (W === null) {
        O === null && (O = H);
        break;
      }
      e && O && W.alternate === null && t(h, O),
        (m = l(W, m, g)),
        _ === null ? (T = W) : (_.sibling = W),
        (_ = W),
        (O = H);
    }
    if (b.done) return n(h, O), ge && xr(h, g), T;
    if (O === null) {
      for (; !b.done; g++, b = E.next())
        (b = p(h, b.value, j)),
          b !== null &&
            ((m = l(b, m, g)), _ === null ? (T = b) : (_.sibling = b), (_ = b));
      return ge && xr(h, g), T;
    }
    for (O = r(h, O); !b.done; g++, b = E.next())
      (b = N(O, h, g, b.value, j)),
        b !== null &&
          (e && b.alternate !== null && O.delete(b.key === null ? g : b.key),
          (m = l(b, m, g)),
          _ === null ? (T = b) : (_.sibling = b),
          (_ = b));
    return (
      e &&
        O.forEach(function (ae) {
          return t(h, ae);
        }),
      ge && xr(h, g),
      T
    );
  }
  function C(h, m, E, j) {
    if (
      (typeof E == "object" &&
        E !== null &&
        E.type === Xr &&
        E.key === null &&
        (E = E.props.children),
      typeof E == "object" && E !== null)
    ) {
      switch (E.$$typeof) {
        case Bl:
          e: {
            for (var T = E.key, _ = m; _ !== null; ) {
              if (_.key === T) {
                if (((T = E.type), T === Xr)) {
                  if (_.tag === 7) {
                    n(h, _.sibling),
                      (m = a(_, E.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  _.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === $n &&
                    Tc(T) === _.type)
                ) {
                  n(h, _.sibling),
                    (m = a(_, E.props)),
                    (m.ref = $a(h, _, E)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            E.type === Xr
              ? ((m = Fr(E.props.children, h.mode, j, E.key)),
                (m.return = h),
                (h = m))
              : ((j = hi(E.type, E.key, E.props, null, h.mode, j)),
                (j.ref = $a(h, m, E)),
                (j.return = h),
                (h = j));
          }
          return o(h);
        case Gr:
          e: {
            for (_ = E.key; m !== null; ) {
              if (m.key === _)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === E.containerInfo &&
                  m.stateNode.implementation === E.implementation
                ) {
                  n(h, m.sibling),
                    (m = a(m, E.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = Ho(E, h.mode, j)), (m.return = h), (h = m);
          }
          return o(h);
        case $n:
          return (_ = E._init), C(h, m, _(E._payload), j);
      }
      if (Za(E)) return D(h, m, E, j);
      if (Ua(E)) return S(h, m, E, j);
      Zl(h, E);
    }
    return (typeof E == "string" && E !== "") || typeof E == "number"
      ? ((E = "" + E),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = a(m, E)), (m.return = h), (h = m))
          : (n(h, m), (m = Bo(E, h.mode, j)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return C;
}
var Ea = Qm(!0),
  Km = Qm(!1),
  Ri = or(null),
  Ti = null,
  la = null,
  yu = null;
function hu() {
  yu = la = Ti = null;
}
function vu(e) {
  var t = Ri.current;
  ye(Ri), (e._currentValue = t);
}
function ws(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pa(e, t) {
  (Ti = e),
    (yu = la = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ft = !0), (e.firstContext = null));
}
function At(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), la === null)) {
      if (Ti === null) throw Error(R(308));
      (la = e), (Ti.dependencies = { lanes: 0, firstContext: e });
    } else la = la.next = e;
  return t;
}
var Cr = null;
function Eu(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function Ym(e, t, n, r) {
  var a = t.interleaved;
  return (
    a === null ? ((n.next = n), Eu(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Fn(e, r)
  );
}
function Fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vn = !1;
function gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var a = r.pending;
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Fn(e, n)
    );
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), Eu(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Fn(e, n)
  );
}
function ci(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
function kc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (a = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (a = l = t) : (l = l.next = t);
    } else a = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ki(e, t, n, r) {
  var a = e.updateQueue;
  Vn = !1;
  var l = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    s = a.shared.pending;
  if (s !== null) {
    a.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), o === null ? (l = c) : (o.next = c), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== o &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var p = a.baseState;
    (o = 0), (d = c = u = null), (s = l);
    do {
      var y = s.lane,
        N = s.eventTime;
      if ((r & y) === y) {
        d !== null &&
          (d = d.next =
            {
              eventTime: N,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var D = e,
            S = s;
          switch (((y = t), (N = n), S.tag)) {
            case 1:
              if (((D = S.payload), typeof D == "function")) {
                p = D.call(N, p, y);
                break e;
              }
              p = D;
              break e;
            case 3:
              D.flags = (D.flags & -65537) | 128;
            case 0:
              if (
                ((D = S.payload),
                (y = typeof D == "function" ? D.call(N, p, y) : D),
                y == null)
              )
                break e;
              p = Se({}, p, y);
              break e;
            case 2:
              Vn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (y = a.effects),
          y === null ? (a.effects = [s]) : y.push(s));
      } else
        (N = {
          eventTime: N,
          lane: y,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = N), (u = p)) : (d = d.next = N),
          (o |= y);
      if (((s = s.next), s === null)) {
        if (((s = a.shared.pending), s === null)) break;
        (y = s),
          (s = y.next),
          (y.next = null),
          (a.lastBaseUpdate = y),
          (a.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = p),
      (a.baseState = u),
      (a.firstBaseUpdate = c),
      (a.lastBaseUpdate = d),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (o |= a.lane), (a = a.next);
      while (a !== t);
    } else l === null && (a.shared.lanes = 0);
    (Or |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function _c(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != "function"))
          throw Error(R(191, a));
        a.call(r);
      }
    }
}
var Ml = {},
  yn = or(Ml),
  Dl = or(Ml),
  Sl = or(Ml);
function wr(e) {
  if (e === Ml) throw Error(R(174));
  return e;
}
function xu(e, t) {
  switch ((pe(Sl, t), pe(Dl, e), pe(yn, Ml), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ls(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ls(t, e));
  }
  ye(yn), pe(yn, t);
}
function ga() {
  ye(yn), ye(Dl), ye(Sl);
}
function Xm(e) {
  wr(Sl.current);
  var t = wr(yn.current),
    n = ls(t, e.type);
  t !== n && (pe(Dl, e), pe(yn, n));
}
function Nu(e) {
  Dl.current === e && (ye(yn), ye(Dl));
}
var Ne = or(0);
function _i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Mo = [];
function Du() {
  for (var e = 0; e < Mo.length; e++)
    Mo[e]._workInProgressVersionPrimary = null;
  Mo.length = 0;
}
var di = Tn.ReactCurrentDispatcher,
  Oo = Tn.ReactCurrentBatchConfig,
  Mr = 0,
  De = null,
  Re = null,
  Me = null,
  Mi = !1,
  ol = !1,
  Cl = 0,
  Qh = 0;
function Qe() {
  throw Error(R(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!en(e[n], t[n])) return !1;
  return !0;
}
function Cu(e, t, n, r, a, l) {
  if (
    ((Mr = l),
    (De = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (di.current = e === null || e.memoizedState === null ? Xh : Zh),
    (e = n(r, a)),
    ol)
  ) {
    l = 0;
    do {
      if (((ol = !1), (Cl = 0), 25 <= l)) throw Error(R(301));
      (l += 1),
        (Me = Re = null),
        (t.updateQueue = null),
        (di.current = Jh),
        (e = n(r, a));
    } while (ol);
  }
  if (
    ((di.current = Oi),
    (t = Re !== null && Re.next !== null),
    (Mr = 0),
    (Me = Re = De = null),
    (Mi = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function wu() {
  var e = Cl !== 0;
  return (Cl = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (De.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function Bt() {
  if (Re === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Me === null ? De.memoizedState : Me.next;
  if (t !== null) (Me = t), (Re = e);
  else {
    if (e === null) throw Error(R(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Me === null ? (De.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function wl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bo(e) {
  var t = Bt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Re,
    a = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (a !== null) {
      var o = a.next;
      (a.next = l.next), (l.next = o);
    }
    (r.baseQueue = a = l), (n.pending = null);
  }
  if (a !== null) {
    (l = a.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      c = l;
    do {
      var d = c.lane;
      if ((Mr & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (o = r)) : (u = u.next = p),
          (De.lanes |= d),
          (Or |= d);
      }
      c = c.next;
    } while (c !== null && c !== l);
    u === null ? (o = r) : (u.next = s),
      en(r, t.memoizedState) || (ft = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    a = e;
    do (l = a.lane), (De.lanes |= l), (Or |= l), (a = a.next);
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Uo(e) {
  var t = Bt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    l = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var o = (a = a.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== a);
    en(l, t.memoizedState) || (ft = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Zm() {}
function Jm(e, t) {
  var n = De,
    r = Bt(),
    a = t(),
    l = !en(r.memoizedState, a);
  if (
    (l && ((r.memoizedState = a), (ft = !0)),
    (r = r.queue),
    ju(np.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Me !== null && Me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      jl(9, tp.bind(null, n, r, a, t), void 0, null),
      Oe === null)
    )
      throw Error(R(349));
    Mr & 30 || ep(n, t, a);
  }
  return a;
}
function ep(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function tp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rp(t) && ap(e);
}
function np(e, t, n) {
  return n(function () {
    rp(t) && ap(e);
  });
}
function rp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !en(e, n);
  } catch {
    return !0;
  }
}
function ap(e) {
  var t = Fn(e, 1);
  t !== null && Jt(t, e, 1, -1);
}
function Mc(e) {
  var t = dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gh.bind(null, De, e)),
    [t.memoizedState, e]
  );
}
function jl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function lp() {
  return Bt().memoizedState;
}
function mi(e, t, n, r) {
  var a = dn();
  (De.flags |= e),
    (a.memoizedState = jl(1 | t, n, void 0, r === void 0 ? null : r));
}
function to(e, t, n, r) {
  var a = Bt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Re !== null) {
    var o = Re.memoizedState;
    if (((l = o.destroy), r !== null && Su(r, o.deps))) {
      a.memoizedState = jl(t, n, l, r);
      return;
    }
  }
  (De.flags |= e), (a.memoizedState = jl(1 | t, n, l, r));
}
function Oc(e, t) {
  return mi(8390656, 8, e, t);
}
function ju(e, t) {
  return to(2048, 8, e, t);
}
function ip(e, t) {
  return to(4, 2, e, t);
}
function op(e, t) {
  return to(4, 4, e, t);
}
function sp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function up(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), to(4, 4, sp.bind(null, t, e), n)
  );
}
function Iu() {}
function cp(e, t) {
  var n = Bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dp(e, t) {
  var n = Bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mp(e, t, n) {
  return Mr & 21
    ? (en(n, t) || ((n = vm()), (De.lanes |= n), (Or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n));
}
function Kh(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oo.transition;
  Oo.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (Oo.transition = r);
  }
}
function pp() {
  return Bt().memoizedState;
}
function Yh(e, t, n) {
  var r = tr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fp(e))
  )
    yp(t, n);
  else if (((n = Ym(e, t, n, r)), n !== null)) {
    var a = tt();
    Jt(n, e, r, a), hp(n, t, r);
  }
}
function Gh(e, t, n) {
  var r = tr(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fp(e)) yp(t, a);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = l(o, n);
        if (((a.hasEagerState = !0), (a.eagerState = s), en(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((a.next = a), Eu(t))
            : ((a.next = u.next), (u.next = a)),
            (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ym(e, t, a, r)),
      n !== null && ((a = tt()), Jt(n, e, r, a), hp(n, t, r));
  }
}
function fp(e) {
  var t = e.alternate;
  return e === De || (t !== null && t === De);
}
function yp(e, t) {
  ol = Mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), au(e, n);
  }
}
var Oi = {
    readContext: At,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  Xh = {
    readContext: At,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: At,
    useEffect: Oc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mi(4194308, 4, sp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yh.bind(null, De, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Mc,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = Mc(!1),
        t = e[0];
      return (e = Kh.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = De,
        a = dn();
      if (ge) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Oe === null)) throw Error(R(349));
        Mr & 30 || ep(r, t, n);
      }
      a.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (a.queue = l),
        Oc(np.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        jl(9, tp.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = Oe.identifierPrefix;
      if (ge) {
        var n = Cn,
          r = Sn;
        (n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: At,
    useCallback: cp,
    useContext: At,
    useEffect: ju,
    useImperativeHandle: up,
    useInsertionEffect: ip,
    useLayoutEffect: op,
    useMemo: dp,
    useReducer: bo,
    useRef: lp,
    useState: function () {
      return bo(wl);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = Bt();
      return mp(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = bo(wl)[0],
        t = Bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zm,
    useSyncExternalStore: Jm,
    useId: pp,
    unstable_isNewReconciler: !1,
  },
  Jh = {
    readContext: At,
    useCallback: cp,
    useContext: At,
    useEffect: ju,
    useImperativeHandle: up,
    useInsertionEffect: ip,
    useLayoutEffect: op,
    useMemo: dp,
    useReducer: Uo,
    useRef: lp,
    useState: function () {
      return Uo(wl);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = Bt();
      return Re === null ? (t.memoizedState = e) : mp(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Uo(wl)[0],
        t = Bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zm,
    useSyncExternalStore: Jm,
    useId: pp,
    unstable_isNewReconciler: !1,
  };
function Kt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function js(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var no = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      a = tr(e),
      l = wn(r, a);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Jn(e, l, a)),
      t !== null && (Jt(t, e, a, r), ci(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      a = tr(e),
      l = wn(r, a);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Jn(e, l, a)),
      t !== null && (Jt(t, e, a, r), ci(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = tr(e),
      a = wn(n, r);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = Jn(e, a, r)),
      t !== null && (Jt(t, e, r, n), ci(t, e, r));
  },
};
function bc(e, t, n, r, a, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !El(n, r) || !El(a, l)
      : !0
  );
}
function vp(e, t, n) {
  var r = !1,
    a = ar,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = At(l))
      : ((a = ht(t) ? kr : Ge.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? ha(e, a) : ar)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = no),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Uc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && no.enqueueReplaceState(t, t.state, null);
}
function Is(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = {}), gu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (a.context = At(l))
    : ((l = ht(t) ? kr : Ge.current), (a.context = ha(e, l))),
    (a.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (js(e, t, l, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((t = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && no.enqueueReplaceState(a, a.state, null),
      ki(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function xa(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Iy(r)), (r = r.return);
    while (r);
    var a = n;
  } catch (l) {
    a =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function zo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ls(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ev = typeof WeakMap == "function" ? WeakMap : Map;
function Ep(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ui || ((Ui = !0), (Us = r)), Ls(e, t);
    }),
    n
  );
}
function gp(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Ls(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ls(e, t),
          typeof r != "function" &&
            (er === null ? (er = new Set([this])) : er.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function zc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ev();
    var a = new Set();
    r.set(t, a);
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = fv.bind(null, e, t, n)), t.then(e, e));
}
function Ac(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bc(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wn(-1, 1)), (t.tag = 2), Jn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tv = Tn.ReactCurrentOwner,
  ft = !1;
function et(e, t, n, r) {
  t.child = e === null ? Km(t, null, n, r) : Ea(t, e.child, n, r);
}
function Hc(e, t, n, r, a) {
  n = n.render;
  var l = t.ref;
  return (
    pa(t, a),
    (r = Cu(e, t, n, r, l, a)),
    (n = wu()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Pn(e, t, a))
      : (ge && n && mu(t), (t.flags |= 1), et(e, t, r, a), t.child)
  );
}
function $c(e, t, n, r, a) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Mu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), xp(e, t, l, r, a))
      : ((e = hi(n.type, null, r, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & a))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : El), n(o, r) && e.ref === t.ref)
    )
      return Pn(e, t, a);
  }
  return (
    (t.flags |= 1),
    (e = nr(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xp(e, t, n, r, a) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (El(l, r) && e.ref === t.ref)
      if (((ft = !1), (t.pendingProps = r = l), (e.lanes & a) !== 0))
        e.flags & 131072 && (ft = !0);
      else return (t.lanes = e.lanes), Pn(e, t, a);
  }
  return Fs(e, t, n, r, a);
}
function Np(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(oa, Nt),
        (Nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(oa, Nt),
          (Nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        pe(oa, Nt),
        (Nt |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(oa, Nt),
      (Nt |= r);
  return et(e, t, a, n), t.child;
}
function Dp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fs(e, t, n, r, a) {
  var l = ht(n) ? kr : Ge.current;
  return (
    (l = ha(t, l)),
    pa(t, a),
    (n = Cu(e, t, n, r, l, a)),
    (r = wu()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Pn(e, t, a))
      : (ge && r && mu(t), (t.flags |= 1), et(e, t, n, a), t.child)
  );
}
function Vc(e, t, n, r, a) {
  if (ht(n)) {
    var l = !0;
    Li(t);
  } else l = !1;
  if ((pa(t, a), t.stateNode === null))
    pi(e, t), vp(t, n, r), Is(t, n, r, a), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = At(c))
      : ((c = ht(n) ? kr : Ge.current), (c = ha(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && Uc(t, o, r, c)),
      (Vn = !1);
    var y = t.memoizedState;
    (o.state = y),
      ki(t, r, o, a),
      (u = t.memoizedState),
      s !== r || y !== u || yt.current || Vn
        ? (typeof d == "function" && (js(t, n, d, r), (u = t.memoizedState)),
          (s = Vn || bc(t, n, s, r, y, u, c))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Gm(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Kt(t.type, s)),
      (o.props = c),
      (p = t.pendingProps),
      (y = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = At(u))
        : ((u = ht(n) ? kr : Ge.current), (u = ha(t, u)));
    var N = n.getDerivedStateFromProps;
    (d =
      typeof N == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== p || y !== u) && Uc(t, o, r, u)),
      (Vn = !1),
      (y = t.memoizedState),
      (o.state = y),
      ki(t, r, o, a);
    var D = t.memoizedState;
    s !== p || y !== D || yt.current || Vn
      ? (typeof N == "function" && (js(t, n, N, r), (D = t.memoizedState)),
        (c = Vn || bc(t, n, c, r, y, D, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, D, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, D, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = D)),
        (o.props = r),
        (o.state = D),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ps(e, t, n, r, l, a);
}
function Ps(e, t, n, r, a, l) {
  Dp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return a && Fc(t, n, !1), Pn(e, t, l);
  (r = t.stateNode), (tv.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ea(t, e.child, null, l)), (t.child = Ea(t, null, s, l)))
      : et(e, t, s, l),
    (t.memoizedState = r.state),
    a && Fc(t, n, !0),
    t.child
  );
}
function Sp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lc(e, t.context, !1),
    xu(e, t.containerInfo);
}
function qc(e, t, n, r, a) {
  return va(), fu(a), (t.flags |= 256), et(e, t, n, r), t.child;
}
var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ts(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    a = Ne.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    pe(Ne, a & 1),
    e === null)
  )
    return (
      Cs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = lo(o, r, 0, null)),
              (e = Fr(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ts(n)),
              (t.memoizedState = Rs),
              e)
            : Lu(t, o))
    );
  if (((a = e.memoizedState), a !== null && ((s = a.dehydrated), s !== null)))
    return nv(e, t, o, r, s, a, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (a = e.child), (s = a.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== a
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = nr(a, u)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      s !== null ? (l = nr(s, l)) : ((l = Fr(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ts(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Rs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = nr(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Lu(e, t) {
  return (
    (t = lo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jl(e, t, n, r) {
  return (
    r !== null && fu(r),
    Ea(t, e.child, null, n),
    (e = Lu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nv(e, t, n, r, a, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zo(Error(R(422)))), Jl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (a = t.mode),
        (r = lo({ mode: "visible", children: r.children }, a, 0, null)),
        (l = Fr(l, a, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Ea(t, e.child, null, o),
        (t.child.memoizedState = Ts(o)),
        (t.memoizedState = Rs),
        l);
  if (!(t.mode & 1)) return Jl(e, t, o, null);
  if (a.data === "$!") {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(R(419))), (r = zo(l, r, void 0)), Jl(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), ft || s)) {
    if (((r = Oe), r !== null)) {
      switch (o & -o) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (r.suspendedLanes | o) ? 0 : a),
        a !== 0 &&
          a !== l.retryLane &&
          ((l.retryLane = a), Fn(e, a), Jt(r, e, a, -1));
    }
    return _u(), (r = zo(Error(R(421)))), Jl(e, t, o, r);
  }
  return a.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yv.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (St = Zn(a.nextSibling)),
      (wt = t),
      (ge = !0),
      (Xt = null),
      e !== null &&
        ((Ot[bt++] = Sn),
        (Ot[bt++] = Cn),
        (Ot[bt++] = _r),
        (Sn = e.id),
        (Cn = e.overflow),
        (_r = t)),
      (t = Lu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ws(e.return, t, n);
}
function Ao(e, t, n, r, a) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = a));
}
function wp(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    l = r.tail;
  if ((et(e, t, r.children, n), (r = Ne.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wc(e, n, t);
        else if (e.tag === 19) Wc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(Ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && _i(e) === null && (a = n),
            (n = n.sibling);
        (n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          Ao(t, !1, a, n, l);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && _i(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Ao(t, !0, n, null, l);
        break;
      case "together":
        Ao(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = nr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = nr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rv(e, t, n) {
  switch (t.tag) {
    case 3:
      Sp(t), va();
      break;
    case 5:
      Xm(t);
      break;
    case 1:
      ht(t.type) && Li(t);
      break;
    case 4:
      xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value;
      pe(Ri, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(Ne, Ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cp(e, t, n)
          : (pe(Ne, Ne.current & 1),
            (e = Pn(e, t, n)),
            e !== null ? e.sibling : null);
      pe(Ne, Ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        pe(Ne, Ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Np(e, t, n);
  }
  return Pn(e, t, n);
}
var jp, ks, Ip, Lp;
jp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ks = function () {};
Ip = function (e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = t.stateNode), wr(yn.current);
    var l = null;
    switch (n) {
      case "input":
        (a = ts(e, a)), (r = ts(e, r)), (l = []);
        break;
      case "select":
        (a = Se({}, a, { value: void 0 })),
          (r = Se({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (a = as(e, a)), (r = as(e, r)), (l = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ji);
    }
    is(n, r);
    var o;
    n = null;
    for (c in a)
      if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
        if (c === "style") {
          var s = a[c];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (dl.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = a != null ? a[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (l || (l = []), l.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (dl.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && fe("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(c, u));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Va(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function av(e, t, n) {
  var r = t.pendingProps;
  switch ((pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ke(t), null;
    case 1:
      return ht(t.type) && Ii(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ga(),
        ye(yt),
        ye(Ge),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xt !== null && (Bs(Xt), (Xt = null)))),
        ks(e, t),
        Ke(t),
        null
      );
    case 5:
      Nu(t);
      var a = wr(Sl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ip(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ke(t), null;
        }
        if (((e = wr(yn.current)), Xl(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[mn] = t), (r[Nl] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < el.length; a++) fe(el[a], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              tc(r, l), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              rc(r, l), fe("invalid", r);
          }
          is(n, l), (a = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, s, e),
                    (a = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Gl(r.textContent, s, e),
                    (a = ["children", "" + s]))
                : dl.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Hl(r), nc(r, l, !0);
              break;
            case "textarea":
              Hl(r), ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ji);
          }
          (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[mn] = t),
            (e[Nl] = r),
            jp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = os(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < el.length; a++) fe(el[a], e);
                a = r;
                break;
              case "source":
                fe("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (a = r);
                break;
              case "details":
                fe("toggle", e), (a = r);
                break;
              case "input":
                tc(e, r), (a = ts(e, r)), fe("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = Se({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                rc(e, r), (a = as(e, r)), fe("invalid", e);
                break;
              default:
                a = r;
            }
            is(n, a), (s = a);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? lm(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && rm(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ml(e, u)
                    : typeof u == "number" && ml(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (dl.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && fe("scroll", e)
                      : u != null && Zs(e, l, u, o));
              }
            switch (n) {
              case "input":
                Hl(e), nc(e, r, !1);
                break;
              case "textarea":
                Hl(e), ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? ua(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      ua(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = ji);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = wr(Sl.current)), wr(yn.current), Xl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[mn] = t),
            (l = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[mn] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (ye(Ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && St !== null && t.mode & 1 && !(t.flags & 128))
          Wm(), va(), (t.flags |= 98560), (l = !1);
        else if (((l = Xl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(R(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(R(317));
            l[mn] = t;
          } else
            va(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (l = !1);
        } else Xt !== null && (Bs(Xt), (Xt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ne.current & 1 ? Te === 0 && (Te = 3) : _u())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        ga(), ks(e, t), e === null && gl(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return vu(t.type._context), Ke(t), null;
    case 17:
      return ht(t.type) && Ii(), Ke(t), null;
    case 19:
      if ((ye(Ne), (l = t.memoizedState), l === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) Va(l, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = _i(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Va(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(Ne, (Ne.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            je() > Na &&
            ((t.flags |= 128), (r = !0), Va(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _i(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Va(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !ge)
            )
              return Ke(t), null;
          } else
            2 * je() - l.renderingStartTime > Na &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Va(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = je()),
          (t.sibling = null),
          (n = Ne.current),
          pe(Ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        ku(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Nt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function lv(e, t) {
  switch ((pu(t), t.tag)) {
    case 1:
      return (
        ht(t.type) && Ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ga(),
        ye(yt),
        ye(Ge),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if (
        (ye(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        va();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ye(Ne), null;
    case 4:
      return ga(), null;
    case 10:
      return vu(t.type._context), null;
    case 22:
    case 23:
      return ku(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  Ye = !1,
  iv = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function ia(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function _s(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var Qc = !1;
function ov(e, t) {
  if (((vs = Si), (e = km()), du(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            p = e,
            y = null;
          t: for (;;) {
            for (
              var N;
              p !== n || (a !== 0 && p.nodeType !== 3) || (s = o + a),
                p !== l || (r !== 0 && p.nodeType !== 3) || (u = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (N = p.firstChild) !== null;

            )
              (y = p), (p = N);
            for (;;) {
              if (p === e) break t;
              if (
                (y === n && ++c === a && (s = o),
                y === l && ++d === r && (u = o),
                (N = p.nextSibling) !== null)
              )
                break;
              (p = y), (y = p.parentNode);
            }
            p = N;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Es = { focusedElem: e, selectionRange: n }, Si = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var D = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (D !== null) {
                  var S = D.memoizedProps,
                    C = D.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Kt(t.type, S),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = "")
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (j) {
          Ce(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (D = Qc), (Qc = !1), D;
}
function sl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var l = a.destroy;
        (a.destroy = void 0), l !== void 0 && _s(t, n, l);
      }
      a = a.next;
    } while (a !== r);
  }
}
function ro(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ms(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mn], delete t[Nl], delete t[Ns], delete t[$h], delete t[Vh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Pp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Pp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ji));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
function bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), (e = e.sibling);
}
var Be = null,
  Yt = !1;
function An(e, t, n) {
  for (n = n.child; n !== null; ) Rp(e, t, n), (n = n.sibling);
}
function Rp(e, t, n) {
  if (fn && typeof fn.onCommitFiberUnmount == "function")
    try {
      fn.onCommitFiberUnmount(Yi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ye || ia(n, t);
    case 6:
      var r = Be,
        a = Yt;
      (Be = null),
        An(e, t, n),
        (Be = r),
        (Yt = a),
        Be !== null &&
          (Yt
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Be.removeChild(n.stateNode));
      break;
    case 18:
      Be !== null &&
        (Yt
          ? ((e = Be),
            (n = n.stateNode),
            e.nodeType === 8
              ? ko(e.parentNode, n)
              : e.nodeType === 1 && ko(e, n),
            hl(e))
          : ko(Be, n.stateNode));
      break;
    case 4:
      (r = Be),
        (a = Yt),
        (Be = n.stateNode.containerInfo),
        (Yt = !0),
        An(e, t, n),
        (Be = r),
        (Yt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next;
        do {
          var l = a,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && _s(n, t, o),
            (a = a.next);
        } while (a !== r);
      }
      An(e, t, n);
      break;
    case 1:
      if (
        !Ye &&
        (ia(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ce(n, t, s);
        }
      An(e, t, n);
      break;
    case 21:
      An(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ye = (r = Ye) || n.memoizedState !== null), An(e, t, n), (Ye = r))
        : An(e, t, n);
      break;
    default:
      An(e, t, n);
  }
}
function Yc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iv()),
      t.forEach(function (r) {
        var a = hv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
  }
}
function Qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var l = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Be = s.stateNode), (Yt = !1);
              break e;
            case 3:
              (Be = s.stateNode.containerInfo), (Yt = !0);
              break e;
            case 4:
              (Be = s.stateNode.containerInfo), (Yt = !0);
              break e;
          }
          s = s.return;
        }
        if (Be === null) throw Error(R(160));
        Rp(l, o, a), (Be = null), (Yt = !1);
        var u = a.alternate;
        u !== null && (u.return = null), (a.return = null);
      } catch (c) {
        Ce(a, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tp(t, e), (t = t.sibling);
}
function Tp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), cn(e), r & 4)) {
        try {
          sl(3, e, e.return), ro(3, e);
        } catch (S) {
          Ce(e, e.return, S);
        }
        try {
          sl(5, e, e.return);
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      break;
    case 1:
      Qt(t, e), cn(e), r & 512 && n !== null && ia(n, n.return);
      break;
    case 5:
      if (
        (Qt(t, e),
        cn(e),
        r & 512 && n !== null && ia(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          ml(a, "");
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && em(a, l),
              os(s, o);
            var c = os(s, l);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                p = u[o + 1];
              d === "style"
                ? lm(a, p)
                : d === "dangerouslySetInnerHTML"
                ? rm(a, p)
                : d === "children"
                ? ml(a, p)
                : Zs(a, d, p, c);
            }
            switch (s) {
              case "input":
                ns(a, l);
                break;
              case "textarea":
                tm(a, l);
                break;
              case "select":
                var y = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!l.multiple;
                var N = l.value;
                N != null
                  ? ua(a, !!l.multiple, N, !1)
                  : y !== !!l.multiple &&
                    (l.defaultValue != null
                      ? ua(a, !!l.multiple, l.defaultValue, !0)
                      : ua(a, !!l.multiple, l.multiple ? [] : "", !1));
            }
            a[Nl] = l;
          } catch (S) {
            Ce(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (a = e.stateNode), (l = e.memoizedProps);
        try {
          a.nodeValue = l;
        } catch (S) {
          Ce(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hl(t.containerInfo);
        } catch (S) {
          Ce(e, e.return, S);
        }
      break;
    case 4:
      Qt(t, e), cn(e);
      break;
    case 13:
      Qt(t, e),
        cn(e),
        (a = e.child),
        a.flags & 8192 &&
          ((l = a.memoizedState !== null),
          (a.stateNode.isHidden = l),
          !l ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (Ru = je())),
        r & 4 && Yc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ye = (c = Ye) || d), Qt(t, e), (Ye = c)) : Qt(t, e),
        cn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (B = e, d = e.child; d !== null; ) {
            for (p = B = d; B !== null; ) {
              switch (((y = B), (N = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sl(4, y, y.return);
                  break;
                case 1:
                  ia(y, y.return);
                  var D = y.stateNode;
                  if (typeof D.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (D.props = t.memoizedProps),
                        (D.state = t.memoizedState),
                        D.componentWillUnmount();
                    } catch (S) {
                      Ce(r, n, S);
                    }
                  }
                  break;
                case 5:
                  ia(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Xc(p);
                    continue;
                  }
              }
              N !== null ? ((N.return = y), (B = N)) : Xc(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (a = p.stateNode),
                  c
                    ? ((l = a.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = am("display", o)));
              } catch (S) {
                Ce(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                Ce(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Qt(t, e), cn(e), r & 4 && Yc(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), cn(e);
  }
}
function cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Pp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (ml(a, ""), (r.flags &= -33));
          var l = Kc(e);
          bs(e, l, a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = Kc(e);
          Os(e, s, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      Ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sv(e, t, n) {
  (B = e), kp(e);
}
function kp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var a = B,
      l = a.child;
    if (a.tag === 22 && r) {
      var o = a.memoizedState !== null || ei;
      if (!o) {
        var s = a.alternate,
          u = (s !== null && s.memoizedState !== null) || Ye;
        s = ei;
        var c = Ye;
        if (((ei = o), (Ye = u) && !c))
          for (B = a; B !== null; )
            (o = B),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Zc(a)
                : u !== null
                ? ((u.return = o), (B = u))
                : Zc(a);
        for (; l !== null; ) (B = l), kp(l), (l = l.sibling);
        (B = a), (ei = s), (Ye = c);
      }
      Gc(e);
    } else
      a.subtreeFlags & 8772 && l !== null ? ((l.return = a), (B = l)) : Gc(e);
  }
}
function Gc(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ye || ro(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ye)
                if (n === null) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && _c(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _c(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && hl(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ye || (t.flags & 512 && Ms(t));
      } catch (y) {
        Ce(t, t.return, y);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Xc(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Zc(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ro(4, t);
          } catch (u) {
            Ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ce(t, a, u);
            }
          }
          var l = t.return;
          try {
            Ms(t);
          } catch (u) {
            Ce(t, l, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ms(t);
          } catch (u) {
            Ce(t, o, u);
          }
      }
    } catch (u) {
      Ce(t, t.return, u);
    }
    if (t === e) {
      B = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (B = s);
      break;
    }
    B = t.return;
  }
}
var uv = Math.ceil,
  bi = Tn.ReactCurrentDispatcher,
  Fu = Tn.ReactCurrentOwner,
  zt = Tn.ReactCurrentBatchConfig,
  re = 0,
  Oe = null,
  Le = null,
  He = 0,
  Nt = 0,
  oa = or(0),
  Te = 0,
  Il = null,
  Or = 0,
  ao = 0,
  Pu = 0,
  ul = null,
  pt = null,
  Ru = 0,
  Na = 1 / 0,
  Nn = null,
  Ui = !1,
  Us = null,
  er = null,
  ti = !1,
  Kn = null,
  zi = 0,
  cl = 0,
  zs = null,
  fi = -1,
  yi = 0;
function tt() {
  return re & 6 ? je() : fi !== -1 ? fi : (fi = je());
}
function tr(e) {
  return e.mode & 1
    ? re & 2 && He !== 0
      ? He & -He
      : Wh.transition !== null
      ? (yi === 0 && (yi = vm()), yi)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cm(e.type))),
        e)
    : 1;
}
function Jt(e, t, n, r) {
  if (50 < cl) throw ((cl = 0), (zs = null), Error(R(185)));
  Tl(e, n, r),
    (!(re & 2) || e !== Oe) &&
      (e === Oe && (!(re & 2) && (ao |= n), Te === 4 && Wn(e, He)),
      vt(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((Na = je() + 500), eo && sr()));
}
function vt(e, t) {
  var n = e.callbackNode;
  Wy(e, t);
  var r = Di(e, e === Oe ? He : 0);
  if (r === 0)
    n !== null && oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && oc(n), t === 1))
      e.tag === 0 ? qh(Jc.bind(null, e)) : $m(Jc.bind(null, e)),
        Bh(function () {
          !(re & 6) && sr();
        }),
        (n = null);
    else {
      switch (Em(r)) {
        case 1:
          n = ru;
          break;
        case 4:
          n = ym;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = hm;
          break;
        default:
          n = Ni;
      }
      n = Bp(n, _p.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _p(e, t) {
  if (((fi = -1), (yi = 0), re & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (fa() && e.callbackNode !== n) return null;
  var r = Di(e, e === Oe ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ai(e, r);
  else {
    t = r;
    var a = re;
    re |= 2;
    var l = Op();
    (Oe !== e || He !== t) && ((Nn = null), (Na = je() + 500), Lr(e, t));
    do
      try {
        mv();
        break;
      } catch (s) {
        Mp(e, s);
      }
    while (1);
    hu(),
      (bi.current = l),
      (re = a),
      Le !== null ? (t = 0) : ((Oe = null), (He = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = ms(e)), a !== 0 && ((r = a), (t = As(e, a)))), t === 1)
    )
      throw ((n = Il), Lr(e, 0), Wn(e, r), vt(e, je()), n);
    if (t === 6) Wn(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !cv(a) &&
          ((t = Ai(e, r)),
          t === 2 && ((l = ms(e)), l !== 0 && ((r = l), (t = As(e, l)))),
          t === 1))
      )
        throw ((n = Il), Lr(e, 0), Wn(e, r), vt(e, je()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Nr(e, pt, Nn);
          break;
        case 3:
          if (
            (Wn(e, r), (r & 130023424) === r && ((t = Ru + 500 - je()), 10 < t))
          ) {
            if (Di(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = xs(Nr.bind(null, e, pt, Nn), t);
            break;
          }
          Nr(e, pt, Nn);
          break;
        case 4:
          if ((Wn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - Zt(r);
            (l = 1 << o), (o = t[o]), o > a && (a = o), (r &= ~l);
          }
          if (
            ((r = a),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * uv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xs(Nr.bind(null, e, pt, Nn), r);
            break;
          }
          Nr(e, pt, Nn);
          break;
        case 5:
          Nr(e, pt, Nn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return vt(e, je()), e.callbackNode === n ? _p.bind(null, e) : null;
}
function As(e, t) {
  var n = ul;
  return (
    e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256),
    (e = Ai(e, t)),
    e !== 2 && ((t = pt), (pt = n), t !== null && Bs(t)),
    e
  );
}
function Bs(e) {
  pt === null ? (pt = e) : pt.push.apply(pt, e);
}
function cv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            l = a.getSnapshot;
          a = a.value;
          try {
            if (!en(l(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wn(e, t) {
  for (
    t &= ~Pu,
      t &= ~ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Zt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Jc(e) {
  if (re & 6) throw Error(R(327));
  fa();
  var t = Di(e, 0);
  if (!(t & 1)) return vt(e, je()), null;
  var n = Ai(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ms(e);
    r !== 0 && ((t = r), (n = As(e, r)));
  }
  if (n === 1) throw ((n = Il), Lr(e, 0), Wn(e, t), vt(e, je()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nr(e, pt, Nn),
    vt(e, je()),
    null
  );
}
function Tu(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    (re = n), re === 0 && ((Na = je() + 500), eo && sr());
  }
}
function br(e) {
  Kn !== null && Kn.tag === 0 && !(re & 6) && fa();
  var t = re;
  re |= 1;
  var n = zt.transition,
    r = ie;
  try {
    if (((zt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (zt.transition = n), (re = t), !(re & 6) && sr();
  }
}
function ku() {
  (Nt = oa.current), ye(oa);
}
function Lr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ah(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ii();
          break;
        case 3:
          ga(), ye(yt), ye(Ge), Du();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          ga();
          break;
        case 13:
          ye(Ne);
          break;
        case 19:
          ye(Ne);
          break;
        case 10:
          vu(r.type._context);
          break;
        case 22:
        case 23:
          ku();
      }
      n = n.return;
    }
  if (
    ((Oe = e),
    (Le = e = nr(e.current, null)),
    (He = Nt = t),
    (Te = 0),
    (Il = null),
    (Pu = ao = Or = 0),
    (pt = ul = null),
    Cr !== null)
  ) {
    for (t = 0; t < Cr.length; t++)
      if (((n = Cr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var a = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = a), (r.next = o);
        }
        n.pending = r;
      }
    Cr = null;
  }
  return e;
}
function Mp(e, t) {
  do {
    var n = Le;
    try {
      if ((hu(), (di.current = Oi), Mi)) {
        for (var r = De.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        Mi = !1;
      }
      if (
        ((Mr = 0),
        (Me = Re = De = null),
        (ol = !1),
        (Cl = 0),
        (Fu.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (Il = t), (Le = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = He),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = s,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var y = d.alternate;
            y
              ? ((d.updateQueue = y.updateQueue),
                (d.memoizedState = y.memoizedState),
                (d.lanes = y.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var N = Ac(o);
          if (N !== null) {
            (N.flags &= -257),
              Bc(N, o, s, l, t),
              N.mode & 1 && zc(l, c, t),
              (t = N),
              (u = c);
            var D = t.updateQueue;
            if (D === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else D.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              zc(l, c, t), _u();
              break e;
            }
            u = Error(R(426));
          }
        } else if (ge && s.mode & 1) {
          var C = Ac(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Bc(C, o, s, l, t),
              fu(xa(u, s));
            break e;
          }
        }
        (l = u = xa(u, s)),
          Te !== 4 && (Te = 2),
          ul === null ? (ul = [l]) : ul.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = Ep(l, u, t);
              kc(l, h);
              break e;
            case 1:
              s = u;
              var m = l.type,
                E = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (E !== null &&
                    typeof E.componentDidCatch == "function" &&
                    (er === null || !er.has(E))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var j = gp(l, s, t);
                kc(l, j);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Up(n);
    } catch (T) {
      (t = T), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Op() {
  var e = bi.current;
  return (bi.current = Oi), e === null ? Oi : e;
}
function _u() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    Oe === null || (!(Or & 268435455) && !(ao & 268435455)) || Wn(Oe, He);
}
function Ai(e, t) {
  var n = re;
  re |= 2;
  var r = Op();
  (Oe !== e || He !== t) && ((Nn = null), Lr(e, t));
  do
    try {
      dv();
      break;
    } catch (a) {
      Mp(e, a);
    }
  while (1);
  if ((hu(), (re = n), (bi.current = r), Le !== null)) throw Error(R(261));
  return (Oe = null), (He = 0), Te;
}
function dv() {
  for (; Le !== null; ) bp(Le);
}
function mv() {
  for (; Le !== null && !by(); ) bp(Le);
}
function bp(e) {
  var t = Ap(e.alternate, e, Nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Up(e) : (Le = t),
    (Fu.current = null);
}
function Up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lv(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (Le = null);
        return;
      }
    } else if (((n = av(n, t, Nt)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function Nr(e, t, n) {
  var r = ie,
    a = zt.transition;
  try {
    (zt.transition = null), (ie = 1), pv(e, t, n, r);
  } finally {
    (zt.transition = a), (ie = r);
  }
  return null;
}
function pv(e, t, n, r) {
  do fa();
  while (Kn !== null);
  if (re & 6) throw Error(R(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Qy(e, l),
    e === Oe && ((Le = Oe = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      Bp(Ni, function () {
        return fa(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = zt.transition), (zt.transition = null);
    var o = ie;
    ie = 1;
    var s = re;
    (re |= 4),
      (Fu.current = null),
      ov(e, n),
      Tp(n, e),
      kh(Es),
      (Si = !!vs),
      (Es = vs = null),
      (e.current = n),
      sv(n),
      Uy(),
      (re = s),
      (ie = o),
      (zt.transition = l);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Kn = e), (zi = a)),
    (l = e.pendingLanes),
    l === 0 && (er = null),
    By(n.stateNode),
    vt(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ui) throw ((Ui = !1), (e = Us), (Us = null), e);
  return (
    zi & 1 && e.tag !== 0 && fa(),
    (l = e.pendingLanes),
    l & 1 ? (e === zs ? cl++ : ((cl = 0), (zs = e))) : (cl = 0),
    sr(),
    null
  );
}
function fa() {
  if (Kn !== null) {
    var e = Em(zi),
      t = zt.transition,
      n = ie;
    try {
      if (((zt.transition = null), (ie = 16 > e ? 16 : e), Kn === null))
        var r = !1;
      else {
        if (((e = Kn), (Kn = null), (zi = 0), re & 6)) throw Error(R(331));
        var a = re;
        for (re |= 4, B = e.current; B !== null; ) {
          var l = B,
            o = l.child;
          if (B.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (B = c; B !== null; ) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sl(8, d, l);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (B = p);
                  else
                    for (; B !== null; ) {
                      d = B;
                      var y = d.sibling,
                        N = d.return;
                      if ((Fp(d), d === c)) {
                        B = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = N), (B = y);
                        break;
                      }
                      B = N;
                    }
                }
              }
              var D = l.alternate;
              if (D !== null) {
                var S = D.child;
                if (S !== null) {
                  D.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              B = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (B = o);
          else
            e: for (; B !== null; ) {
              if (((l = B), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sl(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (B = h);
                break e;
              }
              B = l.return;
            }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          o = B;
          var E = o.child;
          if (o.subtreeFlags & 2064 && E !== null) (E.return = o), (B = E);
          else
            e: for (o = m; B !== null; ) {
              if (((s = B), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ro(9, s);
                  }
                } catch (T) {
                  Ce(s, s.return, T);
                }
              if (s === o) {
                B = null;
                break e;
              }
              var j = s.sibling;
              if (j !== null) {
                (j.return = s.return), (B = j);
                break e;
              }
              B = s.return;
            }
        }
        if (
          ((re = a), sr(), fn && typeof fn.onPostCommitFiberRoot == "function")
        )
          try {
            fn.onPostCommitFiberRoot(Yi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (zt.transition = t);
    }
  }
  return !1;
}
function ed(e, t, n) {
  (t = xa(n, t)),
    (t = Ep(e, t, 1)),
    (e = Jn(e, t, 1)),
    (t = tt()),
    e !== null && (Tl(e, 1, t), vt(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) ed(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (er === null || !er.has(r)))
        ) {
          (e = xa(n, e)),
            (e = gp(t, e, 1)),
            (t = Jn(t, e, 1)),
            (e = tt()),
            t !== null && (Tl(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Oe === e &&
      (He & n) === n &&
      (Te === 4 || (Te === 3 && (He & 130023424) === He && 500 > je() - Ru)
        ? Lr(e, 0)
        : (Pu |= n)),
    vt(e, t);
}
function zp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ql), (ql <<= 1), !(ql & 130023424) && (ql = 4194304))
      : (t = 1));
  var n = tt();
  (e = Fn(e, t)), e !== null && (Tl(e, t, n), vt(e, n));
}
function yv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zp(e, n);
}
function hv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), zp(e, n);
}
var Ap;
Ap = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current) ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ft = !1), rv(e, t, n);
      ft = !!(e.flags & 131072);
    }
  else (ft = !1), ge && t.flags & 1048576 && Vm(t, Pi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pi(e, t), (e = t.pendingProps);
      var a = ha(t, Ge.current);
      pa(t, n), (a = Cu(null, t, r, e, a, n));
      var l = wu();
      return (
        (t.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ht(r) ? ((l = !0), Li(t)) : (l = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            gu(t),
            (a.updater = no),
            (t.stateNode = a),
            (a._reactInternals = t),
            Is(t, r, e, n),
            (t = Ps(null, t, r, !0, l, n)))
          : ((t.tag = 0), ge && l && mu(t), et(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pi(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = Ev(r)),
          (e = Kt(r, e)),
          a)
        ) {
          case 0:
            t = Fs(null, t, r, e, n);
            break e;
          case 1:
            t = Vc(null, t, r, e, n);
            break e;
          case 11:
            t = Hc(null, t, r, e, n);
            break e;
          case 14:
            t = $c(null, t, r, Kt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Kt(r, a)),
        Fs(e, t, r, a, n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Kt(r, a)),
        Vc(e, t, r, a, n)
      );
    case 3:
      e: {
        if ((Sp(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (a = l.element),
          Gm(e, t),
          ki(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (a = xa(Error(R(423)), t)), (t = qc(e, t, r, n, a));
            break e;
          } else if (r !== a) {
            (a = xa(Error(R(424)), t)), (t = qc(e, t, r, n, a));
            break e;
          } else
            for (
              St = Zn(t.stateNode.containerInfo.firstChild),
                wt = t,
                ge = !0,
                Xt = null,
                n = Km(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((va(), r === a)) {
            t = Pn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xm(t),
        e === null && Cs(t),
        (r = t.type),
        (a = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = a.children),
        gs(r, a) ? (o = null) : l !== null && gs(r, l) && (t.flags |= 32),
        Dp(e, t),
        et(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Cs(t), null;
    case 13:
      return Cp(e, t, n);
    case 4:
      return (
        xu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ea(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Kt(r, a)),
        Hc(e, t, r, a, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (l = t.memoizedProps),
          (o = a.value),
          pe(Ri, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (en(l.value, o)) {
            if (l.children === a.children && !yt.current) {
              t = Pn(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                o = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = wn(-1, n & -n)), (u.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      ws(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(R(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  ws(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        et(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        pa(t, n),
        (a = At(a)),
        (r = r(a)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (a = Kt(r, t.pendingProps)),
        (a = Kt(r.type, a)),
        $c(e, t, r, a, n)
      );
    case 15:
      return xp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : Kt(r, a)),
        pi(e, t),
        (t.tag = 1),
        ht(r) ? ((e = !0), Li(t)) : (e = !1),
        pa(t, n),
        vp(t, r, a),
        Is(t, r, a, n),
        Ps(null, t, r, !0, e, n)
      );
    case 19:
      return wp(e, t, n);
    case 22:
      return Np(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Bp(e, t) {
  return fm(e, t);
}
function vv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ut(e, t, n, r) {
  return new vv(e, t, n, r);
}
function Mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ev(e) {
  if (typeof e == "function") return Mu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === eu)) return 11;
    if (e === tu) return 14;
  }
  return 2;
}
function nr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function hi(e, t, n, r, a, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) Mu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Xr:
        return Fr(n.children, a, l, t);
      case Js:
        (o = 8), (a |= 8);
        break;
      case Xo:
        return (
          (e = Ut(12, n, t, a | 2)), (e.elementType = Xo), (e.lanes = l), e
        );
      case Zo:
        return (e = Ut(13, n, t, a)), (e.elementType = Zo), (e.lanes = l), e;
      case Jo:
        return (e = Ut(19, n, t, a)), (e.elementType = Jo), (e.lanes = l), e;
      case Xd:
        return lo(n, a, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yd:
              o = 10;
              break e;
            case Gd:
              o = 9;
              break e;
            case eu:
              o = 11;
              break e;
            case tu:
              o = 14;
              break e;
            case $n:
              (o = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ut(o, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Fr(e, t, n, r) {
  return (e = Ut(7, e, r, t)), (e.lanes = n), e;
}
function lo(e, t, n, r) {
  return (
    (e = Ut(22, e, r, t)),
    (e.elementType = Xd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bo(e, t, n) {
  return (e = Ut(6, e, null, t)), (e.lanes = n), e;
}
function Ho(e, t, n) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gv(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Do(0)),
    (this.expirationTimes = Do(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Do(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Ou(e, t, n, r, a, l, o, s, u) {
  return (
    (e = new gv(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ut(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    gu(l),
    e
  );
}
function xv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hp(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if (Ar(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ht(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ht(n)) return Hm(e, n, t);
  }
  return t;
}
function $p(e, t, n, r, a, l, o, s, u) {
  return (
    (e = Ou(n, r, !0, e, a, l, o, s, u)),
    (e.context = Hp(null)),
    (n = e.current),
    (r = tt()),
    (a = tr(n)),
    (l = wn(r, a)),
    (l.callback = t ?? null),
    Jn(n, l, a),
    (e.current.lanes = a),
    Tl(e, a, r),
    vt(e, r),
    e
  );
}
function io(e, t, n, r) {
  var a = t.current,
    l = tt(),
    o = tr(a);
  return (
    (n = Hp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wn(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jn(a, t, o)),
    e !== null && (Jt(e, a, o, l), ci(e, a, o)),
    o
  );
}
function Bi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function td(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bu(e, t) {
  td(e, t), (e = e.alternate) && td(e, t);
}
function Nv() {
  return null;
}
var Vp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uu(e) {
  this._internalRoot = e;
}
oo.prototype.render = Uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  io(e, t, null, null);
};
oo.prototype.unmount = Uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    br(function () {
      io(null, e, null, null);
    }),
      (t[Ln] = null);
  }
};
function oo(e) {
  this._internalRoot = e;
}
oo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qn.length && t !== 0 && t < qn[n].priority; n++);
    qn.splice(n, 0, e), n === 0 && Sm(e);
  }
};
function zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function so(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function nd() {}
function Dv(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = Bi(o);
        l.call(c);
      };
    }
    var o = $p(t, r, e, 0, null, !1, !1, "", nd);
    return (
      (e._reactRootContainer = o),
      (e[Ln] = o.current),
      gl(e.nodeType === 8 ? e.parentNode : e),
      br(),
      o
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Bi(u);
      s.call(c);
    };
  }
  var u = Ou(e, 0, !1, null, null, !1, !1, "", nd);
  return (
    (e._reactRootContainer = u),
    (e[Ln] = u.current),
    gl(e.nodeType === 8 ? e.parentNode : e),
    br(function () {
      io(t, u, n, r);
    }),
    u
  );
}
function uo(e, t, n, r, a) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof a == "function") {
      var s = a;
      a = function () {
        var u = Bi(o);
        s.call(u);
      };
    }
    io(t, o, e, a);
  } else o = Dv(n, t, e, a, r);
  return Bi(o);
}
gm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ja(t.pendingLanes);
        n !== 0 &&
          (au(t, n | 1), vt(t, je()), !(re & 6) && ((Na = je() + 500), sr()));
      }
      break;
    case 13:
      br(function () {
        var r = Fn(e, 1);
        if (r !== null) {
          var a = tt();
          Jt(r, e, 1, a);
        }
      }),
        bu(e, 1);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = Fn(e, 134217728);
    if (t !== null) {
      var n = tt();
      Jt(t, e, 134217728, n);
    }
    bu(e, 134217728);
  }
};
xm = function (e) {
  if (e.tag === 13) {
    var t = tr(e),
      n = Fn(e, t);
    if (n !== null) {
      var r = tt();
      Jt(n, e, t, r);
    }
    bu(e, t);
  }
};
Nm = function () {
  return ie;
};
Dm = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
us = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ns(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Ji(r);
            if (!a) throw Error(R(90));
            Jd(r), ns(r, a);
          }
        }
      }
      break;
    case "textarea":
      tm(e, n);
      break;
    case "select":
      (t = n.value), t != null && ua(e, !!n.multiple, t, !1);
  }
};
sm = Tu;
um = br;
var Sv = { usingClientEntryPoint: !1, Events: [_l, ta, Ji, im, om, Tu] },
  qa = {
    findFiberByHostInstance: Sr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Cv = {
    bundleType: qa.bundleType,
    version: qa.version,
    rendererPackageName: qa.rendererPackageName,
    rendererConfig: qa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qa.findFiberByHostInstance || Nv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (Yi = ni.inject(Cv)), (fn = ni);
    } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
It.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zu(t)) throw Error(R(200));
  return xv(e, t, null, n);
};
It.createRoot = function (e, t) {
  if (!zu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    a = Vp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = Ou(e, 1, !1, null, null, n, !1, r, a)),
    (e[Ln] = t.current),
    gl(e.nodeType === 8 ? e.parentNode : e),
    new Uu(t)
  );
};
It.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = mm(t)), (e = e === null ? null : e.stateNode), e;
};
It.flushSync = function (e) {
  return br(e);
};
It.hydrate = function (e, t, n) {
  if (!so(t)) throw Error(R(200));
  return uo(null, e, t, !0, n);
};
It.hydrateRoot = function (e, t, n) {
  if (!zu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    l = "",
    o = Vp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = $p(t, null, e, 1, n ?? null, a, !1, l, o)),
    (e[Ln] = t.current),
    gl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a);
  return new oo(t);
};
It.render = function (e, t, n) {
  if (!so(t)) throw Error(R(200));
  return uo(null, e, t, !1, n);
};
It.unmountComponentAtNode = function (e) {
  if (!so(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (br(function () {
        uo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ln] = null);
        });
      }),
      !0)
    : !1;
};
It.unstable_batchedUpdates = Tu;
It.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!so(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return uo(e, t, n, !1, r);
};
It.version = "18.3.1-next-f1338f8080-20240426";
function qp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp);
    } catch (e) {
      console.error(e);
    }
}
qp(), (qd.exports = It);
var Au = qd.exports;
const Wp = kd(Au),
  wv = Td({ __proto__: null, default: Wp }, [Au]);
var rd = Au;
(Yo.createRoot = rd.createRoot), (Yo.hydrateRoot = rd.hydrateRoot);
var Qp = { exports: {} },
  Kp = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ol = f;
function jv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Iv = typeof Object.is == "function" ? Object.is : jv,
  Lv = Ol.useSyncExternalStore,
  Fv = Ol.useRef,
  Pv = Ol.useEffect,
  Rv = Ol.useMemo,
  Tv = Ol.useDebugValue;
Kp.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
  var l = Fv(null);
  if (l.current === null) {
    var o = { hasValue: !1, value: null };
    l.current = o;
  } else o = l.current;
  l = Rv(
    function () {
      function u(N) {
        if (!c) {
          if (((c = !0), (d = N), (N = r(N)), a !== void 0 && o.hasValue)) {
            var D = o.value;
            if (a(D, N)) return (p = D);
          }
          return (p = N);
        }
        if (((D = p), Iv(d, N))) return D;
        var S = r(N);
        return a !== void 0 && a(D, S) ? D : ((d = N), (p = S));
      }
      var c = !1,
        d,
        p,
        y = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        y === null
          ? void 0
          : function () {
              return u(y());
            },
      ];
    },
    [t, n, r, a]
  );
  var s = Lv(e, l[0], l[1]);
  return (
    Pv(
      function () {
        (o.hasValue = !0), (o.value = s);
      },
      [s]
    ),
    Tv(s),
    s
  );
};
Qp.exports = Kp;
var kv = Qp.exports,
  Ct = "default" in Ko ? pn : Ko,
  ad = Symbol.for("react-redux-context"),
  ld = typeof globalThis < "u" ? globalThis : {};
function _v() {
  if (!Ct.createContext) return {};
  const e = ld[ad] ?? (ld[ad] = new Map());
  let t = e.get(Ct.createContext);
  return t || ((t = Ct.createContext(null)), e.set(Ct.createContext, t)), t;
}
var lr = _v(),
  Mv = () => {
    throw new Error("uSES not initialized!");
  };
function Bu(e = lr) {
  return function () {
    return Ct.useContext(e);
  };
}
var Yp = Bu(),
  Gp = Mv,
  Ov = (e) => {
    Gp = e;
  },
  bv = (e, t) => e === t;
function Uv(e = lr) {
  const t = e === lr ? Yp : Bu(e),
    n = (r, a = {}) => {
      const { equalityFn: l = bv, devModeChecks: o = {} } =
          typeof a == "function" ? { equalityFn: a } : a,
        {
          store: s,
          subscription: u,
          getServerState: c,
          stabilityCheck: d,
          identityFunctionCheck: p,
        } = t();
      Ct.useRef(!0);
      const y = Ct.useCallback(
          {
            [r.name](D) {
              return r(D);
            },
          }[r.name],
          [r, d, o.stabilityCheck]
        ),
        N = Gp(u.addNestedSub, s.getState, c || s.getState, y, l);
      return Ct.useDebugValue(N), N;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var kn = Uv();
function zv(e) {
  e();
}
function Av() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      zv(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const a = (t = { callback: n, next: null, prev: t });
      return (
        a.prev ? (a.prev.next = a) : (e = a),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            a.next ? (a.next.prev = a.prev) : (t = a.prev),
            a.prev ? (a.prev.next = a.next) : (e = a.next));
        }
      );
    },
  };
}
var id = { notify() {}, get: () => [] };
function Bv(e, t) {
  let n,
    r = id,
    a = 0,
    l = !1;
  function o(S) {
    d();
    const C = r.subscribe(S);
    let h = !1;
    return () => {
      h || ((h = !0), C(), p());
    };
  }
  function s() {
    r.notify();
  }
  function u() {
    D.onStateChange && D.onStateChange();
  }
  function c() {
    return l;
  }
  function d() {
    a++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = Av()));
  }
  function p() {
    a--, n && a === 0 && (n(), (n = void 0), r.clear(), (r = id));
  }
  function y() {
    l || ((l = !0), d());
  }
  function N() {
    l && ((l = !1), p());
  }
  const D = {
    addNestedSub: o,
    notifyNestedSubs: s,
    handleChangeWrapper: u,
    isSubscribed: c,
    trySubscribe: y,
    tryUnsubscribe: N,
    getListeners: () => r,
  };
  return D;
}
var Hv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $v = typeof navigator < "u" && navigator.product === "ReactNative",
  Vv = Hv || $v ? Ct.useLayoutEffect : Ct.useEffect;
function qv({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: a = "once",
  identityFunctionCheck: l = "once",
}) {
  const o = Ct.useMemo(() => {
      const c = Bv(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: a,
        identityFunctionCheck: l,
      };
    }, [e, r, a, l]),
    s = Ct.useMemo(() => e.getState(), [e]);
  Vv(() => {
    const { subscription: c } = o;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      s !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [o, s]);
  const u = t || lr;
  return Ct.createElement(u.Provider, { value: o }, n);
}
var Wv = qv;
function Xp(e = lr) {
  const t = e === lr ? Yp : Bu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var Qv = Xp();
function Kv(e = lr) {
  const t = e === lr ? Qv : Xp(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var tn = Kv();
Ov(kv.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xe.apply(this, arguments)
  );
}
var we;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(we || (we = {}));
const od = "popstate";
function Yv(e) {
  e === void 0 && (e = {});
  function t(r, a) {
    let { pathname: l, search: o, hash: s } = r.location;
    return Ll(
      "",
      { pathname: l, search: o, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function n(r, a) {
    return typeof a == "string" ? a : Ur(a);
  }
  return Xv(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Da(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gv() {
  return Math.random().toString(36).substr(2, 8);
}
function sd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ll(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    xe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _n(t) : t,
      { state: n, key: (t && t.key) || r || Gv() }
    )
  );
}
function Ur(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Xv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: a = document.defaultView, v5Compat: l = !1 } = r,
    o = a.history,
    s = we.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), o.replaceState(xe({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    s = we.Pop;
    let C = d(),
      h = C == null ? null : C - c;
    (c = C), u && u({ action: s, location: S.location, delta: h });
  }
  function y(C, h) {
    s = we.Push;
    let m = Ll(S.location, C, h);
    n && n(m, C), (c = d() + 1);
    let E = sd(m, c),
      j = S.createHref(m);
    try {
      o.pushState(E, "", j);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      a.location.assign(j);
    }
    l && u && u({ action: s, location: S.location, delta: 1 });
  }
  function N(C, h) {
    s = we.Replace;
    let m = Ll(S.location, C, h);
    n && n(m, C), (c = d());
    let E = sd(m, c),
      j = S.createHref(m);
    o.replaceState(E, "", j),
      l && u && u({ action: s, location: S.location, delta: 0 });
  }
  function D(C) {
    let h = a.location.origin !== "null" ? a.location.origin : a.location.href,
      m = typeof C == "string" ? C : Ur(C);
    return (
      (m = m.replace(/ $/, "%20")),
      G(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, h)
    );
  }
  let S = {
    get action() {
      return s;
    },
    get location() {
      return e(a, o);
    },
    listen(C) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(od, p),
        (u = C),
        () => {
          a.removeEventListener(od, p), (u = null);
        }
      );
    },
    createHref(C) {
      return t(a, C);
    },
    createURL: D,
    encodeLocation(C) {
      let h = D(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: y,
    replace: N,
    go(C) {
      return o.go(C);
    },
  };
  return S;
}
var ce;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ce || (ce = {}));
const Zv = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Jv(e) {
  return e.index === !0;
}
function Fl(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((a, l) => {
      let o = [...n, String(l)],
        s = typeof a.id == "string" ? a.id : o.join("-");
      if (
        (G(
          a.index !== !0 || !a.children,
          "Cannot specify children on an index route"
        ),
        G(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Jv(a))
      ) {
        let u = xe({}, a, t(a), { id: s });
        return (r[s] = u), u;
      } else {
        let u = xe({}, a, t(a), { id: s, children: void 0 });
        return (
          (r[s] = u), a.children && (u.children = Fl(a.children, t, o, r)), u
        );
      }
    })
  );
}
function Dr(e, t, n) {
  return n === void 0 && (n = "/"), vi(e, t, n, !1);
}
function vi(e, t, n, r) {
  let a = typeof t == "string" ? _n(t) : t,
    l = Rn(a.pathname || "/", n);
  if (l == null) return null;
  let o = Zp(e);
  tE(o);
  let s = null;
  for (let u = 0; s == null && u < o.length; ++u) {
    let c = mE(l);
    s = cE(o[u], c, r);
  }
  return s;
}
function eE(e, t) {
  let { route: n, pathname: r, params: a } = e;
  return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle };
}
function Zp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let a = (l, o, s) => {
    let u = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (G(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = jn([r, u.relativePath]),
      d = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (G(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Zp(l.children, t, d, c)),
      !(l.path == null && !l.index) &&
        t.push({ path: c, score: sE(c, l.index), routesMeta: d });
  };
  return (
    e.forEach((l, o) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) a(l, o);
      else for (let u of Jp(l.path)) a(l, o, u);
    }),
    t
  );
}
function Jp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    a = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return a ? [l, ""] : [l];
  let o = Jp(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? l : [l, u].join("/")))),
    a && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function tE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : uE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const nE = /^:[\w-]+$/,
  rE = 3,
  aE = 2,
  lE = 1,
  iE = 10,
  oE = -2,
  ud = (e) => e === "*";
function sE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ud) && (r += oE),
    t && (r += aE),
    n
      .filter((a) => !ud(a))
      .reduce((a, l) => a + (nE.test(l) ? rE : l === "" ? lE : iE), r)
  );
}
function uE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function cE(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    a = {},
    l = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      c = s === r.length - 1,
      d = l === "/" ? t : t.slice(l.length) || "/",
      p = Hi(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      y = u.route;
    if (
      (!p &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Hi(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !p)
    )
      return null;
    Object.assign(a, p.params),
      o.push({
        params: a,
        pathname: jn([l, p.pathname]),
        pathnameBase: yE(jn([l, p.pathnameBase])),
        route: y,
      }),
      p.pathnameBase !== "/" && (l = jn([l, p.pathnameBase]));
  }
  return o;
}
function Hi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = dE(e.path, e.caseSensitive, e.end),
    a = t.match(n);
  if (!a) return null;
  let l = a[0],
    o = l.replace(/(.)\/+$/, "$1"),
    s = a.slice(1);
  return {
    params: r.reduce((c, d, p) => {
      let { paramName: y, isOptional: N } = d;
      if (y === "*") {
        let S = s[p] || "";
        o = l.slice(0, l.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const D = s[p];
      return (
        N && !D ? (c[y] = void 0) : (c[y] = (D || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function dE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Da(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (a += "\\/*$")
      : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), r]
  );
}
function mE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Da(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Rn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function pE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: a = "",
  } = typeof e == "string" ? _n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fE(n, t)) : t,
    search: hE(r),
    hash: vE(a),
  };
}
function fE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? n.length > 1 && n.pop() : a !== "." && n.push(a);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function $o(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ef(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hu(e, t) {
  let n = ef(e);
  return t
    ? n.map((r, a) => (a === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function $u(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == "string"
    ? (a = _n(e))
    : ((a = xe({}, e)),
      G(
        !a.pathname || !a.pathname.includes("?"),
        $o("?", "pathname", "search", a)
      ),
      G(
        !a.pathname || !a.pathname.includes("#"),
        $o("#", "pathname", "hash", a)
      ),
      G(!a.search || !a.search.includes("#"), $o("#", "search", "hash", a)));
  let l = e === "" || a.pathname === "",
    o = l ? "/" : a.pathname,
    s;
  if (o == null) s = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let y = o.split("/");
      for (; y[0] === ".."; ) y.shift(), (p -= 1);
      a.pathname = y.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let u = pE(a, s),
    c = o && o !== "/" && o.endsWith("/"),
    d = (l || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const jn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  yE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  vE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class $i {
  constructor(t, n, r, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = a),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function co(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const tf = ["post", "put", "patch", "delete"],
  EE = new Set(tf),
  gE = ["get", ...tf],
  xE = new Set(gE),
  NE = new Set([301, 302, 303, 307, 308]),
  DE = new Set([307, 308]),
  Vo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  SE = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Wa = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Vu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  CE = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  nf = "remix-router-transitions";
function wE(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let v = e.detectErrorBoundary;
    a = (x) => ({ hasErrorBoundary: v(x) });
  } else a = CE;
  let l = {},
    o = Fl(e.routes, a, void 0, l),
    s,
    u = e.basename || "/",
    c = e.unstable_dataStrategy || PE,
    d = e.unstable_patchRoutesOnNavigation,
    p = xe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    y = null,
    N = new Set(),
    D = 1e3,
    S = new Set(),
    C = null,
    h = null,
    m = null,
    E = e.hydrationData != null,
    j = Dr(o, e.history.location, u),
    T = null;
  if (j == null && !d) {
    let v = Je(404, { pathname: e.history.location.pathname }),
      { matches: x, route: w } = gd(o);
    (j = x), (T = { [w.id]: v });
  }
  j &&
    !e.hydrationData &&
    kt(j, o, e.history.location.pathname).active &&
    (j = null);
  let _;
  if (j)
    if (j.some((v) => v.route.lazy)) _ = !1;
    else if (!j.some((v) => v.route.loader)) _ = !0;
    else if (p.v7_partialHydration) {
      let v = e.hydrationData ? e.hydrationData.loaderData : null,
        x = e.hydrationData ? e.hydrationData.errors : null,
        w = (I) =>
          I.route.loader
            ? typeof I.route.loader == "function" &&
              I.route.loader.hydrate === !0
              ? !1
              : (v && v[I.route.id] !== void 0) ||
                (x && x[I.route.id] !== void 0)
            : !0;
      if (x) {
        let I = j.findIndex((z) => x[z.route.id] !== void 0);
        _ = j.slice(0, I + 1).every(w);
      } else _ = j.every(w);
    } else _ = e.hydrationData != null;
  else if (((_ = !1), (j = []), p.v7_partialHydration)) {
    let v = kt(null, o, e.history.location.pathname);
    v.active && v.matches && (j = v.matches);
  }
  let O,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: j,
      initialized: _,
      navigation: Vo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || T,
      fetchers: new Map(),
      blockers: new Map(),
    },
    H = we.Pop,
    b = !1,
    W,
    ae = !1,
    me = new Map(),
    oe = null,
    Ve = !1,
    be = !1,
    at = [],
    M = new Set(),
    F = new Map(),
    V = 0,
    U = -1,
    J = new Map(),
    ke = new Set(),
    he = new Map(),
    gt = new Map(),
    se = new Set(),
    qe = new Map(),
    We = new Map(),
    Ia = new Map(),
    Ht = !1;
  function La() {
    if (
      ((y = e.history.listen((v) => {
        let { action: x, location: w, delta: I } = v;
        if (Ht) {
          Ht = !1;
          return;
        }
        Da(
          We.size === 0 || I != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let z = qt({
          currentLocation: g.location,
          nextLocation: w,
          historyAction: x,
        });
        if (z && I != null) {
          (Ht = !0),
            e.history.go(I * -1),
            bn(z, {
              state: "blocked",
              location: w,
              proceed() {
                bn(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: w,
                }),
                  e.history.go(I);
              },
              reset() {
                let A = new Map(g.blockers);
                A.set(z, Wa), ve({ blockers: A });
              },
            });
          return;
        }
        return Xe(x, w);
      })),
      n)
    ) {
      $E(t, me);
      let v = () => VE(t, me);
      t.addEventListener("pagehide", v),
        (oe = () => t.removeEventListener("pagehide", v));
    }
    return g.initialized || Xe(we.Pop, g.location, { initialHydration: !0 }), O;
  }
  function nn() {
    y && y(),
      oe && oe(),
      N.clear(),
      W && W.abort(),
      g.fetchers.forEach((v, x) => On(x)),
      g.blockers.forEach((v, x) => Rt(x));
  }
  function Fa(v) {
    return N.add(v), () => N.delete(v);
  }
  function ve(v, x) {
    x === void 0 && (x = {}), (g = xe({}, g, v));
    let w = [],
      I = [];
    p.v7_fetcherPersist &&
      g.fetchers.forEach((z, A) => {
        z.state === "idle" && (se.has(A) ? I.push(A) : w.push(A));
      }),
      [...N].forEach((z) =>
        z(g, {
          deletedFetchers: I,
          unstable_viewTransitionOpts: x.viewTransitionOpts,
          unstable_flushSync: x.flushSync === !0,
        })
      ),
      p.v7_fetcherPersist &&
        (w.forEach((z) => g.fetchers.delete(z)), I.forEach((z) => On(z)));
  }
  function rn(v, x, w) {
    var I, z;
    let { flushSync: A } = w === void 0 ? {} : w,
      q =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        Gt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((I = v.state) == null ? void 0 : I._isRedirect) !== !0,
      k;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (k = x.actionData)
        : (k = null)
      : q
      ? (k = g.actionData)
      : (k = null);
    let Q = x.loaderData
        ? vd(g.loaderData, x.loaderData, x.matches || [], x.errors)
        : g.loaderData,
      $ = g.blockers;
    $.size > 0 && (($ = new Map($)), $.forEach((ne, ee) => $.set(ee, Wa)));
    let K =
      b === !0 ||
      (g.navigation.formMethod != null &&
        Gt(g.navigation.formMethod) &&
        ((z = v.state) == null ? void 0 : z._isRedirect) !== !0);
    s && ((o = s), (s = void 0)),
      Ve ||
        H === we.Pop ||
        (H === we.Push
          ? e.history.push(v, v.state)
          : H === we.Replace && e.history.replace(v, v.state));
    let Z;
    if (H === we.Pop) {
      let ne = me.get(g.location.pathname);
      ne && ne.has(v.pathname)
        ? (Z = { currentLocation: g.location, nextLocation: v })
        : me.has(v.pathname) &&
          (Z = { currentLocation: v, nextLocation: g.location });
    } else if (ae) {
      let ne = me.get(g.location.pathname);
      ne
        ? ne.add(v.pathname)
        : ((ne = new Set([v.pathname])), me.set(g.location.pathname, ne)),
        (Z = { currentLocation: g.location, nextLocation: v });
    }
    ve(
      xe({}, x, {
        actionData: k,
        loaderData: Q,
        historyAction: H,
        location: v,
        initialized: !0,
        navigation: Vo,
        revalidation: "idle",
        restoreScrollPosition: qr(v, x.matches || g.matches),
        preventScrollReset: K,
        blockers: $,
      }),
      { viewTransitionOpts: Z, flushSync: A === !0 }
    ),
      (H = we.Pop),
      (b = !1),
      (ae = !1),
      (Ve = !1),
      (be = !1),
      (at = []);
  }
  async function an(v, x) {
    if (typeof v == "number") {
      e.history.go(v);
      return;
    }
    let w = Hs(
        g.location,
        g.matches,
        u,
        p.v7_prependBasename,
        v,
        p.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: I,
        submission: z,
        error: A,
      } = cd(p.v7_normalizeFormMethod, !1, w, x),
      q = g.location,
      k = Ll(g.location, I, x && x.state);
    k = xe({}, k, e.history.encodeLocation(k));
    let Q = x && x.replace != null ? x.replace : void 0,
      $ = we.Push;
    Q === !0
      ? ($ = we.Replace)
      : Q === !1 ||
        (z != null &&
          Gt(z.formMethod) &&
          z.formAction === g.location.pathname + g.location.search &&
          ($ = we.Replace));
    let K =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      Z = (x && x.unstable_flushSync) === !0,
      ne = qt({ currentLocation: q, nextLocation: k, historyAction: $ });
    if (ne) {
      bn(ne, {
        state: "blocked",
        location: k,
        proceed() {
          bn(ne, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: k,
          }),
            an(v, x);
        },
        reset() {
          let ee = new Map(g.blockers);
          ee.set(ne, Wa), ve({ blockers: ee });
        },
      });
      return;
    }
    return await Xe($, k, {
      submission: z,
      pendingError: A,
      preventScrollReset: K,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
      flushSync: Z,
    });
  }
  function Pa() {
    if (
      (cr(),
      ve({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        Xe(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Xe(H || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function Xe(v, x, w) {
    W && W.abort(),
      (W = null),
      (H = v),
      (Ve = (w && w.startUninterruptedRevalidation) === !0),
      gn(g.location, g.matches),
      (b = (w && w.preventScrollReset) === !0),
      (ae = (w && w.enableViewTransition) === !0);
    let I = s || o,
      z = w && w.overrideNavigation,
      A = Dr(I, x, u),
      q = (w && w.flushSync) === !0,
      k = kt(A, I, x.pathname);
    if ((k.active && k.matches && (A = k.matches), !A)) {
      let { error: te, notFoundMatches: de, route: Ee } = dr(x.pathname);
      rn(
        x,
        { matches: de, loaderData: {}, errors: { [Ee.id]: te } },
        { flushSync: q }
      );
      return;
    }
    if (
      g.initialized &&
      !be &&
      OE(g.location, x) &&
      !(w && w.submission && Gt(w.submission.formMethod))
    ) {
      rn(x, { matches: A }, { flushSync: q });
      return;
    }
    W = new AbortController();
    let Q = Yr(e.history, x, W.signal, w && w.submission),
      $;
    if (w && w.pendingError)
      $ = [sa(A).route.id, { type: ce.error, error: w.pendingError }];
    else if (w && w.submission && Gt(w.submission.formMethod)) {
      let te = await Ra(Q, x, w.submission, A, k.active, {
        replace: w.replace,
        flushSync: q,
      });
      if (te.shortCircuited) return;
      if (te.pendingActionResult) {
        let [de, Ee] = te.pendingActionResult;
        if (Dt(Ee) && co(Ee.error) && Ee.error.status === 404) {
          (W = null),
            rn(x, {
              matches: te.matches,
              loaderData: {},
              errors: { [de]: Ee.error },
            });
          return;
        }
      }
      (A = te.matches || A),
        ($ = te.pendingActionResult),
        (z = qo(x, w.submission)),
        (q = !1),
        (k.active = !1),
        (Q = Yr(e.history, Q.url, Q.signal));
    }
    let {
      shortCircuited: K,
      matches: Z,
      loaderData: ne,
      errors: ee,
    } = await Ft(
      Q,
      x,
      A,
      k.active,
      z,
      w && w.submission,
      w && w.fetcherSubmission,
      w && w.replace,
      w && w.initialHydration === !0,
      q,
      $
    );
    K ||
      ((W = null),
      rn(x, xe({ matches: Z || A }, Ed($), { loaderData: ne, errors: ee })));
  }
  async function Ra(v, x, w, I, z, A) {
    A === void 0 && (A = {}), cr();
    let q = BE(x, w);
    if ((ve({ navigation: q }, { flushSync: A.flushSync === !0 }), z)) {
      let $ = await Un(I, x.pathname, v.signal);
      if ($.type === "aborted") return { shortCircuited: !0 };
      if ($.type === "error") {
        let { boundaryId: K, error: Z } = Tt(x.pathname, $);
        return {
          matches: $.partialMatches,
          pendingActionResult: [K, { type: ce.error, error: Z }],
        };
      } else if ($.matches) I = $.matches;
      else {
        let { notFoundMatches: K, error: Z, route: ne } = dr(x.pathname);
        return {
          matches: K,
          pendingActionResult: [ne.id, { type: ce.error, error: Z }],
        };
      }
    }
    let k,
      Q = tl(I, x);
    if (!Q.route.action && !Q.route.lazy)
      k = {
        type: ce.error,
        error: Je(405, {
          method: v.method,
          pathname: x.pathname,
          routeId: Q.route.id,
        }),
      };
    else if (((k = (await vn("action", v, [Q], I))[0]), v.signal.aborted))
      return { shortCircuited: !0 };
    if (Ir(k)) {
      let $;
      return (
        A && A.replace != null
          ? ($ = A.replace)
          : ($ =
              fd(k.response.headers.get("Location"), new URL(v.url), u) ===
              g.location.pathname + g.location.search),
        await lt(v, k, { submission: w, replace: $ }),
        { shortCircuited: !0 }
      );
    }
    if (jr(k)) throw Je(400, { type: "defer-action" });
    if (Dt(k)) {
      let $ = sa(I, Q.route.id);
      return (
        (A && A.replace) !== !0 && (H = we.Push),
        { matches: I, pendingActionResult: [$.route.id, k] }
      );
    }
    return { matches: I, pendingActionResult: [Q.route.id, k] };
  }
  async function Ft(v, x, w, I, z, A, q, k, Q, $, K) {
    let Z = z || qo(x, A),
      ne = A || q || Sd(Z),
      ee = !Ve && (!p.v7_partialHydration || !Q);
    if (I) {
      if (ee) {
        let ue = Hr(K);
        ve(xe({ navigation: Z }, ue !== void 0 ? { actionData: ue } : {}), {
          flushSync: $,
        });
      }
      let Y = await Un(w, x.pathname, v.signal);
      if (Y.type === "aborted") return { shortCircuited: !0 };
      if (Y.type === "error") {
        let { boundaryId: ue, error: Ue } = Tt(x.pathname, Y);
        return {
          matches: Y.partialMatches,
          loaderData: {},
          errors: { [ue]: Ue },
        };
      } else if (Y.matches) w = Y.matches;
      else {
        let { error: ue, notFoundMatches: Ue, route: le } = dr(x.pathname);
        return { matches: Ue, loaderData: {}, errors: { [le.id]: ue } };
      }
    }
    let te = s || o,
      [de, Ee] = dd(
        e.history,
        g,
        w,
        ne,
        x,
        p.v7_partialHydration && Q === !0,
        p.v7_skipActionErrorRevalidation,
        be,
        at,
        M,
        se,
        he,
        ke,
        te,
        u,
        K
      );
    if (
      (mr(
        (Y) =>
          !(w && w.some((ue) => ue.route.id === Y)) ||
          (de && de.some((ue) => ue.route.id === Y))
      ),
      (U = ++V),
      de.length === 0 && Ee.length === 0)
    ) {
      let Y = $r();
      return (
        rn(
          x,
          xe(
            {
              matches: w,
              loaderData: {},
              errors: K && Dt(K[1]) ? { [K[0]]: K[1].error } : null,
            },
            Ed(K),
            Y ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ee) {
      let Y = {};
      if (!I) {
        Y.navigation = Z;
        let ue = Hr(K);
        ue !== void 0 && (Y.actionData = ue);
      }
      Ee.length > 0 && (Y.fetchers = hn(Ee)), ve(Y, { flushSync: $ });
    }
    Ee.forEach((Y) => {
      F.has(Y.key) && Pt(Y.key), Y.controller && F.set(Y.key, Y.controller);
    });
    let Ze = () => Ee.forEach((Y) => Pt(Y.key));
    W && W.signal.addEventListener("abort", Ze);
    let { loaderResults: _t, fetcherResults: st } = await it(
      g.matches,
      w,
      de,
      Ee,
      v
    );
    if (v.signal.aborted) return { shortCircuited: !0 };
    W && W.signal.removeEventListener("abort", Ze),
      Ee.forEach((Y) => F.delete(Y.key));
    let un = xd([..._t, ...st]);
    if (un) {
      if (un.idx >= de.length) {
        let Y = Ee[un.idx - de.length].key;
        ke.add(Y);
      }
      return await lt(v, un.result, { replace: k }), { shortCircuited: !0 };
    }
    let { loaderData: ut, errors: ct } = hd(g, w, de, _t, K, Ee, st, qe);
    qe.forEach((Y, ue) => {
      Y.subscribe((Ue) => {
        (Ue || Y.done) && qe.delete(ue);
      });
    }),
      p.v7_partialHydration &&
        Q &&
        g.errors &&
        Object.entries(g.errors)
          .filter((Y) => {
            let [ue] = Y;
            return !de.some((Ue) => Ue.route.id === ue);
          })
          .forEach((Y) => {
            let [ue, Ue] = Y;
            ct = Object.assign(ct || {}, { [ue]: Ue });
          });
    let dt = $r(),
      zn = on(U),
      mt = dt || zn || Ee.length > 0;
    return xe(
      { matches: w, loaderData: ut, errors: ct },
      mt ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function Hr(v) {
    if (v && !Dt(v[1])) return { [v[0]]: v[1].data };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function hn(v) {
    return (
      v.forEach((x) => {
        let w = g.fetchers.get(x.key),
          I = Qa(void 0, w ? w.data : void 0);
        g.fetchers.set(x.key, I);
      }),
      new Map(g.fetchers)
    );
  }
  function Ta(v, x, w, I) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    F.has(v) && Pt(v);
    let z = (I && I.unstable_flushSync) === !0,
      A = s || o,
      q = Hs(
        g.location,
        g.matches,
        u,
        p.v7_prependBasename,
        w,
        p.v7_relativeSplatPath,
        x,
        I == null ? void 0 : I.relative
      ),
      k = Dr(A, q, u),
      Q = kt(k, A, q);
    if ((Q.active && Q.matches && (k = Q.matches), !k)) {
      xt(v, x, Je(404, { pathname: q }), { flushSync: z });
      return;
    }
    let {
      path: $,
      submission: K,
      error: Z,
    } = cd(p.v7_normalizeFormMethod, !0, q, I);
    if (Z) {
      xt(v, x, Z, { flushSync: z });
      return;
    }
    let ne = tl(k, $);
    if (((b = (I && I.preventScrollReset) === !0), K && Gt(K.formMethod))) {
      $t(v, x, $, ne, k, Q.active, z, K);
      return;
    }
    he.set(v, { routeId: x, path: $ }), ka(v, x, $, ne, k, Q.active, z, K);
  }
  async function $t(v, x, w, I, z, A, q, k) {
    cr(), he.delete(v);
    function Q(le) {
      if (!le.route.action && !le.route.lazy) {
        let P = Je(405, { method: k.formMethod, pathname: w, routeId: x });
        return xt(v, x, P, { flushSync: q }), !0;
      }
      return !1;
    }
    if (!A && Q(I)) return;
    let $ = g.fetchers.get(v);
    _e(v, HE(k, $), { flushSync: q });
    let K = new AbortController(),
      Z = Yr(e.history, w, K.signal, k);
    if (A) {
      let le = await Un(z, w, Z.signal);
      if (le.type === "aborted") return;
      if (le.type === "error") {
        let { error: P } = Tt(w, le);
        xt(v, x, P, { flushSync: q });
        return;
      } else if (le.matches) {
        if (((z = le.matches), (I = tl(z, w)), Q(I))) return;
      } else {
        xt(v, x, Je(404, { pathname: w }), { flushSync: q });
        return;
      }
    }
    F.set(v, K);
    let ne = V,
      te = (await vn("action", Z, [I], z))[0];
    if (Z.signal.aborted) {
      F.get(v) === K && F.delete(v);
      return;
    }
    if (p.v7_fetcherPersist && se.has(v)) {
      if (Ir(te) || Dt(te)) {
        _e(v, Hn(void 0));
        return;
      }
    } else {
      if (Ir(te))
        if ((F.delete(v), U > ne)) {
          _e(v, Hn(void 0));
          return;
        } else
          return ke.add(v), _e(v, Qa(k)), lt(Z, te, { fetcherSubmission: k });
      if (Dt(te)) {
        xt(v, x, te.error);
        return;
      }
    }
    if (jr(te)) throw Je(400, { type: "defer-action" });
    let de = g.navigation.location || g.location,
      Ee = Yr(e.history, de, K.signal),
      Ze = s || o,
      _t =
        g.navigation.state !== "idle"
          ? Dr(Ze, g.navigation.location, u)
          : g.matches;
    G(_t, "Didn't find any matches after fetcher action");
    let st = ++V;
    J.set(v, st);
    let un = Qa(k, te.data);
    g.fetchers.set(v, un);
    let [ut, ct] = dd(
      e.history,
      g,
      _t,
      k,
      de,
      !1,
      p.v7_skipActionErrorRevalidation,
      be,
      at,
      M,
      se,
      he,
      ke,
      Ze,
      u,
      [I.route.id, te]
    );
    ct
      .filter((le) => le.key !== v)
      .forEach((le) => {
        let P = le.key,
          ze = g.fetchers.get(P),
          L = Qa(void 0, ze ? ze.data : void 0);
        g.fetchers.set(P, L),
          F.has(P) && Pt(P),
          le.controller && F.set(P, le.controller);
      }),
      ve({ fetchers: new Map(g.fetchers) });
    let dt = () => ct.forEach((le) => Pt(le.key));
    K.signal.addEventListener("abort", dt);
    let { loaderResults: zn, fetcherResults: mt } = await it(
      g.matches,
      _t,
      ut,
      ct,
      Ee
    );
    if (K.signal.aborted) return;
    K.signal.removeEventListener("abort", dt),
      J.delete(v),
      F.delete(v),
      ct.forEach((le) => F.delete(le.key));
    let Y = xd([...zn, ...mt]);
    if (Y) {
      if (Y.idx >= ut.length) {
        let le = ct[Y.idx - ut.length].key;
        ke.add(le);
      }
      return lt(Ee, Y.result);
    }
    let { loaderData: ue, errors: Ue } = hd(
      g,
      g.matches,
      ut,
      zn,
      void 0,
      ct,
      mt,
      qe
    );
    if (g.fetchers.has(v)) {
      let le = Hn(te.data);
      g.fetchers.set(v, le);
    }
    on(st),
      g.navigation.state === "loading" && st > U
        ? (G(H, "Expected pending action"),
          W && W.abort(),
          rn(g.navigation.location, {
            matches: _t,
            loaderData: ue,
            errors: Ue,
            fetchers: new Map(g.fetchers),
          }))
        : (ve({
            errors: Ue,
            loaderData: vd(g.loaderData, ue, _t, Ue),
            fetchers: new Map(g.fetchers),
          }),
          (be = !1));
  }
  async function ka(v, x, w, I, z, A, q, k) {
    let Q = g.fetchers.get(v);
    _e(v, Qa(k, Q ? Q.data : void 0), { flushSync: q });
    let $ = new AbortController(),
      K = Yr(e.history, w, $.signal);
    if (A) {
      let te = await Un(z, w, K.signal);
      if (te.type === "aborted") return;
      if (te.type === "error") {
        let { error: de } = Tt(w, te);
        xt(v, x, de, { flushSync: q });
        return;
      } else if (te.matches) (z = te.matches), (I = tl(z, w));
      else {
        xt(v, x, Je(404, { pathname: w }), { flushSync: q });
        return;
      }
    }
    F.set(v, $);
    let Z = V,
      ee = (await vn("loader", K, [I], z))[0];
    if (
      (jr(ee) && (ee = (await sf(ee, K.signal, !0)) || ee),
      F.get(v) === $ && F.delete(v),
      !K.signal.aborted)
    ) {
      if (se.has(v)) {
        _e(v, Hn(void 0));
        return;
      }
      if (Ir(ee))
        if (U > Z) {
          _e(v, Hn(void 0));
          return;
        } else {
          ke.add(v), await lt(K, ee);
          return;
        }
      if (Dt(ee)) {
        xt(v, x, ee.error);
        return;
      }
      G(!jr(ee), "Unhandled fetcher deferred data"), _e(v, Hn(ee.data));
    }
  }
  async function lt(v, x, w) {
    let {
      submission: I,
      fetcherSubmission: z,
      replace: A,
    } = w === void 0 ? {} : w;
    x.response.headers.has("X-Remix-Revalidate") && (be = !0);
    let q = x.response.headers.get("Location");
    G(q, "Expected a Location header on the redirect Response"),
      (q = fd(q, new URL(v.url), u));
    let k = Ll(g.location, q, { _isRedirect: !0 });
    if (n) {
      let ee = !1;
      if (x.response.headers.has("X-Remix-Reload-Document")) ee = !0;
      else if (Vu.test(q)) {
        const te = e.history.createURL(q);
        ee = te.origin !== t.location.origin || Rn(te.pathname, u) == null;
      }
      if (ee) {
        A ? t.location.replace(q) : t.location.assign(q);
        return;
      }
    }
    W = null;
    let Q =
        A === !0 || x.response.headers.has("X-Remix-Replace")
          ? we.Replace
          : we.Push,
      { formMethod: $, formAction: K, formEncType: Z } = g.navigation;
    !I && !z && $ && K && Z && (I = Sd(g.navigation));
    let ne = I || z;
    if (DE.has(x.response.status) && ne && Gt(ne.formMethod))
      await Xe(Q, k, {
        submission: xe({}, ne, { formAction: q }),
        preventScrollReset: b,
      });
    else {
      let ee = qo(k, I);
      await Xe(Q, k, {
        overrideNavigation: ee,
        fetcherSubmission: z,
        preventScrollReset: b,
      });
    }
  }
  async function vn(v, x, w, I) {
    try {
      let z = await RE(c, v, x, w, I, l, a);
      return await Promise.all(
        z.map((A, q) => {
          if (UE(A)) {
            let k = A.result;
            return {
              type: ce.redirect,
              response: _E(k, x, w[q].route.id, I, u, p.v7_relativeSplatPath),
            };
          }
          return kE(A);
        })
      );
    } catch (z) {
      return w.map(() => ({ type: ce.error, error: z }));
    }
  }
  async function it(v, x, w, I, z) {
    let [A, ...q] = await Promise.all([
      w.length ? vn("loader", z, w, x) : [],
      ...I.map((k) => {
        if (k.matches && k.match && k.controller) {
          let Q = Yr(e.history, k.path, k.controller.signal);
          return vn("loader", Q, [k.match], k.matches).then(($) => $[0]);
        } else
          return Promise.resolve({
            type: ce.error,
            error: Je(404, { pathname: k.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Dd(
          v,
          w,
          A,
          A.map(() => z.signal),
          !1,
          g.loaderData
        ),
        Dd(
          v,
          I.map((k) => k.match),
          q,
          I.map((k) => (k.controller ? k.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: A, fetcherResults: q }
    );
  }
  function cr() {
    (be = !0),
      at.push(...mr()),
      he.forEach((v, x) => {
        F.has(x) && (M.add(x), Pt(x));
      });
  }
  function _e(v, x, w) {
    w === void 0 && (w = {}),
      g.fetchers.set(v, x),
      ve(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (w && w.flushSync) === !0 }
      );
  }
  function xt(v, x, w, I) {
    I === void 0 && (I = {});
    let z = sa(g.matches, x);
    On(v),
      ve(
        { errors: { [z.route.id]: w }, fetchers: new Map(g.fetchers) },
        { flushSync: (I && I.flushSync) === !0 }
      );
  }
  function ot(v) {
    return (
      p.v7_fetcherPersist &&
        (gt.set(v, (gt.get(v) || 0) + 1), se.has(v) && se.delete(v)),
      g.fetchers.get(v) || SE
    );
  }
  function On(v) {
    let x = g.fetchers.get(v);
    F.has(v) && !(x && x.state === "loading" && J.has(v)) && Pt(v),
      he.delete(v),
      J.delete(v),
      ke.delete(v),
      se.delete(v),
      M.delete(v),
      g.fetchers.delete(v);
  }
  function ln(v) {
    if (p.v7_fetcherPersist) {
      let x = (gt.get(v) || 0) - 1;
      x <= 0 ? (gt.delete(v), se.add(v)) : gt.set(v, x);
    } else On(v);
    ve({ fetchers: new Map(g.fetchers) });
  }
  function Pt(v) {
    let x = F.get(v);
    G(x, "Expected fetch controller: " + v), x.abort(), F.delete(v);
  }
  function Vt(v) {
    for (let x of v) {
      let w = ot(x),
        I = Hn(w.data);
      g.fetchers.set(x, I);
    }
  }
  function $r() {
    let v = [],
      x = !1;
    for (let w of ke) {
      let I = g.fetchers.get(w);
      G(I, "Expected fetcher: " + w),
        I.state === "loading" && (ke.delete(w), v.push(w), (x = !0));
    }
    return Vt(v), x;
  }
  function on(v) {
    let x = [];
    for (let [w, I] of J)
      if (I < v) {
        let z = g.fetchers.get(w);
        G(z, "Expected fetcher: " + w),
          z.state === "loading" && (Pt(w), J.delete(w), x.push(w));
      }
    return Vt(x), x.length > 0;
  }
  function _a(v, x) {
    let w = g.blockers.get(v) || Wa;
    return We.get(v) !== x && We.set(v, x), w;
  }
  function Rt(v) {
    g.blockers.delete(v), We.delete(v);
  }
  function bn(v, x) {
    let w = g.blockers.get(v) || Wa;
    G(
      (w.state === "unblocked" && x.state === "blocked") ||
        (w.state === "blocked" && x.state === "blocked") ||
        (w.state === "blocked" && x.state === "proceeding") ||
        (w.state === "blocked" && x.state === "unblocked") ||
        (w.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + w.state + " -> " + x.state
    );
    let I = new Map(g.blockers);
    I.set(v, x), ve({ blockers: I });
  }
  function qt(v) {
    let { currentLocation: x, nextLocation: w, historyAction: I } = v;
    if (We.size === 0) return;
    We.size > 1 && Da(!1, "A router only supports one blocker at a time");
    let z = Array.from(We.entries()),
      [A, q] = z[z.length - 1],
      k = g.blockers.get(A);
    if (
      !(k && k.state === "proceeding") &&
      q({ currentLocation: x, nextLocation: w, historyAction: I })
    )
      return A;
  }
  function dr(v) {
    let x = Je(404, { pathname: v }),
      w = s || o,
      { matches: I, route: z } = gd(w);
    return mr(), { notFoundMatches: I, route: z, error: x };
  }
  function Tt(v, x) {
    return {
      boundaryId: sa(x.partialMatches).route.id,
      error: Je(400, {
        type: "route-discovery",
        pathname: v,
        message:
          x.error != null && "message" in x.error ? x.error : String(x.error),
      }),
    };
  }
  function mr(v) {
    let x = [];
    return (
      qe.forEach((w, I) => {
        (!v || v(I)) && (w.cancel(), x.push(I), qe.delete(I));
      }),
      x
    );
  }
  function En(v, x, w) {
    if (((C = v), (m = x), (h = w || null), !E && g.navigation === Vo)) {
      E = !0;
      let I = qr(g.location, g.matches);
      I != null && ve({ restoreScrollPosition: I });
    }
    return () => {
      (C = null), (m = null), (h = null);
    };
  }
  function Vr(v, x) {
    return (
      (h &&
        h(
          v,
          x.map((I) => eE(I, g.loaderData))
        )) ||
      v.key
    );
  }
  function gn(v, x) {
    if (C && m) {
      let w = Vr(v, x);
      C[w] = m();
    }
  }
  function qr(v, x) {
    if (C) {
      let w = Vr(v, x),
        I = C[w];
      if (typeof I == "number") return I;
    }
    return null;
  }
  function kt(v, x, w) {
    if (d) {
      if (S.has(w)) return { active: !1, matches: v };
      if (v) {
        if (Object.keys(v[0].params).length > 0)
          return { active: !0, matches: vi(x, w, u, !0) };
      } else return { active: !0, matches: vi(x, w, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function Un(v, x, w) {
    let I = v;
    for (;;) {
      let z = s == null,
        A = s || o;
      try {
        await FE(d, x, I, A, l, a, Ia, w);
      } catch (Q) {
        return { type: "error", error: Q, partialMatches: I };
      } finally {
        z && (o = [...o]);
      }
      if (w.aborted) return { type: "aborted" };
      let q = Dr(A, x, u);
      if (q) return sn(x, S), { type: "success", matches: q };
      let k = vi(A, x, u, !0);
      if (
        !k ||
        (I.length === k.length &&
          I.every((Q, $) => Q.route.id === k[$].route.id))
      )
        return sn(x, S), { type: "success", matches: null };
      I = k;
    }
  }
  function sn(v, x) {
    if (x.size >= D) {
      let w = x.values().next().value;
      x.delete(w);
    }
    x.add(v);
  }
  function Ma(v) {
    (l = {}), (s = Fl(v, a, void 0, l));
  }
  function Wt(v, x) {
    let w = s == null;
    af(v, x, s || o, l, a), w && ((o = [...o]), ve({}));
  }
  return (
    (O = {
      get basename() {
        return u;
      },
      get future() {
        return p;
      },
      get state() {
        return g;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: La,
      subscribe: Fa,
      enableScrollRestoration: En,
      navigate: an,
      fetch: Ta,
      revalidate: Pa,
      createHref: (v) => e.history.createHref(v),
      encodeLocation: (v) => e.history.encodeLocation(v),
      getFetcher: ot,
      deleteFetcher: ln,
      dispose: nn,
      getBlocker: _a,
      deleteBlocker: Rt,
      patchRoutes: Wt,
      _internalFetchControllers: F,
      _internalActiveDeferreds: qe,
      _internalSetRoutes: Ma,
    }),
    O
  );
}
function jE(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Hs(e, t, n, r, a, l, o, s) {
  let u, c;
  if (o) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === o)) {
        c = p;
        break;
      }
  } else (u = t), (c = t[t.length - 1]);
  let d = $u(a || ".", Hu(u, l), Rn(e.pathname, n) || e.pathname, s === "path");
  return (
    a == null && ((d.search = e.search), (d.hash = e.hash)),
    (a == null || a === "" || a === ".") &&
      c &&
      c.route.index &&
      !qu(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : jn([n, d.pathname])),
    Ur(d)
  );
}
function cd(e, t, n, r) {
  if (!r || !jE(r)) return { path: n };
  if (r.formMethod && !AE(r.formMethod))
    return { path: n, error: Je(405, { method: r.formMethod }) };
  let a = () => ({ path: n, error: Je(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    o = e ? l.toUpperCase() : l.toLowerCase(),
    s = lf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Gt(o)) return a();
      let y =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((N, D) => {
              let [S, C] = D;
              return (
                "" +
                N +
                S +
                "=" +
                C +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Gt(o)) return a();
      try {
        let y = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, c;
  if (r.formData) (u = $s(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (u = $s(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (c = yd(u));
  else if (r.body == null) (u = new URLSearchParams()), (c = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (c = yd(u));
    } catch {
      return a();
    }
  let d = {
    formMethod: o,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (Gt(d.formMethod)) return { path: n, submission: d };
  let p = _n(n);
  return (
    t && p.search && qu(p.search) && u.append("index", ""),
    (p.search = "?" + u),
    { path: Ur(p), submission: d }
  );
}
function IE(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((a) => a.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function dd(e, t, n, r, a, l, o, s, u, c, d, p, y, N, D, S) {
  let C = S ? (Dt(S[1]) ? S[1].error : S[1].data) : void 0,
    h = e.createURL(t.location),
    m = e.createURL(a),
    E = S && Dt(S[1]) ? S[0] : void 0,
    j = E ? IE(n, E) : n,
    T = S ? S[1].statusCode : void 0,
    _ = o && T && T >= 400,
    O = j.filter((H, b) => {
      let { route: W } = H;
      if (W.lazy) return !0;
      if (W.loader == null) return !1;
      if (l)
        return typeof W.loader != "function" || W.loader.hydrate
          ? !0
          : t.loaderData[W.id] === void 0 &&
              (!t.errors || t.errors[W.id] === void 0);
      if (
        LE(t.loaderData, t.matches[b], H) ||
        u.some((oe) => oe === H.route.id)
      )
        return !0;
      let ae = t.matches[b],
        me = H;
      return md(
        H,
        xe(
          {
            currentUrl: h,
            currentParams: ae.params,
            nextUrl: m,
            nextParams: me.params,
          },
          r,
          {
            actionResult: C,
            actionStatus: T,
            defaultShouldRevalidate: _
              ? !1
              : s ||
                h.pathname + h.search === m.pathname + m.search ||
                h.search !== m.search ||
                rf(ae, me),
          }
        )
      );
    }),
    g = [];
  return (
    p.forEach((H, b) => {
      if (l || !n.some((Ve) => Ve.route.id === H.routeId) || d.has(b)) return;
      let W = Dr(N, H.path, D);
      if (!W) {
        g.push({
          key: b,
          routeId: H.routeId,
          path: H.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let ae = t.fetchers.get(b),
        me = tl(W, H.path),
        oe = !1;
      y.has(b)
        ? (oe = !1)
        : c.has(b)
        ? (c.delete(b), (oe = !0))
        : ae && ae.state !== "idle" && ae.data === void 0
        ? (oe = s)
        : (oe = md(
            me,
            xe(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: m,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: C,
                actionStatus: T,
                defaultShouldRevalidate: _ ? !1 : s,
              }
            )
          )),
        oe &&
          g.push({
            key: b,
            routeId: H.routeId,
            path: H.path,
            matches: W,
            match: me,
            controller: new AbortController(),
          });
    }),
    [O, g]
  );
}
function LE(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    a = e[n.route.id] === void 0;
  return r || a;
}
function rf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function md(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function FE(e, t, n, r, a, l, o, s) {
  let u = [t, ...n.map((c) => c.route.id)].join("-");
  try {
    let c = o.get(u);
    c ||
      ((c = e({
        path: t,
        matches: n,
        patch: (d, p) => {
          s.aborted || af(d, p, r, a, l);
        },
      })),
      o.set(u, c)),
      c && bE(c) && (await c);
  } finally {
    o.delete(u);
  }
}
function af(e, t, n, r, a) {
  if (e) {
    var l;
    let o = r[e];
    G(o, "No route found to patch children into: routeId = " + e);
    let s = Fl(
      t,
      a,
      [
        e,
        "patch",
        String(((l = o.children) == null ? void 0 : l.length) || "0"),
      ],
      r
    );
    o.children ? o.children.push(...s) : (o.children = s);
  } else {
    let o = Fl(t, a, ["patch", String(n.length || "0")], r);
    n.push(...o);
  }
}
async function pd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let a = n[e.id];
  G(a, "No route found in manifest");
  let l = {};
  for (let o in r) {
    let u = a[o] !== void 0 && o !== "hasErrorBoundary";
    Da(
      !u,
      'Route "' +
        a.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !u && !Zv.has(o) && (l[o] = r[o]);
  }
  Object.assign(a, l), Object.assign(a, xe({}, t(a), { lazy: void 0 }));
}
function PE(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function RE(e, t, n, r, a, l, o, s) {
  let u = r.reduce((p, y) => p.add(y.route.id), new Set()),
    c = new Set(),
    d = await e({
      matches: a.map((p) => {
        let y = u.has(p.route.id);
        return xe({}, p, {
          shouldLoad: y,
          resolve: (D) => (
            c.add(p.route.id),
            y
              ? TE(t, n, p, l, o, D, s)
              : Promise.resolve({ type: ce.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: a[0].params,
      context: s,
    });
  return (
    a.forEach((p) =>
      G(
        c.has(p.route.id),
        '`match.resolve()` was not called for route id "' +
          p.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    d.filter((p, y) => u.has(a[y].route.id))
  );
}
async function TE(e, t, n, r, a, l, o) {
  let s,
    u,
    c = (d) => {
      let p,
        y = new Promise((S, C) => (p = C));
      (u = () => p()), t.signal.addEventListener("abort", u);
      let N = (S) =>
          typeof d != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : d(
                { request: t, params: n.params, context: o },
                ...(S !== void 0 ? [S] : [])
              ),
        D;
      return (
        l
          ? (D = l((S) => N(S)))
          : (D = (async () => {
              try {
                return { type: "data", result: await N() };
              } catch (S) {
                return { type: "error", result: S };
              }
            })()),
        Promise.race([D, y])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let p,
          [y] = await Promise.all([
            c(d).catch((N) => {
              p = N;
            }),
            pd(n.route, a, r),
          ]);
        if (p !== void 0) throw p;
        s = y;
      } else if ((await pd(n.route, a, r), (d = n.route[e]), d)) s = await c(d);
      else if (e === "action") {
        let p = new URL(t.url),
          y = p.pathname + p.search;
        throw Je(405, { method: t.method, pathname: y, routeId: n.route.id });
      } else return { type: ce.data, result: void 0 };
    else if (d) s = await c(d);
    else {
      let p = new URL(t.url),
        y = p.pathname + p.search;
      throw Je(404, { pathname: y });
    }
    G(
      s.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (d) {
    return { type: ce.error, result: d };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return s;
}
async function kE(e) {
  let { result: t, type: n } = e;
  if (of(t)) {
    let c;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (d) {
      return { type: ce.error, error: d };
    }
    return n === ce.error
      ? {
          type: ce.error,
          error: new $i(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ce.data, data: c, statusCode: t.status, headers: t.headers };
  }
  if (n === ce.error) {
    if (Nd(t)) {
      var r;
      if (t.data instanceof Error) {
        var a;
        return {
          type: ce.error,
          error: t.data,
          statusCode: (a = t.init) == null ? void 0 : a.status,
        };
      }
      t = new $i(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: ce.error, error: t, statusCode: co(t) ? t.status : void 0 };
  }
  if (zE(t)) {
    var l, o;
    return {
      type: ce.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Nd(t)) {
    var s, u;
    return {
      type: ce.data,
      data: t.data,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: ce.data, data: t };
}
function _E(e, t, n, r, a, l) {
  let o = e.headers.get("Location");
  if (
    (G(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Vu.test(o))
  ) {
    let s = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = Hs(new URL(t.url), s, a, !0, o, l)), e.headers.set("Location", o);
  }
  return e;
}
function fd(e, t, n) {
  if (Vu.test(e)) {
    let r = e,
      a = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      l = Rn(a.pathname, n) != null;
    if (a.origin === t.origin && l) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Yr(e, t, n, r) {
  let a = e.createURL(lf(t)).toString(),
    l = { signal: n };
  if (r && Gt(r.formMethod)) {
    let { formMethod: o, formEncType: s } = r;
    (l.method = o.toUpperCase()),
      s === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": s })),
          (l.body = JSON.stringify(r.json)))
        : s === "text/plain"
        ? (l.body = r.text)
        : s === "application/x-www-form-urlencoded" && r.formData
        ? (l.body = $s(r.formData))
        : (l.body = r.formData);
  }
  return new Request(a, l);
}
function $s(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function yd(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function ME(e, t, n, r, a, l) {
  let o = {},
    s = null,
    u,
    c = !1,
    d = {},
    p = r && Dt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((y, N) => {
      let D = t[N].route.id;
      if (
        (G(!Ir(y), "Cannot handle redirect results in processLoaderData"),
        Dt(y))
      ) {
        let S = y.error;
        if ((p !== void 0 && ((S = p), (p = void 0)), (s = s || {}), l))
          s[D] = S;
        else {
          let C = sa(e, D);
          s[C.route.id] == null && (s[C.route.id] = S);
        }
        (o[D] = void 0),
          c || ((c = !0), (u = co(y.error) ? y.error.status : 500)),
          y.headers && (d[D] = y.headers);
      } else
        jr(y)
          ? (a.set(D, y.deferredData),
            (o[D] = y.deferredData.data),
            y.statusCode != null &&
              y.statusCode !== 200 &&
              !c &&
              (u = y.statusCode),
            y.headers && (d[D] = y.headers))
          : ((o[D] = y.data),
            y.statusCode && y.statusCode !== 200 && !c && (u = y.statusCode),
            y.headers && (d[D] = y.headers));
    }),
    p !== void 0 && r && ((s = { [r[0]]: p }), (o[r[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: u || 200, loaderHeaders: d }
  );
}
function hd(e, t, n, r, a, l, o, s) {
  let { loaderData: u, errors: c } = ME(t, n, r, a, s, !1);
  for (let d = 0; d < l.length; d++) {
    let { key: p, match: y, controller: N } = l[d];
    G(
      o !== void 0 && o[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let D = o[d];
    if (!(N && N.signal.aborted))
      if (Dt(D)) {
        let S = sa(e.matches, y == null ? void 0 : y.route.id);
        (c && c[S.route.id]) || (c = xe({}, c, { [S.route.id]: D.error })),
          e.fetchers.delete(p);
      } else if (Ir(D)) G(!1, "Unhandled fetcher revalidation redirect");
      else if (jr(D)) G(!1, "Unhandled fetcher deferred data");
      else {
        let S = Hn(D.data);
        e.fetchers.set(p, S);
      }
  }
  return { loaderData: u, errors: c };
}
function vd(e, t, n, r) {
  let a = xe({}, t);
  for (let l of n) {
    let o = l.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (a[o] = t[o])
        : e[o] !== void 0 && l.route.loader && (a[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return a;
}
function Ed(e) {
  return e
    ? Dt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function sa(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function gd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Je(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: a,
      type: l,
      message: o,
    } = t === void 0 ? {} : t,
    s = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        l === "route-discovery"
          ? (u =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                o))
          : a && n && r
          ? (u =
              "You made a " +
              a +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
          ? (u = "defer() is not supported in actions")
          : l === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((s = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((s = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((s = "Method Not Allowed"),
        a && n && r
          ? (u =
              "You made a " +
              a.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : a && (u = 'Invalid request method "' + a.toUpperCase() + '"')),
    new $i(e || 500, s, new Error(u), !0)
  );
}
function xd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Ir(n)) return { result: n, idx: t };
  }
}
function lf(e) {
  let t = typeof e == "string" ? _n(e) : e;
  return Ur(xe({}, t, { hash: "" }));
}
function OE(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function bE(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function UE(e) {
  return of(e.result) && NE.has(e.result.status);
}
function jr(e) {
  return e.type === ce.deferred;
}
function Dt(e) {
  return e.type === ce.error;
}
function Ir(e) {
  return (e && e.type) === ce.redirect;
}
function Nd(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function zE(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function of(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function AE(e) {
  return xE.has(e.toLowerCase());
}
function Gt(e) {
  return EE.has(e.toLowerCase());
}
async function Dd(e, t, n, r, a, l) {
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      u = t[o];
    if (!u) continue;
    let c = e.find((p) => p.route.id === u.route.id),
      d = c != null && !rf(c, u) && (l && l[u.route.id]) !== void 0;
    if (jr(s) && (a || d)) {
      let p = r[o];
      G(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await sf(s, p, a).then((y) => {
          y && (n[o] = y || n[o]);
        });
    }
  }
}
async function sf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: ce.error, error: a };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function qu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function tl(e, t) {
  let n = typeof t == "string" ? _n(t).search : t.search;
  if (e[e.length - 1].route.index && qu(n || "")) return e[e.length - 1];
  let r = ef(e);
  return r[r.length - 1];
}
function Sd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: a,
    formData: l,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function qo(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function BE(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Qa(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function HE(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Hn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function $E(e, t) {
  try {
    let n = e.sessionStorage.getItem(nf);
    if (n) {
      let r = JSON.parse(n);
      for (let [a, l] of Object.entries(r || {}))
        l && Array.isArray(l) && t.set(a, new Set(l || []));
    }
  } catch {}
}
function VE(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, a] of t) n[r] = [...a];
    try {
      e.sessionStorage.setItem(nf, JSON.stringify(n));
    } catch (r) {
      Da(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pl() {
  return (
    (Pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pl.apply(this, arguments)
  );
}
const bl = f.createContext(null),
  Wu = f.createContext(null),
  ur = f.createContext(null),
  mo = f.createContext(null),
  Mn = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  uf = f.createContext(null);
function qE(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ul() || G(!1);
  let { basename: r, navigator: a } = f.useContext(ur),
    { hash: l, pathname: o, search: s } = po(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : jn([r, o])),
    a.createHref({ pathname: u, search: s, hash: l })
  );
}
function Ul() {
  return f.useContext(mo) != null;
}
function Br() {
  return Ul() || G(!1), f.useContext(mo).location;
}
function cf(e) {
  f.useContext(ur).static || f.useLayoutEffect(e);
}
function Et() {
  let { isDataRoute: e } = f.useContext(Mn);
  return e ? lg() : WE();
}
function WE() {
  Ul() || G(!1);
  let e = f.useContext(bl),
    { basename: t, future: n, navigator: r } = f.useContext(ur),
    { matches: a } = f.useContext(Mn),
    { pathname: l } = Br(),
    o = JSON.stringify(Hu(a, n.v7_relativeSplatPath)),
    s = f.useRef(!1);
  return (
    cf(() => {
      s.current = !0;
    }),
    f.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let p = $u(c, JSON.parse(o), l, d.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : jn([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, o, l, e]
    )
  );
}
const QE = f.createContext(null);
function KE(e) {
  let t = f.useContext(Mn).outlet;
  return t && f.createElement(QE.Provider, { value: e }, t);
}
function df() {
  let { matches: e } = f.useContext(Mn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function po(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = f.useContext(ur),
    { matches: a } = f.useContext(Mn),
    { pathname: l } = Br(),
    o = JSON.stringify(Hu(a, r.v7_relativeSplatPath));
  return f.useMemo(() => $u(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function YE(e, t, n, r) {
  Ul() || G(!1);
  let { navigator: a } = f.useContext(ur),
    { matches: l } = f.useContext(Mn),
    o = l[l.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = Br(),
    d;
  if (t) {
    var p;
    let C = typeof t == "string" ? _n(t) : t;
    u === "/" || ((p = C.pathname) != null && p.startsWith(u)) || G(!1),
      (d = C);
  } else d = c;
  let y = d.pathname || "/",
    N = y;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    N = "/" + y.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let D = Dr(e, { pathname: N }),
    S = eg(
      D &&
        D.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, s, C.params),
            pathname: jn([
              u,
              a.encodeLocation
                ? a.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? u
                : jn([
                    u,
                    a.encodeLocation
                      ? a.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && S
    ? f.createElement(
        mo.Provider,
        {
          value: {
            location: Pl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: we.Pop,
          },
        },
        S
      )
    : S;
}
function GE() {
  let e = ag(),
    t = co(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("h2", null, "Unexpected Application Error!"),
    f.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? f.createElement("pre", { style: a }, n) : null,
    l
  );
}
const XE = f.createElement(GE, null);
class ZE extends f.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          Mn.Provider,
          { value: this.props.routeContext },
          f.createElement(uf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function JE(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = f.useContext(bl);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(Mn.Provider, { value: t }, r)
  );
}
function eg(e, t, n, r) {
  var a;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    s = (a = n) == null ? void 0 : a.errors;
  if (s != null) {
    let d = o.findIndex(
      (p) => p.route.id && (s == null ? void 0 : s[p.route.id]) !== void 0
    );
    d >= 0 || G(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let p = o[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = d),
        p.route.id)
      ) {
        let { loaderData: y, errors: N } = n,
          D =
            p.route.loader &&
            y[p.route.id] === void 0 &&
            (!N || N[p.route.id] === void 0);
        if (p.route.lazy || D) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, p, y) => {
    let N,
      D = !1,
      S = null,
      C = null;
    n &&
      ((N = s && p.route.id ? s[p.route.id] : void 0),
      (S = p.route.errorElement || XE),
      u &&
        (c < 0 && y === 0
          ? (ig("route-fallback", !1), (D = !0), (C = null))
          : c === y &&
            ((D = !0), (C = p.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, y + 1)),
      m = () => {
        let E;
        return (
          N
            ? (E = S)
            : D
            ? (E = C)
            : p.route.Component
            ? (E = f.createElement(p.route.Component, null))
            : p.route.element
            ? (E = p.route.element)
            : (E = d),
          f.createElement(JE, {
            match: p,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: E,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || y === 0)
      ? f.createElement(ZE, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: N,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var mf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(mf || {}),
  Vi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Vi || {});
function tg(e) {
  let t = f.useContext(bl);
  return t || G(!1), t;
}
function ng(e) {
  let t = f.useContext(Wu);
  return t || G(!1), t;
}
function rg(e) {
  let t = f.useContext(Mn);
  return t || G(!1), t;
}
function pf(e) {
  let t = rg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function ag() {
  var e;
  let t = f.useContext(uf),
    n = ng(Vi.UseRouteError),
    r = pf(Vi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function lg() {
  let { router: e } = tg(mf.UseNavigateStable),
    t = pf(Vi.UseNavigateStable),
    n = f.useRef(!1);
  return (
    cf(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (a, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, Pl({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const Cd = {};
function ig(e, t, n) {
  !t && !Cd[e] && (Cd[e] = !0);
}
function og(e) {
  return KE(e.context);
}
function sg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: a = we.Pop,
    navigator: l,
    static: o = !1,
    future: s,
  } = e;
  Ul() && G(!1);
  let u = t.replace(/^\/*/, "/"),
    c = f.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: o,
        future: Pl({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, l, o]
    );
  typeof r == "string" && (r = _n(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: y = "",
      state: N = null,
      key: D = "default",
    } = r,
    S = f.useMemo(() => {
      let C = Rn(d, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: y, state: N, key: D },
            navigationType: a,
          };
    }, [u, d, p, y, N, D, a]);
  return S == null
    ? null
    : f.createElement(
        ur.Provider,
        { value: c },
        f.createElement(mo.Provider, { children: n, value: S })
      );
}
new Promise(() => {});
function ug(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: f.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: f.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: f.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sa() {
  return (
    (Sa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sa.apply(this, arguments)
  );
}
function ff(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    l;
  for (l = 0; l < r.length; l++)
    (a = r[l]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function cg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dg(e, t) {
  return e.button === 0 && (!t || t === "_self") && !cg(e);
}
const mg = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  pg = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  fg = "6";
try {
  window.__reactRouterVersion = fg;
} catch {}
function yg(e, t) {
  return wE({
    basename: t == null ? void 0 : t.basename,
    future: Sa({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Yv({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || hg(),
    routes: e,
    mapRouteProperties: ug,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnNavigation:
      t == null ? void 0 : t.unstable_patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function hg() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Sa({}, t, { errors: vg(t.errors) })), t;
}
function vg(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      n[r] = new $i(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let l = window[a.__subType];
        if (typeof l == "function")
          try {
            let o = new l(a.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(a.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = a;
  return n;
}
const yf = f.createContext({ isTransitioning: !1 }),
  Eg = f.createContext(new Map()),
  gg = "startTransition",
  wd = Ko[gg],
  xg = "flushSync",
  jd = wv[xg];
function Ng(e) {
  wd ? wd(e) : e();
}
function Ka(e) {
  jd ? jd(e) : e();
}
class Dg {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Sg(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [a, l] = f.useState(n.state),
    [o, s] = f.useState(),
    [u, c] = f.useState({ isTransitioning: !1 }),
    [d, p] = f.useState(),
    [y, N] = f.useState(),
    [D, S] = f.useState(),
    C = f.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    m = f.useCallback(
      (g) => {
        h ? Ng(g) : g();
      },
      [h]
    ),
    E = f.useCallback(
      (g, H) => {
        let {
          deletedFetchers: b,
          unstable_flushSync: W,
          unstable_viewTransitionOpts: ae,
        } = H;
        b.forEach((oe) => C.current.delete(oe)),
          g.fetchers.forEach((oe, Ve) => {
            oe.data !== void 0 && C.current.set(Ve, oe.data);
          });
        let me =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!ae || me) {
          W ? Ka(() => l(g)) : m(() => l(g));
          return;
        }
        if (W) {
          Ka(() => {
            y && (d && d.resolve(), y.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ae.currentLocation,
                nextLocation: ae.nextLocation,
              });
          });
          let oe = n.window.document.startViewTransition(() => {
            Ka(() => l(g));
          });
          oe.finished.finally(() => {
            Ka(() => {
              p(void 0), N(void 0), s(void 0), c({ isTransitioning: !1 });
            });
          }),
            Ka(() => N(oe));
          return;
        }
        y
          ? (d && d.resolve(),
            y.skipTransition(),
            S({
              state: g,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }))
          : (s(g),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ae.currentLocation,
              nextLocation: ae.nextLocation,
            }));
      },
      [n.window, y, d, C, m]
    );
  f.useLayoutEffect(() => n.subscribe(E), [n, E]),
    f.useEffect(() => {
      u.isTransitioning && !u.flushSync && p(new Dg());
    }, [u]),
    f.useEffect(() => {
      if (d && o && n.window) {
        let g = o,
          H = d.promise,
          b = n.window.document.startViewTransition(async () => {
            m(() => l(g)), await H;
          });
        b.finished.finally(() => {
          p(void 0), N(void 0), s(void 0), c({ isTransitioning: !1 });
        }),
          N(b);
      }
    }, [m, o, d, n.window]),
    f.useEffect(() => {
      d && o && a.location.key === o.location.key && d.resolve();
    }, [d, y, a.location, o]),
    f.useEffect(() => {
      !u.isTransitioning &&
        D &&
        (s(D.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: D.currentLocation,
          nextLocation: D.nextLocation,
        }),
        S(void 0));
    }, [u.isTransitioning, D]),
    f.useEffect(() => {}, []);
  let j = f.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, H, b) =>
          n.navigate(g, {
            state: H,
            preventScrollReset: b == null ? void 0 : b.preventScrollReset,
          }),
        replace: (g, H, b) =>
          n.navigate(g, {
            replace: !0,
            state: H,
            preventScrollReset: b == null ? void 0 : b.preventScrollReset,
          }),
      }),
      [n]
    ),
    T = n.basename || "/",
    _ = f.useMemo(
      () => ({ router: n, navigator: j, static: !1, basename: T }),
      [n, j, T]
    ),
    O = f.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      bl.Provider,
      { value: _ },
      f.createElement(
        Wu.Provider,
        { value: a },
        f.createElement(
          Eg.Provider,
          { value: C.current },
          f.createElement(
            yf.Provider,
            { value: u },
            f.createElement(
              sg,
              {
                basename: T,
                location: a.location,
                navigationType: a.historyAction,
                navigator: j,
                future: O,
              },
              a.initialized || n.future.v7_partialHydration
                ? f.createElement(Cg, {
                    routes: n.routes,
                    future: n.future,
                    state: a,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Cg = f.memo(wg);
function wg(e) {
  let { routes: t, future: n, state: r } = e;
  return YE(t, void 0, r, n);
}
const jg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ig = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pr = f.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: a,
        reloadDocument: l,
        replace: o,
        state: s,
        target: u,
        to: c,
        preventScrollReset: d,
        unstable_viewTransition: p,
      } = t,
      y = ff(t, mg),
      { basename: N } = f.useContext(ur),
      D,
      S = !1;
    if (typeof c == "string" && Ig.test(c) && ((D = c), jg))
      try {
        let E = new URL(window.location.href),
          j = c.startsWith("//") ? new URL(E.protocol + c) : new URL(c),
          T = Rn(j.pathname, N);
        j.origin === E.origin && T != null
          ? (c = T + j.search + j.hash)
          : (S = !0);
      } catch {}
    let C = qE(c, { relative: a }),
      h = Pg(c, {
        replace: o,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: a,
        unstable_viewTransition: p,
      });
    function m(E) {
      r && r(E), E.defaultPrevented || h(E);
    }
    return f.createElement(
      "a",
      Sa({}, y, { href: D || C, onClick: S || l ? r : m, ref: n, target: u })
    );
  }),
  Lg = f.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: a = !1,
        className: l = "",
        end: o = !1,
        style: s,
        to: u,
        unstable_viewTransition: c,
        children: d,
      } = t,
      p = ff(t, pg),
      y = po(u, { relative: p.relative }),
      N = Br(),
      D = f.useContext(Wu),
      { navigator: S, basename: C } = f.useContext(ur),
      h = D != null && Rg(y) && c === !0,
      m = S.encodeLocation ? S.encodeLocation(y).pathname : y.pathname,
      E = N.pathname,
      j =
        D && D.navigation && D.navigation.location
          ? D.navigation.location.pathname
          : null;
    a ||
      ((E = E.toLowerCase()),
      (j = j ? j.toLowerCase() : null),
      (m = m.toLowerCase())),
      j && C && (j = Rn(j, C) || j);
    const T = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let _ = E === m || (!o && E.startsWith(m) && E.charAt(T) === "/"),
      O =
        j != null &&
        (j === m || (!o && j.startsWith(m) && j.charAt(m.length) === "/")),
      g = { isActive: _, isPending: O, isTransitioning: h },
      H = _ ? r : void 0,
      b;
    typeof l == "function"
      ? (b = l(g))
      : (b = [
          l,
          _ ? "active" : null,
          O ? "pending" : null,
          h ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let W = typeof s == "function" ? s(g) : s;
    return f.createElement(
      Pr,
      Sa({}, p, {
        "aria-current": H,
        className: b,
        ref: n,
        style: W,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof d == "function" ? d(g) : d
    );
  });
var Vs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Vs || (Vs = {}));
var Id;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Id || (Id = {}));
function Fg(e) {
  let t = f.useContext(bl);
  return t || G(!1), t;
}
function Pg(e, t) {
  let {
      target: n,
      replace: r,
      state: a,
      preventScrollReset: l,
      relative: o,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    u = Et(),
    c = Br(),
    d = po(e, { relative: o });
  return f.useCallback(
    (p) => {
      if (dg(p, n)) {
        p.preventDefault();
        let y = r !== void 0 ? r : Ur(c) === Ur(d);
        u(e, {
          replace: y,
          state: a,
          preventScrollReset: l,
          relative: o,
          unstable_viewTransition: s,
        });
      }
    },
    [c, u, d, r, a, n, e, l, o, s]
  );
}
function Rg(e, t) {
  t === void 0 && (t = {});
  let n = f.useContext(yf);
  n == null && G(!1);
  let { basename: r } = Fg(Vs.useViewTransitionState),
    a = po(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let l = Rn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Rn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Hi(a.pathname, o) != null || Hi(a.pathname, l) != null;
}
function Ae(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Tg = (() =>
    (typeof Symbol == "function" && Symbol.observable) || "@@observable")(),
  Ld = Tg,
  Wo = () => Math.random().toString(36).substring(7).split("").join("."),
  kg = {
    INIT: `@@redux/INIT${Wo()}`,
    REPLACE: `@@redux/REPLACE${Wo()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Wo()}`,
  },
  qi = kg;
function _g(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function hf(e, t, n) {
  if (typeof e != "function") throw new Error(Ae(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Ae(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Ae(1));
    return n(hf)(e, t);
  }
  let r = e,
    a = t,
    l = new Map(),
    o = l,
    s = 0,
    u = !1;
  function c() {
    o === l &&
      ((o = new Map()),
      l.forEach((C, h) => {
        o.set(h, C);
      }));
  }
  function d() {
    if (u) throw new Error(Ae(3));
    return a;
  }
  function p(C) {
    if (typeof C != "function") throw new Error(Ae(4));
    if (u) throw new Error(Ae(5));
    let h = !0;
    c();
    const m = s++;
    return (
      o.set(m, C),
      function () {
        if (h) {
          if (u) throw new Error(Ae(6));
          (h = !1), c(), o.delete(m), (l = null);
        }
      }
    );
  }
  function y(C) {
    if (!_g(C)) throw new Error(Ae(7));
    if (typeof C.type > "u") throw new Error(Ae(8));
    if (typeof C.type != "string") throw new Error(Ae(17));
    if (u) throw new Error(Ae(9));
    try {
      (u = !0), (a = r(a, C));
    } finally {
      u = !1;
    }
    return (
      (l = o).forEach((m) => {
        m();
      }),
      C
    );
  }
  function N(C) {
    if (typeof C != "function") throw new Error(Ae(10));
    (r = C), y({ type: qi.REPLACE });
  }
  function D() {
    const C = p;
    return {
      subscribe(h) {
        if (typeof h != "object" || h === null) throw new Error(Ae(11));
        function m() {
          const j = h;
          j.next && j.next(d());
        }
        return m(), { unsubscribe: C(m) };
      },
      [Ld]() {
        return this;
      },
    };
  }
  return (
    y({ type: qi.INIT }),
    { dispatch: y, subscribe: p, getState: d, replaceReducer: N, [Ld]: D }
  );
}
function Mg(e, t, n) {
  return hf(e, t, n);
}
function Og(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: qi.INIT }) > "u") throw new Error(Ae(12));
    if (typeof n(void 0, { type: qi.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Ae(13));
  });
}
function bg(e) {
  const t = Object.keys(e),
    n = {};
  for (let l = 0; l < t.length; l++) {
    const o = t[l];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let a;
  try {
    Og(n);
  } catch (l) {
    a = l;
  }
  return function (o = {}, s) {
    if (a) throw a;
    let u = !1;
    const c = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d],
        y = n[p],
        N = o[p],
        D = y(N, s);
      if (typeof D > "u") throw (s && s.type, new Error(Ae(14)));
      (c[p] = D), (u = u || D !== N);
    }
    return (u = u || r.length !== Object.keys(o).length), u ? c : o;
  };
}
function Ug(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function zg(...e) {
  return (t) => (n, r) => {
    const a = t(n, r);
    let l = () => {
      throw new Error(Ae(15));
    };
    const o = { getState: a.getState, dispatch: (u, ...c) => l(u, ...c) },
      s = e.map((u) => u(o));
    return (l = Ug(...s)(a.dispatch)), { ...a, dispatch: l };
  };
}
function Ag(e) {
  return ({ dispatch: n, getState: r }) =>
    (a) =>
    (l) =>
      typeof l == "function" ? l(n, r, e) : a(l);
}
var Bg = Ag();
/*! js-cookie v3.0.5 | MIT */ function ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var Hg = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function qs(e, t) {
  function n(a, l, o) {
    if (!(typeof document > "u")) {
      (o = ri({}, t, o)),
        typeof o.expires == "number" &&
          (o.expires = new Date(Date.now() + o.expires * 864e5)),
        o.expires && (o.expires = o.expires.toUTCString()),
        (a = encodeURIComponent(a)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var s = "";
      for (var u in o)
        o[u] &&
          ((s += "; " + u), o[u] !== !0 && (s += "=" + o[u].split(";")[0]));
      return (document.cookie = a + "=" + e.write(l, a) + s);
    }
  }
  function r(a) {
    if (!(typeof document > "u" || (arguments.length && !a))) {
      for (
        var l = document.cookie ? document.cookie.split("; ") : [],
          o = {},
          s = 0;
        s < l.length;
        s++
      ) {
        var u = l[s].split("="),
          c = u.slice(1).join("=");
        try {
          var d = decodeURIComponent(u[0]);
          if (((o[d] = e.read(c, d)), a === d)) break;
        } catch {}
      }
      return a ? o[a] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (a, l) {
        n(a, "", ri({}, l, { expires: -1 }));
      },
      withAttributes: function (a) {
        return qs(this.converter, ri({}, this.attributes, a));
      },
      withConverter: function (a) {
        return qs(ri({}, this.converter, a), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var $g = qs(Hg, { path: "/" });
const Fe = async (e, t = {}) => {
    (t.method = t.method || "GET"),
      (t.headers = t.headers || {}),
      t.method.toUpperCase() !== "GET" &&
        ((t.headers["Content-Type"] =
          t.headers["Content-Type"] || "application/json"),
        (t.headers["XSRF-Token"] = $g.get("XSRF-TOKEN")));
    const n = await window.fetch(e, t),
      a = await n.clone().json();
    if ((a["XSRF-Token"] || a.user, n.status >= 400)) throw n;
    return n;
  },
  Vg = "branch/search",
  vf = "branches/all",
  qg = "branch/branchById",
  Wg = "branch/createBranch",
  Qg = "branch/updateBranch",
  Kg = "branch/deletedBranch",
  Ef = "branch/removeBranchDataFromStore",
  Yg = (e) => ({ type: vf, payload: e }),
  Gg = () => ({ type: Ef, payload: {} }),
  gf = () => async (e) => {
    const r = (await (await Fe("/api/branches")).json()).branches;
    return e(Yg(r));
  },
  Xg = () => async (e) => e(Gg()),
  Zg = {},
  Jg = (e = Zg, t) => {
    switch (t.type) {
      case Vg:
        return { ...e, resultsBranches: t.payload };
      case vf:
        return { ...e, branches: t.payload };
      case qg:
        return { ...e, branchDetail: t.payload };
      case Wg:
        return { ...e, NewBranch: t.payload };
      case Qg:
        return { ...e, EditedBranch: t.payload };
      case Kg:
        return { ...e, DeletedBranch: t.payload };
      case Ef:
        return {};
      default:
        return e;
    }
  },
  ex = "facility/search",
  xf = "facilities/all",
  tx = "facility/facilityById",
  nx = "facility/createFacility",
  rx = "facility/updateFacility",
  ax = "facility/deletedFacility",
  Nf = "facility/removeFacilityDataFromStore",
  lx = (e) => ({ type: xf, payload: e }),
  ix = () => ({ type: Nf, payload: {} }),
  Df = () => async (e) => {
    const r = (await (await Fe("/api/facilities")).json()).facilities;
    return e(lx(r));
  },
  ox = () => async (e) => e(ix()),
  sx = {},
  ux = (e = sx, t) => {
    switch (t.type) {
      case ex:
        return { ...e, resultsFacilities: t.payload };
      case xf:
        return { ...e, facilities: t.payload };
      case tx:
        return { ...e, facilityDetail: t.payload };
      case nx:
        return { ...e, NewFacility: t.payload };
      case rx:
        return { ...e, EditedFacility: t.payload };
      case ax:
        return { ...e, DeletedFacility: t.payload };
      case Nf:
        return {};
      default:
        return e;
    }
  },
  cx = "academicDepartment/search",
  Sf = "academicDepartments/all",
  dx = "academicDepartment/academicDepartmentById",
  mx = "academicDepartment/createAcademicDepartment",
  px = "academicDepartment/updateAcademicDepartment",
  fx = "academicDepartment/deletedAcademicDepartment",
  Cf = "academicDepartments/removeAcademicDepartmentsDataFromStore",
  yx = (e) => ({ type: Sf, payload: e }),
  hx = () => ({ type: Cf, payload: {} }),
  wf = () => async (e) => {
    const r = (await (await Fe("/api/academicDepartments")).json())
      .academicDepartments;
    return e(yx(r));
  },
  vx = () => async (e) => e(hx()),
  Ex = {},
  gx = (e = Ex, t) => {
    switch (t.type) {
      case cx:
        return { ...e, allAcademicDepartments: t.payload };
      case Sf:
        return { ...e, academicDepartments: t.payload };
      case dx:
        return { ...e, academicDepartmentDetail: t.payload };
      case mx:
        return { ...e, NewAcademicDepartment: t.payload };
      case px:
        return { ...e, EditedAcademicDepartment: t.payload };
      case fx:
        return { ...e, DeletedAcademicDepartment: t.payload };
      case Cf:
        return {};
      default:
        return e;
    }
  },
  xx = "employeeDepartment/search",
  jf = "employeeDepartments/all",
  If = "employeeDepartment/employeeDepartmentById",
  Lf = "employeeDepartment/createEmployeeDepartment",
  Ff = "employeeDepartment/updateEmployeeDepartment",
  Pf = "employeeDepartment/deletedEmployeeDepartment",
  Rf = "employeeDepartments/removeEmployeeDepartmentsDataFromStore",
  Nx = (e) => ({ type: jf, payload: e }),
  Dx = (e) => ({ type: If, payload: e }),
  Sx = (e) => ({ type: Lf, payload: e }),
  Cx = (e) => ({ type: Ff, payload: e }),
  wx = (e) => ({ type: Pf, payload: e }),
  jx = () => ({ type: Rf, payload: {} }),
  Rr = () => async (e) => {
    const r = (await (await Fe("/api/employeeDepartments")).json())
      .employeeDepartments;
    return e(Nx(r));
  },
  Tf = (e) => async (t) => {
    const r = await (await Fe(`/api/employeeDepartments/${e}`)).json();
    return t(Dx(r));
  },
  Ix = (e) => async (t) => {
    const r = await (
      await Fe("/api/employeeDepartments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    return t(Sx(r));
  },
  Lx = (e) => async (t) => {
    const { id: n } = e,
      a = await (
        await Fe(`/api/employeeDepartments/${n}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        })
      ).json();
    return t(Cx(a));
  },
  Fx = (e) => async (t) => {
    const n = e.id;
    return (
      await Fe(`/api/employeeDepartments/${n}`, { method: "DELETE" }), t(wx(e))
    );
  },
  Px = () => async (e) => e(jx()),
  Rx = {},
  Tx = (e = Rx, t) => {
    switch (t.type) {
      case xx:
        return { ...e, allEmployeeDepartments: t.payload };
      case jf:
        return { ...e, employeeDepartments: t.payload };
      case If:
        return { ...e, employeeDepartmentDetail: t.payload };
      case Lf:
        return { ...e, NewEmployeeDepartment: t.payload };
      case Ff:
        return { ...e, EditedEmployeeDepartment: t.payload };
      case Pf:
        return { ...e, DeletedEmployeeDepartment: t.payload };
      case Rf:
        return {};
      default:
        return e;
    }
  },
  kx = "levels/all",
  _x = "level/removeLevelDataFromStore",
  Mx = (e) => ({ type: kx, payload: e }),
  Ox = () => ({ type: _x, payload: {} }),
  kf = () => async (e) => {
    const r = (await (await Fe("/api/levels")).json()).levels;
    return e(Mx(r));
  },
  bx = () => async (e) => e(Ox()),
  Ux = "household/search",
  _f = "households/all",
  zx = "household/householdById",
  Ax = "household/createHousehold",
  Bx = "household/updateHousehold",
  Hx = "household/deletedHousehold",
  Mf = "household/removeHouseholdDataFromStore",
  $x = (e) => ({ type: _f, payload: e }),
  Vx = () => ({ type: Mf, payload: {} }),
  Of = () => async (e) => {
    const r = (await (await Fe("/api/households")).json()).households;
    return e($x(r));
  },
  qx = () => async (e) => e(Vx()),
  Wx = {},
  Qx = (e = Wx, t) => {
    switch (t.type) {
      case Ux:
        return { ...e, resultsHouseholds: t.payload };
      case _f:
        return { ...e, households: t.payload };
      case zx:
        return { ...e, householdDetail: t.payload };
      case Ax:
        return { ...e, NewHousehold: t.payload };
      case Bx:
        return { ...e, EditedHousehold: t.payload };
      case Hx:
        return { ...e, DeletedHousehold: t.payload };
      case Mf:
        return {};
      default:
        return e;
    }
  },
  Kx = "employee/search",
  bf = "employees/all",
  Uf = "employee/employeeById",
  zf = "employee/createEmployee",
  Af = "employee/updateEmployee",
  Bf = "employee/deleteEmployee",
  Hf = "employee/removeEmployeeDataFromStore",
  Yx = (e) => ({ type: bf, payload: e }),
  Gx = (e) => ({ type: Uf, payload: e }),
  Xx = (e) => ({ type: zf, payload: e }),
  Zx = (e) => ({ type: Af, payload: e }),
  Jx = (e) => ({ type: Bf, payload: e }),
  eN = () => ({ type: Hf, payload: {} }),
  Tr = () => async (e) => {
    const r = (await (await Fe("/api/employees")).json()).employees;
    e(Yx(r));
  },
  $f = (e) => async (t) => {
    const r = await (await Fe(`/api/employees/${e}`)).json();
    return t(Gx(r)), r;
  },
  tN = (e) => async (t) => {
    const r = await (
      await Fe("/api/employees/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
      })
    ).json();
    return t(Xx(r));
  },
  nN = (e) => async (t) => {
    const { id: n } = e,
      a = await (
        await Fe(`/api/employees/${n}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
        })
      ).json();
    return t(Zx(a));
  },
  rN = (e) => async (t) => {
    const n = e.id;
    return await Fe(`/api/employees/${n}`, { method: "DELETE" }), t(Jx(e));
  },
  aN = () => async (e) => e(eN()),
  lN = {},
  iN = (e = lN, t) => {
    switch (t.type) {
      case Kx:
        return { ...e, resultsEmployees: t.payload };
      case bf:
        return { ...e, employees: t.payload };
      case Uf:
        return { ...e, employeeDetail: t.payload };
      case zf:
        return { ...e, NewEmployee: t.payload };
      case Af:
        return { ...e, EditedEmployee: t.payload };
      case Bf:
        return { ...e, DeletedEmployee: t.payload };
      case Hf:
        return {};
      default:
        return e;
    }
  },
  oN = "student/search",
  Vf = "students/all",
  sN = "student/studentById",
  uN = "student/createStudent",
  cN = "student/updateStudent",
  dN = "student/deletedStudent",
  qf = "student/removeStudentDataFromStore",
  mN = (e) => ({ type: Vf, payload: e }),
  pN = () => ({ type: qf, payload: {} }),
  Wf = () => async (e) => {
    const r = (await (await Fe("/api/students")).json()).students;
    return e(mN(r));
  },
  fN = () => async (e) => e(pN()),
  yN = {},
  hN = (e = yN, t) => {
    switch (t.type) {
      case oN:
        return { ...e, resultsStudents: t.payload };
      case Vf:
        return { ...e, students: t.payload };
      case sN:
        return { ...e, studentDetail: t.payload };
      case uN:
        return { ...e, NewStudent: t.payload };
      case cN:
        return { ...e, EditedStudent: t.payload };
      case dN:
        return { ...e, DeletedStudent: t.payload };
      case qf:
        return {};
      default:
        return e;
    }
  },
  Qf = "session/setUser",
  Kf = "session/removeUser",
  Qu = (e) => ({ type: Qf, payload: e }),
  vN = () => ({ type: Kf }),
  Yf = (e) => async (t) => {
    const { credential: n, password: r } = e,
      a = await Fe("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential: n, password: r }),
      });
    a.ok &&
      (t(gf()), t(Df()), t(wf()), t(Rr()), t(kf()), t(Of()), t(Tr()), t(Wf()));
    const l = await a.json();
    return t(Qu(l.user)), a;
  },
  EN = (e) => async (t) => {
    const { username: n, firstName: r, lastName: a, email: l, password: o } = e,
      s = await Fe("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username: n,
          firstName: r,
          lastName: a,
          email: l,
          password: o,
        }),
      }),
      u = await s.json();
    return t(Qu(u.user)), s;
  },
  gN = () => async (e) => {
    const n = await (await Fe("/api/session")).json();
    return (
      n.user !== null &&
        (e(gf()),
        e(Df()),
        e(wf()),
        e(Rr()),
        e(kf()),
        e(Of()),
        e(Tr()),
        e(Wf())),
      e(Qu(n.user)),
      n.user
    );
  },
  xN = () => async (e) => {
    const t = await Fe("/api/session", { method: "DELETE" });
    return (
      e(Xg()),
      e(ox()),
      e(vx()),
      e(Px()),
      e(bx()),
      e(qx()),
      e(aN()),
      e(fN()),
      e(vN()),
      t
    );
  },
  NN = {},
  DN = (e = NN, t) => {
    switch (t.type) {
      case Qf:
        return { ...e, user: t.payload };
      case Kf:
        return { user: null };
      default:
        return e;
    }
  },
  SN = bg({
    session: DN,
    employeeDepartments: Tx,
    academicDepartments: gx,
    employees: iN,
    branches: Jg,
    facilities: ux,
    households: Qx,
    students: hN,
  });
let Gf;
Gf = zg(Bg);
const CN = (e) => Mg(SN, e, Gf);
const Ku = f.createContext();
function wN({ children: e }) {
  const t = f.useRef(),
    [n, r] = f.useState(null),
    [a, l] = f.useState(null),
    s = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: l,
      closeModal: () => {
        r(null), typeof a == "function" && (l(null), a());
      },
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Ku.Provider, { value: s, children: e }),
      i.jsx("div", { ref: t }),
    ],
  });
}
function jN() {
  const { modalRef: e, modalContent: t, closeModal: n } = f.useContext(Ku);
  return !e || !e.current || !t
    ? null
    : Wp.createPortal(
        i.jsxs("div", {
          id: "modal",
          children: [
            i.jsx("div", { id: "modal-background", onClick: n }),
            i.jsx("div", { id: "modal-content", children: t }),
          ],
        }),
        e.current
      );
}
const fo = () => f.useContext(Ku);
function IN() {
  const e = Et(),
    t = (o) => {
      o.preventDefault, e("/resources/");
    },
    n = (o) => {
      o.preventDefault, e("/departments");
    },
    r = (o) => {
      o.preventDefault, e("/students");
    },
    a = (o) => {
      o.preventDefault, e("/teachers");
    },
    l = (o) => {
      o.preventDefault, e("/employees");
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      id: "VerticalNavBarDivContainer",
      children: [
        i.jsx("button", {
          onClick: t,
          className: "VerticalNavBarButton",
          children: "Resources",
        }),
        i.jsx("button", {
          onClick: n,
          className: "VerticalNavBarButton",
          children: "Departments",
        }),
        i.jsx("button", {
          onClick: a,
          className: "VerticalNavBarButton",
          children: "Teachers",
        }),
        i.jsx("button", {
          onClick: r,
          className: "VerticalNavBarButton",
          children: "Students",
        }),
        i.jsx("button", {
          onClick: l,
          className: "VerticalNavBarButton",
          children: "Employees",
        }),
      ],
    }),
  });
}
var Xf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Fd = pn.createContext && pn.createContext(Xf),
  LN = ["attr", "size", "title"];
function FN(e, t) {
  if (e == null) return {};
  var n = PN(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      (r = l[a]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function PN(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wi.apply(this, arguments)
  );
}
function Pd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Pd(Object(n), !0).forEach(function (r) {
          RN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Pd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function RN(e, t, n) {
  return (
    (t = TN(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TN(e) {
  var t = kN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kN(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zf(e) {
  return (
    e &&
    e.map((t, n) =>
      pn.createElement(t.tag, Qi({ key: n }, t.attr), Zf(t.child))
    )
  );
}
function zl(e) {
  return (t) =>
    pn.createElement(_N, Wi({ attr: Qi({}, e.attr) }, t), Zf(e.child));
}
function _N(e) {
  var t = (n) => {
    var { attr: r, size: a, title: l } = e,
      o = FN(e, LN),
      s = a || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      pn.createElement(
        "svg",
        Wi(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: u,
            style: Qi(Qi({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && pn.createElement("title", null, l),
        e.children
      )
    );
  };
  return Fd !== void 0
    ? pn.createElement(Fd.Consumer, null, (n) => t(n))
    : t(Xf);
}
function MN(e) {
  return zl({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M21 12a9 9 0 1 0 -9 9" }, child: [] },
      { tag: "path", attr: { d: "M3.6 9h16.8" }, child: [] },
      { tag: "path", attr: { d: "M3.6 15h7.9" }, child: [] },
      { tag: "path", attr: { d: "M11.5 3a17 17 0 0 0 0 18" }, child: [] },
      {
        tag: "path",
        attr: { d: "M12.5 3a16.984 16.984 0 0 1 2.574 8.62" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" },
        child: [],
      },
      { tag: "path", attr: { d: "M20.2 20.2l1.8 1.8" }, child: [] },
    ],
  })(e);
}
const Bn = "GlobalSearch";
function ON() {
  const e = Et(),
    [t, n] = f.useState("Global Search"),
    [r, a] = f.useState(""),
    [l, o] = f.useState([]);
  f.useEffect(() => {
    if (!r) return o([]);
  }, [r]);
  const s = (d) => (
      d.preventDefault(),
      !r || r === void 0 || r === ""
        ? n("Enter a value to search")
        : (a(""), e("/searchResults", { state: { suggestions: l } }))
    ),
    u = (d) => {
      d.preventDefault();
    },
    c = (d) => (n("Search"), a(d.target.value));
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: `${Bn}Main`,
      children: [
        i.jsxs("form", {
          id: `${Bn}Form`,
          onSubmit: s,
          children: [
            i.jsxs("label", {
              id: `${Bn}Label`,
              children: [
                i.jsx(MN, { onClick: s, id: "TbWorldSearch" }),
                i.jsx("input", {
                  id: `${Bn}Input`,
                  type: "text",
                  value: r,
                  placeholder: t,
                  onChange: (d) => c(d),
                }),
              ],
            }),
            i.jsx("button", {
              type: "submit",
              id: `${Bn}Button`,
              children: "submit",
            }),
          ],
        }),
        i.jsx("ul", {
          id: `${Bn}SuggestionsUl`,
          children:
            l.length !== 0
              ? l.map((d) =>
                  i.jsx(
                    "li",
                    {
                      className: `${Bn}SuggestionsUlLi`,
                      children: i.jsx("button", {
                        onClick: u,
                        value: d,
                        className: `${Bn}SuggestionsUlLiButton`,
                        children: d,
                      }),
                    },
                    l.indexOf(d)
                  )
                )
              : "",
        }),
      ],
    }),
  });
}
function bN(e) {
  return zl({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",
        },
        child: [],
      },
    ],
  })(e);
}
function UN(e) {
  return zl({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "circle",
        attr: {
          cx: "256",
          cy: "256",
          r: "208",
          fill: "none",
          strokeMiterlimit: "10",
          strokeWidth: "32",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M256 176v160a80 80 0 0 0 0-160zm0-128v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z",
        },
        child: [],
      },
    ],
  })(e);
}
const Qo = "HomeButton";
function zN() {
  Et();
  const e = () => {};
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      className: `${Qo}Main`,
      children: i.jsx(Lg, {
        id: `${Qo}Button`,
        onClick: e,
        children: i.jsx(bN, { id: `${Qo}IoHome` }),
      }),
    }),
  });
}
function AN(e) {
  return zl({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M18 20a6 6 0 0 0-12 0" }, child: [] },
      { tag: "circle", attr: { cx: "12", cy: "10", r: "4" }, child: [] },
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" }, child: [] },
    ],
  })(e);
}
const BN = "ProfileButton";
function HN() {
  const e = Et(),
    t = (n) => {
      n.preventDefault(), e("/profile");
    };
  return i.jsx(i.Fragment, {
    children: i.jsx("button", {
      id: `${BN}Button`,
      onClick: t,
      children: i.jsx(AN, { id: "ProfileButtonLuUserCircle2" }),
    }),
  });
}
function $N(e) {
  return zl({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" },
        child: [],
      },
      { tag: "polyline", attr: { points: "16 17 21 12 16 7" }, child: [] },
      {
        tag: "line",
        attr: { x1: "21", y1: "12", x2: "9", y2: "12" },
        child: [],
      },
    ],
  })(e);
}
const VN = "LogoutButton";
function qN() {
  const e = Et(),
    t = tn(),
    n = (r) => {
      r.preventDefault(), t(xN()), e("/");
    };
  return i.jsx(i.Fragment, {
    children: i.jsx("button", {
      id: `${VN}Button`,
      onClick: n,
      children: i.jsx($N, { id: "LogoutButtonFiLogOut", children: "Logout" }),
    }),
  });
}
const WN = "ModeButton";
function QN() {
  const e = (t) => {
    t.preventDefault();
  };
  return i.jsx(i.Fragment, {
    children: i.jsx("button", {
      id: `${WN}Button`,
      onClick: e,
      children: i.jsx(UN, { id: "ModeButtonIoInvertMode" }),
    }),
  });
}
function KN() {
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "HorizontalNavBarMain",
      children: [
        i.jsx(zN, {}),
        i.jsx(QN, {}),
        i.jsx(ON, {}),
        i.jsx(HN, {}),
        i.jsx(qN, {}),
      ],
    }),
  });
}
function YN() {
  const e = kn((t) => t.session.user);
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "NavigationMain",
      children: [i.jsx(KN, { user: e }), i.jsx(IN, {})],
    }),
  });
}
function GN() {
  const e = tn(),
    t = (n) => {
      n.preventDefault,
        e(Yf({ credential: "Demo-lition", password: "password" }));
    };
  return i.jsx(i.Fragment, {
    children: i.jsx("button", {
      onClick: t,
      id: "DemoRegistrarLoginButton",
      children: "Demo Registrar Login",
    }),
  });
}
function XN() {
  const e = tn();
  kn((u) => u.session.user);
  const [t, n] = f.useState(""),
    [r, a] = f.useState(""),
    [l, o] = f.useState({}),
    s = (u) => (
      u.preventDefault(),
      o({}),
      e(Yf({ credential: t, password: r })).catch(async (c) => {
        const d = await c.json();
        d && d.errors && o(d.errors);
      })
    );
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "LoginFormMain",
      children: [
        i.jsx("h1", { id: "LoginFormH1", children: "Log In" }),
        i.jsxs("form", {
          onSubmit: s,
          id: "LoginFormForm",
          children: [
            i.jsxs("label", {
              className: "LoginFormLabel",
              children: [
                "Username or Email",
                i.jsx("input", {
                  className: "LoginFormInput",
                  type: "text",
                  value: t,
                  onChange: (u) => n(u.target.value),
                  required: !0,
                }),
              ],
            }),
            i.jsxs("label", {
              className: "LoginFormLabel",
              children: [
                "Password",
                i.jsx("input", {
                  className: "LoginFormInput",
                  type: "password",
                  value: r,
                  onChange: (u) => a(u.target.value),
                  required: !0,
                }),
              ],
            }),
            l.credential && i.jsx("p", { children: l.credential }),
            i.jsx("button", {
              id: "LoginFormButton",
              type: "submit",
              children: "Submit",
            }),
          ],
        }),
        i.jsx(GN, {}),
      ],
    }),
  });
}
const Jf = () => {
  const e = tn(),
    [t, n] = f.useState(""),
    [r, a] = f.useState(""),
    [l, o] = f.useState(""),
    [s, u] = f.useState(""),
    [c, d] = f.useState(""),
    [p, y] = f.useState(""),
    [N, D] = f.useState({}),
    S = (C) => (
      C.preventDefault(),
      p === c
        ? (D({}),
          e(
            EN({
              firstName: t,
              lastName: r,
              email: l,
              username: s,
              password: c,
            })
          ).catch(async (h) => {
            const m = await h.json();
            m != null && m.errors && D(m.errors);
          }))
        : D({
            confirmPassword:
              "Confirm Password field must be the same as the Password field",
          })
    );
  return i.jsxs("main", {
    id: "SignupFormModalMain",
    children: [
      i.jsx("div", { id: "SignupFormDivBanner" }),
      i.jsxs("form", {
        id: "SignupForm",
        onSubmit: S,
        children: [
          i.jsx("h2", { id: "SignupFormH2", children: "Sign Up" }),
          i.jsxs("div", {
            id: "firstNameContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.firstName,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "first name:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "firstName",
                    name: "firstName",
                    type: "text",
                    value: t,
                    onChange: (C) => n(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.firstName && i.jsx("p", { children: N.firstName }),
          i.jsxs("div", {
            id: "lastNameContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.lastName,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "last name:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "lastName",
                    name: "lastName",
                    value: r,
                    type: "text",
                    onChange: (C) => a(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.lastName && i.jsx("p", { children: N.lastName }),
          i.jsxs("div", {
            id: "emailContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.email,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "email:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "email",
                    name: "email",
                    value: l,
                    type: "text",
                    onChange: (C) => o(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.email && i.jsx("p", { children: N.email }),
          i.jsxs("div", {
            id: "userNameContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.username,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "username:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "username",
                    name: "username",
                    value: s,
                    type: "username",
                    onChange: (C) => u(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.username && i.jsx("p", { children: N.username }),
          i.jsxs("div", {
            id: "passwordContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.password,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "password:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "password",
                    name: "password",
                    value: c,
                    type: "password",
                    onChange: (C) => d(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.password && i.jsx("p", { children: N.password }),
          i.jsxs("div", {
            id: "confirmPasswordContainer",
            children: [
              i.jsx("div", {
                className: "SignUpFormErrors",
                children: N.confirmPassword,
              }),
              i.jsxs("label", {
                className: "SignupFormLabel",
                children: [
                  "confirm password:",
                  i.jsx("input", {
                    className: "SignupFormInput",
                    id: "confirmPassword",
                    name: "confirmPassword",
                    value: p,
                    type: "password",
                    onChange: (C) => y(C.target.value),
                    required: !0,
                  }),
                ],
              }),
            ],
          }),
          N.confirmPassword && i.jsx("p", { children: N.confirmPassword }),
          i.jsx("div", {
            id: "buttonContainer",
            children: i.jsx("button", {
              id: "SignupFormModalButton",
              type: "submit",
              children: "Sign Up",
            }),
          }),
        ],
      }),
    ],
  });
};
function ZN() {
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "SplashMain",
      children: [
        i.jsx("div", {
          id: "SplashDivBanner",
          children: i.jsx("h1", {
            id: "SplashH1",
            children: "Welcome To Do Reg Mi",
          }),
        }),
        i.jsxs("div", {
          id: "SplashDivLoginSignupContainer",
          children: [i.jsx(XN, {}), i.jsx(Jf, {})],
        }),
      ],
    }),
  });
}
function JN() {
  const e = tn(),
    t = kn((a) => a.session.user),
    [n, r] = f.useState(!1);
  return (
    f.useEffect(() => {
      e(gN()).then(() => r(!0));
    }, [e]),
    i.jsx(i.Fragment, {
      children: i.jsxs(wN, {
        children: [
          t ? i.jsx(YN, {}) : i.jsx(ZN, {}),
          t && i.jsx(og, {}),
          i.jsx(jN, {}),
        ],
      }),
    })
  );
}
const e0 = () => {
  const [e, t] = f.useState(new Date().toLocaleTimeString("en-US"));
  f.useEffect(() => {
    document.title = e;
    const r = setInterval(() => n(), 1e3);
    return () => {
      clearInterval(r);
    };
  }, [e]);
  const n = () => {
    t(new Date().toLocaleTimeString("en-US"));
  };
  return i.jsx("div", { children: e });
};
function t0() {
  const e = kn((t) => t.session.user);
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "HomeMain",
      children: [
        i.jsxs("h2", {
          id: "HomeH2",
          children: ["Welcome back ", e.username, "!"],
        }),
        i.jsxs("div", {
          id: "HomeDiv",
          children: [
            i.jsx("div", {
              id: "HomeDivClock",
              children: i.jsx(e0, { id: "HomeClock" }),
            }),
            i.jsx("h3", { id: "HomeH3", children: "Current Local Time" }),
          ],
        }),
      ],
    }),
  });
}
function n0(e) {
  const t = e.info[0],
    n = e.info[1],
    r = ":",
    a = "- -";
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      id: "firstNameContainer",
      className: "ProfileDetailsFormLabelInputContainer",
      children: [
        i.jsx("div", { className: "ProfileDetailsFormLabel", children: t }),
        i.jsx("div", {
          className: "ProfileDetailsFormInfoDivider",
          children: r,
        }),
        i.jsx("div", {
          className: "ProfileDetailsFormInput",
          children: n || a,
        }),
      ],
    }),
  });
}
function r0(e) {
  const t = e.profile,
    n = Object.entries(t);
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("div", {
        id: "ProfileDetailsForm",
        children: i.jsxs("section", {
          id: "ProfileDetailsFormSection1",
          children: [
            i.jsx("h4", {
              id: "ProfileDetailsFormSection1H4",
              children: "Personal Information",
            }),
            n.map((r) => {
              const a = r[0],
                l = r[1];
              return i.jsx(n0, { info: [a, l] }, a);
            }),
          ],
        }),
      }),
      " ",
    ],
  });
}
const Rd = "ProfilePage";
function a0() {
  const e = kn((t) => t.session.user);
  return i.jsx(i.Fragment, {
    children: i.jsxs(i.Fragment, {
      children: [
        i.jsx("h1", { id: `${Rd}H1`, children: "Your Profile " }),
        i.jsx("main", {
          id: `${Rd}Main`,
          children: i.jsx("div", { children: i.jsx(r0, { profile: e }) }),
        }),
      ],
    }),
  });
}
function l0() {
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      children: i.jsx("div", {
        children: i.jsx("h1", { children: "This is Resources!" }),
      }),
    }),
  });
}
function i0() {
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      children: i.jsx("div", {
        children: i.jsx("h1", { children: "This is Teachers!" }),
      }),
    }),
  });
}
function o0() {
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      children: i.jsx("div", {
        children: i.jsx("h1", { children: "This is Students!" }),
      }),
    }),
  });
}
function s0({ employee: e }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: "EmployeeListIndexContainer",
        children: [
          i.jsx("div", {
            className: "EmployeesListItemContainerID",
            children: i.jsxs("p", {
              className: "EmployeesListItemP",
              children: [" ", e.id ? e.id : "-"],
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerName",
            children: i.jsx(Pr, {
              to: `/employees/${e.id}`,
              state: { employee: e },
              className: "EmployeesListItemP",
              children: e.firstName + " " + e.lastName,
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerStreet",
            children: i.jsx("p", {
              className: "EmployeesListItemP",
              children: e.street ? e.street : "-",
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerCity",
            children: i.jsx("p", {
              className: "EmployeesListItemP",
              children: e.city ? e.city : "-",
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerState",
            children: i.jsx("p", {
              className: "EmployeesListItemP",
              children: e.state ? e.state : "-",
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerZip",
            children: i.jsx("p", {
              className: "EmployeesListItemP",
              children: e.zip ? e.zip : "-",
            }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerPhone",
            children: e.phone
              ? i.jsx(Pr, {
                  to: `tel:${e.phone}`,
                  className: "EmployeesListItemP",
                  children: e.phone,
                })
              : i.jsx("p", { className: "EmployeesListItemP", children: "-" }),
          }),
          i.jsx("div", {
            className: "EmployeesListItemContainerEmail",
            children: e.email
              ? i.jsx(Pr, {
                  to: `mailto:${e.email}`,
                  className: "EmployeesListItemP",
                  children: e.email,
                })
              : i.jsx("p", { className: "EmployeesListItemP", children: "-" }),
          }),
        ],
      }),
      i.jsx("div", { className: "EmployeeListIndexBorder" }),
    ],
  });
}
function u0({ employeesPerPage: e, totalPages: t, paginate: n }) {
  let r = [];
  for (let a = 1; a < Math.ceil(t / e); a++) r.push(a);
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className: "pagination",
      children: r.map((a, l) =>
        i.jsx("a", { onClick: () => n(a), href: "#", children: a }, l)
      ),
    }),
  });
}
function c0() {
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "EmployeesListItemHeaderContainer",
      children: [
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerID",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "ID",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerName",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "Name",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerStreet",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "Street",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerCity",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "City",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerState",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "State",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerZip",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "Zip",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerPhone",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "Phone",
          }),
        }),
        i.jsx("div", {
          className: "EmployeesListItemHeaderItemContainerEmail",
          children: i.jsx("h4", {
            className: "EmployeesListItemHeaderItemH4",
            children: "Email",
          }),
        }),
      ],
    }),
  });
}
function d0() {
  let e = kn((c) => {
    var d;
    return (d = c == null ? void 0 : c.employees) == null
      ? void 0
      : d.employees;
  });
  const [t, n] = f.useState(1),
    [r, a] = f.useState(30);
  a(30);
  const l = t * r,
    o = l - r;
  let s;
  (e !== void 0 && e.length !== 0) ||
    (e = [{ test1: "test1" }, { test2: "test" }]),
    (s = e.slice(o, l));
  const u = (c) => n(c);
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      className: "EmployeeListMain",
      children: [
        i.jsx(c0, {}),
        i.jsxs("div", {
          className: "EmployeeListContainer",
          children: [
            s.map((c, d) =>
              i.jsx(
                s0,
                { employee: c, totalPages: e.length, employeesPerPage: r },
                d
              )
            ),
            i.jsx(u0, {
              employeesPerPage: r,
              totalPages: e.length,
              paginate: u,
            }),
          ],
        }),
      ],
    }),
  });
}
function m0() {
  const e = Et(),
    t = (n) => {
      n.preventDefault(), e("/createNewEmployeeForm");
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("h1", { id: "EmployeesH1", children: "Employees" }),
      i.jsxs("main", {
        id: "EmployeesMain",
        children: [
          i.jsx("nav", {
            id: "EmployeesNav",
            children: i.jsx("button", {
              id: "EmployeesCreateButton",
              onClick: t,
              children: "Create New Employee",
            }),
          }),
          i.jsx(d0, {}),
        ],
      }),
    ],
  });
}
function p0() {
  const e = "*",
    t = tn(),
    n = Et(),
    [r, a] = f.useState({}),
    [l, o] = f.useState({}),
    [s, u] = f.useState({}),
    [c, d] = f.useState({}),
    [p, y] = f.useState({}),
    [N, D] = f.useState({}),
    [S, C] = f.useState({}),
    [h, m] = f.useState({}),
    [E, j] = f.useState({}),
    [T, _] = f.useState({}),
    [O, g] = f.useState({}),
    [H, b] = f.useState({}),
    [W, ae] = f.useState({}),
    [me, oe] = f.useState({}),
    [Ve, be] = f.useState({}),
    [at, M] = f.useState({});
  let F = {
    firstName: null,
    nickName: null,
    middleName: null,
    lastName: null,
    familyName: null,
    email: null,
    phone: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    dob: null,
    age: null,
    ssn: null,
    employeeDepartment_Id: null,
    academicDepartment_Id: null,
    level_Id: null,
    primaryTitle: null,
    primaryStartDate: null,
    primaryEndDate: null,
    primaryPayRate: null,
    firstLang: null,
    secondLang: null,
    thirdLang: null,
    firstInst: null,
    secondInst: null,
    thirdInst: null,
    biography: null,
    notes: null,
    secondaryTitle: null,
    secondaryStartDate: null,
    secondaryEndDate: null,
    secondaryPayRate: null,
    tertiaryTitle: null,
    tertiaryStartDate: null,
    tertiaryEndDate: null,
    tertiaryPayRate: null,
    quarternaryTitle: null,
    quarternaryStartDate: null,
    quarternaryEndDate: null,
    quarternaryPayRate: null,
  };
  const [V, U] = f.useState(""),
    [J, ke] = f.useState(""),
    [he, gt] = f.useState(""),
    [se, qe] = f.useState(""),
    [We, Ia] = f.useState(""),
    [Ht, La] = f.useState(""),
    [nn, Fa] = f.useState(""),
    [ve, rn] = f.useState(""),
    [an, Pa] = f.useState(""),
    [Xe, Ra] = f.useState(""),
    [Ft, Hr] = f.useState(""),
    [hn, Ta] = f.useState(""),
    [$t, ka] = f.useState(""),
    [lt, vn] = f.useState(""),
    [it, cr] = f.useState(""),
    [_e, xt] = f.useState(""),
    [ot, On] = f.useState(""),
    [ln, Pt] = f.useState(""),
    [Vt, $r] = f.useState(""),
    [on, _a] = f.useState(""),
    [Rt, bn] = f.useState(""),
    [qt, dr] = f.useState(""),
    [Tt, mr] = f.useState(""),
    [En, Vr] = f.useState(""),
    [gn, qr] = f.useState(""),
    [kt, Un] = f.useState(""),
    [sn, Ma] = f.useState(""),
    [Wt, v] = f.useState(""),
    [x, w] = f.useState(""),
    [I, z] = f.useState(""),
    [A, q] = f.useState(""),
    [k, Q] = f.useState(""),
    [$, K] = f.useState(""),
    [Z, ne] = f.useState(""),
    [ee, te] = f.useState(""),
    [de, Ee] = f.useState(""),
    [Ze, _t] = f.useState(""),
    [st, un] = f.useState(""),
    [ut, ct] = f.useState(""),
    [dt, zn] = f.useState(""),
    [mt, Y] = f.useState(""),
    ue = () => {
      let P = !1,
        ze = !1,
        L = !1,
        Ie = !1,
        Pe = !1;
      return (
        V
          ? ((P = !1), o({}))
          : ((P = !0), o({ firstName: "First Name 1 is required" })),
        se
          ? ((ze = !1), u({}))
          : ((ze = !0), u({ lastName: "Last Name 1 is required" })),
        nn
          ? ((L = !1), d({}))
          : ((L = !0), d({ phone: "Personal Phone is required" })),
        qt
          ? ((Ie = !1), y({}))
          : ((Ie = !0), y({ firstLang: "First Language is required" })),
        lt ? ((Pe = !1), D({})) : ((Pe = !0), D({ ssn: "SSN is required" })),
        !!(P || ze || L || Ie || Pe)
      );
    },
    Ue = () => {
      let P = parseInt(it),
        ze = parseInt(_e),
        L = parseInt(ot),
        Ie = parseInt($t),
        Pe = parseInt(Ft),
        Mt = parseInt(Rt),
        xn = parseInt($),
        Oa = parseInt(Ze),
        ba = parseInt(mt),
        Wr = !1,
        Qr = !1,
        pr = !1,
        fr = !1,
        yr = !1,
        hr = !1,
        vr = !1,
        Er = !1,
        gr = !1;
      return (
        it !== "" && (typeof P != "number" || isNaN(P))
          ? ((Wr = !0),
            m({
              employeeDepartment_Id:
                "Employee Department ID must be an integer",
            }))
          : ((Wr = !1), m({})),
        _e !== "" && (typeof ze != "number" || isNaN(ze))
          ? ((Qr = !0),
            j({
              academicDepartment_Id:
                "Academic Department ID must be an integer",
            }))
          : ((Qr = !1), j({})),
        ot !== "" && (typeof L != "number" || isNaN(L))
          ? ((pr = !0), _({ level_Id: "User Type ID must be an integer" }))
          : ((pr = !1), _({})),
        $t !== "" && (typeof Ie != "number" || isNaN(Ie))
          ? ((fr = !0), g({ age: "Age must be an integer" }))
          : ((fr = !1), g({})),
        Ft !== "" && (typeof Pe != "number" || isNaN(Pe))
          ? ((yr = !0), b({ zip: "Zip must be an integer" }))
          : ((yr = !1), b({})),
        Rt !== "" && (typeof Mt != "number" || isNaN(Mt))
          ? ((hr = !0),
            ae({ primaryPayRate: "Primary Pay Rate must be an integer" }))
          : ((hr = !1), ae({})),
        $ !== "" && (typeof xn != "number" || isNaN(xn))
          ? ((vr = !0),
            oe({ secondaryPayRate: "Secondary Pay Rate must be an integer" }))
          : ((vr = !1), oe({})),
        Ze !== "" && (typeof Oa != "number" || isNaN(Oa))
          ? ((Er = !0),
            be({ tertiaryPayRate: "Tertiary Pay Rate must be an integer" }))
          : ((Er = !1), be({})),
        mt !== "" && (typeof ba != "number" || isNaN(ba))
          ? ((gr = !0),
            M({
              quarternaryPayRate: "Quarternary Pay Rate must be an integer",
            }))
          : ((gr = !1), M({})),
        !!(Wr || Qr || pr || fr || yr || hr || vr || Er || gr)
      );
    },
    le = async (P) => {
      if ((P.preventDefault(), ue())) {
        C({ message: "Required field must be complete - see errors above." });
        return;
      } else C({});
      if (Ue()) {
        C({ message: "Field(s) must be integers - see errors above." });
        return;
      } else C({});
      it && (F.employeeDepartment_Id = it),
        _e && (F.academicDepartment_Id = _e),
        ot && (F.level_Id = ot),
        V && (F.firstName = V),
        J && (F.nickName = J),
        he && (F.middleName = he),
        se && (F.lastName = se),
        We && (F.familyName = We),
        Ht && (F.email = Ht),
        nn && (F.phone = nn),
        ve && (F.street = ve),
        an && (F.city = an),
        Xe && (F.state = Xe),
        Ft && (F.zip = Ft),
        hn && (F.dob = hn),
        $t && (F.age = $t),
        lt && (F.ssn = lt),
        qt && (F.firstLang = qt),
        Tt && (F.secondLang = Tt),
        En && (F.thirdLang = En),
        gn && (F.firstInst = gn),
        kt && (F.secondInst = kt),
        sn && (F.thirdInst = sn),
        ln && (F.primaryTitle = ln),
        Vt && (F.primaryStartDate = Vt),
        on && (F.primaryEndDate = on),
        Rt && (F.primaryPayRate = Rt),
        I && (F.secondaryTitle = I),
        A && (F.secondaryStartDate = A),
        k && (F.secondaryEndDate = k),
        $ && (F.secondaryPayRate = $),
        Z && (F.tertiaryTitle = Z),
        ee && (F.tertiaryStartDate = ee),
        de && (F.tertiaryEndDate = de),
        Ze && (F.tertiaryPayRate = Ze),
        st && (F.quarternaryTitle = st),
        ut && (F.quarternaryStartDate = ut),
        dt && (F.quarternaryEndDate = dt),
        mt && (F.quarternaryPayRate = mt),
        Wt && (F.biography = Wt),
        x && (F.notes = x);
      let ze;
      await t(tN(F))
        .then((L) => L)
        .then((L) => ((ze = L.payload[0].id), t(Tr()), ze))
        .catch(async (L) => {
          const Ie = await L.json();
          Ie.errors && a(Ie.errors);
        }),
        await t(Tr())
          .then((L) => (t($f(ze)), L))
          .then((L) => (t(Tr()), L))
          .then((L) => (n(`/employees/${ze}`), L));
    };
  return i.jsxs("main", {
    id: "CreateNewEmployeeMain",
    children: [
      i.jsx("h1", {
        id: "CreateNewEmployeeH1",
        children: "Create A New Employee",
      }),
      i.jsxs("form", {
        id: "CreateNewEmployeeForm",
        onSubmit: le,
        children: [
          i.jsxs("section", {
            id: "CreateNewEmployeeFormSection1",
            children: [
              i.jsx("h4", {
                id: "CreateNewEmployeeFormSection1H4",
                children: "Personal Information",
              }),
              i.jsx("p", {
                id: "CreateNewEmployeeFormSection1P",
                children: "Enter personal information for new employee.",
              }),
              i.jsx("h5", {
                className: "CreateNewEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "firstNameContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeFormLabel",
                    children: [
                      "First Name 1:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeFormInput",
                        id: "firstName",
                        name: "firstName",
                        type: "text",
                        placeholder: "First Name 1",
                        value: V,
                        onChange: (P) => U(P.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.firstName &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: l.firstName,
                }),
              i.jsx("div", {
                id: "nickNameContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "First Name 2:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "nickName",
                      name: "nickName",
                      type: "text",
                      placeholder: "First Name 2",
                      value: J,
                      onChange: (P) => ke(P.target.value),
                    }),
                  ],
                }),
              }),
              r.nickName &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.nickName,
                }),
              i.jsx("div", {
                id: "middleNameContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Middle Name:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "middleName",
                      name: "middleName",
                      type: "text",
                      placeholder: "Middle Name",
                      value: he,
                      onChange: (P) => gt(P.target.value),
                    }),
                  ],
                }),
              }),
              r.middleName &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.middleName,
                }),
              i.jsxs("div", {
                id: "lastNameContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeFormLabel",
                    children: [
                      "Last Name 1:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeFormInput",
                        id: "lastName",
                        name: "lastName",
                        type: "text",
                        placeholder: "Last Name 1",
                        value: se,
                        onChange: (P) => qe(P.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              s.lastName &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: s.lastName,
                }),
              i.jsx("div", {
                id: "familyNameContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Last Name 2:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "familyName",
                      name: "familyName",
                      type: "text",
                      placeholder: "Last Name 2",
                      value: We,
                      onChange: (P) => Ia(P.target.value),
                    }),
                  ],
                }),
              }),
              r.familyName &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.familyName,
                }),
              i.jsx("div", {
                id: "emailContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Personal Email:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "email",
                      name: "email",
                      type: "text",
                      placeholder: "Personal Email",
                      value: Ht,
                      onChange: (P) => La(P.target.value),
                    }),
                  ],
                }),
              }),
              r.email &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.email,
                }),
              i.jsxs("div", {
                id: "phoneContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeFormLabel",
                    children: [
                      "Personal Phone:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeFormInput",
                        id: "phone",
                        name: "phone",
                        type: "text",
                        placeholder: "Personal Phone",
                        value: nn,
                        onChange: (P) => Fa(P.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              c.phone &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: c.phone,
                }),
              i.jsx("div", {
                id: "streetContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Street:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "street",
                      name: "street",
                      type: "text",
                      placeholder: "Street",
                      value: ve,
                      onChange: (P) => rn(P.target.value),
                    }),
                  ],
                }),
              }),
              r.street &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.street,
                }),
              i.jsx("div", {
                id: "cityContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "City:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "city",
                      name: "city",
                      type: "text",
                      placeholder: "City",
                      value: an,
                      onChange: (P) => Pa(P.target.value),
                    }),
                  ],
                }),
              }),
              r.city &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.city,
                }),
              i.jsx("div", {
                id: "stateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "State:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "state",
                      name: "state",
                      type: "text",
                      placeholder: "State",
                      value: Xe,
                      onChange: (P) => Ra(P.target.value),
                    }),
                  ],
                }),
              }),
              r.state &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.state,
                }),
              i.jsx("div", {
                id: "zipContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Zip:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "zip",
                      name: "zip",
                      type: "text",
                      placeholder: "Zip",
                      value: Ft,
                      onChange: (P) => Hr(P.target.value),
                    }),
                  ],
                }),
              }),
              H.zip &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: H.zip,
                }),
              i.jsx("div", {
                id: "dobContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Date Of Birth  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "dob",
                      name: "dob",
                      type: "text",
                      placeholder: "Date Of Birth  (mm/dd/yyyy)",
                      value: hn,
                      onChange: (P) => Ta(P.target.value),
                    }),
                  ],
                }),
              }),
              r.dob &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.dob,
                }),
              i.jsx("div", {
                id: "ageContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Age:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "age",
                      name: "age",
                      type: "text",
                      placeholder: "Age",
                      value: $t,
                      onChange: (P) => ka(P.target.value),
                    }),
                  ],
                }),
              }),
              O.age &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: O.age,
                }),
              i.jsxs("div", {
                id: "ssnContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeFormLabel",
                    children: [
                      "SSN:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeFormInput",
                        id: "ssn",
                        name: "ssn",
                        type: "text",
                        placeholder: "SSN",
                        value: lt,
                        onChange: (P) => vn(P.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              N.ssn &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: N.ssn,
                }),
            ],
          }),
          i.jsx("hr", { className: "CreateNewEmployeeHr" }),
          i.jsxs("section", {
            id: "CreateNewEmployeeFormSection2",
            children: [
              i.jsx("h4", {
                id: "CreateNewEmployeeFormSection2H4",
                children: "Employment Information",
              }),
              i.jsx("p", {
                id: "CreateNewEmployeeFormSection2P",
                children: "Enter employment information for new employee.",
              }),
              i.jsx("h5", {
                className: "CreateNewEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsx("div", {
                id: "employeeDepartment_IdContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Employee Department ID:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "employeeDepartment_Id",
                      name: "employeeDepartment_Id",
                      type: "text",
                      placeholder: "Employee Department ID",
                      value: it,
                      onChange: (P) => cr(P.target.value),
                    }),
                  ],
                }),
              }),
              h.employeeDepartment_Id &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: h.employeeDepartment_Id,
                }),
              i.jsx("div", {
                id: "academicDepartment_IdContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Academic Department ID:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "academicDepartment_Id",
                      name: "academicDepartment_Id",
                      type: "text",
                      placeholder: "Academic Department ID",
                      value: _e,
                      onChange: (P) => xt(P.target.value),
                    }),
                  ],
                }),
              }),
              E.academicDepartment_Id &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: E.academicDepartment_Id,
                }),
              i.jsx("div", {
                id: "level_IdContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "User Type ID:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "level_Id",
                      name: "level_Id",
                      type: "text",
                      placeholder: "User Type ID",
                      value: ot,
                      onChange: (P) => On(P.target.value),
                    }),
                  ],
                }),
              }),
              T.level_Id &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: T.level_Id,
                }),
              i.jsx("div", {
                id: "primaryTitleContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Primary Title:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "primaryTitle",
                      name: "primaryTitle",
                      type: "text",
                      placeholder: "Primary Title",
                      value: ln,
                      onChange: (P) => Pt(P.target.value),
                    }),
                  ],
                }),
              }),
              r.primaryTitle &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.primaryTitle,
                }),
              i.jsx("div", {
                id: "primaryStartDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Primary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "primaryStartDate",
                      name: "primaryStartDate",
                      type: "text",
                      placeholder: "Primary Start Date  (mm/dd/yyyy)",
                      value: Vt,
                      onChange: (P) => $r(P.target.value),
                    }),
                  ],
                }),
              }),
              r.primaryStartDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.primaryStartDate,
                }),
              i.jsx("div", {
                id: "primaryEndDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Primary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "primaryEndDate",
                      name: "primaryEndDate",
                      type: "text",
                      placeholder: "Primary End Date",
                      value: on,
                      onChange: (P) => _a(P.target.value),
                    }),
                  ],
                }),
              }),
              r.primaryEndDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.primaryEndDate,
                }),
              i.jsx("div", {
                id: "primaryPayRateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Primary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "primaryPayRate",
                      name: "primaryPayRate",
                      type: "text",
                      placeholder: "Primary Pay Rate $ (USD)",
                      value: Rt,
                      onChange: (P) => bn(P.target.value),
                    }),
                  ],
                }),
              }),
              W.primaryPayRate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: W.primaryPayRate,
                }),
            ],
          }),
          i.jsx("hr", { className: "CreateNewEmployeeHr" }),
          i.jsxs("section", {
            id: "CreateNewEmployeeFormSection3",
            children: [
              i.jsx("h4", {
                id: "CreateNewEmployeeFormSection3H4",
                children: "Biographical Information",
              }),
              i.jsx("p", {
                id: "CreateNewEmployeeFormSection3P",
                children: "Enter biographical information for new employee.",
              }),
              i.jsx("h5", {
                className: "CreateNewEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "firstLangContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeFormLabel",
                    children: [
                      "First Language:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeFormInput",
                        id: "firstLang",
                        name: "firstLang",
                        type: "text",
                        placeholder: "First Language",
                        value: qt,
                        onChange: (P) => dr(P.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.firstLang &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: p.firstLang,
                }),
              i.jsx("div", {
                id: "secondLangContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Second Language:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondLang",
                      name: "secondLang",
                      type: "text",
                      placeholder: "Second Language",
                      value: Tt,
                      onChange: (P) => mr(P.target.value),
                    }),
                  ],
                }),
              }),
              r.secondLang &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.secondLang,
                }),
              i.jsx("div", {
                id: "thirdLangContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Third Language:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "thirdLang",
                      name: "thirdLang",
                      type: "text",
                      placeholder: "Third Language",
                      value: En,
                      onChange: (P) => Vr(P.target.value),
                    }),
                  ],
                }),
              }),
              r.thirdLang &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.thirdLang,
                }),
              i.jsx("div", {
                id: "firstInstContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "First Instrument:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "firstInst",
                      name: "firstInst",
                      type: "text",
                      placeholder: "First Instrument",
                      value: gn,
                      onChange: (P) => qr(P.target.value),
                    }),
                  ],
                }),
              }),
              r.firstInst &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.firstInst,
                }),
              i.jsx("div", {
                id: "secondInstContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Second Instrument:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondInst",
                      name: "secondInst",
                      type: "text",
                      placeholder: "Second Instrument",
                      value: kt,
                      onChange: (P) => Un(P.target.value),
                    }),
                  ],
                }),
              }),
              r.secondInst &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.secondInst,
                }),
              i.jsx("div", {
                id: "thirdInstContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Third Instrument:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "thirdInst",
                      name: "thirdInst",
                      type: "text",
                      placeholder: "Third Instrument",
                      value: sn,
                      onChange: (P) => Ma(P.target.value),
                    }),
                  ],
                }),
              }),
              r.thirdInst &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.thirdInst,
                }),
              i.jsx("div", {
                id: "biographyContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Biography:",
                    i.jsx("textarea", {
                      className: "CreateNewEmployeeFormInput",
                      id: "biography",
                      name: "biography",
                      rows: 8,
                      cols: 40,
                      type: "text-area",
                      placeholder: "Enter biography here",
                      value: Wt,
                      onChange: (P) => v(P.target.value),
                    }),
                  ],
                }),
              }),
              r.biography &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.biography,
                }),
              i.jsx("div", {
                id: "notesContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Notes:",
                    i.jsx("textarea", {
                      className: "CreateNewEmployeeFormInput",
                      id: "notes",
                      name: "notes",
                      rows: 8,
                      cols: 40,
                      type: "text-area",
                      placeholder: "Enter notes here",
                      value: x,
                      onChange: (P) => w(P.target.value),
                    }),
                  ],
                }),
              }),
              r.notes &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.notes,
                }),
            ],
          }),
          i.jsx("hr", { className: "CreateNewEmployeeHr" }),
          i.jsxs("section", {
            id: "CreateNewEmployeeFormSection4",
            children: [
              i.jsx("h4", {
                id: "CreateNewEmployeeFormSection4H4",
                children: "Additional Employment Information",
              }),
              i.jsx("p", {
                id: "CreateNewEmployeeFormSection4P",
                children:
                  "Enter additional employment information for new employee.",
              }),
              i.jsx("h5", {
                className: "CreateNewEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsx("div", {
                id: "secondaryTitleContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Secondary Title:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondaryTitle",
                      name: "secondaryTitle",
                      type: "text",
                      placeholder: "Secondary Title",
                      value: I,
                      onChange: (P) => z(P.target.value),
                    }),
                  ],
                }),
              }),
              r.secondaryTitle &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.secondaryTitle,
                }),
              i.jsx("div", {
                id: "secondaryStartDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Secondary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondaryStartDate",
                      name: "secondaryStartDate",
                      type: "text",
                      placeholder: "Secondary Start Date",
                      value: A,
                      onChange: (P) => q(P.target.value),
                    }),
                  ],
                }),
              }),
              r.secondaryStartDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.secondaryStartDate,
                }),
              i.jsx("div", {
                id: "secondaryEndDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Secondary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondaryEndDate",
                      name: "secondaryEndDate",
                      type: "text",
                      placeholder:
                        "Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)",
                      value: k,
                      onChange: (P) => Q(P.target.value),
                    }),
                  ],
                }),
              }),
              r.secondaryEndDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.secondaryEndDate,
                }),
              i.jsx("div", {
                id: "secondaryPayRateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Secondary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "secondaryPayRate",
                      name: "secondaryPayRate",
                      type: "text",
                      placeholder: "Secondary Pay Rate $ (USD)",
                      value: $,
                      onChange: (P) => K(P.target.value),
                    }),
                  ],
                }),
              }),
              me.secondaryPayRate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: me.secondaryPayRate,
                }),
              i.jsx("div", {
                id: "tertiaryTitleContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Tertiary Title:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "tertiaryTitle",
                      name: "tertiaryTitle",
                      type: "text",
                      placeholder: "Tertiary Title",
                      value: Z,
                      onChange: (P) => ne(P.target.value),
                    }),
                  ],
                }),
              }),
              r.tertiaryTitle &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.tertiaryTitle,
                }),
              i.jsx("div", {
                id: "tertiaryStartDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Tertiary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "tertiaryStartDate",
                      name: "tertiaryStartDate",
                      type: "text",
                      placeholder: "Tertiary Start Date  (mm/dd/yyyy)",
                      value: ee,
                      onChange: (P) => te(P.target.value),
                    }),
                  ],
                }),
              }),
              r.tertiaryStartDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.tertiaryStartDate,
                }),
              i.jsx("div", {
                id: "tertiaryEndDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Tertiary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "tertiaryEndDate",
                      name: "tertiaryEndDate",
                      type: "text",
                      placeholder: "Tertiary End Date  (mm/dd/yyyy)",
                      value: de,
                      onChange: (P) => Ee(P.target.value),
                    }),
                  ],
                }),
              }),
              r.tertiaryEndDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.tertiaryEndDate,
                }),
              i.jsx("div", {
                id: "tertiaryPayRateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Tertiary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "tertiaryPayRate",
                      name: "tertiaryPayRate",
                      type: "text",
                      placeholder: "Tertiary Pay Rate $ (USD)",
                      value: Ze,
                      onChange: (P) => _t(P.target.value),
                    }),
                  ],
                }),
              }),
              Ve.tertiaryPayRate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: Ve.tertiaryPayRate,
                }),
              i.jsx("div", {
                id: "quarternaryTitleContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Quarternary Title:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "quarternaryTitle",
                      name: "quarternaryTitle",
                      type: "text",
                      placeholder: "Quarternary Title",
                      value: st,
                      onChange: (P) => un(P.target.value),
                    }),
                  ],
                }),
              }),
              r.quarternaryTitle &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.quarternaryTitle,
                }),
              i.jsx("div", {
                id: "quarternaryStartDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Quarternary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "quarternaryStartDate",
                      name: "quarternaryStartDate",
                      type: "text",
                      placeholder: "Quarternary Start Date  (mm/dd/yyyy)",
                      value: ut,
                      onChange: (P) => ct(P.target.value),
                    }),
                  ],
                }),
              }),
              r.quarternaryStartDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.quarternaryStartDate,
                }),
              i.jsx("div", {
                id: "quarternaryEndDateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Quarternary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "quarternaryEndDate",
                      name: "quarternaryEndDate",
                      type: "text",
                      placeholder: "Quarternary End Date  (mm/dd/yyyy)",
                      value: dt,
                      onChange: (P) => zn(P.target.value),
                    }),
                  ],
                }),
              }),
              r.quarternaryEndDate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: r.quarternaryEndDate,
                }),
              i.jsx("div", {
                id: "quarternaryPayRateContainer",
                className: "CreateNewEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeFormLabel",
                  children: [
                    "Quarternary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "CreateNewEmployeeFormInput",
                      id: "quarternaryPayRate",
                      name: "quarternaryPayRate",
                      type: "text",
                      placeholder: "Quarternary Pay Rate $ (USD)",
                      value: mt,
                      onChange: (P) => Y(P.target.value),
                    }),
                  ],
                }),
              }),
              at.quarternaryPayRate &&
                i.jsx("p", {
                  className: "CreateNewEmployeeErrors",
                  children: at.quarternaryPayRate,
                }),
            ],
          }),
          i.jsx("hr", { className: "CreateNewEmployeeHr" }),
          S.message &&
            i.jsx("p", {
              className: "CreateNewEmployeeRequiredErrors",
              children: S.message,
            }),
          i.jsx("div", {
            id: "buttonContainer",
            children: i.jsx("button", {
              id: "CreateNewEmployeeButton",
              type: "submit",
              onClick: le,
              children: "Create Employee",
            }),
          }),
        ],
      }),
    ],
  });
}
function f0() {
  const e = "*",
    t = tn(),
    n = Et(),
    r = Br(),
    { employeeToEdit: a } = r.state,
    [l, o] = f.useState({}),
    [s, u] = f.useState({}),
    [c, d] = f.useState({}),
    [p, y] = f.useState({}),
    [N, D] = f.useState({}),
    [S, C] = f.useState({}),
    [h, m] = f.useState({}),
    [E, j] = f.useState({}),
    [T, _] = f.useState({}),
    [O, g] = f.useState({}),
    [H, b] = f.useState({}),
    [W, ae] = f.useState({}),
    [me, oe] = f.useState({}),
    [Ve, be] = f.useState({}),
    [at, M] = f.useState({}),
    [F, V] = f.useState({});
  let U = {
    firstName: null,
    nickName: null,
    middleName: null,
    lastName: null,
    familyName: null,
    email: null,
    phone: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    dob: null,
    age: null,
    ssn: null,
    employeeDepartment_Id: null,
    academicDepartment_Id: null,
    level_Id: null,
    primaryTitle: null,
    primaryStartDate: null,
    primaryEndDate: null,
    primaryPayRate: null,
    firstLang: null,
    secondLang: null,
    thirdLang: null,
    firstInst: null,
    secondInst: null,
    thirdInst: null,
    biography: null,
    notes: null,
    secondaryTitle: null,
    secondaryStartDate: null,
    secondaryEndDate: null,
    secondaryPayRate: null,
    tertiaryTitle: null,
    tertiaryStartDate: null,
    tertiaryEndDate: null,
    tertiaryPayRate: null,
    quarternaryTitle: null,
    quarternaryStartDate: null,
    quarternaryEndDate: null,
    quarternaryPayRate: null,
  };
  const [J, ke] = f.useState(a.employeeDepartment_Id || ""),
    [he, gt] = f.useState(a.academicDepartment_Id || ""),
    [se, qe] = f.useState(a.level_Id || ""),
    [We, Ia] = f.useState(a.firstName || ""),
    [Ht, La] = f.useState(a.nickName || ""),
    [nn, Fa] = f.useState(a.middleName || ""),
    [ve, rn] = f.useState(a.lastName || ""),
    [an, Pa] = f.useState(a.familyName || ""),
    [Xe, Ra] = f.useState(a.email || ""),
    [Ft, Hr] = f.useState(a.phone || ""),
    [hn, Ta] = f.useState(a.street || ""),
    [$t, ka] = f.useState(a.city || ""),
    [lt, vn] = f.useState(a.state || ""),
    [it, cr] = f.useState(a.zip || ""),
    [_e, xt] = f.useState(a.dob || ""),
    [ot, On] = f.useState(a.age || ""),
    [ln, Pt] = f.useState(a.ssn || ""),
    [Vt, $r] = f.useState(a.firstLang || ""),
    [on, _a] = f.useState(a.secondLang || ""),
    [Rt, bn] = f.useState(a.thirdLang || ""),
    [qt, dr] = f.useState(a.firstInst || ""),
    [Tt, mr] = f.useState(a.secondInst || ""),
    [En, Vr] = f.useState(a.thirdInst || ""),
    [gn, qr] = f.useState(a.primaryTitle || ""),
    [kt, Un] = f.useState(a.primaryStartDate || ""),
    [sn, Ma] = f.useState(a.primaryEndDate || ""),
    [Wt, v] = f.useState(a.primaryPayRate || ""),
    [x, w] = f.useState(a.secondaryTitle || ""),
    [I, z] = f.useState(a.secondaryStartDate || ""),
    [A, q] = f.useState(a.secondaryEndDate || ""),
    [k, Q] = f.useState(a.secondaryPayRate || ""),
    [$, K] = f.useState(a.tertiaryTitle || ""),
    [Z, ne] = f.useState(a.tertiaryStartDate || ""),
    [ee, te] = f.useState(a.tertiaryEndDate || ""),
    [de, Ee] = f.useState(a.tertiaryPayRate || ""),
    [Ze, _t] = f.useState(a.quarternaryTitle || ""),
    [st, un] = f.useState(a.quarternaryStartDate || ""),
    [ut, ct] = f.useState(a.quarternaryEndDate || ""),
    [dt, zn] = f.useState(a.quarternaryPayRate || ""),
    [mt, Y] = f.useState(a.biography || ""),
    [ue, Ue] = f.useState(a.notes || ""),
    le = () => {
      let L = !1,
        Ie = !1,
        Pe = !1,
        Mt = !1,
        xn = !1;
      return (
        We
          ? ((L = !1), u({}))
          : ((L = !0), u({ firstName: "First Name 1 is required" })),
        ve
          ? ((Ie = !1), d({}))
          : ((Ie = !0), d({ lastName: "Last Name 1 is required" })),
        Ft
          ? ((Pe = !1), y({}))
          : ((Pe = !0), y({ phone: "Personal Phone is required" })),
        Vt
          ? ((Mt = !1), D({}))
          : ((Mt = !0), D({ firstLang: "First Language is required" })),
        ln ? ((xn = !1), C({})) : ((xn = !0), C({ ssn: "SSN is required" })),
        !!(L || Ie || Pe || Mt || xn)
      );
    },
    P = () => {
      let L = parseInt(J),
        Ie = parseInt(he),
        Pe = parseInt(se),
        Mt = parseInt(ot),
        xn = parseInt(it),
        Oa = parseInt(Wt),
        ba = parseInt(k),
        Wr = parseInt(de),
        Qr = parseInt(dt),
        pr = !1,
        fr = !1,
        yr = !1,
        hr = !1,
        vr = !1,
        Er = !1,
        gr = !1,
        yo = !1,
        ho = !1;
      return (
        J !== "" && (typeof L != "number" || isNaN(L))
          ? ((pr = !0),
            j({
              employeeDepartment_Id:
                "Employee Department ID must be an integer",
            }))
          : ((pr = !1), j({})),
        he !== "" && (typeof Ie != "number" || isNaN(Ie))
          ? ((fr = !0),
            _({
              academicDepartment_Id:
                "Academic Department ID must be an integer",
            }))
          : ((fr = !1), _({})),
        se !== "" && (typeof Pe != "number" || isNaN(Pe))
          ? ((yr = !0), g({ level_Id: "User Type ID must be an integer" }))
          : ((yr = !1), g({})),
        ot !== "" && (typeof Mt != "number" || isNaN(Mt))
          ? ((hr = !0), b({ age: "Age must be an integer" }))
          : ((hr = !1), b({})),
        it !== "" && (typeof xn != "number" || isNaN(xn))
          ? ((vr = !0), ae({ zip: "Zip must be an integer" }))
          : ((vr = !1), ae({})),
        Wt !== "" && (typeof Oa != "number" || isNaN(Oa))
          ? ((Er = !0),
            oe({ primaryPayRate: "Primary Pay Rate must be an integer" }))
          : ((Er = !1), oe({})),
        k !== "" && (typeof ba != "number" || isNaN(ba))
          ? ((gr = !0),
            be({ secondaryPayRate: "Secondary Pay Rate must be an integer" }))
          : ((gr = !1), be({})),
        de !== "" && (typeof Wr != "number" || isNaN(Wr))
          ? ((yo = !0),
            M({ tertiaryPayRate: "Tertiary Pay Rate must be an integer" }))
          : ((yo = !1), M({})),
        dt !== "" && (typeof Qr != "number" || isNaN(Qr))
          ? ((ho = !0),
            V({
              quarternaryPayRate: "Quarternary Pay Rate must be an integer",
            }))
          : ((ho = !1), V({})),
        !!(pr || fr || yr || hr || vr || Er || gr || yo || ho)
      );
    },
    ze = async (L) => {
      if ((L.preventDefault(), le())) {
        m({ message: "Required field must be complete - see errors above." });
        return;
      } else m({});
      if (P()) {
        m({ message: "Field(s) must be integers - see errors above." });
        return;
      } else m({});
      J && (U.employeeDepartment_Id = J),
        he && (U.academicDepartment_Id = he),
        se && (U.level_Id = se),
        We && (U.firstName = We),
        Ht && (U.nickName = Ht),
        nn && (U.middleName = nn),
        ve && (U.lastName = ve),
        an && (U.familyName = an),
        Xe && (U.email = Xe),
        Ft && (U.phone = Ft),
        hn && (U.street = hn),
        $t && (U.city = $t),
        lt && (U.state = lt),
        it && (U.zip = it),
        _e && (U.dob = _e),
        ot && (U.age = ot),
        ln && (U.ssn = ln),
        Vt && (U.firstLang = Vt),
        on && (U.secondLang = on),
        Rt && (U.thirdLang = Rt),
        qt && (U.firstInst = qt),
        Tt && (U.secondInst = Tt),
        En && (U.thirdInst = En),
        gn && (U.primaryTitle = gn),
        kt && (U.primaryStartDate = kt),
        sn && (U.primaryEndDate = sn),
        Wt && (U.primaryPayRate = Wt),
        x && (U.secondaryTitle = x),
        I && (U.secondaryStartDate = I),
        A && (U.secondaryEndDate = A),
        k && (U.secondaryPayRate = k),
        $ && (U.tertiaryTitle = $),
        Z && (U.tertiaryStartDate = Z),
        ee && (U.tertiaryEndDate = ee),
        de && (U.tertiaryPayRate = de),
        Ze && (U.quarternaryTitle = Ze),
        st && (U.quarternaryStartDate = st),
        ut && (U.quarternaryEndDate = ut),
        dt && (U.quarternaryPayRate = dt),
        mt && (U.biography = mt),
        ue && (U.notes = ue),
        (U.id = a.id);
      let Ie;
      await t(nN(U))
        .then((Pe) => (t(Tr()), (Ie = Pe.payload.id), Ie))
        .catch(async (Pe) => {
          const Mt = await Pe.json();
          Mt.errors && o(Mt.errors);
        }),
        await t($f(Ie)).then((Pe) => (n("/employees"), Pe));
    };
  return i.jsxs("main", {
    id: "EditEmployeeMain",
    children: [
      i.jsx("h1", { id: "EditEmployeeH1", children: "Edit Employee" }),
      i.jsxs("form", {
        id: "EditEmployeeForm",
        onSubmit: ze,
        children: [
          i.jsxs("section", {
            id: "EditEmployeeFormSection1",
            children: [
              i.jsx("h4", {
                id: "EditEmployeeFormSection1H4",
                children: "Personal Information",
              }),
              i.jsx("p", {
                id: "EditEmployeeFormSection1P",
                children: "Edit personal information for new employee.",
              }),
              i.jsx("h5", {
                className: "EditEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "firstNameContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeFormLabel",
                    children: [
                      "First Name 1:",
                      i.jsx("input", {
                        className: "EditEmployeeFormInput",
                        id: "firstName",
                        name: "firstName",
                        type: "text",
                        placeholder: "First Name 1",
                        value: We,
                        onChange: (L) => Ia(L.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              s.firstName &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: s.firstName,
                }),
              i.jsx("div", {
                id: "nickNameContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "First Name 2:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "nickName",
                      name: "nickName",
                      type: "text",
                      placeholder: "First Name 2",
                      value: Ht,
                      onChange: (L) => La(L.target.value),
                    }),
                  ],
                }),
              }),
              l.nickName &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.nickName,
                }),
              i.jsx("div", {
                id: "middleNameContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Middle Name:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "middleName",
                      name: "middleName",
                      type: "text",
                      placeholder: "Middle Name",
                      value: nn,
                      onChange: (L) => Fa(L.target.value),
                    }),
                  ],
                }),
              }),
              l.middleName &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.middleName,
                }),
              i.jsxs("div", {
                id: "lastNameContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeFormLabel",
                    children: [
                      "Last Name 1:",
                      i.jsx("input", {
                        className: "EditEmployeeFormInput",
                        id: "lastName",
                        name: "lastName",
                        type: "text",
                        placeholder: "Last Name 1",
                        value: ve,
                        onChange: (L) => rn(L.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              c.lastName &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: c.lastName,
                }),
              i.jsx("div", {
                id: "familyNameContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Last Name 2:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "familyName",
                      name: "familyName",
                      type: "text",
                      placeholder: "Last Name 2",
                      value: an,
                      onChange: (L) => Pa(L.target.value),
                    }),
                  ],
                }),
              }),
              l.familyName &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.familyName,
                }),
              i.jsx("div", {
                id: "emailContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Personal Email:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "email",
                      name: "email",
                      type: "text",
                      placeholder: "Personal Email",
                      value: Xe,
                      onChange: (L) => Ra(L.target.value),
                    }),
                  ],
                }),
              }),
              l.email &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.email,
                }),
              i.jsxs("div", {
                id: "phoneContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeFormLabel",
                    children: [
                      "Personal Phone:",
                      i.jsx("input", {
                        className: "EditEmployeeFormInput",
                        id: "phone",
                        name: "phone",
                        type: "text",
                        placeholder: "Personal Phone",
                        value: Ft,
                        onChange: (L) => Hr(L.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              p.phone &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: p.phone,
                }),
              i.jsx("div", {
                id: "streetContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Street:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "street",
                      name: "street",
                      type: "text",
                      placeholder: "Street",
                      value: hn,
                      onChange: (L) => Ta(L.target.value),
                    }),
                  ],
                }),
              }),
              l.street &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.street,
                }),
              i.jsx("div", {
                id: "cityContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "City:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "city",
                      name: "city",
                      type: "text",
                      placeholder: "City",
                      value: $t,
                      onChange: (L) => ka(L.target.value),
                    }),
                  ],
                }),
              }),
              l.city &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.city,
                }),
              i.jsx("div", {
                id: "stateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "State:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "state",
                      name: "state",
                      type: "text",
                      placeholder: "State",
                      value: lt,
                      onChange: (L) => vn(L.target.value),
                    }),
                  ],
                }),
              }),
              l.state &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.state,
                }),
              i.jsx("div", {
                id: "zipContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Zip:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "zip",
                      name: "zip",
                      type: "text",
                      placeholder: "Zip",
                      value: it,
                      onChange: (L) => cr(L.target.value),
                    }),
                  ],
                }),
              }),
              W.zip &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: W.zip,
                }),
              i.jsx("div", {
                id: "dobContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Date Of Birth  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "dob",
                      name: "dob",
                      type: "text",
                      placeholder: "Date Of Birth  (mm/dd/yyyy)",
                      value: _e,
                      onChange: (L) => xt(L.target.value),
                    }),
                  ],
                }),
              }),
              l.dob &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.dob,
                }),
              i.jsx("div", {
                id: "ageContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Age:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "age",
                      name: "age",
                      type: "text",
                      placeholder: "Age",
                      value: ot,
                      onChange: (L) => On(L.target.value),
                    }),
                  ],
                }),
              }),
              H.age &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: H.age,
                }),
              i.jsx("div", {
                id: "ssnContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "SSN:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "ssn",
                      name: "ssn",
                      type: "text",
                      placeholder: "SSN",
                      value: ln,
                      onChange: (L) => Pt(L.target.value),
                    }),
                  ],
                }),
              }),
              S.ssn &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: S.ssn,
                }),
            ],
          }),
          i.jsx("hr", { className: "EditEmployeeHr" }),
          i.jsxs("section", {
            id: "EditEmployeeFormSection2",
            children: [
              i.jsx("h4", {
                id: "EditEmployeeFormSection2H4",
                children: "Employment Information",
              }),
              i.jsx("p", {
                id: "EditEmployeeFormSection2P",
                children: "Edit employment information for new employee.",
              }),
              i.jsx("h5", {
                className: "EditEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsx("div", {
                id: "employeeDepartment_IdContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Employee Department ID:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "employeeDepartment_Id",
                      name: "employeeDepartment_Id",
                      type: "text",
                      placeholder: "Employee Department ID",
                      value: J,
                      onChange: (L) => ke(L.target.value),
                    }),
                  ],
                }),
              }),
              E.employeeDepartment_Id &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: E.employeeDepartment_Id,
                }),
              i.jsx("div", {
                id: "academicDepartment_IdContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Academic Department ID:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "academicDepartment_Id",
                      name: "academicDepartment_Id",
                      type: "text",
                      placeholder: "Academic Department ID",
                      value: he,
                      onChange: (L) => gt(L.target.value),
                    }),
                  ],
                }),
              }),
              T.academicDepartment_Id &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: T.academicDepartment_Id,
                }),
              i.jsx("div", {
                id: "level_IdContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "User Type ID:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "level_Id",
                      name: "level_Id",
                      type: "text",
                      placeholder: "User Type ID",
                      value: se,
                      onChange: (L) => qe(L.target.value),
                    }),
                  ],
                }),
              }),
              O.level_Id &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: O.level_Id,
                }),
              i.jsx("div", {
                id: "primaryTitleContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Primary Title:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "primaryTitle",
                      name: "primaryTitle",
                      type: "text",
                      placeholder: "Primary Title",
                      value: gn,
                      onChange: (L) => qr(L.target.value),
                    }),
                  ],
                }),
              }),
              l.primaryTitle &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.primaryTitle,
                }),
              i.jsx("div", {
                id: "primaryStartDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Primary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "primaryStartDate",
                      name: "primaryStartDate",
                      type: "text",
                      placeholder: "Primary Start Date  (mm/dd/yyyy)",
                      value: kt,
                      onChange: (L) => Un(L.target.value),
                    }),
                  ],
                }),
              }),
              l.primaryStartDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.primaryStartDate,
                }),
              i.jsx("div", {
                id: "primaryEndDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Primary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "primaryEndDate",
                      name: "primaryEndDate",
                      type: "text",
                      placeholder: "Primary End Date",
                      value: sn,
                      onChange: (L) => Ma(L.target.value),
                    }),
                  ],
                }),
              }),
              l.primaryEndDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.primaryEndDate,
                }),
              i.jsx("div", {
                id: "primaryPayRateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Primary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "primaryPayRate",
                      name: "primaryPayRate",
                      type: "text",
                      placeholder: "Primary Pay Rate $ (USD)",
                      value: Wt,
                      onChange: (L) => v(L.target.value),
                    }),
                  ],
                }),
              }),
              me.primaryPayRate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: me.primaryPayRate,
                }),
            ],
          }),
          i.jsx("hr", { className: "EditEmployeeHr" }),
          i.jsxs("section", {
            id: "EditEmployeeFormSection3",
            children: [
              i.jsx("h4", {
                id: "EditEmployeeFormSection3H4",
                children: "Biographical Information",
              }),
              i.jsx("p", {
                id: "EditEmployeeFormSection3P",
                children: "Edit biographical information for new employee.",
              }),
              i.jsx("h5", {
                className: "EditEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "firstLangContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeFormLabel",
                    children: [
                      "First Language:",
                      i.jsx("input", {
                        className: "EditEmployeeFormInput",
                        id: "firstLang",
                        name: "firstLang",
                        type: "text",
                        placeholder: "First Language",
                        value: Vt,
                        onChange: (L) => $r(L.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              N.firstLang &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: N.firstLang,
                }),
              i.jsx("div", {
                id: "secondLangContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Second Language:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondLang",
                      name: "secondLang",
                      type: "text",
                      placeholder: "Second Language",
                      value: on,
                      onChange: (L) => _a(L.target.value),
                    }),
                  ],
                }),
              }),
              l.secondLang &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.secondLang,
                }),
              i.jsx("div", {
                id: "thirdLangContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Third Language:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "thirdLang",
                      name: "thirdLang",
                      type: "text",
                      placeholder: "Third Language",
                      value: Rt,
                      onChange: (L) => bn(L.target.value),
                    }),
                  ],
                }),
              }),
              l.thirdLang &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.thirdLang,
                }),
              i.jsx("div", {
                id: "firstInstContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "First Instrument:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "firstInst",
                      name: "firstInst",
                      type: "text",
                      placeholder: "First Instrument",
                      value: qt,
                      onChange: (L) => dr(L.target.value),
                    }),
                  ],
                }),
              }),
              l.firstInst &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.firstInst,
                }),
              i.jsx("div", {
                id: "secondInstContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Second Instrument:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondInst",
                      name: "secondInst",
                      type: "text",
                      placeholder: "Second Instrument",
                      value: Tt,
                      onChange: (L) => mr(L.target.value),
                    }),
                  ],
                }),
              }),
              l.secondInst &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.secondInst,
                }),
              i.jsx("div", {
                id: "thirdInstContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Third Instrument:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "thirdInst",
                      name: "thirdInst",
                      type: "text",
                      placeholder: "Third Instrument",
                      value: En,
                      onChange: (L) => Vr(L.target.value),
                    }),
                  ],
                }),
              }),
              l.thirdInst &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.thirdInst,
                }),
              i.jsx("div", {
                id: "biographyContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Biography:",
                    i.jsx("textarea", {
                      className: "EditEmployeeFormInput",
                      id: "biography",
                      name: "biography",
                      rows: 8,
                      cols: 40,
                      type: "text-area",
                      placeholder: "Edit biography here",
                      value: mt,
                      onChange: (L) => Y(L.target.value),
                    }),
                  ],
                }),
              }),
              l.biography &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.biography,
                }),
              i.jsx("div", {
                id: "notesContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Notes:",
                    i.jsx("textarea", {
                      className: "EditEmployeeFormInput",
                      id: "notes",
                      name: "notes",
                      rows: 8,
                      cols: 40,
                      type: "text-area",
                      placeholder: "Edit notes here",
                      value: ue,
                      onChange: (L) => Ue(L.target.value),
                    }),
                  ],
                }),
              }),
              l.notes &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.notes,
                }),
            ],
          }),
          i.jsx("hr", { className: "EditEmployeeHr" }),
          i.jsxs("section", {
            id: "EditEmployeeFormSection4",
            children: [
              i.jsx("h4", {
                id: "EditEmployeeFormSection4H4",
                children: "Additional Employment Information",
              }),
              i.jsx("p", {
                id: "EditEmployeeFormSection4P",
                children:
                  "Edit additional employment information for new employee.",
              }),
              i.jsx("h5", {
                className: "EditEmployeeH5",
                children: "* indicates required field",
              }),
              i.jsx("div", {
                id: "secondaryTitleContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Secondary Title:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondaryTitle",
                      name: "secondaryTitle",
                      type: "text",
                      placeholder: "Secondary Title",
                      value: x,
                      onChange: (L) => w(L.target.value),
                    }),
                  ],
                }),
              }),
              l.secondaryTitle &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.secondaryTitle,
                }),
              i.jsx("div", {
                id: "secondaryStartDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Secondary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondaryStartDate",
                      name: "secondaryStartDate",
                      type: "text",
                      placeholder: "Secondary Start Date",
                      value: I,
                      onChange: (L) => z(L.target.value),
                    }),
                  ],
                }),
              }),
              l.secondaryStartDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.secondaryStartDate,
                }),
              i.jsx("div", {
                id: "secondaryEndDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Secondary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondaryEndDate",
                      name: "secondaryEndDate",
                      type: "text",
                      placeholder:
                        "Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)",
                      value: A,
                      onChange: (L) => q(L.target.value),
                    }),
                  ],
                }),
              }),
              l.secondaryEndDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.secondaryEndDate,
                }),
              i.jsx("div", {
                id: "secondaryPayRateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Secondary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "secondaryPayRate",
                      name: "secondaryPayRate",
                      type: "text",
                      placeholder: "Secondary Pay Rate $ (USD)",
                      value: k,
                      onChange: (L) => Q(L.target.value),
                    }),
                  ],
                }),
              }),
              Ve.secondaryPayRate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: Ve.secondaryPayRate,
                }),
              i.jsx("div", {
                id: "tertiaryTitleContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Tertiary Title:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "tertiaryTitle",
                      name: "tertiaryTitle",
                      type: "text",
                      placeholder: "Tertiary Title",
                      value: $,
                      onChange: (L) => K(L.target.value),
                    }),
                  ],
                }),
              }),
              l.tertiaryTitle &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.tertiaryTitle,
                }),
              i.jsx("div", {
                id: "tertiaryStartDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Tertiary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "tertiaryStartDate",
                      name: "tertiaryStartDate",
                      type: "text",
                      placeholder: "Tertiary Start Date  (mm/dd/yyyy)",
                      value: Z,
                      onChange: (L) => ne(L.target.value),
                    }),
                  ],
                }),
              }),
              l.tertiaryStartDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.tertiaryStartDate,
                }),
              i.jsx("div", {
                id: "tertiaryEndDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Tertiary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "tertiaryEndDate",
                      name: "tertiaryEndDate",
                      type: "text",
                      placeholder: "Tertiary End Date  (mm/dd/yyyy)",
                      value: ee,
                      onChange: (L) => te(L.target.value),
                    }),
                  ],
                }),
              }),
              l.tertiaryEndDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.tertiaryEndDate,
                }),
              i.jsx("div", {
                id: "tertiaryPayRateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Tertiary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "tertiaryPayRate",
                      name: "tertiaryPayRate",
                      type: "text",
                      placeholder: "Tertiary Pay Rate $ (USD)",
                      value: de,
                      onChange: (L) => Ee(L.target.value),
                    }),
                  ],
                }),
              }),
              at.tertiaryPayRate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: at.tertiaryPayRate,
                }),
              i.jsx("div", {
                id: "quarternaryTitleContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Quarternary Title:",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "quarternaryTitle",
                      name: "quarternaryTitle",
                      type: "text",
                      placeholder: "Quarternary Title",
                      value: Ze,
                      onChange: (L) => _t(L.target.value),
                    }),
                  ],
                }),
              }),
              l.quarternaryTitle &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.quarternaryTitle,
                }),
              i.jsx("div", {
                id: "quarternaryStartDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Quarternary Start Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "quarternaryStartDate",
                      name: "quarternaryStartDate",
                      type: "text",
                      placeholder: "Quarternary Start Date  (mm/dd/yyyy)",
                      value: st,
                      onChange: (L) => un(L.target.value),
                    }),
                  ],
                }),
              }),
              l.quarternaryStartDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.quarternaryStartDate,
                }),
              i.jsx("div", {
                id: "quarternaryEndDateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Quarternary End Date  (mm/dd/yyyy):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "quarternaryEndDate",
                      name: "quarternaryEndDate",
                      type: "text",
                      placeholder: "Quarternary End Date  (mm/dd/yyyy)",
                      value: ut,
                      onChange: (L) => ct(L.target.value),
                    }),
                  ],
                }),
              }),
              l.quarternaryEndDate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.quarternaryEndDate,
                }),
              i.jsx("div", {
                id: "quarternaryPayRateContainer",
                className: "EditEmployeeFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "EditEmployeeFormLabel",
                  children: [
                    "Quarternary Pay Rate $ (USD):",
                    i.jsx("input", {
                      className: "EditEmployeeFormInput",
                      id: "quarternaryPayRate",
                      name: "quarternaryPayRate",
                      type: "text",
                      placeholder: "Quarternary Pay Rate $ (USD)",
                      value: dt,
                      onChange: (L) => zn(L.target.value),
                    }),
                  ],
                }),
              }),
              F.quarternaryPayRate &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: F.quarternaryPayRate,
                }),
            ],
          }),
          i.jsx("hr", { className: "EditEmployeeHr" }),
          h.message &&
            i.jsx("p", {
              className: "EditEmployeeRequiredErrors",
              children: h.message,
            }),
          i.jsx("div", {
            id: "buttonContainer",
            children: i.jsx("button", {
              id: "EditEmployeeButton",
              type: "submit",
              onClick: ze,
              children: "Submit Edit",
            }),
          }),
        ],
      }),
    ],
  });
}
function y0(e) {
  const t = e.employee,
    n = ":",
    r = "- -",
    a = (l) => {
      l.preventDefault(),
        (document.body.scrollTop = 0),
        (document.documentElement.scrollTop = 0);
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "EmployeeDetailsMain",
      children: [
        i.jsxs("div", {
          id: "EmployeeDetailsForm",
          children: [
            i.jsxs("section", {
              id: "EmployeeDetailsFormSection1",
              children: [
                i.jsx("h4", {
                  id: "EmployeeDetailsFormSection1H4",
                  children: "Personal Information",
                }),
                i.jsxs("div", {
                  id: "firstNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "ID",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.id ? t.id : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "firstNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "firstName",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.firstName ? t.firstName : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "nickNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "nickName",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.nickName ? t.nickName : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "middleNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "middleName",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.middleName ? t.middleName : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "lastNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "lastName",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.lastName ? t.lastName : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "familyNameContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "familyName",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.familyName ? t.familyName : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "emailContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "email",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.email ? t.email : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "phoneContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "phone",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.phone ? t.phone : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "streetContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "street",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.street ? t.street : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "cityContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "city",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.city ? t.city : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "stateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "state",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.state ? t.state : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "zipContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "zip",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.zip ? t.zip : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "dobContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "dob",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.dob ? t.dob : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "ageContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "age",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.age ? t.age : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "ssnContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "ssn",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.ssn ? t.ssn : r,
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("hr", { className: "EmployeeDetailsHr" }),
            i.jsxs("section", {
              id: "EmployeeDetailsFormSection2",
              children: [
                i.jsx("h4", {
                  id: "EmployeeDetailsFormSection2H4",
                  children: "Employment Information",
                }),
                i.jsxs("div", {
                  id: "employeeDepartment_IdContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "employeeDepartment_Id",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.employeeDepartment_Id
                        ? t.employeeDepartment_Id
                        : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "academicDepartment_IdContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "academicDepartment_Id",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.academicDepartment_Id
                        ? t.academicDepartment_Id
                        : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "level_IdContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "level_Id",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.level_Id ? t.level_Id : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "primaryTitleContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "primaryTitle",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.primaryTitle ? t.primaryTitle : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "primaryStartDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "primaryStartDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.primaryStartDate ? t.primaryStartDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "primaryEndDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "primaryEndDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.primaryEndDate ? t.primaryEndDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "primaryPayRateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "primaryPayRate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.primaryPayRate ? t.primaryPayRate : r,
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("hr", { className: "EmployeeDetailsHr" }),
            i.jsxs("section", {
              id: "EmployeeDetailsFormSection3",
              children: [
                i.jsx("h4", {
                  id: "EmployeeDetailsFormSection3H4",
                  children: "Biographical Information",
                }),
                i.jsxs("div", {
                  id: "firstLangContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "firstLang",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.firstLang ? t.firstLang : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "secondLangContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondLang",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondLang ? t.secondLang : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "thirdLangContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "thirdLang",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.thirdLang ? t.thirdLang : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "firstInstContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "firstInst",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.firstInst ? t.firstInst : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "secondInstContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondInst",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondInst ? t.secondInst : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "thirdInstContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "thirdInst",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.thirdInst ? t.thirdInst : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "biographyContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "biography",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.biography ? t.biography : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "notesContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "notes",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.notes ? t.notes : r,
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("hr", { className: "EmployeeDetailsHr" }),
            i.jsxs("section", {
              id: "EmployeeDetailsFormSection4",
              children: [
                i.jsx("h4", {
                  id: "EmployeeDetailsFormSection4H4",
                  children: "Additional Employment Information",
                }),
                i.jsxs("div", {
                  id: "secondaryTitleContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondaryTitle",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondaryTitle ? t.secondaryTitle : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "secondaryStartDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondaryStartDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondaryStartDate ? t.secondaryStartDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "secondaryEndDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondaryEndDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondaryEndDate ? t.secondaryEndDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "secondaryPayRateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "secondaryPayRate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.secondaryPayRate ? t.secondaryPayRate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "tertiaryTitleContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "tertiaryTitle",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.tertiaryTitle ? t.tertiaryTitle : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "tertiaryStartDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "tertiaryStartDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.tertiaryStartDate ? t.tertiaryStartDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "tertiaryEndDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "tertiaryEndDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.tertiaryEndDate ? t.tertiaryEndDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "tertiaryPayRateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "tertiaryPayRate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.tertiaryPayRate ? t.tertiaryPayRate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "quarternaryTitleContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "quarternaryTitle",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.quarternaryTitle ? t.quarternaryTitle : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "quarternaryStartDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "quarternaryStartDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.quarternaryStartDate
                        ? t.quarternaryStartDate
                        : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "quarternaryEndDateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "quarternaryEndDate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.quarternaryEndDate ? t.quarternaryEndDate : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "quarternaryPayRateContainer",
                  className: "EmployeeDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDetailsFormLabel",
                      children: "quarternaryPayRate",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDetailsFormInput",
                      children: t.quarternaryPayRate ? t.quarternaryPayRate : r,
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("hr", { className: "EmployeeDetailsHr" }),
            i.jsx("div", {
              id: "EmployeeDetailsButtonContainer",
              children: i.jsx("button", {
                id: "EmployeeDetailsButton",
                type: "submit",
                onClick: a,
                children: "Back To Top",
              }),
            }),
          ],
        }),
        " ",
      ],
    }),
  });
}
function h0({ employee: e }) {
  const t = tn(),
    n = Et(),
    { closeModal: r } = fo(),
    a = (o) => (
      o.preventDefault(),
      t(rN(e))
        .then(() => t(Tr()))
        .then(() => n("/employees"))
        .then(() => r())
    ),
    l = (o) => {
      o.preventDefault(), r();
    };
  return i.jsxs("main", {
    id: "EmployeeDeleteModalMain",
    children: [
      i.jsx("h1", { id: "EmployeeDeleteModalH1", children: "Confirm Delete" }),
      i.jsx("p", {
        id: "EmployeeDeleteModalP",
        children: "Are you sure you want to remove this employee?",
      }),
      i.jsxs("div", {
        id: "EmployeeDeleteModalButtonContainer",
        children: [
          i.jsx("button", {
            id: "YesEmployeeDeleteButton",
            name: "YesEmployeeDeleteButton",
            type: "button",
            onClick: a,
            children: "Yes (Delete Employee)",
          }),
          i.jsx("button", {
            id: "NoKeepEmployeeButton",
            name: "NoKeepEmployeeButton",
            type: "button",
            onClick: l,
            children: "No (Keep Employee)",
          }),
        ],
      }),
    ],
  });
}
function v0({
  modalComponent: e,
  buttonText: t,
  onButtonClick: n,
  onModalClose: r,
}) {
  const { setModalContent: a, setOnModalClose: l } = fo(),
    o = () => {
      r && l(r), a(e), typeof n == "function" && n();
    };
  return i.jsx("button", {
    onClick: o,
    className: "EmployeeDeleteModalButton",
    children: t,
  });
}
const Ya = "EmployeeDetailsPage";
function E0() {
  let e, t, n, r;
  (r = df()),
    (n = r.employeeId),
    (t = kn((l) => {
      var o;
      return (o = l == null ? void 0 : l.employees) == null
        ? void 0
        : o.employees;
    })),
    (e = t.find((l) => l.id === +n));
  const a = () => {};
  return e
    ? i.jsxs(i.Fragment, {
        children: [
          i.jsx("h1", { id: `${Ya}H1`, children: "Employee Details" }),
          i.jsxs("main", {
            id: `${Ya}Main`,
            children: [
              i.jsxs("nav", {
                id: `${Ya}Nav`,
                children: [
                  i.jsx(Pr, {
                    to: "/editEmployeeForm",
                    state: { employeeToEdit: e },
                    children: i.jsx("button", {
                      id: `${Ya}EditButton`,
                      onClick: a,
                      children: "Edit Employee",
                    }),
                  }),
                  i.jsx(v0, {
                    id: `${Ya}DeleteButton`,
                    buttonText: "Delete Employee",
                    modalComponent: i.jsx(h0, { employee: e }),
                  }),
                ],
              }),
              i.jsx("div", { children: i.jsx(y0, { employee: e }) }),
            ],
          }),
        ],
      })
    : null;
}
function g0({ employeeDepartment: e }) {
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "EmployeeDepartmentsListIndexContainer",
      children: [
        i.jsx("div", {
          className: "EmployeeDepartmentsListIndexItemContainerID",
          children: i.jsxs("p", {
            className: "EmployeeDepartmentsListIndexItemP",
            children: [" ", e.id ? e.id : "-"],
          }),
        }),
        i.jsx("div", {
          className: "EmployeeDepartmentsListIndexItemContainerName",
          children: i.jsx(Pr, {
            to: `/employeeDepartments/${e.id}`,
            state: { employeeDepartment: e },
            className: "EmployeeDepartmentsListIndexItemP",
            children: e.name,
          }),
        }),
        i.jsx("div", {
          className: "EmployeeDepartmentsListIndexItemContainerImageURL",
          children: i.jsx("p", {
            className: "EmployeeDepartmentsListIndexItemP",
            children: e.imageURL ? e.imageURL : "-",
          }),
        }),
      ],
    }),
  });
}
function x0({ employeesPerPage: e, totalPages: t, paginate: n }) {
  let r = [];
  for (let a = 1; a < Math.ceil(t / e); a++) r.push(a);
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className: "pagination",
      children: r.map((a, l) =>
        i.jsx("a", { onClick: () => n(a), href: "#", children: a }, l)
      ),
    }),
  });
}
function N0() {
  return i.jsx(i.Fragment, {
    children: i.jsxs("div", {
      className: "EmployeeDepartmentsListItemHeaderContainer",
      children: [
        i.jsx("div", {
          className: "EmployeeDepartmentsListItemHeaderItemContainerID",
          children: i.jsx("h4", {
            className: "EmployeeDepartmentsListItemHeaderItemH4",
            children: "ID",
          }),
        }),
        i.jsx("div", {
          className: "EmployeeDepartmentsListItemHeaderItemContainerName",
          children: i.jsx("h4", {
            className: "EmployeeDepartmentsListItemHeaderItemH4",
            children: "Name",
          }),
        }),
        i.jsx("div", {
          className: "EmployeeDepartmentsListItemHeaderItemContainerImageURL",
          children: i.jsx("h4", {
            className: "EmployeeDepartmentsListItemHeaderItemH4",
            children: "ImageURL",
          }),
        }),
      ],
    }),
  });
}
function D0() {
  let e = kn((c) => {
    var d;
    return (d = c == null ? void 0 : c.employeeDepartments) == null
      ? void 0
      : d.employeeDepartments;
  });
  const [t, n] = f.useState(1),
    [r, a] = f.useState(30);
  a(30);
  const l = t * r,
    o = l - r;
  let s;
  (e !== void 0 && e.length !== 0) ||
    (e = [{ test1: "test1" }, { test2: "test" }]),
    (s = e.slice(o, l));
  const u = (c) => n(c);
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      className: "EmployeeDepartmentsListMain",
      children: [
        i.jsx(N0, {}),
        i.jsxs("div", {
          className: "EmployeeDepartmentsListContainer",
          children: [
            s.map((c, d) =>
              i.jsx(
                g0,
                {
                  employeeDepartment: c,
                  totalPages: e.length,
                  employeeDepartmentsPerPage: r,
                },
                d
              )
            ),
            i.jsx(x0, {
              employeeDepartmentsPerPage: r,
              totalPages: e.length,
              paginate: u,
            }),
          ],
        }),
      ],
    }),
  });
}
function S0() {
  const e = Et(),
    t = (n) => {
      n.preventDefault(), e("/createNewEmployeeDepartmentForm");
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("h1", {
        id: "EmployeeDepartmentsH1",
        children: "Employee Departments",
      }),
      i.jsxs("main", {
        id: "EmployeeDepartmentsMain",
        children: [
          i.jsx("nav", {
            id: "EmployeeDepartmentsNav",
            children: i.jsx("button", {
              id: "EmployeeDepartmentsCreateButton",
              onClick: t,
              children: "Create Employee Department",
            }),
          }),
          i.jsx(D0, {}),
        ],
      }),
    ],
  });
}
function C0() {
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      children: i.jsx("div", { children: i.jsx(S0, {}) }),
    }),
  });
}
function w0(e) {
  const t = e.employeeDepartment,
    n = ":",
    r = "- -",
    a = (l) => {
      l.preventDefault(),
        (document.body.scrollTop = 0),
        (document.documentElement.scrollTop = 0);
    };
  return i.jsx(i.Fragment, {
    children: i.jsxs("main", {
      id: "EmployeeDepartmentDetailsMain",
      children: [
        i.jsxs("div", {
          id: "EmployeeDepartmentDetailsForm",
          children: [
            i.jsxs("section", {
              id: "EmployeeDepartmentDetailsFormSection1",
              children: [
                i.jsx("h4", {
                  id: "EmployeeDepartmentDetailsFormSection1H4",
                  children: "Personal Information",
                }),
                i.jsxs("div", {
                  id: "nameContainer",
                  className: "EmployeeDepartmentDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormLabel",
                      children: "ID",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInput",
                      children: t.id ? t.id : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "nameContainer",
                  className: "EmployeeDepartmentDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormLabel",
                      children: "name",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInput",
                      children: t.name ? t.name : r,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  id: "imageURLContainer",
                  className: "EmployeeDepartmentDetailsFormLabelInputContainer",
                  children: [
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormLabel",
                      children: "imageURL",
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInfoDivider",
                      children: n,
                    }),
                    i.jsx("div", {
                      className: "EmployeeDepartmentDetailsFormInput",
                      children: t.imageURL ? t.imageURL : r,
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("hr", { className: "EmployeeDepartmentDetailsHr" }),
            i.jsx("div", {
              id: "EmployeeDepartmentDetailsButtonContainer",
              children: i.jsx("button", {
                id: "EmployeeDepartmentDetailsButton",
                type: "submit",
                onClick: a,
                children: "Back To Top",
              }),
            }),
          ],
        }),
        " ",
      ],
    }),
  });
}
function j0({ employee: e }) {
  const t = tn(),
    n = Et(),
    { closeModal: r } = fo(),
    a = (o) => (
      o.preventDefault(),
      t(Fx(e))
        .then(() => t(Rr()))
        .then(() => n("/employees"))
        .then(() => r())
    ),
    l = (o) => {
      o.preventDefault(), r();
    };
  return i.jsxs("main", {
    id: "EmployeeDepartmentDeleteModalMain",
    children: [
      i.jsx("h1", {
        id: "EmployeeDepartmentDeleteModalH1",
        children: "Confirm Delete",
      }),
      i.jsx("p", {
        id: "EmployeeDepartmentDeleteModalP",
        children: "Are you sure you want to remove this employee?",
      }),
      i.jsxs("div", {
        id: "EmployeeDepartmentDeleteModalButtonContainer",
        children: [
          i.jsx("button", {
            id: "YesEmployeeDepartmentDeleteButton",
            name: "YesEmployeeDepartmentDeleteButton",
            type: "button",
            onClick: a,
            children: "Yes (Delete Employee Department)",
          }),
          i.jsx("button", {
            id: "NoKeepEmployeeDepartmentButton",
            name: "NoKeepEmployeeDepartmentButton",
            type: "button",
            onClick: l,
            children: "No (Keep Employee Department)",
          }),
        ],
      }),
    ],
  });
}
function I0({
  modalComponent: e,
  buttonText: t,
  onButtonClick: n,
  onModalClose: r,
}) {
  const { setModalContent: a, setOnModalClose: l } = fo(),
    o = () => {
      r && l(r), a(e), typeof n == "function" && n();
    };
  return i.jsx("button", {
    onClick: o,
    className: "EmployeeDepartmentDeleteModalButton",
    children: t,
  });
}
const Ga = "EmployeeDepartmentDetailsPage";
function L0() {
  let e, t, n, r;
  (r = df()),
    (n = r.employeeDepartmentId),
    (t = kn((l) => {
      var o;
      return (o = l == null ? void 0 : l.employeeDepartments) == null
        ? void 0
        : o.employeeDepartments;
    })),
    (e = t.find((l) => l.id === +n));
  const a = () => {};
  return e
    ? i.jsxs(i.Fragment, {
        children: [
          i.jsx("h1", {
            id: `${Ga}H1`,
            children: "Employee Department Details",
          }),
          i.jsxs("main", {
            id: `${Ga}Main`,
            children: [
              i.jsxs("nav", {
                id: `${Ga}Nav`,
                children: [
                  i.jsx(Pr, {
                    to: "/editEmployeeDepartmentForm",
                    state: { employeeDepartmentToEdit: e },
                    children: i.jsx("button", {
                      id: `${Ga}EditButton`,
                      onClick: a,
                      children: "Edit Employee Department",
                    }),
                  }),
                  i.jsx(I0, {
                    id: `${Ga}DeleteButton`,
                    buttonText: "Delete Employee Department",
                    modalComponent: i.jsx(j0, { employeeDepartment: e }),
                  }),
                ],
              }),
              i.jsx("div", { children: i.jsx(w0, { employeeDepartment: e }) }),
            ],
          }),
        ],
      })
    : null;
}
function F0() {
  const e = "*",
    t = tn(),
    n = Et(),
    [r, a] = f.useState({}),
    [l, o] = f.useState({}),
    [s, u] = f.useState({});
  let c = { name: null, imageURL: null };
  const [d, p] = f.useState(""),
    [y, N] = f.useState(""),
    D = () => {
      let C = !1;
      return (
        d ? ((C = !1), o({})) : ((C = !0), o({ name: "Name is required" })), !!C
      );
    },
    S = async (C) => {
      if ((C.preventDefault(), D())) {
        u({ message: "Required field must be complete - see errors above." });
        return;
      } else u({});
      d && (c.name = d), y && (c.imageURL = y);
      let h;
      await t(Ix(c))
        .then((m) => m)
        .then((m) => ((h = m.payload[0].id), t(Rr()), h))
        .catch(async (m) => {
          const E = await m.json();
          E.errors && a(E.errors);
        }),
        await t(Rr())
          .then((m) => (t(Tf(h)), m))
          .then((m) => (t(Rr()), m))
          .then((m) => (n(`/employees/${h}`), m));
    };
  return i.jsxs("main", {
    id: "CreateNewEmployeeDepartmentMain",
    children: [
      i.jsx("h1", {
        id: "CreateNewEmployeeDepartmentH1",
        children: "Create New Employee Department",
      }),
      i.jsxs("form", {
        id: "CreateNewEmployeeDepartmentForm",
        onSubmit: S,
        children: [
          i.jsxs("section", {
            id: "CreateNewEmployeeDepartmentFormSection1",
            children: [
              i.jsx("h4", {
                id: "CreateNewEmployeeDepartmentFormSection1H4",
                children: "Information",
              }),
              i.jsx("p", {
                id: "CreateNewEmployeeDepartmentFormSection1P",
                children: "Enter information for new employee department.",
              }),
              i.jsx("h5", {
                className: "CreateNewEmployeeDepartmentH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "nameContainer",
                className: "CreateNewEmployeeDepartmentFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "CreateNewEmployeeDepartmentFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "CreateNewEmployeeDepartmentFormLabel",
                    children: [
                      "Name:",
                      i.jsx("input", {
                        className: "CreateNewEmployeeDepartmentFormInput",
                        id: "name",
                        name: "name",
                        type: "text",
                        placeholder: "Name",
                        value: d,
                        onChange: (C) => p(C.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.name &&
                i.jsx("p", {
                  className: "CreateNewEmployeeDepartmentErrors",
                  children: l.name,
                }),
              i.jsx("div", {
                id: "imageURLContainer",
                className: "CreateNewEmployeeDepartmentFormLabelInputContainer",
                children: i.jsxs("label", {
                  className: "CreateNewEmployeeDepartmentFormLabel",
                  children: [
                    "Image URL:",
                    i.jsx("input", {
                      className: "CreateNewEmployeeDepartmentFormInput",
                      id: "imageURL",
                      name: "imageURL",
                      type: "text",
                      placeholder: "Image URL",
                      value: y,
                      onChange: (C) => N(C.target.value),
                    }),
                  ],
                }),
              }),
              r.imageURL &&
                i.jsx("p", {
                  className: "CreateNewEmployeeDepartmentErrors",
                  children: r.imageURL,
                }),
            ],
          }),
          i.jsx("hr", { className: "CreateNewEmployeeDepartmentHr" }),
          s.message &&
            i.jsx("p", {
              className: "CreateNewEmployeeDepartmentRequiredErrors",
              children: s.message,
            }),
          i.jsx("div", {
            id: "buttonContainer",
            children: i.jsx("button", {
              id: "CreateNewEmployeeDepartmentButton",
              type: "submit",
              onClick: S,
              children: "Create Employee Department",
            }),
          }),
        ],
      }),
    ],
  });
}
function P0() {
  const e = "*",
    t = tn(),
    n = Et(),
    r = Br(),
    { employeeDepartmentToEdit: a } = r.state,
    [l, o] = f.useState({}),
    [s, u] = f.useState({});
  let c = { name: null, imageURL: null };
  const [d, p] = f.useState(a.name || ""),
    [y, N] = f.useState(a.imageURL || ""),
    D = () => {
      let C = !1;
      return (
        d ? ((C = !1), o({})) : ((C = !0), o({ name: "Name is required" })), !!C
      );
    },
    S = async (C) => {
      C.preventDefault(),
        D()
          ? u({
              message: "Required field must be complete - see errors above.",
            })
          : u({}),
        d && (c.name = d),
        y && (c.imageURL = y),
        (c.id = a.id);
      let h;
      await t(Lx(c))
        .then((m) => (t(Rr()), (h = m.payload.id), h))
        .catch(async (m) => {
          await m.json();
        }),
        await t(Tf(h)).then((m) => (n("/departments"), m));
    };
  return i.jsxs("main", {
    id: "EditEmployeeDepartmentMain",
    children: [
      i.jsx("h1", {
        id: "EditEmployeeDepartmentH1",
        children: "Edit Employee Department",
      }),
      i.jsxs("form", {
        id: "EditEmployeeDepartmentForm",
        onSubmit: S,
        children: [
          i.jsxs("section", {
            id: "EditEmployeeDepartmentFormSection1",
            children: [
              i.jsx("h4", {
                id: "EditEmployeeDepartmentFormSection1H4",
                children: "Personal Information",
              }),
              i.jsx("p", {
                id: "EditEmployeeDepartmentFormSection1P",
                children: "Edit personal information for new employee.",
              }),
              i.jsx("h5", {
                className: "EditEmployeeDepartmentH5",
                children: "* indicates required field",
              }),
              i.jsxs("div", {
                id: "nameContainer",
                className: "EditEmployeeDepartmentFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeDepartmentFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeDepartmentFormLabel",
                    children: [
                      "Name:",
                      i.jsx("input", {
                        className: "EditEmployeeDepartmentFormInput",
                        id: "name",
                        name: "name",
                        type: "text",
                        placeholder: "Name",
                        value: d,
                        onChange: (C) => p(C.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
              l.name &&
                i.jsx("p", {
                  className: "EditEmployeeErrors",
                  children: l.name,
                }),
              i.jsxs("div", {
                id: "imageURLContainer",
                className: "EditEmployeeDepartmentFormLabelInputContainer",
                children: [
                  i.jsx("p", {
                    className: "EditEmployeeDepartmentFormRequired",
                    children: e,
                  }),
                  i.jsxs("label", {
                    className: "EditEmployeeDepartmentFormLabel",
                    children: [
                      "ImageURL:",
                      i.jsx("input", {
                        className: "EditEmployeeDepartmentFormInput",
                        id: "imageURL",
                        name: "imageURL",
                        type: "text",
                        placeholder: "ImageURL",
                        value: y,
                        onChange: (C) => N(C.target.value),
                        required: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i.jsx("hr", { className: "EditEmployeeHr" }),
          s.message &&
            i.jsx("p", {
              className: "EditEmployeeDepartmentRequiredErrors",
              children: s.message,
            }),
          i.jsx("div", {
            id: "buttonContainer",
            children: i.jsx("button", {
              id: "EditEmployeeDepartmentButton",
              type: "submit",
              onClick: S,
              children: "Submit Edit",
            }),
          }),
        ],
      }),
    ],
  });
}
const ai = "CatchAll";
function R0() {
  return i.jsx(i.Fragment, {
    children: i.jsx("main", {
      className: `${ai}Main`,
      children: i.jsxs("div", {
        className: `${ai}Div`,
        children: [
          i.jsx("h1", { className: `${ai}H1`, children: "404 Page not found" }),
          i.jsx("h3", {
            className: `${ai}H3`,
            children:
              "Not all those who wander are lost, but it seems you may have taken a wrong turn.",
          }),
        ],
      }),
    }),
  });
}
const T0 = yg([
  { path: "/signupform", element: i.jsx(Jf, {}) },
  {
    element: i.jsx(JN, {}),
    children: [
      { path: "/", element: i.jsx(t0, {}) },
      { path: "/profile", element: i.jsx(a0, {}) },
      { path: "/resources", element: i.jsx(l0, {}) },
      { path: "/departments", element: i.jsx(C0, {}) },
      {
        path: "/employeeDepartments/:employeeDepartmentId",
        element: i.jsx(L0, {}),
      },
      { path: "/createNewEmployeeDepartmentForm/", element: i.jsx(F0, {}) },
      { path: "/editEmployeeDepartmentForm/", element: i.jsx(P0, {}) },
      { path: "/teachers", element: i.jsx(i0, {}) },
      { path: "/students", element: i.jsx(o0, {}) },
      { path: "/employees", element: i.jsx(m0, {}) },
      { path: "/employees/:employeeId", element: i.jsx(E0, {}) },
      { path: "/createNewEmployeeForm/", element: i.jsx(p0, {}) },
      { path: "/editEmployeeForm/", element: i.jsx(f0, {}) },
      { path: "*", element: i.jsx(R0, {}) },
    ],
  },
]);
const k0 = CN();
Yo.createRoot(document.getElementById("root")).render(
  i.jsx(pn.StrictMode, {
    children: i.jsx(Wv, { store: k0, children: i.jsx(Sg, { router: T0 }) }),
  })
);
