(() => {
  "use strict";
  new Set();
  const t =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;
  class e {
    _listeners = "WeakMap" in t ? new WeakMap() : void 0;
    _observer = void 0;
    options;
    constructor(t) {
      this.options = t;
    }
    observe(t, e) {
      return (
        this._listeners.set(t, e),
        this._getObserver().observe(t, this.options),
        () => {
          this._listeners.delete(t), this._observer.unobserve(t);
        }
      );
    }
    _getObserver() {
      return (
        this._observer ??
        (this._observer = new ResizeObserver((t) => {
          for (const n of t)
            e.entries.set(n.target, n), this._listeners.get(n.target)?.(n);
        }))
      );
    }
  }
  e.entries = "WeakMap" in t ? new WeakMap() : void 0;
  let n,
    o = !1;
  function s(t, e) {
    t.appendChild(e);
  }
  function r(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function i(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function c(t) {
    return document.createElement(t);
  }
  function $() {
    return (t = " "), document.createTextNode(t);
    var t;
  }
  function u(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function l() {}
  function a(t) {
    return t();
  }
  function d() {
    return Object.create(null);
  }
  function f(t) {
    t.forEach(a);
  }
  function h(t) {
    return "function" == typeof t;
  }
  function p(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function m(t, e, n, o) {
    return t[1] && o
      ? (function (t, e) {
          for (const n in e) t[n] = e[n];
          return t;
        })(n.ctx.slice(), t[1](o(e)))
      : n.ctx;
  }
  function g(t) {
    n = t;
  }
  new Map();
  const b = [],
    _ = [];
  let y = [];
  const v = [],
    w = Promise.resolve();
  let x = !1;
  function k(t) {
    y.push(t);
  }
  const E = new Set();
  let O = 0;
  function C() {
    if (0 !== O) return;
    const t = n;
    do {
      try {
        for (; O < b.length; ) {
          const t = b[O];
          O++, g(t), M(t.$$);
        }
      } catch (t) {
        throw ((b.length = 0), (O = 0), t);
      }
      for (g(null), b.length = 0, O = 0; _.length; ) _.pop()();
      for (let t = 0; t < y.length; t += 1) {
        const e = y[t];
        E.has(e) || (E.add(e), e());
      }
      y.length = 0;
    } while (b.length);
    for (; v.length; ) v.pop()();
    (x = !1), E.clear(), g(t);
  }
  function M(t) {
    if (null !== t.fragment) {
      t.update(), f(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(k);
    }
  }
  const N = new Set();
  let A, S;
  function L(t, e) {
    t && t.i && (N.delete(t), t.i(e));
  }
  function j(t, e, n, o) {
    if (t && t.o) {
      if (N.has(t)) return;
      N.add(t),
        A.c.push(() => {
          N.delete(t), o && (n && t.d(1), o());
        }),
        t.o(e);
    } else o && o();
  }
  function T(t) {
    t && t.c();
  }
  function B(t, e, n) {
    const { fragment: o, after_update: s } = t.$$;
    o && o.m(e, n),
      k(() => {
        const e = t.$$.on_mount.map(a).filter(h);
        t.$$.on_destroy ? t.$$.on_destroy.push(...e) : f(e),
          (t.$$.on_mount = []);
      }),
      s.forEach(k);
  }
  function P(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      ((function (t) {
        const e = [],
          n = [];
        y.forEach((o) => (-1 === t.indexOf(o) ? e.push(o) : n.push(o))),
          n.forEach((t) => t()),
          (y = e);
      })(n.after_update),
      f(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function q(t, e, s, r, c, $, u = null, a = [-1]) {
    const h = n;
    g(t);
    const p = (t.$$ = {
      fragment: null,
      ctx: [],
      props: $,
      update: l,
      not_equal: c,
      bound: d(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (h ? h.$$.context : [])),
      callbacks: d(),
      dirty: a,
      skip_bound: !1,
      root: e.target || h.$$.root,
    });
    u && u(p.root);
    let m = !1;
    if (
      ((p.ctx = s
        ? s(t, e.props || {}, (e, n, ...o) => {
            const s = o.length ? o[0] : n;
            return (
              p.ctx &&
                c(p.ctx[e], (p.ctx[e] = s)) &&
                (!p.skip_bound && p.bound[e] && p.bound[e](s),
                m &&
                  (function (t, e) {
                    -1 === t.$$.dirty[0] &&
                      (b.push(t),
                      x || ((x = !0), w.then(C)),
                      t.$$.dirty.fill(0)),
                      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
                  })(t, e)),
              n
            );
          })
        : []),
      p.update(),
      (m = !0),
      f(p.before_update),
      (p.fragment = !!r && r(p.ctx)),
      e.target)
    ) {
      if (e.hydrate) {
        o = !0;
        const t = ((_ = e.target), Array.from(_.childNodes));
        p.fragment && p.fragment.l(t), t.forEach(i);
      } else p.fragment && p.fragment.c();
      e.intro && L(t.$$.fragment), B(t, e.target, e.anchor), (o = !1), C();
    }
    var _;
    g(h);
  }
  function R(t, e, n, o) {
    const s = n[t]?.type;
    if (
      ((e = "Boolean" === s && "boolean" != typeof e ? null != e : e),
      !o || !n[t])
    )
      return e;
    if ("toAttribute" === o)
      switch (s) {
        case "Object":
        case "Array":
          return null == e ? null : JSON.stringify(e);
        case "Boolean":
          return e ? "" : null;
        case "Number":
          return null == e ? null : e;
        default:
          return e;
      }
    else
      switch (s) {
        case "Object":
        case "Array":
          return e && JSON.parse(e);
        case "Boolean":
        default:
          return e;
        case "Number":
          return null != e ? +e : e;
      }
  }
  new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
  ]),
    "function" == typeof HTMLElement &&
      (S = class extends HTMLElement {
        $$ctor;
        $$s;
        $$c;
        $$cn = !1;
        $$d = {};
        $$r = !1;
        $$p_d = {};
        $$l = {};
        $$l_u = new Map();
        constructor(t, e, n) {
          super(),
            (this.$$ctor = t),
            (this.$$s = e),
            n && this.attachShadow({ mode: "open" });
        }
        addEventListener(t, e, n) {
          if (
            ((this.$$l[t] = this.$$l[t] || []), this.$$l[t].push(e), this.$$c)
          ) {
            const n = this.$$c.$on(t, e);
            this.$$l_u.set(e, n);
          }
          super.addEventListener(t, e, n);
        }
        removeEventListener(t, e, n) {
          if ((super.removeEventListener(t, e, n), this.$$c)) {
            const t = this.$$l_u.get(e);
            t && (t(), this.$$l_u.delete(e));
          }
        }
        async connectedCallback() {
          if (((this.$$cn = !0), !this.$$c)) {
            if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
            function t(t) {
              return () => {
                let e;
                return {
                  c: function () {
                    (e = c("slot")), "default" !== t && u(e, "name", t);
                  },
                  m: function (t, n) {
                    r(t, e, n);
                  },
                  d: function (t) {
                    t && i(e);
                  },
                };
              };
            }
            const e = {},
              n = (function (t) {
                const e = {};
                return (
                  t.childNodes.forEach((t) => {
                    e[t.slot || "default"] = !0;
                  }),
                  e
                );
              })(this);
            for (const s of this.$$s) s in n && (e[s] = [t(s)]);
            for (const $ of this.attributes) {
              const l = this.$$g_p($.name);
              l in this.$$d ||
                (this.$$d[l] = R(l, $.value, this.$$p_d, "toProp"));
            }
            for (const a in this.$$p_d)
              a in this.$$d ||
                void 0 === this[a] ||
                ((this.$$d[a] = this[a]), delete this[a]);
            this.$$c = new this.$$ctor({
              target: this.shadowRoot || this,
              props: { ...this.$$d, $$slots: e, $$scope: { ctx: [] } },
            });
            const o = () => {
              this.$$r = !0;
              for (const t in this.$$p_d)
                if (
                  ((this.$$d[t] = this.$$c.$$.ctx[this.$$c.$$.props[t]]),
                  this.$$p_d[t].reflect)
                ) {
                  const e = R(t, this.$$d[t], this.$$p_d, "toAttribute");
                  null == e
                    ? this.removeAttribute(this.$$p_d[t].attribute || t)
                    : this.setAttribute(this.$$p_d[t].attribute || t, e);
                }
              this.$$r = !1;
            };
            this.$$c.$$.after_update.push(o), o();
            for (const d in this.$$l)
              for (const f of this.$$l[d]) {
                const h = this.$$c.$on(d, f);
                this.$$l_u.set(f, h);
              }
            this.$$l = {};
          }
        }
        attributeChangedCallback(t, e, n) {
          this.$$r ||
            ((t = this.$$g_p(t)),
            (this.$$d[t] = R(t, n, this.$$p_d, "toProp")),
            this.$$c?.$set({ [t]: this.$$d[t] }));
        }
        disconnectedCallback() {
          (this.$$cn = !1),
            Promise.resolve().then(() => {
              this.$$cn || (this.$$c.$destroy(), (this.$$c = void 0));
            });
        }
        $$g_p(t) {
          return (
            Object.keys(this.$$p_d).find(
              (e) =>
                this.$$p_d[e].attribute === t ||
                (!this.$$p_d[e].attribute && e.toLowerCase() === t)
            ) || t
          );
        }
      });
  class W {
    $$ = void 0;
    $$set = void 0;
    $destroy() {
      P(this, 1), (this.$destroy = l);
    }
    $on(t, e) {
      if (!h(e)) return l;
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function H(t) {
    let e;
    return {
      c() {
        (e = c("div")), (e.textContent = "Header"), u(e, "class", "header");
      },
      m(t, n) {
        r(t, e, n);
      },
      p: l,
      i: l,
      o: l,
      d(t) {
        t && i(e);
      },
    };
  }
  "undefined" != typeof window &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add("4");
  const D = class extends W {
    constructor(t) {
      super(), q(this, t, null, H, p, {});
    }
  };
  function J(t) {
    let e, n, o;
    const $ = t[1].default,
      l = (function (t, e, n, o) {
        if (t) {
          const o = m(t, e, n, null);
          return t[0](o);
        }
      })($, t, t[0]);
    return {
      c() {
        (e = c("div")),
          (n = c("div")),
          l && l.c(),
          u(n, "class", "Main-container"),
          u(e, "class", "main");
      },
      m(t, i) {
        r(t, e, i), s(e, n), l && l.m(n, null), (o = !0);
      },
      p(t, [e]) {
        l &&
          l.p &&
          (!o || 1 & e) &&
          (function (t, e, n, o, s, r) {
            if (s) {
              const i = m(e, n, o, r);
              t.p(i, s);
            }
          })(
            l,
            $,
            t,
            t[0],
            o
              ? (function (t, e, n, o) {
                  if (t[2] && o) {
                    const s = t[2](o(n));
                    if (void 0 === e.dirty) return s;
                    if ("object" == typeof s) {
                      const t = [],
                        n = Math.max(e.dirty.length, s.length);
                      for (let o = 0; o < n; o += 1) t[o] = e.dirty[o] | s[o];
                      return t;
                    }
                    return e.dirty | s;
                  }
                  return e.dirty;
                })($, t[0], e, null)
              : (function (t) {
                  if (t.ctx.length > 32) {
                    const e = [],
                      n = t.ctx.length / 32;
                    for (let t = 0; t < n; t++) e[t] = -1;
                    return e;
                  }
                  return -1;
                })(t[0]),
            null
          );
      },
      i(t) {
        o || (L(l, t), (o = !0));
      },
      o(t) {
        j(l, t), (o = !1);
      },
      d(t) {
        t && i(e), l && l.d(t);
      },
    };
  }
  function z(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e;
    return (
      (t.$$set = (t) => {
        "$$scope" in t && n(0, (s = t.$$scope));
      }),
      [s, o]
    );
  }
  const I = class extends W {
    constructor(t) {
      super(), q(this, t, z, J, p, {});
    }
  };
  function F(t) {
    let e;
    return {
      c() {
        (e = c("div")), (e.textContent = "TimeLine"), u(e, "class", "TimeLine");
      },
      m(t, n) {
        r(t, e, n);
      },
      p: l,
      i: l,
      o: l,
      d(t) {
        t && i(e);
      },
    };
  }
  const G = class extends W {
    constructor(t) {
      super(), q(this, t, null, F, p, {});
    }
  };
  function K(t) {
    let e;
    return {
      c() {
        (e = c("div")), (e.textContent = "Sidebar"), u(e, "class", "sidebar");
      },
      m(t, n) {
        r(t, e, n);
      },
      p: l,
      i: l,
      o: l,
      d(t) {
        t && i(e);
      },
    };
  }
  const Q = class extends W {
    constructor(t) {
      super(), q(this, t, null, K, p, {});
    }
  };
  function U(t) {
    !(function (t, e, n) {
      const o = (function (t) {
        if (!t) return document;
        const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
        return e && e.host ? e : t.ownerDocument;
      })(t);
      if (!o.getElementById(e)) {
        const t = c("style");
        (t.id = e),
          (t.textContent = "body{background-color:#676778;color:white}"),
          (function (t, e) {
            s(t.head || t, e), e.sheet;
          })(o, t);
      }
    })(t, "svelte-11hp6p");
  }
  function V(t) {
    let e, n, o, s;
    return (
      (e = new G({})),
      (o = new Q({})),
      {
        c() {
          T(e.$$.fragment), (n = $()), T(o.$$.fragment);
        },
        m(t, i) {
          B(e, t, i), r(t, n, i), B(o, t, i), (s = !0);
        },
        i(t) {
          s || (L(e.$$.fragment, t), L(o.$$.fragment, t), (s = !0));
        },
        o(t) {
          j(e.$$.fragment, t), j(o.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && i(n), P(e, t), P(o, t);
        },
      }
    );
  }
  function X(t) {
    let e, n, o, s;
    return (
      (e = new D({})),
      (o = new I({
        props: { $$slots: { default: [V] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          T(e.$$.fragment), (n = $()), T(o.$$.fragment);
        },
        m(t, i) {
          B(e, t, i), r(t, n, i), B(o, t, i), (s = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.$$scope = { dirty: e, ctx: t }), o.$set(n);
        },
        i(t) {
          s || (L(e.$$.fragment, t), L(o.$$.fragment, t), (s = !0));
        },
        o(t) {
          j(e.$$.fragment, t), j(o.$$.fragment, t), (s = !1);
        },
        d(t) {
          t && i(n), P(e, t), P(o, t);
        },
      }
    );
  }
  new (class extends W {
    constructor(t) {
      super(), q(this, t, null, X, p, {}, U);
    }
  })({ target: document.querySelector("main") });
})();
